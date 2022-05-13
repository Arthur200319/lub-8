const { default: axios } = require("axios");
const cheerio = require("cheerio");

async function parse_ukd_data() {
	const getHTML = async function (url) {
		const { data } = await axios.get(url);
		return cheerio.load(data);
	};

	const selector = await getHTML(`https://ukd.edu.ua/`);

	selector(".field-content .card-img-overlay .card-title a").map((i, element) => {
		console.log(element.children[0].data);
	});
}
parse_ukd_data()

// run -  node index.js
