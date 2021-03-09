import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  Refresh as RefreshIcon,
  MoreVert as MoreVertIcon,
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@material-ui/icons";
import {
  Container,
  TopBar,
  SubContainer,
  EmailsCounter,
  ListContainer,
} from "./styles";
import { EmailItem } from "./EmailItem";
import { data } from "./data";

export const EmailsLIst = () => (
  <Container>
    <TopBar>
      <SubContainer left>
        <Checkbox />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </SubContainer>

      <SubContainer right>
        <EmailsCounter>1-50 de 35,329</EmailsCounter>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </SubContainer>
    </TopBar>

    <ListContainer>
      {data.map((email) => (
        <EmailItem
          starred={false}
          from={email.from}
          subject={email.subject}
          time={email.time}
          read={email.read}
        ></EmailItem>
      ))}
    </ListContainer>
  </Container>
);
