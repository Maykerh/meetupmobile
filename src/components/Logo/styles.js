import styled from 'styled-components/native';

export const Container = styled.Text`
    font-size: ${props => (props.size ? props.size : '60px')};
    color: #f84c69;
    font-family: 'Permanent Marker';
`;
