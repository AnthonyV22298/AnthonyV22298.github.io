
/* Connect to device */


document.getElementById('connect')
	.addEventListener('click', () => {
		PoweredUp.connect()
			.then(()=> {
				document.body.classList.add('connected');
			});
	});

document.getElementById('emulate')
	.addEventListener('click', () => {
	    emulateState = true;
		document.body.classList.add('connected');
	});



	
	
	
