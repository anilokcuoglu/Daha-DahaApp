import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackNavigator';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import InitialPage from '../pages/InitialPage/InitialPage';
import OtherPage from '../pages/OtherPage/OtherPage';
import {SvgIcons} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PlusPage from '../pages/PlusPage/PlusPage';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

interface CustomTabBarButtonProps {
  children: ReactNode;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({children}) => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <View style={styles.customBarButton}>{children}</View>
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 68,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#fff',
          borderWidth: 1.5,
          borderColor: '#ECEEEF',
          borderStyle: 'solid',
          ...styles.shadow,
        },
      }}>
      <BottomTab.Screen
        name="MainPage"
        component={InitialPage}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={[styles.bottomTabItem, !focused ? styles.opacity : null]}>
              <SvgIcons.Kesfet width={26} height={24} />
              <Text style={styles.bottomTabActiveText}>KEŞFET</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="PlusPage"
        component={PlusPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <SvgIcons.Portal width={69} height={71} />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="OtherPage"
        component={InitialPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={[styles.bottomTabItem, !focused ? styles.opacity : null]}>
              <SvgIcons.Katıldıklarım width={26} height={24} fill="#ADADAD" />
              <Text style={styles.bottomTabActiveText}>DAHA CÜZDAN</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0000000d',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 6,
  },

  bottomTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
  },

  bottomTabActiveText: {
    top: 4,
    color: '#1D1E1C',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  customButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBarButton: {
    width: 70,
    height: 70,
  },
  opacity: {
    opacity: 0.3,
  },
});

export default BottomTabNavigator;
