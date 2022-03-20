<template>
  <div class="overlay-box"
       v-if="isEmpty"
  >
    <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status"/>
  </div>
  <div v-else>
    <div class="row justify-content-around mx-1">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-2"
           v-for="image in imageList"

           :key="image.id"
      >
        <image-card :image="image" @clickimage="onClickImage"/>
      </div>
    </div>
    <b-button class="col-12" variant="primary" size="lg"
              squared

              :disabled="isLoading"

              @click="loadImageList()"
    >
      {{isLoading ? "Loading..." : "Load More"}}
    </b-button>

    <b-modal v-model="modalShow" size="xl"
             centered hide-footer

             :title="`#${selectedImage?.id}`"
             :hidden="!loadedImage"
    >
      <div class="row">
        <div class="col-12">
          <b-img class="w-100"

                 :src="selectedImage?.download_url"

                 @load="loadedImage=true"
          />
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import store from '@/store';
import ImageCard from "@/component/ImageCard";

export default {
  components: {ImageCard},
  data() {
    return {
      modalShow: false,
      selectedImage: undefined,
      loadedImage: false,
    }
  },
  computed: {
    isEmpty: () => store.state.image.list.length === 0,
    isLoading: () => store.state.image.loading,
    imageList: () => store.state.image.list
  },
  watch: {
    selectedImage() {
      this.loadedImage = false
    }
  },
  setup () {
    let page = 1

    const loadImageList = () => store.dispatch("image/getImageList", {page: page++, limit: 36})

    loadImageList()

    return {
      loadImageList
    }
  },
  methods: {
    onClickImage(image) {
      this.modalShow = true

      this.selectedImage = image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overlay-box {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index: 1000;
  }
</style>
