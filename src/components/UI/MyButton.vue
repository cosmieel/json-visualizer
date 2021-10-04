<template>
  <button class="my-button" type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-button",
});
</script>

<style lang="scss" scoped>
.my-button {
  border: none;
  background: #ed9300;
  color: #fff;
  padding: 16px 32px;
  cursor: pointer;
  font-size: 20px;
  transition: background 0.2s ease-out;

  &._big {
    padding: 50px;
    font-size: 32px;
  }

  &:hover {
    background: #ca7d00;
  }
}
</style>
