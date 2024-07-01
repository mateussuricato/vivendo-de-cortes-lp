import Vsl from "../Vsl";
import * as S from "./style";

export default function Head() {
    return (
        <S.Container>
        <img src="/images/logo.webp" alt="" />
            <div className="headline">
                <span className="negrito">Descrubra</span> o Método para Ganhar <span className="sublinhado">de 5 a 10 mil por mês</span> <span className="colorido">com Cortes Virais,</span> Sem Aparecer, Usando Apenas o Celular.  
            </div>
            <S.VslContainer>
            <Vsl />
            </S.VslContainer>
        </S.Container>
    )
}