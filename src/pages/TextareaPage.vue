<template>
  <div>
    <FormTextarea />
    <Tree :tree-data="output" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormTextarea from "@/components/FormTextarea.vue";
import Tree from "@/components/Tree.vue";
import { useJsonOutputTextarea } from "@/hooks/useJsonOutputTextarea";

export default defineComponent({
  name: "TextareaPage",
  components: {
    FormTextarea,
    Tree,
  },
  setup() {
    const { store, output } = useJsonOutputTextarea();

    return {
      store,
      output,
    };
  },
});
</script>

<style lang="scss"></style>
