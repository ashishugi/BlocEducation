import React from "react";

function MultiCarousel(){

    return (
        <div className=" text-center my-3">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel" data-interval="false">
            <div className="carousel-inner w-100" role="listbox">
                <div className="carousel-item row no-gutters active">
                    <div className="col-3 float-left">1</div>
                    <div className="col-3 float-left">2</div>
                    <div className="col-3 float-left">3</div>
                    <div className="col-3 float-left">4</div>
                </div>
                <div className="carousel-item row no-gutters">
                    <div className="col-3 float-left">5</div>
                    <div className="col-3 float-left">6</div>
                    <div className="col-3 float-left">7</div>
                    <div className="col-3 float-left">8</div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    );
}
export default MultiCarousel;