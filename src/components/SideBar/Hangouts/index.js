import React from "react";
import { data } from "./data";
import { ListElement } from "../ListElement";
import { Container, Title } from "./styles";

export const Hangouts = () => (
  <Container>
    <Title>Hangouts</Title>
    {data.map((option) => (
      <ListElement>
        {option.icon}
        <span>{option.text}</span>
      </ListElement>
    ))}
  </Container>
);
