import React, { useEffect, useState } from 'react';
import { format, subDays, addDays } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Logo from '../../components/Logo';
import DateInput from '../../components/DateInput';
import Meetup from '../../components/Meetup';
import Loading from '../../components/Loading';

import { Container, Header, List } from './styles';

import api from '../../services/api';

function Dashboard({ isFocused }) {
    const [date, setDate] = useState(new Date().getTime());
    const [loading, setLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(false);
    const [isRefreshing] = useState(false);

    async function loadMeetups(selectedPage = 1) {
        if (selectedPage > 1 && !hasMorePages) return;

        const response = await api.get('meetups-list', {
            params: { date: format(date, "yyyy'-'MM'-'dd"), page: selectedPage }
        });

        setMeetups(
            selectedPage > 1 ? [...meetups, ...response.data] : response.data
        );
        setHasMorePages(response.data.totalPages > selectedPage);
        setPage(selectedPage);
        setLoading(false);
    }

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        setLoading(true);
        loadMeetups(page);
    }, [isFocused, date]); // eslint-disable-line

    function handleDateChange(direction) {
        if (direction === 'next') {
            setDate(addDays(date, 1));
        } else {
            setDate(subDays(date, 1));
        }
    }

    async function register(meetupId) {
        try {
            await api.post(`subscriptions/${meetupId}`);

            Alert.alert('Inscrição realizada com sucesso');
        } catch (error) {
            Alert.alert('Error', error.response.data.error || 'Deu ruim');
        }
    }

    return (
        <Background>
            <Container>
                <Header>
                    <Logo size={40} />
                </Header>
                <DateInput date={date} onChange={handleDateChange} />
                {loading ? (
                    <Loading />
                ) : (
                    <List
                        data={meetups}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Meetup
                                data={item}
                                handleRegister={() => register(item.id)}
                            />
                        )}
                        onRefresh={loadMeetups}
                        refreshing={isRefreshing}
                        onEndReached={() => loadMeetups(page + 1)}
                        onEndReachedThreshold={0.2}
                    />
                )}
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="format-list-bulleted" size={20} color={tintColor} />
    )
};

export default withNavigationFocus(Dashboard);
