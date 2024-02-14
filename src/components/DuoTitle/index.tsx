import { LargeText, MidText, SmallText } from "./styled.titleLarge"

interface Props {
    title: string,
    size: "lg" | "md" | "sm",
    center?: boolean,
}

export const DuoTitle = ({ size, title, center=false }: Props) => {
    return (
        <>
            {size == "lg" && <LargeText center={center}>{title}</LargeText>}
            { size == "md" && <MidText center={center}>{title}</MidText> }
            { size == "sm" && <SmallText center={center}>{title}</SmallText> }
        </>
    )
}