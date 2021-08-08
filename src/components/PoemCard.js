import React, { useState } from "react";

import { Grid, Card, CardActionArea, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, useMediaQuery, useTheme } from "@material-ui/core";

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
    };

    const handleExpand = () => {
        setShowPoem({ ...showPoem, expand: true });
    }

    const handleCollapse = () => {
        setShowPoem({ ...showPoem, expand: false });
    }
    
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
                <CardActionArea onClick={handleOpen}>
                    <Typography variant="h4">{props.info.title}</Typography>
                    <Card style={!showPoem.expand ? style.cardLong : style.card}>
                        <Typography>{props.text}</Typography>
                    </Card>
                </CardActionArea>
            </Card>
            {!showPoem.expand ? <Button onClick={handleExpand}style={style.continue}>Continue Reading</Button> : <Button onClick={handleCollapse} style={style.continue}>Collapse</Button>}
            <Dialog
                fullScreen={fullScreen}
                open={showPoem.open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{props.info.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>{props.text}</Typography>
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

    return (
        <>
            <Card style={style.entry} onClick={handleOpen}>
                <CardActionArea>
                    <Typography variant="h4">{props.info.title}</Typography>
                    <Card style={style.card}>
                        <Typography>{props.text}</Typography>
                    </Card>
                </CardActionArea>
            </Card>
            <Dialog
                fullScreen={fullScreen}
                open={showPoem.open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{props.info.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>{props.text}</Typography>
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

export default PoemCard;