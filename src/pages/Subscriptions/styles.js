import styled from 'styled-components/native';

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #2a1a2e;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: 30px;
`;

export const EmptyState = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const EmptyMessage = styled.Text`
    font-size: 16px;
    color: #555;
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})``;
