import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 230px auto 200px;
  ${"" /* background-color: #f5f7f1; */}
  height: 52px;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px;
  grid-gap: 10px;
  place-items: center;
`;

export const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  ${"" /* place-items: center; */}
  align-items: center;
  ${"" /* justify-content: space-between; */}

  svg {
    color: #5f6368;
  }
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 45px auto 45px;
  width: 100%;
  max-width: 700px;
  border: none;
  background-color: rgb(241, 243, 244);
  box-sizing: border-box;
  height: 100%;
  align-items: center;
  border-radius: 10px;
  padding: 0 15px;

  input {
    background: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  svg {
    color: #5f6368;
  }
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  place-items: center;
  grid-gap: 10px;

  svg {
    color: #5f6368;
  }
`;
