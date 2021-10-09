import React, { useState, useEffect } from "react";
import './App.css';

import Slider from "./components/SliderComp/Slider";
import { Container, Grid, Typography, Paper, Tabs, Tab, Button } from "@material-ui/core";

import Poems from "./pages/Poems";
import Films from "./pages/Films";
import Contact from "./pages/Contact";


function App() {

  //Nav Rendering for Smartphone vs Laptop
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  const updateMedia = () => {
      setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  });

//Page Select Strings
  const page = {
    allPoems: "AllPoems",
    featuredPoems: "FeaturedPoems",
    allFilms: "AllFilms",
    newFilms: "NewFilms",
    contact: "Contact"
  }
//Page State
  const [showPage, setShowPage] = useState(page.allPoems);

//Render Page
  const getPage = () => {
    switch(showPage) {
      case page.allFilms:
        return <Films filter={showPage}/>
      case page.newFilms:
        return <Films filter={showPage} />
      case page.featuredPoems:
        return <Poems filter={showPage} />
      case page.contact:
        return <Contact />
      default:
        return <Poems filter={showPage}/>
    }
  }

//Style for active buttons
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
        <Grid item xs="12" md="8">
          <Typography align="center" variant={(!isDesktop) ? "h3" : "h1"} centered className={"bannerFont"}>Andrew Rueter <span className={"bannerFontPoetry"}>Poetry</span></Typography>
        </Grid>
        <Grid item xs="12" md="4" className={"bannerSlider"}>
          <Slider />
        </Grid>
      </Grid>
{/* Nav Section */}
      <Paper>
        <Tabs centered>
          <Tab label="Poems" onClick={() => setShowPage(page.allPoems)} style={(showPage === page.allPoems || showPage === page.featuredPoems) ? style.active : style.inactive} />
          <Tab label="Films" onClick={() => setShowPage(page.allFilms)} style={(showPage === page.allFilms || showPage === page.newFilms) ? style.active : style.inactive} />
          <Tab label="Contact" onClick={() => setShowPage(page.contact)} style={(showPage === page.contact) ? style.active : style.inactive} />
        </Tabs>
      </Paper>
{/* Body Section */}
      <Container>
        {getPage()}
      </Container>
    </div>
  );
}

export default App;
