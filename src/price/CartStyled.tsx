import { Card, ListItem } from "@material-ui/core";
import styled from "styled-components";

interface ICartItemProps {
  $disabled?: boolean;
  $checked?: boolean;
}

export const CartItem = styled(Card)<ICartItemProps>`
  &.MuiCard-root {
    width: 100%;
    overflow: initial;
    margin-bottom: 8px;
    background-color: ${(props) => props.$disabled && "#fafafa"};
    opacity: ${(props) => props.$disabled && 0.7};
    border-color: ${(props) =>
      props.$checked && props.theme.palette.primary.main};
  }

    &:hover {
      box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 5%),
        0px 3px 4px 0px rgb(0 0 0 / 5%), 0px 1px 8px 0px rgb(0 0 0 / 5%);
    }
  }
  margin-bottom: 8px;

  .MuiCardHeader-root {
    padding: 8px 8px 4px;
    position: relative;
  }
  .MuiCardHeader-content {
    pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  }

  .MuiCardContent-root {
    padding: 0 8px 2px;
    pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  }
  .MuiCardHeader-action {
    margin-top: 0px;
    margin-right: 0px;
    ${(props) => props.theme.breakpoints.down("xs")} {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
  .MuiCardActions-root {
    padding: 0 8px 8px 8px;
  }

`;

export type HeaderValueProps = {
  $paid?: boolean;
  $error?: boolean;
};

export const CartHeaderValue = styled.div<HeaderValueProps>`
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
  flex: 1;
  cursor: pointer;

  font-weight: ${(props) => props.$paid && "600"};
  color: ${(props) =>
    props.$paid
      ? props.theme.palette.primary.dark
      : props.theme.palette.common.black};
  color: ${(props) => props.$error && props.theme.palette.secondary.dark};
`;

export const CartListItem = styled(ListItem)`
  &.MuiListItem-dense {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  & > .MuiListItemIcon-root {
    min-width: 36px;
  }
` as typeof ListItem;

interface RootTabContainerProps {
  $flex?: boolean;
}

export const RootTabContainer = styled.div<RootTabContainerProps>`
  overflow: auto;
  padding-right: 4px;
  height: 100%;
  display: ${(props) => props.$flex && "flex"};
`;

interface ContainerActionPanelProps {
  $absolute?: boolean;
}

export const ContainerActionPanel = styled.div<ContainerActionPanelProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: ${(props) => (props.$absolute ? "absolute" : "initial")};
  z-index: ${(props) => (props.$absolute ? 1 : "auto")};
  background-color: #fff;
  padding: 4px 10px;
`;

export const ContainerRoot = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

export const ContainerListDiv = styled.div`
  overflow: auto;
  padding: 4px 4px 4px 0;
  height: 100%;
`;
