import React from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";

function App() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="auto"
            width="50vw"
            height="100vh" // full window height
        >
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("ok")
            }} action="/d">
                <Stack spacing={5} useFlexGap flexWrap={"wrap"} sx={{
                    textAlign: "center"
                }}>
                    <h2>Order your food</h2>
                    <TextField id="outlined-basic" label="Dish name" variant="outlined" required={true}/>
                    <TextField id="outlined-basic" label="Preparation time" variant="outlined"/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem>Ten</MenuItem>
                            <MenuItem>Twenty</MenuItem>
                            <MenuItem>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button type={"submit"} variant={"contained"}>Order</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default App;
