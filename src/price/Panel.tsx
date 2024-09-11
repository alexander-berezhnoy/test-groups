import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import { PanelContainer, PanelSummary, PanelDetails } from "./PanelStyled";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

type PanelProps = {
    title: string;
    panelNo: string;
}

export const Panel: React.FC<React.PropsWithChildren<PanelProps>> = ({ panelNo, title, children }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <PanelContainer expanded={expanded} onChange={handleChange}>
            <PanelSummary
                expanded={expanded}
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`panel${panelNo}-content`}
                id={`panel${panelNo}-header`}
            >
                <Typography>{title}</Typography>
            </PanelSummary>
            <PanelDetails expanded={expanded}>{children}</PanelDetails>
        </PanelContainer>
    )
}