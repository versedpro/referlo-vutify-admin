<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.xs"
    width="500"
    transition="dialog-bottom-transition"
    :value="show"
    @click:outside="handleCancel"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="handleCancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Select an Avatar</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout wrap v-if="avatars">
        <v-flex v-for="avatar in avatars" :key="avatar.id" xs4 sm3 d-flex>
          <v-card tile flat class="d-flex">
            <v-card-text class="d-flex">
              <v-avatar
                size="96"
                @click="selectAvatar(avatar)"
                class="mr-4"
                :class="{ current: avatar.path === currentAvatar }"
              >
                <img :src="avatar.path" />
              </v-avatar>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
export default defineComponent({
  name: "AvatarPicker",
  props: {
    currentAvatar: {
      type: String,
      required: true
    },
    show: Boolean,
    value: Boolean
  },

  setup(props, { emit }) {
    const avatars = computed(() => {
      // return this.$store.state.avatars;
      return [
        { path: "img/avatars/13101802.jpg", id: "13101802" },
        { path: "img/avatars/customer-support.png", id: "customer-support" }
      ];
    });
    function handleCancel() {
      this.$emit("on-close");
    }

    function selectAvatar(avatar) {
      emit("selected", avatar.path);
    }

    return {
      avatars,
      selectAvatar,
      handleCancel
    };
  }
});
</script>
