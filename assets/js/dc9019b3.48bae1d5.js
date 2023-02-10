"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[6677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Strings",s={unversionedId:"guidelines/strings",id:"guidelines/strings",title:"Strings",description:"Use string interpolation to concatenate short strings.",source:"@site/docs-contributing/guidelines/4_strings.md",sourceDirName:"guidelines",slug:"/guidelines/strings",permalink:"/docs-contributing/guidelines/strings",draft:!1,tags:[],version:"current",lastUpdatedBy:"Braedon Lewis",lastUpdatedAt:1676055917,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commenting",permalink:"/docs-contributing/guidelines/commenting"},next:{title:"Implicitly Typed Local Variables",permalink:"/docs-contributing/guidelines/implicity-typed-local-variables"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"strings"},"Strings"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated"},(0,a.kt)("inlineCode",{parentName:"a"},"string interpolation"))," to concatenate short strings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'string remixInfo = $"Title: {Beatmap.properties["remixtitle"]}, Creator: {Beatmap.properties["remixauthor"]}";\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Path.Combine")," to concatenate system and local paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'string filtersPath = Path.Combine("Application.streamingAssetsPath", "Filters");\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When appending strings in loops, use a ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder"},(0,a.kt)("inlineCode",{parentName:"a"},"StringBuilder"))," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var text = "hello";\nvar manyOfText = new StringBuilder();\nfor (var i = 0; i < 1337; i++)\n{\n    manyOfText.Append(text);\n}\nDebug.Log(manyOfText);\n')))}d.isMDXComponent=!0}}]);