import sharp from "sharp";

class ImageService {
    async convertToWebp({image, name}) {
        const convertedImageBuffer = await sharp(image).webp().toBuffer()

        const {
            size,
            width,
            height,
            format
        } = await this.getMeta(convertedImageBuffer)

        const mimetype = 'image/' + format
        const src = this.bufferToBase64(convertedImageBuffer, mimetype)

        return {
            src,
            size,
            width,
            height,
            format,
            mimetype,
            name: this.createImageName(name, format)
        };
    }

    bufferToBase64(buffer, mimetype) {
        return `data:${mimetype};base64,${Buffer.from(buffer, 'binary').toString('base64')}`
    }

    createImageName(name, format) {
        if (!format) return name

        return this.getName(name) + (format[0] === '.' ? `${format}` : `.${format}`)
    }

    getName(name) {
        return name?.split('.')?.[0] || name
    }

    async getMeta(buffer) {
        return await sharp(buffer).metadata()
    }

    isImage(mimetype) {
        return mimetype && mimetype.split('/')[0] === 'image'
    }
}

export default new ImageService()