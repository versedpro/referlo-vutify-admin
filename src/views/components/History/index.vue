<template>
  <v-card tile class="mx-auto pa-0" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>

    <v-card-text class="mx-auto my-8">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 3" :key="n" v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-card-text>

    <v-divider></v-divider>

    <v-container fluid>
      <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <!-- <v-col v-for="item in props.items" :key="item.name" cols="12" md="6" lg="4" xl="4"> -->
            <v-col v-for="item in props.items" :key="item.name" cols="12">
              <product-card :item="item"></product-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import ProductCard from "./product-card.vue";

export default defineComponent({
  name: "History",

  components: {
    ProductCard
  },

  setup() {
    const itemsPerPage = ref(4);
    const desserts = ref(Items);
    const title = "資訊中心";
    const model = ref(null);
    const items = ref(Items);

    return {
      itemsPerPage,
      desserts,
      title,
      items,
      model
    };
  }
});
</script>
