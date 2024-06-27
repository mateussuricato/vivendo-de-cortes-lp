import SwiperDiv from "../SwiperDiv"
import Card from "../Card"
import * as S from "./style"
import Carrosel from "../Carrosel"

export default function Main() {
    return (
        <div>
            <S.Container>
                <S.FlexOne>
                    <h1>+500.000.000 de views</h1>
                    <p>Apenas <span className="negrito colorido">um corte viral</span> pode te fazer ganhar milhões de seguidores, construir uma audiência engajada e <span className="colorido">lucrar</span> muito usando apenas o <span className="colorido">celular</span></p>
                </S.FlexOne>
                <S.FlexTwo>
                    <img src="/images/mockups.webp" alt="" />
                </S.FlexTwo>
            </S.Container>
            <S.CardsContainer>
                <h1>ESSA É A MANEIRA MAIS FÁCIL DE COMEÇAR A GANHAR DINHEIRO NA INTERNET</h1>
                <Card emoji={`✅`} text={'Sem precisar aparecer'}/>
                <Card emoji={`✅`} text={'Sem precisar investir nenhum real'}/>
                <Card emoji={`✅`} text={'Sem gastar nenhum centavo com tráfego pago'}/>
            </S.CardsContainer>
            <S.ModulosContainer>
                <h2>Veja um pouco do que você irá aprender</h2>
                <SwiperDiv></SwiperDiv>
                <div className="carrosselContainer">
                    <h2 className="titlePerfils">Páginas que aplicaram o Método e estão Vivendo de Cortes</h2>
                <Carrosel></Carrosel>
                </div>
            </S.ModulosContainer>
        </div>
    )
}