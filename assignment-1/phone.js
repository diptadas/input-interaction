$(document).ready(function () {
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
});

$("#tab1-btn").click(function () {
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
});

$("#tab2-btn").click(function () {
	$("#tab1").hide();
	$("#tab2").show();
	$("#tab3").hide();
});

$("#tab3-btn").click(function () {
	$("#tab1").hide();
	$("#tab2").hide();
	$("#tab3").show();
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
