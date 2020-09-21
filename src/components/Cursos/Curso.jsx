import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Curso.css";
import "../postIt/PostIt.css";
import Title from "../commons/title/Title";

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
      </div>
    </div>
  );
}
