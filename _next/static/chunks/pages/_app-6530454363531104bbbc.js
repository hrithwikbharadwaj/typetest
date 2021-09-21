(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{40425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return a}});var r=n(67294),o=n(9008),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),a=function(){return(0,r.useContext)(i)},s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,o=void 0!==n&&n,a=e.enableSystem,s=void 0===a||a,f=e.storageKey,m=void 0===f?"theme":f,d=e.themes,h=void 0===d?["light","dark"]:d,p=e.defaultTheme,v=void 0===p?"light":p,y=e.attribute,g=void 0===y?"data-theme":y,b=e.value,w=e.children,S=(0,r.useState)((function(){return l(m)})),x=S[0],j=S[1],k=(0,r.useState)((function(){return l(m)})),O=k[0],T=k[1],_=b?Object.values(b):h,E=(0,r.useCallback)((function(e,t){void 0===t&&(t=!0);var n=(null==b?void 0:b[e])||e,r=o?u():null;if(t)try{localStorage.setItem(m,e)}catch(e){}var i,a=document.documentElement;"class"===g?((i=a.classList).remove.apply(i,_),a.classList.add(n)):a.setAttribute(g,n),null==r||r()}),[]),C=(0,r.useCallback)((function(e){var t=e.matches?"dark":"light";T(t),"system"===x&&E(t,!1)}),[x]);(0,r.useEffect)((function(){if(s){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(C),C(e),function(){return e.removeListener(C)}}}),[C]);var P=(0,r.useCallback)((function(e){t||(E(e),j(e))}),[]);return(0,r.useEffect)((function(){var e=function(e){e.key===m&&P(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[]),r.createElement(i.Provider,{value:{theme:x,setTheme:P,forcedTheme:t,resolvedTheme:"system"===x?O:x,themes:s?[].concat(h,["system"]):h,systemTheme:s?O:void 0}},r.createElement(c,{forcedTheme:t,storageKey:m,attribute:g,value:b,enableSystem:s,defaultTheme:v,attrs:_}),w)},c=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,i=e.attribute,a=e.enableSystem,s=e.defaultTheme,c=e.value,l="class"===i?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",u=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===i?"d.add("+n+")":"d.setAttribute('"+i+"', "+n+")"};return r.createElement(o.default,null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+l+u(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+l+"var e=localStorage.getItem('"+n+"');if(!e)return localStorage.setItem('"+n+"','"+s+"'),"+u(s)+';if("system"===e){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?'+u("dark")+":"+u("light")+"}else "+(c?"var x="+JSON.stringify(c)+";":"")+u(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+l+'var t=localStorage.getItem("'+n+'");if(!t)return localStorage.setItem("'+n+'","'+s+'"),'+u(s)+";"+(c?"var x="+JSON.stringify(c)+";":"")+u(c?"x[t]":"t",!0)+"}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),l=function(e){if("undefined"!=typeof window){var t;try{t=localStorage.getItem(e)||void 0}catch(e){}return t}},u=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(e),document.head.removeChild(e)}}},66315:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(92809),o=(n(67294),n(40425)),i=n(9008),a=n(93127),s=n(85893),c=function(){return(0,s.jsxs)(i.default,{children:[(0,s.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",rel:"stylesheet"}),a.Rq&&Object.values(a.Rq).map((function(e){return(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=".concat(e.split(" ").join("+"),":wght@400;500;700;800&display=swap"),rel:"stylesheet"})})),(0,s.jsx)("link",{href:"https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css",rel:"stylesheet"})]})};n(43146),n(24090);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.Component,n=e.pageProps;return(0,s.jsxs)(o.f,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(t,u({},n))]})}},93127:function(e,t,n){"use strict";n.d(t,{Rq:function(){return r},g6:function(){return o}});var r={inter:"Inter",libre_caslon_text:"Libre Caslon Text",space_mono:"Space Mono",quicksand:"Quicksand"},o={title:{title:"Title",styles:{fontSize:80,color:"default",fontWeight:800,letterSpacing:-2.5,lineHeight:"90px"}},subtitle1:{title:"Subtitle 1",styles:{fontSize:24,color:"gray",lineHeight:1.4}},subtitle2:{title:"Subtitle 2",styles:{fontSize:20,color:"gray",lineHeight:1.4}},subtitle3:{title:"Subtitle 3",styles:{fontSize:16,color:"gray"}},paragraph:{title:"Paragraph",styles:{fontSize:16,color:"default"}},small:{title:"Small Text",styles:{fontSize:13,color:"default"}}}},76363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(66315)}])},43146:function(){},24090:function(){},9008:function(e,t,n){e.exports=n(70639)},92809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(76363),t(34651)}));var n=e.O();_N_E=n}]);