// Switch elements in drop down list with corresponding book description


//var selectedValue = $('input[id="book-toggle"]').val();
$('#book-toggle').change(function (event) {

	var selectedValue = $(this).val();
	switch (selectedValue) {
		case 'j-peterson':
			$('[id^=j-peterson').show();
		break;
		case 's-ammous':
			$('[id^=j-peterson').hide();
		break;
	}
})
	
