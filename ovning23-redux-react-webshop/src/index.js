import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, productsReducer,basketReducer, historyReducer} from './reducers/reducers.js';


let initialState = {
	tab: 1,  // 1=väder, 2=tal
	products:[{
        id:'Rose40',
        flowersName:'Rose',
        flowersPrice:40,
        flowersImg: 'https://static.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg'
     },
        {
        id:'Orchid60',
        flowersName:'Orchid',
        flowersPrice:60,
        flowersImg:'http://www.fabiovisentin.com/photography/photo/22/pink-orchids-photo-02265.jpg'
     },
        {
         id:'Pretoria40',
        flowersName:'Pretoria',
        flowersPrice:40,
        flowersImg: 'https://s-media-cache-ak0.pinimg.com/736x/5a/ee/d0/5aeed0ad17b1fe4d12fd0c5f78263f98.jpg'
     }     ], 
    
      basket:[],
	}


let rootReducer = combineReducers({
	tab: tabReducer,
	products:productsReducer,
    shops:basketReducer,
    basket:basketReducer,
    history:historyReducer
});
const store = createStore(rootReducer, initialState);
 //provider to get hold of store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
