/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
	if (Number.isNaN(a) == false && Number.isNaN(b) == false) { 
		return parseInt(a) + parseInt(b);
	} else {
		throw new UserException("Переданы не числа!");
	} 
}
