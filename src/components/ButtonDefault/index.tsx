import { Text, TouchableOpacity } from "react-native";
import { BoxButton, TitleButton } from "./styled.buttonDefault";

interface Props {
    title: string,
    onPress: () => void
}

export const ButtonDefault = ({onPress, title}: Props) => {
    return(
        <BoxButton onPress={onPress}>
            <TitleButton>{title}</TitleButton>
        </BoxButton>
    );
}