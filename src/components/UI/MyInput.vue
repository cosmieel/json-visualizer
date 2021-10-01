<template>
  <input
    class="my-input"
    :value="modelValue"
    @input="updateInput"
    type="text"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export default defineComponent({
  name: "my-input",
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
.my-input {
  border: 2px solid #00a69a;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #006e67;
  }
}
</style>
