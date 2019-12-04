import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
`;

export const DateSelector = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const DateArrow = styled.TouchableOpacity``;

export const DateText = styled.Text`
    font-size: 18px;
    color: #eee;
    font-weight: bold;
    margin: 0 15px;
`;
