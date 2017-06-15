const CHANGE_TAB = 'CHANGE_TAB';
const ADDPRODUCT = 'ADDPRODUCT';
const HISTORY = 'HISTORY';
const DELETEPRODUCT='DELETEPRODUCT';
const BASKET='BASKET';
const DELETEBASKET='DELETEBASKET';
function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function ActionAddProduct(name, price, image) {
	return {
		type : ADDPRODUCT,
        id:name+price,
		flowersName: name,
        flowersPrice:price,
        flowersImg:image
	}
}

function ActionDeleteProduct(id,name, price, image) {
	return {
		type: DELETEPRODUCT,
        id: id,
		flowersName: name,
        flowersPrice:price,
        flowersImg:image
	}
}
function ActionBasket(id,name, price,image) {
	return {
        
		type: BASKET,
        id:id,
		flowersName: name,
        flowersPrice:price,
        flowersImg:image
        
	}
}
function ActionDeleteBasket(id,name, price, image) {
	return {
		type: DELETEBASKET,
        id: id,
		flowersName: name,
        flowersPrice:price,
        flowersImg:image
	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action,
        
	}
}


export { CHANGE_TAB, actionChangeTab, ADDPRODUCT,ActionAddProduct, DELETEPRODUCT,ActionDeleteProduct,BASKET,ActionBasket,DELETEBASKET,ActionDeleteBasket,HISTORY, actionHistory,
};



