import React, { useEffect, useState } from "react";
import { ContainerForm, ContentForm, HeaderForm } from "../../../default.styled";
import { ButtonDefault } from "../../ButtonDefault";
import { DuoTitle } from "../../DuoTitle";
import { UniqueProfessional } from "./UniqueProfessional";
import { IProfessional } from "../../../interfaces/IProfessional";
import { Text } from "react-native";

interface Props {
    exportProfessionals: (value: IProfessional[]) => void,
}

export const FormProfessional: React.FC<Props> = ({ exportProfessionals }) => {
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [professional, setProfessional] = useState<IProfessional>();
    const [idTemp, setIdTemp] = useState<number>(Math.floor(Math.random() * 10000));
    const [confirmRemove, setConfirmRemove] = useState<{ id: number, confirm: boolean }>();

    useEffect(() => {
        if (professional) {
            setProfessionals(prevState =>
                prevState.map(item => {
                    if (item.id === professional.id) {
                        return { ...item, ...professional }
                    }
                    return item;
                })
            );
        }
        exportProfessionals(professionals);
    }, [professional]);

    useEffect(() => {
        if (confirmRemove && confirmRemove.confirm) {
            setProfessionals(prevState => prevState.filter(item => item.id !== confirmRemove.id));
        }
        exportProfessionals(professionals);
    }, [confirmRemove]);

    const createNewProfessional = (newProfessional: IProfessional) => {
        setProfessionals(prevProfessional => [...prevProfessional, newProfessional]);
        setIdTemp(Math.floor(Math.random() * 10000));
    }

    const titleButton = professionals.length > 0 ? 'Adicionar outra experiência' : 'Adicionar experiência';

    return (
        <ContentForm>
            <HeaderForm>
                <DuoTitle size="md" title="Experiência profissional" />
            </HeaderForm>
            <ContainerForm headerForm>
                {professionals.map(professionalItem =>
                    <UniqueProfessional
                        exportProfessional={(value) => setProfessional(value)}
                        idTemp={professionalItem.id}
                        exportRemoveProfessional={(value) => setConfirmRemove({ id: value.id, confirm: value.isRemove })}
                        key={professionalItem.id}
                    />
                )}
                <ButtonDefault onPress={() => createNewProfessional({ id: idTemp })} title={titleButton} />
            </ContainerForm>
        </ContentForm>
    );
}