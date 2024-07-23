import { n as usePinceauRuntime, k as _sfc_main$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const _6Li_cols = computed(() => ((props = __$pProps) => props.images.length < 2 ? props.images.length : 2)());
    const __$pProps = __props;
    const { $pinceau } = usePinceauRuntime(__$pProps, void 0, { _6Li_cols });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["gallery", [unref($pinceau)]]
      }, _attrs))} data-v-667ae570><div class="layout" data-v-667ae570><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(ssrRenderComponent(_component_NuxtImg, {
          key: index,
          src: image,
          width: 16,
          height: 9
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-667ae570"]]);
export {
  Gallery as default
};
//# sourceMappingURL=Gallery-DDOYrTKP.js.map
