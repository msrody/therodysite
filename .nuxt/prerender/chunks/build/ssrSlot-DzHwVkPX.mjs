import { ssrRenderSlot as ssrRenderSlot$1 } from 'file:///home/msrody/Workspace/therodysite/node_modules/vue/server-renderer/index.mjs';
import { f as flatUnwrap } from './node-BhJxMdSJ.mjs';

const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};

export { ssrRenderSlot as s };
//# sourceMappingURL=ssrSlot-DzHwVkPX.mjs.map
