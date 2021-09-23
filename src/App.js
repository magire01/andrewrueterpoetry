import React, { useState } from "react";
import './App.css';

import Slider from "./components/SliderComp/Slider";
import { Container, Grid, Typography, Paper, Tabs, Tab, Button } from "@material-ui/core";

import Poems from "./pages/Poems";
import Films from "./pages/Films";
import Contact from "./pages/Contact";


function App() {

  const page = {
    allPoems: "AllPoems",
    featuredPoems: "FeaturedPoems",
    allFilms: "AllFilms",
    featuredFilms: "FeaturedFilms",
    contact: "Contact"
  }

  const [showPage, setShowPage ] = useState("AllPoems");

  const getPage = () => {
    switch(showPage) {
      case "AllFilms":
        return <Films />
      case "Contact":
        return <Contact />
      default:
        return <Poems />
    }
  }

  const style = {
    active: {
        color: "red"
    },
    inactive: {
        color: "black"
    }
  }

  

  return (
    <div>
      {/* Banner Section */}
      <Grid container direction="row" alignItems="center" justifyContent="center" className={"banner"}>
        <Grid item xs="12" md="6">
          <Typography align="center" variant="h3" centered className={"bannerFont"}>Andrew</Typography>
          <Typography align="center" variant="h3" centered className={"bannerFont"}>Rueter</Typography>
          <Typography align="center" variant="h3" centered className={"bannerFontPoetry"}>Poetry</Typography>
        </Grid>
        <Grid item xs="12" md="6" className={"bannerSlider"}>
          <Slider />
        </Grid>
      </Grid>
      {/* Nav Section */}
      <Paper>
        <Tabs centered>
          <Tab label="Poems" onClick={() => setShowPage("AllPoems")} style={(showPage == "AllPoems") ? style.active : style.inactive} />
          <Tab label="Films" onClick={() => setShowPage(page.allFilms)} style={(showPage == page.allFilms) ? style.active : style.inactive} />
          <Tab label="Contact" onClick={() => setShowPage(page.contact)} style={(showPage == page.contact) ? style.active : style.inactive} />
        </Tabs>
      </Paper>
      <Container>
      {/* Body Section */}
        {getPage()}
      </Container>
    </div>
  );
}

export default App;
