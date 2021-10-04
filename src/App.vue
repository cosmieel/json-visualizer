<template>
  <Navbar />
  <main class="app">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import store from "@/store";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
  setup() {
    provide("store", store);
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  padding-top: 32px;
  padding-bottom: 60px;
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
