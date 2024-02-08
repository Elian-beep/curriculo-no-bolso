import { Text, View } from "react-native"
import { Content, TextTitle } from "./styled.titleTop"

interface Props {
    text: string
}

export const TitleTop = ({text}: Props) => {
    return (
        <Content>
            <TextTitle>{text}</TextTitle>
        </Content>
    )
}