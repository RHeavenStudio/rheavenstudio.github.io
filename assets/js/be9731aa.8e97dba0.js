"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[7591],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?i.createElement(m,l(l({ref:e},c),{},{components:n})):i.createElement(m,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8410:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},l="Installing Unity",o={unversionedId:"setup/unity/linux/installation",id:"setup/unity/linux/installation",title:"Installing Unity",description:"Installing UnityHub",source:"@site/docs-contributing/setup/unity/linux/1_installation.md",sourceDirName:"setup/unity/linux",slug:"/setup/unity/linux/installation",permalink:"/docs-contributing/setup/unity/linux/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/docs-contributing/category/linux-1"},next:{title:"Opening the project in Unity",permalink:"/docs-contributing/category/opening-the-project-in-unity"}},s={},u=[{value:"Installing UnityHub",id:"installing-unityhub",level:2},{value:"Debian/Ubuntu",id:"debianubuntu",level:3},{value:"RHEL/CentOS",id:"rhelcentos",level:3},{value:"Fedora",id:"fedora",level:3},{value:"Arch Linux/Arch-based/Manjaro/EndeavourOS",id:"arch-linuxarch-basedmanjaroendeavouros",level:3},{value:"Installing Unity itself",id:"installing-unity-itself",level:2},{value:"Common possible issues",id:"common-possible-issues",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-unity"},"Installing Unity"),(0,r.kt)("h2",{id:"installing-unityhub"},"Installing UnityHub"),(0,r.kt)("h3",{id:"debianubuntu"},"Debian/Ubuntu"),(0,r.kt)("p",null,"Follow this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/hub/manual/InstallHub.html#install-hub-linux"},"webpage"),"."),(0,r.kt)("h3",{id:"rhelcentos"},"RHEL/CentOS"),(0,r.kt)("p",null,"Follow this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/hub/manual/InstallHub.html#install-hub-linux"},"webpage"),"."),(0,r.kt)("h3",{id:"fedora"},"Fedora"),(0,r.kt)("p",null,"Follow this ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/Fedora/comments/wupxy7/how_to_install_correctly_unity_hub_on_fedora/"},"tutorial"),"."),(0,r.kt)("h3",{id:"arch-linuxarch-basedmanjaroendeavouros"},"Arch Linux/Arch-based/Manjaro/EndeavourOS"),(0,r.kt)("p",null,"Assuming you use ",(0,r.kt)("inlineCode",{parentName:"p"},"paru")," as your AUR helper (like a useful human being)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"paru -S unityhub\n")),(0,r.kt)("h2",{id:"installing-unity-itself"},"Installing Unity itself"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Unity account from ",(0,r.kt)("a",{parentName:"li",href:"https://id.unity.com/account/new"},"this webpage"),"."),(0,r.kt)("li",{parentName:"ol"},"Launch Unity Hub."),(0,r.kt)("li",{parentName:"ol"},"Login with your Unity account."),(0,r.kt)("li",{parentName:"ol"},'Go to "Installs".')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"installs",src:n(8888).Z,width:"1024",height:"600"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},'Press "Install Editor".')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"editor",src:n(5638).Z,width:"1024",height:"600"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Select the latest 2020.3.xx LTS release.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"version",src:n(7746).Z,width:"1024",height:"600"})),(0,r.kt)("h2",{id:"common-possible-issues"},"Common possible issues"),(0,r.kt)("p",null,"I (the person writing this part of the document) have an issue where Unity can't start at all sometimes or will show empty errors in the project, to solve this, I had to run unityhub using this command right here"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1 unityhub\n")))}d.isMDXComponent=!0},8888:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/firststep-5aba491236af49517e55c2c42da62b98.png"},5638:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/secondstep-02a323ddbd145d1a43ff48f918ff5532.png"},7746:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/thirdstep-f9abe0315be8bfd14dcb0ee28cfe5a6d.png"}}]);