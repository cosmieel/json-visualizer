import { shallowMount, flushPromises, mount } from "@vue/test-utils";
import store from "@/store";
import VFocus from "@/directives/VFocus";
import TextareaPage from "@/pages/TextareaPage.vue";
import FormTextarea from "@/components/FormTextarea.vue";
import MyTextarea from "@/components/UI/MyTextarea.vue";
import Tree from "@/components/Tree.vue";
import TreeItem from "@/components/TreeItem.vue";

function mountFactory(component) {
  return shallowMount(component, {
    global: {
      provide: {
        'store': store,
      }
    },
  });
}

describe("TextareaPage.vue", () => {
  
  it("renders TextareaPage", () => {
    const wrapper = mountFactory(TextareaPage);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(FormTextarea).exists()).toBe(true);
    expect(wrapper.findComponent(Tree).exists()).toBe(true);
  });

  it("renders JSON-tree on form button click", async () => {
    const form = mount(FormTextarea, {
      global: {
        provide: {
          'store': store,
        },
        directives: {
          'focus': VFocus
        }
      },
    });
    expect(form.find('.form__textarea').exists()).toBe(true);
    
    const textarea = mount(MyTextarea)
    const textareaInput = textarea.find<HTMLTextAreaElement>('textarea')
    const mockJSONString = `[
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    ]`
    
    await textareaInput.setValue(mockJSONString)
    expect(textareaInput.element.value).toBe(mockJSONString)

    const tree = mount(Tree)

    await form.find('.form__btn').trigger('click')
    expect(tree.findComponent(TreeItem).exists()).toBe(true);
  })

  it("renders error", async () => {
    const form = mount(FormTextarea, {
      global: {
        provide: {
          'store': store,
        },
        directives: {
          'focus': VFocus
        }
      },
    });
    expect(form.find('.form__textarea').exists()).toBe(true);

    await form.find('.form__btn').trigger('click')
    expect(form.find('.form__error').exists()).toBe(true);
    
    const textarea = mount(MyTextarea)
    const textareaInput = textarea.find<HTMLTextAreaElement>('textarea')
    const mockInvalidJSONString = '{[]}'
    
    await textareaInput.setValue(mockInvalidJSONString)
    await form.find('.form__btn').trigger('click')
    expect(form.find('.form__error').exists()).toBe(true);
  })
});
