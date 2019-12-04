import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Loading() {
    return (
        <Container>
            <ActivityIndicator color="rgba(255, 255, 255, 0.6)" />
        </Container>
    );
}
