<template>
  <h1>VisualiJSON App</h1>
  <div class="menu">
    <my-button
      @click="$router.push('/stringpaste')"
      class="menu__btn _big"
      data-test="route-stringpaste"
    >
      Paste JSON-string
    </my-button>
    <my-button
      @click="$router.push('/linkpaste')"
      class="menu__btn _big"
      data-test="route-linkpaste"
    >
      Paste URL
    </my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 64px;
  padding-top: 20px;
  color: #ed9300;
  text-shadow: 4px 3px #00a69a;
  letter-spacing: 5px;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  &__btn {
    margin-bottom: 40px;
    width: 100%;
    max-width: 400px;
  }
}
</style>
