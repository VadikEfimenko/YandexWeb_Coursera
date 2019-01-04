function getHashTags(value, index, self) {
    return self.indexOf(value) === index;
}

function lowerCase(item) {
    return item.toLowerCase();
}
/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return hashtags.map(lowerCase)
                   .filter(getHashTags)
                   .join(', ') || '';
};
