import React, { useState, useEffect } from "react";
import ShareIcon from '@material-ui/icons/Share'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { Grid, Card, CardActionArea, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, useMediaQuery, useTheme, IconButton } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const PoemCard = (props) => {

    const [showPoem, setShowPoem] = useState({
        expand: false,
        open: false

    })

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpen = () => {
        setShowPoem({ ...showPoem, open: true });
      };
    
    const handleClose = () => {
        setShowPoem({ ...showPoem, open: false });
        window.history.replaceState(null, "Andrew Rueter Poetry", "/");
    };

    const handleExpand = () => {
        setShowPoem({ ...showPoem, expand: true });
    }

    const handleCollapse = () => {
        setShowPoem({ ...showPoem, expand: false });
    }

    //Nav Rendering for Smartphone vs Laptop
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    const style = {
        card: {
            height: "auto",
            width: "100%",
            border: "none",
            boxShadow: "none"
        },
        cardLong: {
            height: 200,
            width: "100%",
            border: "none",
            boxShadow: "none"
        },
        entry: {
            width: 200,
            height: "auto",
            border: "none",
            boxShadow: "none",
        },
        continue: {
            color: "red"
        },
        poemText: {
            fontSize: (!isDesktop) ? 13 : 15
        }
    }

    const poemLength = props.info.text.length;

    if (poemLength > 150)
    return (
        <Router>
            <Link to={`/poem/${props.info.title.split(" ").join("-")}`} style={{ textDecoration: "none" }}>
                <Card style={style.entry}>
                    <CardActionArea onClick={handleOpen}>
                        <Typography variant="h4">{props.info.title}</Typography>
                        <Card style={!showPoem.expand ? style.cardLong : style.card}>
                            <Typography style={style.poemText}>{props.text}</Typography>
                        </Card>
                    </CardActionArea>
                </Card>
            </Link>
            
            {!showPoem.expand ? <Button onClick={handleExpand}style={style.continue}>Continue Reading</Button> : <Button onClick={handleCollapse} style={style.continue}>Collapse</Button>}
            <Route path={`/poem/${props.info.title.split(" ").join("-")}`}>
                <Dialog
                fullScreen={fullScreen}
                open={showPoem.open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={style.entry}
                >
                <DialogTitle id="responsive-dialog-title">{props.info.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography style={style.poemText}>{props.text}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <IconButton onClick={handleClose}>
                                <ArrowBackIcon color="primary" autoFocus/>
                            </IconButton>
                        </Grid>
                        <Grid item style={{ backgroundColor: "gray", color: "white"}}>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
            </Route>
        </Router>
    )

    return (
        <Router>
            <Link to={`/poem/${props.info.title.split(" ").join("-")}`} style={{ textDecoration: "none" }}>
                <Card style={style.entry} onClick={handleOpen}>
                    <CardActionArea>
                        <Typography variant="h4">{props.info.title}</Typography>
                        <Card style={style.card}>
                            <Typography style={style.poemText}>{props.text}</Typography>
                        </Card>
                    </CardActionArea>
                </Card>    
            </Link>
        
            <Route path={`/poem/${props.info.title.split(" ").join("-")}`}>
                <Dialog
                    fullScreen={fullScreen}
                    open={showPoem.open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    style={style.entry}
                    >
                    <DialogTitle id="responsive-dialog-title">{props.info.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography style={style.poemText}>{props.text}</Typography>
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
            </Route>
        </Router>
    )
}

export default PoemCard;