import { BoxTabBar } from "./styled.tabBar";
import { Svg, SvgFromUri, SvgUri } from "react-native-svg";
const list_icon = require("../../assets/icons/list_icon.svg");

export const TabBar = () => {
    return(
        <BoxTabBar>
            <Svg ref={list_icon} />
        </BoxTabBar>
    );
}