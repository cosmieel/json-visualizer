<template>
  <main>
    <FormTextarea @visualize-json="visualizeJson" />
    <Tree :tree-data="jsonText" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import FormTextarea from "@/components/FormTextarea.vue";
import Tree from "@/components/Tree.vue";
// import { useJsonTree } from "@/hooks/useJsonTree";

export default defineComponent({
  name: "TextareaPage",
  components: {
    FormTextarea,
    Tree,
  },
  setup() {
    const store: any = inject("store");
    const jsonText = store.jsonOutputState.jsonText;

    // const { jsonText, visualizeJson } = useJsonTree({});

    // return { jsonText, visualizeJson };

    const visualizeJson = (output: Record<string, unknown>) => {
      jsonText.value = output;
    };

    const getLocalStorage = localStorage.getItem("visualized");
    const cachedJson = JSON.parse(String(getLocalStorage));

    onMounted(() => {
      if (getLocalStorage) visualizeJson(cachedJson[0]);
    });

    return {
      store,
      jsonText,
      visualizeJson,
    };
  },
});
</script>

<style lang="scss"></style>
