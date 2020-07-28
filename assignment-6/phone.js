var currentTab = 1;
var lowVision = false;

$(document).ready(function () {
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
});

$("#low-vision-btn").click(function () {
	lowVision = !lowVision;
	if (lowVision) {
		document.getElementById("low-vision-btn").innerHTML = '<i class="fas fa-search-minus"></i> Default Mode';
		$('#css-link').attr('href', 'phone-large.css');
	} else {
		document.getElementById("low-vision-btn").innerHTML = '<i class="fas fa-search-plus"></i> Low Vision Mode';
		$('#css-link').attr('href', 'phone.css');
	}
});

$("#contrast-btn").click(function () {
	$('link').attr('href', 'phone-contrast.css');

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

$('.tab-nav').mousedown(
	function (e) {
		tabDownX = e.pageX;
	}
);

$('.tab-nav').mouseup(
	function (e) {
		tabUpX = e.pageX;

		if (tabUpX < tabDownX && currentTab > 1) currentTab--;
		else if (tabUpX > tabDownX && currentTab < 4) currentTab++;

		if (currentTab == 1) $("#tab1-btn").click();
		else if (currentTab == 2) $("#tab2-btn").click();
		else if (currentTab == 3) $("#tab3-btn").click();
		else if (currentTab == 4) $("#tab4-btn").click();
	}
);
