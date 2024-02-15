import React, { useEffect, useState } from "react"
import { ICurriculum, ISimpleCurriculum } from "../../interfaces/ICurriculum"
import { Alert, TouchableOpacity } from "react-native";
import { ContainerForm } from "../../default.styled";
import { DuoTitle } from "../DuoTitle";
import { ContentActions } from "./styled.cardCurr";
import { icons_actions } from "../../mock/icons_actions";
import { BtnAction } from "./BtnAction";
import Colors from "../../assets/Colors";
import { IProfessional } from "../../interfaces/IProfessional";
import { ICertification } from "../../interfaces/ICertification";
import { IAward } from "../../interfaces/IAward";
import { getAcademicsByCurr } from "../../data/Academic";
import { removeCurrSql } from "../../data/Curriculum";
import { getProfessionalByCurr } from "../../data/Professional";
import { alertUnavailable } from "../../services/AlertUnavailable";
import { generatePdf } from "../../services/generatePdf";
import { getCertificationsByCurr } from "../../data/Certification";
import { getAwardsByCurr } from "../../data/Award";

interface Props {
    curriculum: ISimpleCurriculum,
    onCurrRemove: () => void,
}

export const CardCurr: React.FC<Props> = ({ curriculum, onCurrRemove }) => {
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [certifications, setCertifications] = useState<ICertification[]>([]);
    const [awards, setAwards] = useState<IAward[]>([]);

    useEffect(() => {
        listAllInfo();
    }, []);

    const listAllInfo = async () => {
        console.log("Buscando o restante das informações");
        await getAcademicsByCurr(curriculum.id).then((response: IAcademic[]) => {
            setAcademics(response);
        });
        await getProfessionalByCurr(curriculum.id).then((response: IProfessional[]) => {
            setProfessionals(response);
        })
        await getCertificationsByCurr(curriculum.id).then((response: ICertification[]) => {
            setCertifications(response);
        });
        await getAwardsByCurr(curriculum.id).then((response: IAward[]) => {
            setAwards(response);
        });
    }

    const removeCurr = async () => {
        Alert.alert(
            "Confirmação",
            "Tem certeza que deseja excluir este currículo?",
            [
                {
                    text: 'Sim',
                    onPress: async () => {
                        await removeCurrSql(curriculum.id)
                            .then(updated => console.log("Currículo removido: ", updated))
                            .catch(err => console.log(err));
                        onCurrRemove();
                    }
                },
                {
                    text: 'Não'
                }
            ]
        )
    }

    return (
        <TouchableOpacity onPress={listAllInfo}>
            <ContainerForm>
                <DuoTitle size="md" title={curriculum.title} />
                <ContentActions>
                    <BtnAction color={Colors.blue_mid} icon={icons_actions.pencil} title="Editar" exportAction={alertUnavailable} />
                    <BtnAction color={Colors.blue_mid} icon={icons_actions.download} title="Gerar PDF" exportAction={() => generatePdf({
                        id: curriculum.id,
                        title: curriculum.title,
                        completeName: curriculum.completeName,
                        email: curriculum.email,
                        phone: curriculum.phone,
                        linkedin: curriculum.linkedin,
                        academics, awards, certifications, professionals
                    })} />
                    <BtnAction color={Colors.red_dark} icon={icons_actions.trash} title="Excluir" exportAction={() => removeCurr()} />
                </ContentActions>
            </ContainerForm>
        </TouchableOpacity>
    );
}