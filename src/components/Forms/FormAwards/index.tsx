import React, { useEffect, useState } from "react";
import { IAward } from "../../../interfaces/IAward";
import { ContainerForm, ContentForm, HeaderForm } from "../../../default.styled";
import { DuoTitle } from "../../DuoTitle";
import { UniqueAwards } from "./UniqueAwards";
import { ButtonDefault } from "../../ButtonDefault";
import { alertUnavailable } from "../../../services/AlertUnavailable";

interface Props {
    exportAwards: (value: IAward[]) => void,
}

export const FormAwards: React.FC<Props> = ({exportAwards}) => {
    const [awards, setAwards] = useState<IAward[]>([]);
    const [award, setAward] = useState<IAward>();
    const [idTemp, setIdTemp] = useState<number>(Math.floor(Math.random() * 10000));
    const [confirmRemove, setConfirmRemove] = useState<{ id: number, confirm: boolean }>();

    useEffect(() => {
        if(award){
            setAwards(prevState =>
                prevState.map(item => {
                    if(item.id === award.id){
                        return { ...item, ...award }
                    }
                    return item;
                })
            )
        }
    }, [award]);

    useEffect(() => {
        exportAwards(awards);
    }, [awards]);

    useEffect(() => {
        if(confirmRemove && confirmRemove.confirm){
            setAwards(prevState => prevState.filter(item => item.id !== confirmRemove.id));
        }
        exportAwards(awards);
    }, [confirmRemove]);

    const createNewAward = (newAward: IAward) => {
        setAwards(prevAward => [...prevAward, newAward]);
        setIdTemp(Math.floor(Math.random() * 1000));
    }

    const titleButton = awards.length > 0 ? 'Adicionar outra premiação' : 'Adicionar premiação';

    return(
        <ContentForm>
            <HeaderForm>
                <DuoTitle size="md" title="Premiações" />
            </HeaderForm>
            <ContainerForm headerForm>
                {awards.map(awardItem =>
                    <UniqueAwards 
                        exportAwards={value => setAward(value)}
                        exportRemoveAward={value => setConfirmRemove({id: value.id, confirm: value.isRemove})}
                        idTemp={awardItem.id}
                        key={awardItem.id}
                    />    
                )}
                <ButtonDefault onPress={() => createNewAward({id: idTemp})} title={titleButton} />
                {/* <ButtonDefault onPress={alertUnavailable} title={titleButton} /> */}
            </ContainerForm>
        </ContentForm>
    );
}