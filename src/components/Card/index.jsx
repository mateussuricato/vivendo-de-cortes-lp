import * as S from "./style"

export default function Card({emoji, text}) {
    return (
        <S.Container>
            <S.Emoji>{emoji}</S.Emoji>
            <S.Text>{text}</S.Text>
        </S.Container>
    )
}