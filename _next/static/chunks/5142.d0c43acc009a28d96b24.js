"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5142],{75142:function(n,t,e){e.r(t);var o=e(80318),r=e(67294),u=e(59240),c=e(96382),i=e(23534),f=e(62693),a=e(85893);t.default=function(n){var t=n.position,e=(0,r.useContext)(i.Eo),l=(0,r.useContext)(f.pj),s=((0,r.useContext)(f.uP),(0,r.useRef)(null)),p=(0,r.useRef)(null),d=(l?2:1)*c.PJ,v=function(){var n;null===(n=window)||void 0===n||n.scrollBy(0,.3*s.current),p.current=null,s.current=null},x=function(n){s.current=n,p.current||(p.current=requestAnimationFrame(v))};(0,r.useEffect)((function(){return function(){cancelAnimationFrame(p.current)}}),[]);var C=(0,u.L)({accept:"block",canDrop:function(){return!0},drop:function(){},collect:function(n){return{canDrop:!!n.canDrop()}},hover:function(n,e){var o=e.getClientOffset();if(o){var r=o.y,u=d,c=window.innerHeight-100;if("top"===t&&r<=u)x(-(u-r));if("bottom"===t&&r>=c)x(r-c)}}}),h=(0,o.Z)(C,2),m=h[0].canDrop,b=h[1];return e?(0,a.jsx)("div",{ref:b,style:{height:"top"===t?d:100,top:"top"===t?0:void 0,bottom:"bottom"===t?0:void 0,position:"fixed",width:"100%",background:"none",zIndex:m?9999:-1,transition:"all 0.5s"}}):(0,a.jsx)(a.Fragment,{})}},23534:function(n,t,e){e.d(t,{Eo:function(){return r}});var o=e(67294),r=(e(85893),(0,o.createContext)(!1))},62693:function(n,t,e){e.d(t,{hM:function(){return r},uP:function(){return u},pj:function(){return c}});var o=e(67294),r=(e(85893),(0,o.createContext)(void 0)),u=(0,o.createContext)(void 0),c=(0,o.createContext)(!1)}}]);