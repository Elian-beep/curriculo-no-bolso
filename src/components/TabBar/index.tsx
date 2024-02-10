import { BoxTabBar, HandleClickIcon, TitleTab } from "./styled.tabBar";
import { SvgUri } from "react-native-svg";
import React, { useState } from "react";
import { useRouteContext } from "../../../contexts/RouteContext";
import { iconCurr, iconList } from "../../mock/icons_tabs";
import { useAppContext } from "../../../contexts/AppContext";
import { useIconsContext } from "../../../contexts/IconsContext";

export const TabBar: React.FC = () => {
    const { setCurrentRouteName } = useRouteContext();
    const { sharedData } = useAppContext();
    const { iconListContext, iconCurrContext } = useIconsContext();
    const [switchInFocus, setSwitchInFocus] = useState<boolean>(true);

    const handleRoute = async (dataRoute) => {
        if(dataRoute.nameRoute == "list"){
            await sharedData.navigate("list")
        }else if (dataRoute.nameRoute == "createCv"){
            await sharedData.navigate("createCv")
        }
        setSwitchInFocus(!setSwitchInFocus);
        setCurrentRouteName(dataRoute.nameRoute);
    }

    return (
        <BoxTabBar>
            <HandleClickIcon onPress={() => handleRoute(iconList)}>
                <SvgUri uri={iconListContext} />
                <TitleTab inFocus={switchInFocus}>Lista</TitleTab>
            </HandleClickIcon>
            <HandleClickIcon onPress={() => handleRoute(iconCurr)}>
                <SvgUri uri={iconCurrContext} />
                <TitleTab inFocus={!switchInFocus}>Criar Currículo</TitleTab>
            </HandleClickIcon>
        </BoxTabBar>
    );
}