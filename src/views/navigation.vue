<template>
  <v-sheet class="mb-10">
    <Carousel/>
    <v-container>
      <v-row>
        <v-col v-for="(data,index) in urls" :key="index" cols="6" sm="6" md="4" lg="3">
          <v-hover v-slot="{ hover }">
            <v-card
                :href="data.url"
                :elevation="hover ? 12 : 2"
                target="_blank"
                class="transition-fast-in-fast-out"
            >
              <v-img :src="data.img" height="200px"></v-img>
              <v-card-title> {{ data.title }}</v-card-title>
              <v-card-text> {{ data.url }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import Carousel from "@/components/Carousel";

export default {
  name: 'navigation',
  components: {Carousel},
  data() {
    return {
      urls: []
    }
  },
  mounted() {
    this.axios.get('/url').then(response => {
      this.urls = response.data
    })
  }
};

</script>
<style scoped>
.v-card__text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
