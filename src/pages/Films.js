import React, { useState } from 'react';
import { Grid, Typography } from "@material-ui/core";

import FilmAPI from "../utilities/films.json";

import FilmCard from '../components/FilmCard';


const Films = () => {
    return (
    
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="baseline"
    spacing={2}
    >
        
        {FilmAPI.data.map(film => (
            
            <Grid item><FilmCard info={film} /></Grid>
            
        ))}
    </Grid>
            
       
    )
}

export default Films;