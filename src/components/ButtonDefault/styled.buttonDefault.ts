import styled from "styled-components/native";
import Colors from "../../assets/Colors";

export const BoxButton = styled.TouchableOpacity`
    background-color: ${Colors.blue_dark};
    width: 100%;
    padding: 16px;
    border-radius: 10px;
`;

export const TitleButton = styled.Text`
    color: ${Colors.white};
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;