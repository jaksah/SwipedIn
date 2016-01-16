'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Button from 'components/Button.jsx';
import EventList from 'components/EventList.jsx';
import Swipe from 'components/Swipe.jsx'
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
		return (
			<div>
				state: { JSON.stringify(Store.getState()) }
				<hr />
				<EventList appActions={AppActions}/>
				{ <EventList appActions={AppActions} events={ this.state.events } /> }
				<Swipe name="Joy Friberg" profileImageUrl="/black.png" school="Linköpings universitet" company="Netlight Consulting AB"></Swipe>
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