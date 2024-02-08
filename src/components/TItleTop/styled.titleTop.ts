import styled from "styled-components/native";
import Colors from "../../assets/Colors";

export const Content = styled.View`
    padding: 16px 0px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    background-color: ${Colors.blue_dark};
`;

export const TextTitle = styled.Text`
    color: ${Colors.white};
    font-size: 14px;
    font-weight: 700;
`;