import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    overflow: hidden;
    max-width: 1150px;
    cursor: grab;
    user-select: none; /* Evita a seleção de texto/imagens */
    touch-action: pan-y; /* Permite apenas o scrolling vertical na página */

    .item img {
        border-radius: 12px;
        max-width: 300px;
        pointer-events: none;
        user-select: none; /* Evita a seleção de texto/imagens */
    }
`;
