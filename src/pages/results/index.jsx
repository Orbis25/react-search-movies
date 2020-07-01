import React, { useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import getParam from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import MovieResult from "../../components/movieResult";

const ResultsPage = ({ location }) => {
  const dispach = useDispatch();
  const movies = useSelector((state) => movieResults(state));

  useEffect(() => {
    const { movieName } = getParam.parse(location.search);
    if (movieName && !movies) {
      dispach(searchMovie({ movieName }));
    }
  });

  return (
    <Container>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          {movies &&
            movies.map((movie, key) => <MovieResult movie={movie} key={key} />)}
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Link to="/">
            <Button color="primary" variant="outlined">Volver</Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultsPage;
