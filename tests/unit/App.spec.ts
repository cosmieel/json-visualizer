import { mount, flushPromises } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function mountFactory() {
  return mount(App, {
    global: {
      plugins: [router],
      stubs: {
        FormTextarea: {
          template: "<span></span>",
        },
        FormUrl: {
          template: "<span></span>",
        },
        Tree: {
          template: "<span></span>",
        },
      },
    },
  });
}

describe("App.vue", () => {
  it("renders app", async () => {
    router.push("/");
    await router.isReady();

    const wrapper = mountFactory();

    expect(wrapper.findComponent(App).exists()).toBe(true);
    expect(wrapper.html()).toContain("VisualiJSON App");

    const linkHome = wrapper.find("[data-test='route-home']");
    expect(linkHome.exists()).toBe(true);

    await linkHome.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toContain("VisualiJSON App");

    const buttonStringpaste = wrapper.find(
      ".menu__btn[data-test='route-stringpaste']"
    );
    const buttonLinkpaste = wrapper.find(
      ".menu__btn[data-test='route-linkpaste']"
    );

    expect(buttonStringpaste.exists()).toBe(true);
    expect(buttonLinkpaste.exists()).toBe(true);

    await buttonStringpaste.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toContain("Visualization by JSON-string");

    await buttonLinkpaste.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toContain("Visualization by URL");
  });

  it("renders a TextareaPage via routing", async () => {
    router.push("/");
    await router.isReady();

    const wrapper = mountFactory();
    const linkStringpaste = wrapper.find(
      ".nav__link[data-test='route-stringpaste']"
    );

    expect(linkStringpaste.exists()).toBe(true);

    await linkStringpaste.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toContain("Visualization by JSON-string");
  });

  it("renders an InputPage via routing", async () => {
    router.push("/");
    await router.isReady();

    const wrapper = mountFactory();
    const linkLinkpaste = wrapper.find(
      ".nav__link[data-test='route-linkpaste']"
    );

    expect(linkLinkpaste.exists()).toBe(true);

    await linkLinkpaste.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toContain("Visualization by URL");
  });
});
