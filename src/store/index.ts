import { reactive } from "vue";
import axios from "axios";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type Store = any;

const stateTextarea = reactive({
  jsonOutput: {},
  inputText: "",
  errorMessage: "",
});

const methodsTextarea = {
  visualizeJson: async (): Promise<void> => {
    try {
      stateTextarea.jsonOutput = await JSON.parse(stateTextarea.inputText)[0];

      localStorage.inputText = stateTextarea.inputText;
      stateTextarea.errorMessage = "";
    } catch (e) {
      stateTextarea.errorMessage = (e as Error).message;
      // localStorage.removeItem("inputText");
    }
  },
  onMountedVisualize: async (): Promise<void> => {
    if (localStorage.inputText) {
      stateTextarea.inputText = await localStorage.inputText;
      stateTextarea.jsonOutput = await JSON.parse(
        String(localStorage.inputText)
      )[0];
    }
  },
};

const stateUrl = reactive({
  jsonOutput: {},
  inputText: "",
  errorMessage: "",
});

const methodsUrl = {
  visualizeJson: async (): Promise<void> => {
    try {
      const { href } = new URL(stateUrl.inputText);
      const response = await axios.get(href);
      stateUrl.jsonOutput = response.data[0];

      localStorage.inputUrl = stateUrl.inputText;
      localStorage.jsonUrlOutput = JSON.stringify(stateUrl.jsonOutput);
      stateUrl.errorMessage = "";
    } catch (e) {
      stateUrl.errorMessage = (e as Error).message;
      // localStorage.removeItem("inputUrl");
    }
  },
  onMountedVisualize: async (): Promise<void> => {
    if (localStorage.inputUrl) {
      stateUrl.inputText = await localStorage.inputUrl;
      stateUrl.jsonOutput = await JSON.parse(localStorage.jsonUrlOutput);
    }
  },
};

export default {
  stateTextarea,
  methodsTextarea,
  stateUrl,
  methodsUrl,
};
