import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
=======
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Kayıt Ol' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş Yap' }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Anasayfa' }}/>
>>>>>>> home
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
