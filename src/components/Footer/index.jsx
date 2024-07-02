import Accordion from "../Accordion"
import * as S from "./style"

export default function Footer() {
    return (
        <S.Container>
         <h1>Dúvidas</h1>
             <Accordion
                title={"Posso fazer o pagamento por quais meios?"}
                content={'Você pode pagar via PIX à vista por apenas R$97, ou se preferir, no crédito em 12x de R$9,70'}
             />
             <Accordion
                title={"Como vou receber o acesso ao método?"}
                content={'Assim que o seu pagamento for confirmado você receberá um e-mail com seus dados de acesso na plataforma Kirvano. Dependendo da forma de pagamento, é instantâneo.'}
             />
             <Accordion
                title={"Como funciona as aulas?"}
                content={'As aulas são gravadas e atualizadas constantemente. Você pode assistir no celular ou computador.'}
             />
             <Accordion
                title={"Não tenho computador, consigo ter resultados apenas usando o celular?"}
                content={'Com o método Vivendo de Cortes você vai aprender tudo o que é necessário para crescer, viralizar e lucrar com vídeos curtos usando apenas seu celular ou computador com acesso à internet.'}
             />
             <Accordion
                title={"Em quanto tempo vou ter resultados com o que vou aprender no treinamento?"}
                content={'Tudo depende da sua disponibilidade para estudar e praticar o que ensinamos. Em média 3 semanas nossos alunos já estão colhendo frutos do seu trabalho.'}
             />
             <Accordion
                title={"Por quanto tempo terei acesso ao curso?"}
                content={'O acesso é vitalício, com direito a atualizações das aulas sem pagar nada a mais por isso.'}
             />
             <Accordion
                title={"Existe alguma garantia?"}
                content={'Você pode pagar via PIX à vista por apenas R$ 97, ou se preferir, no crédito em 12x de R$ 9,70'}
             />
             <Accordion
                title={"Tem suporte ao aluno?"}
                content={'Você vai ter acesso ao nosso suporte exclusivo diretamente no WhastApp.'}
             />
        </S.Container>
    )
}