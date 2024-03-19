import {Router} from "express";
import multer from "multer";

import ImageController from "../controllers/imageController.js";
import {routeNames} from "../helpers/routeNames.js";

const upload = multer()

const router = new Router()
    .post(routeNames.CONVERT_SINGLE, upload.single('file'), ImageController.convertSingle)
    .post(routeNames.CONVERT_MULTIPLE, upload.single('files'), ImageController.convertMultiple)

    .get(routeNames.IS_ALIVE, (req, res) => {
        res.json({status: 200, message: 'server online'})
    })
export default router
