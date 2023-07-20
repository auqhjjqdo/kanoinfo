<template>
  <v-carousel
      cycle
      show-arrows-on-hover
      hide-delimiters
      :height="$vuetify.breakpoint.smAndDown?mobileHeight:deskopHeight"
  >
    <v-carousel-item
        v-for="(item,index) in img"
        :key="index"
        :src="item"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      deskopHeight: window.innerHeight - 65,
      mobileHeight: window.innerHeight / 3,
      img: [
        'https://pic.rmb.bdstatic.com/bjh/cfc8d7371c1c29cad5be61007cf74d53.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/756e821506ee761199a1aeafd6caf087.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/fdc36aa24d5e9fb4d125f6a50d163e6e.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/b6034f0284ec0e08ee8c4852d649d370.jpeg',
        'https://pic.rmb.bdstatic.com/bjh/f7b0697325e87ae71520e3e1e75b25b0.jpeg',
      ]
    }
  }
}
</script>

<style scoped>

</style>
