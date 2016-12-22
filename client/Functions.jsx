'use strict';

import { browserHistory } from 'react-router';

export function link(url) {
	return browserHistory.push(url);
}