import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
const MovieResult = (props) => {
  const classes = useStyles();
  const { Title, Poster, Year, imdbID } = props.movie;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={Poster} />
      <CardContent className={classes.content}>
        <Typography variant="h5">{Title}</Typography>
        <Typography>{Year}</Typography>
        <Link to={`/detail/${imdbID}`}>
          <Button color="primary" variant="contained">
            Ver mas
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default MovieResult;
