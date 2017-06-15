import React from 'react';
//
//this is in redux the same as component
// Admin page 
var items = {name:undefined, price:undefined, image:undefined}

function Products(props) {
	 
    let i=0;
	const list = props.productsVariable.map( x => <li id={x.flowersName+x.flowersPrice}key={i++}>
    name: {x.flowersName}
    price: {x.flowersPrice} 
    <img className="productsImg"src={x.flowersImg} alt={x.flowersName}/>
    <button onClick={props.handleClickDeleteProduct} id={x.flowersName+x.flowersPrice}>Delete</button></li>)
	return (
        <div><h1> Admin page</h1>
        
        <ul className="ProductList">{list}</ul>
        
        <div className="Form">
        <input onChange={changename}type="text"  placeholder="FlowersName"/>
        <input onChange={changeprice} type="number"  placeholder="FlowersPrice"/>
        <input onChange={changeimage} type="text"  placeholder="FlowersUrl"/>
        <button onClick={addProduct}>Add This Product</button> </div>                            
        </div>
);
    function changename(e){
        let x = e.target.value;
        items.name = x;
        
    } 
 function changeprice(e){
        let x = e.target.value;
        items.price = x;
        
    } 
     function changeimage(e){
        let x = e.target.value;
        items.image = x;
        
    } 
    function addProduct(){
        // func in tabcontainer componenet
        props.Addproduct(items.name,items.price,items.image);
      
    
    };
    
    
    
}

export default Products;

  