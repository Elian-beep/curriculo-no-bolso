import { ScrollView, Text } from "react-native";
import { useState } from "react";
import { DefaultContent } from "../../default.styled";
import { FormRequired } from "../../components/Forms/FormRequired";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { FormAcademic } from "../../components/Forms/FormAcademic";
import { FormProfessional } from "../../components/Forms/FormProfessional";
import { IProfessional } from "../../interfaces/IProfessional";
import { ICertification } from "../../interfaces/ICertification";
import { FormCertification } from "../../components/Forms/FormCertification";
import { IAward } from "../../interfaces/IAward";
import { FormAwards } from "../../components/Forms/FormAwards";

export const CreateCv = () => {

    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>();
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [certifications, setCertifications] = useState<ICertification[]>([]);
    const [awards, setAwards] = useState<IAward[]>([]);

    return (
        <ScrollView>
            <DefaultContent>
                <FormRequired exportCurrRequired={(value) => setCurrRequired(value)} />
                <FormAcademic exportAcademics={(value) => setAcademics(value)} />
                <FormProfessional exportProfessionals={value => setProfessionals(value)} />
                <FormCertification exportCertifications={value => setCertifications(value)} />
                <FormAwards exportAwards={value => setAwards(value)} />
            </DefaultContent>
            <Text>{awards.map(item => item.name)}</Text>
        </ScrollView>
    );
}