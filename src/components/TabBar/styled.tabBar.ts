import styled from "styled-components/native";
import Colors from "../../assets/Colors";

interface Prop {
    inFocus: boolean
}

export const BoxTabBar = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 16px 0px;
    background-color: ${Colors.white};
    border-top-width: 2px;
    border-top-color: ${Colors.blue_dark};
    border-top-style: solid;
`;

export const HandleClickIcon = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const TitleTab = styled.Text<Prop>`
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.inFocus ? Colors.blue_dark : Colors.gray_dark};
`;