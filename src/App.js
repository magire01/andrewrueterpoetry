import React, { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Slider from "./components/SliderComp/Slider";
import { Grid, Typography } from "@material-ui/core";


function App() {

  const [showPage, setShowPage] = useState("home");

  const style = {
    background: {
      backgroundColor: "black",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "5%",
      paddingRight: "5%"
    },
    font: {
      color: "white"
    },
    poetry: {
      color: "red"
    }
  }
  return (
    <div>
      <Grid container style={style.background}>
        <Grid item xs="12" md="6">
          <Typography variant="h2" centered style={style.font}>Andrew Rueter <span style={style.poetry}>Poetry</span></Typography>
        </Grid>
        <Grid item xs="12" md="6">
          <Slider onChange={value => setShowPage(value)}/>
        </Grid>
      </Grid>
      <Home page={showPage}/>
    </div>
  );
}

export default App;
