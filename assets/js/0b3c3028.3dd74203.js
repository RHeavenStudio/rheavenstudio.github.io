"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[6069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Installation",l={unversionedId:"setup/git/mac/git/installation",id:"setup/git/mac/git/installation",title:"Installation",description:"This can get a bit hard for the average MacOS user, but stick with me here.",source:"@site/docs-contributing/setup/git/mac/git/1_installation.md",sourceDirName:"setup/git/mac/git",slug:"/setup/git/mac/git/installation",permalink:"/docs-contributing/setup/git/mac/git/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Saraistupid",lastUpdatedAt:1675980104,formattedLastUpdatedAt:"Feb 9, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs-contributing/category/git-1"},next:{title:"Linux",permalink:"/docs-contributing/category/linux"}},s={},c=[{value:"Installing the Brew package manager",id:"installing-the-brew-package-manager",level:3},{value:"Installing Git",id:"installing-git",level:3},{value:"Cloning the repository",id:"cloning-the-repository",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This can get a bit hard for the average MacOS user, but stick with me here."),(0,a.kt)("h3",{id:"installing-the-brew-package-manager"},"Installing the Brew package manager"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the terminal"),(0,a.kt)("li",{parentName:"ol"},"Paste this command into the terminal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Please note when it asks for your password, put your MacOS login password, the password is hidden while you type it due to security and privacy reasons, remember to press enter on your keyboard after you enter your password."),(0,a.kt)("h3",{id:"installing-git"},"Installing Git"),(0,a.kt)("p",null,"After Brew finishes installing, you can install Git."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the terminal"),(0,a.kt)("li",{parentName:"ol"},"Paste this command into the terminal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo brew install git\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Congratulations, you got Git installed on your MacOS machine. God forbid you think this is pseudoscience.")),(0,a.kt)("h2",{id:"cloning-the-repository"},"Cloning the repository"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your fork on GitHub."),(0,a.kt)("li",{parentName:"ol"},"Follow the image below to copy the link of your fork.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"copy",src:n(5348).Z,width:"414",height:"344"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"After copying, run the command below in the terminal.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone THE_LINK_YOU_COPIED_HERE\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: this will clone the repository into your home folder, which is accessed in Finder by pressing Shift + \u2318 + H")))}g.isMDXComponent=!0},5348:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloning-a91c57f6d8c2704e54983ca2aa78de47.png"}}]);