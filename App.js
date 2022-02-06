import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigator/drawerNavigator"

import TabNavigator from './Navigator/tabNavigator';
export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  );
}
