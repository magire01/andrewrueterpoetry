import React, { useState, useEffect } from 'react';
import { Grid, Typography, InputLabel, MenuItem, Select, FormControl  } from "@material-ui/core";

import FilmAPI from "../utilities/films.json";
import NewFilmsAPI from "../utilities/newfilms.json";

import FilmCard from '../components/FilmCard';


const Films = (props) => {
    const [filter, setFilter] = useState("all")

    const style= {
        column: {
            height: 200,
            width: "auto"
        }
    }

    useEffect(() => {
        setFilter(filter)
    },[filter])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    switch(filter){
        case "newfilms":
        return (
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            >
                <Grid item md={9} xs={12}>
                    <FormControl>
                        <Select
                        value={filter}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value="newfilms">New Film Reviews</MenuItem>
                            <MenuItem value="all">All Film Reviews</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                {NewFilmsAPI.data.map(film => (
                    
                    <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid>
                    
                ))}
            </Grid>
        )
        default:
            return (
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
                                <MenuItem value="newfilms">New Film Reviews</MenuItem>
                                <MenuItem value="all">All Film Reviews</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    {FilmAPI.data.map(film => (
                        
                        <Grid item md={4} xs={12} style={style.column}><FilmCard info={film} /></Grid>
                        
                    ))}
                </Grid>
            )
    }
            
       
    
}

export default Films;