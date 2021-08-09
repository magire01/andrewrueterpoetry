import React from "react";
import patreonimg from "../../../assets/patreon.png"
import { Grid, Button, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const Patreon = () => {

    const style = {
        background: {
            backgroundColor: "black",
            color: "white",
            height: "100%",
            width: "auto",
            paddingTop: "10%"
        },
        img: {
            height: 100,
            width: "auto",
            paddingTop: "2%"
        },
        button: {
            height: 70,
            width: "auto"
        },
        text: {
            paddingTop: 5
        }
    }
    return (
        
        <a href="https://www.patreon.com/brand" target="_blank">
            <Card style={style.background}>
                <CardActionArea>
                    <CardMedia>
                        <img style={style.img}src={patreonimg} />
                        <Typography style={style.text} variant="h5">Support me on Patreon</Typography>
                    </CardMedia>
                </CardActionArea>
            </Card>
        </a>
    )
}

export default Patreon;