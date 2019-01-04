/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let stringOfWord = tweet.split(' ');
    let arrayOfHashTags = [];
    arrayOfHashTags = stringOfWord.filter(function(word) {
        return word[0] == '#' ? true : false; 
    });

    arrayOfHashTags = arrayOfHashTags.map(function(tag) {
        return tag.slice(1); 
    });
    return arrayOfHashTags;
};
