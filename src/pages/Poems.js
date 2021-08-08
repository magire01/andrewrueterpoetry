import React from 'react';
import nl2br from "react-newline-to-break";
import PoemAPI from "../utilities/poems.json";
import { Grid, Typography } from "@material-ui/core";

import PoemCard from '../components/PoemCard';


const Poems = () => {
    return (

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            spacing={2}
            >
            {PoemAPI.data.map(film => (
            <Grid item><PoemCard info={film} text={nl2br(film.text)}/></Grid>
                ))}
        </Grid>
    )
}

export default Poems;