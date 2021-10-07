<template>
  <div>
    <h2>Visualization by URL</h2>
    <FormUrl />
    <Tree :tree-data="output" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormUrl from "@/components/FormUrl.vue";
import Tree from "@/components/Tree.vue";
import { useJsonOutputUrl } from "@/hooks/useJsonOutputUrl";

export default defineComponent({
  name: "TextareaPage",
  components: {
    FormUrl,
    Tree,
  },
  setup() {
    const { store, output } = useJsonOutputUrl();

    return {
      store,
      output,
    };
  },
});
</script>

<style lang="scss"></style>
