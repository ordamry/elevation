// exercise 1:
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(actionFunction) {
  actionFunction()
}
pushPull(push)
pushPull(pull)

//exercise 2:
const returnTime = function (time) {
  console.log('The current time is: ' + time);
}
const getTime = function (callback){
  const currentTime = new Date();
  callback(currentTime);
}

getTime(returnTime);

//exercise 3:
const logData = function(data) {
  console.log("LOG:", data)
}
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
displayData(console.error, logData, "I like to party")
