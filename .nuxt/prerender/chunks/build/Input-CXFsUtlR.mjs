import { useSSRContext, defineComponent } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/h3/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/devalue/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/ufo/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/destr/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/hookable/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/klona/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/scule/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/defu/dist/defu.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/ohash/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unstorage/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/msrody/Workspace/therodysite/node_modules/pathe/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/shiki/dist/core.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unified/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/mdast-util-to-string/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/micromark/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/micromark-util-character/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/micromark-util-chunked/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/slugify/slugify.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/remark-parse/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/remark-rehype/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/remark-emoji/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/remark-gfm/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/rehype-external-links/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/rehype-raw/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/detab/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/hast-util-to-string/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/github-slugger/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unhead/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/unctx/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/nanoid/index.js';
import 'file:///home/msrody/Workspace/therodysite/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/@iconify/vue/dist/iconify.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.name) {
          return false;
        }
        return true;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-24772345><label${ssrRenderAttr("for", __props.field.name)} data-v-24772345>${ssrInterpolate(__props.field.label)}</label>`);
      if (__props.field.type !== "textarea") {
        _push(`<input${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-24772345>`);
      } else {
        _push(`<textarea${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-24772345>${ssrInterpolate(__props.modelValue)}</textarea>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/data-entry/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24772345"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Input-CXFsUtlR.mjs.map
