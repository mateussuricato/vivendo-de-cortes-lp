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
   background-color: #000000;
   overflow-x: hidden;

   .provasContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;

      @media (min-width: 900px) {
        gap: 9rem;
    }
   }

   .flexSpace {
      display: flex;
      align-items: center;
      justify-content: space-around;
   }

   h2 {
      color: #ffffff;
      text-align: center;
   }

   .titlePerfils {
      padding: 0 1rem;
      max-width: 400px;
   }

   .titleProva {
      padding: 0 1rem;
  

   }

   .carrosselContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

     

      @media (min-width: 995px) {
        height: 700px;
    }
   }

   .carrosselContainer2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  

      @media (min-width: 995px) {
        height: 710px;
    }

 
   }

   .titleCenter {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 995px) {
          margin-bottom: 2rem;
   }
   }
`