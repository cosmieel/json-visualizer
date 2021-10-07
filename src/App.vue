<template>
  <div class="app">
    <Navbar />
    <main class="app__main">
      <router-view></router-view>
    </main>
  </div>
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

.app__main {
  padding-top: 32px;
  padding-bottom: 60px;
}
body {
  background: #f6fff7;
}
h2 {
  text-align: center;
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 40px;
  color: #ed9300;
  text-shadow: 3px 3px #00a69a;
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
