import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 30px 1fr 4fr 1fr;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-left: 5px;
`;

export const User = styled.span`
  width: 130px;
`;

export const Subject = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 15px;
`;

export const Time = styled.span`
  display: flex;
  justify-self: flex-end;
  padding: 12px;
`;
