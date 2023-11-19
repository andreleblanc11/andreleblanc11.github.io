// Switch elements in drop down list with corresponding book description

$('#book-toggle-en').change(function (event) {
	var selectedValue = $(this).val();
	switch (selectedValue) {
		case 'default':
			$('[id$=-en-image').hide();
			$('[id$=-en-desc').hide();
		break;
		case 'j-peterson':
			$('[id^=j-peterson-en').show();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 's-ammous':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').show();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 'j-kosinski':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').show();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 'd-savoie':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').show();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 'r-greene':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').show();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 'r-kiyosaki':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').show();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 'd-chilton':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').show();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').hide();
		break;
		case 't-ferriss':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').show();
			$('[id^=g-newton-en').hide();
		break;
		case 'g-newton':
			$('[id^=j-peterson-en').hide();
			$('[id^=s-ammous-en').hide();
			$('[id^=j-kosinski-en').hide();
			$('[id^=d-savoie-en').hide();
			$('[id^=r-greene-en').hide();
			$('[id^=r-kiyosaki-en').hide();
			$('[id^=d-chilton-en').hide();
			$('[id^=t-ferriss-en').hide();
			$('[id^=g-newton-en').show();
		break;
	}
})
