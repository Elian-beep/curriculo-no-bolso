import styled from "styled-components/native";
import Colors from "../../assets/Colors";

export const Content = styled.View`
    padding: 16px 0px;
    padding-top: 50px;
    align-items: center;
    background-color: ${Colors.blue_dark};
`;

export const BoxTop = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const TextTitle = styled.Text`
    color: ${Colors.white};
    font-size: 14px;
    font-weight: 700;
`;