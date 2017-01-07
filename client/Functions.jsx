'use strict';
import { browserHistory } from 'react-router';
import { config } from './Config';

export function link(url) {
	let _url = config.baseUrl + url.replace(/^\/|\/$/g, '');
	return browserHistory.push(_url);
}

export function formatContentToHTML(content) {
	content = content.replace(/(?:\r\n|\r|\n)/g, '<p></p>');
	return content;
}