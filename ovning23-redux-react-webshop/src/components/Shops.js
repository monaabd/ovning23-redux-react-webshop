import React from 'react';

function Shops(props) {
    
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice} key={i++}>name: {x.flowersName} price: {x.flowersPrice} <img className="productsImg" src={x.flowersImg} alt={x.flowersName} /> 
    <button onClick={addToBasketShop} id= {x.flowersName+x.flowersPrice}> Add to your basket</button></li> )
                                            
	return ( <div><h1> Shopping page</h1>
                                   
            <ul className="ProductList">{list}</ul>
            
            </div>                                
          );

          

  function addToBasketShop (e){
        
    props.addToBasket(e.target.id);
   
    }                                          
}
                                            
export default Shops;