import styled from "styled-components/native";

interface Props {
    color: string,
}

export const BoxBtnAction = styled.TouchableOpacity`
    align-items: center;
    gap: 4px;
`;

export const TitleAction = styled.Text<Props>`
    color: ${props => props.color};
    font-size: 10px;
`;