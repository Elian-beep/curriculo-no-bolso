import React, { useEffect, useState } from "react";
import { FormGroup } from "../../../../default.styled";
import { Text } from "react-native";
import { DuoTitle } from "../../../DuoTitle";
import { InputDefault } from "../../../InputDefault";
import { BtnRemove } from "../../BtnRemove";
import { IProfessional } from "../../../../interfaces/IProfessional";

interface Props {
    exportProfessional: (dataProfessional: IProfessional) => void,
    idTemp: number,
    exportRemoveProfessional: (value: {id: number, isRemove: boolean}) => void,
}

export const UniqueProfessional: React.FC<Props> = ({exportProfessional, idTemp, exportRemoveProfessional}) => {
    const [name, setName] = useState<string>();
    const [role, setRole] = useState<string>();
    const [start, setStart] = useState<string>();
    const [finish, setfinish] = useState<string>();
    const [description, setDescription] = useState<string>();

    useEffect(() => {
        exportProfessional({id: idTemp, name, role, start, finish, description})
    }, [name, role, start, finish, description]);

    return (
        <>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Nome da empresa" />
                </Text>
                <InputDefault onTextChange={(value) => setName(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Cargo" />
                </Text>
                <InputDefault onTextChange={(value) => setRole(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Início" />
                </Text>
                <InputDefault onTextChange={(value) => setStart(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Término" />
                </Text>
                <InputDefault onTextChange={(value) => setfinish(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Descrição" />
                </Text>
                <InputDefault hg="126px" onTextChange={(value) => setDescription(value)} />
            </FormGroup>
            <BtnRemove title="Remover experiência profissionla" onPress={() => exportRemoveProfessional({id: idTemp, isRemove: true})} />
        </>
    );
}