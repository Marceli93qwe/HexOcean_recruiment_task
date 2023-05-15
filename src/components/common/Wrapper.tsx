import React, {ReactNode} from "react";
import {Box} from "@mui/material";

interface Props {
    flexDirection?: "row" | "column"
    width?: string;
    height?: string;
    children: ReactNode
}

export const Wrapper = ({flexDirection = "column", width = "auto", height = "auto", children}: Props) => {
    return (
        <Box
            display="flex"
            flexDirection={flexDirection}
            justifyContent="center"
            alignItems="center"
            margin="auto"
            width={width}
            height={height}
        >
            {children}
        </Box>
    )
}