function initMap() {
  	var location = {lat: 40.8054491, lng: -73.9654415};
  	var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: location});
  	var marker = new google.maps.Marker({position: location, map: map});
}

function makeReservation() {
	$("#confirmReservation").on("click", function(e){
		e.preventDefault();
		var customerName = $("#customerName").val();
		var reservationDay = $("#reservationDate").val();
		var reservationHTML = "<tr><td>" + customerName + "</td> <td>" + reservationDay + "</td></tr>";
		console.log(reservationHTML);
		$("#existingReservations").append(reservationHTML);
	});
}
makeReservation();