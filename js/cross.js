window.onload = function(){
	var button = document.getElementById("container");
	var animated = false;
	
	function animate(){
		if(animated == false){
			button.className = "animate";
			animated = true;
		}
		else{
			button.className = "";
			animated = false;
		}
	}

	button.addEventListener("click", animate);
}