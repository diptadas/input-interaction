$(document).ready(function () {
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
});

$("#tab1-btn").click(function () {
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
});

$("#tab2-btn").click(function () {
	$("#tab1").hide();
	$("#tab2").show();
	$("#tab3").hide();
	$("#tab4").hide();
});

$("#tab3-btn").click(function () {
	$("#tab1").hide();
	$("#tab2").hide();
	$("#tab3").show();
	$("#tab4").hide();
});

$("#tab4-btn").click(function () {
	$("#tab1").hide();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").show();
});

$('.digit').click(
	function () {
		$('#dial-value').val($('#dial-value').val() + $(this).text());
	}
);

$('.clear-digit').click(
	function () {
		var value = $('#dial-value').val();
		$('#dial-value').val(value.substring(0, value.length - 1));
	}
);

$('.add-contact').click(
	function () {
		var name = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var alertText = "Name: " + name + ", Email: " + email + ", Phone: " + phone;
		alert(alertText);
	}
);

$('.clear-contact').click(
	function () {
		$('#name').val('');
		$('#email').val('');
		$('#phone').val('');
	}
);

function searchContact() {
	var input = document.getElementById("contact-search");
	var filter = input.value.toUpperCase();
	var li = document.getElementById("contact-list").getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		var a = li[i].getElementsByTagName("a")[0];
		var txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

$('.gesture-pad').mousedown(
	function (e) {
		$("#gesture-output").val("Mouse Down");
		downX = e.pageX;
		downY = e.pageY;
	}
);

// While swiping left or, right, mouse might slightly move vertically.
// Similarly, while swiping up or, down, mouse might slightly move horizontally.
// To address this, we compared the horizontal and vertical distances.
// If horizontal distance is greater than vertical distance then we identified it as left or, right swipe.
// Otherwise, we identified it as up or down swipe.

$('.gesture-pad').mouseup(
	function (e) {
		upX = e.pageX;
		upY = e.pageY;
		if ((upX == downX) && (upY == downY)) $("#gesture-output").val("Mouse Up");
		else if (Math.abs(upX - downX) > Math.abs(upY - downY)) {
			console.log("horizontal swipe");
			if (upX < downX) $("#gesture-output").val("Swipe Left");
			else $("#gesture-output").val("Swipe Right");
		}
		else {
			console.log("vertical swipe");
			if (upY < downY) { $("#gesture-output").val("Swipe Up"); }
			else $("#gesture-output").val("Swipe Down");
		}
	}
);

$('.gesture-pad').mouseleave(
	function () {
		$("#gesture-output").val("Ready");
	}
);
