const alt = require('alt-instance.js');

class AppActions {
	
	showEvent(id) {
		return id;
	}
}

module.exports = alt.createActions(AppActions);