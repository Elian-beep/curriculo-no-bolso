import styled from "styled-components/native";
import Colors from "./assets/Colors";
import { View } from "react-native";

interface Props{
    headerForm?: boolean;
}

export const AllContainer = styled.SafeAreaView`
    flex: 1;
    background-color: #E6E6E6;
`;

export const DefaultContent = styled.View`
    padding: 24px 32px 0px 32px;
`;

export const ContainerForm = styled.View<Props>`
    background: ${Colors.white};
    padding: 16px;
    border-radius: 
        ${props => 
            props.headerForm ? "0px 0px 10px 10px" : "10px"};
    display: flex;
    gap: 16px;
`;

export const ContentForm = styled.View`
margin-top: 16px;
`;

export const HeaderForm = styled.View`
    padding: 24px 16px;
    background: ${Colors.white};
    border-radius: 10px 10px 0px 0px;
`;

export const FormGroup = styled.View`
    display: flex;
    gap: 4px;
`;

export const TextRequired = styled.Text`
    color: ${Colors.red_dark};
    font-size: 12px;
    font-weight: 500;
`;