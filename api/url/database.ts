import Url from "./url";
import * as mysql from 'mysql';
import * as util from "util";

export default class Database {

	connection: mysql.Connection;

	constructor() {
		const connection = mysql.createConnection({ // Pay attention to these lines,  
			host: 'localhost', // these are the configurations
			user: 'root', // to our connection to the database 
			password: 'secret', // which we have also defined in
			database: 'shortify-monorepo' // docker-compose.yml
		});

		connection.connect();

		this.connection = connection;
	}

	async execute(query: string): Promise<Url> {
		const mysqlQuery = util.promisify(this.connection.query).bind(this.connection);
		const url: Url = await mysqlQuery(query);

		return url;
	}
}

