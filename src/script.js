function vibratePhone() { if (navigator.vibrate) {

navigator.vibrate(1000);


} else {

console.log("Vibration API is not supported in your browser.");

}

}