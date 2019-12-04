import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #2a1a2e;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 15px 0 20px;
`;

export const Form = styled.ScrollView.attrs({
    contentContainerStyle: { padding: 30 },
    showsVerticalScrollIndicator: false
})`
    align-self: stretch;
`;

export const FormInput = styled(Input)`
    margin-bottom: 12px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 4px;
`;

export const LogoutButton = styled(Button)`
    margin-top: 10px;
    background: #f64c75;
`;
