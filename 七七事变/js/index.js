let obgs = document.getElementsByClassName("bg"); //所有背景图片
let opages = document.querySelectorAll(".page");
let index = 0;


let otime = 1937;
let timer = setInterval(() => {
	otime++;
	document.querySelector("#time>span").innerHTML = otime;
	if (otime >= 2017) {
		clearInterval(timer);
		setTimeout(() => {
			opages[0].style.display = "none";
			fadeIn(opages[1]);
			index = 2;
		}, 1000)
	}
}, 35);

function fadeIn(obj) {
	obj.style.display = "block";
	let classes = obj.getAttribute("class");
	if (classes.indexOf("fadeIn") != -1) return;
	obj.className = `${classes} fadeIn`;
}

touchEvent.touchE(document, true, () => {
	if (index < 2 || index >= 15) return;
	opages[index - 1].style.display = "none";
	fadeIn(opages[index++]);
}, () => {

	if (index <= 2) return;
	opages[--index].style.display = "none";
	fadeIn(opages[index - 1]);
});

function DeviceOrientationHandler(e) {

	let gamma = e.gamma;
	if (gamma != null) {
		let oskew;
		if (gamma > 0) {
			if (index == 2) {
				oskew = (gamma * 29) / 80;
			} else {
				oskew = (gamma * 15) / 80;
			}
			obgs[index - 2].style.transform = `translateX( ${oskew}% )`;
		} else {
			if (index == 2) {
				oskew = (gamma * 43) / 80;
			} else {
				oskew = (gamma * 31) / 80;
			}
			obgs[index - 2].style.transform = `translateX( ${oskew}% )`;
		}



	}

}

if (window.DeviceOrientationEvent) { //如果支持该api
	window.addEventListener("deviceorientation", DeviceOrientationHandler, true);
} else {
	alert("不支持DeviceOrientation");
}
