import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Loading from '../../components/Loading';
import Meetup from '../../components/Meetup';
import Logo from '../../components/Logo';
import Background from '../../components/Background';

import { Container, List, EmptyState, EmptyMessage, Header } from './styles';

function Subscriptions({ isFocused }) {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadSubscriptions() {
        setLoading(true);

        const response = await api.get('subscriptions');

        setSubscriptions(response.data);

        setLoading(false);
    }

    useEffect(() => {
        if (isFocused) {
            loadSubscriptions();
        }
    }, [isFocused]);

    var component = null;

    if (loading) {
        component = <Loading />;
    } else if (!subscriptions || subscriptions.length === 0) {
        component = (
            <EmptyState>
                <Icon name="event-busy" size={45} color="rgba(0, 0, 0, .15)" />
                <EmptyMessage>
                    {'Você ainda não se inscreveu em nenhum meetup'}
                </EmptyMessage>
            </EmptyState>
        );
    } else {
        component = (
            <List
                data={subscriptions}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Meetup data={item} handleCancel={() => {}} />
                )}
            />
        );
    }

    return (
        <Background>
            <Header>
                <Logo size={40} />
            </Header>
            <Container>{component}</Container>
        </Background>
    );
}
Subscriptions.navigationOptions = {
    tabBarLabel: 'Minhas inscrições',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="event" size={20} color={tintColor} />
    )
};

export default withNavigationFocus(Subscriptions);
