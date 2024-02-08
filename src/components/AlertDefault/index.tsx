import { Button, Image, View } from "react-native"
import { DuoTitle } from "../DuoTitle"
import { DescriptionText, FlexVertCenter } from "./styled.alertDefault"
import { ButtonDefault } from "../ButtonDefault";

export const AlertDefault = () => {

    return (
        <FlexVertCenter>
            <DuoTitle title="OPS!" size="lg" />
            <Image source={require('../../assets/images/fig_papers.png')} width={100} height={100} />
            <DescriptionText>
                Parece que ainda não há nenhum currículo criado. Toque no botão 'Criar currículo' e inicie sua primeira jornada profissional.
            </DescriptionText>
            <ButtonDefault title="Criar Curriculo" onPress={() => console.log("Vamos criar um currículo bro")} />
        </FlexVertCenter>
    )
}