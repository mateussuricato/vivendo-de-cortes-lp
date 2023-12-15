import Vsl from "../Vsl";
import * as S from "./style";

export default function Head() {
    return (
        <S.Container>
            <div className="headline">
                <span className="negrito">O método</span> que vai te fazer ganhar <span className="sublinhado">de 2 a 10 mil por mês</span> <span className="colorido">com Cortes Virais,</span> sem precisar aparecer, usando apenas o celular.  
            </div>
            <S.VslContainer>
            <Vsl />
            </S.VslContainer>
        </S.Container>
    )
}