import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: space-evenly;
  width: 140px;
  border-radius: 40px;
  background-color: white;
  border: none;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  place-items: center;
  margin: 15px 0 15px 12px;
  cursor: pointer;
  transition: 0.5s;
  padding-right: 26px;
  height: 48px;

  svg {
    font-size: 34px;
  }

  span {
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #fafafb;
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
  }
`;
