import React from "react";

import { Grid, Card, CardActionArea, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, useMediaQuery, useTheme } from "@material-ui/core";

const PoemCard = (props) => {
    return (
        <>
            <Card>
                <CardActionArea>
                    <Card>
                        <Typography variant="h4">{props.info.title}</Typography>
                        <Typography>{props.text}</Typography>
                    </Card>
                </CardActionArea>
            </Card>
        </>
    )
}

export default PoemCard;