(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        57792: function(t, e, n) {
            "use strict";
            n(67294);
            var o = n(94184),
                i = n.n(o),
                a = n(85893);
            e.Z = function(t) {
                var e = t.loading;
                return (0, a.jsx)("div", {
                    className: i()("loader-wrapper", {
                        "is-active": e
                    }),
                    children: (0, a.jsx)("div", {
                        className: "loader-box",
                        children: (0, a.jsx)("div", {
                            className: "loader is-loading"
                        })
                    })
                })
            }
        },
        33669: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return m
                }
            });
            var o = n(67294),
                i = n(45051),
                a = n(89447),
                r = n(20905),
                l = n(83789),
                d = n(92809);

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function(e) {
                        (0, d.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var s = function t(e, n, o) {
                    var i;
                    if (null === e || void 0 === e || !e.page_id) return {};
                    var a = (0, d.Z)({}, e.page_id, {
                        id: e.page_id,
                        path: n,
                        name: null === o || void 0 === o || null === (i = o[e.page_id]) || void 0 === i ? void 0 : i.name
                    });
                    return e.children ? (Object.keys(e.children).forEach((function(i) {
                        a = c(c({}, a), t(e.children[i], [].concat((0, l.Z)(n), [i]), o))
                    })), a) : a
                },
                p = n(85893),
                _ = function(t) {
                    var e = t.children,
                        n = t.spaceSlug,
                        i = t.routes,
                        l = t.pages,
                        d = t.rendererDomain,
                        u = t.host,
                        c = (0, o.useMemo)((function() {
                            return s(i, [], l)
                        }), [i, l]),
                        _ = function(t, e, o) {
                            var i = e && o && null !== c && void 0 !== c && c[o] ? null === c || void 0 === c ? void 0 : c[o] : null,
                                a = i && i.path ? "/".concat(i.path.join("/")) : t;
                            return a = null !== u && void 0 !== u && u.endsWith(d) ? "/".concat(n).concat(a) : a, a = e ? a : t
                        },
                        v = function(t) {
                            if (!t) return "";
                            var e = t.type === r.bF.IMAGE ? t[r.Q_.HREF] : t[r.Q_.URL];
                            return _(e, t[r.Q_.INTERNAL_LINK], t[r.Q_.PAGE_ID])
                        };
                    return (0, p.jsx)(a.Z.Provider, {
                        value: {
                            pagesPaths: c,
                            getURL: v,
                            getURLRaw: _,
                            getEditorURL: v
                        },
                        children: e
                    })
                },
                v = o.memo(_),
                m = function(t) {
                    var e = t.children,
                        n = t.space,
                        o = t.host;
                    return n ? (0, p.jsx)(v, {
                        spaceSlug: n.slug,
                        routes: n.routes,
                        rendererDomain: i.A2,
                        host: o,
                        children: e
                    }) : (0, p.jsx)(p.Fragment, {
                        children: e
                    })
                }
        },
        47990: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return c
                }
            });
            n(67294);
            var o, i, a = n(41664),
                r = n(45051),
                l = n(47096),
                d = n.n(l);
            ! function(t) {
                t.OWNER = "owner", t.ADMIN = "admin", t.WRITER = "writer", t.READER = "reader"
            }(o || (o = {})),
            function(t) {
                t.ACTIVE = "active", t.INACTIVE = "inactive"
            }(i || (i = {}));
            var u = n(85893),
                c = function(t) {
                   
                }
        },
        45051: function(t, e, n) {
            "use strict";
            n.d(e, {
                bG: function() {
                    return o
                },
                A2: function() {
                    return i
                },
                Q3: function() {
                    return a
                },
                c1: function() {
                    return r
                },
                PJ: function() {
                    return l
                },
                i5: function() {
                    return d
                },
                gE: function() {
                    return u
                },
                oQ: function() {
                    return c
                },
                og: function() {
                    return s
                },
                V9: function() {
                    return p
                },
                Tl: function() {
                    return _
                },
                Yu: function() {
                    return v
                },
                f4: function() {
                    return m
                }
            });
            var o = "https://api.typedream.com/v0",
                i = "typedream.site",
                a = "https://typedream.sfo3.digitaloceanspaces.com",
                r = "https://typedream-assets.sfo3.digitaloceanspaces.com",
                l = "https://analytics.typedream.com",
                d = "Typedream",
                u = "@typedreamHQ",
                c = "/images/logo@100.png",
                s = "https://typedream.com",
                p = "https://build.typedream.com",
                _ = "/images/favicon.ico",
                v = "A website made with Typedream.",
                m = (Object.freeze({
                    initial: 1,
                    loading: 2,
                    error: 3,
                    ready: 4
                }), "prod_IxLembDxN6fLlK")
        },
        26270: function(t, e, n) {
            "use strict";
            n(67294);
            var o = n(9008),
                i = n(85893);
            e.Z = function(t) {
                var e, n = t.space;
                return null !== n && void 0 !== n && null !== (e = n.metadata) && void 0 !== e && e.analytics_opt_out ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)(o.default, {
                    children: [(0, i.jsx)("script", {
                        async: !0,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-545J5KJLB9"
                    }), (0, i.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-545J5KJLB9');\n      "
                        }
                    })]
                })
            }
        },
        5373: function(t, e, n) {
            "use strict";
            n(67294);
            var o = n(9008),
                i = n(25935),
                a = n(85893);
            e.Z = function(t) {
                var e = t.code,
                    n = t.head;
                return e ? n ? (0, a.jsx)(o.default, {
                    children: (0, i.ZP)(e)
                }) : (0, a.jsx)(a.Fragment, {
                    children: (0, i.ZP)(e)
                }) : (0, a.jsx)(a.Fragment, {})
            }
        },
        57235: function(t, e, n) {
            "use strict";
            n(67294);
            var o = n(9008),
                i = n(45051),
                a = n(85893);
            e.Z = function(t) {
                var e, n, r, l, d, u, c, s, p, _, v, m, E, g, I, f, N, L, T, C, O, A, h, R, b, D, G, j, x, H, y, w, M, P, B, k, U, S, Z, K, F, Q, V, W, Y, J, z, q, X, $, tt, et, nt = t.space,
                    ot = t.page,
                    it = t.url,
                    at = (null === nt || void 0 === nt || null === (e = nt.metadata) || void 0 === e || null === (n = e.metatags) || void 0 === n ? void 0 : n.title) || (null === nt || void 0 === nt ? void 0 : nt.name) || i.i5,
                    rt = (null === nt || void 0 === nt || null === (r = nt.metadata) || void 0 === r || null === (l = r.metatags) || void 0 === l ? void 0 : l.description) || i.Yu,
                    lt = (null === nt || void 0 === nt ? void 0 : nt.icon) || i.Tl,
                    dt = (null === nt || void 0 === nt ? void 0 : nt.icon) || i.oQ,
                    ut = (null === ot || void 0 === ot || null === (d = ot.metadata) || void 0 === d || null === (u = d.metatags) || void 0 === u ? void 0 : u.title) || (null === ot || void 0 === ot ? void 0 : ot.name),
                    ct = null === ot || void 0 === ot || null === (c = ot.metadata) || void 0 === c || null === (s = c.metatags) || void 0 === s ? void 0 : s.description,
                    st = (null === nt || void 0 === nt || null === (p = nt.metadata) || void 0 === p || null === (_ = p.facebook) || void 0 === _ ? void 0 : _.title) || (null === nt || void 0 === nt || null === (v = nt.metadata) || void 0 === v || null === (m = v.metatags) || void 0 === m ? void 0 : m.title) || (null === nt || void 0 === nt ? void 0 : nt.name) || i.i5,
                    pt = (null === nt || void 0 === nt || null === (E = nt.metadata) || void 0 === E || null === (g = E.facebook) || void 0 === g ? void 0 : g.description) || (null === nt || void 0 === nt || null === (I = nt.metadata) || void 0 === I || null === (f = I.metatags) || void 0 === f ? void 0 : f.description) || i.Yu,
                    _t = null === nt || void 0 === nt || null === (N = nt.metadata) || void 0 === N || null === (L = N.facebook) || void 0 === L ? void 0 : L.image,
                    vt = (null === nt || void 0 === nt ? void 0 : nt.name) || i.i5,
                    mt = (null === ot || void 0 === ot || null === (T = ot.metadata) || void 0 === T || null === (C = T.facebook) || void 0 === C ? void 0 : C.title) || (null === ot || void 0 === ot || null === (O = ot.metadata) || void 0 === O || null === (A = O.metatags) || void 0 === A ? void 0 : A.title) || (null === ot || void 0 === ot ? void 0 : ot.name),
                    Et = (null === ot || void 0 === ot || null === (h = ot.metadata) || void 0 === h || null === (R = h.facebook) || void 0 === R ? void 0 : R.description) || (null === ot || void 0 === ot || null === (b = ot.metadata) || void 0 === b || null === (D = b.metatags) || void 0 === D ? void 0 : D.description),
                    gt = null === ot || void 0 === ot || null === (G = ot.metadata) || void 0 === G || null === (j = G.facebook) || void 0 === j ? void 0 : j.image,
                    It = (null === nt || void 0 === nt || null === (x = nt.metadata) || void 0 === x || null === (H = x.twitter) || void 0 === H ? void 0 : H.title) || (null === nt || void 0 === nt || null === (y = nt.metadata) || void 0 === y || null === (w = y.metatags) || void 0 === w ? void 0 : w.title) || (null === nt || void 0 === nt ? void 0 : nt.name) || i.i5,
                    ft = (null === nt || void 0 === nt || null === (M = nt.metadata) || void 0 === M || null === (P = M.twitter) || void 0 === P ? void 0 : P.description) || (null === nt || void 0 === nt || null === (B = nt.metadata) || void 0 === B || null === (k = B.metatags) || void 0 === k ? void 0 : k.description) || i.Yu,
                    Nt = (null === nt || void 0 === nt || null === (U = nt.metadata) || void 0 === U || null === (S = U.twitter) || void 0 === S ? void 0 : S.username) || i.gE,
                    Lt = null === nt || void 0 === nt || null === (Z = nt.metadata) || void 0 === Z || null === (K = Z.twitter) || void 0 === K ? void 0 : K.image,
                    Tt = (null === ot || void 0 === ot || null === (F = ot.metadata) || void 0 === F || null === (Q = F.twitter) || void 0 === Q ? void 0 : Q.title) || (null === ot || void 0 === ot || null === (V = ot.metadata) || void 0 === V || null === (W = V.metatags) || void 0 === W ? void 0 : W.title) || (null === ot || void 0 === ot ? void 0 : ot.name),
                    Ct = (null === ot || void 0 === ot || null === (Y = ot.metadata) || void 0 === Y || null === (J = Y.twitter) || void 0 === J ? void 0 : J.description) || (null === ot || void 0 === ot || null === (z = ot.metadata) || void 0 === z || null === (q = z.metatags) || void 0 === q ? void 0 : q.description),
                    Ot = null === ot || void 0 === ot || null === (X = ot.metadata) || void 0 === X || null === ($ = X.twitter) || void 0 === $ ? void 0 : $.username,
                    At = null === ot || void 0 === ot || null === (tt = ot.metadata) || void 0 === tt || null === (et = tt.twitter) || void 0 === et ? void 0 : et.image;
                return (0, a.jsxs)(o.default, {
                    children: [(0, a.jsx)("title", {
                        children: ut || at
                    }), (0, a.jsx)("meta", {
                        name: "description",
                        content: ct || rt
                    }), (0, a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        href: lt
                    }), (0, a.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: dt
                    }), (0, a.jsx)("meta", {
                        property: "og:url",
                        content: it
                    }), (0, a.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: mt || st
                    }), (0, a.jsx)("meta", {
                        property: "og:description",
                        content: Et || pt
                    }), (0, a.jsx)("meta", {
                        property: "og:site_name",
                        content: vt
                    }), (gt || _t) && (0, a.jsx)("meta", {
                        property: "og:image",
                        content: gt || _t
                    }), (0, a.jsx)("meta", {
                        name: "twitter:card",
                        content: At || Lt ? "summary_large_image" : "summary"
                    }), (0, a.jsx)("meta", {
                        name: "twitter:site",
                        content: Ot || Nt
                    }), (0, a.jsx)("meta", {
                        name: "twitter:title",
                        content: Tt || It
                    }), (0, a.jsx)("meta", {
                        name: "twitter:description",
                        content: Ct || ft
                    }), (At || Lt) && (0, a.jsx)("meta", {
                        name: "twitter:image",
                        content: At || Lt
                    })]
                })
            }
        },
        53316: function(t, e, n) {
            "use strict";
            var o = n(92809),
                i = (n(67294), n(94184)),
                a = n.n(i),
                r = n(35031),
                l = n(81054),
                d = n.n(l),
                u = n(85893);
            e.Z = function(t) {
                var e, n = t.className,
                    i = t.icon,
                    l = t.children,
                    c = t.top,
                    s = t.bottom,
                    p = t.left,
                    _ = t.right,
                    v = t.open,
                    m = t.onClose;
                return (0, u.jsxs)("div", {
                    className: a()(d().popupContainer, n, (e = {}, (0, o.Z)(e, d().popupContainerTop, c), (0, o.Z)(e, d().popupContainerBottom, s), (0, o.Z)(e, d().popupContainerRight, _), (0, o.Z)(e, d().popupContainerLeft, p), (0, o.Z)(e, d().popupContainerTopOpen, v && c), (0, o.Z)(e, d().popupContainerBottomOpen, v && s), (0, o.Z)(e, d().popupContainerCenter, !_ && !p), e)),
                    children: [(0, u.jsx)("div", {
                        className: d().icon,
                        children: i
                    }), (0, u.jsx)("div", {
                        className: d().content,
                        children: l
                    }), (0, u.jsx)("div", {
                        role: "none",
                        className: a()(d().iconClose, "with-text-color"),
                        onClick: m,
                        children: (0, u.jsx)(r.X, {
                            size: 20
                        })
                    })]
                })
            }
        },
        89447: function(t, e, n) {
            "use strict";
            var o = {
                    pagesPaths: null,
                    getURL: function() {
                        return ""
                    },
                    getURLRaw: function() {
                        return ""
                    },
                    getEditorURL: function() {
                        return ""
                    }
                },
                i = (0, n(67294).createContext)(o);
            e.Z = i
        },
        20905: function(t, e, n) {
            "use strict";
            n.d(e, {
                _i: function() {
                    return i
                },
                bF: function() {
                    return a
                },
                BB: function() {
                    return _
                },
                Cs: function() {
                    return v
                },
                RZ: function() {
                    return m
                },
                m: function() {
                    return E
                },
                gl: function() {
                    return l
                },
                Q_: function() {
                    return d
                },
                OJ: function() {
                    return u
                },
                JR: function() {
                    return c
                },
                zH: function() {
                    return s
                },
                A4: function() {
                    return p
                },
                iD: function() {
                    return f
                },
                cT: function() {
                    return N
                },
                fC: function() {
                    return L
                },
                b1: function() {
                    return T
                },
                wf: function() {
                    return g
                },
                e1: function() {
                    return I
                }
            });
            var o, i, a, r = n(92809);
            ! function(t) {
                t.BOLD = "bold", t.ITALIC = "italic", t.UNDERLINED = "underline", t.CODE = "code"
            }(i || (i = {})),
            function(t) {
                t.PARAGRAPH = "p", t.HEADING1 = "h1", t.HEADING2 = "h2", t.HEADING3 = "h3", t.NUMBERED_LIST = "ol", t.BULLETED_LIST = "ul", t.LIST_ITEM = "li", t.TODO_LIST = "action_item", t.CODE_BLOCK = "code_block", t.BLOCKQUOTE = "blockquote", t.LINK = "a", t.IMAGE = "img", t.COLUMN = "column", t.COLUMN_ITEM = "column_item", t.BUTTON = "button", t.ALIGN_LEFT = "align_left", t.ALIGN_CENTER = "align_center", t.ALIGN_RIGHT = "align_right", t.MEDIA_EMBED = "media_embed", t.DIVIDER = "divider", t.CONTAINER = "container", t.SECTION_TEMPLATE = "section_template", t.SPACER = "spacer"
            }(a || (a = {}));
            var l, d, u, c, s, p, _ = [a.PARAGRAPH, a.HEADING1, a.HEADING2, a.HEADING3, a.NUMBERED_LIST, a.BULLETED_LIST, a.LIST_ITEM, a.TODO_LIST, a.CODE_BLOCK, a.BLOCKQUOTE, a.LINK, a.BUTTON],
                v = [a.NUMBERED_LIST, a.BULLETED_LIST],
                m = [a.LINK, a.BUTTON, a.CONTAINER, a.IMAGE],
                E = [a.ALIGN_LEFT, a.ALIGN_CENTER, a.ALIGN_RIGHT];
            ! function(t) {
                t.BLOCK = "block", t.LIST = "list"
            }(l || (l = {})),
            function(t) {
                t.HREF = "href", t.OPEN_OPTIONS = "openOptions", t.OPTION_INDEX = "optionIndex", t.CODE_LANGUAGE = "code_language", t.URL = "url", t.WIDTH = "width", t.HEIGHT = "height", t.WIDTH_MAX = "width_max", t.BACKGROUND = "background", t.BACKGROUND_IMAGE = "backgroundImage", t.COLOR = "color", t.GRADIENT = "gradient", t.ALIGN = "align", t.VERTICAL_ALIGN = "vertical_align", t.STYLE = "style", t.ICON = "icon", t.HTML = "html", t.FILE = "file", t.KEEP_ASPECT_RATIO = "keep_aspect_ratio", t.ASPECT_RATIO = "aspect_ratio", t.INTERNAL_LINK = "internal_link", t.PAGE_ID = "page_id", t.OPEN_IN_NEW_TAB = "open_in_new_tab", t.MOBILE_HIDE = "mobile_hide", t.MOBILE_DIRECTION = "mobile_direction", t.MOBILE_REVERSE_COLUMNS = "mobile_reverse_columns"
            }(d || (d = {})),
            function(t) {
                t.TYPE = "data-slate-type", t.URL = "data-slate-url", t.BACKGROUND = "data-slate-background", t.BACKGROUND_IMAGE = "data-slate-background-image", t.HEIGHT = "data-slate-height", t.WIDTH = "data-slate-width", t.WIDTH_MAX = "data-slate-width-max", t.ALIGN = "data-slate-align", t.VERTICAL_ALIGN = "data-slate-vertical-align", t.STYLE = "data-slate-style", t.ASPECT_RATIO = "data-slate-aspect-ratio", t.HREF = "data-slate-href", t.INTERNAL_LINK = "data-slate-internal-link", t.PAGE_ID = "data-slate-page-id", t.COLOR = "data-slate-color", t.ICON = "data-slate-icon", t.HTML = "data-slate-html", t.FILE = "data-slate-file", t.GRADIENT = "data-slate-gradient", t.OPEN_IN_NEW_TAB = "data-slate-open-in-new-tab", t.MOBILE_HIDE = "data-slate-mobile-hide", t.MOBILE_DIRECTION = "data-slate-mobile-direction", t.MOBILE_REVERSE_COLUMNS = "data-slate-mobile-reverse-columns", t.KEEP_ASPECT_RATIO = "data-slate-keep-aspect-ratio"
            }(u || (u = {})),
            function(t) {
                t.HORIZONTAL = "direction_horizontal", t.VERTICAL = "direction_vertical"
            }(c || (c = {})),
            function(t) {
                t.ALIGN_LEFT = "align_left", t.ALIGN_CENTER = "align_center", t.ALIGN_RIGHT = "align_right", t.COLUMN_DYNAMIC = "column_dynamic"
            }(s || (s = {})),
            function(t) {
                t.ALIGN_START = "align_start", t.ALIGN_CENTER = "align_center", t.ALIGN_END = "align_end"
            }(p || (p = {}));
            var g, I, f = s.ALIGN_LEFT,
                N = p.ALIGN_CENTER,
                L = (o = {}, (0, r.Z)(o, a.COLUMN, s.COLUMN_DYNAMIC), (0, r.Z)(o, a.IMAGE, s.ALIGN_CENTER), o),
                T = (0, r.Z)({}, a.COLUMN, p.ALIGN_CENTER);
            ! function(t) {
                t.PLAIN = "plain", t.CARD = "card"
            }(g || (g = {})),
            function(t) {
                t.IMAGE = "image", t.EMOJI = "emoji", t.ICON = "icon"
            }(I || (I = {}))
        },
        47096: function(t) {
           
        },
    
         
        64476: function(t) {
            t.exports = {
                container: "Home_container__1EcsU",
                main: "Home_main__1x8gC",
                mainGradient: "Home_mainGradient__2K25j",
                display: "Home_display__1NH07",
                bar: "Home_bar__1i_gp",
                dot: "Home_dot__QE51i",
                sidebar: "Home_sidebar__3Kr5a",
                sidebarMiddle: "Home_sidebarMiddle__2eZoL",
                sidebarItem: "Home_sidebarItem__2ueiF",
                sidebarItemNoHover: "Home_sidebarItemNoHover__ZmufP",
                sidebarBlock: "Home_sidebarBlock__3MSti",
                sidebarTitle: "Home_sidebarTitle__18qC6",
                navbar: "Home_navbar__14ZRa",
                navbarColumn: "Home_navbarColumn__4HvBw",
                navbarItem: "Home_navbarItem__28VhZ",
                darkModeToggleContainer: "Home_darkModeToggleContainer__XeRQz",
                darkModeToggle: "Home_darkModeToggle__3pa9a",
                box: "Home_box__1Ri2p"
            }
        }
    }
]);