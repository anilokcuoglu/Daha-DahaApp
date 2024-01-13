import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackNavigator';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import InitialPage from '../pages/InitialPage/InitialPage';
import OtherPage from '../pages/OtherPage/OtherPage';
import {SvgIcons} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PlusPage from '../pages/PlusPage/PlusPage';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#e32f45',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          position: 'absolute',
          height: 68,
          bottom: 10,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: '#fff',
          ...styles.shadow,
          borderWidth: 1.5,
          borderColor: '#ECEEEF',
        },
      }}>
      <BottomTab.Screen
        name="InitialPage"
        component={InitialPage}
        options={{
          headerShown: true,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.bottomTabItem}>
              <SvgIcons.Kesfet width={26} height={24} />
              <Text style={styles.bottomTabActiveText}>InitialPage</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="PlusPage"
        component={PlusPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <SvgIcons.DahaDaha width={26} height={24} />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="OtherPage"
        component={OtherPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View style={styles.bottomTabItem}>
              <SvgIcons.Katıldıklarım width={26} height={24} fill="#ADADAD" />
              <Text style={styles.bottomTabActiveText}>Other Page</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0,0,0,0.05)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 6,
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
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabNavigator;
