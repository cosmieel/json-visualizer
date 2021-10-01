<template>
  <form-wrap>
    <my-input v-focus v-model="inputUrl" class="form__input" />
    <my-error-msg v-if="errorMsg" class="form__error">
      {{ errorMsg }}
    </my-error-msg>
    <my-button class="form__btn" @click="visualizeJson" />
  </form-wrap>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, inject } from "vue";
import FormWrap from "@/components/FormWrap.vue";

export default defineComponent({
  components: {
    FormWrap,
  },
  setup(props, { emit }) {
    const store: any = inject("store");
    const errorMsg = store.urlErrorMsg;

    const inputUrl = ref("");

    const visualizeJson = async () => {
      emit("visualize-json", inputUrl.value);

      localStorage.setItem("visualizedurl", inputUrl.value);
      localStorage.inputUrl = inputUrl.value;
    };

    onMounted(() => {
      if (localStorage.inputUrl) {
        inputUrl.value = localStorage.inputUrl;
      }
    });
    // watch(inputUrl, (newString, prevString) => {
    //   localStorage.inputUrl = newString;
    // });

    return { inputUrl, visualizeJson, errorMsg };
  },
  emits: ["visualize-json", "error-msg"],
  props: {},
});
</script>

<style lang="scss" scoped></style>
