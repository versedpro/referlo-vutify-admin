<template>
  <v-card tile class="mx-auto" height="100%">
    <v-card-title class="primary justify-center display-1 text-h5 white--text">
      {{ title }}
    </v-card-title>

    <!-- <v-card-text class="mx-auto my-8">
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
    </v-card-text> -->
     <v-sheet
    class="mx-auto"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 3"
        :key="n"
        v-slot="{ active, toggle }"
        elevation="8"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="100"
          width="100"
          @click="toggle"
        >
         <v-img
              src="img/dummy/brand1.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
            </v-img>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <!-- <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon> -->
               
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

    <!-- <v-container fluid> -->
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <template v-slot:default="props">
        <v-row class="mx-2">
          <!-- <v-col v-for="item in props.items" :key="item.name" cols="12" md="6" lg="4" xl="4"> -->
          <v-col v-for="item in props.items" :key="item.name" cols="6">
            <product-card :item="item"></product-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <!-- </v-container> -->
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Items } from "@/demo/api/mock_products";
import ProductCard from "./product-card.vue";

export default defineComponent({
  name: "History",
  model: null,

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
