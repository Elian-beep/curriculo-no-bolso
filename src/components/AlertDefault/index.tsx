import { Button, Image, View } from "react-native"
import { DuoTitle } from "../DuoTitle"
import { DescriptionText, FlexVertCenter } from "./styled.alertDefault"
import { ButtonDefault } from "../ButtonDefault";
import { useRouteContext } from "../../../contexts/RouteContext";
import { useAppContext } from "../../../contexts/AppContext";

export const AlertDefault = () => {
    const { sharedData } = useAppContext();
    const { setCurrentRouteName } = useRouteContext();

    const handleCreateCv = async () => {
        await setCurrentRouteName("createCv");
        sharedData.navigate("createCv")
    }

    return (
        <FlexVertCenter>
            <DuoTitle title="OPS!" size="lg" />
            <Image source={require('../../assets/images/fig_papers.png')} width={100} height={100} />
            <DescriptionText>
                Parece que ainda não há nenhum currículo criado. Toque no botão 'Criar currículo' e inicie sua primeira jornada profissional.
            </DescriptionText>
            <ButtonDefault title="Criar Curriculo" onPress={handleCreateCv} />
        </FlexVertCenter>
    )
}