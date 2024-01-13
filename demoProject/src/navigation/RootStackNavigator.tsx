import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from './BottomTab';

export type RootStackParamList = {
  InitialPage: undefined;
  OtherPage: undefined;
  BottomMainPage: undefined;
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
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}>
        <RootStack.Screen name="InitialPage" component={BottomTabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
