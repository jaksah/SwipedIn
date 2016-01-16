'use strict';

import React from 'react';
import EventListRow from 'components/EventListRow.jsx';
import _ from 'lodash';
export default class EventList extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	hover: false
        }
    }

    _mockEvent(id) {
    	var day = id % 5;
    	var date = "2016-01-" + day;
    	return {id:id, title:"Hello, it's me", description:"I was wondering if after all these years you'd like to meet. To go over everything. They say that time's supposed to heal ya. But I ain't done much healing. Hello, can you hear me. I'm in California dreaming about who we used to be. When we were younger and free. I've forgotten how it felt before the world fell at our feet.", attendees:["Jakob", "Sara", "Jimmie", "Joy"], startsAt: {date: date, time:"18:00"}};
    }

    _mockEvents() {
    	var events = [];
    	for (var i=0; i<20; i++){
    		events.push(this._mockEvent(i));
    	}
    	return events;
    }


	render() {
		var events = this._mockEvents()
		events = _.sortBy(events, function(e){return e.startsAt.date;});
		var appActions = this.props.appActions;
		var prevDate = undefined;

		var rows = [];
		console.log(events);
		events.map(function(event, i){
			console.log(event);
			if(event.startsAt.date != prevDate){
				rows.push(
					<div>
						<h3 style={{margin: "40px 0 0 0"}}>{event.startsAt.date}</h3>
						<hr></hr>
					</div>
					);
				prevDate = event.startsAt.date;
			}
			rows.push(<EventListRow appActions={appActions} eventData={event} />)
		});

		return (
			<div className="container">
				{rows}
			</div>
		);
	}
}
