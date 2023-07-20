<template>
  <v-container>
    <v-row class="justify-center my-5">
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-sheet max-width="300px">
            <v-text-field
                v-model="date"
                outlined
                rounded
                readonly
                hide-details
                v-bind="attrs"
                v-on="on"
                label="日期筛选"
                prepend-inner-icon="mdi-calendar"
            ></v-text-field>
          </v-sheet>
        </template>
        <v-date-picker
            v-model="date"
            locale="zh-cn"
            color="primary"
            :day-format="setDateFormat"
            no-title
        >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menu = false"
          > 取消
          </v-btn>
          <v-btn
              text
              color="primary"
              @click="dateFilter"
          > 确定
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-row>
    <v-pagination
        circle
        v-model="pageNum"
        total-visible="5"
        :length="pageLength"
        @input="changePage"
        class="my-2"
        v-if="pageLength>1"
    ></v-pagination>
    <v-timeline
        :dense="$vuetify.breakpoint.xs"
    >
      <v-timeline-item
          v-for="item in dynamics"
          :key="item.id"
          :small="$vuetify.breakpoint.xs"
      >
        <span slot="opposite">
          <v-icon small left class="primary--text">mdi-clock</v-icon>
          <span class="primary--text">{{ item.time }}</span>
        </span>
        <v-hover v-slot="{ hover }">
          <v-card :dynamic-id="item.id" :href="item.url" :elevation="hover ? 12 : 2"
                  class="transition-fast-in-fast-out"
                  target="_blank">
            <v-card-title>{{ item.platform }}</v-card-title>
            <v-card-subtitle>
              <span v-if="item.url">
                <v-icon small left>mdi-link</v-icon>{{ item.url }}
                <br>
              </span>
              <span>
                <v-icon small left>mdi-clock</v-icon>{{ item.time | dateFormat }}
              </span>
            </v-card-subtitle>
            <v-card-text class="text--primary" style="white-space: pre-wrap" v-if="item.content">{{
                item.content
              }}
            </v-card-text>
            <v-row v-if="item.img" class="px-4">
              <v-col v-for="src in item.img" :key="src.id" cols="12" lg="6">
                <v-img :src="src" lazy-src="">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "dynamic",
  data() {
    return {
      date: '',
      menu: false,
      pageNum: 1,
      pageLength: 0,
      dynamics: []
    }
  },
  methods: {
    getDynamics(params) {
      if (this.date) {
        params.date = this.date
      }
      this.axios.get('/dynamic', {params: {...params}})
          .then(response => {
            const data = response.data
            this.dynamics = data.items
            this.pageNum = data.page
            this.pageLength = parseInt((data.total + data.size - 1) / data.size)
            this.dynamics.forEach(value => {
              value.time = this.$dayjs(value.time).format('YYYY-MM-DD HH:mm:ss')
            })
          })
    },
    changePage() {
      this.getDynamics({page: this.pageNum})
    },
    dateFilter() {
      this.$refs.menu.save(this.date)
      this.getDynamics({date: this.date})
    },
    setDateFormat(day) {
      return new Date(day).getDate()
    }
  },
  mounted() {
    this.getDynamics()
  }
}
</script>

<style scoped>
.v-card {
  word-break: break-all;
}
</style>
