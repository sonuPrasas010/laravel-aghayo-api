var gvjs_mT = "COUNTRIES",
    gvjs_nT = "Data has no columns.",
    gvjs_oT = "Geocoding failed for all data points",
    gvjs_pT =
        "The columns type does not match the supported data format. See documentation for supported formats.",
    gvjs_qT = "countries",
    gvjs_rT = "datalessRegionColor",
    gvjs_sT = "defaultColor",
    gvjs_tT = "enableScrollWheel",
    gvjs_uT = "hybrid",
    gvjs_vT = "mapType",
    gvjs_wT = "provinces",
    gvjs_xT = "region",
    gvjs_yT = "resolution",
    gvjs_zT = "showLine",
    gvjs_AT = "useLargeControl",
    gvjs_BT = "useMapTypeControl",
    gvjs_CT = "world";
function gvjs_DT(a, b, c) {
    if (gvjs_r(b) && ((b = gvjs_0e(b)), b.bounds)) {
        var d = b.bounds;
        b.bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(d.lo.lat, d.lo.lng),
            new google.maps.LatLng(d.hi.lat, d.hi.lng)
        );
    }
    a.yC.geocode(b, c);
}
function gvjs_ET(a, b, c) {
    var d = gvjs_Hi(b),
        e = a.Fw.get(d);
    null != e &&
        gvjs_u(e, function (f) {
            f.MG || f.finish(b, c);
        });
    a.yx.delete(d);
    a.Fw.delete(d);
}
gvjs_Al.prototype.FI = gvjs_V(23, function (a, b, c) {
    var d = 0;
    if (c === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) d = 520;
    else if (c === google.maps.GeocoderStatus.OK) {
        var e = gvjs_Hi(a);
        if (!b || !c) throw Error("There must be a response and status here.");
        b = { response: b, status: c };
        this.cache[e] = b;
        gvjs_ET(this, a, b);
    } else gvjs_ET(this, a, { response: null, status: c });
    gvjs_pl(this.aZ.bind(this), d, this);
});
gvjs_Al.prototype.aZ = gvjs_V(22, function () {
    if (0 !== this.cE.Cd() || 0 !== this.yx.size) {
        var a =
                0 < this.yx.size
                    ? gvjs_Gi(this.yx.values().next().value)
                    : this.cE.peek(),
            b = gvjs_Hi(a);
        if (b in this.cache) {
            this.Fw.get(b);
            var c = this.cache[b];
            gvjs_Ux(this.cE);
            this.FI(a, c.response, c.status);
            this.Fw.delete(b);
        } else
            0 === this.yx.size && 0 < this.cE.Cd()
                ? (gvjs_Ux(this.cE),
                  (c = this.Fw.get(b)),
                  gvjs_Ge(c, function (d) {
                      return d.MG;
                  })
                      ? this.FI(a, null, null)
                      : (this.yx.add(b),
                        gvjs_DT(this, a, this.FI.bind(this, a))))
                : 0 < this.yx.size && gvjs_DT(this, a, this.FI.bind(this, a));
    }
});
gvjs_rl.prototype.yN = gvjs_V(21, function (a) {
    this.Wp();
    gvjs_tl(this, !0, a);
});
function gvjs_bja(a, b) {
    gvjs_u(b.St, function (c) {
        var d = gvjs_Hi(c);
        d in a.cache
            ? b.finish(c, a.cache[d])
            : (a.Fw.has(d) || (a.cE.enqueue(c), a.Fw.set(d, [])),
              a.Fw.get(d).push(b));
    });
    a.aZ();
}
function gvjs_cja(a) {
    var b = gvjs_8f(gvjs_Ed, a.ownerDocument && a.ownerDocument.defaultView);
    b && a.setAttribute(gvjs_qd, b);
}
function gvjs_dja(a) {
    var b = (a || document).getElementsByTagName("HEAD");
    return b && 0 !== b.length ? b[0] : a.documentElement;
}
function gvjs_FT(a, b, c) {
    null != c && gvjs_p.clearTimeout(c);
    a.onload = gvjs_ke;
    a.onerror = gvjs_ke;
    a.onreadystatechange = gvjs_ke;
    b &&
        window.setTimeout(function () {
            gvjs_kh(a);
        }, 0);
}
function gvjs_pba() {
    if (this && this.jfa) {
        var a = this.jfa;
        a && "SCRIPT" == a.tagName && gvjs_FT(a, !0, this.zg);
    }
}
function gvjs_GT(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    gvjs_ve.call(this, c);
    this.code = a;
}
gvjs_t(gvjs_GT, gvjs_ve);
function gvjs_eja(a) {
    var b = { timeout: 3e4, attributes: { async: !1, defer: !1 } },
        c = b.document || document,
        d = gvjs_ef(a),
        e = new gvjs_4g(c).createElement("SCRIPT"),
        f = { jfa: e, zg: void 0 },
        g = new gvjs_rl(f),
        h = null,
        k = null != b.timeout ? b.timeout : 5e3;
    0 < k &&
        ((h = window.setTimeout(function () {
            gvjs_FT(e, !0);
            var l = new gvjs_GT(1, "Timeout reached for loading script " + d);
            g.Wp();
            gvjs_tl(g, !1, l);
        }, k)),
        (f.zg = h));
    e.onload = e.onreadystatechange = function () {
        (e.readyState && "loaded" != e.readyState && e.readyState != gvjs_Hb) ||
            (gvjs_FT(e, b.tCa || !1, h), g.yN(null));
    };
    e.onerror = function () {
        gvjs_FT(e, !0, h);
        var l = new gvjs_GT(0, "Error while loading script " + d);
        g.Wp();
        gvjs_tl(g, !1, l);
    };
    f = b.attributes || {};
    gvjs_2e(f, { type: "text/javascript", charset: "UTF-8" });
    gvjs_8g(e, f);
    e.src = gvjs_ff(a);
    gvjs_cja(e);
    gvjs_dja(c).appendChild(e);
    return g;
}
function gvjs_fja(a) {
    var b = b || {};
    a = gvjs_Vy(gvjs_qba, a, b);
    var c = gvjs_eja(a);
    return new Promise(function (d) {
        gvjs_wl(c, d, null, void 0);
    });
}
var gvjs_HT = [];
function gvjs_IT() {
    return !!gvjs_je("google.maps.DirectionsService");
}
function gvjs_JT(a, b) {
    function c() {
        if (gvjs_IT()) {
            var d = gvjs_HT;
            gvjs_HT = [];
            gvjs_u(d, function (e) {
                e();
            });
        } else throw Error("Error: cannot load Maps API.");
    }
    gvjs_IT()
        ? a()
        : (gvjs_HT.push(a),
          1 === gvjs_HT.length &&
              ((b = b || gvjs_je("google.visualization.mapsApiKey")),
              "" === b
                  ? a({ Sma: !0 })
                  : gvjs_fja({ key: typeof b === gvjs_l ? b : "" }).then(c)));
}
function gvjs_KT(a, b, c) {
    this.yN = b;
    this.TK = 0;
    this.MG = !1;
    this.St = a || [];
    this.IS = new Map();
    this.Mka = c || this.St.length;
}
gvjs_KT.prototype.cancel = function () {
    this.MG = !0;
};
gvjs_KT.prototype.finish = function (a, b) {
    a = gvjs_Hi(a);
    this.IS.has(a) || this.IS.set(a, b);
    b = [];
    if (!this.MG) {
        a = this.St.length;
        for (var c = this.TK; c < a; c++) {
            var d = gvjs_Hi(this.St[c]);
            if (!this.IS.has(d)) break;
            d = this.IS.get(d);
            null != d && (d = d.response);
            b.push(d);
        }
        (b.length < this.Mka && this.TK + b.length < a) ||
            ((this.TK += b.length),
            this.yN(b),
            this.TK >= this.St.length && this.cancel());
    }
};
function gvjs_LT() {
    this.St = [];
    this.yC = null;
}
gvjs_LT.prototype.add = function (a) {
    this.St.push(a);
};
gvjs_LT.prototype.create = function (a, b, c, d) {
    var e = this;
    null != this.yC
        ? ((d = new gvjs_KT(a, b, c)), this.add(d), gvjs_bja(this.yC, d))
        : gvjs_JT(function (f) {
              f = void 0 === f ? {} : f;
              (f && f.Sma) ||
                  (null == e.yC && (e.yC = gvjs_Al.Lc()), e.create(a, b, c));
          }, d);
};
gvjs_LT.prototype.cancel = function () {
    gvjs_u(this.St, function (a) {
        a.cancel();
    });
    this.St = [];
};
var gvjs_MT = {},
    gvjs_NT = "https://www.gstatic.com/charts/regioncoder/0/";
function gvjs_OT(a) {
    this.Pma = a;
}
function gvjs_PT(a) {
    gvjs_QT = a;
    gvjs_NT = "https://www.gstatic.com/charts/regioncoder/" + a + "/";
}
function gvjs_RT(a, b) {
    a = gvjs_kf(a.toLowerCase());
    a = encodeURIComponent(String(a));
    var c = gvjs_MT[a];
    null == c
        ? ((c = [b]),
          (gvjs_MT[a] = c),
          gvjs_gja(
              a,
              function (d) {
                  gvjs_ST(a, d);
              },
              function () {
                  gvjs_ST(a, null);
              }
          ))
        : Array.isArray(c)
        ? gvjs_Gy(c, b)
        : gvjs_pl(gvjs_re(b, c), 0);
}
function gvjs_gja(a, b, c) {
    gvjs_fn(gvjs_NT + "/geocodes/" + (a + ".js")).then(
        function (d) {
            d = d.replace(/^[\s\S]*var results\s*=\s*/g, "");
            d = d.replace(
                /;\s*gviz\.util\.RegionCoder\.dictionaryReady[\s\S]*$/g,
                ""
            );
            d = JSON.parse(d);
            b && b(d);
            return d;
        },
        function (d) {
            c && c(d);
        }
    );
}
function gvjs_ST(a, b) {
    var c = gvjs_MT[a];
    if (b) {
        if (((b = new gvjs_OT(b)), Array.isArray(c)))
            for (gvjs_MT[a] = b, a = 0; a < c.length; a++) c[a](b);
    } else if (Array.isArray(c))
        for (gvjs_MT[a] = null, a = 0; a < c.length; a++) c[a](null);
}
function gvjs_TT(a, b) {
    b = gvjs_kf(b.toLowerCase());
    return a.Pma[b];
}
gvjs_OT.dictionaryReady = gvjs_ST;
var gvjs_QT = "0";
gvjs_PT(gvjs_QT);
gvjs_q("gviz.util.RegionCoder.dictionaryReady", gvjs_ST, void 0);
