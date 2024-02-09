import { Text, TextInput, View } from "react-native";
import { DuoTitle } from "../../DuoTitle";
import { ContainerForm, FormGroup, HeaderForm, TextRequired } from "../../../default.styled";
import { InputDefault } from "../../InputDefault";
import React, { useState } from "react";
import { ISimpleCurriculum } from "../../../interfaces/ICurriculum";
import { ContentForm } from "./styled.FormRequired";
import { ButtonDefault } from "../../ButtonDefault";

interface Props {
    exportCurrRequired: (dataRequired: ISimpleCurriculum) => void;
}

export const FormRequired: React.FC<Props> = ({ exportCurrRequired }) => {
    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>();

    const [title, setTitle] = useState<string>();
    const [completeName, setCompleteName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [linkedin, setLinkedin] = useState<string>();

    const handleSaveCurr = async () => {
        await setCurrRequired({ title, completeName, email, phone, linkedin });
        exportCurrRequired(currRequired);
    }

    return (
        <>
            <ContainerForm>
                <DuoTitle size="md" title="Título do Currículo" />
                <InputDefault onTextChange={(value) => setTitle(value)} />
            </ContainerForm>
            <ContentForm>
                <HeaderForm>
                    <DuoTitle size="md" title="Informações de contato" />
                </HeaderForm>
                <ContainerForm headerForm>
                    <FormGroup>
                        <Text>
                            <DuoTitle size="sm" title="Nome completo" /> <TextRequired>(obrigatório)</TextRequired>
                        </Text>
                        <InputDefault onTextChange={(value) => setCompleteName(value)} />
                    </FormGroup>
                    <FormGroup>
                        <Text>
                            <DuoTitle size="sm" title="E-mail" /> <TextRequired>(obrigatório)</TextRequired>
                        </Text>
                        <InputDefault onTextChange={(value) => setEmail(value)} />
                    </FormGroup>
                    <FormGroup>
                        <Text>
                            <DuoTitle size="sm" title="Número de celular" /> <TextRequired>(obrigatório)</TextRequired>
                        </Text>
                        <InputDefault onTextChange={(value) => setPhone(value)} />
                    </FormGroup>
                    <FormGroup>
                        <Text>
                            <DuoTitle size="sm" title="Link do seu Likedin" />
                        </Text>
                        <InputDefault onTextChange={(value) => setLinkedin(value)} />
                    </FormGroup>
                    <ButtonDefault title="Salvar" onPress={ handleSaveCurr} />
                </ContainerForm>
            </ContentForm>
        </>
    );
}