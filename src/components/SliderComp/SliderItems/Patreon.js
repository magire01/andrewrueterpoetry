import React from "react";
import patreonimg from "../../../assets/patreon.png"
import { Grid, Button, Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";

const Patreon = () => {

    const style = {
        background: {
            backgroundColor: "black",
            color: "white",
            paddingTop: "10%",
            paddingBottom: "10%",
            height: "100%",
            width: "auto"
        },
        img: {
            height: 100,
            width: "auto",
        },
        button: {
            height: 70,
            width: "auto"
        }
    }
    return (
        // <Grid container direction="row" alignItems="Center" justify="center" style={style.background}>
        //     <Grid item md={12} xs={12}>
        //         <a href="https://www.patreon.com/brand" target="_blank">
        //             <img style={style.img} src={patreonimg} />
        //         </a>
        //     </Grid>
        //     <Grid item md={12} xs={12}>
                
        //     </Grid>
        // </Grid>

        <Card style={style.background}>
            <CardActionArea>
                <CardMedia>
                    <img style={style.img}src={patreonimg} />
                    <Typography variant="h5">Support me on Patreon</Typography>
                </CardMedia>
            </CardActionArea>
        </Card>
    )
}

export default Patreon;