import styled from "styled-components/native";
import Colors from "../../assets/Colors";

interface Props {
    center?: boolean,
}

export const LargeText = styled.Text<Props>`
    text-align: ${props => props.center ? 'center' : 'auto'};
    color: ${Colors.black};
    font-size: 24px;
    font-weight: 700;
 `;

export const MidText = styled.Text<Props>`
    text-align: ${props => props.center ? 'center' : 'auto'};
    color: ${Colors.black};
    font-size: 16px;
    font-weight: 500;
`;

export const SmallText = styled.Text<Props>`
    text-align: ${props => props.center ? 'center' : 'auto'};
    color: ${Colors.black};
    font-size: 14px;
    font-weight: 500;
`;