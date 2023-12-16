import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 3rem;
    margin: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    padding: 2rem 1rem;
`

export const FlexOne = styled.div`

max-width: 400px;
 h1 {
    color: #ff9300;
    text-align: center;
    margin-bottom: 2rem;
 }

 p {
    text-align: center;
    font-size: 21px;
 }
 .negrito {
    font-weight: bold;
 }

 .colorido {
    color: #ff9300;
            font-weight: bold;
 }
`

export const FlexTwo = styled.div`


    img {
        width: 100%;
        max-width: 500px;
    }
`