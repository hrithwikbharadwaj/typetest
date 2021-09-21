(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4400], {
        28195: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                if (!e) {
                    var o;
                    if (void 0 === t) o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var a = 0;
                        (o = new Error(t.replace(/%s/g, (function() {
                            return r[a++]
                        })))).name = "Invariant Violation"
                    }
                    throw o.framesToPop = 1, o
                }
            }
            n.d(t, {
                k: function() {
                    return r
                }
            })
        },
        15047: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                var i = n ? n.call(r, e, t) : void 0;
                if (void 0 !== i) return !!i;
                if (e === t) return !0;
                if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                var o = Object.keys(e),
                    a = Object.keys(t);
                if (o.length !== a.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(t), u = 0; u < o.length; u++) {
                    var c = o[u];
                    if (!s(c)) return !1;
                    var l = e[c],
                        f = t[c];
                    if (!1 === (i = n ? n.call(r, l, f, c) : void 0) || void 0 === i && l !== f) return !1
                }
                return !0
            }
            n.d(t, {
                w: function() {
                    return r
                }
            })
        },
        27006: function(e, t) {
            "use strict";
            t.Z = (...e) => t => e.forEach((e => {
                "function" === typeof e ? e(t) : e && "object" === typeof e && (e.current = t)
            }))
        },
        87275: function(e, t, n) {
            "use strict";

            function r(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function i(e) {
                return e instanceof r(e).Element || e instanceof Element
            }

            function o(e) {
                return e instanceof r(e).HTMLElement || e instanceof HTMLElement
            }

            function a(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
            }
            n.d(t, {
                ZP: function() {
                    return xt
                }
            });
            var s = Math.round;

            function u(e, t) {
                void 0 === t && (t = !1);
                var n = e.getBoundingClientRect(),
                    r = 1,
                    i = 1;
                if (o(e) && t) {
                    var a = e.offsetHeight,
                        u = e.offsetWidth;
                    u > 0 && (r = n.width / u || 1), a > 0 && (i = n.height / a || 1)
                }
                return {
                    width: s(n.width / r),
                    height: s(n.height / i),
                    top: s(n.top / i),
                    right: s(n.right / r),
                    bottom: s(n.bottom / i),
                    left: s(n.left / r),
                    x: s(n.left / r),
                    y: s(n.top / i)
                }
            }

            function c(e) {
                var t = r(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function l(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function f(e) {
                return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function d(e) {
                return u(f(e)).left + c(e).scrollLeft
            }

            function p(e) {
                return r(e).getComputedStyle(e)
            }

            function h(e) {
                var t = p(e),
                    n = t.overflow,
                    r = t.overflowX,
                    i = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + i + r)
            }

            function v(e, t, n) {
                void 0 === n && (n = !1);
                var i = o(t),
                    a = o(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.width / e.offsetWidth || 1,
                            r = t.height / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    s = f(t),
                    p = u(e, a),
                    v = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    g = {
                        x: 0,
                        y: 0
                    };
                return (i || !i && !n) && (("body" !== l(t) || h(s)) && (v = function(e) {
                    return e !== r(e) && o(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : c(e);
                    var t
                }(t)), o(t) ? ((g = u(t, !0)).x += t.clientLeft, g.y += t.clientTop) : s && (g.x = d(s))), {
                    x: p.left + v.scrollLeft - g.x,
                    y: p.top + v.scrollTop - g.y,
                    width: p.width,
                    height: p.height
                }
            }

            function g(e) {
                var t = u(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function m(e) {
                return "html" === l(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e)
            }

            function y(e) {
                return ["html", "body", "#document"].indexOf(l(e)) >= 0 ? e.ownerDocument.body : o(e) && h(e) ? e : y(m(e))
            }

            function b(e, t) {
                var n;
                void 0 === t && (t = []);
                var i = y(e),
                    o = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = r(i),
                    s = o ? [a].concat(a.visualViewport || [], h(i) ? i : []) : i,
                    u = t.concat(s);
                return o ? u : u.concat(b(m(s)))
            }

            function w(e) {
                return ["table", "td", "th"].indexOf(l(e)) >= 0
            }

            function x(e) {
                return o(e) && "fixed" !== p(e).position ? e.offsetParent : null
            }

            function k(e) {
                for (var t = r(e), n = x(e); n && w(n) && "static" === p(n).position;) n = x(n);
                return n && ("html" === l(n) || "body" === l(n) && "static" === p(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && o(e) && "fixed" === p(e).position) return null;
                    for (var n = m(e); o(n) && ["html", "body"].indexOf(l(n)) < 0;) {
                        var r = p(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var O = "top",
                E = "bottom",
                S = "right",
                D = "left",
                C = "auto",
                P = [O, E, S, D],
                A = "start",
                T = "end",
                F = "viewport",
                j = "popper",
                I = P.reduce((function(e, t) {
                    return e.concat([t + "-" + A, t + "-" + T])
                }), []),
                _ = [].concat(P, [C]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + A, t + "-" + T])
                }), []),
                M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function L(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function i(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && i(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || i(e)
                })), r
            }

            function B(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var N = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function R() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function z(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    a = void 0 === o ? N : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, N, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        s = [],
                        u = !1,
                        c = {
                            state: o,
                            setOptions: function(n) {
                                var u = "function" === typeof n ? n(o.options) : n;
                                l(), o.options = Object.assign({}, a, o.options, u), o.scrollParents = {
                                    reference: i(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
                                    popper: b(t)
                                };
                                var f = function(e) {
                                    var t = L(e);
                                    return M.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = f.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        i = e.effect;
                                    if ("function" === typeof i) {
                                        var a = i({
                                                state: o,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            u = function() {};
                                        s.push(a || u)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (R(t, n)) {
                                        o.rects = {
                                            reference: v(t, k(n), "fixed" === o.options.strategy),
                                            popper: g(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var i = o.orderedModifiers[r],
                                                    a = i.fn,
                                                    s = i.options,
                                                    l = void 0 === s ? {} : s,
                                                    f = i.name;
                                                "function" === typeof a && (o = a({
                                                    state: o,
                                                    options: l,
                                                    name: f,
                                                    instance: c
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: B((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                l(), u = !0
                            }
                        };
                    if (!R(e, t)) return c;

                    function l() {
                        s.forEach((function(e) {
                            return e()
                        })), s = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var H = {
                passive: !0
            };
            var W = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        i = e.options,
                        o = i.scroll,
                        a = void 0 === o || o,
                        s = i.resize,
                        u = void 0 === s || s,
                        c = r(t.elements.popper),
                        l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && l.forEach((function(e) {
                            e.addEventListener("scroll", n.update, H)
                        })), u && c.addEventListener("resize", n.update, H),
                        function() {
                            a && l.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, H)
                            })), u && c.removeEventListener("resize", n.update, H)
                        }
                },
                data: {}
            };

            function U(e) {
                return e.split("-")[0]
            }

            function q(e) {
                return e.split("-")[1]
            }

            function V(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function $(e) {
                var t, n = e.reference,
                    r = e.element,
                    i = e.placement,
                    o = i ? U(i) : null,
                    a = i ? q(i) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case O:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case E:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case S:
                        t = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case D:
                        t = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = o ? V(o) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                        case A:
                            t[c] = t[c] - (n[l] / 2 - r[l] / 2);
                            break;
                        case T:
                            t[c] = t[c] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return t
            }
            var Y = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = $({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                },
                K = Math.max,
                J = Math.min,
                G = Math.round,
                Z = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function X(e) {
                var t, n = e.popper,
                    i = e.popperRect,
                    o = e.placement,
                    a = e.variation,
                    s = e.offsets,
                    u = e.position,
                    c = e.gpuAcceleration,
                    l = e.adaptive,
                    d = e.roundOffsets,
                    h = !0 === d ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: G(G(t * r) / r) || 0,
                            y: G(G(n * r) / r) || 0
                        }
                    }(s) : "function" === typeof d ? d(s) : s,
                    v = h.x,
                    g = void 0 === v ? 0 : v,
                    m = h.y,
                    y = void 0 === m ? 0 : m,
                    b = s.hasOwnProperty("x"),
                    w = s.hasOwnProperty("y"),
                    x = D,
                    C = O,
                    P = window;
                if (l) {
                    var A = k(n),
                        F = "clientHeight",
                        j = "clientWidth";
                    A === r(n) && "static" !== p(A = f(n)).position && "absolute" === u && (F = "scrollHeight", j = "scrollWidth"), A = A, o !== O && (o !== D && o !== S || a !== T) || (C = E, y -= A[F] - i.height, y *= c ? 1 : -1), o !== D && (o !== O && o !== E || a !== T) || (x = S, g -= A[j] - i.width, g *= c ? 1 : -1)
                }
                var I, _ = Object.assign({
                    position: u
                }, l && Z);
                return c ? Object.assign({}, _, ((I = {})[C] = w ? "0" : "", I[x] = b ? "0" : "", I.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + y + "px)" : "translate3d(" + g + "px, " + y + "px, 0)", I)) : Object.assign({}, _, ((t = {})[C] = w ? y + "px" : "", t[x] = b ? g + "px" : "", t.transform = "", t))
            }
            var Q = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach((function(e) {
                        var n = t.styles[e] || {},
                            r = t.attributes[e] || {},
                            i = t.elements[e];
                        o(i) && l(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                            var t = r[e];
                            !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                        })))
                    }))
                },
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach((function(e) {
                                var r = t.elements[e],
                                    i = t.attributes[e] || {},
                                    a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                        return e[t] = "", e
                                    }), {});
                                o(r) && l(r) && (Object.assign(r.style, a), Object.keys(i).forEach((function(e) {
                                    r.removeAttribute(e)
                                })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            };
            var ee = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function te(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return ee[e]
                }))
            }
            var ne = {
                start: "end",
                end: "start"
            };

            function re(e) {
                return e.replace(/start|end/g, (function(e) {
                    return ne[e]
                }))
            }

            function ie(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && a(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ae(e, t) {
                return t === F ? oe(function(e) {
                    var t = r(e),
                        n = f(e),
                        i = t.visualViewport,
                        o = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        u = 0;
                    return i && (o = i.width, a = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, u = i.offsetTop)), {
                        width: o,
                        height: a,
                        x: s + d(e),
                        y: u
                    }
                }(e)) : o(t) ? function(e) {
                    var t = u(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : oe(function(e) {
                    var t, n = f(e),
                        r = c(e),
                        i = null == (t = e.ownerDocument) ? void 0 : t.body,
                        o = K(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                        a = K(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                        s = -r.scrollLeft + d(e),
                        u = -r.scrollTop;
                    return "rtl" === p(i || n).direction && (s += K(n.clientWidth, i ? i.clientWidth : 0) - o), {
                        width: o,
                        height: a,
                        x: s,
                        y: u
                    }
                }(f(e)))
            }

            function se(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = b(m(e)),
                            n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && o(e) ? k(e) : e;
                        return i(n) ? t.filter((function(e) {
                            return i(e) && ie(e, n) && "body" !== l(e)
                        })) : []
                    }(e) : [].concat(t),
                    a = [].concat(r, [n]),
                    s = a[0],
                    u = a.reduce((function(t, n) {
                        var r = ae(e, n);
                        return t.top = K(r.top, t.top), t.right = J(r.right, t.right), t.bottom = J(r.bottom, t.bottom), t.left = K(r.left, t.left), t
                    }), ae(e, s));
                return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u
            }

            function ue(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ce(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function le(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    a = n.boundary,
                    s = void 0 === a ? "clippingParents" : a,
                    c = n.rootBoundary,
                    l = void 0 === c ? F : c,
                    d = n.elementContext,
                    p = void 0 === d ? j : d,
                    h = n.altBoundary,
                    v = void 0 !== h && h,
                    g = n.padding,
                    m = void 0 === g ? 0 : g,
                    y = ue("number" !== typeof m ? m : ce(m, P)),
                    b = p === j ? "reference" : j,
                    w = e.rects.popper,
                    x = e.elements[v ? b : p],
                    k = se(i(x) ? x : x.contextElement || f(e.elements.popper), s, l),
                    D = u(e.elements.reference),
                    C = $({
                        reference: D,
                        element: w,
                        strategy: "absolute",
                        placement: o
                    }),
                    A = oe(Object.assign({}, w, C)),
                    T = p === j ? A : D,
                    I = {
                        top: k.top - T.top + y.top,
                        bottom: T.bottom - k.bottom + y.bottom,
                        left: k.left - T.left + y.left,
                        right: T.right - k.right + y.right
                    },
                    _ = e.modifiersData.offset;
                if (p === j && _) {
                    var M = _[o];
                    Object.keys(I).forEach((function(e) {
                        var t = [S, E].indexOf(e) >= 0 ? 1 : -1,
                            n = [O, E].indexOf(e) >= 0 ? "y" : "x";
                        I[e] += M[n] * t
                    }))
                }
                return I
            }

            function fe(e, t, n) {
                return K(e, J(t, n))
            }

            function de(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function pe(e) {
                return [O, S, E, D].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var he = z({
                    defaultModifiers: [W, Y, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                i = void 0 === r || r,
                                o = n.adaptive,
                                a = void 0 === o || o,
                                s = n.roundOffsets,
                                u = void 0 === s || s,
                                c = {
                                    placement: U(t.placement),
                                    variation: q(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: i
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, X(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: u
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, X(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: u
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, Q, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                i = n.offset,
                                o = void 0 === i ? [0, 0] : i,
                                a = _.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = U(e),
                                            i = [D, O].indexOf(r) >= 0 ? -1 : 1,
                                            o = "function" === typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            a = o[0],
                                            s = o[1];
                                        return a = a || 0, s = (s || 0) * i, [D, S].indexOf(r) >= 0 ? {
                                            x: s,
                                            y: a
                                        } : {
                                            x: a,
                                            y: s
                                        }
                                    }(n, t.rects, o), e
                                }), {}),
                                s = a[t.placement],
                                u = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, v = n.allowedAutoPlacements, g = t.options.placement, m = U(g), y = u || (m === g || !h ? [te(g)] : function(e) {
                                        if (U(e) === C) return [];
                                        var t = te(e);
                                        return [re(e), t, re(t)]
                                    }(g)), b = [g].concat(y).reduce((function(e, n) {
                                        return e.concat(U(n) === C ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                i = n.boundary,
                                                o = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                u = n.allowedAutoPlacements,
                                                c = void 0 === u ? _ : u,
                                                l = q(r),
                                                f = l ? s ? I : I.filter((function(e) {
                                                    return q(e) === l
                                                })) : P,
                                                d = f.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var p = d.reduce((function(t, n) {
                                                return t[n] = le(e, {
                                                    placement: n,
                                                    boundary: i,
                                                    rootBoundary: o,
                                                    padding: a
                                                })[U(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: l,
                                            rootBoundary: f,
                                            padding: c,
                                            flipVariations: h,
                                            allowedAutoPlacements: v
                                        }) : n)
                                    }), []), w = t.rects.reference, x = t.rects.popper, k = new Map, T = !0, F = b[0], j = 0; j < b.length; j++) {
                                    var M = b[j],
                                        L = U(M),
                                        B = q(M) === A,
                                        N = [O, E].indexOf(L) >= 0,
                                        R = N ? "width" : "height",
                                        z = le(t, {
                                            placement: M,
                                            boundary: l,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: c
                                        }),
                                        H = N ? B ? S : D : B ? E : O;
                                    w[R] > x[R] && (H = te(H));
                                    var W = te(H),
                                        V = [];
                                    if (o && V.push(z[L] <= 0), s && V.push(z[H] <= 0, z[W] <= 0), V.every((function(e) {
                                            return e
                                        }))) {
                                        F = M, T = !1;
                                        break
                                    }
                                    k.set(M, V)
                                }
                                if (T)
                                    for (var $ = function(e) {
                                            var t = b.find((function(t) {
                                                var n = k.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return F = t, "break"
                                        }, Y = h ? 3 : 1; Y > 0; Y--) {
                                        if ("break" === $(Y)) break
                                    }
                                t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                i = n.mainAxis,
                                o = void 0 === i || i,
                                a = n.altAxis,
                                s = void 0 !== a && a,
                                u = n.boundary,
                                c = n.rootBoundary,
                                l = n.altBoundary,
                                f = n.padding,
                                d = n.tether,
                                p = void 0 === d || d,
                                h = n.tetherOffset,
                                v = void 0 === h ? 0 : h,
                                m = le(t, {
                                    boundary: u,
                                    rootBoundary: c,
                                    padding: f,
                                    altBoundary: l
                                }),
                                y = U(t.placement),
                                b = q(t.placement),
                                w = !b,
                                x = V(y),
                                C = "x" === x ? "y" : "x",
                                P = t.modifiersData.popperOffsets,
                                T = t.rects.reference,
                                F = t.rects.popper,
                                j = "function" === typeof v ? v(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : v,
                                I = {
                                    x: 0,
                                    y: 0
                                };
                            if (P) {
                                if (o || s) {
                                    var _ = "y" === x ? O : D,
                                        M = "y" === x ? E : S,
                                        L = "y" === x ? "height" : "width",
                                        B = P[x],
                                        N = P[x] + m[_],
                                        R = P[x] - m[M],
                                        z = p ? -F[L] / 2 : 0,
                                        H = b === A ? T[L] : F[L],
                                        W = b === A ? -F[L] : -T[L],
                                        $ = t.elements.arrow,
                                        Y = p && $ ? g($) : {
                                            width: 0,
                                            height: 0
                                        },
                                        G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        Z = G[_],
                                        X = G[M],
                                        Q = fe(0, T[L], Y[L]),
                                        ee = w ? T[L] / 2 - z - Q - Z - j : H - Q - Z - j,
                                        te = w ? -T[L] / 2 + z + Q + X + j : W + Q + X + j,
                                        ne = t.elements.arrow && k(t.elements.arrow),
                                        re = ne ? "y" === x ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                                        ie = t.modifiersData.offset ? t.modifiersData.offset[t.placement][x] : 0,
                                        oe = P[x] + ee - ie - re,
                                        ae = P[x] + te - ie;
                                    if (o) {
                                        var se = fe(p ? J(N, oe) : N, B, p ? K(R, ae) : R);
                                        P[x] = se, I[x] = se - B
                                    }
                                    if (s) {
                                        var ue = "x" === x ? O : D,
                                            ce = "x" === x ? E : S,
                                            de = P[C],
                                            pe = de + m[ue],
                                            he = de - m[ce],
                                            ve = fe(p ? J(pe, oe) : pe, de, p ? K(he, ae) : he);
                                        P[C] = ve, I[C] = ve - de
                                    }
                                }
                                t.modifiersData[r] = I
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                i = e.options,
                                o = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = U(n.placement),
                                u = V(s),
                                c = [D, S].indexOf(s) >= 0 ? "height" : "width";
                            if (o && a) {
                                var l = function(e, t) {
                                        return ue("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                            placement: t.placement
                                        })) : e) ? e : ce(e, P))
                                    }(i.padding, n),
                                    f = g(o),
                                    d = "y" === u ? O : D,
                                    p = "y" === u ? E : S,
                                    h = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
                                    v = a[u] - n.rects.reference[u],
                                    m = k(o),
                                    y = m ? "y" === u ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                                    b = h / 2 - v / 2,
                                    w = l[d],
                                    x = y - f[c] - l[p],
                                    C = y / 2 - f[c] / 2 + b,
                                    A = fe(w, C, x),
                                    T = u;
                                n.modifiersData[r] = ((t = {})[T] = A, t.centerOffset = A - C, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && ie(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                i = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                a = le(t, {
                                    elementContext: "reference"
                                }),
                                s = le(t, {
                                    altBoundary: !0
                                }),
                                u = de(a, r),
                                c = de(s, i, o),
                                l = pe(u),
                                f = pe(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: u,
                                popperEscapeOffsets: c,
                                isReferenceHidden: l,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": l,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                ve = "tippy-content",
                ge = "tippy-backdrop",
                me = "tippy-arrow",
                ye = "tippy-svg-arrow",
                be = {
                    passive: !0,
                    capture: !0
                };

            function we(e, t, n) {
                if (Array.isArray(e)) {
                    var r = e[t];
                    return null == r ? Array.isArray(n) ? n[t] : n : r
                }
                return e
            }

            function xe(e, t) {
                var n = {}.toString.call(e);
                return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1
            }

            function ke(e, t) {
                return "function" === typeof e ? e.apply(void 0, t) : e
            }

            function Oe(e, t) {
                return 0 === t ? e : function(r) {
                    clearTimeout(n), n = setTimeout((function() {
                        e(r)
                    }), t)
                };
                var n
            }

            function Ee(e) {
                return [].concat(e)
            }

            function Se(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function De(e) {
                return e.split("-")[0]
            }

            function Ce(e) {
                return [].slice.call(e)
            }

            function Pe() {
                return document.createElement("div")
            }

            function Ae(e) {
                return ["Element", "Fragment"].some((function(t) {
                    return xe(e, t)
                }))
            }

            function Te(e) {
                return xe(e, "MouseEvent")
            }

            function Fe(e) {
                return !(!e || !e._tippy || e._tippy.reference !== e)
            }

            function je(e) {
                return Ae(e) ? [e] : function(e) {
                    return xe(e, "NodeList")
                }(e) ? Ce(e) : Array.isArray(e) ? e : Ce(document.querySelectorAll(e))
            }

            function Ie(e, t) {
                e.forEach((function(e) {
                    e && (e.style.transitionDuration = t + "ms")
                }))
            }

            function _e(e, t) {
                e.forEach((function(e) {
                    e && e.setAttribute("data-state", t)
                }))
            }

            function Me(e) {
                var t, n = Ee(e)[0];
                return (null == n || null == (t = n.ownerDocument) ? void 0 : t.body) ? n.ownerDocument : document
            }

            function Le(e, t, n) {
                var r = t + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach((function(t) {
                    e[r](t, n)
                }))
            }
            var Be = {
                    isTouch: !1
                },
                Ne = 0;

            function Re() {
                Be.isTouch || (Be.isTouch = !0, window.performance && document.addEventListener("mousemove", ze))
            }

            function ze() {
                var e = performance.now();
                e - Ne < 20 && (Be.isTouch = !1, document.removeEventListener("mousemove", ze)), Ne = e
            }

            function He() {
                var e = document.activeElement;
                if (Fe(e)) {
                    var t = e._tippy;
                    e.blur && !t.state.isVisible && e.blur()
                }
            }
            var We = "undefined" !== typeof window && "undefined" !== typeof document ? navigator.userAgent : "",
                Ue = /MSIE |Trident\//.test(We);
            var qe = {
                    animateFill: !1,
                    followCursor: !1,
                    inlinePositioning: !1,
                    sticky: !1
                },
                Ve = Object.assign({
                    appendTo: function() {
                        return document.body
                    },
                    aria: {
                        content: "auto",
                        expanded: "auto"
                    },
                    delay: 0,
                    duration: [300, 250],
                    getReferenceClientRect: null,
                    hideOnClick: !0,
                    ignoreAttributes: !1,
                    interactive: !1,
                    interactiveBorder: 2,
                    interactiveDebounce: 0,
                    moveTransition: "",
                    offset: [0, 10],
                    onAfterUpdate: function() {},
                    onBeforeUpdate: function() {},
                    onCreate: function() {},
                    onDestroy: function() {},
                    onHidden: function() {},
                    onHide: function() {},
                    onMount: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onTrigger: function() {},
                    onUntrigger: function() {},
                    onClickOutside: function() {},
                    placement: "top",
                    plugins: [],
                    popperOptions: {},
                    render: null,
                    showOnCreate: !1,
                    touch: !0,
                    trigger: "mouseenter focus",
                    triggerTarget: null
                }, qe, {}, {
                    allowHTML: !1,
                    animation: "fade",
                    arrow: !0,
                    content: "",
                    inertia: !1,
                    maxWidth: 350,
                    role: "tooltip",
                    theme: "",
                    zIndex: 9999
                }),
                $e = Object.keys(Ve);

            function Ye(e) {
                var t = (e.plugins || []).reduce((function(t, n) {
                    var r = n.name,
                        i = n.defaultValue;
                    return r && (t[r] = void 0 !== e[r] ? e[r] : i), t
                }), {});
                return Object.assign({}, e, {}, t)
            }

            function Ke(e, t) {
                var n = Object.assign({}, t, {
                    content: ke(t.content, [e])
                }, t.ignoreAttributes ? {} : function(e, t) {
                    return (t ? Object.keys(Ye(Object.assign({}, Ve, {
                        plugins: t
                    }))) : $e).reduce((function(t, n) {
                        var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                        if (!r) return t;
                        if ("content" === n) t[n] = r;
                        else try {
                            t[n] = JSON.parse(r)
                        } catch (i) {
                            t[n] = r
                        }
                        return t
                    }), {})
                }(e, t.plugins));
                return n.aria = Object.assign({}, Ve.aria, {}, n.aria), n.aria = {
                    expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
                    content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
                }, n
            }

            function Je(e, t) {
                e.innerHTML = t
            }

            function Ge(e) {
                var t = Pe();
                return !0 === e ? t.className = me : (t.className = ye, Ae(e) ? t.appendChild(e) : Je(t, e)), t
            }

            function Ze(e, t) {
                Ae(t.content) ? (Je(e, ""), e.appendChild(t.content)) : "function" !== typeof t.content && (t.allowHTML ? Je(e, t.content) : e.textContent = t.content)
            }

            function Xe(e) {
                var t = e.firstElementChild,
                    n = Ce(t.children);
                return {
                    box: t,
                    content: n.find((function(e) {
                        return e.classList.contains(ve)
                    })),
                    arrow: n.find((function(e) {
                        return e.classList.contains(me) || e.classList.contains(ye)
                    })),
                    backdrop: n.find((function(e) {
                        return e.classList.contains(ge)
                    }))
                }
            }

            function Qe(e) {
                var t = Pe(),
                    n = Pe();
                n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
                var r = Pe();

                function i(n, r) {
                    var i = Xe(t),
                        o = i.box,
                        a = i.content,
                        s = i.arrow;
                    r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"), "string" === typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"), r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" === typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || Ze(a, e.props), r.arrow ? s ? n.arrow !== r.arrow && (o.removeChild(s), o.appendChild(Ge(r.arrow))) : o.appendChild(Ge(r.arrow)) : s && o.removeChild(s)
                }
                return r.className = ve, r.setAttribute("data-state", "hidden"), Ze(r, e.props), t.appendChild(n), n.appendChild(r), i(e.props, e.props), {
                    popper: t,
                    onUpdate: i
                }
            }
            Qe.$$tippy = !0;
            var et = 1,
                tt = [],
                nt = [];

            function rt(e, t) {
                var n, r, i, o, a, s, u, c, l, f = Ke(e, Object.assign({}, Ve, {}, Ye((n = t, Object.keys(n).reduce((function(e, t) {
                        return void 0 !== n[t] && (e[t] = n[t]), e
                    }), {}))))),
                    d = !1,
                    p = !1,
                    h = !1,
                    v = !1,
                    g = [],
                    m = Oe(K, f.interactiveDebounce),
                    y = et++,
                    b = (l = f.plugins).filter((function(e, t) {
                        return l.indexOf(e) === t
                    })),
                    w = {
                        id: y,
                        reference: e,
                        popper: Pe(),
                        popperInstance: null,
                        props: f,
                        state: {
                            isEnabled: !0,
                            isVisible: !1,
                            isDestroyed: !1,
                            isMounted: !1,
                            isShown: !1
                        },
                        plugins: b,
                        clearDelayTimeouts: function() {
                            clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o)
                        },
                        setProps: function(t) {
                            0;
                            if (w.state.isDestroyed) return;
                            _("onBeforeUpdate", [w, t]), $();
                            var n = w.props,
                                r = Ke(e, Object.assign({}, w.props, {}, t, {
                                    ignoreAttributes: !0
                                }));
                            w.props = r, V(), n.interactiveDebounce !== r.interactiveDebounce && (B(), m = Oe(K, r.interactiveDebounce));
                            n.triggerTarget && !r.triggerTarget ? Ee(n.triggerTarget).forEach((function(e) {
                                e.removeAttribute("aria-expanded")
                            })) : r.triggerTarget && e.removeAttribute("aria-expanded");
                            L(), I(), O && O(n, r);
                            w.popperInstance && (X(), ee().forEach((function(e) {
                                requestAnimationFrame(e._tippy.popperInstance.forceUpdate)
                            })));
                            _("onAfterUpdate", [w, t])
                        },
                        setContent: function(e) {
                            w.setProps({
                                content: e
                            })
                        },
                        show: function() {
                            0;
                            var e = w.state.isVisible,
                                t = w.state.isDestroyed,
                                n = !w.state.isEnabled,
                                r = Be.isTouch && !w.props.touch,
                                i = we(w.props.duration, 0, Ve.duration);
                            if (e || t || n || r) return;
                            if (A().hasAttribute("disabled")) return;
                            if (_("onShow", [w], !1), !1 === w.props.onShow(w)) return;
                            w.state.isVisible = !0, P() && (k.style.visibility = "visible");
                            I(), H(), w.state.isMounted || (k.style.transition = "none");
                            if (P()) {
                                var o = F(),
                                    a = o.box,
                                    s = o.content;
                                Ie([a, s], 0)
                            }
                            u = function() {
                                    var e;
                                    if (w.state.isVisible && !v) {
                                        if (v = !0, k.offsetHeight, k.style.transition = w.props.moveTransition, P() && w.props.animation) {
                                            var t = F(),
                                                n = t.box,
                                                r = t.content;
                                            Ie([n, r], i), _e([n, r], "visible")
                                        }
                                        M(), L(), Se(nt, w), null == (e = w.popperInstance) || e.forceUpdate(), w.state.isMounted = !0, _("onMount", [w]), w.props.animation && P() && function(e, t) {
                                            U(e, t)
                                        }(i, (function() {
                                            w.state.isShown = !0, _("onShown", [w])
                                        }))
                                    }
                                },
                                function() {
                                    var e, t = w.props.appendTo,
                                        n = A();
                                    e = w.props.interactive && t === Ve.appendTo || "parent" === t ? n.parentNode : ke(t, [n]);
                                    e.contains(k) || e.appendChild(k);
                                    X(), !1
                                }()
                        },
                        hide: function() {
                            0;
                            var e = !w.state.isVisible,
                                t = w.state.isDestroyed,
                                n = !w.state.isEnabled,
                                r = we(w.props.duration, 1, Ve.duration);
                            if (e || t || n) return;
                            if (_("onHide", [w], !1), !1 === w.props.onHide(w)) return;
                            w.state.isVisible = !1, w.state.isShown = !1, v = !1, d = !1, P() && (k.style.visibility = "hidden");
                            if (B(), W(), I(), P()) {
                                var i = F(),
                                    o = i.box,
                                    a = i.content;
                                w.props.animation && (Ie([o, a], r), _e([o, a], "hidden"))
                            }
                            M(), L(), w.props.animation ? P() && function(e, t) {
                                U(e, (function() {
                                    !w.state.isVisible && k.parentNode && k.parentNode.contains(k) && t()
                                }))
                            }(r, w.unmount) : w.unmount()
                        },
                        hideWithInteractivity: function(e) {
                            0;
                            T().addEventListener("mousemove", m), Se(tt, m), m(e)
                        },
                        enable: function() {
                            w.state.isEnabled = !0
                        },
                        disable: function() {
                            w.hide(), w.state.isEnabled = !1
                        },
                        unmount: function() {
                            0;
                            w.state.isVisible && w.hide();
                            if (!w.state.isMounted) return;
                            Q(), ee().forEach((function(e) {
                                e._tippy.unmount()
                            })), k.parentNode && k.parentNode.removeChild(k);
                            nt = nt.filter((function(e) {
                                return e !== w
                            })), w.state.isMounted = !1, _("onHidden", [w])
                        },
                        destroy: function() {
                            0;
                            if (w.state.isDestroyed) return;
                            w.clearDelayTimeouts(), w.unmount(), $(), delete e._tippy, w.state.isDestroyed = !0, _("onDestroy", [w])
                        }
                    };
                if (!f.render) return w;
                var x = f.render(w),
                    k = x.popper,
                    O = x.onUpdate;
                k.setAttribute("data-tippy-root", ""), k.id = "tippy-" + w.id, w.popper = k, e._tippy = w, k._tippy = w;
                var E = b.map((function(e) {
                        return e.fn(w)
                    })),
                    S = e.hasAttribute("aria-expanded");
                return V(), L(), I(), _("onCreate", [w]), f.showOnCreate && te(), k.addEventListener("mouseenter", (function() {
                    w.props.interactive && w.state.isVisible && w.clearDelayTimeouts()
                })), k.addEventListener("mouseleave", (function(e) {
                    w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && (T().addEventListener("mousemove", m), m(e))
                })), w;

                function D() {
                    var e = w.props.touch;
                    return Array.isArray(e) ? e : [e, 0]
                }

                function C() {
                    return "hold" === D()[0]
                }

                function P() {
                    var e;
                    return !!(null == (e = w.props.render) ? void 0 : e.$$tippy)
                }

                function A() {
                    return c || e
                }

                function T() {
                    var e = A().parentNode;
                    return e ? Me(e) : document
                }

                function F() {
                    return Xe(k)
                }

                function j(e) {
                    return w.state.isMounted && !w.state.isVisible || Be.isTouch || a && "focus" === a.type ? 0 : we(w.props.delay, e ? 0 : 1, Ve.delay)
                }

                function I() {
                    k.style.pointerEvents = w.props.interactive && w.state.isVisible ? "" : "none", k.style.zIndex = "" + w.props.zIndex
                }

                function _(e, t, n) {
                    var r;
                    (void 0 === n && (n = !0), E.forEach((function(n) {
                        n[e] && n[e].apply(void 0, t)
                    })), n) && (r = w.props)[e].apply(r, t)
                }

                function M() {
                    var t = w.props.aria;
                    if (t.content) {
                        var n = "aria-" + t.content,
                            r = k.id;
                        Ee(w.props.triggerTarget || e).forEach((function(e) {
                            var t = e.getAttribute(n);
                            if (w.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
                            else {
                                var i = t && t.replace(r, "").trim();
                                i ? e.setAttribute(n, i) : e.removeAttribute(n)
                            }
                        }))
                    }
                }

                function L() {
                    !S && w.props.aria.expanded && Ee(w.props.triggerTarget || e).forEach((function(e) {
                        w.props.interactive ? e.setAttribute("aria-expanded", w.state.isVisible && e === A() ? "true" : "false") : e.removeAttribute("aria-expanded")
                    }))
                }

                function B() {
                    T().removeEventListener("mousemove", m), tt = tt.filter((function(e) {
                        return e !== m
                    }))
                }

                function N(e) {
                    if ((!Be.isTouch || !h && "mousedown" !== e.type) && (!w.props.interactive || !k.contains(e.target))) {
                        if (A().contains(e.target)) {
                            if (Be.isTouch) return;
                            if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0) return
                        } else _("onClickOutside", [w, e]);
                        !0 === w.props.hideOnClick && (w.clearDelayTimeouts(), w.hide(), p = !0, setTimeout((function() {
                            p = !1
                        })), w.state.isMounted || W())
                    }
                }

                function R() {
                    h = !0
                }

                function z() {
                    h = !1
                }

                function H() {
                    var e = T();
                    e.addEventListener("mousedown", N, !0), e.addEventListener("touchend", N, be), e.addEventListener("touchstart", z, be), e.addEventListener("touchmove", R, be)
                }

                function W() {
                    var e = T();
                    e.removeEventListener("mousedown", N, !0), e.removeEventListener("touchend", N, be), e.removeEventListener("touchstart", z, be), e.removeEventListener("touchmove", R, be)
                }

                function U(e, t) {
                    var n = F().box;

                    function r(e) {
                        e.target === n && (Le(n, "remove", r), t())
                    }
                    if (0 === e) return t();
                    Le(n, "remove", s), Le(n, "add", r), s = r
                }

                function q(t, n, r) {
                    void 0 === r && (r = !1), Ee(w.props.triggerTarget || e).forEach((function(e) {
                        e.addEventListener(t, n, r), g.push({
                            node: e,
                            eventType: t,
                            handler: n,
                            options: r
                        })
                    }))
                }

                function V() {
                    var e;
                    C() && (q("touchstart", Y, {
                        passive: !0
                    }), q("touchend", J, {
                        passive: !0
                    })), (e = w.props.trigger, e.split(/\s+/).filter(Boolean)).forEach((function(e) {
                        if ("manual" !== e) switch (q(e, Y), e) {
                            case "mouseenter":
                                q("mouseleave", J);
                                break;
                            case "focus":
                                q(Ue ? "focusout" : "blur", G);
                                break;
                            case "focusin":
                                q("focusout", G)
                        }
                    }))
                }

                function $() {
                    g.forEach((function(e) {
                        var t = e.node,
                            n = e.eventType,
                            r = e.handler,
                            i = e.options;
                        t.removeEventListener(n, r, i)
                    })), g = []
                }

                function Y(e) {
                    var t, n = !1;
                    if (w.state.isEnabled && !Z(e) && !p) {
                        var r = "focus" === (null == (t = a) ? void 0 : t.type);
                        a = e, c = e.currentTarget, L(), !w.state.isVisible && Te(e) && tt.forEach((function(t) {
                            return t(e)
                        })), "click" === e.type && (w.props.trigger.indexOf("mouseenter") < 0 || d) && !1 !== w.props.hideOnClick && w.state.isVisible ? n = !0 : te(e), "click" === e.type && (d = !n), n && !r && ne(e)
                    }
                }

                function K(e) {
                    var t = e.target,
                        n = A().contains(t) || k.contains(t);
                    "mousemove" === e.type && n || function(e, t) {
                        var n = t.clientX,
                            r = t.clientY;
                        return e.every((function(e) {
                            var t = e.popperRect,
                                i = e.popperState,
                                o = e.props.interactiveBorder,
                                a = De(i.placement),
                                s = i.modifiersData.offset;
                            if (!s) return !0;
                            var u = "bottom" === a ? s.top.y : 0,
                                c = "top" === a ? s.bottom.y : 0,
                                l = "right" === a ? s.left.x : 0,
                                f = "left" === a ? s.right.x : 0,
                                d = t.top - r + u > o,
                                p = r - t.bottom - c > o,
                                h = t.left - n + l > o,
                                v = n - t.right - f > o;
                            return d || p || h || v
                        }))
                    }(ee().concat(k).map((function(e) {
                        var t, n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                        return n ? {
                            popperRect: e.getBoundingClientRect(),
                            popperState: n,
                            props: f
                        } : null
                    })).filter(Boolean), e) && (B(), ne(e))
                }

                function J(e) {
                    Z(e) || w.props.trigger.indexOf("click") >= 0 && d || (w.props.interactive ? w.hideWithInteractivity(e) : ne(e))
                }

                function G(e) {
                    w.props.trigger.indexOf("focusin") < 0 && e.target !== A() || w.props.interactive && e.relatedTarget && k.contains(e.relatedTarget) || ne(e)
                }

                function Z(e) {
                    return !!Be.isTouch && C() !== e.type.indexOf("touch") >= 0
                }

                function X() {
                    Q();
                    var t = w.props,
                        n = t.popperOptions,
                        r = t.placement,
                        i = t.offset,
                        o = t.getReferenceClientRect,
                        a = t.moveTransition,
                        s = P() ? Xe(k).arrow : null,
                        c = o ? {
                            getBoundingClientRect: o,
                            contextElement: o.contextElement || A()
                        } : e,
                        l = [{
                            name: "offset",
                            options: {
                                offset: i
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                padding: {
                                    top: 2,
                                    bottom: 2,
                                    left: 5,
                                    right: 5
                                }
                            }
                        }, {
                            name: "flip",
                            options: {
                                padding: 5
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !a
                            }
                        }, {
                            name: "$$tippy",
                            enabled: !0,
                            phase: "beforeWrite",
                            requires: ["computeStyles"],
                            fn: function(e) {
                                var t = e.state;
                                if (P()) {
                                    var n = F().box;
                                    ["placement", "reference-hidden", "escaped"].forEach((function(e) {
                                        "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e)
                                    })), t.attributes.popper = {}
                                }
                            }
                        }];
                    P() && s && l.push({
                        name: "arrow",
                        options: {
                            element: s,
                            padding: 3
                        }
                    }), l.push.apply(l, (null == n ? void 0 : n.modifiers) || []), w.popperInstance = he(c, k, Object.assign({}, n, {
                        placement: r,
                        onFirstUpdate: u,
                        modifiers: l
                    }))
                }

                function Q() {
                    w.popperInstance && (w.popperInstance.destroy(), w.popperInstance = null)
                }

                function ee() {
                    return Ce(k.querySelectorAll("[data-tippy-root]"))
                }

                function te(e) {
                    w.clearDelayTimeouts(), e && _("onTrigger", [w, e]), H();
                    var t = j(!0),
                        n = D(),
                        i = n[0],
                        o = n[1];
                    Be.isTouch && "hold" === i && o && (t = o), t ? r = setTimeout((function() {
                        w.show()
                    }), t) : w.show()
                }

                function ne(e) {
                    if (w.clearDelayTimeouts(), _("onUntrigger", [w, e]), w.state.isVisible) {
                        if (!(w.props.trigger.indexOf("mouseenter") >= 0 && w.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && d)) {
                            var t = j(!1);
                            t ? i = setTimeout((function() {
                                w.state.isVisible && w.hide()
                            }), t) : o = requestAnimationFrame((function() {
                                w.hide()
                            }))
                        }
                    } else W()
                }
            }

            function it(e, t) {
                void 0 === t && (t = {});
                var n = Ve.plugins.concat(t.plugins || []);
                document.addEventListener("touchstart", Re, be), window.addEventListener("blur", He);
                var r = Object.assign({}, t, {
                        plugins: n
                    }),
                    i = je(e).reduce((function(e, t) {
                        var n = t && rt(t, r);
                        return n && e.push(n), e
                    }), []);
                return Ae(e) ? i[0] : i
            }
            it.defaultProps = Ve, it.setDefaultProps = function(e) {
                Object.keys(e).forEach((function(t) {
                    Ve[t] = e[t]
                }))
            }, it.currentInput = Be;
            Object.assign({}, Q, {
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow)
                }
            });
            it.setDefaultProps({
                render: Qe
            });
            var ot = it,
                at = n(67294),
                st = n(73935);

            function ut(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
            var ct = "undefined" !== typeof window && "undefined" !== typeof document;

            function lt(e, t) {
                e && ("function" === typeof e && e(t), {}.hasOwnProperty.call(e, "current") && (e.current = t))
            }

            function ft() {
                return ct && document.createElement("div")
            }

            function dt(e, t) {
                if (e === t) return !0;
                if ("object" === typeof e && null != e && "object" === typeof t && null != t) {
                    if (Object.keys(e).length !== Object.keys(t).length) return !1;
                    for (var n in e) {
                        if (!t.hasOwnProperty(n)) return !1;
                        if (!dt(e[n], t[n])) return !1
                    }
                    return !0
                }
                return !1
            }

            function pt(e) {
                var t = [];
                return e.forEach((function(e) {
                    t.find((function(t) {
                        return dt(e, t)
                    })) || t.push(e)
                })), t
            }

            function ht(e, t) {
                var n, r;
                return Object.assign({}, t, {
                    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
                        modifiers: pt([].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], (null == (r = t.popperOptions) ? void 0 : r.modifiers) || []))
                    })
                })
            }
            var vt = ct ? at.useLayoutEffect : at.useEffect;

            function gt(e) {
                var t = (0, at.useRef)();
                return t.current || (t.current = "function" === typeof e ? e() : e), t.current
            }

            function mt(e, t, n) {
                n.split(/\s+/).forEach((function(n) {
                    n && e.classList[t](n)
                }))
            }
            var yt = {
                name: "className",
                defaultValue: "",
                fn: function(e) {
                    var t = e.popper.firstElementChild,
                        n = function() {
                            var t;
                            return !!(null == (t = e.props.render) ? void 0 : t.$$tippy)
                        };

                    function r() {
                        e.props.className && !n() || mt(t, "add", e.props.className)
                    }
                    return {
                        onCreate: r,
                        onBeforeUpdate: function() {
                            n() && mt(t, "remove", e.props.className)
                        },
                        onAfterUpdate: r
                    }
                }
            };

            function bt(e) {
                return function(t) {
                    var n = t.children,
                        r = t.content,
                        i = t.visible,
                        o = t.singleton,
                        a = t.render,
                        s = t.reference,
                        u = t.disabled,
                        c = void 0 !== u && u,
                        l = t.ignoreAttributes,
                        f = void 0 === l || l,
                        d = (t.__source, t.__self, ut(t, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"])),
                        p = void 0 !== i,
                        h = void 0 !== o,
                        v = (0, at.useState)(!1),
                        g = v[0],
                        m = v[1],
                        y = (0, at.useState)({}),
                        b = y[0],
                        w = y[1],
                        x = (0, at.useState)(),
                        k = x[0],
                        O = x[1],
                        E = gt((function() {
                            return {
                                container: ft(),
                                renders: 1
                            }
                        })),
                        S = Object.assign({
                            ignoreAttributes: f
                        }, d, {
                            content: E.container
                        });
                    p && (S.trigger = "manual", S.hideOnClick = !1), h && (c = !0);
                    var D = S,
                        C = S.plugins || [];
                    a && (D = Object.assign({}, S, {
                        plugins: h ? [].concat(C, [{
                            fn: function() {
                                return {
                                    onTrigger: function(e, t) {
                                        var n = o.data.children.find((function(e) {
                                            return e.instance.reference === t.currentTarget
                                        })).content;
                                        O(n)
                                    }
                                }
                            }
                        }]) : C,
                        render: function() {
                            return {
                                popper: E.container
                            }
                        }
                    }));
                    var P = [s].concat(n ? [n.type] : []);
                    return vt((function() {
                        var t = s;
                        s && s.hasOwnProperty("current") && (t = s.current);
                        var n = e(t || E.ref || ft(), Object.assign({}, D, {
                            plugins: [yt].concat(S.plugins || [])
                        }));
                        return E.instance = n, c && n.disable(), i && n.show(), h && o.hook({
                                instance: n,
                                content: r,
                                props: D
                            }), m(!0),
                            function() {
                                n.destroy(), null == o || o.cleanup(n)
                            }
                    }), P), vt((function() {
                        var e;
                        if (1 !== E.renders) {
                            var t = E.instance;
                            t.setProps(ht(t.props, D)), null == (e = t.popperInstance) || e.forceUpdate(), c ? t.disable() : t.enable(), p && (i ? t.show() : t.hide()), h && o.hook({
                                instance: t,
                                content: r,
                                props: D
                            })
                        } else E.renders++
                    })), vt((function() {
                        var e;
                        if (a) {
                            var t = E.instance;
                            t.setProps({
                                popperOptions: Object.assign({}, t.props.popperOptions, {
                                    modifiers: [].concat(((null == (e = t.props.popperOptions) ? void 0 : e.modifiers) || []).filter((function(e) {
                                        return "$$tippyReact" !== e.name
                                    })), [{
                                        name: "$$tippyReact",
                                        enabled: !0,
                                        phase: "beforeWrite",
                                        requires: ["computeStyles"],
                                        fn: function(e) {
                                            var t, n = e.state,
                                                r = null == (t = n.modifiersData) ? void 0 : t.hide;
                                            b.placement === n.placement && b.referenceHidden === (null == r ? void 0 : r.isReferenceHidden) && b.escaped === (null == r ? void 0 : r.hasPopperEscaped) || w({
                                                placement: n.placement,
                                                referenceHidden: null == r ? void 0 : r.isReferenceHidden,
                                                escaped: null == r ? void 0 : r.hasPopperEscaped
                                            }), n.attributes.popper = {}
                                        }
                                    }])
                                })
                            })
                        }
                    }), [b.placement, b.referenceHidden, b.escaped].concat(P)), at.createElement(at.Fragment, null, n ? (0, at.cloneElement)(n, {
                        ref: function(e) {
                            E.ref = e, lt(n.ref, e)
                        }
                    }) : null, g && (0, st.createPortal)(a ? a(function(e) {
                        var t = {
                            "data-placement": e.placement
                        };
                        return e.referenceHidden && (t["data-reference-hidden"] = ""), e.escaped && (t["data-escaped"] = ""), t
                    }(b), k, E.instance) : r, E.container))
                }
            }
            var wt = function(e, t) {
                    return (0, at.forwardRef)((function(n, r) {
                        var i = n.children,
                            o = ut(n, ["children"]);
                        return at.createElement(e, Object.assign({}, t, o), i ? (0, at.cloneElement)(i, {
                            ref: function(e) {
                                lt(r, e), lt(i.ref, e)
                            }
                        }) : null)
                    }))
                },
                xt = wt(bt(ot))
        },
        40935: function(e, t, n) {
            "use strict";
            n.d(t, {
                tQ: function() {
                    return f
                },
                tm: function() {
                    return a
                }
            });
            var r = n(67294),
                i = n(78872);
            const o = (e, t, n) => r => {
                    let i = [];
                    const o = e => {
                        e.length && (i = [...i, ...e])
                    };
                    return n.forEach((t => {
                        o(t(r, e))
                    })), t.forEach((({
                        decorate: t
                    }) => {
                        t && o(t(r, e))
                    })), i
                },
                a = e => e.reduce(((e, t) => {
                    const n = t.inlineTypes || [];
                    return e.concat(n)
                }), []),
                s = (e, t, n) => r => {
                    n.forEach((t => {
                        t(r, e)
                    })), t.forEach((({
                        onDOMBeforeInput: t
                    }) => {
                        null === t || void 0 === t || t(r, e)
                    }))
                },
                u = (e, t, n) => r => {
                    const i = [...n];
                    t.forEach((({
                        onKeyDown: e
                    }) => {
                        e && i.push(e)
                    })), i.some((t => !1 === t(r, e)))
                },
                c = (e, t) => {
                    const n = n => {
                        let i;
                        return t.some((e => (i = e(n), !!i))), i || (e.some((({
                            renderElement: e
                        }) => (i = e && e(n), !!i))), i || (0, r.createElement)("div", Object.assign({}, n.attributes), n.children))
                    };
                    return e => (0, r.createElement)(n, Object.assign({}, e))
                },
                l = (e, t) => {
                    const n = n => {
                        const i = Object.assign({}, n);
                        return t.forEach((e => {
                            i.children = e(i)
                        })), e.forEach((({
                            renderLeaf: e
                        }) => {
                            e && (i.children = e(i))
                        })), (0, r.createElement)("span", Object.assign({}, i.attributes), i.children)
                    };
                    return e => (0, r.createElement)(n, Object.assign({}, e))
                },
                f = e => {
                    var {
                        plugins: t = [],
                        decorate: n = [],
                        decorateDeps: a = [],
                        renderElement: f = [],
                        renderElementDeps: d = [],
                        renderLeaf: p = [],
                        renderLeafDeps: h = [],
                        onDOMBeforeInput: v = [],
                        onDOMBeforeInputDeps: g = [],
                        onKeyDown: m = [],
                        onKeyDownDeps: y = []
                    } = e, b = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["plugins", "decorate", "decorateDeps", "renderElement", "renderElementDeps", "renderLeaf", "renderLeafDeps", "onDOMBeforeInput", "onDOMBeforeInputDeps", "onKeyDown", "onKeyDownDeps"]);
                    const w = (0, i.ui)();
                    return (0, r.createElement)(i.CX, Object.assign({
                        style: {
                            fontSize: 16,
                            lineHeight: 1.5
                        },
                        decorate: (0, r.useCallback)(o(w, t, n), [w, ...t.flatMap((e => {
                            var t;
                            return null !== (t = e.decorateDeps) && void 0 !== t ? t : []
                        })), ...a]),
                        renderElement: (0, r.useCallback)(c(t, f), [...t.flatMap((e => {
                            var t;
                            return null !== (t = e.renderElementDeps) && void 0 !== t ? t : []
                        })), ...d]),
                        renderLeaf: (0, r.useCallback)(l(t, p), [...t.flatMap((e => {
                            var t;
                            return null !== (t = e.renderLeafDeps) && void 0 !== t ? t : []
                        })), ...h]),
                        onDOMBeforeInput: (0, r.useCallback)(s(w, t, v), [w, ...t.flatMap((e => {
                            var t;
                            return null !== (t = e.onDOMBeforeInputDeps) && void 0 !== t ? t : []
                        })), ...g]),
                        onKeyDown: (0, r.useCallback)(u(w, t, m), [w, ...t.flatMap((e => {
                            var t;
                            return null !== (t = e.onKeyDownDeps) && void 0 !== t ? t : []
                        })), ...y])
                    }, b))
                }
        },
        77489: function(e, t) {
            "use strict";
            for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), r = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, i = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: n ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, o = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, a = 1; a < 20; a++) o["f" + a] = 111 + a;

            function s(e, t, n) {
                t && !("byKey" in t) && (n = t, t = null), Array.isArray(e) || (e = [e]);
                var r = e.map((function(e) {
                        return u(e, t)
                    })),
                    i = function(e) {
                        return r.some((function(t) {
                            return c(t, e)
                        }))
                    };
                return null == n ? i : i(n)
            }

            function u(e, t) {
                var n = t && t.byKey,
                    i = {},
                    o = (e = e.replace("++", "+add")).split("+"),
                    a = o.length;
                for (var s in r) i[r[s]] = !1;
                var u = !0,
                    c = !1,
                    d = void 0;
                try {
                    for (var p, h = o[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                        var v = p.value,
                            g = v.endsWith("?") && v.length > 1;
                        g && (v = v.slice(0, -1));
                        var m = f(v),
                            y = r[m];
                        1 !== a && y || (n ? i.key = m : i.which = l(v)), y && (i[y] = !g || null)
                    }
                } catch (b) {
                    c = !0, d = b
                } finally {
                    try {
                        !u && h.return && h.return()
                    } finally {
                        if (c) throw d
                    }
                }
                return i
            }

            function c(e, t) {
                for (var n in e) {
                    var r = e[n],
                        i = void 0;
                    if (null != r && ((null != (i = "key" === n && null != t.key ? t.key.toLowerCase() : "which" === n ? 91 === r && 93 === t.which ? 91 : t.which : t[n]) || !1 !== r) && i !== r)) return !1
                }
                return !0
            }

            function l(e) {
                return e = f(e), o[e] || e.toUpperCase().charCodeAt(0)
            }

            function f(e) {
                return e = e.toLowerCase(), e = i[e] || e
            }
            t.ZP = s
        },
        10399: function(e, t, n) {
            "use strict";

            function r(e) {
                o !== e && (o = e)
            }

            function i() {
                return void 0 === o && (o = "undefined" !== typeof document && !!document.documentElement && "rtl" === document.documentElement.getAttribute("dir")), o
            }
            var o;

            function a() {
                return {
                    rtl: i()
                }
            }
            n.d(t, {
                ok: function() {
                    return r
                },
                Eo: function() {
                    return a
                }
            }), o = i()
        },
        6621: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return l
                }
            });
            var r, i = n(70655),
                o = 0,
                a = 1,
                s = 2,
                u = "undefined" !== typeof navigator && /rv:11.0/.test(navigator.userAgent),
                c = {};
            try {
                c = window
            } catch (f) {}
            var l = function() {
                function e(e) {
                    this._rules = [], this._preservedRules = [], this._rulesToInsert = [], this._counter = 0, this._keyToClassName = {}, this._onResetCallbacks = [], this._classNameToArgs = {}, this._config = (0, i.pi)({
                        injectionMode: a,
                        defaultPrefix: "css",
                        namespace: void 0,
                        cspSettings: void 0
                    }, e), this._keyToClassName = this._config.classNameCache || {}
                }
                return e.getInstance = function() {
                    var t;
                    if (!(r = c.__stylesheet__) || r._lastStyleElement && r._lastStyleElement.ownerDocument !== document) {
                        var n = (null === (t = c) || void 0 === t ? void 0 : t.FabricConfig) || {};
                        r = c.__stylesheet__ = new e(n.mergeStyles)
                    }
                    return r
                }, e.prototype.setConfig = function(e) {
                    this._config = (0, i.pi)((0, i.pi)({}, this._config), e)
                }, e.prototype.onReset = function(e) {
                    this._onResetCallbacks.push(e)
                }, e.prototype.getClassName = function(e) {
                    var t = this._config.namespace;
                    return (t ? t + "-" : "") + (e || this._config.defaultPrefix) + "-" + this._counter++
                }, e.prototype.cacheClassName = function(e, t, n, r) {
                    this._keyToClassName[t] = e, this._classNameToArgs[e] = {
                        args: n,
                        rules: r
                    }
                }, e.prototype.classNameFromKey = function(e) {
                    return this._keyToClassName[e]
                }, e.prototype.getClassNameCache = function() {
                    return this._keyToClassName
                }, e.prototype.argsFromClassName = function(e) {
                    var t = this._classNameToArgs[e];
                    return t && t.args
                }, e.prototype.insertedRulesFromClassName = function(e) {
                    var t = this._classNameToArgs[e];
                    return t && t.rules
                }, e.prototype.insertRule = function(e, t) {
                    var n = this._config.injectionMode !== o ? this._getStyleElement() : void 0;
                    if (t && this._preservedRules.push(e), n) switch (this._config.injectionMode) {
                        case a:
                            var r = n.sheet;
                            try {
                                r.insertRule(e, r.cssRules.length)
                            } catch (i) {}
                            break;
                        case s:
                            n.appendChild(document.createTextNode(e))
                    } else this._rules.push(e);
                    this._config.onInsertRule && this._config.onInsertRule(e)
                }, e.prototype.getRules = function(e) {
                    return (e ? this._preservedRules.join("") : "") + this._rules.join("") + this._rulesToInsert.join("")
                }, e.prototype.reset = function() {
                    this._rules = [], this._rulesToInsert = [], this._counter = 0, this._classNameToArgs = {}, this._keyToClassName = {}, this._onResetCallbacks.forEach((function(e) {
                        return e()
                    }))
                }, e.prototype.resetKeys = function() {
                    this._keyToClassName = {}
                }, e.prototype._getStyleElement = function() {
                    var e = this;
                    return this._styleElement || "undefined" === typeof document || (this._styleElement = this._createStyleElement(), u || window.requestAnimationFrame((function() {
                        e._styleElement = void 0
                    }))), this._styleElement
                }, e.prototype._createStyleElement = function() {
                    var e = document.head,
                        t = document.createElement("style");
                    t.setAttribute("data-merge-styles", "true");
                    var n = this._config.cspSettings;
                    if (n && n.nonce && t.setAttribute("nonce", n.nonce), this._lastStyleElement) e.insertBefore(t, this._lastStyleElement.nextElementSibling);
                    else {
                        var r = this._findPlaceholderStyleTag();
                        r ? e.insertBefore(t, r.nextElementSibling) : e.insertBefore(t, e.childNodes[0])
                    }
                    return this._lastStyleElement = t, t
                }, e.prototype._findPlaceholderStyleTag = function() {
                    var e = document.head;
                    return e ? e.querySelector("style[data-merge-styles]") : null
                }, e
            }()
        },
        15651: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return i
                }
            });
            var r = n(70655);

            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (e && 1 === e.length && e[0] && !e[0].subComponentStyles) return e[0];
                for (var n = {}, o = {}, a = 0, s = e; a < s.length; a++) {
                    var u = s[a];
                    if (u)
                        for (var c in u)
                            if (u.hasOwnProperty(c)) {
                                if ("subComponentStyles" === c && void 0 !== u.subComponentStyles) {
                                    var l = u.subComponentStyles;
                                    for (var f in l) l.hasOwnProperty(f) && (o.hasOwnProperty(f) ? o[f].push(l[f]) : o[f] = [l[f]]);
                                    continue
                                }
                                var d = n[c],
                                    p = u[c];
                                n[c] = void 0 === d ? p : (0, r.pr)(Array.isArray(d) ? d : [d], Array.isArray(p) ? p : [p])
                            }
                }
                if (Object.keys(o).length > 0) {
                    n.subComponentStyles = {};
                    var h = n.subComponentStyles,
                        v = function(e) {
                            if (o.hasOwnProperty(e)) {
                                var t = o[e];
                                h[e] = function(e) {
                                    return i.apply(void 0, t.map((function(t) {
                                        return "function" === typeof t ? t(e) : t
                                    })))
                                }
                            }
                        };
                    for (var f in o) v(f)
                }
                return n
            }
        },
        80317: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return i
                }
            });
            var r = n(6621);

            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = [],
                    i = [],
                    o = r.Y.getInstance();

                function a(e) {
                    for (var t = 0, r = e; t < r.length; t++) {
                        var s = r[t];
                        if (s)
                            if ("string" === typeof s)
                                if (s.indexOf(" ") >= 0) a(s.split(" "));
                                else {
                                    var u = o.argsFromClassName(s);
                                    u ? a(u) : -1 === n.indexOf(s) && n.push(s)
                                }
                        else Array.isArray(s) ? a(s) : "object" === typeof s && i.push(s)
                    }
                }
                return a(e), {
                    classes: n,
                    objects: i
                }
            }
        },
        17951: function(e, t, n) {
            "use strict";
            n.d(t, {
                Jh: function() {
                    return P
                },
                dH: function() {
                    return D
                },
                AE: function() {
                    return A
                },
                aj: function() {
                    return C
                }
            });
            var r, i = n(70655),
                o = n(6621),
                a = {};

            function s(e, t) {
                var n = e[t];
                "-" !== n.charAt(0) && (e[t] = a[n] = a[n] || n.replace(/([A-Z])/g, "-$1").toLowerCase())
            }
            var u = {
                "user-select": 1
            };

            function c(e, t) {
                var n = function() {
                        if (!r) {
                            var e = "undefined" !== typeof document ? document : void 0,
                                t = "undefined" !== typeof navigator ? navigator : void 0,
                                n = t ? t.userAgent.toLowerCase() : void 0;
                            r = e ? {
                                isWebkit: !(!e || !("WebkitAppearance" in e.documentElement.style)),
                                isMoz: !!(n && n.indexOf("firefox") > -1),
                                isOpera: !!(n && n.indexOf("opera") > -1),
                                isMs: !(!t || !/rv:11.0/i.test(t.userAgent) && !/Edge\/\d./i.test(navigator.userAgent))
                            } : {
                                isWebkit: !0,
                                isMoz: !0,
                                isOpera: !0,
                                isMs: !0
                            }
                        }
                        return r
                    }(),
                    i = e[t];
                if (u[i]) {
                    var o = e[t + 1];
                    u[i] && (n.isWebkit && e.push("-webkit-" + i, o), n.isMoz && e.push("-moz-" + i, o), n.isMs && e.push("-ms-" + i, o), n.isOpera && e.push("-o-" + i, o))
                }
            }
            var l, f = ["column-count", "font-weight", "flex", "flex-grow", "flex-shrink", "fill-opacity", "opacity", "order", "z-index", "zoom"];

            function d(e, t) {
                var n = e[t],
                    r = e[t + 1];
                if ("number" === typeof r) {
                    var i = f.indexOf(n) > -1,
                        o = n.indexOf("--") > -1,
                        a = i || o ? "" : "px";
                    e[t + 1] = "" + r + a
                }
            }
            var p = "left",
                h = "right",
                v = ((l = {}).left = h, l.right = p, l),
                g = {
                    "w-resize": "e-resize",
                    "sw-resize": "se-resize",
                    "nw-resize": "ne-resize"
                };

            function m(e, t, n) {
                if (e.rtl) {
                    var r = t[n];
                    if (!r) return;
                    var i = t[n + 1];
                    if ("string" === typeof i && i.indexOf("@noflip") >= 0) t[n + 1] = i.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, "");
                    else if (r.indexOf(p) >= 0) t[n] = r.replace(p, h);
                    else if (r.indexOf(h) >= 0) t[n] = r.replace(h, p);
                    else if (String(i).indexOf(p) >= 0) t[n + 1] = i.replace(p, h);
                    else if (String(i).indexOf(h) >= 0) t[n + 1] = i.replace(h, p);
                    else if (v[r]) t[n] = v[r];
                    else if (g[i]) t[n + 1] = g[i];
                    else switch (r) {
                        case "margin":
                        case "padding":
                            t[n + 1] = function(e) {
                                if ("string" === typeof e) {
                                    var t = e.split(" ");
                                    if (4 === t.length) return t[0] + " " + t[3] + " " + t[2] + " " + t[1]
                                }
                                return e
                            }(i);
                            break;
                        case "box-shadow":
                            t[n + 1] = function(e, t) {
                                var n = e.split(" "),
                                    r = parseInt(n[t], 10);
                                return n[0] = n[0].replace(String(r), String(-1 * r)), n.join(" ")
                            }(i, 0)
                    }
                }
            }

            function y(e) {
                var t = e && e["&"];
                return t ? t.displayName : void 0
            }
            var b = /\:global\((.+?)\)/g;

            function w(e, t) {
                return e.indexOf(":global(") >= 0 ? e.replace(b, "$1") : 0 === e.indexOf(":") ? t + e : e.indexOf("&") < 0 ? t + " " + e : e
            }

            function x(e, t, n, r) {
                void 0 === t && (t = {
                    __order: []
                }), 0 === n.indexOf("@") ? k([r], t, n = n + "{" + e) : n.indexOf(",") > -1 ? function(e) {
                    if (!b.test(e)) return e;
                    for (var t = [], n = /\:global\((.+?)\)/g, r = null; r = n.exec(e);) r[1].indexOf(",") > -1 && t.push([r.index, r.index + r[0].length, r[1].split(",").map((function(e) {
                        return ":global(" + e.trim() + ")"
                    })).join(", ")]);
                    return t.reverse().reduce((function(e, t) {
                        var n = t[0],
                            r = t[1],
                            i = t[2];
                        return e.slice(0, n) + i + e.slice(r)
                    }), e)
                }(n).split(",").map((function(e) {
                    return e.trim()
                })).forEach((function(n) {
                    return k([r], t, w(n, e))
                })) : k([r], t, w(n, e))
            }

            function k(e, t, n) {
                void 0 === t && (t = {
                    __order: []
                }), void 0 === n && (n = "&");
                var r = o.Y.getInstance(),
                    i = t[n];
                i || (i = {}, t[n] = i, t.__order.push(n));
                for (var a = 0, s = e; a < s.length; a++) {
                    var u = s[a];
                    if ("string" === typeof u) {
                        var c = r.argsFromClassName(u);
                        c && k(c, t, n)
                    } else if (Array.isArray(u)) k(u, t, n);
                    else
                        for (var l in u)
                            if (u.hasOwnProperty(l)) {
                                var f = u[l];
                                if ("selectors" === l) {
                                    var d = u.selectors;
                                    for (var p in d) d.hasOwnProperty(p) && x(n, t, p, d[p])
                                } else "object" === typeof f ? null !== f && x(n, t, l, f) : void 0 !== f && ("margin" === l || "padding" === l ? O(i, l, f) : i[l] = f)
                            }
                }
                return t
            }

            function O(e, t, n) {
                var r = "string" === typeof n ? n.split(" ") : [n];
                e[t + "Top"] = r[0], e[t + "Right"] = r[1] || r[0], e[t + "Bottom"] = r[2] || r[0], e[t + "Left"] = r[3] || r[1] || r[0]
            }

            function E(e, t) {
                for (var n = [e.rtl ? "rtl" : "ltr"], r = !1, i = 0, o = t.__order; i < o.length; i++) {
                    var a = o[i];
                    n.push(a);
                    var s = t[a];
                    for (var u in s) s.hasOwnProperty(u) && void 0 !== s[u] && (r = !0, n.push(u, s[u]))
                }
                return r ? n.join("") : void 0
            }

            function S(e, t) {
                return t <= 0 ? "" : 1 === t ? e : e + S(e, t - 1)
            }

            function D(e, t) {
                if (!t) return "";
                var n = [];
                for (var r in t) t.hasOwnProperty(r) && "displayName" !== r && void 0 !== t[r] && n.push(r, t[r]);
                for (var i = 0; i < n.length; i += 2) s(n, i), d(n, i), m(e, n, i), c(n, i);
                for (i = 1; i < n.length; i += 4) n.splice(i, 1, ":", n[i], ";");
                return n.join("")
            }

            function C(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = k(t),
                    i = E(e, r);
                if (i) {
                    var a = o.Y.getInstance(),
                        s = {
                            className: a.classNameFromKey(i),
                            key: i,
                            args: t
                        };
                    if (!s.className) {
                        s.className = a.getClassName(y(r));
                        for (var u = [], c = 0, l = r.__order; c < l.length; c++) {
                            var f = l[c];
                            u.push(f, D(e, r[f]))
                        }
                        s.rulesToInsert = u
                    }
                    return s
                }
            }

            function P(e, t) {
                void 0 === t && (t = 1);
                var n = o.Y.getInstance(),
                    r = e.className,
                    i = e.key,
                    a = e.args,
                    s = e.rulesToInsert;
                if (s) {
                    for (var u = 0; u < s.length; u += 2) {
                        var c = s[u + 1];
                        if (c) {
                            var l = s[u],
                                f = (l = l.replace(/&/g, S("." + e.className, t))) + "{" + c + "}" + (0 === l.indexOf("@") ? "}" : "");
                            n.insertRule(f)
                        }
                    }
                    n.cacheClassName(r, i, a, s)
                }
            }

            function A(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = C.apply(void 0, (0, i.pr)([e], t));
                return r ? (P(r, e.specificityMultiplier), r.className) : ""
            }
        },
        57969: function(e, t, n) {
            "use strict";
            n.d(t, {
                E$: function() {
                    return r.m
                },
                y0: function() {
                    return s
                }
            });
            var r = n(15651),
                i = n(80317),
                o = n(10399),
                a = n(17951);

            function s() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return u(e, (0, o.Eo)())
            }

            function u(e, t) {
                var n = e instanceof Array ? e : [e],
                    r = (0, i.U)(n),
                    o = r.classes,
                    s = r.objects;
                return s.length && o.push((0, a.AE)(t || {}, s)), o.join(" ")
            }
            var c = {},
                l = void 0;
            try {
                l = window
            } catch (V) {}

            function f(e, t) {
                if ("undefined" !== typeof l) {
                    var n = l.__packages__ = l.__packages__ || {};
                    if (!n[e] || !c[e]) c[e] = t, (n[e] = n[e] || []).push(t)
                }
            }
            f("@uifabric/set-version", "6.0.0"), f("@uifabric/styling", "7.19.0");
            var d = n(80440),
                p = n(8004),
                h = function() {
                    return (h = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                v = "undefined" === typeof window ? n.g : window;
            v && v.CSPSettings && v.CSPSettings.nonce,
                function() {
                    var e = v.__themeState__ || {
                        theme: void 0,
                        lastStyleElement: void 0,
                        registeredStyles: []
                    };
                    e.runState || (e = h(h({}, e), {
                        perf: {
                            count: 0,
                            duration: 0
                        },
                        runState: {
                            flushTimer: 0,
                            mode: 0,
                            buffer: []
                        }
                    }));
                    e.registeredThemableStyles || (e = h(h({}, e), {
                        registeredThemableStyles: []
                    }));
                    v.__themeState__ = e
                }();
            var g, m = {
                themeDarker: "#004578",
                themeDark: "#005a9e",
                themeDarkAlt: "#106ebe",
                themePrimary: "#0078d4",
                themeSecondary: "#2b88d8",
                themeTertiary: "#71afe5",
                themeLight: "#c7e0f4",
                themeLighter: "#deecf9",
                themeLighterAlt: "#eff6fc",
                black: "#000000",
                blackTranslucent40: "rgba(0,0,0,.4)",
                neutralDark: "#201f1e",
                neutralPrimary: "#323130",
                neutralPrimaryAlt: "#3b3a39",
                neutralSecondary: "#605e5c",
                neutralSecondaryAlt: "#8a8886",
                neutralTertiary: "#a19f9d",
                neutralTertiaryAlt: "#c8c6c4",
                neutralQuaternary: "#d2d0ce",
                neutralQuaternaryAlt: "#e1dfdd",
                neutralLight: "#edebe9",
                neutralLighter: "#f3f2f1",
                neutralLighterAlt: "#faf9f8",
                accent: "#0078d4",
                white: "#ffffff",
                whiteTranslucent40: "rgba(255,255,255,.4)",
                yellowDark: "#d29200",
                yellow: "#ffb900",
                yellowLight: "#fff100",
                orange: "#d83b01",
                orangeLight: "#ea4300",
                orangeLighter: "#ff8c00",
                redDark: "#a4262c",
                red: "#e81123",
                magentaDark: "#5c005c",
                magenta: "#b4009e",
                magentaLight: "#e3008c",
                purpleDark: "#32145a",
                purple: "#5c2d91",
                purpleLight: "#b4a0ff",
                blueDark: "#002050",
                blueMid: "#00188f",
                blue: "#0078d4",
                blueLight: "#00bcf2",
                tealDark: "#004b50",
                teal: "#008272",
                tealLight: "#00b294",
                greenDark: "#004b1c",
                green: "#107c10",
                greenLight: "#bad80a"
            };
            ! function(e) {
                e.depth0 = "0 0 0 0 transparent", e.depth4 = "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)", e.depth8 = "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)", e.depth16 = "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)", e.depth64 = "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)"
            }(g || (g = {}));
            var y, b, w, x, k, O = {
                    elevation4: g.depth4,
                    elevation8: g.depth8,
                    elevation16: g.depth16,
                    elevation64: g.depth64,
                    roundedCorner2: "2px",
                    roundedCorner4: "4px",
                    roundedCorner6: "6px"
                },
                E = n(6621);
            ! function(e) {
                e.Arabic = "Segoe UI Web (Arabic)", e.Cyrillic = "Segoe UI Web (Cyrillic)", e.EastEuropean = "Segoe UI Web (East European)", e.Greek = "Segoe UI Web (Greek)", e.Hebrew = "Segoe UI Web (Hebrew)", e.Thai = "Leelawadee UI Web", e.Vietnamese = "Segoe UI Web (Vietnamese)", e.WestEuropean = "Segoe UI Web (West European)", e.Selawik = "Selawik Web", e.Armenian = "Segoe UI Web (Armenian)", e.Georgian = "Segoe UI Web (Georgian)"
            }(y || (y = {})),
            function(e) {
                e.Arabic = "'" + y.Arabic + "'", e.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun", e.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu", e.Cyrillic = "'" + y.Cyrillic + "'", e.EastEuropean = "'" + y.EastEuropean + "'", e.Greek = "'" + y.Greek + "'", e.Hebrew = "'" + y.Hebrew + "'", e.Hindi = "'Nirmala UI'", e.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka", e.Korean = "'Malgun Gothic', Gulim", e.Selawik = "'" + y.Selawik + "'", e.Thai = "'Leelawadee UI Web', 'Kmer UI'", e.Vietnamese = "'" + y.Vietnamese + "'", e.WestEuropean = "'" + y.WestEuropean + "'", e.Armenian = "'" + y.Armenian + "'", e.Georgian = "'" + y.Georgian + "'"
            }(b || (b = {})),
            function(e) {
                e.size10 = "10px", e.size12 = "12px", e.size14 = "14px", e.size16 = "16px", e.size18 = "18px", e.size20 = "20px", e.size24 = "24px", e.size28 = "28px", e.size32 = "32px", e.size42 = "42px", e.size68 = "68px", e.mini = "10px", e.xSmall = "10px", e.small = "12px", e.smallPlus = "12px", e.medium = "14px", e.mediumPlus = "16px", e.icon = "16px", e.large = "18px", e.xLarge = "20px", e.xLargePlus = "24px", e.xxLarge = "28px", e.xxLargePlus = "32px", e.superLarge = "42px", e.mega = "68px"
            }(w || (w = {})),
            function(e) {
                e.light = 100, e.semilight = 300, e.regular = 400, e.semibold = 600, e.bold = 700
            }(x || (x = {})),
            function(e) {
                e.xSmall = "10px", e.small = "12px", e.medium = "16px", e.large = "20px"
            }(k || (k = {}));
            var S = "'Segoe UI', '" + y.WestEuropean + "'",
                D = {
                    ar: b.Arabic,
                    bg: b.Cyrillic,
                    cs: b.EastEuropean,
                    el: b.Greek,
                    et: b.EastEuropean,
                    he: b.Hebrew,
                    hi: b.Hindi,
                    hr: b.EastEuropean,
                    hu: b.EastEuropean,
                    ja: b.Japanese,
                    kk: b.EastEuropean,
                    ko: b.Korean,
                    lt: b.EastEuropean,
                    lv: b.EastEuropean,
                    pl: b.EastEuropean,
                    ru: b.Cyrillic,
                    sk: b.EastEuropean,
                    "sr-latn": b.EastEuropean,
                    th: b.Thai,
                    tr: b.EastEuropean,
                    uk: b.Cyrillic,
                    vi: b.Vietnamese,
                    "zh-hans": b.ChineseSimplified,
                    "zh-hant": b.ChineseTraditional,
                    hy: b.Armenian,
                    ka: b.Georgian
                };

            function C(e, t, n) {
                return {
                    fontFamily: n,
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased",
                    fontSize: e,
                    fontWeight: t
                }
            }
            var P = n(58611);
            var A, T = n(26157),
                F = "language";
            var j = function(e) {
                var t = function(e) {
                    for (var t in D)
                        if (D.hasOwnProperty(t) && e && 0 === t.indexOf(e)) return D[t];
                    return S
                }(e) + ", 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
                return {
                    tiny: C(w.mini, x.regular, t),
                    xSmall: C(w.xSmall, x.regular, t),
                    small: C(w.small, x.regular, t),
                    smallPlus: C(w.smallPlus, x.regular, t),
                    medium: C(w.medium, x.regular, t),
                    mediumPlus: C(w.mediumPlus, x.regular, t),
                    large: C(w.large, x.regular, t),
                    xLarge: C(w.xLarge, x.semibold, t),
                    xLargePlus: C(w.xLargePlus, x.semibold, t),
                    xxLarge: C(w.xxLarge, x.semibold, t),
                    xxLargePlus: C(w.xxLargePlus, x.semibold, t),
                    superLarge: C(w.superLarge, x.semibold, t),
                    mega: C(w.mega, x.semibold, t)
                }
            }(function(e) {
                if (void 0 === e && (e = "localStorage"), void 0 === A) {
                    var t = (0, P.M)(),
                        n = "localStorage" === e ? function(e) {
                            var t = null;
                            try {
                                var n = (0, p.J)();
                                t = n ? n.localStorage.getItem(e) : null
                            } catch (V) {}
                            return t
                        }(F) : "sessionStorage" === e ? T.r(F) : void 0;
                    n && (A = n), void 0 === A && t && (A = t.documentElement.getAttribute("lang")), void 0 === A && (A = "en")
                }
                return A
            }("sessionStorage"));

            function I(e, t, n, r) {
                var i;
                i = {
                    fontFamily: e = "'" + e + "'",
                    src: (void 0 !== r ? "local('" + r + "')," : "") + "url('" + t + ".woff2') format('woff2'),url('" + t + ".woff') format('woff')",
                    fontWeight: n,
                    fontStyle: "normal",
                    fontDisplay: "swap"
                }, E.Y.getInstance().insertRule("@font-face{" + (0, a.dH)((0, o.Eo)(), i) + "}", !0)
            }

            function _(e, t, n, r, i) {
                void 0 === r && (r = "segoeui");
                var o = e + "/" + n + "/" + r;
                I(t, o + "-light", x.light, i && i + " Light"), I(t, o + "-semilight", x.semilight, i && i + " SemiLight"), I(t, o + "-regular", x.regular, i), I(t, o + "-semibold", x.semibold, i && i + " SemiBold"), I(t, o + "-bold", x.bold, i && i + " Bold")
            }

            function M(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    L(e || {}, o)
                }
                return e
            }

            function L(e, t, n) {
                for (var r in void 0 === n && (n = []), n.push(t), t)
                    if (t.hasOwnProperty(r) && "__proto__" !== r && "constructor" !== r && "prototype" !== r) {
                        var i = t[r];
                        if ("object" !== typeof i || null === i || Array.isArray(i)) e[r] = i;
                        else {
                            var o = n.indexOf(i) > -1;
                            e[r] = o ? i : L(e[r] || {}, i, n)
                        }
                    } return n.pop(), e
            }! function(e) {
                if (e) {
                    var t = e + "/fonts";
                    _(t, y.Thai, "leelawadeeui-thai", "leelawadeeui"), _(t, y.Arabic, "segoeui-arabic"), _(t, y.Cyrillic, "segoeui-cyrillic"), _(t, y.EastEuropean, "segoeui-easteuropean"), _(t, y.Greek, "segoeui-greek"), _(t, y.Hebrew, "segoeui-hebrew"), _(t, y.Vietnamese, "segoeui-vietnamese"), _(t, y.WestEuropean, "segoeui-westeuropean", "segoeui", "Segoe UI"), _(t, b.Selawik, "selawik", "selawik"), _(t, y.Armenian, "segoeui-armenian"), _(t, y.Georgian, "segoeui-georgian"), I("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-semilight", x.light), I("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-bold", x.semibold)
                }
            }(function() {
                var e, t, n;
                return null !== (n = null === (t = null === (e = (0, p.J)()) || void 0 === e ? void 0 : e.FabricConfig) || void 0 === t ? void 0 : t.fontBaseUrl) && void 0 !== n ? n : "https://static2.sharepointonline.com/files/fabric/assets"
            }());
            var B = n(70655);

            function N(e, t, n, r, i) {
                return void 0 === i && (i = !1),
                    function(e, t) {
                        var n = "";
                        !0 === t && (n = " /* @deprecated */");
                        return e.listTextColor = e.listText + n, e.menuItemBackgroundChecked += n, e.warningHighlight += n, e.warningText = e.messageText + n, e.successText += n, e
                    }(R(e, t, (0, B.pi)({
                        primaryButtonBorder: "transparent",
                        errorText: r ? "#F1707B" : "#a4262c",
                        messageText: r ? "#F3F2F1" : "#323130",
                        messageLink: r ? "#6CB8F6" : "#005A9E",
                        messageLinkHovered: r ? "#82C7FF" : "#004578",
                        infoIcon: r ? "#C8C6C4" : "#605e5c",
                        errorIcon: r ? "#F1707B" : "#A80000",
                        blockingIcon: r ? "#442726" : "#FDE7E9",
                        warningIcon: r ? "#C8C6C4" : "#797775",
                        severeWarningIcon: r ? "#FCE100" : "#D83B01",
                        successIcon: r ? "#92C353" : "#107C10",
                        infoBackground: r ? "#323130" : "#f3f2f1",
                        errorBackground: r ? "#442726" : "#FDE7E9",
                        blockingBackground: r ? "#442726" : "#FDE7E9",
                        warningBackground: r ? "#433519" : "#FFF4CE",
                        severeWarningBackground: r ? "#4F2A0F" : "#FED9CC",
                        successBackground: r ? "#393D1B" : "#DFF6DD",
                        warningHighlight: r ? "#fff100" : "#ffb900",
                        successText: r ? "#92c353" : "#107C10"
                    }, n), r), i)
            }

            function R(e, t, n, r, i) {
                var o, a, s;
                void 0 === i && (i = !1);
                var u = {},
                    c = e || {},
                    l = c.white,
                    f = c.black,
                    d = c.themePrimary,
                    p = c.themeDark,
                    h = c.themeDarker,
                    v = c.themeDarkAlt,
                    g = c.themeLighter,
                    m = c.neutralLight,
                    y = c.neutralLighter,
                    b = c.neutralDark,
                    w = c.neutralQuaternary,
                    x = c.neutralQuaternaryAlt,
                    k = c.neutralPrimary,
                    O = c.neutralSecondary,
                    E = c.neutralSecondaryAlt,
                    S = c.neutralTertiary,
                    D = c.neutralTertiaryAlt,
                    C = c.neutralLighterAlt,
                    P = c.accent;
                return l && (u.bodyBackground = l, u.bodyFrameBackground = l, u.accentButtonText = l, u.buttonBackground = l, u.primaryButtonText = l, u.primaryButtonTextHovered = l, u.primaryButtonTextPressed = l, u.inputBackground = l, u.inputForegroundChecked = l, u.listBackground = l, u.menuBackground = l, u.cardStandoutBackground = l), f && (u.bodyTextChecked = f, u.buttonTextCheckedHovered = f), d && (u.link = d, u.primaryButtonBackground = d, u.inputBackgroundChecked = d, u.inputIcon = d, u.inputFocusBorderAlt = d, u.menuIcon = d, u.menuHeader = d, u.accentButtonBackground = d), p && (u.primaryButtonBackgroundPressed = p, u.inputBackgroundCheckedHovered = p, u.inputIconHovered = p), h && (u.linkHovered = h), v && (u.primaryButtonBackgroundHovered = v), g && (u.inputPlaceholderBackgroundChecked = g), m && (u.bodyBackgroundChecked = m, u.bodyFrameDivider = m, u.bodyDivider = m, u.variantBorder = m, u.buttonBackgroundCheckedHovered = m, u.buttonBackgroundPressed = m, u.listItemBackgroundChecked = m, u.listHeaderBackgroundPressed = m, u.menuItemBackgroundPressed = m, u.menuItemBackgroundChecked = m), y && (u.bodyBackgroundHovered = y, u.buttonBackgroundHovered = y, u.buttonBackgroundDisabled = y, u.buttonBorderDisabled = y, u.primaryButtonBackgroundDisabled = y, u.disabledBackground = y, u.listItemBackgroundHovered = y, u.listHeaderBackgroundHovered = y, u.menuItemBackgroundHovered = y), w && (u.primaryButtonTextDisabled = w, u.disabledSubtext = w), x && (u.listItemBackgroundCheckedHovered = x), S && (u.disabledBodyText = S, u.variantBorderHovered = (null === (o = n) || void 0 === o ? void 0 : o.variantBorderHovered) || S, u.buttonTextDisabled = S, u.inputIconDisabled = S, u.disabledText = S), k && (u.bodyText = k, u.actionLink = k, u.buttonText = k, u.inputBorderHovered = k, u.inputText = k, u.listText = k, u.menuItemText = k), C && (u.bodyStandoutBackground = C, u.defaultStateBackground = C), b && (u.actionLinkHovered = b, u.buttonTextHovered = b, u.buttonTextChecked = b, u.buttonTextPressed = b, u.inputTextHovered = b, u.menuItemTextHovered = b), O && (u.bodySubtext = O, u.focusBorder = O, u.inputBorder = O, u.smallInputBorder = O, u.inputPlaceholderText = O), E && (u.buttonBorder = E), D && (u.disabledBodySubtext = D, u.disabledBorder = D, u.buttonBackgroundChecked = D, u.menuDivider = D), P && (u.accentButtonBackground = P), (null === (a = t) || void 0 === a ? void 0 : a.elevation4) && (u.cardShadow = t.elevation4), !r && (null === (s = t) || void 0 === s ? void 0 : s.elevation8) ? u.cardShadowHovered = t.elevation8 : u.variantBorderHovered && (u.cardShadowHovered = "0 0 1px " + u.variantBorderHovered), u = (0, B.pi)((0, B.pi)({}, u), n)
            }
            var z = {
                s2: "4px",
                s1: "8px",
                m: "16px",
                l1: "20px",
                l2: "32px"
            };

            function H(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = !1);
                var n = !!e.isInverted;
                return function(e, t) {
                    var n, r, i, o;
                    void 0 === t && (t = {});
                    var a = M({}, e, t, {
                        semanticColors: R(t.palette, t.effects, t.semanticColors, void 0 === t.isInverted ? e.isInverted : t.isInverted)
                    });
                    if ((null === (n = t.palette) || void 0 === n ? void 0 : n.themePrimary) && !(null === (r = t.palette) || void 0 === r ? void 0 : r.accent) && (a.palette.accent = t.palette.themePrimary), t.defaultFontStyle)
                        for (var s = 0, u = Object.keys(a.fonts); s < u.length; s++) {
                            var c = u[s];
                            a.fonts[c] = M(a.fonts[c], t.defaultFontStyle, null === (o = null === (i = t) || void 0 === i ? void 0 : i.fonts) || void 0 === o ? void 0 : o[c])
                        }
                    return t.stylesheets && (a.stylesheets = (e.stylesheets || []).concat(t.stylesheets)), a
                }({
                    palette: m,
                    effects: O,
                    fonts: j,
                    spacing: z,
                    isInverted: n,
                    disableGlobalClassNames: !1,
                    semanticColors: N(m, O, void 0, n, t),
                    rtl: void 0
                }, e)
            }
            var W = H({}),
                U = "theme";

            function q() {
                var e, t, n;
                if (!d.X.getSettings([U]).theme) {
                    var r = (0, p.J)();
                    (null === (n = null === (t = r) || void 0 === t ? void 0 : t.FabricConfig) || void 0 === n ? void 0 : n.theme) && (W = H(r.FabricConfig.theme)), d.X.applySettings(((e = {}).theme = W, e))
                }
            }
            q(), q()
        },
        47159: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return y
                }
            });
            var r = n(15651),
                i = n(80317),
                o = n(17951);

            function a(e, t) {
                var n, a, s = {
                    subComponentStyles: {}
                };
                if (!e[0] && e.length <= 1) return {
                    subComponentStyles: {}
                };
                var u = r.m.apply(void 0, e),
                    c = [];
                for (var l in u)
                    if (u.hasOwnProperty(l)) {
                        if ("subComponentStyles" === l) {
                            s.subComponentStyles = u.subComponentStyles || {};
                            continue
                        }
                        var f = u[l],
                            d = (0, i.U)(f),
                            p = d.classes,
                            h = d.objects;
                        if (null === (n = h) || void 0 === n ? void 0 : n.length)(m = (0, o.aj)(t || {}, {
                            displayName: l
                        }, h)) && (c.push(m), s[l] = p.concat([m.className]).join(" "));
                        else s[l] = p.join(" ")
                    } for (var v = 0, g = c; v < g.length; v++) {
                    var m;
                    (m = g[v]) && (0, o.Jh)(m, null === (a = t) || void 0 === a ? void 0 : a.specificityMultiplier)
                }
                return s
            }
            var s, u = n(6621),
                c = n(58611),
                l = n(26157),
                f = n(10399),
                d = "isRTL";

            function p(e) {
                if (void 0 === e && (e = {}), void 0 !== e.rtl) return e.rtl;
                if (void 0 === s) {
                    var t = (0, l.r)(d);
                    null !== t && function(e, t) {
                        void 0 === t && (t = !1);
                        var n = (0, c.M)();
                        n && n.documentElement.setAttribute("dir", e ? "rtl" : "ltr");
                        t && (0, l.L)(d, e ? "1" : "0");
                        s = e, (0, f.ok)(s)
                    }(s = "1" === t);
                    var n = (0, c.M)();
                    void 0 === s && n && (s = "rtl" === (n.body && n.body.getAttribute("dir") || n.documentElement.getAttribute("dir")), (0, f.ok)(s))
                }
                return !!s
            }
            var h = n(8004),
                v = 0,
                g = u.Y.getInstance();
            g && g.onReset && g.onReset((function() {
                return v++
            }));
            var m = "__retval__";

            function y(e) {
                void 0 === e && (e = {});
                var t = new Map,
                    n = 0,
                    r = 0,
                    i = v;
                return function(o, s) {
                    var u, c;
                    if (void 0 === s && (s = {}), e.useStaticStyles && "function" === typeof o && o.__noStyleOverride__) return o(s);
                    r++;
                    var l = t,
                        f = s.theme,
                        d = f && void 0 !== f.rtl ? f.rtl : p(),
                        g = e.disableCaching;
                    (i !== v && (i = v, t = new Map, n = 0), e.disableCaching || (l = w(t, o), l = w(l, s)), !g && l[m] || (l[m] = void 0 === o ? {} : a(["function" === typeof o ? o(s) : o], {
                        rtl: !!d,
                        specificityMultiplier: e.useStaticStyles ? 5 : void 0
                    }), g || n++), n > (e.cacheSize || 50)) && ((null === (c = null === (u = (0, h.J)()) || void 0 === u ? void 0 : u.FabricConfig) || void 0 === c ? void 0 : c.enableClassNameCacheFullWarning) && (console.warn("Styles are being recalculated too frequently. Cache miss rate is " + n + "/" + r + "."), console.trace()), t.clear(), n = 0, e.disableCaching = !0);
                    return l[m]
                }
            }

            function b(e, t) {
                return t = function(e) {
                    switch (e) {
                        case void 0:
                            return "__undefined__";
                        case null:
                            return "__null__";
                        default:
                            return e
                    }
                }(t), e.has(t) || e.set(t, new Map), e.get(t)
            }

            function w(e, t) {
                if ("function" === typeof t)
                    if (t.__cachedInputs__)
                        for (var n = 0, r = t.__cachedInputs__; n < r.length; n++) {
                            e = b(e, r[n])
                        } else e = b(e, t);
                    else if ("object" === typeof t)
                    for (var i in t) t.hasOwnProperty(i) && (e = b(e, t[i]));
                return e
            }
        },
        80440: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return d
                }
            });
            var r = n(70655),
                i = n(8004),
                o = 0,
                a = function() {
                    function e() {}
                    return e.getValue = function(e, t) {
                        var n = s();
                        return void 0 === n[e] && (n[e] = "function" === typeof t ? t() : t), n[e]
                    }, e.setValue = function(e, t) {
                        var n = s(),
                            r = n.__callbacks__,
                            i = n[e];
                        if (t !== i) {
                            n[e] = t;
                            var o = {
                                oldValue: i,
                                value: t,
                                key: e
                            };
                            for (var a in r) r.hasOwnProperty(a) && r[a](o)
                        }
                        return t
                    }, e.addChangeListener = function(e) {
                        var t = e.__id__,
                            n = u();
                        t || (t = e.__id__ = String(o++)), n[t] = e
                    }, e.removeChangeListener = function(e) {
                        delete u()[e.__id__]
                    }, e
                }();

            function s() {
                var e, t = (0, i.J)() || {};
                return t.__globalSettings__ || (t.__globalSettings__ = ((e = {}).__callbacks__ = {}, e)), t.__globalSettings__
            }

            function u() {
                return s().__callbacks__
            }
            var c = {
                    settings: {},
                    scopedSettings: {},
                    inCustomizerContext: !1
                },
                l = a.getValue("customizations", {
                    settings: {},
                    scopedSettings: {},
                    inCustomizerContext: !1
                }),
                f = [],
                d = function() {
                    function e() {}
                    return e.reset = function() {
                        l.settings = {}, l.scopedSettings = {}
                    }, e.applySettings = function(t) {
                        l.settings = (0, r.pi)((0, r.pi)({}, l.settings), t), e._raiseChange()
                    }, e.applyScopedSettings = function(t, n) {
                        l.scopedSettings[t] = (0, r.pi)((0, r.pi)({}, l.scopedSettings[t]), n), e._raiseChange()
                    }, e.getSettings = function(e, t, n) {
                        void 0 === n && (n = c);
                        for (var r = {}, i = t && n.scopedSettings[t] || {}, o = t && l.scopedSettings[t] || {}, a = 0, s = e; a < s.length; a++) {
                            var u = s[a];
                            r[u] = i[u] || n.settings[u] || o[u] || l.settings[u]
                        }
                        return r
                    }, e.applyBatchedUpdates = function(t, n) {
                        e._suppressUpdates = !0;
                        try {
                            t()
                        } catch (r) {}
                        e._suppressUpdates = !1, n || e._raiseChange()
                    }, e.observe = function(e) {
                        f.push(e)
                    }, e.unobserve = function(e) {
                        f = f.filter((function(t) {
                            return t !== e
                        }))
                    }, e._raiseChange = function() {
                        e._suppressUpdates || f.forEach((function(e) {
                            return e()
                        }))
                    }, e
                }()
        },
        58611: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return i
                }
            });
            var r = n(31774);

            function i(e) {
                if (!r.N && "undefined" !== typeof document) {
                    var t = e;
                    return t && t.ownerDocument ? t.ownerDocument : document
                }
            }
        },
        8004: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return o
                }
            });
            var r = n(31774),
                i = void 0;
            try {
                i = window
            } catch (a) {}

            function o(e) {
                if (!r.N && "undefined" !== typeof i) {
                    var t = e;
                    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : i
                }
            }
        },
        31774: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return r
                }
            });
            var r = !1
        },
        32293: function(e, t, n) {
            "use strict";
            n.d(t, {
                NF: function() {
                    return l
                }
            });
            var r = n(6621),
                i = !1,
                o = 0,
                a = {
                    empty: !0
                },
                s = {},
                u = "undefined" === typeof WeakMap ? null : WeakMap;

            function c() {
                o++
            }

            function l(e, t, n) {
                if (void 0 === t && (t = 100), void 0 === n && (n = !1), !u) return e;
                if (!i) {
                    var a = r.Y.getInstance();
                    a && a.onReset && r.Y.getInstance().onReset(c), i = !0
                }
                var s, l = 0,
                    p = o;
                return function() {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    var a = s;
                    (void 0 === s || p !== o || t > 0 && l > t) && (s = d(), l = 0, p = o), a = s;
                    for (var u = 0; u < r.length; u++) {
                        var c = f(r[u]);
                        a.map.has(c) || a.map.set(c, d()), a = a.map.get(c)
                    }
                    return a.hasOwnProperty("value") || (a.value = e.apply(void 0, r), l++), !n || null !== a.value && void 0 !== a.value || (a.value = e.apply(void 0, r)), a.value
                }
            }

            function f(e) {
                return e ? "object" === typeof e || "function" === typeof e ? e : (s[e] || (s[e] = {
                    val: e
                }), s[e]) : a
            }

            function d() {
                return {
                    map: u ? new u : null
                }
            }
        },
        26157: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return i
                },
                L: function() {
                    return o
                }
            });
            var r = n(8004);

            function i(e) {
                var t = null;
                try {
                    var n = (0, r.J)();
                    t = n ? n.sessionStorage.getItem(e) : null
                } catch (i) {}
                return t
            }

            function o(e, t) {
                var n;
                try {
                    null === (n = (0, r.J)()) || void 0 === n || n.sessionStorage.setItem(e, t)
                } catch (i) {}
            }
        },
        65066: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return l
                }
            });
            var r = n(70655),
                i = n(67294),
                o = n(15651);
            var a = n(80440),
                s = i.createContext({
                    customizations: {
                        inCustomizerContext: !1,
                        settings: {},
                        scopedSettings: {}
                    }
                });

            function u(e, t) {
                var n = function() {
                        var e = i.useState(0)[1];
                        return function() {
                            return e((function(e) {
                                return ++e
                            }))
                        }
                    }(),
                    r = i.useContext(s).customizations,
                    o = r.inCustomizerContext;
                return i.useEffect((function() {
                    return o || a.X.observe(n),
                        function() {
                            o || a.X.unobserve(n)
                        }
                }), [o]), a.X.getSettings(e, t, r)
            }
            var c = ["theme", "styles"];

            function l(e, t, n, a, s) {
                var l = (a = a || {
                        scope: "",
                        fields: void 0
                    }).scope,
                    f = a.fields,
                    d = void 0 === f ? c : f,
                    p = i.forwardRef((function(a, s) {
                        var c = i.useRef(),
                            f = u(d, l),
                            p = f.styles,
                            h = (f.dir, (0, r._T)(f, ["styles", "dir"])),
                            v = n ? n(a) : void 0,
                            g = c.current && c.current.__cachedInputs__ || [];
                        if (!c.current || p !== g[1] || a.styles !== g[2]) {
                            var m = function(e) {
                                return function(e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                    for (var r = [], i = 0, a = t; i < a.length; i++) {
                                        var s = a[i];
                                        s && r.push("function" === typeof s ? s(e) : s)
                                    }
                                    return 1 === r.length ? r[0] : r.length ? o.m.apply(void 0, r) : {}
                                }(e, t, p, a.styles)
                            };
                            m.__cachedInputs__ = [t, p, a.styles], m.__noStyleOverride__ = !p && !a.styles, c.current = m
                        }
                        return i.createElement(e, (0, r.pi)({
                            ref: s
                        }, h, v, a, {
                            styles: c.current
                        }))
                    }));
                p.displayName = "Styled" + (e.displayName || e.name);
                var h = s ? i.memo(p) : p;
                return p.displayName && (h.displayName = p.displayName), h
            }
        },
        18869: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        6907: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e = String(e || ""), r.test(e)) return "rtl";
                if (i.test(e)) return "ltr";
                return "neutral"
            };
            var t = "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc",
                n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",
                r = new RegExp("^[^" + n + "]*[" + t + "]"),
                i = new RegExp("^[^" + t + "]*[" + n + "]")
        },
        95573: function(e) {
            "use strict";
            var t = /["'&<>]/;
            e.exports = function(e) {
                var n, r = "" + e,
                    i = t.exec(r);
                if (!i) return r;
                var o = "",
                    a = 0,
                    s = 0;
                for (a = i.index; a < r.length; a++) {
                    switch (r.charCodeAt(a)) {
                        case 34:
                            n = "&quot;";
                            break;
                        case 38:
                            n = "&amp;";
                            break;
                        case 39:
                            n = "&#39;";
                            break;
                        case 60:
                            n = "&lt;";
                            break;
                        case 62:
                            n = "&gt;";
                            break;
                        default:
                            continue
                    }
                    s !== a && (o += r.substring(s, a)), s = a + 1, o += n
                }
                return s !== a ? o + r.substring(s, a) : o
            }
        },
        78181: function(e, t, n) {
            var r;
            e = n.nmd(e),
                function(i) {
                    var o = t,
                        a = (e && e.exports, "object" == typeof n.g && n.g);
                    a.global !== a && a.window;
                    var s = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,
                        u = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
                        c = function(e) {
                            for (var t = "", n = (e = e.replace(s, (function(e, t, n) {
                                    return c(n) + t
                                })).replace(u, "$2$1")).length; n--;) t += e.charAt(n);
                            return t
                        },
                        l = {
                            version: "0.2.0",
                            reverse: c
                        };
                    void 0 === (r = function() {
                        return l
                    }.call(t, n, t, e)) || (e.exports = r)
                }()
        },
        94470: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                a = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return "undefined" === typeof r || t.call(e, r)
                },
                s = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                u = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, c, l, f = arguments[0],
                    d = 1,
                    p = arguments.length,
                    h = !1;
                for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, d = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); d < p; ++d)
                    if (null != (t = arguments[d]))
                        for (n in t) r = u(f, n), f !== (i = u(t, n)) && (h && i && (a(i) || (c = o(i))) ? (c ? (c = !1, l = r && o(r) ? r : []) : l = r && a(r) ? r : {}, s(f, {
                            name: n,
                            newValue: e(h, l, i)
                        })) : "undefined" !== typeof i && s(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        48738: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        33310: function(e) {
            "use strict";
            e.exports = e => {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
        },
        90430: function(e, t) {
            "use strict";

            function n(e) {
                return !0 === (null != (t = e) && "object" === typeof t && !1 === Array.isArray(t)) && "[object Object]" === Object.prototype.toString.call(e);
                var t
            }
            t.Z = function(e) {
                var t, r;
                return !1 !== n(e) && ("function" === typeof(t = e.constructor) && (!1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf")))
            }
        },
        62705: function(e, t, n) {
            var r = n(55639).Symbol;
            e.exports = r
        },
        44239: function(e, t, n) {
            var r = n(62705),
                i = n(89607),
                o = n(2333),
                a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e)
            }
        },
        27561: function(e, t, n) {
            var r = n(67990),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, r(e) + 1).replace(i, "") : e
            }
        },
        31957: function(e, t, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        },
        89607: function(e, t, n) {
            var r = n(62705),
                i = Object.prototype,
                o = i.hasOwnProperty,
                a = i.toString,
                s = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = o.call(e, s),
                    n = e[s];
                try {
                    e[s] = void 0;
                    var r = !0
                } catch (u) {}
                var i = a.call(e);
                return r && (t ? e[s] = n : delete e[s]), i
            }
        },
        2333: function(e) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        55639: function(e, t, n) {
            var r = n(31957),
                i = "object" == typeof self && self && self.Object === Object && self,
                o = r || i || Function("return this")();
            e.exports = o
        },
        67990: function(e) {
            var t = /\s/;
            e.exports = function(e) {
                for (var n = e.length; n-- && t.test(e.charAt(n)););
                return n
            }
        },
        23279: function(e, t, n) {
            var r = n(13218),
                i = n(7771),
                o = n(14841),
                a = Math.max,
                s = Math.min;
            e.exports = function(e, t, n) {
                var u, c, l, f, d, p, h = 0,
                    v = !1,
                    g = !1,
                    m = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function y(t) {
                    var n = u,
                        r = c;
                    return u = c = void 0, h = t, f = e.apply(r, n)
                }

                function b(e) {
                    return h = e, d = setTimeout(x, t), v ? y(e) : f
                }

                function w(e) {
                    var n = e - p;
                    return void 0 === p || n >= t || n < 0 || g && e - h >= l
                }

                function x() {
                    var e = i();
                    if (w(e)) return k(e);
                    d = setTimeout(x, function(e) {
                        var n = t - (e - p);
                        return g ? s(n, l - (e - h)) : n
                    }(e))
                }

                function k(e) {
                    return d = void 0, m && u ? y(e) : (u = c = void 0, f)
                }

                function O() {
                    var e = i(),
                        n = w(e);
                    if (u = arguments, c = this, p = e, n) {
                        if (void 0 === d) return b(p);
                        if (g) return clearTimeout(d), d = setTimeout(x, t), y(p)
                    }
                    return void 0 === d && (d = setTimeout(x, t)), f
                }
                return t = o(t) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(o(n.maxWait) || 0, t) : l, m = "trailing" in n ? !!n.trailing : m), O.cancel = function() {
                    void 0 !== d && clearTimeout(d), h = 0, u = p = c = d = void 0
                }, O.flush = function() {
                    return void 0 === d ? f : k(i())
                }, O
            }
        },
        13218: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        37005: function(e) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        33448: function(e, t, n) {
            var r = n(44239),
                i = n(37005);
            e.exports = function(e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
            }
        },
        7771: function(e, t, n) {
            var r = n(55639);
            e.exports = function() {
                return r.Date.now()
            }
        },
        23493: function(e, t, n) {
            var r = n(23279),
                i = n(13218);
            e.exports = function(e, t, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), r(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        14841: function(e, t, n) {
            var r = n(27561),
                i = n(13218),
                o = n(33448),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return NaN;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var n = s.test(e);
                return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
            }
        },
        52524: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                "string" !== typeof t && (n = t, t = void 0);
                return function(e) {
                    var t = e || {},
                        n = function(e, t) {
                            var n = -1;
                            for (; ++n < t.length;) p(e, t[n]);
                            return e
                        }({
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: m(de),
                                autolinkProtocol: B,
                                autolinkEmail: B,
                                atxHeading: m(ue),
                                blockQuote: m(re),
                                characterEscape: B,
                                characterReference: B,
                                codeFenced: m(ie),
                                codeFencedFenceInfo: y,
                                codeFencedFenceMeta: y,
                                codeIndented: m(ie, y),
                                codeText: m(oe, y),
                                codeTextData: B,
                                data: B,
                                codeFlowValue: B,
                                definition: m(ae),
                                definitionDestinationString: y,
                                definitionLabelString: y,
                                definitionTitleString: y,
                                emphasis: m(se),
                                hardBreakEscape: m(ce),
                                hardBreakTrailing: m(ce),
                                htmlFlow: m(le, y),
                                htmlFlowData: B,
                                htmlText: m(le, y),
                                htmlTextData: B,
                                image: m(fe),
                                label: y,
                                link: m(de),
                                listItem: m(he),
                                listItemValue: E,
                                listOrdered: m(pe, O),
                                listUnordered: m(pe),
                                paragraph: m(ve),
                                reference: Z,
                                referenceString: y,
                                resourceDestinationString: y,
                                resourceTitleString: y,
                                setextHeading: m(ue),
                                strong: m(ge),
                                thematicBreak: m(ye)
                            },
                            exit: {
                                atxHeading: w(),
                                atxHeadingSequence: I,
                                autolink: w(),
                                autolinkEmail: ne,
                                autolinkProtocol: te,
                                blockQuote: w(),
                                characterEscapeValue: N,
                                characterReferenceMarkerHexadecimal: Q,
                                characterReferenceMarkerNumeric: Q,
                                characterReferenceValue: ee,
                                codeFenced: w(P),
                                codeFencedFence: C,
                                codeFencedFenceInfo: S,
                                codeFencedFenceMeta: D,
                                codeFlowValue: N,
                                codeIndented: w(A),
                                codeText: w(U),
                                codeTextData: N,
                                data: N,
                                definition: w(),
                                definitionDestinationString: j,
                                definitionLabelString: T,
                                definitionTitleString: F,
                                emphasis: w(),
                                hardBreakEscape: w(z),
                                hardBreakTrailing: w(z),
                                htmlFlow: w(H),
                                htmlFlowData: N,
                                htmlText: w(W),
                                htmlTextData: N,
                                image: w(V),
                                label: Y,
                                labelText: $,
                                lineEnding: R,
                                link: w(q),
                                listItem: w(),
                                listOrdered: w(),
                                listUnordered: w(),
                                paragraph: w(),
                                referenceString: X,
                                resourceDestinationString: K,
                                resourceTitleString: J,
                                resource: G,
                                setextHeading: w(L),
                                setextHeadingLineSequence: M,
                                setextHeadingText: _,
                                strong: w(),
                                thematicBreak: w()
                            }
                        }, t.mdastExtensions || []),
                        u = {};
                    return c;

                    function c(e) {
                        for (var t, r = {
                                type: "root",
                                children: []
                            }, a = [], s = [], u = -1, c = {
                                stack: [r],
                                tokenStack: a,
                                config: n,
                                enter: b,
                                exit: x,
                                buffer: y,
                                resume: k,
                                setData: h,
                                getData: v
                            }; ++u < e.length;) "listOrdered" !== e[u][1].type && "listUnordered" !== e[u][1].type || ("enter" === e[u][0] ? s.push(u) : u = l(e, s.pop(u), u));
                        for (u = -1; ++u < e.length;) t = n[e[u][0]], o.call(t, e[u][1].type) && t[e[u][1].type].call(i({
                            sliceSerialize: e[u][2].sliceSerialize
                        }, c), e[u][1]);
                        if (a.length) throw new Error("Cannot close document, a token (`" + a[a.length - 1].type + "`, " + d({
                            start: a[a.length - 1].start,
                            end: a[a.length - 1].end
                        }) + ") is still open");
                        for (r.position = {
                                start: g(e.length ? e[0][1].start : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                }),
                                end: g(e.length ? e[e.length - 2][1].end : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                })
                            }, u = -1; ++u < n.transforms.length;) r = n.transforms[u](r) || r;
                        return r
                    }

                    function l(e, t, n) {
                        for (var r, i, o, a, s, u, c, l = t - 1, f = -1, d = !1; ++l <= n;)
                            if ("listUnordered" === (s = e[l])[1].type || "listOrdered" === s[1].type || "blockQuote" === s[1].type ? ("enter" === s[0] ? f++ : f--, c = void 0) : "lineEndingBlank" === s[1].type ? "enter" === s[0] && (!r || c || f || u || (u = l), c = void 0) : "linePrefix" === s[1].type || "listItemValue" === s[1].type || "listItemMarker" === s[1].type || "listItemPrefix" === s[1].type || "listItemPrefixWhitespace" === s[1].type || (c = void 0), !f && "enter" === s[0] && "listItemPrefix" === s[1].type || -1 === f && "exit" === s[0] && ("listUnordered" === s[1].type || "listOrdered" === s[1].type)) {
                                if (r) {
                                    for (i = l, o = void 0; i--;)
                                        if ("lineEnding" === (a = e[i])[1].type || "lineEndingBlank" === a[1].type) {
                                            if ("exit" === a[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", d = !0), a[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== a[1].type && "blockQuotePrefix" !== a[1].type && "blockQuotePrefixWhitespace" !== a[1].type && "blockQuoteMarker" !== a[1].type && "listItemIndent" !== a[1].type) break;
                                    u && (!o || u < o) && (r._spread = !0), r.end = g(o ? e[o][1].start : s[1].end), e.splice(o || l, 0, ["exit", r, s[2]]), l++, n++
                                }
                                "listItemPrefix" === s[1].type && (r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: g(s[1].start)
                                }, e.splice(l, 0, ["enter", r, s[2]]), l++, n++, u = void 0, c = !0)
                            } return e[t][1]._spread = d, n
                    }

                    function h(e, t) {
                        u[e] = t
                    }

                    function v(e) {
                        return u[e]
                    }

                    function g(e) {
                        return {
                            line: e.line,
                            column: e.column,
                            offset: e.offset
                        }
                    }

                    function m(e, t) {
                        return n;

                        function n(n) {
                            b.call(this, e(n), n), t && t.call(this, n)
                        }
                    }

                    function y() {
                        this.stack.push({
                            type: "fragment",
                            children: []
                        })
                    }

                    function b(e, t) {
                        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                            start: g(t.start)
                        }, e
                    }

                    function w(e) {
                        return t;

                        function t(t) {
                            e && e.call(this, t), x.call(this, t)
                        }
                    }

                    function x(e) {
                        var t = this.stack.pop(),
                            n = this.tokenStack.pop();
                        if (!n) throw new Error("Cannot close `" + e.type + "` (" + d({
                            start: e.start,
                            end: e.end
                        }) + "): it\u2019s not open");
                        if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + d({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + n.type + "`, " + d({
                            start: n.start,
                            end: n.end
                        }) + ") is open");
                        return t.position.end = g(e.end), t
                    }

                    function k() {
                        return r(this.stack.pop())
                    }

                    function O() {
                        h("expectingFirstListItemValue", !0)
                    }

                    function E(e) {
                        v("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), h("expectingFirstListItemValue"))
                    }

                    function S() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function D() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function C() {
                        v("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0))
                    }

                    function P() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), h("flowCodeInside")
                    }

                    function A() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function T(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = a(this.sliceSerialize(e)).toLowerCase()
                    }

                    function F() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function j() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function I(e) {
                        this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                    }

                    function _() {
                        h("setextHeadingSlurpLineEnding", !0)
                    }

                    function M(e) {
                        this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                    }

                    function L() {
                        h("setextHeadingSlurpLineEnding")
                    }

                    function B(e) {
                        var t = this.stack[this.stack.length - 1].children,
                            n = t[t.length - 1];
                        n && "text" === n.type || ((n = me()).position = {
                            start: g(e.start)
                        }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
                    }

                    function N(e) {
                        var t = this.stack.pop();
                        t.value += this.sliceSerialize(e), t.position.end = g(e.end)
                    }

                    function R(e) {
                        var t = this.stack[this.stack.length - 1];
                        if (v("atHardBreak")) return t.children[t.children.length - 1].position.end = g(e.end), void h("atHardBreak");
                        !v("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (B.call(this, e), N.call(this, e))
                    }

                    function z() {
                        h("atHardBreak", !0)
                    }

                    function H() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function W() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function q() {
                        var e = this.stack[this.stack.length - 1];
                        v("inReference") ? (e.type += "Reference", e.referenceType = v("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function V() {
                        var e = this.stack[this.stack.length - 1];
                        v("inReference") ? (e.type += "Reference", e.referenceType = v("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function $(e) {
                        this.stack[this.stack.length - 2].identifier = a(this.sliceSerialize(e)).toLowerCase()
                    }

                    function Y() {
                        var e = this.stack[this.stack.length - 1],
                            t = this.resume();
                        this.stack[this.stack.length - 1].label = t, h("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                    }

                    function K() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function J() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function G() {
                        h("inReference")
                    }

                    function Z() {
                        h("referenceType", "collapsed")
                    }

                    function X(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = a(this.sliceSerialize(e)).toLowerCase(), h("referenceType", "full")
                    }

                    function Q(e) {
                        h("characterReferenceType", e.type)
                    }

                    function ee(e) {
                        var t, n, r = this.sliceSerialize(e),
                            i = v("characterReferenceType");
                        i ? (t = s(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), h("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = g(e.end)
                    }

                    function te(e) {
                        N.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                    }

                    function ne(e) {
                        N.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                    }

                    function re() {
                        return {
                            type: "blockquote",
                            children: []
                        }
                    }

                    function ie() {
                        return {
                            type: "code",
                            lang: null,
                            meta: null,
                            value: ""
                        }
                    }

                    function oe() {
                        return {
                            type: "inlineCode",
                            value: ""
                        }
                    }

                    function ae() {
                        return {
                            type: "definition",
                            identifier: "",
                            label: null,
                            title: null,
                            url: ""
                        }
                    }

                    function se() {
                        return {
                            type: "emphasis",
                            children: []
                        }
                    }

                    function ue() {
                        return {
                            type: "heading",
                            depth: void 0,
                            children: []
                        }
                    }

                    function ce() {
                        return {
                            type: "break"
                        }
                    }

                    function le() {
                        return {
                            type: "html",
                            value: ""
                        }
                    }

                    function fe() {
                        return {
                            type: "image",
                            title: null,
                            url: "",
                            alt: null
                        }
                    }

                    function de() {
                        return {
                            type: "link",
                            title: null,
                            url: "",
                            children: []
                        }
                    }

                    function pe(e) {
                        return {
                            type: "list",
                            ordered: "listOrdered" === e.type,
                            start: null,
                            spread: e._spread,
                            children: []
                        }
                    }

                    function he(e) {
                        return {
                            type: "listItem",
                            spread: e._spread,
                            checked: null,
                            children: []
                        }
                    }

                    function ve() {
                        return {
                            type: "paragraph",
                            children: []
                        }
                    }

                    function ge() {
                        return {
                            type: "strong",
                            children: []
                        }
                    }

                    function me() {
                        return {
                            type: "text",
                            value: ""
                        }
                    }

                    function ye() {
                        return {
                            type: "thematicBreak"
                        }
                    }
                }(n)(l(u(n).document().write(c()(e, t, !0))))
            };
            var r = n(4999),
                i = n(99198),
                o = n(46706),
                a = n(35478),
                s = n(10596),
                u = n(32976),
                c = n(30162),
                l = n(61242),
                f = n(89435),
                d = n(75432);

            function p(e, t) {
                var n, r;
                for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
            }
        },
        39671: function(e, t, n) {
            "use strict";
            e.exports = n(52524)
        },
        4999: function(e) {
            "use strict";

            function t(e) {
                return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
            }

            function n(e) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
                return n.join("")
            }
            e.exports = t
        },
        76734: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[A-Za-z]/);
            e.exports = r
        },
        46712: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[\dA-Za-z]/);
            e.exports = r
        },
        13571: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        89696: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 32 || 127 === e
            }
        },
        73977: function(e, t, n) {
            "use strict";
            var r = n(2841)(/\d/);
            e.exports = r
        },
        56238: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[\dA-Fa-f]/);
            e.exports = r
        },
        83074: function(e, t, n) {
            "use strict";
            var r = n(2841)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        88367: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 0 || 32 === e
            }
        },
        17238: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < -2
            }
        },
        73654: function(e) {
            "use strict";
            e.exports = function(e) {
                return -2 === e || -1 === e || 32 === e
            }
        },
        36996: function(e, t, n) {
            "use strict";
            var r = n(76830),
                i = n(2841)(r);
            e.exports = i
        },
        10395: function(e, t, n) {
            "use strict";
            var r = n(2841)(/\s/);
            e.exports = r
        },
        99198: function(e) {
            "use strict";
            var t = Object.assign;
            e.exports = t
        },
        93267: function(e) {
            "use strict";
            var t = String.fromCharCode;
            e.exports = t
        },
        46706: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;
            e.exports = t
        },
        57139: function(e) {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        16871: function(e) {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        21362: function(e) {
            "use strict";
            var t = [].splice;
            e.exports = t
        },
        76830: function(e) {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        36274: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(97082),
                i = n(47542),
                o = n(1349),
                a = n(45485),
                s = n(49653),
                u = n(36713),
                c = n(46597),
                l = n(20431),
                f = n(60026),
                d = n(93865),
                p = n(65694),
                h = n(596),
                v = n(76872),
                g = n(28911),
                m = n(31294),
                y = n(36215),
                b = n(60534),
                w = n(92607),
                x = n(46931),
                k = n(15874),
                O = n(37039),
                E = {
                    42: x,
                    43: x,
                    45: x,
                    48: x,
                    49: x,
                    50: x,
                    51: x,
                    52: x,
                    53: x,
                    54: x,
                    55: x,
                    56: x,
                    57: x,
                    62: a
                },
                S = {
                    91: d
                },
                D = {
                    "-2": l,
                    "-1": l,
                    32: l
                },
                C = {
                    35: h,
                    42: O,
                    45: [k, O],
                    60: v,
                    61: k,
                    95: O,
                    96: c,
                    126: c
                },
                P = {
                    38: u,
                    92: s
                },
                A = {
                    "-5": w,
                    "-4": w,
                    "-3": w,
                    33: y,
                    38: u,
                    42: i,
                    60: [o, g],
                    91: b,
                    92: [p, s],
                    93: m,
                    95: i,
                    96: f
                },
                T = {
                    null: [i, r.resolver]
                };
            t.contentInitial = S, t.disable = {
                null: []
            }, t.document = E, t.flow = C, t.flowInitial = D, t.insideSpan = T, t.string = P, t.text = A
        },
        13745: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = function(e) {
                    var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), o(t)
                    }));
                    return n;

                    function o(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, a(n)
                    }

                    function a(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), a)
                    }
                };
            t.tokenize = o
        },
        14201: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(17238),
                i = n(52928),
                o = n(66532),
                a = function(e) {
                    var t, n, i, a = this,
                        c = [],
                        l = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return t = {}, l;

                                function l(r) {
                                    return i < c.length ? (a.containerState = c[i][1], e.attempt(c[i][0].continuation, f, d)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, v(r)) : (a.interrupt = n.currentConstruct && n.currentConstruct.interruptible, a.containerState = {}, e.attempt(s, h, v)(r))
                                }

                                function f(e) {
                                    return i++, a.containerState._closeFlow ? h(e) : l(e)
                                }

                                function d(t) {
                                    return n.currentConstruct && n.currentConstruct.lazy ? (a.containerState = {}, e.attempt(s, h, e.attempt(u, h, e.check(o, h, p)))(t)) : h(t)
                                }

                                function p(e) {
                                    return i = c.length, t.lazy = !0, t.flowContinue = !0, v(e)
                                }

                                function h(e) {
                                    return t.flowEnd = !0, v(e)
                                }

                                function v(e) {
                                    return t.continued = i, a.interrupt = a.containerState = void 0, r(e)
                                }
                            },
                            partial: !0
                        };
                    return d;

                    function d(t) {
                        return l < c.length ? (a.containerState = c[l][1], e.attempt(c[l][0].continuation, p, h)(t)) : h(t)
                    }

                    function p(e) {
                        return l++, d(e)
                    }

                    function h(r) {
                        return t && t.flowContinue ? g(r) : (a.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, a.containerState = {}, e.attempt(s, v, g)(r))
                    }

                    function v(e) {
                        return c.push([a.currentConstruct, a.containerState]), a.containerState = void 0, h(e)
                    }

                    function g(t) {
                        return null === t ? (w(0, !0), void e.consume(t)) : (n = n || a.parser.flow(a.now()), e.enter("chunkFlow", {
                            contentType: "flow",
                            previous: i,
                            _tokenizer: n
                        }), m(t))
                    }

                    function m(t) {
                        return null === t ? (b(e.exit("chunkFlow")), g(t)) : r(t) ? (e.consume(t), b(e.exit("chunkFlow")), e.check(f, y)) : (e.consume(t), m)
                    }

                    function y(e) {
                        return w(t.continued, t && t.flowEnd), l = 0, d(e)
                    }

                    function b(e) {
                        i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(a.sliceStream(e))
                    }

                    function w(t, r) {
                        var o = c.length;
                        for (n && r && (n.write([null]), i = n = void 0); o-- > t;) a.containerState = c[o][1], c[o][0].exit.call(a, e);
                        c.length = t
                    }
                },
                s = {
                    tokenize: function(e, t, n) {
                        return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                },
                u = {
                    tokenize: function(e, t, n) {
                        return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                };
            t.tokenize = a
        },
        22871: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(64590),
                i = n(52928),
                o = n(66532),
                a = function(e) {
                    var t = this,
                        n = e.attempt(o, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, a, i(e, e.attempt(this.parser.constructs.flow, a, e.attempt(r, a)), "linePrefix")));
                    return n;

                    function a(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                };
            t.tokenize = a
        },
        97082: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(99198),
                i = n(75923),
                o = u("text"),
                a = u("string"),
                s = {
                    resolveAll: c()
                };

            function u(e) {
                return {
                    tokenize: function(t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, a);
                        return o;

                        function o(e) {
                            return u(e) ? i(e) : a(e)
                        }

                        function a(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), s;
                            t.consume(e)
                        }

                        function s(e) {
                            return u(e) ? (t.exit("data"), i(e)) : (t.consume(e), s)
                        }

                        function u(e) {
                            var t = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (t)
                                for (; ++i < t.length;)
                                    if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
                        }
                    },
                    resolveAll: c("text" === e ? l : void 0)
                }
            }

            function c(e) {
                return function(t, n) {
                    var r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function l(e, t) {
                for (var n, o, a, s, u, c, l, f, d = -1; ++d <= e.length;)
                    if ((d === e.length || "lineEnding" === e[d][1].type) && "data" === e[d - 1][1].type) {
                        for (o = e[d - 1][1], s = (n = t.sliceStream(o)).length, u = -1, c = 0, l = void 0; s--;)
                            if ("string" === typeof(a = n[s])) {
                                for (u = a.length; 32 === a.charCodeAt(u - 1);) c++, u--;
                                if (u) break;
                                u = -1
                            } else if (-2 === a) l = !0, c++;
                        else if (-1 !== a) {
                            s++;
                            break
                        }
                        c && (f = {
                            type: d === e.length || l || c < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: o.end.line,
                                column: o.end.column - c,
                                offset: o.end.offset - c,
                                _index: o.start._index + s,
                                _bufferIndex: s ? u : o.start._bufferIndex + u
                            },
                            end: i(o.end)
                        }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(d, 0, ["enter", f, t], ["exit", f, t]), d += 2)), d++
                    } return e
            }
            t.resolver = s, t.string = a, t.text = o
        },
        32976: function(e, t, n) {
            "use strict";
            var r = n(13745),
                i = n(14201),
                o = n(22871),
                a = n(97082),
                s = n(12952),
                u = n(21388),
                c = n(28180),
                l = n(36274);
            e.exports = function(e) {
                var t = {
                    defined: [],
                    constructs: s([l].concat(c((e || {}).extensions))),
                    content: n(r),
                    document: n(i),
                    flow: n(o),
                    string: n(a.string),
                    text: n(a.text)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return u(t, e, n)
                    }
                }
            }
        },
        61242: function(e, t, n) {
            "use strict";
            var r = n(84423);
            e.exports = function(e) {
                for (; !r(e););
                return e
            }
        },
        30162: function(e) {
            "use strict";
            var t = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    r = 1,
                    i = "";
                return function(o, a, s) {
                    var u, c, l, f, d, p = [];
                    o = i + o.toString(a), l = 0, i = "", n && (65279 === o.charCodeAt(0) && l++, n = void 0);
                    for (; l < o.length;) {
                        if (t.lastIndex = l, u = t.exec(o), f = u ? u.index : o.length, d = o.charCodeAt(f), !u) {
                            i = o.slice(l);
                            break
                        }
                        if (10 === d && l === f && e) p.push(-3), e = void 0;
                        else if (e && (p.push(-5), e = void 0), l < f && (p.push(o.slice(l, f)), r += f - l), 0 === d) p.push(65533), r++;
                        else if (9 === d)
                            for (c = 4 * Math.ceil(r / 4), p.push(-2); r++ < c;) p.push(-1);
                        else 10 === d ? (p.push(-4), r = 1) : (e = !0, r = 1);
                        l = f + 1
                    }
                    s && (e && p.push(-5), i && p.push(i), p.push(null));
                    return p
                }
            }
        },
        47542: function(e, t, n) {
            "use strict";
            var r = n(78811),
                i = n(56808),
                o = n(19444),
                a = n(15644),
                s = n(58280),
                u = n(75923),
                c = {
                    name: "attention",
                    tokenize: function(e, t) {
                        var n, r = o(this.previous);
                        return function(t) {
                            return e.enter("attentionSequence"), n = t, i(t)
                        };

                        function i(a) {
                            var s, u, c, l;
                            return a === n ? (e.consume(a), i) : (s = e.exit("attentionSequence"), c = !(u = o(a)) || 2 === u && r, l = !r || 2 === r && u, s._open = 42 === n ? c : c && (r || !l), s._close = 42 === n ? l : l && (u || !c), t(a))
                        }
                    },
                    resolveAll: function(e, t) {
                        var n, o, c, l, f, d, p, h, v = -1;
                        for (; ++v < e.length;)
                            if ("enter" === e[v][0] && "attentionSequence" === e[v][1].type && e[v][1]._close)
                                for (n = v; n--;)
                                    if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[v][1]).charCodeAt(0)) {
                                        if ((e[n][1]._close || e[v][1]._open) && (e[v][1].end.offset - e[v][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[v][1].end.offset - e[v][1].start.offset) % 3)) continue;
                                        d = e[n][1].end.offset - e[n][1].start.offset > 1 && e[v][1].end.offset - e[v][1].start.offset > 1 ? 2 : 1, l = {
                                            type: d > 1 ? "strongSequence" : "emphasisSequence",
                                            start: a(u(e[n][1].end), -d),
                                            end: u(e[n][1].end)
                                        }, f = {
                                            type: d > 1 ? "strongSequence" : "emphasisSequence",
                                            start: u(e[v][1].start),
                                            end: a(u(e[v][1].start), d)
                                        }, c = {
                                            type: d > 1 ? "strongText" : "emphasisText",
                                            start: u(e[n][1].end),
                                            end: u(e[v][1].start)
                                        }, o = {
                                            type: d > 1 ? "strong" : "emphasis",
                                            start: u(l.start),
                                            end: u(f.end)
                                        }, e[n][1].end = u(l.start), e[v][1].start = u(f.end), p = [], e[n][1].end.offset - e[n][1].start.offset && (p = r(p, [
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t]
                                        ])), p = r(p, [
                                            ["enter", o, t],
                                            ["enter", l, t],
                                            ["exit", l, t],
                                            ["enter", c, t]
                                        ]), p = r(p, s(t.parser.constructs.insideSpan.null, e.slice(n + 1, v), t)), p = r(p, [
                                            ["exit", c, t],
                                            ["enter", f, t],
                                            ["exit", f, t],
                                            ["exit", o, t]
                                        ]), e[v][1].end.offset - e[v][1].start.offset ? (h = 2, p = r(p, [
                                            ["enter", e[v][1], t],
                                            ["exit", e[v][1], t]
                                        ])) : h = 0, i(e, n - 1, v - n + 3, p), v = n + p.length - h - 2;
                                        break
                                    } v = -1;
                        for (; ++v < e.length;) "attentionSequence" === e[v][1].type && (e[v][1].type = "data");
                        return e
                    }
                };
            e.exports = c
        },
        1349: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(13571),
                a = n(89696),
                s = {
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        var s = 1;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), u
                        };

                        function u(t) {
                            return r(t) ? (e.consume(t), c) : o(t) ? d(t) : n(t)
                        }

                        function c(e) {
                            return 43 === e || 45 === e || 46 === e || i(e) ? l(e) : d(e)
                        }

                        function l(t) {
                            return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && s++ < 32 ? (e.consume(t), l) : d(t)
                        }

                        function f(t) {
                            return 62 === t ? (e.exit("autolinkProtocol"), g(t)) : 32 === t || 60 === t || a(t) ? n(t) : (e.consume(t), f)
                        }

                        function d(t) {
                            return 64 === t ? (e.consume(t), s = 0, p) : o(t) ? (e.consume(t), d) : n(t)
                        }

                        function p(e) {
                            return i(e) ? h(e) : n(e)
                        }

                        function h(t) {
                            return 46 === t ? (e.consume(t), s = 0, p) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(t)) : v(t)
                        }

                        function v(t) {
                            return (45 === t || i(t)) && s++ < 63 ? (e.consume(t), 45 === t ? v : h) : n(t)
                        }

                        function g(n) {
                            return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                        }
                    }
                };
            e.exports = s
        },
        45485: function(e, t, n) {
            "use strict";
            var r = n(73654),
                i = n(52928),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        var i = this;
                        return function(t) {
                            if (62 === t) return i.containerState.open || (e.enter("blockQuote", {
                                _container: !0
                            }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
                            return n(t)
                        };

                        function o(n) {
                            return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };
            e.exports = o
        },
        49653: function(e, t, n) {
            "use strict";
            var r = n(83074),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                        };

                        function i(i) {
                            return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        36713: function(e, t, n) {
            "use strict";
            var r = n(89435),
                i = n(46712),
                o = n(73977),
                a = n(56238);

            function s(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var u = s(r),
                c = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        var r, s, c = this,
                            l = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
                        };

                        function f(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), d) : (e.enter("characterReferenceValue"), r = 31, s = i, p(t))
                        }

                        function d(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, s = a, p) : (e.enter("characterReferenceValue"), r = 7, s = o, p(t))
                        }

                        function p(o) {
                            var a;
                            return 59 === o && l ? (a = e.exit("characterReferenceValue"), s !== i || u.default(c.sliceSerialize(a)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : s(o) && l++ < r ? (e.consume(o), p) : n(o)
                        }
                    }
                };
            e.exports = c
        },
        46597: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(15096),
                a = n(52928),
                s = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        var s, u = this,
                            c = {
                                tokenize: function(e, t, n) {
                                    var i = 0;
                                    return a(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t)
                                    }

                                    function u(t) {
                                        return t === s ? (e.consume(t), i++, u) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), a(e, c, "whitespace")(t))
                                    }

                                    function c(i) {
                                        return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                    }
                                },
                                partial: !0
                            },
                            l = o(this.events, "linePrefix"),
                            f = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s = t, d(t)
                        };

                        function d(t) {
                            return t === s ? (e.consume(t), f++, d) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : a(e, p, "whitespace")(t))
                        }

                        function p(t) {
                            return null === t || r(t) ? m(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), h(t))
                        }

                        function h(t) {
                            return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), a(e, v, "whitespace")(t)) : 96 === t && t === s ? n(t) : (e.consume(t), h)
                        }

                        function v(t) {
                            return null === t || r(t) ? m(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), g(t))
                        }

                        function g(t) {
                            return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(t)) : 96 === t && t === s ? n(t) : (e.consume(t), g)
                        }

                        function m(n) {
                            return e.exit("codeFencedFence"), u.interrupt ? t(n) : y(n)
                        }

                        function y(t) {
                            return null === t ? w(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(c, w, l ? a(e, y, "linePrefix", l + 1) : y)) : (e.enter("codeFlowValue"), b(t))
                        }

                        function b(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), y(t)) : (e.consume(t), b)
                        }

                        function w(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            e.exports = s
        },
        20431: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(56808),
                o = n(15096),
                a = n(52928),
                s = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        return e.attempt(u, i, n);

                        function i(n) {
                            return null === n ? t(n) : r(n) ? e.attempt(u, i, t)(n) : (e.enter("codeFlowValue"), o(n))
                        }

                        function o(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
                        }
                    },
                    resolve: function(e, t) {
                        var n = {
                            type: "codeIndented",
                            start: e[0][1].start,
                            end: e[e.length - 1][1].end
                        };
                        return i(e, 0, 0, [
                            ["enter", n, t]
                        ]), i(e, e.length, 0, [
                            ["exit", n, t]
                        ]), e
                    }
                },
                u = {
                    tokenize: function(e, t, n) {
                        var i = this;
                        return a(e, (function s(u) {
                            if (r(u)) return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), a(e, s, "linePrefix", 5);
                            return o(i.events, "linePrefix") < 4 ? n(u) : t(u)
                        }), "linePrefix", 5)
                    },
                    partial: !0
                };
            e.exports = s
        },
        60026: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = {
                    name: "codeText",
                    tokenize: function(e, t, n) {
                        var i, o, a = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"), s(t)
                        };

                        function s(t) {
                            return 96 === t ? (e.consume(t), a++, s) : (e.exit("codeTextSequence"), u(t))
                        }

                        function u(t) {
                            return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, l(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), u) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u) : (e.enter("codeTextData"), c(t))
                        }

                        function c(t) {
                            return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), u(t)) : (e.consume(t), c)
                        }

                        function l(n) {
                            return 96 === n ? (e.consume(n), i++, l) : i === a ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", c(n))
                        }
                    },
                    resolve: function(e) {
                        var t, n, r = e.length - 4,
                            i = 3;
                        if (("lineEnding" === e[i][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                            for (t = i; ++t < r;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                                    break
                                } t = i - 1, r++;
                        for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    }
                };
            e.exports = i
        },
        64590: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(15096),
                o = n(84423),
                a = n(52928),
                s = {
                    tokenize: function(e, t) {
                        var n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), i(t)
                        };

                        function i(t) {
                            return null === t ? o(t) : r(t) ? e.check(u, a, o)(t) : (e.consume(t), i)
                        }

                        function o(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function a(t) {
                            return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), i
                        }
                    },
                    resolve: function(e) {
                        return o(e), e
                    },
                    interruptible: !0,
                    lazy: !0
                },
                u = {
                    tokenize: function(e, t, n) {
                        var o = this;
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a(e, s, "linePrefix")
                        };

                        function s(a) {
                            return null === a || r(a) ? n(a) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(a) : t(a)
                        }
                    },
                    partial: !0
                };
            e.exports = s
        },
        93865: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(35478),
                a = n(38229),
                s = n(97154),
                u = n(52928),
                c = n(31056),
                l = n(59283),
                f = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        var i, l = this;
                        return function(t) {
                            return e.enter("definition"), s.call(l, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function f(t) {
                            return i = o(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c(e, a(e, e.attempt(d, u(e, p, "whitespace"), u(e, p, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function p(o) {
                            return null === o || r(o) ? (e.exit("definition"), l.parser.defined.indexOf(i) < 0 && l.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                },
                d = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return i(t) ? c(e, o)(t) : n(t)
                        };

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? l(e, u(e, a, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function a(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            e.exports = f
        },
        38229: function(e, t, n) {
            "use strict";
            var r = n(89696),
                i = n(88367),
                o = n(17238);
            e.exports = function(e, t, n, a, s, u, c, l, f) {
                var d = f || 1 / 0,
                    p = 0;
                return function(t) {
                    if (60 === t) return e.enter(a), e.enter(s), e.enter(u), e.consume(t), e.exit(u), h;
                    if (r(t) || 41 === t) return n(t);
                    return e.enter(a), e.enter(c), e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), m(t)
                };

                function h(n) {
                    return 62 === n ? (e.enter(u), e.consume(n), e.exit(u), e.exit(s), e.exit(a), t) : (e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), v(n))
                }

                function v(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(l), h(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? g : v)
                }

                function g(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), v) : v(t)
                }

                function m(o) {
                    return 40 === o ? ++p > d ? n(o) : (e.consume(o), m) : 41 === o ? p-- ? (e.consume(o), m) : (e.exit("chunkString"), e.exit(l), e.exit(c), e.exit(a), t(o)) : null === o || i(o) ? p ? n(o) : (e.exit("chunkString"), e.exit(l), e.exit(c), e.exit(a), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? y : m)
                }

                function y(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t)
                }
            }
        },
        97154: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654);
            e.exports = function(e, t, n, o, a, s) {
                var u, c = this,
                    l = 0;
                return function(t) {
                    return e.enter(o), e.enter(a), e.consume(t), e.exit(a), e.enter(s), f
                };

                function f(i) {
                    return null === i || 91 === i || 93 === i && !u || 94 === i && !l && "_hiddenFootnoteSupport" in c.parser.constructs || l > 999 ? n(i) : 93 === i ? (e.exit(s), e.enter(a), e.consume(i), e.exit(a), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                        contentType: "string"
                    }), d(i))
                }

                function d(t) {
                    return null === t || 91 === t || 93 === t || r(t) || l++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), u = u || !i(t), 92 === t ? p : d)
                }

                function p(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, d) : d(t)
                }
            }
        },
        52928: function(e, t, n) {
            "use strict";
            var r = n(73654);
            e.exports = function(e, t, n, i) {
                var o = i ? i - 1 : 1 / 0,
                    a = 0;
                return function(i) {
                    if (r(i)) return e.enter(n), s(i);
                    return t(i)
                };

                function s(i) {
                    return r(i) && a++ < o ? (e.consume(i), s) : (e.exit(n), t(i))
                }
            }
        },
        59283: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(52928);
            e.exports = function(e, t, n, o, a, s) {
                var u;
                return function(t) {
                    return e.enter(o), e.enter(a), e.consume(t), e.exit(a), u = 40 === t ? 41 : t, c
                };

                function c(n) {
                    return n === u ? (e.enter(a), e.consume(n), e.exit(a), e.exit(o), t) : (e.enter(s), l(n))
                }

                function l(t) {
                    return t === u ? (e.exit(s), c(u)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, l, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                }

                function f(t) {
                    return t === u || null === t || r(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? d : f)
                }

                function d(t) {
                    return t === u || 92 === t ? (e.consume(t), f) : f(t)
                }
            }
        },
        31056: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928);
            e.exports = function(e, t) {
                var n;
                return function a(s) {
                    if (r(s)) return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), n = !0, a;
                    if (i(s)) return o(e, a, n ? "linePrefix" : "lineSuffix")(s);
                    return t(s)
                }
            }
        },
        65694: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
                        };

                        function i(i) {
                            return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        596: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(88367),
                o = n(73654),
                a = n(56808),
                s = n(52928),
                u = {
                    name: "headingAtx",
                    tokenize: function(e, t, n) {
                        var a = this,
                            u = 0;
                        return function(t) {
                            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), c(t)
                        };

                        function c(r) {
                            return 35 === r && u++ < 6 ? (e.consume(r), c) : null === r || i(r) ? (e.exit("atxHeadingSequence"), a.interrupt ? t(r) : l(r)) : n(r)
                        }

                        function l(n) {
                            return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? s(e, l, "whitespace")(n) : (e.enter("atxHeadingText"), d(n))
                        }

                        function f(t) {
                            return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), l(t))
                        }

                        function d(t) {
                            return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), l(t)) : (e.consume(t), d)
                        }
                    },
                    resolve: function(e, t) {
                        var n, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end
                        }, r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text"
                        }, a(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t]
                        ]));
                        return e
                    }
                };
            e.exports = u
        },
        76872: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                a = n(88367),
                s = n(73654),
                u = n(93267),
                c = n(57139),
                l = n(16871),
                f = n(66532),
                d = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        var f, d, h, v, g, m = this;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), y
                        };

                        function y(i) {
                            return 33 === i ? (e.consume(i), b) : 47 === i ? (e.consume(i), k) : 63 === i ? (e.consume(i), f = 3, m.interrupt ? t : W) : r(i) ? (e.consume(i), h = u(i), d = !0, O) : n(i)
                        }

                        function b(i) {
                            return 45 === i ? (e.consume(i), f = 2, w) : 91 === i ? (e.consume(i), f = 5, h = "CDATA[", v = 0, x) : r(i) ? (e.consume(i), f = 4, m.interrupt ? t : W) : n(i)
                        }

                        function w(r) {
                            return 45 === r ? (e.consume(r), m.interrupt ? t : W) : n(r)
                        }

                        function x(r) {
                            return r === h.charCodeAt(v++) ? (e.consume(r), v === h.length ? m.interrupt ? t : M : x) : n(r)
                        }

                        function k(t) {
                            return r(t) ? (e.consume(t), h = u(t), O) : n(t)
                        }

                        function O(r) {
                            return null === r || 47 === r || 62 === r || a(r) ? 47 !== r && d && l.indexOf(h.toLowerCase()) > -1 ? (f = 1, m.interrupt ? t(r) : M(r)) : c.indexOf(h.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), E) : m.interrupt ? t(r) : M(r)) : (f = 7, m.interrupt ? n(r) : d ? D(r) : S(r)) : 45 === r || i(r) ? (e.consume(r), h += u(r), O) : n(r)
                        }

                        function E(r) {
                            return 62 === r ? (e.consume(r), m.interrupt ? t : M) : n(r)
                        }

                        function S(t) {
                            return s(t) ? (e.consume(t), S) : I(t)
                        }

                        function D(t) {
                            return 47 === t ? (e.consume(t), I) : 58 === t || 95 === t || r(t) ? (e.consume(t), C) : s(t) ? (e.consume(t), D) : I(t)
                        }

                        function C(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), C) : P(t)
                        }

                        function P(t) {
                            return 61 === t ? (e.consume(t), A) : s(t) ? (e.consume(t), P) : D(t)
                        }

                        function A(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), g = t, T) : s(t) ? (e.consume(t), A) : (g = void 0, F(t))
                        }

                        function T(t) {
                            return t === g ? (e.consume(t), j) : null === t || o(t) ? n(t) : (e.consume(t), T)
                        }

                        function F(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || a(t) ? P(t) : (e.consume(t), F)
                        }

                        function j(e) {
                            return 47 === e || 62 === e || s(e) ? D(e) : n(e)
                        }

                        function I(t) {
                            return 62 === t ? (e.consume(t), _) : n(t)
                        }

                        function _(t) {
                            return s(t) ? (e.consume(t), _) : null === t || o(t) ? M(t) : n(t)
                        }

                        function M(t) {
                            return 45 === t && 2 === f ? (e.consume(t), N) : 60 === t && 1 === f ? (e.consume(t), R) : 62 === t && 4 === f ? (e.consume(t), U) : 63 === t && 3 === f ? (e.consume(t), W) : 93 === t && 5 === f ? (e.consume(t), H) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? L(t) : (e.consume(t), M) : e.check(p, U, L)(t)
                        }

                        function L(t) {
                            return e.exit("htmlFlowData"), B(t)
                        }

                        function B(t) {
                            return null === t ? q(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), B) : (e.enter("htmlFlowData"), M(t))
                        }

                        function N(t) {
                            return 45 === t ? (e.consume(t), W) : M(t)
                        }

                        function R(t) {
                            return 47 === t ? (e.consume(t), h = "", z) : M(t)
                        }

                        function z(t) {
                            return 62 === t && l.indexOf(h.toLowerCase()) > -1 ? (e.consume(t), U) : r(t) && h.length < 8 ? (e.consume(t), h += u(t), z) : M(t)
                        }

                        function H(t) {
                            return 93 === t ? (e.consume(t), W) : M(t)
                        }

                        function W(t) {
                            return 62 === t ? (e.consume(t), U) : M(t)
                        }

                        function U(t) {
                            return null === t || o(t) ? (e.exit("htmlFlowData"), q(t)) : (e.consume(t), U)
                        }

                        function q(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        var t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                p = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
                        }
                    },
                    partial: !0
                };
            e.exports = d
        },
        28911: function(e, t, n) {
            "use strict";
            var r = n(76734),
                i = n(46712),
                o = n(17238),
                a = n(88367),
                s = n(73654),
                u = n(52928),
                c = {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        var c, l, f, d, p = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), h
                        };

                        function h(t) {
                            return 33 === t ? (e.consume(t), v) : 47 === t ? (e.consume(t), P) : 63 === t ? (e.consume(t), D) : r(t) ? (e.consume(t), F) : n(t)
                        }

                        function v(t) {
                            return 45 === t ? (e.consume(t), g) : 91 === t ? (e.consume(t), l = "CDATA[", f = 0, x) : r(t) ? (e.consume(t), S) : n(t)
                        }

                        function g(t) {
                            return 45 === t ? (e.consume(t), m) : n(t)
                        }

                        function m(t) {
                            return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), y) : b(t)
                        }

                        function y(e) {
                            return null === e || 62 === e ? n(e) : b(e)
                        }

                        function b(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), w) : o(t) ? (d = b, R(t)) : (e.consume(t), b)
                        }

                        function w(t) {
                            return 45 === t ? (e.consume(t), H) : b(t)
                        }

                        function x(t) {
                            return t === l.charCodeAt(f++) ? (e.consume(t), f === l.length ? k : x) : n(t)
                        }

                        function k(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), O) : o(t) ? (d = k, R(t)) : (e.consume(t), k)
                        }

                        function O(t) {
                            return 93 === t ? (e.consume(t), E) : k(t)
                        }

                        function E(t) {
                            return 62 === t ? H(t) : 93 === t ? (e.consume(t), E) : k(t)
                        }

                        function S(t) {
                            return null === t || 62 === t ? H(t) : o(t) ? (d = S, R(t)) : (e.consume(t), S)
                        }

                        function D(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), C) : o(t) ? (d = D, R(t)) : (e.consume(t), D)
                        }

                        function C(e) {
                            return 62 === e ? H(e) : D(e)
                        }

                        function P(t) {
                            return r(t) ? (e.consume(t), A) : n(t)
                        }

                        function A(t) {
                            return 45 === t || i(t) ? (e.consume(t), A) : T(t)
                        }

                        function T(t) {
                            return o(t) ? (d = T, R(t)) : s(t) ? (e.consume(t), T) : H(t)
                        }

                        function F(t) {
                            return 45 === t || i(t) ? (e.consume(t), F) : 47 === t || 62 === t || a(t) ? j(t) : n(t)
                        }

                        function j(t) {
                            return 47 === t ? (e.consume(t), H) : 58 === t || 95 === t || r(t) ? (e.consume(t), I) : o(t) ? (d = j, R(t)) : s(t) ? (e.consume(t), j) : H(t)
                        }

                        function I(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), I) : _(t)
                        }

                        function _(t) {
                            return 61 === t ? (e.consume(t), M) : o(t) ? (d = _, R(t)) : s(t) ? (e.consume(t), _) : j(t)
                        }

                        function M(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), c = t, L) : o(t) ? (d = M, R(t)) : s(t) ? (e.consume(t), M) : (e.consume(t), c = void 0, N)
                        }

                        function L(t) {
                            return t === c ? (e.consume(t), B) : null === t ? n(t) : o(t) ? (d = L, R(t)) : (e.consume(t), L)
                        }

                        function B(e) {
                            return 62 === e || 47 === e || a(e) ? j(e) : n(e)
                        }

                        function N(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || a(t) ? j(t) : (e.consume(t), N)
                        }

                        function R(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u(e, z, "linePrefix", p.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }

                        function z(t) {
                            return e.enter("htmlTextData"), d(t)
                        }

                        function H(r) {
                            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                        }
                    }
                };
            e.exports = c
        },
        31294: function(e, t, n) {
            "use strict";
            var r = n(88367),
                i = n(78811),
                o = n(56808),
                a = n(35478),
                s = n(58280),
                u = n(75923),
                c = n(38229),
                l = n(97154),
                f = n(59283),
                d = n(31056),
                p = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        var r, i, o = this,
                            s = o.events.length;
                        for (; s--;)
                            if (("labelImage" === o.events[s][1].type || "labelLink" === o.events[s][1].type) && !o.events[s][1]._balanced) {
                                r = o.events[s][1];
                                break
                            } return function(t) {
                            if (!r) return n(t);
                            return r._inactive ? c(t) : (i = o.parser.defined.indexOf(a(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), u)
                        };

                        function u(n) {
                            return 40 === n ? e.attempt(h, t, i ? t : c)(n) : 91 === n ? e.attempt(v, t, i ? e.attempt(g, t, c) : c)(n) : i ? t(n) : c(n)
                        }

                        function c(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, a, c, l, f, d, p = e.length,
                            h = 0;
                        for (; p--;)
                            if (c = e[p][1], l) {
                                if ("link" === c.type || "labelLink" === c.type && c._inactive) break;
                                "enter" === e[p][0] && "labelLink" === c.type && (c._inactive = !0)
                            } else if (f) {
                            if ("enter" === e[p][0] && ("labelImage" === c.type || "labelLink" === c.type) && !c._balanced && (l = p, "labelLink" !== c.type)) {
                                h = 2;
                                break
                            }
                        } else "labelEnd" === c.type && (f = p);
                        return n = {
                            type: "labelLink" === e[l][1].type ? "link" : "image",
                            start: u(e[l][1].start),
                            end: u(e[e.length - 1][1].end)
                        }, r = {
                            type: "label",
                            start: u(e[l][1].start),
                            end: u(e[f][1].end)
                        }, a = {
                            type: "labelText",
                            start: u(e[l + h + 2][1].end),
                            end: u(e[f - 2][1].start)
                        }, d = i(d = [
                            ["enter", n, t],
                            ["enter", r, t]
                        ], e.slice(l + 1, l + h + 3)), d = i(d, [
                            ["enter", a, t]
                        ]), d = i(d, s(t.parser.constructs.insideSpan.null, e.slice(l + h + 4, f - 3), t)), d = i(d, [
                            ["exit", a, t], e[f - 2], e[f - 1],
                            ["exit", r, t]
                        ]), d = i(d, e.slice(f + 1)), d = i(d, [
                            ["exit", n, t]
                        ]), o(e, l, e.length, d), e
                    },
                    resolveAll: function(e) {
                        var t, n = -1;
                        for (; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                h = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), d(e, i)
                        };

                        function i(t) {
                            return 41 === t ? s(t) : c(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
                        }

                        function o(t) {
                            return r(t) ? d(e, a)(t) : s(t)
                        }

                        function a(t) {
                            return 34 === t || 39 === t || 40 === t ? f(e, d(e, s), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : s(t)
                        }

                        function s(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                v = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return function(t) {
                            return l.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.indexOf(a(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
                        }
                    }
                },
                g = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };
            e.exports = p
        },
        36215: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                    };

                    function i(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        60534: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                    };

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(31294).resolveAll
            };
            e.exports = r
        },
        92607: function(e, t, n) {
            "use strict";
            var r = n(52928),
                i = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
                        }
                    }
                };
            e.exports = i
        },
        46931: function(e, t, n) {
            "use strict";
            var r = n(73977),
                i = n(73654),
                o = n(15096),
                a = n(18892),
                s = n(52928),
                u = n(66532),
                c = n(37039),
                l = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        var s = this,
                            l = o(s.events, "linePrefix"),
                            d = 0;
                        return function(t) {
                            var i = s.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !s.containerState.marker || t === s.containerState.marker : r(t)) {
                                if (s.containerState.type || (s.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(c, n, h)(t) : h(t);
                                if (!s.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), p(t)
                            }
                            return n(t)
                        };

                        function p(t) {
                            return r(t) && ++d < 10 ? (e.consume(t), p) : (!s.interrupt || d < 2) && (s.containerState.marker ? t === s.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), h(t)) : n(t)
                        }

                        function h(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), s.containerState.marker = s.containerState.marker || t, e.check(u, s.interrupt ? n : v, e.attempt(f, m, g))
                        }

                        function v(e) {
                            return s.containerState.initialBlankLine = !0, l++, m(e)
                        }

                        function g(t) {
                            return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), m) : n(t)
                        }

                        function m(n) {
                            return s.containerState.size = l + a(s.sliceStream(e.exit("listItemPrefix"))), t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(u, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, s(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !i(n)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n);
                                return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(d, t, o)(n)
                            }));

                            function o(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, s(e, e.attempt(l, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                f = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return s(e, (function(e) {
                            return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
                    },
                    partial: !0
                },
                d = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return s(e, (function(e) {
                            return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            e.exports = l
        },
        66532: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(52928),
                o = {
                    tokenize: function(e, t, n) {
                        return i(e, (function(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }), "linePrefix")
                    },
                    partial: !0
                };
            e.exports = o
        },
        15874: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(75923),
                o = n(52928),
                a = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        var i, a, s = this,
                            u = s.events.length;
                        for (; u--;)
                            if ("lineEnding" !== s.events[u][1].type && "linePrefix" !== s.events[u][1].type && "content" !== s.events[u][1].type) {
                                a = "paragraph" === s.events[u][1].type;
                                break
                            } return function(t) {
                            if (!s.lazy && (s.interrupt || a)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, c(t);
                            return n(t)
                        };

                        function c(t) {
                            return t === i ? (e.consume(t), c) : (e.exit("setextHeadingLineSequence"), o(e, l, "lineSuffix")(t))
                        }

                        function l(i) {
                            return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, o, a, s = e.length;
                        for (; s--;)
                            if ("enter" === e[s][0]) {
                                if ("content" === e[s][1].type) {
                                    n = s;
                                    break
                                }
                                "paragraph" === e[s][1].type && (r = s)
                            } else "content" === e[s][1].type && e.splice(s, 1), o || "definition" !== e[s][1].type || (o = s);
                        a = {
                            type: "setextHeading",
                            start: i(e[r][1].start),
                            end: i(e[e.length - 1][1].end)
                        }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = a;
                        return e.push(["exit", a, t]), e
                    }
                };
            e.exports = a
        },
        37039: function(e, t, n) {
            "use strict";
            var r = n(17238),
                i = n(73654),
                o = n(52928),
                a = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        var a, s = 0;
                        return function(t) {
                            return e.enter("thematicBreak"), a = t, u(t)
                        };

                        function u(l) {
                            return l === a ? (e.enter("thematicBreakSequence"), c(l)) : i(l) ? o(e, u, "whitespace")(l) : s < 3 || null !== l && !r(l) ? n(l) : (e.exit("thematicBreak"), t(l))
                        }

                        function c(t) {
                            return t === a ? (e.consume(t), s++, c) : (e.exit("thematicBreakSequence"), u(t))
                        }
                    }
                };
            e.exports = a
        },
        78811: function(e, t, n) {
            "use strict";
            var r = n(56808);
            e.exports = function(e, t) {
                return e.length ? (r(e, e.length, 0, t), e) : t
            }
        },
        56808: function(e, t, n) {
            "use strict";
            var r = n(21362);
            e.exports = function(e, t, n, i) {
                var o, a = e.length,
                    s = 0;
                if (t = t < 0 ? -t > a ? 0 : a + t : t > a ? a : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
                else
                    for (n && r.apply(e, [t, n]); s < i.length;)(o = i.slice(s, s + 1e4)).unshift(t, 0), r.apply(e, o), s += 1e4, t += 1e4
            }
        },
        19444: function(e, t, n) {
            "use strict";
            var r = n(88367),
                i = n(36996),
                o = n(10395);
            e.exports = function(e) {
                return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
            }
        },
        12952: function(e, t, n) {
            "use strict";
            var r = n(46706),
                i = n(56808),
                o = n(28180);

            function a(e, t) {
                var n, i, a, u;
                for (n in t)
                    for (u in i = r.call(e, n) ? e[n] : e[n] = {}, a = t[n]) i[u] = s(o(a[u]), r.call(i, u) ? i[u] : [])
            }

            function s(e, t) {
                for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
                return i(t, 0, 0, r), t
            }
            e.exports = function(e) {
                for (var t = {}, n = -1; ++n < e.length;) a(t, e[n]);
                return t
            }
        },
        21388: function(e, t, n) {
            "use strict";
            var r = n(99198),
                i = n(17238),
                o = n(78811),
                a = n(56808),
                s = n(28180),
                u = n(58280),
                c = n(23082),
                l = n(75923),
                f = n(12774);
            e.exports = function(e, t, n) {
                var d = n ? l(n) : {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    p = {},
                    h = [],
                    v = [],
                    g = [],
                    m = {
                        consume: function(e) {
                            i(e) ? (d.line++, d.column = 1, d.offset += -3 === e ? 2 : 1, C()) : -1 !== e && (d.column++, d.offset++);
                            d._bufferIndex < 0 ? d._index++ : (d._bufferIndex++, d._bufferIndex === v[d._index].length && (d._bufferIndex = -1, d._index++));
                            y.previous = e
                        },
                        enter: function(e, t) {
                            var n = t || {};
                            return n.type = e, n.start = x(), y.events.push(["enter", n, y]), g.push(n), n
                        },
                        exit: function(e) {
                            var t = g.pop();
                            return t.end = x(), y.events.push(["exit", t, y]), t
                        },
                        attempt: S((function(e, t) {
                            D(e, t.from)
                        })),
                        check: S(E),
                        interrupt: S(E, {
                            interrupt: !0
                        }),
                        lazy: S(E, {
                            lazy: !0
                        })
                    },
                    y = {
                        previous: null,
                        events: [],
                        parser: e,
                        sliceStream: w,
                        sliceSerialize: function(e) {
                            return c(w(e))
                        },
                        now: x,
                        defineSkip: function(e) {
                            p[e.line] = e.column, C()
                        },
                        write: function(e) {
                            if (v = o(v, e), k(), null !== v[v.length - 1]) return [];
                            return D(t, 0), y.events = u(h, y.events, y), y.events
                        }
                    },
                    b = t.tokenize.call(y, m);
                return t.resolveAll && h.push(t), d._index = 0, d._bufferIndex = -1, y;

                function w(e) {
                    return f(v, e)
                }

                function x() {
                    return l(d)
                }

                function k() {
                    for (var e, t; d._index < v.length;)
                        if ("string" === typeof(t = v[d._index]))
                            for (e = d._index, d._bufferIndex < 0 && (d._bufferIndex = 0); d._index === e && d._bufferIndex < t.length;) O(t.charCodeAt(d._bufferIndex));
                        else O(t)
                }

                function O(e) {
                    b = b(e)
                }

                function E(e, t) {
                    t.restore()
                }

                function S(e, t) {
                    return function(n, i, o) {
                        var a, u, c, l;
                        return n.tokenize || "length" in n ? f(s(n)) : function(e) {
                            if (e in n || null in n) return f(n.null ? s(n[e]).concat(s(n.null)) : n[e])(e);
                            return o(e)
                        };

                        function f(e) {
                            return a = e, p(e[u = 0])
                        }

                        function p(e) {
                            return function(n) {
                                l = function() {
                                    var e = x(),
                                        t = y.previous,
                                        n = y.currentConstruct,
                                        r = y.events.length,
                                        i = Array.from(g);
                                    return {
                                        restore: o,
                                        from: r
                                    };

                                    function o() {
                                        d = e, y.previous = t, y.currentConstruct = n, y.events.length = r, g = i, C()
                                    }
                                }(), c = e, e.partial || (y.currentConstruct = e);
                                if (e.name && y.parser.constructs.disable.null.indexOf(e.name) > -1) return v();
                                return e.tokenize.call(t ? r({}, y, t) : y, m, h, v)(n)
                            }
                        }

                        function h(t) {
                            return e(c, l), i
                        }

                        function v(e) {
                            return l.restore(), ++u < a.length ? p(a[u]) : o
                        }
                    }
                }

                function D(e, t) {
                    e.resolveAll && h.indexOf(e) < 0 && h.push(e), e.resolve && a(y.events, t, y.events.length - t, e.resolve(y.events.slice(t), y)), e.resolveTo && (y.events = e.resolveTo(y.events, y))
                }

                function C() {
                    d.line in p && d.column < 2 && (d.column = p[d.line], d.offset += p[d.line] - 1)
                }
            }
        },
        28180: function(e) {
            "use strict";
            e.exports = function(e) {
                return null === e || void 0 === e ? [] : "length" in e ? e : [e]
            }
        },
        15644: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e.column += t, e.offset += t, e._bufferIndex += t, e
            }
        },
        35478: function(e) {
            "use strict";
            e.exports = function(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        15096: function(e, t, n) {
            "use strict";
            var r = n(18892);
            e.exports = function(e, t) {
                var n = e[e.length - 1];
                return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
            }
        },
        2841: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                return function(t) {
                    return e.test(r(t))
                }
            }
        },
        58280: function(e) {
            "use strict";
            e.exports = function(e, t, n) {
                for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
                return t
            }
        },
        10596: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e, t) {
                var n = parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 === (65535 & n) || 65534 === (65535 & n) || n > 1114111 ? "\ufffd" : r(n)
            }
        },
        23082: function(e, t, n) {
            "use strict";
            var r = n(93267);
            e.exports = function(e) {
                for (var t, n, i, o = -1, a = []; ++o < e.length;) {
                    if ("string" === typeof(t = e[o])) n = t;
                    else if (-5 === t) n = "\r";
                    else if (-4 === t) n = "\n";
                    else if (-3 === t) n = "\r\n";
                    else if (-2 === t) n = "\t";
                    else if (-1 === t) {
                        if (i) continue;
                        n = " "
                    } else n = r(t);
                    i = -2 === t, a.push(n)
                }
                return a.join("")
            }
        },
        75923: function(e, t, n) {
            "use strict";
            var r = n(99198);
            e.exports = function(e) {
                return r({}, e)
            }
        },
        18892: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = -1, n = 0; ++t < e.length;) n += "string" === typeof e[t] ? e[t].length : 1;
                return n
            }
        },
        12774: function(e) {
            "use strict";
            e.exports = function(e, t) {
                var n, r = t.start._index,
                    i = t.start._bufferIndex,
                    o = t.end._index,
                    a = t.end._bufferIndex;
                return r === o ? n = [e[r].slice(i, a)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), a > 0 && n.push(e[o].slice(0, a))), n
            }
        },
        84423: function(e, t, n) {
            "use strict";
            var r = n(99198),
                i = n(56808),
                o = n(75923);

            function a(e, t) {
                for (var n, r, o, a, s, u, c = e[t][1], l = e[t][2], f = t - 1, d = [], p = c._tokenizer || l.parser[c.contentType](c.start), h = p.events, v = [], g = {}; c;) {
                    for (; e[++f][1] !== c;);
                    d.push(f), c._tokenizer || (n = l.sliceStream(c), c.next || n.push(null), r && p.defineSkip(c.start), c.isInFirstContentOfListItem && (p._gfmTasklistFirstContentOfListItem = !0), p.write(n), c.isInFirstContentOfListItem && (p._gfmTasklistFirstContentOfListItem = void 0)), r = c, c = c.next
                }
                for (c = r, o = h.length; o--;) "enter" === h[o][0] ? a = !0 : a && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (m(h.slice(o + 1, s)), c._tokenizer = c.next = void 0, c = c.previous, s = o + 1);
                for (p.events = c._tokenizer = c.next = void 0, m(h.slice(0, s)), o = -1, u = 0; ++o < v.length;) g[u + v[o][0]] = u + v[o][1], u += v[o][1] - v[o][0] - 1;
                return g;

                function m(t) {
                    var n = d.pop();
                    v.unshift([n, n + t.length - 1]), i(e, n, 2, t)
                }
            }
            e.exports = function(e) {
                for (var t, n, s, u, c, l, f, d = {}, p = -1; ++p < e.length;) {
                    for (; p in d;) p = d[p];
                    if (t = e[p], p && "chunkFlow" === t[1].type && "listItemPrefix" === e[p - 1][1].type && ((s = 0) < (l = t[1]._tokenizer.events).length && "lineEndingBlank" === l[s][1].type && (s += 2), s < l.length && "content" === l[s][1].type))
                        for (; ++s < l.length && "content" !== l[s][1].type;) "chunkText" === l[s][1].type && (l[s][1].isInFirstContentOfListItem = !0, s++);
                    if ("enter" === t[0]) t[1].contentType && (r(d, a(e, p)), p = d[p], f = !0);
                    else if (t[1]._container || t[1]._movePreviousLineEndings) {
                        for (s = p, n = void 0; s-- && ("lineEnding" === (u = e[s])[1].type || "lineEndingBlank" === u[1].type);) "enter" === u[0] && (n && (e[n][1].type = "lineEndingBlank"), u[1].type = "lineEnding", n = s);
                        n && (t[1].end = o(e[n][1].start), (c = e.slice(n, p)).unshift(t), i(e, n, p - n + 1, c))
                    }
                }
                return !f
            }
        },
        89435: function(e) {
            "use strict";
            var t;
            e.exports = function(e) {
                var n, r = "&" + e + ";";
                if ((t = t || document.createElement("i")).innerHTML = r, 59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1;
                return n !== r && n
            }
        },
        15660: function(e, t, n) {
            var r = function(e) {
                var t = /\blang(?:uage)?-([\w-]+)\b/i,
                    n = 0,
                    r = {},
                    i = {
                        manual: e.Prism && e.Prism.manual,
                        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function e(t) {
                                return t instanceof o ? new o(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function(e) {
                                return Object.prototype.toString.call(e).slice(8, -1)
                            },
                            objId: function(e) {
                                return e.__id || Object.defineProperty(e, "__id", {
                                    value: ++n
                                }), e.__id
                            },
                            clone: function e(t, n) {
                                var r, o;
                                switch (n = n || {}, i.util.type(t)) {
                                    case "Object":
                                        if (o = i.util.objId(t), n[o]) return n[o];
                                        for (var a in r = {}, n[o] = r, t) t.hasOwnProperty(a) && (r[a] = e(t[a], n));
                                        return r;
                                    case "Array":
                                        return o = i.util.objId(t), n[o] ? n[o] : (r = [], n[o] = r, t.forEach((function(t, i) {
                                            r[i] = e(t, n)
                                        })), r);
                                    default:
                                        return t
                                }
                            },
                            getLanguage: function(e) {
                                for (; e && !t.test(e.className);) e = e.parentElement;
                                return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none"
                            },
                            currentScript: function() {
                                if ("undefined" === typeof document) return null;
                                if ("currentScript" in document) return document.currentScript;
                                try {
                                    throw new Error
                                } catch (r) {
                                    var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1];
                                    if (e) {
                                        var t = document.getElementsByTagName("script");
                                        for (var n in t)
                                            if (t[n].src == e) return t[n]
                                    }
                                    return null
                                }
                            },
                            isActive: function(e, t, n) {
                                for (var r = "no-" + t; e;) {
                                    var i = e.classList;
                                    if (i.contains(t)) return !0;
                                    if (i.contains(r)) return !1;
                                    e = e.parentElement
                                }
                                return !!n
                            }
                        },
                        languages: {
                            plain: r,
                            plaintext: r,
                            text: r,
                            txt: r,
                            extend: function(e, t) {
                                var n = i.util.clone(i.languages[e]);
                                for (var r in t) n[r] = t[r];
                                return n
                            },
                            insertBefore: function(e, t, n, r) {
                                var o = (r = r || i.languages)[e],
                                    a = {};
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        if (s == t)
                                            for (var u in n) n.hasOwnProperty(u) && (a[u] = n[u]);
                                        n.hasOwnProperty(s) || (a[s] = o[s])
                                    } var c = r[e];
                                return r[e] = a, i.languages.DFS(i.languages, (function(t, n) {
                                    n === c && t != e && (this[t] = a)
                                })), a
                            },
                            DFS: function e(t, n, r, o) {
                                o = o || {};
                                var a = i.util.objId;
                                for (var s in t)
                                    if (t.hasOwnProperty(s)) {
                                        n.call(t, s, t[s], r || s);
                                        var u = t[s],
                                            c = i.util.type(u);
                                        "Object" !== c || o[a(u)] ? "Array" !== c || o[a(u)] || (o[a(u)] = !0, e(u, n, s, o)) : (o[a(u)] = !0, e(u, n, null, o))
                                    }
                            }
                        },
                        plugins: {},
                        highlightAll: function(e, t) {
                            i.highlightAllUnder(document, e, t)
                        },
                        highlightAllUnder: function(e, t, n) {
                            var r = {
                                callback: n,
                                container: e,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
                            for (var o, a = 0; o = r.elements[a++];) i.highlightElement(o, !0 === t, r.callback)
                        },
                        highlightElement: function(n, r, o) {
                            var a = i.util.getLanguage(n),
                                s = i.languages[a];
                            n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + a;
                            var u = n.parentElement;
                            u && "pre" === u.nodeName.toLowerCase() && (u.className = u.className.replace(t, "").replace(/\s+/g, " ") + " language-" + a);
                            var c = {
                                element: n,
                                language: a,
                                grammar: s,
                                code: n.textContent
                            };

                            function l(e) {
                                c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, i.hooks.run("after-highlight", c), i.hooks.run("complete", c), o && o.call(c.element)
                            }
                            if (i.hooks.run("before-sanity-check", c), (u = c.element.parentElement) && "pre" === u.nodeName.toLowerCase() && !u.hasAttribute("tabindex") && u.setAttribute("tabindex", "0"), !c.code) return i.hooks.run("complete", c), void(o && o.call(c.element));
                            if (i.hooks.run("before-highlight", c), c.grammar)
                                if (r && e.Worker) {
                                    var f = new Worker(i.filename);
                                    f.onmessage = function(e) {
                                        l(e.data)
                                    }, f.postMessage(JSON.stringify({
                                        language: c.language,
                                        code: c.code,
                                        immediateClose: !0
                                    }))
                                } else l(i.highlight(c.code, c.grammar, c.language));
                            else l(i.util.encode(c.code))
                        },
                        highlight: function(e, t, n) {
                            var r = {
                                code: e,
                                grammar: t,
                                language: n
                            };
                            return i.hooks.run("before-tokenize", r), r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), o.stringify(i.util.encode(r.tokens), r.language)
                        },
                        tokenize: function(e, t) {
                            var n = t.rest;
                            if (n) {
                                for (var r in n) t[r] = n[r];
                                delete t.rest
                            }
                            var i = new u;
                            return c(i, i.head, e), s(e, i, t, i.head, 0),
                                function(e) {
                                    var t = [],
                                        n = e.head.next;
                                    for (; n !== e.tail;) t.push(n.value), n = n.next;
                                    return t
                                }(i)
                        },
                        hooks: {
                            all: {},
                            add: function(e, t) {
                                var n = i.hooks.all;
                                n[e] = n[e] || [], n[e].push(t)
                            },
                            run: function(e, t) {
                                var n = i.hooks.all[e];
                                if (n && n.length)
                                    for (var r, o = 0; r = n[o++];) r(t)
                            }
                        },
                        Token: o
                    };

                function o(e, t, n, r) {
                    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                }

                function a(e, t, n, r) {
                    e.lastIndex = t;
                    var i = e.exec(n);
                    if (i && r && i[1]) {
                        var o = i[1].length;
                        i.index += o, i[0] = i[0].slice(o)
                    }
                    return i
                }

                function s(e, t, n, r, u, f) {
                    for (var d in n)
                        if (n.hasOwnProperty(d) && n[d]) {
                            var p = n[d];
                            p = Array.isArray(p) ? p : [p];
                            for (var h = 0; h < p.length; ++h) {
                                if (f && f.cause == d + "," + h) return;
                                var v = p[h],
                                    g = v.inside,
                                    m = !!v.lookbehind,
                                    y = !!v.greedy,
                                    b = v.alias;
                                if (y && !v.pattern.global) {
                                    var w = v.pattern.toString().match(/[imsuy]*$/)[0];
                                    v.pattern = RegExp(v.pattern.source, w + "g")
                                }
                                for (var x = v.pattern || v, k = r.next, O = u; k !== t.tail && !(f && O >= f.reach); O += k.value.length, k = k.next) {
                                    var E = k.value;
                                    if (t.length > e.length) return;
                                    if (!(E instanceof o)) {
                                        var S, D = 1;
                                        if (y) {
                                            if (!(S = a(x, O, e, m))) break;
                                            var C = S.index,
                                                P = S.index + S[0].length,
                                                A = O;
                                            for (A += k.value.length; C >= A;) A += (k = k.next).value.length;
                                            if (O = A -= k.value.length, k.value instanceof o) continue;
                                            for (var T = k; T !== t.tail && (A < P || "string" === typeof T.value); T = T.next) D++, A += T.value.length;
                                            D--, E = e.slice(O, A), S.index -= O
                                        } else if (!(S = a(x, 0, E, m))) continue;
                                        C = S.index;
                                        var F = S[0],
                                            j = E.slice(0, C),
                                            I = E.slice(C + F.length),
                                            _ = O + E.length;
                                        f && _ > f.reach && (f.reach = _);
                                        var M = k.prev;
                                        if (j && (M = c(t, M, j), O += j.length), l(t, M, D), k = c(t, M, new o(d, g ? i.tokenize(F, g) : F, b, F)), I && c(t, k, I), D > 1) {
                                            var L = {
                                                cause: d + "," + h,
                                                reach: _
                                            };
                                            s(e, t, n, k.prev, O, L), f && L.reach > f.reach && (f.reach = L.reach)
                                        }
                                    }
                                }
                            }
                        }
                }

                function u() {
                    var e = {
                            value: null,
                            prev: null,
                            next: null
                        },
                        t = {
                            value: null,
                            prev: e,
                            next: null
                        };
                    e.next = t, this.head = e, this.tail = t, this.length = 0
                }

                function c(e, t, n) {
                    var r = t.next,
                        i = {
                            value: n,
                            prev: t,
                            next: r
                        };
                    return t.next = i, r.prev = i, e.length++, i
                }

                function l(e, t, n) {
                    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                    t.next = r, r.prev = t, e.length -= i
                }
                if (e.Prism = i, o.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var r = "";
                            return t.forEach((function(t) {
                                r += e(t, n)
                            })), r
                        }
                        var o = {
                                type: t.type,
                                content: e(t.content, n),
                                tag: "span",
                                classes: ["token", t.type],
                                attributes: {},
                                language: n
                            },
                            a = t.alias;
                        a && (Array.isArray(a) ? Array.prototype.push.apply(o.classes, a) : o.classes.push(a)), i.hooks.run("wrap", o);
                        var s = "";
                        for (var u in o.attributes) s += " " + u + '="' + (o.attributes[u] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + s + ">" + o.content + "</" + o.tag + ">"
                    }, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
                    var n = JSON.parse(t.data),
                        r = n.language,
                        o = n.code,
                        a = n.immediateClose;
                    e.postMessage(i.highlight(o, i.languages[r], r)), a && e.close()
                }), !1), i) : i;
                var f = i.util.currentScript();

                function d() {
                    i.manual || i.highlightAll()
                }
                if (f && (i.filename = f.src, f.hasAttribute("data-manual") && (i.manual = !0)), !i.manual) {
                    var p = document.readyState;
                    "loading" === p || "interactive" === p && f && f.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16)
                }
                return i
            }("undefined" !== typeof window ? window : "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = r), "undefined" !== typeof n.g && (n.g.Prism = r), r.languages.markup = {
                    comment: /<!--[\s\S]*?-->/,
                    prolog: /<\?[\s\S]+?\?>/,
                    doctype: {
                        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: !0,
                        inside: {
                            "internal-subset": {
                                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                lookbehind: !0,
                                greedy: !0,
                                inside: null
                            },
                            string: {
                                pattern: /"[^"]*"|'[^']*'/,
                                greedy: !0
                            },
                            punctuation: /^<!|>$|[[\]]/,
                            "doctype-tag": /^DOCTYPE/,
                            name: /[^\s<>'"]+/
                        }
                    },
                    cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    tag: {
                        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: !0,
                        inside: {
                            tag: {
                                pattern: /^<\/?[^\s>\/]+/,
                                inside: {
                                    punctuation: /^<\/?/,
                                    namespace: /^[^\s>\/:]+:/
                                }
                            },
                            "special-attr": [],
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: {
                                    punctuation: [{
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/]
                                }
                            },
                            punctuation: /\/?>/,
                            "attr-name": {
                                pattern: /[^\s>\/]+/,
                                inside: {
                                    namespace: /^[^\s>\/:]+:/
                                }
                            }
                        }
                    },
                    entity: [{
                        pattern: /&[\da-z]{1,8};/i,
                        alias: "named-entity"
                    }, /&#x?[\da-f]{1,8};/i]
                }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", (function(e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                })), Object.defineProperty(r.languages.markup.tag, "addInlined", {
                    value: function(e, t) {
                        var n = {};
                        n["language-" + t] = {
                            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                            lookbehind: !0,
                            inside: r.languages[t]
                        }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                        var i = {
                            "included-cdata": {
                                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                inside: n
                            }
                        };
                        i["language-" + t] = {
                            pattern: /[\s\S]+/,
                            inside: r.languages[t]
                        };
                        var o = {};
                        o[e] = {
                            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                                return e
                            })), "i"),
                            lookbehind: !0,
                            greedy: !0,
                            inside: i
                        }, r.languages.insertBefore("markup", "cdata", o)
                    }
                }), Object.defineProperty(r.languages.markup.tag, "addAttribute", {
                    value: function(e, t) {
                        r.languages.markup.tag.inside["special-attr"].push({
                            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                            lookbehind: !0,
                            inside: {
                                "attr-name": /^[^\s=]+/,
                                "attr-value": {
                                    pattern: /=[\s\S]+/,
                                    inside: {
                                        value: {
                                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                            lookbehind: !0,
                                            alias: [t, "language-" + t],
                                            inside: r.languages[t]
                                        },
                                        punctuation: [{
                                            pattern: /^=/,
                                            alias: "attr-equals"
                                        }, /"|'/]
                                    }
                                }
                            }
                        })
                    }
                }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml,
                function(e) {
                    var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                    e.languages.css = {
                        comment: /\/\*[\s\S]*?\*\//,
                        atrule: {
                            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                            inside: {
                                rule: /^@[\w-]+/,
                                "selector-function-argument": {
                                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                    lookbehind: !0,
                                    alias: "selector"
                                },
                                keyword: {
                                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                    lookbehind: !0
                                }
                            }
                        },
                        url: {
                            pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                            greedy: !0,
                            inside: {
                                function: /^url/i,
                                punctuation: /^\(|\)$/,
                                string: {
                                    pattern: RegExp("^" + t.source + "$"),
                                    alias: "url"
                                }
                            }
                        },
                        selector: {
                            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                            lookbehind: !0
                        },
                        string: {
                            pattern: t,
                            greedy: !0
                        },
                        property: {
                            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                            lookbehind: !0
                        },
                        important: /!important\b/i,
                        function: {
                            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                            lookbehind: !0
                        },
                        punctuation: /[(){};:,]/
                    }, e.languages.css.atrule.inside.rest = e.languages.css;
                    var n = e.languages.markup;
                    n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
                }(r), r.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    boolean: /\b(?:true|false)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/
                }, r.languages.javascript = r.languages.extend("clike", {
                    "class-name": [r.languages.clike["class-name"], {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                        lookbehind: !0
                    }],
                    keyword: [{
                        pattern: /((?:^|\})\s*)catch\b/,
                        lookbehind: !0
                    }, {
                        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                        lookbehind: !0
                    }],
                    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "regex-source": {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: !0,
                                alias: "language-regex",
                                inside: r.languages.regex
                            },
                            "regex-delimiter": /^\/|\/$/,
                            "regex-flags": /^[a-z]+$/
                        }
                    },
                    "function-variable": {
                        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: "function"
                    },
                    parameter: [{
                        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }, {
                        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                        lookbehind: !0,
                        inside: r.languages.javascript
                    }],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                }), r.languages.insertBefore("javascript", "string", {
                    hashbang: {
                        pattern: /^#!.*/,
                        greedy: !0,
                        alias: "comment"
                    },
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": {
                                pattern: /^`|`$/,
                                alias: "string"
                            },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": {
                                        pattern: /^\$\{|\}$/,
                                        alias: "punctuation"
                                    },
                                    rest: r.languages.javascript
                                }
                            },
                            string: /[\s\S]+/
                        }
                    }
                }), r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"), r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), r.languages.js = r.languages.javascript,
                function() {
                    if ("undefined" !== typeof r && "undefined" !== typeof document) {
                        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                        var e = {
                                js: "javascript",
                                py: "python",
                                rb: "ruby",
                                ps1: "powershell",
                                psm1: "powershell",
                                sh: "bash",
                                bat: "batch",
                                h: "c",
                                tex: "latex"
                            },
                            t = "data-src-status",
                            n = "loading",
                            i = "loaded",
                            o = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                            a = /\blang(?:uage)?-([\w-]+)\b/i;
                        r.hooks.add("before-highlightall", (function(e) {
                            e.selector += ", " + o
                        })), r.hooks.add("before-sanity-check", (function(a) {
                            var s = a.element;
                            if (s.matches(o)) {
                                a.code = "", s.setAttribute(t, n);
                                var c = s.appendChild(document.createElement("CODE"));
                                c.textContent = "Loading\u2026";
                                var l = s.getAttribute("data-src"),
                                    f = a.language;
                                if ("none" === f) {
                                    var d = (/\.(\w+)$/.exec(l) || [, "none"])[1];
                                    f = e[d] || d
                                }
                                u(c, f), u(s, f);
                                var p = r.plugins.autoloader;
                                p && p.loadLanguages(f);
                                var h = new XMLHttpRequest;
                                h.open("GET", l, !0), h.onreadystatechange = function() {
                                    var e, n;
                                    4 == h.readyState && (h.status < 400 && h.responseText ? (s.setAttribute(t, i), c.textContent = h.responseText, r.highlightElement(c)) : (s.setAttribute(t, "failed"), h.status >= 400 ? c.textContent = (e = h.status, n = h.statusText, "\u2716 Error " + e + " while fetching file: " + n) : c.textContent = "\u2716 Error: File does not exist or is empty"))
                                }, h.send(null)
                            }
                        })), r.plugins.fileHighlight = {
                            highlight: function(e) {
                                for (var t, n = (e || document).querySelectorAll(o), i = 0; t = n[i++];) r.highlightElement(t)
                            }
                        };
                        var s = !1;
                        r.fileHighlight = function() {
                            s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), s = !0), r.plugins.fileHighlight.highlight.apply(this, arguments)
                        }
                    }

                    function u(e, t) {
                        var n = e.className;
                        n = n.replace(a, " ") + " language-" + t, e.className = n.replace(/\s+/g, " ").trim()
                    }
                }()
        },
        46408: function(e, t, n) {
            "use strict";
            var r;

            function i() {
                return r || ((r = new Image).src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), r
            }
            n.d(t, {
                r: function() {
                    return i
                }
            })
        },
        57865: function(e, t, n) {
            "use strict";
            n.d(t, {
                PD: function() {
                    return j
                }
            });
            var r = {};

            function i(e) {
                var t = null;
                return function() {
                    return null == t && (t = e()), t
                }
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            n.r(r), n.d(r, {
                FILE: function() {
                    return v
                },
                HTML: function() {
                    return y
                },
                TEXT: function() {
                    return m
                },
                URL: function() {
                    return g
                }
            });
            var a = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.entered = [], this.isNodeInDocument = t
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "enter",
                        value: function(e) {
                            var t = this,
                                n = this.entered.length;
                            return this.entered = function(e, t) {
                                var n = new Set,
                                    r = function(e) {
                                        return n.add(e)
                                    };
                                e.forEach(r), t.forEach(r);
                                var i = [];
                                return n.forEach((function(e) {
                                    return i.push(e)
                                })), i
                            }(this.entered.filter((function(n) {
                                return t.isNodeInDocument(n) && (!n.contains || n.contains(e))
                            })), [e]), 0 === n && this.entered.length > 0
                        }
                    }, {
                        key: "leave",
                        value: function(e) {
                            var t, n, r = this.entered.length;
                            return this.entered = (t = this.entered.filter(this.isNodeInDocument), n = e, t.filter((function(e) {
                                return e !== n
                            }))), r > 0 && 0 === this.entered.length
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.entered = []
                        }
                    }]) && o(t.prototype, n), r && o(t, r), e
                }(),
                s = i((function() {
                    return /firefox/i.test(navigator.userAgent)
                })),
                u = i((function() {
                    return Boolean(window.safari)
                }));

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var l = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    for (var r = t.length, i = [], o = 0; o < r; o++) i.push(o);
                    i.sort((function(e, n) {
                        return t[e] < t[n] ? -1 : 1
                    }));
                    for (var a, s, u = [], c = [], l = [], f = 0; f < r - 1; f++) a = t[f + 1] - t[f], s = n[f + 1] - n[f], c.push(a), u.push(s), l.push(s / a);
                    for (var d = [l[0]], p = 0; p < c.length - 1; p++) {
                        var h = l[p],
                            v = l[p + 1];
                        if (h * v <= 0) d.push(0);
                        else {
                            a = c[p];
                            var g = c[p + 1],
                                m = a + g;
                            d.push(3 * m / ((m + g) / h + (m + a) / v))
                        }
                    }
                    d.push(l[l.length - 1]);
                    for (var y, b = [], w = [], x = 0; x < d.length - 1; x++) {
                        y = l[x];
                        var k = d[x],
                            O = 1 / c[x],
                            E = k + d[x + 1] - y - y;
                        b.push((y - k - E) * O), w.push(E * O * O)
                    }
                    this.xs = t, this.ys = n, this.c1s = d, this.c2s = b, this.c3s = w
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "interpolate",
                    value: function(e) {
                        var t = this.xs,
                            n = this.ys,
                            r = this.c1s,
                            i = this.c2s,
                            o = this.c3s,
                            a = t.length - 1;
                        if (e === t[a]) return n[a];
                        for (var s, u = 0, c = o.length - 1; u <= c;) {
                            var l = t[s = Math.floor(.5 * (u + c))];
                            if (l < e) u = s + 1;
                            else {
                                if (!(l > e)) return n[s];
                                c = s - 1
                            }
                        }
                        var f = e - t[a = Math.max(0, c)],
                            d = f * f;
                        return n[a] + r[a] * f + i[a] * d + o[a] * f * d
                    }
                }]) && c(t.prototype, n), r && c(t, r), e
            }();

            function f(e) {
                var t = 1 === e.nodeType ? e : e.parentElement;
                if (!t) return null;
                var n = t.getBoundingClientRect(),
                    r = n.top;
                return {
                    x: n.left,
                    y: r
                }
            }

            function d(e) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }

            function p(e, t, n, r, i) {
                var o = function(e) {
                        var t;
                        return "IMG" === e.nodeName && (s() || !(null !== (t = document.documentElement) && void 0 !== t && t.contains(e)))
                    }(t),
                    a = f(o ? e : t),
                    c = {
                        x: n.x - a.x,
                        y: n.y - a.y
                    },
                    d = e.offsetWidth,
                    p = e.offsetHeight,
                    h = r.anchorX,
                    v = r.anchorY,
                    g = function(e, t, n, r) {
                        var i = e ? t.width : n,
                            o = e ? t.height : r;
                        return u() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
                            dragPreviewWidth: i,
                            dragPreviewHeight: o
                        }
                    }(o, t, d, p),
                    m = g.dragPreviewWidth,
                    y = g.dragPreviewHeight,
                    b = i.offsetX,
                    w = i.offsetY,
                    x = 0 === w || w;
                return {
                    x: 0 === b || b ? b : new l([0, .5, 1], [c.x, c.x / d * m, c.x + m - d]).interpolate(h),
                    y: x ? w : function() {
                        var e = new l([0, .5, 1], [c.y, c.y / p * y, c.y + y - p]).interpolate(v);
                        return u() && o && (e += (window.devicePixelRatio - 1) * y), e
                    }()
                }
            }
            var h, v = "__NATIVE_FILE__",
                g = "__NATIVE_URL__",
                m = "__NATIVE_TEXT__",
                y = "__NATIVE_HTML__";

            function b(e, t, n) {
                var r = t.reduce((function(t, n) {
                    return t || e.getData(n)
                }), "");
                return null != r ? r : n
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = (w(h = {}, v, {
                exposeProperties: {
                    files: function(e) {
                        return Array.prototype.slice.call(e.files)
                    },
                    items: function(e) {
                        return e.items
                    }
                },
                matchesTypes: ["Files"]
            }), w(h, y, {
                exposeProperties: {
                    html: function(e, t) {
                        return b(e, t, "")
                    }
                },
                matchesTypes: ["Html", "text/html"]
            }), w(h, g, {
                exposeProperties: {
                    urls: function(e, t) {
                        return b(e, t, "").split("\n")
                    }
                },
                matchesTypes: ["Url", "text/uri-list"]
            }), w(h, m, {
                exposeProperties: {
                    text: function(e, t) {
                        return b(e, t, "")
                    }
                },
                matchesTypes: ["Text", "text/plain"]
            }), h);

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var O = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.config = t, this.item = {}, this.initializeExposedProperties()
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "initializeExposedProperties",
                    value: function() {
                        var e = this;
                        Object.keys(this.config.exposeProperties).forEach((function(t) {
                            Object.defineProperty(e.item, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return console.warn("Browser doesn't allow reading \"".concat(t, '" until the drop event.')), null
                                }
                            })
                        }))
                    }
                }, {
                    key: "loadDataTransfer",
                    value: function(e) {
                        var t = this;
                        if (e) {
                            var n = {};
                            Object.keys(this.config.exposeProperties).forEach((function(r) {
                                n[r] = {
                                    value: t.config.exposeProperties[r](e, t.config.matchesTypes),
                                    configurable: !0,
                                    enumerable: !0
                                }
                            })), Object.defineProperties(this.item, n)
                        }
                    }
                }, {
                    key: "canDrag",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "beginDrag",
                    value: function() {
                        return this.item
                    }
                }, {
                    key: "isDragging",
                    value: function(e, t) {
                        return t === e.getSourceId()
                    }
                }, {
                    key: "endDrag",
                    value: function() {}
                }]) && k(t.prototype, n), r && k(t, r), e
            }();

            function E(e) {
                if (!e) return null;
                var t = Array.prototype.slice.call(e.types || []);
                return Object.keys(x).filter((function(e) {
                    return x[e].matchesTypes.some((function(e) {
                        return t.indexOf(e) > -1
                    }))
                }))[0] || null
            }

            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var D = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.ownerDocument = null, this.globalContext = t, this.optionsArgs = n
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "window",
                    get: function() {
                        return this.globalContext ? this.globalContext : "undefined" !== typeof window ? window : void 0
                    }
                }, {
                    key: "document",
                    get: function() {
                        var e;
                        return null !== (e = this.globalContext) && void 0 !== e && e.document ? this.globalContext.document : this.window ? this.window.document : void 0
                    }
                }, {
                    key: "rootElement",
                    get: function() {
                        var e;
                        return (null === (e = this.optionsArgs) || void 0 === e ? void 0 : e.rootElement) || this.window
                    }
                }]) && S(t.prototype, n), r && S(t, r), e
            }();

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        A(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function A(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function T(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var F = function() {
                    function e(t, n, r) {
                        var i = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.sourceNodes = new Map, this.sourceNodeOptions = new Map, this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.getSourceClientOffset = function(e) {
                            var t = i.sourceNodes.get(e);
                            return t && f(t) || null
                        }, this.endDragNativeItem = function() {
                            i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null)
                        }, this.isNodeInDocument = function(e) {
                            return Boolean(e && i.document && i.document.body && document.body.contains(e))
                        }, this.endDragIfSourceWasRemovedFromDOM = function() {
                            var e = i.currentDragSourceNode;
                            null == e || i.isNodeInDocument(e) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag()
                        }, this.handleTopDragStartCapture = function() {
                            i.clearCurrentDragSourceNode(), i.dragStartSourceIds = []
                        }, this.handleTopDragStart = function(e) {
                            if (!e.defaultPrevented) {
                                var t = i.dragStartSourceIds;
                                i.dragStartSourceIds = null;
                                var n = d(e);
                                i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(t || [], {
                                    publishSource: !1,
                                    getSourceClientOffset: i.getSourceClientOffset,
                                    clientOffset: n
                                });
                                var r = e.dataTransfer,
                                    o = E(r);
                                if (i.monitor.isDragging()) {
                                    if (r && "function" === typeof r.setDragImage) {
                                        var a = i.monitor.getSourceId(),
                                            s = i.sourceNodes.get(a),
                                            u = i.sourcePreviewNodes.get(a) || s;
                                        if (u) {
                                            var c = i.getCurrentSourcePreviewNodeOptions(),
                                                l = p(s, u, n, {
                                                    anchorX: c.anchorX,
                                                    anchorY: c.anchorY
                                                }, {
                                                    offsetX: c.offsetX,
                                                    offsetY: c.offsetY
                                                });
                                            r.setDragImage(u, l.x, l.y)
                                        }
                                    }
                                    try {
                                        null === r || void 0 === r || r.setData("application/json", {})
                                    } catch (f) {}
                                    i.setCurrentDragSourceNode(e.target), i.getCurrentSourcePreviewNodeOptions().captureDraggingState ? i.actions.publishDragSource() : setTimeout((function() {
                                        return i.actions.publishDragSource()
                                    }), 0)
                                } else if (o) i.beginDragNativeItem(o);
                                else {
                                    if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
                                    e.preventDefault()
                                }
                            }
                        }, this.handleTopDragEndCapture = function() {
                            i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag()
                        }, this.handleTopDragEnterCapture = function(e) {
                            if (i.dragEnterTargetIds = [], i.enterLeaveCounter.enter(e.target) && !i.monitor.isDragging()) {
                                var t = e.dataTransfer,
                                    n = E(t);
                                n && i.beginDragNativeItem(n, t)
                            }
                        }, this.handleTopDragEnter = function(e) {
                            var t = i.dragEnterTargetIds;
                            (i.dragEnterTargetIds = [], i.monitor.isDragging()) && (i.altKeyPressed = e.altKey, t.length > 0 && i.actions.hover(t, {
                                clientOffset: d(e)
                            }), t.some((function(e) {
                                return i.monitor.canDropOnTarget(e)
                            })) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect())))
                        }, this.handleTopDragOverCapture = function() {
                            i.dragOverTargetIds = []
                        }, this.handleTopDragOver = function(e) {
                            var t = i.dragOverTargetIds;
                            if (i.dragOverTargetIds = [], !i.monitor.isDragging()) return e.preventDefault(), void(e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                            i.altKeyPressed = e.altKey, i.actions.hover(t || [], {
                                clientOffset: d(e)
                            }), (t || []).some((function(e) {
                                return i.monitor.canDropOnTarget(e)
                            })) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
                        }, this.handleTopDragLeaveCapture = function(e) {
                            i.isDraggingNativeItem() && e.preventDefault(), i.enterLeaveCounter.leave(e.target) && i.isDraggingNativeItem() && setTimeout((function() {
                                return i.endDragNativeItem()
                            }), 0)
                        }, this.handleTopDropCapture = function(e) {
                            var t;
                            (i.dropTargetIds = [], i.isDraggingNativeItem()) && (e.preventDefault(), null === (t = i.currentNativeSource) || void 0 === t || t.loadDataTransfer(e.dataTransfer));
                            i.enterLeaveCounter.reset()
                        }, this.handleTopDrop = function(e) {
                            var t = i.dropTargetIds;
                            i.dropTargetIds = [], i.actions.hover(t, {
                                clientOffset: d(e)
                            }), i.actions.drop({
                                dropEffect: i.getCurrentDropEffect()
                            }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag()
                        }, this.handleSelectStart = function(e) {
                            var t = e.target;
                            "function" === typeof t.dragDrop && ("INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable || (e.preventDefault(), t.dragDrop()))
                        }, this.options = new D(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new a(this.isNodeInDocument)
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "profile",
                        value: function() {
                            var e, t;
                            return {
                                sourcePreviewNodes: this.sourcePreviewNodes.size,
                                sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
                                sourceNodeOptions: this.sourceNodeOptions.size,
                                sourceNodes: this.sourceNodes.size,
                                dragStartSourceIds: (null === (e = this.dragStartSourceIds) || void 0 === e ? void 0 : e.length) || 0,
                                dropTargetIds: this.dropTargetIds.length,
                                dragEnterTargetIds: this.dragEnterTargetIds.length,
                                dragOverTargetIds: (null === (t = this.dragOverTargetIds) || void 0 === t ? void 0 : t.length) || 0
                            }
                        }
                    }, {
                        key: "window",
                        get: function() {
                            return this.options.window
                        }
                    }, {
                        key: "document",
                        get: function() {
                            return this.options.document
                        }
                    }, {
                        key: "rootElement",
                        get: function() {
                            return this.options.rootElement
                        }
                    }, {
                        key: "setup",
                        value: function() {
                            var e = this.rootElement;
                            if (void 0 !== e) {
                                if (e.__isReactDndBackendSetUp) throw new Error("Cannot have two HTML5 backends at the same time.");
                                e.__isReactDndBackendSetUp = !0, this.addEventListeners(e)
                            }
                        }
                    }, {
                        key: "teardown",
                        value: function() {
                            var e, t = this.rootElement;
                            void 0 !== t && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null === (e = this.window) || void 0 === e || e.cancelAnimationFrame(this.asyncEndDragFrameId)))
                        }
                    }, {
                        key: "connectDragPreview",
                        value: function(e, t, n) {
                            var r = this;
                            return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t),
                                function() {
                                    r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e)
                                }
                        }
                    }, {
                        key: "connectDragSource",
                        value: function(e, t, n) {
                            var r = this;
                            this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                            var i = function(t) {
                                    return r.handleDragStart(t, e)
                                },
                                o = function(e) {
                                    return r.handleSelectStart(e)
                                };
                            return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", i), t.addEventListener("selectstart", o),
                                function() {
                                    r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", i), t.removeEventListener("selectstart", o), t.setAttribute("draggable", "false")
                                }
                        }
                    }, {
                        key: "connectDropTarget",
                        value: function(e, t) {
                            var n = this,
                                r = function(t) {
                                    return n.handleDragEnter(t, e)
                                },
                                i = function(t) {
                                    return n.handleDragOver(t, e)
                                },
                                o = function(t) {
                                    return n.handleDrop(t, e)
                                };
                            return t.addEventListener("dragenter", r), t.addEventListener("dragover", i), t.addEventListener("drop", o),
                                function() {
                                    t.removeEventListener("dragenter", r), t.removeEventListener("dragover", i), t.removeEventListener("drop", o)
                                }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function(e) {
                            e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0))
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function(e) {
                            e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0))
                        }
                    }, {
                        key: "getCurrentSourceNodeOptions",
                        value: function() {
                            var e = this.monitor.getSourceId(),
                                t = this.sourceNodeOptions.get(e);
                            return P({
                                dropEffect: this.altKeyPressed ? "copy" : "move"
                            }, t || {})
                        }
                    }, {
                        key: "getCurrentDropEffect",
                        value: function() {
                            return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
                        }
                    }, {
                        key: "getCurrentSourcePreviewNodeOptions",
                        value: function() {
                            var e = this.monitor.getSourceId();
                            return P({
                                anchorX: .5,
                                anchorY: .5,
                                captureDraggingState: !1
                            }, this.sourcePreviewNodeOptions.get(e) || {})
                        }
                    }, {
                        key: "isDraggingNativeItem",
                        value: function() {
                            var e = this.monitor.getItemType();
                            return Object.keys(r).some((function(t) {
                                return r[t] === e
                            }))
                        }
                    }, {
                        key: "beginDragNativeItem",
                        value: function(e, t) {
                            this.clearCurrentDragSourceNode(), this.currentNativeSource = function(e, t) {
                                var n = new O(x[e]);
                                return n.loadDataTransfer(t), n
                            }(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
                        }
                    }, {
                        key: "setCurrentDragSourceNode",
                        value: function(e) {
                            var t = this;
                            this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e, this.mouseMoveTimeoutTimer = setTimeout((function() {
                                var e;
                                return null === (e = t.rootElement) || void 0 === e ? void 0 : e.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, !0)
                            }), 1e3)
                        }
                    }, {
                        key: "clearCurrentDragSourceNode",
                        value: function() {
                            var e;
                            return !!this.currentDragSourceNode && (this.currentDragSourceNode = null, this.rootElement && (null === (e = this.window) || void 0 === e || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0)), this.mouseMoveTimeoutTimer = null, !0)
                        }
                    }, {
                        key: "handleDragStart",
                        value: function(e, t) {
                            e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t))
                        }
                    }, {
                        key: "handleDragEnter",
                        value: function(e, t) {
                            this.dragEnterTargetIds.unshift(t)
                        }
                    }, {
                        key: "handleDragOver",
                        value: function(e, t) {
                            null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t)
                        }
                    }, {
                        key: "handleDrop",
                        value: function(e, t) {
                            this.dropTargetIds.unshift(t)
                        }
                    }]) && T(t.prototype, n), i && T(t, i), e
                }(),
                j = function(e, t, n) {
                    return new F(e, t, n)
                }
        },
        34566: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return r
                }
            });
            var r = (0, n(67294).createContext)({
                dragDropManager: void 0
            })
        },
        81365: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return tt
                }
            });
            var r = n(85893),
                i = n(67294),
                o = n(28195),
                a = "dnd-core/INIT_COORDS",
                s = "dnd-core/BEGIN_DRAG",
                u = "dnd-core/PUBLISH_DRAG_SOURCE",
                c = "dnd-core/HOVER",
                l = "dnd-core/DROP",
                f = "dnd-core/END_DRAG";

            function d(e, t) {
                return {
                    type: a,
                    payload: {
                        sourceClientOffset: t || null,
                        clientOffset: e || null
                    }
                }
            }

            function p(e) {
                return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t, n) {
                return t.split(".").reduce((function(e, t) {
                    return e && e[t] ? e[t] : n || null
                }), e)
            }

            function v(e, t) {
                return e.filter((function(e) {
                    return e !== t
                }))
            }

            function g(e) {
                return "object" === p(e)
            }

            function m(e, t) {
                var n = new Map,
                    r = function(e) {
                        n.set(e, n.has(e) ? n.get(e) + 1 : 1)
                    };
                e.forEach(r), t.forEach(r);
                var i = [];
                return n.forEach((function(e, t) {
                    1 === e && i.push(t)
                })), i
            }
            var y = {
                type: a,
                payload: {
                    clientOffset: null,
                    sourceClientOffset: null
                }
            };

            function b(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            publishSource: !0
                        },
                        r = n.publishSource,
                        i = void 0 === r || r,
                        o = n.clientOffset,
                        a = n.getSourceClientOffset,
                        u = e.getMonitor(),
                        c = e.getRegistry();
                    e.dispatch(d(o)), w(t, u, c);
                    var l = O(t, u);
                    if (null !== l) {
                        var f = null;
                        if (o) {
                            if (!a) throw new Error("getSourceClientOffset must be defined");
                            x(a), f = a(l)
                        }
                        e.dispatch(d(o, f));
                        var p = c.getSource(l),
                            h = p.beginDrag(u, l);
                        k(h), c.pinSource(l);
                        var v = c.getSourceType(l);
                        return {
                            type: s,
                            payload: {
                                itemType: v,
                                item: h,
                                sourceId: l,
                                clientOffset: o || null,
                                sourceClientOffset: f || null,
                                isSourcePublic: !!i
                            }
                        }
                    }
                    e.dispatch(y)
                }
            }

            function w(e, t, n) {
                (0, o.k)(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach((function(e) {
                    (0, o.k)(n.getSource(e), "Expected sourceIds to be registered.")
                }))
            }

            function x(e) {
                (0, o.k)("function" === typeof e, "When clientOffset is provided, getSourceClientOffset must be a function.")
            }

            function k(e) {
                (0, o.k)(g(e), "Item must be an object.")
            }

            function O(e, t) {
                for (var n = null, r = e.length - 1; r >= 0; r--)
                    if (t.canDragSource(e[r])) {
                        n = e[r];
                        break
                    } return n
            }

            function E(e) {
                return function() {
                    if (e.getMonitor().isDragging()) return {
                        type: u
                    }
                }
            }

            function S(e, t) {
                return null === t ? null === e : Array.isArray(e) ? e.some((function(e) {
                    return e === t
                })) : e === t
            }

            function D(e) {
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.clientOffset;
                    C(t);
                    var i = t.slice(0),
                        o = e.getMonitor(),
                        a = e.getRegistry();
                    P(i, o, a);
                    var s = o.getItemType();
                    return A(i, a, s), T(i, o, a), {
                        type: c,
                        payload: {
                            targetIds: i,
                            clientOffset: r || null
                        }
                    }
                }
            }

            function C(e) {
                (0, o.k)(Array.isArray(e), "Expected targetIds to be an array.")
            }

            function P(e, t, n) {
                (0, o.k)(t.isDragging(), "Cannot call hover while not dragging."), (0, o.k)(!t.didDrop(), "Cannot call hover after drop.");
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    (0, o.k)(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array.");
                    var a = n.getTarget(i);
                    (0, o.k)(a, "Expected targetIds to be registered.")
                }
            }

            function A(e, t, n) {
                for (var r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    S(t.getTargetType(i), n) || e.splice(r, 1)
                }
            }

            function T(e, t, n) {
                e.forEach((function(e) {
                    n.getTarget(e).hover(t, e)
                }))
            }

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        I(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function I(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function _(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.getMonitor(),
                        r = e.getRegistry();
                    M(n);
                    var i = B(n);
                    i.forEach((function(i, o) {
                        var a = L(i, o, r, n),
                            s = {
                                type: l,
                                payload: {
                                    dropResult: j(j({}, t), a)
                                }
                            };
                        e.dispatch(s)
                    }))
                }
            }

            function M(e) {
                (0, o.k)(e.isDragging(), "Cannot call drop while not dragging."), (0, o.k)(!e.didDrop(), "Cannot call drop twice during one drag operation.")
            }

            function L(e, t, n, r) {
                var i = n.getTarget(e),
                    a = i ? i.drop(r, e) : void 0;
                return function(e) {
                    (0, o.k)("undefined" === typeof e || g(e), "Drop result must either be an object or undefined.")
                }(a), "undefined" === typeof a && (a = 0 === t ? {} : r.getDropResult()), a
            }

            function B(e) {
                var t = e.getTargetIds().filter(e.canDropOnTarget, e);
                return t.reverse(), t
            }

            function N(e) {
                return function() {
                    var t = e.getMonitor(),
                        n = e.getRegistry();
                    ! function(e) {
                        (0, o.k)(e.isDragging(), "Cannot call endDrag while not dragging.")
                    }(t);
                    var r = t.getSourceId();
                    null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource());
                    return {
                        type: f
                    }
                }
            }

            function R(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var z = function() {
                function e(t, n) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.isSetUp = !1, this.handleRefCountChange = function() {
                        var e = r.store.getState().refCount > 0;
                        r.backend && (e && !r.isSetUp ? (r.backend.setup(), r.isSetUp = !0) : !e && r.isSetUp && (r.backend.teardown(), r.isSetUp = !1))
                    }, this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange)
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "receiveBackend",
                    value: function(e) {
                        this.backend = e
                    }
                }, {
                    key: "getMonitor",
                    value: function() {
                        return this.monitor
                    }
                }, {
                    key: "getBackend",
                    value: function() {
                        return this.backend
                    }
                }, {
                    key: "getRegistry",
                    value: function() {
                        return this.monitor.registry
                    }
                }, {
                    key: "getActions",
                    value: function() {
                        var e = this,
                            t = this.store.dispatch,
                            n = function(e) {
                                return {
                                    beginDrag: b(e),
                                    publishDragSource: E(e),
                                    hover: D(e),
                                    drop: _(e),
                                    endDrag: N(e)
                                }
                            }(this);
                        return Object.keys(n).reduce((function(r, i) {
                            var o, a = n[i];
                            return r[i] = (o = a, function() {
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                var a = o.apply(e, r);
                                "undefined" !== typeof a && t(a)
                            }), r
                        }), {})
                    }
                }, {
                    key: "dispatch",
                    value: function(e) {
                        this.store.dispatch(e)
                    }
                }]) && R(t.prototype, n), r && R(t, r), e
            }();

            function H(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var W = "function" === typeof Symbol && Symbol.observable || "@@observable",
                U = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                q = {
                    INIT: "@@redux/INIT" + U(),
                    REPLACE: "@@redux/REPLACE" + U(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + U()
                    }
                };

            function V(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function $(e, t, n) {
                var r;
                if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error(H(0));
                if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error(H(1));
                    return n($)(e, t)
                }
                if ("function" !== typeof e) throw new Error(H(2));
                var i = e,
                    o = t,
                    a = [],
                    s = a,
                    u = !1;

                function c() {
                    s === a && (s = a.slice())
                }

                function l() {
                    if (u) throw new Error(H(3));
                    return o
                }

                function f(e) {
                    if ("function" !== typeof e) throw new Error(H(4));
                    if (u) throw new Error(H(5));
                    var t = !0;
                    return c(), s.push(e),
                        function() {
                            if (t) {
                                if (u) throw new Error(H(6));
                                t = !1, c();
                                var n = s.indexOf(e);
                                s.splice(n, 1), a = null
                            }
                        }
                }

                function d(e) {
                    if (!V(e)) throw new Error(H(7));
                    if ("undefined" === typeof e.type) throw new Error(H(8));
                    if (u) throw new Error(H(9));
                    try {
                        u = !0, o = i(o, e)
                    } finally {
                        u = !1
                    }
                    for (var t = a = s, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function p(e) {
                    if ("function" !== typeof e) throw new Error(H(10));
                    i = e, d({
                        type: q.REPLACE
                    })
                }

                function h() {
                    var e, t = f;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new Error(H(11));

                            function n() {
                                e.next && e.next(l())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[W] = function() {
                        return this
                    }, e
                }
                return d({
                    type: q.INIT
                }), (r = {
                    dispatch: d,
                    subscribe: f,
                    getState: l,
                    replaceReducer: p
                })[W] = h, r
            }
            var Y = function(e, t) {
                return e === t
            };

            function K(e, t) {
                return !e && !t || !(!e || !t) && (e.x === t.x && e.y === t.y)
            }

            function J(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y;
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; ++r)
                    if (!n(e[r], t[r])) return !1;
                return !0
            }

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        X(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function X(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var Q = {
                initialSourceClientOffset: null,
                initialClientOffset: null,
                clientOffset: null
            };

            function ee() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.payload;
                switch (t.type) {
                    case a:
                    case s:
                        return {
                            initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
                        };
                    case c:
                        return K(e.clientOffset, n.clientOffset) ? e : Z(Z({}, e), {}, {
                            clientOffset: n.clientOffset
                        });
                    case f:
                    case l:
                        return Q;
                    default:
                        return e
                }
            }
            var te = "dnd-core/ADD_SOURCE",
                ne = "dnd-core/ADD_TARGET",
                re = "dnd-core/REMOVE_SOURCE",
                ie = "dnd-core/REMOVE_TARGET";

            function oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(n), !0).forEach((function(t) {
                        se(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function se(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var ue = {
                itemType: null,
                item: null,
                sourceId: null,
                targetIds: [],
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null
            };

            function ce() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.payload;
                switch (t.type) {
                    case s:
                        return ae(ae({}, e), {}, {
                            itemType: n.itemType,
                            item: n.item,
                            sourceId: n.sourceId,
                            isSourcePublic: n.isSourcePublic,
                            dropResult: null,
                            didDrop: !1
                        });
                    case u:
                        return ae(ae({}, e), {}, {
                            isSourcePublic: !0
                        });
                    case c:
                        return ae(ae({}, e), {}, {
                            targetIds: n.targetIds
                        });
                    case ie:
                        return -1 === e.targetIds.indexOf(n.targetId) ? e : ae(ae({}, e), {}, {
                            targetIds: v(e.targetIds, n.targetId)
                        });
                    case l:
                        return ae(ae({}, e), {}, {
                            dropResult: n.dropResult,
                            didDrop: !0,
                            targetIds: []
                        });
                    case f:
                        return ae(ae({}, e), {}, {
                            itemType: null,
                            item: null,
                            sourceId: null,
                            dropResult: null,
                            didDrop: !1,
                            isSourcePublic: null,
                            targetIds: []
                        });
                    default:
                        return e
                }
            }

            function le() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case te:
                    case ne:
                        return e + 1;
                    case re:
                    case ie:
                        return e - 1;
                    default:
                        return e
                }
            }
            var fe = [],
                de = [];

            function pe(e, t) {
                return e !== fe && (e === de || "undefined" === typeof t || (n = e, t.filter((function(e) {
                    return n.indexOf(e) > -1
                }))).length > 0);
                var n
            }

            function he() {
                var e = arguments.length > 1 ? arguments[1] : void 0;
                switch (e.type) {
                    case c:
                        break;
                    case te:
                    case ne:
                    case ie:
                    case re:
                        return fe;
                    case s:
                    case u:
                    case f:
                    case l:
                    default:
                        return de
                }
                var t = e.payload,
                    n = t.targetIds,
                    r = void 0 === n ? [] : n,
                    i = t.prevTargetIds,
                    o = void 0 === i ? [] : i,
                    a = m(r, o),
                    d = a.length > 0 || !J(r, o);
                if (!d) return fe;
                var p = o[o.length - 1],
                    h = r[r.length - 1];
                return p !== h && (p && a.push(p), h && a.push(h)), a
            }

            function ve() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e + 1
            }

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        ye(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ye(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function be() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return {
                    dirtyHandlerIds: he(e.dirtyHandlerIds, {
                        type: t.type,
                        payload: me(me({}, t.payload), {}, {
                            prevTargetIds: h(e, "dragOperation.targetIds", [])
                        })
                    }),
                    dragOffset: ee(e.dragOffset, t),
                    refCount: le(e.refCount, t),
                    dragOperation: ce(e.dragOperation, t),
                    stateId: ve(e.stateId)
                }
            }

            function we(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function xe(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            fe.__IS_NONE__ = !0, de.__IS_ALL__ = !0;
            var ke, Oe = function() {
                    function e(t, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.store = t, this.registry = n
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "subscribeToStateChange",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    handlerIds: void 0
                                },
                                r = n.handlerIds;
                            (0, o.k)("function" === typeof e, "listener must be a function."), (0, o.k)("undefined" === typeof r || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
                            var i = this.store.getState().stateId,
                                a = function() {
                                    var n = t.store.getState(),
                                        o = n.stateId;
                                    try {
                                        o === i || o === i + 1 && !pe(n.dirtyHandlerIds, r) || e()
                                    } finally {
                                        i = o
                                    }
                                };
                            return this.store.subscribe(a)
                        }
                    }, {
                        key: "subscribeToOffsetChange",
                        value: function(e) {
                            var t = this;
                            (0, o.k)("function" === typeof e, "listener must be a function.");
                            var n = this.store.getState().dragOffset;
                            return this.store.subscribe((function() {
                                var r = t.store.getState().dragOffset;
                                r !== n && (n = r, e())
                            }))
                        }
                    }, {
                        key: "canDragSource",
                        value: function(e) {
                            if (!e) return !1;
                            var t = this.registry.getSource(e);
                            return (0, o.k)(t, "Expected to find a valid source. sourceId=".concat(e)), !this.isDragging() && t.canDrag(this, e)
                        }
                    }, {
                        key: "canDropOnTarget",
                        value: function(e) {
                            if (!e) return !1;
                            var t = this.registry.getTarget(e);
                            return (0, o.k)(t, "Expected to find a valid target. targetId=".concat(e)), !(!this.isDragging() || this.didDrop()) && S(this.registry.getTargetType(e), this.getItemType()) && t.canDrop(this, e)
                        }
                    }, {
                        key: "isDragging",
                        value: function() {
                            return Boolean(this.getItemType())
                        }
                    }, {
                        key: "isDraggingSource",
                        value: function(e) {
                            if (!e) return !1;
                            var t = this.registry.getSource(e, !0);
                            return (0, o.k)(t, "Expected to find a valid source. sourceId=".concat(e)), !(!this.isDragging() || !this.isSourcePublic()) && this.registry.getSourceType(e) === this.getItemType() && t.isDragging(this, e)
                        }
                    }, {
                        key: "isOverTarget",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                shallow: !1
                            };
                            if (!e) return !1;
                            var n = t.shallow;
                            if (!this.isDragging()) return !1;
                            var r = this.registry.getTargetType(e),
                                i = this.getItemType();
                            if (i && !S(r, i)) return !1;
                            var o = this.getTargetIds();
                            if (!o.length) return !1;
                            var a = o.indexOf(e);
                            return n ? a === o.length - 1 : a > -1
                        }
                    }, {
                        key: "getItemType",
                        value: function() {
                            return this.store.getState().dragOperation.itemType
                        }
                    }, {
                        key: "getItem",
                        value: function() {
                            return this.store.getState().dragOperation.item
                        }
                    }, {
                        key: "getSourceId",
                        value: function() {
                            return this.store.getState().dragOperation.sourceId
                        }
                    }, {
                        key: "getTargetIds",
                        value: function() {
                            return this.store.getState().dragOperation.targetIds
                        }
                    }, {
                        key: "getDropResult",
                        value: function() {
                            return this.store.getState().dragOperation.dropResult
                        }
                    }, {
                        key: "didDrop",
                        value: function() {
                            return this.store.getState().dragOperation.didDrop
                        }
                    }, {
                        key: "isSourcePublic",
                        value: function() {
                            return Boolean(this.store.getState().dragOperation.isSourcePublic)
                        }
                    }, {
                        key: "getInitialClientOffset",
                        value: function() {
                            return this.store.getState().dragOffset.initialClientOffset
                        }
                    }, {
                        key: "getInitialSourceClientOffset",
                        value: function() {
                            return this.store.getState().dragOffset.initialSourceClientOffset
                        }
                    }, {
                        key: "getClientOffset",
                        value: function() {
                            return this.store.getState().dragOffset.clientOffset
                        }
                    }, {
                        key: "getSourceClientOffset",
                        value: function() {
                            return function(e) {
                                var t, n, r = e.clientOffset,
                                    i = e.initialClientOffset,
                                    o = e.initialSourceClientOffset;
                                return r && i && o ? we((n = o, {
                                    x: (t = r).x + n.x,
                                    y: t.y + n.y
                                }), i) : null
                            }(this.store.getState().dragOffset)
                        }
                    }, {
                        key: "getDifferenceFromInitialOffset",
                        value: function() {
                            return function(e) {
                                var t = e.clientOffset,
                                    n = e.initialClientOffset;
                                return t && n ? we(t, n) : null
                            }(this.store.getState().dragOffset)
                        }
                    }]) && xe(t.prototype, n), r && xe(t, r), e
                }(),
                Ee = 0;

            function Se(e) {
                return (Se = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function De(e, t) {
                t && Array.isArray(e) ? e.forEach((function(e) {
                    return De(e, !1)
                })) : (0, o.k)("string" === typeof e || "symbol" === Se(e), t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
            }

            function Ce(e) {
                Ae.length || (Pe(), !0), Ae[Ae.length] = e
            }! function(e) {
                e.SOURCE = "SOURCE", e.TARGET = "TARGET"
            }(ke || (ke = {}));
            var Pe, Ae = [],
                Te = 0;

            function Fe() {
                for (; Te < Ae.length;) {
                    var e = Te;
                    if (Te += 1, Ae[e].call(), Te > 1024) {
                        for (var t = 0, n = Ae.length - Te; t < n; t++) Ae[t] = Ae[t + Te];
                        Ae.length -= Te, Te = 0
                    }
                }
                Ae.length = 0, Te = 0, !1
            }
            var je = "undefined" !== typeof n.g ? n.g : self,
                Ie = je.MutationObserver || je.WebKitMutationObserver;

            function _e(e) {
                return function() {
                    var t = setTimeout(r, 0),
                        n = setInterval(r, 50);

                    function r() {
                        clearTimeout(t), clearInterval(n), e()
                    }
                }
            }
            Pe = "function" === typeof Ie ? function(e) {
                var t = 1,
                    n = new Ie(e),
                    r = document.createTextNode("");
                return n.observe(r, {
                        characterData: !0
                    }),
                    function() {
                        t = -t, r.data = t
                    }
            }(Fe) : _e(Fe), Ce.requestFlush = Pe, Ce.makeRequestCallFromTimer = _e;
            var Me = [],
                Le = [],
                Be = Ce.makeRequestCallFromTimer((function() {
                    if (Le.length) throw Le.shift()
                }));

            function Ne(e) {
                var t;
                (t = Me.length ? Me.pop() : new Re).task = e, Ce(t)
            }
            var Re = function() {
                function e() {}
                return e.prototype.call = function() {
                    try {
                        this.task.call()
                    } catch (e) {
                        Ne.onerror ? Ne.onerror(e) : (Le.push(e), Be())
                    } finally {
                        this.task = null, Me[Me.length] = this
                    }
                }, e
            }();

            function ze(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function He(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return We(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function We(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ue(e) {
                var t = (Ee++).toString();
                switch (e) {
                    case ke.SOURCE:
                        return "S".concat(t);
                    case ke.TARGET:
                        return "T".concat(t);
                    default:
                        throw new Error("Unknown Handler Role: ".concat(e))
                }
            }

            function qe(e) {
                switch (e[0]) {
                    case "S":
                        return ke.SOURCE;
                    case "T":
                        return ke.TARGET;
                    default:
                        (0, o.k)(!1, "Cannot parse handler ID: ".concat(e))
                }
            }

            function Ve(e, t) {
                var n = e.entries(),
                    r = !1;
                do {
                    var i = n.next(),
                        o = i.done;
                    if (He(i.value, 2)[1] === t) return !0;
                    r = !!o
                } while (!r);
                return !1
            }
            var $e = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = t
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "addSource",
                    value: function(e, t) {
                        De(e),
                            function(e) {
                                (0, o.k)("function" === typeof e.canDrag, "Expected canDrag to be a function."), (0, o.k)("function" === typeof e.beginDrag, "Expected beginDrag to be a function."), (0, o.k)("function" === typeof e.endDrag, "Expected endDrag to be a function.")
                            }(t);
                        var n = this.addHandler(ke.SOURCE, e, t);
                        return this.store.dispatch(function(e) {
                            return {
                                type: te,
                                payload: {
                                    sourceId: e
                                }
                            }
                        }(n)), n
                    }
                }, {
                    key: "addTarget",
                    value: function(e, t) {
                        De(e, !0),
                            function(e) {
                                (0, o.k)("function" === typeof e.canDrop, "Expected canDrop to be a function."), (0, o.k)("function" === typeof e.hover, "Expected hover to be a function."), (0, o.k)("function" === typeof e.drop, "Expected beginDrag to be a function.")
                            }(t);
                        var n = this.addHandler(ke.TARGET, e, t);
                        return this.store.dispatch(function(e) {
                            return {
                                type: ne,
                                payload: {
                                    targetId: e
                                }
                            }
                        }(n)), n
                    }
                }, {
                    key: "containsHandler",
                    value: function(e) {
                        return Ve(this.dragSources, e) || Ve(this.dropTargets, e)
                    }
                }, {
                    key: "getSource",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        (0, o.k)(this.isSourceId(e), "Expected a valid source ID.");
                        var n = t && e === this.pinnedSourceId,
                            r = n ? this.pinnedSource : this.dragSources.get(e);
                        return r
                    }
                }, {
                    key: "getTarget",
                    value: function(e) {
                        return (0, o.k)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e)
                    }
                }, {
                    key: "getSourceType",
                    value: function(e) {
                        return (0, o.k)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e)
                    }
                }, {
                    key: "getTargetType",
                    value: function(e) {
                        return (0, o.k)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e)
                    }
                }, {
                    key: "isSourceId",
                    value: function(e) {
                        return qe(e) === ke.SOURCE
                    }
                }, {
                    key: "isTargetId",
                    value: function(e) {
                        return qe(e) === ke.TARGET
                    }
                }, {
                    key: "removeSource",
                    value: function(e) {
                        var t = this;
                        (0, o.k)(this.getSource(e), "Expected an existing source."), this.store.dispatch(function(e) {
                            return {
                                type: re,
                                payload: {
                                    sourceId: e
                                }
                            }
                        }(e)), Ne((function() {
                            t.dragSources.delete(e), t.types.delete(e)
                        }))
                    }
                }, {
                    key: "removeTarget",
                    value: function(e) {
                        (0, o.k)(this.getTarget(e), "Expected an existing target."), this.store.dispatch(function(e) {
                            return {
                                type: ie,
                                payload: {
                                    targetId: e
                                }
                            }
                        }(e)), this.dropTargets.delete(e), this.types.delete(e)
                    }
                }, {
                    key: "pinSource",
                    value: function(e) {
                        var t = this.getSource(e);
                        (0, o.k)(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t
                    }
                }, {
                    key: "unpinSource",
                    value: function() {
                        (0, o.k)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
                    }
                }, {
                    key: "addHandler",
                    value: function(e, t, n) {
                        var r = Ue(e);
                        return this.types.set(r, t), e === ke.SOURCE ? this.dragSources.set(r, n) : e === ke.TARGET && this.dropTargets.set(r, n), r
                    }
                }]) && ze(t.prototype, n), r && ze(t, r), e
            }();

            function Ye(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = Ke(r),
                    o = new Oe(i, new $e(i)),
                    a = new z(i, o),
                    s = e(a, t, n);
                return a.receiveBackend(s), a
            }

            function Ke(e) {
                var t = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
                return $(be, e && t && t({
                    name: "dnd-core",
                    instanceId: "dnd-core"
                }))
            }
            var Je = n(34566);

            function Ge(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Ze(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xe(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var Qe = 0,
                et = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
                tt = (0, i.memo)((function(e) {
                    var t = e.children,
                        n = Ge(function(e) {
                            if ("manager" in e) {
                                return [{
                                    dragDropManager: e.manager
                                }, !1]
                            }
                            var t = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt(),
                                        n = arguments.length > 2 ? arguments[2] : void 0,
                                        r = arguments.length > 3 ? arguments[3] : void 0,
                                        i = t;
                                    i[et] || (i[et] = {
                                        dragDropManager: Ye(e, t, n, r)
                                    });
                                    return i[et]
                                }(e.backend, e.context, e.options, e.debugMode),
                                n = !e.context;
                            return [t, n]
                        }(Xe(e, ["children"])), 2),
                        o = n[0],
                        a = n[1];
                    return (0, i.useEffect)((function() {
                        if (a) {
                            var e = nt();
                            return ++Qe,
                                function() {
                                    0 === --Qe && (e[et] = null)
                                }
                        }
                    }), []), (0, r.jsx)(Je.L.Provider, Object.assign({
                        value: o
                    }, {
                        children: t
                    }), void 0)
                }));

            function nt() {
                return "undefined" !== typeof n.g ? n.g : window
            }
        },
        33234: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return s
                }
            });
            var r = n(14141),
                i = n(12744);

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t, n) {
                return function(e, t, n) {
                    var a = o((0, i.r)(e, t, n), 2),
                        s = a[0],
                        u = a[1];
                    return (0, r.L)((function() {
                        var t = e.getHandlerId();
                        if (null != t) return e.subscribeToStateChange(u, {
                            handlerIds: [t]
                        })
                    }), [e, u]), s
                }(t, e || function() {
                    return {}
                }, (function() {
                    return n.reconnect()
                }))
            }
        },
        12744: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return u
                }
            });
            var r = n(15047),
                i = n(67294),
                o = n(14141);

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t, n) {
                var s = a((0, i.useState)((function() {
                        return t(e)
                    })), 2),
                    u = s[0],
                    c = s[1],
                    l = (0, i.useCallback)((function() {
                        var i = t(e);
                        (0, r.w)(u, i) || (c(i), n && n())
                    }), [u, e, n]);
                return (0, o.L)(l, []), [u, l]
            }
        },
        91474: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return C
                }
            });
            var r = n(28195),
                i = n(5934),
                o = n(14141),
                a = n(67294);

            function s(e) {
                return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var c = function() {
                function e(t, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.spec = t, this.monitor = n, this.connector = r
                }
                var t, n, i;
                return t = e, (n = [{
                    key: "beginDrag",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor,
                            n = e.begin,
                            i = e.item;
                        if (n) {
                            var o, a = n(t);
                            return (0, r.k)(null == a || "object" === s(a), "dragSpec.begin() must either return an object, undefined, or null"), null !== (o = null !== a && void 0 !== a ? a : i) && void 0 !== o ? o : {}
                        }
                        return null !== i && void 0 !== i ? i : {}
                    }
                }, {
                    key: "canDrag",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor;
                        return "boolean" === typeof e.canDrag ? e.canDrag : "function" !== typeof e.canDrag || e.canDrag(t)
                    }
                }, {
                    key: "isDragging",
                    value: function(e, t) {
                        var n = this.spec,
                            r = this.monitor,
                            i = n.isDragging;
                        return i ? i(r) : t === e.getSourceId()
                    }
                }, {
                    key: "endDrag",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor,
                            n = this.connector,
                            r = e.end;
                        r && r(t.getItem(), t), n.reconnect()
                    }
                }]) && u(t.prototype, n), i && u(t, i), e
            }();
            var l = n(40917);

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n) {
                var r = (0, l.N)(),
                    s = function(e, t, n) {
                        var r = (0, a.useMemo)((function() {
                            return new c(e, t, n)
                        }), [t, n]);
                        return (0, a.useEffect)((function() {
                            r.spec = e
                        }), [e]), r
                    }(e, t, n),
                    u = e.item.type;
                (0, o.L)((function() {
                    var e = f((0, i.w)(u, s, r), 2),
                        o = e[0],
                        a = e[1];
                    return t.receiveHandlerId(o), n.receiveHandlerId(o), a
                }), [r, t, n, s, u])
            }
            var h = n(67617);

            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var g = !1,
                m = !1,
                y = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.sourceId = null, this.internalMonitor = t.getMonitor()
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "receiveHandlerId",
                        value: function(e) {
                            this.sourceId = e
                        }
                    }, {
                        key: "getHandlerId",
                        value: function() {
                            return this.sourceId
                        }
                    }, {
                        key: "canDrag",
                        value: function() {
                            (0, r.k)(!g, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                            try {
                                return g = !0, this.internalMonitor.canDragSource(this.sourceId)
                            } finally {
                                g = !1
                            }
                        }
                    }, {
                        key: "isDragging",
                        value: function() {
                            if (!this.sourceId) return !1;
                            (0, r.k)(!m, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
                            try {
                                return m = !0, this.internalMonitor.isDraggingSource(this.sourceId)
                            } finally {
                                m = !1
                            }
                        }
                    }, {
                        key: "subscribeToStateChange",
                        value: function(e, t) {
                            return this.internalMonitor.subscribeToStateChange(e, t)
                        }
                    }, {
                        key: "isDraggingSource",
                        value: function(e) {
                            return this.internalMonitor.isDraggingSource(e)
                        }
                    }, {
                        key: "isOverTarget",
                        value: function(e, t) {
                            return this.internalMonitor.isOverTarget(e, t)
                        }
                    }, {
                        key: "getTargetIds",
                        value: function() {
                            return this.internalMonitor.getTargetIds()
                        }
                    }, {
                        key: "isSourcePublic",
                        value: function() {
                            return this.internalMonitor.isSourcePublic()
                        }
                    }, {
                        key: "getSourceId",
                        value: function() {
                            return this.internalMonitor.getSourceId()
                        }
                    }, {
                        key: "subscribeToOffsetChange",
                        value: function(e) {
                            return this.internalMonitor.subscribeToOffsetChange(e)
                        }
                    }, {
                        key: "canDragSource",
                        value: function(e) {
                            return this.internalMonitor.canDragSource(e)
                        }
                    }, {
                        key: "canDropOnTarget",
                        value: function(e) {
                            return this.internalMonitor.canDropOnTarget(e)
                        }
                    }, {
                        key: "getItemType",
                        value: function() {
                            return this.internalMonitor.getItemType()
                        }
                    }, {
                        key: "getItem",
                        value: function() {
                            return this.internalMonitor.getItem()
                        }
                    }, {
                        key: "getDropResult",
                        value: function() {
                            return this.internalMonitor.getDropResult()
                        }
                    }, {
                        key: "didDrop",
                        value: function() {
                            return this.internalMonitor.didDrop()
                        }
                    }, {
                        key: "getInitialClientOffset",
                        value: function() {
                            return this.internalMonitor.getInitialClientOffset()
                        }
                    }, {
                        key: "getInitialSourceClientOffset",
                        value: function() {
                            return this.internalMonitor.getInitialSourceClientOffset()
                        }
                    }, {
                        key: "getSourceClientOffset",
                        value: function() {
                            return this.internalMonitor.getSourceClientOffset()
                        }
                    }, {
                        key: "getClientOffset",
                        value: function() {
                            return this.internalMonitor.getClientOffset()
                        }
                    }, {
                        key: "getDifferenceFromInitialOffset",
                        value: function() {
                            return this.internalMonitor.getDifferenceFromInitialOffset()
                        }
                    }]) && v(t.prototype, n), i && v(t, i), e
                }();
            var b = n(40898),
                w = n(71618),
                x = n(15047);

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var O = function() {
                function e(t) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.hooks = (0, b.p)({
                        dragSource: function(e, t) {
                            n.clearDragSource(), n.dragSourceOptions = t || null, (0, w.d)(e) ? n.dragSourceRef = e : n.dragSourceNode = e, n.reconnectDragSource()
                        },
                        dragPreview: function(e, t) {
                            n.clearDragPreview(), n.dragPreviewOptions = t || null, (0, w.d)(e) ? n.dragPreviewRef = e : n.dragPreviewNode = e, n.reconnectDragPreview()
                        }
                    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "receiveHandlerId",
                    value: function(e) {
                        this.handlerId !== e && (this.handlerId = e, this.reconnect())
                    }
                }, {
                    key: "connectTarget",
                    get: function() {
                        return this.dragSource
                    }
                }, {
                    key: "dragSourceOptions",
                    get: function() {
                        return this.dragSourceOptionsInternal
                    },
                    set: function(e) {
                        this.dragSourceOptionsInternal = e
                    }
                }, {
                    key: "dragPreviewOptions",
                    get: function() {
                        return this.dragPreviewOptionsInternal
                    },
                    set: function(e) {
                        this.dragPreviewOptionsInternal = e
                    }
                }, {
                    key: "reconnect",
                    value: function() {
                        this.reconnectDragSource(), this.reconnectDragPreview()
                    }
                }, {
                    key: "reconnectDragSource",
                    value: function() {
                        var e = this.dragSource,
                            t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
                        t && this.disconnectDragSource(), this.handlerId && (e ? t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)) : this.lastConnectedDragSource = e)
                    }
                }, {
                    key: "reconnectDragPreview",
                    value: function() {
                        var e = this.dragPreview,
                            t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
                        t && this.disconnectDragPreview(), this.handlerId && (e ? t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions)) : this.lastConnectedDragPreview = e)
                    }
                }, {
                    key: "didHandlerIdChange",
                    value: function() {
                        return this.lastConnectedHandlerId !== this.handlerId
                    }
                }, {
                    key: "didConnectedDragSourceChange",
                    value: function() {
                        return this.lastConnectedDragSource !== this.dragSource
                    }
                }, {
                    key: "didConnectedDragPreviewChange",
                    value: function() {
                        return this.lastConnectedDragPreview !== this.dragPreview
                    }
                }, {
                    key: "didDragSourceOptionsChange",
                    value: function() {
                        return !(0, x.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
                    }
                }, {
                    key: "didDragPreviewOptionsChange",
                    value: function() {
                        return !(0, x.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
                    }
                }, {
                    key: "disconnectDragSource",
                    value: function() {
                        this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
                    }
                }, {
                    key: "disconnectDragPreview",
                    value: function() {
                        this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
                    }
                }, {
                    key: "dragSource",
                    get: function() {
                        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
                    }
                }, {
                    key: "dragPreview",
                    get: function() {
                        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
                    }
                }, {
                    key: "clearDragSource",
                    value: function() {
                        this.dragSourceNode = null, this.dragSourceRef = null
                    }
                }, {
                    key: "clearDragPreview",
                    value: function() {
                        this.dragPreviewNode = null, this.dragPreviewRef = null
                    }
                }]) && k(t.prototype, n), r && k(t, r), e
            }();
            var E = n(33234);

            function S(e) {
                return (0, a.useMemo)((function() {
                    return e.hooks.dragSource()
                }), [e])
            }

            function D(e) {
                return (0, a.useMemo)((function() {
                    return e.hooks.dragPreview()
                }), [e])
            }

            function C(e, t) {
                var n = (0, h.w)(e, t);
                (0, r.k)(null != n.item, "item must be defined"), (0, r.k)(null != n.item.type, "item type must be defined");
                var i = function() {
                        var e = (0, l.N)();
                        return (0, a.useMemo)((function() {
                            return new y(e)
                        }), [e])
                    }(),
                    s = function(e, t) {
                        var n = (0, l.N)(),
                            r = (0, a.useMemo)((function() {
                                return new O(n.getBackend())
                            }), [n]);
                        return (0, o.L)((function() {
                            r.dragSourceOptions = e || null, r.reconnect()
                        }), [r, e]), (0, o.L)((function() {
                            r.dragPreviewOptions = t || null, r.reconnect()
                        }), [r, t]), r
                    }(n.options, n.previewOptions);
                return p(n, i, s), [(0, E.J)(n.collect, i, s), S(s), D(s)]
            }
        },
        40917: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return a
                }
            });
            var r = n(67294),
                i = n(28195),
                o = n(34566);

            function a() {
                var e = (0, r.useContext)(o.L).dragDropManager;
                return (0, i.k)(null != e, "Expected drag drop context"), e
            }
        },
        59240: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return D
                }
            });
            var r = n(28195),
                i = n(5934),
                o = n(40917),
                a = n(14141),
                s = n(67294);

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var c = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.spec = t, this.monitor = n
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "canDrop",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor;
                        return !e.canDrop || e.canDrop(t.getItem(), t)
                    }
                }, {
                    key: "hover",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor;
                        e.hover && e.hover(t.getItem(), t)
                    }
                }, {
                    key: "drop",
                    value: function() {
                        var e = this.spec,
                            t = this.monitor;
                        if (e.drop) return e.drop(t.getItem(), t)
                    }
                }]) && u(t.prototype, n), r && u(t, r), e
            }();

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || d(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || d(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                if (e) {
                    if ("string" === typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n) {
                var r = (0, o.N)(),
                    u = function(e, t) {
                        var n = (0, s.useMemo)((function() {
                            return new c(e, t)
                        }), [t]);
                        return (0, s.useEffect)((function() {
                            n.spec = e
                        }), [e]), n
                    }(e, t),
                    d = function(e) {
                        var t = e.accept;
                        return (0, s.useMemo)((function() {
                            return Array.isArray(t) ? t : [t]
                        }), [t])
                    }(e);
                (0, a.L)((function() {
                    var e = f((0, i.n)(d, u, r), 2),
                        o = e[0],
                        a = e[1];
                    return t.receiveHandlerId(o), n.receiveHandlerId(o), a
                }), [r, t, u, n].concat(l(d)))
            }
            var v = n(67617);

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var m = !1,
                y = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.targetId = null, this.internalMonitor = t.getMonitor()
                    }
                    var t, n, i;
                    return t = e, (n = [{
                        key: "receiveHandlerId",
                        value: function(e) {
                            this.targetId = e
                        }
                    }, {
                        key: "getHandlerId",
                        value: function() {
                            return this.targetId
                        }
                    }, {
                        key: "subscribeToStateChange",
                        value: function(e, t) {
                            return this.internalMonitor.subscribeToStateChange(e, t)
                        }
                    }, {
                        key: "canDrop",
                        value: function() {
                            if (!this.targetId) return !1;
                            (0, r.k)(!m, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
                            try {
                                return m = !0, this.internalMonitor.canDropOnTarget(this.targetId)
                            } finally {
                                m = !1
                            }
                        }
                    }, {
                        key: "isOver",
                        value: function(e) {
                            return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
                        }
                    }, {
                        key: "getItemType",
                        value: function() {
                            return this.internalMonitor.getItemType()
                        }
                    }, {
                        key: "getItem",
                        value: function() {
                            return this.internalMonitor.getItem()
                        }
                    }, {
                        key: "getDropResult",
                        value: function() {
                            return this.internalMonitor.getDropResult()
                        }
                    }, {
                        key: "didDrop",
                        value: function() {
                            return this.internalMonitor.didDrop()
                        }
                    }, {
                        key: "getInitialClientOffset",
                        value: function() {
                            return this.internalMonitor.getInitialClientOffset()
                        }
                    }, {
                        key: "getInitialSourceClientOffset",
                        value: function() {
                            return this.internalMonitor.getInitialSourceClientOffset()
                        }
                    }, {
                        key: "getSourceClientOffset",
                        value: function() {
                            return this.internalMonitor.getSourceClientOffset()
                        }
                    }, {
                        key: "getClientOffset",
                        value: function() {
                            return this.internalMonitor.getClientOffset()
                        }
                    }, {
                        key: "getDifferenceFromInitialOffset",
                        value: function() {
                            return this.internalMonitor.getDifferenceFromInitialOffset()
                        }
                    }]) && g(t.prototype, n), i && g(t, i), e
                }();
            var b = n(15047),
                w = n(40898),
                x = n(71618);

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var O = function() {
                function e(t) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.hooks = (0, w.p)({
                        dropTarget: function(e, t) {
                            n.clearDropTarget(), n.dropTargetOptions = t, (0, x.d)(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect()
                        }
                    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "connectTarget",
                    get: function() {
                        return this.dropTarget
                    }
                }, {
                    key: "reconnect",
                    value: function() {
                        var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                        e && this.disconnectDropTarget();
                        var t = this.dropTarget;
                        this.handlerId && (t ? e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = t, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, t, this.dropTargetOptions)) : this.lastConnectedDropTarget = t)
                    }
                }, {
                    key: "receiveHandlerId",
                    value: function(e) {
                        e !== this.handlerId && (this.handlerId = e, this.reconnect())
                    }
                }, {
                    key: "dropTargetOptions",
                    get: function() {
                        return this.dropTargetOptionsInternal
                    },
                    set: function(e) {
                        this.dropTargetOptionsInternal = e
                    }
                }, {
                    key: "didHandlerIdChange",
                    value: function() {
                        return this.lastConnectedHandlerId !== this.handlerId
                    }
                }, {
                    key: "didDropTargetChange",
                    value: function() {
                        return this.lastConnectedDropTarget !== this.dropTarget
                    }
                }, {
                    key: "didOptionsChange",
                    value: function() {
                        return !(0, b.w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
                    }
                }, {
                    key: "disconnectDropTarget",
                    value: function() {
                        this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
                    }
                }, {
                    key: "dropTarget",
                    get: function() {
                        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
                    }
                }, {
                    key: "clearDropTarget",
                    value: function() {
                        this.dropTargetRef = null, this.dropTargetNode = null
                    }
                }]) && k(t.prototype, n), r && k(t, r), e
            }();
            var E = n(33234);

            function S(e) {
                return (0, s.useMemo)((function() {
                    return e.hooks.dropTarget()
                }), [e])
            }

            function D(e, t) {
                var n = (0, v.w)(e, t);
                (0, r.k)(null != n.accept, "accept must be defined");
                var i = function() {
                        var e = (0, o.N)();
                        return (0, s.useMemo)((function() {
                            return new y(e)
                        }), [e])
                    }(),
                    u = function(e) {
                        var t = (0, o.N)(),
                            n = (0, s.useMemo)((function() {
                                return new O(t.getBackend())
                            }), [t]);
                        return (0, a.L)((function() {
                            n.dropTargetOptions = e || null, n.reconnect()
                        }), [e]), n
                    }(n.options);
                return h(n, i, u), [(0, E.J)(n.collect, i, u), S(u)]
            }
        },
        14141: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(67294),
                i = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect
        },
        67617: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(67294);

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                var n = i(t || []);
                return null == t && "function" !== typeof e && n.push(e), (0, r.useMemo)((function() {
                    return "function" === typeof e ? e() : e
                }), n)
            }
        },
        71618: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                return null !== e && "object" === r(e) && Object.prototype.hasOwnProperty.call(e, "current")
            }
            n.d(t, {
                d: function() {
                    return i
                }
            })
        },
        5934: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = n.getRegistry(),
                    i = r.addTarget(e, t);
                return [i, function() {
                    return r.removeTarget(i)
                }]
            }

            function i(e, t, n) {
                var r = n.getRegistry(),
                    i = r.addSource(e, t);
                return [i, function() {
                    return r.removeSource(i)
                }]
            }
            n.d(t, {
                n: function() {
                    return r
                },
                w: function() {
                    return i
                }
            })
        },
        40898: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return a
                }
            });
            var r = n(28195),
                i = n(67294);

            function o(e) {
                if ("string" !== typeof e.type) {
                    var t = e.type.displayName || e.type.name || "the component";
                    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
                }
            }

            function a(e) {
                var t = {};
                return Object.keys(e).forEach((function(n) {
                    var r = e[n];
                    if (n.endsWith("Ref")) t[n] = e[n];
                    else {
                        var a = function(e) {
                            return function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                if (!(0, i.isValidElement)(t)) {
                                    var r = t;
                                    return e(r, n), r
                                }
                                var a = t;
                                return o(a), u(a, n ? function(t) {
                                    return e(t, n)
                                } : e)
                            }
                        }(r);
                        t[n] = function() {
                            return a
                        }
                    }
                })), t
            }

            function s(e, t) {
                "function" === typeof e ? e(t) : e.current = t
            }

            function u(e, t) {
                var n = e.ref;
                return (0, r.k)("string" !== typeof n, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? (0, i.cloneElement)(e, {
                    ref: function(e) {
                        s(n, e), s(t, e)
                    }
                }) : (0, i.cloneElement)(e, {
                    ref: t
                })
            }
        },
        12861: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = this;
                this.Parser = function(n) {
                    return r(n, Object.assign({}, t.data("settings"), e, {
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }))
                }
            };
            var r = n(39671)
        },
        5065: function(e, t, n) {
            "use strict";
            n(95573)
        },
        71815: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return k
                }
            });
            var r = n(90430),
                i = n(87410);

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = new WeakMap,
                s = new WeakMap;
            class u {}
            class c extends u {
                constructor() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    super();
                    var {
                        offset: t,
                        path: n
                    } = e;
                    this.offset = t, this.path = n
                }
            }
            class l extends u {
                constructor() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    super();
                    var {
                        offset: t,
                        path: n
                    } = e;
                    this.offset = t, this.path = n
                }
            }
            var f = e => s.get(e);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = new WeakSet,
                v = e => {
                    var t = [],
                        n = e => {
                            if (null != e) {
                                var r = t[t.length - 1];
                                if ("string" === typeof e) {
                                    var o = {
                                        text: e
                                    };
                                    h.add(o), e = o
                                }
                                if (i.xv.isText(e)) {
                                    var f = e;
                                    i.xv.isText(r) && h.has(r) && h.has(f) && i.xv.equals(r, f, {
                                        loose: !0
                                    }) ? r.text += f.text : t.push(f)
                                } else if (i.W_.isElement(e)) t.push(e);
                                else {
                                    if (!(e instanceof u)) throw new Error("Unexpected hyperscript child object: ".concat(e));
                                    var d = t[t.length - 1];
                                    i.xv.isText(d) || (n(""), d = t[t.length - 1]), e instanceof c ? ((e, t) => {
                                        var n = e.text.length;
                                        a.set(e, [n, t])
                                    })(d, e) : e instanceof l && ((e, t) => {
                                        var n = e.text.length;
                                        s.set(e, [n, t])
                                    })(d, e)
                                }
                            }
                        };
                    for (var r of e.flat(1 / 0)) n(r);
                    return t
                };

            function g(e, t, n) {
                return p({}, t, {
                    children: v(n)
                })
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = {
                    anchor: function(e, t, n) {
                        return new c(t)
                    },
                    cursor: function(e, t, n) {
                        return [new c(t), new l(t)]
                    },
                    editor: function(e, t, n) {
                        var r, o = [];
                        for (var s of n) i.e6.isRange(s) ? r = s : o.push(s);
                        var u, c = v(o),
                            l = {},
                            d = (0, i.Jh)();
                        for (var [p, h] of (Object.assign(d, t), d.children = c, i.NB.texts(d))) {
                            var g = (u = p, a.get(u)),
                                m = f(p);
                            if (null != g) {
                                var [y] = g;
                                l.anchor = {
                                    path: h,
                                    offset: y
                                }
                            }
                            if (null != m) {
                                var [b] = m;
                                l.focus = {
                                    path: h,
                                    offset: b
                                }
                            }
                        }
                        if (l.anchor && !l.focus) throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.");
                        if (!l.anchor && l.focus) throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.");
                        return null != r ? d.selection = r : i.e6.isRange(l) && (d.selection = l), d
                    },
                    element: g,
                    focus: function(e, t, n) {
                        return new l(t)
                    },
                    fragment: function(e, t, n) {
                        return v(n)
                    },
                    selection: function(e, t, n) {
                        var r = n.find((e => e instanceof c)),
                            i = n.find((e => e instanceof l));
                        if (!r || null == r.offset || null == r.path) throw new Error("The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.");
                        if (!i || null == i.offset || null == i.path) throw new Error("The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.");
                        return p({
                            anchor: {
                                offset: r.offset,
                                path: r.path
                            },
                            focus: {
                                offset: i.offset,
                                path: i.path
                            }
                        }, t)
                    },
                    text: function(e, t, n) {
                        var r = v(n);
                        if (r.length > 1) throw new Error("The <text> hyperscript tag must only contain a single node's worth of children.");
                        var [o] = r;
                        if (null == o && (o = {
                                text: ""
                            }), !i.xv.isText(o)) throw new Error("\n    The <text> hyperscript tag can only contain text content as children.");
                        return h.delete(o), Object.assign(o, t), o
                    }
                },
                w = e => function(t, n) {
                    for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
                    var s = e[t];
                    if (!s) throw new Error("No hyperscript creator found for tag: <".concat(t, ">"));
                    null == n && (n = {}), (0, r.Z)(n) || (o = [n].concat(o), n = {});
                    var u = s(t, n, o = o.filter((e => Boolean(e))).flat());
                    return u
                },
                x = e => {
                    var t = {},
                        n = function(n) {
                            var r = e[n];
                            if ("object" !== typeof r) throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom element <".concat(n, ">  tag you passed: ").concat(r));
                            t[n] = (e, t, n) => g(0, y({}, r, {}, t), n)
                        };
                    for (var r in e) n(r);
                    return t
                },
                k = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            elements: t = {}
                        } = e,
                        n = x(t),
                        r = y({}, b, {}, n, {}, e.creators),
                        i = w(r);
                    return i
                }()
        },
        78872: function(e, t, n) {
            "use strict";
            n.d(t, {
                CX: function() {
                    return xe
                },
                F3: function() {
                    return N
                },
                mH: function() {
                    return V
                },
                jE: function() {
                    return W
                },
                UE: function() {
                    return z
                },
                GQ: function() {
                    return Y
                },
                vt: function() {
                    return J
                },
                ui: function() {
                    return q
                },
                BU: function() {
                    return G
                }
            });
            var r = n(67294),
                i = n(87410),
                o = n(23493),
                a = n.n(o);

            function s(e) {
                return "object" == typeof e && null != e && 1 === e.nodeType
            }

            function u(e, t) {
                return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
            }

            function c(e, t) {
                if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                    var n = getComputedStyle(e, null);
                    return u(n.overflowY, t) || u(n.overflowX, t) || function(e) {
                        var t = function(e) {
                            if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                            try {
                                return e.ownerDocument.defaultView.frameElement
                            } catch (e) {
                                return null
                            }
                        }(e);
                        return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                    }(e)
                }
                return !1
            }

            function l(e, t, n, r, i, o, a, s) {
                return o < e && a > t || o > e && a < t ? 0 : o <= e && s <= n || a >= t && s >= n ? o - e - r : a > t && s < n || o < e && s > n ? a - t + i : 0
            }

            function f(e, t) {
                var n = window,
                    r = t.scrollMode,
                    i = t.block,
                    o = t.inline,
                    a = t.boundary,
                    u = t.skipOverflowHiddenElements,
                    f = "function" == typeof a ? a : function(e) {
                        return e !== a
                    };
                if (!s(e)) throw new TypeError("Invalid target");
                for (var d = document.scrollingElement || document.documentElement, p = [], h = e; s(h) && f(h);) {
                    if ((h = h.parentElement) === d) {
                        p.push(h);
                        break
                    }
                    null != h && h === document.body && c(h) && !c(document.documentElement) || null != h && c(h, u) && p.push(h)
                }
                for (var v = n.visualViewport ? n.visualViewport.width : innerWidth, g = n.visualViewport ? n.visualViewport.height : innerHeight, m = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), w = b.height, x = b.width, k = b.top, O = b.right, E = b.bottom, S = b.left, D = "start" === i || "nearest" === i ? k : "end" === i ? E : k + w / 2, C = "center" === o ? S + x / 2 : "end" === o ? O : S, P = [], A = 0; A < p.length; A++) {
                    var T = p[A],
                        F = T.getBoundingClientRect(),
                        j = F.height,
                        I = F.width,
                        _ = F.top,
                        M = F.right,
                        L = F.bottom,
                        B = F.left;
                    if ("if-needed" === r && k >= 0 && S >= 0 && E <= g && O <= v && k >= _ && E <= L && S >= B && O <= M) return P;
                    var N = getComputedStyle(T),
                        R = parseInt(N.borderLeftWidth, 10),
                        z = parseInt(N.borderTopWidth, 10),
                        H = parseInt(N.borderRightWidth, 10),
                        W = parseInt(N.borderBottomWidth, 10),
                        U = 0,
                        q = 0,
                        V = "offsetWidth" in T ? T.offsetWidth - T.clientWidth - R - H : 0,
                        $ = "offsetHeight" in T ? T.offsetHeight - T.clientHeight - z - W : 0;
                    if (d === T) U = "start" === i ? D : "end" === i ? D - g : "nearest" === i ? l(y, y + g, g, z, W, y + D, y + D + w, w) : D - g / 2, q = "start" === o ? C : "center" === o ? C - v / 2 : "end" === o ? C - v : l(m, m + v, v, R, H, m + C, m + C + x, x), U = Math.max(0, U + y), q = Math.max(0, q + m);
                    else {
                        U = "start" === i ? D - _ - z : "end" === i ? D - L + W + $ : "nearest" === i ? l(_, L, j, z, W + $, D, D + w, w) : D - (_ + j / 2) + $ / 2, q = "start" === o ? C - B - R : "center" === o ? C - (B + I / 2) + V / 2 : "end" === o ? C - M + H + V : l(B, M, I, R, H + V, C, C + x, x);
                        var Y = T.scrollLeft,
                            K = T.scrollTop;
                        D += K - (U = Math.max(0, Math.min(K + U, T.scrollHeight - j + $))), C += Y - (q = Math.max(0, Math.min(Y + q, T.scrollWidth - I + V)))
                    }
                    P.push({
                        el: T,
                        top: U,
                        left: q
                    })
                }
                return P
            }

            function d(e) {
                return e === Object(e) && 0 !== Object.keys(e).length
            }
            var p = function(e, t) {
                    var n = !e.ownerDocument.documentElement.contains(e);
                    if (d(t) && "function" === typeof t.behavior) return t.behavior(n ? [] : f(e, t));
                    if (!n) {
                        var r = function(e) {
                            return !1 === e ? {
                                block: "end",
                                inline: "nearest"
                            } : d(e) ? e : {
                                block: "start",
                                inline: "nearest"
                            }
                        }(t);
                        return function(e, t) {
                            void 0 === t && (t = "auto");
                            var n = "scrollBehavior" in document.body.style;
                            e.forEach((function(e) {
                                var r = e.el,
                                    i = e.top,
                                    o = e.left;
                                r.scroll && n ? r.scroll({
                                    top: i,
                                    left: o,
                                    behavior: t
                                }) : (r.scrollTop = i, r.scrollLeft = o)
                            }))
                        }(f(e, r), r.behavior)
                    }
                },
                h = n(6907),
                v = n.n(h),
                g = n(73935),
                m = n(59619);

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var w = 0;
            class x {
                constructor() {
                    this.id = "".concat(w++)
                }
            }
            var k = new WeakMap,
                O = new WeakMap,
                E = new WeakMap,
                S = new WeakMap,
                D = new WeakMap,
                C = new WeakMap,
                P = new WeakMap,
                A = new WeakMap,
                T = new WeakMap,
                F = new WeakMap,
                j = Symbol("placeholder"),
                I = e => _(e) && 1 === e.nodeType,
                _ = e => e instanceof Node,
                M = e => _(e) && 3 === e.nodeType,
                L = (e, t, n) => {
                    for (var r, {
                            childNodes: i
                        } = e, o = i[t], a = t, s = !1, u = !1;
                        (_(r = o) && 8 === r.nodeType || I(o) && 0 === o.childNodes.length || I(o) && "false" === o.getAttribute("contenteditable")) && (!s || !u);) a >= i.length ? (s = !0, a = t - 1, n = "backward") : a < 0 ? (u = !0, a = t + 1, n = "forward") : (o = i[a], a += "forward" === n ? 1 : -1);
                    return o
                },
                B = e => {
                    var t = "";
                    if (M(e) && e.nodeValue) return e.nodeValue;
                    if (I(e)) {
                        for (var n of Array.from(e.childNodes)) t += B(n);
                        var r = getComputedStyle(e).getPropertyValue("display");
                        "block" !== r && "list" !== r && "BR" !== e.tagName || (t += "\n")
                    }
                    return t
                },
                N = {
                    findKey(e, t) {
                        var n = P.get(t);
                        return n || (n = new x, P.set(t, n)), n
                    },
                    findPath(e, t) {
                        for (var n = [], r = t;;) {
                            var o = O.get(r);
                            if (null == o) {
                                if (i.ML.isEditor(r)) return n;
                                break
                            }
                            var a = k.get(r);
                            if (null == a) break;
                            n.unshift(a), r = o
                        }
                        throw new Error("Unable to find the path for Slate node: ".concat(JSON.stringify(t)))
                    },
                    isFocused: e => !!T.get(e),
                    isReadOnly: e => !!A.get(e),
                    blur(e) {
                        var t = N.toDOMNode(e, e);
                        T.set(e, !1), window.document.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = N.toDOMNode(e, e);
                        T.set(e, !0), window.document.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, n = window.getSelection();
                        n && n.rangeCount > 0 && n.removeAllRanges(), t && i.YR.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: i = !1
                            } = r,
                            o = N.toDOMNode(e, e);
                        try {
                            n = I(t) ? t : t.parentElement
                        } catch (a) {
                            if (!a.message.includes('Permission denied to access property "nodeType"')) throw a
                        }
                        return !!n && (n.closest("[data-slate-editor]") === o && (!i || n.isContentEditable || !!n.getAttribute("data-slate-zero-width")))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    setFragmentData(e, t) {
                        e.setFragmentData(t)
                    },
                    toDOMNode(e, t) {
                        var n = i.ML.isEditor(t) ? E.get(e) : D.get(N.findKey(e, t));
                        if (!n) throw new Error("Cannot resolve a DOM node from Slate node: ".concat(JSON.stringify(t)));
                        return n
                    },
                    toDOMPoint(e, t) {
                        var n, [r] = i.ML.node(e, t.path),
                            o = N.toDOMNode(e, r);
                        i.ML.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        var a = Array.from(o.querySelectorAll("[data-slate-string], [data-slate-zero-width]")),
                            s = 0;
                        for (var u of a) {
                            var c = u.childNodes[0];
                            if (null != c && null != c.textContent) {
                                var {
                                    length: l
                                } = c.textContent, f = u.getAttribute("data-slate-length"), d = s + (null == f ? l : parseInt(f, 10));
                                if (t.offset <= d) {
                                    n = [c, Math.min(l, Math.max(0, t.offset - s))];
                                    break
                                }
                                s = d
                            }
                        }
                        if (!n) throw new Error("Cannot resolve a DOM point from Slate point: ".concat(JSON.stringify(t)));
                        return n
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: n,
                            focus: r
                        } = t, o = i.e6.isBackward(t), a = N.toDOMPoint(e, n), s = i.e6.isCollapsed(t) ? a : N.toDOMPoint(e, r), u = window.document.createRange(), [c, l] = o ? s : a, [f, d] = o ? a : s, p = !!(I(c) ? c : c.parentElement).getAttribute("data-slate-zero-width"), h = !!(I(f) ? f : f.parentElement).getAttribute("data-slate-zero-width");
                        return u.setStart(c, p ? 1 : l), u.setEnd(f, h ? 1 : d), u
                    },
                    toSlateNode(e, t) {
                        var n = I(t) ? t : t.parentElement;
                        n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
                        var r = n ? S.get(n) : null;
                        if (!r) throw new Error("Cannot resolve a Slate node from DOM node: ".concat(n));
                        return r
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var {
                            clientX: n,
                            clientY: r,
                            target: o
                        } = t;
                        if (null == n || null == r) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var a, s = N.toSlateNode(e, t.target),
                            u = N.findPath(e, s);
                        if (i.ML.isVoid(e, s)) {
                            var c = o.getBoundingClientRect(),
                                l = e.isInline(s) ? n - c.left < c.left + c.width - n : r - c.top < c.top + c.height - r,
                                f = i.ML.point(e, u, {
                                    edge: l ? "start" : "end"
                                }),
                                d = l ? i.ML.before(e, f) : i.ML.after(e, f);
                            if (d) return i.ML.range(e, d)
                        }
                        var {
                            document: p
                        } = window;
                        if (p.caretRangeFromPoint) a = p.caretRangeFromPoint(n, r);
                        else {
                            var h = p.caretPositionFromPoint(n, r);
                            h && ((a = p.createRange()).setStart(h.offsetNode, h.offset), a.setEnd(h.offsetNode, h.offset))
                        }
                        if (!a) throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return N.toSlateRange(e, a)
                    },
                    toSlatePoint(e, t) {
                        var [n, r] = (e => {
                            var [t, n] = e;
                            if (I(t) && t.childNodes.length) {
                                var r = n === t.childNodes.length,
                                    i = r ? "backward" : "forward";
                                for (t = L(t, r ? n - 1 : n, i); I(t) && t.childNodes.length;) {
                                    var o = r ? t.childNodes.length - 1 : 0;
                                    t = L(t, o, i)
                                }
                                n = r && null != t.textContent ? t.textContent.length : 0
                            }
                            return [t, n]
                        })(t), i = n.parentNode, o = null, a = 0;
                        if (i) {
                            var s = i.closest('[data-slate-void="true"]'),
                                u = i.closest("[data-slate-leaf]"),
                                c = null;
                            if (u) {
                                o = u.closest('[data-slate-node="text"]');
                                var l = window.document.createRange();
                                l.setStart(o, 0), l.setEnd(n, r);
                                var f = l.cloneContents();
                                [...f.querySelectorAll("[data-slate-zero-width]"), ...f.querySelectorAll("[contenteditable=false]")].forEach((e => {
                                    e.parentNode.removeChild(e)
                                })), a = f.textContent.length, c = o
                            } else s && (o = (u = s.querySelector("[data-slate-leaf]")).closest('[data-slate-node="text"]'), a = (c = u).textContent.length);
                            c && a === c.textContent.length && i.hasAttribute("data-slate-zero-width") && a--
                        }
                        if (!o) throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
                        var d = N.toSlateNode(e, o);
                        return {
                            path: N.findPath(e, d),
                            offset: a
                        }
                    },
                    toSlateRange(e, t) {
                        var n, r, i, o, a;
                        if ((t instanceof Selection ? t.anchorNode : t.startContainer) && (t instanceof Selection ? (n = t.anchorNode, r = t.anchorOffset, i = t.focusNode, o = t.focusOffset, a = t.isCollapsed) : (n = t.startContainer, r = t.startOffset, i = t.endContainer, o = t.endOffset, a = t.collapsed)), null == n || null == i || null == r || null == o) throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        var s = N.toSlatePoint(e, [n, r]);
                        return {
                            anchor: s,
                            focus: a ? s : N.toSlatePoint(e, [i, o])
                        }
                    }
                },
                R = (0, r.createContext)(!1),
                z = () => (0, r.useContext)(R),
                H = (0, r.createContext)(null),
                W = () => {
                    var e = (0, r.useContext)(H);
                    if (!e) throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
                    return e
                },
                U = (0, r.createContext)(null),
                q = () => {
                    var e = (0, r.useContext)(U);
                    if (!e) throw new Error("The `useSlate` hook must be used inside the <SlateProvider> component's context.");
                    var [t] = e;
                    return t
                },
                V = e => {
                    var {
                        editor: t,
                        children: n,
                        onChange: i,
                        value: o
                    } = e, a = b(e, ["editor", "children", "onChange", "value"]), [s, u] = (0, r.useState)(0), c = (0, r.useMemo)((() => (t.children = o, Object.assign(t, a), [t])), [s, o, ...Object.values(a)]), l = (0, r.useCallback)((() => {
                        i(t.children), u(s + 1)
                    }), [s, i]);
                    return F.set(t, l), (0, r.useEffect)((() => () => {
                        F.set(t, (() => {}))
                    }), []), r.createElement(U.Provider, {
                        value: c
                    }, r.createElement(H.Provider, {
                        value: t
                    }, r.createElement(R.Provider, {
                        value: N.isFocused(t)
                    }, n)))
                },
                $ = (0, r.createContext)(!1),
                Y = () => (0, r.useContext)($),
                K = (0, r.createContext)(!1),
                J = () => (0, r.useContext)(K),
                G = e => {
                    var t = e,
                        {
                            apply: n,
                            onChange: r
                        } = t;
                    return t.apply = e => {
                        var r = [];
                        switch (e.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                                for (var [o, a] of i.ML.levels(t, {
                                        at: e.path
                                    })) {
                                    var s = N.findKey(t, o);
                                    r.push([a, s])
                                }
                                break;
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                                for (var [u, c] of i.ML.levels(t, {
                                        at: i.y$.parent(e.path)
                                    })) {
                                    var l = N.findKey(t, u);
                                    r.push([c, l])
                                }
                        }
                        for (var [f, d] of (n(e), r)) {
                            var [p] = i.ML.node(t, f);
                            P.set(p, d)
                        }
                    }, t.setFragmentData = e => {
                        var {
                            selection: n
                        } = t;
                        if (n) {
                            var [r, o] = i.e6.edges(n), a = i.ML.void(t, {
                                at: r.path
                            }), s = i.ML.void(t, {
                                at: o.path
                            });
                            if (!i.e6.isCollapsed(n) || a) {
                                var u = N.toDOMRange(t, n),
                                    c = u.cloneContents(),
                                    l = c.childNodes[0];
                                if (c.childNodes.forEach((e => {
                                        e.textContent && "" !== e.textContent.trim() && (l = e)
                                    })), s) {
                                    var [f] = s, d = u.cloneRange(), p = N.toDOMNode(t, f);
                                    d.setEndAfter(p), c = d.cloneContents()
                                }
                                if (a && (l = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach((e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    })), M(l)) {
                                    var h = document.createElement("span");
                                    h.style.whiteSpace = "pre", h.appendChild(l), c.appendChild(h), l = h
                                }
                                var v = t.getFragment(),
                                    g = JSON.stringify(v),
                                    m = window.btoa(encodeURIComponent(g));
                                l.setAttribute("data-slate-fragment", m), e.setData("application/x-slate-fragment", m);
                                var y = document.createElement("div");
                                y.appendChild(c), y.setAttribute("hidden", "true"), document.body.appendChild(y), e.setData("text/html", y.innerHTML), e.setData("text/plain", B(y)), document.body.removeChild(y)
                            }
                        }
                    }, t.insertData = e => {
                        var n = e.getData("application/x-slate-fragment");
                        if (n) {
                            var r = decodeURIComponent(window.atob(n)),
                                o = JSON.parse(r);
                            t.insertFragment(o)
                        } else {
                            var a = e.getData("text/plain");
                            if (a) {
                                var s = a.split(/\r\n|\r|\n/),
                                    u = !1;
                                for (var c of s) u && i.YR.splitNodes(t, {
                                    always: !0
                                }), t.insertText(c), u = !0
                            }
                        }
                    }, t.onChange = () => {
                        g.unstable_batchedUpdates((() => {
                            var e = F.get(t);
                            e && e(), r()
                        }))
                    }, t
                },
                Z = e => {
                    var {
                        isLast: t,
                        leaf: n,
                        parent: o,
                        text: a
                    } = e, s = W(), u = N.findPath(s, a), c = i.y$.parent(u);
                    return s.isVoid(o) ? r.createElement(Q, {
                        length: i.NB.string(o).length
                    }) : "" !== n.text || o.children[o.children.length - 1] !== a || s.isInline(o) || "" !== i.ML.string(s, c) ? "" === n.text ? r.createElement(Q, null) : t && "\n" === n.text.slice(-1) ? r.createElement(X, {
                        isTrailing: !0,
                        text: n.text
                    }) : r.createElement(X, {
                        text: n.text
                    }) : r.createElement(Q, {
                        isLineBreak: !0
                    })
                },
                X = e => {
                    var {
                        text: t,
                        isTrailing: n = !1
                    } = e;
                    return r.createElement("span", {
                        "data-slate-string": !0
                    }, t, n ? "\n" : null)
                },
                Q = e => {
                    var {
                        length: t = 0,
                        isLineBreak: n = !1
                    } = e;
                    return r.createElement("span", {
                        "data-slate-zero-width": n ? "n" : "z",
                        "data-slate-length": t
                    }, "\ufeff", n ? r.createElement("br", null) : null)
                },
                ee = r.memo((e => {
                    var {
                        leaf: t,
                        isLast: n,
                        text: i,
                        parent: o,
                        renderLeaf: a = (e => r.createElement(te, Object.assign({}, e)))
                    } = e, s = r.createElement(Z, {
                        isLast: n,
                        leaf: t,
                        parent: o,
                        text: i
                    });
                    t[j] && (s = r.createElement(r.Fragment, null, r.createElement("span", {
                        contentEditable: !1,
                        style: {
                            pointerEvents: "none",
                            display: "inline-block",
                            width: "0",
                            maxWidth: "100%",
                            whiteSpace: "nowrap",
                            opacity: "0.333",
                            userSelect: "none",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            textDecoration: "none"
                        }
                    }, t.placeholder), s));
                    return a({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: s,
                        leaf: t,
                        text: i
                    })
                }), ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.text === e.text && i.xv.matches(t.leaf, e.leaf))),
                te = e => {
                    var {
                        attributes: t,
                        children: n
                    } = e;
                    return r.createElement("span", Object.assign({}, t), n)
                },
                ne = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect,
                re = r.memo((e => {
                    for (var {
                            decorations: t,
                            isLast: n,
                            parent: o,
                            renderLeaf: a,
                            text: s
                        } = e, u = W(), c = (0, r.useRef)(null), l = i.xv.decorations(s, t), f = N.findKey(u, s), d = [], p = 0; p < l.length; p++) {
                        var h = l[p];
                        d.push(r.createElement(ee, {
                            isLast: n && p === l.length - 1,
                            key: "".concat(f.id, "-").concat(p),
                            leaf: h,
                            text: s,
                            parent: o,
                            renderLeaf: a
                        }))
                    }
                    return ne((() => {
                        c.current ? (D.set(f, c.current), C.set(s, c.current), S.set(c.current, s)) : (D.delete(f), C.delete(s))
                    })), r.createElement("span", {
                        "data-slate-node": "text",
                        ref: c
                    }, d)
                }), ((e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.text === e.text)),
                ie = r.memo((e => {
                    var {
                        decorate: t,
                        decorations: n,
                        element: o,
                        renderElement: a = (e => r.createElement(oe, Object.assign({}, e))),
                        renderLeaf: s,
                        selection: u
                    } = e, c = (0, r.useRef)(null), l = W(), f = Y(), d = l.isInline(o), p = N.findKey(l, o), h = r.createElement(se, {
                        decorate: t,
                        decorations: n,
                        node: o,
                        renderElement: a,
                        renderLeaf: s,
                        selection: u
                    }), g = {
                        "data-slate-node": "element",
                        ref: c
                    };
                    if (d && (g["data-slate-inline"] = !0), !d && i.ML.hasInlines(l, o)) {
                        var m = i.NB.string(o),
                            y = v()(m);
                        "rtl" === y && (g.dir = y)
                    }
                    if (i.ML.isVoid(l, o)) {
                        g["data-slate-void"] = !0, !f && d && (g.contentEditable = !1);
                        var b = d ? "span" : "div",
                            [
                                [w]
                            ] = i.NB.texts(o);
                        h = f ? null : r.createElement(b, {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, r.createElement(re, {
                            decorations: [],
                            isLast: !1,
                            parent: o,
                            text: w
                        })), k.set(w, 0), O.set(w, o)
                    }
                    return ne((() => {
                        c.current ? (D.set(p, c.current), C.set(o, c.current), S.set(c.current, o)) : (D.delete(p), C.delete(o))
                    })), r.createElement(K.Provider, {
                        value: !!u
                    }, a({
                        attributes: g,
                        children: h,
                        element: o
                    }))
                }), ((e, t) => e.decorate === t.decorate && e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && ae(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && i.e6.equals(e.selection, t.selection)))),
                oe = e => {
                    var {
                        attributes: t,
                        children: n,
                        element: i
                    } = e, o = W().isInline(i) ? "span" : "div";
                    return r.createElement(o, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), n)
                },
                ae = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = t[n];
                        if (!i.e6.equals(r, o)) return !1
                    }
                    return !0
                },
                se = e => {
                    for (var {
                            decorate: t,
                            decorations: n,
                            node: o,
                            renderElement: a,
                            renderLeaf: s,
                            selection: u
                        } = e, c = W(), l = N.findPath(c, o), f = [], d = i.W_.isElement(o) && !c.isInline(o) && i.ML.hasInlines(c, o), p = 0; p < o.children.length; p++) {
                        var h = l.concat(p),
                            v = o.children[p],
                            g = N.findKey(c, v),
                            m = i.ML.range(c, h),
                            y = u && i.e6.intersection(m, u),
                            b = t([v, h]);
                        for (var w of n) {
                            var x = i.e6.intersection(w, m);
                            x && b.push(x)
                        }
                        i.W_.isElement(v) ? f.push(r.createElement(ie, {
                            decorate: t,
                            decorations: b,
                            element: v,
                            key: g.id,
                            renderElement: a,
                            renderLeaf: s,
                            selection: y
                        })) : f.push(r.createElement(re, {
                            decorations: b,
                            key: g.id,
                            isLast: d && p === o.children.length - 1,
                            parent: o,
                            renderLeaf: s,
                            text: v
                        })), k.set(v, p), O.set(v, o)
                    }
                    return r.createElement(r.Fragment, null, f)
                },
                ue = ("undefined" !== typeof navigator && "undefined" !== typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream, "undefined" !== typeof navigator && /Mac OS X/.test(navigator.userAgent)),
                ce = "undefined" !== typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                le = "undefined" !== typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                fe = "undefined" !== typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent),
                de = "undefined" !== typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent),
                pe = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    splitBlock: "shift?+enter",
                    undo: "mod+z"
                },
                he = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                ve = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                ge = e => {
                    var t = pe[e],
                        n = he[e],
                        r = ve[e],
                        i = t && (0, m.TB)(t),
                        o = n && (0, m.TB)(n),
                        a = r && (0, m.TB)(r);
                    return e => !(!i || !i(e)) || (!!(ue && o && o(e)) || !(ue || !a || !a(e)))
                },
                me = {
                    isBold: ge("bold"),
                    isCompose: ge("compose"),
                    isMoveBackward: ge("moveBackward"),
                    isMoveForward: ge("moveForward"),
                    isDeleteBackward: ge("deleteBackward"),
                    isDeleteForward: ge("deleteForward"),
                    isDeleteLineBackward: ge("deleteLineBackward"),
                    isDeleteLineForward: ge("deleteLineForward"),
                    isDeleteWordBackward: ge("deleteWordBackward"),
                    isDeleteWordForward: ge("deleteWordForward"),
                    isExtendBackward: ge("extendBackward"),
                    isExtendForward: ge("extendForward"),
                    isExtendLineBackward: ge("extendLineBackward"),
                    isExtendLineForward: ge("extendLineForward"),
                    isItalic: ge("italic"),
                    isMoveLineBackward: ge("moveLineBackward"),
                    isMoveLineForward: ge("moveLineForward"),
                    isMoveWordBackward: ge("moveWordBackward"),
                    isMoveWordForward: ge("moveWordForward"),
                    isRedo: ge("redo"),
                    isSplitBlock: ge("splitBlock"),
                    isTransposeCharacter: ge("transposeCharacter"),
                    isUndo: ge("undo")
                };

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach((function(t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = !(ce || fe || de),
                xe = e => {
                    var {
                        autoFocus: t,
                        decorate: n = ke,
                        onDOMBeforeInput: o,
                        placeholder: s,
                        readOnly: u = !1,
                        renderElement: c,
                        renderLeaf: l,
                        style: f = {},
                        as: d = "div"
                    } = e, h = b(e, ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "style", "as"]), v = q(), g = (0, r.useRef)(null);
                    A.set(v, u);
                    var m = (0, r.useMemo)((() => ({
                        isComposing: !1,
                        isUpdatingSelection: !1,
                        latestElement: null
                    })), []);
                    ne((() => {
                        g.current ? (E.set(v, g.current), C.set(v, g.current), S.set(g.current, v)) : C.delete(v)
                    })), ne((() => {
                        var {
                            selection: e
                        } = v, t = window.getSelection();
                        if (!m.isComposing && t && N.isFocused(v)) {
                            var n = "None" !== t.type;
                            if (e || n) {
                                var r = E.get(v),
                                    o = !1;
                                if (r.contains(t.anchorNode) && r.contains(t.focusNode) && (o = !0), !(n && o && e && i.e6.equals(N.toSlateRange(v, t), e))) {
                                    var a = N.toDOMNode(v, v);
                                    m.isUpdatingSelection = !0;
                                    var s = e && N.toDOMRange(v, e);
                                    if (s) {
                                        i.e6.isBackward(e) ? t.setBaseAndExtent(s.endContainer, s.endOffset, s.startContainer, s.startOffset) : t.setBaseAndExtent(s.startContainer, s.startOffset, s.endContainer, s.endOffset);
                                        var u = s.startContainer.parentElement;
                                        p(u, {
                                            scrollMode: "if-needed",
                                            boundary: a
                                        })
                                    } else t.removeAllRanges();
                                    setTimeout((() => {
                                        s && ce && a.focus(), m.isUpdatingSelection = !1
                                    }))
                                }
                            }
                        }
                    })), (0, r.useEffect)((() => {
                        g.current && t && g.current.focus()
                    }), [t]);
                    var y = (0, r.useCallback)((e => {
                        if (!u && Ee(v, e.target) && !Ce(e, o)) {
                            var {
                                selection: t
                            } = v, {
                                inputType: n
                            } = e, r = e.dataTransfer || e.data || void 0;
                            if ("insertCompositionText" === n || "deleteCompositionText" === n) return;
                            if (e.preventDefault(), !n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [a] = e.getTargetRanges();
                                if (a) {
                                    var s = N.toSlateRange(v, a);
                                    t && i.e6.equals(t, s) || i.YR.select(v, s)
                                }
                            }
                            if (t && i.e6.isExpanded(t) && n.startsWith("delete")) return void i.ML.deleteFragment(v);
                            switch (n) {
                                case "deleteByComposition":
                                case "deleteByCut":
                                case "deleteByDrag":
                                    i.ML.deleteFragment(v);
                                    break;
                                case "deleteContent":
                                case "deleteContentForward":
                                    i.ML.deleteForward(v);
                                    break;
                                case "deleteContentBackward":
                                    i.ML.deleteBackward(v);
                                    break;
                                case "deleteEntireSoftLine":
                                    i.ML.deleteBackward(v, {
                                        unit: "line"
                                    }), i.ML.deleteForward(v, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineBackward":
                                    i.ML.deleteBackward(v, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineBackward":
                                    i.ML.deleteBackward(v, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineForward":
                                    i.ML.deleteForward(v, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineForward":
                                    i.ML.deleteForward(v, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteWordBackward":
                                    i.ML.deleteBackward(v, {
                                        unit: "word"
                                    });
                                    break;
                                case "deleteWordForward":
                                    i.ML.deleteForward(v, {
                                        unit: "word"
                                    });
                                    break;
                                case "insertLineBreak":
                                case "insertParagraph":
                                    i.ML.insertBreak(v);
                                    break;
                                case "insertFromComposition":
                                case "insertFromDrop":
                                case "insertFromPaste":
                                case "insertFromYank":
                                case "insertReplacementText":
                                case "insertText":
                                    r instanceof DataTransfer ? N.insertData(v, r) : "string" === typeof r && i.ML.insertText(v, r)
                            }
                        }
                    }), [u, o]);
                    ne((() => (g.current && we && g.current.addEventListener("beforeinput", y), () => {
                        g.current && we && g.current.removeEventListener("beforeinput", y)
                    })), [y]);
                    var w = (0, r.useCallback)(a()((() => {
                        if (!u && !m.isComposing && !m.isUpdatingSelection) {
                            var {
                                activeElement: e
                            } = window.document, t = N.toDOMNode(v, v), n = window.getSelection();
                            if (e === t ? (m.latestElement = e, T.set(v, !0)) : T.delete(v), !n) return i.YR.deselect(v);
                            var {
                                anchorNode: r,
                                focusNode: o
                            } = n, a = Ee(v, r) || Se(v, r), s = Ee(v, o) || Se(v, o);
                            if (a && s) {
                                var c = N.toSlateRange(v, n);
                                i.YR.select(v, c)
                            } else i.YR.deselect(v)
                        }
                    }), 100), [u]);
                    ne((() => (window.document.addEventListener("selectionchange", w), () => {
                        window.document.removeEventListener("selectionchange", w)
                    })), [w]);
                    var x = n([v, []]);
                    if (s && 1 === v.children.length && 1 === Array.from(i.NB.texts(v)).length && "" === i.NB.string(v)) {
                        var k = i.ML.start(v, []);
                        x.push({
                            [j]: !0,
                            placeholder: s,
                            anchor: k,
                            focus: k
                        })
                    }
                    return r.createElement($.Provider, {
                        value: u
                    }, r.createElement(d, Object.assign({
                        "data-gramm": !1,
                        role: u ? void 0 : "textbox"
                    }, h, {
                        spellCheck: we ? h.spellCheck : void 0,
                        autoCorrect: we ? h.autoCorrect : void 0,
                        autoCapitalize: we ? h.autoCapitalize : void 0,
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !u || void 0,
                        suppressContentEditableWarning: !0,
                        ref: g,
                        style: be({
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, f),
                        onBeforeInput: (0, r.useCallback)((e => {
                            if (!we && !u && !De(e, h.onBeforeInput) && Ee(v, e.target)) {
                                e.preventDefault();
                                var t = e.data;
                                i.ML.insertText(v, t)
                            }
                        }), [u]),
                        onBlur: (0, r.useCallback)((e => {
                            if (!u && !m.isUpdatingSelection && Ee(v, e.target) && !De(e, h.onBlur) && m.latestElement !== window.document.activeElement) {
                                var {
                                    relatedTarget: t
                                } = e;
                                if (t !== N.toDOMNode(v, v) && (!I(t) || !t.hasAttribute("data-slate-spacer"))) {
                                    if (null != t && _(t) && N.hasDOMNode(v, t)) {
                                        var n = N.toSlateNode(v, t);
                                        if (i.W_.isElement(n) && !v.isVoid(n)) return
                                    }
                                    T.delete(v)
                                }
                            }
                        }), [u, h.onBlur]),
                        onClick: (0, r.useCallback)((e => {
                            if (!u && Oe(v, e.target) && !De(e, h.onClick) && _(e.target)) {
                                var t = N.toSlateNode(v, e.target),
                                    n = N.findPath(v, t),
                                    r = i.ML.start(v, n),
                                    o = i.ML.end(v, n),
                                    a = i.ML.void(v, {
                                        at: r
                                    }),
                                    s = i.ML.void(v, {
                                        at: o
                                    });
                                if (a && s && i.y$.equals(a[1], s[1])) {
                                    var c = i.ML.range(v, r);
                                    i.YR.select(v, c)
                                }
                            }
                        }), [u, h.onClick]),
                        onCompositionEnd: (0, r.useCallback)((e => {
                            Ee(v, e.target) && !De(e, h.onCompositionEnd) && (m.isComposing = !1, le || ce || !e.data || i.ML.insertText(v, e.data))
                        }), [h.onCompositionEnd]),
                        onCompositionStart: (0, r.useCallback)((e => {
                            Ee(v, e.target) && !De(e, h.onCompositionStart) && (m.isComposing = !0)
                        }), [h.onCompositionStart]),
                        onCopy: (0, r.useCallback)((e => {
                            Ee(v, e.target) && !De(e, h.onCopy) && (e.preventDefault(), N.setFragmentData(v, e.clipboardData))
                        }), [h.onCopy]),
                        onCut: (0, r.useCallback)((e => {
                            if (!u && Ee(v, e.target) && !De(e, h.onCut)) {
                                e.preventDefault(), N.setFragmentData(v, e.clipboardData);
                                var {
                                    selection: t
                                } = v;
                                t && i.e6.isExpanded(t) && i.ML.deleteFragment(v)
                            }
                        }), [u, h.onCut]),
                        onDragOver: (0, r.useCallback)((e => {
                            if (Oe(v, e.target) && !De(e, h.onDragOver)) {
                                var t = N.toSlateNode(v, e.target);
                                i.ML.isVoid(v, t) && e.preventDefault()
                            }
                        }), [h.onDragOver]),
                        onDragStart: (0, r.useCallback)((e => {
                            if (Oe(v, e.target) && !De(e, h.onDragStart)) {
                                var t = N.toSlateNode(v, e.target),
                                    n = N.findPath(v, t);
                                if (i.ML.void(v, {
                                        at: n
                                    })) {
                                    var r = i.ML.range(v, n);
                                    i.YR.select(v, r)
                                }
                                N.setFragmentData(v, e.dataTransfer)
                            }
                        }), [h.onDragStart]),
                        onDrop: (0, r.useCallback)((e => {
                            if (Oe(v, e.target) && !u && !De(e, h.onDrop) && (!we || !le && e.dataTransfer.files.length > 0)) {
                                e.preventDefault();
                                var t = N.findEventRange(v, e),
                                    n = e.dataTransfer;
                                i.YR.select(v, t), N.insertData(v, n)
                            }
                        }), [u, h.onDrop]),
                        onFocus: (0, r.useCallback)((e => {
                            if (!u && !m.isUpdatingSelection && Ee(v, e.target) && !De(e, h.onFocus)) {
                                var t = N.toDOMNode(v, v);
                                if (m.latestElement = window.document.activeElement, ce && e.target !== t) return void t.focus();
                                T.set(v, !0)
                            }
                        }), [u, h.onFocus]),
                        onKeyDown: (0, r.useCallback)((e => {
                            if (!u && Ee(v, e.target) && !De(e, h.onKeyDown)) {
                                var {
                                    nativeEvent: t
                                } = e, {
                                    selection: n
                                } = v;
                                if (me.isRedo(t)) return e.preventDefault(), void("function" === typeof v.redo && v.redo());
                                if (me.isUndo(t)) return e.preventDefault(), void("function" === typeof v.undo && v.undo());
                                if (me.isMoveLineBackward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "line",
                                    reverse: !0
                                });
                                if (me.isMoveLineForward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "line"
                                });
                                if (me.isExtendLineBackward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0
                                });
                                if (me.isExtendLineForward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "line",
                                    edge: "focus"
                                });
                                if (me.isMoveBackward(t)) return e.preventDefault(), void(n && i.e6.isCollapsed(n) ? i.YR.move(v, {
                                    reverse: !0
                                }) : i.YR.collapse(v, {
                                    edge: "start"
                                }));
                                if (me.isMoveForward(t)) return e.preventDefault(), void(n && i.e6.isCollapsed(n) ? i.YR.move(v) : i.YR.collapse(v, {
                                    edge: "end"
                                }));
                                if (me.isMoveWordBackward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "word",
                                    reverse: !0
                                });
                                if (me.isMoveWordForward(t)) return e.preventDefault(), void i.YR.move(v, {
                                    unit: "word"
                                });
                                if (!we) {
                                    if (me.isBold(t) || me.isItalic(t) || me.isTransposeCharacter(t)) return void e.preventDefault();
                                    if (me.isSplitBlock(t)) return e.preventDefault(), void i.ML.insertBreak(v);
                                    if (me.isDeleteBackward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteBackward(v));
                                    if (me.isDeleteForward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteForward(v));
                                    if (me.isDeleteLineBackward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteBackward(v, {
                                        unit: "line"
                                    }));
                                    if (me.isDeleteLineForward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteForward(v, {
                                        unit: "line"
                                    }));
                                    if (me.isDeleteWordBackward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteBackward(v, {
                                        unit: "word"
                                    }));
                                    if (me.isDeleteWordForward(t)) return e.preventDefault(), void(n && i.e6.isExpanded(n) ? i.ML.deleteFragment(v) : i.ML.deleteForward(v, {
                                        unit: "word"
                                    }))
                                }
                            }
                        }), [u, h.onKeyDown]),
                        onPaste: (0, r.useCallback)((e => {
                            !Ee(v, e.target) || De(e, h.onPaste) || we && !(e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length)(e.nativeEvent) || u || (e.preventDefault(), N.insertData(v, e.clipboardData))
                        }), [u, h.onPaste])
                    }), r.createElement(se, {
                        decorate: n,
                        decorations: x,
                        node: v,
                        renderElement: c,
                        renderLeaf: l,
                        selection: v.selection
                    })))
                },
                ke = () => [],
                Oe = (e, t) => _(t) && N.hasDOMNode(e, t),
                Ee = (e, t) => _(t) && N.hasDOMNode(e, t, {
                    editable: !0
                }),
                Se = (e, t) => {
                    var n = Oe(e, t) && N.toSlateNode(e, t);
                    return i.ML.isVoid(e, n)
                },
                De = (e, t) => !!t && (t(e), e.isDefaultPrevented() || e.isPropagationStopped()),
                Ce = (e, t) => !!t && (t(e), e.defaultPrevented)
        },
        59619: function(e, t) {
            "use strict";
            for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), r = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, i = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: n ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, o = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, a = 1; a < 20; a++) o["f" + a] = 111 + a;

            function s(e, t, n) {
                t && !("byKey" in t) && (n = t, t = null), Array.isArray(e) || (e = [e]);
                var r = e.map((function(e) {
                        return u(e, t)
                    })),
                    i = function(e) {
                        return r.some((function(t) {
                            return c(t, e)
                        }))
                    };
                return null == n ? i : i(n)
            }

            function u(e, t) {
                var n = t && t.byKey,
                    i = {},
                    o = (e = e.replace("++", "+add")).split("+"),
                    a = o.length;
                for (var s in r) i[r[s]] = !1;
                var u = !0,
                    c = !1,
                    d = void 0;
                try {
                    for (var p, h = o[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
                        var v = p.value,
                            g = v.endsWith("?") && v.length > 1;
                        g && (v = v.slice(0, -1));
                        var m = f(v),
                            y = r[m];
                        1 !== a && y || (n ? i.key = m : i.which = l(v)), y && (i[y] = !g || null)
                    }
                } catch (b) {
                    c = !0, d = b
                } finally {
                    try {
                        !u && h.return && h.return()
                    } finally {
                        if (c) throw d
                    }
                }
                return i
            }

            function c(e, t) {
                for (var n in e) {
                    var r = e[n],
                        i = void 0;
                    if (null != r && ((null != (i = "key" === n && null != t.key ? t.key.toLowerCase() : "which" === n ? 91 === r && 93 === t.which ? 91 : t.which : t[n]) || !1 !== r) && i !== r)) return !1
                }
                return !0
            }

            function l(e) {
                return e = f(e), o[e] || e.toUpperCase().charCodeAt(0)
            }

            function f(e) {
                return e = e.toLowerCase(), e = i[e] || e
            }
            t.TB = function(e, t) {
                return s(e, {
                    byKey: !0
                }, t)
            }
        },
        87410: function(e, t, n) {
            "use strict";
            n.d(t, {
                ML: function() {
                    return _e
                },
                W_: function() {
                    return Me
                },
                NB: function() {
                    return Be
                },
                OX: function() {
                    return ze
                },
                y$: function() {
                    return He
                },
                E9: function() {
                    return qe
                },
                e6: function() {
                    return Ye
                },
                Dr: function() {
                    return Le
                },
                xv: function() {
                    return Ze
                },
                YR: function() {
                    return ut
                },
                Jh: function() {
                    return ft
                }
            });
            var r, i, o, a = n(90430),
                s = n(78181),
                u = n(34155),
                c = "undefined" !== typeof Symbol,
                l = "undefined" !== typeof Map,
                f = "undefined" !== typeof Set,
                d = c ? Symbol("immer-nothing") : ((r = {})["immer-nothing"] = !0, r),
                p = c ? Symbol("immer-draftable") : "__$immer_draftable",
                h = c ? Symbol("immer-state") : "__$immer_state",
                v = c ? Symbol.iterator : "@@iterator",
                g = function(e, t) {
                    return (g = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                };

            function m(e, t) {
                function n() {
                    this.constructor = e
                }
                g(e, t), e.prototype = (n.prototype = t.prototype, new n)
            }

            function y(e) {
                return !!e && !!e[h]
            }

            function b(e) {
                return !!e && (function(e) {
                    if (!e || "object" !== typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    return !t || t === Object.prototype
                }(e) || Array.isArray(e) || !!e[p] || !!e.constructor[p] || D(e) || C(e))
            }! function(e) {
                e[e.Object = 0] = "Object", e[e.Array = 1] = "Array", e[e.Map = 2] = "Map", e[e.Set = 3] = "Set"
            }(i || (i = {})),
            function(e) {
                e[e.ProxyObject = 0] = "ProxyObject", e[e.ProxyArray = 1] = "ProxyArray", e[e.ES5Object = 2] = "ES5Object", e[e.ES5Array = 3] = "ES5Array", e[e.Map = 4] = "Map", e[e.Set = 5] = "Set"
            }(o || (o = {}));
            var w = "undefined" !== typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : "undefined" !== typeof Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : Object.getOwnPropertyNames;

            function x(e, t) {
                k(e) === i.Object ? w(e).forEach((function(n) {
                    return t(n, e[n], e)
                })) : e.forEach((function(n, r) {
                    return t(r, n, e)
                }))
            }

            function k(e) {
                if (e || j(), e[h]) switch (e[h].type) {
                    case o.ES5Object:
                    case o.ProxyObject:
                        return i.Object;
                    case o.ES5Array:
                    case o.ProxyArray:
                        return i.Array;
                    case o.Map:
                        return i.Map;
                    case o.Set:
                        return i.Set
                }
                return Array.isArray(e) ? i.Array : D(e) ? i.Map : C(e) ? i.Set : i.Object
            }

            function O(e, t) {
                return k(e) === i.Map ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function E(e, t) {
                return k(e) === i.Map ? e.get(t) : e[t]
            }

            function S(e, t) {
                return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
            }

            function D(e) {
                return l && e instanceof Map
            }

            function C(e) {
                return f && e instanceof Set
            }

            function P(e) {
                return e.copy || e.base
            }

            function A(e, t) {
                if (void 0 === t && (t = !1), Array.isArray(e)) return e.slice();
                var n = Object.create(Object.getPrototypeOf(e));
                return w(e).forEach((function(r) {
                    if (r !== h) {
                        var i = Object.getOwnPropertyDescriptor(e, r),
                            o = i.value;
                        if (i.get) {
                            if (!t) throw new Error("Immer drafts cannot have computed properties");
                            o = i.get.call(e)
                        }
                        i.enumerable ? n[r] = o : Object.defineProperty(n, r, {
                            value: o,
                            writable: !0,
                            configurable: !0
                        })
                    }
                })), n
            }

            function T(e, t) {
                if (b(e) && !y(e) && !Object.isFrozen(e)) {
                    var n = k(e);
                    n === i.Set ? e.add = e.clear = e.delete = F : n === i.Map && (e.set = e.clear = e.delete = F), Object.freeze(e), t && x(e, (function(e, t) {
                        return T(t, !0)
                    }))
                }
            }

            function F() {
                throw new Error("This object has been frozen and should not be mutated")
            }

            function j() {
                throw new Error("Illegal state, please file a bug")
            }
            var I = function() {
                function e(e, t) {
                    this.drafts = [], this.parent = e, this.immer = t, this.canAutoFreeze = !0
                }
                return e.prototype.usePatches = function(e) {
                    e && (this.patches = [], this.inversePatches = [], this.patchListener = e)
                }, e.prototype.revoke = function() {
                    this.leave(), this.drafts.forEach(_), this.drafts = null
                }, e.prototype.leave = function() {
                    this === e.current && (e.current = this.parent)
                }, e.enter = function(t) {
                    var n = new e(e.current, t);
                    return e.current = n, n
                }, e
            }();

            function _(e) {
                var t = e[h];
                t.type === o.ProxyObject || t.type === o.ProxyArray ? t.revoke() : t.revoked = !0
            }

            function M(e, t, n) {
                var r = n.drafts[0],
                    i = void 0 !== t && t !== r;
                if (e.willFinalize(n, t, i), i) {
                    if (r[h].modified) throw n.revoke(), new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");
                    b(t) && (t = L(e, t, n), n.parent || R(e, t)), n.patches && (n.patches.push({
                        op: "replace",
                        path: [],
                        value: t
                    }), n.inversePatches.push({
                        op: "replace",
                        path: [],
                        value: r[h].base
                    }))
                } else t = L(e, r, n, []);
                return n.revoke(), n.patches && n.patchListener(n.patches, n.inversePatches), t !== d ? t : void 0
            }

            function L(e, t, n, r) {
                var i = t[h];
                if (!i) return Object.isFrozen(t) ? t : B(e, t, n);
                if (i.scope !== n) return t;
                if (!i.modified) return R(e, i.base, !0), i.base;
                if (!i.finalized) {
                    if (i.finalized = !0, B(e, i.draft, n, r), e.onDelete && i.type !== o.Set)
                        if (e.useProxies) {
                            x(i.assigned, (function(t, n) {
                                n || e.onDelete(i, t)
                            }))
                        } else {
                            var a = i.base,
                                s = i.copy;
                            x(a, (function(t) {
                                O(s, t) || e.onDelete(i, t)
                            }))
                        } e.onCopy && e.onCopy(i), e.autoFreeze && n.canAutoFreeze && T(i.copy, !1), r && n.patches && function(e, t, n, r) {
                        switch (e.type) {
                            case o.ProxyObject:
                            case o.ES5Object:
                            case o.Map:
                                return function(e, t, n, r) {
                                    var i = e.base,
                                        o = e.copy;
                                    x(e.assigned, (function(e, a) {
                                        var s = E(i, e),
                                            u = E(o, e),
                                            c = a ? O(i, e) ? "replace" : "add" : "remove";
                                        if (s !== u || "replace" !== c) {
                                            var l = t.concat(e);
                                            n.push("remove" === c ? {
                                                op: c,
                                                path: l
                                            } : {
                                                op: c,
                                                path: l,
                                                value: u
                                            }), r.push("add" === c ? {
                                                op: "remove",
                                                path: l
                                            } : "remove" === c ? {
                                                op: "add",
                                                path: l,
                                                value: s
                                            } : {
                                                op: "replace",
                                                path: l,
                                                value: s
                                            })
                                        }
                                    }))
                                }(e, t, n, r);
                            case o.ES5Array:
                            case o.ProxyArray:
                                return function(e, t, n, r) {
                                    var i, o, a = e.base,
                                        s = e.assigned,
                                        u = e.copy;
                                    u || j();
                                    u.length < a.length && (a = (i = [u, a])[0], u = i[1], n = (o = [r, n])[0], r = o[1]);
                                    var c = u.length - a.length,
                                        l = 0;
                                    for (; a[l] === u[l] && l < a.length;) ++l;
                                    var f = a.length;
                                    for (; f > l && a[f - 1] === u[f + c - 1];) --f;
                                    for (var d = l; d < f; ++d)
                                        if (s[d] && u[d] !== a[d]) {
                                            var p = t.concat([d]);
                                            n.push({
                                                op: "replace",
                                                path: p,
                                                value: u[d]
                                            }), r.push({
                                                op: "replace",
                                                path: p,
                                                value: a[d]
                                            })
                                        } var h = n.length;
                                    for (d = f + c - 1; d >= f; --d) {
                                        p = t.concat([d]);
                                        n[h + d - f] = {
                                            op: "add",
                                            path: p,
                                            value: u[d]
                                        }, r.push({
                                            op: "remove",
                                            path: p
                                        })
                                    }
                                }(e, t, n, r);
                            case o.Set:
                                (function(e, t, n, r) {
                                    var i = e.base,
                                        o = e.copy,
                                        a = 0;
                                    i.forEach((function(e) {
                                        if (!o.has(e)) {
                                            var i = t.concat([a]);
                                            n.push({
                                                op: "remove",
                                                path: i,
                                                value: e
                                            }), r.unshift({
                                                op: "add",
                                                path: i,
                                                value: e
                                            })
                                        }
                                        a++
                                    })), a = 0, o.forEach((function(e) {
                                        if (!i.has(e)) {
                                            var o = t.concat([a]);
                                            n.push({
                                                op: "add",
                                                path: o,
                                                value: e
                                            }), r.unshift({
                                                op: "remove",
                                                path: o,
                                                value: e
                                            })
                                        }
                                        a++
                                    }))
                                })(e, t, n, r)
                        }
                    }(i, r, n.patches, n.inversePatches)
                }
                return i.copy
            }

            function B(e, t, n, r) {
                var i = t[h];
                return i && (i.type !== o.ES5Object && i.type !== o.ES5Array || (i.copy = A(i.draft, !0)), t = i.copy), x(t, (function(o, a) {
                    return N(e, n, t, i, t, o, a, r)
                })), t
            }

            function N(e, t, n, r, o, a, s, u) {
                if (s === o) throw Error("Immer forbids circular references");
                var c = !!r && o === n,
                    l = C(o);
                if (y(s)) {
                    var f = u && c && !l && !O(r.assigned, a) ? u.concat(a) : void 0;
                    (function(e, t, n) {
                        switch (k(e)) {
                            case i.Map:
                                e.set(t, n);
                                break;
                            case i.Set:
                                e.delete(t), e.add(n);
                                break;
                            default:
                                e[t] = n
                        }
                    })(o, a, s = L(e, s, t, f)), y(s) && (t.canAutoFreeze = !1)
                } else {
                    if (c && S(s, E(r.base, a))) return;
                    b(s) && (x(s, (function(i, o) {
                        return N(e, t, n, r, s, i, o, u)
                    })), t.parent || R(e, s))
                }
                c && e.onAssign && !l && e.onAssign(r, a, s)
            }

            function R(e, t, n) {
                void 0 === n && (n = !1), e.autoFreeze && !y(t) && T(t, n)
            }
            var z = {
                    get: function(e, t) {
                        if (t === h) return e;
                        var n = e.drafts;
                        if (!e.modified && O(n, t)) return n[t];
                        var r = P(e)[t];
                        if (e.finalized || !b(r)) return r;
                        if (e.modified) {
                            if (r !== W(e.base, t)) return r;
                            n = e.copy
                        }
                        return n[t] = e.scope.immer.createProxy(r, e)
                    },
                    has: function(e, t) {
                        return t in P(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(P(e))
                    },
                    set: function(e, t, n) {
                        if (!e.modified) {
                            var r = W(e.base, t);
                            if (n ? S(r, n) || n === e.drafts[t] : S(r, n) && t in e.base) return !0;
                            q(e), U(e)
                        }
                        return e.assigned[t] = !0, e.copy[t] = n, !0
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== W(e.base, t) || t in e.base ? (e.assigned[t] = !1, q(e), U(e)) : e.assigned[t] && delete e.assigned[t], e.copy && delete e.copy[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var n = P(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r && (r.writable = !0, r.configurable = e.type !== o.ProxyArray || "length" !== t), r
                    },
                    defineProperty: function() {
                        throw new Error("Object.defineProperty() cannot be used on an Immer draft")
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.base)
                    },
                    setPrototypeOf: function() {
                        throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")
                    }
                },
                H = {};

            function W(e, t) {
                var n = e[h],
                    r = Reflect.getOwnPropertyDescriptor(n ? P(n) : e, t);
                return r && r.value
            }

            function U(e) {
                if (!e.modified) {
                    if (e.modified = !0, e.type === o.ProxyObject || e.type === o.ProxyArray) {
                        var t = e.copy = A(e.base);
                        x(e.drafts, (function(e, n) {
                            t[e] = n
                        })), e.drafts = void 0
                    }
                    e.parent && U(e.parent)
                }
            }

            function q(e) {
                e.copy || (e.copy = A(e.base))
            }

            function V(e, t, n) {
                e.drafts.forEach((function(e) {
                    e[h].finalizing = !0
                })), n ? y(t) && t[h].scope === e && Q(e.drafts) : (e.patches && ee(e.drafts[0]), Q(e.drafts))
            }

            function $(e, t) {
                var n = Array.isArray(e),
                    r = G(e);
                x(r, (function(t) {
                    ! function(e, t, n) {
                        var r = Z[t];
                        r ? r.enumerable = n : Z[t] = r = {
                            configurable: !0,
                            enumerable: n,
                            get: function() {
                                return function(e, t) {
                                    X(e);
                                    var n = Y(P(e), t);
                                    if (e.finalizing) return n;
                                    if (n === Y(e.base, t) && b(n)) return J(e), e.copy[t] = e.scope.immer.createProxy(n, e);
                                    return n
                                }(this[h], t)
                            },
                            set: function(e) {
                                ! function(e, t, n) {
                                    if (X(e), e.assigned[t] = !0, !e.modified) {
                                        if (S(n, Y(P(e), t))) return;
                                        K(e), J(e)
                                    }
                                    e.copy[t] = n
                                }(this[h], t, e)
                            }
                        };
                        Object.defineProperty(e, t, r)
                    }(r, t, n || function(e, t) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        return !(!n || !n.enumerable)
                    }(e, t))
                }));
                var i, a, s, u = {
                    type: n ? o.ES5Array : o.ES5Object,
                    scope: t ? t.scope : I.current,
                    modified: !1,
                    finalizing: !1,
                    finalized: !1,
                    assigned: {},
                    parent: t,
                    base: e,
                    draft: r,
                    copy: null,
                    revoked: !1,
                    isManual: !1
                };
                return i = r, a = h, s = u, Object.defineProperty(i, a, {
                    value: s,
                    enumerable: !1,
                    writable: !0
                }), r
            }

            function Y(e, t) {
                var n = e[h];
                if (n && !n.finalizing) {
                    n.finalizing = !0;
                    var r = e[t];
                    return n.finalizing = !1, r
                }
                return e[t]
            }

            function K(e) {
                e.modified || (e.modified = !0, e.parent && K(e.parent))
            }

            function J(e) {
                e.copy || (e.copy = G(e.base))
            }

            function G(e) {
                var t = e && e[h];
                if (t) {
                    t.finalizing = !0;
                    var n = A(t.draft, !0);
                    return t.finalizing = !1, n
                }
                return A(e)
            }
            x(z, (function(e, t) {
                H[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            })), H.deleteProperty = function(e, t) {
                if (isNaN(parseInt(t))) throw new Error("Immer only supports deleting array indices");
                return z.deleteProperty.call(this, e[0], t)
            }, H.set = function(e, t, n) {
                if ("length" !== t && isNaN(parseInt(t))) throw new Error("Immer only supports setting array indices and the 'length' property");
                return z.set.call(this, e[0], t, n, e[0])
            };
            var Z = {};

            function X(e) {
                if (!0 === e.revoked) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(P(e)))
            }

            function Q(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var n = e[t][h];
                    if (!n.modified) switch (n.type) {
                        case o.ES5Array:
                            ne(n) && K(n);
                            break;
                        case o.ES5Object:
                            te(n) && K(n)
                    }
                }
            }

            function ee(e) {
                if (e && "object" === typeof e) {
                    var t = e[h];
                    if (t) {
                        var n = t.base,
                            r = t.draft,
                            i = t.assigned,
                            a = t.type;
                        if (a === o.ES5Object) x(r, (function(e) {
                            e !== h && (void 0 !== n[e] || O(n, e) ? i[e] || ee(r[e]) : (i[e] = !0, K(t)))
                        })), x(n, (function(e) {
                            void 0 !== r[e] || O(r, e) || (i[e] = !1, K(t))
                        }));
                        else if (a === o.ES5Array) {
                            if (ne(t) && (K(t), i.length = !0), r.length < n.length)
                                for (var s = r.length; s < n.length; s++) i[s] = !1;
                            else
                                for (s = n.length; s < r.length; s++) i[s] = !0;
                            var u = Math.min(r.length, n.length);
                            for (s = 0; s < u; s++) void 0 === i[s] && ee(r[s])
                        }
                    }
                }
            }

            function te(e) {
                for (var t = e.base, n = e.draft, r = Object.keys(n), i = r.length - 1; i >= 0; i--) {
                    var o = r[i],
                        a = t[o];
                    if (void 0 === a && !O(t, o)) return !0;
                    var s = n[o],
                        u = s && s[h];
                    if (u ? u.base !== a : !S(s, a)) return !0
                }
                return r.length !== Object.keys(t).length
            }

            function ne(e) {
                var t = e.draft;
                if (t.length !== e.base.length) return !0;
                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                return !(!n || n.get)
            }
            var re = function(e) {
                if (!e) throw new Error("Map is not polyfilled");

                function t(e, t) {
                    return this[h] = {
                        type: o.Map,
                        parent: t,
                        scope: t ? t.scope : I.current,
                        modified: !1,
                        finalized: !1,
                        copy: void 0,
                        assigned: void 0,
                        base: e,
                        draft: this,
                        isManual: !1,
                        revoked: !1
                    }, this
                }
                m(t, e);
                var n = t.prototype;
                return Object.defineProperty(n, "size", {
                    get: function() {
                        return P(this[h]).size
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.has = function(e) {
                    return P(this[h]).has(e)
                }, n.set = function(e, t) {
                    var n = this[h];
                    return X(n), P(n).get(e) !== t && (ie(n), n.scope.immer.markChanged(n), n.assigned.set(e, !0), n.copy.set(e, t), n.assigned.set(e, !0)), this
                }, n.delete = function(e) {
                    if (!this.has(e)) return !1;
                    var t = this[h];
                    return X(t), ie(t), t.scope.immer.markChanged(t), t.assigned.set(e, !1), t.copy.delete(e), !0
                }, n.clear = function() {
                    var e = this[h];
                    return X(e), ie(e), e.scope.immer.markChanged(e), e.assigned = new Map, e.copy.clear()
                }, n.forEach = function(e, t) {
                    var n = this;
                    P(this[h]).forEach((function(r, i, o) {
                        e.call(t, n.get(i), i, n)
                    }))
                }, n.get = function(e) {
                    var t = this[h];
                    X(t);
                    var n = P(t).get(e);
                    if (t.finalized || !b(n)) return n;
                    if (n !== t.base.get(e)) return n;
                    var r = t.scope.immer.createProxy(n, t);
                    return ie(t), t.copy.set(e, r), r
                }, n.keys = function() {
                    return P(this[h]).keys()
                }, n.values = function() {
                    var e, t = this,
                        n = this.keys();
                    return (e = {})[v] = function() {
                        return t.values()
                    }, e.next = function() {
                        var e = n.next();
                        return e.done ? e : {
                            done: !1,
                            value: t.get(e.value)
                        }
                    }, e
                }, n.entries = function() {
                    var e, t = this,
                        n = this.keys();
                    return (e = {})[v] = function() {
                        return t.entries()
                    }, e.next = function() {
                        var e = n.next();
                        if (e.done) return e;
                        var r = t.get(e.value);
                        return {
                            done: !1,
                            value: [e.value, r]
                        }
                    }, e
                }, n[v] = function() {
                    return this.entries()
                }, t
            }(Map);

            function ie(e) {
                e.copy || (e.assigned = new Map, e.copy = new Map(e.base))
            }
            var oe = function(e) {
                if (!e) throw new Error("Set is not polyfilled");

                function t(e, t) {
                    return this[h] = {
                        type: o.Set,
                        parent: t,
                        scope: t ? t.scope : I.current,
                        modified: !1,
                        finalized: !1,
                        copy: void 0,
                        base: e,
                        draft: this,
                        drafts: new Map,
                        revoked: !1,
                        isManual: !1
                    }, this
                }
                m(t, e);
                var n = t.prototype;
                return Object.defineProperty(n, "size", {
                    get: function() {
                        return P(this[h]).size
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.has = function(e) {
                    var t = this[h];
                    return X(t), t.copy ? !!t.copy.has(e) || !(!t.drafts.has(e) || !t.copy.has(t.drafts.get(e))) : t.base.has(e)
                }, n.add = function(e) {
                    var t = this[h];
                    return X(t), t.copy ? t.copy.add(e) : t.base.has(e) || (ae(t), t.scope.immer.markChanged(t), t.copy.add(e)), this
                }, n.delete = function(e) {
                    if (!this.has(e)) return !1;
                    var t = this[h];
                    return X(t), ae(t), t.scope.immer.markChanged(t), t.copy.delete(e) || !!t.drafts.has(e) && t.copy.delete(t.drafts.get(e))
                }, n.clear = function() {
                    var e = this[h];
                    return X(e), ae(e), e.scope.immer.markChanged(e), e.copy.clear()
                }, n.values = function() {
                    var e = this[h];
                    return X(e), ae(e), e.copy.values()
                }, n.entries = function() {
                    var e = this[h];
                    return X(e), ae(e), e.copy.entries()
                }, n.keys = function() {
                    return this.values()
                }, n[v] = function() {
                    return this.values()
                }, n.forEach = function(e, t) {
                    for (var n = this.values(), r = n.next(); !r.done;) e.call(t, r.value, r.value, this), r = n.next()
                }, t
            }(Set);

            function ae(e) {
                e.copy || (e.copy = new Set, e.base.forEach((function(t) {
                    if (b(t)) {
                        var n = e.scope.immer.createProxy(t, e);
                        e.drafts.set(t, n), e.copy.add(n)
                    } else e.copy.add(t)
                })))
            }

            function se(e, t) {
                return t.forEach((function(t) {
                    var n = t.path,
                        r = t.op;
                    n.length || j();
                    for (var o = e, a = 0; a < n.length - 1; a++)
                        if (!(o = E(o, n[a])) || "object" !== typeof o) throw new Error("Cannot apply patch, path doesn't resolve: " + n.join("/"));
                    var s = k(o),
                        u = ue(t.value),
                        c = n[n.length - 1];
                    switch (r) {
                        case "replace":
                            switch (s) {
                                case i.Map:
                                    return o.set(c, u);
                                case i.Set:
                                    throw new Error('Sets cannot have "replace" patches.');
                                default:
                                    return o[c] = u
                            }
                            case "add":
                                switch (s) {
                                    case i.Array:
                                        return o.splice(c, 0, u);
                                    case i.Map:
                                        return o.set(c, u);
                                    case i.Set:
                                        return o.add(u);
                                    default:
                                        return o[c] = u
                                }
                                case "remove":
                                    switch (s) {
                                        case i.Array:
                                            return o.splice(c, 1);
                                        case i.Map:
                                            return o.delete(c);
                                        case i.Set:
                                            return o.delete(t.value);
                                        default:
                                            return delete o[c]
                                    }
                                    default:
                                        throw new Error("Unsupported patch operation: " + r)
                    }
                })), e
            }

            function ue(e) {
                if (!e || "object" !== typeof e) return e;
                if (Array.isArray(e)) return e.map(ue);
                if (D(e)) return new Map(Array.from(e.entries()).map((function(e) {
                    return [e[0], ue(e[1])]
                })));
                if (C(e)) return new Set(Array.from(e).map(ue));
                var t = Object.create(Object.getPrototypeOf(e));
                for (var n in e) t[n] = ue(e[n]);
                return t
            }

            function ce() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }
            var le = {
                    useProxies: "undefined" !== typeof Proxy && "undefined" !== typeof Proxy.revocable && "undefined" !== typeof Reflect,
                    autoFreeze: "undefined" === typeof u && "verifyMinified" === function() {}.name,
                    onAssign: null,
                    onDelete: null,
                    onCopy: null
                },
                fe = new(function() {
                    function e(e) {
                        var t = this;
                        this.useProxies = !1, this.autoFreeze = !1, x(le, (function(n, r) {
                            var i, o;
                            t[n] = null !== (o = null === (i = e) || void 0 === i ? void 0 : i[n]) && void 0 !== o ? o : r
                        })), this.setUseProxies(this.useProxies), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this)
                    }
                    return e.prototype.produce = function(e, t, n) {
                        var r, i = this;
                        if ("function" === typeof e && "function" !== typeof t) {
                            var o = t;
                            t = e;
                            var a = this;
                            return function(e) {
                                var n = arguments,
                                    r = this;
                                void 0 === e && (e = o);
                                for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = n[s];
                                return a.produce(e, (function(e) {
                                    return t.call.apply(t, ce([r, e], i))
                                }))
                            }
                        }
                        if ("function" !== typeof t) throw new Error("The first or second argument to `produce` must be a function");
                        if (void 0 !== n && "function" !== typeof n) throw new Error("The third argument to `produce` must be a function or undefined");
                        if (b(e)) {
                            var s = I.enter(this),
                                u = this.createProxy(e, void 0),
                                c = !0;
                            try {
                                r = t(u), c = !1
                            } finally {
                                c ? s.revoke() : s.leave()
                            }
                            return "undefined" !== typeof Promise && r instanceof Promise ? r.then((function(e) {
                                return s.usePatches(n), M(i, e, s)
                            }), (function(e) {
                                throw s.revoke(), e
                            })) : (s.usePatches(n), M(this, r, s))
                        }
                        if ((r = t(e)) !== d) return void 0 === r && (r = e), R(this, r, !0), r
                    }, e.prototype.produceWithPatches = function(e, t, n) {
                        var r, i, o = this;
                        return "function" === typeof e ? function(t) {
                            for (var n = arguments, r = [], i = 1; i < arguments.length; i++) r[i - 1] = n[i];
                            return o.produceWithPatches(t, (function(t) {
                                return e.apply(void 0, ce([t], r))
                            }))
                        } : (n && j(), [this.produce(e, t, (function(e, t) {
                            r = e, i = t
                        })), r, i])
                    }, e.prototype.createDraft = function(e) {
                        if (!b(e)) throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");
                        var t = I.enter(this),
                            n = this.createProxy(e, void 0);
                        return n[h].isManual = !0, t.leave(), n
                    }, e.prototype.finishDraft = function(e, t) {
                        var n = e && e[h];
                        if (!n || !n.isManual) throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");
                        if (n.finalized) throw new Error("The given draft is already finalized");
                        var r = n.scope;
                        return r.usePatches(t), M(this, void 0, r)
                    }, e.prototype.setAutoFreeze = function(e) {
                        this.autoFreeze = e
                    }, e.prototype.setUseProxies = function(e) {
                        this.useProxies = e
                    }, e.prototype.applyPatches = function(e, t) {
                        var n;
                        for (n = t.length - 1; n >= 0; n--) {
                            var r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        return y(e) ? se(e, t) : this.produce(e, (function(e) {
                            return se(e, t.slice(n + 1))
                        }))
                    }, e.prototype.createProxy = function(e, t) {
                        var n = D(e) ? function(e, t) {
                            return new re(e, t)
                        }(e, t) : C(e) ? function(e, t) {
                            return new oe(e, t)
                        }(e, t) : this.useProxies ? function(e, t) {
                            var n = Array.isArray(e),
                                r = {
                                    type: n ? o.ProxyArray : o.ProxyObject,
                                    scope: t ? t.scope : I.current,
                                    modified: !1,
                                    finalized: !1,
                                    assigned: {},
                                    parent: t,
                                    base: e,
                                    draft: null,
                                    drafts: {},
                                    copy: null,
                                    revoke: null,
                                    isManual: !1
                                },
                                i = r,
                                a = z;
                            n && (i = [r], a = H);
                            var s = Proxy.revocable(i, a),
                                u = s.revoke,
                                c = s.proxy;
                            return r.draft = c, r.revoke = u, c
                        }(e, t) : $(e, t);
                        return (t ? t.scope : I.current).drafts.push(n), n
                    }, e.prototype.willFinalize = function(e, t, n) {
                        this.useProxies || V(e, t, n)
                    }, e.prototype.markChanged = function(e) {
                        this.useProxies ? U(e) : K(e)
                    }, e
                }()),
                de = fe.produce,
                pe = (fe.produceWithPatches.bind(fe), fe.setAutoFreeze.bind(fe), fe.setUseProxies.bind(fe), fe.applyPatches.bind(fe), fe.createDraft.bind(fe)),
                he = fe.finishDraft.bind(fe);

            function ve(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ge(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var me = new WeakMap,
                ye = new WeakMap,
                be = new WeakMap,
                we = new WeakMap,
                xe = new WeakMap,
                ke = new WeakMap,
                Oe = /\s/,
                Ee = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                Se = /['\u2018\u2019]/,
                De = e => {
                    for (var t = 0, n = null, r = e.charCodeAt(0); r;)
                        if (Pe(r)) {
                            var i = Ae(r, e, t);
                            if ("SURR" === n || "BMP" === n) break;
                            t += 2, n = i ? "MOD" : "SURR", r = e.charCodeAt(t)
                        } else if (8205 !== r)
                        if (Fe(r)) {
                            if (n && "ZWJ" !== n && "VAR" !== n) break;
                            t += 1, n = "BMP", r = e.charCodeAt(t)
                        } else {
                            if (!Te(r)) {
                                if ("MOD" === n) {
                                    t += 1;
                                    break
                                }
                                break
                            }
                            if (n && "ZWJ" !== n) break;
                            t += 1, n = "VAR", r = e.charCodeAt(t)
                        }
                    else t += 1, n = "ZWJ", r = e.charCodeAt(t);
                    return t || 1
                },
                Ce = (e, t) => {
                    if (Oe.test(e)) return !1;
                    if (Se.test(e)) {
                        var n = t.charAt(0),
                            r = De(n);
                        n = t.slice(0, r);
                        var i = t.slice(r);
                        if (Ce(n, i)) return !0
                    }
                    return !Ee.test(e)
                },
                Pe = e => 55296 <= e && e <= 57343,
                Ae = (e, t, n) => {
                    if (55356 === e) {
                        var r = t.charCodeAt(n + 1);
                        return r <= 57343 && r >= 57339
                    }
                    return !1
                },
                Te = e => e <= 65039 && e >= 65024,
                Fe = e => 10084 === e || 9794 === e || 9792 === e || 9760 === e || 9877 === e || 9992 === e || 9711 === e;

            function je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _e = {
                    above(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: n = !1,
                                mode: r = "lowest",
                                at: i = e.selection,
                                match: o
                            } = t;
                        if (i) {
                            var a = _e.path(e, i),
                                s = "lowest" === r;
                            for (var [u, c] of _e.levels(e, {
                                    at: a,
                                    voids: n,
                                    match: o,
                                    reverse: s
                                }))
                                if (!Ze.isText(u) && !He.equals(a, c)) return [u, c]
                        }
                    },
                    addMark(e, t, n) {
                        e.addMark(t, n)
                    },
                    after(e, t) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = {
                                anchor: _e.point(e, t, {
                                    edge: "end"
                                }),
                                focus: _e.end(e, [])
                            },
                            {
                                distance: o = 1
                            } = r,
                            a = 0;
                        for (var s of _e.positions(e, Ie({}, r, {
                                at: i
                            }))) {
                            if (a > o) break;
                            0 !== a && (n = s), a++
                        }
                        return n
                    },
                    before(e, t) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = {
                                anchor: _e.start(e, []),
                                focus: _e.point(e, t, {
                                    edge: "start"
                                })
                            },
                            {
                                distance: o = 1
                            } = r,
                            a = 0;
                        for (var s of _e.positions(e, Ie({}, r, {
                                at: i,
                                reverse: !0
                            }))) {
                            if (a > o) break;
                            0 !== a && (n = s), a++
                        }
                        return n
                    },
                    deleteBackward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: n = "character"
                            } = t;
                        e.deleteBackward(n)
                    },
                    deleteForward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: n = "character"
                            } = t;
                        e.deleteForward(n)
                    },
                    deleteFragment(e) {
                        e.deleteFragment()
                    },
                    edges: (e, t) => [_e.start(e, t), _e.end(e, t)],
                    end: (e, t) => _e.point(e, t, {
                        edge: "end"
                    }),
                    first(e, t) {
                        var n = _e.path(e, t, {
                            edge: "start"
                        });
                        return _e.node(e, n)
                    },
                    fragment(e, t) {
                        var n = _e.range(e, t);
                        return Be.fragment(e, n)
                    },
                    hasBlocks: (e, t) => t.children.some((t => _e.isBlock(e, t))),
                    hasInlines: (e, t) => t.children.some((t => Ze.isText(t) || _e.isInline(e, t))),
                    hasTexts: (e, t) => t.children.every((e => Ze.isText(e))),
                    insertBreak(e) {
                        e.insertBreak()
                    },
                    insertFragment(e, t) {
                        e.insertFragment(t)
                    },
                    insertNode(e, t) {
                        e.insertNode(t)
                    },
                    insertText(e, t) {
                        e.insertText(t)
                    },
                    isBlock: (e, t) => Me.isElement(t) && !e.isInline(t),
                    isEditor: e => (0, a.Z)(e) && "function" === typeof e.addMark && "function" === typeof e.apply && "function" === typeof e.deleteBackward && "function" === typeof e.deleteForward && "function" === typeof e.deleteFragment && "function" === typeof e.insertBreak && "function" === typeof e.insertFragment && "function" === typeof e.insertNode && "function" === typeof e.insertText && "function" === typeof e.isInline && "function" === typeof e.isVoid && "function" === typeof e.normalizeNode && "function" === typeof e.onChange && "function" === typeof e.removeMark && (null === e.marks || (0, a.Z)(e.marks)) && (null === e.selection || Ye.isRange(e.selection)) && Be.isNodeList(e.children) && ze.isOperationList(e.operations),
                    isEnd(e, t, n) {
                        var r = _e.end(e, n);
                        return qe.equals(t, r)
                    },
                    isEdge: (e, t, n) => _e.isStart(e, t, n) || _e.isEnd(e, t, n),
                    isEmpty(e, t) {
                        var {
                            children: n
                        } = t, [r] = n;
                        return 0 === n.length || 1 === n.length && Ze.isText(r) && "" === r.text && !e.isVoid(t)
                    },
                    isInline: (e, t) => Me.isElement(t) && e.isInline(t),
                    isNormalizing(e) {
                        var t = be.get(e);
                        return void 0 === t || t
                    },
                    isStart(e, t, n) {
                        if (0 !== t.offset) return !1;
                        var r = _e.start(e, n);
                        return qe.equals(t, r)
                    },
                    isVoid: (e, t) => Me.isElement(t) && e.isVoid(t),
                    last(e, t) {
                        var n = _e.path(e, t, {
                            edge: "end"
                        });
                        return _e.node(e, n)
                    },
                    leaf(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = _e.path(e, t, n);
                        return [Be.leaf(e, r), r]
                    },
                    * levels(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: n = e.selection,
                                reverse: r = !1,
                                voids: i = !1
                            } = t,
                            {
                                match: o
                            } = t;
                        if (null == o && (o = () => !0), n) {
                            var a = [],
                                s = _e.path(e, n);
                            for (var [u, c] of Be.levels(e, s))
                                if (o(u) && (a.push([u, c]), !i && _e.isVoid(e, u))) break;
                            r && a.reverse(), yield* a
                        }
                    },
                    marks(e) {
                        var {
                            marks: t,
                            selection: n
                        } = e;
                        if (!n) return null;
                        if (t) return t;
                        if (Ye.isExpanded(n)) {
                            var [r] = _e.nodes(e, {
                                match: Ze.isText
                            });
                            if (r) {
                                var [i] = r;
                                return ge(i, ["text"])
                            }
                            return {}
                        }
                        var {
                            anchor: o
                        } = n, {
                            path: a
                        } = o, [s] = _e.leaf(e, a);
                        if (0 === o.offset) {
                            var u = _e.previous(e, {
                                    at: a,
                                    match: Ze.isText
                                }),
                                c = _e.above(e, {
                                    match: t => _e.isBlock(e, t)
                                });
                            if (u && c) {
                                var [l, f] = u, [, d] = c;
                                He.isAncestor(d, f) && (s = l)
                            }
                        }
                        return ge(s, ["text"])
                    },
                    next(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: n = "lowest",
                                voids: r = !1
                            } = t,
                            {
                                match: i,
                                at: o = e.selection
                            } = t;
                        if (o) {
                            var [, a] = _e.last(e, o), [, s] = _e.last(e, []), u = [a, s];
                            if (He.isPath(o) && 0 === o.length) throw new Error("Cannot get the next node from the root node!");
                            if (null == i)
                                if (He.isPath(o)) {
                                    var [c] = _e.parent(e, o);
                                    i = e => c.children.includes(e)
                                } else i = () => !0;
                            var [, l] = _e.nodes(e, {
                                at: u,
                                match: i,
                                mode: n,
                                voids: r
                            });
                            return l
                        }
                    },
                    node(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = _e.path(e, t, n);
                        return [Be.get(e, r), r]
                    },
                    * nodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: n = e.selection,
                                mode: r = "all",
                                universal: i = !1,
                                reverse: o = !1,
                                voids: a = !1
                            } = t,
                            {
                                match: s
                            } = t;
                        if (s || (s = () => !0), n) {
                            var u, c;
                            if (Le.isSpan(n)) u = n[0], c = n[1];
                            else {
                                var l = _e.path(e, n, {
                                        edge: "start"
                                    }),
                                    f = _e.path(e, n, {
                                        edge: "end"
                                    });
                                u = o ? f : l, c = o ? l : f
                            }
                            var d, p = Be.nodes(e, {
                                    reverse: o,
                                    from: u,
                                    to: c,
                                    pass: t => {
                                        var [n] = t;
                                        return !a && _e.isVoid(e, n)
                                    }
                                }),
                                h = [];
                            for (var [v, g] of p) {
                                var m = d && 0 === He.compare(g, d[1]);
                                if ("highest" !== r || !m)
                                    if (s(v))
                                        if ("lowest" === r && m) d = [v, g];
                                        else {
                                            var y = "lowest" === r ? d : [v, g];
                                            y && (i ? h.push(y) : yield y), d = [v, g]
                                        }
                                else if (i && !m && Ze.isText(v)) return
                            }
                            "lowest" === r && d && (i ? h.push(d) : yield d), i && (yield* h)
                        }
                    },
                    normalize(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: n = !1
                            } = t,
                            r = e => me.get(e) || [];
                        if (_e.isNormalizing(e)) {
                            if (n) {
                                var i = Array.from(Be.nodes(e), (e => {
                                    var [, t] = e;
                                    return t
                                }));
                                me.set(e, i)
                            }
                            0 !== r(e).length && _e.withoutNormalizing(e, (() => {
                                for (var t = 42 * r(e).length, n = 0; 0 !== r(e).length;) {
                                    if (n > t) throw new Error("\n            Could not completely normalize the editor after ".concat(t, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
                                    var i = r(e).pop(),
                                        o = _e.node(e, i);
                                    e.normalizeNode(o), n++
                                }
                            }))
                        }
                    },
                    parent(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = _e.path(e, t, n),
                            i = He.parent(r);
                        return _e.node(e, i)
                    },
                    path(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: r,
                                edge: i
                            } = n;
                        if (He.isPath(t))
                            if ("start" === i) {
                                var [, o] = Be.first(e, t);
                                t = o
                            } else if ("end" === i) {
                            var [, a] = Be.last(e, t);
                            t = a
                        }
                        return Ye.isRange(t) && (t = "start" === i ? Ye.start(t) : "end" === i ? Ye.end(t) : He.common(t.anchor.path, t.focus.path)), qe.isPoint(t) && (t = t.path), null != r && (t = t.slice(0, r)), t
                    },
                    pathRef(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = n,
                            i = {
                                current: t,
                                affinity: r,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return _e.pathRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return _e.pathRefs(e).add(i), i
                    },
                    pathRefs(e) {
                        var t = we.get(e);
                        return t || (t = new Set, we.set(e, t)), t
                    },
                    point(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: r = "start"
                            } = n;
                        if (He.isPath(t)) {
                            var i;
                            if ("end" === r) {
                                var [, o] = Be.last(e, t);
                                i = o
                            } else {
                                var [, a] = Be.first(e, t);
                                i = a
                            }
                            var s = Be.get(e, i);
                            if (!Ze.isText(s)) throw new Error("Cannot get the ".concat(r, " point in the node at path [").concat(t, "] because it has no ").concat(r, " text node."));
                            return {
                                path: i,
                                offset: "end" === r ? s.text.length : 0
                            }
                        }
                        if (Ye.isRange(t)) {
                            var [u, c] = Ye.edges(t);
                            return "start" === r ? u : c
                        }
                        return t
                    },
                    pointRef(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = n,
                            i = {
                                current: t,
                                affinity: r,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return _e.pointRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return _e.pointRefs(e).add(i), i
                    },
                    pointRefs(e) {
                        var t = xe.get(e);
                        return t || (t = new Set, xe.set(e, t)), t
                    },
                    * positions(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: n = e.selection,
                                unit: r = "offset",
                                reverse: i = !1
                            } = t;
                        if (n) {
                            var o = _e.range(e, n),
                                [a, u] = Ye.edges(o),
                                c = i ? u : a,
                                l = "",
                                f = 0,
                                d = 0,
                                p = null,
                                h = !1,
                                v = () => {
                                    null == p && (p = "character" === r ? De(l) : "word" === r ? (e => {
                                        for (var t, n = 0, r = 0, i = !1; t = e.charAt(r);) {
                                            var o = De(t);
                                            t = e.slice(r, r + o);
                                            var a = e.slice(r + o);
                                            if (Ce(t, a)) i = !0, n += o;
                                            else {
                                                if (i) break;
                                                n += o
                                            }
                                            r += o
                                        }
                                        return n
                                    })(l) : "line" === r || "block" === r ? l.length : 1, l = l.slice(p)), d = i ? d - p : d + p, p = (f -= p) >= 0 ? null : 0 - f
                                };
                            for (var [g, m] of _e.nodes(e, {
                                    at: n,
                                    reverse: i
                                })) {
                                if (Me.isElement(g)) {
                                    if (e.isVoid(g)) {
                                        yield _e.start(e, m);
                                        continue
                                    }
                                    if (e.isInline(g)) continue;
                                    if (_e.hasInlines(e, g)) {
                                        var y = He.isAncestor(m, u.path) ? u : _e.end(e, m),
                                            b = He.isAncestor(m, a.path) ? a : _e.start(e, m),
                                            w = _e.string(e, {
                                                anchor: b,
                                                focus: y
                                            });
                                        l = i ? (0, s.reverse)(w) : w, h = !0
                                    }
                                }
                                if (Ze.isText(g)) {
                                    var x = He.equals(m, c.path);
                                    for (f = g.text.length, d = i ? f : 0, x && (f = i ? c.offset : f - c.offset, d = c.offset), (x || h || "offset" === r) && (yield {
                                            path: m,
                                            offset: d
                                        });
                                        "" !== l && (v(), f >= 0);) yield {
                                        path: m,
                                        offset: d
                                    };
                                    h = !1
                                }
                            }
                        }
                    },
                    previous(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: n = "lowest",
                                voids: r = !1
                            } = t,
                            {
                                match: i,
                                at: o = e.selection
                            } = t;
                        if (o) {
                            var [, a] = _e.first(e, o), [, s] = _e.first(e, []), u = [a, s];
                            if (He.isPath(o) && 0 === o.length) throw new Error("Cannot get the previous node from the root node!");
                            if (null == i)
                                if (He.isPath(o)) {
                                    var [c] = _e.parent(e, o);
                                    i = e => c.children.includes(e)
                                } else i = () => !0;
                            var [, l] = _e.nodes(e, {
                                reverse: !0,
                                at: u,
                                match: i,
                                mode: n,
                                voids: r
                            });
                            return l
                        }
                    },
                    range: (e, t, n) => Ye.isRange(t) && !n ? t : {
                        anchor: _e.start(e, t),
                        focus: _e.end(e, n || t)
                    },
                    rangeRef(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = n,
                            i = {
                                current: t,
                                affinity: r,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return _e.rangeRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return _e.rangeRefs(e).add(i), i
                    },
                    rangeRefs(e) {
                        var t = ke.get(e);
                        return t || (t = new Set, ke.set(e, t)), t
                    },
                    removeMark(e, t) {
                        e.removeMark(t)
                    },
                    start: (e, t) => _e.point(e, t, {
                        edge: "start"
                    }),
                    string(e, t) {
                        var n = _e.range(e, t),
                            [r, i] = Ye.edges(n),
                            o = "";
                        for (var [a, s] of _e.nodes(e, {
                                at: n,
                                match: Ze.isText
                            })) {
                            var u = a.text;
                            He.equals(s, i.path) && (u = u.slice(0, i.offset)), He.equals(s, r.path) && (u = u.slice(r.offset)), o += u
                        }
                        return o
                    },
                    unhangRange(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: r = !1
                            } = n,
                            [i, o] = Ye.edges(t);
                        if (0 !== i.offset || 0 !== o.offset || Ye.isCollapsed(t)) return t;
                        var a = _e.above(e, {
                                at: o,
                                match: t => _e.isBlock(e, t)
                            }),
                            s = a ? a[1] : [],
                            u = {
                                anchor: _e.start(e, []),
                                focus: o
                            },
                            c = !0;
                        for (var [l, f] of _e.nodes(e, {
                                at: u,
                                match: Ze.isText,
                                reverse: !0,
                                voids: r
                            }))
                            if (c) c = !1;
                            else if ("" !== l.text || He.isBefore(f, s)) {
                            o = {
                                path: f,
                                offset: l.text.length
                            };
                            break
                        }
                        return {
                            anchor: i,
                            focus: o
                        }
                    },
                    void(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return _e.above(e, Ie({}, t, {
                            match: t => _e.isVoid(e, t)
                        }))
                    },
                    withoutNormalizing(e, t) {
                        var n = _e.isNormalizing(e);
                        be.set(e, !1), t(), be.set(e, n), _e.normalize(e)
                    }
                },
                Me = {
                    isElement: e => (0, a.Z)(e) && Be.isNodeList(e.children) && !_e.isEditor(e),
                    isElementList: e => Array.isArray(e) && (0 === e.length || Me.isElement(e[0])),
                    matches(e, t) {
                        for (var n in t)
                            if ("children" !== n && e[n] !== t[n]) return !1;
                        return !0
                    }
                },
                Le = {
                    isSpan: e => Array.isArray(e) && 2 === e.length && e.every(He.isPath)
                },
                Be = {
                    ancestor(e, t) {
                        var n = Be.get(e, t);
                        if (Ze.isText(n)) throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(n));
                        return n
                    },
                    * ancestors(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of He.ancestors(t, n)) {
                            var i = [Be.ancestor(e, r), r];
                            yield i
                        }
                    },
                    child(e, t) {
                        if (Ze.isText(e)) throw new Error("Cannot get the child of a text node: ".concat(JSON.stringify(e)));
                        var n = e.children[t];
                        if (null == n) throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(JSON.stringify(e)));
                        return n
                    },
                    * children(e, t) {
                        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: r = !1
                            } = n, i = Be.ancestor(e, t), {
                                children: o
                            } = i, a = r ? o.length - 1 : 0; r ? a >= 0 : a < o.length;) {
                            var s = Be.child(i, a),
                                u = t.concat(a);
                            yield [s, u], a = r ? a - 1 : a + 1
                        }
                    },
                    common(e, t, n) {
                        var r = He.common(t, n);
                        return [Be.get(e, r), r]
                    },
                    descendant(e, t) {
                        var n = Be.get(e, t);
                        if (_e.isEditor(n)) throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(n));
                        return n
                    },
                    * descendants(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [n, r] of Be.nodes(e, t)) 0 !== r.length && (yield [n, r])
                    },
                    * elements(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [n, r] of Be.nodes(e, t)) Me.isElement(n) && (yield [n, r])
                    },
                    first(e, t) {
                        for (var n = t.slice(), r = Be.get(e, n); r && !Ze.isText(r) && 0 !== r.children.length;) r = r.children[0], n.push(0);
                        return [r, n]
                    },
                    fragment(e, t) {
                        if (Ze.isText(e)) throw new Error("Cannot get a fragment starting from a root text node: ".concat(JSON.stringify(e)));
                        return de(e, (e => {
                            var [n, r] = Ye.edges(t), i = Be.nodes(e, {
                                reverse: !0,
                                pass: e => {
                                    var [, n] = e;
                                    return !Ye.includes(t, n)
                                }
                            });
                            for (var [, o] of i) {
                                if (!Ye.includes(t, o)) {
                                    var a = Be.parent(e, o),
                                        s = o[o.length - 1];
                                    a.children.splice(s, 1)
                                }
                                if (He.equals(o, r.path)) {
                                    var u = Be.leaf(e, o);
                                    u.text = u.text.slice(0, r.offset)
                                }
                                if (He.equals(o, n.path)) {
                                    var c = Be.leaf(e, o);
                                    c.text = c.text.slice(n.offset)
                                }
                            }
                            delete e.selection
                        })).children
                    },
                    get(e, t) {
                        for (var n = e, r = 0; r < t.length; r++) {
                            var i = t[r];
                            if (Ze.isText(n) || !n.children[i]) throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(JSON.stringify(e)));
                            n = n.children[i]
                        }
                        return n
                    },
                    has(e, t) {
                        for (var n = e, r = 0; r < t.length; r++) {
                            var i = t[r];
                            if (Ze.isText(n) || !n.children[i]) return !1;
                            n = n.children[i]
                        }
                        return !0
                    },
                    isNode: e => Ze.isText(e) || Me.isElement(e) || _e.isEditor(e),
                    isNodeList: e => Array.isArray(e) && (0 === e.length || Be.isNode(e[0])),
                    last(e, t) {
                        for (var n = t.slice(), r = Be.get(e, n); r && !Ze.isText(r) && 0 !== r.children.length;) {
                            var i = r.children.length - 1;
                            r = r.children[i], n.push(i)
                        }
                        return [r, n]
                    },
                    leaf(e, t) {
                        var n = Be.get(e, t);
                        if (!Ze.isText(n)) throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(n));
                        return n
                    },
                    * levels(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of He.levels(t, n)) {
                            var i = Be.get(e, r);
                            yield [i, r]
                        }
                    },
                    matches: (e, t) => Me.isElement(e) && Me.matches(e, t) || Ze.isText(e) && Ze.matches(e, t),
                    * nodes(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: n,
                                reverse: r = !1
                            } = t, {
                                from: i = [],
                                to: o
                            } = t, a = new Set, s = [], u = e; !o || !(r ? He.isBefore(s, o) : He.isAfter(s, o));)
                            if (a.has(u) || (yield [u, s]), a.has(u) || Ze.isText(u) || 0 === u.children.length || null != n && !1 !== n([u, s])) {
                                if (0 === s.length) break;
                                if (!r) {
                                    var c = He.next(s);
                                    if (Be.has(e, c)) {
                                        s = c, u = Be.get(e, s);
                                        continue
                                    }
                                }
                                if (r && 0 !== s[s.length - 1]) s = He.previous(s), u = Be.get(e, s);
                                else s = He.parent(s), u = Be.get(e, s), a.add(u)
                            } else {
                                a.add(u);
                                var l = r ? u.children.length - 1 : 0;
                                He.isAncestor(s, i) && (l = i[s.length]), s = s.concat(l), u = Be.get(e, s)
                            }
                    },
                    parent(e, t) {
                        var n = He.parent(t),
                            r = Be.get(e, n);
                        if (Ze.isText(r)) throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                        return r
                    },
                    string: e => Ze.isText(e) ? e.text : e.children.map(Be.string).join(""),
                    * texts(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [n, r] of Be.nodes(e, t)) Ze.isText(n) && (yield [n, r])
                    }
                };

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ze = {
                    isNodeOperation: e => ze.isOperation(e) && e.type.endsWith("_node"),
                    isOperation(e) {
                        if (!(0, a.Z)(e)) return !1;
                        switch (e.type) {
                            case "insert_node":
                                return He.isPath(e.path) && Be.isNode(e.node);
                            case "insert_text":
                                return "number" === typeof e.offset && "string" === typeof e.text && He.isPath(e.path);
                            case "merge_node":
                                return "number" === typeof e.position && He.isPath(e.path) && (0, a.Z)(e.properties);
                            case "move_node":
                                return He.isPath(e.path) && He.isPath(e.newPath);
                            case "remove_node":
                                return He.isPath(e.path) && Be.isNode(e.node);
                            case "remove_text":
                                return "number" === typeof e.offset && "string" === typeof e.text && He.isPath(e.path);
                            case "set_node":
                                return He.isPath(e.path) && (0, a.Z)(e.properties) && (0, a.Z)(e.newProperties);
                            case "set_selection":
                                return null === e.properties && Ye.isRange(e.newProperties) || null === e.newProperties && Ye.isRange(e.properties) || (0, a.Z)(e.properties) && (0, a.Z)(e.newProperties);
                            case "split_node":
                                return He.isPath(e.path) && "number" === typeof e.position && (0, a.Z)(e.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: e => Array.isArray(e) && (0 === e.length || ze.isOperation(e[0])),
                    isSelectionOperation: e => ze.isOperation(e) && e.type.endsWith("_selection"),
                    isTextOperation: e => ze.isOperation(e) && e.type.endsWith("_text"),
                    inverse(e) {
                        switch (e.type) {
                            case "insert_node":
                                return Re({}, e, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return Re({}, e, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return Re({}, e, {
                                    type: "split_node",
                                    path: He.previous(e.path)
                                });
                            case "move_node":
                                var {
                                    newPath: t, path: n
                                } = e;
                                return He.equals(t, n) ? e : He.isSibling(n, t) ? Re({}, e, {
                                    path: t,
                                    newPath: n
                                }) : Re({}, e, {
                                    path: He.transform(n, e),
                                    newPath: He.transform(He.next(n), e)
                                });
                            case "remove_node":
                                return Re({}, e, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return Re({}, e, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: r, newProperties: i
                                } = e;
                                return Re({}, e, {
                                    properties: i,
                                    newProperties: r
                                });
                            case "set_selection":
                                var {
                                    properties: o, newProperties: a
                                } = e;
                                return Re({}, e, null == o ? {
                                    properties: a,
                                    newProperties: null
                                } : null == a ? {
                                    properties: null,
                                    newProperties: o
                                } : {
                                    properties: a,
                                    newProperties: o
                                });
                            case "split_node":
                                return Re({}, e, {
                                    type: "merge_node",
                                    path: He.next(e.path)
                                })
                        }
                    }
                },
                He = {
                    ancestors(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: n = !1
                            } = t,
                            r = He.levels(e, t);
                        return r = n ? r.slice(1) : r.slice(0, -1)
                    },
                    common(e, t) {
                        for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                            var i = e[r];
                            if (i !== t[r]) break;
                            n.push(i)
                        }
                        return n
                    },
                    compare(e, t) {
                        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                            if (e[r] < t[r]) return -1;
                            if (e[r] > t[r]) return 1
                        }
                        return 0
                    },
                    endsAfter(e, t) {
                        var n = e.length - 1,
                            r = e.slice(0, n),
                            i = t.slice(0, n),
                            o = e[n],
                            a = t[n];
                        return He.equals(r, i) && o > a
                    },
                    endsAt(e, t) {
                        var n = e.length,
                            r = e.slice(0, n),
                            i = t.slice(0, n);
                        return He.equals(r, i)
                    },
                    endsBefore(e, t) {
                        var n = e.length - 1,
                            r = e.slice(0, n),
                            i = t.slice(0, n),
                            o = e[n],
                            a = t[n];
                        return He.equals(r, i) && o < a
                    },
                    equals: (e, t) => e.length === t.length && e.every(((e, n) => e === t[n])),
                    isAfter: (e, t) => 1 === He.compare(e, t),
                    isAncestor: (e, t) => e.length < t.length && 0 === He.compare(e, t),
                    isBefore: (e, t) => -1 === He.compare(e, t),
                    isChild: (e, t) => e.length === t.length + 1 && 0 === He.compare(e, t),
                    isCommon: (e, t) => e.length <= t.length && 0 === He.compare(e, t),
                    isDescendant: (e, t) => e.length > t.length && 0 === He.compare(e, t),
                    isParent: (e, t) => e.length + 1 === t.length && 0 === He.compare(e, t),
                    isPath: e => Array.isArray(e) && (0 === e.length || "number" === typeof e[0]),
                    isSibling(e, t) {
                        if (e.length !== t.length) return !1;
                        var n = e.slice(0, -1),
                            r = t.slice(0, -1);
                        return e[e.length - 1] !== t[t.length - 1] && He.equals(n, r)
                    },
                    levels(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: n = !1
                            } = t, r = [], i = 0; i <= e.length; i++) r.push(e.slice(0, i));
                        return n && r.reverse(), r
                    },
                    next(e) {
                        if (0 === e.length) throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat(t + 1)
                    },
                    parent(e) {
                        if (0 === e.length) throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
                        return e.slice(0, -1)
                    },
                    previous(e) {
                        if (0 === e.length) throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                        var t = e[e.length - 1];
                        if (t <= 0) throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                        return e.slice(0, -1).concat(t - 1)
                    },
                    relative(e, t) {
                        if (!He.isAncestor(t, e) && !He.equals(e, t)) throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                        return e.slice(t.length)
                    },
                    transform(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return de(e, (r => {
                            var {
                                affinity: i = "forward"
                            } = n;
                            if (0 !== e.length) switch (t.type) {
                                case "insert_node":
                                    var {
                                        path: o
                                    } = t;
                                    (He.equals(o, r) || He.endsBefore(o, r) || He.isAncestor(o, r)) && (r[o.length - 1] += 1);
                                    break;
                                case "remove_node":
                                    var {
                                        path: a
                                    } = t;
                                    if (He.equals(a, r) || He.isAncestor(a, r)) return null;
                                    He.endsBefore(a, r) && (r[a.length - 1] -= 1);
                                    break;
                                case "merge_node":
                                    var {
                                        path: s, position: u
                                    } = t;
                                    He.equals(s, r) || He.endsBefore(s, r) ? r[s.length - 1] -= 1 : He.isAncestor(s, r) && (r[s.length - 1] -= 1, r[s.length] += u);
                                    break;
                                case "split_node":
                                    var {
                                        path: c, position: l
                                    } = t;
                                    if (He.equals(c, r)) {
                                        if ("forward" === i) r[r.length - 1] += 1;
                                        else if ("backward" !== i) return null
                                    } else He.endsBefore(c, r) ? r[c.length - 1] += 1 : He.isAncestor(c, r) && e[c.length] >= l && (r[c.length - 1] += 1, r[c.length] -= l);
                                    break;
                                case "move_node":
                                    var {
                                        path: f, newPath: d
                                    } = t;
                                    if (He.equals(f, d)) return;
                                    if (He.isAncestor(f, r) || He.equals(f, r)) {
                                        var p = d.slice();
                                        return He.endsBefore(f, d) && f.length < d.length && (p[f.length - 1] -= 1), p.concat(r.slice(f.length))
                                    }
                                    He.isSibling(f, d) && (He.isAncestor(d, r) || He.equals(d, r)) ? He.endsBefore(f, r) ? r[f.length - 1] -= 1 : r[f.length - 1] += 1 : He.endsBefore(d, r) || He.equals(d, r) || He.isAncestor(d, r) ? (He.endsBefore(f, r) && (r[f.length - 1] -= 1), r[d.length - 1] += 1) : He.endsBefore(f, r) && (He.equals(d, r) && (r[d.length - 1] += 1), r[f.length - 1] -= 1)
                            }
                        }))
                    }
                },
                We = {
                    transform(e, t) {
                        var {
                            current: n,
                            affinity: r
                        } = e;
                        if (null != n) {
                            var i = He.transform(n, t, {
                                affinity: r
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                };

            function Ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var qe = {
                    compare(e, t) {
                        var n = He.compare(e.path, t.path);
                        return 0 === n ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : n
                    },
                    isAfter: (e, t) => 1 === qe.compare(e, t),
                    isBefore: (e, t) => -1 === qe.compare(e, t),
                    equals: (e, t) => e.offset === t.offset && He.equals(e.path, t.path),
                    isPoint: e => (0, a.Z)(e) && "number" === typeof e.offset && He.isPath(e.path),
                    transform(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return de(e, (e => {
                            var {
                                affinity: r = "forward"
                            } = n, {
                                path: i,
                                offset: o
                            } = e;
                            switch (t.type) {
                                case "insert_node":
                                case "move_node":
                                    e.path = He.transform(i, t, n);
                                    break;
                                case "insert_text":
                                    He.equals(t.path, i) && t.offset <= o && (e.offset += t.text.length);
                                    break;
                                case "merge_node":
                                    He.equals(t.path, i) && (e.offset += t.position), e.path = He.transform(i, t, n);
                                    break;
                                case "remove_text":
                                    He.equals(t.path, i) && t.offset <= o && (e.offset -= Math.min(o - t.offset, t.text.length));
                                    break;
                                case "remove_node":
                                    if (He.equals(t.path, i) || He.isAncestor(t.path, i)) return null;
                                    e.path = He.transform(i, t, n);
                                    break;
                                case "split_node":
                                    if (He.equals(t.path, i)) {
                                        if (t.position === o && null == r) return null;
                                        (t.position < o || t.position === o && "forward" === r) && (e.offset -= t.position, e.path = He.transform(i, t, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? Ue(Object(n), !0).forEach((function(t) {
                                                    ve(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, n, {
                                            affinity: "forward"
                                        })))
                                    } else e.path = He.transform(i, t, n)
                            }
                        }))
                    }
                },
                Ve = {
                    transform(e, t) {
                        var {
                            current: n,
                            affinity: r
                        } = e;
                        if (null != n) {
                            var i = qe.transform(n, t, {
                                affinity: r
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                };

            function $e(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Ye = {
                    edges(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: n = !1
                            } = t,
                            {
                                anchor: r,
                                focus: i
                            } = e;
                        return Ye.isBackward(e) === n ? [r, i] : [i, r]
                    },
                    end(e) {
                        var [, t] = Ye.edges(e);
                        return t
                    },
                    equals: (e, t) => qe.equals(e.anchor, t.anchor) && qe.equals(e.focus, t.focus),
                    includes(e, t) {
                        if (Ye.isRange(t)) {
                            if (Ye.includes(e, t.anchor) || Ye.includes(e, t.focus)) return !0;
                            var [n, r] = Ye.edges(e), [i, o] = Ye.edges(t);
                            return qe.isBefore(n, i) && qe.isAfter(r, o)
                        }
                        var [a, s] = Ye.edges(e), u = !1, c = !1;
                        return qe.isPoint(t) ? (u = qe.compare(t, a) >= 0, c = qe.compare(t, s) <= 0) : (u = He.compare(t, a.path) >= 0, c = He.compare(t, s.path) <= 0), u && c
                    },
                    intersection(e, t) {
                        var n = ge(e, ["anchor", "focus"]),
                            [r, i] = Ye.edges(e),
                            [o, a] = Ye.edges(t),
                            s = qe.isBefore(r, o) ? o : r,
                            u = qe.isBefore(i, a) ? i : a;
                        return qe.isBefore(u, s) ? null : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? $e(Object(n), !0).forEach((function(t) {
                                    ve(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            anchor: s,
                            focus: u
                        }, n)
                    },
                    isBackward(e) {
                        var {
                            anchor: t,
                            focus: n
                        } = e;
                        return qe.isAfter(t, n)
                    },
                    isCollapsed(e) {
                        var {
                            anchor: t,
                            focus: n
                        } = e;
                        return qe.equals(t, n)
                    },
                    isExpanded: e => !Ye.isCollapsed(e),
                    isForward: e => !Ye.isBackward(e),
                    isRange: e => (0, a.Z)(e) && qe.isPoint(e.anchor) && qe.isPoint(e.focus),
                    * points(e) {
                        yield [e.anchor, "anchor"], yield [e.focus, "focus"]
                    },
                    start(e) {
                        var [t] = Ye.edges(e);
                        return t
                    },
                    transform(e, t) {
                        var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: o = "inward"
                            } = i;
                        return "inward" === o ? Ye.isForward(e) ? (n = "forward", r = "backward") : (n = "backward", r = "forward") : "outward" === o ? Ye.isForward(e) ? (n = "backward", r = "forward") : (n = "forward", r = "backward") : (n = o, r = o), de(e, (e => {
                            var i = qe.transform(e.anchor, t, {
                                    affinity: n
                                }),
                                o = qe.transform(e.focus, t, {
                                    affinity: r
                                });
                            if (!i || !o) return null;
                            e.anchor = i, e.focus = o
                        }))
                    }
                },
                Ke = {
                    transform(e, t) {
                        var {
                            current: n,
                            affinity: r
                        } = e;
                        if (null != n) {
                            var i = Ye.transform(n, t, {
                                affinity: r
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                };

            function Je(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Je(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ze = {
                equals(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: r = !1
                        } = n;
                    for (var i in e)
                        if ((!r || "text" !== i) && e[i] !== t[i]) return !1;
                    for (var o in t)
                        if ((!r || "text" !== o) && e[o] !== t[o]) return !1;
                    return !0
                },
                isText: e => (0, a.Z)(e) && "string" === typeof e.text,
                isTextList: e => Array.isArray(e) && (0 === e.length || Ze.isText(e[0])),
                matches(e, t) {
                    for (var n in t)
                        if ("text" !== n && e[n] !== t[n]) return !1;
                    return !0
                },
                decorations(e, t) {
                    var n = [Ge({}, e)];
                    for (var r of t) {
                        var i = ge(r, ["anchor", "focus"]),
                            [o, a] = Ye.edges(r),
                            s = [],
                            u = 0;
                        for (var c of n) {
                            var {
                                length: l
                            } = c.text, f = u;
                            if (u += l, o.offset <= f && a.offset >= f + l) Object.assign(c, i), s.push(c);
                            else if (o.offset > f + l || a.offset < f || a.offset === f && 0 !== f) s.push(c);
                            else {
                                var d = c,
                                    p = void 0,
                                    h = void 0;
                                if (a.offset < f + l) {
                                    var v = a.offset - f;
                                    h = Ge({}, d, {
                                        text: d.text.slice(v)
                                    }), d = Ge({}, d, {
                                        text: d.text.slice(0, v)
                                    })
                                }
                                if (o.offset > f) {
                                    var g = o.offset - f;
                                    p = Ge({}, d, {
                                        text: d.text.slice(0, g)
                                    }), d = Ge({}, d, {
                                        text: d.text.slice(g)
                                    })
                                }
                                Object.assign(d, i), p && s.push(p), s.push(d), h && s.push(h)
                            }
                        }
                        n = s
                    }
                    return n
                }
            };

            function Xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xe(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? et(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var nt = {
                    insertNodes(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                hanging: r = !1,
                                voids: i = !1,
                                mode: o = "lowest"
                            } = n, {
                                at: a,
                                match: s,
                                select: u
                            } = n;
                            if (Be.isNode(t) && (t = [t]), 0 !== t.length) {
                                var [c] = t;
                                if (a || (a = e.selection ? e.selection : e.children.length > 0 ? _e.end(e, []) : [0], u = !0), null == u && (u = !1), Ye.isRange(a))
                                    if (r || (a = _e.unhangRange(e, a)), Ye.isCollapsed(a)) a = a.anchor;
                                    else {
                                        var [, l] = Ye.edges(a), f = _e.pointRef(e, l);
                                        ut.delete(e, {
                                            at: a
                                        }), a = f.unref()
                                    } if (qe.isPoint(a)) {
                                    null == s && (s = Ze.isText(c) ? e => Ze.isText(e) : e.isInline(c) ? t => Ze.isText(t) || _e.isInline(e, t) : t => _e.isBlock(e, t));
                                    var [d] = _e.nodes(e, {
                                        at: a.path,
                                        match: s,
                                        mode: o,
                                        voids: i
                                    });
                                    if (!d) return;
                                    var [, p] = d, h = _e.pathRef(e, p), v = _e.isEnd(e, a, p);
                                    ut.splitNodes(e, {
                                        at: a,
                                        match: s,
                                        mode: o,
                                        voids: i
                                    });
                                    var g = h.unref();
                                    a = v ? He.next(g) : g
                                }
                                var m = He.parent(a),
                                    y = a[a.length - 1];
                                if (i || !_e.void(e, {
                                        at: m
                                    })) {
                                    for (var b of t) {
                                        var w = m.concat(y);
                                        y++, e.apply({
                                            type: "insert_node",
                                            path: w,
                                            node: b
                                        })
                                    }
                                    if (u) {
                                        var x = _e.end(e, a);
                                        x && ut.select(e, x)
                                    }
                                }
                            }
                        }))
                    },
                    liftNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                at: n = e.selection,
                                mode: r = "lowest",
                                voids: i = !1
                            } = t, {
                                match: o
                            } = t;
                            if (null == o && (o = He.isPath(n) ? it(e, n) : t => _e.isBlock(e, t)), n) {
                                var a = _e.nodes(e, {
                                        at: n,
                                        match: o,
                                        mode: r,
                                        voids: i
                                    }),
                                    s = Array.from(a, (t => {
                                        var [, n] = t;
                                        return _e.pathRef(e, n)
                                    }));
                                for (var u of s) {
                                    var c = u.unref();
                                    if (c.length < 2) throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
                                    var l = _e.node(e, He.parent(c)),
                                        [f, d] = l,
                                        p = c[c.length - 1],
                                        {
                                            length: h
                                        } = f.children;
                                    if (1 === h) {
                                        var v = He.next(d);
                                        ut.moveNodes(e, {
                                            at: c,
                                            to: v,
                                            voids: i
                                        }), ut.removeNodes(e, {
                                            at: d,
                                            voids: i
                                        })
                                    } else if (0 === p) ut.moveNodes(e, {
                                        at: c,
                                        to: d,
                                        voids: i
                                    });
                                    else if (p === h - 1) {
                                        var g = He.next(d);
                                        ut.moveNodes(e, {
                                            at: c,
                                            to: g,
                                            voids: i
                                        })
                                    } else {
                                        var m = He.next(c),
                                            y = He.next(d);
                                        ut.splitNodes(e, {
                                            at: m,
                                            voids: i
                                        }), ut.moveNodes(e, {
                                            at: c,
                                            to: y,
                                            voids: i
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    mergeNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                match: n,
                                at: r = e.selection
                            } = t, {
                                hanging: i = !1,
                                voids: o = !1,
                                mode: a = "lowest"
                            } = t;
                            if (r) {
                                if (null == n)
                                    if (He.isPath(r)) {
                                        var [s] = _e.parent(e, r);
                                        n = e => s.children.includes(e)
                                    } else n = t => _e.isBlock(e, t);
                                if (!i && Ye.isRange(r) && (r = _e.unhangRange(e, r)), Ye.isRange(r))
                                    if (Ye.isCollapsed(r)) r = r.anchor;
                                    else {
                                        var [, u] = Ye.edges(r), c = _e.pointRef(e, u);
                                        ut.delete(e, {
                                            at: r
                                        }), r = c.unref(), null == t.at && ut.select(e, r)
                                    } var [l] = _e.nodes(e, {
                                    at: r,
                                    match: n,
                                    voids: o,
                                    mode: a
                                }), f = _e.previous(e, {
                                    at: r,
                                    match: n,
                                    voids: o,
                                    mode: a
                                });
                                if (l && f) {
                                    var [d, p] = l, [h, v] = f;
                                    if (0 !== p.length && 0 !== v.length) {
                                        var g, m, y = He.next(v),
                                            b = He.common(p, v),
                                            w = He.isSibling(p, v),
                                            x = Array.from(_e.levels(e, {
                                                at: p
                                            }), (e => {
                                                var [t] = e;
                                                return t
                                            })).slice(b.length).slice(0, -1),
                                            k = _e.above(e, {
                                                at: p,
                                                mode: "highest",
                                                match: e => x.includes(e) && Me.isElement(e) && 1 === e.children.length
                                            }),
                                            O = k && _e.pathRef(e, k[1]);
                                        if (Ze.isText(d) && Ze.isText(h)) {
                                            var E = ge(d, ["text"]);
                                            m = h.text.length, g = E
                                        } else {
                                            if (!Me.isElement(d) || !Me.isElement(h)) throw new Error("Cannot merge the node at path [".concat(p, "] with the previous sibling because it is not the same kind: ").concat(JSON.stringify(d), " ").concat(JSON.stringify(h)));
                                            E = ge(d, ["children"]);
                                            m = h.children.length, g = E
                                        }
                                        w || ut.moveNodes(e, {
                                            at: p,
                                            to: y,
                                            voids: o
                                        }), O && ut.removeNodes(e, {
                                            at: O.current,
                                            voids: o
                                        }), Me.isElement(h) && _e.isEmpty(e, h) || Ze.isText(h) && "" === h.text ? ut.removeNodes(e, {
                                            at: v,
                                            voids: o
                                        }) : e.apply({
                                            type: "merge_node",
                                            path: y,
                                            position: m,
                                            properties: g
                                        }), O && O.unref()
                                    }
                                }
                            }
                        }))
                    },
                    moveNodes(e, t) {
                        _e.withoutNormalizing(e, (() => {
                            var {
                                to: n,
                                at: r = e.selection,
                                mode: i = "lowest",
                                voids: o = !1
                            } = t, {
                                match: a
                            } = t;
                            if (r) {
                                null == a && (a = He.isPath(r) ? it(e, r) : t => _e.isBlock(e, t));
                                var s = _e.pathRef(e, n),
                                    u = _e.nodes(e, {
                                        at: r,
                                        match: a,
                                        mode: i,
                                        voids: o
                                    }),
                                    c = Array.from(u, (t => {
                                        var [, n] = t;
                                        return _e.pathRef(e, n)
                                    }));
                                for (var l of c) {
                                    var f = l.unref(),
                                        d = s.current;
                                    0 !== f.length && e.apply({
                                        type: "move_node",
                                        path: f,
                                        newPath: d
                                    })
                                }
                                s.unref()
                            }
                        }))
                    },
                    removeNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                hanging: n = !1,
                                voids: r = !1,
                                mode: i = "lowest"
                            } = t, {
                                at: o = e.selection,
                                match: a
                            } = t;
                            if (o) {
                                null == a && (a = He.isPath(o) ? it(e, o) : t => _e.isBlock(e, t)), !n && Ye.isRange(o) && (o = _e.unhangRange(e, o));
                                var s = _e.nodes(e, {
                                        at: o,
                                        match: a,
                                        mode: i,
                                        voids: r
                                    }),
                                    u = Array.from(s, (t => {
                                        var [, n] = t;
                                        return _e.pathRef(e, n)
                                    }));
                                for (var c of u) {
                                    var l = c.unref();
                                    if (l) {
                                        var [f] = _e.node(e, l);
                                        e.apply({
                                            type: "remove_node",
                                            path: l,
                                            node: f
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    setNodes(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                match: r,
                                at: i = e.selection
                            } = n, {
                                hanging: o = !1,
                                mode: a = "lowest",
                                split: s = !1,
                                voids: u = !1
                            } = n;
                            if (i) {
                                if (null == r && (r = He.isPath(i) ? it(e, i) : t => _e.isBlock(e, t)), !o && Ye.isRange(i) && (i = _e.unhangRange(e, i)), s && Ye.isRange(i)) {
                                    var c = _e.rangeRef(e, i, {
                                            affinity: "inward"
                                        }),
                                        [l, f] = Ye.edges(i),
                                        d = "lowest" === a ? "lowest" : "highest";
                                    ut.splitNodes(e, {
                                        at: f,
                                        match: r,
                                        mode: d,
                                        voids: u
                                    }), ut.splitNodes(e, {
                                        at: l,
                                        match: r,
                                        mode: d,
                                        voids: u
                                    }), i = c.unref(), null == n.at && ut.select(e, i)
                                }
                                for (var [p, h] of _e.nodes(e, {
                                        at: i,
                                        match: r,
                                        mode: a,
                                        voids: u
                                    })) {
                                    var v = {},
                                        g = {};
                                    if (0 !== h.length) {
                                        for (var m in t) "children" !== m && "text" !== m && t[m] !== p[m] && (v[m] = p[m], g[m] = t[m]);
                                        0 !== Object.keys(g).length && e.apply({
                                            type: "set_node",
                                            path: h,
                                            properties: v,
                                            newProperties: g
                                        })
                                    }
                                }
                            }
                        }))
                    },
                    splitNodes(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                mode: n = "lowest",
                                voids: r = !1
                            } = t, {
                                match: i,
                                at: o = e.selection,
                                height: a = 0,
                                always: s = !1
                            } = t;
                            if (null == i && (i = t => _e.isBlock(e, t)), Ye.isRange(o) && (o = rt(e, o)), He.isPath(o)) {
                                var u = o,
                                    c = _e.point(e, u),
                                    [l] = _e.parent(e, u);
                                i = e => e === l, a = c.path.length - u.length + 1, o = c, s = !0
                            }
                            if (o) {
                                var f = _e.pointRef(e, o, {
                                        affinity: "backward"
                                    }),
                                    [d] = _e.nodes(e, {
                                        at: o,
                                        match: i,
                                        mode: n,
                                        voids: r
                                    });
                                if (d) {
                                    var p = _e.void(e, {
                                        at: o,
                                        mode: "highest"
                                    });
                                    if (!r && p) {
                                        var [h, v] = p;
                                        if (Me.isElement(h) && e.isInline(h)) {
                                            var g = _e.after(e, v);
                                            if (!g) {
                                                var m = He.next(v);
                                                ut.insertNodes(e, {
                                                    text: ""
                                                }, {
                                                    at: m,
                                                    voids: r
                                                }), g = _e.point(e, m)
                                            }
                                            o = g, s = !0
                                        }
                                        a = o.path.length - v.length + 1, s = !0
                                    }
                                    var y = _e.pointRef(e, o),
                                        b = o.path.length - a,
                                        [, w] = d,
                                        x = o.path.slice(0, b),
                                        k = 0 === a ? o.offset : o.path[b] + 0;
                                    for (var [O, E] of _e.levels(e, {
                                            at: x,
                                            reverse: !0,
                                            voids: r
                                        })) {
                                        var S = !1;
                                        if (E.length < w.length || 0 === E.length || !r && _e.isVoid(e, O)) break;
                                        var D = f.current,
                                            C = _e.isEnd(e, D, E);
                                        if (s || !f || !_e.isEdge(e, D, E)) {
                                            S = !0;
                                            var P = ge(O, ["text", "children"]);
                                            e.apply({
                                                type: "split_node",
                                                path: E,
                                                position: k,
                                                properties: P
                                            })
                                        }
                                        k = E[E.length - 1] + (S || C ? 1 : 0)
                                    }
                                    if (null == t.at) {
                                        var A = y.current || _e.end(e, []);
                                        ut.select(e, A)
                                    }
                                    f.unref(), y.unref()
                                }
                            }
                        }))
                    },
                    unsetNodes(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Array.isArray(t) || (t = [t]);
                        var r = {};
                        for (var i of t) r[i] = null;
                        ut.setNodes(e, r, n)
                    },
                    unwrapNodes(e, t) {
                        _e.withoutNormalizing(e, (() => {
                            var {
                                mode: n = "lowest",
                                split: r = !1,
                                voids: i = !1
                            } = t, {
                                at: o = e.selection,
                                match: a
                            } = t;
                            if (o) {
                                null == a && (a = He.isPath(o) ? it(e, o) : t => _e.isBlock(e, t)), He.isPath(o) && (o = _e.range(e, o));
                                var s = Ye.isRange(o) ? _e.rangeRef(e, o) : null,
                                    u = _e.nodes(e, {
                                        at: o,
                                        match: a,
                                        mode: n,
                                        voids: i
                                    }),
                                    c = Array.from(u, (t => {
                                        var [, n] = t;
                                        return _e.pathRef(e, n)
                                    })),
                                    l = function(t) {
                                        var n = t.unref(),
                                            [o] = _e.node(e, n),
                                            a = _e.range(e, n);
                                        r && s && (a = Ye.intersection(s.current, a)), ut.liftNodes(e, {
                                            at: a,
                                            match: e => o.children.includes(e),
                                            voids: i
                                        })
                                    };
                                for (var f of c) l(f);
                                s && s.unref()
                            }
                        }))
                    },
                    wrapNodes(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        _e.withoutNormalizing(e, (() => {
                            var {
                                mode: r = "lowest",
                                split: i = !1,
                                voids: o = !1
                            } = n, {
                                match: a,
                                at: s = e.selection
                            } = n;
                            if (s) {
                                if (null == a && (a = He.isPath(s) ? it(e, s) : e.isInline(t) ? t => _e.isInline(e, t) || Ze.isText(t) : t => _e.isBlock(e, t)), i && Ye.isRange(s)) {
                                    var [u, c] = Ye.edges(s), l = _e.rangeRef(e, s, {
                                        affinity: "inward"
                                    });
                                    ut.splitNodes(e, {
                                        at: c,
                                        match: a,
                                        voids: o
                                    }), ut.splitNodes(e, {
                                        at: u,
                                        match: a,
                                        voids: o
                                    }), s = l.unref(), null == n.at && ut.select(e, s)
                                }
                                var f = Array.from(_e.nodes(e, {
                                    at: s,
                                    match: e.isInline(t) ? t => _e.isBlock(e, t) : e => _e.isEditor(e),
                                    mode: "lowest",
                                    voids: o
                                }));
                                for (var [, d] of f) {
                                    var p = Ye.isRange(s) ? Ye.intersection(s, _e.range(e, d)) : s;
                                    if (p) {
                                        var h = Array.from(_e.nodes(e, {
                                            at: p,
                                            match: a,
                                            mode: r,
                                            voids: o
                                        }));
                                        h.length > 0 && function() {
                                            var [n] = h, r = h[h.length - 1], [, i] = n, [, a] = r, s = He.equals(i, a) ? He.parent(i) : He.common(i, a), u = _e.range(e, i, a), c = _e.node(e, s), [l] = c, f = s.length + 1, d = He.next(a.slice(0, f)), p = tt({}, t, {
                                                children: []
                                            });
                                            ut.insertNodes(e, p, {
                                                at: d,
                                                voids: o
                                            }), ut.moveNodes(e, {
                                                at: u,
                                                match: e => l.children.includes(e),
                                                to: d.concat(0),
                                                voids: o
                                            })
                                        }()
                                    }
                                }
                            }
                        }))
                    }
                },
                rt = (e, t) => {
                    if (Ye.isCollapsed(t)) return t.anchor;
                    var [, n] = Ye.edges(t), r = _e.pointRef(e, n);
                    return ut.delete(e, {
                        at: t
                    }), r.unref()
                },
                it = (e, t) => {
                    var [n] = _e.node(e, t);
                    return e => e === n
                };

            function ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function at(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ot(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function st(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var ut = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? st(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, {
                transform(e, t) {
                    e.children = pe(e.children);
                    var n = e.selection && pe(e.selection);
                    switch (t.type) {
                        case "insert_node":
                            var {
                                path: r, node: i
                            } = t, o = Be.parent(e, r), a = r[r.length - 1];
                            if (o.children.splice(a, 0, i), n)
                                for (var [s, u] of Ye.points(n)) n[u] = qe.transform(s, t);
                            break;
                        case "insert_text":
                            var {
                                path: c, offset: l, text: f
                            } = t, d = Be.leaf(e, c), p = d.text.slice(0, l), h = d.text.slice(l);
                            if (d.text = p + f + h, n)
                                for (var [v, g] of Ye.points(n)) n[g] = qe.transform(v, t);
                            break;
                        case "merge_node":
                            var {
                                path: m
                            } = t, b = Be.get(e, m), w = He.previous(m), x = Be.get(e, w), k = Be.parent(e, m), O = m[m.length - 1];
                            if (Ze.isText(b) && Ze.isText(x)) x.text += b.text;
                            else {
                                if (Ze.isText(b) || Ze.isText(x)) throw new Error('Cannot apply a "merge_node" operation at path ['.concat(m, "] to nodes of different interaces: ").concat(b, " ").concat(x));
                                x.children.push(...b.children)
                            }
                            if (k.children.splice(O, 1), n)
                                for (var [E, S] of Ye.points(n)) n[S] = qe.transform(E, t);
                            break;
                        case "move_node":
                            var {
                                path: D, newPath: C
                            } = t;
                            if (He.isAncestor(D, C)) throw new Error("Cannot move a path [".concat(D, "] to new path [").concat(C, "] because the destination is inside itself."));
                            var P = Be.get(e, D),
                                A = Be.parent(e, D),
                                T = D[D.length - 1];
                            A.children.splice(T, 1);
                            var F = He.transform(D, t),
                                j = Be.get(e, He.parent(F)),
                                I = F[F.length - 1];
                            if (j.children.splice(I, 0, P), n)
                                for (var [_, M] of Ye.points(n)) n[M] = qe.transform(_, t);
                            break;
                        case "remove_node":
                            var {
                                path: L
                            } = t, B = L[L.length - 1];
                            if (Be.parent(e, L).children.splice(B, 1), n)
                                for (var [N, R] of Ye.points(n)) {
                                    var z = qe.transform(N, t);
                                    if (null != n && null != z) n[R] = z;
                                    else {
                                        var H = void 0,
                                            W = void 0;
                                        for (var [U, q] of Be.texts(e)) {
                                            if (-1 !== He.compare(q, L)) {
                                                W = [U, q];
                                                break
                                            }
                                            H = [U, q]
                                        }
                                        H ? (N.path = H[1], N.offset = H[0].text.length) : W ? (N.path = W[1], N.offset = 0) : n = null
                                    }
                                }
                            break;
                        case "remove_text":
                            var {
                                path: V, offset: $, text: Y
                            } = t, K = Be.leaf(e, V), J = K.text.slice(0, $), G = K.text.slice($ + Y.length);
                            if (K.text = J + G, n)
                                for (var [Z, X] of Ye.points(n)) n[X] = qe.transform(Z, t);
                            break;
                        case "set_node":
                            var {
                                path: Q, newProperties: ee
                            } = t;
                            if (0 === Q.length) throw new Error("Cannot set properties on the root node!");
                            var te = Be.get(e, Q);
                            for (var ne in ee) {
                                if ("children" === ne || "text" === ne) throw new Error('Cannot set the "'.concat(ne, '" property of nodes!'));
                                var re = ee[ne];
                                null == re ? delete te[ne] : te[ne] = re
                            }
                            break;
                        case "set_selection":
                            var {
                                newProperties: ie
                            } = t;
                            if (null == ie) n = ie;
                            else if (null == n) {
                                if (!Ye.isRange(ie)) throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(JSON.stringify(ie), " when there is no current selection."));
                                n = ie
                            } else Object.assign(n, ie);
                            break;
                        case "split_node":
                            var {
                                path: oe, position: ae, properties: se
                            } = t;
                            if (0 === oe.length) throw new Error('Cannot apply a "split_node" operation at path ['.concat(oe, "] because the root node cannot be split."));
                            var ue, ce = Be.get(e, oe),
                                le = Be.parent(e, oe),
                                fe = oe[oe.length - 1];
                            if (Ze.isText(ce)) {
                                var de = ce.text.slice(0, ae),
                                    ve = ce.text.slice(ae);
                                ce.text = de, ue = Qe({}, ce, {}, se, {
                                    text: ve
                                })
                            } else {
                                var ge = ce.children.slice(0, ae),
                                    me = ce.children.slice(ae);
                                ce.children = ge, ue = Qe({}, ce, {}, se, {
                                    children: me
                                })
                            }
                            if (le.children.splice(fe + 1, 0, ue), n)
                                for (var [ye, be] of Ye.points(n)) n[be] = qe.transform(ye, t)
                    }
                    e.children = he(e.children), e.selection = n ? y(n) ? he(n) : n : null
                }
            }, {}, nt, {}, {
                collapse(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            edge: n = "anchor"
                        } = t,
                        {
                            selection: r
                        } = e;
                    if (r)
                        if ("anchor" === n) ut.select(e, r.anchor);
                        else if ("focus" === n) ut.select(e, r.focus);
                    else if ("start" === n) {
                        var [i] = Ye.edges(r);
                        ut.select(e, i)
                    } else if ("end" === n) {
                        var [, o] = Ye.edges(r);
                        ut.select(e, o)
                    }
                },
                deselect(e) {
                    var {
                        selection: t
                    } = e;
                    t && e.apply({
                        type: "set_selection",
                        properties: t,
                        newProperties: null
                    })
                },
                move(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            selection: n
                        } = e,
                        {
                            distance: r = 1,
                            unit: i = "character",
                            reverse: o = !1
                        } = t,
                        {
                            edge: a = null
                        } = t;
                    if (n) {
                        "start" === a && (a = Ye.isBackward(n) ? "focus" : "anchor"), "end" === a && (a = Ye.isBackward(n) ? "anchor" : "focus");
                        var {
                            anchor: s,
                            focus: u
                        } = n, c = {
                            distance: r,
                            unit: i
                        }, l = {};
                        if (null == a || "anchor" === a) {
                            var f = o ? _e.before(e, s, c) : _e.after(e, s, c);
                            f && (l.anchor = f)
                        }
                        if (null == a || "focus" === a) {
                            var d = o ? _e.before(e, u, c) : _e.after(e, u, c);
                            d && (l.focus = d)
                        }
                        ut.setSelection(e, l)
                    }
                },
                select(e, t) {
                    var {
                        selection: n
                    } = e;
                    if (t = _e.range(e, t), n) ut.setSelection(e, t);
                    else {
                        if (!Ye.isRange(t)) throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(JSON.stringify(t)));
                        e.apply({
                            type: "set_selection",
                            properties: n,
                            newProperties: t
                        })
                    }
                },
                setPoint(e, t, n) {
                    var {
                        selection: r
                    } = e, {
                        edge: i = "both"
                    } = n;
                    if (r) {
                        "start" === i && (i = Ye.isBackward(r) ? "focus" : "anchor"), "end" === i && (i = Ye.isBackward(r) ? "anchor" : "focus");
                        var {
                            anchor: o,
                            focus: a
                        } = r, s = "anchor" === i ? o : a;
                        ut.setSelection(e, {
                            ["anchor" === i ? "anchor" : "focus"]: at({}, s, {}, t)
                        })
                    }
                },
                setSelection(e, t) {
                    var {
                        selection: n
                    } = e, r = {}, i = {};
                    if (n) {
                        for (var o in t)("anchor" === o && null != t.anchor && !qe.equals(t.anchor, n.anchor) || "focus" === o && null != t.focus && !qe.equals(t.focus, n.focus) || "anchor" !== o && "focus" !== o && t[o] !== n[o]) && (r[o] = n[o], i[o] = t[o]);
                        Object.keys(r).length > 0 && e.apply({
                            type: "set_selection",
                            properties: r,
                            newProperties: i
                        })
                    }
                }
            }, {}, {
                delete(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _e.withoutNormalizing(e, (() => {
                        var {
                            reverse: n = !1,
                            unit: r = "character",
                            distance: i = 1,
                            voids: o = !1
                        } = t, {
                            at: a = e.selection,
                            hanging: s = !1
                        } = t;
                        if (a) {
                            if (Ye.isRange(a) && Ye.isCollapsed(a) && (a = a.anchor), qe.isPoint(a)) {
                                var u = _e.void(e, {
                                    at: a,
                                    mode: "highest"
                                });
                                if (!o && u) {
                                    var [, c] = u;
                                    a = c
                                } else {
                                    var l = {
                                        unit: r,
                                        distance: i
                                    };
                                    a = {
                                        anchor: a,
                                        focus: n ? _e.before(e, a, l) || _e.start(e, []) : _e.after(e, a, l) || _e.end(e, [])
                                    }, s = !0
                                }
                            }
                            if (He.isPath(a)) ut.removeNodes(e, {
                                at: a,
                                voids: o
                            });
                            else if (!Ye.isCollapsed(a)) {
                                s || (a = _e.unhangRange(e, a, {
                                    voids: o
                                }));
                                var [f, d] = Ye.edges(a), p = _e.above(e, {
                                    match: t => _e.isBlock(e, t),
                                    at: f,
                                    voids: o
                                }), h = _e.above(e, {
                                    match: t => _e.isBlock(e, t),
                                    at: d,
                                    voids: o
                                }), v = p && h && !He.equals(p[1], h[1]), g = He.equals(f.path, d.path), m = o ? null : _e.void(e, {
                                    at: f,
                                    mode: "highest"
                                }), y = o ? null : _e.void(e, {
                                    at: d,
                                    mode: "highest"
                                });
                                if (m) {
                                    var b = _e.before(e, f);
                                    b && p && He.isAncestor(p[1], b.path) && (f = b)
                                }
                                if (y) {
                                    var w = _e.after(e, d);
                                    w && h && He.isAncestor(h[1], w.path) && (d = w)
                                }
                                var x, k = [];
                                for (var O of _e.nodes(e, {
                                        at: a,
                                        voids: o
                                    })) {
                                    var [E, S] = O;
                                    x && 0 === He.compare(S, x) || (!o && _e.isVoid(e, E) || !He.isCommon(S, f.path) && !He.isCommon(S, d.path)) && (k.push(O), x = S)
                                }
                                var D = Array.from(k, (t => {
                                        var [, n] = t;
                                        return _e.pathRef(e, n)
                                    })),
                                    C = _e.pointRef(e, f),
                                    P = _e.pointRef(e, d);
                                if (!g && !m) {
                                    var A = C.current,
                                        [T] = _e.leaf(e, A),
                                        {
                                            path: F
                                        } = A,
                                        {
                                            offset: j
                                        } = f,
                                        I = T.text.slice(j);
                                    e.apply({
                                        type: "remove_text",
                                        path: F,
                                        offset: j,
                                        text: I
                                    })
                                }
                                for (var _ of D) {
                                    var M = _.unref();
                                    ut.removeNodes(e, {
                                        at: M,
                                        voids: o
                                    })
                                }
                                if (!y) {
                                    var L = P.current,
                                        [B] = _e.leaf(e, L),
                                        {
                                            path: N
                                        } = L,
                                        R = g ? f.offset : 0,
                                        z = B.text.slice(R, d.offset);
                                    e.apply({
                                        type: "remove_text",
                                        path: N,
                                        offset: R,
                                        text: z
                                    })
                                }!g && v && P.current && C.current && ut.mergeNodes(e, {
                                    at: P.current,
                                    hanging: !0,
                                    voids: o
                                });
                                var H = P.unref() || C.unref();
                                null == t.at && H && ut.select(e, H)
                            }
                        }
                    }))
                },
                insertFragment(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _e.withoutNormalizing(e, (() => {
                        var {
                            hanging: r = !1,
                            voids: i = !1
                        } = n, {
                            at: o = e.selection
                        } = n;
                        if (t.length && o) {
                            if (Ye.isRange(o))
                                if (r || (o = _e.unhangRange(e, o)), Ye.isCollapsed(o)) o = o.anchor;
                                else {
                                    var [, a] = Ye.edges(o);
                                    if (!i && _e.void(e, {
                                            at: a
                                        })) return;
                                    var s = _e.pointRef(e, a);
                                    ut.delete(e, {
                                        at: o
                                    }), o = s.unref()
                                }
                            else He.isPath(o) && (o = _e.start(e, o));
                            if (i || !_e.void(e, {
                                    at: o
                                })) {
                                var u = _e.above(e, {
                                    at: o,
                                    match: t => _e.isInline(e, t),
                                    mode: "highest",
                                    voids: i
                                });
                                if (u) {
                                    var [, c] = u;
                                    if (_e.isEnd(e, o, c)) o = _e.after(e, c);
                                    else if (_e.isStart(e, o, c)) {
                                        o = _e.before(e, c)
                                    }
                                }
                                var l = _e.above(e, {
                                        match: t => _e.isBlock(e, t),
                                        at: o,
                                        voids: i
                                    }),
                                    [, f] = l,
                                    d = _e.isStart(e, o, f),
                                    p = _e.isEnd(e, o, f),
                                    h = !d || d && p,
                                    v = !p,
                                    [, g] = Be.first({
                                        children: t
                                    }, []),
                                    [, m] = Be.last({
                                        children: t
                                    }, []),
                                    y = [],
                                    b = t => {
                                        var [n, r] = t;
                                        return !(h && He.isAncestor(r, g) && Me.isElement(n) && !e.isVoid(n) && !e.isInline(n)) && !(v && He.isAncestor(r, m) && Me.isElement(n) && !e.isVoid(n) && !e.isInline(n))
                                    };
                                for (var w of Be.nodes({
                                        children: t
                                    }, {
                                        pass: b
                                    })) w[1].length > 0 && b(w) && y.push(w);
                                var x = [],
                                    k = [],
                                    O = [],
                                    E = !0,
                                    S = !1;
                                for (var [D] of y) Me.isElement(D) && !e.isInline(D) ? (E = !1, S = !0, k.push(D)) : E ? x.push(D) : O.push(D);
                                var [C] = _e.nodes(e, {
                                    at: o,
                                    match: t => Ze.isText(t) || _e.isInline(e, t),
                                    mode: "highest",
                                    voids: i
                                }), [, P] = C, A = _e.isStart(e, o, P), T = _e.isEnd(e, o, P), F = _e.pathRef(e, p ? He.next(f) : f), j = _e.pathRef(e, T ? He.next(P) : P);
                                ut.splitNodes(e, {
                                    at: o,
                                    match: t => S ? _e.isBlock(e, t) : Ze.isText(t) || _e.isInline(e, t),
                                    mode: S ? "lowest" : "highest",
                                    voids: i
                                });
                                var I = _e.pathRef(e, !A || A && T ? He.next(P) : P);
                                if (ut.insertNodes(e, x, {
                                        at: I.current,
                                        match: t => Ze.isText(t) || _e.isInline(e, t),
                                        mode: "highest",
                                        voids: i
                                    }), ut.insertNodes(e, k, {
                                        at: F.current,
                                        match: t => _e.isBlock(e, t),
                                        mode: "lowest",
                                        voids: i
                                    }), ut.insertNodes(e, O, {
                                        at: j.current,
                                        match: t => Ze.isText(t) || _e.isInline(e, t),
                                        mode: "highest",
                                        voids: i
                                    }), !n.at) {
                                    var _;
                                    _ = O.length > 0 ? He.previous(j.current) : k.length > 0 ? He.previous(F.current) : He.previous(I.current);
                                    var M = _e.end(e, _);
                                    ut.select(e, M)
                                }
                                I.unref(), F.unref(), j.unref()
                            }
                        }
                    }))
                },
                insertText(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _e.withoutNormalizing(e, (() => {
                        var {
                            voids: r = !1
                        } = n, {
                            at: i = e.selection
                        } = n;
                        if (i) {
                            if (He.isPath(i) && (i = _e.range(e, i)), Ye.isRange(i))
                                if (Ye.isCollapsed(i)) i = i.anchor;
                                else {
                                    var o = Ye.end(i);
                                    if (!r && _e.void(e, {
                                            at: o
                                        })) return;
                                    var a = _e.pointRef(e, o);
                                    ut.delete(e, {
                                        at: i,
                                        voids: r
                                    }), i = a.unref(), ut.setSelection(e, {
                                        anchor: i,
                                        focus: i
                                    })
                                } if (r || !_e.void(e, {
                                    at: i
                                })) {
                                var {
                                    path: s,
                                    offset: u
                                } = i;
                                e.apply({
                                    type: "insert_text",
                                    path: s,
                                    offset: u,
                                    text: t
                                })
                            }
                        }
                    }))
                }
            });

            function ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ct(Object(n), !0).forEach((function(t) {
                        ve(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ft = () => {
                    var e = {
                        children: [],
                        operations: [],
                        selection: null,
                        marks: null,
                        isInline: () => !1,
                        isVoid: () => !1,
                        onChange: () => {},
                        apply: t => {
                            for (var n of _e.pathRefs(e)) We.transform(n, t);
                            for (var r of _e.pointRefs(e)) Ve.transform(r, t);
                            for (var i of _e.rangeRefs(e)) Ke.transform(i, t);
                            var o = new Set,
                                a = [],
                                s = e => {
                                    if (e) {
                                        var t = e.join(",");
                                        o.has(t) || (o.add(t), a.push(e))
                                    }
                                },
                                u = me.get(e) || [],
                                c = dt(t);
                            for (var l of u) {
                                s(He.transform(l, t))
                            }
                            for (var f of c) s(f);
                            me.set(e, a), ut.transform(e, t), e.operations.push(t), _e.normalize(e), "set_selection" === t.type && (e.marks = null), ye.get(e) || (ye.set(e, !0), Promise.resolve().then((() => {
                                ye.set(e, !1), e.onChange(), e.operations = []
                            })))
                        },
                        addMark: (t, n) => {
                            var {
                                selection: r
                            } = e;
                            if (r)
                                if (Ye.isExpanded(r)) ut.setNodes(e, {
                                    [t]: n
                                }, {
                                    match: Ze.isText,
                                    split: !0
                                });
                                else {
                                    var i = lt({}, _e.marks(e) || {}, {
                                        [t]: n
                                    });
                                    e.marks = i, e.onChange()
                                }
                        },
                        deleteBackward: t => {
                            var {
                                selection: n
                            } = e;
                            n && Ye.isCollapsed(n) && ut.delete(e, {
                                unit: t,
                                reverse: !0
                            })
                        },
                        deleteForward: t => {
                            var {
                                selection: n
                            } = e;
                            n && Ye.isCollapsed(n) && ut.delete(e, {
                                unit: t
                            })
                        },
                        deleteFragment: () => {
                            var {
                                selection: t
                            } = e;
                            t && Ye.isExpanded(t) && ut.delete(e)
                        },
                        getFragment: () => {
                            var {
                                selection: t
                            } = e;
                            return t ? Be.fragment(e, t) : []
                        },
                        insertBreak: () => {
                            ut.splitNodes(e, {
                                always: !0
                            })
                        },
                        insertFragment: t => {
                            ut.insertFragment(e, t)
                        },
                        insertNode: t => {
                            ut.insertNodes(e, t)
                        },
                        insertText: t => {
                            var {
                                selection: n,
                                marks: r
                            } = e;
                            if (n) {
                                if (Ye.isCollapsed(n)) {
                                    var i = _e.above(e, {
                                        match: t => _e.isInline(e, t),
                                        mode: "highest"
                                    });
                                    if (i) {
                                        var [, o] = i;
                                        if (_e.isEnd(e, n.anchor, o)) {
                                            var a = _e.after(e, o);
                                            ut.setSelection(e, {
                                                anchor: a,
                                                focus: a
                                            })
                                        }
                                    }
                                }
                                if (r) {
                                    var s = lt({
                                        text: t
                                    }, r);
                                    ut.insertNodes(e, s)
                                } else ut.insertText(e, t);
                                e.marks = null
                            }
                        },
                        normalizeNode: t => {
                            var [n, r] = t;
                            if (!Ze.isText(n))
                                if (Me.isElement(n) && 0 === n.children.length) {
                                    ut.insertNodes(e, {
                                        text: ""
                                    }, {
                                        at: r.concat(0),
                                        voids: !0
                                    })
                                } else
                                    for (var i = !_e.isEditor(n) && (Me.isElement(n) && (e.isInline(n) || 0 === n.children.length || Ze.isText(n.children[0]) || e.isInline(n.children[0]))), o = 0, a = 0; a < n.children.length; a++, o++) {
                                        var s = n.children[a],
                                            u = n.children[a - 1],
                                            c = a === n.children.length - 1;
                                        if ((Ze.isText(s) || Me.isElement(s) && e.isInline(s)) !== i) ut.removeNodes(e, {
                                            at: r.concat(o),
                                            voids: !0
                                        }), o--;
                                        else if (Me.isElement(s)) {
                                            if (e.isInline(s))
                                                if (null != u && Ze.isText(u)) {
                                                    if (c) {
                                                        ut.insertNodes(e, {
                                                            text: ""
                                                        }, {
                                                            at: r.concat(o + 1),
                                                            voids: !0
                                                        }), o++
                                                    }
                                                } else {
                                                    ut.insertNodes(e, {
                                                        text: ""
                                                    }, {
                                                        at: r.concat(o),
                                                        voids: !0
                                                    }), o++
                                                }
                                        } else null != u && Ze.isText(u) && (Ze.equals(s, u, {
                                            loose: !0
                                        }) ? (ut.mergeNodes(e, {
                                            at: r.concat(o),
                                            voids: !0
                                        }), o--) : "" === u.text ? (ut.removeNodes(e, {
                                            at: r.concat(o - 1),
                                            voids: !0
                                        }), o--) : c && "" === s.text && (ut.removeNodes(e, {
                                            at: r.concat(o),
                                            voids: !0
                                        }), o--))
                                    }
                        },
                        removeMark: t => {
                            var {
                                selection: n
                            } = e;
                            if (n)
                                if (Ye.isExpanded(n)) ut.unsetNodes(e, t, {
                                    match: Ze.isText,
                                    split: !0
                                });
                                else {
                                    var r = lt({}, _e.marks(e) || {});
                                    delete r[t], e.marks = r, e.onChange()
                                }
                        }
                    };
                    return e
                },
                dt = e => {
                    switch (e.type) {
                        case "insert_text":
                        case "remove_text":
                        case "set_node":
                            var {
                                path: t
                            } = e;
                            return He.levels(t);
                        case "insert_node":
                            var {
                                node: n, path: r
                            } = e;
                            return [...He.levels(r), ...Ze.isText(n) ? [] : Array.from(Be.nodes(n), (e => {
                                var [, t] = e;
                                return r.concat(t)
                            }))];
                        case "merge_node":
                            var {
                                path: i
                            } = e;
                            return [...He.ancestors(i), He.previous(i)];
                        case "move_node":
                            var {
                                path: o, newPath: a
                            } = e;
                            if (He.equals(o, a)) return [];
                            var s = [],
                                u = [];
                            for (var c of He.ancestors(o)) {
                                var l = He.transform(c, e);
                                s.push(l)
                            }
                            for (var f of He.ancestors(a)) {
                                var d = He.transform(f, e);
                                u.push(d)
                            }
                            return [...s, ...u];
                        case "remove_node":
                            var {
                                path: p
                            } = e;
                            return [...He.ancestors(p)];
                        case "split_node":
                            var {
                                path: h
                            } = e;
                            return [...He.levels(h), He.next(h)];
                        default:
                            return []
                    }
                }
        },
        28281: function(e, t, n) {
            "use strict";
            var r = n(43368);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                n = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" !== typeof o) throw new Error("Expected function as last argument, not " + o);

                            function a(s) {
                                var u = e[++t],
                                    c = i.call(arguments, 0),
                                    l = c.slice(1),
                                    f = n.length,
                                    d = -1;
                                if (s) o(s);
                                else {
                                    for (; ++d < f;) null !== l[d] && void 0 !== l[d] || (l[d] = n[d]);
                                    n = l, u ? r(u, a).apply(null, n) : o.apply(null, [null].concat(n))
                                }
                            }
                            a.apply(null, [null].concat(n))
                        },
                        use: function(n) {
                            if ("function" !== typeof n) throw new Error("Expected `fn` to be a function, not " + n);
                            return e.push(n), t
                        }
                    };
                return t
            }
        },
        43368: function(e) {
            "use strict";
            var t = [].slice;
            e.exports = function(e, n) {
                var r;
                return function() {
                    var n, a = t.call(arguments, 0),
                        s = e.length > a.length;
                    s && a.push(i);
                    try {
                        n = e.apply(null, a)
                    } catch (u) {
                        if (s && r) throw u;
                        return i(u)
                    }
                    s || (n && "function" === typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() {
                    r || (r = !0, n.apply(null, arguments))
                }

                function o(e) {
                    i(null, e)
                }
            }
        },
        70655: function(e, t, n) {
            "use strict";
            n.d(t, {
                pi: function() {
                    return r
                },
                _T: function() {
                    return i
                },
                pr: function() {
                    return o
                }
            });
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function i(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function o() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }
        },
        18835: function(e, t, n) {
            "use strict";
            var r = n(18869),
                i = n(48738),
                o = n(94470),
                a = n(33310),
                s = n(28281),
                u = n(10939);
            e.exports = function e() {
                var t, n = [],
                    i = s(),
                    y = {},
                    b = -1;
                return w.data = function(e, n) {
                    if ("string" === typeof e) return 2 === arguments.length ? (v("data", t), y[e] = n, w) : l.call(y, e) && y[e] || null;
                    if (e) return v("data", t), y = e, w;
                    return y
                }, w.freeze = x, w.attachers = n, w.use = function(e) {
                    var r;
                    if (v("use", t), null === e || void 0 === e);
                    else if ("function" === typeof e) l.apply(null, arguments);
                    else {
                        if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? u(e) : i(e)
                    }
                    r && (y.settings = o(y.settings || {}, r));
                    return w;

                    function i(e) {
                        u(e.plugins), e.settings && (r = o(r || {}, e.settings))
                    }

                    function s(e) {
                        if ("function" === typeof e) l(e);
                        else {
                            if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? l.apply(null, e) : i(e)
                        }
                    }

                    function u(e) {
                        var t = -1;
                        if (null === e || void 0 === e);
                        else {
                            if ("object" !== typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (; ++t < e.length;) s(e[t])
                        }
                    }

                    function l(e, t) {
                        var r = k(e);
                        r ? (a(r[1]) && a(t) && (t = o(!0, r[1], t)), r[1] = t) : n.push(c.call(arguments))
                    }
                }, w.parse = function(e) {
                    var t, n = u(e);
                    if (x(), p("parse", t = w.Parser), d(t, "parse")) return new t(String(n), n).parse();
                    return t(String(n), n)
                }, w.stringify = function(e, t) {
                    var n, r = u(t);
                    if (x(), h("stringify", n = w.Compiler), g(e), d(n, "compile")) return new n(e, r).compile();
                    return n(e, r)
                }, w.run = O, w.runSync = function(e, t) {
                    var n, i;
                    return O(e, t, o), m("runSync", "run", i), n;

                    function o(e, t) {
                        i = !0, n = t, r(e)
                    }
                }, w.process = E, w.processSync = function(e) {
                    var t, n;
                    return x(), p("processSync", w.Parser), h("processSync", w.Compiler), E(t = u(e), i), m("processSync", "process", n), t;

                    function i(e) {
                        n = !0, r(e)
                    }
                }, w;

                function w() {
                    for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
                    return t.data(o(!0, {}, y)), t
                }

                function x() {
                    var e, r;
                    if (t) return w;
                    for (; ++b < n.length;) !1 !== (e = n[b])[1] && (!0 === e[1] && (e[1] = void 0), "function" === typeof(r = e[0].apply(w, e.slice(1))) && i.use(r));
                    return t = !0, b = 1 / 0, w
                }

                function k(e) {
                    for (var t = -1; ++t < n.length;)
                        if (n[t][0] === e) return n[t]
                }

                function O(e, t, n) {
                    if (g(e), x(), n || "function" !== typeof t || (n = t, t = null), !n) return new Promise(r);

                    function r(r, o) {
                        i.run(e, u(t), (function(t, i, a) {
                            i = i || e, t ? o(t) : r ? r(i) : n(null, i, a)
                        }))
                    }
                    r(null, n)
                }

                function E(e, t) {
                    if (x(), p("process", w.Parser), h("process", w.Compiler), !t) return new Promise(n);

                    function n(n, r) {
                        var i = u(e);
                        f.run(w, {
                            file: i
                        }, (function(e) {
                            e ? r(e) : n ? n(i) : t(null, i)
                        }))
                    }
                    n(null, t)
                }
            }().freeze();
            var c = [].slice,
                l = {}.hasOwnProperty,
                f = s().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, n) {
                    e.run(t.tree, t.file, (function(e, r, i) {
                        e ? n(e) : (t.tree = r, t.file = i, n())
                    }))
                })).use((function(e, t) {
                    var n = e.stringify(t.tree, t.file);
                    void 0 === n || null === n || ("string" === typeof n || i(n) ? ("value" in t.file && (t.file.value = n), t.file.contents = n) : t.file.result = n)
                }));

            function d(e, t) {
                return "function" === typeof e && e.prototype && (function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function p(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function h(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function v(e, t) {
                if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
            }

            function g(e) {
                if (!e || "string" !== typeof e.type) throw new Error("Expected node, got `" + e + "`")
            }

            function m(e, t, n) {
                if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        75432: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;

            function n(e) {
                return e && "object" === typeof e || (e = {}), i(e.line) + ":" + i(e.column)
            }

            function r(e) {
                return e && "object" === typeof e || (e = {}), n(e.start) + "-" + n(e.end)
            }

            function i(e) {
                return e && "number" === typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" !== typeof e) return "";
                if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
                if (t.call(e, "start") || t.call(e, "end")) return r(e);
                if (t.call(e, "line") || t.call(e, "column")) return n(e);
                return ""
            }
        },
        80734: function(e, t, n) {
            "use strict";
            var r = n(75432);

            function i() {}
            e.exports = a, i.prototype = Error.prototype, a.prototype = new i;
            var o = a.prototype;

            function a(e, t, n) {
                var i, o, a;
                "string" === typeof t && (n = t, t = null), i = function(e) {
                    var t, n = [null, null];
                    "string" === typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                    return n
                }(n), o = r(t) || "1:1", a = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (a = t, t = t.start) : a.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = a, this.source = i[0], this.ruleId = i[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        10939: function(e, t, n) {
            "use strict";
            e.exports = n(65905)
        },
        45442: function(e, t, n) {
            "use strict";
            var r = n(28064),
                i = n(54228),
                o = n(48738);
            e.exports = u;
            var a = {}.hasOwnProperty,
                s = ["history", "path", "basename", "stem", "extname", "dirname"];

            function u(e) {
                var t, n;
                if (e) {
                    if ("string" === typeof e || o(e)) e = {
                        contents: e
                    };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof u)) return new u(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < s.length;) t = s[n], a.call(e, t) && (this[t] = e[t]);
                for (t in e) s.indexOf(t) < 0 && (this[t] = e[t])
            }

            function c(e, t) {
                if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
            }

            function l(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty")
            }

            function f(e, t) {
                if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
            }
            u.prototype.toString = function(e) {
                return (this.contents || "").toString(e)
            }, Object.defineProperty(u.prototype, "path", {
                get: function() {
                    return this.history[this.history.length - 1]
                },
                set: function(e) {
                    l(e, "path"), this.path !== e && this.history.push(e)
                }
            }), Object.defineProperty(u.prototype, "dirname", {
                get: function() {
                    return "string" === typeof this.path ? r.dirname(this.path) : void 0
                },
                set: function(e) {
                    f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
                }
            }), Object.defineProperty(u.prototype, "basename", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path) : void 0
                },
                set: function(e) {
                    l(e, "basename"), c(e, "basename"), this.path = r.join(this.dirname || "", e)
                }
            }), Object.defineProperty(u.prototype, "extname", {
                get: function() {
                    return "string" === typeof this.path ? r.extname(this.path) : void 0
                },
                set: function(e) {
                    if (c(e, "extname"), f(this.path, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(u.prototype, "stem", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path, this.extname) : void 0
                },
                set: function(e) {
                    l(e, "stem"), c(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
                }
            })
        },
        65905: function(e, t, n) {
            "use strict";
            var r = n(80734),
                i = n(45442);
            e.exports = i, i.prototype.message = function(e, t, n) {
                var i = new r(e, t, n);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, i.prototype.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }
        },
        28064: function(e, t) {
            "use strict";

            function n(e) {
                var t, n;
                return r(e), t = 47 === e.charCodeAt(0), (n = function(e, t) {
                    var n, r, i = "",
                        o = 0,
                        a = -1,
                        s = 0,
                        u = -1;
                    for (; ++u <= e.length;) {
                        if (u < e.length) n = e.charCodeAt(u);
                        else {
                            if (47 === n) break;
                            n = 47
                        }
                        if (47 === n) {
                            if (a === u - 1 || 1 === s);
                            else if (a !== u - 1 && 2 === s) {
                                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                            r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), a = u, s = 0;
                                            continue
                                        }
                                    } else if (i.length) {
                                    i = "", o = 0, a = u, s = 0;
                                    continue
                                }
                                t && (i = i.length ? i + "/.." : "..", o = 2)
                            } else i.length ? i += "/" + e.slice(a + 1, u) : i = e.slice(a + 1, u), o = u - a - 1;
                            a = u, s = 0
                        } else 46 === n && s > -1 ? s++ : s = -1
                    }
                    return i
                }(e, !t)).length || t || (n = "."), n.length && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
            }

            function r(e) {
                if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            t.basename = function(e, t) {
                var n, i, o, a, s = 0,
                    u = -1;
                if (void 0 !== t && "string" !== typeof t) throw new TypeError('"ext" argument must be a string');
                if (r(e), n = e.length, void 0 === t || !t.length || t.length > e.length) {
                    for (; n--;)
                        if (47 === e.charCodeAt(n)) {
                            if (o) {
                                s = n + 1;
                                break
                            }
                        } else u < 0 && (o = !0, u = n + 1);
                    return u < 0 ? "" : e.slice(s, u)
                }
                if (t === e) return "";
                i = -1, a = t.length - 1;
                for (; n--;)
                    if (47 === e.charCodeAt(n)) {
                        if (o) {
                            s = n + 1;
                            break
                        }
                    } else i < 0 && (o = !0, i = n + 1), a > -1 && (e.charCodeAt(n) === t.charCodeAt(a--) ? a < 0 && (u = n) : (a = -1, u = i));
                s === u ? u = i : u < 0 && (u = e.length);
                return e.slice(s, u)
            }, t.dirname = function(e) {
                var t, n, i;
                if (r(e), !e.length) return ".";
                t = -1, i = e.length;
                for (; --i;)
                    if (47 === e.charCodeAt(i)) {
                        if (n) {
                            t = i;
                            break
                        }
                    } else n || (n = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            }, t.extname = function(e) {
                var t, n, i, o = -1,
                    a = 0,
                    s = -1,
                    u = 0;
                r(e), i = e.length;
                for (; i--;)
                    if (47 !== (n = e.charCodeAt(i))) s < 0 && (t = !0, s = i + 1), 46 === n ? o < 0 ? o = i : 1 !== u && (u = 1) : o > -1 && (u = -1);
                    else if (t) {
                    a = i + 1;
                    break
                }
                if (o < 0 || s < 0 || 0 === u || 1 === u && o === s - 1 && o === a + 1) return "";
                return e.slice(o, s)
            }, t.join = function() {
                var e, t = -1;
                for (; ++t < arguments.length;) r(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
                return void 0 === e ? "." : n(e)
            }, t.sep = "/"
        },
        54228: function(e, t) {
            "use strict";
            t.cwd = function() {
                return "/"
            }
        },
        11591: function(e) {
            "use strict";
            e.exports = JSON.parse('["ase","art","bmp","blp","cd5","cit","cpt","cr2","cut","dds","dib","djvu","egt","exif","gif","gpl","grf","icns","ico","iff","jng","jpeg","jpg","jfif","jp2","jps","lbm","max","miff","mng","msp","nitf","ota","pbm","pc1","pc2","pc3","pcf","pcx","pdn","pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm","pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif","vtf","xbm","xcf","xpm","3dv","amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","gbr","odg","svg","stl","vrml","x3d","sxd","v2d","vnd","wmf","emf","art","xar","png","webp","jxr","hdp","wdp","cur","ecw","iff","lbm","liff","nrrd","pam","pcx","pgf","sgi","rgb","rgba","bw","int","inta","sid","ras","sun","tga"]')
        }
    }
]);