import alt from 'alt-instance.js';
import AppActions from 'actions/AppActions.js';
import DataSource from 'utils/DataSource.js';

class Store {

	constructor() {
		this.bindListeners({
			// We want to fetch events from server
			fetchEvents: AppActions.fetchEvents,
			// Receive events from server
			receiveEvents: AppActions.receiveEvents,
			// User wants to show an event
			showEvent: AppActions.showEvent
		});
		this.state = {
			events: [],
			showEvent: null
		};
		this.registerAsync(DataSource);
	}

	showEvent(id) {
		this.setState({ showEvent: id });
	}
	
	fetchEvents() {
		this.getInstance().getEvents();
	}
	
	receiveEvents(events) {
		this.setState({ events: events });
	}
};

export default alt.createStore(Store, 'Store');