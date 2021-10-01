<template>
  <div>
    <button @click="$router.push('/')">Home</button>
    <button @click="$router.push('/stringpaste')">Paste JSON-string</button>
    <button @click="$router.push('/linkpaste')">Paste URL</button>
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

<style scoped></style>
