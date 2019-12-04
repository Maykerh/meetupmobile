import React, { useState, useMemo } from 'react';
import { Text } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateText, DateArrow, DateSelector } from './styles';

export default function DateInput({ date, onChange }) {
    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM", { locale: pt }),
        [date]
    );

    return (
        <Container>
            <DateSelector>
                <DateArrow
                    onPress={() => {
                        onChange('prev');
                    }}
                >
                    <Icon name="chevron-left" color="#FFF" size={20} />
                </DateArrow>
                <DateText>{dateFormatted}</DateText>
                <DateArrow
                    onPress={() => {
                        onChange('next');
                    }}
                >
                    <Icon name="chevron-right" color="#FFF" size={20} />
                </DateArrow>
            </DateSelector>
        </Container>
    );
}
