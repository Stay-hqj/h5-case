window.onload = function(){
	let cur = 0;
	let pages = document.getElementsByClassName("page");
	
	setTimeout(()=>{
		toggle( pages[cur],pages[cur+1] );
		document.getElementById("else").style.display = "block";
		cur++;
	},2650);
	
	let flag = true;
	document.querySelector("#music>img").addEventListener("touchstart",function(){
		var bgm = document.getElementById("bgm");
		if( flag ){
			bgm.pause();
			this.setAttribute("src","img/else/close.png");
			flag = !flag;				
		}else{
			bgm.play();
			this.setAttribute("src","img/else/open.png");
			flag = !flag;
		}
	});
	touchEvent.touchHandle( document,true,function(){
		
		/*
		 控制向上滑动，如果cur为最后一页，禁用滑动
		第一页禁止滑动 cur++
		 * */
		
		if( cur<=0||cur>=pages.length-1 )return; 
		toggle( pages[cur],pages[++cur] );
		
		
		
	},function(){
		/*
		 控制向下滑动，如果cur为第二页，禁止滑动
		 第一页禁止滑动
		当前页面关闭,下一页面进入 cur--
		 * */
		if( cur<=1 )return;
		toggle( pages[cur],pages[--cur] );
		
		
		
	} );
	
	function toggle( target1,target2 ){
		if( cur>=pages.length-1 ){
			document.getElementById("narrow").style.display = "none";
		}else{
			document.getElementById("narrow").style.display = "block";
		}
		target1.style.display = "none";
		target2.style.display = "flex";
	}
}