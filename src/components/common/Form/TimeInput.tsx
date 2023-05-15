import {LocalizationProvider, TimeField, TimeValidationError} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import {Dayjs} from "dayjs";
import {FieldChangeHandler} from "@mui/x-date-pickers/internals";


interface Props {
    label: string;
    value: Dayjs | null;
    required?: boolean;
    change: FieldChangeHandler<Dayjs | null, TimeValidationError>;//(value: Dayjs) => void;
    format?: string;
}

export const TimeInput = (props: Props) => {
    const {value, change, label, format, required} = props
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
        >
            <TimeField
                required={!!required}
                ampm={false}
                label={label}
                value={value}
                onChange={change}
                format={format || "HH:mm:ss"}
            />
        </LocalizationProvider>
    )
}