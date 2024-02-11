import React, { useEffect, useState } from "react"
import { ICertification } from "../../../../interfaces/ICertification"
import { FormGroup } from "../../../../default.styled";
import { DuoTitle } from "../../../DuoTitle";
import { Text } from "react-native";
import { InputDefault } from "../../../InputDefault";
import { BtnRemove } from "../../BtnRemove";

interface Props {
    exportCertification: (dataCertification: ICertification) => void,
    idTemp: number,
    exportRemoveCertification: (value: {id: number, isRemove: boolean}) => void,
}

export const UniqueCertification: React.FC<Props> = ({exportCertification, exportRemoveCertification, idTemp}) => {
    const [curse, setCurse] = useState<string>();
    const [institution, setInstitution] = useState<string>();
    const [finish, setFinish] = useState<string>();
    const [description, setDescription] = useState<string>();

    useEffect(() => {
        exportCertification({id: idTemp, curse, institution, finish, description})
    }, [curse, institution, finish, description]);

    return(
        <>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Nome do curso" />
                </Text>
                <InputDefault onTextChange={(value) => setCurse(value) } />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Nome da instituição" />
                </Text>
                <InputDefault onTextChange={(value) => setInstitution(value) } />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Término" />
                </Text>
                <InputDefault onTextChange={(value) => setFinish(value) } />
            </FormGroup>
            <FormGroup>
                <Text>
                    <DuoTitle size="sm" title="Descrição" />
                </Text>
                <InputDefault hg="126px" onTextChange={(value) => setDescription(value) } />
            </FormGroup>
            <BtnRemove title="Remover certificação" onPress={() => exportRemoveCertification({id: idTemp, isRemove: true})} />
        </>
    );
}