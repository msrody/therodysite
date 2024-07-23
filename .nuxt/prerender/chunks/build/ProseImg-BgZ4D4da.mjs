import { _ as _export_sfc, f as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
import { withBase } from 'file:///home/msrody/Workspace/therodysite/node_modules/ufo/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/h3/dist/index.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/devalue/index.js';
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
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        src: unref(refinedSrc),
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))} data-v-2ef15301>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseImg = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ef15301"]]);

export { ProseImg as default };
//# sourceMappingURL=ProseImg-BgZ4D4da.mjs.map
