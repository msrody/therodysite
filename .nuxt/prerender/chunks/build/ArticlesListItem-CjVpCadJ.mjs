import { _ as _export_sfc, j as useContentPreview, a as __nuxt_component_0$3, k as _sfc_main$a } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import { f as formatDate } from './date-BJnj8NYw.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
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
  __name: "ArticlesListItem",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true,
      validator: (value) => {
        if ((value == null ? void 0 : value._path) && value.title) {
          return true;
        }
        return false;
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const id = computed(() => {
      var _a, _b;
      return ((_a = useContentPreview()) == null ? void 0 : _a.isEnabled()) ? (_b = props.article) == null ? void 0 : _b._id : void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_NuxtImg = _sfc_main$a;
      if (__props.article._path && __props.article.title) {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: { "featured": __props.featured },
          "data-content-id": unref(id)
        }, _attrs))} data-v-6a1f6a12>`);
        if (__props.article.cover) {
          _push(`<div class="image" data-v-6a1f6a12>`);
          if ((_a = __props.article) == null ? void 0 : _a.badges) {
            _push(`<div data-v-6a1f6a12><!--[-->`);
            ssrRenderList(__props.article.badges, (badge, index) => {
              _push(`<span style="${ssrRenderStyle({
                backgroundColor: (badge == null ? void 0 : badge.bg) || "rgba(0, 0, 0, 0.3)",
                color: (badge == null ? void 0 : badge.color) || "white"
              })}" data-v-6a1f6a12>${ssrInterpolate(typeof badge === "string" ? badge : badge.content)}</span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.article._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtImg, {
                    src: __props.article.cover,
                    alt: __props.article.title,
                    width: "16",
                    height: "9"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="content" data-v-6a1f6a12>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path,
          class: "headline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 data-v-6a1f6a12${_scopeId}>${ssrInterpolate(__props.article.title)}</h1>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(__props.article.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="description" data-v-6a1f6a12>${ssrInterpolate(__props.article.description)}</p><time data-v-6a1f6a12>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.article.date))}</time></div></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/ArticlesListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a1f6a12"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ArticlesListItem-CjVpCadJ.mjs.map
