import{u as m,M as c,I as p,d as i,aa as u,r as l,N as e,l as d}from"./atko5KHz.js";import{u as f}from"./CYQkGGJx.js";import y from"./BUBXrC5I.js";import g from"./D4NCtdvO.js";import"./Cj1MYF1z.js";import"./0jp38JmH.js";import"./BNEzXghB.js";import"./DtbMuE5z.js";import"./Caj0K4WR.js";import"./Dmhrn39x.js";import"./2ETV-d1z.js";import"./BSrJpiP4.js";import"./CMn8j0aM.js";import"./h92mkR7A.js";import"./CELcIRbp.js";import"./C3dwwhUU.js";async function h(o){m();const t=c(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=d(_,[["__scopeId","data-v-9ca9b996"]]);export{E as default};
