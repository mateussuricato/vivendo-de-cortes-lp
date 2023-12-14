import styled, {keyframes} from "styled-components";


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

export const Button = styled.a`
    font-family: 'Sora', sans-serif;
    cursor: pointer;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.72);
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 700;
  font-size: 21px;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    #fff500,
    #c67000,
    #f48a00
  );
  background-size: 700% 400%;
  animation: ${moveBackground} 5s ease infinite;

  &:hover {
    animation: none; /* Remove a animação no hover se desejar */
  }

  &:focus {
    outline: none;
  }

` 