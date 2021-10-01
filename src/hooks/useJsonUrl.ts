import { ref, computed, inject, onMounted } from "vue";
import axios from "axios";

export function useJsonUrl(output) {
  const store: any = inject("store");
  const jsonUrl = store.state.jsonUrl;

  const visualize = async () => {
    try {
      const response = await axios.get(output);
      jsonUrl.value = response.data[0];
    } catch (e: any) {
      console.log(e.message);
      localStorage.removeItem("visualizedurl");
    }
  };

  const getLocalStorage = localStorage.getItem("visualizedurl");
  const cachedJson = String(getLocalStorage);

  // onMounted(() => {
  //   if (getLocalStorage) visualize(cachedJson);
  // });

  return {
    store,
    jsonUrl,
    visualize,
  };
}
