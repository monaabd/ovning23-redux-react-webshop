import React, { Component } from 'react';
import '../App.css';

function Basket(props) {
    
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice} key={i++}>name: {x.flowersName} price: {x.flowersPrice} <img className="productsImg" src={x.flowersImg} alt={x.flowersName} /> 
    </li> );
                                            
	return ( <div><h1> Basket page</h1>
                                   
            <ul>{list}</ul>
            
            </div>                                
          );

                     
}

    
export default Basket;