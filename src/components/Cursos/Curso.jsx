import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Curso.css";
import "../postIt/PostIt.css";
import Title from "../commons/title/Title";
import PostItBlue from "../postIt/postIt-blue/PostItBlue";
import PostItYellow from "../postIt/postIt-yellow/PostItYellow";
import PostItGreen from "../postIt/postIt-green/PostItGreen";
import PostItRed from "../postIt/postIt-red/PostItRed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    alignContent: "center",
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Curso() {
  const classes = useStyles();

  return (
    <div className="curso-categoria">
      <div className={classes.root}>
        <Title text="CURSOS" />

        <Grid container spacing={2}>
          <Grid item xs>
            <PostItBlue />
          </Grid>
          <Grid item xs>
            <PostItYellow />
          </Grid>
          <Grid item xs>
            <PostItGreen />
          </Grid>
          <Grid item xs>
            <PostItRed />
          </Grid>
        </Grid>
        <Grid className="row-reverse" container spacing={2}>
          <Grid item xs>
            <PostItBlue />
          </Grid>
          <Grid item xs>
            <PostItYellow />
          </Grid>
          <Grid item xs>
            <PostItGreen />
          </Grid>
          <Grid item xs>
            <PostItRed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
