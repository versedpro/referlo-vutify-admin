<template>
  <v-list :dense="dense" class="layout-drawer">
    <div v-for="item in routes.filter((item) => !item.hidden)" :key="item.title">
      <v-list-item v-if="isVisibleItem(item)" :to="resolvePath(onlyOneChild.path)" ripple="ripple">
        <v-list-item-icon class="layout-drawer__icon">
          <v-icon>{{ getListIcon(onlyOneChild) }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ getListTitle(onlyOneChild) }}
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
          :base-path="resolvePath(item.path)"
        />
      </v-list-group>
    </div>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "@vue/composition-api";
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
    const vm = getCurrentInstance();

    const onlyOneChild = ref(null);

    function isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    }

    function isVisibleItem(item) {
      return (
        this.hasOneVisibleChild(item.children, item) &&
        (!onlyOneChild.value.children || onlyOneChild.noVisibleChildren) &&
        !item.alwaysShow
      );
    }

    function hasOneVisibleChild(children = [], parent) {
      const visibleChildren = children.filter((item) => {
        if (item.hidden) return false;
        // Temp set(will be used if only has one visible child)
        onlyOneChild.value = item;
        return true;
      });

      // When there is only one child router, the child router is displayed by default
      if (visibleChildren.length === 1) {
        onlyOneChild.value.path = resolve(parent.path, onlyOneChild.value.path);
        onlyOneChild.value.meta.icon = onlyOneChild.value.meta.icon || parent.meta.icon || "";

        return true;
      }

      // Show parent if there are no child router to display
      if (visibleChildren.length === 0) {
        onlyOneChild.value = { ...parent, noVisibleChildren: true };
        return true;
      }

      return false;
    }

    function resolvePath(path) {
      if (isExternal(path)) {
        return path;
      }
      return resolve(this.basePath, path);
    }

    function getListIcon(item) {
      return props.iconShow && item.meta ? item.meta.icon : " ";
    }

    function getListTitle(item) {
      return item.meta ? vm.$t(item.meta.title) : "";
    }

    // function getListTitle({ meta: { title } }) {
    //   return title ? this.$t(title) : "";
    // }

    return {
      onlyOneChild,
      isExternal,
      isVisibleItem,
      hasOneVisibleChild,
      resolvePath,
      getListIcon,
      getListTitle
      // getVisibleChild
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
