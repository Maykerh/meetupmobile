import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Button from '../Button';
import { Container, Image, Info, Title, InfoRow, InfoText } from './styles';

export default function Meetup({ data, handleRegister, handleCancel }) {
    console.tron.log(['data -> ', data]);

    return (
        <Container>
            <Image
                source={{
                    uri:
                        data.banner &&
                        data.banner.url.replace('localhost', '192.168.10.1')
                }}
            />
            <Info>
                <Title>{data.title}</Title>
                <InfoRow>
                    <Icon name="event" size={16} color="#999" />
                    <InfoText>
                        {format(
                            parseISO(data.date),
                            "dd 'de' MMMM 'de' yyyy 'às' HH'h'mm",
                            {
                                locale: pt
                            }
                        )}
                    </InfoText>
                </InfoRow>
                <InfoRow>
                    <Icon name="location-on" size={16} color="#999" />
                    <InfoText>{data.location}</InfoText>
                </InfoRow>
                <InfoRow last={!data.past}>
                    <Icon name="person" size={16} color="#999" />
                    <InfoText>{`Organizador:${data.user_id}`}</InfoText>
                </InfoRow>

                {handleRegister && !data.past && (
                    <Button onPress={handleRegister}>Participar</Button>
                )}

                {handleCancel && (
                    <Button onPress={handleCancel}>Cancelar Inscrição</Button>
                )}
            </Info>
        </Container>
    );
}

Meetup.propTypes = {
    data: PropTypes.shape({
        past: PropTypes.bool.isRequired,
        date: PropTypes.string.isRequired,
        banner: PropTypes.shape({
            url: PropTypes.string.isRequired
        }).isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        organizer: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    handleRegister: PropTypes.func,
    handleCancel: PropTypes.func
};

Meetup.defaultProps = {
    handleRegister: null,
    handleCancel: null
};
