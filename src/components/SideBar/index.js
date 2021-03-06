import React from "react";
import { Add as AddIcon } from "@material-ui/icons";
import { Container, ComposeButton, HangoutsContainer } from "./styles";
import { Folders } from "./Folders";
import { Meet } from "./Meet";

export const SideBar = () => (
  <Container>
    <ComposeButton>
      <AddIcon />
      <span>Redactar</span>
    </ComposeButton>

    <Folders />

    <Meet />

    <HangoutsContainer>Hangouts</HangoutsContainer>
  </Container>
);
