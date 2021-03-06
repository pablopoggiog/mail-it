import React from "react";
import { Container } from "./styles";
import { Folders } from "./Folders";
import { Meet } from "./Meet";
import { Hangouts } from "./Hangouts";
import { Compose } from "./Compose";

export const SideBar = () => (
  <Container>
    <Compose />

    <Folders />

    <Meet />

    <Hangouts />
  </Container>
);
