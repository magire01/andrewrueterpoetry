import React from "react";

import { Container, Grid, Card, CardActionArea, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper, Button, useMediaQuery, useTheme } from "@material-ui/core";

const PoemCard = (props) => {
    
    const style = {
        card: {
            height: "auto",
            width: "90%",
            border: "none",
            boxShadow: "none"
        },
        cardLong: {
            height: 200,
            width: "90%",
            border: "none",
            boxShadow: "none"
        },
        entry: {
            width: "auto",
            height: "auto",
            border: "none",
            boxShadow: "none",
            width: "auto",
            height: "auto"
        },
        continue: {
            color: "red"
        }
    }

    const poemLength = props.info.text.length;

    if (poemLength > 150)
    return (
        <>
            <Card style={style.entry}>
                <CardActionArea>
                    <Typography variant="h4">{props.info.title}</Typography>
                    <Card style={style.cardLong}>
                        <Typography>{props.text}</Typography>
                    </Card>
                    
                </CardActionArea>
                
            </Card>
            <Button style={style.continue}>Continue Reading</Button>
        </>
    )

    return (
        <>
            <Card style={style.entry}>
                <CardActionArea>
                    <Typography variant="h4">{props.info.title}</Typography>
                    <Card style={style.card}>
                        <Typography>{props.text}</Typography>
                    </Card>
                </CardActionArea>
            </Card>
        </>
    )
}

export default PoemCard;