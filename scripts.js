$(document).ready(function(){

	console.log("Hello Epsilon!");


	var numclicks=0;

	//on button click, create div with buttons
	$("button").on("click", function(){
		console.log("saw button click");
		numclicks++;
		var appendData = "<div> Line " + numclicks +" <button id='cc'>'Change Color'</button><button id='rm'>'Remove'</button> </div>";
		$("#span1").append(appendData);
	});

	//on Change Color click change background color
	$(document).on("click","#cc", function(event){
		console.log("Change Color");
		$(this).parent().toggleClass("graycolor");
	});

	//on Remove click remove the clicked button's div
	$(document).on("click","#rm", function(event){
		console.log("Remove");
		$(this).parent().remove();
	});

});