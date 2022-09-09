import React from "react";
import imagen from "../../img/img.png"



const Container = ()=>{
    return(
        <div id="Porfolio" className="container border-bottom ">
            <div className="row mt-5">
                <h3>Porfolio</h3>
                <p className="porfolio-description"> Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                    id ligula porta felis euismod semper. Praesent commodo cursus magna,
                    vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                </p>
            </div>

            <div className="row mb-5">
                <div className="card">
                    <img className="card-img-top" src= {imagen} ></img>
                    <div className="card-body">
                        <h4 className="project-name mt-4">Card Title</h4>
                        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                            pellentesque urna varius vitae.
                        </p>
                    </div>
                    <div className="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src= {imagen} ></img>
                    <div className="card-body">
                        <h4 className="project-name mt-4">Card Title</h4>
                        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                            pellentesque urna varius vitae.
                        </p>
                    </div>
                    <div className="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
                    
                <div className="card">
                    <img className="card-img-top" src= {imagen} ></img>
                    <div className="card-body">
                        <h4 className="project-name mt-4">Card Title</h4>
                        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                            pellentesque urna varius vitae.
                        </p>
                    </div>
                    <div className="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src= {imagen} ></img>
                    <div className="card-body">
                        <h4 className="project-name mt-4">Card Title</h4>
                        <p className="porfolio-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam viverra euismod odio, gravida 
                            pellentesque urna varius vitae.
                        </p>
                    </div>
                    <div className="card-footer">
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container