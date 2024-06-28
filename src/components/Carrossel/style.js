import styled from 'styled-components';


export const Container = styled.div`

margin-top: 3rem;

img {
    width: 250px;
    display: inline-block;
    border: 3px solid transparent;
    background-image: linear-gradient(white, white), linear-gradient(45deg, #FF7F50, #FF4500, #FF8C00, #FFD700, #FFA500);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 18px;

    @media (min-width: 900px) {
        width: 300px;
    }
}

.swiper {
  width: 250px;

  @media (min-width: 900px) {
        width: 300px;
    }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
`;
