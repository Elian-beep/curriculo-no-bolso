import { Text, View } from "react-native"
import { BoxTop, Content, TextTitle } from "./styled.titleTop"
import { useRouteContext } from "../../../contexts/RouteContext"
import * as NetInfo from "@react-native-community/netinfo"
import { useEffect, useState } from "react"
import { SvgUri } from "react-native-svg"
import { icons_signal } from "../../mock/icons_signal"

export const TitleTop = () => {
    const { currentRouteName } = useRouteContext();
    const [conn, setConn] = useState<boolean>();
    const [title, setTitle] = useState<string>();

    useEffect(() => {
        NetInfo.fetch().then(state => setConn(state.isInternetReachable));
    }, [conn]);

    useEffect(() => {
        setTitle(currentRouteName == 'list' ? "Lista" : "Criar currículo");
    }, [currentRouteName]);

    return (
        <Content>
            <BoxTop>
                <TextTitle>{currentRouteName ? title : "Currículo de bolso"}</TextTitle>
                <SvgUri uri={conn ? icons_signal.on : icons_signal.no} />
            </BoxTop>
        </Content>
    )
}