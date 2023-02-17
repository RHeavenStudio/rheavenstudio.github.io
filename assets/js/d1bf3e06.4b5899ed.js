"use strict";(self.webpackChunkheavenstudio_docs=self.webpackChunkheavenstudio_docs||[]).push([[3030],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={},o="EasingFunction",l={unversionedId:"api/util/easingfunction/easingFunction",id:"api/util/easingfunction/easingFunction",title:"EasingFunction",description:'Used to lerp between 2 or more points using a concept known as "easing".',source:"@site/docs-contributing/api/util/easingfunction/easingFunction.md",sourceDirName:"api/util/easingfunction",slug:"/api/util/easingfunction/",permalink:"/docs-contributing/api/util/easingfunction/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnimationHelpers",permalink:"/docs-contributing/api/util/animationhelpers/animationhelperfunctions"},next:{title:"Ease",permalink:"/docs-contributing/api/util/easingfunction/ease"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Public Members",id:"public-members",level:2}],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"easingfunction"},"EasingFunction"),(0,i.kt)("p",null,'Used to lerp between 2 or more points using a concept known as "easing".'),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using UnityEngine;\n\nusing HeavenStudio.Util;\n\nnamespace HeavenStudio\n{\n    public class ExampleGame : Minigame\n    {\n        private EasingFunction.Function _easeFunc;\n\n        public void Start()\n        {\n            _easeFunc = EasingFunction.GetEasingFunction(EasingFunction.Ease.EaseOutExpo);\n\n            // Every two seconds, move the object 8 units to the right using EaseOutExpo.\n            // _easeFunc in this instance, is similar to UnityEngine.Mathf.Lerp. \n            float normalizedTime = Mathf.Repeat(0, 2);\n            transform.position = new Vector3(_easeFunc(0, 8, normalizedTime), 0, 0);\n        }\n    }\n}\n\n")),(0,i.kt)("h2",{id:"public-methods"},"Public Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Info"),(0,i.kt)("th",{parentName:"tr",align:null},"Returns"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GetEasingFunction"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the function associated to the easingFunction enum."),(0,i.kt)("td",{parentName:"tr",align:null},"EasingFunction.Function")))),(0,i.kt)("h2",{id:"public-members"},"Public Members"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Info"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"ease"},"Ease")),(0,i.kt)("td",{parentName:"tr",align:null},"Enum used to define the ",(0,i.kt)("inlineCode",{parentName:"td"},"easingFunction")," in ",(0,i.kt)("inlineCode",{parentName:"td"},"EasingFunction.GetEasingFunction"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"enum")))))}m.isMDXComponent=!0}}]);