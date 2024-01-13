import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackNavigator';
import {Text, TouchableOpacity, View} from 'react-native';
import InitialPage from '../pages/InitialPage/InitialPage';
import OtherPage from '../pages/OtherPage/OtherPage';
import {SafeAreaView} from 'react-native-safe-area-context';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={TabBar}
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
      }}>
      <BottomTab.Screen
        name="BottomMainPage"
        component={InitialPage}
        options={{
          tabBarLabel: 'InitialPage',
        }}
      />
      <BottomTab.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          tabBarLabel: 'OtherPage',
          tabBarBadge: 3,
        }}
      />
    </BottomTab.Navigator>
  );
};

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        // Define the type for options
        type TabBarOptions = {
          tabBarLabel?: string;
          title?: string;
          tabBarAccessibilityLabel?: string;
          tabBarTestID?: string;
        };

        const label =
          (options as TabBarOptions).tabBarLabel !== undefined
            ? (options as TabBarOptions).tabBarLabel
            : (options as TabBarOptions).title !== undefined
            ? (options as TabBarOptions).title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <SafeAreaView
            edges={['bottom']}
            style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={
                (options as TabBarOptions).tabBarAccessibilityLabel
              }
              testID={(options as TabBarOptions).tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}>
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;
