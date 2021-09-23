import React, { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Slider from "./components/SliderComp/Slider";
import { Container, Grid, Typography } from "@material-ui/core";


function App() {

  const [showPage, setShowPage] = useState("all");

  return (
    <div>
      <Grid container direction="row" alignItems="center" justifyContent="center" className={"banner"}>
        <Grid item xs="12" md="6">
          <Typography align="center" variant="h3" centered className={"bannerFont"}>Andrew</Typography>
          <Typography align="center" variant="h3" centered className={"bannerFont"}>Rueter</Typography>
          <Typography align="center" variant="h3" centered className={"bannerFontPoetry"}>Poetry</Typography>
        </Grid>
        <Grid item xs="12" md="6" className={"bannerSlider"}>
          <Slider onChange={value => setShowPage(value)}/>
        </Grid>
      </Grid>
      <Home page={showPage}/>
    </div>
  );
}

export default App;
