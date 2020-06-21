//获取所有音乐
let omusic = document.querySelectorAll("#music>audio");

//获取所有的喇叭
let olabas = document.querySelectorAll(".laba");


for (let a of olabas) {
	a.addEventListener("click", function(e) {
		closeAllMuisc();
		let index = this.dataset.i - 1;
		omusic[index].play();
	});
}

let owrap = $pyp("#wrap");
//获取所有要改变样式的图片
let oInsertImg = $pyp("#insertPic>img");
let otask = $pyp("#task>img");
let oelse = $pyp("#else>img");
let oprogress = $pyp("#progress p");

for (let a of oInsertImg) {
	a.onload = function() {
		scrollFadeIn(this, this.height + 50, "opacity");
	}
}
for (let a of otask) {
	a.onload = function() {
		scrollFadeIn(this, this.height + 50, "opacity");
	}
}
for (let a of oelse) {
	a.onload = function() {
		scrollFadeIn(this, this.height + 400, "opacity");
	}
}
for (let a of oprogress) {
	scrollFadeIn(a, a.clientHeight + 100, "transform");
}

setTimeout(() => {
	$pyp("#page-one").classList.add("none");
	$pyp("#page-two").classList.remove("none");
}, 2500);


function closeAllMuisc() {
	for (let a of omusic) {
		a.pause();
	}
}


//元素随滚动条渐变
function scrollFadeIn(obj, height, str) {
	owrap.addEventListener("scroll", (e) => {
		//获取浏览器可视区域高度
		let clientH = window.innerHeight;
		//距离浏览器可视区域顶部的高度
		let oTop = obj.getBoundingClientRect().top;
		if (oTop <= clientH) {
			if (str == "opacity") {
				let x = (clientH - oTop) * 1 / height;
				obj.style.opacity = x;
			} else if (str == "transform") {
				let x = (clientH - oTop) * 3.5 / height;
				obj.style.transform = `translateY(${10-x}%)`;
			}

		}
	})
}


function $pyp(sel){
	if( document.querySelectorAll(sel).length==1 ){
		return document.querySelectorAll(sel)[0];
	}else{
		return document.querySelectorAll(sel);
	}
}
