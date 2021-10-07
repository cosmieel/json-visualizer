import { shallowMount, flushPromises, mount } from "@vue/test-utils";
import store from "@/store";
import VFocus from "@/directives/VFocus";
import InputPage from "@/pages/InputPage.vue";
import FormUrl from "@/components/FormUrl.vue";
import MyInput from "@/components/UI/MyInput.vue";
import Tree from "@/components/Tree.vue";
import TreeItem from "@/components/TreeItem.vue";

function mountFactory(component) {
  return shallowMount(component, {
    global: {
      provide: {
        store: store,
      },
    },
  });
}
function formMountFactory() {
  return mount(FormUrl, {
    global: {
      provide: {
        store: store,
      },
      directives: {
        focus: VFocus,
      },
    },
  });
}

describe("InputPage.vue", () => {
  it("renders InputPage", () => {
    const wrapper = mountFactory(InputPage);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(FormUrl).exists()).toBe(true);
    expect(wrapper.findComponent(Tree).exists()).toBe(true);
  });

  it("renders JSON-tree on form button click", async () => {
    const form = formMountFactory();
    expect(form.find(".form__input").exists()).toBe(true);

    const input = mount(MyInput);
    const inputField = input.find<HTMLInputElement>("input");
    const mockURLString = "https://jsonplaceholder.typicode.com/users?_limit=1";

    await inputField.setValue(mockURLString);
    expect(inputField.element.value).toBe(mockURLString);

    const tree = mount(Tree);

    await form.find(".form__btn").trigger("click");
    await flushPromises();
    expect(tree.findComponent(TreeItem).exists()).toBe(true);
  });

  it("renders error", async () => {
    const spy = jest.spyOn(store.methodsUrl, "visualizeJson");
    const form = formMountFactory();
    expect(form.find(".form__input").exists()).toBe(true);

    const input = mount(MyInput);
    const inputField = input.find<HTMLInputElement>("input");
    const mockInvalidURLString = "asdgasd";

    await inputField.setValue(mockInvalidURLString);
    await form.find(".form__btn").trigger("click");
    await store.methodsUrl.visualizeJson().catch((e) => console.log(e));
    await flushPromises();

    expect(form.find(".form__error").exists()).toBe(true);

    spy.mockRestore();
  });
});
