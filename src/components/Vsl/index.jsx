import Button from "../Button";
import * as S from "./style";

export default function Vsl() {
    return (
        <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            frameborder="0"
            allowfullscreen
            src="https://scripts.converteai.net/394ed81b-1314-4e46-b7a6-62856bb6714b/players/64c159e6899aeb000890b037/embed.html"
            id="ifr_64c159e6899aeb000890b037"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
			  }}
            referrerpolicy="origin"
          ></iframe>
        </div>
      <S.Container>
          <Button />
      </S.Container>
    </>
    )
}