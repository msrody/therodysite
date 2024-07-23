import { ssrRenderSlot as ssrRenderSlot$1 } from "vue/server-renderer";
import { f as flatUnwrap } from "./node-BhJxMdSJ.js";
const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};
export {
  ssrRenderSlot as s
};
//# sourceMappingURL=ssrSlot-DzHwVkPX.js.map
