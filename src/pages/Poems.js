import React, { useState, useEffect } from 'react';
import nl2br from "react-newline-to-break";
import PoemAPI from "../utilities/poems.json";
import FeaturePoemAPI from "../utilities/featuredpoems.json";
import { Grid, Typography, InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";

import PoemCard from '../components/PoemCard';


const Poems = (props) => {

    const [filter, setFilter] = useState("all")

    const style= {
        column: {
            height: "auto",
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
    case "featuredpoems":
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
                            <MenuItem value="featuredpoems">Featured Poems</MenuItem>
                            <MenuItem value="all">All Poems</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {FeaturePoemAPI.data.map(film => (
                <Grid item md={9} xs={12} style={style.column}><PoemCard info={film} text={nl2br(film.text)}/></Grid>
                    ))}
            </Grid>
        )
    default:
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
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value="featuredpoems">Featured Poems</MenuItem>
                            <MenuItem value="all">All Poems</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {PoemAPI.data.map(film => (
                <Grid item md={9} xs={12} style={style.column}><PoemCard info={film} text={nl2br(film.text)}/></Grid>
                    ))}
            </Grid>
        )
    }
}

export default Poems;