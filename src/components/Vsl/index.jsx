import Button from "../Button";
import * as S from "./style";

export default function Vsl() {
    return (
        <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            frameborder="0"
            allowfullscreen
            src="https://player-vz-d8fb2fc1-5b6.tv.pandavideo.com.br/embed/?v=deac27ab-e21d-487a-abab-0eede04fec53"
            id="panda-deac27ab-e21d-487a-abab-0eede04fec53"
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