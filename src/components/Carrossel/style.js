import styled from 'styled-components';

export const Depoimentos = styled.div`
     display: flex;
    margin: auto;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 3rem 0 1rem 0;
    cursor: grab;
    user-select: none;
    /* touch-action: pan-y; */
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    img {
        width: 250px;
        height: 100%;
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
        transition: transform 0.2s; /* Adiciona uma transição suave ao arrastar */
        display: inline-block;
        border-radius: 12px;
        border: 2px solid transparent;
        background-image: linear-gradient(white, white), linear-gradient(45deg, #FF7F50, #FF4500, #FF8C00, #FFD700, #FFA500);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }
`;
