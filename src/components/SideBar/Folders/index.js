import React from "react";
import { data } from "./data";
import { ListElement } from "../ListElement";
import { Container } from "./styles";

export const Folders = () => (
  <Container>
    {data.map((folder) => (
      <ListElement>
        {folder.icon}
        <span>{folder.text}</span>
      </ListElement>
    ))}
  </Container>
);
