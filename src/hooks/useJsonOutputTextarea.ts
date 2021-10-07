import { inject, toRef, onMounted, watch } from "vue";
import { Store } from "@/store";

export function useJsonOutputTextarea(): Record<string, unknown> {
  const store: Store = inject("store");
  const output = toRef(store.stateTextarea, "jsonOutput");
  const inputText = toRef(store.stateTextarea, "inputText");
  const errorMessage = toRef(store.stateTextarea, "errorMessage");
  const visualize = toRef(store.methodsTextarea, "visualizeJson");

  onMounted(() => {
    store.methodsTextarea.onMountedVisualize();
  });

  watch(inputText, (newString) => {
    localStorage.inputText = newString;
  });

  return {
    store,
    output,
    inputText,
    errorMessage,
    visualize,
  };
}
