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
    padding: 1rem 1rem 0rem 1rem;
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
   padding: 1rem 1rem 2rem 1rem;

   h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 20pt;
      color: #0E0F1D;
      max-width: 728px;
   }
`

export const ModulosContainer = styled.div`
   padding: 1rem 0 2rem 0;
   background-color: #000000;
   overflow-x: hidden;

   .provasContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      padding-bottom: 1rem;

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
   padding: 1rem 1rem 2rem 1rem;


   img {
      width: 100%;
      max-width: 500px;
   }

   h1 {
      text-align: center;
      color: #0E0F1D;
   }

   h2 {
      color: green;
      text-align: center;
      font-weight: 600;
   }

   h3 {
      max-width: 450px;
      text-align: center;
      color: #0E0F1D;
      font-weight: 900;
   }

   h4 {
      color: red;
      font-weight: 300;
      font-size: 9pt;

      span {
         color: black;
      }
   }
`

export const Oferta = styled.div`
  display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: black;
   padding: 1rem 1rem 4rem 1rem;

   .imagePadding {
   padding: 0 1.5rem;
  }

   h1 {
      color: white;
      margin-bottom: 3rem;
      text-align: center;
   }
   
`
export const imageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  border-radius: 18px;
  max-width: 500px;
  border: 2px solid orange;
  outline: 2px solid orange;
  outline-offset: 5px;
  box-shadow: 0px 0px 20px 5px orange; /* inset adicionado aqui */

   
   div {
      margin-bottom: 3rem;
      cursor: pointer;
   }

  img {
    max-width: 500px;
    width: 100%;
    border-radius: 18px;

  }

  .button {
   display: none;
  }
`
export const Garantia = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 1rem 1rem 2rem 1rem;
   

   h4 {
      font-size: 19pt;
      max-width: 728px;
      text-align: center;
      margin-bottom: 0.5rem;
      font-weight: 900;
   }

   h5 {
      margin-bottom: 1rem;
      font-size: 15pt;
      color: green;
      font-weight: 800;
      text-align: center;
   }

   p {
         max-width: 470px;
         font-size: 17pt;
         text-align: center;
      }

      strong {
         font-weight: 900;
      }

      img {
         max-width: 250px;
         margin-bottom: 1rem;
      }
`