import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import { resultsRoute } from "../../router/routes.json";
import useStyles from "./styles";

const HomePage = ({ history }) => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handlerWriteText = (event) => {
    setSearch(event.target.value)
  }  
  const handlerClearText = (event) => setSearch("");
  const handlerSearchText = (event) => {
    history.push(`${resultsRoute}${search}`);
  };
  return (
    <Container className={classes.root}>
      <Card>
        <Grid container justify="center" spacing={1}>
          <Grid xs={6} sm={6} md={6} lg={4} xl={4} item>
            <img src="/images/svg/home.svg" height="100%" alt="home.svg" />
          </Grid>
          <Grid item xs={12} md={12} sm={12} lg={12} xl={12}>
            <Typography className={classes.textTitle} variant="h3">
              BIENVENIDO! <LocalMoviesIcon fontSize="large" />
            </Typography>
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            lg={6}
            xl={6}
            className={classes.SearchContainer}
          >
            <TextField
              fullWidth
              label="BUSCADOR"
              variant="outlined"
              value={search}
              placeholder="ingresa algo para buscar"
              onChange={handlerWriteText}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item className={classes.mb}>
            <Button variant="contained" onClick={handlerClearText}>
              Limpiar
            </Button>
            <Button
              className={classes.ml}
              onClick={handlerSearchText}
              variant="contained"
              color="primary"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default HomePage;
