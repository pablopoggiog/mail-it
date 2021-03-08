import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 40px;

  svg {
    color: darkgrey;
  }
`;

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};

  svg {
    width: ${({ left }) => (left ? "25px" : "12px;")};
  }
`;

export const EmailsCounter = styled.span`
  font-size: 12px;
  color: darkgrey;
  padding: 0 15px;
`;

export const EmailsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
