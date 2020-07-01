import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { useStyles } from "./styles";

const MovieResult = (props) => {
  const classes = useStyles();
  const { Title, Poster, Year } = props.movie;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={Poster} />
      <CardContent className={classes.content}>
        <Typography variant="h5">{Title}</Typography>
        <Typography>{Year}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieResult;
