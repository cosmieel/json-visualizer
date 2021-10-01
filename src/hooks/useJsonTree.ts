import { ref, computed } from "vue";

export function useJsonTree(output) {
  const jsonText = ref({});
  const visualizeJson = computed(() => {
    jsonText.value = output;

    return jsonText.value;

    // try {
    // } catch (error) {
    //   console.log(error);

    // }
  });

  return {
    jsonText,
    visualizeJson,
  };
}
