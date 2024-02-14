import { Children, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { DescriptionText, FlexVertCenter } from "../../AlertDefault/styled.alertDefault";
import { DuoTitle } from "../../DuoTitle";
import { BoxEllipses, Ellipse } from "./styled.screenModel";

interface Props {
    description: string,
    positionElipse: number,
}

export const ScreenModel: React.FC<Props> = ({ description, positionElipse }) => {

    return (
        <FlexVertCenter>
            <DuoTitle center size="lg" title="Boas vindas ao Currículo de Bolso!" />
            {positionElipse === 1 && <Image source={require("../../../assets/images/fig_docs.png")} width={100} height={100} />}
            {positionElipse === 2 && <Image source={require("../../../assets/images/fig_screen.png")} width={100} height={100} />}
            {positionElipse === 3 && <Image source={require("../../../assets/images/fig_women.png")} width={100} height={100} />}
            <DescriptionText>{description}</DescriptionText>
            <BoxEllipses>
                <Ellipse currentEllipse={positionElipse === 1} />
                <Ellipse currentEllipse={positionElipse === 2} />
                <Ellipse currentEllipse={positionElipse === 3} />
            </BoxEllipses>
        </FlexVertCenter>
    );
}