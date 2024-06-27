import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto; /* Permite rolagem horizontal */
    overflow-y: hidden; /* Evita rolagem vertical */
    max-width: 100%;
    cursor: grab;
    user-select: none; /* Evita a seleção de texto/imagens */
    touch-action: pan-x; /* Permite apenas o scrolling horizontal na página */
    scroll-behavior: smooth; /* Adiciona suavidade à rolagem */

    .item {
        flex: 0 0 auto; /* Evita o colapso dos itens */
        min-width: 300px; /* Define uma largura mínima para os itens */
    }

    .item img {
        border-radius: 12px;
        width: 100%; /* Faz com que a imagem ocupe toda a largura do item */
        height: auto; /* Mantém a proporção da imagem */
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
    }
`;
