'use strict';

import AppActions from 'actions/AppActions.js';

const DataSource = {
	getEvents: {
		remote: function(state) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					resolve();
				}, 500);
			});
		},
		
		local: function() {
			return null;
		},
		
		success: AppActions.receiveEvents,
		error: AppActions.receiveEventsError,
	}
};

export default DataSource;