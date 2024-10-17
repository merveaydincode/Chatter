import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface ChatProps {
    route: {
        params: {
            name: string;
            message: string;
        };
    };
}

const ChatScreen: React.FC<ChatProps> = ({ route }) => {
    const { name, message } = route.params;

    return (
        <View style={tw`flex-1 p-4 bg-black`}>
            <Text style={tw`text-white text-xl font-bold mb-4`}>Gönderen: {name}</Text>
            <Text style={tw`text-white text-lg`}>Mesaj: {message}</Text>
        </View>
    );
};

export default ChatScreen;
