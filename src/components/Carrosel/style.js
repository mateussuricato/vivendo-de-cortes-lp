import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: scroll; /* Permite rolagem horizontal */
    overflow-y: hidden; /* Evita rolagem vertical */
    max-width: 1150px;
    cursor: grab;
    user-select: none; /* Evita a seleção de texto/imagens */
    touch-action: pan-x; /* Permite apenas o scrolling horizontal na página */

    .item {
        flex: 0 0 auto; /* Evita o colapso dos itens */
    }

    .item img {
        border-radius: 12px;
        max-width: 300px;
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
    }
`;
