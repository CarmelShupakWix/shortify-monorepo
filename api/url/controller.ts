import Service from "./service";
import { Request, Response } from "express";
import Url from "./url"

export default class Controller {

	service: Service

	constructor() {
		this.service = new Service();
	}

	async post(req: Request, res: Response): Promise<void> {
		try {
			const url: Url = req.body;
			const createdUrl: Url = await this.service.create(url)

			res.status(200).send(createdUrl);
		} catch (ex) {
			res.status(500).send(ex);
		}

	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			const shortUrl: string = String(req.query.shortUrl);
			const url: Url = await this.service.get(shortUrl);

			if (!url) {
				res.status(404);
			}

			res.status(200).send(url);
		} catch (ex) {
			res.status(500).send(ex);
		}
	}
}

