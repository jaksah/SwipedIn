'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Button from 'components/Button.jsx';

var Index = {
	init: function(elementId) {
		ReactDOM.render(
			<div>
				<Button/>
			</div>,
			document.getElementById(elementId)
		);
	}
};

module.exports = Index;