import styled from "styled-components";

export const ListElement = styled.div`
  display: flex;
  gap: 17px;
  border-radius: 0 16px 16px 0;
  width: 100%;
  padding: 5px 12px 5px 26px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  max-height: 35px;
  align-items: center;
  align-self: center;

  span {
    font-size: 13px;
  }

  &:hover {
    background-color: #f1f3f4;
  }
`;
