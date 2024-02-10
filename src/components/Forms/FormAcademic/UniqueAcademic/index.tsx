import { Button, Text } from "react-native"
import { FormGroup } from "../../../../default.styled"
import { DuoTitle } from "../../../DuoTitle"
import { InputDefault } from "../../../InputDefault"
import React, { useEffect, useState } from "react"
import { BtnRemove } from "../../BtnRemove"

interface Props {
    exportAcademic: (dataAcademic: IAcademic) => void,
    idTemp: number,
    exportRemoveAcademic: (value: {id: number, isRemove: boolean}) => void,
}

export const UniqueAcademic:React.FC<Props> = ({exportAcademic, idTemp, exportRemoveAcademic}) => {

    const [name, setName] = useState<string>();
    const [type, setType] = useState<string>();
    const [curse, setCurse] = useState<string>();
    const [start, setStart] = useState<string>();
    const [finish, setFinish] = useState<string>();

    useEffect(() => {
        handleSaveAcademic({id: idTemp, name, type, curse, start, finish});
    }, [name, type, curse, start, finish]);

    const handleSaveAcademic = (value: IAcademic) => {
        exportAcademic(value);
    }

    return (
        <>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Nome da escola" />
                </Text>
                <InputDefault onTextChange={(value) => setName(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Tipo de formação" />
                </Text>
                <InputDefault onTextChange={(value) => setType(value)} />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Curso" />
                </Text>
                <InputDefault onTextChange={(value) => setCurse(value)} />
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
                <InputDefault onTextChange={(value) => setFinish(value)} />
            </FormGroup>
            <BtnRemove title="Remover formação acadêmica" onPress={() => exportRemoveAcademic({id: idTemp, isRemove: true})} />
        </>
    )
}