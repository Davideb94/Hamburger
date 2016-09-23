window.onload = function(){
	var button = document.getElementById("container");
	var animated = false;
	
	function animate(){
		if(animated == false){
			button.className = "animate";
			animated = true;
		}
		else{
			animated = false;
			button.className = "";
		}
	}
	
	button.addEventListener("click", animate);
}