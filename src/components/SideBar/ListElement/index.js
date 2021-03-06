import styled from "styled-components";

export const ListElement = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  border-radius: 0 16px 16px 0;
  width: 100%;
  padding: 0 12px 0 26px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  height: 100%;
  align-items: center;
  align-self: center;

  span {
    font-size: 0.75em;
  }

  &:hover {
    background-color: #f1f3f4;
  }
`;
