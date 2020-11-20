<template>
  <v-breadcrumbs class="hidden-sm-and-down" :items="levelList" divider="/">
    <template v-slot:item="props">
      <a @click.prevent="handleLink(props.item)">
        {{ generateTitle(props.item.meta.title) }}
      </a>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pathToRegexp = require("path");

export default defineComponent({
  name: "AppBreadcrumbs",

  setup(_, { root }) {
    const levelList = ref(null);

    watch(
      () => root.$route,
      () => getBreadcrumb()
    );

    getBreadcrumb();

    function generateTitle(title) {
      const hasKey = root.$te(`${title}`);
      if (hasKey) {
        return root.$t(`${title}`);
      }
      return title;
    }

    function getBreadcrumb() {
      let matched = root.$route.matched.filter((item) => item.name);

      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== "home") {
        matched = [{ path: "/home", meta: { title: "route.home" } }].concat(matched);
      }

      levelList.value = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    }

    function pathCompile(path) {
      const { params } = root.$route;
      const toPath = pathToRegexp.compile(path);
      return toPath(params);
    }

    function handleLink(item) {
      console.groupCollapsed("handleLink");
      const { redirect, path } = item;
      console.log(`redirect=${redirect}, path=${path}`);
      if (redirect) {
        console.log("redirect");
        root.$router.push(redirect);
        console.groupEnd();
        return;
      }
      root.$router.push(pathCompile(path));
      console.groupEnd();
    }

    return {
      levelList,
      generateTitle,
      handleLink
    };
  }
});
</script>
