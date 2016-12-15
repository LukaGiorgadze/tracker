'use strict';

import { browserHistory } from 'react-router';

export function link(url) {
	return browserHistory.push(url);
}

export function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}