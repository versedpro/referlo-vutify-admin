<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-title>
          Industries
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template #activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Add
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Add new</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>

        <br />

        <v-toolbar flat>
          <div class="text-center pt-2">
            <v-select
              class="md-1 sm-6"
              v-model="itemsPerPage"
              :items="[5, 10, 15, 20]"
              outlined
            ></v-select>
          </div>

          <v-spacer></v-spacer>
          <v-text-field v-model="search" label="Search"></v-text-field>
        </v-toolbar>

        <v-data-table
          :headers="headers"
          :items="industries"
          :page.sync="page"
          @page-count="pageCount = $event"
          :search="search"
          :items-per-page="itemsPerPage"
          class="elevation-1"
          hide-default-footer
        >
          <template #[`item.actions`]="{ item }">
            <v-btn depressed color="primary mr-2" @click="editItem(item)">
              <v-icon>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>

            <v-btn depressed color="error" @click="deleteItem(item)">
              <v-icon>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </template>
          <template #no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
        <div>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Headers, Industries } from "@/demo/api/mock_industry_list";

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Industry",

  setup() {
    const headers = ref(Headers);
    const industries = ref(Industries);
    const search = ref("");
    const page = ref(1);
    const pageCount = ref(0);
    const itemsPerPage = ref(5);

    const dialog = false;
    const dialogDelete = false;
    const editedIndex = -1;
    const editedItem = {
      name: "",
      id: 0,
      title: 0
    };
    const defaultItem = {
      name: "",
      id: "",
      title: ""
    };

    function editItem(item) {
      this.editedIndex = this.industries.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    }

    function deleteItem(item) {
      this.editedIndex = this.industries.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    }

    function deleteItemConfirm() {
      this.industries.splice(this.editedIndex, 1);
      this.closeDelete();
    }

    function close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    }

    function closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    }

    function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.industries[this.editedIndex], this.editedItem);
      } else {
        this.industries.push(this.editedItem);
      }
      this.close();
    }

    return {
      headers,
      industries,
      save,
      closeDelete,
      deleteItemConfirm,
      close,
      deleteItem,
      editItem,
      defaultItem,
      itemsPerPage,
      page,
      pageCount,
      search,
      dialog,
      dialogDelete,
      editedIndex,
      editedItem
    };
  }
});
</script>
