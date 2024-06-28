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
   padding: 2rem 1rem 2rem 1rem;

   h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 20pt;
      color: #0E0F1D;
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

      @media (max-width: 995px) {
         margin-top: -2rem;
          margin-bottom: -1rem;
   }
   }

   .titleProva {
      max-width: 400px;
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
         margin-top: -0.5rem;
          margin-bottom: 1.6rem;
   }
   }
`

export const CopyContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: white;
   background-image: url("/images/grid.jpg");
   font-family: 'Sora', sans-serif;
   padding: 2rem 1rem 2rem 1rem;


   img {
      width: 300px;
   }

   h1 {
      text-align: center;
      color: #0E0F1D;
   }

   h2 {
      color: #ff8c00;
      text-align: center;
      font-weight: 500;
   }

   h3 {
      width: 450px;
      text-align: center;
      color: #0E0F1D;
      font-weight: 900;
   }

   h4 {
      color: red;
      font-weight: 300;
      font-size: 10pt;

      span {
         color: black;
      }
   }
`
