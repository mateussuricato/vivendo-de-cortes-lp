import SwiperDiv from "../SwiperDiv"
import Card from "../Card"
import * as S from "./style"
import CarrosselProvas from "../CarrosselProvas"
import Carrossel from "../Carrossel"
import Button from "../Button";

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
                <h1>Essa é a Maneira Mais Fácil de Começar a Ganhar Dinheiro na Internet</h1>
                <Card emoji={`✅`} text={'Sem precisar aparecer'}/>
                <Card emoji={`✅`} text={'Sem precisar investir nenhum real'}/>
                <Card emoji={`✅`} text={'Sem gastar nenhum centavo com tráfego pago'}/>
            </S.CardsContainer>
            <S.ModulosContainer>
                <h2>Veja um pouco do que você irá aprender</h2>
                <SwiperDiv></SwiperDiv>
                <div className="provasContainer">
                        <div className="carrosselContainer">
                            <h2 className="titlePerfils">Páginas que aplicaram o Método e estão Vivendo de Cortes</h2>
                        <Carrossel></Carrossel>
                        </div>
                    <div className="carrosselContainer2">
                        <div className="titleCenter">
                        <h2 className="titleProva">Resultados de Pessoas que Aplicaram o Método</h2>
                        </div>
                        <CarrosselProvas></CarrosselProvas>
                    </div>
                </div>
            </S.ModulosContainer>
            <S.CopyContainer>
                <h1>Eu vou te ensinar a Técnica da Dupla Aliança </h1>
                <h2>e você vai conseguir multiplicar seus ganhos</h2>
                <img src="/images/alianca.webp" alt="" />
                <h3>com essa técnica simples de implementar eu consegui ganhar milhares de reais a mais</h3>
                <h4><span>(</span>o único método na internet que ensina essa técnica<span>)</span></h4>
            </S.CopyContainer>
            <S.Oferta>
            <h1>Então chegou a hora de você criar um negócio digital</h1>
                <S.imageContainer>
                    <img src="/images/ofertavivendodecortes.webp" alt="" />
                    <Button/>
                </S.imageContainer>
            </S.Oferta>
        </div>
    )
}