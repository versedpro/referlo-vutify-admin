<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title v-bind="attrs" v-on="on" class="text-center">
              {{ product.productName }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">
              {{ product.supplierName }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-card>
        <!-- <v-toolbar dark color="gold">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Submit Detail</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Cancel</v-btn>
          </v-toolbar-items>
        </v-toolbar> -->
        <v-img :src="product.src" :aspect-ratio="1.91 / 1" position="top center"></v-img>
        <v-sheet class="mx-12 mt-12">
          <v-card-text class="pa-0 mb-6">{{product.productDescription}}</v-card-text>
          <v-text-field
            v-model="productName"
            :label="$t('referal.productName')"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="productSupplierName"
            :label="$t('referal.supplierName')"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="productPoints"
            :label="$t('referal.points')"
            disabled
          ></v-text-field>
           <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header color="gold">Want to  make an ORDER!</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-form class="mx-12 pb-8" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :label="$t('referal.clientName')"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="$t('referal.email')"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            :label="$t('referal.phone')"
            required
          ></v-text-field>

          <v-btn :disabled="!valid" color="gold" class="mr-4" @click="submit">Submit</v-btn>

          <v-btn color="gold" class="mr-4" @click="reset"> Reset </v-btn>

          <v-btn color="primary"  @click="dialog = false">Cancel</v-btn>
        </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
      </v-expansion-panels>
        </v-sheet>
       
        <!-- <v-form class="mx-12 pb-8" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :label="$t('referal.clientName')"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="$t('referal.email')"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            :label="$t('referal.phone')"
            required
          ></v-text-field>

          <v-btn :disabled="!valid" color="gold" class="mr-4" @click="submit">Submit</v-btn>

          <v-btn color="gold" class="mr-4" @click="reset"> Reset </v-btn>

          <v-btn color="primary"  @click="dialog = false">Cancel</v-btn>
        </v-form> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "DetailDialog",

  props: {
    product: Object
  },

  setup(props) {
    const dialog = ref(false as boolean);
    const notifications = ref(false as boolean);
    const sound = ref(true as boolean);
    const widgets = ref(false as boolean);

    const valid = ref(true);
    const name = ref("");
    const nameRules = ref([
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 4) || "Name must be much more than 4 characters"
    ]);
    const email = ref("");
    const emailRules = ref([
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]);
    const phone = ref("");
    const phoneRules = ref([(v) => !!v || "Phone number is required"]);

    const productName = ref(props.product.productName);
    const productSupplierName = ref(props.product.supplierName);
    const productPoints = ref(props.product.points);

    function submit() {
      const validation = this.$refs.form.validate();
      if (validation) {
        // TODO when submit
      }
    }

    function reset() {
      this.$refs.form.reset();
    }

    return {
      dialog,
      notifications,
      sound,
      widgets,
      valid,
      name,
      nameRules,
      email,
      emailRules,
      phone,
      phoneRules,
      submit,
      reset,
      productName,
      productSupplierName,
      productPoints
    };
  }
});
</script>
