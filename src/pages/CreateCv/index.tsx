import { ScrollView, Text } from "react-native";
import { useIconsContext } from "../../../contexts/IconsContext";
import { useEffect, useState } from "react";
import { iconCurr, iconList } from "../../mock/icons_tabs";
import { useRouteContext } from "../../../contexts/RouteContext";
import { DefaultContent } from "../../default.styled";
import { FormRequired } from "../../components/Forms/FormRequired";
import { ISimpleCurriculum } from "../../interfaces/ICurriculum";

export const CreateCv = () => {
    const { currentRouteName } = useRouteContext();
    
    const [currRequired, setCurrRequired] = useState<ISimpleCurriculum>({completeName: "", email: "", phone: "", title: ""});
    
    // const { setIconListContext, setIconCurrContext } = useIconsContext();
    // useEffect(() => {
    //     setIconListContext(iconList.light);
    //     setIconCurrContext(iconCurr.dark);
    // }, [currentRouteName]);

    return (
        <DefaultContent>
            <ScrollView>
                <FormRequired exportCurrRequired={(value) => setCurrRequired(value)} />
            </ScrollView>
        </DefaultContent>
    );
}