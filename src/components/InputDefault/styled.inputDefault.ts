import styled from "styled-components/native";
import Colors from "../../assets/Colors";

interface Props {
    hg?: string
}

export const InputPrimary = styled.TextInput<Props>`
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: ${Colors.gray_dark};
    padding: 8px;
    height: ${props => props.hg};
`;