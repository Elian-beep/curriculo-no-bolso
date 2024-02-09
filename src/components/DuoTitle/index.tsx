import { LargeText, MidText, SmallText } from "./styled.titleLarge"

interface Props {
    title: string,
    size: "lg" | "md" | "sm",
}

export const DuoTitle = ({ size, title }: Props) => {
    return (
        <>
            {size == "lg" && <LargeText>{title}</LargeText>}
            { size == "md" && <MidText>{title}</MidText> }
            { size == "sm" && <SmallText>{title}</SmallText> }
        </>
    )
}