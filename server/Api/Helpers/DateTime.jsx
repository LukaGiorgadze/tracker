"use strict";

// Format date and time
export function formatDateTime(dateTime) {
	let date = new Date(dateTime);
	let json = {
		'Y': date.getFullYear(),
		'm': date.getMonth()+1,
		'd': date.getDate(),
		'H': date.getHours(),
		'i': date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes()
	};
	json.time = json.H + ':' + json.i;
	return json;
}

// Time ago (e.g. 5 hours ago)
export function timeSince(date){
	switch (typeof date) {
		case 'number':
			break;
		case 'string':
			date = +new Date(date); break;
		case 'object':
			if(date.constructor === Date)
				date = date.getTime();
			break;
		default:
			date = +new Date();
	}
	const timeFormats = [
		[60, 'secondsAgo', 1], // 60
		[120, 'minuteAgo'], // 60*2
		[3600, 'minutesAgo', 60], // 60*60, 60
		[7200, 'hourAgo'], // 60*60*2
		[86400, 'hoursAgo', 3600] // 60*60*24, 60*60
	];
	let seconds = (+new Date() - date) / 1000;

	if(seconds <= 10) {
		return {
			'n': 0,
			'w': 'now'
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
					'n': format[1] == 'yesterday' ? 0 : 1,
					'w': format[1]
				};
			}
		}
	}
	return false;
}