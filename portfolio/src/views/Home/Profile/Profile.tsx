import React from "react";
import {
  Avatar,
  Btn__social,
  CargoProfile,
  Container,
  ContainerDescription,
  ContainerButton,
  NameProfile,
  Box,
} from "./style";
import AvatarImg from "../../../assets/avatar/Jefferson Alves de Aguiar.jpeg";

export const Profile = () => {
  const linkedin = "https://www.linkedin.com/in/jefferson-alves-developer/";
  const gitHub = "https://github.com/JeffersonAlvesAguiar";
  return (
    <>
      <Container>
        <Avatar src={AvatarImg} alt="avatar" />

        <Box>
          <ContainerDescription>
            <NameProfile>Jefferson Alves</NameProfile>
            <CargoProfile>Developer_</CargoProfile>
          </ContainerDescription>

          <ContainerButton>
            <Btn__social href={gitHub} target="blank">
              GitHub
            </Btn__social>
            <Btn__social href={linkedin} target="blank">
              Linkedin
            </Btn__social>
            <Btn__social>Curriculo</Btn__social>
          </ContainerButton>
        </Box>
      </Container>
    </>
  );
};
