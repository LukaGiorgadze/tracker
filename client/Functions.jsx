'use strict';

import { browserHistory } from 'react-router';

export function link(url) {
	return browserHistory.push(url);
}

export function formatContentToHTML(content) {
	content = content.replace(/(?:\r\n|\r|\n)/g, '<p></p>');
	return content;
}