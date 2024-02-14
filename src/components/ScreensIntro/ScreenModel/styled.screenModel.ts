import styled from "styled-components/native";
import Colors from "../../../assets/Colors";

interface Props {
    currentEllipse?: boolean,
}

export const ContainerIntr = styled.View`
    margin-top: 5%;
    height: 88%;
    background: ${Colors.white};
    border-radius: 50px 50px 0px 0px;
`;

export const BoxButtonStart = styled.View`
    position: absolute;
    bottom: 50px;
    left: 25%;
    right: 25%;
    width: 50%;
`;

export const BoxEllipses = styled.View`
    flex-direction: row;
    gap: 16px;
`;

export const Ellipse = styled.View<Props>`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: ${props => props.currentEllipse ? Colors.blue_dark : Colors.gray_mid};
`;