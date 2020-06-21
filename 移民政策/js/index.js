<<<<<<< HEAD
let ohands = document.getElementsByClassName("hand");
let odetailes = document.querySelectorAll("#detail>img");
let index = 0;

function openDetail(self) {
	let oindex = +self.dataset.index;
	index = oindex;
	if (oindex == 1) {
		addClass(document.getElementById("leftBlock"), "op");
	} else if (oindex == 2) {
		addClass(document.getElementById("rightBlock"), "op");
	} else if (oindex == 3) {
		addClass(document.getElementById("leftBlock"), "op");
		addClass(document.getElementById("rightBlock"), "op");
	}
	addClass(odetailes[oindex], "active");
}

function addClass(obj, str) {
	let classAttr = obj.getAttribute("class");
	if (classAttr != null && classAttr.indexOf(str) == -1) { //表示没有找到
		obj.className = `${classAttr} ${str}`;
	} else if (classAttr == null) {
		obj.className = str;
	} else {
		return;
	}
}

function closeWindow(obj) {
	if (index == 1) {
		document.getElementById("leftBlock").removeAttribute("class");
	} else if (index == 2) {
		document.getElementById("rightBlock").removeAttribute("class");
	} else if (index == 3) {
		document.getElementById("rightBlock").removeAttribute("class");
		document.getElementById("leftBlock").removeAttribute("class");
	}
	let classStr = obj.getAttribute("class");
	let reg = /active/;
	obj.className = classStr.replace(reg, "");
=======
let ohands = document.getElementsByClassName("hand");
let odetailes = document.querySelectorAll("#detail>img");
let index = 0;

function openDetail(self) {
	let oindex = +self.dataset.index;
	index = oindex;
	if (oindex == 1) {
		addClass(document.getElementById("leftBlock"), "op");
	} else if (oindex == 2) {
		addClass(document.getElementById("rightBlock"), "op");
	} else if (oindex == 3) {
		addClass(document.getElementById("leftBlock"), "op");
		addClass(document.getElementById("rightBlock"), "op");
	}
	addClass(odetailes[oindex], "active");
}

function addClass(obj, str) {
	let classAttr = obj.getAttribute("class");
	if (classAttr != null && classAttr.indexOf(str) == -1) { //表示没有找到
		obj.className = `${classAttr} ${str}`;
	} else if (classAttr == null) {
		obj.className = str;
	} else {
		return;
	}
}

function closeWindow(obj) {
	if (index == 1) {
		document.getElementById("leftBlock").removeAttribute("class");
	} else if (index == 2) {
		document.getElementById("rightBlock").removeAttribute("class");
	} else if (index == 3) {
		document.getElementById("rightBlock").removeAttribute("class");
		document.getElementById("leftBlock").removeAttribute("class");
	}
	let classStr = obj.getAttribute("class");
	let reg = /active/;
	obj.className = classStr.replace(reg, "");
>>>>>>> 27e69e571489a82df6893b7181c1785ed566bacd
}
