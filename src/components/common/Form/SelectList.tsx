import {TextField} from "@mui/material";
import React, {ChangeEvent, ReactNode} from "react";

interface Props {
    children: ReactNode;
    value: any;
    label: string;
    name: string;
    id?: string;
    change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SelectList = (props: Props) => {
    const {children, value, change, label, name} = props;
    return (
        <TextField
            id={props.id} // we use props.id here so as not to destructure a potentially nonexistent property
            name={name}
            label={label}
            select
            value={value}
            onChange={change}
            required
        >
            {children}
        </TextField>
    )
}