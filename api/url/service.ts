import Database from "./database";
import Url from "./url";
export default class Service {

	db: Database

	constructor() {
		this.db = new Database()
	}

	async create(url: Url): Promise<Url> {
		const shortUrl = Math.floor(Math.random() * 5) + 1; // Some random number between 1 - 5
		const query = `INSERT INTO url (long_url, short_url) VALUES ('${url.longUrl}', '${shortUrl}')`;
		const createdUrl: Url = await this.db.execute(query);

		return createdUrl;
	}

	async get(shortUrl: any): Promise<Url> {
		const query = `SELECT long_url FROM url where short_url='${shortUrl}'`;
		const url: Url = await this.db.execute(query);

		return url;
	}
}

