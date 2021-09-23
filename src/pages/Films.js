import React, { useState, useEffect } from 'react';
import { Grid, Typography, InputLabel, MenuItem, Select, FormControl  } from "@material-ui/core";

import FilmAPI from "../utilities/films.json";
import NewFilmsAPI from "../utilities/newfilms.json";

import FilmCard from '../components/FilmCard';


const Films = (props) => {
    const [filter, setFilter] = useState("AllFilms")

    const style= {
        column: {
            height: "auto",
            width: "auto"
        }
    }
    useEffect(() => {
        setFilter(props.filter)
    },[])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            spacing={10}
            >
            <Grid item md={9} xs={12}>
                <FormControl>
                    <Select
                    value={filter}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="NewFilms">New Film Reviews</MenuItem>
                        <MenuItem value="AllFilms">All Film Reviews</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {(filter === "AllFilms")
            ? FilmAPI.data.map(film => (    
                <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid> 
                ))
            : NewFilmsAPI.data.map(film => (    
                <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid>
            ))}
        </Grid>
    )
}

export default Films;