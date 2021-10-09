import React, { useState, useEffect } from 'react';
import nl2br from "react-newline-to-break";
import PoemAPI from "../utilities/poems.json";
import FeaturePoemAPI from "../utilities/featuredpoems.json";
import { Grid, Typography, InputLabel, MenuItem, Select, FormControl } from "@material-ui/core";
import axios from "axios";


import PoemCard from '../components/PoemCard';

const Poems = (props) => {
    const [dataState, setDataState] = useState([])

    const [filter, setFilter] = useState("AllPoems")

    
    useEffect(() => {
        setFilter(props.filter)
    },[])

    useEffect(() => {
        axios.get("http://arpoetryserver-env.eba-zpnxky2i.us-east-2.elasticbeanstalk.com/poems/allpoems")
        .then(result => setDataState(result.data))
        .then(err => console.log(err))
    }, [])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    const style= {
        column: {
            height: "auto",
            width: 300,
            margin: "50px 0px 50px 0px"
        },
        dropdown: {
            marginTop: 20
        }
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid item md={9} xs={12}>
                <FormControl>
                    <Select
                    value={filter}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={style.dropdown}
                    >
                        <MenuItem value="FeaturedPoems">Featured Poems</MenuItem>
                        <MenuItem value="AllPoems">All Poems</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {(filter === "AllPoems")
            ? dataState.map(poem => (
                <Grid item md={9} xs={12} style={style.column}><PoemCard info={poem} text={nl2br(poem.text)}/></Grid>
                    ))
            : FeaturePoemAPI.data.map(poem => (
                <Grid item md={9} xs={12} style={style.column}><PoemCard info={poem} text={nl2br(poem.text)}/></Grid>
                    ))}
        </Grid>
    )
}

export default Poems;