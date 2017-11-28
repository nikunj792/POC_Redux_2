import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider }from 'react-redux';
import App from './components/app.js';

const initialState ={
	eventName:' ',
	dateOfEvent:' '
}

var eventReducer = (state = initialState, action)=>{
	switch(action.type){		
		case "SET_EVENT":
		  state={
			  ...initialState,
			  eventName:action.payload.eventName,
			  dateOfEvent:action.payload.dateOfEvent
			  } 
		return state;
		break;
	}	
	}

var store = createStore(eventReducer);
store.subscribe(()=>{
	console.log("Store Changes",store.getState());
});

store.dispatch({
	type:'SET_EVENT',
	payload:{
		eventName:'Cricket',
		dateOfEvent:'09-05-202'
	}
});  

render(	
	<Provider store ={store}>
			<App />
	</Provider>,
	document.getElementById('es2016'));