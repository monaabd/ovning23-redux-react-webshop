import { CHANGE_TAB, ADDPRODUCT,BASKET,DELETEPRODUCT,HISTORY} from '../actions/actions.js';

/*function rootReducer(state = initialState, action) {
	console.log('rootReducer state:', state, action)
	switch( action.type ) {
		case CHANGE_TAB:
			return {
				...state,
				tab: action.tab
			};
		case ADD_NUMBER:
			return {
				...state,
				numbers: [...state.numbers, action.number]
			};
		default:
			return state;
	}
}*/

function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function productsReducer(state = [], action) {
	switch( action.type ) {
        case ADDPRODUCT:
			return [...state, action];
        case DELETEPRODUCT:
			let Removed =
            //filter trough state and all elements which their is not the same as action.id in delete action     
            state.filter(function(elemenet) {
			return elemenet.id !== action.id;
		});
		    return Removed;
        default:
            return state;
		}
}

function basketReducer(state = [], action) {
	switch(action.type ) {
		case BASKET:
            //takes the basket which is in state 
          return [...state, action];
		default:
			return state;
	}
}


function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
}


export {tabReducer,basketReducer, productsReducer, historyReducer};



