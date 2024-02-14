import { BoxTop, Content, TextTitle } from "./styled.titleTop"
import { useRouteContext } from "../../../contexts/RouteContext"
import * as NetInfo from "@react-native-community/netinfo"
import { useEffect, useState } from "react"
import { SvgUri } from "react-native-svg"
import { icons_signal } from "../../mock/icons_signal"
// import * as Telephony from 'react-native-telephony';

export const TitleTop = () => {
    const { currentRouteName } = useRouteContext();
    const [isConnected, setIsConnected] = useState(false);
    const [title, setTitle] = useState<string>();

    // useEffect(() => {
    //     NetInfo.fetch().then(state => setIsConnected(state.isInternetReachable));
    // }, [isConnected, currentRouteName]);

    useEffect(() => {
        setTitle(currentRouteName == 'list' ? "Lista" : "Criar currículo");
    }, [currentRouteName]);

    useEffect(() => {
        // Função para lidar com a mudança de conexão
        const handleConnectivityChange = state => {
          setIsConnected(state.isConnected);
        };
    
        // Adicione o ouvinte de mudança de conexão
        const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    
        // Verifique o estado da conexão quando o componente é montado
        NetInfo.fetch().then(state => {
          setIsConnected(state.isConnected);
        });
    
        // Retorne uma função de limpeza para remover o ouvinte quando o componente for desmontado
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