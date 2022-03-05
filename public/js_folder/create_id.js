//let random =require('random');
let createId=function () {
    return  Math.floor(Math.random() * (2000-1000)+1) +1000;
};
module.exports = createId;