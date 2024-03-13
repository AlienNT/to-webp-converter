import {Router} from "express";
import multer from "multer";

import ImageController from "../controllers/imageController.js";

const upload = multer()

const router = new Router()
    .post('/convert-single', upload.single('file'), ImageController.convertSingle)
    .post('/convert-multiple', upload.single('files'), ImageController.convertMultiple)
export default router
