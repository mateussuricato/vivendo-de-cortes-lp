import styled from "styled-components";

export const Container = styled.div`
    
    .inner {
        display: flex;
        gap: 1rem;
    }

    .item {
        
    }

    .item img {
      border-radius: 12px;
      pointer-events: none;
      max-width: 300px;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
        max-width: 1150px;
    }

`;
