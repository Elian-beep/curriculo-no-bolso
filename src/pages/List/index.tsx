import { Text } from "react-native";
import { useEffect, useState } from "react";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";
import { AlertDefault } from "../../components/AlertDefault";
import { DefaultContent } from "../../default.styled";
import { useAppContext } from "../../../contexts/AppContext";
import { RouteProvider, useRouteContext } from "../../../contexts/RouteContext";
import { useIconsContext } from "../../../contexts/IconsContext";
import { iconCurr, iconList } from "../../mock/icons_tabs";

export const List = ({ navigation }) => {
    const [curriculum, setCurriculum] = useState<ISimpleCurriculum[]>([]);
    const { setIconListContext, setIconCurrContext } = useIconsContext();
    const { currentRouteName } = useRouteContext();
    const { setSharedData } = useAppContext();
    setSharedData(navigation);

    useEffect(() => {
        setIconListContext(iconList.dark);
        setIconCurrContext(iconCurr.light);
    }, [currentRouteName]);

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