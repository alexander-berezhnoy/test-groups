import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import styled from "styled-components";

type PanelStyledProps = {
    expanded: boolean;
}

export const PanelSummary = styled(AccordionSummary)<PanelStyledProps>`
    font-size: 20px;
    background-color:${(props) => props.expanded ? "#00b8e4" :  "#f4f4f4"};
    color: ${(props) => props.expanded ? "#fff" :  "#222"};
    padding: 5px 20px 5px 60px;
    line-height: 30px;
    cursor: pointer;
    width: 100%;
    margin-top: ${(props) => props.expanded ? "10px" : "0"};
`;

export const PanelDetails = styled(AccordionDetails)<PanelStyledProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    padding: 10px 20px;
    border: ${(props) => props.expanded ? "2px solid #00b8e4" : "none" };
`;

export const PanelContainer = styled(Accordion)<PanelStyledProps>`
    margin: ${props => props.expanded ? "20px 0" : "10px 0"};
    width: 100%;
    padding: 0;
    &:before {
        display: none;
    }
`;