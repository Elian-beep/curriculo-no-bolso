import { ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { DefaultContent } from "../../default.styled";
import { FormRequired } from "../../components/Forms/FormRequired";
import { ICurriculum, ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { FormAcademic } from "../../components/Forms/FormAcademic";
import { FormProfessional } from "../../components/Forms/FormProfessional";
import { IProfessional } from "../../interfaces/IProfessional";
import { ICertification } from "../../interfaces/ICertification";
import { FormCertification } from "../../components/Forms/FormCertification";
import { IAward } from "../../interfaces/IAward";
import { FormAwards } from "../../components/Forms/FormAwards";
import { ButtonDefault } from "../../components/ButtonDefault";

export const CreateCv = () => {

    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>();
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [certifications, setCertifications] = useState<ICertification[]>([]);
    const [awards, setAwards] = useState<IAward[]>([]);
    const [curriculum, setCurriculum] = useState<ICurriculum>();

    useEffect(() => {
        if(currRequired){
            setCurriculum({
                title: currRequired.title,
                completeName: currRequired.completeName,
                email: currRequired.email,
                phone: currRequired.phone,
                linkedin: currRequired.linkedin,
                academics, professionals, certifications, awards
            });
        }
    }, [currRequired, academics, professionals, certifications, awards]);

    const createCurriculum = () => {
        console.log("Curriculo a ser salvo:");
        console.log(curriculum);
    }

    return (
        <ScrollView>
            <DefaultContent>
                <FormRequired exportCurrRequired={(value) => setCurrRequired(value)} />
                <FormAcademic exportAcademics={(value) => setAcademics(value)} />
                <FormProfessional exportProfessionals={value => setProfessionals(value)} />
                <FormCertification exportCertifications={value => setCertifications(value)} />
                <FormAwards exportAwards={value => setAwards(value)} />
                <Text></Text>
                <ButtonDefault title="Finalizar currículo" onPress={() => createCurriculum()} />
            </DefaultContent>
            <Text></Text>
        </ScrollView>
    );
}