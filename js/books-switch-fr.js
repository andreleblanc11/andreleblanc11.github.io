// Switch elements in drop down list with corresponding book description

$('#book-toggle-fr').change(function (event) {
	var selectedValue = $(this).val();
	switch (selectedValue) {
		case 'default':
			$('[id$=-fr-image').hide();
			$('[id$=-fr-desc').hide();
		break;
		case 'j-peterson':
			$('[id^=j-peterson-fr').show();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 's-ammous':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').show();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 'j-kosinski':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').show();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 'd-savoie':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').show();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 'r-greene':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').show();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 'r-kiyosaki':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').show();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 'd-chilton':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').show();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').hide();
		break;
		case 't-ferriss':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').show();
			$('[id^=g-newton-fr').hide();
		break;
		case 'g-newton':
			$('[id^=j-peterson-fr').hide();
			$('[id^=s-ammous-fr').hide();
			$('[id^=j-kosinski-fr').hide();
			$('[id^=d-savoie-fr').hide();
			$('[id^=r-greene-fr').hide();
			$('[id^=r-kiyosaki-fr').hide();
			$('[id^=d-chilton-fr').hide();
			$('[id^=t-ferriss-fr').hide();
			$('[id^=g-newton-fr').show();
		break;
	}
})
