import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 13px 13px 0;
  gap: 20px;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  transition: 0.5s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  height: 22px;
`;

export const Separator = styled.div`
  width: 20px;
  border-bottom: 1px solid lightgrey;
`;
