import { defineComponent, h, useSSRContext } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import __nuxt_component_0 from './TabsHeader-CXeEKQ5x.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
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

const isTag = (slot, tag) => {
  return slot.type && slot.type.tag && slot.type.tag === tag;
};
const _sfc_main = defineComponent({
  data() {
    return {
      activeTabIndex: 0,
      /**
       * A simple number that increases on every changes
       */
      counter: 0
    };
  },
  render() {
    var _a, _b;
    const slots = ((_b = (_a = this.$slots) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a)) || [];
    const tabs = slots.map((slot, index) => {
      var _a2, _b2, _c;
      return {
        label: ((_a2 = slot == null ? void 0 : slot.props) == null ? void 0 : _a2.filename) || ((_b2 = slot == null ? void 0 : slot.props) == null ? void 0 : _b2.label) || `${index}`,
        active: ((_c = slot == null ? void 0 : slot.props) == null ? void 0 : _c.active) || false,
        component: slot
      };
    });
    return h(
      "div",
      {
        class: {
          "code-group": true,
          "first-tab": this.activeTabIndex === 0
        }
      },
      [
        h(__nuxt_component_0, {
          ref: "tabs-header",
          activeTabIndex: this.activeTabIndex,
          tabs,
          "onUpdate:activeTabIndex": ($event) => this.activeTabIndex = $event
        }),
        h(
          "div",
          {
            class: "code-group-content",
            text: this.activeTabIndex
          },
          // Map slots to content children
          slots.map(
            (slot, index) => {
              var _a2, _b2;
              return h(
                "div",
                {
                  // Current slot is displayed, others are hidden
                  style: {
                    display: index === this.activeTabIndex ? "block" : "none"
                  },
                  class: {
                    "": !isTag(slot, "code") && !isTag(slot, "pre")
                  }
                },
                // Display direct children if not a ```code``` block
                [
                  isTag(slot, "code") || isTag(slot, "pre") ? slot : h(
                    "div",
                    {
                      class: {
                        "preview-canvas": true
                      }
                    },
                    [((_b2 = (_a2 = slot.children) == null ? void 0 : _a2.default) == null ? void 0 : _b2.call(_a2)) || slot.children]
                  )
                ]
              );
            }
          )
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a562a098"]]);

export { CodeGroup as default };
//# sourceMappingURL=CodeGroup-B_3Z6H0b.mjs.map
