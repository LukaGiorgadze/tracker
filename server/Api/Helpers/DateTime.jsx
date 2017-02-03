"use strict";

export function formatDateTime(dateTime) {
	let date = new Date(dateTime);
	let json = {
		'Y': date.getFullYear(),
		'm': (date.getMonth()+1) < 10 ? '0' + (date.getDate()+1) : '' + (date.getDate()+1),
		'd': date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate(),
		'H': date.getHours(),
		'i': date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes()
	};
	json.time = json.H + ':' + json.i;
	return json;
}
export function timeSince(time){
	switch (typeof time) {
		case 'number':
			break;
		case 'string':
			time = +new Date(time); break;
		case 'object':
			if(time.constructor === Date)
				time = time.getTime();
			break;
		default:
			time = +new Date();
	}
	const timeFormats = [
		[60, 'seconds', 1], // 60
		[120, 'minute'], // 60*2
		[3600, 'minutes', 60], // 60*60, 60
		[7200, 'hour'], // 60*60*2
		[86400, 'hours', 3600], // 60*60*24, 60*60
		[172800, 'yesterday'], // 60*60*24*2
		[604800, 'days', 86400] // 60*60*24*7, 60*60*24
	];
	let seconds = (+new Date() - time) / 1000;

	if(seconds == 0) {
		return {
			n: 0,
			w: 'now'
		};
	}

	let i = 0, format;
	while(format = timeFormats[i++]) {
		if(seconds < format[0]) {
			if(format[2]) {
				return {
					'n': Math.floor(seconds / format[2]),
					'w': format[1]
				};
			} else {
				return {
					'n': 1,
					'w': format[1]
				};
			}
		}
	}
	return false;
}