import React, { useEffect, useState } from "react"
import { ContainerForm, ContentForm, HeaderForm } from "../../../default.styled"
import { ButtonDefault } from "../../ButtonDefault"
import { DuoTitle } from "../../DuoTitle"
import { Text } from "react-native"
import { UniqueAcademic } from "./UniqueAcademic"
import { alertUnavailable } from "../../../services/AlertUnavailable"

interface Props {
    exportAcademics: (value: IAcademic[]) => void,
}

export const FormAcademic: React.FC<Props> = ({ exportAcademics }) => {
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [academic, setAcademic] = useState<IAcademic>();
    const [idTemp, setIdTemp] = useState<number>(Math.floor(Math.random() * 10000));
    const [confirmRemove, setConfirmRemove] = useState<{ id: number, confirm: boolean }>();

    useEffect(() => {
        if (academic) {
            setAcademics(prevState =>
                prevState.map(item => {
                    if (item.id === academic.id) {
                        return { ...item, ...academic }
                    }
                    return item;
                })
            )
        }
    }, [academic]);

    useEffect(() => {
        exportAcademics(academics);
    }, [academics]);

    useEffect(() => {
        if (confirmRemove && confirmRemove.confirm) {
            setAcademics(prevState => prevState.filter(item => item.id !== confirmRemove.id));
        }
        exportAcademics(academics);
    }, [confirmRemove]);

    const createNewAcademic = (newAcademic: IAcademic) => {
        setAcademics(prevAcademic => [...prevAcademic, newAcademic]);
        setIdTemp(Math.floor(Math.random() * 10000));
    }

    const titleButton = academics.length > 0 ? 'Adicionar outra formação' : 'Adicionar formação';

    return (
        <ContentForm>
            <HeaderForm>
                <DuoTitle size="md" title="Formação Acadêmica" />
            </HeaderForm>
            <ContainerForm headerForm>
                {academics.map(academicItem =>
                    <UniqueAcademic
                        exportAcademic={(value) => setAcademic(value)}
                        idTemp={academicItem.id}
                        exportRemoveAcademic={(value) => setConfirmRemove({ id: value.id, confirm: value.isRemove })}
                        key={academicItem.id} />
                )}
                <ButtonDefault onPress={() => createNewAcademic({ id: idTemp })} title={titleButton} />
                {/* <ButtonDefault onPress={alertUnavailable} title={titleButton} /> */}
            </ContainerForm>
        </ContentForm>
    )
}