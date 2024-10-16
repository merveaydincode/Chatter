import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';

const HomeScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'personal' | 'group'>('personal');

    const personalMessages = [
        { id: '1', personalName: 'Hello!', message: 'Yeni bir kullanıcı olarak, arkadaşlarınızla iletişim kurmaya başlayabilirsiniz. Mesaj göndermek için bir kişi seçin!' },
    ];

    const groupMessages = [
        { id: '1', groupName: 'Aile', lastMessage: 'Toplantı bu akşam 19:00 da.' },
        { id: '2', groupName: 'Arkadaşlar', lastMessage: 'Bu hafta sonu buluşalım mı?' },
    ];

    const renderPersonalMessage = ({ item }: { item: { id: string; personalName: string; message: string } }) => (
        <View style={tw`bg-indigo-200 p-4 mb-2 rounded`}>
            <Text style={tw`font-bold mb-1`}>{item.personalName}</Text>
            <Text>{item.message}</Text>
        </View>
    );

    const renderGroupMessage = ({ item }: { item: { id: string; groupName: string; lastMessage: string } }) => (
        <View style={tw`bg-indigo-200 p-4 mb-2 rounded`}>
            <Text style={tw`font-bold`}>{item.groupName}</Text>
            <Text>{item.lastMessage}</Text>
        </View>
    );

    return (
        <View style={tw`flex-1 bg-black p-4`}>
            

            <View style={tw`flex-row justify-between mb-4`}>
                <TouchableOpacity
                    style={tw`flex-1 p-2 ${activeTab === 'personal' ? 'bg-indigo-400' : 'bg-gray-700'} rounded`}
                    onPress={() => setActiveTab('personal')}
                >
                    <Text style={tw`text-center text-white`}>Kişisel Mesajlar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex-1 p-2 ${activeTab === 'group' ? 'bg-indigo-400' : 'bg-gray-700'} rounded`}
                    onPress={() => setActiveTab('group')}
                >
                    <Text style={tw`text-center text-white`}>Grup Mesajları</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={activeTab === 'personal' ? personalMessages : groupMessages}
                renderItem={activeTab === 'personal' ? renderPersonalMessage : renderGroupMessage}
                keyExtractor={(item) => activeTab === 'personal' ? item.id : item.id}
            />
        </View>
    );
};

export default HomeScreen;
