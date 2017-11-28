import React from 'react';
import template from './template.jsx';
import { connect } from 'react-redux';

class App extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		const data ={
			eventName:this.props.data.eventName,
			dateOfEvent:this.props.data.dateOfEvent,
			handleDateChange:this.props.handleDateChange,
			handleDataChange : this.props.handleDataChange
		}
		return template(data);
	}
}

const mapStateToProps = (state)=>{
	return{
		data:state
		};
};

const mapDispatchToProps =(dispatch)=>{
	return {
		handleDateChange:(event,date)=>{
		let date1={dateOfEvent:date.getHours()};
		dispatch({
			type:'SET_EVENT',
			payload:date1
		});
	},
		handleDataChange :(newData)=>{
			let val ={ 
			eventName:newData.target.value
			};
		dispatch({
			type:'SET_EVENT',
			payload:val
		});
	}	
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(App);