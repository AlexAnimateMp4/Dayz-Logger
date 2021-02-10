const path = require(`path`);
module.exports = {
    EVENTS: require(path.join(__dirname, `events.js`)),
    FUNCTIONS: require(path.join(__dirname, `functions.js`)),
    LANGUAGES: require(path.join(__dirname, `languages.js`)),
    SETTINGS: require(path.join(__dirname, `settings.js`))
};