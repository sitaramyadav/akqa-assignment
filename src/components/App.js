import React from "react";
import styled from "styled-components";
import { Footer } from "./common/Footer";
import { MainContainer } from "./MainContainer";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
`;

const App = () => {
  return (
    <Container data-testid="app">
      <MainContainer />
      <Footer />
    </Container>
  );
};

export default App;
