import { LargeText, MidText } from "./styled.titleLarge"

interface Props {
    title: string,
    size: "lg" | "md",
}

export const DuoTitle = ({size, title}: Props) => {
    return (
        <>
        {
            size == "lg" && <LargeText>{title}</LargeText>
        }
        {
            size == "md" && <MidText>{title}</MidText>
        }
        </>
    )
}