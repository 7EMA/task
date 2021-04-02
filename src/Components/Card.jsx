import React from 'react';

let category ="";
const Card =(props) =>{
    return (
        <div className="card-container">
            <div className="image">
             <img src={props.photo} alt ="product imge"/>   
            </div>
            <div className="productName">
                <h3>{props.name}</h3>
            </div>
            <div className="ProductPrice">
               <b> <p>Price {props.price} $</p></b>
            </div>
            <button>Add To Cart</button>
            
        </div>
    );
}
export default Card;
