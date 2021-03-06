import React from "react";
import { SideBar, EmailsLIst, ExtraFeatures } from "components";
import { Container } from "./styles";

export const Body = () => {
  return (
    <Container>
      <SideBar />
      <EmailsLIst />
      <ExtraFeatures />
    </Container>
  );
};
