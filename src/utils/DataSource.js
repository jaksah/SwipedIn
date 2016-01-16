'use strict';

import AppActions from 'actions/AppActions.js';

const _mockEvent = function(id) {
	var day = id % 5;
	var date = "2016-01-" + day;
	return {id:id, title:"Hello, it's me", description:"I was wondering if after all these years you'd like to meet. To go over everything. They say that time's supposed to heal ya. But I ain't done much healing. Hello, can you hear me. I'm in California dreaming about who we used to be. When we were younger and free. I've forgotten how it felt before the world fell at our feet.", attendees:["Jakob", "Sara", "Jimmie", "Joy"], startsAt: {date: date, time:"18:00"}};
}

const _mockEvents = function() {
	var events = [];
	for (var i=0; i<20; i++){
		events.push(_mockEvent(i));
	}
	return events;
}

const DataSource = {
	getEvents: {
		remote: function(state) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					var events = _mockEvents();
					resolve(events);
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