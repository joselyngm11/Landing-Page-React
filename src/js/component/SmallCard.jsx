import React from "react";
import imagen from "../../img/img.png"

const SmallCard = ()=>{
    return(
        <div className="card">
                    <img className="card-img-top" src= {imagen} ></img>
                    <div className="card-body">
                        <h4 className="project-name mt-4">Card Title</h4>
                        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                            pellentesque urna varius vitae.
                        </p>
                    </div>
                    <div className="card-footer">
                    <a href="#" className="boton btn btn-primary">Find Out More!</a>
                    </div>
        </div>
    )
}

export default SmallCard