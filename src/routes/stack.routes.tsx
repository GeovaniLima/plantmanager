import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

type AppRoutes = {
  Welcome: undefined;
  User: undefined;
  Confirmation: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const stackRoutes = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return(
    <stackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white
        }
      }}
    >
      <stackRoutes.Screen 
        name="Welcome"
        component={Welcome}
      />

      <stackRoutes.Screen 
        name="User"
        component={UserIdentification}
      />

      <stackRoutes.Screen 
        name="Confirmation"
        component={Confirmation}
      />
    </stackRoutes.Navigator>
  )
  
}