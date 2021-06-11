import { Router } from "express";
import Controller from "./controller"
import * as bodyParser from 'body-parser'

const jsonParser = bodyParser.json() //for parsing the data from the http post

const urlController = new Controller()
export const router = Router();

router.post('/', jsonParser, (req, res) => urlController.post(req, res));
router.get('/', jsonParser, (req, res) => urlController.get(req, res));
