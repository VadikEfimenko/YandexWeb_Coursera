// Телефонная книга
var phoneBook = {};

function addContact(commandArray) {
    if (!phoneBook.hasOwnProperty(commandArray[0])) {
        phoneBook[commandArray[0]] = commandArray[1].split(',');
    } else {
        phoneBook[commandArray[0]] = phoneBook[commandArray[0]].concat(commandArray[1].split(','));
    }
}

function showContacts() {
    let arrayContacts = [];
    keys = Object.keys(phoneBook);
    keys.sort();

    for (let i=0; i < keys.length; i++) {
        key = keys[i];
        if (phoneBook[key].length != 0) {
            arrayContacts.push(key + ': ' + phoneBook[key].join(', '));
        }
    }
    return arrayContacts;
}

function removePhone(commandArray) {
    for (key in phoneBook) {
        if (phoneBook[key]) {
            let indexPhone = phoneBook[key].indexOf(commandArray[0]);
            if (indexPhone != -1) {
                phoneBook[key].splice([indexPhone],1);
                return true;
            }
        }
    }
    return false;
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let commandArray = command.split(' ');
    switch(commandArray[0]) {
        case 'ADD':
            addContact(commandArray.slice(1));
            break;
        case 'SHOW':
            return showContacts();
        case 'REMOVE_PHONE':
            commandArray = commandArray.slice(1);
            return removePhone(commandArray); 
    }
};
