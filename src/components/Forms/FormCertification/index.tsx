import React, { useEffect, useState } from "react";
import { ICertification } from "../../../interfaces/ICertification";
import { ContainerForm, ContentForm, HeaderForm } from "../../../default.styled";
import { ButtonDefault } from "../../ButtonDefault";
import { DuoTitle } from "../../DuoTitle";
import { UniqueCertification } from "./UniqueCertification";
import { alertUnavailable } from "../../../services/AlertUnavailable";

interface Props {
    exportCertifications: (value: ICertification[]) => void,
}

export const FormCertification: React.FC<Props> = ({exportCertifications}) => {
    const [certifications, setCertifications] = useState<ICertification[]>([]);
    const [certification, setCertification] = useState<ICertification>();
    const [idTemp, setIdTemp] = useState<number>(Math.floor(Math.random() * 10000));
    const [confirmRemove, setConfirmRemove] = useState<{ id: number, confirm: boolean }>();

    useEffect(() => {
        if(certification){
            setCertifications(prevState => 
                prevState.map(item => {
                    if(item.id === certification.id) {
                        return { ...item, ...certification }
                    }
                    return item;
                })    
            );
        }
    }, [certification]);

    useEffect(() => {
        exportCertifications(certifications);
    }, [certifications]);

    useEffect(() => {
        if(confirmRemove && confirmRemove.confirm){
            setCertifications(prevState => prevState.filter(item => item.id !== confirmRemove.id));
        }
        exportCertifications(certifications);
    }, [confirmRemove]);

    const createNewCertification = (newCertification: ICertification) => {
        setCertifications(prevCertification => [...prevCertification, newCertification]);
        setIdTemp(Math.floor(Math.random() * 1000));
    }

    const titleButton = certifications.length > 0 ? 'Adicionar outra certificação' : 'Adicionar certificação';

    return(
        <ContentForm>
            <HeaderForm>
                <DuoTitle size="md" title="Certificações" />
            </HeaderForm>
            <ContainerForm headerForm>
                {certifications.map(certificationItem =>
                    <UniqueCertification  
                        exportCertification={value => setCertification(value)}
                        exportRemoveCertification={value => setConfirmRemove({id: value.id, confirm: value.isRemove})}
                        idTemp={certificationItem.id}
                        key={certificationItem.id}
                    />    
                )}
                <ButtonDefault onPress={() => createNewCertification({id: idTemp})} title={titleButton} />
                {/* <ButtonDefault onPress={alertUnavailable} title={titleButton} /> */}
            </ContainerForm>
        </ContentForm>
    );
}