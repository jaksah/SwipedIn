const alt = require('alt-instance.js');

class AppActions {
	
	fetchEvents() {
		return true;
	}
	
	receiveEvents() {
		return [{ name: 'test' }];
	}
	
	showEvent(id) {
		return id;
	}
}

module.exports = alt.createActions(AppActions);