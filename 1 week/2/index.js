/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	let intervalHours = 0, intervalMinutes = 0;
	
	intervalHours = Math.floor(interval/60);
	intervalMinutes = interval % 60;
	minutes += intervalMinutes;
	if (minutes >= 60) {
		intervalHours += Math.floor(minutes/60);
		minutes %= 60;
		if ((minutes + "").length == 1) {
			minutes = '0' + minutes;
		}
	}

	if (intervalHours >= 0) {
		hours += intervalHours;
		
	}

	if (hours >= 24) {
		hours %= 24;
		if ((hours + "").length == 1) {
			hours = '0' + hours;
		}
	}

	return hours + ':' + minutes;
};
