import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTab';
import DetailPage from '../pages/DetailPage/DetailPage';

export type RootStackParamList = {
  MainPage: undefined;
  OtherPage: undefined;
  PlusPage: undefined;
  DetailPage: {
    id: number;
  };
};

type Props = {
  initialRouteName: keyof RootStackParamList;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = ({initialRouteName}: Props) => {
  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.FadeFromBottomAndroid,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}>
        <RootStack.Screen name="MainPage" component={BottomTabNavigator} />
        <RootStack.Screen name="DetailPage" component={DetailPage} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
