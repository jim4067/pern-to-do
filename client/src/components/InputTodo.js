import React, { Fragment } from 'react';

const header_styles = {
    "margin-top" : "40px",
    "text-align" : "center"
}
const input_styles = {
    "height" : "30px",
    "margin-left" : "220px",
    "margin-top" : "50px",
    "width" : "50%"
}
const button_styles = {
    "background" : "light-green",
    "border" : "none",
    "height" : "37px",
    "margin-left" : "10px",
    "text-align" : "center",
    "width" : "70px"
}

const InputTodo = () => {

    return (
        <Fragment>
            <h1 style={header_styles}>Pern Todo List</h1>
            <form>
                <input type='text ' style={input_styles}/>
                <button style={button_styles}>Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;