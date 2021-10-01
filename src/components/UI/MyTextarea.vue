<template>
  <textarea
    class="my-textarea"
    :value="modelValue"
    @input="updateInput"
    type="text"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export default defineComponent({
  name: "my-textarea",
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(e: HTMLInputEvent) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
});
</script>

<style lang="scss" scoped>
.my-textarea {
  resize: vertical;
  min-height: 250px;
  border: 2px solid #00a69a;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #006e67;
  }
}
</style>
