$(document).ready(function () {


	//add input bar task to to-do list
	$("#add-button").click(function () {
		var task = $("#to-do").val();
		console.log(task);
		$("#incomplete-list").append("<li class='task'><h1 class='title'><input type='checkbox' name='checkbox'>" + task + "</h1><a class='delete' href='#'><p>delete</p></a></li>");

	});


	//removes task from list when 'delete' is clicked
	$(document).on('click', 'a', function (e) {
		e.preventDefault();
		$(this).parent().remove();
	});





});