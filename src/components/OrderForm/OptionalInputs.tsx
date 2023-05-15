import {TextField} from "@mui/material";
import React, {ChangeEvent} from "react";

interface Props {
    type: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    values: {
        slices?: number;
        diameter?: number;
        spiciness?: number;
        num_of_slices?: number;
    };
}

export const OptionalInputs = (props: Props) => {
    const {type, handleChange, values} = props;
    return (
        <>
            {type === 'pizza' && (
                <>
                    <TextField
                        label="Slices"
                        name="slices"
                        type="number"
                        value={values.slices || ""} //we also use this here so as not to destructure a potentially nonexistent property
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Diameter"
                        name={"diameter"}
                        type="number"
                        value={values.diameter || ""}
                        inputProps={
                            {step: 0.01}
                        }
                        onChange={handleChange}
                        required
                    />
                </>
            )}
            {
                type === "soup" && (
                    <TextField
                        name="spiciness"
                        label={"Spiciness"}
                        type="number"
                        value={values.spiciness || ""}
                        onChange={handleChange}
                        required
                    />
                )
            }
            {type === "sandwich" && (
                <TextField
                    label="Number of slices"
                    name="num_of_slices"
                    type="number"
                    value={values.num_of_slices || ""}
                    onChange={handleChange}
                    required
                />
            )}
        </>
    )
}