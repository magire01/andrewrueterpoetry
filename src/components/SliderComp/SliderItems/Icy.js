import React from "react";
import icyimg from "../../../assets/icyrueter.png"
import amazonimg from "../../../assets/amazonlogo.png"
import { Grid, Button, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

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
        <Card style={style.background}>
            <CardActionArea>
                <CardMedia>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item md={12} xs={12}>
                            <img style={style.img} src={icyimg} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <img style={style.button} src={amazonimg} />
                        </Grid>
                    </Grid>
                </CardMedia>
            </CardActionArea>
        </Card>
                
    )
}

export default Icy;