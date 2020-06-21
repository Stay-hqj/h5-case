setTimeout(() => {
	document.getElementById("index").style.display = "none";
	document.getElementById("wrap").style.display = "block";
	document.getElementById("wrap").className = "bgchanged01";
	document.getElementById("car2").style.display = "block";
	document.getElementById("car2").className = "carStartIn";
	document.getElementById("narrow").style.display = "block";
}, 2000);

let oban = ["-1142.6%", "-979.5%", "-893.6%", "-599.6%", "-499.6%", "-199.6%", "-0.6%"];
let oob = document.getElementById("wrap");
let index = 0;

touchEvent.touchE(document, true, function() {
	oob.className = "";
	let oside01 = document.getElementById("slider1").getElementsByTagName("img")[0];
	let ocar = document.getElementById("car2");
	if (index == 0) {
		oside01.className = "pro01";
		ocar.className = "carTop";
	} else if (index == 1) {
		oside01.className = "pro01back";
		let oside02 = document.getElementById("slider2").getElementsByTagName("img")[0];
		oside02.className = "pro02";
		ocar.className = "carBack";
	} else if (index == 2) {
		ocar.className = "carRotate";
		document.getElementById("background").className = "bgTranslate";
		setTimeout(() => {
			ocar.className = "carTop02";
			document.getElementById("slider3").className = "pro03";
		}, 2000);
	} else if (index == 3) {
		ocar.className = "carTop03";
		document.getElementById("lunzi").className = "showOpen";
		document.getElementById("slider3").className = "pro03back";
		document.getElementById("slider4").className = "pro04";
	} else if (index == 4) {
		document.getElementById("slider4").className = "pro04";
		document.getElementById("lunzi").className = "showShut";
		setTimeout(() => {
			document.getElementById("bg6").className = "carBg";
			document.getElementById("car4").className = "carMove";
		}, 2300);
	} else if (index == 5) {
		document.getElementById("car4").className = "carMove02";
		document.getElementById("narrow").style.display = "none";
		setTimeout(() => {
			document.getElementById("yun1").className = "cloudFromLeft";
			document.getElementById("yun2").className = "cloudFromRight";
			document.getElementById("whitebg").className = "fadeIn";
			document.getElementById("test").className = "zoomIn";
			setTimeout(() => {
				document.getElementById("blackbg").className = "fadeIn";
				document.getElementById("one").className = "zoomIn02";
				setTimeout(() => {
					document.getElementById("flash").className = "flashRotate";
					//车显示
					document.getElementById("car5").className = "zoomIn03";
					document.getElementById("two").className = "fadeIn01";
					setTimeout(() => {
						document.getElementById("carRight").className = "fadeOut";
						document.getElementById("carLeft").className = "fadeOut";
						document.getElementById("con").className = "sildeDown";
						setTimeout(() => {
							document.getElementById("fot").className = "sildeUp";
							setTimeout(() => {
								document.getElementById("dialog").className = "InTop";
							}, 1300)
						}, 1500)
					}, 4000)
				}, 2500)
			}, 3000);
		}, 1000);

	}

	oob.style.top = oban[index++];
	wrap.className = `bgChanged0${index+1}`;

});
