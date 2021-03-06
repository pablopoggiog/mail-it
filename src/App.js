import "./App.css";
import styled from "styled-components";
import { Header, Body } from "containers";

function App() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
`;
