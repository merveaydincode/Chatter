import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

interface Message {
    id: string;
    text: string;
    sender: 'me' | 'other';
}

interface ChatScreenProps {
    route: {
        params: {
            name: string;
        };
    };
}

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
    const { name } = route.params;
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Merhaba!', sender: 'other' },
        { id: '2', text: 'Nasılsın?', sender: 'other' },
        { id: '3', text: 'İyiyim, sen nasılsın?', sender: 'me' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage: Message = {
                id: (messages.length + 1).toString(),
                text: inputText,
                sender: 'me',
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText('');
        }
    };

    const renderItem = ({ item }: { item: Message }) => (
        <View
            style={tw`mb-2 p-3 rounded-lg max-w-3/4 ${
                item.sender === 'me' ? 'bg-blue-500 self-end' : 'bg-gray-300 self-start'
            }`}
        >
            <Text style={tw`text-white`}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={tw`flex-1 bg-black`}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={tw`flex-row p-4`}>
                <TextInput
                    style={tw`flex-1 bg-gray-700 text-white rounded-lg p-3`}
                    placeholder="Mesajınızı yazın..."
                    placeholderTextColor="gray"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity
                    style={tw`ml-2 bg-blue-500 rounded-lg p-3 justify-center`}
                    onPress={handleSendMessage}
                >
                    <Text style={tw`text-white`}>Gönder</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ChatScreen;
