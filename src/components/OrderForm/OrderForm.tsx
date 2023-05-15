import {Form} from "../common/Form/Form";
import React, {ChangeEvent, FormEvent, useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {Button, MenuItem, SelectChangeEvent, TextField} from "@mui/material";
import {TimeInput} from "../common/Form/TimeInput";
import {SelectList} from "../common/Form/SelectList";
import {OptionalInputs} from "./OptionalInputs";


export const OrderForm = () => {
    const [values, setValues] = useState<{
        dishName: string;
        preparationTime: Dayjs | null;
        type: string;
        slices?: number,
        diameter?: number,
        spiciness?: number,
        num_of_slices?: number,
    }>
    ({
        dishName: '',
        preparationTime: dayjs("2022-04-17T15:30"),
        type: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        // basic validation
        if (
            name === "spiciness" && Number(value) < 1 ||
            name === "spiciness" && Number(value) > 10 ||
            name === "slices" && Number(value) < 1 ||
            name === "diameter" && Number(value) < 1 ||
            name === "num_of_slices" && Number(value) < 1
        ) return;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleTimeChange = (newValue: Dayjs | null) => {
        setValues((prevValues) => ({
            ...prevValues,
            preparationTime: newValue,
        }))
    }


    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        const timeISOString = values.preparationTime?.toISOString(); //conversion of preparationTime value to iso string
        const url = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/';
        (async () => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: values.dishName,
                    preparation_time: timeISOString && new Date(timeISOString).toLocaleTimeString(),
                    type: values.type,
                    no_of_slices: values.slices,
                    diameter: values.diameter,
                    spiciness_scale: values.spiciness,
                    slices_of_bread: values.num_of_slices,
                })
            })
            console.log(await response.json());
        })()

    }

    return (

        <Form submit={handleSubmit} spacing={3} formTitle={"Order your food"}>
            <TextField
                name="dishName"
                label="Dish Name"
                value={values.dishName}
                onChange={handleChange}
                required
            />
            <TimeInput
                value={values.preparationTime}
                required={true}
                change={handleTimeChange}
                label={"Preparation time"}
            />
            <SelectList name={"type"} label={"Type"} value={values.type} change={handleChange}>
                <MenuItem value={"pizza"}>Pizza</MenuItem>
                <MenuItem value="soup">Soup</MenuItem>
                <MenuItem value="sandwich">Sandwich</MenuItem>
            </SelectList>
            <OptionalInputs
                values={{
                    slices: values.slices,
                    diameter: values.diameter,
                    spiciness: values.spiciness,
                    num_of_slices: values.num_of_slices,
                }}
                type={values.type}
                handleChange={handleChange}
            />

            <Button
                variant={"contained"}
                type={"submit"}
            >
                Order
            </Button>
        </Form>
    )
}