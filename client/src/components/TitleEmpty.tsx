import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const TitleEmpty: React.FC<{ title: string }> = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={tw`flex-row justify-between p-3 mt-10`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={34} color="white" />
            </TouchableOpacity>
            <Text style={tw`text-white text-2xl font-bold`}>
                {title}
            </Text>
        </View>
    );
};

export default TitleEmpty;
