import React from "react";
import styled from "styled-components";
import { Header } from "../components/common/Header";
import { Main } from "./Main";
import { Footer } from "./common/Footer";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Container data-testid="app">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
