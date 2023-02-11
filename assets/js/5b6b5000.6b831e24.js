"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[9991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(5287);const i={},l="Introduction",c={unversionedId:"setup/introduction",id:"setup/introduction",title:"Introduction",description:"You'll need to go through some steps to setup the Heaven Studio project on your computer.",source:"@site/docs-contributing/setup/introduction.md",sourceDirName:"setup",slug:"/setup/introduction",permalink:"/docs-contributing/setup/introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loading the project",permalink:"/docs-contributing/setup/loading/project"},next:{title:"Guidelines",permalink:"/docs-contributing/category/guidelines"}},u={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"You'll need to go through some steps to setup the Heaven Studio project on your computer."),(0,a.kt)("p",null,"Before proceeding, please fork the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/megaminerjenny/HeavenStudio"},"repository")," on GitHub."),(0,a.kt)("p",null,"Then start with installing Git or GitHub Desktop on your machine, select your operating system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./git/windows/introduction"},"Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./git/mac/introduction"},"MacOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./git/linux/introduction"},"Linux"))),(0,a.kt)(o.M,{commaDelimitedContributors:"Saraistupid",lastDateString:"2/9/23",mdxType:"HeaderBadgesWidget"}))}m.isMDXComponent=!0},5287:(e,t,n)=>{n.d(t,{M:()=>i});var r=n(7294),a=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}const i=e=>{let{commaDelimitedContributors:t,lastDateString:n,lastVerifiedDateString:a,lastVerifiedVersionString:i}=e,l={Starpelly:"Starpelly",Saraistupid:"Saraistupid",Zeo:"ThatZeoMan"},c=function(e){return r.createElement("a",{class:"header-badge",href:`https://github.com/${l[e]}`},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+l[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(o,null,(()=>r.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(c):null,r.createElement("br",null),function(e){if(null!=e)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-label"},"Last modified on ",r.createElement("strong",null,new Date(e).toDateString())))}(n),function(e,t){if(null!=e&&null!=t)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using HS ",t))}(a,i),r.createElement("br",null),r.createElement("a",{class:"header-badge",href:`https://github.com/rheavenstudio/rheavenstudio.github.io/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)`},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))))}}}]);