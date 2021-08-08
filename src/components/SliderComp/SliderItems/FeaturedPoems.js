import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

const FeaturedPoems = (props) => {
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
        props.onChange("featuredpoems")
    }
    return (
        <div style={style.background}>
            <Button style={style.button} onClick={e => handleClick(e)}>Featured Poems</Button>
        </div>
    )
}

export default FeaturedPoems;