<template>
  <div>
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
