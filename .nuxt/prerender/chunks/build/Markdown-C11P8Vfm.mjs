import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentSlot-B9JnsD_e.mjs';
import './MDCSlot-CQPXy3w9.mjs';
import './node-BhJxMdSJ.mjs';

const _sfc_main = defineComponent({
  name: "Markdown",
  extends: _sfc_main$1,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Markdown-C11P8Vfm.mjs.map
