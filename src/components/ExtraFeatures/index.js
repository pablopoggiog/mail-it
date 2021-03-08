import React from "react";
import { Add as AddIcon } from "@material-ui/icons";
import { Container, IconContainer, Icon, Separator } from "./styles";
import { data } from "./data";

export const ExtraFeatures = () => {
  return (
    <Container>
      {" "}
      {data.map((feature) => (
        <IconContainer>
          <Icon src={feature.src} />
        </IconContainer>
      ))}{" "}
      <Separator />
      <AddIcon />
    </Container>
  );
};
