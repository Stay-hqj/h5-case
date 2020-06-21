let touchEvent = {
	
	touchE:( target,isPd,callback )=>{
		
		target.addEventListener( "touchstart",touchType );
		target.addEventListener( "touchmove",touchType );
		target.addEventListener( "touchend",touchType );
		
		let startX=0,startY=0;
		
		function touchType(e){
			
			switch (e.type){
				case "touchstart":
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
					break;
				case "touchend":
					let spanX = e.changedTouches[0].pageX - startX;
					let spanY = e.changedTouches[0].pageY - startY;
					if( Math.abs( spanY )-Math.abs( spanX )>0 ){
						if( spanY>30 ){
							callback();
						}
					}
					break;
				case "touchmove":
					if( isPd )e.preventDefault();
					break;	
			}
			
		}
		
	}
	
}
