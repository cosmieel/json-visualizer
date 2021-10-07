<template>
  <form class="form" @submit.prevent>
    <my-textarea
      v-focus
      v-model="inputText"
      class="form__textarea"
      placeholder="Paste JSON"
    />
    <my-error-msg v-if="errorMessage" class="form__error">
      {{ errorMessage }}
    </my-error-msg>
    <my-button class="form__btn" @click="visualize">Visualize</my-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useJsonOutputTextarea } from "@/hooks/useJsonOutputTextarea";

export default defineComponent({
  name: "FormTextarea",
  setup() {
    const { store, inputText, errorMessage, visualize } =
      useJsonOutputTextarea();

    return {
      store,
      inputText,
      errorMessage,
      visualize,
    };
  },
});
</script>

<style lang="scss" scoped></style>
