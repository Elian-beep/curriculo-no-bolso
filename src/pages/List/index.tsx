import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { AlertDefault } from "../../components/AlertDefault";
import { DefaultContent } from "../../default.styled";
import { useAppContext } from "../../../contexts/AppContext";
import { useRouteContext } from "../../../contexts/RouteContext";
import { getAllCurrSql } from "../../data/Curriculum";
import { CardCurr } from "../../components/CardCurr";
import { ContainerCardsCurr } from "./styled.list";

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

    const handleRemoveCurr = async () => {
        await syncCurr();
    };

    return (
        <ScrollView>
            <DefaultContent>
                {curriculum.length > 0
                    ?
                    <ContainerCardsCurr>
                        {curriculum.map(currItem => <CardCurr onCurrRemove={handleRemoveCurr} curriculum={currItem} key={currItem.id} />)}
                    </ContainerCardsCurr>
                    :
                    <AlertDefault />
                }
            </DefaultContent>
        </ScrollView>
    );
}