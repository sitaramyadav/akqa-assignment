import React from "react";
import styled from "styled-components";
import { MainHeader } from "../components/common/Header";
import { Main } from "./Main";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Container data-testid="app">
      <MainHeader />
      <Main />
    </Container>
  );
};

export default App;
