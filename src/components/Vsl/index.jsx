import Button from "../Button";
import * as S from "./style";

export default function Vsl() {
    return (
        <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            frameborder="0"
            allowfullscreen
            src="https://player-vz-d8fb2fc1-5b6.tv.pandavideo.com.br/embed/?v=00672039-20d1-492c-a15d-f25c47a28598"
            id="panda-00672039-20d1-492c-a15d-f25c47a28598"
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