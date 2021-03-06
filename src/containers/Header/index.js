import React from "react";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  Settings as SettingsIcon,
  Apps as AppsIcon,
  AccountCircle as AccountCircleIcon,
} from "@material-ui/icons";
import HeaderLogo from "assets/header-logo.jpg";
import {
  Container,
  LogoContainer,
  SearchContainer,
  IconsContainer,
} from "./styles";

export const Header = () => (
  <Container>
    <LogoContainer>
      <MenuIcon fontSize="40px" />
      <img src={HeaderLogo} width="120px" alt="App Logo" />
    </LogoContainer>

    <SearchContainer>
      <SearchIcon />
      <input type="text" placeholder="Buscar en el correo electrónico"></input>
      <ExpandMoreIcon />
    </SearchContainer>

    <IconsContainer>
      <HelpOutlineIcon />
      <SettingsIcon />
      <AppsIcon />
      <AccountCircleIcon />
    </IconsContainer>
  </Container>
);
