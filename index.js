import Express from 'express'
import dotenv from 'dotenv'

import hostConfig from "./src/configs/hostConfig.js";
import apiConfig from "./src/configs/apiConfig.js";
import routes from "./src/routes/index.js";
import bodyParser from "body-parser";

import cors from "cors";

dotenv.config()

const APP = new Express()
    .use(cors())
    // .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json({limit: '20mb'}))
    .use(apiConfig.API_ROUTE, routes)

async function start() {
    try {
        APP.listen(hostConfig.PORT, () => {
            console.log('server started in port: ', hostConfig.PORT)
        })
    } catch (e) {
        console.log('server start error', e)
    }
}

await start()