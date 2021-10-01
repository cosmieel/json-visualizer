<template>
  <form-wrap>
    <my-textarea v-focus v-model="inputText" class="form__textarea" />
    <my-error-msg v-if="errorMessage" class="form__error">
      {{ errorMessage }}
    </my-error-msg>
    <my-button class="form__btn" @click="visualizeJson" />
  </form-wrap>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import FormWrap from "@/components/FormWrap.vue";

export default defineComponent({
  components: {
    FormWrap,
  },
  setup(props, { emit }) {
    const inputText = ref("");
    const errorMessage = ref("");

    const visualizeJson = () => {
      try {
        emit("visualize-json", JSON.parse(inputText.value)[0]);

        localStorage.setItem("visualized", inputText.value);
        localStorage.inputText = inputText.value;

        errorMessage.value = "";
      } catch (e) {
        errorMessage.value = e.message;
        localStorage.removeItem("visualized");
      }
    };

    onMounted(() => {
      if (localStorage.inputText) {
        inputText.value = localStorage.inputText;
      }
    });
    // watch(inputText, (newString, prevString) => {
    //   localStorage.inputText = newString;
    // });

    return { inputText, visualizeJson, errorMessage };
  },
  emits: ["visualize-json"],
  props: {},
});
</script>

<style lang="scss" scoped></style>
