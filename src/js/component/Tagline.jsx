import React from "react";
import fondo from "../../img/hawaii.jpg"

const Tagline = ()=>{
    return(
        <div className="bg-image pt-5 shadow-1-strong rounded mb-5 text-white" 
            style={{backgroundImage: `url(${fondo})`,
             backgroundSize: "cover",
            height: "600px"}}>
                <h1 className="mt-5 mb-3 ms-5 pb-2 text-white fw-semibold" 
                style={{fontSize: "80px"}}>
                    A Warm Welcome!
                </h1>
                <p className="pb-2 mb-0 ms-5 text-white" style={{fontSize: "20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Nam viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
                <a href="#" className="boton btn btn-primary ms-5">Call to action!</a>
        </div>
    )
}

export default Tagline