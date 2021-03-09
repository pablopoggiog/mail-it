import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 210px auto 200px;
  height: 52px;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px;
  grid-gap: 10px;
  place-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding-right: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  border: none;
  background-color: rgb(241, 243, 244);
  box-sizing: border-box;
  height: 100%;
  align-items: center;
  justify-self: flex-start;
  border-radius: 10px;
  padding: 0 15px;

  svg {
    width: 45px;
  }

  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 50px;

    &:focus {
      outline: none;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  justify-content: space-evenly;
  width: 100%;
`;
