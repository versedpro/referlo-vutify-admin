<template>
  <v-timeline
    align-top
    dense
    clipped
    :style="{ 'padding-bottom': $vuetify.breakpoint.xsOnly ? '154px' : '82px' }"
  >
    <v-timeline-item
      v-for="event in timeline"
      :key="event.id"
      :class="event.itemClass"
      :color="event.color"
      small
    >
      <div v-text="event.time"></div>
      <v-card elevation="6" class="mt-2 rounded-lg">
        <v-card-text class="white text--primary">
          {{ event.name }}
          <p>
            <v-chip :class="event.commentClass" v-text="event.text"> </v-chip>
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
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
import { use } from "chai";
import user from "@/store/modules/user";
import { ApiService } from "@/services/apiService";
import moment from 'moment'

export default defineComponent({
  name: "OrdersChat",

  props: {
    order: Object
  },

  setup(props) {
    const events = ref([]);
    const input = ref("");
    const nonce = ref(0);
    const referloId = ref(1);
    const items = ref([]);
    const timeline = computed(function () {
      return events.value; //.slice().reverse();
    });

    const apiService = new ApiService();

    const connection = ref(
      new signalR.HubConnectionBuilder().withUrl(`${process.env.VUE_APP_API_URL}/chathub`).build()
    );

    onMounted(() => {
      connection.value.start().then(() => {
        sendOrderId();
      });
      getChatMessages();
      connection.value.on(
        "ReceiveMessage",
        (operatorName: string, message: string, time: string) => {
          events.value.push({
            id: nonce.value++,
            name: operatorName,
            text: message,
            color: "gold",
            itemClass: "mr-12",
            commentClass: "mt-2 gold",
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            time: moment(time).format('MM/DD/YYYY hh:mm:ss')
          });
        }
      );
    });

    const getChatMessages = async () => {
      console.log(parseInt(props.order.orderno));
      await apiService.getChatMessages(parseInt(props.order.orderno)).then((messages) => {
        console.log(messages);
         for (let i = 0; i < messages.length; i++) {
           if (messages[i].operatorName === "") {
            events.value.push({
              id: nonce.value++,
              name: "You",
              text: messages[i].text,
              color: "primary",
              itemClass: "mb-4 mr-12",
              commentClass: "mt-2 primary",
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              time: moment(messages[i].date).format('MM/DD/YYYY hh:mm:ss')
            });
          } else {
            events.value.push({
              id: nonce.value++,
              name: messages[i].operatorName,
              text: messages[i].text,
              color: "gold",
              itemClass: "mr-12",
              commentClass: "mt-2 gold",
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              time: moment(messages[i].date).format('MM/DD/YYYY hh:mm:ss')
            });
          }
         }
        });
    }

    function sendOrderId() {
      connection.value.invoke("AddOrderChat", props.order.orderno);
    }

    function comment() {
      const text = input.value;
      events.value.push({
        id: nonce.value++,
        name: "You",
        text: text,
        color: "primary",
        itemClass: "mb-4 mr-12",
        commentClass: "mt-2 primary",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        time: moment(new Date().toString()).format('MM/DD/YYYY hh:mm:ss')
      });

      console.log(connection.value.state);
      if (connection.value.state === signalR.HubConnectionState.Connected) {
        connection.value.invoke("SendMessage", referloId.value, props.order.orderno, text);
        input.value = null;
      } else {
        sendOrderId();
        connection.value
          .start()
          .then(() =>
            connection.value.invoke("SendMessage", referloId.value, props.order.orderno, text)
          );
        input.value = null;
      }
    }

    return {
      events,
      referloId,
      items,
      input,
      nonce,
      comment,
      getChatMessages,
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
