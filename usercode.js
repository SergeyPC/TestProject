const metods = require('./metods');

module.exports = (data) => {
    data.sum = metods.sum(data.number1,data.number2);
    
    return data;
};