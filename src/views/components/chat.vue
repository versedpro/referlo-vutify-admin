<template>
  <v-container dark style="max-width: 800px;">
    <v-timeline align-top dense clipped>
      <v-timeline-item fill-dot class="white--text mb-12" color="orange" large>
        <template v-slot:icon>
          <span>JL</span>
        </template>
        <v-text-field
          v-model="input"
          class="mt-4"
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

      <v-slide-x-transition group>
        <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="pink" small>
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" small>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
        </template>
        <div>{{ item.timestamp }}</div>
        <v-card class="mt-2">
          <!-- <v-card-title class="title">
            Lorem Ipsum Dolor
          </v-card-title> -->
          <v-card-text class="white text--primary">
            Status: dd
            <p>
              <v-chip class="mt-2">
                Status: dd
              </v-chip>
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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

    const timeline = computed(function() {
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
            .map(v => v.charAt(0))
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
      items
    };
  }
});
</script>
