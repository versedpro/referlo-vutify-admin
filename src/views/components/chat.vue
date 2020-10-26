<template>
  <v-container dark style="max-width: 800px;">
    <v-timeline dense clipped>
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
          <!-- <template v-slot:append-outer>
            <v-btn small fab @click="comment">
              <v-icon dark>
                mdi-send
              </v-icon>
            </v-btn>
          </template> -->
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

      <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            Lorem ipsum
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
            sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
            voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
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
    const years = ref(Items);

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
      years
    };
  }
});
</script>
