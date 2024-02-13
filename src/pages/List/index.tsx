import { ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { AlertDefault } from "../../components/AlertDefault";
import { DefaultContent } from "../../default.styled";
import { useAppContext } from "../../../contexts/AppContext";
import { useRouteContext } from "../../../contexts/RouteContext";
import { getAllCurrSql } from "../../data/Curriculum";
import { CardCurr } from "../../components/CardCurr";
import { ContainerCardsCurr } from "./styled.list";
import { initializeDatabase } from "../../data/SQLiteDatabase";

export const List = ({ navigation }) => {
    const [curriculum, setCurriculum] = useState<ISimpleCurriculum[]>([]);
    const { currentRouteName } = useRouteContext();
    const { setSharedData } = useAppContext();
    setSharedData(navigation);

    useEffect(() => {
        if (currentRouteName === "list") {
            syncCurr();
        }
    }, [currentRouteName]);

    const syncCurr = async () => {
        await getAllCurrSql().then((response: ISimpleCurriculum[]) => {
            setCurriculum(response);
        });
    }

    return (
        <ScrollView>
            <DefaultContent>
                {curriculum.length > 0
                    ?
                    <ContainerCardsCurr>
                        {curriculum.map(currItem => <CardCurr curriculum={currItem} key={currItem.id} />)}
                    </ContainerCardsCurr>
                    :
                    <AlertDefault />
                }
                <Text></Text>
            </DefaultContent>
        </ScrollView>
    );
}