import React from "react";
import { Checkbox } from "@material-ui/core";
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@material-ui/icons";
import { Container, User, Subject, Time } from "./styles";

export const EmailsListElement = ({ userName, subject, time }) => (
  <Container>
    <Checkbox />
    <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarIcon />} />
    <User>{userName}</User>
    <Subject>{subject}</Subject>
    <Time>{time}</Time>
  </Container>
);
