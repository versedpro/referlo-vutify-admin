<template>
  <v-timeline
    align-top
    dense
    clipped
    :style="{ 'padding-bottom': $vuetify.breakpoint.xsOnly ? '154px' : '82px' }"
  >
    <v-timeline-item class="mr-12" v-for="(item, i) in items" :key="i" :color="item.color" small>
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
      </template>
      <div>{{ item.timestamp }}</div>
      <v-card elevation="6" class="mt-2 rounded-lg">
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
          <v-card-text class="white text--primary">
            You
            <p>
              <v-chip class="mt-2 primary" v-text="event.text"> </v-chip>
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-slide-x-transition>
    <v-timeline-item
      fill-dot
      class="primary--text text-center pt-1 pb-0 comment"
      color="gold"
      large
      :class="{ isMobile: $vuetify.breakpoint.xsOnly }"
    >
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
  </v-timeline>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "@vue/composition-api";
import * as signalR from "@aspnet/signalr";

export default defineComponent({
  name: "OrdersChat",

  props: {
    items: Array
  },

  setup() {
    const events = ref([]);
    const input = ref("");
    const nonce = ref(0);
    const referloId = ref(1);
    const salesOrderId = ref(1);

    const timeline = computed(function () {
      return events.value.slice().reverse();
    });

    const connection = ref(
      new signalR.HubConnectionBuilder().withUrl(`${process.env.VUE_APP_API_URL}/chathub`).build()
    );

    onMounted(() => {
      connection.value.on(
        "ReceiveMessage",
        (operatorName: string, message: string, time: string) => {
          events.value.push({
            id: nonce.value++,
            text: message,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            time: time
          });
        }
      );
    });

    function comment() {
      const text = input.value;
      const time = new Date().toTimeString();
      events.value.push({
        id: nonce.value++,
        text: input.value,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        time: new Date().toTimeString()
      });
      if (connection.value.state === signalR.HubConnectionState.Connected) {
        connection.value.invoke("SendMessage", referloId.value, salesOrderId.value, text);
        input.value = null;
      } else {
        connection.value
          .start()
          .then(() =>
            connection.value.invoke("SendMessage", referloId.value, salesOrderId.value, text)
          );
        input.value = null;
      }
    }

    return {
      events,
      referloId,
      salesOrderId,
      input,
      nonce,
      comment,
      timeline
    };
  }
});
</script>

<style scoped>
.comment {
  position: fixed;
  bottom: 0;
  z-index: 3;
  background-color: #eaeaea;
  width: 102.5vh;
}
.isMobile {
  width: 100% !important;
  padding-bottom: 72px !important;
}
</style>
