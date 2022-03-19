import {Api} from '@/api/common'

import path from '@/config/path'

import axios from "axios";

export class Image {
    constructor() {
        this.id = 0
        this.author= ""
        this.width= 0
        this.height= 0
        this.url= ""
        this.download_url = ""
    }
}

export function getImageListV2 (payload = {page:0, limit:100}) {
  return new Promise(function (resolve) {
    Api.get(path.image.list.v2, {params: payload})
      .then(res => {
        resolve(res.data)
      })
  })
}

export function getThumbnailPath(image, width= 250, height= 125) {
    return `${path.baseURL}/${width}/${height}?image=${image}`
}

export function downloadImage (image) {
    axios.get(image.download_url, { responseType: 'blob' })
        .then(response => {
            const blob = new Blob([response.data], { type: 'application/image' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = `image_${image.id}.jpg`
            link.click()
            URL.revokeObjectURL(link.href)
        }).catch(console.error)
}
