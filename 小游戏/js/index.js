	let hot = document.getElementById("hotarea");
	setTimeout(function(){
		hot.removeAttribute("style");			//热区显示
	},8000);
	hot.addEventListener("touchstart",function(){
		document.getElementsByClassName("p1")[0].style.display = "none";
		document.getElementById("wrap").removeAttribute("style");
	});
	
	let otips = document.getElementById("prompt");
	otips.addEventListener("touchstart",function(){
		this.style.display = "none";
	});
	
	let musicClick = document.getElementById("click");
	let bgm = document.getElementById("bgm");
	let dengSwit = true;
	//灯光专区
	let odeng = document.getElementById("switchbg");	//灯按钮
	toggleDisplay( odeng,document.querySelector("#bgWhite"),document.querySelector("#bgBlack") );	
	
	//热区部分 		开obj,关obj
	function toggleDisplay( obj,OpenObj,CloseObj ){
		obj.addEventListener("touchstart",function(){
			if( dengSwit ){
				OpenObj.style.display = "none";
				CloseObj.style.display = "block";
				dengSwit = !dengSwit;
			}else{
				CloseObj.style.display = "none";
				OpenObj.style.display = "block";
				dengSwit = !dengSwit;
			}
		});
	}
	
	//	背景
	let unWork = document.querySelector(".unwork");
	unWork.addEventListener("touchstart",function(){
		this.style.display = "none";
	});
	
	
	//收音机
	let oradio = document.getElementById("shouyinji");
	oradio.addEventListener("touchstart",function(){
		let Op = document.querySelectorAll("#unw>p");
		Op[0].innerHTML = "收音机信号好像不太好";
		Op[1].innerHTML = "播放起了天气预报";
		unWork.style.display = "block";
		bgm.play();
		this.dataset.state = !eval(this.dataset.state);
	});
	let omap = document.getElementById("map");
	omap.addEventListener("touchstart",function(){
		let Op = document.querySelectorAll("#unw>p");
		Op[0].innerHTML = "曾梦想仗剑走天涯";
		Op[1].innerHTML = "看一看世界的繁华";
		unWork.style.display = "block";
	});
	
	
	//书包热区
	let bagBg = document.querySelectorAll(".bag")[1];
	Unuse( bagBg,"书包里塞满了不少课本","不过看起来都很新" );
	
	//右柜子
	let rightlocker = document.querySelectorAll(".rightlocker")[1];
	Unuse( rightlocker,"抽屉里面放着不少游戏杂志","《电攻》《电软》现在都停刊了" );
	
	//左柜子
	let leftlocker = document.querySelectorAll(".leftlocker")[1];
	Unuse( leftlocker,"抽屉里面放着乒乓球拍","已经开胶了，感觉有些历史了" );
	
	//灯光
	let deng = document.querySelectorAll(".deng")[1];
	let dengIndex = true;
	deng.addEventListener("touchstart",function(){
		let oimgs = document.getElementsByClassName("deng")[0].getElementsByTagName("img");
		if( !dengIndex ){
			oimgs[0].style.display = "none";
			oimgs[1].style.display = "block";
		}else{
			oimgs[1].style.display = "none";
			oimgs[0].style.display = "block";			
		}
		dengIndex = !dengIndex;
	});
	
	
	//枕头
	let zhent = document.querySelectorAll(".zhent")[1];
	Unuse( zhent,"枕头下面藏着一本游戏杂志","Gamer杂志,好像在哪见过？" );
	
	
	
	//衣柜
	let ward = document.querySelector("#wardbg");
	let wardIndex = false;
	
	ward.addEventListener( "touchstart",function(){
		let oimg = document.querySelector( "#wardbg+img" );
		let Op = document.querySelectorAll("#unw>p");
		if( !wardIndex ){
			oimg.style.display = "block";
			Op[0].innerHTML = '衣柜里有一件"10"号球衣';
			Op[1].innerHTML = '有种青春的味道';
			unWork.style.display = "block";
		}else{
			oimg.style.display = "none";
		}
		wardIndex = !wardIndex;
		
	} );
	
	
	/*
	 * 刚开始  所有无用的原件都是关闭状态
	 * 点击热区后，展示开启状态的图片（第二张），关闭状态的图片隐藏（第一张）
	 * 为弹窗面板添加点击监听，点击关闭弹窗，但是不切换原件的状态
	 	点击热区		传字符串，切换图片
	 	
	 **/
	function Unuse( obj,str01,str02 ){
		//弹窗背景
		let oimgs = document.getElementsByClassName(obj.className)[0].getElementsByTagName("img");
		obj.addEventListener("touchstart",function(){
			if( eval(this.dataset.state) ){
				oimgs[1].style.display = "none";
				oimgs[0].style.display = "block";
				this.dataset.state = !eval(this.dataset.state);
				return;
			}
			let Op = document.querySelectorAll("#unw>p");
			oimgs[0].style.display = "none";
			oimgs[1].style.display = "block";
			Op[0].innerHTML = str01;
			Op[1].innerHTML = str02;
			unWork.style.display = "block";
			this.dataset.state = !eval(this.dataset.state);
		});
	}
	


	/*
	 	点击有用的元素后，notice面板显示，然后相对应的内容显示
	 * */
	
	let lastPanel = document.getElementById("lastPanel");
	let cluesNum = document.querySelector("#clues>span");
	
	//游戏机热区
	let gameBg = document.querySelector("#gamebg");
	
	/*gameBg.addEventListener("touchstart",function(){
		NoticeShow();
		let gamePt = document.getElementById("gamept1");
		if( eval(gamePt.dataset.state) ){
			gotClues( "game" );
			return;
		}
		gamePt.removeAttribute("style");
		//获取加速度信息
		  //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
		  //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
		  let shake_max = 4000;
		  let lastTime = 0;
		  let x,y,z,lastX=0,lastY=0,lastZ=0;
		if( window.DeviceOrientationEvent ){
			//摇一摇
			window.addEventListener("devicemotion",function(e){
				let acceleration = e.accelerationIncludingGravity;
				let now = new Date().getTime();
				if( (now-lastTime)>10 ){
					let time01 = now - lastTime;
					lastTime = time01;
					x = acceleration.x;
					y = acceleration.y;
					z = acceleration.z;
					let speed = Math.abs( x+y+z-lastX-lastY-lastZ )/time01 * 10000;
					if( speed>shake_max ){
						//do someThing
//						let oimg = document.getElementById("pt").getElementsByTagName("img")[0];
//						oimg.className = "shake";
//						setTimeout(function(){
//							let obtn = document.getElementById("pt").getElementsByTagName("button")[0];
//							obtn.removeAttribute("style");
//							obtn.addEventListener("touchstart",function(){
//								cluesNum.innerHTML = eval(cluesNum.innerHTML)+1;
//								lastPanel.removeAttribute("style");			//最后一个面板
//								gamePt.dataset.state = "true";
//							});
//						},1000);
						alert( 111 );
					}
					lastX = x;
					lastY = y;
					lastZ = z;
				}
			},false);
		}
	});*/
	
	
	//光驱
	let guangqu = document.querySelector("#gqbg");
	guangqu.addEventListener("touchstart",function(){
		let result = document.getElementById("computer").dataset.state;
		if( eval(result) ){
			gotClues( "guangqu" );
			return;
		}
		usePart(this,"guangqu");
	});

	//手机
	let phone = document.querySelector("#phonebg");
	phone.addEventListener("touchstart",function(){
		let result = document.getElementById("phone").dataset.state;
		if( eval(result) ){
			gotClues( "phone" );
			return;
		}
		usePart(this,"phone");
	});
		
	//卡带
	let kadai = document.getElementById("kadaibg");
	kadai.addEventListener("touchstart",function(){
		let result = document.getElementById("kadai").dataset.state;
		if( eval(result) ){
			gotClues( "kadai" );
			return;
		}
		usePart(this,"kadai");
	});
	
	lastPanel.addEventListener("touchstart",function(){
		this.style.display = "none";
		document.getElementById("computer").style.display = "none";
		NoticeClose();
	});

	/*
	点击热区后，游戏机摇一摇，按钮显示，跳到最后一个画面
			  光驱点击按钮，点击按钮，跳到最后
			 手机点击按钮，点击按钮，跳到最后
			 卡带点击按钮，点击按钮，跳到最后
	 * */
	
	function usePart(obj,type){
		NoticeShow();
		switch (type){
			case "game":
				showThree("game");
				break;
			case "kadai":
				showThree("kadai");
				break;
			case "phone":
				showThree("phone");
				break;
			case "guangqu":
				document.getElementById("computer").removeAttribute("style");
				showThree("computer");
				break;
		}
		
		//卡带，手机，光驱
		function showThree( type ){
			let typeDom = document.getElementById(type);
			let one = document.getElementById(type).getElementsByClassName("fir")[0];
			let two = document.getElementById(type).getElementsByClassName("sec")[0];
			
			one.removeAttribute("style");
			//面板01里面的按钮
			let btn01 = one.getElementsByClassName("btn01")[0];
			btn01.addEventListener("touchstart",function(){
				
				one.style.display = "none";
				two.removeAttribute("style");
				let btn02 = two.getElementsByClassName("btn02")[0];
				btn02.addEventListener("touchstart",function(){
					two.style.display = "none";
					typeDom.dataset.state = "true";
					lastPanel.getElementsByTagName("img")[0].removeAttribute("class");
					lastPanel.removeAttribute("style");			//最后一个面板
					musicClick.play();
					cluesNum.innerHTML = eval(cluesNum.innerHTML)+1;
				});
				
			})
		}
		
	}

	function windowNot( num,str01,str02,str03 ){
		lastPanel.getElementsByTagName("img")[0].setAttribute("src",`img/0${num}.png`);
		lastPanel.getElementsByTagName("h2")[0].innerHTML = str01;
		lastPanel.getElementsByTagName("p")[0].innerHTML = str02;
		lastPanel.getElementsByTagName("p")[1].innerHTML = str03;
	}

	function NoticeShow(){
		let oNotice = document.getElementById("notice");
		oNotice.style.display = "block";
	}
	function NoticeClose(){
		let oNotice = document.getElementById("notice");
		oNotice.style.display = "none";
		if( cluesNum.innerHTML==0 ){
			windowNot( eval(cluesNum.innerHTML)+1,"获得第一块“记忆碎片”","上面好像有奇怪的图案","好像只是其中一部分" );
		}else if( cluesNum.innerHTML==1 ){
			windowNot( eval(cluesNum.innerHTML)+1,"获得第二块“记忆碎片”","两块碎片叠在一起了！","图案还是看不太清" );
		}else if( cluesNum.innerHTML==2 ){
			windowNot( eval(cluesNum.innerHTML)+1,"获得第三块“记忆碎片”","把图案叠在一起","看来是些数字" );
		}
		else if( cluesNum.innerHTML==3 ){
			windowNot( eval(cluesNum.innerHTML)+1,"获得最后一块“记忆碎片”!","终于完成了！“0325”！","快去开门解锁吧！" );
		}	
	}
	function gotClues( type ){
		NoticeShow();
		document.getElementById("got").removeAttribute("style");
		document.getElementById("got").dataset.state = "true";
		switch (type){
			case "phone":
				document.getElementById("phonept2").removeAttribute("style");
				document.querySelector("#wrap2 .btn02").style.display = "none";
				break;
			case "game":
				document.getElementById("gamept1").removeAttribute("style");
				document.querySelector("#pt>p").style.display = "none";
				break;
			case "guangqu":
				document.querySelector("#computer").removeAttribute("style");
				document.querySelector("#computer>.two").removeAttribute("style");
				document.querySelector("#computer .btn02").style.display = "none";
				break;
			case "kadai":
				document.getElementById("kdpt2").removeAttribute("style");
				document.querySelector("#wrap4 .btn02").style.display = "none";
				break;
		}
		
	}
	let notice = document.getElementById("notice");
	notice.addEventListener("touchstart",function(){
		let s = document.getElementById("got").dataset.state;
		if( eval(s) ){
			document.getElementById("got").style.display = "none";
			document.getElementById("got").dataset.state = !eval(s);
			
			document.getElementById("phonept2").style.display = "none";
			document.querySelector("#wrap2 .btn02").style.display = "inline-block";
			
			document.getElementById("gamept1").style.display = "none";
			document.querySelector("#pt>p").style.display = "block";
			
			document.querySelector("#computer").style.display = "none";
			document.querySelector("#computer>.two").style.display = "none";
			document.querySelector("#computer .btn02").style.display = "inline-block";
			
			document.getElementById("kdpt2").style.display = "none";
			document.querySelector("#wrap4 .btn02").style.display = "inline-block";
			
			NoticeClose();
		}
		
	})