import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import { BoxBtnAction, TitleAction } from "./styled.btnAction";

interface Props{
    exportAction: () => void,
    icon: string,
    color: string,
    title: string
}

export const BtnAction: React.FC<Props> = ({exportAction, icon, color, title}) => {
    return(
        <BoxBtnAction onPress={exportAction}>
            <SvgUri uri={icon} />
            <TitleAction color={color}>{title}</TitleAction>
        </BoxBtnAction>
    );
}