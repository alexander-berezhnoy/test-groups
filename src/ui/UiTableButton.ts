import { Button, ButtonProps } from '@material-ui/core';
import styled from 'styled-components';

interface ITableButton extends ButtonProps {
  $handleHover?: boolean;
  $isIcon?: boolean;
}

export const UiTableButton: any = styled(Button)<ITableButton>`
  padding: ${(props) => (props.$isIcon ? '2px 10px' : '4px 10px')};
  border: ${(props) =>
    props.$handleHover || props.disabled
      ? '1px solid transparent'
      : '1px solid #00B8E4'};
  background-color: ${(props) =>
    props.$handleHover || props.disabled ? '#00B8E4' : '#fff'};
  color: ${(props) =>
    props.$handleHover || props.disabled ? '#fff' : '#00B8E4'};
  &:hover {
    border-color: ${(props: ITableButton) =>
      !props.disabled ? '#02538b' : 'transparent'};
    color: ${(props) => props.$isIcon && props.theme.palette.common.white};
  }
`;
