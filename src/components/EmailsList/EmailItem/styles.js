import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 30px 1fr 4fr 1fr;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-left: 5px;
  border-top: 0.5px solid #e5e5e5;
  cursor: pointer;

  span {
    font-weight: ${({ read }) => (read ? 400 : 600)};
  }

  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  }
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
