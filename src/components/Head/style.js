import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Sora', sans-serif;
    background-image: url("/images/abstract.webp");
    background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;

    .headline {
        font-size: 2rem;
        max-width: 550px;
        text-align: center;
        font-weight: 400;
        margin: 0 auto 0 auto;
        padding-top: 2rem;

        
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
	padding: 1rem;
    max-width: 700px;
	margin: 1.2rem auto 0 auto;
`