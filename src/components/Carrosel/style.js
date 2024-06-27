import styled from 'styled-components';

export const Depoimentos = styled.div`
    display: flex;
    padding: 0 1rem;
    gap: 1rem;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 3rem 0 1rem 0;
    cursor: grab;
    user-select: none; /* Evita a seleção de texto/imagens */
    touch-action: pan-x; /* Permite apenas o scrolling horizontal na página */
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none; /* Oculta a barra de rolagem no Chrome, Safari e Opera */
    }
    -ms-overflow-style: none;  /* Oculta a barra de rolagem no Internet Explorer e Edge */
    scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */

    img {
        width: 300px;
        height: 100%;
        border-radius: 12px;
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
        transition: transform 0.2s; /* Adiciona uma transição suave ao arrastar */
    }
`;
