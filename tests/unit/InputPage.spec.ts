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
    const mockURLString = "https://jsonplaceholder.typicode.com/users";

    await inputField.setValue(mockURLString);
    expect(inputField.element.value).toBe(mockURLString);

    const tree = mount(Tree);

    await form.find(".form__btn").trigger("click");
    await flushPromises();
    expect(tree.findComponent(TreeItem).exists()).toBe(true);
  });

  it("renders error", async () => {
    const form = formMountFactory();
    expect(form.find(".form__input").exists()).toBe(true);

    const input = mount(MyInput);
    const inputField = input.find<HTMLInputElement>("input");
    const mockInvalidURLString_1 = "";
    const mockInvalidURLString_2 = "https:";

    await inputField.setValue(mockInvalidURLString_1);
    await form.find(".form__btn").trigger("click");
    await flushPromises();

    expect(form.find(".form__error").exists()).toBe(true);

    await inputField.setValue(mockInvalidURLString_2);
    await form.find(".form__btn").trigger("click");
    await flushPromises();

    expect(form.find(".form__error").exists()).toBe(true);
  });
});
