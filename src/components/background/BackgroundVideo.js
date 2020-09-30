import React from 'react';
import videoSource from "../../assets/video/video1.mp4";
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
     return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Cursos Buho</h1>
                    <p>Aprende todo lo que quieras, en un solo lugar</p>
                    <button type="button" className="btn btn-outline-dark">Ver mas</button>
                    
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo