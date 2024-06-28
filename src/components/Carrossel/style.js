import styled from 'styled-components';


export const Container = styled.div`

margin-top: 3rem;

img {
    width: 250px;
    display: inline-block;
    border: 2px solid transparent;
    background-image: linear-gradient(white, white), linear-gradient(45deg, #FF7F50, #FF4500, #FF8C00, #FFD700, #FFA500);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 18px;
}

.swiper {
  width: 250px;

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

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
`;
