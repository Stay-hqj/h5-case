window.onload = function(){
	
	var oloading = document.getElementById("loading").getElementsByTagName("span")[0];
	var oP = document.getElementById("baifenbi");
	var timer01,timer02;
	//获取页数
	var ofirst = document.getElementById("first"); 
	var osecond = document.getElementById("second");
	var othird = document.getElementById("third");
	var ofourth = document.getElementById("four");
	var ofifth = document.getElementById("fifth");
	var omusic = document.getElementById("else").getElementsByTagName("img")[0];//音乐按钮
	var musicSwitch = true;
	//音乐按钮
	omusic.addEventListener("touchstart",function(){
		var obgm = document.getElementById("bgm");
		if( musicSwitch ){
			this.setAttribute("src","img/else/bgm_off.png");
			this.className = "";
			musicSwitch = false;
			obgm.pause();
		}else{
			this.setAttribute("src","img/else/bgm_on.png");
			this.className = "rorole";
			musicSwitch = true;
			obgm.play();
		}
		
	});
	
//--------------------------------------第1页开始-----------------------------------------------------------
	+(function(){
		var pro = 0;
		//设置进度百分比
		timer01 = setInterval(function(){
			pro += Math.ceil( Math.random()*10 );
			oP.innerHTML = pro + "%";
			if( pro>100 ){
				pro = 0;
				oP.innerHTML = 100 + "%";
				oP.style.color = "red";
				clearInterval( timer01 );
				clearInterval( timer02 );
				//检测到等于100%
				if( oP.innerHTML=="100%" ){
					secondPage();
				}
			}
		},150);
		
		
		//设置...
		timer02 = setInterval(function(){
			oloading.innerHTML += ".";
			if( oloading.innerHTML.length>3 ){
				oloading.innerHTML = ".";
			}
		},800);
		
		
	})();
//--------------------------------------第1页结束-----------------------------------------------------------
	
//--------------------------------------第2页开始-----------------------------------------------------------
	function secondPage(){
			//一秒后跳转到第二个页面
			setTimeout(function(){
				ofirst.style.display = "none";
				osecond.style.display = "block";   //显示第二页
				osecond.className = "fadedIn";
				+(function(){	//文字逐行显示
					var oPs = document.getElementById("content").getElementsByTagName("p");
					var index = 0;
					var timer = setInterval(function(){
						oPs[index].className = "fadedIn";
						index++;
						if( index>=oPs.length ){
							clearInterval(timer);
							setTimeout(function(){ //设置箭头出现
								var oarrow = document.getElementById("ar");
								oarrow.style.display = "block";
							},1000);
						}
					},1000);
				})();
			},500);
			
			touchEvent.touch( osecond,true,function(){ //上滑的回调函数
					third();
			});
	};
//--------------------------------------第2页结束-----------------------------------------------------------
	
//--------------------------------------第3页开始-----------------------------------------------------------
	function third(){
		+(function(){
			/*
			 	1.当前页面隐藏
			 	2.显示第三页
			 */
			osecond.style.display = "none";  	//隐藏
			othird.style.display = "block";
			var odaren = document.getElementById("daren");
			var oxiaohai = document.getElementById("xiaohai");
			odaren.className = "toright";	//大人
			delayShow( document.getElementById("sh"),"fadedIn",1000 );
			delayShow( oxiaohai,"toleft",2000 );	//小孩
			delayShow( document.getElementById("xh"),"fadedIn",3000 );
			setTimeout(function(){	//设置箭头出现
				document.getElementById("arr").style.display = "block";
			},3500);
		})();
		
		touchEvent.touch( othird,true,function(){
			four();
		} );
	}
//--------------------------------------第3页结束-----------------------------------------------------------
	
//--------------------------------------第4页开始-----------------------------------------------------------
	function four(){
		
		+(function(){
			/*
			 1.当页隐藏
			 2.显示第四页
			 * */
			othird.style.display = "none";
			ofourth.style.display = "block";
			ofourth.className = "fadedIn";	//淡进
			var oyumi = document.getElementById("yumi");
			oyumi.className = "toleft";
			delayShow( document.getElementById("c"),"totop",1000 );
			delayShow( document.getElementById("bean"),"toright",2000 );
			delayShow( document.getElementById("four").getElementsByTagName("article")[0],"fadedIn",3000 );
			delayShow( document.getElementById("four").getElementsByTagName("footer")[0],"fadedIn",4000 );
			delayShow( document.getElementById("btn"),"fadedIn",4000 );
		})();
		
		var oSel = document.getElementById("sel");			//职业选择的输入框
		var oDivUl = document.getElementById("wrap").getElementsByTagName("div")[0];	//职业选择列表
		var oImg = document.getElementById("wrap").getElementsByTagName("img")[0];		//箭头
		var oName = document.getElementById("name");		//姓名
		var oNotice = document.getElementById("notice");	//弹窗警告
		var obtn = document.getElementById("btn");     //赶快算算按钮
		var flag = false;
		
		oSel.addEventListener("touchstart",function(){
			//默认是关闭状态，既flag = false
			if( !flag ){
				open();	
				flag = !flag;
			}else{
				close();
				flag = !flag;
			}
		},false);
		
		obtn.addEventListener("touchstart",function(){
			//身份类型
			var ospan = oSel.getElementsByTagName("span")[0];
			if( oName.value.length==0 ){  //输入姓名为空
				In( oNotice,"请输入名字" );
				return;
			}else if( oName.value.length==1||oName.value.length>4 ){
				In( oNotice,"昵称长度范围为2-4字符" );
				return;
			}
			switch ( ospan.innerHTML ){
				case "选择职业":
					In( oNotice,"请选择职业" );
					return;
					break;
				case "学生":
					fifth( "学生" );
					break;
				case "上班族":
					fifth( "上班族" );
					break;	
			}
		},false);
		
		//单击弹窗警告后隐藏
		oNotice.addEventListener("touchstart",function(e){
			this.style.display = "none";
		},false);
		
		
		function In( obj,str ){
			var oP = document.getElementById("notice").getElementsByTagName("span")[0];	//弹窗警告里面的文字标签
			obj.style.display = "flex";
			oP.innerHTML = str;
			console.log(obj)
		}
		function open(){
			oDivUl.style.display = "block";
			oImg.style.transform = "rotate(180deg)";
		}
		function close(){
			oDivUl.style.display = "none";
			oImg.style.transform = "";
		}
		
		
		+(function(){
			var oSli = document.getElementById("sul").getElementsByTagName("li");
			for( var i=0;i<oSli.length;i++ ){
				oSli[i].addEventListener("touchstart",function(){
					var oSpan = oSel.getElementsByTagName("span")[0];
					oSpan.innerHTML = this.innerHTML;
					close();
				},false);
			}
		})();
		
	}
//--------------------------------------第4页结束-----------------------------------------------------------
	
//--------------------------------------第五页开始-----------------------------------------------------------
	function fifth( type ){
		var oback = document.getElementById("back");
		+(function(){
			if( type=="学生" ){
				setLingshi( "软糖","雪糕","辣条" );//写零食
			}else if( type=="上班族" ){
				setLingshi( "素食","米粉","煎饼" );//写零食
			}
			//关闭第四页，展示第五页
			ofourth.style.display = "none";
			ofifth.style.display = "block";
			ofifth.className = "fadedIn";
			//返回按钮
			oback.style.display = "block";
		})();
		
		var oanjian = document.getElementsByClassName("n"); 	//获取所有白色的按键
		var oban = document.getElementById("write").getElementsByTagName("p");	//显示面版的所有p标签
		var oall = document.getElementById("all");   //获取键盘
		var oadd = document.getElementById("eig");   //+号
		var oAc = document.getElementById("Ac");	//Ac按钮
		var odengyu = document.getElementById("dengyu");//等于按钮
		var oyou = document.getElementsByClassName("you")[0];//健康报告中的健康结果
		var ofooter = document.getElementById("footer");
		var oclick = document.getElementById("click");
		var flag = 0;	//代表显示面板的状态  	0:初始状态		1:输入状态
		var active = 0;
		
		//返回按钮
		oback.addEventListener("touchstart",function(){
			reCovoery();
			ofifth.style.display = "none";
			ofourth.style.display = "block";
			ofourth.className = "fadedIn";
		})
		//健康报告中的健康结果
		ofooter.addEventListener("touchstart",function(){
			this.className = "fadeOut";
			setTimeout(function(){
				ofooter.style.display = "none";
			},900);
		});
		
		//等于按钮
		odengyu.addEventListener("touchstart",function(){
			oclick.play();
			if( flag==0 ){
				return;
			}
			if( this.innerHTML=="我的健康报告" ){
				ofooter.style.display = "flex"; //结果展示
				ofooter.className = "fadedIn";
				document.getElementById("oname").innerHTML = document.getElementById("name").value;//名字
				document.getElementById("fitResult").innerHTML = oban[1].innerHTML;	//健康结果
				oyou.innerHTML = oban[1].innerHTML;
			}
			this.innerHTML = "我的健康报告";
			oadd.className = "yellow";
			active = 100;
			this.style.cssText = "line-height: 20px;padding-top: 0.6rem;height: 1.4rem;";
			+(function(){
				var score = eval( oban[0].innerHTML );
				if( oban[0].innerHTML==score ){
					oban[0].innerHTML = score;
				}else{
					oban[0].innerHTML += "="+score; 
				}
				oadd.className = "yellow";
				if( score<=150 ){
					setResult( "差","gray","您的饮食习惯欠佳,","请多吃五谷杂粮,","少吃零食快餐才行哟!","" );
				}else if( score>150&&score<250 ){
					setResult( "良","#4caf50","您的饮食习惯正常,","还需多吃健康食品,","才能有足够精力工&nbsp","作学习哟！" );
				}else if( score>=250 ){
					setResult( "优","#f86060","您的饮食习惯很好,","加上适当的运动,","身体会更棒,","希望您继续保持哟!" );
				}
			})();
		});
		
		//Ac按钮
		oAc.addEventListener("touchstart",function(){
			oclick.play();
			if( flag==0 ){
				return;
			}else{
				oban[0].innerHTML = 0;
				oban[1].innerHTML = "";
				odengyu.innerHTML = "=";
				flag=0;				
				toWhite();
				oadd.className = "yellow";
				active = 0;
				odengyu.style.cssText = "";
			}
		});
		
		//+号
		oadd.addEventListener("touchstart",function(){
			oclick.play();
			if( this.flag )return;
			if( active>=3 )return;
			//检测有无放大效果
			var reg = eval( "/toBig/" );
			if( reg.test( this.className ) ){ //如果有
				this.className = "yellow";
			}
			if( flag==0 ){	//如果是未选择状态，即初始状态
				return;
			}else{
				oban[0].innerHTML += "+";
			}
			this.flag = true;
		});
		
		
		+(function(){
			for( var i=0;i<oanjian.length;i++ ){
				//白色按键点击事件
				oanjian[i].addEventListener("touchstart",function(){
					oclick.play();
					if( this.style.background=="gray" )return;
					
					if( eval("/toBig/").test(oadd.className) )return;	//点击一个按键后，只能点+或者ac
					
					if( active>=3 )return;  //限制只能点击3个选项
					active++;
					
					this.style.background = "gray";
					clear();
					if( /wugu/.test( this.className ) ){  //检测到是五谷
						oban[0].innerHTML += 100;
						if( active>=3 )return;						
						addclass( oadd," toBig" );
					}else if( /lingshi/.test( this.className ) ){ //检测到是零食
						oban[0].innerHTML += 50;
						if( active>=3 )return;
						addclass( oadd," toBig" );
					}
					oadd.flag = false;
				});
				
			}
		})();
		
		function setLingshi( t1,t2,t3 ){
			var one = document.getElementById("nigth");
			var two = document.getElementById("ten");
			var three = document.getElementById("once");
			one.innerHTML = t1;
			two.innerHTML = t2;
			three.innerHTML = t3;
		}
		
		function setResult( str,color,t1,t2,t3,t4 ){
			+(function(){ 	//健康评价
				oban[1].innerHTML = str;	//显示屏幕
				document.getElementById("fitResult").innerHTML = str;	//上面
				oyou.innerHTML = str;	//下面
				oyou.style.color = color;
			})();
			//结果文案
			var ospans = document.getElementsByClassName("te")[0].getElementsByTagName("span");
			if( str=="良" ){
				ospans[3].style.textAlign = "left";
			}
			ospans[0].innerHTML = t1;
			ospans[1].innerHTML = t2;
			ospans[2].innerHTML = t3;
			ospans[3].innerHTML = t4;
		}
		
		function reCovoery(){
			//所有白色按键变回白色
			for( var i=0;i<oanjian.length;i++ ){
				oanjian[i].removeAttribute("style");
			}
			active = 0; //计数器
			oban[0].innerHTML = "请点击按键";
			oban[1].innerHTML = "开始计算";
			oadd.className = "yellow";	//清除+号按钮的状态
			odengyu.innerHTML = "=";
			odengyu.removeAttribute("style");
			oback.style.display = "none";
			flag = 0;
		}
		
		function toWhite(){
			for( var i=0;i<oanjian.length;i++ ){
				oanjian[i].style.background = "white";
			}
		}
		
		function addclass( obj,Name ){
			if( eval( "/"+Name+"/" ).test( obj.className ) ){  //如果已经存在
				return;
			}else{
				obj.className += Name;
			}
		}
		//清除面板
		function clear(){
			if( flag==0 ){	//处于初始状态
				for( var i=0;i<oban.length;i++ ){
					oban[i].innerHTML = "";
				}
			}
			flag = 1;
		}
		
	}
//--------------------------------------第五页结束-----------------------------------------------------------	

function delayShow( target,className,delay ){	//目标,类名,延迟时间
	setTimeout(function(){
		target.className += " "+className;
	},delay);
}
	
//封装一个touch对象
var touchEvent = {
	
	touch:function( target,isPreventDefault,callback ){
		
		target.addEventListener("touchstart",touchType);
		target.addEventListener("touchmove",touchType);
		target.addEventListener("touchend",touchType);
		var startX = null;
		var startY = null;
		function touchType(e){
			
			switch( e.type ){
				case "touchstart":
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
					break;
				case "touchend":
					var spanX = e.changedTouches[0].pageX - startX;
					var spanY = e.changedTouches[0].pageY - startY;
					//竖直方向变化的值大于水平方向的值代表垂直滚动
					if( (Math.abs( spanY ))>(Math.abs( spanX )) ){ //垂直滑动
						/*if( spanY>30 ){ 	//向下
							
						}*/
						if( spanY<-30 ){	//向上
							if( callback )callback();
						}
					}
					break;
					case "touchmove":
						if( isPreventDefault )e.preventDefault();
						break;
			}
			
		}
	}
	
}
	
}




