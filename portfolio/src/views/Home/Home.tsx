import React from "react";
import { Container } from "./style";
import Skill from "./Skill";
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import { Profile } from "./Profile";

export default function Home() {
  return (
    <>
      <Container>
        <Profile />
        <Aboutme />
        <Skill />
        <Projects />
      </Container>
    </>
  );
}
