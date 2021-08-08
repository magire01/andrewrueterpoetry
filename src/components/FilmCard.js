import React, { useState } from 'react';
import { Grid, Card, CardActionArea, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, useMediaQuery, useTheme } from "@material-ui/core";

const FilmCard = (props) => {

    const style = {
        img: {
            height: 400,
            width: "auto"
        },
        card: {
            height:"auto",
            width: "70%"
        }
    }

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    return (
    <>
    <Card onClick={handleClickOpen} style={style.card}>
        <CardActionArea>
            <CardMedia>
                <img src={props.info.img} style={style.img}/>
                <Typography variant="subtitle1"> {props.info.title} </Typography>
            </CardMedia>
        </CardActionArea>
    </Card>
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
    <DialogTitle id="responsive-dialog-title">{props.info.title}</DialogTitle>
    <DialogContent>
        <DialogContentText>
            <Grid md="12">
                <p><span>Relatablility - </span>{props.info.relatability}</p>
                <p>Score: {props.info.relatabilityScore}</p>
            </Grid>
            <Grid md="12">
                <p><span>Execution - </span>{props.info.execution}</p>
                <p>Score: {props.info.executionScore}</p>
            </Grid>
            <Grid md="12">
                <p><span>Context - </span>{props.info.context}</p>
                <p>Score: {props.info.contextScore}</p>
            </Grid>
            <Grid md="12">
                <p><span>Subtext - </span>{props.info.subtext}</p>
                <p>Score: {props.info.subtextScore}</p>
            </Grid>
            <Grid md="12">
                <p><span>Emotion - </span>{props.info.emotion}</p>
                <p>Score: {props.info.emotionScore}</p>
            </Grid>
            <Grid item md="12">
                <h5>Overall Rating: {props.info.overAllRating}</h5>
            </Grid>
            <Grid item md="12">
                <h5><span>Song: </span>{props.info.song}</h5>
            </Grid>
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Grid container alignItems="right">
            <Button onClick={handleClose} color="primary" autoFocus>
                Back
            </Button>
        </Grid>
    </DialogActions>
    </Dialog>
      </>
    )
}

export default FilmCard;