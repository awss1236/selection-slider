
function update(v,m){
	let title=document.getElementById("title");
	title.innerHTML="this is the slider: "+v+" / "+m

	let img1=document.getElementById("img1"),
		img2=document.getElementById("img2"),
		img3=document.getElementById("img3")

	if(v<m/3){
		img1.style.opacity = '1.0';
		img2.style.opacity = '0.2';
		img3.style.opacity = '0.2';
	}else if(v>m/3 && v<2*m/3){
		img1.style.opacity = '0.2';
		img2.style.opacity = '1.0';
		img3.style.opacity = '0.2';
	}else if(v>2*m/3){
		img1.style.opacity = '0.2';
		img2.style.opacity = '0.2';
		img3.style.opacity = '1.0';
	}

}