<template>
  <nav class="nav">
    <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/stringpaste" class="nav__link">JSON-string</router-link>
    <router-link to="/linkpaste" class="nav__link">JSON-url</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 40px;
  background: #00a69a;
  display: flex;
  font-size: 20px;
  text-transform: uppercase;

  &__link {
    color: #fff;
    text-decoration: none;
    margin-left: 50px;
    transition: color 0.2s ease-out, text-shadow 0.2s ease-out;

    &:first-child {
      margin-left: 0;
      margin-right: auto;
    }

    &:hover {
      color: #ffd38c;
    }

    &.router-link-active {
      text-shadow: 2px 1px #ffd38c;
    }
  }
}
</style>
