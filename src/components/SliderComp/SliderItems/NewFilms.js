import React from "react";
import { Grid, Button } from "@material-ui/core";

const NewFilms = (props) => {

    const style = {
        background: {
            backgroundColor: "black",
            color: "white",
            paddingTop: "2%",
            paddingBottom: "2",
            height: "100%",
            width: "auto"
        },
        button: {
            color: "white"
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.onChange("newfilms")
    }
    return (
        <div style={style.background}>
            <Button style={style.button} onClick={e => handleClick(e)}>New Film Reviews</Button>
        </div>
    )
}

export default NewFilms;