import w from"./Dw7ubA08.js";import k from"./CtUA9lLj.js";import v from"./DW2nBuqd.js";import{u as I}from"./DK0olvw7.js";import{d as g,Y as A,I as S,M as n,b as a,c as r,e as o,g as i,F as C,Z as B,j as e,w as u,p as L,i as N,s as V,$ as b,X as j,l as F}from"./lt6KWAye.js";import"./BcWussCh.js";const P=t=>(L("data-v-c647a58c"),t=t(),N(),t),T={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},q={key:1,class:"tour"},D=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),E=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>I(_.path,async()=>await V(b(_.path)).sort({date:-1}).find(),"$NfHf7rcV4j")),s=await s,l(),s),c=S(()=>m.value||[]);return(H,M)=>{var d;const p=w,f=k,h=v;return(d=n(c))!=null&&d.length?(a(),r("div",T,[o("div",Y,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(C,null,B(n(c).slice(1),(y,x)=>(a(),j(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",q,[D,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=F(E,[["__scopeId","data-v-c647a58c"]]);export{O as default};
