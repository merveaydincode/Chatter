import React, { useState } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import TitleHeader from '../components/TitleHeader';
import TabButtons from '../components/TabButtons';
import MessageList from '../components/MessageList';

const HomeScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'personal' | 'group'>('personal');

    const personalMessages = [
        { id: '1', personalName: 'Hello!', message: 'Yeni bir kullanıcı olarak, arkadaşlarınızla iletişim kurmaya başlayabilirsiniz. Mesaj göndermek için bir kişi seçin!' },
    ];

    const groupMessages = [
        { id: '1', groupName: 'Aile', lastMessage: 'Toplantı bu akşam 19:00 da.' },
        { id: '2', groupName: 'Arkadaşlar', lastMessage: 'Bu hafta sonu buluşalım mı?' },
    ];

    return (
        <View style={tw`flex-1 bg-black`}>
            <TitleHeader title="Mesajlar" />
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'personal' ? (
                <MessageList data={personalMessages} />
            ) : (
                <MessageList data={groupMessages.map(group => ({ id: group.id, personalName: group.groupName, message: group.lastMessage }))} />
            )}
        </View>
    );
};

export default HomeScreen;
