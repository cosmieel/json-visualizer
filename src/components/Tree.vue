<template>
  <div class="tree">
    <ul class="tree__list">
      <TreeItem :node="treeData" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TreeItem from "@/components/TreeItem.vue";

export default defineComponent({
  name: "Tree",
  components: {
    TreeItem,
  },
  props: {
    treeData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.tree {
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
