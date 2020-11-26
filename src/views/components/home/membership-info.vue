<template>
  <v-list subheader class="primary">
    <v-list-item>
      <v-list-item-avatar>
        <v-img :alt="`${person.title} avatar`" :src="person.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="white--text">{{ person.name }}</v-list-item-title>
        <v-list-item-subtitle class="gold--text">
          <span>{{ $t("home.memberSince") }}</span>
          <span class="ml-1">{{ person.memberSince }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-chip class="text-h6" color="transparent" text-color="gold">
          <v-icon left> mdi-currency-usd-circle-outline</v-icon>
          {{ person.points }}
        </v-chip>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "MembershipInfo",

  props: {
    person: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>
