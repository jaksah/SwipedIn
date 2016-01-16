const alt = require('alt-instance.js');

class AppActions {
	
	fetchEvents() {
		return true;
	}
	
	receiveEvents(events) {
		return events;
	}
	
	showEvent(id) {
		return id;
	}
}

module.exports = alt.createActions(AppActions);