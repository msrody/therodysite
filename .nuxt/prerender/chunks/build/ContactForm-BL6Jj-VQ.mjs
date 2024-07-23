import __nuxt_component_0 from './Input-CXFsUtlR.mjs';
import __nuxt_component_1 from './Button-DVVQR2WM.mjs';
import { _ as _export_sfc, m as useAppConfig, f as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
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
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    submitButtonText: {
      type: String,
      default: "Send message"
    },
    fields: {
      type: Array,
      default: () => [
        {
          type: "text",
          model: "name",
          name: "Name",
          placeholder: "Your name",
          required: true,
          layout: "default"
        },
        {
          type: "email",
          model: "email",
          name: "Email",
          placeholder: "Your email",
          required: true,
          layout: "default"
        },
        {
          type: "text",
          model: "text",
          name: "Subject",
          required: false,
          layout: "default"
        },
        {
          type: "textarea",
          model: "message",
          name: "Message",
          placeholder: "Your message",
          required: true,
          layout: "big"
        }
      ]
    }
  },
  setup(__props) {
    useAppConfig().alpine;
    const { FORMSPREE_URL } = useRuntimeConfig().public;
    if (!FORMSPREE_URL) {
      console.warn("No FORMSPREE_URL provided");
    }
    const status = ref();
    const props = __props;
    const form = reactive(props.fields.map((v) => ({ ...v, data: "" })));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = __nuxt_component_0;
      const _component_Button = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "contact-form",
        method: "POST",
        action: unref(FORMSPREE_URL)
      }, _attrs))} data-v-7f28306c><div class="inputs" data-v-7f28306c><!--[-->`);
      ssrRenderList(unref(form), (field, index) => {
        _push(ssrRenderComponent(_component_Input, {
          key: index,
          modelValue: field.data,
          "onUpdate:modelValue": ($event) => field.data = $event,
          field
        }, null, _parent));
      });
      _push(`<!--]--></div><div data-v-7f28306c>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: !unref(FORMSPREE_URL)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(status) ? unref(status) : __props.submitButtonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(status) ? unref(status) : __props.submitButtonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f28306c"]]);

export { ContactForm as default };
//# sourceMappingURL=ContactForm-BL6Jj-VQ.mjs.map
