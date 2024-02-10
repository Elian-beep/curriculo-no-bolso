import { ScrollView, Text } from "react-native";
import { useIconsContext } from "../../../contexts/IconsContext";
import { useEffect, useState } from "react";
import { iconCurr, iconList } from "../../mock/icons_tabs";
import { useRouteContext } from "../../../contexts/RouteContext";
import { DefaultContent } from "../../default.styled";
import { FormRequired } from "../../components/Forms/FormRequired";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { FormAcademic } from "../../components/Forms/FormAcademic";
import { FormProfessional } from "../../components/Forms/FormProfessional";
import { IProfessional } from "../../interfaces/IProfessional";

export const CreateCv = () => {

    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>();
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);

    return (
        <ScrollView>
            <DefaultContent>
                <FormRequired exportCurrRequired={(value) => setCurrRequired(value)} />
                <FormAcademic exportAcademics={(value) => setAcademics(value)} />
                <FormProfessional exportProfessionals={value => setProfessionals(value)} />
            </DefaultContent>
            <Text>{professionals.map(item => item.name)}</Text>
        </ScrollView>
    );
}