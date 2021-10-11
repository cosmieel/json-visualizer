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
  parseJson: async (input: string): Promise<Record<string, unknown>> => {
    return Array.isArray(JSON.parse(input)) && JSON.parse(input).length === 1
      ? JSON.parse(String(input))[0]
      : JSON.parse(String(input));
  },
  visualizeJson: async (): Promise<void> => {
    try {
      stateTextarea.jsonOutput = await methodsTextarea.parseJson(
        stateTextarea.inputText
      );

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
      stateTextarea.jsonOutput = await methodsTextarea.parseJson(
        stateTextarea.inputText
      );
    }
  },
};

const stateUrl = reactive({
  jsonOutput: {},
  inputText: "",
  errorMessage: "",
});

const methodsUrl = {
  getData: (data: Record<string, unknown>): Record<string, unknown> => {
    return Array.isArray(data) && data.length === 1 ? data[0] : data;
  },
  visualizeJson: async (): Promise<void> => {
    try {
      const { href } = new URL(stateUrl.inputText);
      const response = await axios.get(href);
      stateUrl.jsonOutput = methodsUrl.getData(response.data);

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
