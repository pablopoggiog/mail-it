import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 0.4fr 1fr;
  height: 100%;
`;

export const ComposeButton = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  width: 140px;
  border-radius: 40px;
  background-color: white;
  border: none;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  place-items: center;
  margin: 15px 0;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 12px;

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
  }
`;

export const MeetContainer = styled.div`
  display: grid;
`;

export const HangoutsContainer = styled.div`
  display: grid;
`;
