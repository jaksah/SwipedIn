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
	
	render() {
		var events = this.props.events || [];
		
		events = _.sortBy(events, function(e){return e.startsAt.date;});
		var appActions = this.props.appActions;
		var prevDate = undefined;

		var rows = [];
		var eventsByDate = {};

		events.map(function(event, i){
			// Initiate array if it doesn't exist
			if (!eventsByDate[event.startsAt.date]){
				eventsByDate[event.startsAt.date] = [];
			}

			eventsByDate[event.startsAt.date].push(event);
		});

		_.forEach(eventsByDate, function(events, date) {
			
			//
			var eventRows = [];
			_.forEach(events, function(event){
				eventRows.push(<EventListRow key={event.id} appActions={appActions} eventData={event} />);
			});

			// Add the date separator
			rows.push(
				<div key={date}>
					<h3 style={{margin: "40px 0 0 0"}}>{date}</h3>
					<hr></hr>
					{eventRows}
				</div>
			)
		});

		return (
			<div className="container">
				{rows}
			</div>
		);
	}
}
