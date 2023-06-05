import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import colors from '../styles/colors';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

type AppRoutes = {
  Welcome: undefined;
  User: undefined;
  Confirmation: undefined;
  PlantSelect: undefined;
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

      <stackRoutes.Screen 
        name="PlantSelect"
        component={PlantSelect}
      />
    </stackRoutes.Navigator>
  )
  
}