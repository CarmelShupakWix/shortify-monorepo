import * as express from "express"

import { router as urlRouter} from './url/router'

const app = express();
const PORT = 8080;

app.use(`/api/v1/url`, urlRouter)

export const server = app.listen(PORT, onListening);

function onListening() {
    console.log(`Listening on ${PORT} - UrlService`);

}

