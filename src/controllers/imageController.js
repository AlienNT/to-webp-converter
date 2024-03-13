import ImageService from "../services/ImageService.js";

class ImageController {
    async convertSingle(req, res) {
        try {
            const {uuid} = req.body
            const {originalname, buffer} = req.file

            const convertedImage = await ImageService.convertToWebp({
                image: buffer,
                name: originalname
            })

            res.json({data: {...convertedImage, uuid}})

        } catch (e) {
            console.log('imageController convertSingle error', e)
            res.json({errors: ['error convertSingle', e]})
        }
    }

    async convertMultiple(req, res) {
        try {
            const {uuid} = req.body
            const {originalname, buffer} = req.files

            const convertedImage = await ImageService.convertToWebp({
                image: buffer,
                name: originalname
            })
            res.json({data: {...convertedImage, uuid}})

        } catch (e) {
            console.log('imageController convertMultiple error', e)
            res.json({errors: ['error convertMultiple', e]})
        }
    }
}

export default new ImageController()