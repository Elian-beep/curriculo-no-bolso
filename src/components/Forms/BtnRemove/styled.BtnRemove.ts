import styled from "styled-components/native";
import Colors from "../../../assets/Colors";

export const BoxBtnRemove = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const TitleBtnRemove = styled.Text`
    color: ${Colors.red_dark};
    text-decoration: underline;
`;