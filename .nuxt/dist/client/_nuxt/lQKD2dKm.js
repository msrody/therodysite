import w from"./-vhHDAbJ.js";import k from"./CsUZDboJ.js";import v from"./DtbMuE5z.js";import{u as I}from"./CYQkGGJx.js";import{d as A,Y as S,I as g,M as c,c as a,e as r,f as o,h as i,F as B,Z as C,k as e,w as u,p as L,j as N,s as b,$ as V,X as F,l as P}from"./atko5KHz.js";import"./BcWussCh.js";const T=t=>(L("data-v-eba26087"),t=t(),N(),t),Y={key:0,class:"articles-list"},Z={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=S(async()=>I(_.path,async()=>await b(V(_.path)).sort({date:-1}).find(),"$QKZ6BwmNRx")),s=await s,l(),s),n=g(()=>m.value||[]);return(E,K)=>{var d;const p=w,h=k,f=v;return(d=c(n))!=null&&d.length?(a(),r("div",Y,[o("div",Z,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(B,null,C(c(n).slice(1),(y,x)=>(a(),F(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),H=P(D,[["__scopeId","data-v-eba26087"]]);export{H as default};
