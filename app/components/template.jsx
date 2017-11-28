import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default(props)=>{
	return(
		<MuiThemeProvider>
			<div>
					<TextField hintText="Event Name" name="event" onChange={props.handleDataChange} /><br />
					<TimePicker	hintText="12hr Format "	name="time" autoOk={true} onChange={props.handleDateChange} />
					<h4>Event Name is {props.eventName}</h4>
					<h5>Event Time is {props.dateOfEvent}</h5>
					<Paper />
			</div>
		</MuiThemeProvider>
		);
}