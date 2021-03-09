import React from "react";
import { Checkbox } from "@material-ui/core";
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  LabelOutlined as LabelOutlinedIcon,
  Label as LabelIcon,
} from "@material-ui/icons";
import { Container, User, Subject, Time } from "./styles";

export const EmailItem = ({ from, subject, time, read }) => (
  <Container read={read}>
    <Checkbox />
    <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarIcon />} />
    <Checkbox icon={<LabelOutlinedIcon />} checkedIcon={<LabelIcon />} />
    <User>{from}</User>
    <Subject>{subject}</Subject>
    <Time>{time}</Time>
  </Container>
);
