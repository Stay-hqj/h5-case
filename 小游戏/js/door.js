let zIndex = 10;
let otailWrap = document.getElementById("Tailwrap");	//尾部页面
let oWrap = document.querySelector("#wrap");			//测试页面
let obtn = document.getElementById("door");				//点解按钮
let ocancal = document.querySelector("#cancel>span");	//取消按钮
obtn.addEventListener("touchstart",()=>{
	let oindex = document.querySelector("#clues>span").innerHTML;
	console.log( oindex );
	if( eval(oindex)<4 ){
		document.querySelector("#lastPanel>img").className = "none";
		windowNot( eval(cluesNum.innerHTML),"门好像需要密码才能打开","房间里好像隐藏着什么东西","" );
		lastPanel.removeAttribute("style");			//最后一个面板
		NoticeShow();
		return;
	}
	oWrap.style.zIndex = 0;
	otailWrap.classList.add("LsideIn");
	setTimeout(()=>{
		oWrap.removeAttribute("class");
		oWrap.style.transform = "translateX(-100%)";
		oWrap.style.zIndex = zIndex;
	},600);
});


ocancal.addEventListener("touchstart",()=>{
	otailWrap.style.zIndex = 0;
	oWrap.classList.add("RsideIn");
	setTimeout(()=>{
		otailWrap.removeAttribute("class");
		otailWrap.style.transform = "translateX(100%)";
		otailWrap.style.zIndex = zIndex;
	},600);
});

//答案
let psw = "";
//获取上面的白点
let index = 0;
let swit = true;
let ocirCle = document.querySelectorAll("#circle>div");
//获取所有的数字按钮
let onumBtn = document.querySelectorAll("#Numbtn>div");
for( let btn of onumBtn ){
	btn.addEventListener("touchstart",function(){
		if( swit ){
			
			ocirCle[index++].style.background = "gray";		
			psw += this.innerHTML;
			if( index>=4 ){
				if( eval(psw)==0325 ){
					document.getElementById("password").style.display = "none";;
					document.getElementById("tail").style.display = "flex";
					tail();
				}else{
					let objCir = document.getElementById("circle");
					objCir.classList.add("false");
					index = 0;
					psw = "";
					swit = !swit;
					setTimeout(()=>{
						for( let cir of ocirCle ){
							cir.style.background = "transparent";
						}
						objCir.classList.remove("false");
						swit = !swit;
					},600);
				}
			}
			
		}
	
	});
}
function tail(){
	let oP = document.querySelectorAll("#tail>p");
	let oPoster = document.getElementById("poster");
	setTimeout(()=>{
		oP[0].classList.add("fadeIn");
		setTimeout(()=>{
			oP[1].classList.add("fadeIn");
			setTimeout(()=>{
				oP[2].classList.add("fadeIn");
				setTimeout(()=>{
					oPoster.style.display = "block";
					oPoster.classList.add("fadeIn");
				},1000);			
			},2000);
		},2000);
	},3100);
}