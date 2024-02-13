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
import { useRouteContext } from "../../../contexts/RouteContext";
import { useAppContext } from "../../../contexts/AppContext";
import { createCurrSql } from "../../data/Curriculum";
import { createAcademicSql } from "../../data/Academic";

export const CreateCv = () => {

    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>();
    const [academics, setAcademics] = useState<IAcademic[]>([]);
    const [professionals, setProfessionals] = useState<IProfessional[]>([]);
    const [certifications, setCertifications] = useState<ICertification[]>([]);
    const [awards, setAwards] = useState<IAward[]>([]);
    const [curriculum, setCurriculum] = useState<ICurriculum>();

    const { setCurrentRouteName } = useRouteContext();
    const { sharedData } = useAppContext();

    useEffect(() => {
        setCurrentRouteName("createCv");
    }, []);

    useEffect(() => {
        if (currRequired) {
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

    const createCurriculum = async () => {
        let idCurr: number;

        if (!currRequired.title || !currRequired.completeName || !currRequired.email || !currRequired.phone) {
            console.log("Preencha todas as informações");
        } else {
            const idCurr = await addCurrGetId();
            await addAcademics(idCurr);

            await setCurrentRouteName("list");
            sharedData.navigate("list")
        }
    }

    const addCurrGetId = async (): Promise<number> => {
        try {
            const id = await createCurrSql(currRequired);
            console.log(`Currículo criado com o id: ${id}`);
            return Number(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const addAcademics = async (idCurr: number) => {
        for (const academic of academics) {
            console.log(`salvando ${academic.name}`);
            await createAcademics(academic, idCurr);
        }
    }

    const createAcademics = async (academic: IAcademic, idCurr: number) => {
        await createAcademicSql(academic, idCurr)
            .then(id => `Acadêmico criado com o id: ${id}`)
            .catch(err => console.log(err));
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
                <ButtonDefault title="Finalizar currículo" onPress={createCurriculum} />
            </DefaultContent>
            <Text></Text>
        </ScrollView>
    );
}