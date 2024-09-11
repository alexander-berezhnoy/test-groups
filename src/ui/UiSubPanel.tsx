import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
  TypographyProps,
} from "@material-ui/core";
import React from "react";
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import styled from "styled-components";
import { useDictionary } from "../hooks/useDictionary";

const TRANSLATES = {
  ua: {
    loading: "Завантаження...",
  },
  en: {
    loading: "​Loading...",
  },
  ru: {
    loading: "Загрузка...",
  },
};

interface IPanelItemProps {
  icon: React.ElementType | string;
  value: string | number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  fontColor?: TypographyProps["color"];
  variant?: TypographyProps["variant"];
}

export const PanelItem: React.FC<React.PropsWithChildren<IPanelItemProps>> = ({
  icon,
  value,
  align = "left",
  fontColor = "primary",
  variant = "body2",
}) => (
  <Box display="flex" flexWrap="nowrap" color={`text.${fontColor}`}>
    <>
      {icon}
      <Typography variant={variant} align={align} color={fontColor} noWrap>
        {`: ${value} `}
      </Typography>
    </>
  </Box>
);

interface ISubPanelDivProps {
  $spaceBetween?: boolean;
  $error?: boolean;
  $main?: boolean;
  $displayBlock?: boolean;
}

const SubPanelDiv = styled.div<ISubPanelDivProps>`
  padding-top: 16px;
  min-height: 48px;
  display: ${(props) => (props.$displayBlock ? "block " : "flex")};
  align-items: center;
  color: ${(props) => (props.$error ? "#A82A38" : "#757575")};
  justify-content: ${(props) =>
    props.$spaceBetween ? "space-between" : "flex-start"};
  color: ${(props) => (props.$error ? "#A82A38" : "#757575")};
  & > * {
    margin-right: 16px;
  }
  & > :last-child {
    margin-right: 0px;
  }
`;

type ItemsProps = {
  color: string;
  icon: React.ElementType | string;
  value: string | number;
  key: string;
};

interface IProps {
  items?: Array<ItemsProps>;
  //   breakPoint?: Breakpoint;
  loading: boolean;
  divider?: boolean;
  button?: React.ReactElement;
  pagination?: React.ReactElement;
}

export const UiSubPanel: React.FC<React.PropsWithChildren<IProps>> = ({
  items,
  //   breakPoint,
  loading,
  button,
  divider,
  pagination,
}) => {
  const { t } = useDictionary(TRANSLATES);

  //   const isXS = useMemo(() => breakPoint === 'xs', [breakPoint]);
  return (
    <div>
      {divider && <Divider />}
      <Grid container justifyContent="space-between" alignItems="center">
        {loading && (
          <Grid item xs sm>
            <SubPanelDiv>
              <CircularProgress color="primary" size={20} />

              <Typography variant="body2" align="left" color="primary">
                {t("loading")}
              </Typography>
            </SubPanelDiv>
          </Grid>
        )}
        {items && !loading && (
          <Grid item xs sm>
            <SubPanelDiv>
              {items?.map((i) => (
                <PanelItem
                  key={i.key}
                  icon={i.icon}
                  value={i.value}
                  fontColor={i.color as TypographyProps["color"]}
                />
              ))}
            </SubPanelDiv>
          </Grid>
        )}
        {pagination && !loading && (
          <Grid container item xs sm justifyContent="center">
            <SubPanelDiv>{pagination}</SubPanelDiv>
          </Grid>
        )}
        {button && (
          <Grid container item xs sm justifyContent="flex-end">
            <SubPanelDiv>{button}</SubPanelDiv>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
