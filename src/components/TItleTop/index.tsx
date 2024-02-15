import { BoxTop, Content, TextTitle } from "./styled.titleTop"
import { useRouteContext } from "../../../contexts/RouteContext"
import { useEffect, useState } from "react"
import { SvgUri } from "react-native-svg"
import { icons_signal } from "../../mock/icons_signal"
import * as NetInfo from "@react-native-community/netinfo"
// import * as Telephony from 'react-native-telephony';

export const TitleTop = () => {
    const { currentRouteName } = useRouteContext();
    const [isConnected, setIsConnected] = useState(false);
    const [title, setTitle] = useState<string>();

    useEffect(() => {
        setTitle(currentRouteName == 'list' ? "Lista" : "Criar currículo");
    }, [currentRouteName]);

    useEffect(() => {
        const handleConnectivityChange = state => {
          setIsConnected(state.isConnected);
        };
    
        const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
        NetInfo.fetch().then(state => {
          setIsConnected(state.isConnected);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <Content>
            <BoxTop>
                <TextTitle>{currentRouteName ? title : "Currículo de bolso"}</TextTitle>
                <SvgUri uri={isConnected ? icons_signal.on : icons_signal.no} />
            </BoxTop>
        </Content>
    )
}