<template>
  <form class="form" @submit.prevent>
    <my-input
      v-focus
      v-model="inputUrl"
      class="form__input"
      placeholder="Paste link"
    />
    <my-error-msg v-if="errorMessage" class="form__error">
      {{ errorMessage }}
    </my-error-msg>
    <my-button class="form__btn" @click="visualize">Visualize</my-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useJsonOutputUrl } from "@/hooks/useJsonOutputUrl";

export default defineComponent({
  name: "FormUrl",
  setup() {
    const { store, inputUrl, errorMessage, visualize } = useJsonOutputUrl();

    return {
      store,
      inputUrl,
      errorMessage,
      visualize,
    };
  },
});
</script>

<style lang="scss" scoped></style>
