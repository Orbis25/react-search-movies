import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { movieResult as movieResultSelector } from "../../redux/selectors/index";
import { searchMovieById } from "../../redux/actions/search";

const DetailPage = (props) => {
  const { history } = props;
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));
  useEffect(() => {
    dispatch(searchMovieById({ movieId: id }));
  }, [dispatch, id]);

  const _renderDetail = () => {
    if (movieResult) {
      const { Title, Poster, Plot, Actors } = movieResult;
      return (
        <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
          <Typography variant="h1">{Title}</Typography>
          <img src={Poster} width={200} alt={Poster} />
          <p>{Plot}</p>
          <p>
            <b>Actors: </b>
            {Actors}
          </p>
        </Grid>
      );
    } else {
      return <CircularProgress color="primary" size={100} />;
    }
  };

  return (
    <Container>
      <Grid container>{_renderDetail()}</Grid>
      <Grid container>
        <Grid item>
          <Button
            onClick={() => history.goBack()}
            color="primary"
            variant="contained"
          >
            Volver
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPage;
