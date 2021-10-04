<template>
  <form class="form" @submit.prevent>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.form {
  text-align: center;

  &__btn {
    margin: 24px;
  }

  &__error {
    padding-top: 16px;
  }
}
</style>
