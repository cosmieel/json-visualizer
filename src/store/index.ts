import { reactive, ref } from "vue";

const jsonOutputState = reactive({
  jsonText: {},
  jsonUrl: {},
});

const urlErrorMsg = ref("")

export default {
  jsonOutputState,
  urlErrorMsg
};
