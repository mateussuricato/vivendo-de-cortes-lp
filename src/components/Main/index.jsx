import * as S from "./style"

export default function Main() {
    return (
        <div>
     
            <S.Container>
                <S.FlexOne>
                    <h1>+300.000.000 de views</h1>
                    <p>Com <span className="negrito">1 corte viral</span> você atinge milhões de seguidores, constrói uma audiência engajada, <span className="colorido">monetiza</span> sua conta e o melhor de tudo <span className="colorido">lucra muito</span></p>
                </S.FlexOne>
                <S.FlexTwo>
                    <img src="/images/mockups.webp" alt="" />
                </S.FlexTwo>
            </S.Container>
        </div>
    )
}