// your code here


document.getElementById("button").addEventListener('click', function(e) {
	e.preventDefault();

	const form = document.querySelector("form");
	const formdata = new FormData(form)
	const name = formdata.get('name');
	const year = formdata.get('year');

	let url = `https://localhost:8080/?name=${name}&year=${year}`;

	document.querySelector('h3').innerText = url
	
})