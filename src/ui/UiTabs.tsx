import {
  AppBar,
  Badge,
  Paper,
  PaperProps,
  Tab,
  TabProps,
  Tabs,
  TabsProps,
} from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { noop } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useScreenWidth } from "../hooks";
import { ITabs } from "./types";

const TextBadge = styled(Badge)`
  & .MuiBadge-badge {
    margin-right: -6px;
    margin-top: 3px;
  }
`;

interface ITab extends TabProps {
  $notEqual?: boolean;
  $mobile?: boolean;
}

const TabsAppBar = styled(AppBar)`
  z-index: 500;
`;

const TabsRoot = styled(Tabs)`
  & * > .MuiTabs-indicator {
    top: 0;
    transition: none;

    ${(props) => props.theme.breakpoints.down("xs")} {
      display: initial;
      left: 0;
      width: 4px;
    }
  }

  &.MuiTabs-root {
    min-height: 36px;
  }
  .MuiTab-wrapper {
    flex-direction: ${(props) =>
      props.orientation === "vertical" ? "row" : "column"};
    justify-content: ${(props) =>
      props.orientation === "vertical" ? "flex-start" : "center"};
  }
  .MuiTab-labelIcon .MuiTab-wrapper > :first-child {
    margin-bottom: 0px;
    margin-right: 16px;
  }
`;

const TabItem = styled(Tab)<ITab>`
  min-width: 0;
  border: 0.5px solid #e0e0e0;
  color: ${(props) => props.theme.palette.grey[700]};
  :hover {
    color: ${(props) => props.theme.palette.text.primary};
  }

  &.Mui-selected {
    font-weight: 500;
    border-bottom: none;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: ${(props) => props.theme.palette.common.white};
    ${(props) => props.theme.breakpoints.down("xs")} {
      border: 0.5px solid ${(props) => props.theme.palette.grey[300]};
    }
  }

  &:disabled {
    visibility: hidden;
  }
  &.MuiTab-fullWidth {
    flex-basis: ${(props) => (props.$notEqual ? "auto" : "0")};
    flex-shrink: ${(props) => (props.$notEqual ? "0" : "1")};
  }

  &.MuiTab-root {
    font-weight: 400;
    min-height: 36px;
    text-transform: ${(props) =>
      (props.$mobile || props.theme.breakpoints.down("sm")) && "none"};
  }
  .MuiTab-wrapper {
    flex-direction: row;
    & > :first-child {
      margin-right: ${(props) => !!props.icon && "4px"};
      margin-bottom: ${(props) => !!props.icon && "0px"};
    }
  }
`;

interface ITabPanelProps extends PaperProps {
  $isPaddingSmall?: boolean;
}

const TabPanel = styled(Paper)<ITabPanelProps>`
  width: 100%;
  position: relative;
  border-top: 0px;
  padding: ${(props) => (props.$isPaddingSmall ? "8px" : "12px")};
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.breakpoints.up("sm")} {
    overflow-x: auto;
    padding: 16px;
  }
  flex-direction: column;
  min-height: 100px;
  border-radius: 0 0 ${(props) => props.theme.shape.borderRadius}px
    ${(props) => props.theme.shape.borderRadius}px;
`;

interface IProps extends Omit<TabsProps, "onChange"> {
  tabs: Array<ITabs>;
  notEqual?: boolean;
  variant?: "standard" | "scrollable" | "fullWidth";
  color?: "default" | "primary" | "secondary";
  topPanel?: Array<React.ReactElement>;
  controlled?: boolean;
  onChange?: (tab: number) => void;
  mobileView?: Array<Breakpoint | null>;
  changeOrientation?: Array<Breakpoint | null>;
  status?: Array<boolean>;
  value?: number;
  badges?: Array<number>;
  withDisplayFilter?: boolean;
}

export const UiTabs: React.FC<React.PropsWithChildren<IProps>> = ({
  tabs,
  notEqual,
  variant = "standard",
  color = "default",
  children,
  topPanel,
  onChange = noop,
  controlled,
  mobileView,
  status,
  value,
  badges,
  indicatorColor,
  orientation,
  withDisplayFilter,
  changeOrientation,
}) => {
  const [tab, setTab] = useState<number>(0);
  const breakPoint = useScreenWidth();
  const isMobile = useMemo(
    () => !!mobileView && mobileView.includes(breakPoint),
    [mobileView, breakPoint]
  );

  const isPaddingSmall = useMemo(
    () => !!mobileView && ["xs", "sm"].includes(breakPoint || ""),
    [mobileView, breakPoint]
  );

  const orientationTrigger = useMemo(
    () => !!changeOrientation && changeOrientation.includes(breakPoint),
    [changeOrientation, breakPoint]
  );

  useEffect(() => {
    if (controlled && value !== undefined && tab !== value) {
      setTab(value);
    }
  }, [controlled, value, tab]);

  const handleChange = useCallback(
    (_: React.ChangeEvent<{}>, newValue: number) => {
      setTab(newValue);
      if (controlled) {
        onChange(newValue);
      }
    },
    [controlled, onChange]
  );

  const tabPanels = useMemo(() => React.Children.toArray(children), [children]);

  const tabsVariant = useMemo(
    () => (isMobile ? variant : "fullWidth"),
    [isMobile, variant]
  );

  const topPanelValue = useMemo(() => {
    if (!tabs[tab]?.topPanel || !topPanel) {
      return null;
    }
    const isArrayTopPanel = topPanel ? !!(topPanel.length > 1) : false;

    return isArrayTopPanel ? topPanel[tab] : topPanel[0];
  }, [tab, tabs, topPanel]);

  const tabPanelValue = useMemo(
    () => (tabPanels[tab] ? tabPanels[tab] : tabPanels[0] || <div />),
    [tab, tabPanels]
  );

  const displayTabs = useMemo(
    () => (withDisplayFilter ? tabs?.filter((t) => t.display) : tabs),
    [tabs, withDisplayFilter]
  );

  const orientationValue = useMemo(
    () => (orientationTrigger ? "vertical" : "horizontal"),
    [orientationTrigger]
  );

  return (
    <>
      <TabsAppBar position="static" color={color} elevation={0}>
        <TabsRoot
          value={tab}
          variant={tabsVariant}
          onChange={handleChange}
          aria-label="tabs"
          scrollButtons="auto"
          indicatorColor={indicatorColor}
          textColor={indicatorColor}
          orientation={orientation || orientationValue}
        >
          {displayTabs.map(({ key, label, icon: TabIcon, disabled }, index) => (
            <TabItem
              icon={
                TabIcon && orientationTrigger ? (
                  <Badge
                    badgeContent={badges ? badges[index] : 0}
                    color="secondary"
                  >
                    <TabIcon color={key === tab ? "primary" : "inherit"} />
                  </Badge>
                ) : undefined
              }
              key={key}
              label={
                !badges && TabIcon ? (
                  label
                ) : (
                  <TextBadge
                    badgeContent={badges ? badges[index] : 0}
                    color="secondary"
                  >
                    {label}
                  </TextBadge>
                )
              }
              disableRipple
              disabled={status ? !status[index] : disabled}
              $notEqual={notEqual}
              $mobile={isMobile}
            />
          ))}
        </TabsRoot>
      </TabsAppBar>

      <TabPanel variant="outlined" $isPaddingSmall={isPaddingSmall}>
        {topPanelValue}
        {tabPanelValue}
      </TabPanel>
    </>
  );
};
