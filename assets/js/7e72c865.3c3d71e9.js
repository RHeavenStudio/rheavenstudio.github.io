"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[7696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Setting up Heaven Studio",s={unversionedId:"setting",id:"setting",title:"Setting up Heaven Studio",description:"Heaven Studio is currently in a beta state, we do not have any public releases as of right now, but we have nightly builds that you can grab from our GitHub Actions, please select your operating system accordingly:",source:"@site/docs/2_setting.md",sourceDirName:".",slug:"/setting",permalink:"/docs/setting",draft:!1,tags:[],version:"current",lastUpdatedBy:"Saraistupid",lastUpdatedAt:1676029816,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting started with Heaven Studio",permalink:"/docs/getting-started"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-heaven-studio"},"Setting up Heaven Studio"),(0,a.kt)("p",null,"Heaven Studio is currently in a beta state, we do not have any public releases as of right now, but we have nightly builds that you can grab from our GitHub Actions, please select your operating system accordingly:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightly.link/RHeavenStudio/HeavenStudio/workflows/windows/master/StandaloneWindows64-build.zip"},"Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightly.link/RHeavenStudio/HeavenStudio/workflows/macos/master/StandaloneOSX-build.zip"},"MacOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nightly.link/RHeavenStudio/HeavenStudio/workflows/linux/master/StandaloneLinux64-build.zip"},"Linux"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Non-Windows users please note that the nightly builds have an issue with rendering some minigames (such as Karate Man) on non-Windows operating systems, please build the level editor by yourself by following this guide right ",(0,a.kt)("a",{parentName:"strong",href:"../docs-contributing/setup/introduction"},"here"),".")))}d.isMDXComponent=!0}}]);