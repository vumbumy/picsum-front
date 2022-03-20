<template>
  <b-overlay :show="!loaded">
    <b-card class="border shadow" img-top :header="'#' + image.id">
      <div class="pb-3">
        <b-card-img :src="getThumbnailImgSrc(image.id)"
                    :alt="image.id"
                    :hidden="!loaded"

                    @click="onClickImage()"
                    @load="loaded=true"
        />
        <div class="loading-box" v-if="!loaded"/>
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
            <a style="text-align: right" target="_blank" :href="image.url">...</a>
          </dd>
        </dl>
      </b-card-text>

      <div class="row">
        <b-button class="col-12" variant="outline-primary"

                  @click="downloadImage(image)"
        >
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
  emits: ['clickimage'],
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    getThumbnailImgSrc: (id) => getThumbnailPath(id),
    downloadImage: (image) => downloadImage(image),

    onClickImage() {
      this.$emit('clickimage', this.image)
    }
  }
}
</script>

<style scoped>
  .loading-box {
    background-color: gray;
    width: 100%;
    padding-top: 50%;
  }
</style>
