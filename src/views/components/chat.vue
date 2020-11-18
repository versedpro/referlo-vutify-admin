<template>
  <v-container fluid>
    <v-card class="mx-auto pa-0" max-width="800" height="100%" tile>
      <v-card-title class="primary justify-center display-1 text-h5 white--text">
        {{ title }}
      </v-card-title>
      <v-timeline align-top dense clipped>
        <v-timeline-item
          class="mr-12"
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${item.color}--text`"
              v-text="item.year"
            ></span>
          </template>
          <div>{{ item.timestamp }}</div>
          <v-card elevation="6" class="mt-2 rounded-lg">
            <!-- <v-card-title class="title">
            Lorem Ipsum Dolor
          </v-card-title> -->
            <v-card-text class="white text--primary">
              USER NAME
              <p>
                <v-chip class="mt-2 gold"> User's Comment </v-chip>
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4 mr-12"
            color="primary"
            small
          >
            <div v-text="event.time"></div>
            <v-card elevation="6" class="mt-2 rounded-lg">
              <!-- <v-card-title class="title">
            Lorem Ipsum Dolor
          </v-card-title> -->
              <v-card-text class="white text--primary">
                You
                <p>
                  <v-chip class="mt-2 primary" v-text="event.text"> </v-chip>
                </p>
              </v-card-text>
            </v-card>
            <!-- <v-row justify="space-between">
              <v-card elevation="6"  class="mt-2 rounded-lg">
              <v-col cols="7" v-text="event.text"></v-col>
              <v-col class="text-right" cols="5" v-text="event.time"></v-col>
            </v-row> -->
          </v-timeline-item>
        </v-slide-x-transition>
        <v-footer height="75" width="100%" class="px-0">
          <v-timeline-item fill-dot class="primary--text text-center pa-0" color="gold" large>
            <template v-slot:icon>
              <span>JL</span>
            </template>
            <v-text-field
              v-model="input"
              class="mr-12"
              label="Type a message..."
              append-outer-icon="mdi-send"
              flat
              rounded
              solo
              clearable
              background-color="grey"
              @click:append-outer="comment"
              @keydown.enter="comment"
            >
            </v-text-field>
          </v-timeline-item>
        </v-footer>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Items } from "@/demo/api/mock_chats";
import { defineComponent, ref, computed } from "@vue/composition-api";

export default defineComponent({
  name: "Chat",

  setup() {
    const events = ref([]);
    const input = ref(null);
    const nonce = ref(0);
    const items = ref(Items);

    const title = "訂單詳情";

    const timeline = computed(function () {
      return events.value.slice().reverse();
    });

    function comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
          return ` ${contents
            .split(" ")
            .map((v) => v.charAt(0))
            .join("")}`;
        })
      });

      this.input = null;
    }

    return {
      events,
      input,
      nonce,
      timeline,
      comment,
      items,
      title
    };
  }
});
</script>
