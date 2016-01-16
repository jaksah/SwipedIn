'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Button from 'components/Button.jsx';
// Stores
import Store from 'stores/Store.js';
import AppActions from 'actions/AppActions.js';

class App extends React.Component {

	constructor(props) {
		super(props);
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
				Här lägger vi components
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