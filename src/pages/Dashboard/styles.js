import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #2a1a2e;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})``;
