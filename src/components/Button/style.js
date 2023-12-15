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
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 21px;
  border-radius: 5px;
  border: none;
  color: #fff;
  -webkit-box-shadow: 0px 0px 71px 7px #fff500;
  -moz-box-shadow: 0px 0px 71px 7px #fff500;
  box-shadow: 0px 0px 71px #fff500;
  background: linear-gradient(90deg, #fff500, #c67000, #f48a00);
  background-size: 700% 400%;
  animation: ${zoomIn} 0.7s ease-in-out infinite alternate, ${moveBackground} 5s ease infinite; /* Aplica ambas as animações */

  &:hover {
    animation: ${zoomIn} 0.7s ease-in-out infinite alternate, none; /* Reaplica a animação zoomIn no hover */
  }

  &:focus {
    outline: none;
  }
`;
