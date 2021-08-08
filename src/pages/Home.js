import React, { useState } from 'react';
import { Container, Grid, Paper, Tabs, Tab } from "@material-ui/core";
import Poems from "./Poems";
import Films from "./Films";
import Contact from "./Contact";

const Home = () => {
    const [pageState, setPageState] = useState("Poems")

    const style = {
        active: {
            color: "red"
        },
        inactive: {
            color: "black"
        },
        bottomMargin: {
            marginBottom: "2%"
        }
    }

    switch(pageState) {
        case "Poems":
            return (
                <div>
                    <Paper style={style.bottomMargin}>
                        <Tabs centered>
                            <Tab label="Poems" onClick={() => setPageState("Poems")} style={(pageState == "Poems") ? style.active : style.inactive} />
                            <Tab label="Films" onClick={() => setPageState("Films")} style={(pageState == "Films") ? style.active : style.inactive} />
                            <Tab label="Contact" onClick={() => setPageState("Contact")} style={(pageState == "Contact") ? style.active : style.inactive} />
                        </Tabs>
                    </Paper>
                    <Container>
                        <Grid container>
                            <Poems />
                        </Grid>
                    </Container>
                </div>
            )
        case "Films":
            return (
                <div>
                    <Paper style={style.bottomMargin}>
                        <Tabs centered>
                            <Tab label="Poems" onClick={() => setPageState("Poems")} style={(pageState == "Poems") ? style.active : style.inactive} />
                            <Tab label="Films" onClick={() => setPageState("Films")} style={(pageState == "Films") ? style.active : style.inactive} />
                            <Tab label="Contact" onClick={() => setPageState("Contact")} style={(pageState == "Contact") ? style.active : style.inactive} />
                        </Tabs>
                    </Paper>
                    <Container>
                        <Grid container>
                            <Films />
                        </Grid>
                    </Container>
                </div>
            )
        default:
            return (
                <div>
                    <Paper style={style.bottomMargin}>
                        <Tabs centered>
                            <Tab label="Poems" onClick={() => setPageState("Poems")} style={(pageState == "Poems") ? style.active : style.inactive} />
                            <Tab label="Films" onClick={() => setPageState("Films")} style={(pageState == "Films") ? style.active : style.inactive} />
                            <Tab label="Contact" onClick={() => setPageState("Contact")} style={(pageState == "Contact") ? style.active : style.inactive} />
                        </Tabs>
                    </Paper>
                    <Container>
                        <Grid container>
                            <Contact />
                        </Grid>
                    </Container>
                </div>
            )
    }
}

export default Home;