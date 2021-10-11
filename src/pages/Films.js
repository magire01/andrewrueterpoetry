import React, { useState, useEffect } from 'react';
import { Grid, Typography, InputLabel, MenuItem, Select, FormControl  } from "@material-ui/core";
import axios from "axios";

import FilmAPI from "../utilities/films.json";
import NewFilmsAPI from "../utilities/newfilms.json";

import FilmCard from '../components/FilmCard';

//TODO: add explanation to top of films page
const Films = (props) => {
    const [filter, setFilter] = useState("AllFilms")

    const [dataState, setDataState] = useState([])

    useEffect(() => {
        setFilter(props.filter)
    },[])

    useEffect(() => {
        axios.get("http://arpoetryserver-env.eba-zpnxky2i.us-east-2.elasticbeanstalk.com/films/allfilms")
        .then(result => setDataState(result.data))
        .then(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    
    const style= {
        column: {
            height: "auto",
            width: "auto",
            margin: "20px 0px 20px 0px"
        },
        dropdown: {
            marginTop: 20,
            marginBottom: 20
        }
    }

    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            >
            <Grid item md={9} xs={12}>
                <FormControl>
                    <Select
                    value={filter}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={style.dropdown}>
                        <MenuItem value="NewFilms">New Film Reviews</MenuItem>
                        <MenuItem value="AllFilms">All Film Reviews</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {(filter === "AllFilms")
            ? dataState.map(film => (    
                <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid> 
                ))
            : NewFilmsAPI.data.map(film => (    
                <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid>
            ))}
        </Grid>
    )
}

export default Films;