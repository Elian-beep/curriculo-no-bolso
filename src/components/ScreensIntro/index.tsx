import React, { useEffect, useState } from "react";
import { DefaultContent } from "../../default.styled";
import { ScreenModel } from "./ScreenModel";
import { BoxButtonStart, ContainerIntr } from "./ScreenModel/styled.screenModel";

interface Props {
    screenNumber: "01" | "02" | "03",
    children?: React.ReactNode,
}

export const ScreenIntro: React.FC<Props> = ({ screenNumber, children }) => {

    return (
        <ContainerIntr>
            <DefaultContent>
                {screenNumber === "01" && <ScreenModel
                    description="Explore uma nova maneira de criar seus currículos de forma eficiente e profissional."
                    positionElipse={1}
                />}
                {screenNumber === "02" && <ScreenModel
                    description="Crie currículos para diferentes oportunidades e baixe em PDFs com apenas um toque."
                    positionElipse={2}
                />}
                {screenNumber === "03" && <ScreenModel
                    description='Toque no botão "Começar" para iniciar sua jornada de simplificação do processo de currículo.'
                    positionElipse={3}
                />}
            </DefaultContent>
            <BoxButtonStart>
                {children}
            </BoxButtonStart>
        </ContainerIntr>
    );
}