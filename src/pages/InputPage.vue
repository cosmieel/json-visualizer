<template>
  <main>
    <FormUrl @visualize-json="visualizeJson" />
    <Tree :tree-data="jsonUrl" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import FormUrl from "@/components/FormUrl.vue";
import Tree from "@/components/Tree.vue";
// import { useJsonTree } from "@/hooks/useJsonTree";
import axios from "axios";

export default defineComponent({
  name: "TextareaPage",
  components: {
    FormUrl,
    Tree,
  },
  setup() {
    const store: any = inject("store");
    const jsonUrl = store.jsonOutputState.jsonUrl;
    const errorMsg = store.urlErrorMsg;

    // const { jsonUrl, visualizeJson } = useJsonTree({});

    // return { jsonUrl, visualizeJson };

    const visualizeJson = async (output: string) => {
      try {
        const response = await axios.get(output);
        jsonUrl.value = response.data[0];

        console.log(response);
        errorMsg.value = "";
      } catch (e) {
        errorMsg.value = e.message;
        localStorage.removeItem("visualizedurl");
      }
    };
    // const visualizeJson = (output: string) => {
    //   console.log(output);

    //   jsonUrl.value = output;
    // };

    const getLocalStorage = localStorage.getItem("visualizedurl");
    const cachedJson = String(getLocalStorage);

    onMounted(() => {
      if (getLocalStorage) visualizeJson(cachedJson);
    });

    return {
      store,
      jsonUrl,
      visualizeJson,
    };
  },
});
</script>

<style lang="scss"></style>
