//TODO remove after change date pick to mui5
import { CssBaseline, Theme } from "@material-ui/core";
import {
  createGenerateClassName,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../theme";

interface IProps {
  children: ReactNode;
  theme?: Theme;
  baselineDisabled?: boolean;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "dev-kit",
});

export const UiGeneralProviders = ({
  children,
  theme = defaultTheme,
  baselineDisabled,
}: IProps) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {!baselineDisabled && <CssBaseline />}
            {children}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};
