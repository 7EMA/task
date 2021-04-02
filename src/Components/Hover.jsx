import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Hover = (props) => {
    return (
        <>
            <div className="Hovering">
                <Link to="/"><button>Back</button></Link>
                <div className="Center">
                    <img src={props.photo}></img>
                    <h2>{props.name}</h2>
                    <p>Price is {props.price} $</p>

                    <button>Add to cart</button>
                </div>
            </div>


        </>
    );
}

export default Hover;
