let touchEvent = {

	touchHandle: function( target,isPD,Upcallback,Downcallback ) {

		target.addEventListener("touchstart", touchType);
		target.addEventListener("touchmove", touchType);
		target.addEventListener("touchend", touchType);

		let startX = 0;
		let startY = 0;

		function touchType(e) {
			
			switch (e.type) {
				case "touchstart":
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
					break;
				case "touchend":
					let spanX = e.changedTouches[0].pageX - startX;
					let spanY = e.changedTouches[0].pageY - startY;
					if( Math.abs(spanY)>Math.abs(spanX) ){
						if( spanY>30 ){  //向下滑动
							Downcallback();
						}
						if( spanY<-30 ){  //向上滑动
							Upcallback();
						}
					}
					break;
				case "touchmove":
					if (isPD)e.preventDefault();
					break;
			}
		}
	}
}
