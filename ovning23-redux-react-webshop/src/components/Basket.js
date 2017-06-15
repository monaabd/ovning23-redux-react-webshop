import React, { Component } from 'react';
import '../App.css';

function Basket(props) {
    
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice} key={i++}>name: {x.flowersName} price: {x.flowersPrice} <img className="productsImg" src={x.flowersImg} alt={x.flowersName} />
    <button onClick={props.handleClickDeleteBasket} id={x.flowersName+x.flowersPrice}>Delete</button>                                        
    </li> )
     
    var totalPrice = 0 ;
     for(i=0; i<props.productsVariable.length; i++){
        totalPrice= totalPrice + props.productsVariable[i].flowersPrice;
        
    }
    
                                            
	return ( <div><h1> Basket page</h1>
              <div><h1> Total price {totalPrice}</h1></div>                         
                                   
            <ul>{list}</ul>
            
            </div>                                
          );

                            
}

    
export default Basket;