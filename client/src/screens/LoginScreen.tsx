import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'twrnc';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.email && route.params?.password) {
      setEmail(route.params.email);
      setPassword(route.params.password);
    }
  }, [route.params]);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Hata', 'E-posta ve şifre alanları boş bırakılamaz!');
    } else {
      Alert.alert('Giriş Başarılı!', `E-posta: ${email}`);
      // Diğer işlemler (örn. ana sayfaya yönlendirme)
    }
  };

  return (
    <View style={tw`flex-1 justify-center p-4 bg-black`}>
      <Text style={tw`text-2xl font-bold p-3 text-white`}>Giriş</Text>
      <View style={tw`bg-indigo-200 p-10 rounded-3xl w-full max-w-md`}>
        
        <TextInput
          style={tw`border border-white rounded-xl p-3 w-full mb-4`}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={tw`border border-white rounded-xl p-3 w-full mb-4`}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={tw`bg-indigo-400 rounded-xl p-2 mt-4 w-40 mx-auto h-12 justify-center`}
          onPress={handleLogin}
        >
          <Text style={tw`text-white text-center`}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
