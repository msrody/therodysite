import { unref, computed, defineComponent, resolveComponent, ref, h, useSSRContext } from "vue";
import { b as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-BjHMkoHA.js";
import Ellipsis from "./Ellipsis-7BTXM6W5.js";
import ComponentPlaygroundData from "./ComponentPlaygroundData-C_hfWr5L.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "ohash";
import "destr";
import "klona";
import "cookie-es";
import "nanoid";
import "scule";
import "vue/server-renderer";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./TabsHeader-CXeEKQ5x.js";
import "./ComponentPlaygroundProps-BskCkEV4.js";
import "./ProseH4-BBxPjFIr.js";
import "./ProseCodeInline-BP__gfot.js";
import "./Badge-CB9V6r67.js";
import "./MDCSlot-CQPXy3w9.js";
import "./node-BhJxMdSJ.js";
import "./ssrSlot-DzHwVkPX.js";
import "./ProseP-B_hLfLSR.js";
import "@vueuse/core";
import "./ComponentPlaygroundSlots-LQAtWwPl.js";
import "./ComponentPlaygroundTokens-Dpp38m-H.js";
async function useComponentMeta(componentName) {
  useNuxtApp();
  const _componentName = unref(componentName);
  {
    const { data } = await useAsyncData(
      `nuxt-component-meta${_componentName ? `-${_componentName}` : ""}`,
      () => {
        return $fetch(`/api/component-meta${_componentName ? `/${_componentName}` : ""}`);
      }
    );
    return computed(() => data.value);
  }
}
const _sfc_main = defineComponent({
  props: {
    component: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const as = computed(() => resolveComponent(props.component));
    const formProps = ref({
      ...props.props
    });
    const componentData = await useComponentMeta(props.component);
    return {
      as,
      formProps,
      componentData
    };
  },
  render(ctx) {
    const componentSlots = Object.entries(this.$slots).reduce(
      (acc, [key, slot]) => {
        if (key.startsWith("component-")) {
          const slotKey = key.replace("component-", "");
          acc[slotKey] = slot;
        }
        return acc;
      },
      {}
    );
    return h(
      "div",
      {
        class: "component-playground"
      },
      [
        h(
          "div",
          {
            class: "component-playground-wrapper"
          },
          [
            h(
              Ellipsis,
              {
                class: "component-playground-ellipsis",
                blur: "5vw",
                height: "100%",
                width: "100%"
              }
            ),
            h(
              ctx.as,
              {
                ...ctx.formProps,
                class: "component-playground-component"
              },
              {
                ...componentSlots
              }
            )
          ]
        ),
        h(
          ComponentPlaygroundData,
          {
            modelValue: ctx.formProps,
            componentData: ctx.componentData,
            "onUpdate:modelValue": (val) => ctx.formProps = val
          }
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlayground = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ca9b996"]]);
export {
  ComponentPlayground as default
};
//# sourceMappingURL=ComponentPlayground-9aIhaXi7.js.map
