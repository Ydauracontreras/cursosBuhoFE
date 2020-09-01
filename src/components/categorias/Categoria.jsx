import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Categoria.css";
import Title from "../commons/title/Title";
import MusicaIcons from "../../assets/icons/music.svg";
import Musica from "../../assets/img/categoria-musica.jpg";

import CienciasIcons from "../../assets/icons/ciencias.svg";
import Ciencias from "../../assets/img/categoria-ciencias.jpg";

import IdiomasIcons from "../../assets/icons/idioma.svg";
import Idiomas from "../../assets/img/categoria-idioma.jpg";

import PasteleriaIcons from "../../assets/icons/cake-pop.svg";
import Pasteleria from "../../assets/img/categoria-pastelerias.jpg";

import ProgramacionIcons from "../../assets/icons/pc.svg";
import Programacion from "../../assets/img/categoria-programacion.jpg";

import AdminIcons from "../../assets/icons/administracion.svg";
import Admin from "../../assets/img/categoria-admi.jpg";
import PostItBlue from "../postIt/postIt-blue/PostItBlue";
import PostItYellow from "../postIt/postIt-yellow/PostItYellow";
import PostItGreen from "../postIt/postIt-green/PostItGreen";
import PostItRed from "../postIt/postIt-red/PostItRed";
import ArteIcons from "../../assets/icons/art.svg";
import Arte from "../../assets/img/categoria-arte.jpg";
import CocinaIcons from "../../assets/icons/cooking.svg";
import Cocina from "../../assets/img/categoria-cocina.jpg";

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

export default function Categoria() {
  const classes = useStyles();

  return (
    <div className="container-categoria">
      <div className={classes.root}>
        <Title text="CATEGORIAS" />

        <Grid container spacing={2}>
          <Grid item xs>
            <PostItBlue
              text={"Finanzas"}
              icons={AdminIcons}
              categoria={Admin}
            />
          </Grid>
          <Grid item xs>
            <PostItYellow
              text={"Musica"}
              icons={MusicaIcons}
              categoria={Musica}
            />
          </Grid>
          <Grid item xs>
            <PostItGreen text={"Arte"} icons={ArteIcons} categoria={Arte} />
          </Grid>
          <Grid item xs>
            <PostItRed text={"Cocina"} icons={CocinaIcons} categoria={Cocina} />
          </Grid>
        </Grid>
        <Grid className="row-reverse" container spacing={2}>
          <Grid item xs>
            <PostItBlue
              text={"Idiomas"}
              icons={IdiomasIcons}
              categoria={Idiomas}
            />
          </Grid>
          <Grid item xs>
            <PostItYellow
              text={"Pasteleria"}
              icons={PasteleriaIcons}
              categoria={Pasteleria}
            />
          </Grid>
          <Grid item xs>
            <PostItGreen
              text={"Programacion"}
              icons={ProgramacionIcons}
              categoria={Programacion}
            />
          </Grid>
          <Grid item xs>
            <PostItRed
              text={"Ciencias"}
              icons={CienciasIcons}
              categoria={Ciencias}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
