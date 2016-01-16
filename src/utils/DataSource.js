'use strict';

import AppActions from 'actions/AppActions.js';

const _mockEvent = function(id) {
	var day = id % 5;
	var date = "2016-01-" + day;
	return {
		id: id, 
		title:"Hello, it's me", 
		imageUrl: "https://i.ytimg.com/vi/eq7Adzo4QAE/maxresdefault.jpg",
		description:"I was wondering if after all these years you'd like to meet. To go over everything. They say that time's supposed to heal ya. But I ain't done much healing. Hello, can you hear me. I'm in California dreaming about who we used to be. When we were younger and free. I've forgotten how it felt before the world fell at our feet.", 
		attendees: [{
                name: "Name 1",
                mutual: 18
            },{
                name: "Name 2",
                mutual: 34
            },{
                name: "Name 3",
                mutual: 55
            },{
                name: "Name 4",
                mutual: 77
        }],
		startsAt: { date: date, time:"18:00" },
		date: "16-02-11",
        time: "18:30",
	};
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