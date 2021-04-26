function getTime() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time); 
}
setInterval(function() { getTime(); }, 1000);
