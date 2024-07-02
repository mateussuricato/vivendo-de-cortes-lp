import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1); /* Ajuste o valor da escala para um efeito sutil */
  }
`;

export const Button = styled.a`
  font-family: 'Sora', sans-serif;
  cursor: pointer;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.72);
  padding: 20px 15px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  
  background: linear-gradient(90deg, #109010, #008000, #0a5c0a);
  background-size: 700% 400%;
  animation: ${zoomIn} 0.5s ease-in-out infinite alternate, ${moveBackground} 2s ease infinite; /* Aplica ambas as animações */

  &:hover {
    animation: ${zoomIn} 0.5s ease-in-out infinite alternate, none; /* Reaplica a animação zoomIn no hover */
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 475px) {
    font-size: 18.5px;
  }
`;
