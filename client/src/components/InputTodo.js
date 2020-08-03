import React, { Fragment, useState } from 'react';

const header_styles = {
    "display": "flex",
    "justifyContent": "center",
    "marginTop": "60px",
    //"textAlign" : "center"
}
const input_styles = {
    "height": "30px",
    "marginLeft": "240px",
    "marginTop": "50px",
    "width": "50%"
}
const button_styles = {
    "background": "light-green",
    "border": "none",
    "height": "37px",
    "marginLeft": "10px",
    "textAlign": "center",
    "width": "70px"
}

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const handle_text_change = (event) => {
        setDescription(event.target.value);
        //console.log(event.target.value);
    }

    const on_submit_form = async (event) => {
        event.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:3040/todos', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            console.log("the response.......", response);
        } catch (err) {
            console.error("Ahh shit... ", err.message);
        }
    }

    return (
        <Fragment>
            <h1 style={header_styles}>Pern Todo List</h1>

            <form onSubmit={on_submit_form}>
                <input onChange={handle_text_change} type='text ' style={input_styles} value={description} />
                <button style={button_styles}>Add</button>
            </form>

        </Fragment>
    );
}

export default InputTodo;