import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Sora', sans-serif;

    .headline {
        font-size: 2rem;
        margin-bottom: 1rem;
        max-width: 550px;
        text-align: center;
        font-weight: 400;
        
        .negrito {
            font-weight: bold;
        }

        .sublinhado {
            text-decoration: underline;
        }

        .colorido {
            color: #ff9300;
            font-weight: bold;
        }
    }
`