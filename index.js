function createWineElement(wineObject) {
	const div = document.createElement('div');

	div.classList.add('wine');

	const name = document.createElement('h3');

	name.innerText = wineObject.wine;

	div.appendChild(name);

	const rating = document.createElement('h4');

	rating.innerText = wineObject.rating.average;

	div.appendChild(rating);

	const location = document.createElement('h5');

	location.innerText = wineObject.location;

	div.appendChild(location);

	const img = document.createElement('img');

	img.src = wineObject.image;

	div.appendChild(img);

	return div;
}

let xhr = new XMLHttpRequest();
const container = document.querySelector('.container');

xhr.open('GET', 'https://api.sampleapis.com/wines/reds');

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		const data = JSON.parse(xhr.responseText).slice(0, 10);

		for (const wine of data) {
			container.appendChild(createWineElement(wine));
		}
	}
});

xhr.send(null);
