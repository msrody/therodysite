import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 324 324"
  }, _attrs))}><path fill="currentColor" d="M181.767 270h120.444c3.826 0 7.584-.997 10.897-2.893 3.313-1.896 6.064-4.623 7.976-7.907 1.912-3.285 2.918-7.01 2.916-10.801-.002-3.792-1.011-7.516-2.926-10.798L240.187 98.7439c-1.912-3.2832-4.662-6.0097-7.974-7.9054-3.312-1.8956-7.07-2.8936-10.895-2.8936-3.824 0-7.582.998-10.894 2.8936-3.312 1.8957-6.063 4.6222-7.975 7.9054l-20.682 35.5281-40.438-69.4745c-1.913-3.283-4.665-6.0091-7.978-7.9044C130.038 54.9978 126.28 54 122.454 54c-3.825 0-7.583.9978-10.896 2.8931-3.313 1.8953-6.065 4.6214-7.978 7.9044L2.9255 237.601C1.0107 240.883.0017 244.607 0 248.399c-.0017 3.791 1.004 7.516 2.916 10.801 1.912 3.284 4.6628 6.011 7.9758 7.907C14.2047 269.003 17.963 270 21.7886 270h75.605c29.9554 0 52.0464-13.041 67.2474-38.483l36.905-63.345 19.767-33.9L280.637 236.1h-79.091L181.767 270Zm-85.6059-33.935-52.7627-.011L122.49 100.291l39.463 67.881-26.422 45.371c-10.095 16.508-21.563 22.522-39.3699 22.522Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconNuxt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconNuxt as default
};
//# sourceMappingURL=IconNuxt-CnwlPFxd.js.map
