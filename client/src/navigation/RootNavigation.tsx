import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Kayıt Ol' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş Yap' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
