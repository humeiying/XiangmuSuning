/*
* @Author: Administrator
* @Date:   2018-03-07 16:08:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-12 19:32:02
*/
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".paperbox li");
	let banner=document.querySelector(".banner");
	pagers.forEach(
		function(ele,index){
		ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
				this.classList.add("active");
				imgs[index].classList.add("active");
				n=index;
				}
			});

			let next=document.querySelector(".next");
			let prev=document.querySelector(".prev");
			next.onclick=function(){
				move();
			}
			prev.onclick=function(){
				n-=2;
				move();
			}



			
	 let t=setInterval(move,3000);
	 var n=0;
	 	function move(){
		n++;
	 	// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
				}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
}
//返回顶部
{
	let tanchu=document.querySelector(".cedao_right_xiaoxi1");
	let tanchu1=document.querySelector(".cedao_right_xiaoxi2 span");
	let tanchu2=document.querySelector(".cedao_right_xiaoxi3 span");
	let zuoce=document.querySelector(".totop");
	let zuoce1=document.querySelector(".totop span");
		tanchu.onmouseenter=function(){
			zuoce.style.width=74+"px";
			zuoce.style.background="#FFAA02";
			zuoce1.style.color="#383838";
			tanchu.style.background="#FFAA02";
			tanchu1.style.color="white";
			tanchu2.style.color="white";
		}
		tanchu.onmouseleave=function(){
			zuoce.style.width=0;
			zuoce.style.background="#383838";
			zuoce1.style.color="#FFAA02";
			tanchu.style.background="#272727";
			tanchu1.style.color="#917231";
			tanchu2.style.color="#917231";
		}
		tanchu.onclick=function(){
			let st=document.documentElement.scrollTop;
				let t=setInterval(function(){
					st=-200;
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					document.documentElement.scrollTop=0;
				},25)
			
		}
		zuoce.onclick=function(){

			let st=document.documentElement.scrollTop;
				let t=setInterval(function(){
					st=-200;
					if(st<0){
					 	st=0;
						clearInterval(t);
					}
					document.documentElement.scrollTop=0;
				},25)
			
		}

}
// 导航栏的显示
{	
	let daohang=document.querySelector(".tanchu");
	let leftBar=document.querySelector(".leftBar");
	let content=document.querySelectorAll(".content2");
	let tips=document.querySelectorAll(".leftBar_item");
	window.onscroll=function(){
	let st=document.documentElement.scrollTop;
		if(st>700){
			daohang.style.display="block";
		}
		else{
			daohang.style.display="none";
		}
		if(st>2500){
		leftBar.style.display="block";
		}
		else{
		leftBar.style.display="none";
		}
	}

		tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=content[index].offsetTop-40;
			// console.log(ot);
			// document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/11;
			let time=0;
			let t=setInterval(function(){
				time+=50;
				now+=speed;
				if(time===550){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	});
		window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		for(let i=0;i<content.length;i++){
			if(st>content[i].offsetTop-40){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	});
	// widows.addEventListener("scroll",function(){
	// 	let st=document.documentElement.scrollTop;
	// 	for(let i=0;i<content.length;i++){
	// 		if(st>content[i].offsetTop-40){
	// 			for(let i=0;i<tips.length;i++){
	// 				tips[i].classList.remove("active");
	// 			}
	// 			tips[i].classList.add("active");
	// 		}
	// 	}
	// })


}
//好货
{
		let prev=document.querySelector(".prev1");
		let next=document.querySelector(".next1");
		let inner=document.querySelector(".inner");
		let contents=document.querySelectorAll(".item");
		let pagers=document.querySelectorAll(".pager");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-400+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
			
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-400+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
	
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				inner.style.left=n*-400+"px";
			}
			
		})
		// let items=document.querySelectorAll(".item");
		// items.forEach(function(ele){
		// 	wheel(ele);
		// })

}
//生鲜
{
		let prev=document.querySelector(".prev2");
		let next=document.querySelector(".next2");
		let inner=document.querySelector(".shengxian_inner");
		let contents=document.querySelectorAll(".shengxian_nerrong_medium");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-400+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-400+"px";
		}
}
//必抢清单
{
	let yiru=document.querySelectorAll(".biqing_right_neirong1");
	let tanchu=document.querySelectorAll(".erweima_xianshi");
	let obj=tanchu[0];
		yiru.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				tanchu[index].style.display="block";
				obj=tanchu[index];
			}
			ele.onmouseleave=function(){
		 		tanchu[index].style.display="none";
		 	}
		})

		let prev=document.querySelector(".prev3");
		let next=document.querySelector(".next3");
		let inner=document.querySelector(".biqing_right_inner");
		let contents=document.querySelectorAll(".biqing_right_neirong");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.left=n*-560+"px";
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.left=n*-560+"px";
		}
}
//banner
{
		let labels=document.querySelectorAll(".banner_left_left1");
		let menus=document.querySelectorAll(".banner_content");
		let obj=menus[0];
		labels.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				menus[index].style.display="block";
				obj=menus[index];
			}
			ele.onmouseleave=function(){
				menus[index].style.display="none";
			}
		})
}