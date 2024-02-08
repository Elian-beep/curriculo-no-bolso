import { Text } from "react-native";
import { TitleTop } from "../../components/TItleTop";
import { useState } from "react";
import { ICurriculum } from "../../interfaces/ICurriculum";
import { AlertDefault } from "../../components/AlertDefault";
import { DefaultContent } from "../../default.styled";
import { useAppContext } from "../../../contexts/AppContext";

export const List = ({ navigation }) => {
    const [curriculum, setCurriculum] = useState<ICurriculum[]>([]);
    const { setSharedData } = useAppContext();
    setSharedData(navigation);

    return (
        <DefaultContent>
            {curriculum.length > 0
                ?
                    <Text>Uns curriculos aqui</Text>
                :
                    <AlertDefault />
            }
        </DefaultContent>
    );
}