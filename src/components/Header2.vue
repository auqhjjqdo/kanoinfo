<template>
  <v-app-bar app hide-on-scroll color="white">
    <template v-if="searchBar"
    >
      <v-btn icon @click="searchBar = false">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-text-field
          label="搜索"
          prepend-inner-icon="mdi-magnify"
          dense
          single-line
          hide-details
          clearable
      ></v-text-field>
    </template>
    <template v-else>
      <img src="https://pic.rmb.bdstatic.com/bjh/6d0218498e7185105943ed293d74a001.png" class="logo">
      <v-toolbar-title class="primary--text">鹿乃信息站</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
          label="搜索"
          prepend-inner-icon="mdi-magnify"
          filled
          rounded
          dense
          single-line
          hide-details
          class="d-none d-sm-flex"
          style="max-width: 300px"
      ></v-text-field>
      <v-btn icon class="d-sm-none" @click="searchBar = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <template v-slot:extension>
      <v-tabs grow centered>
        <v-tab to="/nav">导航</v-tab>
        <v-tab to="/dynamic">动态</v-tab>
        <v-tab to="/calendar">日历</v-tab>
        <v-tab to="/resource">资源</v-tab>
        <v-tab to="/about">关于</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      searchBar: false
    }
  }
}
</script>
<style scoped>
.logo {
  height: 80%;
  margin-right: 10px;
}

.v-tab {
  min-width: auto;
}
</style>
