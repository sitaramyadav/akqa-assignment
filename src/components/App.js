import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

import { MainHeader } from "../components/common/Header";
const App = () => {
  return (
    <Container data-testid="app">
      <MainHeader />
      <Main />
    </Container>
  );
};

export default App;
