import * as S from "./style";

export default function Button({nome = "quero começar agora"}) {
    return (
        <div>
            <S.Button>{nome}</S.Button>
        </div>
    )
}