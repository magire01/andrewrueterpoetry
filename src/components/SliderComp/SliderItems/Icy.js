import React from "react";
import icyimg from "../../../assets/icyrueter.png"
import amazonimg from "../../../assets/amazonlogo.png"
import { Grid, Button, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const Icy = () => {

    const style = {
        background: {
            backgroundColor: "black",
            color: "white",
            height: "100%",
            width: "auto"
        },
        img: {
            height: 200,
            width: "auto",
            paddingTop: "2%"
        },
        button: {
            height: 80,
            width: "auto",
            paddingTop: 5

        }
    }
    return (
        <a href="https://www.amazon.com/Icy-Andrew-Rueter-ebook/dp/B07VDLZT9Y" target="_blank">
            <Card style={style.background}>
                <CardActionArea>
                    <CardMedia>
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <Grid item md={12} xs={12}>
                                <Typography variant="h6" align="center">Download 'Icy' on Amazon</Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <img style={style.img} src={icyimg} />
                            </Grid>
                            {/* <Grid item md={12} xs={12}>
                                <img style={style.button} src={amazonimg} />
                            </Grid> */}
                        </Grid>
                    </CardMedia>
                </CardActionArea>
            </Card>
        </a>
                
    )
}

export default Icy;