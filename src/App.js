import React, { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Slider from "./components/SliderComp/Slider";
import { Grid, Typography } from "@material-ui/core";


function App() {

  const [showPage, setShowPage] = useState("all");

  const style = {
    background: {
      backgroundColor: "black",
      paddingBottom: "5%",
      paddingLeft: "5%",
      paddingRight: "5%"
    },
    font: {
      color: "white",
      paddingTop: "15%",
      marginLeft: "5%",
      marginRight: "5%"
    },
    poetry: {
      color: "red"
    }
  }
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" style={style.background}>
        <Grid item xs="7" md="6">
          <Typography align="center" variant="h2" centered style={style.font}>Andrew Rueter <span style={style.poetry}>Poetry</span></Typography>
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
