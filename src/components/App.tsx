import React from 'react';
import {Wrapper} from "./common/Wrapper";
import {OrderForm} from "./OrderForm/OrderForm";

function App() {

    return (
        <Wrapper
            width={"100vw"}
            height={"100vh"}
        >
            <OrderForm/>
        </Wrapper>
    );
}

export default App;
