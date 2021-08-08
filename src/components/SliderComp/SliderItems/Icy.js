import React from "react";
import icyimg from "../../../assets/icyrueter.png"
import amazonimg from "../../../assets/amazonlogo.png"
import { Grid, Button } from "@material-ui/core";

const Icy = () => {

    const style = {
        background: {
            backgroundColor: "black",
            color: "white",
            paddingTop: "2%",
            paddingBottom: "2",
            height: "100%",
            width: "auto"
        },
        img: {
            height: 200,
            width: "auto"
        },
        button: {
            height: 70,
            width: "auto"
        }
    }
    return (
        <Grid container direction="row" alignItems="Center" justify="center" style={style.background}>
            <Grid item md={12} xs={12}>
                <img style={style.img} src={icyimg} />
            </Grid>
            <Grid item md={12} xs={12}>
                <a href="https://www.amazon.com/Icy-Andrew-Rueter-ebook/dp/B07VDLZT9Y" target="_blank">
                    <img style={style.button} src={amazonimg} />
                </a>
            </Grid>
        </Grid>
    )
}

export default Icy;