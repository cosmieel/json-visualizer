import { inject, toRef, onMounted, watch } from "vue";
import { Store } from "@/store";

export function useJsonOutputUrl(): Record<string, unknown> {
  const store: Store = inject("store");
  const output = toRef(store.stateUrl, "jsonOutput");
  const inputUrl = toRef(store.stateUrl, "inputText");
  const errorMessage = toRef(store.stateUrl, "errorMessage");
  const visualize = toRef(store.methodsUrl, "visualizeJson");

  onMounted(() => {
    store.methodsUrl.onMountedVisualize();
  });

  watch(inputUrl, (newString) => {
    localStorage.inputUrl = newString;
  });

  return {
    store,
    output,
    inputUrl,
    errorMessage,
    visualize,
  };
}
