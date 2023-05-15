import {Stack} from "@mui/material";
import React, {FormEvent, ReactNode} from "react";

interface Props {
    submit: (e: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
    spacing: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    formTitle: string;
}

export const Form = ({submit, children, spacing, formTitle}: Props) => {
    return (
        <form onSubmit={submit}>
            <Stack spacing={spacing} useFlexGap flexWrap={"wrap"} sx={{
                textAlign: "center"
            }}>
                <h2>{formTitle}</h2>
                {children}
            </Stack>
        </form>
    )
}