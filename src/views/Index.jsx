'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Button from 'components/Button.jsx';
import EventList from 'components/EventList.jsx';
import Event from 'components/Event.jsx';
import Swipe from 'components/Swipe.jsx';
// Stores
import Store from 'stores/Store.js';
import AppActions from 'actions/AppActions.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		Store.listen(this.onChange.bind(this));		
		AppActions.fetchEvents();
	}
	
	onChange(state) {
		this.setState(state);
	}

	showEvent(id) {
		AppActions.showEvent(id);
	}
   
	render() {
		var SwipingWindow = !this.state.swiping || <Swipe 
			name={ this.state.swiping.event.attendees[this.state.swiping.i].name }
			profileImageUrl={ this.state.swiping.event.attendees[this.state.swiping.i].profileImageUrl } /> 

		var EventWindow = 
			!this.state.swiping && 
				(this.state.showEvent !== null && this.state.showEvent !== undefined 
					? <Event event={ this.state.showEvent } /> 
					: <EventList appActions={AppActions} events={ this.state.events } />);
		return (
			<div>
				{ SwipingWindow }
				{ EventWindow }
			</div>
        );
    }
};

const Index = {
	init: function(elementId) {
		ReactDOM.render(
			<App />,
			document.getElementById(elementId)
		);
	}
};

export default Index;