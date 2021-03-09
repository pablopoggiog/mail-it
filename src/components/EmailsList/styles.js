import styled from "styled-components";

export const Container = styled.div`
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

  button {
    padding: 5px;
  }
`;

export const EmailsCounter = styled.span`
  font-size: 12px;
  color: darkgrey;
  padding: 0 15px;
`;

export const ListContainer = styled.div`
  display: flex;
  max-height: 85vh;
  flex-direction: column;
  overflow: hidden scroll;
`;
