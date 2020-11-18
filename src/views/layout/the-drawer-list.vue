<template>
  <v-list :dense="dense" class="layout-drawer">
    <div v-for="item in routes.filter((x) => !x.hidden)" :key="item.title">
      <v-list-item v-if="isVisibleItem(item)" :to="resolvePath(getVisibleChild(item))" ripple="ripple">
        <v-list-item-icon class="layout-drawer__icon">
          <v-icon>{{ getListIcon(getVisibleChild(item)) }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ getListTitle(getVisibleChild(item)) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group v-else :prepend-icon="getListIcon(item)">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{ getListTitle(item) }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <the-layout-drawer-list
          :dense="dense"
          :routes="item.children"
          :base-path="resolvePath(item)"
        />
      </v-list-group>
    </div>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { resolve } from "path";

export default defineComponent({
  name: "TheLayoutDrawerList",
  props: {
    dense: Boolean,
    iconShow: Boolean,
    isNest: Boolean,
    routes: {
      type: Array,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    },
    basePath: {
      type: String,
      default: ""
    }
  },

  setup(props) {
    function getVisibleChild(item) {
      const child = item.children.find((x) => !x.hidden);

      if (child) {
        child.path = resolve(item.path, child.path);
        child.meta.icon = child.meta.icon || item.meta.icon || "";
        return child;
      }

      return { ...item, noVisibleChildren: true };
    }

    function isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    }

    function isVisibleItem(item) {
      const child = getVisibleChild(item);
      return (!child.children || child.noVisibleChildren) && !item.alwaysShow;
    }

    function resolvePath({ path }) {
      if (isExternal(path)) {
        return path;
      }
      return resolve(props.basePath, path);
    }

    function getListIcon({ meta: { icon } }) {
      return props.iconShow && icon ? icon : " ";
    }

    function getListTitle({ meta: { title } }) {
      return title ? this.$t(title) : "";
    }

    return {
      isVisibleItem,
      resolvePath,
      getListIcon,
      getListTitle,
      getVisibleChild
    };
  }
});
</script>

<style>
.layout-drawer {
  padding-bottom: 0px;
  padding-top: 0px;
}
.layout-drawer__icon {
  margin-bottom: 8px;
  margin-top: 8px;
}
</style>
