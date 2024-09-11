import React from "react";
import "./App.css";
import { Price } from "./price";
import { UiGeneralProviders } from "./ui";
import styled from "styled-components";

const AppContainerDiv = styled.div`
  position: relative;
  padding: 18px 42px 8px;
  flex: 1;
  overflow: auto;
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 24px 0px 0px 0px;
  }
`;

function App() {
  return (
    <UiGeneralProviders>
      <AppContainerDiv>
        <Price />
      </AppContainerDiv>
    </UiGeneralProviders>
  );
}

export default App;
