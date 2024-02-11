import React, { useEffect, useState } from "react";
import { IAward } from "../../../../interfaces/IAward";
import { IRemoveForm } from "../../../../interfaces/IRemoveForm";
import { FormGroup } from "../../../../default.styled";
import { Text } from "react-native";
import { DuoTitle } from "../../../DuoTitle";
import { InputDefault } from "../../../InputDefault";
import { BtnRemove } from "../../BtnRemove";

interface Props {
    exportAwards: (dataAwards: IAward) => void,
    idTemp: number,
    exportRemoveAward: (value: IRemoveForm) => void,
}

export const UniqueAwards: React.FC<Props> = ({exportAwards, exportRemoveAward, idTemp}) => {
    const [name, setName] = useState<string>();
    const [year, setYear] = useState<string>();
    const [description, setDescription] = useState<string>();

    useEffect(() => {
        exportAwards({id: idTemp, name, year, description});
    }, [name, year, description]);

    return(
        <>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Nome da premiação" />
                </Text>
                <InputDefault onTextChange={value => setName(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Ano da premiação" />
                </Text>
                <InputDefault onTextChange={value => setYear(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Descrição" />
                </Text>
                <InputDefault hg="126px" onTextChange={value => setDescription(value)} />
            </FormGroup>
            <BtnRemove title="Remover premiação" onPress={() => exportRemoveAward({id: idTemp, isRemove: true})} />
        </>
    );
}