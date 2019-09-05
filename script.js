//var element = React.createElement('div', {}, 'Hello world!');
//ReactDOM.render(element, document.getElementById('app'));

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'https://images-na.ssl-images-amazon.com/images/I/51IWlffOs%2BL.jpg',
		alt: 'Harry Potter plakat'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lion_king_1_half_cover.jpg/220px-Lion_king_1_half_cover.jpg',
		alt: 'król Lew plakat'
	},
	{
		id: 3,
		title: 'Spider into the spider verse',
		desc: 'Film w którym spotykają się różne alteratywne wersje spidermana',
		img: 'https://media.comicbook.com/2019/02/spider-man-into-the-spider-verse-blu-ray-top-1159238.jpeg',
		alt: 'Spider into the spider verse plakat'
	},
	{
		id: 4,
		title: 'Tekkonkinkreet',
		desc: 'Animacja o dwójce wychowujących się na ulicy braci',
		img: 'https://static.tvtropes.org/pmwiki/pub/images/tekkon-kinkreet-743333.jpg',
		alt: 'Tekkonkinkreet plakat'
	},
	{
		id: 5,
		title: 'Czerwony żółw',
		desc: 'Symboliczna opowieść o życiu',
		img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/The_Red_Turtle.png',
		alt: 'Czerwony zółw plakat'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img, alt: movie.alt})
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));