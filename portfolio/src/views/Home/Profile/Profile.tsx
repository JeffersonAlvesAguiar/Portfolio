import React from "react";
import {
  Avatar,
  Btn__social,
  CargoProfile,
  Container,
  BoxDescription,
  BoxButton,
  NameProfile,
  Box,
  BoxTech,
  IconTech,
} from "./style";
import AvatarImg from "../../../assets/avatar/Jefferson Alves de Aguiar.jpeg";
import iconHtml from "../../../assets/icon/tech/icons8-html.svg";
import iconCSS from "../../../assets/icon/tech/icons8-css.svg";
import iconJavaScript from "../../../assets/icon/tech/icons8-javascript.svg";
import iconTypeScript from "../../../assets/icon/tech/icons8-typescript.svg";
import iconReact from "../../../assets/icon/tech/reactjs-svgrepo-com.svg";
import iconStyledComponents from "../../../assets/icon/tech/styled-components-svgrepo-com.svg";
import iconAngular from "../../../assets/icon/tech/angular-svgrepo-com.svg";
import iconScss from "../../../assets/icon/tech/scss-svgrepo-com.svg";

export const Profile = () => {
  const linkedin = "https://www.linkedin.com/in/jefferson-alves-developer/";
  const gitHub = "https://github.com/JeffersonAlvesAguiar";
  return (
    <>
      <Container>
        <Avatar src={AvatarImg} alt="avatar" />

        <Box>
          <BoxDescription>
            <NameProfile>Jefferson Alves</NameProfile>
            <CargoProfile>Developer_</CargoProfile>
          </BoxDescription>

          <BoxButton>
            <Btn__social href={gitHub} target="blank">
              GitHub
            </Btn__social>
            <Btn__social href={linkedin} target="blank">
              Linkedin
            </Btn__social>
            <Btn__social>Currículo</Btn__social>
          </BoxButton>
          <BoxTech>
            <IconTech src={iconHtml} alt="" />
            <IconTech src={iconCSS} alt="" />
            <IconTech src={iconJavaScript} alt="" />
            <IconTech src={iconTypeScript} alt="" />
            <IconTech src={iconReact} alt="" />
            <IconTech src={iconStyledComponents} alt="" />
            <IconTech src={iconAngular} alt="" />
            <IconTech src={iconScss} alt="" />
          </BoxTech>
        </Box>
      </Container>
    </>
  );
};
