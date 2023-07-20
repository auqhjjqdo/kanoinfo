<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, Header},
};

</script>
<style>
#nprogress .bar {
  background: #491a00 !important;
}
</style>
