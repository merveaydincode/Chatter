import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" >
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Kayıt Ol' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
