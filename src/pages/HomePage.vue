<template>
  <div class="menu">
    <my-button @click="$router.push('/stringpaste')" class="menu__btn _big">
      Paste JSON-string
    </my-button>
    <my-button @click="$router.push('/linkpaste')" class="menu__btn _big">
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
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  &__btn {
    margin-bottom: 40px;
    width: 100%;
    max-width: 400px;
  }
}
</style>
