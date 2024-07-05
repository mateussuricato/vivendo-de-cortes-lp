import * as S from "./style";

export default function Button({nome = "quero começar agora"}) {
    return (
        <div>
            <S.Button href="https://pay.kirvano.com/441d617a-962b-4d18-b06b-195489afc5ef">{nome}</S.Button>
        </div>
    )
}