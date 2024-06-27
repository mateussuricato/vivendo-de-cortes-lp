import styled from 'styled-components';

export const Depoimentos = styled.div`
    display: flex;
    margin: auto;
    gap: 1rem;
    padding: 0 1rem;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 3rem 0 1rem 0;
    cursor: grab;
    user-select: none; /* Evita a seleção de texto/imagens */
    touch-action: pan-y; /* Permite a rolagem vertical quando não estiver arrastando horizontalmente */
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none; /* Oculta a barra de rolagem no Chrome, Safari e Opera */
    }
    -ms-overflow-style: none;  /* Oculta a barra de rolagem no Internet Explorer e Edge */
    scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */

    img {
        width: 250px;
        height: 100%;
        border-radius: 12px;
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
        transition: transform 0.2s; /* Adiciona uma transição suave ao arrastar */
    }
`;
