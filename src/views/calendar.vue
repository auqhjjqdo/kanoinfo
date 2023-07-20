<template>
  <v-container>
    <v-toolbar flat>
      <v-btn class="mr-4" @click="focus = null" color="primary">今天</v-btn>
      <v-btn fab text @click="$refs.calendar.prev()" color="primary">
        <v-icon class="primary--text"> mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text @click="$refs.calendar.next()" color="primary">
        <v-icon class="primary--text"> mdi-chevron-right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="$refs.calendar" class="primary--text">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
      <v-toolbar-title v-else class="primary--text">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-sheet>
      <v-calendar
          ref="calendar"
          v-model="focus"
          locale="zh-cn"
          event-height="40"
          :event-more="false"
          :value="today"
          :events="events"
          :day-format="day=>day.day"
          @click:event="showEvent"
      >
        <template v-slot:event="event">
          <span>{{ event.event.minutes }}</span>
          <br>
          <span>{{ event.event.name }}</span>
        </template>
      </v-calendar>
      <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-y
      >
        <v-card :event-id="selectedEvent._id" flat>
          <v-card-title>{{ selectedEvent.name }}</v-card-title>
          <v-card-subtitle>{{ selectedEvent.datetime }}</v-card-subtitle>
          <v-card-text v-if="selectedEvent.detail" style="white-space: pre-wrap">
            {{ selectedEvent.detail }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text :href="selectedEvent.direct" v-if="selectedEvent.direct"
                   target="_blank">直达链接
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      title: '',
      focus: null,
      today: new Date(),
      events: [],
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    }
  },
  methods: {
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    }
  },
  mounted() {
    this.axios.get('/event').then(response => {
      for (const data of response.data) {
        let date = this.$dayjs(data.time)
        data.minutes = date.format('HH:mm')
        data.datetime = date.format('YYYY-MM-DD HH:mm:ss')
        data.start = new Date(data.time)
        this.events.push(data)
      }
      this.title = this.$refs.calendar.title
      this.$refs.calendar.checkChange()
    })
  }
}
</script>

<style scoped>

</style>
