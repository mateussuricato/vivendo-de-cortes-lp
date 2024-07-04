import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Sora', sans-serif;
    background-image: url("/images/abstract.webp");
    background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;

    img {
        padding: 3rem 0 1rem 0;
        display: flex;
        justify-self: center;
        align-self: center;
        margin: auto;
        width: 100%;
        max-width: 200px;
    }

    .headline {
        font-size: 2rem;
        max-width: 580px;
        text-align: center;
        font-weight: 400;
        margin: 0 auto 0 auto;
        padding-top: 1rem;
        padding: 0 1rem;

        @media (max-width: 579px) {
  
    font-size: 1.5rem;
 
  }

        
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

export const VslContainer = styled.div`
    max-width: 700px;
	margin: 1.2rem auto 0 auto;
    padding: 0 0.5rem;
`