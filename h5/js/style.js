let hour = document.querySelector('.hour')
let mintue = document.querySelector('.mintue')
let second = document.querySelector('.second')

let timer =setInterval(time, 1000)
function time() {
	let now = new Date();
	let targetTime = new Date('2020/11/25,00:00:00')
	let difference = (targetTime - now) / 1000
	console.log(targetTime - now)
	if(difference<0){
		console.log(timer)
		clearInterval(timer)
		return
	}
	let D = addZero(Math.floor(difference / 3600 / 24 % 30))
	let H = addZero(Math.floor(difference / 3600 % 24))
	let M = addZero(Math.floor(difference / 60 % 60))
	let S = addZero(Math.floor(difference % 60))
	hour.innerText = H
	mintue.innerText = M
	second.innerText = S
}


function addZero(time) {
	return time >= 10 ? time : '0' + time
}
