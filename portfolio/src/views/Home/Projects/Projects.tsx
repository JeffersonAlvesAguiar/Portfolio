import React from "react";
import {
  BoxBtn,
  BoxCard,
  BoxGrid,
  BoxTitleVideo,
  BoxVideo,
  BoxVideoTeste,
  Btn__Box,
  ContainerProjects,
} from "./style";
import video1 from "../../../assets/video/Decodificador - Google Chrome 2024-03-06 21-22-26.mp4";

export default function Projects() {
  return (
    <>
      <ContainerProjects>
        <BoxGrid>
          <BoxCard>
            <BoxVideoTeste>
              <BoxTitleVideo>decodificador</BoxTitleVideo>
              <BoxVideo autoPlay src={video1}></BoxVideo>
            </BoxVideoTeste>
            <BoxBtn>
              <Btn__Box
                target="blank"
                href="https://github.com/JeffersonAlvesAguiar/Decodificador"
              >
                GitHub
              </Btn__Box>
              <Btn__Box
                target="blank"
                href="https://jeffersonalvesaguiar.github.io/Decodificador/"
              >
                Abrir em nova guia
              </Btn__Box>
            </BoxBtn>
          </BoxCard>
        </BoxGrid>
      </ContainerProjects>
    </>
  );
}
