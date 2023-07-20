<template>
  <v-app-bar app color="white" ref="appBar">
    <template>
      <img src="https://pic.rmb.bdstatic.com/bjh/6d0218498e7185105943ed293d74a001.png" class="logo" alt="">
      <v-toolbar-title class="primary--text">鹿乃信息站</v-toolbar-title>
    </template>
    <v-spacer></v-spacer>
    <template v-slot:extension v-if="$vuetify.breakpoint.xsOnly">
      <v-tabs grow>
        <v-tab
            v-for="(tab,index) in tabs"
            :key="index"
            :to="tab.to"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-if="$vuetify.breakpoint.smAndUp">
      <v-sheet>
        <v-tabs right :height="tabsHeight">
          <v-tab
              v-for="(tab,index) in tabs"
              :key="index"
              :to="tab.to"
          >
            {{ tab.name }}
          </v-tab>
        </v-tabs>
      </v-sheet>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      tabs: [
        {name: '导航', to: '/nav'},
        {name: '动态', to: '/dynamic'},
        {name: '日历', to: '/calendar'},
        {name: '资源', to: '/resource'},
        {name: '关于', to: '/about'}
      ],
      tabsHeight: '56px'
    }
  },
  mounted() {
    this.tabsHeight = this.$refs.appBar.$el.clientHeight;
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
