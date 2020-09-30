import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Curso.css";
import "../postIt/PostIt.css";
import Title from "../commons/title/Title";
import PostItBlue from "../postIt/postIt-blue/PostItBlue";
import PostItYellow from "../postIt/postIt-yellow/PostItYellow";
import PostItInscripcion from "../postIt/postIt-inscripcion/PostItInscripcion";
import PostItGreen from "../postIt/postIt-green/PostItGreen";
import PostItRed from "../postIt/postIt-red/PostItRed";
import CursoService from "../service/CursoService";
import { Dialog } from "primereact/dialog";
import { AlertService } from "../service/AlertService"

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

function Curso() {

  const cursoService = new CursoService();
  const [cursosDisponibles, setCursosDisponbiles] = useState([]);
  const [misCursos, setMisCursos] = useState([]);
  const classes = useStyles();
  const [comenzarPago, setComenzarPago] = useState(false);
  const [medioPago, setMedioPago] = useState("TARJETA");
  const [infoMedioPago, setInfoMedioPago] = useState("123");
  const [cursoAPagar, setCursoAPagar] = useState({});


  useEffect(() => {
    cursoService.getAllDisponibles()
      .then((data) => { console.log(data); setCursosDisponbiles(data); });

    cursoService.getMisCursos()
      .then((data) => { console.log('miscursos'); console.log(data); setMisCursos(data); });
  }, []);




  const onInscribir = (event, curso) => {
    //https://stackoverflow.com/questions/40109698/react-call-parent-method-in-child-component/40109797#:~:text=Passing%20the%20function%20down%20as%20props%20to%20the%20child%20component.&text=You%20can%20try%20doing%20something,the%20props%20in%20child%20class.

    setCursoAPagar(curso);
    setComenzarPago(true);
  }


  const pagar = () => {
    let inscripcionInfo = {
      cursoId: cursoAPagar.cursoId,
      medioPago: medioPago,
      infoMedioPago: infoMedioPago
    }
    cursoService.postInscribirme(inscripcionInfo).then((data) => {
      AlertService.success('Te inscribiste con exito!');
      setCursosDisponbiles(cursosDisponibles.filter(c => c.cursoId != cursoAPagar.cursoId));
      cursosDisponibles.pop(cursoAPagar);
      misCursos.push(cursoAPagar);
      setComenzarPago(false);
      //window.location.reload();
    }
    )
  }
  const hayCursosDisponibles = () => cursosDisponibles.length > 0;
  const tengoCursos = () => misCursos.length > 0;

  return (


    <div className="curso-categoria">
      <div className={classes.root}>
        <Title text="CURSOS" />
        <Grid container spacing={2}>

          {cursosDisponibles.map(curso => (
            <Grid item xs>
              <PostItInscripcion curso={curso} onInscribir={onInscribir} />
            </Grid>
          ))}
        </Grid>
        <Grid className="row-reverse" container spacing={2}>
          <Grid container spacing={2}>

            {misCursos.map(curso => (
              <Grid item xs>
                <PostItYellow text={curso.nombre} descripcion={curso.descripcion} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
      <Dialog
        header="Incripcion"
        visible={comenzarPago}

        style={{ width: "30%", height: "50%" }}
        modal={true}
        onHide={() => setComenzarPago(false)}
      >
        <div className="col-12">
          <form id="registro">
            <div className="form-group">
              <label className="Registro-label">Numero Tarjeta:</label>
              <input className="col-12" placeholder="Tarjeta"
                onChange={e => setInfoMedioPago(e.target.value)}
              ></input>
            </div>

          </form>
          <div className="form-group">
            <button className="Boton-registro" onClick={pagar}>
              PAGAAAAAAAR!
          </button>
          </div>
        </div>
      </Dialog>
    </div>

  );
}
export default Curso;