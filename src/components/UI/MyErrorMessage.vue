<template>
  <div class="my-error-msg">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-error-msg",
});
</script>

<style lang="scss" scoped>
.my-error-msg {
  color: red;
  font-weight: bold;
  margin-left: auto;
}
</style>
