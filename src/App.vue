<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/stringpaste">JSON-string</router-link>
    <router-link to="/linkpaste">JSON-url</router-link>
  </div>
  <main class="app">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import store from "@/store";

export default defineComponent({
  setup() {
    provide("store", store);
  },
});
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #f6fff7;
}
input,
textarea {
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  outline: none;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
</style>
