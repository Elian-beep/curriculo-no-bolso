import styled from "styled-components/native";
import Colors from "../../assets/Colors";

export const DescriptionText = styled.Text `
    color: ${Colors.blue_mid};
    font-size: 14px;
    font-weight: 500;
`;

export const FlexVertCenter = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 80px;
`;