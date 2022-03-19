<template>
  <b-overlay :show="!loaded"
             class="col-12 col-md-6 col-lg-4 col-xl-3 p-2">
    <b-card class="border shadow" :header="'#' + image.id" img-top>
      <div class="pb-3">
        <b-card-img @load="loaded=true"
                    :src="getThumbnailImgSrc(image.id)"
                    :alt="image.id"
                    :hidden="!loaded"
        />
        <div v-if="!loaded" class="loading-box" />
      </div>

      <b-card-text>
        <dl class="row justify-content-between">
          <dt class="col-5">Author</dt>
          <dd class="col-7 text-end"><small>{{image.author}}</small></dd>
        </dl>
        <dl class="row justify-content-between">
          <dt class="col-5">Width</dt>
          <dd class="col-7 text-end"><small>{{image.width}}</small></dd>
        </dl>
        <dl class="row justify-content-between">
          <dt class="col-5">Height</dt>
          <dd class="col-7 text-end"><small>{{image.height}}</small></dd>
        </dl>
        <dl class="row justify-content-between">
          <dt class="col-5">More Info</dt>
          <dd class="col-7 text-end">
            <a style="text-align: right" :href="image.url">...</a>
          </dd>
        </dl>
      </b-card-text>

      <div class="row">
        <b-button class="col-12" @click="downloadImage(image)" variant="outline-primary">
          Free <bootstrap-icon icon="cloud-download"/>
        </b-button>
      </div>

    </b-card>
  </b-overlay>
</template>

<script>
import {downloadImage, getThumbnailPath} from "@/api/image";

export default {
  props: {
    image: Object
  },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    getThumbnailImgSrc: (id) => getThumbnailPath(id),
    downloadImage: (image) => downloadImage(image),
    log: (msg) => console.log(msg)
  }
}
</script>

<style scoped>
  .loading-box {
    background-color: gray;
    width: 100%;
    padding-top: 50%; /* 16:9 Aspect Ratio */
  }
</style>
