<template>
  <v-footer padless>
    <v-card
        class="flex"
        tile
    >
      <v-card-text class="py-2 text-center">
        Copyright © {{ new Date().getFullYear() }} <strong>鹿乃信息站</strong>
        <br>
        Designed by <strong>auqhjjqdo</strong> | Powered by <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
