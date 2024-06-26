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

export const CardsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: white;
   background-image: url("/images/grid.jpg");
   font-family: 'Sora', sans-serif;
   padding: 2rem 1rem 0rem 1rem;

   h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 20pt;
      max-width: 728px;
   }
`

export const ModulosContainer = styled.div`
   padding: 2rem 0;
   background-color: #181920;

   h2 {
      color: #ffffff;
      text-align: center;
   }
`