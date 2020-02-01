import React, { Component } from "react";
import {
  CssBaseline,
  Paper,
  Grid,
  Typography,
  Container
} from "@material-ui/core";

import RsvpForm from "./components/RsvpForm";
import Slideshow from "./components/Slideshow";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { theme } from "./settings";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    paddingTop: theme && theme.spacing,
    paddingBottom: theme.spacing
  }
});


class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image}>
            <Slideshow />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Container className={classes.container}>
              <Typography variant="h4" align="center" color="primary">
                Welcome
              </Typography>
              <Typography variant="body1" align="center">
                Welcome info on the wedding - date - time - location
              </Typography>
            </Container>
            <Container className={classes.container}>
              <Typography variant="body1" align="center">
                Please RSVP and all that below
              </Typography>
              <RsvpForm />
            </Container>
            <Container className={classes.container}>
              <Typography variant="h5" component="h5" align="center">
                More Details
              </Typography>

              <Typography variant="body1" component="div" align="center">
                No presents, wishing well and all that jazz
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);
