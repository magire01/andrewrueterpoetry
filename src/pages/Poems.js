import React from 'react';
import nl2br from "react-newline-to-break";
import PoemAPI from "../utilities/poems.json";
import { Grid, Typography } from "@material-ui/core";

import PoemCard from '../components/PoemCard';


const Poems = () => {

    const style= {
        column: {
            height: "auto",
            width: "auto"
        }
    }
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            >
            {PoemAPI.data.map(film => (
            <Grid item md={8} xs={12} style={style.column}><PoemCard info={film} text={nl2br(film.text)}/></Grid>
                ))}
        </Grid>
    )
}

export default Poems;