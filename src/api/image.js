import {Api} from '@/api/common'

import path from '@/config/path'

export function getImageListV2 () {
  return new Promise(function (resolve) {
    Api.get(path.image.list.v2)
      .then(res => {
        resolve(res.data)
      })
  })
}
