(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) o(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const S of h.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && o(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function o(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = c(d);
    fetch(d.href, h);
  }
})();
function ng(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var hf = { exports: {} },
  Gr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh;
function ig() {
  if (Jh) return Gr;
  Jh = 1;
  var r = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function c(o, d, h) {
    var S = null;
    if (
      (h !== void 0 && (S = "" + h),
      d.key !== void 0 && (S = "" + d.key),
      "key" in d)
    ) {
      h = {};
      for (var E in d) E !== "key" && (h[E] = d[E]);
    } else h = d;
    return (
      (d = h.ref),
      { $$typeof: r, type: o, key: S, ref: d !== void 0 ? d : null, props: h }
    );
  }
  return (Gr.Fragment = s), (Gr.jsx = c), (Gr.jsxs = c), Gr;
}
var Wh;
function lg() {
  return Wh || ((Wh = 1), (hf.exports = ig())), hf.exports;
}
var _ = lg(),
  pf = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function ag() {
  if (Fh) return Re;
  Fh = 1;
  var r = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function j(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (O && v[O]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var G = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    F = {};
  function $(v, Q, ae) {
    (this.props = v),
      (this.context = Q),
      (this.refs = F),
      (this.updater = ae || G);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (v, Q) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, Q, "setState");
    }),
    ($.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function Y() {}
  Y.prototype = $.prototype;
  function W(v, Q, ae) {
    (this.props = v),
      (this.context = Q),
      (this.refs = F),
      (this.updater = ae || G);
  }
  var P = (W.prototype = new Y());
  (P.constructor = W), H(P, $.prototype), (P.isPureReactComponent = !0);
  var ue = Array.isArray,
    I = { H: null, A: null, T: null, S: null, V: null },
    ve = Object.prototype.hasOwnProperty;
  function ge(v, Q, ae, ne, me, je) {
    return (
      (ae = je.ref),
      {
        $$typeof: r,
        type: v,
        key: Q,
        ref: ae !== void 0 ? ae : null,
        props: je,
      }
    );
  }
  function re(v, Q) {
    return ge(v.type, Q, void 0, void 0, void 0, v.props);
  }
  function le(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function ee(v) {
    var Q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (ae) {
        return Q[ae];
      })
    );
  }
  var fe = /\/+/g;
  function he(v, Q) {
    return typeof v == "object" && v !== null && v.key != null
      ? ee("" + v.key)
      : Q.toString(36);
  }
  function Ge() {}
  function lt(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(Ge, Ge)
            : ((v.status = "pending"),
              v.then(
                function (Q) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = Q));
                },
                function (Q) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = Q));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function Qe(v, Q, ae, ne, me) {
    var je = typeof v;
    (je === "undefined" || je === "boolean") && (v = null);
    var Ae = !1;
    if (v === null) Ae = !0;
    else
      switch (je) {
        case "bigint":
        case "string":
        case "number":
          Ae = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case r:
            case s:
              Ae = !0;
              break;
            case T:
              return (Ae = v._init), Qe(Ae(v._payload), Q, ae, ne, me);
          }
      }
    if (Ae)
      return (
        (me = me(v)),
        (Ae = ne === "" ? "." + he(v, 0) : ne),
        ue(me)
          ? ((ae = ""),
            Ae != null && (ae = Ae.replace(fe, "$&/") + "/"),
            Qe(me, Q, ae, "", function (fn) {
              return fn;
            }))
          : me != null &&
            (le(me) &&
              (me = re(
                me,
                ae +
                  (me.key == null || (v && v.key === me.key)
                    ? ""
                    : ("" + me.key).replace(fe, "$&/") + "/") +
                  Ae
              )),
            Q.push(me)),
        1
      );
    Ae = 0;
    var Mt = ne === "" ? "." : ne + ":";
    if (ue(v))
      for (var te = 0; te < v.length; te++)
        (ne = v[te]), (je = Mt + he(ne, te)), (Ae += Qe(ne, Q, ae, je, me));
    else if (((te = j(v)), typeof te == "function"))
      for (v = te.call(v), te = 0; !(ne = v.next()).done; )
        (ne = ne.value),
          (je = Mt + he(ne, te++)),
          (Ae += Qe(ne, Q, ae, je, me));
    else if (je === "object") {
      if (typeof v.then == "function") return Qe(lt(v), Q, ae, ne, me);
      throw (
        ((Q = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Q === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : Q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Ae;
  }
  function z(v, Q, ae) {
    if (v == null) return v;
    var ne = [],
      me = 0;
    return (
      Qe(v, ne, "", "", function (je) {
        return Q.call(ae, je, me++);
      }),
      ne
    );
  }
  function K(v) {
    if (v._status === -1) {
      var Q = v._result;
      (Q = Q()),
        Q.then(
          function (ae) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = ae));
          },
          function (ae) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = ae));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = Q));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Z =
    typeof reportError == "function"
      ? reportError
      : function (v) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof v == "object" &&
                v !== null &&
                typeof v.message == "string"
                  ? String(v.message)
                  : String(v),
              error: v,
            });
            if (!window.dispatchEvent(Q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", v);
            return;
          }
          console.error(v);
        };
  function de() {}
  return (
    (Re.Children = {
      map: z,
      forEach: function (v, Q, ae) {
        z(
          v,
          function () {
            Q.apply(this, arguments);
          },
          ae
        );
      },
      count: function (v) {
        var Q = 0;
        return (
          z(v, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (v) {
        return (
          z(v, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (v) {
        if (!le(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (Re.Component = $),
    (Re.Fragment = c),
    (Re.Profiler = d),
    (Re.PureComponent = W),
    (Re.StrictMode = o),
    (Re.Suspense = A),
    (Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (Re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return I.H.useMemoCache(v);
      },
    }),
    (Re.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (Re.cloneElement = function (v, Q, ae) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var ne = H({}, v.props),
        me = v.key,
        je = void 0;
      if (Q != null)
        for (Ae in (Q.ref !== void 0 && (je = void 0),
        Q.key !== void 0 && (me = "" + Q.key),
        Q))
          !ve.call(Q, Ae) ||
            Ae === "key" ||
            Ae === "__self" ||
            Ae === "__source" ||
            (Ae === "ref" && Q.ref === void 0) ||
            (ne[Ae] = Q[Ae]);
      var Ae = arguments.length - 2;
      if (Ae === 1) ne.children = ae;
      else if (1 < Ae) {
        for (var Mt = Array(Ae), te = 0; te < Ae; te++)
          Mt[te] = arguments[te + 2];
        ne.children = Mt;
      }
      return ge(v.type, me, void 0, void 0, je, ne);
    }),
    (Re.createContext = function (v) {
      return (
        (v = {
          $$typeof: S,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: h, _context: v }),
        v
      );
    }),
    (Re.createElement = function (v, Q, ae) {
      var ne,
        me = {},
        je = null;
      if (Q != null)
        for (ne in (Q.key !== void 0 && (je = "" + Q.key), Q))
          ve.call(Q, ne) &&
            ne !== "key" &&
            ne !== "__self" &&
            ne !== "__source" &&
            (me[ne] = Q[ne]);
      var Ae = arguments.length - 2;
      if (Ae === 1) me.children = ae;
      else if (1 < Ae) {
        for (var Mt = Array(Ae), te = 0; te < Ae; te++)
          Mt[te] = arguments[te + 2];
        me.children = Mt;
      }
      if (v && v.defaultProps)
        for (ne in ((Ae = v.defaultProps), Ae))
          me[ne] === void 0 && (me[ne] = Ae[ne]);
      return ge(v, je, void 0, void 0, null, me);
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (v) {
      return { $$typeof: E, render: v };
    }),
    (Re.isValidElement = le),
    (Re.lazy = function (v) {
      return { $$typeof: T, _payload: { _status: -1, _result: v }, _init: K };
    }),
    (Re.memo = function (v, Q) {
      return { $$typeof: y, type: v, compare: Q === void 0 ? null : Q };
    }),
    (Re.startTransition = function (v) {
      var Q = I.T,
        ae = {};
      I.T = ae;
      try {
        var ne = v(),
          me = I.S;
        me !== null && me(ae, ne),
          typeof ne == "object" &&
            ne !== null &&
            typeof ne.then == "function" &&
            ne.then(de, Z);
      } catch (je) {
        Z(je);
      } finally {
        I.T = Q;
      }
    }),
    (Re.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (Re.use = function (v) {
      return I.H.use(v);
    }),
    (Re.useActionState = function (v, Q, ae) {
      return I.H.useActionState(v, Q, ae);
    }),
    (Re.useCallback = function (v, Q) {
      return I.H.useCallback(v, Q);
    }),
    (Re.useContext = function (v) {
      return I.H.useContext(v);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (v, Q) {
      return I.H.useDeferredValue(v, Q);
    }),
    (Re.useEffect = function (v, Q, ae) {
      var ne = I.H;
      if (typeof ae == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return ne.useEffect(v, Q);
    }),
    (Re.useId = function () {
      return I.H.useId();
    }),
    (Re.useImperativeHandle = function (v, Q, ae) {
      return I.H.useImperativeHandle(v, Q, ae);
    }),
    (Re.useInsertionEffect = function (v, Q) {
      return I.H.useInsertionEffect(v, Q);
    }),
    (Re.useLayoutEffect = function (v, Q) {
      return I.H.useLayoutEffect(v, Q);
    }),
    (Re.useMemo = function (v, Q) {
      return I.H.useMemo(v, Q);
    }),
    (Re.useOptimistic = function (v, Q) {
      return I.H.useOptimistic(v, Q);
    }),
    (Re.useReducer = function (v, Q, ae) {
      return I.H.useReducer(v, Q, ae);
    }),
    (Re.useRef = function (v) {
      return I.H.useRef(v);
    }),
    (Re.useState = function (v) {
      return I.H.useState(v);
    }),
    (Re.useSyncExternalStore = function (v, Q, ae) {
      return I.H.useSyncExternalStore(v, Q, ae);
    }),
    (Re.useTransition = function () {
      return I.H.useTransition();
    }),
    (Re.version = "19.1.1"),
    Re
  );
}
var $h;
function Rf() {
  return $h || (($h = 1), (pf.exports = ag())), pf.exports;
}
var qe = Rf();
const Tt = ng(qe);
var mf = { exports: {} },
  Hr = {},
  gf = { exports: {} },
  vf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep;
function sg() {
  return (
    ep ||
      ((ep = 1),
      (function (r) {
        function s(z, K) {
          var Z = z.length;
          z.push(K);
          e: for (; 0 < Z; ) {
            var de = (Z - 1) >>> 1,
              v = z[de];
            if (0 < d(v, K)) (z[de] = K), (z[Z] = v), (Z = de);
            else break e;
          }
        }
        function c(z) {
          return z.length === 0 ? null : z[0];
        }
        function o(z) {
          if (z.length === 0) return null;
          var K = z[0],
            Z = z.pop();
          if (Z !== K) {
            z[0] = Z;
            e: for (var de = 0, v = z.length, Q = v >>> 1; de < Q; ) {
              var ae = 2 * (de + 1) - 1,
                ne = z[ae],
                me = ae + 1,
                je = z[me];
              if (0 > d(ne, Z))
                me < v && 0 > d(je, ne)
                  ? ((z[de] = je), (z[me] = Z), (de = me))
                  : ((z[de] = ne), (z[ae] = Z), (de = ae));
              else if (me < v && 0 > d(je, Z))
                (z[de] = je), (z[me] = Z), (de = me);
              else break e;
            }
          }
          return K;
        }
        function d(z, K) {
          var Z = z.sortIndex - K.sortIndex;
          return Z !== 0 ? Z : z.id - K.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          r.unstable_now = function () {
            return h.now();
          };
        } else {
          var S = Date,
            E = S.now();
          r.unstable_now = function () {
            return S.now() - E;
          };
        }
        var A = [],
          y = [],
          T = 1,
          O = null,
          j = 3,
          G = !1,
          H = !1,
          F = !1,
          $ = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          W = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function ue(z) {
          for (var K = c(y); K !== null; ) {
            if (K.callback === null) o(y);
            else if (K.startTime <= z)
              o(y), (K.sortIndex = K.expirationTime), s(A, K);
            else break;
            K = c(y);
          }
        }
        function I(z) {
          if (((F = !1), ue(z), !H))
            if (c(A) !== null) (H = !0), ve || ((ve = !0), he());
            else {
              var K = c(y);
              K !== null && Qe(I, K.startTime - z);
            }
        }
        var ve = !1,
          ge = -1,
          re = 5,
          le = -1;
        function ee() {
          return $ ? !0 : !(r.unstable_now() - le < re);
        }
        function fe() {
          if ((($ = !1), ve)) {
            var z = r.unstable_now();
            le = z;
            var K = !0;
            try {
              e: {
                (H = !1), F && ((F = !1), W(ge), (ge = -1)), (G = !0);
                var Z = j;
                try {
                  t: {
                    for (
                      ue(z), O = c(A);
                      O !== null && !(O.expirationTime > z && ee());

                    ) {
                      var de = O.callback;
                      if (typeof de == "function") {
                        (O.callback = null), (j = O.priorityLevel);
                        var v = de(O.expirationTime <= z);
                        if (((z = r.unstable_now()), typeof v == "function")) {
                          (O.callback = v), ue(z), (K = !0);
                          break t;
                        }
                        O === c(A) && o(A), ue(z);
                      } else o(A);
                      O = c(A);
                    }
                    if (O !== null) K = !0;
                    else {
                      var Q = c(y);
                      Q !== null && Qe(I, Q.startTime - z), (K = !1);
                    }
                  }
                  break e;
                } finally {
                  (O = null), (j = Z), (G = !1);
                }
                K = void 0;
              }
            } finally {
              K ? he() : (ve = !1);
            }
          }
        }
        var he;
        if (typeof P == "function")
          he = function () {
            P(fe);
          };
        else if (typeof MessageChannel < "u") {
          var Ge = new MessageChannel(),
            lt = Ge.port2;
          (Ge.port1.onmessage = fe),
            (he = function () {
              lt.postMessage(null);
            });
        } else
          he = function () {
            Y(fe, 0);
          };
        function Qe(z, K) {
          ge = Y(function () {
            z(r.unstable_now());
          }, K);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (r.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (re = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (r.unstable_next = function (z) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = j;
            }
            var Z = j;
            j = K;
            try {
              return z();
            } finally {
              j = Z;
            }
          }),
          (r.unstable_requestPaint = function () {
            $ = !0;
          }),
          (r.unstable_runWithPriority = function (z, K) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var Z = j;
            j = z;
            try {
              return K();
            } finally {
              j = Z;
            }
          }),
          (r.unstable_scheduleCallback = function (z, K, Z) {
            var de = r.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? de + Z : de))
                : (Z = de),
              z)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = Z + v),
              (z = {
                id: T++,
                callback: K,
                priorityLevel: z,
                startTime: Z,
                expirationTime: v,
                sortIndex: -1,
              }),
              Z > de
                ? ((z.sortIndex = Z),
                  s(y, z),
                  c(A) === null &&
                    z === c(y) &&
                    (F ? (W(ge), (ge = -1)) : (F = !0), Qe(I, Z - de)))
                : ((z.sortIndex = v),
                  s(A, z),
                  H || G || ((H = !0), ve || ((ve = !0), he()))),
              z
            );
          }),
          (r.unstable_shouldYield = ee),
          (r.unstable_wrapCallback = function (z) {
            var K = j;
            return function () {
              var Z = j;
              j = K;
              try {
                return z.apply(this, arguments);
              } finally {
                j = Z;
              }
            };
          });
      })(vf)),
    vf
  );
}
var tp;
function rg() {
  return tp || ((tp = 1), (gf.exports = sg())), gf.exports;
}
var yf = { exports: {} },
  Qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function og() {
  if (np) return Qt;
  np = 1;
  var r = Rf();
  function s(A) {
    var y = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        y += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return (
      "Minified React error #" +
      A +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var o = {
      d: {
        f: c,
        r: function () {
          throw Error(s(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function h(A, y, T) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: O == null ? null : "" + O,
      children: A,
      containerInfo: y,
      implementation: T,
    };
  }
  var S = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(A, y) {
    if (A === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Qt.createPortal = function (A, y) {
      var T =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(s(299));
      return h(A, y, null, T);
    }),
    (Qt.flushSync = function (A) {
      var y = S.T,
        T = o.p;
      try {
        if (((S.T = null), (o.p = 2), A)) return A();
      } finally {
        (S.T = y), (o.p = T), o.d.f();
      }
    }),
    (Qt.preconnect = function (A, y) {
      typeof A == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        o.d.C(A, y));
    }),
    (Qt.prefetchDNS = function (A) {
      typeof A == "string" && o.d.D(A);
    }),
    (Qt.preinit = function (A, y) {
      if (typeof A == "string" && y && typeof y.as == "string") {
        var T = y.as,
          O = E(T, y.crossOrigin),
          j = typeof y.integrity == "string" ? y.integrity : void 0,
          G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        T === "style"
          ? o.d.S(A, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: O,
              integrity: j,
              fetchPriority: G,
            })
          : T === "script" &&
            o.d.X(A, {
              crossOrigin: O,
              integrity: j,
              fetchPriority: G,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (Qt.preinitModule = function (A, y) {
      if (typeof A == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var T = E(y.as, y.crossOrigin);
            o.d.M(A, {
              crossOrigin: T,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && o.d.M(A);
    }),
    (Qt.preload = function (A, y) {
      if (
        typeof A == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var T = y.as,
          O = E(T, y.crossOrigin);
        o.d.L(A, T, {
          crossOrigin: O,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (Qt.preloadModule = function (A, y) {
      if (typeof A == "string")
        if (y) {
          var T = E(y.as, y.crossOrigin);
          o.d.m(A, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: T,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else o.d.m(A);
    }),
    (Qt.requestFormReset = function (A) {
      o.d.r(A);
    }),
    (Qt.unstable_batchedUpdates = function (A, y) {
      return A(y);
    }),
    (Qt.useFormState = function (A, y, T) {
      return S.H.useFormState(A, y, T);
    }),
    (Qt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (Qt.version = "19.1.1"),
    Qt
  );
}
var ip;
function ug() {
  if (ip) return yf.exports;
  ip = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), (yf.exports = og()), yf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp;
function cg() {
  if (lp) return Hr;
  lp = 1;
  var r = rg(),
    s = Rf(),
    c = ug();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function S(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function E(e) {
    if (h(e) !== e) throw Error(o(188));
  }
  function A(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((i = l.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return E(l), e;
          if (u === i) return E(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) (n = l), (i = u);
      else {
        for (var p = !1, g = l.child; g; ) {
          if (g === n) {
            (p = !0), (n = l), (i = u);
            break;
          }
          if (g === i) {
            (p = !0), (i = l), (n = u);
            break;
          }
          g = g.sibling;
        }
        if (!p) {
          for (g = u.child; g; ) {
            if (g === n) {
              (p = !0), (n = u), (i = l);
              break;
            }
            if (g === i) {
              (p = !0), (i = u), (n = l);
              break;
            }
            g = g.sibling;
          }
          if (!p) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign,
    O = Symbol.for("react.element"),
    j = Symbol.for("react.transitional.element"),
    G = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    Y = Symbol.for("react.provider"),
    W = Symbol.for("react.consumer"),
    P = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    ve = Symbol.for("react.suspense_list"),
    ge = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    le = Symbol.for("react.activity"),
    ee = Symbol.for("react.memo_cache_sentinel"),
    fe = Symbol.iterator;
  function he(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (fe && e[fe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ge = Symbol.for("react.client.reference");
  function lt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ge ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case $:
        return "Profiler";
      case F:
        return "StrictMode";
      case I:
        return "Suspense";
      case ve:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case G:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case ue:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ge:
          return (
            (t = e.displayName || null), t !== null ? t : lt(e.type) || "Memo"
          );
        case re:
          (t = e._payload), (e = e._init);
          try {
            return lt(e(t));
          } catch {}
      }
    return null;
  }
  var Qe = Array.isArray,
    z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    de = [],
    v = -1;
  function Q(e) {
    return { current: e };
  }
  function ae(e) {
    0 > v || ((e.current = de[v]), (de[v] = null), v--);
  }
  function ne(e, t) {
    v++, (de[v] = e.current), (e.current = t);
  }
  var me = Q(null),
    je = Q(null),
    Ae = Q(null),
    Mt = Q(null);
  function te(e, t) {
    switch ((ne(Ae, t), ne(je, e), ne(me, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? wh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = wh(t)), (e = _h(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(me), ne(me, e);
  }
  function fn() {
    ae(me), ae(je), ae(Ae);
  }
  function va(e) {
    e.memoizedState !== null && ne(Mt, e);
    var t = me.current,
      n = _h(t, e.type);
    t !== n && (ne(je, e), ne(me, n));
  }
  function ya(e) {
    je.current === e && (ae(me), ae(je)),
      Mt.current === e && (ae(Mt), (Rr._currentValue = Z));
  }
  var ps = Object.prototype.hasOwnProperty,
    vi = r.unstable_scheduleCallback,
    ba = r.unstable_cancelCallback,
    Ql = r.unstable_shouldYield,
    el = r.unstable_requestPaint,
    Tn = r.unstable_now,
    Yu = r.unstable_getCurrentPriorityLevel,
    qr = r.unstable_ImmediatePriority,
    Qr = r.unstable_UserBlockingPriority,
    Aa = r.unstable_NormalPriority,
    Vu = r.unstable_LowPriority,
    kr = r.unstable_IdlePriority,
    Sa = r.log,
    In = r.unstable_setDisableYieldValue,
    tl = null,
    kt = null;
  function Pn(e) {
    if (
      (typeof Sa == "function" && In(e),
      kt && typeof kt.setStrictMode == "function")
    )
      try {
        kt.setStrictMode(tl, e);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : Ea,
    nl = Math.log,
    il = Math.LN2;
  function Ea(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((nl(e) / il) | 0)) | 0;
  }
  var Ta = 256,
    ll = 4194304;
  function yi(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function wa(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var g = i & 134217727;
    return (
      g !== 0
        ? ((i = g & ~u),
          i !== 0
            ? (l = yi(i))
            : ((p &= g),
              p !== 0
                ? (l = yi(p))
                : n || ((n = g & ~e), n !== 0 && (l = yi(n)))))
        : ((g = i & ~u),
          g !== 0
            ? (l = yi(g))
            : p !== 0
            ? (l = yi(p))
            : n || ((n = i & ~e), n !== 0 && (l = yi(n)))),
      l === 0
        ? 0
        : t !== 0 &&
          t !== l &&
          (t & u) === 0 &&
          ((u = l & -l),
          (n = t & -t),
          u >= n || (u === 32 && (n & 4194048) !== 0))
        ? t
        : l
    );
  }
  function kl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zr() {
    var e = Ta;
    return (Ta <<= 1), (Ta & 4194048) === 0 && (Ta = 256), e;
  }
  function Kr() {
    var e = ll;
    return (ll <<= 1), (ll & 62914560) === 0 && (ll = 4194304), e;
  }
  function _a(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Jn(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ir(e, t, n, i, l, u) {
    var p = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var g = e.entanglements,
      w = e.expirationTimes,
      R = e.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var V = 31 - vt(n),
        k = 1 << V;
      (g[V] = 0), (w[V] = -1);
      var L = R[V];
      if (L !== null)
        for (R[V] = null, V = 0; V < L.length; V++) {
          var B = L[V];
          B !== null && (B.lane &= -536870913);
        }
      n &= ~k;
    }
    i !== 0 && ms(e, i, 0),
      u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(p & ~t));
  }
  function ms(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - vt(t);
    (e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (n & 4194090));
  }
  function Pr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - vt(n),
        l = 1 << i;
      (l & t) | (e[i] & t) && (e[i] |= t), (n &= ~l);
    }
  }
  function gs(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vs(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Jr() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Qh(e.type));
  }
  function al(e, t) {
    var n = K.p;
    try {
      return (K.p = e), t();
    } finally {
      K.p = n;
    }
  }
  var tn = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + tn,
    Lt = "__reactProps$" + tn,
    sl = "__reactContainer$" + tn,
    ys = "__reactEvents$" + tn,
    qu = "__reactListeners$" + tn,
    bs = "__reactHandles$" + tn,
    bi = "__reactResources$" + tn,
    Wn = "__reactMarker$" + tn;
  function As(e) {
    delete e[wt], delete e[Lt], delete e[ys], delete e[qu], delete e[bs];
  }
  function Fn(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[sl] || n[wt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ch(e); e !== null; ) {
            if ((n = e[wt])) return n;
            e = Ch(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function rl(e) {
    if ((e = e[wt] || e[sl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Zl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function dn(e) {
    var t = e[bi];
    return (
      t ||
        (t = e[bi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ye(e) {
    e[Wn] = !0;
  }
  var Bt = new Set(),
    Ut = {};
  function st(e, t) {
    Ln(e, t), Ln(e + "Capture", t);
  }
  function Ln(e, t) {
    for (Ut[e] = t, e = 0; e < t.length; e++) Bt.add(t[e]);
  }
  var ol = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    $n = {},
    Ai = {};
  function Wr(e) {
    return ps.call(Ai, e)
      ? !0
      : ps.call($n, e)
      ? !1
      : ol.test(e)
      ? (Ai[e] = !0)
      : (($n[e] = !0), !1);
  }
  function ul(e, t, n) {
    if (Wr(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Bn(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function wn(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  var Kl, xa;
  function Si(e) {
    if (Kl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Kl = (t && t[1]) || ""),
          (xa =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kl +
      e +
      xa
    );
  }
  var Oa = !1;
  function Ma(e, t) {
    if (!e || Oa) return "";
    Oa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var k = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(k.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(k, []);
                } catch (B) {
                  var L = B;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (B) {
                  L = B;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                L = B;
              }
              (k = e()) &&
                typeof k.catch == "function" &&
                k.catch(function () {});
            }
          } catch (B) {
            if (B && L && typeof B.stack == "string") return [B.stack, L.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      l &&
        l.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        p = u[0],
        g = u[1];
      if (p && g) {
        var w = p.split(`
`),
          R = g.split(`
`);
        for (
          l = i = 0;
          i < w.length && !w[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (i === w.length || l === R.length)
          for (
            i = w.length - 1, l = R.length - 1;
            1 <= i && 0 <= l && w[i] !== R[l];

          )
            l--;
        for (; 1 <= i && 0 <= l; i--, l--)
          if (w[i] !== R[l]) {
            if (i !== 1 || l !== 1)
              do
                if ((i--, l--, 0 > l || w[i] !== R[l])) {
                  var V =
                    `
` + w[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", e.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= l);
            break;
          }
      }
    } finally {
      (Oa = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Si(n) : "";
  }
  function Fr(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Si(e.type);
      case 16:
        return Si("Lazy");
      case 13:
        return Si("Suspense");
      case 19:
        return Si("SuspenseList");
      case 0:
      case 15:
        return Ma(e.type, !1);
      case 11:
        return Ma(e.type.render, !1);
      case 1:
        return Ma(e.type, !0);
      case 31:
        return Si("Activity");
      default:
        return "";
    }
  }
  function Ss(e) {
    try {
      var t = "";
      do (t += Fr(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Es(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function $r(e) {
    var t = Es(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            (i = "" + p), u.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (p) {
            i = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Il(e) {
    e._valueTracker || (e._valueTracker = $r(e));
  }
  function Ts(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = Es(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Kt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var It = /[\n"\\]/g;
  function mt(e) {
    return e.replace(It, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Gt(e, t, n, i, l, u, p, g) {
    (e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      t != null
        ? p === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Zt(t))
          : e.value !== "" + Zt(t) && (e.value = "" + Zt(t))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      t != null
        ? Pl(e, p, Zt(t))
        : n != null
        ? Pl(e, p, Zt(n))
        : i != null && e.removeAttribute("value"),
      l == null && u != null && (e.defaultChecked = !!u),
      l != null &&
        (e.checked = l && typeof l != "function" && typeof l != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Zt(g))
        : e.removeAttribute("name");
  }
  function Ca(e, t, n, i, l, u, p, g) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || n != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (n = n != null ? "" + Zt(n) : ""),
        (t = t != null ? "" + Zt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? l),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = g ? e.checked : !!i),
      (e.defaultChecked = !!i),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p);
  }
  function Pl(e, t, n) {
    (t === "number" && Kt(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ct(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), i && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ei(e, t, n) {
    if (
      t != null &&
      ((t = "" + Zt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function Jl(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (Qe(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Zt(t)),
      (e.defaultValue = n),
      (i = e.textContent),
      i === n && i !== "" && i !== null && (e.value = i);
  }
  function hn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ws = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _s(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : i
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || ws.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function Ei(e, t, n) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
            ? (e.cssFloat = "")
            : (e[i] = ""));
      for (var l in t)
        (i = t[l]), t.hasOwnProperty(l) && n[l] !== i && _s(e, l, i);
    } else for (var u in t) t.hasOwnProperty(u) && _s(e, u, t[u]);
  }
  function Wl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var eo = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Un =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Da(e) {
    return Un.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var _n = null;
  function cl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ti = null,
    xn = null;
  function Na(e) {
    var t = rl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Gt(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + mt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var l = i[Lt] || null;
                if (!l) throw Error(o(90));
                Gt(
                  i,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (i = n[t]), i.form === e.form && Ts(i);
          }
          break e;
        case "textarea":
          ei(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && Ct(e, !!n.multiple, t, !1);
      }
    }
  }
  var wi = !1;
  function xs(e, t, n) {
    if (wi) return e(t, n);
    wi = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((wi = !1),
        (Ti !== null || xn !== null) &&
          (cu(), Ti && ((t = Ti), (e = xn), (xn = Ti = null), Na(t), e)))
      )
        for (t = 0; t < e.length; t++) Na(e[t]);
    }
  }
  function fl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[Lt] || null;
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var On = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ti = !1;
  if (On)
    try {
      var Fl = {};
      Object.defineProperty(Fl, "passive", {
        get: function () {
          ti = !0;
        },
      }),
        window.addEventListener("test", Fl, Fl),
        window.removeEventListener("test", Fl, Fl);
    } catch {
      ti = !1;
    }
  var Gn = null,
    $l = null,
    _i = null;
  function za() {
    if (_i) return _i;
    var e,
      t = $l,
      n = t.length,
      i,
      l = "value" in Gn ? Gn.value : Gn.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var p = n - e;
    for (i = 1; i <= p && t[n - i] === l[u - i]; i++);
    return (_i = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Ra(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xi() {
    return !0;
  }
  function to() {
    return !1;
  }
  function Dt(e) {
    function t(n, i, l, u, p) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(u) : u[g]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? xi
          : to),
        (this.isPropagationStopped = to),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = xi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = xi));
        },
        persist: function () {},
        isPersistent: xi,
      }),
      t
    );
  }
  var Hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    dl = Dt(Hn),
    Oi = T({}, Hn, { view: 0, detail: 0 }),
    no = Dt(Oi),
    Mi,
    ea,
    hl,
    ta = T({}, Oi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ms,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== hl &&
              (hl && e.type === "mousemove"
                ? ((Mi = e.screenX - hl.screenX), (ea = e.screenY - hl.screenY))
                : (ea = Mi = 0),
              (hl = e)),
            Mi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ea;
      },
    }),
    Ci = Dt(ta),
    Qu = T({}, ta, { dataTransfer: 0 }),
    io = Dt(Qu),
    lo = T({}, Oi, { relatedTarget: 0 }),
    ja = Dt(lo),
    ao = T({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    so = Dt(ao),
    Os = T({}, Hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ro = Dt(Os),
    ku = T({}, Hn, { data: 0 }),
    oo = Dt(ku),
    uo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    co = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    La = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zu(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = La[e])
      ? !!t[e]
      : !1;
  }
  function Ms() {
    return Zu;
  }
  var Cs = T({}, Oi, {
      key: function (e) {
        if (e.key) {
          var t = uo[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? co[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ms,
      charCode: function (e) {
        return e.type === "keypress" ? Ra(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ra(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    fo = Dt(Cs),
    ho = T({}, ta, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ni = Dt(ho),
    Ds = T({}, Oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ms,
    }),
    Ku = Dt(Ds),
    po = T({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iu = Dt(po),
    Pu = T({}, ta, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ju = Dt(Pu),
    Wu = T({}, Hn, { newState: 0, oldState: 0 }),
    mo = Dt(Wu),
    go = [9, 13, 27, 32],
    Ns = On && "CompositionEvent" in window,
    Mn = null;
  On && "documentMode" in document && (Mn = document.documentMode);
  var Di = On && "TextEvent" in window && !Mn,
    vo = On && (!Ns || (Mn && 8 < Mn && 11 >= Mn)),
    na = " ",
    yo = !1;
  function bo(e, t) {
    switch (e) {
      case "keyup":
        return go.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ao(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pl = !1;
  function Fu(e, t) {
    switch (e) {
      case "compositionend":
        return Ao(t);
      case "keypress":
        return t.which !== 32 ? null : ((yo = !0), na);
      case "textInput":
        return (e = t.data), e === na && yo ? null : e;
      default:
        return null;
    }
  }
  function $u(e, t) {
    if (pl)
      return e === "compositionend" || (!Ns && bo(e, t))
        ? ((e = za()), (_i = $l = Gn = null), (pl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return vo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ec = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function So(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ec[e.type] : t === "textarea";
  }
  function nn(e, t, n, i) {
    Ti ? (xn ? xn.push(i) : (xn = [i])) : (Ti = i),
      (t = gu(t, "onChange")),
      0 < t.length &&
        ((n = new dl("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }));
  }
  var ml = null,
    gl = null;
  function Eo(e) {
    bh(e, 0);
  }
  function Ba(e) {
    var t = Zl(e);
    if (Ts(t)) return e;
  }
  function To(e, t) {
    if (e === "change") return t;
  }
  var zs = !1;
  if (On) {
    var vl;
    if (On) {
      var Rs = "oninput" in document;
      if (!Rs) {
        var wo = document.createElement("div");
        wo.setAttribute("oninput", "return;"),
          (Rs = typeof wo.oninput == "function");
      }
      vl = Rs;
    } else vl = !1;
    zs = vl && (!document.documentMode || 9 < document.documentMode);
  }
  function js() {
    ml && (ml.detachEvent("onpropertychange", _o), (gl = ml = null));
  }
  function _o(e) {
    if (e.propertyName === "value" && Ba(gl)) {
      var t = [];
      nn(t, gl, e, cl(e)), xs(Eo, t);
    }
  }
  function tc(e, t, n) {
    e === "focusin"
      ? (js(), (ml = t), (gl = n), ml.attachEvent("onpropertychange", _o))
      : e === "focusout" && js();
  }
  function xo(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ba(gl);
  }
  function Oo(e, t) {
    if (e === "click") return Ba(t);
  }
  function Mo(e, t) {
    if (e === "input" || e === "change") return Ba(t);
  }
  function Ua(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ht = typeof Object.is == "function" ? Object.is : Ua;
  function Ni(e, t) {
    if (Ht(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!ps.call(t, l) || !Ht(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Pt(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Co(e, t) {
    var n = Pt(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pt(n);
    }
  }
  function Do(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Do(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ls(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Kt(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Kt(e.document);
    }
    return t;
  }
  function Ga(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var nc = On && "documentMode" in document && 11 >= document.documentMode,
    yl = null,
    Bs = null,
    ia = null,
    Us = !1;
  function No(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Us ||
      yl == null ||
      yl !== Kt(i) ||
      ((i = yl),
      "selectionStart" in i && Ga(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ia && Ni(ia, i)) ||
        ((ia = i),
        (i = gu(Bs, "onSelect")),
        0 < i.length &&
          ((t = new dl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = yl))));
  }
  function ii(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var zi = {
      animationend: ii("Animation", "AnimationEnd"),
      animationiteration: ii("Animation", "AnimationIteration"),
      animationstart: ii("Animation", "AnimationStart"),
      transitionrun: ii("Transition", "TransitionRun"),
      transitionstart: ii("Transition", "TransitionStart"),
      transitioncancel: ii("Transition", "TransitionCancel"),
      transitionend: ii("Transition", "TransitionEnd"),
    },
    la = {},
    zo = {};
  On &&
    ((zo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zi.animationend.animation,
      delete zi.animationiteration.animation,
      delete zi.animationstart.animation),
    "TransitionEvent" in window || delete zi.transitionend.transition);
  function Ri(e) {
    if (la[e]) return la[e];
    if (!zi[e]) return e;
    var t = zi[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in zo) return (la[e] = t[n]);
    return e;
  }
  var li = Ri("animationend"),
    Cn = Ri("animationiteration"),
    Gs = Ri("animationstart"),
    ic = Ri("transitionrun"),
    Ro = Ri("transitionstart"),
    jo = Ri("transitioncancel"),
    Hs = Ri("transitionend"),
    Ys = new Map(),
    Vs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Vs.push("scrollEnd");
  function pn(e, t) {
    Ys.set(e, t), st(t, [e]);
  }
  var Lo = new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Lo.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Ss(t) }), Lo.set(e, t), t);
    }
    return { value: e, source: t, stack: Ss(t) };
  }
  var Wt = [],
    bl = 0,
    Xs = 0;
  function Ha() {
    for (var e = bl, t = (Xs = bl = 0); t < e; ) {
      var n = Wt[t];
      Wt[t++] = null;
      var i = Wt[t];
      Wt[t++] = null;
      var l = Wt[t];
      Wt[t++] = null;
      var u = Wt[t];
      if (((Wt[t++] = null), i !== null && l !== null)) {
        var p = i.pending;
        p === null ? (l.next = l) : ((l.next = p.next), (p.next = l)),
          (i.pending = l);
      }
      u !== 0 && Qs(n, l, u);
    }
  }
  function Ya(e, t, n, i) {
    (Wt[bl++] = e),
      (Wt[bl++] = t),
      (Wt[bl++] = n),
      (Wt[bl++] = i),
      (Xs |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function qs(e, t, n, i) {
    return Ya(e, t, n, i), Va(e);
  }
  function Yt(e, t) {
    return Ya(e, null, null, t), Va(e);
  }
  function Qs(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      (u.childLanes |= n),
        (i = u.alternate),
        i !== null && (i.childLanes |= n),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        l &&
          t !== null &&
          ((l = 31 - vt(n)),
          (e = u.hiddenUpdates),
          (i = e[l]),
          i === null ? (e[l] = [t]) : i.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function Va(e) {
    if (50 < _r) throw ((_r = 0), (Bc = null), Error(o(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Al = {};
  function lc(e, t, n, i) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ft(e, t, n, i) {
    return new lc(e, t, n, i);
  }
  function ks(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Yn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ft(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Bo(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Xa(e, t, n, i, l, u) {
    var p = 0;
    if (((i = e), typeof e == "function")) ks(e) && (p = 1);
    else if (typeof e == "string")
      p = qm(e, n, me.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case le:
          return (e = Ft(31, n, t, l)), (e.elementType = le), (e.lanes = u), e;
        case H:
          return Vn(n.children, l, u, t);
        case F:
          (p = 8), (l |= 24);
          break;
        case $:
          return (
            (e = Ft(12, n, t, l | 2)), (e.elementType = $), (e.lanes = u), e
          );
        case I:
          return (e = Ft(13, n, t, l)), (e.elementType = I), (e.lanes = u), e;
        case ve:
          return (e = Ft(19, n, t, l)), (e.elementType = ve), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
              case P:
                p = 10;
                break e;
              case W:
                p = 9;
                break e;
              case ue:
                p = 11;
                break e;
              case ge:
                p = 14;
                break e;
              case re:
                (p = 16), (i = null);
                break e;
            }
          (p = 29),
            (n = Error(o(130, e === null ? "null" : typeof e, ""))),
            (i = null);
      }
    return (
      (t = Ft(p, n, t, l)), (t.elementType = e), (t.type = i), (t.lanes = u), t
    );
  }
  function Vn(e, t, n, i) {
    return (e = Ft(7, e, i, t)), (e.lanes = n), e;
  }
  function Sl(e, t, n) {
    return (e = Ft(6, e, null, t)), (e.lanes = n), e;
  }
  function Zs(e, t, n) {
    return (
      (t = Ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ji = [],
    Li = 0,
    ai = null,
    El = 0,
    Vt = [],
    ln = 0,
    Bi = null,
    Xn = 1,
    Nt = "";
  function Ui(e, t) {
    (ji[Li++] = El), (ji[Li++] = ai), (ai = e), (El = t);
  }
  function Uo(e, t, n) {
    (Vt[ln++] = Xn), (Vt[ln++] = Nt), (Vt[ln++] = Bi), (Bi = e);
    var i = Xn;
    e = Nt;
    var l = 32 - vt(i) - 1;
    (i &= ~(1 << l)), (n += 1);
    var u = 32 - vt(t) + l;
    if (30 < u) {
      var p = l - (l % 5);
      (u = (i & ((1 << p) - 1)).toString(32)),
        (i >>= p),
        (l -= p),
        (Xn = (1 << (32 - vt(t) + l)) | (n << l) | i),
        (Nt = u + e);
    } else (Xn = (1 << u) | (n << l) | i), (Nt = e);
  }
  function Ks(e) {
    e.return !== null && (Ui(e, 1), Uo(e, 1, 0));
  }
  function Is(e) {
    for (; e === ai; )
      (ai = ji[--Li]), (ji[Li] = null), (El = ji[--Li]), (ji[Li] = null);
    for (; e === Bi; )
      (Bi = Vt[--ln]),
        (Vt[ln] = null),
        (Nt = Vt[--ln]),
        (Vt[ln] = null),
        (Xn = Vt[--ln]),
        (Vt[ln] = null);
  }
  var gt = null,
    nt = null,
    ke = !1,
    si = null,
    Dn = !1,
    ri = Error(o(519));
  function qn(e) {
    var t = Error(o(418, ""));
    throw (mn(Jt(t, e)), ri);
  }
  function Ps(e) {
    var t = e.stateNode,
      n = e.type,
      i = e.memoizedProps;
    switch (((t[wt] = e), (t[Lt] = i), n)) {
      case "dialog":
        Ue("cancel", t), Ue("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Or.length; n++) Ue(Or[n], t);
        break;
      case "source":
        Ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ue("error", t), Ue("load", t);
        break;
      case "details":
        Ue("toggle", t);
        break;
      case "input":
        Ue("invalid", t),
          Ca(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Il(t);
        break;
      case "select":
        Ue("invalid", t);
        break;
      case "textarea":
        Ue("invalid", t), Jl(t, i.value, i.defaultValue, i.children), Il(t);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Th(t.textContent, n)
        ? (i.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)),
          i.onScroll != null && Ue("scroll", t),
          i.onScrollEnd != null && Ue("scrollend", t),
          i.onClick != null && (t.onclick = vu),
          (t = !0))
        : (t = !1),
      t || qn(e);
  }
  function Go(e) {
    for (gt = e.return; gt; )
      switch (gt.tag) {
        case 5:
        case 13:
          Dn = !1;
          return;
        case 27:
        case 3:
          Dn = !0;
          return;
        default:
          gt = gt.return;
      }
  }
  function aa(e) {
    if (e !== gt) return !1;
    if (!ke) return Go(e), (ke = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps))),
        (n = !n)),
      n && nt && qn(e),
      Go(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                nt = Kn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        nt = null;
      }
    } else
      t === 27
        ? ((t = nt), Ul(e.type) ? ((e = nf), (nf = null), (nt = e)) : (nt = t))
        : (nt = gt ? Kn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function sa() {
    (nt = gt = null), (ke = !1);
  }
  function Tl() {
    var e = si;
    return (
      e !== null &&
        (cn === null ? (cn = e) : cn.push.apply(cn, e), (si = null)),
      e
    );
  }
  function mn(e) {
    si === null ? (si = [e]) : si.push(e);
  }
  var Js = Q(null),
    Gi = null,
    Qn = null;
  function oi(e, t, n) {
    ne(Js, t._currentValue), (t._currentValue = n);
  }
  function kn(e) {
    (e._currentValue = Js.current), ae(Js);
  }
  function Ws(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Fs(e, t, n, i) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var p = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var g = u;
          u = l;
          for (var w = 0; w < t.length; w++)
            if (g.context === t[w]) {
              (u.lanes |= n),
                (g = u.alternate),
                g !== null && (g.lanes |= n),
                Ws(u.return, n, e),
                i || (p = null);
              break e;
            }
          u = g.next;
        }
      } else if (l.tag === 18) {
        if (((p = l.return), p === null)) throw Error(o(341));
        (p.lanes |= n),
          (u = p.alternate),
          u !== null && (u.lanes |= n),
          Ws(p, n, e),
          (p = null);
      } else p = l.child;
      if (p !== null) p.return = l;
      else
        for (p = l; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((l = p.sibling), l !== null)) {
            (l.return = p.return), (p = l);
            break;
          }
          p = p.return;
        }
      l = p;
    }
  }
  function ra(e, t, n, i) {
    e = null;
    for (var l = t, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var p = l.alternate;
        if (p === null) throw Error(o(387));
        if (((p = p.memoizedProps), p !== null)) {
          var g = l.type;
          Ht(l.pendingProps.value, p.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (l === Mt.current) {
        if (((p = l.alternate), p === null)) throw Error(o(387));
        p.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(Rr) : (e = [Rr]));
      }
      l = l.return;
    }
    e !== null && Fs(t, e, n, i), (t.flags |= 262144);
  }
  function oa(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Hi(e) {
    (Gi = e),
      (Qn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function yt(e) {
    return $s(Gi, e);
  }
  function wl(e, t) {
    return Gi === null && Hi(e), $s(e, t);
  }
  function $s(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Qn === null)) {
      if (e === null) throw Error(o(308));
      (Qn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Qn = Qn.next = t;
    return n;
  }
  var Yi =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Ho = r.unstable_scheduleCallback,
    er = r.unstable_NormalPriority,
    ut = {
      $$typeof: P,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ua() {
    return { controller: new Yi(), data: new Map(), refCount: 0 };
  }
  function _l(e) {
    e.refCount--,
      e.refCount === 0 &&
        Ho(er, function () {
          e.controller.abort();
        });
  }
  var Vi = null,
    tr = 0,
    an = 0,
    $t = null;
  function ac(e, t) {
    if (Vi === null) {
      var n = (Vi = []);
      (tr = 0),
        (an = qc()),
        ($t = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return tr++, t.then(Yo, Yo), t;
  }
  function Yo() {
    if (--tr === 0 && Vi !== null) {
      $t !== null && ($t.status = "fulfilled");
      var e = Vi;
      (Vi = null), (an = 0), ($t = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sc(e, t) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      e.then(
        function () {
          (i.status = "fulfilled"), (i.value = t);
          for (var l = 0; l < n.length; l++) (0, n[l])(t);
        },
        function (l) {
          for (i.status = "rejected", i.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        }
      ),
      i
    );
  }
  var Vo = z.S;
  z.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      ac(e, t),
      Vo !== null && Vo(e, t);
  };
  var Xi = Q(null);
  function nr() {
    var e = Xi.current;
    return e !== null ? e : it.pooledCache;
  }
  function qa(e, t) {
    t === null ? ne(Xi, Xi.current) : ne(Xi, t.pool);
  }
  function Xo() {
    var e = nr();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var xl = Error(o(460)),
    ca = Error(o(474)),
    qi = Error(o(542)),
    ir = { then: function () {} };
  function qo(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ui() {}
  function m(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ui, ui), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), b(e), e);
      default:
        if (typeof t.status == "string") t.then(ui, ui);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var l = t;
                  (l.status = "fulfilled"), (l.value = i);
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var l = t;
                  (l.status = "rejected"), (l.reason = i);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), b(e), e);
        }
        throw ((a = t), xl);
    }
  }
  var a = null;
  function f() {
    if (a === null) throw Error(o(459));
    var e = a;
    return (a = null), e;
  }
  function b(e) {
    if (e === xl || e === qi) throw Error(o(483));
  }
  var M = !1;
  function C(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function U(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function X(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function J(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Je & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (i.pending = t),
        (t = Va(e)),
        Qs(e, null, n),
        t
      );
    }
    return Ya(e, i, t, n), Va(e);
  }
  function oe(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Pr(e, n);
    }
  }
  function ce(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          u === null ? (l = u = p) : (u = u.next = p), (n = n.next);
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var ie = !1;
  function Ce() {
    if (ie) {
      var e = $t;
      if (e !== null) throw e;
    }
  }
  function Se(e, t, n, i) {
    ie = !1;
    var l = e.updateQueue;
    M = !1;
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var w = g,
        R = w.next;
      (w.next = null), p === null ? (u = R) : (p.next = R), (p = w);
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (g = V.lastBaseUpdate),
        g !== p &&
          (g === null ? (V.firstBaseUpdate = R) : (g.next = R),
          (V.lastBaseUpdate = w)));
    }
    if (u !== null) {
      var k = l.baseState;
      (p = 0), (V = R = w = null), (g = u);
      do {
        var L = g.lane & -536870913,
          B = L !== g.lane;
        if (B ? (Xe & L) === L : (i & L) === L) {
          L !== 0 && L === an && (ie = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Me = e,
              Te = g;
            L = t;
            var et = n;
            switch (Te.tag) {
              case 1:
                if (((Me = Te.payload), typeof Me == "function")) {
                  k = Me.call(et, k, L);
                  break e;
                }
                k = Me;
                break e;
              case 3:
                Me.flags = (Me.flags & -65537) | 128;
              case 0:
                if (
                  ((Me = Te.payload),
                  (L = typeof Me == "function" ? Me.call(et, k, L) : Me),
                  L == null)
                )
                  break e;
                k = T({}, k, L);
                break e;
              case 2:
                M = !0;
            }
          }
          (L = g.callback),
            L !== null &&
              ((e.flags |= 64),
              B && (e.flags |= 8192),
              (B = l.callbacks),
              B === null ? (l.callbacks = [L]) : B.push(L));
        } else
          (B = {
            lane: L,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            V === null ? ((R = V = B), (w = k)) : (V = V.next = B),
            (p |= L);
        if (((g = g.next), g === null)) {
          if (((g = l.shared.pending), g === null)) break;
          (B = g),
            (g = B.next),
            (B.next = null),
            (l.lastBaseUpdate = B),
            (l.shared.pending = null);
        }
      } while (!0);
      V === null && (w = k),
        (l.baseState = w),
        (l.firstBaseUpdate = R),
        (l.lastBaseUpdate = V),
        u === null && (l.shared.lanes = 0),
        (Rl |= p),
        (e.lanes = p),
        (e.memoizedState = k);
    }
  }
  function De(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function _e(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) De(n[e], t);
  }
  var Ee = Q(null),
    Ze = Q(0);
  function Ie(e, t) {
    (e = Ji), ne(Ze, e), ne(Ee, t), (Ji = e | t.baseLanes);
  }
  function ze() {
    ne(Ze, Ji), ne(Ee, Ee.current);
  }
  function He() {
    (Ji = Ze.current), ae(Ee), ae(Ze);
  }
  var xe = 0,
    se = null,
    ye = null,
    Oe = null,
    Ve = !1,
    Fe = !1,
    ft = !1,
    Xt = 0,
    dt = 0,
    bt = null,
    sn = 0;
  function Ne() {
    throw Error(o(321));
  }
  function rn(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function on(e, t, n, i, l, u) {
    return (
      (xe = u),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? id : ld),
      (ft = !1),
      (u = n(i, l)),
      (ft = !1),
      Fe && (u = ht(t, n, i, l)),
      Qi(e),
      u
    );
  }
  function Qi(e) {
    z.H = Wo;
    var t = ye !== null && ye.next !== null;
    if (((xe = 0), (Oe = ye = se = null), (Ve = !1), (dt = 0), (bt = null), t))
      throw Error(o(300));
    e === null ||
      _t ||
      ((e = e.dependencies), e !== null && oa(e) && (_t = !0));
  }
  function ht(e, t, n, i) {
    se = e;
    var l = 0;
    do {
      if ((Fe && (bt = null), (dt = 0), (Fe = !1), 25 <= l))
        throw Error(o(301));
      if (((l += 1), (Oe = ye = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (z.H = em), (u = t(n, i));
    } while (Fe);
    return u;
  }
  function Pe() {
    var e = z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ci(t) : t),
      (e = e.useState()[0]),
      (ye !== null ? ye.memoizedState : null) !== e && (se.flags |= 1024),
      t
    );
  }
  function At() {
    var e = Xt !== 0;
    return (Xt = 0), e;
  }
  function qt(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Nn(e) {
    if (Ve) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Ve = !1;
    }
    (xe = 0), (Oe = ye = se = null), (Fe = !1), (dt = Xt = 0), (bt = null);
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Oe === null ? (se.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
  }
  function rt() {
    if (ye === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ye.next;
    var t = Oe === null ? se.memoizedState : Oe.next;
    if (t !== null) (Oe = t), (ye = e);
    else {
      if (e === null)
        throw se.alternate === null ? Error(o(467)) : Error(o(310));
      (ye = e),
        (e = {
          memoizedState: ye.memoizedState,
          baseState: ye.baseState,
          baseQueue: ye.baseQueue,
          queue: ye.queue,
          next: null,
        }),
        Oe === null ? (se.memoizedState = Oe = e) : (Oe = Oe.next = e);
    }
    return Oe;
  }
  function Qa() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ci(e) {
    var t = dt;
    return (
      (dt += 1),
      bt === null && (bt = []),
      (e = m(bt, e, t)),
      (t = se),
      (Oe === null ? t.memoizedState : Oe.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? id : ld)),
      e
    );
  }
  function ka(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ci(e);
      if (e.$$typeof === P) return yt(e);
    }
    throw Error(o(438, String(e)));
  }
  function lr(e) {
    var t = null,
      n = se.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var i = se.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Qa()), (se.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++) n[i] = ee;
    return t.index++, n;
  }
  function gn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Za(e) {
    var t = rt();
    return Ka(t, ye, e);
  }
  function Ka(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var l = e.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (l !== null) {
        var p = l.next;
        (l.next = u.next), (u.next = p);
      }
      (t.baseQueue = l = u), (i.pending = null);
    }
    if (((u = e.baseState), l === null)) e.memoizedState = u;
    else {
      t = l.next;
      var g = (p = null),
        w = null,
        R = t,
        V = !1;
      do {
        var k = R.lane & -536870913;
        if (k !== R.lane ? (Xe & k) === k : (xe & k) === k) {
          var L = R.revertLane;
          if (L === 0)
            w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              k === an && (V = !0);
          else if ((xe & L) === L) {
            (R = R.next), L === an && (V = !0);
            continue;
          } else
            (k = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              w === null ? ((g = w = k), (p = u)) : (w = w.next = k),
              (se.lanes |= L),
              (Rl |= L);
          (k = R.action),
            ft && n(u, k),
            (u = R.hasEagerState ? R.eagerState : n(u, k));
        } else
          (L = {
            lane: k,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            w === null ? ((g = w = L), (p = u)) : (w = w.next = L),
            (se.lanes |= k),
            (Rl |= k);
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (w === null ? (p = u) : (w.next = g),
        !Ht(u, e.memoizedState) && ((_t = !0), V && ((n = $t), n !== null)))
      )
        throw n;
      (e.memoizedState = u),
        (e.baseState = p),
        (e.baseQueue = w),
        (i.lastRenderedState = u);
    }
    return l === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function ar(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var p = (l = l.next);
      do (u = e(u, p.action)), (p = p.next);
      while (p !== l);
      Ht(u, t.memoizedState) || (_t = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, i];
  }
  function sr(e, t, n) {
    var i = se,
      l = rt(),
      u = ke;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var p = !Ht((ye || l).memoizedState, n);
    p && ((l.memoizedState = n), (_t = !0)), (l = l.queue);
    var g = ko.bind(null, i, l, e);
    if (
      (pr(2048, 8, g, [e]),
      l.getSnapshot !== t || p || (Oe !== null && Oe.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Wa(9, Io(), Qo.bind(null, i, l, n, t), null),
        it === null)
      )
        throw Error(o(349));
      u || (xe & 124) !== 0 || rr(i, t, n);
    }
    return n;
  }
  function rr(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = Qa()), (se.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Qo(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), fi(t) && fa(e);
  }
  function ko(e, t, n) {
    return n(function () {
      fi(t) && fa(e);
    });
  }
  function fi(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function fa(e) {
    var t = Yt(e, 2);
    t !== null && Sn(t, e, 2);
  }
  function Ia(e) {
    var t = St();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), ft)) {
        Pn(!0);
        try {
          n();
        } finally {
          Pn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function or(e, t, n, i) {
    return (e.baseState = n), Ka(e, ye, typeof i == "function" ? i : gn);
  }
  function ur(e, t, n, i, l) {
    if (Jo(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          u.listeners.push(p);
        },
      };
      z.T !== null ? n(!0) : (u.isTransition = !1),
        i(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), cr(t, u))
          : ((u.next = n.next), (t.pending = n.next = u));
    }
  }
  function cr(e, t) {
    var n = t.action,
      i = t.payload,
      l = e.state;
    if (t.isTransition) {
      var u = z.T,
        p = {};
      z.T = p;
      try {
        var g = n(l, i),
          w = z.S;
        w !== null && w(p, g), fr(e, t, g);
      } catch (R) {
        Pa(e, t, R);
      } finally {
        z.T = u;
      }
    } else
      try {
        (u = n(l, i)), fr(e, t, u);
      } catch (R) {
        Pa(e, t, R);
      }
  }
  function fr(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            dr(e, t, i);
          },
          function (i) {
            return Pa(e, t, i);
          }
        )
      : dr(e, t, n);
  }
  function dr(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      Zo(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), cr(e, n)));
  }
  function Pa(e, t, n) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = "rejected"), (t.reason = n), Zo(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function Zo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ko(e, t) {
    return t;
  }
  function Ja(e, t) {
    if (ke) {
      var n = it.formState;
      if (n !== null) {
        e: {
          var i = se;
          if (ke) {
            if (nt) {
              t: {
                for (var l = nt, u = Dn; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (((l = Kn(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                (u = l.data), (l = u === "F!" || u === "F" ? l : null);
              }
              if (l) {
                (nt = Kn(l.nextSibling)), (i = l.data === "F!");
                break e;
              }
            }
            qn(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return (
      (n = St()),
      (n.memoizedState = n.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ko,
        lastRenderedState: t,
      }),
      (n.queue = i),
      (n = ed.bind(null, se, i)),
      (i.dispatch = n),
      (i = Ia(!1)),
      (u = fc.bind(null, se, !1, i.queue)),
      (i = St()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = l),
      (n = ur.bind(null, se, l, u, n)),
      (l.dispatch = n),
      (i.memoizedState = e),
      [t, n, !1]
    );
  }
  function hr(e) {
    var t = rt();
    return Uf(t, ye, e);
  }
  function Uf(e, t, n) {
    if (
      ((t = Ka(e, t, Ko)[0]),
      (e = Za(gn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = ci(t);
      } catch (p) {
        throw p === xl ? qi : p;
      }
    else i = t;
    t = rt();
    var l = t.queue,
      u = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((se.flags |= 2048), Wa(9, Io(), Jp.bind(null, l, n), null)),
      [i, u, e]
    );
  }
  function Jp(e, t) {
    e.action = t;
  }
  function Gf(e) {
    var t = rt(),
      n = ye;
    if (n !== null) return Uf(t, n, e);
    rt(), (t = t.memoizedState), (n = rt());
    var i = n.queue.dispatch;
    return (n.memoizedState = e), [t, i, !1];
  }
  function Wa(e, t, n, i) {
    return (
      (e = { tag: e, create: n, deps: i, inst: t, next: null }),
      (t = se.updateQueue),
      t === null && ((t = Qa()), (se.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function Io() {
    return { destroy: void 0, resource: void 0 };
  }
  function Hf() {
    return rt().memoizedState;
  }
  function Po(e, t, n, i) {
    var l = St();
    (i = i === void 0 ? null : i),
      (se.flags |= e),
      (l.memoizedState = Wa(1 | t, Io(), n, i));
  }
  function pr(e, t, n, i) {
    var l = rt();
    i = i === void 0 ? null : i;
    var u = l.memoizedState.inst;
    ye !== null && i !== null && rn(i, ye.memoizedState.deps)
      ? (l.memoizedState = Wa(t, u, n, i))
      : ((se.flags |= e), (l.memoizedState = Wa(1 | t, u, n, i)));
  }
  function Yf(e, t) {
    Po(8390656, 8, e, t);
  }
  function Vf(e, t) {
    pr(2048, 8, e, t);
  }
  function Xf(e, t) {
    return pr(4, 2, e, t);
  }
  function qf(e, t) {
    return pr(4, 4, e, t);
  }
  function Qf(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function kf(e, t, n) {
    (n = n != null ? n.concat([e]) : null), pr(4, 4, Qf.bind(null, t, e), n);
  }
  function rc() {}
  function Zf(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && rn(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
  }
  function Kf(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && rn(t, i[1])) return i[0];
    if (((i = e()), ft)) {
      Pn(!0);
      try {
        e();
      } finally {
        Pn(!1);
      }
    }
    return (n.memoizedState = [i, t]), i;
  }
  function oc(e, t, n) {
    return n === void 0 || (xe & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Jd()), (se.lanes |= e), (Rl |= e), n);
  }
  function If(e, t, n, i) {
    return Ht(n, t)
      ? n
      : Ee.current !== null
      ? ((e = oc(e, n, i)), Ht(e, t) || (_t = !0), e)
      : (xe & 42) === 0
      ? ((_t = !0), (e.memoizedState = n))
      : ((e = Jd()), (se.lanes |= e), (Rl |= e), t);
  }
  function Pf(e, t, n, i, l) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var p = z.T,
      g = {};
    (z.T = g), fc(e, !1, t, n);
    try {
      var w = l(),
        R = z.S;
      if (
        (R !== null && R(g, w),
        w !== null && typeof w == "object" && typeof w.then == "function")
      ) {
        var V = sc(w, i);
        mr(e, t, V, An(e));
      } else mr(e, t, i, An(e));
    } catch (k) {
      mr(e, t, { then: function () {}, status: "rejected", reason: k }, An());
    } finally {
      (K.p = u), (z.T = p);
    }
  }
  function Wp() {}
  function uc(e, t, n, i) {
    if (e.tag !== 5) throw Error(o(476));
    var l = Jf(e).queue;
    Pf(
      e,
      l,
      t,
      Z,
      n === null
        ? Wp
        : function () {
            return Wf(e), n(i);
          }
    );
  }
  function Jf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gn,
        lastRenderedState: Z,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: gn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Wf(e) {
    var t = Jf(e).next.queue;
    mr(e, t, {}, An());
  }
  function cc() {
    return yt(Rr);
  }
  function Ff() {
    return rt().memoizedState;
  }
  function $f() {
    return rt().memoizedState;
  }
  function Fp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = An();
          e = X(n);
          var i = J(t, e, n);
          i !== null && (Sn(i, t, n), oe(i, t, n)),
            (t = { cache: ua() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function $p(e, t, n) {
    var i = An();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Jo(e)
        ? td(t, n)
        : ((n = qs(e, t, n, i)), n !== null && (Sn(n, e, i), nd(n, t, i)));
  }
  function ed(e, t, n) {
    var i = An();
    mr(e, t, n, i);
  }
  function mr(e, t, n, i) {
    var l = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Jo(e)) td(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            g = u(p, n);
          if (((l.hasEagerState = !0), (l.eagerState = g), Ht(g, p)))
            return Ya(e, t, l, 0), it === null && Ha(), !1;
        } catch {
        } finally {
        }
      if (((n = qs(e, t, l, i)), n !== null))
        return Sn(n, e, i), nd(n, t, i), !0;
    }
    return !1;
  }
  function fc(e, t, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: qc(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Jo(e))
    ) {
      if (t) throw Error(o(479));
    } else (t = qs(e, n, i, 2)), t !== null && Sn(t, e, 2);
  }
  function Jo(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function td(e, t) {
    Fe = Ve = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function nd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Pr(e, n);
    }
  }
  var Wo = {
      readContext: yt,
      use: ka,
      useCallback: Ne,
      useContext: Ne,
      useEffect: Ne,
      useImperativeHandle: Ne,
      useLayoutEffect: Ne,
      useInsertionEffect: Ne,
      useMemo: Ne,
      useReducer: Ne,
      useRef: Ne,
      useState: Ne,
      useDebugValue: Ne,
      useDeferredValue: Ne,
      useTransition: Ne,
      useSyncExternalStore: Ne,
      useId: Ne,
      useHostTransitionStatus: Ne,
      useFormState: Ne,
      useActionState: Ne,
      useOptimistic: Ne,
      useMemoCache: Ne,
      useCacheRefresh: Ne,
    },
    id = {
      readContext: yt,
      use: ka,
      useCallback: function (e, t) {
        return (St().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: yt,
      useEffect: Yf,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          Po(4194308, 4, Qf.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return Po(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Po(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = St();
        t = t === void 0 ? null : t;
        var i = e();
        if (ft) {
          Pn(!0);
          try {
            e();
          } finally {
            Pn(!1);
          }
        }
        return (n.memoizedState = [i, t]), i;
      },
      useReducer: function (e, t, n) {
        var i = St();
        if (n !== void 0) {
          var l = n(t);
          if (ft) {
            Pn(!0);
            try {
              n(t);
            } finally {
              Pn(!1);
            }
          }
        } else l = t;
        return (
          (i.memoizedState = i.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (i.queue = e),
          (e = e.dispatch = $p.bind(null, se, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Ia(e);
        var t = e.queue,
          n = ed.bind(null, se, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: rc,
      useDeferredValue: function (e, t) {
        var n = St();
        return oc(n, e, t);
      },
      useTransition: function () {
        var e = Ia(!1);
        return (
          (e = Pf.bind(null, se, e.queue, !0, !1)),
          (St().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var i = se,
          l = St();
        if (ke) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), it === null)) throw Error(o(349));
          (Xe & 124) !== 0 || rr(i, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Yf(ko.bind(null, i, u, e), [e]),
          (i.flags |= 2048),
          Wa(9, Io(), Qo.bind(null, i, u, n, t), null),
          n
        );
      },
      useId: function () {
        var e = St(),
          t = it.identifierPrefix;
        if (ke) {
          var n = Nt,
            i = Xn;
          (n = (i & ~(1 << (32 - vt(i) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = Xt++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»");
        } else (n = sn++), (t = "«" + t + "r" + n.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: cc,
      useFormState: Ja,
      useActionState: Ja,
      useOptimistic: function (e) {
        var t = St();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = fc.bind(null, se, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: lr,
      useCacheRefresh: function () {
        return (St().memoizedState = Fp.bind(null, se));
      },
    },
    ld = {
      readContext: yt,
      use: ka,
      useCallback: Zf,
      useContext: yt,
      useEffect: Vf,
      useImperativeHandle: kf,
      useInsertionEffect: Xf,
      useLayoutEffect: qf,
      useMemo: Kf,
      useReducer: Za,
      useRef: Hf,
      useState: function () {
        return Za(gn);
      },
      useDebugValue: rc,
      useDeferredValue: function (e, t) {
        var n = rt();
        return If(n, ye.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Za(gn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : ci(e), t];
      },
      useSyncExternalStore: sr,
      useId: Ff,
      useHostTransitionStatus: cc,
      useFormState: hr,
      useActionState: hr,
      useOptimistic: function (e, t) {
        var n = rt();
        return or(n, ye, e, t);
      },
      useMemoCache: lr,
      useCacheRefresh: $f,
    },
    em = {
      readContext: yt,
      use: ka,
      useCallback: Zf,
      useContext: yt,
      useEffect: Vf,
      useImperativeHandle: kf,
      useInsertionEffect: Xf,
      useLayoutEffect: qf,
      useMemo: Kf,
      useReducer: ar,
      useRef: Hf,
      useState: function () {
        return ar(gn);
      },
      useDebugValue: rc,
      useDeferredValue: function (e, t) {
        var n = rt();
        return ye === null ? oc(n, e, t) : If(n, ye.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ar(gn)[0],
          t = rt().memoizedState;
        return [typeof e == "boolean" ? e : ci(e), t];
      },
      useSyncExternalStore: sr,
      useId: Ff,
      useHostTransitionStatus: cc,
      useFormState: Gf,
      useActionState: Gf,
      useOptimistic: function (e, t) {
        var n = rt();
        return ye !== null
          ? or(n, ye, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: lr,
      useCacheRefresh: $f,
    },
    Fa = null,
    gr = 0;
  function Fo(e) {
    var t = gr;
    return (gr += 1), Fa === null && (Fa = []), m(Fa, e, t);
  }
  function vr(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function $o(e, t) {
    throw t.$$typeof === O
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function ad(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sd(e) {
    function t(D, x) {
      if (e) {
        var N = D.deletions;
        N === null ? ((D.deletions = [x]), (D.flags |= 16)) : N.push(x);
      }
    }
    function n(D, x) {
      if (!e) return null;
      for (; x !== null; ) t(D, x), (x = x.sibling);
      return null;
    }
    function i(D) {
      for (var x = new Map(); D !== null; )
        D.key !== null ? x.set(D.key, D) : x.set(D.index, D), (D = D.sibling);
      return x;
    }
    function l(D, x) {
      return (D = Yn(D, x)), (D.index = 0), (D.sibling = null), D;
    }
    function u(D, x, N) {
      return (
        (D.index = N),
        e
          ? ((N = D.alternate),
            N !== null
              ? ((N = N.index), N < x ? ((D.flags |= 67108866), x) : N)
              : ((D.flags |= 67108866), x))
          : ((D.flags |= 1048576), x)
      );
    }
    function p(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function g(D, x, N, q) {
      return x === null || x.tag !== 6
        ? ((x = Sl(N, D.mode, q)), (x.return = D), x)
        : ((x = l(x, N)), (x.return = D), x);
    }
    function w(D, x, N, q) {
      var pe = N.type;
      return pe === H
        ? V(D, x, N.props.children, q, N.key)
        : x !== null &&
          (x.elementType === pe ||
            (typeof pe == "object" &&
              pe !== null &&
              pe.$$typeof === re &&
              ad(pe) === x.type))
        ? ((x = l(x, N.props)), vr(x, N), (x.return = D), x)
        : ((x = Xa(N.type, N.key, N.props, null, D.mode, q)),
          vr(x, N),
          (x.return = D),
          x);
    }
    function R(D, x, N, q) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== N.containerInfo ||
        x.stateNode.implementation !== N.implementation
        ? ((x = Zs(N, D.mode, q)), (x.return = D), x)
        : ((x = l(x, N.children || [])), (x.return = D), x);
    }
    function V(D, x, N, q, pe) {
      return x === null || x.tag !== 7
        ? ((x = Vn(N, D.mode, q, pe)), (x.return = D), x)
        : ((x = l(x, N)), (x.return = D), x);
    }
    function k(D, x, N) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (x = Sl("" + x, D.mode, N)), (x.return = D), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case j:
            return (
              (N = Xa(x.type, x.key, x.props, null, D.mode, N)),
              vr(N, x),
              (N.return = D),
              N
            );
          case G:
            return (x = Zs(x, D.mode, N)), (x.return = D), x;
          case re:
            var q = x._init;
            return (x = q(x._payload)), k(D, x, N);
        }
        if (Qe(x) || he(x))
          return (x = Vn(x, D.mode, N, null)), (x.return = D), x;
        if (typeof x.then == "function") return k(D, Fo(x), N);
        if (x.$$typeof === P) return k(D, wl(D, x), N);
        $o(D, x);
      }
      return null;
    }
    function L(D, x, N, q) {
      var pe = x !== null ? x.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return pe !== null ? null : g(D, x, "" + N, q);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case j:
            return N.key === pe ? w(D, x, N, q) : null;
          case G:
            return N.key === pe ? R(D, x, N, q) : null;
          case re:
            return (pe = N._init), (N = pe(N._payload)), L(D, x, N, q);
        }
        if (Qe(N) || he(N)) return pe !== null ? null : V(D, x, N, q, null);
        if (typeof N.then == "function") return L(D, x, Fo(N), q);
        if (N.$$typeof === P) return L(D, x, wl(D, N), q);
        $o(D, N);
      }
      return null;
    }
    function B(D, x, N, q, pe) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (D = D.get(N) || null), g(x, D, "" + q, pe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case j:
            return (
              (D = D.get(q.key === null ? N : q.key) || null), w(x, D, q, pe)
            );
          case G:
            return (
              (D = D.get(q.key === null ? N : q.key) || null), R(x, D, q, pe)
            );
          case re:
            var Le = q._init;
            return (q = Le(q._payload)), B(D, x, N, q, pe);
        }
        if (Qe(q) || he(q)) return (D = D.get(N) || null), V(x, D, q, pe, null);
        if (typeof q.then == "function") return B(D, x, N, Fo(q), pe);
        if (q.$$typeof === P) return B(D, x, N, wl(x, q), pe);
        $o(x, q);
      }
      return null;
    }
    function Me(D, x, N, q) {
      for (
        var pe = null, Le = null, be = x, we = (x = 0), Ot = null;
        be !== null && we < N.length;
        we++
      ) {
        be.index > we ? ((Ot = be), (be = null)) : (Ot = be.sibling);
        var Ke = L(D, be, N[we], q);
        if (Ke === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Ke.alternate === null && t(D, be),
          (x = u(Ke, x, we)),
          Le === null ? (pe = Ke) : (Le.sibling = Ke),
          (Le = Ke),
          (be = Ot);
      }
      if (we === N.length) return n(D, be), ke && Ui(D, we), pe;
      if (be === null) {
        for (; we < N.length; we++)
          (be = k(D, N[we], q)),
            be !== null &&
              ((x = u(be, x, we)),
              Le === null ? (pe = be) : (Le.sibling = be),
              (Le = be));
        return ke && Ui(D, we), pe;
      }
      for (be = i(be); we < N.length; we++)
        (Ot = B(be, D, we, N[we], q)),
          Ot !== null &&
            (e &&
              Ot.alternate !== null &&
              be.delete(Ot.key === null ? we : Ot.key),
            (x = u(Ot, x, we)),
            Le === null ? (pe = Ot) : (Le.sibling = Ot),
            (Le = Ot));
      return (
        e &&
          be.forEach(function (Xl) {
            return t(D, Xl);
          }),
        ke && Ui(D, we),
        pe
      );
    }
    function Te(D, x, N, q) {
      if (N == null) throw Error(o(151));
      for (
        var pe = null,
          Le = null,
          be = x,
          we = (x = 0),
          Ot = null,
          Ke = N.next();
        be !== null && !Ke.done;
        we++, Ke = N.next()
      ) {
        be.index > we ? ((Ot = be), (be = null)) : (Ot = be.sibling);
        var Xl = L(D, be, Ke.value, q);
        if (Xl === null) {
          be === null && (be = Ot);
          break;
        }
        e && be && Xl.alternate === null && t(D, be),
          (x = u(Xl, x, we)),
          Le === null ? (pe = Xl) : (Le.sibling = Xl),
          (Le = Xl),
          (be = Ot);
      }
      if (Ke.done) return n(D, be), ke && Ui(D, we), pe;
      if (be === null) {
        for (; !Ke.done; we++, Ke = N.next())
          (Ke = k(D, Ke.value, q)),
            Ke !== null &&
              ((x = u(Ke, x, we)),
              Le === null ? (pe = Ke) : (Le.sibling = Ke),
              (Le = Ke));
        return ke && Ui(D, we), pe;
      }
      for (be = i(be); !Ke.done; we++, Ke = N.next())
        (Ke = B(be, D, we, Ke.value, q)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              be.delete(Ke.key === null ? we : Ke.key),
            (x = u(Ke, x, we)),
            Le === null ? (pe = Ke) : (Le.sibling = Ke),
            (Le = Ke));
      return (
        e &&
          be.forEach(function (tg) {
            return t(D, tg);
          }),
        ke && Ui(D, we),
        pe
      );
    }
    function et(D, x, N, q) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === H &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case j:
            e: {
              for (var pe = N.key; x !== null; ) {
                if (x.key === pe) {
                  if (((pe = N.type), pe === H)) {
                    if (x.tag === 7) {
                      n(D, x.sibling),
                        (q = l(x, N.props.children)),
                        (q.return = D),
                        (D = q);
                      break e;
                    }
                  } else if (
                    x.elementType === pe ||
                    (typeof pe == "object" &&
                      pe !== null &&
                      pe.$$typeof === re &&
                      ad(pe) === x.type)
                  ) {
                    n(D, x.sibling),
                      (q = l(x, N.props)),
                      vr(q, N),
                      (q.return = D),
                      (D = q);
                    break e;
                  }
                  n(D, x);
                  break;
                } else t(D, x);
                x = x.sibling;
              }
              N.type === H
                ? ((q = Vn(N.props.children, D.mode, q, N.key)),
                  (q.return = D),
                  (D = q))
                : ((q = Xa(N.type, N.key, N.props, null, D.mode, q)),
                  vr(q, N),
                  (q.return = D),
                  (D = q));
            }
            return p(D);
          case G:
            e: {
              for (pe = N.key; x !== null; ) {
                if (x.key === pe)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === N.containerInfo &&
                    x.stateNode.implementation === N.implementation
                  ) {
                    n(D, x.sibling),
                      (q = l(x, N.children || [])),
                      (q.return = D),
                      (D = q);
                    break e;
                  } else {
                    n(D, x);
                    break;
                  }
                else t(D, x);
                x = x.sibling;
              }
              (q = Zs(N, D.mode, q)), (q.return = D), (D = q);
            }
            return p(D);
          case re:
            return (pe = N._init), (N = pe(N._payload)), et(D, x, N, q);
        }
        if (Qe(N)) return Me(D, x, N, q);
        if (he(N)) {
          if (((pe = he(N)), typeof pe != "function")) throw Error(o(150));
          return (N = pe.call(N)), Te(D, x, N, q);
        }
        if (typeof N.then == "function") return et(D, x, Fo(N), q);
        if (N.$$typeof === P) return et(D, x, wl(D, N), q);
        $o(D, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          x !== null && x.tag === 6
            ? (n(D, x.sibling), (q = l(x, N)), (q.return = D), (D = q))
            : (n(D, x), (q = Sl(N, D.mode, q)), (q.return = D), (D = q)),
          p(D))
        : n(D, x);
    }
    return function (D, x, N, q) {
      try {
        gr = 0;
        var pe = et(D, x, N, q);
        return (Fa = null), pe;
      } catch (be) {
        if (be === xl || be === qi) throw be;
        var Le = Ft(29, be, null, D.mode);
        return (Le.lanes = q), (Le.return = D), Le;
      } finally {
      }
    };
  }
  var $a = sd(!0),
    rd = sd(!1),
    zn = Q(null),
    di = null;
  function Ol(e) {
    var t = e.alternate;
    ne(Et, Et.current & 1),
      ne(zn, e),
      di === null &&
        (t === null || Ee.current !== null || t.memoizedState !== null) &&
        (di = e);
  }
  function od(e) {
    if (e.tag === 22) {
      if ((ne(Et, Et.current), ne(zn, e), di === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (di = e);
      }
    } else Ml();
  }
  function Ml() {
    ne(Et, Et.current), ne(zn, zn.current);
  }
  function ki(e) {
    ae(zn), di === e && (di = null), ae(Et);
  }
  var Et = Q(0);
  function eu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || tf(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function dc(e, t, n, i) {
    (t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var hc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = An(),
        l = X(i);
      (l.payload = t),
        n != null && (l.callback = n),
        (t = J(e, l, i)),
        t !== null && (Sn(t, e, i), oe(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = An(),
        l = X(i);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = J(e, l, i)),
        t !== null && (Sn(t, e, i), oe(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = An(),
        i = X(n);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = J(e, i, n)),
        t !== null && (Sn(t, e, n), oe(t, e, n));
    },
  };
  function ud(e, t, n, i, l, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, u, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ni(n, i) || !Ni(l, u)
        : !0
    );
  }
  function cd(e, t, n, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && hc.enqueueReplaceState(t, t.state, null);
  }
  function da(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t) i !== "ref" && (n[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = T({}, n));
      for (var l in e) n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  var tu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function fd(e) {
    tu(e);
  }
  function dd(e) {
    console.error(e);
  }
  function hd(e) {
    tu(e);
  }
  function nu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function pd(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function pc(e, t, n) {
    return (
      (n = X(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        nu(e, t);
      }),
      n
    );
  }
  function md(e) {
    return (e = X(e)), (e.tag = 3), e;
  }
  function gd(e, t, n, i) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = i.value;
      (e.payload = function () {
        return l(u);
      }),
        (e.callback = function () {
          pd(t, n, i);
        });
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        pd(t, n, i),
          typeof l != "function" &&
            (jl === null ? (jl = new Set([this])) : jl.add(this));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function tm(e, t, n, i, l) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && ra(t, n, l, !0),
        (n = zn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              di === null ? Gc() : n.alternate === null && ct === 0 && (ct = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              i === ir
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([i])) : t.add(i),
                  Yc(e, i, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === ir
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([i])) : n.add(i)),
                  Yc(e, i, l)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return Yc(e, i, l), Gc(), !1;
    }
    if (ke)
      return (
        (t = zn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            i !== ri && ((e = Error(o(422), { cause: i })), mn(Jt(e, n))))
          : (i !== ri && ((t = Error(o(423), { cause: i })), mn(Jt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (i = Jt(i, n)),
            (l = pc(e.stateNode, i, l)),
            ce(e, l),
            ct !== 4 && (ct = 2)),
        !1
      );
    var u = Error(o(520), { cause: i });
    if (
      ((u = Jt(u, n)),
      wr === null ? (wr = [u]) : wr.push(u),
      ct !== 4 && (ct = 2),
      t === null)
    )
      return !0;
    (i = Jt(i, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = pc(n.stateNode, i, e)),
            ce(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (jl === null || !jl.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = md(l)),
              gd(l, e, n, i),
              ce(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vd = Error(o(461)),
    _t = !1;
  function zt(e, t, n, i) {
    t.child = e === null ? rd(t, null, n, i) : $a(t, e.child, n, i);
  }
  function yd(e, t, n, i, l) {
    n = n.render;
    var u = t.ref;
    if ("ref" in i) {
      var p = {};
      for (var g in i) g !== "ref" && (p[g] = i[g]);
    } else p = i;
    return (
      Hi(t),
      (i = on(e, t, n, p, u, l)),
      (g = At()),
      e !== null && !_t
        ? (qt(e, t, l), Zi(e, t, l))
        : (ke && g && Ks(t), (t.flags |= 1), zt(e, t, i, l), t.child)
    );
  }
  function bd(e, t, n, i, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !ks(u) &&
        u.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = u), Ad(e, t, u, i, l))
        : ((e = Xa(n.type, null, i, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Ec(e, l))) {
      var p = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ni), n(p, i) && e.ref === t.ref)
      )
        return Zi(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Yn(u, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ad(e, t, n, i, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ni(u, i) && e.ref === t.ref)
        if (((_t = !1), (t.pendingProps = i = u), Ec(e, l)))
          (e.flags & 131072) !== 0 && (_t = !0);
        else return (t.lanes = e.lanes), Zi(e, t, l);
    }
    return mc(e, t, n, i, l);
  }
  function Sd(e, t, n) {
    var i = t.pendingProps,
      l = i.children,
      u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((i = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, u = 0; l !== null; )
            (u = u | l.lanes | l.childLanes), (l = l.sibling);
          t.childLanes = u & ~i;
        } else (t.childLanes = 0), (t.child = null);
        return Ed(e, t, i, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && qa(t, u !== null ? u.cachePool : null),
          u !== null ? Ie(t, u) : ze(),
          od(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Ed(e, t, u !== null ? u.baseLanes | n : n, n)
        );
    } else
      u !== null
        ? (qa(t, u.cachePool), Ie(t, u), Ml(), (t.memoizedState = null))
        : (e !== null && qa(t, null), ze(), Ml());
    return zt(e, t, l, n), t.child;
  }
  function Ed(e, t, n, i) {
    var l = nr();
    return (
      (l = l === null ? null : { parent: ut._currentValue, pool: l }),
      (t.memoizedState = { baseLanes: n, cachePool: l }),
      e !== null && qa(t, null),
      ze(),
      od(t),
      e !== null && ra(e, t, i, !0),
      null
    );
  }
  function iu(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function mc(e, t, n, i, l) {
    return (
      Hi(t),
      (n = on(e, t, n, i, void 0, l)),
      (i = At()),
      e !== null && !_t
        ? (qt(e, t, l), Zi(e, t, l))
        : (ke && i && Ks(t), (t.flags |= 1), zt(e, t, n, l), t.child)
    );
  }
  function Td(e, t, n, i, l, u) {
    return (
      Hi(t),
      (t.updateQueue = null),
      (n = ht(t, i, n, l)),
      Qi(e),
      (i = At()),
      e !== null && !_t
        ? (qt(e, t, u), Zi(e, t, u))
        : (ke && i && Ks(t), (t.flags |= 1), zt(e, t, n, u), t.child)
    );
  }
  function wd(e, t, n, i, l) {
    if ((Hi(t), t.stateNode === null)) {
      var u = Al,
        p = n.contextType;
      typeof p == "object" && p !== null && (u = yt(p)),
        (u = new n(i, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = hc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = i),
        (u.state = t.memoizedState),
        (u.refs = {}),
        C(t),
        (p = n.contextType),
        (u.context = typeof p == "object" && p !== null ? yt(p) : Al),
        (u.state = t.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (dc(t, n, p, i), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((p = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          p !== u.state && hc.enqueueReplaceState(u, u.state, null),
          Se(t, i, u, l),
          Ce(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      u = t.stateNode;
      var g = t.memoizedProps,
        w = da(n, g);
      u.props = w;
      var R = u.context,
        V = n.contextType;
      (p = Al), typeof V == "object" && V !== null && (p = yt(V));
      var k = n.getDerivedStateFromProps;
      (V =
        typeof k == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        V ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((g || R !== p) && cd(t, u, i, p)),
        (M = !1);
      var L = t.memoizedState;
      (u.state = L),
        Se(t, i, u, l),
        Ce(),
        (R = t.memoizedState),
        g || L !== R || M
          ? (typeof k == "function" && (dc(t, n, k, i), (R = t.memoizedState)),
            (w = M || ud(t, n, w, i, L, R, p))
              ? (V ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = R)),
            (u.props = i),
            (u.state = R),
            (u.context = p),
            (i = w))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (u = t.stateNode),
        U(e, t),
        (p = t.memoizedProps),
        (V = da(n, p)),
        (u.props = V),
        (k = t.pendingProps),
        (L = u.context),
        (R = n.contextType),
        (w = Al),
        typeof R == "object" && R !== null && (w = yt(R)),
        (g = n.getDerivedStateFromProps),
        (R =
          typeof g == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((p !== k || L !== w) && cd(t, u, i, w)),
        (M = !1),
        (L = t.memoizedState),
        (u.state = L),
        Se(t, i, u, l),
        Ce();
      var B = t.memoizedState;
      p !== k ||
      L !== B ||
      M ||
      (e !== null && e.dependencies !== null && oa(e.dependencies))
        ? (typeof g == "function" && (dc(t, n, g, i), (B = t.memoizedState)),
          (V =
            M ||
            ud(t, n, V, i, L, B, w) ||
            (e !== null && e.dependencies !== null && oa(e.dependencies)))
            ? (R ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, B, w),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, B, w)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = B)),
          (u.props = i),
          (u.state = B),
          (u.context = w),
          (i = V))
        : (typeof u.componentDidUpdate != "function" ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      iu(e, t),
      (i = (t.flags & 128) !== 0),
      u || i
        ? ((u = t.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = $a(t, e.child, null, l)),
              (t.child = $a(t, null, n, l)))
            : zt(e, t, n, l),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Zi(e, t, l)),
      e
    );
  }
  function _d(e, t, n, i) {
    return sa(), (t.flags |= 256), zt(e, t, n, i), t.child;
  }
  var gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function vc(e) {
    return { baseLanes: e, cachePool: Xo() };
  }
  function yc(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Rn), e;
  }
  function xd(e, t, n) {
    var i = t.pendingProps,
      l = !1,
      u = (t.flags & 128) !== 0,
      p;
    if (
      ((p = u) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (Et.current & 2) !== 0),
      p && ((l = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ke) {
        if ((l ? Ol(t) : Ml(), ke)) {
          var g = nt,
            w;
          if ((w = g)) {
            e: {
              for (w = g, g = Dn; w.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break e;
                }
                if (((w = Kn(w.nextSibling)), w === null)) {
                  g = null;
                  break e;
                }
              }
              g = w;
            }
            g !== null
              ? ((t.memoizedState = {
                  dehydrated: g,
                  treeContext: Bi !== null ? { id: Xn, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (w = Ft(18, null, null, 0)),
                (w.stateNode = g),
                (w.return = t),
                (t.child = w),
                (gt = t),
                (nt = null),
                (w = !0))
              : (w = !1);
          }
          w || qn(t);
        }
        if (
          ((g = t.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return tf(g) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        ki(t);
      }
      return (
        (g = i.children),
        (i = i.fallback),
        l
          ? (Ml(),
            (l = t.mode),
            (g = lu({ mode: "hidden", children: g }, l)),
            (i = Vn(i, l, n, null)),
            (g.return = t),
            (i.return = t),
            (g.sibling = i),
            (t.child = g),
            (l = t.child),
            (l.memoizedState = vc(n)),
            (l.childLanes = yc(e, p, n)),
            (t.memoizedState = gc),
            i)
          : (Ol(t), bc(t, g))
      );
    }
    if (
      ((w = e.memoizedState), w !== null && ((g = w.dehydrated), g !== null))
    ) {
      if (u)
        t.flags & 256
          ? (Ol(t), (t.flags &= -257), (t = Ac(e, t, n)))
          : t.memoizedState !== null
          ? (Ml(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Ml(),
            (l = i.fallback),
            (g = t.mode),
            (i = lu({ mode: "visible", children: i.children }, g)),
            (l = Vn(l, g, n, null)),
            (l.flags |= 2),
            (i.return = t),
            (l.return = t),
            (i.sibling = l),
            (t.child = i),
            $a(t, e.child, null, n),
            (i = t.child),
            (i.memoizedState = vc(n)),
            (i.childLanes = yc(e, p, n)),
            (t.memoizedState = gc),
            (t = l));
      else if ((Ol(t), tf(g))) {
        if (((p = g.nextSibling && g.nextSibling.dataset), p)) var R = p.dgst;
        (p = R),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = p),
          mn({ value: i, source: null, stack: null }),
          (t = Ac(e, t, n));
      } else if (
        (_t || ra(e, t, n, !1), (p = (n & e.childLanes) !== 0), _t || p)
      ) {
        if (
          ((p = it),
          p !== null &&
            ((i = n & -n),
            (i = (i & 42) !== 0 ? 1 : gs(i)),
            (i = (i & (p.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== w.retryLane))
        )
          throw ((w.retryLane = i), Yt(e, i), Sn(p, e, i), vd);
        g.data === "$?" || Gc(), (t = Ac(e, t, n));
      } else
        g.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (nt = Kn(g.nextSibling)),
            (gt = t),
            (ke = !0),
            (si = null),
            (Dn = !1),
            e !== null &&
              ((Vt[ln++] = Xn),
              (Vt[ln++] = Nt),
              (Vt[ln++] = Bi),
              (Xn = e.id),
              (Nt = e.overflow),
              (Bi = t)),
            (t = bc(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (Ml(),
        (l = i.fallback),
        (g = t.mode),
        (w = e.child),
        (R = w.sibling),
        (i = Yn(w, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = w.subtreeFlags & 65011712),
        R !== null ? (l = Yn(R, l)) : ((l = Vn(l, g, n, null)), (l.flags |= 2)),
        (l.return = t),
        (i.return = t),
        (i.sibling = l),
        (t.child = i),
        (i = l),
        (l = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = vc(n))
          : ((w = g.cachePool),
            w !== null
              ? ((R = ut._currentValue),
                (w = w.parent !== R ? { parent: R, pool: R } : w))
              : (w = Xo()),
            (g = { baseLanes: g.baseLanes | n, cachePool: w })),
        (l.memoizedState = g),
        (l.childLanes = yc(e, p, n)),
        (t.memoizedState = gc),
        i)
      : (Ol(t),
        (n = e.child),
        (e = n.sibling),
        (n = Yn(n, { mode: "visible", children: i.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((p = t.deletions),
          p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function bc(e, t) {
    return (
      (t = lu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function lu(e, t) {
    return (
      (e = Ft(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ac(e, t, n) {
    return (
      $a(t, e.child, null, n),
      (e = bc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Od(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Ws(e.return, t, n);
  }
  function Sc(e, t, n, i, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Md(e, t, n) {
    var i = t.pendingProps,
      l = i.revealOrder,
      u = i.tail;
    if ((zt(e, t, i.children, n), (i = Et.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
          else if (e.tag === 19) Od(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    switch ((ne(Et, i), l)) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && eu(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Sc(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && eu(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Sc(t, !0, n, null, u);
        break;
      case "together":
        Sc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zi(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Rl |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Yn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Yn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ec(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && oa(e)));
  }
  function nm(e, t, n) {
    switch (t.tag) {
      case 3:
        te(t, t.stateNode.containerInfo),
          oi(t, ut, e.memoizedState.cache),
          sa();
        break;
      case 27:
      case 5:
        va(t);
        break;
      case 4:
        te(t, t.stateNode.containerInfo);
        break;
      case 10:
        oi(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Ol(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? xd(e, t, n)
            : (Ol(t), (e = Zi(e, t, n)), e !== null ? e.sibling : null);
        Ol(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((i = (n & t.childLanes) !== 0),
          i || (ra(e, t, n, !1), (i = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (i) return Md(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ne(Et, Et.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sd(e, t, n);
      case 24:
        oi(t, ut, e.memoizedState.cache);
    }
    return Zi(e, t, n);
  }
  function Cd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) _t = !0;
      else {
        if (!Ec(e, n) && (t.flags & 128) === 0) return (_t = !1), nm(e, t, n);
        _t = (e.flags & 131072) !== 0;
      }
    else (_t = !1), ke && (t.flags & 1048576) !== 0 && Uo(t, El, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType,
            l = i._init;
          if (((i = l(i._payload)), (t.type = i), typeof i == "function"))
            ks(i)
              ? ((e = da(i, e)), (t.tag = 1), (t = wd(null, t, i, e, n)))
              : ((t.tag = 0), (t = mc(null, t, i, e, n)));
          else {
            if (i != null) {
              if (((l = i.$$typeof), l === ue)) {
                (t.tag = 11), (t = yd(null, t, i, e, n));
                break e;
              } else if (l === ge) {
                (t.tag = 14), (t = bd(null, t, i, e, n));
                break e;
              }
            }
            throw ((t = lt(i) || i), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return mc(e, t, t.type, t.pendingProps, n);
      case 1:
        return (i = t.type), (l = da(i, t.pendingProps)), wd(e, t, i, l, n);
      case 3:
        e: {
          if ((te(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          (l = u.element), U(e, t), Se(t, i, null, n);
          var p = t.memoizedState;
          if (
            ((i = p.cache),
            oi(t, ut, i),
            i !== u.cache && Fs(t, [ut], n, !0),
            Ce(),
            (i = p.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: p.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = _d(e, t, i, n);
              break e;
            } else if (i !== l) {
              (l = Jt(Error(o(424)), t)), mn(l), (t = _d(e, t, i, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                nt = Kn(e.firstChild),
                  gt = t,
                  ke = !0,
                  si = null,
                  Dn = !0,
                  n = rd(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((sa(), i === l)) {
              t = Zi(e, t, n);
              break e;
            }
            zt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          iu(e, t),
          e === null
            ? (n = Rh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : ke ||
                ((n = t.type),
                (e = t.pendingProps),
                (i = yu(Ae.current).createElement(n)),
                (i[wt] = t),
                (i[Lt] = e),
                jt(i, n, e),
                Ye(i),
                (t.stateNode = i))
            : (t.memoizedState = Rh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          va(t),
          e === null &&
            ke &&
            ((i = t.stateNode = Dh(t.type, t.pendingProps, Ae.current)),
            (gt = t),
            (Dn = !0),
            (l = nt),
            Ul(t.type) ? ((nf = l), (nt = Kn(i.firstChild))) : (nt = l)),
          zt(e, t, t.pendingProps.children, n),
          iu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ke &&
            ((l = i = nt) &&
              ((i = Dm(i, t.type, t.pendingProps, Dn)),
              i !== null
                ? ((t.stateNode = i),
                  (gt = t),
                  (nt = Kn(i.firstChild)),
                  (Dn = !1),
                  (l = !0))
                : (l = !1)),
            l || qn(t)),
          va(t),
          (l = t.type),
          (u = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (i = u.children),
          Fc(l, u) ? (i = null) : p !== null && Fc(l, p) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((l = on(e, t, Pe, null, null, n)), (Rr._currentValue = l)),
          iu(e, t),
          zt(e, t, i, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            ke &&
            ((e = n = nt) &&
              ((n = Nm(n, t.pendingProps, Dn)),
              n !== null
                ? ((t.stateNode = n), (gt = t), (nt = null), (e = !0))
                : (e = !1)),
            e || qn(t)),
          null
        );
      case 13:
        return xd(e, t, n);
      case 4:
        return (
          te(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = $a(t, null, i, n)) : zt(e, t, i, n),
          t.child
        );
      case 11:
        return yd(e, t, t.type, t.pendingProps, n);
      case 7:
        return zt(e, t, t.pendingProps, n), t.child;
      case 8:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return zt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (i = t.pendingProps),
          oi(t, t.type, i.value),
          zt(e, t, i.children, n),
          t.child
        );
      case 9:
        return (
          (l = t.type._context),
          (i = t.pendingProps.children),
          Hi(t),
          (l = yt(l)),
          (i = i(l)),
          (t.flags |= 1),
          zt(e, t, i, n),
          t.child
        );
      case 14:
        return bd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Ad(e, t, t.type, t.pendingProps, n);
      case 19:
        return Md(e, t, n);
      case 31:
        return (
          (i = t.pendingProps),
          (n = t.mode),
          (i = { mode: i.mode, children: i.children }),
          e === null
            ? ((n = lu(i, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Yn(e.child, i)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return Sd(e, t, n);
      case 24:
        return (
          Hi(t),
          (i = yt(ut)),
          e === null
            ? ((l = nr()),
              l === null &&
                ((l = it),
                (u = ua()),
                (l.pooledCache = u),
                u.refCount++,
                u !== null && (l.pooledCacheLanes |= n),
                (l = u)),
              (t.memoizedState = { parent: i, cache: l }),
              C(t),
              oi(t, ut, l))
            : ((e.lanes & n) !== 0 && (U(e, t), Se(t, null, null, n), Ce()),
              (l = e.memoizedState),
              (u = t.memoizedState),
              l.parent !== i
                ? ((l = { parent: i, cache: i }),
                  (t.memoizedState = l),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = l),
                  oi(t, ut, i))
                : ((i = u.cache),
                  oi(t, ut, i),
                  i !== l.cache && Fs(t, [ut], n, !0))),
          zt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Ki(e) {
    e.flags |= 4;
  }
  function Dd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Gh(t))) {
      if (
        ((t = zn.current),
        t !== null &&
          ((Xe & 4194048) === Xe
            ? di !== null
            : ((Xe & 62914560) !== Xe && (Xe & 536870912) === 0) || t !== di))
      )
        throw ((a = ir), ca);
      e.flags |= 8192;
    }
  }
  function au(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Kr() : 536870912), (e.lanes |= t), (is |= t));
  }
  function yr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 65011712),
          (i |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags),
          (i |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = n), t;
  }
  function im(e, t, n) {
    var i = t.pendingProps;
    switch ((Is(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(t), null;
      case 1:
        return ot(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          kn(ut),
          fn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (aa(t)
              ? Ki(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Tl())),
          ot(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (Ki(t),
              n !== null ? (ot(t), Dd(t, n)) : (ot(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (Ki(t), ot(t), Dd(t, n))
              : (ot(t), (t.flags &= -16777217))
            : (e.memoizedProps !== i && Ki(t), ot(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        ya(t), (n = Ae.current);
        var l = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== i && Ki(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return ot(t), null;
          }
          (e = me.current),
            aa(t) ? Ps(t) : ((e = Dh(l, i, n)), (t.stateNode = e), Ki(t));
        }
        return ot(t), null;
      case 5:
        if ((ya(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && Ki(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return ot(t), null;
          }
          if (((e = me.current), aa(t))) Ps(t);
          else {
            switch (((l = yu(Ae.current)), e)) {
              case 1:
                e = l.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = l.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = l.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = l.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof i.is == "string"
                        ? l.createElement("select", { is: i.is })
                        : l.createElement("select")),
                      i.multiple
                        ? (e.multiple = !0)
                        : i.size && (e.size = i.size);
                    break;
                  default:
                    e =
                      typeof i.is == "string"
                        ? l.createElement(n, { is: i.is })
                        : l.createElement(n);
                }
            }
            (e[wt] = t), (e[Lt] = i);
            e: for (l = t.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                (l.child.return = l), (l = l.child);
                continue;
              }
              if (l === t) break e;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === t) break e;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
            t.stateNode = e;
            e: switch ((jt(e, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!i.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ki(t);
          }
        }
        return ot(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && Ki(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = Ae.current), aa(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (i = null),
              (l = gt),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  i = l.memoizedProps;
              }
            (e[wt] = t),
              (e = !!(
                e.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Th(e.nodeValue, n)
              )),
              e || qn(t);
          } else (e = yu(e).createTextNode(i)), (e[wt] = t), (t.stateNode = e);
        }
        return ot(t), null;
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = aa(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(317));
              l[wt] = t;
            } else
              sa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ot(t), (l = !1);
          } else
            (l = Tl()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (l = !0);
          if (!l) return t.flags & 256 ? (ki(t), t) : (ki(t), null);
        }
        if ((ki(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (
          ((n = i !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (i = t.child),
            (l = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (l = i.alternate.memoizedState.cachePool.pool);
          var u = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (u = i.memoizedState.cachePool.pool),
            u !== l && (i.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          au(t, t.updateQueue),
          ot(t),
          null
        );
      case 4:
        return fn(), e === null && Kc(t.stateNode.containerInfo), ot(t), null;
      case 10:
        return kn(t.type), ot(t), null;
      case 19:
        if ((ae(Et), (l = t.memoizedState), l === null)) return ot(t), null;
        if (((i = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (i) yr(l, !1);
          else {
            if (ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = eu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      yr(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      au(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Bo(n, e), (n = n.sibling);
                  return ne(Et, (Et.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Tn() > ou &&
              ((t.flags |= 128), (i = !0), yr(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = eu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                au(t, e),
                yr(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !u.alternate &&
                  !ke)
              )
                return ot(t), null;
            } else
              2 * Tn() - l.renderingStartTime > ou &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), yr(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (l.last = u));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Tn()),
            (t.sibling = null),
            (e = Et.current),
            ne(Et, i ? (e & 1) | 2 : e & 1),
            t)
          : (ot(t), null);
      case 22:
      case 23:
        return (
          ki(t),
          He(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ot(t),
          (n = t.updateQueue),
          n !== null && au(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== n && (t.flags |= 2048),
          e !== null && ae(Xi),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          kn(ut),
          ot(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function lm(e, t) {
    switch ((Is(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kn(ut),
          fn(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ya(t), null;
      case 13:
        if (
          (ki(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          sa();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ae(Et), null;
      case 4:
        return fn(), null;
      case 10:
        return kn(t.type), null;
      case 22:
      case 23:
        return (
          ki(t),
          He(),
          e !== null && ae(Xi),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kn(ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(e, t) {
    switch ((Is(t), t.tag)) {
      case 3:
        kn(ut), fn();
        break;
      case 26:
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        fn();
        break;
      case 13:
        ki(t);
        break;
      case 19:
        ae(Et);
        break;
      case 10:
        kn(t.type);
        break;
      case 22:
      case 23:
        ki(t), He(), e !== null && ae(Xi);
        break;
      case 24:
        kn(ut);
    }
  }
  function br(e, t) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var l = i.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var u = n.create,
              p = n.inst;
            (i = u()), (p.destroy = i);
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (g) {
      tt(t, t.return, g);
    }
  }
  function Cl(e, t, n) {
    try {
      var i = t.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var p = i.inst,
              g = p.destroy;
            if (g !== void 0) {
              (p.destroy = void 0), (l = t);
              var w = n,
                R = g;
              try {
                R();
              } catch (V) {
                tt(l, w, V);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (V) {
      tt(t, t.return, V);
    }
  }
  function zd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        _e(t, n);
      } catch (i) {
        tt(e, e.return, i);
      }
    }
  }
  function Rd(e, t, n) {
    (n.props = da(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      tt(e, t, i);
    }
  }
  function Ar(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(i)) : (n.current = i);
      }
    } catch (l) {
      tt(e, t, l);
    }
  }
  function hi(e, t) {
    var n = e.ref,
      i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (l) {
          tt(e, t, l);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          tt(e, t, l);
        }
      else n.current = null;
  }
  function jd(e) {
    var t = e.type,
      n = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (l) {
      tt(e, e.return, l);
    }
  }
  function Tc(e, t, n) {
    try {
      var i = e.stateNode;
      _m(i, e.type, n, t), (i[Lt] = t);
    } catch (l) {
      tt(e, e.return, l);
    }
  }
  function Ld(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ul(e.type)) ||
      e.tag === 4
    );
  }
  function wc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ld(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Ul(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _c(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = vu));
    else if (
      i !== 4 &&
      (i === 27 && Ul(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (_c(e, t, n), e = e.sibling; e !== null; )
        _c(e, t, n), (e = e.sibling);
  }
  function su(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      i !== 4 &&
      (i === 27 && Ul(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (su(e, t, n), e = e.sibling; e !== null; )
        su(e, t, n), (e = e.sibling);
  }
  function Bd(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var i = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      jt(t, i, n), (t[wt] = e), (t[Lt] = n);
    } catch (u) {
      tt(e, e.return, u);
    }
  }
  var Ii = !1,
    pt = !1,
    xc = !1,
    Ud = typeof WeakSet == "function" ? WeakSet : Set,
    xt = null;
  function am(e, t) {
    if (((e = e.containerInfo), (Jc = wu), (e = Ls(e)), Ga(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var l = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var p = 0,
              g = -1,
              w = -1,
              R = 0,
              V = 0,
              k = e,
              L = null;
            t: for (;;) {
              for (
                var B;
                k !== n || (l !== 0 && k.nodeType !== 3) || (g = p + l),
                  k !== u || (i !== 0 && k.nodeType !== 3) || (w = p + i),
                  k.nodeType === 3 && (p += k.nodeValue.length),
                  (B = k.firstChild) !== null;

              )
                (L = k), (k = B);
              for (;;) {
                if (k === e) break t;
                if (
                  (L === n && ++R === l && (g = p),
                  L === u && ++V === i && (w = p),
                  (B = k.nextSibling) !== null)
                )
                  break;
                (k = L), (L = k.parentNode);
              }
              k = B;
            }
            n = g === -1 || w === -1 ? null : { start: g, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Wc = { focusedElem: e, selectionRange: n }, wu = !1, xt = t;
      xt !== null;

    )
      if (
        ((t = xt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (xt = e);
      else
        for (; xt !== null; ) {
          switch (((t = xt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (n = t),
                  (l = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = n.stateNode);
                try {
                  var Me = da(n.type, l, n.elementType === n.type);
                  (e = i.getSnapshotBeforeUpdate(Me, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Te) {
                  tt(n, n.return, Te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  ef(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ef(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (xt = e);
            break;
          }
          xt = t.return;
        }
  }
  function Gd(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dl(e, n), i & 4 && br(5, n);
        break;
      case 1:
        if ((Dl(e, n), i & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              tt(n, n.return, p);
            }
          else {
            var l = da(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              tt(n, n.return, p);
            }
          }
        i & 64 && zd(n), i & 512 && Ar(n, n.return);
        break;
      case 3:
        if ((Dl(e, n), i & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            _e(e, t);
          } catch (p) {
            tt(n, n.return, p);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Bd(n);
      case 26:
      case 5:
        Dl(e, n), t === null && i & 4 && jd(n), i & 512 && Ar(n, n.return);
        break;
      case 12:
        Dl(e, n);
        break;
      case 13:
        Dl(e, n),
          i & 4 && Vd(e, n),
          i & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = pm.bind(null, n)), zm(e, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || Ii), !i)) {
          (t = (t !== null && t.memoizedState !== null) || pt), (l = Ii);
          var u = pt;
          (Ii = i),
            (pt = t) && !u ? Nl(e, n, (n.subtreeFlags & 8772) !== 0) : Dl(e, n),
            (Ii = l),
            (pt = u);
        }
        break;
      case 30:
        break;
      default:
        Dl(e, n);
    }
  }
  function Hd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && As(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var at = null,
    un = !1;
  function Pi(e, t, n) {
    for (n = n.child; n !== null; ) Yd(e, t, n), (n = n.sibling);
  }
  function Yd(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(tl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        pt || hi(n, t),
          Pi(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        pt || hi(n, t);
        var i = at,
          l = un;
        Ul(n.type) && ((at = n.stateNode), (un = !1)),
          Pi(e, t, n),
          Cr(n.stateNode),
          (at = i),
          (un = l);
        break;
      case 5:
        pt || hi(n, t);
      case 6:
        if (
          ((i = at),
          (l = un),
          (at = null),
          Pi(e, t, n),
          (at = i),
          (un = l),
          at !== null)
        )
          if (un)
            try {
              (at.nodeType === 9
                ? at.body
                : at.nodeName === "HTML"
                ? at.ownerDocument.body
                : at
              ).removeChild(n.stateNode);
            } catch (u) {
              tt(n, t, u);
            }
          else
            try {
              at.removeChild(n.stateNode);
            } catch (u) {
              tt(n, t, u);
            }
        break;
      case 18:
        at !== null &&
          (un
            ? ((e = at),
              Mh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              Ur(e))
            : Mh(at, n.stateNode));
        break;
      case 4:
        (i = at),
          (l = un),
          (at = n.stateNode.containerInfo),
          (un = !0),
          Pi(e, t, n),
          (at = i),
          (un = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pt || Cl(2, n, t), pt || Cl(4, n, t), Pi(e, t, n);
        break;
      case 1:
        pt ||
          (hi(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Rd(n, t, i)),
          Pi(e, t, n);
        break;
      case 21:
        Pi(e, t, n);
        break;
      case 22:
        (pt = (i = pt) || n.memoizedState !== null), Pi(e, t, n), (pt = i);
        break;
      default:
        Pi(e, t, n);
    }
  }
  function Vd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ur(e);
      } catch (n) {
        tt(t, t.return, n);
      }
  }
  function sm(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ud()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ud()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Oc(e, t) {
    var n = sm(e);
    t.forEach(function (i) {
      var l = mm.bind(null, e, i);
      n.has(i) || (n.add(i), i.then(l, l));
    });
  }
  function vn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var l = n[i],
          u = e,
          p = t,
          g = p;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Ul(g.type)) {
                (at = g.stateNode), (un = !1);
                break e;
              }
              break;
            case 5:
              (at = g.stateNode), (un = !1);
              break e;
            case 3:
            case 4:
              (at = g.stateNode.containerInfo), (un = !0);
              break e;
          }
          g = g.return;
        }
        if (at === null) throw Error(o(160));
        Yd(u, p, l),
          (at = null),
          (un = !1),
          (u = l.alternate),
          u !== null && (u.return = null),
          (l.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Xd(t, e), (t = t.sibling);
  }
  var Zn = null;
  function Xd(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vn(t, e),
          yn(e),
          i & 4 && (Cl(3, e, e.return), br(3, e), Cl(5, e, e.return));
        break;
      case 1:
        vn(t, e),
          yn(e),
          i & 512 && (pt || n === null || hi(n, n.return)),
          i & 64 &&
            Ii &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var l = Zn;
        if (
          (vn(t, e),
          yn(e),
          i & 512 && (pt || n === null || hi(n, n.return)),
          i & 4)
        ) {
          var u = n !== null ? n.memoizedState : null;
          if (((i = e.memoizedState), n === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  (i = e.type),
                    (n = e.memoizedProps),
                    (l = l.ownerDocument || l);
                  t: switch (i) {
                    case "title":
                      (u = l.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Wn] ||
                          u[wt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = l.createElement(i)),
                          l.head.insertBefore(
                            u,
                            l.querySelector("head > title")
                          )),
                        jt(u, i, n),
                        (u[wt] = e),
                        Ye(u),
                        (i = u);
                      break e;
                    case "link":
                      var p = Bh("link", "href", l).get(i + (n.href || ""));
                      if (p) {
                        for (var g = 0; g < p.length; g++)
                          if (
                            ((u = p[g]),
                            u.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              u.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              u.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              u.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            p.splice(g, 1);
                            break t;
                          }
                      }
                      (u = l.createElement(i)),
                        jt(u, i, n),
                        l.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (p = Bh("meta", "content", l).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < p.length; g++)
                          if (
                            ((u = p[g]),
                            u.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              u.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              u.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              u.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            p.splice(g, 1);
                            break t;
                          }
                      }
                      (u = l.createElement(i)),
                        jt(u, i, n),
                        l.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  (u[wt] = e), Ye(u), (i = u);
                }
                e.stateNode = i;
              } else Uh(l, e.type, e.stateNode);
            else e.stateNode = Lh(l, i, e.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : u.count--,
                i === null
                  ? Uh(l, e.type, e.stateNode)
                  : Lh(l, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                Tc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        vn(t, e),
          yn(e),
          i & 512 && (pt || n === null || hi(n, n.return)),
          n !== null && i & 4 && Tc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (vn(t, e),
          yn(e),
          i & 512 && (pt || n === null || hi(n, n.return)),
          e.flags & 32)
        ) {
          l = e.stateNode;
          try {
            hn(l, "");
          } catch (B) {
            tt(e, e.return, B);
          }
        }
        i & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), Tc(e, l, n !== null ? n.memoizedProps : l)),
          i & 1024 && (xc = !0);
        break;
      case 6:
        if ((vn(t, e), yn(e), i & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (i = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = i;
          } catch (B) {
            tt(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          ((Su = null),
          (l = Zn),
          (Zn = bu(t.containerInfo)),
          vn(t, e),
          (Zn = l),
          yn(e),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ur(t.containerInfo);
          } catch (B) {
            tt(e, e.return, B);
          }
        xc && ((xc = !1), qd(e));
        break;
      case 4:
        (i = Zn),
          (Zn = bu(e.stateNode.containerInfo)),
          vn(t, e),
          yn(e),
          (Zn = i);
        break;
      case 12:
        vn(t, e), yn(e);
        break;
      case 13:
        vn(t, e),
          yn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Rc = Tn()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Oc(e, i)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var w = n !== null && n.memoizedState !== null,
          R = Ii,
          V = pt;
        if (
          ((Ii = R || l),
          (pt = V || w),
          vn(t, e),
          (pt = V),
          (Ii = R),
          yn(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || w || Ii || pt || ha(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                w = n = t;
                try {
                  if (((u = w.stateNode), l))
                    (p = u.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none");
                  else {
                    g = w.stateNode;
                    var k = w.memoizedProps.style,
                      L =
                        k != null && k.hasOwnProperty("display")
                          ? k.display
                          : null;
                    g.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (B) {
                  tt(w, w.return, B);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = l ? "" : w.memoizedProps;
                } catch (B) {
                  tt(w, w.return, B);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Oc(e, n))));
        break;
      case 19:
        vn(t, e),
          yn(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Oc(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        vn(t, e), yn(e);
    }
  }
  function yn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (Ld(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              u = wc(e);
            su(e, u, l);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (hn(p, ""), (n.flags &= -33));
            var g = wc(e);
            su(e, g, p);
            break;
          case 3:
          case 4:
            var w = n.stateNode.containerInfo,
              R = wc(e);
            _c(e, R, w);
            break;
          default:
            throw Error(o(161));
        }
      } catch (V) {
        tt(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        qd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Dl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Gd(e, t.alternate, t), (t = t.sibling);
  }
  function ha(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cl(4, t, t.return), ha(t);
          break;
        case 1:
          hi(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Rd(t, t.return, n),
            ha(t);
          break;
        case 27:
          Cr(t.stateNode);
        case 26:
        case 5:
          hi(t, t.return), ha(t);
          break;
        case 22:
          t.memoizedState === null && ha(t);
          break;
        case 30:
          ha(t);
          break;
        default:
          ha(t);
      }
      e = e.sibling;
    }
  }
  function Nl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        l = e,
        u = t,
        p = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Nl(l, u, n), br(4, u);
          break;
        case 1:
          if (
            (Nl(l, u, n),
            (i = u),
            (l = i.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (R) {
              tt(i, i.return, R);
            }
          if (((i = u), (l = i.updateQueue), l !== null)) {
            var g = i.stateNode;
            try {
              var w = l.shared.hiddenCallbacks;
              if (w !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < w.length; l++)
                  De(w[l], g);
            } catch (R) {
              tt(i, i.return, R);
            }
          }
          n && p & 64 && zd(u), Ar(u, u.return);
          break;
        case 27:
          Bd(u);
        case 26:
        case 5:
          Nl(l, u, n), n && i === null && p & 4 && jd(u), Ar(u, u.return);
          break;
        case 12:
          Nl(l, u, n);
          break;
        case 13:
          Nl(l, u, n), n && p & 4 && Vd(l, u);
          break;
        case 22:
          u.memoizedState === null && Nl(l, u, n), Ar(u, u.return);
          break;
        case 30:
          break;
        default:
          Nl(l, u, n);
      }
      t = t.sibling;
    }
  }
  function Mc(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && _l(n));
  }
  function Cc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && _l(e));
  }
  function pi(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Qd(e, t, n, i), (t = t.sibling);
  }
  function Qd(e, t, n, i) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pi(e, t, n, i), l & 2048 && br(9, t);
        break;
      case 1:
        pi(e, t, n, i);
        break;
      case 3:
        pi(e, t, n, i),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && _l(e)));
        break;
      case 12:
        if (l & 2048) {
          pi(e, t, n, i), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              p = u.id,
              g = u.onPostCommit;
            typeof g == "function" &&
              g(
                p,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (w) {
            tt(t, t.return, w);
          }
        } else pi(e, t, n, i);
        break;
      case 13:
        pi(e, t, n, i);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? pi(e, t, n, i)
              : Sr(e, t)
            : u._visibility & 2
            ? pi(e, t, n, i)
            : ((u._visibility |= 2),
              es(e, t, n, i, (t.subtreeFlags & 10256) !== 0)),
          l & 2048 && Mc(p, t);
        break;
      case 24:
        pi(e, t, n, i), l & 2048 && Cc(t.alternate, t);
        break;
      default:
        pi(e, t, n, i);
    }
  }
  function es(e, t, n, i, l) {
    for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        p = t,
        g = n,
        w = i,
        R = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          es(u, p, g, w, l), br(8, p);
          break;
        case 23:
          break;
        case 22:
          var V = p.stateNode;
          p.memoizedState !== null
            ? V._visibility & 2
              ? es(u, p, g, w, l)
              : Sr(u, p)
            : ((V._visibility |= 2), es(u, p, g, w, l)),
            l && R & 2048 && Mc(p.alternate, p);
          break;
        case 24:
          es(u, p, g, w, l), l && R & 2048 && Cc(p.alternate, p);
          break;
        default:
          es(u, p, g, w, l);
      }
      t = t.sibling;
    }
  }
  function Sr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          i = t,
          l = i.flags;
        switch (i.tag) {
          case 22:
            Sr(n, i), l & 2048 && Mc(i.alternate, i);
            break;
          case 24:
            Sr(n, i), l & 2048 && Cc(i.alternate, i);
            break;
          default:
            Sr(n, i);
        }
        t = t.sibling;
      }
  }
  var Er = 8192;
  function ts(e) {
    if (e.subtreeFlags & Er)
      for (e = e.child; e !== null; ) kd(e), (e = e.sibling);
  }
  function kd(e) {
    switch (e.tag) {
      case 26:
        ts(e),
          e.flags & Er &&
            e.memoizedState !== null &&
            km(Zn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ts(e);
        break;
      case 3:
      case 4:
        var t = Zn;
        (Zn = bu(e.stateNode.containerInfo)), ts(e), (Zn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Er), (Er = 16777216), ts(e), (Er = t))
            : ts(e));
        break;
      default:
        ts(e);
    }
  }
  function Zd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Tr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (xt = i), Id(i, e);
        }
      Zd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Kd(e), (e = e.sibling);
  }
  function Kd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Tr(e), e.flags & 2048 && Cl(9, e, e.return);
        break;
      case 3:
        Tr(e);
        break;
      case 12:
        Tr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ru(e))
          : Tr(e);
        break;
      default:
        Tr(e);
    }
  }
  function ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (xt = i), Id(i, e);
        }
      Zd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Cl(8, t, t.return), ru(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ru(t));
          break;
        default:
          ru(t);
      }
      e = e.sibling;
    }
  }
  function Id(e, t) {
    for (; xt !== null; ) {
      var n = xt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          _l(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (xt = i);
      else
        e: for (n = e; xt !== null; ) {
          i = xt;
          var l = i.sibling,
            u = i.return;
          if ((Hd(i), i === n)) {
            xt = null;
            break e;
          }
          if (l !== null) {
            (l.return = u), (xt = l);
            break e;
          }
          xt = u;
        }
    }
  }
  var rm = {
      getCacheForType: function (e) {
        var t = yt(ut),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    om = typeof WeakMap == "function" ? WeakMap : Map,
    Je = 0,
    it = null,
    Be = null,
    Xe = 0,
    We = 0,
    bn = null,
    zl = !1,
    ns = !1,
    Dc = !1,
    Ji = 0,
    ct = 0,
    Rl = 0,
    pa = 0,
    Nc = 0,
    Rn = 0,
    is = 0,
    wr = null,
    cn = null,
    zc = !1,
    Rc = 0,
    ou = 1 / 0,
    uu = null,
    jl = null,
    Rt = 0,
    Ll = null,
    ls = null,
    as = 0,
    jc = 0,
    Lc = null,
    Pd = null,
    _r = 0,
    Bc = null;
  function An() {
    if ((Je & 2) !== 0 && Xe !== 0) return Xe & -Xe;
    if (z.T !== null) {
      var e = an;
      return e !== 0 ? e : qc();
    }
    return Jr();
  }
  function Jd() {
    Rn === 0 && (Rn = (Xe & 536870912) === 0 || ke ? Zr() : 536870912);
    var e = zn.current;
    return e !== null && (e.flags |= 32), Rn;
  }
  function Sn(e, t, n) {
    ((e === it && (We === 2 || We === 9)) || e.cancelPendingCommit !== null) &&
      (ss(e, 0), Bl(e, Xe, Rn, !1)),
      Jn(e, n),
      ((Je & 2) === 0 || e !== it) &&
        (e === it &&
          ((Je & 2) === 0 && (pa |= n), ct === 4 && Bl(e, Xe, Rn, !1)),
        mi(e));
  }
  function Wd(e, t, n) {
    if ((Je & 6) !== 0) throw Error(o(327));
    var i = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || kl(e, t),
      l = i ? fm(e, t) : Hc(e, t, !0),
      u = i;
    do {
      if (l === 0) {
        ns && !i && Bl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !um(n))) {
          (l = Hc(e, t, !1)), (u = !1);
          continue;
        }
        if (l === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var p = 0;
          else
            (p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            t = p;
            e: {
              var g = e;
              l = wr;
              var w = g.current.memoizedState.isDehydrated;
              if ((w && (ss(g, p).flags |= 256), (p = Hc(g, p, !1)), p !== 2)) {
                if (Dc && !w) {
                  (g.errorRecoveryDisabledLanes |= u), (pa |= u), (l = 4);
                  break e;
                }
                (u = cn),
                  (cn = l),
                  u !== null && (cn === null ? (cn = u) : cn.push.apply(cn, u));
              }
              l = p;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          ss(e, 0), Bl(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), (u = l), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bl(i, t, Rn, !zl);
              break e;
            case 2:
              cn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((l = Rc + 300 - Tn()), 10 < l)) {
            if ((Bl(i, t, Rn, !zl), wa(i, 0, !0) !== 0)) break e;
            i.timeoutHandle = xh(
              Fd.bind(null, i, n, cn, uu, zc, t, Rn, pa, is, zl, u, 2, -0, 0),
              l
            );
            break e;
          }
          Fd(i, n, cn, uu, zc, t, Rn, pa, is, zl, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    mi(e);
  }
  function Fd(e, t, n, i, l, u, p, g, w, R, V, k, L, B) {
    if (
      ((e.timeoutHandle = -1),
      (k = t.subtreeFlags),
      (k & 8192 || (k & 16785408) === 16785408) &&
        ((zr = { stylesheets: null, count: 0, unsuspend: Qm }),
        kd(t),
        (k = Zm()),
        k !== null))
    ) {
      (e.cancelPendingCommit = k(
        ah.bind(null, e, t, u, n, i, l, p, g, w, V, 1, L, B)
      )),
        Bl(e, u, p, !R);
      return;
    }
    ah(e, t, u, n, i, l, p, g, w);
  }
  function um(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var l = n[i],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!Ht(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Bl(e, t, n, i) {
    (t &= ~Nc),
      (t &= ~pa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes);
    for (var l = t; 0 < l; ) {
      var u = 31 - vt(l),
        p = 1 << u;
      (i[u] = -1), (l &= ~p);
    }
    n !== 0 && ms(e, n, t);
  }
  function cu() {
    return (Je & 6) === 0 ? (xr(0), !1) : !0;
  }
  function Uc() {
    if (Be !== null) {
      if (We === 0) var e = Be.return;
      else (e = Be), (Qn = Gi = null), Nn(e), (Fa = null), (gr = 0), (e = Be);
      for (; e !== null; ) Nd(e.alternate, e), (e = e.return);
      Be = null;
    }
  }
  function ss(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Om(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Uc(),
      (it = e),
      (Be = n = Yn(e.current, null)),
      (Xe = t),
      (We = 0),
      (bn = null),
      (zl = !1),
      (ns = kl(e, t)),
      (Dc = !1),
      (is = Rn = Nc = pa = Rl = ct = 0),
      (cn = wr = null),
      (zc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var l = 31 - vt(i),
          u = 1 << l;
        (t |= e[l]), (i &= ~u);
      }
    return (Ji = t), Ha(), n;
  }
  function $d(e, t) {
    (se = null),
      (z.H = Wo),
      t === xl || t === qi
        ? ((t = f()), (We = 3))
        : t === ca
        ? ((t = f()), (We = 4))
        : (We =
            t === vd
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (bn = t),
      Be === null && ((ct = 1), nu(e, Jt(t, e.current)));
  }
  function eh() {
    var e = z.H;
    return (z.H = Wo), e === null ? Wo : e;
  }
  function th() {
    var e = z.A;
    return (z.A = rm), e;
  }
  function Gc() {
    (ct = 4),
      zl || ((Xe & 4194048) !== Xe && zn.current !== null) || (ns = !0),
      ((Rl & 134217727) === 0 && (pa & 134217727) === 0) ||
        it === null ||
        Bl(it, Xe, Rn, !1);
  }
  function Hc(e, t, n) {
    var i = Je;
    Je |= 2;
    var l = eh(),
      u = th();
    (it !== e || Xe !== t) && ((uu = null), ss(e, t)), (t = !1);
    var p = ct;
    e: do
      try {
        if (We !== 0 && Be !== null) {
          var g = Be,
            w = bn;
          switch (We) {
            case 8:
              Uc(), (p = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zn.current === null && (t = !0);
              var R = We;
              if (((We = 0), (bn = null), rs(e, g, w, R), n && ns)) {
                p = 0;
                break e;
              }
              break;
            default:
              (R = We), (We = 0), (bn = null), rs(e, g, w, R);
          }
        }
        cm(), (p = ct);
        break;
      } catch (V) {
        $d(e, V);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Qn = Gi = null),
      (Je = i),
      (z.H = l),
      (z.A = u),
      Be === null && ((it = null), (Xe = 0), Ha()),
      p
    );
  }
  function cm() {
    for (; Be !== null; ) nh(Be);
  }
  function fm(e, t) {
    var n = Je;
    Je |= 2;
    var i = eh(),
      l = th();
    it !== e || Xe !== t
      ? ((uu = null), (ou = Tn() + 500), ss(e, t))
      : (ns = kl(e, t));
    e: do
      try {
        if (We !== 0 && Be !== null) {
          t = Be;
          var u = bn;
          t: switch (We) {
            case 1:
              (We = 0), (bn = null), rs(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (qo(u)) {
                (We = 0), (bn = null), ih(t);
                break;
              }
              (t = function () {
                (We !== 2 && We !== 9) || it !== e || (We = 7), mi(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              We = 7;
              break e;
            case 4:
              We = 5;
              break e;
            case 7:
              qo(u)
                ? ((We = 0), (bn = null), ih(t))
                : ((We = 0), (bn = null), rs(e, t, u, 7));
              break;
            case 5:
              var p = null;
              switch (Be.tag) {
                case 26:
                  p = Be.memoizedState;
                case 5:
                case 27:
                  var g = Be;
                  if (!p || Gh(p)) {
                    (We = 0), (bn = null);
                    var w = g.sibling;
                    if (w !== null) Be = w;
                    else {
                      var R = g.return;
                      R !== null ? ((Be = R), fu(R)) : (Be = null);
                    }
                    break t;
                  }
              }
              (We = 0), (bn = null), rs(e, t, u, 5);
              break;
            case 6:
              (We = 0), (bn = null), rs(e, t, u, 6);
              break;
            case 8:
              Uc(), (ct = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        dm();
        break;
      } catch (V) {
        $d(e, V);
      }
    while (!0);
    return (
      (Qn = Gi = null),
      (z.H = i),
      (z.A = l),
      (Je = n),
      Be !== null ? 0 : ((it = null), (Xe = 0), Ha(), ct)
    );
  }
  function dm() {
    for (; Be !== null && !Ql(); ) nh(Be);
  }
  function nh(e) {
    var t = Cd(e.alternate, e, Ji);
    (e.memoizedProps = e.pendingProps), t === null ? fu(e) : (Be = t);
  }
  function ih(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Td(n, t, t.pendingProps, t.type, void 0, Xe);
        break;
      case 11:
        t = Td(n, t, t.pendingProps, t.type.render, t.ref, Xe);
        break;
      case 5:
        Nn(t);
      default:
        Nd(n, t), (t = Be = Bo(t, Ji)), (t = Cd(n, t, Ji));
    }
    (e.memoizedProps = e.pendingProps), t === null ? fu(e) : (Be = t);
  }
  function rs(e, t, n, i) {
    (Qn = Gi = null), Nn(t), (Fa = null), (gr = 0);
    var l = t.return;
    try {
      if (tm(e, l, t, n, Xe)) {
        (ct = 1), nu(e, Jt(n, e.current)), (Be = null);
        return;
      }
    } catch (u) {
      if (l !== null) throw ((Be = l), u);
      (ct = 1), nu(e, Jt(n, e.current)), (Be = null);
      return;
    }
    t.flags & 32768
      ? (ke || i === 1
          ? (e = !0)
          : ns || (Xe & 536870912) !== 0
          ? (e = !1)
          : ((zl = e = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = zn.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        lh(t, e))
      : fu(t);
  }
  function fu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lh(t, zl);
        return;
      }
      e = t.return;
      var n = im(t.alternate, t, Ji);
      if (n !== null) {
        Be = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
  }
  function lh(e, t) {
    do {
      var n = lm(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Be = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Be = e;
        return;
      }
      Be = e = n;
    } while (e !== null);
    (ct = 6), (Be = null);
  }
  function ah(e, t, n, i, l, u, p, g, w) {
    e.cancelPendingCommit = null;
    do du();
    while (Rt !== 0);
    if ((Je & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Xs),
        Ir(e, n, u, p, g, w),
        e === it && ((Be = it = null), (Xe = 0)),
        (ls = t),
        (Ll = e),
        (as = n),
        (jc = u),
        (Lc = l),
        (Pd = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            gm(Aa, function () {
              return ch(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = z.T), (z.T = null), (l = K.p), (K.p = 2), (p = Je), (Je |= 4);
        try {
          am(e, t, n);
        } finally {
          (Je = p), (K.p = l), (z.T = i);
        }
      }
      (Rt = 1), sh(), rh(), oh();
    }
  }
  function sh() {
    if (Rt === 1) {
      Rt = 0;
      var e = Ll,
        t = ls,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = K.p;
        K.p = 2;
        var l = Je;
        Je |= 4;
        try {
          Xd(t, e);
          var u = Wc,
            p = Ls(e.containerInfo),
            g = u.focusedElem,
            w = u.selectionRange;
          if (
            p !== g &&
            g &&
            g.ownerDocument &&
            Do(g.ownerDocument.documentElement, g)
          ) {
            if (w !== null && Ga(g)) {
              var R = w.start,
                V = w.end;
              if ((V === void 0 && (V = R), "selectionStart" in g))
                (g.selectionStart = R),
                  (g.selectionEnd = Math.min(V, g.value.length));
              else {
                var k = g.ownerDocument || document,
                  L = (k && k.defaultView) || window;
                if (L.getSelection) {
                  var B = L.getSelection(),
                    Me = g.textContent.length,
                    Te = Math.min(w.start, Me),
                    et = w.end === void 0 ? Te : Math.min(w.end, Me);
                  !B.extend && Te > et && ((p = et), (et = Te), (Te = p));
                  var D = Co(g, Te),
                    x = Co(g, et);
                  if (
                    D &&
                    x &&
                    (B.rangeCount !== 1 ||
                      B.anchorNode !== D.node ||
                      B.anchorOffset !== D.offset ||
                      B.focusNode !== x.node ||
                      B.focusOffset !== x.offset)
                  ) {
                    var N = k.createRange();
                    N.setStart(D.node, D.offset),
                      B.removeAllRanges(),
                      Te > et
                        ? (B.addRange(N), B.extend(x.node, x.offset))
                        : (N.setEnd(x.node, x.offset), B.addRange(N));
                  }
                }
              }
            }
            for (k = [], B = g; (B = B.parentNode); )
              B.nodeType === 1 &&
                k.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < k.length;
              g++
            ) {
              var q = k[g];
              (q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
            }
          }
          (wu = !!Jc), (Wc = Jc = null);
        } finally {
          (Je = l), (K.p = i), (z.T = n);
        }
      }
      (e.current = t), (Rt = 2);
    }
  }
  function rh() {
    if (Rt === 2) {
      Rt = 0;
      var e = Ll,
        t = ls,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = z.T), (z.T = null);
        var i = K.p;
        K.p = 2;
        var l = Je;
        Je |= 4;
        try {
          Gd(e, t.alternate, t);
        } finally {
          (Je = l), (K.p = i), (z.T = n);
        }
      }
      Rt = 3;
    }
  }
  function oh() {
    if (Rt === 4 || Rt === 3) {
      (Rt = 0), el();
      var e = Ll,
        t = ls,
        n = as,
        i = Pd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Rt = 5)
        : ((Rt = 0), (ls = Ll = null), uh(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (jl = null),
        vs(n),
        (t = t.stateNode),
        kt && typeof kt.onCommitFiberRoot == "function")
      )
        try {
          kt.onCommitFiberRoot(tl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (t = z.T), (l = K.p), (K.p = 2), (z.T = null);
        try {
          for (var u = e.onRecoverableError, p = 0; p < i.length; p++) {
            var g = i[p];
            u(g.value, { componentStack: g.stack });
          }
        } finally {
          (z.T = t), (K.p = l);
        }
      }
      (as & 3) !== 0 && du(),
        mi(e),
        (l = e.pendingLanes),
        (n & 4194090) !== 0 && (l & 42) !== 0
          ? e === Bc
            ? _r++
            : ((_r = 0), (Bc = e))
          : (_r = 0),
        xr(0);
    }
  }
  function uh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), _l(t)));
  }
  function du(e) {
    return sh(), rh(), oh(), ch();
  }
  function ch() {
    if (Rt !== 5) return !1;
    var e = Ll,
      t = jc;
    jc = 0;
    var n = vs(as),
      i = z.T,
      l = K.p;
    try {
      (K.p = 32 > n ? 32 : n), (z.T = null), (n = Lc), (Lc = null);
      var u = Ll,
        p = as;
      if (((Rt = 0), (ls = Ll = null), (as = 0), (Je & 6) !== 0))
        throw Error(o(331));
      var g = Je;
      if (
        ((Je |= 4),
        Kd(u.current),
        Qd(u, u.current, p, n),
        (Je = g),
        xr(0, !1),
        kt && typeof kt.onPostCommitFiberRoot == "function")
      )
        try {
          kt.onPostCommitFiberRoot(tl, u);
        } catch {}
      return !0;
    } finally {
      (K.p = l), (z.T = i), uh(e, t);
    }
  }
  function fh(e, t, n) {
    (t = Jt(n, t)),
      (t = pc(e.stateNode, t, 2)),
      (e = J(e, t, 2)),
      e !== null && (Jn(e, 2), mi(e));
  }
  function tt(e, t, n) {
    if (e.tag === 3) fh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (jl === null || !jl.has(i)))
          ) {
            (e = Jt(n, e)),
              (n = md(2)),
              (i = J(t, n, 2)),
              i !== null && (gd(n, i, t, e), Jn(i, 2), mi(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new om();
      var l = new Set();
      i.set(t, l);
    } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
    l.has(n) ||
      ((Dc = !0), l.add(n), (e = hm.bind(null, e, t, n)), t.then(e, e));
  }
  function hm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      it === e &&
        (Xe & n) === n &&
        (ct === 4 || (ct === 3 && (Xe & 62914560) === Xe && 300 > Tn() - Rc)
          ? (Je & 2) === 0 && ss(e, 0)
          : (Nc |= n),
        is === Xe && (is = 0)),
      mi(e);
  }
  function dh(e, t) {
    t === 0 && (t = Kr()), (e = Yt(e, t)), e !== null && (Jn(e, t), mi(e));
  }
  function pm(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), dh(e, n);
  }
  function mm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(t), dh(e, n);
  }
  function gm(e, t) {
    return vi(e, t);
  }
  var hu = null,
    os = null,
    Vc = !1,
    pu = !1,
    Xc = !1,
    ma = 0;
  function mi(e) {
    e !== os &&
      e.next === null &&
      (os === null ? (hu = os = e) : (os = os.next = e)),
      (pu = !0),
      Vc || ((Vc = !0), ym());
  }
  function xr(e, t) {
    if (!Xc && pu) {
      Xc = !0;
      do
        for (var n = !1, i = hu; i !== null; ) {
          if (e !== 0) {
            var l = i.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var p = i.suspendedLanes,
                g = i.pingedLanes;
              (u = (1 << (31 - vt(42 | e) + 1)) - 1),
                (u &= l & ~(p & ~g)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((n = !0), gh(i, u));
          } else
            (u = Xe),
              (u = wa(
                i,
                i === it ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (u & 3) === 0 || kl(i, u) || ((n = !0), gh(i, u));
          i = i.next;
        }
      while (n);
      Xc = !1;
    }
  }
  function vm() {
    hh();
  }
  function hh() {
    pu = Vc = !1;
    var e = 0;
    ma !== 0 && (xm() && (e = ma), (ma = 0));
    for (var t = Tn(), n = null, i = hu; i !== null; ) {
      var l = i.next,
        u = ph(i, t);
      u === 0
        ? ((i.next = null),
          n === null ? (hu = l) : (n.next = l),
          l === null && (os = n))
        : ((n = i), (e !== 0 || (u & 3) !== 0) && (pu = !0)),
        (i = l);
    }
    xr(e);
  }
  function ph(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var p = 31 - vt(u),
        g = 1 << p,
        w = l[p];
      w === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (l[p] = Xu(g, t))
        : w <= t && (e.expiredLanes |= g),
        (u &= ~g);
    }
    if (
      ((t = it),
      (n = Xe),
      (n = wa(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (i = e.callbackNode),
      n === 0 ||
        (e === t && (We === 2 || We === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && ba(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || kl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((i !== null && ba(i), vs(n))) {
        case 2:
        case 8:
          n = Qr;
          break;
        case 32:
          n = Aa;
          break;
        case 268435456:
          n = kr;
          break;
        default:
          n = Aa;
      }
      return (
        (i = mh.bind(null, e)),
        (n = vi(n, i)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      i !== null && i !== null && ba(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function mh(e, t) {
    if (Rt !== 0 && Rt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (du() && e.callbackNode !== n) return null;
    var i = Xe;
    return (
      (i = wa(
        e,
        e === it ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (Wd(e, i, t),
          ph(e, Tn()),
          e.callbackNode != null && e.callbackNode === n
            ? mh.bind(null, e)
            : null)
    );
  }
  function gh(e, t) {
    if (du()) return null;
    Wd(e, t, !0);
  }
  function ym() {
    Mm(function () {
      (Je & 6) !== 0 ? vi(qr, vm) : hh();
    });
  }
  function qc() {
    return ma === 0 && (ma = Zr()), ma;
  }
  function vh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Da("" + e);
  }
  function yh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function bm(e, t, n, i, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var u = vh((l[Lt] || null).action),
        p = i.submitter;
      p &&
        ((t = (t = p[Lt] || null)
          ? vh(t.formAction)
          : p.getAttribute("formAction")),
        t !== null && ((u = t), (p = null)));
      var g = new dl("action", "action", null, i, l);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (ma !== 0) {
                  var w = p ? yh(l, p) : new FormData(l);
                  uc(
                    n,
                    { pending: !0, data: w, method: l.method, action: u },
                    null,
                    w
                  );
                }
              } else
                typeof u == "function" &&
                  (g.preventDefault(),
                  (w = p ? yh(l, p) : new FormData(l)),
                  uc(
                    n,
                    { pending: !0, data: w, method: l.method, action: u },
                    u,
                    w
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Qc = 0; Qc < Vs.length; Qc++) {
    var kc = Vs[Qc],
      Am = kc.toLowerCase(),
      Sm = kc[0].toUpperCase() + kc.slice(1);
    pn(Am, "on" + Sm);
  }
  pn(li, "onAnimationEnd"),
    pn(Cn, "onAnimationIteration"),
    pn(Gs, "onAnimationStart"),
    pn("dblclick", "onDoubleClick"),
    pn("focusin", "onFocus"),
    pn("focusout", "onBlur"),
    pn(ic, "onTransitionRun"),
    pn(Ro, "onTransitionStart"),
    pn(jo, "onTransitionCancel"),
    pn(Hs, "onTransitionEnd"),
    Ln("onMouseEnter", ["mouseout", "mouseover"]),
    Ln("onMouseLeave", ["mouseout", "mouseover"]),
    Ln("onPointerEnter", ["pointerout", "pointerover"]),
    Ln("onPointerLeave", ["pointerout", "pointerover"]),
    st(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    st(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    st("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    st(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    st(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    st(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Em = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Or)
    );
  function bh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        l = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = i.length - 1; 0 <= p; p--) {
            var g = i[p],
              w = g.instance,
              R = g.currentTarget;
            if (((g = g.listener), w !== u && l.isPropagationStopped()))
              break e;
            (u = g), (l.currentTarget = R);
            try {
              u(l);
            } catch (V) {
              tu(V);
            }
            (l.currentTarget = null), (u = w);
          }
        else
          for (p = 0; p < i.length; p++) {
            if (
              ((g = i[p]),
              (w = g.instance),
              (R = g.currentTarget),
              (g = g.listener),
              w !== u && l.isPropagationStopped())
            )
              break e;
            (u = g), (l.currentTarget = R);
            try {
              u(l);
            } catch (V) {
              tu(V);
            }
            (l.currentTarget = null), (u = w);
          }
      }
    }
  }
  function Ue(e, t) {
    var n = t[ys];
    n === void 0 && (n = t[ys] = new Set());
    var i = e + "__bubble";
    n.has(i) || (Ah(t, e, 2, !1), n.add(i));
  }
  function Zc(e, t, n) {
    var i = 0;
    t && (i |= 4), Ah(n, e, i, t);
  }
  var mu = "_reactListening" + Math.random().toString(36).slice(2);
  function Kc(e) {
    if (!e[mu]) {
      (e[mu] = !0),
        Bt.forEach(function (n) {
          n !== "selectionchange" && (Em.has(n) || Zc(n, !1, e), Zc(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mu] || ((t[mu] = !0), Zc("selectionchange", !1, t));
    }
  }
  function Ah(e, t, n, i) {
    switch (Qh(t)) {
      case 2:
        var l = Pm;
        break;
      case 8:
        l = Jm;
        break;
      default:
        l = of;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ti ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Ic(e, t, n, i, l) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var p = i.tag;
        if (p === 3 || p === 4) {
          var g = i.stateNode.containerInfo;
          if (g === l) break;
          if (p === 4)
            for (p = i.return; p !== null; ) {
              var w = p.tag;
              if ((w === 3 || w === 4) && p.stateNode.containerInfo === l)
                return;
              p = p.return;
            }
          for (; g !== null; ) {
            if (((p = Fn(g)), p === null)) return;
            if (((w = p.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              i = u = p;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    xs(function () {
      var R = u,
        V = cl(n),
        k = [];
      e: {
        var L = Ys.get(e);
        if (L !== void 0) {
          var B = dl,
            Me = e;
          switch (e) {
            case "keypress":
              if (Ra(n) === 0) break e;
            case "keydown":
            case "keyup":
              B = fo;
              break;
            case "focusin":
              (Me = "focus"), (B = ja);
              break;
            case "focusout":
              (Me = "blur"), (B = ja);
              break;
            case "beforeblur":
            case "afterblur":
              B = ja;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Ci;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = io;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = Ku;
              break;
            case li:
            case Cn:
            case Gs:
              B = so;
              break;
            case Hs:
              B = Iu;
              break;
            case "scroll":
            case "scrollend":
              B = no;
              break;
            case "wheel":
              B = Ju;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = ro;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = ni;
              break;
            case "toggle":
            case "beforetoggle":
              B = mo;
          }
          var Te = (t & 4) !== 0,
            et = !Te && (e === "scroll" || e === "scrollend"),
            D = Te ? (L !== null ? L + "Capture" : null) : L;
          Te = [];
          for (var x = R, N; x !== null; ) {
            var q = x;
            if (
              ((N = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                N === null ||
                D === null ||
                ((q = fl(x, D)), q != null && Te.push(Mr(x, q, N))),
              et)
            )
              break;
            x = x.return;
          }
          0 < Te.length &&
            ((L = new B(L, Me, null, n, V)),
            k.push({ event: L, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (B = e === "mouseout" || e === "pointerout"),
            L &&
              n !== _n &&
              (Me = n.relatedTarget || n.fromElement) &&
              (Fn(Me) || Me[sl]))
          )
            break e;
          if (
            (B || L) &&
            ((L =
              V.window === V
                ? V
                : (L = V.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            B
              ? ((Me = n.relatedTarget || n.toElement),
                (B = R),
                (Me = Me ? Fn(Me) : null),
                Me !== null &&
                  ((et = h(Me)),
                  (Te = Me.tag),
                  Me !== et || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (Me = null))
              : ((B = null), (Me = R)),
            B !== Me)
          ) {
            if (
              ((Te = Ci),
              (q = "onMouseLeave"),
              (D = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Te = ni),
                (q = "onPointerLeave"),
                (D = "onPointerEnter"),
                (x = "pointer")),
              (et = B == null ? L : Zl(B)),
              (N = Me == null ? L : Zl(Me)),
              (L = new Te(q, x + "leave", B, n, V)),
              (L.target = et),
              (L.relatedTarget = N),
              (q = null),
              Fn(V) === R &&
                ((Te = new Te(D, x + "enter", Me, n, V)),
                (Te.target = N),
                (Te.relatedTarget = et),
                (q = Te)),
              (et = q),
              B && Me)
            )
              t: {
                for (Te = B, D = Me, x = 0, N = Te; N; N = us(N)) x++;
                for (N = 0, q = D; q; q = us(q)) N++;
                for (; 0 < x - N; ) (Te = us(Te)), x--;
                for (; 0 < N - x; ) (D = us(D)), N--;
                for (; x--; ) {
                  if (Te === D || (D !== null && Te === D.alternate)) break t;
                  (Te = us(Te)), (D = us(D));
                }
                Te = null;
              }
            else Te = null;
            B !== null && Sh(k, L, B, Te, !1),
              Me !== null && et !== null && Sh(k, et, Me, Te, !0);
          }
        }
        e: {
          if (
            ((L = R ? Zl(R) : window),
            (B = L.nodeName && L.nodeName.toLowerCase()),
            B === "select" || (B === "input" && L.type === "file"))
          )
            var pe = To;
          else if (So(L))
            if (zs) pe = Mo;
            else {
              pe = xo;
              var Le = tc;
            }
          else
            (B = L.nodeName),
              !B ||
              B.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? R && Wl(R.elementType) && (pe = To)
                : (pe = Oo);
          if (pe && (pe = pe(e, R))) {
            nn(k, pe, n, V);
            break e;
          }
          Le && Le(e, L, R),
            e === "focusout" &&
              R &&
              L.type === "number" &&
              R.memoizedProps.value != null &&
              Pl(L, "number", L.value);
        }
        switch (((Le = R ? Zl(R) : window), e)) {
          case "focusin":
            (So(Le) || Le.contentEditable === "true") &&
              ((yl = Le), (Bs = R), (ia = null));
            break;
          case "focusout":
            ia = Bs = yl = null;
            break;
          case "mousedown":
            Us = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Us = !1), No(k, n, V);
            break;
          case "selectionchange":
            if (nc) break;
          case "keydown":
          case "keyup":
            No(k, n, V);
        }
        var be;
        if (Ns)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          pl
            ? bo(e, n) && (we = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (vo &&
            n.locale !== "ko" &&
            (pl || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && pl && (be = za())
              : ((Gn = V),
                ($l = "value" in Gn ? Gn.value : Gn.textContent),
                (pl = !0))),
          (Le = gu(R, we)),
          0 < Le.length &&
            ((we = new oo(we, e, null, n, V)),
            k.push({ event: we, listeners: Le }),
            be
              ? (we.data = be)
              : ((be = Ao(n)), be !== null && (we.data = be)))),
          (be = Di ? Fu(e, n) : $u(e, n)) &&
            ((we = gu(R, "onBeforeInput")),
            0 < we.length &&
              ((Le = new oo("onBeforeInput", "beforeinput", null, n, V)),
              k.push({ event: Le, listeners: we }),
              (Le.data = be))),
          bm(k, e, R, n, V);
      }
      bh(k, t);
    });
  }
  function Mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function gu(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          u === null ||
          ((l = fl(e, n)),
          l != null && i.unshift(Mr(e, l, u)),
          (l = fl(e, t)),
          l != null && i.push(Mr(e, l, u))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function us(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Sh(e, t, n, i, l) {
    for (var u = t._reactName, p = []; n !== null && n !== i; ) {
      var g = n,
        w = g.alternate,
        R = g.stateNode;
      if (((g = g.tag), w !== null && w === i)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        R === null ||
        ((w = R),
        l
          ? ((R = fl(n, u)), R != null && p.unshift(Mr(n, R, w)))
          : l || ((R = fl(n, u)), R != null && p.push(Mr(n, R, w)))),
        (n = n.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Tm = /\r\n?/g,
    wm = /\u0000|\uFFFD/g;
  function Eh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Tm,
        `
`
      )
      .replace(wm, "");
  }
  function Th(e, t) {
    return (t = Eh(t)), Eh(e) === t;
  }
  function vu() {}
  function $e(e, t, n, i, l, u) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || hn(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            hn(e, "" + i);
        break;
      case "className":
        Bn(e, "class", i);
        break;
      case "tabIndex":
        Bn(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bn(e, n, i);
        break;
      case "style":
        Ei(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          Bn(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (i = Da("" + i)), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (n === "formAction"
              ? (t !== "input" && $e(e, t, "name", l.name, l, null),
                $e(e, t, "formEncType", l.formEncType, l, null),
                $e(e, t, "formMethod", l.formMethod, l, null),
                $e(e, t, "formTarget", l.formTarget, l, null))
              : ($e(e, t, "encType", l.encType, l, null),
                $e(e, t, "method", l.method, l, null),
                $e(e, t, "target", l.target, l, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (i = Da("" + i)), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = vu);
        break;
      case "onScroll":
        i != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Da("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "" + i)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(n)
          : e.setAttribute(n, i);
        break;
      case "popover":
        Ue("beforetoggle", e), Ue("toggle", e), ul(e, "popover", i);
        break;
      case "xlinkActuate":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        wn(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        wn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        ul(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = eo.get(n) || n), ul(e, n, i));
    }
  }
  function Pc(e, t, n, i, l, u) {
    switch (n) {
      case "style":
        Ei(e, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (l.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? hn(e, i)
          : (typeof i == "number" || typeof i == "bigint") && hn(e, "" + i);
        break;
      case "onScroll":
        i != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Ue("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = vu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ut.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (t = n.slice(2, l ? n.length - 7 : void 0)),
              (u = e[Lt] || null),
              (u = u != null ? u[n] : null),
              typeof u == "function" && e.removeEventListener(t, u, l),
              typeof i == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, i, l);
              break e;
            }
            n in e
              ? (e[n] = i)
              : i === !0
              ? e.setAttribute(n, "")
              : ul(e, n, i);
          }
    }
  }
  function jt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ue("error", e), Ue("load", e);
        var i = !1,
          l = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var p = n[u];
            if (p != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  $e(e, t, u, p, n, null);
              }
          }
        l && $e(e, t, "srcSet", n.srcSet, n, null),
          i && $e(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ue("invalid", e);
        var g = (u = p = l = null),
          w = null,
          R = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var V = n[i];
            if (V != null)
              switch (i) {
                case "name":
                  l = V;
                  break;
                case "type":
                  p = V;
                  break;
                case "checked":
                  w = V;
                  break;
                case "defaultChecked":
                  R = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  g = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(o(137, t));
                  break;
                default:
                  $e(e, t, i, V, n, null);
              }
          }
        Ca(e, u, g, w, R, p, l, !1), Il(e);
        return;
      case "select":
        Ue("invalid", e), (i = p = u = null);
        for (l in n)
          if (n.hasOwnProperty(l) && ((g = n[l]), g != null))
            switch (l) {
              case "value":
                u = g;
                break;
              case "defaultValue":
                p = g;
                break;
              case "multiple":
                i = g;
              default:
                $e(e, t, l, g, n, null);
            }
        (t = u),
          (n = p),
          (e.multiple = !!i),
          t != null ? Ct(e, !!i, t, !1) : n != null && Ct(e, !!i, n, !0);
        return;
      case "textarea":
        Ue("invalid", e), (u = l = i = null);
        for (p in n)
          if (n.hasOwnProperty(p) && ((g = n[p]), g != null))
            switch (p) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                l = g;
                break;
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(91));
                break;
              default:
                $e(e, t, p, g, n, null);
            }
        Jl(e, i, l, u), Il(e);
        return;
      case "option":
        for (w in n)
          if (n.hasOwnProperty(w) && ((i = n[w]), i != null))
            switch (w) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                $e(e, t, w, i, n, null);
            }
        return;
      case "dialog":
        Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Or.length; i++) Ue(Or[i], e);
        break;
      case "image":
        Ue("error", e), Ue("load", e);
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ue("error", e), Ue("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((i = n[R]), i != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                $e(e, t, R, i, n, null);
            }
        return;
      default:
        if (Wl(t)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((i = n[V]), i !== void 0 && Pc(e, t, V, i, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((i = n[g]), i != null && $e(e, t, g, i, n, null));
  }
  function _m(e, t, n, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          u = null,
          p = null,
          g = null,
          w = null,
          R = null,
          V = null;
        for (B in n) {
          var k = n[B];
          if (n.hasOwnProperty(B) && k != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = k;
              default:
                i.hasOwnProperty(B) || $e(e, t, B, null, i, k);
            }
        }
        for (var L in i) {
          var B = i[L];
          if (((k = n[L]), i.hasOwnProperty(L) && (B != null || k != null)))
            switch (L) {
              case "type":
                u = B;
                break;
              case "name":
                l = B;
                break;
              case "checked":
                R = B;
                break;
              case "defaultChecked":
                V = B;
                break;
              case "value":
                p = B;
                break;
              case "defaultValue":
                g = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(o(137, t));
                break;
              default:
                B !== k && $e(e, t, L, B, i, k);
            }
        }
        Gt(e, p, g, w, R, V, u, l);
        return;
      case "select":
        B = p = g = L = null;
        for (u in n)
          if (((w = n[u]), n.hasOwnProperty(u) && w != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                B = w;
              default:
                i.hasOwnProperty(u) || $e(e, t, u, null, i, w);
            }
        for (l in i)
          if (
            ((u = i[l]),
            (w = n[l]),
            i.hasOwnProperty(l) && (u != null || w != null))
          )
            switch (l) {
              case "value":
                L = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "multiple":
                p = u;
              default:
                u !== w && $e(e, t, l, u, i, w);
            }
        (t = g),
          (n = p),
          (i = B),
          L != null
            ? Ct(e, !!n, L, !1)
            : !!i != !!n &&
              (t != null ? Ct(e, !!n, t, !0) : Ct(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        B = L = null;
        for (g in n)
          if (
            ((l = n[g]),
            n.hasOwnProperty(g) && l != null && !i.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                $e(e, t, g, null, i, l);
            }
        for (p in i)
          if (
            ((l = i[p]),
            (u = n[p]),
            i.hasOwnProperty(p) && (l != null || u != null))
          )
            switch (p) {
              case "value":
                L = l;
                break;
              case "defaultValue":
                B = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(o(91));
                break;
              default:
                l !== u && $e(e, t, p, l, i, u);
            }
        ei(e, L, B);
        return;
      case "option":
        for (var Me in n)
          if (
            ((L = n[Me]),
            n.hasOwnProperty(Me) && L != null && !i.hasOwnProperty(Me))
          )
            switch (Me) {
              case "selected":
                e.selected = !1;
                break;
              default:
                $e(e, t, Me, null, i, L);
            }
        for (w in i)
          if (
            ((L = i[w]),
            (B = n[w]),
            i.hasOwnProperty(w) && L !== B && (L != null || B != null))
          )
            switch (w) {
              case "selected":
                e.selected =
                  L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                $e(e, t, w, L, i, B);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Te in n)
          (L = n[Te]),
            n.hasOwnProperty(Te) &&
              L != null &&
              !i.hasOwnProperty(Te) &&
              $e(e, t, Te, null, i, L);
        for (R in i)
          if (
            ((L = i[R]),
            (B = n[R]),
            i.hasOwnProperty(R) && L !== B && (L != null || B != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(o(137, t));
                break;
              default:
                $e(e, t, R, L, i, B);
            }
        return;
      default:
        if (Wl(t)) {
          for (var et in n)
            (L = n[et]),
              n.hasOwnProperty(et) &&
                L !== void 0 &&
                !i.hasOwnProperty(et) &&
                Pc(e, t, et, void 0, i, L);
          for (V in i)
            (L = i[V]),
              (B = n[V]),
              !i.hasOwnProperty(V) ||
                L === B ||
                (L === void 0 && B === void 0) ||
                Pc(e, t, V, L, i, B);
          return;
        }
    }
    for (var D in n)
      (L = n[D]),
        n.hasOwnProperty(D) &&
          L != null &&
          !i.hasOwnProperty(D) &&
          $e(e, t, D, null, i, L);
    for (k in i)
      (L = i[k]),
        (B = n[k]),
        !i.hasOwnProperty(k) ||
          L === B ||
          (L == null && B == null) ||
          $e(e, t, k, L, i, B);
  }
  var Jc = null,
    Wc = null;
  function yu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _h(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Fc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $c = null;
  function xm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === $c
        ? !1
        : (($c = e), !0)
      : (($c = null), !1);
  }
  var xh = typeof setTimeout == "function" ? setTimeout : void 0,
    Om = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Oh = typeof Promise == "function" ? Promise : void 0,
    Mm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Oh < "u"
        ? function (e) {
            return Oh.resolve(null).then(e).catch(Cm);
          }
        : xh;
  function Cm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function Mh(e, t) {
    var n = t,
      i = 0,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (0 < i && 8 > i) {
            n = i;
            var p = e.ownerDocument;
            if ((n & 1 && Cr(p.documentElement), n & 2 && Cr(p.body), n & 4))
              for (n = p.head, Cr(n), p = n.firstChild; p; ) {
                var g = p.nextSibling,
                  w = p.nodeName;
                p[Wn] ||
                  w === "SCRIPT" ||
                  w === "STYLE" ||
                  (w === "LINK" && p.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(p),
                  (p = g);
              }
          }
          if (l === 0) {
            e.removeChild(u), Ur(t);
            return;
          }
          l--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? l++
            : (i = n.charCodeAt(0) - 48);
      else i = 0;
      n = u;
    } while (n);
    Ur(t);
  }
  function ef(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ef(n), As(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Dm(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[Wn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== l.rel ||
                e.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                e.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (l.src == null ? null : l.src) ||
                  e.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  e.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Kn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Nm(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function tf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function zm(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var i = function () {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (e._reactRetry = i);
    }
  }
  function Kn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var nf = null;
  function Ch(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dh(e, t, n) {
    switch (((t = yu(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Cr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    As(e);
  }
  var jn = new Map(),
    Nh = new Set();
  function bu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Wi = K.d;
  K.d = { f: Rm, r: jm, D: Lm, C: Bm, L: Um, m: Gm, X: Ym, S: Hm, M: Vm };
  function Rm() {
    var e = Wi.f(),
      t = cu();
    return e || t;
  }
  function jm(e) {
    var t = rl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Wf(t) : Wi.r(e);
  }
  var cs = typeof document > "u" ? null : document;
  function zh(e, t, n) {
    var i = cs;
    if (i && typeof t == "string" && t) {
      var l = mt(t);
      (l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        Nh.has(l) ||
          (Nh.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          i.querySelector(l) === null &&
            ((t = i.createElement("link")),
            jt(t, "link", e),
            Ye(t),
            i.head.appendChild(t)));
    }
  }
  function Lm(e) {
    Wi.D(e), zh("dns-prefetch", e, null);
  }
  function Bm(e, t) {
    Wi.C(e, t), zh("preconnect", e, t);
  }
  function Um(e, t, n) {
    Wi.L(e, t, n);
    var i = cs;
    if (i && e && t) {
      var l = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + mt(n.imageSizes) + '"]'))
        : (l += '[href="' + mt(e) + '"]');
      var u = l;
      switch (t) {
        case "style":
          u = fs(e);
          break;
        case "script":
          u = ds(e);
      }
      jn.has(u) ||
        ((e = T(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        jn.set(u, e),
        i.querySelector(l) !== null ||
          (t === "style" && i.querySelector(Dr(u))) ||
          (t === "script" && i.querySelector(Nr(u))) ||
          ((t = i.createElement("link")),
          jt(t, "link", e),
          Ye(t),
          i.head.appendChild(t)));
    }
  }
  function Gm(e, t) {
    Wi.m(e, t);
    var n = cs;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        l =
          'link[rel="modulepreload"][as="' + mt(i) + '"][href="' + mt(e) + '"]',
        u = l;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ds(e);
      }
      if (
        !jn.has(u) &&
        ((e = T({ rel: "modulepreload", href: e }, t)),
        jn.set(u, e),
        n.querySelector(l) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Nr(u))) return;
        }
        (i = n.createElement("link")),
          jt(i, "link", e),
          Ye(i),
          n.head.appendChild(i);
      }
    }
  }
  function Hm(e, t, n) {
    Wi.S(e, t, n);
    var i = cs;
    if (i && e) {
      var l = dn(i).hoistableStyles,
        u = fs(e);
      t = t || "default";
      var p = l.get(u);
      if (!p) {
        var g = { loading: 0, preload: null };
        if ((p = i.querySelector(Dr(u)))) g.loading = 5;
        else {
          (e = T({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = jn.get(u)) && lf(e, n);
          var w = (p = i.createElement("link"));
          Ye(w),
            jt(w, "link", e),
            (w._p = new Promise(function (R, V) {
              (w.onload = R), (w.onerror = V);
            })),
            w.addEventListener("load", function () {
              g.loading |= 1;
            }),
            w.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Au(p, t, i);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: g }),
          l.set(u, p);
      }
    }
  }
  function Ym(e, t) {
    Wi.X(e, t);
    var n = cs;
    if (n && e) {
      var i = dn(n).hoistableScripts,
        l = ds(e),
        u = i.get(l);
      u ||
        ((u = n.querySelector(Nr(l))),
        u ||
          ((e = T({ src: e, async: !0 }, t)),
          (t = jn.get(l)) && af(e, t),
          (u = n.createElement("script")),
          Ye(u),
          jt(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(l, u));
    }
  }
  function Vm(e, t) {
    Wi.M(e, t);
    var n = cs;
    if (n && e) {
      var i = dn(n).hoistableScripts,
        l = ds(e),
        u = i.get(l);
      u ||
        ((u = n.querySelector(Nr(l))),
        u ||
          ((e = T({ src: e, async: !0, type: "module" }, t)),
          (t = jn.get(l)) && af(e, t),
          (u = n.createElement("script")),
          Ye(u),
          jt(u, "link", e),
          n.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(l, u));
    }
  }
  function Rh(e, t, n, i) {
    var l = (l = Ae.current) ? bu(l) : null;
    if (!l) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = fs(n.href)),
            (n = dn(l).hoistableStyles),
            (i = n.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = fs(n.href);
          var u = dn(l).hoistableStyles,
            p = u.get(e);
          if (
            (p ||
              ((l = l.ownerDocument || l),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, p),
              (u = l.querySelector(Dr(e))) &&
                !u._p &&
                ((p.instance = u), (p.state.loading = 5)),
              jn.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                jn.set(e, n),
                u || Xm(l, e, n, p.state))),
            t && i === null)
          )
            throw Error(o(528, ""));
          return p;
        }
        if (t && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ds(n)),
              (n = dn(l).hoistableScripts),
              (i = n.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function fs(e) {
    return 'href="' + mt(e) + '"';
  }
  function Dr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function jh(e) {
    return T({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Xm(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        jt(t, "link", n),
        Ye(t),
        e.head.appendChild(t));
  }
  function ds(e) {
    return '[src="' + mt(e) + '"]';
  }
  function Nr(e) {
    return "script[async]" + e;
  }
  function Lh(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
          if (i) return (t.instance = i), Ye(i), i;
          var l = T({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            Ye(i),
            jt(i, "style", l),
            Au(i, n.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          l = fs(n.href);
          var u = e.querySelector(Dr(l));
          if (u) return (t.state.loading |= 4), (t.instance = u), Ye(u), u;
          (i = jh(n)),
            (l = jn.get(l)) && lf(i, l),
            (u = (e.ownerDocument || e).createElement("link")),
            Ye(u);
          var p = u;
          return (
            (p._p = new Promise(function (g, w) {
              (p.onload = g), (p.onerror = w);
            })),
            jt(u, "link", i),
            (t.state.loading |= 4),
            Au(u, n.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = ds(n.src)),
            (l = e.querySelector(Nr(u)))
              ? ((t.instance = l), Ye(l), l)
              : ((i = n),
                (l = jn.get(u)) && ((i = T({}, n)), af(i, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement("script")),
                Ye(l),
                jt(l, "link", i),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Au(i, n.precedence, e));
    return t.instance;
  }
  function Au(e, t, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = i.length ? i[i.length - 1] : null,
        u = l,
        p = 0;
      p < i.length;
      p++
    ) {
      var g = i[p];
      if (g.dataset.precedence === t) u = g;
      else if (u !== l) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function lf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function af(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Su = null;
  function Bh(e, t, n) {
    if (Su === null) {
      var i = new Map(),
        l = (Su = new Map());
      l.set(n, i);
    } else (l = Su), (i = l.get(n)), i || ((i = new Map()), l.set(n, i));
    if (i.has(e)) return i;
    for (
      i.set(e, null), n = n.getElementsByTagName(e), l = 0;
      l < n.length;
      l++
    ) {
      var u = n[l];
      if (
        !(
          u[Wn] ||
          u[wt] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = u.getAttribute(t) || "";
        p = e + p;
        var g = i.get(p);
        g ? g.push(u) : i.set(p, [u]);
      }
    }
    return i;
  }
  function Uh(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function qm(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Gh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var zr = null;
  function Qm() {}
  function km(e, t, n) {
    if (zr === null) throw Error(o(475));
    var i = zr;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var l = fs(n.href),
          u = e.querySelector(Dr(l));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (i.count++, (i = Eu.bind(i)), e.then(i, i)),
            (t.state.loading |= 4),
            (t.instance = u),
            Ye(u);
          return;
        }
        (u = e.ownerDocument || e),
          (n = jh(n)),
          (l = jn.get(l)) && lf(n, l),
          (u = u.createElement("link")),
          Ye(u);
        var p = u;
        (p._p = new Promise(function (g, w) {
          (p.onload = g), (p.onerror = w);
        })),
          jt(u, "link", n),
          (t.instance = u);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (i.count++,
          (t = Eu.bind(i)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Zm() {
    if (zr === null) throw Error(o(475));
    var e = zr;
    return (
      e.stylesheets && e.count === 0 && sf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && sf(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Eu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) sf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Tu = null;
  function sf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Tu = new Map()),
        t.forEach(Km, e),
        (Tu = null),
        Eu.call(e));
  }
  function Km(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Tu.get(e);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), Tu.set(e, n);
        for (
          var l = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < l.length;
          u++
        ) {
          var p = l[u];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (n.set(p.dataset.precedence, p), (i = p));
        }
        i && n.set(null, i);
      }
      (l = t.instance),
        (p = l.getAttribute("data-precedence")),
        (u = n.get(p) || i),
        u === i && n.set(null, l),
        n.set(p, l),
        this.count++,
        (i = Eu.bind(this)),
        l.addEventListener("load", i),
        l.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(l, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Rr = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Im(e, t, n, i, l, u, p, g) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = _a(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = _a(0)),
      (this.hiddenUpdates = _a(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function Hh(e, t, n, i, l, u, p, g, w, R, V, k) {
    return (
      (e = new Im(e, t, n, p, g, w, R, k)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Ft(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ua()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: i, isDehydrated: n, cache: t }),
      C(u),
      e
    );
  }
  function Yh(e) {
    return e ? ((e = Al), e) : Al;
  }
  function Vh(e, t, n, i, l, u) {
    (l = Yh(l)),
      i.context === null ? (i.context = l) : (i.pendingContext = l),
      (i = X(t)),
      (i.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (n = J(e, i, t)),
      n !== null && (Sn(n, e, t), oe(n, e, t));
  }
  function Xh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rf(e, t) {
    Xh(e, t), (e = e.alternate) && Xh(e, t);
  }
  function qh(e) {
    if (e.tag === 13) {
      var t = Yt(e, 67108864);
      t !== null && Sn(t, e, 67108864), rf(e, 67108864);
    }
  }
  var wu = !0;
  function Pm(e, t, n, i) {
    var l = z.T;
    z.T = null;
    var u = K.p;
    try {
      (K.p = 2), of(e, t, n, i);
    } finally {
      (K.p = u), (z.T = l);
    }
  }
  function Jm(e, t, n, i) {
    var l = z.T;
    z.T = null;
    var u = K.p;
    try {
      (K.p = 8), of(e, t, n, i);
    } finally {
      (K.p = u), (z.T = l);
    }
  }
  function of(e, t, n, i) {
    if (wu) {
      var l = uf(i);
      if (l === null) Ic(e, t, i, _u, n), kh(e, i);
      else if (Fm(l, e, t, n, i)) i.stopPropagation();
      else if ((kh(e, i), t & 4 && -1 < Wm.indexOf(e))) {
        for (; l !== null; ) {
          var u = rl(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var p = yi(u.pendingLanes);
                  if (p !== 0) {
                    var g = u;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; p; ) {
                      var w = 1 << (31 - vt(p));
                      (g.entanglements[1] |= w), (p &= ~w);
                    }
                    mi(u), (Je & 6) === 0 && ((ou = Tn() + 500), xr(0));
                  }
                }
                break;
              case 13:
                (g = Yt(u, 2)), g !== null && Sn(g, u, 2), cu(), rf(u, 2);
            }
          if (((u = uf(i)), u === null && Ic(e, t, i, _u, n), u === l)) break;
          l = u;
        }
        l !== null && i.stopPropagation();
      } else Ic(e, t, i, null, n);
    }
  }
  function uf(e) {
    return (e = cl(e)), cf(e);
  }
  var _u = null;
  function cf(e) {
    if (((_u = null), (e = Fn(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = S(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (_u = e), null;
  }
  function Qh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yu()) {
          case qr:
            return 2;
          case Qr:
            return 8;
          case Aa:
          case Vu:
            return 32;
          case kr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ff = !1,
    Gl = null,
    Hl = null,
    Yl = null,
    jr = new Map(),
    Lr = new Map(),
    Vl = [],
    Wm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function kh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gl = null;
        break;
      case "dragenter":
      case "dragleave":
        Hl = null;
        break;
      case "mouseover":
      case "mouseout":
        Yl = null;
        break;
      case "pointerover":
      case "pointerout":
        jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lr.delete(t.pointerId);
    }
  }
  function Br(e, t, n, i, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = rl(t)), t !== null && qh(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Fm(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return (Gl = Br(Gl, e, t, n, i, l)), !0;
      case "dragenter":
        return (Hl = Br(Hl, e, t, n, i, l)), !0;
      case "mouseover":
        return (Yl = Br(Yl, e, t, n, i, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return jr.set(u, Br(jr.get(u) || null, e, t, n, i, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Lr.set(u, Br(Lr.get(u) || null, e, t, n, i, l)), !0
        );
    }
    return !1;
  }
  function Zh(e) {
    var t = Fn(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = S(n)), t !== null)) {
            (e.blockedOn = t),
              al(e.priority, function () {
                if (n.tag === 13) {
                  var i = An();
                  i = gs(i);
                  var l = Yt(n, i);
                  l !== null && Sn(l, n, i), rf(n, i);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function xu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = uf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        (_n = i), n.target.dispatchEvent(i), (_n = null);
      } else return (t = rl(n)), t !== null && qh(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Kh(e, t, n) {
    xu(e) && n.delete(t);
  }
  function $m() {
    (ff = !1),
      Gl !== null && xu(Gl) && (Gl = null),
      Hl !== null && xu(Hl) && (Hl = null),
      Yl !== null && xu(Yl) && (Yl = null),
      jr.forEach(Kh),
      Lr.forEach(Kh);
  }
  function Ou(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ff ||
        ((ff = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, $m)));
  }
  var Mu = null;
  function Ih(e) {
    Mu !== e &&
      ((Mu = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Mu === e && (Mu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            i = e[t + 1],
            l = e[t + 2];
          if (typeof i != "function") {
            if (cf(i || n) === null) continue;
            break;
          }
          var u = rl(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            uc(u, { pending: !0, data: l, method: n.method, action: i }, i, l));
        }
      }));
  }
  function Ur(e) {
    function t(w) {
      return Ou(w, e);
    }
    Gl !== null && Ou(Gl, e),
      Hl !== null && Ou(Hl, e),
      Yl !== null && Ou(Yl, e),
      jr.forEach(t),
      Lr.forEach(t);
    for (var n = 0; n < Vl.length; n++) {
      var i = Vl[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Vl.length && ((n = Vl[0]), n.blockedOn === null); )
      Zh(n), n.blockedOn === null && Vl.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var l = n[i],
          u = n[i + 1],
          p = l[Lt] || null;
        if (typeof u == "function") p || Ih(n);
        else if (p) {
          var g = null;
          if (u && u.hasAttribute("formAction")) {
            if (((l = u), (p = u[Lt] || null))) g = p.formAction;
            else if (cf(l) !== null) continue;
          } else g = p.action;
          typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)),
            Ih(n);
        }
      }
  }
  function df(e) {
    this._internalRoot = e;
  }
  (Cu.prototype.render = df.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var n = t.current,
        i = An();
      Vh(n, i, e, t, null, null);
    }),
    (Cu.prototype.unmount = df.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Vh(e.current, 2, null, e, null, null), cu(), (t[sl] = null);
        }
      });
  function Cu(e) {
    this._internalRoot = e;
  }
  Cu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Jr();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vl.length && t !== 0 && t < Vl[n].priority; n++);
      Vl.splice(n, 0, e), n === 0 && Zh(e);
    }
  };
  var Ph = s.version;
  if (Ph !== "19.1.1") throw Error(o(527, Ph, "19.1.1"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = A(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var eg = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Du.isDisabled && Du.supportsFiber)
      try {
        (tl = Du.inject(eg)), (kt = Du);
      } catch {}
  }
  return (
    (Hr.createRoot = function (e, t) {
      if (!d(e)) throw Error(o(299));
      var n = !1,
        i = "",
        l = fd,
        u = dd,
        p = hd,
        g = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (p = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (g = t.unstable_transitionCallbacks)),
        (t = Hh(e, 1, !1, null, null, n, i, l, u, p, g, null)),
        (e[sl] = t.current),
        Kc(e),
        new df(t)
      );
    }),
    (Hr.hydrateRoot = function (e, t, n) {
      if (!d(e)) throw Error(o(299));
      var i = !1,
        l = "",
        u = fd,
        p = dd,
        g = hd,
        w = null,
        R = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (w = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (R = n.formState)),
        (t = Hh(e, 1, !0, t, n ?? null, i, l, u, p, g, w, R)),
        (t.context = Yh(null)),
        (n = t.current),
        (i = An()),
        (i = gs(i)),
        (l = X(i)),
        (l.callback = null),
        J(n, l, i),
        (n = i),
        (t.current.lanes = n),
        Jn(t, n),
        mi(t),
        (e[sl] = t.current),
        Kc(e),
        new Cu(t)
      );
    }),
    (Hr.version = "19.1.1"),
    Hr
  );
}
var ap;
function fg() {
  if (ap) return mf.exports;
  ap = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (s) {
        console.error(s);
      }
  }
  return r(), (mf.exports = cg()), mf.exports;
}
var dg = fg(),
  ju = { exports: {} };
/*!
 * Bootstrap v5.3.7 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ var hg = ju.exports,
  sp;
function pg() {
  return (
    sp ||
      ((sp = 1),
      (function (r, s) {
        (function (c, o) {
          r.exports = o();
        })(hg, function () {
          const c = new Map(),
            o = {
              set(m, a, f) {
                c.has(m) || c.set(m, new Map());
                const b = c.get(m);
                b.has(a) || b.size === 0
                  ? b.set(a, f)
                  : console.error(
                      `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                        Array.from(b.keys())[0]
                      }.`
                    );
              },
              get: (m, a) => (c.has(m) && c.get(m).get(a)) || null,
              remove(m, a) {
                if (!c.has(m)) return;
                const f = c.get(m);
                f.delete(a), f.size === 0 && c.delete(m);
              },
            },
            d = "transitionend",
            h = (m) => (
              m &&
                window.CSS &&
                window.CSS.escape &&
                (m = m.replace(/#([^\s"#']+)/g, (a, f) => `#${CSS.escape(f)}`)),
              m
            ),
            S = (m) => {
              m.dispatchEvent(new Event(d));
            },
            E = (m) =>
              !(!m || typeof m != "object") &&
              (m.jquery !== void 0 && (m = m[0]), m.nodeType !== void 0),
            A = (m) =>
              E(m)
                ? m.jquery
                  ? m[0]
                  : m
                : typeof m == "string" && m.length > 0
                ? document.querySelector(h(m))
                : null,
            y = (m) => {
              if (!E(m) || m.getClientRects().length === 0) return !1;
              const a =
                  getComputedStyle(m).getPropertyValue("visibility") ===
                  "visible",
                f = m.closest("details:not([open])");
              if (!f) return a;
              if (f !== m) {
                const b = m.closest("summary");
                if ((b && b.parentNode !== f) || b === null) return !1;
              }
              return a;
            },
            T = (m) =>
              !m ||
              m.nodeType !== Node.ELEMENT_NODE ||
              !!m.classList.contains("disabled") ||
              (m.disabled !== void 0
                ? m.disabled
                : m.hasAttribute("disabled") &&
                  m.getAttribute("disabled") !== "false"),
            O = (m) => {
              if (!document.documentElement.attachShadow) return null;
              if (typeof m.getRootNode == "function") {
                const a = m.getRootNode();
                return a instanceof ShadowRoot ? a : null;
              }
              return m instanceof ShadowRoot
                ? m
                : m.parentNode
                ? O(m.parentNode)
                : null;
            },
            j = () => {},
            G = (m) => {
              m.offsetHeight;
            },
            H = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            F = [],
            $ = () => document.documentElement.dir === "rtl",
            Y = (m) => {
              var a;
              (a = () => {
                const f = H();
                if (f) {
                  const b = m.NAME,
                    M = f.fn[b];
                  (f.fn[b] = m.jQueryInterface),
                    (f.fn[b].Constructor = m),
                    (f.fn[b].noConflict = () => (
                      (f.fn[b] = M), m.jQueryInterface
                    ));
                }
              }),
                document.readyState === "loading"
                  ? (F.length ||
                      document.addEventListener("DOMContentLoaded", () => {
                        for (const f of F) f();
                      }),
                    F.push(a))
                  : a();
            },
            W = (m, a = [], f = m) =>
              typeof m == "function" ? m.call(...a) : f,
            P = (m, a, f = !0) => {
              if (!f) return void W(m);
              const b =
                ((U) => {
                  if (!U) return 0;
                  let { transitionDuration: X, transitionDelay: J } =
                    window.getComputedStyle(U);
                  const oe = Number.parseFloat(X),
                    ce = Number.parseFloat(J);
                  return oe || ce
                    ? ((X = X.split(",")[0]),
                      (J = J.split(",")[0]),
                      1e3 * (Number.parseFloat(X) + Number.parseFloat(J)))
                    : 0;
                })(a) + 5;
              let M = !1;
              const C = ({ target: U }) => {
                U === a && ((M = !0), a.removeEventListener(d, C), W(m));
              };
              a.addEventListener(d, C),
                setTimeout(() => {
                  M || S(a);
                }, b);
            },
            ue = (m, a, f, b) => {
              const M = m.length;
              let C = m.indexOf(a);
              return C === -1
                ? !f && b
                  ? m[M - 1]
                  : m[0]
                : ((C += f ? 1 : -1),
                  b && (C = (C + M) % M),
                  m[Math.max(0, Math.min(C, M - 1))]);
            },
            I = /[^.]*(?=\..*)\.|.*/,
            ve = /\..*/,
            ge = /::\d+$/,
            re = {};
          let le = 1;
          const ee = { mouseenter: "mouseover", mouseleave: "mouseout" },
            fe = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function he(m, a) {
            return (a && `${a}::${le++}`) || m.uidEvent || le++;
          }
          function Ge(m) {
            const a = he(m);
            return (m.uidEvent = a), (re[a] = re[a] || {}), re[a];
          }
          function lt(m, a, f = null) {
            return Object.values(m).find(
              (b) => b.callable === a && b.delegationSelector === f
            );
          }
          function Qe(m, a, f) {
            const b = typeof a == "string",
              M = b ? f : a || f;
            let C = de(m);
            return fe.has(C) || (C = m), [b, M, C];
          }
          function z(m, a, f, b, M) {
            if (typeof a != "string" || !m) return;
            let [C, U, X] = Qe(a, f, b);
            a in ee &&
              (U = ((De) =>
                function (_e) {
                  if (
                    !_e.relatedTarget ||
                    (_e.relatedTarget !== _e.delegateTarget &&
                      !_e.delegateTarget.contains(_e.relatedTarget))
                  )
                    return De.call(this, _e);
                })(U));
            const J = Ge(m),
              oe = J[X] || (J[X] = {}),
              ce = lt(oe, U, C ? f : null);
            if (ce) return void (ce.oneOff = ce.oneOff && M);
            const ie = he(U, a.replace(I, "")),
              Ce = C
                ? (function (Se, De, _e) {
                    return function Ee(Ze) {
                      const Ie = Se.querySelectorAll(De);
                      for (
                        let { target: ze } = Ze;
                        ze && ze !== this;
                        ze = ze.parentNode
                      )
                        for (const He of Ie)
                          if (He === ze)
                            return (
                              Q(Ze, { delegateTarget: ze }),
                              Ee.oneOff && v.off(Se, Ze.type, De, _e),
                              _e.apply(ze, [Ze])
                            );
                    };
                  })(m, f, U)
                : (function (Se, De) {
                    return function _e(Ee) {
                      return (
                        Q(Ee, { delegateTarget: Se }),
                        _e.oneOff && v.off(Se, Ee.type, De),
                        De.apply(Se, [Ee])
                      );
                    };
                  })(m, U);
            (Ce.delegationSelector = C ? f : null),
              (Ce.callable = U),
              (Ce.oneOff = M),
              (Ce.uidEvent = ie),
              (oe[ie] = Ce),
              m.addEventListener(X, Ce, C);
          }
          function K(m, a, f, b, M) {
            const C = lt(a[f], b, M);
            C && (m.removeEventListener(f, C, !!M), delete a[f][C.uidEvent]);
          }
          function Z(m, a, f, b) {
            const M = a[f] || {};
            for (const [C, U] of Object.entries(M))
              C.includes(b) && K(m, a, f, U.callable, U.delegationSelector);
          }
          function de(m) {
            return (m = m.replace(ve, "")), ee[m] || m;
          }
          const v = {
            on(m, a, f, b) {
              z(m, a, f, b, !1);
            },
            one(m, a, f, b) {
              z(m, a, f, b, !0);
            },
            off(m, a, f, b) {
              if (typeof a != "string" || !m) return;
              const [M, C, U] = Qe(a, f, b),
                X = U !== a,
                J = Ge(m),
                oe = J[U] || {},
                ce = a.startsWith(".");
              if (C === void 0) {
                if (ce)
                  for (const ie of Object.keys(J)) Z(m, J, ie, a.slice(1));
                for (const [ie, Ce] of Object.entries(oe)) {
                  const Se = ie.replace(ge, "");
                  (X && !a.includes(Se)) ||
                    K(m, J, U, Ce.callable, Ce.delegationSelector);
                }
              } else {
                if (!Object.keys(oe).length) return;
                K(m, J, U, C, M ? f : null);
              }
            },
            trigger(m, a, f) {
              if (typeof a != "string" || !m) return null;
              const b = H();
              let M = null,
                C = !0,
                U = !0,
                X = !1;
              a !== de(a) &&
                b &&
                ((M = b.Event(a, f)),
                b(m).trigger(M),
                (C = !M.isPropagationStopped()),
                (U = !M.isImmediatePropagationStopped()),
                (X = M.isDefaultPrevented()));
              const J = Q(new Event(a, { bubbles: C, cancelable: !0 }), f);
              return (
                X && J.preventDefault(),
                U && m.dispatchEvent(J),
                J.defaultPrevented && M && M.preventDefault(),
                J
              );
            },
          };
          function Q(m, a = {}) {
            for (const [f, b] of Object.entries(a))
              try {
                m[f] = b;
              } catch {
                Object.defineProperty(m, f, { configurable: !0, get: () => b });
              }
            return m;
          }
          function ae(m) {
            if (m === "true") return !0;
            if (m === "false") return !1;
            if (m === Number(m).toString()) return Number(m);
            if (m === "" || m === "null") return null;
            if (typeof m != "string") return m;
            try {
              return JSON.parse(decodeURIComponent(m));
            } catch {
              return m;
            }
          }
          function ne(m) {
            return m.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);
          }
          const me = {
            setDataAttribute(m, a, f) {
              m.setAttribute(`data-bs-${ne(a)}`, f);
            },
            removeDataAttribute(m, a) {
              m.removeAttribute(`data-bs-${ne(a)}`);
            },
            getDataAttributes(m) {
              if (!m) return {};
              const a = {},
                f = Object.keys(m.dataset).filter(
                  (b) => b.startsWith("bs") && !b.startsWith("bsConfig")
                );
              for (const b of f) {
                let M = b.replace(/^bs/, "");
                (M = M.charAt(0).toLowerCase() + M.slice(1)),
                  (a[M] = ae(m.dataset[b]));
              }
              return a;
            },
            getDataAttribute: (m, a) => ae(m.getAttribute(`data-bs-${ne(a)}`)),
          };
          class je {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(a) {
              return (
                (a = this._mergeConfigObj(a)),
                (a = this._configAfterMerge(a)),
                this._typeCheckConfig(a),
                a
              );
            }
            _configAfterMerge(a) {
              return a;
            }
            _mergeConfigObj(a, f) {
              const b = E(f) ? me.getDataAttribute(f, "config") : {};
              return {
                ...this.constructor.Default,
                ...(typeof b == "object" ? b : {}),
                ...(E(f) ? me.getDataAttributes(f) : {}),
                ...(typeof a == "object" ? a : {}),
              };
            }
            _typeCheckConfig(a, f = this.constructor.DefaultType) {
              for (const [M, C] of Object.entries(f)) {
                const U = a[M],
                  X = E(U)
                    ? "element"
                    : (b = U) == null
                    ? `${b}`
                    : Object.prototype.toString
                        .call(b)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
                if (!new RegExp(C).test(X))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${M}" provided type "${X}" but expected type "${C}".`
                  );
              }
              var b;
            }
          }
          class Ae extends je {
            constructor(a, f) {
              super(),
                (a = A(a)) &&
                  ((this._element = a),
                  (this._config = this._getConfig(f)),
                  o.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              o.remove(this._element, this.constructor.DATA_KEY),
                v.off(this._element, this.constructor.EVENT_KEY);
              for (const a of Object.getOwnPropertyNames(this)) this[a] = null;
            }
            _queueCallback(a, f, b = !0) {
              P(a, f, b);
            }
            _getConfig(a) {
              return (
                (a = this._mergeConfigObj(a, this._element)),
                (a = this._configAfterMerge(a)),
                this._typeCheckConfig(a),
                a
              );
            }
            static getInstance(a) {
              return o.get(A(a), this.DATA_KEY);
            }
            static getOrCreateInstance(a, f = {}) {
              return (
                this.getInstance(a) ||
                new this(a, typeof f == "object" ? f : null)
              );
            }
            static get VERSION() {
              return "5.3.7";
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(a) {
              return `${a}${this.EVENT_KEY}`;
            }
          }
          const Mt = (m) => {
              let a = m.getAttribute("data-bs-target");
              if (!a || a === "#") {
                let f = m.getAttribute("href");
                if (!f || (!f.includes("#") && !f.startsWith("."))) return null;
                f.includes("#") &&
                  !f.startsWith("#") &&
                  (f = `#${f.split("#")[1]}`),
                  (a = f && f !== "#" ? f.trim() : null);
              }
              return a
                ? a
                    .split(",")
                    .map((f) => h(f))
                    .join(",")
                : null;
            },
            te = {
              find: (m, a = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(a, m)),
              findOne: (m, a = document.documentElement) =>
                Element.prototype.querySelector.call(a, m),
              children: (m, a) =>
                [].concat(...m.children).filter((f) => f.matches(a)),
              parents(m, a) {
                const f = [];
                let b = m.parentNode.closest(a);
                for (; b; ) f.push(b), (b = b.parentNode.closest(a));
                return f;
              },
              prev(m, a) {
                let f = m.previousElementSibling;
                for (; f; ) {
                  if (f.matches(a)) return [f];
                  f = f.previousElementSibling;
                }
                return [];
              },
              next(m, a) {
                let f = m.nextElementSibling;
                for (; f; ) {
                  if (f.matches(a)) return [f];
                  f = f.nextElementSibling;
                }
                return [];
              },
              focusableChildren(m) {
                const a = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((f) => `${f}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(a, m).filter((f) => !T(f) && y(f));
              },
              getSelectorFromElement(m) {
                const a = Mt(m);
                return a && te.findOne(a) ? a : null;
              },
              getElementFromSelector(m) {
                const a = Mt(m);
                return a ? te.findOne(a) : null;
              },
              getMultipleElementsFromSelector(m) {
                const a = Mt(m);
                return a ? te.find(a) : [];
              },
            },
            fn = (m, a = "hide") => {
              const f = `click.dismiss${m.EVENT_KEY}`,
                b = m.NAME;
              v.on(document, f, `[data-bs-dismiss="${b}"]`, function (M) {
                if (
                  (["A", "AREA"].includes(this.tagName) && M.preventDefault(),
                  T(this))
                )
                  return;
                const C =
                  te.getElementFromSelector(this) || this.closest(`.${b}`);
                m.getOrCreateInstance(C)[a]();
              });
            },
            va = ".bs.alert",
            ya = `close${va}`,
            ps = `closed${va}`;
          class vi extends Ae {
            static get NAME() {
              return "alert";
            }
            close() {
              if (v.trigger(this._element, ya).defaultPrevented) return;
              this._element.classList.remove("show");
              const a = this._element.classList.contains("fade");
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                a
              );
            }
            _destroyElement() {
              this._element.remove(),
                v.trigger(this._element, ps),
                this.dispose();
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = vi.getOrCreateInstance(this);
                if (typeof a == "string") {
                  if (
                    f[a] === void 0 ||
                    a.startsWith("_") ||
                    a === "constructor"
                  )
                    throw new TypeError(`No method named "${a}"`);
                  f[a](this);
                }
              });
            }
          }
          fn(vi, "close"), Y(vi);
          const ba = '[data-bs-toggle="button"]';
          class Ql extends Ae {
            static get NAME() {
              return "button";
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
              );
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = Ql.getOrCreateInstance(this);
                a === "toggle" && f[a]();
              });
            }
          }
          v.on(document, "click.bs.button.data-api", ba, (m) => {
            m.preventDefault();
            const a = m.target.closest(ba);
            Ql.getOrCreateInstance(a).toggle();
          }),
            Y(Ql);
          const el = ".bs.swipe",
            Tn = `touchstart${el}`,
            Yu = `touchmove${el}`,
            qr = `touchend${el}`,
            Qr = `pointerdown${el}`,
            Aa = `pointerup${el}`,
            Vu = { endCallback: null, leftCallback: null, rightCallback: null },
            kr = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class Sa extends je {
            constructor(a, f) {
              super(),
                (this._element = a),
                a &&
                  Sa.isSupported() &&
                  ((this._config = this._getConfig(f)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = !!window.PointerEvent),
                  this._initEvents());
            }
            static get Default() {
              return Vu;
            }
            static get DefaultType() {
              return kr;
            }
            static get NAME() {
              return "swipe";
            }
            dispose() {
              v.off(this._element, el);
            }
            _start(a) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX)
                : (this._deltaX = a.touches[0].clientX);
            }
            _end(a) {
              this._eventIsPointerPenTouch(a) &&
                (this._deltaX = a.clientX - this._deltaX),
                this._handleSwipe(),
                W(this._config.endCallback);
            }
            _move(a) {
              this._deltaX =
                a.touches && a.touches.length > 1
                  ? 0
                  : a.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const a = Math.abs(this._deltaX);
              if (a <= 40) return;
              const f = a / this._deltaX;
              (this._deltaX = 0),
                f &&
                  W(
                    f > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (v.on(this._element, Qr, (a) => this._start(a)),
                  v.on(this._element, Aa, (a) => this._end(a)),
                  this._element.classList.add("pointer-event"))
                : (v.on(this._element, Tn, (a) => this._start(a)),
                  v.on(this._element, Yu, (a) => this._move(a)),
                  v.on(this._element, qr, (a) => this._end(a)));
            }
            _eventIsPointerPenTouch(a) {
              return (
                this._supportPointerEvents &&
                (a.pointerType === "pen" || a.pointerType === "touch")
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const In = ".bs.carousel",
            tl = ".data-api",
            kt = "ArrowLeft",
            Pn = "ArrowRight",
            vt = "next",
            nl = "prev",
            il = "left",
            Ea = "right",
            Ta = `slide${In}`,
            ll = `slid${In}`,
            yi = `keydown${In}`,
            wa = `mouseenter${In}`,
            kl = `mouseleave${In}`,
            Xu = `dragstart${In}`,
            Zr = `load${In}${tl}`,
            Kr = `click${In}${tl}`,
            _a = "carousel",
            Jn = "active",
            Ir = ".active",
            ms = ".carousel-item",
            Pr = Ir + ms,
            gs = { [kt]: Ea, [Pn]: il },
            vs = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            Jr = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class al extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = te.findOne(
                  ".carousel-indicators",
                  this._element
                )),
                this._addEventListeners(),
                this._config.ride === _a && this.cycle();
            }
            static get Default() {
              return vs;
            }
            static get DefaultType() {
              return Jr;
            }
            static get NAME() {
              return "carousel";
            }
            next() {
              this._slide(vt);
            }
            nextWhenVisible() {
              !document.hidden && y(this._element) && this.next();
            }
            prev() {
              this._slide(nl);
            }
            pause() {
              this._isSliding && S(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ));
            }
            _maybeEnableCycle() {
              this._config.ride &&
                (this._isSliding
                  ? v.one(this._element, ll, () => this.cycle())
                  : this.cycle());
            }
            to(a) {
              const f = this._getItems();
              if (a > f.length - 1 || a < 0) return;
              if (this._isSliding)
                return void v.one(this._element, ll, () => this.to(a));
              const b = this._getItemIndex(this._getActive());
              if (b === a) return;
              const M = a > b ? vt : nl;
              this._slide(M, f[a]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(a) {
              return (a.defaultInterval = a.interval), a;
            }
            _addEventListeners() {
              this._config.keyboard &&
                v.on(this._element, yi, (a) => this._keydown(a)),
                this._config.pause === "hover" &&
                  (v.on(this._element, wa, () => this.pause()),
                  v.on(this._element, kl, () => this._maybeEnableCycle())),
                this._config.touch &&
                  Sa.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const f of te.find(".carousel-item img", this._element))
                v.on(f, Xu, (b) => b.preventDefault());
              const a = {
                leftCallback: () => this._slide(this._directionToOrder(il)),
                rightCallback: () => this._slide(this._directionToOrder(Ea)),
                endCallback: () => {
                  this._config.pause === "hover" &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      500 + this._config.interval
                    )));
                },
              };
              this._swipeHelper = new Sa(this._element, a);
            }
            _keydown(a) {
              if (/input|textarea/i.test(a.target.tagName)) return;
              const f = gs[a.key];
              f && (a.preventDefault(), this._slide(this._directionToOrder(f)));
            }
            _getItemIndex(a) {
              return this._getItems().indexOf(a);
            }
            _setActiveIndicatorElement(a) {
              if (!this._indicatorsElement) return;
              const f = te.findOne(Ir, this._indicatorsElement);
              f.classList.remove(Jn), f.removeAttribute("aria-current");
              const b = te.findOne(
                `[data-bs-slide-to="${a}"]`,
                this._indicatorsElement
              );
              b &&
                (b.classList.add(Jn), b.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const a = this._activeElement || this._getActive();
              if (!a) return;
              const f = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
              this._config.interval = f || this._config.defaultInterval;
            }
            _slide(a, f = null) {
              if (this._isSliding) return;
              const b = this._getActive(),
                M = a === vt,
                C = f || ue(this._getItems(), b, M, this._config.wrap);
              if (C === b) return;
              const U = this._getItemIndex(C),
                X = (ie) =>
                  v.trigger(this._element, ie, {
                    relatedTarget: C,
                    direction: this._orderToDirection(a),
                    from: this._getItemIndex(b),
                    to: U,
                  });
              if (X(Ta).defaultPrevented || !b || !C) return;
              const J = !!this._interval;
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(U),
                (this._activeElement = C);
              const oe = M ? "carousel-item-start" : "carousel-item-end",
                ce = M ? "carousel-item-next" : "carousel-item-prev";
              C.classList.add(ce),
                G(C),
                b.classList.add(oe),
                C.classList.add(oe),
                this._queueCallback(
                  () => {
                    C.classList.remove(oe, ce),
                      C.classList.add(Jn),
                      b.classList.remove(Jn, ce, oe),
                      (this._isSliding = !1),
                      X(ll);
                  },
                  b,
                  this._isAnimated()
                ),
                J && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains("slide");
            }
            _getActive() {
              return te.findOne(Pr, this._element);
            }
            _getItems() {
              return te.find(ms, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(a) {
              return $() ? (a === il ? nl : vt) : a === il ? vt : nl;
            }
            _orderToDirection(a) {
              return $() ? (a === nl ? il : Ea) : a === nl ? Ea : il;
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = al.getOrCreateInstance(this, a);
                if (typeof a != "number") {
                  if (typeof a == "string") {
                    if (
                      f[a] === void 0 ||
                      a.startsWith("_") ||
                      a === "constructor"
                    )
                      throw new TypeError(`No method named "${a}"`);
                    f[a]();
                  }
                } else f.to(a);
              });
            }
          }
          v.on(
            document,
            Kr,
            "[data-bs-slide], [data-bs-slide-to]",
            function (m) {
              const a = te.getElementFromSelector(this);
              if (!a || !a.classList.contains(_a)) return;
              m.preventDefault();
              const f = al.getOrCreateInstance(a),
                b = this.getAttribute("data-bs-slide-to");
              return b
                ? (f.to(b), void f._maybeEnableCycle())
                : me.getDataAttribute(this, "slide") === "next"
                ? (f.next(), void f._maybeEnableCycle())
                : (f.prev(), void f._maybeEnableCycle());
            }
          ),
            v.on(window, Zr, () => {
              const m = te.find('[data-bs-ride="carousel"]');
              for (const a of m) al.getOrCreateInstance(a);
            }),
            Y(al);
          const tn = ".bs.collapse",
            wt = `show${tn}`,
            Lt = `shown${tn}`,
            sl = `hide${tn}`,
            ys = `hidden${tn}`,
            qu = `click${tn}.data-api`,
            bs = "show",
            bi = "collapse",
            Wn = "collapsing",
            As = `:scope .${bi} .${bi}`,
            Fn = '[data-bs-toggle="collapse"]',
            rl = { parent: null, toggle: !0 },
            Zl = { parent: "(null|element)", toggle: "boolean" };
          class dn extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const b = te.find(Fn);
              for (const M of b) {
                const C = te.getSelectorFromElement(M),
                  U = te.find(C).filter((X) => X === this._element);
                C !== null && U.length && this._triggerArray.push(M);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return rl;
            }
            static get DefaultType() {
              return Zl;
            }
            static get NAME() {
              return "collapse";
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let a = [];
              if (
                (this._config.parent &&
                  (a = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                  )
                    .filter((M) => M !== this._element)
                    .map((M) => dn.getOrCreateInstance(M, { toggle: !1 }))),
                (a.length && a[0]._isTransitioning) ||
                  v.trigger(this._element, wt).defaultPrevented)
              )
                return;
              for (const M of a) M.hide();
              const f = this._getDimension();
              this._element.classList.remove(bi),
                this._element.classList.add(Wn),
                (this._element.style[f] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const b = `scroll${f[0].toUpperCase() + f.slice(1)}`;
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(Wn),
                    this._element.classList.add(bi, bs),
                    (this._element.style[f] = ""),
                    v.trigger(this._element, Lt);
                },
                this._element,
                !0
              ),
                (this._element.style[f] = `${this._element[b]}px`);
            }
            hide() {
              if (
                this._isTransitioning ||
                !this._isShown() ||
                v.trigger(this._element, sl).defaultPrevented
              )
                return;
              const a = this._getDimension();
              (this._element.style[a] = `${
                this._element.getBoundingClientRect()[a]
              }px`),
                G(this._element),
                this._element.classList.add(Wn),
                this._element.classList.remove(bi, bs);
              for (const f of this._triggerArray) {
                const b = te.getElementFromSelector(f);
                b &&
                  !this._isShown(b) &&
                  this._addAriaAndCollapsedClass([f], !1);
              }
              (this._isTransitioning = !0),
                (this._element.style[a] = ""),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(Wn),
                      this._element.classList.add(bi),
                      v.trigger(this._element, ys);
                  },
                  this._element,
                  !0
                );
            }
            _isShown(a = this._element) {
              return a.classList.contains(bs);
            }
            _configAfterMerge(a) {
              return (a.toggle = !!a.toggle), (a.parent = A(a.parent)), a;
            }
            _getDimension() {
              return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const a = this._getFirstLevelChildren(Fn);
              for (const f of a) {
                const b = te.getElementFromSelector(f);
                b && this._addAriaAndCollapsedClass([f], this._isShown(b));
              }
            }
            _getFirstLevelChildren(a) {
              const f = te.find(As, this._config.parent);
              return te
                .find(a, this._config.parent)
                .filter((b) => !f.includes(b));
            }
            _addAriaAndCollapsedClass(a, f) {
              if (a.length)
                for (const b of a)
                  b.classList.toggle("collapsed", !f),
                    b.setAttribute("aria-expanded", f);
            }
            static jQueryInterface(a) {
              const f = {};
              return (
                typeof a == "string" && /show|hide/.test(a) && (f.toggle = !1),
                this.each(function () {
                  const b = dn.getOrCreateInstance(this, f);
                  if (typeof a == "string") {
                    if (b[a] === void 0)
                      throw new TypeError(`No method named "${a}"`);
                    b[a]();
                  }
                })
              );
            }
          }
          v.on(document, qu, Fn, function (m) {
            (m.target.tagName === "A" ||
              (m.delegateTarget && m.delegateTarget.tagName === "A")) &&
              m.preventDefault();
            for (const a of te.getMultipleElementsFromSelector(this))
              dn.getOrCreateInstance(a, { toggle: !1 }).toggle();
          }),
            Y(dn);
          var Ye = "top",
            Bt = "bottom",
            Ut = "right",
            st = "left",
            Ln = "auto",
            ol = [Ye, Bt, Ut, st],
            $n = "start",
            Ai = "end",
            Wr = "clippingParents",
            ul = "viewport",
            Bn = "popper",
            wn = "reference",
            Kl = ol.reduce(function (m, a) {
              return m.concat([a + "-" + $n, a + "-" + Ai]);
            }, []),
            xa = [].concat(ol, [Ln]).reduce(function (m, a) {
              return m.concat([a, a + "-" + $n, a + "-" + Ai]);
            }, []),
            Si = "beforeRead",
            Oa = "read",
            Ma = "afterRead",
            Fr = "beforeMain",
            Ss = "main",
            Zt = "afterMain",
            Es = "beforeWrite",
            $r = "write",
            Il = "afterWrite",
            Ts = [Si, Oa, Ma, Fr, Ss, Zt, Es, $r, Il];
          function Kt(m) {
            return m ? (m.nodeName || "").toLowerCase() : null;
          }
          function It(m) {
            if (m == null) return window;
            if (m.toString() !== "[object Window]") {
              var a = m.ownerDocument;
              return (a && a.defaultView) || window;
            }
            return m;
          }
          function mt(m) {
            return m instanceof It(m).Element || m instanceof Element;
          }
          function Gt(m) {
            return m instanceof It(m).HTMLElement || m instanceof HTMLElement;
          }
          function Ca(m) {
            return (
              typeof ShadowRoot < "u" &&
              (m instanceof It(m).ShadowRoot || m instanceof ShadowRoot)
            );
          }
          const Pl = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (m) {
              var a = m.state;
              Object.keys(a.elements).forEach(function (f) {
                var b = a.styles[f] || {},
                  M = a.attributes[f] || {},
                  C = a.elements[f];
                Gt(C) &&
                  Kt(C) &&
                  (Object.assign(C.style, b),
                  Object.keys(M).forEach(function (U) {
                    var X = M[U];
                    X === !1
                      ? C.removeAttribute(U)
                      : C.setAttribute(U, X === !0 ? "" : X);
                  }));
              });
            },
            effect: function (m) {
              var a = m.state,
                f = {
                  popper: {
                    position: a.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(a.elements.popper.style, f.popper),
                (a.styles = f),
                a.elements.arrow &&
                  Object.assign(a.elements.arrow.style, f.arrow),
                function () {
                  Object.keys(a.elements).forEach(function (b) {
                    var M = a.elements[b],
                      C = a.attributes[b] || {},
                      U = Object.keys(
                        a.styles.hasOwnProperty(b) ? a.styles[b] : f[b]
                      ).reduce(function (X, J) {
                        return (X[J] = ""), X;
                      }, {});
                    Gt(M) &&
                      Kt(M) &&
                      (Object.assign(M.style, U),
                      Object.keys(C).forEach(function (X) {
                        M.removeAttribute(X);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          };
          function Ct(m) {
            return m.split("-")[0];
          }
          var ei = Math.max,
            Jl = Math.min,
            hn = Math.round;
          function ws() {
            var m = navigator.userAgentData;
            return m != null && m.brands && Array.isArray(m.brands)
              ? m.brands
                  .map(function (a) {
                    return a.brand + "/" + a.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function _s() {
            return !/^((?!chrome|android).)*safari/i.test(ws());
          }
          function Ei(m, a, f) {
            a === void 0 && (a = !1), f === void 0 && (f = !1);
            var b = m.getBoundingClientRect(),
              M = 1,
              C = 1;
            a &&
              Gt(m) &&
              ((M = (m.offsetWidth > 0 && hn(b.width) / m.offsetWidth) || 1),
              (C = (m.offsetHeight > 0 && hn(b.height) / m.offsetHeight) || 1));
            var U = (mt(m) ? It(m) : window).visualViewport,
              X = !_s() && f,
              J = (b.left + (X && U ? U.offsetLeft : 0)) / M,
              oe = (b.top + (X && U ? U.offsetTop : 0)) / C,
              ce = b.width / M,
              ie = b.height / C;
            return {
              width: ce,
              height: ie,
              top: oe,
              right: J + ce,
              bottom: oe + ie,
              left: J,
              x: J,
              y: oe,
            };
          }
          function Wl(m) {
            var a = Ei(m),
              f = m.offsetWidth,
              b = m.offsetHeight;
            return (
              Math.abs(a.width - f) <= 1 && (f = a.width),
              Math.abs(a.height - b) <= 1 && (b = a.height),
              { x: m.offsetLeft, y: m.offsetTop, width: f, height: b }
            );
          }
          function eo(m, a) {
            var f = a.getRootNode && a.getRootNode();
            if (m.contains(a)) return !0;
            if (f && Ca(f)) {
              var b = a;
              do {
                if (b && m.isSameNode(b)) return !0;
                b = b.parentNode || b.host;
              } while (b);
            }
            return !1;
          }
          function Un(m) {
            return It(m).getComputedStyle(m);
          }
          function Da(m) {
            return ["table", "td", "th"].indexOf(Kt(m)) >= 0;
          }
          function _n(m) {
            return (
              (mt(m) ? m.ownerDocument : m.document) || window.document
            ).documentElement;
          }
          function cl(m) {
            return Kt(m) === "html"
              ? m
              : m.assignedSlot ||
                  m.parentNode ||
                  (Ca(m) ? m.host : null) ||
                  _n(m);
          }
          function Ti(m) {
            return Gt(m) && Un(m).position !== "fixed" ? m.offsetParent : null;
          }
          function xn(m) {
            for (
              var a = It(m), f = Ti(m);
              f && Da(f) && Un(f).position === "static";

            )
              f = Ti(f);
            return f &&
              (Kt(f) === "html" ||
                (Kt(f) === "body" && Un(f).position === "static"))
              ? a
              : f ||
                  (function (b) {
                    var M = /firefox/i.test(ws());
                    if (
                      /Trident/i.test(ws()) &&
                      Gt(b) &&
                      Un(b).position === "fixed"
                    )
                      return null;
                    var C = cl(b);
                    for (
                      Ca(C) && (C = C.host);
                      Gt(C) && ["html", "body"].indexOf(Kt(C)) < 0;

                    ) {
                      var U = Un(C);
                      if (
                        U.transform !== "none" ||
                        U.perspective !== "none" ||
                        U.contain === "paint" ||
                        ["transform", "perspective"].indexOf(U.willChange) !==
                          -1 ||
                        (M && U.willChange === "filter") ||
                        (M && U.filter && U.filter !== "none")
                      )
                        return C;
                      C = C.parentNode;
                    }
                    return null;
                  })(m) ||
                  a;
          }
          function Na(m) {
            return ["top", "bottom"].indexOf(m) >= 0 ? "x" : "y";
          }
          function wi(m, a, f) {
            return ei(m, Jl(a, f));
          }
          function xs(m) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              m
            );
          }
          function fl(m, a) {
            return a.reduce(function (f, b) {
              return (f[b] = m), f;
            }, {});
          }
          const On = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (m) {
              var a,
                f = m.state,
                b = m.name,
                M = m.options,
                C = f.elements.arrow,
                U = f.modifiersData.popperOffsets,
                X = Ct(f.placement),
                J = Na(X),
                oe = [st, Ut].indexOf(X) >= 0 ? "height" : "width";
              if (C && U) {
                var ce = (function (Oe, Ve) {
                    return xs(
                      typeof (Oe =
                        typeof Oe == "function"
                          ? Oe(
                              Object.assign({}, Ve.rects, {
                                placement: Ve.placement,
                              })
                            )
                          : Oe) != "number"
                        ? Oe
                        : fl(Oe, ol)
                    );
                  })(M.padding, f),
                  ie = Wl(C),
                  Ce = J === "y" ? Ye : st,
                  Se = J === "y" ? Bt : Ut,
                  De =
                    f.rects.reference[oe] +
                    f.rects.reference[J] -
                    U[J] -
                    f.rects.popper[oe],
                  _e = U[J] - f.rects.reference[J],
                  Ee = xn(C),
                  Ze = Ee
                    ? J === "y"
                      ? Ee.clientHeight || 0
                      : Ee.clientWidth || 0
                    : 0,
                  Ie = De / 2 - _e / 2,
                  ze = ce[Ce],
                  He = Ze - ie[oe] - ce[Se],
                  xe = Ze / 2 - ie[oe] / 2 + Ie,
                  se = wi(ze, xe, He),
                  ye = J;
                f.modifiersData[b] =
                  (((a = {})[ye] = se), (a.centerOffset = se - xe), a);
              }
            },
            effect: function (m) {
              var a = m.state,
                f = m.options.element,
                b = f === void 0 ? "[data-popper-arrow]" : f;
              b != null &&
                (typeof b != "string" ||
                  (b = a.elements.popper.querySelector(b))) &&
                eo(a.elements.popper, b) &&
                (a.elements.arrow = b);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function ti(m) {
            return m.split("-")[1];
          }
          var Fl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function Gn(m) {
            var a,
              f = m.popper,
              b = m.popperRect,
              M = m.placement,
              C = m.variation,
              U = m.offsets,
              X = m.position,
              J = m.gpuAcceleration,
              oe = m.adaptive,
              ce = m.roundOffsets,
              ie = m.isFixed,
              Ce = U.x,
              Se = Ce === void 0 ? 0 : Ce,
              De = U.y,
              _e = De === void 0 ? 0 : De,
              Ee =
                typeof ce == "function"
                  ? ce({ x: Se, y: _e })
                  : { x: Se, y: _e };
            (Se = Ee.x), (_e = Ee.y);
            var Ze = U.hasOwnProperty("x"),
              Ie = U.hasOwnProperty("y"),
              ze = st,
              He = Ye,
              xe = window;
            if (oe) {
              var se = xn(f),
                ye = "clientHeight",
                Oe = "clientWidth";
              se === It(f) &&
                Un((se = _n(f))).position !== "static" &&
                X === "absolute" &&
                ((ye = "scrollHeight"), (Oe = "scrollWidth")),
                (M === Ye || ((M === st || M === Ut) && C === Ai)) &&
                  ((He = Bt),
                  (_e -=
                    (ie && se === xe && xe.visualViewport
                      ? xe.visualViewport.height
                      : se[ye]) - b.height),
                  (_e *= J ? 1 : -1)),
                (M !== st && ((M !== Ye && M !== Bt) || C !== Ai)) ||
                  ((ze = Ut),
                  (Se -=
                    (ie && se === xe && xe.visualViewport
                      ? xe.visualViewport.width
                      : se[Oe]) - b.width),
                  (Se *= J ? 1 : -1));
            }
            var Ve,
              Fe = Object.assign({ position: X }, oe && Fl),
              ft =
                ce === !0
                  ? (function (Xt, dt) {
                      var bt = Xt.x,
                        sn = Xt.y,
                        Ne = dt.devicePixelRatio || 1;
                      return {
                        x: hn(bt * Ne) / Ne || 0,
                        y: hn(sn * Ne) / Ne || 0,
                      };
                    })({ x: Se, y: _e }, It(f))
                  : { x: Se, y: _e };
            return (
              (Se = ft.x),
              (_e = ft.y),
              J
                ? Object.assign(
                    {},
                    Fe,
                    (((Ve = {})[He] = Ie ? "0" : ""),
                    (Ve[ze] = Ze ? "0" : ""),
                    (Ve.transform =
                      (xe.devicePixelRatio || 1) <= 1
                        ? "translate(" + Se + "px, " + _e + "px)"
                        : "translate3d(" + Se + "px, " + _e + "px, 0)"),
                    Ve)
                  )
                : Object.assign(
                    {},
                    Fe,
                    (((a = {})[He] = Ie ? _e + "px" : ""),
                    (a[ze] = Ze ? Se + "px" : ""),
                    (a.transform = ""),
                    a)
                  )
            );
          }
          const $l = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (m) {
              var a = m.state,
                f = m.options,
                b = f.gpuAcceleration,
                M = b === void 0 || b,
                C = f.adaptive,
                U = C === void 0 || C,
                X = f.roundOffsets,
                J = X === void 0 || X,
                oe = {
                  placement: Ct(a.placement),
                  variation: ti(a.placement),
                  popper: a.elements.popper,
                  popperRect: a.rects.popper,
                  gpuAcceleration: M,
                  isFixed: a.options.strategy === "fixed",
                };
              a.modifiersData.popperOffsets != null &&
                (a.styles.popper = Object.assign(
                  {},
                  a.styles.popper,
                  Gn(
                    Object.assign({}, oe, {
                      offsets: a.modifiersData.popperOffsets,
                      position: a.options.strategy,
                      adaptive: U,
                      roundOffsets: J,
                    })
                  )
                )),
                a.modifiersData.arrow != null &&
                  (a.styles.arrow = Object.assign(
                    {},
                    a.styles.arrow,
                    Gn(
                      Object.assign({}, oe, {
                        offsets: a.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: J,
                      })
                    )
                  )),
                (a.attributes.popper = Object.assign({}, a.attributes.popper, {
                  "data-popper-placement": a.placement,
                }));
            },
            data: {},
          };
          var _i = { passive: !0 };
          const za = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (m) {
              var a = m.state,
                f = m.instance,
                b = m.options,
                M = b.scroll,
                C = M === void 0 || M,
                U = b.resize,
                X = U === void 0 || U,
                J = It(a.elements.popper),
                oe = [].concat(
                  a.scrollParents.reference,
                  a.scrollParents.popper
                );
              return (
                C &&
                  oe.forEach(function (ce) {
                    ce.addEventListener("scroll", f.update, _i);
                  }),
                X && J.addEventListener("resize", f.update, _i),
                function () {
                  C &&
                    oe.forEach(function (ce) {
                      ce.removeEventListener("scroll", f.update, _i);
                    }),
                    X && J.removeEventListener("resize", f.update, _i);
                }
              );
            },
            data: {},
          };
          var Ra = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          function xi(m) {
            return m.replace(/left|right|bottom|top/g, function (a) {
              return Ra[a];
            });
          }
          var to = { start: "end", end: "start" };
          function Dt(m) {
            return m.replace(/start|end/g, function (a) {
              return to[a];
            });
          }
          function Hn(m) {
            var a = It(m);
            return { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
          }
          function dl(m) {
            return Ei(_n(m)).left + Hn(m).scrollLeft;
          }
          function Oi(m) {
            var a = Un(m),
              f = a.overflow,
              b = a.overflowX,
              M = a.overflowY;
            return /auto|scroll|overlay|hidden/.test(f + M + b);
          }
          function no(m) {
            return ["html", "body", "#document"].indexOf(Kt(m)) >= 0
              ? m.ownerDocument.body
              : Gt(m) && Oi(m)
              ? m
              : no(cl(m));
          }
          function Mi(m, a) {
            var f;
            a === void 0 && (a = []);
            var b = no(m),
              M = b === ((f = m.ownerDocument) == null ? void 0 : f.body),
              C = It(b),
              U = M ? [C].concat(C.visualViewport || [], Oi(b) ? b : []) : b,
              X = a.concat(U);
            return M ? X : X.concat(Mi(cl(U)));
          }
          function ea(m) {
            return Object.assign({}, m, {
              left: m.x,
              top: m.y,
              right: m.x + m.width,
              bottom: m.y + m.height,
            });
          }
          function hl(m, a, f) {
            return a === ul
              ? ea(
                  (function (b, M) {
                    var C = It(b),
                      U = _n(b),
                      X = C.visualViewport,
                      J = U.clientWidth,
                      oe = U.clientHeight,
                      ce = 0,
                      ie = 0;
                    if (X) {
                      (J = X.width), (oe = X.height);
                      var Ce = _s();
                      (Ce || (!Ce && M === "fixed")) &&
                        ((ce = X.offsetLeft), (ie = X.offsetTop));
                    }
                    return { width: J, height: oe, x: ce + dl(b), y: ie };
                  })(m, f)
                )
              : mt(a)
              ? (function (b, M) {
                  var C = Ei(b, !1, M === "fixed");
                  return (
                    (C.top = C.top + b.clientTop),
                    (C.left = C.left + b.clientLeft),
                    (C.bottom = C.top + b.clientHeight),
                    (C.right = C.left + b.clientWidth),
                    (C.width = b.clientWidth),
                    (C.height = b.clientHeight),
                    (C.x = C.left),
                    (C.y = C.top),
                    C
                  );
                })(a, f)
              : ea(
                  (function (b) {
                    var M,
                      C = _n(b),
                      U = Hn(b),
                      X = (M = b.ownerDocument) == null ? void 0 : M.body,
                      J = ei(
                        C.scrollWidth,
                        C.clientWidth,
                        X ? X.scrollWidth : 0,
                        X ? X.clientWidth : 0
                      ),
                      oe = ei(
                        C.scrollHeight,
                        C.clientHeight,
                        X ? X.scrollHeight : 0,
                        X ? X.clientHeight : 0
                      ),
                      ce = -U.scrollLeft + dl(b),
                      ie = -U.scrollTop;
                    return (
                      Un(X || C).direction === "rtl" &&
                        (ce += ei(C.clientWidth, X ? X.clientWidth : 0) - J),
                      { width: J, height: oe, x: ce, y: ie }
                    );
                  })(_n(m))
                );
          }
          function ta(m) {
            var a,
              f = m.reference,
              b = m.element,
              M = m.placement,
              C = M ? Ct(M) : null,
              U = M ? ti(M) : null,
              X = f.x + f.width / 2 - b.width / 2,
              J = f.y + f.height / 2 - b.height / 2;
            switch (C) {
              case Ye:
                a = { x: X, y: f.y - b.height };
                break;
              case Bt:
                a = { x: X, y: f.y + f.height };
                break;
              case Ut:
                a = { x: f.x + f.width, y: J };
                break;
              case st:
                a = { x: f.x - b.width, y: J };
                break;
              default:
                a = { x: f.x, y: f.y };
            }
            var oe = C ? Na(C) : null;
            if (oe != null) {
              var ce = oe === "y" ? "height" : "width";
              switch (U) {
                case $n:
                  a[oe] = a[oe] - (f[ce] / 2 - b[ce] / 2);
                  break;
                case Ai:
                  a[oe] = a[oe] + (f[ce] / 2 - b[ce] / 2);
              }
            }
            return a;
          }
          function Ci(m, a) {
            a === void 0 && (a = {});
            var f = a,
              b = f.placement,
              M = b === void 0 ? m.placement : b,
              C = f.strategy,
              U = C === void 0 ? m.strategy : C,
              X = f.boundary,
              J = X === void 0 ? Wr : X,
              oe = f.rootBoundary,
              ce = oe === void 0 ? ul : oe,
              ie = f.elementContext,
              Ce = ie === void 0 ? Bn : ie,
              Se = f.altBoundary,
              De = Se !== void 0 && Se,
              _e = f.padding,
              Ee = _e === void 0 ? 0 : _e,
              Ze = xs(typeof Ee != "number" ? Ee : fl(Ee, ol)),
              Ie = Ce === Bn ? wn : Bn,
              ze = m.rects.popper,
              He = m.elements[De ? Ie : Ce],
              xe = (function (dt, bt, sn, Ne) {
                var rn =
                    bt === "clippingParents"
                      ? (function (Pe) {
                          var At = Mi(cl(Pe)),
                            qt =
                              ["absolute", "fixed"].indexOf(Un(Pe).position) >=
                                0 && Gt(Pe)
                                ? xn(Pe)
                                : Pe;
                          return mt(qt)
                            ? At.filter(function (Nn) {
                                return (
                                  mt(Nn) && eo(Nn, qt) && Kt(Nn) !== "body"
                                );
                              })
                            : [];
                        })(dt)
                      : [].concat(bt),
                  on = [].concat(rn, [sn]),
                  Qi = on[0],
                  ht = on.reduce(function (Pe, At) {
                    var qt = hl(dt, At, Ne);
                    return (
                      (Pe.top = ei(qt.top, Pe.top)),
                      (Pe.right = Jl(qt.right, Pe.right)),
                      (Pe.bottom = Jl(qt.bottom, Pe.bottom)),
                      (Pe.left = ei(qt.left, Pe.left)),
                      Pe
                    );
                  }, hl(dt, Qi, Ne));
                return (
                  (ht.width = ht.right - ht.left),
                  (ht.height = ht.bottom - ht.top),
                  (ht.x = ht.left),
                  (ht.y = ht.top),
                  ht
                );
              })(
                mt(He) ? He : He.contextElement || _n(m.elements.popper),
                J,
                ce,
                U
              ),
              se = Ei(m.elements.reference),
              ye = ta({ reference: se, element: ze, placement: M }),
              Oe = ea(Object.assign({}, ze, ye)),
              Ve = Ce === Bn ? Oe : se,
              Fe = {
                top: xe.top - Ve.top + Ze.top,
                bottom: Ve.bottom - xe.bottom + Ze.bottom,
                left: xe.left - Ve.left + Ze.left,
                right: Ve.right - xe.right + Ze.right,
              },
              ft = m.modifiersData.offset;
            if (Ce === Bn && ft) {
              var Xt = ft[M];
              Object.keys(Fe).forEach(function (dt) {
                var bt = [Ut, Bt].indexOf(dt) >= 0 ? 1 : -1,
                  sn = [Ye, Bt].indexOf(dt) >= 0 ? "y" : "x";
                Fe[dt] += Xt[sn] * bt;
              });
            }
            return Fe;
          }
          function Qu(m, a) {
            a === void 0 && (a = {});
            var f = a,
              b = f.placement,
              M = f.boundary,
              C = f.rootBoundary,
              U = f.padding,
              X = f.flipVariations,
              J = f.allowedAutoPlacements,
              oe = J === void 0 ? xa : J,
              ce = ti(b),
              ie = ce
                ? X
                  ? Kl
                  : Kl.filter(function (De) {
                      return ti(De) === ce;
                    })
                : ol,
              Ce = ie.filter(function (De) {
                return oe.indexOf(De) >= 0;
              });
            Ce.length === 0 && (Ce = ie);
            var Se = Ce.reduce(function (De, _e) {
              return (
                (De[_e] = Ci(m, {
                  placement: _e,
                  boundary: M,
                  rootBoundary: C,
                  padding: U,
                })[Ct(_e)]),
                De
              );
            }, {});
            return Object.keys(Se).sort(function (De, _e) {
              return Se[De] - Se[_e];
            });
          }
          const io = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (m) {
              var a = m.state,
                f = m.options,
                b = m.name;
              if (!a.modifiersData[b]._skip) {
                for (
                  var M = f.mainAxis,
                    C = M === void 0 || M,
                    U = f.altAxis,
                    X = U === void 0 || U,
                    J = f.fallbackPlacements,
                    oe = f.padding,
                    ce = f.boundary,
                    ie = f.rootBoundary,
                    Ce = f.altBoundary,
                    Se = f.flipVariations,
                    De = Se === void 0 || Se,
                    _e = f.allowedAutoPlacements,
                    Ee = a.options.placement,
                    Ze = Ct(Ee),
                    Ie =
                      J ||
                      (Ze !== Ee && De
                        ? (function (Pe) {
                            if (Ct(Pe) === Ln) return [];
                            var At = xi(Pe);
                            return [Dt(Pe), At, Dt(At)];
                          })(Ee)
                        : [xi(Ee)]),
                    ze = [Ee].concat(Ie).reduce(function (Pe, At) {
                      return Pe.concat(
                        Ct(At) === Ln
                          ? Qu(a, {
                              placement: At,
                              boundary: ce,
                              rootBoundary: ie,
                              padding: oe,
                              flipVariations: De,
                              allowedAutoPlacements: _e,
                            })
                          : At
                      );
                    }, []),
                    He = a.rects.reference,
                    xe = a.rects.popper,
                    se = new Map(),
                    ye = !0,
                    Oe = ze[0],
                    Ve = 0;
                  Ve < ze.length;
                  Ve++
                ) {
                  var Fe = ze[Ve],
                    ft = Ct(Fe),
                    Xt = ti(Fe) === $n,
                    dt = [Ye, Bt].indexOf(ft) >= 0,
                    bt = dt ? "width" : "height",
                    sn = Ci(a, {
                      placement: Fe,
                      boundary: ce,
                      rootBoundary: ie,
                      altBoundary: Ce,
                      padding: oe,
                    }),
                    Ne = dt ? (Xt ? Ut : st) : Xt ? Bt : Ye;
                  He[bt] > xe[bt] && (Ne = xi(Ne));
                  var rn = xi(Ne),
                    on = [];
                  if (
                    (C && on.push(sn[ft] <= 0),
                    X && on.push(sn[Ne] <= 0, sn[rn] <= 0),
                    on.every(function (Pe) {
                      return Pe;
                    }))
                  ) {
                    (Oe = Fe), (ye = !1);
                    break;
                  }
                  se.set(Fe, on);
                }
                if (ye)
                  for (
                    var Qi = function (Pe) {
                        var At = ze.find(function (qt) {
                          var Nn = se.get(qt);
                          if (Nn)
                            return Nn.slice(0, Pe).every(function (St) {
                              return St;
                            });
                        });
                        if (At) return (Oe = At), "break";
                      },
                      ht = De ? 3 : 1;
                    ht > 0 && Qi(ht) !== "break";
                    ht--
                  );
                a.placement !== Oe &&
                  ((a.modifiersData[b]._skip = !0),
                  (a.placement = Oe),
                  (a.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function lo(m, a, f) {
            return (
              f === void 0 && (f = { x: 0, y: 0 }),
              {
                top: m.top - a.height - f.y,
                right: m.right - a.width + f.x,
                bottom: m.bottom - a.height + f.y,
                left: m.left - a.width - f.x,
              }
            );
          }
          function ja(m) {
            return [Ye, Ut, Bt, st].some(function (a) {
              return m[a] >= 0;
            });
          }
          const ao = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (m) {
                var a = m.state,
                  f = m.name,
                  b = a.rects.reference,
                  M = a.rects.popper,
                  C = a.modifiersData.preventOverflow,
                  U = Ci(a, { elementContext: "reference" }),
                  X = Ci(a, { altBoundary: !0 }),
                  J = lo(U, b),
                  oe = lo(X, M, C),
                  ce = ja(J),
                  ie = ja(oe);
                (a.modifiersData[f] = {
                  referenceClippingOffsets: J,
                  popperEscapeOffsets: oe,
                  isReferenceHidden: ce,
                  hasPopperEscaped: ie,
                }),
                  (a.attributes.popper = Object.assign(
                    {},
                    a.attributes.popper,
                    {
                      "data-popper-reference-hidden": ce,
                      "data-popper-escaped": ie,
                    }
                  ));
              },
            },
            so = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (m) {
                var a = m.state,
                  f = m.options,
                  b = m.name,
                  M = f.offset,
                  C = M === void 0 ? [0, 0] : M,
                  U = xa.reduce(function (ce, ie) {
                    return (
                      (ce[ie] = (function (Ce, Se, De) {
                        var _e = Ct(Ce),
                          Ee = [st, Ye].indexOf(_e) >= 0 ? -1 : 1,
                          Ze =
                            typeof De == "function"
                              ? De(Object.assign({}, Se, { placement: Ce }))
                              : De,
                          Ie = Ze[0],
                          ze = Ze[1];
                        return (
                          (Ie = Ie || 0),
                          (ze = (ze || 0) * Ee),
                          [st, Ut].indexOf(_e) >= 0
                            ? { x: ze, y: Ie }
                            : { x: Ie, y: ze }
                        );
                      })(ie, a.rects, C)),
                      ce
                    );
                  }, {}),
                  X = U[a.placement],
                  J = X.x,
                  oe = X.y;
                a.modifiersData.popperOffsets != null &&
                  ((a.modifiersData.popperOffsets.x += J),
                  (a.modifiersData.popperOffsets.y += oe)),
                  (a.modifiersData[b] = U);
              },
            },
            Os = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (m) {
                var a = m.state,
                  f = m.name;
                a.modifiersData[f] = ta({
                  reference: a.rects.reference,
                  element: a.rects.popper,
                  placement: a.placement,
                });
              },
              data: {},
            },
            ro = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (m) {
                var a = m.state,
                  f = m.options,
                  b = m.name,
                  M = f.mainAxis,
                  C = M === void 0 || M,
                  U = f.altAxis,
                  X = U !== void 0 && U,
                  J = f.boundary,
                  oe = f.rootBoundary,
                  ce = f.altBoundary,
                  ie = f.padding,
                  Ce = f.tether,
                  Se = Ce === void 0 || Ce,
                  De = f.tetherOffset,
                  _e = De === void 0 ? 0 : De,
                  Ee = Ci(a, {
                    boundary: J,
                    rootBoundary: oe,
                    padding: ie,
                    altBoundary: ce,
                  }),
                  Ze = Ct(a.placement),
                  Ie = ti(a.placement),
                  ze = !Ie,
                  He = Na(Ze),
                  xe = He === "x" ? "y" : "x",
                  se = a.modifiersData.popperOffsets,
                  ye = a.rects.reference,
                  Oe = a.rects.popper,
                  Ve =
                    typeof _e == "function"
                      ? _e(
                          Object.assign({}, a.rects, { placement: a.placement })
                        )
                      : _e,
                  Fe =
                    typeof Ve == "number"
                      ? { mainAxis: Ve, altAxis: Ve }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, Ve),
                  ft = a.modifiersData.offset
                    ? a.modifiersData.offset[a.placement]
                    : null,
                  Xt = { x: 0, y: 0 };
                if (se) {
                  if (C) {
                    var dt,
                      bt = He === "y" ? Ye : st,
                      sn = He === "y" ? Bt : Ut,
                      Ne = He === "y" ? "height" : "width",
                      rn = se[He],
                      on = rn + Ee[bt],
                      Qi = rn - Ee[sn],
                      ht = Se ? -Oe[Ne] / 2 : 0,
                      Pe = Ie === $n ? ye[Ne] : Oe[Ne],
                      At = Ie === $n ? -Oe[Ne] : -ye[Ne],
                      qt = a.elements.arrow,
                      Nn = Se && qt ? Wl(qt) : { width: 0, height: 0 },
                      St = a.modifiersData["arrow#persistent"]
                        ? a.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      rt = St[bt],
                      Qa = St[sn],
                      ci = wi(0, ye[Ne], Nn[Ne]),
                      ka = ze
                        ? ye[Ne] / 2 - ht - ci - rt - Fe.mainAxis
                        : Pe - ci - rt - Fe.mainAxis,
                      lr = ze
                        ? -ye[Ne] / 2 + ht + ci + Qa + Fe.mainAxis
                        : At + ci + Qa + Fe.mainAxis,
                      gn = a.elements.arrow && xn(a.elements.arrow),
                      Za = gn
                        ? He === "y"
                          ? gn.clientTop || 0
                          : gn.clientLeft || 0
                        : 0,
                      Ka = (dt = ft?.[He]) != null ? dt : 0,
                      ar = rn + lr - Ka,
                      sr = wi(
                        Se ? Jl(on, rn + ka - Ka - Za) : on,
                        rn,
                        Se ? ei(Qi, ar) : Qi
                      );
                    (se[He] = sr), (Xt[He] = sr - rn);
                  }
                  if (X) {
                    var rr,
                      Qo = He === "x" ? Ye : st,
                      ko = He === "x" ? Bt : Ut,
                      fi = se[xe],
                      fa = xe === "y" ? "height" : "width",
                      Ia = fi + Ee[Qo],
                      or = fi - Ee[ko],
                      ur = [Ye, st].indexOf(Ze) !== -1,
                      cr = (rr = ft?.[xe]) != null ? rr : 0,
                      fr = ur ? Ia : fi - ye[fa] - Oe[fa] - cr + Fe.altAxis,
                      dr = ur ? fi + ye[fa] + Oe[fa] - cr - Fe.altAxis : or,
                      Pa =
                        Se && ur
                          ? (function (Zo, Ko, Ja) {
                              var hr = wi(Zo, Ko, Ja);
                              return hr > Ja ? Ja : hr;
                            })(fr, fi, dr)
                          : wi(Se ? fr : Ia, fi, Se ? dr : or);
                    (se[xe] = Pa), (Xt[xe] = Pa - fi);
                  }
                  a.modifiersData[b] = Xt;
                }
              },
              requiresIfExists: ["offset"],
            };
          function ku(m, a, f) {
            f === void 0 && (f = !1);
            var b,
              M,
              C = Gt(a),
              U =
                Gt(a) &&
                (function (ie) {
                  var Ce = ie.getBoundingClientRect(),
                    Se = hn(Ce.width) / ie.offsetWidth || 1,
                    De = hn(Ce.height) / ie.offsetHeight || 1;
                  return Se !== 1 || De !== 1;
                })(a),
              X = _n(a),
              J = Ei(m, U, f),
              oe = { scrollLeft: 0, scrollTop: 0 },
              ce = { x: 0, y: 0 };
            return (
              (C || (!C && !f)) &&
                ((Kt(a) !== "body" || Oi(X)) &&
                  (oe =
                    (b = a) !== It(b) && Gt(b)
                      ? {
                          scrollLeft: (M = b).scrollLeft,
                          scrollTop: M.scrollTop,
                        }
                      : Hn(b)),
                Gt(a)
                  ? (((ce = Ei(a, !0)).x += a.clientLeft),
                    (ce.y += a.clientTop))
                  : X && (ce.x = dl(X))),
              {
                x: J.left + oe.scrollLeft - ce.x,
                y: J.top + oe.scrollTop - ce.y,
                width: J.width,
                height: J.height,
              }
            );
          }
          function oo(m) {
            var a = new Map(),
              f = new Set(),
              b = [];
            function M(C) {
              f.add(C.name),
                []
                  .concat(C.requires || [], C.requiresIfExists || [])
                  .forEach(function (U) {
                    if (!f.has(U)) {
                      var X = a.get(U);
                      X && M(X);
                    }
                  }),
                b.push(C);
            }
            return (
              m.forEach(function (C) {
                a.set(C.name, C);
              }),
              m.forEach(function (C) {
                f.has(C.name) || M(C);
              }),
              b
            );
          }
          var uo = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function co() {
            for (var m = arguments.length, a = new Array(m), f = 0; f < m; f++)
              a[f] = arguments[f];
            return !a.some(function (b) {
              return !(b && typeof b.getBoundingClientRect == "function");
            });
          }
          function La(m) {
            m === void 0 && (m = {});
            var a = m,
              f = a.defaultModifiers,
              b = f === void 0 ? [] : f,
              M = a.defaultOptions,
              C = M === void 0 ? uo : M;
            return function (U, X, J) {
              J === void 0 && (J = C);
              var oe,
                ce,
                ie = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, uo, C),
                  modifiersData: {},
                  elements: { reference: U, popper: X },
                  attributes: {},
                  styles: {},
                },
                Ce = [],
                Se = !1,
                De = {
                  state: ie,
                  setOptions: function (Ee) {
                    var Ze = typeof Ee == "function" ? Ee(ie.options) : Ee;
                    _e(),
                      (ie.options = Object.assign({}, C, ie.options, Ze)),
                      (ie.scrollParents = {
                        reference: mt(U)
                          ? Mi(U)
                          : U.contextElement
                          ? Mi(U.contextElement)
                          : [],
                        popper: Mi(X),
                      });
                    var Ie,
                      ze,
                      He = (function (xe) {
                        var se = oo(xe);
                        return Ts.reduce(function (ye, Oe) {
                          return ye.concat(
                            se.filter(function (Ve) {
                              return Ve.phase === Oe;
                            })
                          );
                        }, []);
                      })(
                        ((Ie = [].concat(b, ie.options.modifiers)),
                        (ze = Ie.reduce(function (xe, se) {
                          var ye = xe[se.name];
                          return (
                            (xe[se.name] = ye
                              ? Object.assign({}, ye, se, {
                                  options: Object.assign(
                                    {},
                                    ye.options,
                                    se.options
                                  ),
                                  data: Object.assign({}, ye.data, se.data),
                                })
                              : se),
                            xe
                          );
                        }, {})),
                        Object.keys(ze).map(function (xe) {
                          return ze[xe];
                        }))
                      );
                    return (
                      (ie.orderedModifiers = He.filter(function (xe) {
                        return xe.enabled;
                      })),
                      ie.orderedModifiers.forEach(function (xe) {
                        var se = xe.name,
                          ye = xe.options,
                          Oe = ye === void 0 ? {} : ye,
                          Ve = xe.effect;
                        if (typeof Ve == "function") {
                          var Fe = Ve({
                            state: ie,
                            name: se,
                            instance: De,
                            options: Oe,
                          });
                          Ce.push(Fe || function () {});
                        }
                      }),
                      De.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!Se) {
                      var Ee = ie.elements,
                        Ze = Ee.reference,
                        Ie = Ee.popper;
                      if (co(Ze, Ie)) {
                        (ie.rects = {
                          reference: ku(
                            Ze,
                            xn(Ie),
                            ie.options.strategy === "fixed"
                          ),
                          popper: Wl(Ie),
                        }),
                          (ie.reset = !1),
                          (ie.placement = ie.options.placement),
                          ie.orderedModifiers.forEach(function (Ve) {
                            return (ie.modifiersData[Ve.name] = Object.assign(
                              {},
                              Ve.data
                            ));
                          });
                        for (var ze = 0; ze < ie.orderedModifiers.length; ze++)
                          if (ie.reset !== !0) {
                            var He = ie.orderedModifiers[ze],
                              xe = He.fn,
                              se = He.options,
                              ye = se === void 0 ? {} : se,
                              Oe = He.name;
                            typeof xe == "function" &&
                              (ie =
                                xe({
                                  state: ie,
                                  options: ye,
                                  name: Oe,
                                  instance: De,
                                }) || ie);
                          } else (ie.reset = !1), (ze = -1);
                      }
                    }
                  },
                  update:
                    ((oe = function () {
                      return new Promise(function (Ee) {
                        De.forceUpdate(), Ee(ie);
                      });
                    }),
                    function () {
                      return (
                        ce ||
                          (ce = new Promise(function (Ee) {
                            Promise.resolve().then(function () {
                              (ce = void 0), Ee(oe());
                            });
                          })),
                        ce
                      );
                    }),
                  destroy: function () {
                    _e(), (Se = !0);
                  },
                };
              if (!co(U, X)) return De;
              function _e() {
                Ce.forEach(function (Ee) {
                  return Ee();
                }),
                  (Ce = []);
              }
              return (
                De.setOptions(J).then(function (Ee) {
                  !Se && J.onFirstUpdate && J.onFirstUpdate(Ee);
                }),
                De
              );
            };
          }
          var Zu = La(),
            Ms = La({ defaultModifiers: [za, Os, $l, Pl] }),
            Cs = La({ defaultModifiers: [za, Os, $l, Pl, so, io, ro, On, ao] });
          const fo = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: Zt,
                  afterRead: Ma,
                  afterWrite: Il,
                  applyStyles: Pl,
                  arrow: On,
                  auto: Ln,
                  basePlacements: ol,
                  beforeMain: Fr,
                  beforeRead: Si,
                  beforeWrite: Es,
                  bottom: Bt,
                  clippingParents: Wr,
                  computeStyles: $l,
                  createPopper: Cs,
                  createPopperBase: Zu,
                  createPopperLite: Ms,
                  detectOverflow: Ci,
                  end: Ai,
                  eventListeners: za,
                  flip: io,
                  hide: ao,
                  left: st,
                  main: Ss,
                  modifierPhases: Ts,
                  offset: so,
                  placements: xa,
                  popper: Bn,
                  popperGenerator: La,
                  popperOffsets: Os,
                  preventOverflow: ro,
                  read: Oa,
                  reference: wn,
                  right: Ut,
                  start: $n,
                  top: Ye,
                  variationPlacements: Kl,
                  viewport: ul,
                  write: $r,
                },
                Symbol.toStringTag,
                { value: "Module" }
              )
            ),
            ho = "dropdown",
            ni = ".bs.dropdown",
            Ds = ".data-api",
            Ku = "ArrowUp",
            po = "ArrowDown",
            Iu = `hide${ni}`,
            Pu = `hidden${ni}`,
            Ju = `show${ni}`,
            Wu = `shown${ni}`,
            mo = `click${ni}${Ds}`,
            go = `keydown${ni}${Ds}`,
            Ns = `keyup${ni}${Ds}`,
            Mn = "show",
            Di = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            vo = `${Di}.${Mn}`,
            na = ".dropdown-menu",
            yo = $() ? "top-end" : "top-start",
            bo = $() ? "top-start" : "top-end",
            Ao = $() ? "bottom-end" : "bottom-start",
            pl = $() ? "bottom-start" : "bottom-end",
            Fu = $() ? "left-start" : "right-start",
            $u = $() ? "right-start" : "left-start",
            ec = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            So = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class nn extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  te.next(this._element, na)[0] ||
                  te.prev(this._element, na)[0] ||
                  te.findOne(na, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return ec;
            }
            static get DefaultType() {
              return So;
            }
            static get NAME() {
              return ho;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (T(this._element) || this._isShown()) return;
              const a = { relatedTarget: this._element };
              if (!v.trigger(this._element, Ju, a).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const f of [].concat(...document.body.children))
                    v.on(f, "mouseover", j);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(Mn),
                  this._element.classList.add(Mn),
                  v.trigger(this._element, Wu, a);
              }
            }
            hide() {
              if (T(this._element) || !this._isShown()) return;
              const a = { relatedTarget: this._element };
              this._completeHide(a);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(a) {
              if (!v.trigger(this._element, Iu, a).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const f of [].concat(...document.body.children))
                    v.off(f, "mouseover", j);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(Mn),
                  this._element.classList.remove(Mn),
                  this._element.setAttribute("aria-expanded", "false"),
                  me.removeDataAttribute(this._menu, "popper"),
                  v.trigger(this._element, Pu, a),
                  this._element.focus();
              }
            }
            _getConfig(a) {
              if (
                typeof (a = super._getConfig(a)).reference == "object" &&
                !E(a.reference) &&
                typeof a.reference.getBoundingClientRect != "function"
              )
                throw new TypeError(
                  `${ho.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return a;
            }
            _createPopper() {
              if (fo === void 0)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
                );
              let a = this._element;
              this._config.reference === "parent"
                ? (a = this._parent)
                : E(this._config.reference)
                ? (a = A(this._config.reference))
                : typeof this._config.reference == "object" &&
                  (a = this._config.reference);
              const f = this._getPopperConfig();
              this._popper = Cs(a, this._menu, f);
            }
            _isShown() {
              return this._menu.classList.contains(Mn);
            }
            _getPlacement() {
              const a = this._parent;
              if (a.classList.contains("dropend")) return Fu;
              if (a.classList.contains("dropstart")) return $u;
              if (a.classList.contains("dropup-center")) return "top";
              if (a.classList.contains("dropdown-center")) return "bottom";
              const f =
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim() === "end";
              return a.classList.contains("dropup")
                ? f
                  ? bo
                  : yo
                : f
                ? pl
                : Ao;
            }
            _detectNavbar() {
              return this._element.closest(".navbar") !== null;
            }
            _getOffset() {
              const { offset: a } = this._config;
              return typeof a == "string"
                ? a.split(",").map((f) => Number.parseInt(f, 10))
                : typeof a == "function"
                ? (f) => a(f, this._element)
                : a;
            }
            _getPopperConfig() {
              const a = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || this._config.display === "static") &&
                  (me.setDataAttribute(this._menu, "popper", "static"),
                  (a.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...a, ...W(this._config.popperConfig, [void 0, a]) }
              );
            }
            _selectMenuItem({ key: a, target: f }) {
              const b = te
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu
                )
                .filter((M) => y(M));
              b.length && ue(b, f, a === po, !b.includes(f)).focus();
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = nn.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (f[a] === void 0)
                    throw new TypeError(`No method named "${a}"`);
                  f[a]();
                }
              });
            }
            static clearMenus(a) {
              if (a.button === 2 || (a.type === "keyup" && a.key !== "Tab"))
                return;
              const f = te.find(vo);
              for (const b of f) {
                const M = nn.getInstance(b);
                if (!M || M._config.autoClose === !1) continue;
                const C = a.composedPath(),
                  U = C.includes(M._menu);
                if (
                  C.includes(M._element) ||
                  (M._config.autoClose === "inside" && !U) ||
                  (M._config.autoClose === "outside" && U) ||
                  (M._menu.contains(a.target) &&
                    ((a.type === "keyup" && a.key === "Tab") ||
                      /input|select|option|textarea|form/i.test(
                        a.target.tagName
                      )))
                )
                  continue;
                const X = { relatedTarget: M._element };
                a.type === "click" && (X.clickEvent = a), M._completeHide(X);
              }
            }
            static dataApiKeydownHandler(a) {
              const f = /input|textarea/i.test(a.target.tagName),
                b = a.key === "Escape",
                M = [Ku, po].includes(a.key);
              if ((!M && !b) || (f && !b)) return;
              a.preventDefault();
              const C = this.matches(Di)
                  ? this
                  : te.prev(this, Di)[0] ||
                    te.next(this, Di)[0] ||
                    te.findOne(Di, a.delegateTarget.parentNode),
                U = nn.getOrCreateInstance(C);
              if (M)
                return a.stopPropagation(), U.show(), void U._selectMenuItem(a);
              U._isShown() && (a.stopPropagation(), U.hide(), C.focus());
            }
          }
          v.on(document, go, Di, nn.dataApiKeydownHandler),
            v.on(document, go, na, nn.dataApiKeydownHandler),
            v.on(document, mo, nn.clearMenus),
            v.on(document, Ns, nn.clearMenus),
            v.on(document, mo, Di, function (m) {
              m.preventDefault(), nn.getOrCreateInstance(this).toggle();
            }),
            Y(nn);
          const ml = "backdrop",
            gl = "show",
            Eo = `mousedown.bs.${ml}`,
            Ba = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            To = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class zs extends je {
            constructor(a) {
              super(),
                (this._config = this._getConfig(a)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return Ba;
            }
            static get DefaultType() {
              return To;
            }
            static get NAME() {
              return ml;
            }
            show(a) {
              if (!this._config.isVisible) return void W(a);
              this._append();
              const f = this._getElement();
              this._config.isAnimated && G(f),
                f.classList.add(gl),
                this._emulateAnimation(() => {
                  W(a);
                });
            }
            hide(a) {
              this._config.isVisible
                ? (this._getElement().classList.remove(gl),
                  this._emulateAnimation(() => {
                    this.dispose(), W(a);
                  }))
                : W(a);
            }
            dispose() {
              this._isAppended &&
                (v.off(this._element, Eo),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const a = document.createElement("div");
                (a.className = this._config.className),
                  this._config.isAnimated && a.classList.add("fade"),
                  (this._element = a);
              }
              return this._element;
            }
            _configAfterMerge(a) {
              return (a.rootElement = A(a.rootElement)), a;
            }
            _append() {
              if (this._isAppended) return;
              const a = this._getElement();
              this._config.rootElement.append(a),
                v.on(a, Eo, () => {
                  W(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(a) {
              P(a, this._getElement(), this._config.isAnimated);
            }
          }
          const vl = ".bs.focustrap",
            Rs = `focusin${vl}`,
            wo = `keydown.tab${vl}`,
            js = "backward",
            _o = { autofocus: !0, trapElement: null },
            tc = { autofocus: "boolean", trapElement: "element" };
          class xo extends je {
            constructor(a) {
              super(),
                (this._config = this._getConfig(a)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return _o;
            }
            static get DefaultType() {
              return tc;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                v.off(document, vl),
                v.on(document, Rs, (a) => this._handleFocusin(a)),
                v.on(document, wo, (a) => this._handleKeydown(a)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), v.off(document, vl));
            }
            _handleFocusin(a) {
              const { trapElement: f } = this._config;
              if (
                a.target === document ||
                a.target === f ||
                f.contains(a.target)
              )
                return;
              const b = te.focusableChildren(f);
              b.length === 0
                ? f.focus()
                : this._lastTabNavDirection === js
                ? b[b.length - 1].focus()
                : b[0].focus();
            }
            _handleKeydown(a) {
              a.key === "Tab" &&
                (this._lastTabNavDirection = a.shiftKey ? js : "forward");
            }
          }
          const Oo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Mo = ".sticky-top",
            Ua = "padding-right",
            Ht = "margin-right";
          class Ni {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const a = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - a);
            }
            hide() {
              const a = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, Ua, (f) => f + a),
                this._setElementAttributes(Oo, Ua, (f) => f + a),
                this._setElementAttributes(Mo, Ht, (f) => f - a);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Ua),
                this._resetElementAttributes(Oo, Ua),
                this._resetElementAttributes(Mo, Ht);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(a, f, b) {
              const M = this.getWidth();
              this._applyManipulationCallback(a, (C) => {
                if (
                  C !== this._element &&
                  window.innerWidth > C.clientWidth + M
                )
                  return;
                this._saveInitialAttribute(C, f);
                const U = window.getComputedStyle(C).getPropertyValue(f);
                C.style.setProperty(f, `${b(Number.parseFloat(U))}px`);
              });
            }
            _saveInitialAttribute(a, f) {
              const b = a.style.getPropertyValue(f);
              b && me.setDataAttribute(a, f, b);
            }
            _resetElementAttributes(a, f) {
              this._applyManipulationCallback(a, (b) => {
                const M = me.getDataAttribute(b, f);
                M !== null
                  ? (me.removeDataAttribute(b, f), b.style.setProperty(f, M))
                  : b.style.removeProperty(f);
              });
            }
            _applyManipulationCallback(a, f) {
              if (E(a)) f(a);
              else for (const b of te.find(a, this._element)) f(b);
            }
          }
          const Pt = ".bs.modal",
            Co = `hide${Pt}`,
            Do = `hidePrevented${Pt}`,
            Ls = `hidden${Pt}`,
            Ga = `show${Pt}`,
            nc = `shown${Pt}`,
            yl = `resize${Pt}`,
            Bs = `click.dismiss${Pt}`,
            ia = `mousedown.dismiss${Pt}`,
            Us = `keydown.dismiss${Pt}`,
            No = `click${Pt}.data-api`,
            ii = "modal-open",
            zi = "show",
            la = "modal-static",
            zo = { backdrop: !0, focus: !0, keyboard: !0 },
            Ri = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class li extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._dialog = te.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Ni()),
                this._addEventListeners();
            }
            static get Default() {
              return zo;
            }
            static get DefaultType() {
              return Ri;
            }
            static get NAME() {
              return "modal";
            }
            toggle(a) {
              return this._isShown ? this.hide() : this.show(a);
            }
            show(a) {
              this._isShown ||
                this._isTransitioning ||
                v.trigger(this._element, Ga, { relatedTarget: a })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(ii),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(a)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (v.trigger(this._element, Co).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(zi),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )));
            }
            dispose() {
              v.off(window, Pt),
                v.off(this._dialog, Pt),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new zs({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new xo({ trapElement: this._element });
            }
            _showElement(a) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const f = te.findOne(".modal-body", this._dialog);
              f && (f.scrollTop = 0),
                G(this._element),
                this._element.classList.add(zi),
                this._queueCallback(
                  () => {
                    this._config.focus && this._focustrap.activate(),
                      (this._isTransitioning = !1),
                      v.trigger(this._element, nc, { relatedTarget: a });
                  },
                  this._dialog,
                  this._isAnimated()
                );
            }
            _addEventListeners() {
              v.on(this._element, Us, (a) => {
                a.key === "Escape" &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition());
              }),
                v.on(window, yl, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                v.on(this._element, ia, (a) => {
                  v.one(this._element, Bs, (f) => {
                    this._element === a.target &&
                      this._element === f.target &&
                      (this._config.backdrop !== "static"
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(ii),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    v.trigger(this._element, Ls);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (v.trigger(this._element, Do).defaultPrevented) return;
              const a =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                f = this._element.style.overflowY;
              f === "hidden" ||
                this._element.classList.contains(la) ||
                (a || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(la),
                this._queueCallback(() => {
                  this._element.classList.remove(la),
                    this._queueCallback(() => {
                      this._element.style.overflowY = f;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const a =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                f = this._scrollBar.getWidth(),
                b = f > 0;
              if (b && !a) {
                const M = $() ? "paddingLeft" : "paddingRight";
                this._element.style[M] = `${f}px`;
              }
              if (!b && a) {
                const M = $() ? "paddingRight" : "paddingLeft";
                this._element.style[M] = `${f}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(a, f) {
              return this.each(function () {
                const b = li.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (b[a] === void 0)
                    throw new TypeError(`No method named "${a}"`);
                  b[a](f);
                }
              });
            }
          }
          v.on(document, No, '[data-bs-toggle="modal"]', function (m) {
            const a = te.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
              v.one(a, Ga, (b) => {
                b.defaultPrevented ||
                  v.one(a, Ls, () => {
                    y(this) && this.focus();
                  });
              });
            const f = te.findOne(".modal.show");
            f && li.getInstance(f).hide(),
              li.getOrCreateInstance(a).toggle(this);
          }),
            fn(li),
            Y(li);
          const Cn = ".bs.offcanvas",
            Gs = ".data-api",
            ic = `load${Cn}${Gs}`,
            Ro = "show",
            jo = "showing",
            Hs = "hiding",
            Ys = ".offcanvas.show",
            Vs = `show${Cn}`,
            pn = `shown${Cn}`,
            Lo = `hide${Cn}`,
            Jt = `hidePrevented${Cn}`,
            Wt = `hidden${Cn}`,
            bl = `resize${Cn}`,
            Xs = `click${Cn}${Gs}`,
            Ha = `keydown.dismiss${Cn}`,
            Ya = { backdrop: !0, keyboard: !0, scroll: !1 },
            qs = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class Yt extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return Ya;
            }
            static get DefaultType() {
              return qs;
            }
            static get NAME() {
              return "offcanvas";
            }
            toggle(a) {
              return this._isShown ? this.hide() : this.show(a);
            }
            show(a) {
              this._isShown ||
                v.trigger(this._element, Vs, { relatedTarget: a })
                  .defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new Ni().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(jo),
                this._queueCallback(
                  () => {
                    (this._config.scroll && !this._config.backdrop) ||
                      this._focustrap.activate(),
                      this._element.classList.add(Ro),
                      this._element.classList.remove(jo),
                      v.trigger(this._element, pn, { relatedTarget: a });
                  },
                  this._element,
                  !0
                ));
            }
            hide() {
              this._isShown &&
                (v.trigger(this._element, Lo).defaultPrevented ||
                  (this._focustrap.deactivate(),
                  this._element.blur(),
                  (this._isShown = !1),
                  this._element.classList.add(Hs),
                  this._backdrop.hide(),
                  this._queueCallback(
                    () => {
                      this._element.classList.remove(Ro, Hs),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new Ni().reset(),
                        v.trigger(this._element, Wt);
                    },
                    this._element,
                    !0
                  )));
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const a = !!this._config.backdrop;
              return new zs({
                className: "offcanvas-backdrop",
                isVisible: a,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: a
                  ? () => {
                      this._config.backdrop !== "static"
                        ? this.hide()
                        : v.trigger(this._element, Jt);
                    }
                  : null,
              });
            }
            _initializeFocusTrap() {
              return new xo({ trapElement: this._element });
            }
            _addEventListeners() {
              v.on(this._element, Ha, (a) => {
                a.key === "Escape" &&
                  (this._config.keyboard
                    ? this.hide()
                    : v.trigger(this._element, Jt));
              });
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = Yt.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (
                    f[a] === void 0 ||
                    a.startsWith("_") ||
                    a === "constructor"
                  )
                    throw new TypeError(`No method named "${a}"`);
                  f[a](this);
                }
              });
            }
          }
          v.on(document, Xs, '[data-bs-toggle="offcanvas"]', function (m) {
            const a = te.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && m.preventDefault(),
              T(this))
            )
              return;
            v.one(a, Wt, () => {
              y(this) && this.focus();
            });
            const f = te.findOne(Ys);
            f && f !== a && Yt.getInstance(f).hide(),
              Yt.getOrCreateInstance(a).toggle(this);
          }),
            v.on(window, ic, () => {
              for (const m of te.find(Ys)) Yt.getOrCreateInstance(m).show();
            }),
            v.on(window, bl, () => {
              for (const m of te.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                getComputedStyle(m).position !== "fixed" &&
                  Yt.getOrCreateInstance(m).hide();
            }),
            fn(Yt),
            Y(Yt);
          const Qs = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            Va = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            Al = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            lc = (m, a) => {
              const f = m.nodeName.toLowerCase();
              return a.includes(f)
                ? !Va.has(f) || !!Al.test(m.nodeValue)
                : a.filter((b) => b instanceof RegExp).some((b) => b.test(f));
            },
            Ft = {
              allowList: Qs,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            ks = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            Yn = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class Bo extends je {
            constructor(a) {
              super(), (this._config = this._getConfig(a));
            }
            static get Default() {
              return Ft;
            }
            static get DefaultType() {
              return ks;
            }
            static get NAME() {
              return "TemplateFactory";
            }
            getContent() {
              return Object.values(this._config.content)
                .map((a) => this._resolvePossibleFunction(a))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(a) {
              return (
                this._checkContent(a),
                (this._config.content = { ...this._config.content, ...a }),
                this
              );
            }
            toHtml() {
              const a = document.createElement("div");
              a.innerHTML = this._maybeSanitize(this._config.template);
              for (const [M, C] of Object.entries(this._config.content))
                this._setContent(a, C, M);
              const f = a.children[0],
                b = this._resolvePossibleFunction(this._config.extraClass);
              return b && f.classList.add(...b.split(" ")), f;
            }
            _typeCheckConfig(a) {
              super._typeCheckConfig(a), this._checkContent(a.content);
            }
            _checkContent(a) {
              for (const [f, b] of Object.entries(a))
                super._typeCheckConfig({ selector: f, entry: b }, Yn);
            }
            _setContent(a, f, b) {
              const M = te.findOne(b, a);
              M &&
                ((f = this._resolvePossibleFunction(f))
                  ? E(f)
                    ? this._putElementInTemplate(A(f), M)
                    : this._config.html
                    ? (M.innerHTML = this._maybeSanitize(f))
                    : (M.textContent = f)
                  : M.remove());
            }
            _maybeSanitize(a) {
              return this._config.sanitize
                ? (function (f, b, M) {
                    if (!f.length) return f;
                    if (M && typeof M == "function") return M(f);
                    const C = new window.DOMParser().parseFromString(
                        f,
                        "text/html"
                      ),
                      U = [].concat(...C.body.querySelectorAll("*"));
                    for (const X of U) {
                      const J = X.nodeName.toLowerCase();
                      if (!Object.keys(b).includes(J)) {
                        X.remove();
                        continue;
                      }
                      const oe = [].concat(...X.attributes),
                        ce = [].concat(b["*"] || [], b[J] || []);
                      for (const ie of oe)
                        lc(ie, ce) || X.removeAttribute(ie.nodeName);
                    }
                    return C.body.innerHTML;
                  })(a, this._config.allowList, this._config.sanitizeFn)
                : a;
            }
            _resolvePossibleFunction(a) {
              return W(a, [void 0, this]);
            }
            _putElementInTemplate(a, f) {
              if (this._config.html)
                return (f.innerHTML = ""), void f.append(a);
              f.textContent = a.textContent;
            }
          }
          const Xa = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Vn = "fade",
            Sl = "show",
            Zs = ".tooltip-inner",
            ji = ".modal",
            Li = "hide.bs.modal",
            ai = "hover",
            El = "focus",
            Vt = "click",
            ln = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: $() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: $() ? "right" : "left",
            },
            Bi = {
              allowList: Qs,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            Xn = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class Nt extends Ae {
            constructor(a, f) {
              if (fo === void 0)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)"
                );
              super(a, f),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return Bi;
            }
            static get DefaultType() {
              return Xn;
            }
            static get NAME() {
              return "tooltip";
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              this._isEnabled &&
                (this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
              clearTimeout(this._timeout),
                v.off(this._element.closest(ji), Li, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if (this._element.style.display === "none")
                throw new Error("Please use show on visible elements");
              if (!this._isWithContent() || !this._isEnabled) return;
              const a = v.trigger(
                  this._element,
                  this.constructor.eventName("show")
                ),
                f = (
                  O(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (a.defaultPrevented || !f) return;
              this._disposePopper();
              const b = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                b.getAttribute("id")
              );
              const { container: M } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (M.append(b),
                  v.trigger(
                    this._element,
                    this.constructor.eventName("inserted")
                  )),
                (this._popper = this._createPopper(b)),
                b.classList.add(Sl),
                "ontouchstart" in document.documentElement)
              )
                for (const C of [].concat(...document.body.children))
                  v.on(C, "mouseover", j);
              this._queueCallback(
                () => {
                  v.trigger(this._element, this.constructor.eventName("shown")),
                    this._isHovered === !1 && this._leave(),
                    (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
              );
            }
            hide() {
              if (
                this._isShown() &&
                !v.trigger(this._element, this.constructor.eventName("hide"))
                  .defaultPrevented
              ) {
                if (
                  (this._getTipElement().classList.remove(Sl),
                  "ontouchstart" in document.documentElement)
                )
                  for (const a of [].concat(...document.body.children))
                    v.off(a, "mouseover", j);
                (this._activeTrigger[Vt] = !1),
                  (this._activeTrigger[El] = !1),
                  (this._activeTrigger[ai] = !1),
                  (this._isHovered = null),
                  this._queueCallback(
                    () => {
                      this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        v.trigger(
                          this._element,
                          this.constructor.eventName("hidden")
                        ));
                    },
                    this.tip,
                    this._isAnimated()
                  );
              }
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return !!this._getTitle();
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              );
            }
            _createTipElement(a) {
              const f = this._getTemplateFactory(a).toHtml();
              if (!f) return null;
              f.classList.remove(Vn, Sl),
                f.classList.add(`bs-${this.constructor.NAME}-auto`);
              const b = ((M) => {
                do M += Math.floor(1e6 * Math.random());
                while (document.getElementById(M));
                return M;
              })(this.constructor.NAME).toString();
              return (
                f.setAttribute("id", b),
                this._isAnimated() && f.classList.add(Vn),
                f
              );
            }
            setContent(a) {
              (this._newContent = a),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(a) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(a)
                  : (this._templateFactory = new Bo({
                      ...this._config,
                      content: a,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { [Zs]: this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(a) {
              return this.constructor.getOrCreateInstance(
                a.delegateTarget,
                this._getDelegateConfig()
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(Vn))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(Sl);
            }
            _createPopper(a) {
              const f = W(this._config.placement, [this, a, this._element]),
                b = ln[f.toUpperCase()];
              return Cs(this._element, a, this._getPopperConfig(b));
            }
            _getOffset() {
              const { offset: a } = this._config;
              return typeof a == "string"
                ? a.split(",").map((f) => Number.parseInt(f, 10))
                : typeof a == "function"
                ? (f) => a(f, this._element)
                : a;
            }
            _resolvePossibleFunction(a) {
              return W(a, [this._element, this._element]);
            }
            _getPopperConfig(a) {
              const f = {
                placement: a,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (b) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        b.state.placement
                      );
                    },
                  },
                ],
              };
              return { ...f, ...W(this._config.popperConfig, [void 0, f]) };
            }
            _setListeners() {
              const a = this._config.trigger.split(" ");
              for (const f of a)
                if (f === "click")
                  v.on(
                    this._element,
                    this.constructor.eventName("click"),
                    this._config.selector,
                    (b) => {
                      const M = this._initializeOnDelegatedTarget(b);
                      (M._activeTrigger[Vt] = !(
                        M._isShown() && M._activeTrigger[Vt]
                      )),
                        M.toggle();
                    }
                  );
                else if (f !== "manual") {
                  const b =
                      f === ai
                        ? this.constructor.eventName("mouseenter")
                        : this.constructor.eventName("focusin"),
                    M =
                      f === ai
                        ? this.constructor.eventName("mouseleave")
                        : this.constructor.eventName("focusout");
                  v.on(this._element, b, this._config.selector, (C) => {
                    const U = this._initializeOnDelegatedTarget(C);
                    (U._activeTrigger[C.type === "focusin" ? El : ai] = !0),
                      U._enter();
                  }),
                    v.on(this._element, M, this._config.selector, (C) => {
                      const U = this._initializeOnDelegatedTarget(C);
                      (U._activeTrigger[C.type === "focusout" ? El : ai] =
                        U._element.contains(C.relatedTarget)),
                        U._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                v.on(this._element.closest(ji), Li, this._hideModalHandler);
            }
            _fixTitle() {
              const a = this._element.getAttribute("title");
              a &&
                (this._element.getAttribute("aria-label") ||
                  this._element.textContent.trim() ||
                  this._element.setAttribute("aria-label", a),
                this._element.setAttribute("data-bs-original-title", a),
                this._element.removeAttribute("title"));
            }
            _enter() {
              this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                    this._isHovered && this.show();
                  }, this._config.delay.show));
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(a, f) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(a, f));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(a) {
              const f = me.getDataAttributes(this._element);
              for (const b of Object.keys(f)) Xa.has(b) && delete f[b];
              return (
                (a = { ...f, ...(typeof a == "object" && a ? a : {}) }),
                (a = this._mergeConfigObj(a)),
                (a = this._configAfterMerge(a)),
                this._typeCheckConfig(a),
                a
              );
            }
            _configAfterMerge(a) {
              return (
                (a.container =
                  a.container === !1 ? document.body : A(a.container)),
                typeof a.delay == "number" &&
                  (a.delay = { show: a.delay, hide: a.delay }),
                typeof a.title == "number" && (a.title = a.title.toString()),
                typeof a.content == "number" &&
                  (a.content = a.content.toString()),
                a
              );
            }
            _getDelegateConfig() {
              const a = {};
              for (const [f, b] of Object.entries(this._config))
                this.constructor.Default[f] !== b && (a[f] = b);
              return (a.selector = !1), (a.trigger = "manual"), a;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = Nt.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (f[a] === void 0)
                    throw new TypeError(`No method named "${a}"`);
                  f[a]();
                }
              });
            }
          }
          Y(Nt);
          const Ui = ".popover-header",
            Uo = ".popover-body",
            Ks = {
              ...Nt.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            Is = {
              ...Nt.DefaultType,
              content: "(null|string|element|function)",
            };
          class gt extends Nt {
            static get Default() {
              return Ks;
            }
            static get DefaultType() {
              return Is;
            }
            static get NAME() {
              return "popover";
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return { [Ui]: this._getTitle(), [Uo]: this._getContent() };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = gt.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (f[a] === void 0)
                    throw new TypeError(`No method named "${a}"`);
                  f[a]();
                }
              });
            }
          }
          Y(gt);
          const nt = ".bs.scrollspy",
            ke = `activate${nt}`,
            si = `click${nt}`,
            Dn = `load${nt}.data-api`,
            ri = "active",
            qn = "[href]",
            Ps = ".nav-link",
            Go = `${Ps}, .nav-item > ${Ps}, .list-group-item`,
            aa = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            sa = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class Tl extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  getComputedStyle(this._element).overflowY === "visible"
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return aa;
            }
            static get DefaultType() {
              return sa;
            }
            static get NAME() {
              return "scrollspy";
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const a of this._observableSections.values())
                this._observer.observe(a);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(a) {
              return (
                (a.target = A(a.target) || document.body),
                (a.rootMargin = a.offset
                  ? `${a.offset}px 0px -30%`
                  : a.rootMargin),
                typeof a.threshold == "string" &&
                  (a.threshold = a.threshold
                    .split(",")
                    .map((f) => Number.parseFloat(f))),
                a
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (v.off(this._config.target, si),
                v.on(this._config.target, si, qn, (a) => {
                  const f = this._observableSections.get(a.target.hash);
                  if (f) {
                    a.preventDefault();
                    const b = this._rootElement || window,
                      M = f.offsetTop - this._element.offsetTop;
                    if (b.scrollTo)
                      return void b.scrollTo({ top: M, behavior: "smooth" });
                    b.scrollTop = M;
                  }
                }));
            }
            _getNewObserver() {
              const a = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (f) => this._observerCallback(f),
                a
              );
            }
            _observerCallback(a) {
              const f = (U) => this._targetLinks.get(`#${U.target.id}`),
                b = (U) => {
                  (this._previousScrollData.visibleEntryTop =
                    U.target.offsetTop),
                    this._process(f(U));
                },
                M = (this._rootElement || document.documentElement).scrollTop,
                C = M >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = M;
              for (const U of a) {
                if (!U.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(f(U));
                  continue;
                }
                const X =
                  U.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (C && X) {
                  if ((b(U), !M)) return;
                } else C || X || b(U);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const a = te.find(qn, this._config.target);
              for (const f of a) {
                if (!f.hash || T(f)) continue;
                const b = te.findOne(decodeURI(f.hash), this._element);
                y(b) &&
                  (this._targetLinks.set(decodeURI(f.hash), f),
                  this._observableSections.set(f.hash, b));
              }
            }
            _process(a) {
              this._activeTarget !== a &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = a),
                a.classList.add(ri),
                this._activateParents(a),
                v.trigger(this._element, ke, { relatedTarget: a }));
            }
            _activateParents(a) {
              if (a.classList.contains("dropdown-item"))
                te.findOne(
                  ".dropdown-toggle",
                  a.closest(".dropdown")
                ).classList.add(ri);
              else
                for (const f of te.parents(a, ".nav, .list-group"))
                  for (const b of te.prev(f, Go)) b.classList.add(ri);
            }
            _clearActiveClass(a) {
              a.classList.remove(ri);
              const f = te.find(`${qn}.${ri}`, a);
              for (const b of f) b.classList.remove(ri);
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = Tl.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (
                    f[a] === void 0 ||
                    a.startsWith("_") ||
                    a === "constructor"
                  )
                    throw new TypeError(`No method named "${a}"`);
                  f[a]();
                }
              });
            }
          }
          v.on(window, Dn, () => {
            for (const m of te.find('[data-bs-spy="scroll"]'))
              Tl.getOrCreateInstance(m);
          }),
            Y(Tl);
          const mn = ".bs.tab",
            Js = `hide${mn}`,
            Gi = `hidden${mn}`,
            Qn = `show${mn}`,
            oi = `shown${mn}`,
            kn = `click${mn}`,
            Ws = `keydown${mn}`,
            Fs = `load${mn}`,
            ra = "ArrowLeft",
            oa = "ArrowRight",
            Hi = "ArrowUp",
            yt = "ArrowDown",
            wl = "Home",
            $s = "End",
            Yi = "active",
            Ho = "fade",
            er = "show",
            ut = ".dropdown-toggle",
            ua = `:not(${ut})`,
            _l =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Vi = `.nav-link${ua}, .list-group-item${ua}, [role="tab"]${ua}, ${_l}`,
            tr = `.${Yi}[data-bs-toggle="tab"], .${Yi}[data-bs-toggle="pill"], .${Yi}[data-bs-toggle="list"]`;
          class an extends Ae {
            constructor(a) {
              super(a),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  v.on(this._element, Ws, (f) => this._keydown(f)));
            }
            static get NAME() {
              return "tab";
            }
            show() {
              const a = this._element;
              if (this._elemIsActive(a)) return;
              const f = this._getActiveElem(),
                b = f ? v.trigger(f, Js, { relatedTarget: a }) : null;
              v.trigger(a, Qn, { relatedTarget: f }).defaultPrevented ||
                (b && b.defaultPrevented) ||
                (this._deactivate(f, a), this._activate(a, f));
            }
            _activate(a, f) {
              a &&
                (a.classList.add(Yi),
                this._activate(te.getElementFromSelector(a)),
                this._queueCallback(
                  () => {
                    a.getAttribute("role") === "tab"
                      ? (a.removeAttribute("tabindex"),
                        a.setAttribute("aria-selected", !0),
                        this._toggleDropDown(a, !0),
                        v.trigger(a, oi, { relatedTarget: f }))
                      : a.classList.add(er);
                  },
                  a,
                  a.classList.contains(Ho)
                ));
            }
            _deactivate(a, f) {
              a &&
                (a.classList.remove(Yi),
                a.blur(),
                this._deactivate(te.getElementFromSelector(a)),
                this._queueCallback(
                  () => {
                    a.getAttribute("role") === "tab"
                      ? (a.setAttribute("aria-selected", !1),
                        a.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(a, !1),
                        v.trigger(a, Gi, { relatedTarget: f }))
                      : a.classList.remove(er);
                  },
                  a,
                  a.classList.contains(Ho)
                ));
            }
            _keydown(a) {
              if (![ra, oa, Hi, yt, wl, $s].includes(a.key)) return;
              a.stopPropagation(), a.preventDefault();
              const f = this._getChildren().filter((M) => !T(M));
              let b;
              if ([wl, $s].includes(a.key))
                b = f[a.key === wl ? 0 : f.length - 1];
              else {
                const M = [oa, yt].includes(a.key);
                b = ue(f, a.target, M, !0);
              }
              b &&
                (b.focus({ preventScroll: !0 }),
                an.getOrCreateInstance(b).show());
            }
            _getChildren() {
              return te.find(Vi, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((a) => this._elemIsActive(a)) || null
              );
            }
            _setInitialAttributes(a, f) {
              this._setAttributeIfNotExists(a, "role", "tablist");
              for (const b of f) this._setInitialAttributesOnChild(b);
            }
            _setInitialAttributesOnChild(a) {
              a = this._getInnerElement(a);
              const f = this._elemIsActive(a),
                b = this._getOuterElement(a);
              a.setAttribute("aria-selected", f),
                b !== a &&
                  this._setAttributeIfNotExists(b, "role", "presentation"),
                f || a.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(a, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(a);
            }
            _setInitialAttributesOnTargetPanel(a) {
              const f = te.getElementFromSelector(a);
              f &&
                (this._setAttributeIfNotExists(f, "role", "tabpanel"),
                a.id &&
                  this._setAttributeIfNotExists(
                    f,
                    "aria-labelledby",
                    `${a.id}`
                  ));
            }
            _toggleDropDown(a, f) {
              const b = this._getOuterElement(a);
              if (!b.classList.contains("dropdown")) return;
              const M = (C, U) => {
                const X = te.findOne(C, b);
                X && X.classList.toggle(U, f);
              };
              M(ut, Yi),
                M(".dropdown-menu", er),
                b.setAttribute("aria-expanded", f);
            }
            _setAttributeIfNotExists(a, f, b) {
              a.hasAttribute(f) || a.setAttribute(f, b);
            }
            _elemIsActive(a) {
              return a.classList.contains(Yi);
            }
            _getInnerElement(a) {
              return a.matches(Vi) ? a : te.findOne(Vi, a);
            }
            _getOuterElement(a) {
              return a.closest(".nav-item, .list-group-item") || a;
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = an.getOrCreateInstance(this);
                if (typeof a == "string") {
                  if (
                    f[a] === void 0 ||
                    a.startsWith("_") ||
                    a === "constructor"
                  )
                    throw new TypeError(`No method named "${a}"`);
                  f[a]();
                }
              });
            }
          }
          v.on(document, kn, _l, function (m) {
            ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
              T(this) || an.getOrCreateInstance(this).show();
          }),
            v.on(window, Fs, () => {
              for (const m of te.find(tr)) an.getOrCreateInstance(m);
            }),
            Y(an);
          const $t = ".bs.toast",
            ac = `mouseover${$t}`,
            Yo = `mouseout${$t}`,
            sc = `focusin${$t}`,
            Vo = `focusout${$t}`,
            Xi = `hide${$t}`,
            nr = `hidden${$t}`,
            qa = `show${$t}`,
            Xo = `shown${$t}`,
            xl = "hide",
            ca = "show",
            qi = "showing",
            ir = { animation: "boolean", autohide: "boolean", delay: "number" },
            qo = { animation: !0, autohide: !0, delay: 5e3 };
          class ui extends Ae {
            constructor(a, f) {
              super(a, f),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return qo;
            }
            static get DefaultType() {
              return ir;
            }
            static get NAME() {
              return "toast";
            }
            show() {
              v.trigger(this._element, qa).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(xl),
                G(this._element),
                this._element.classList.add(ca, qi),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(qi),
                      v.trigger(this._element, Xo),
                      this._maybeScheduleHide();
                  },
                  this._element,
                  this._config.animation
                ));
            }
            hide() {
              this.isShown() &&
                (v.trigger(this._element, Xi).defaultPrevented ||
                  (this._element.classList.add(qi),
                  this._queueCallback(
                    () => {
                      this._element.classList.add(xl),
                        this._element.classList.remove(qi, ca),
                        v.trigger(this._element, nr);
                    },
                    this._element,
                    this._config.animation
                  )));
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(ca),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(ca);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(a, f) {
              switch (a.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = f;
                  break;
                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = f;
              }
              if (f) return void this._clearTimeout();
              const b = a.relatedTarget;
              this._element === b ||
                this._element.contains(b) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              v.on(this._element, ac, (a) => this._onInteraction(a, !0)),
                v.on(this._element, Yo, (a) => this._onInteraction(a, !1)),
                v.on(this._element, sc, (a) => this._onInteraction(a, !0)),
                v.on(this._element, Vo, (a) => this._onInteraction(a, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(a) {
              return this.each(function () {
                const f = ui.getOrCreateInstance(this, a);
                if (typeof a == "string") {
                  if (f[a] === void 0)
                    throw new TypeError(`No method named "${a}"`);
                  f[a](this);
                }
              });
            }
          }
          return (
            fn(ui),
            Y(ui),
            {
              Alert: vi,
              Button: Ql,
              Carousel: al,
              Collapse: dn,
              Dropdown: nn,
              Modal: li,
              Offcanvas: Yt,
              Popover: gt,
              ScrollSpy: Tl,
              Tab: an,
              Toast: ui,
              Tooltip: Nt,
            }
          );
        });
      })(ju)),
    ju.exports
  );
}
pg();
const Ap =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAgCAYAAADt7L8RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8wSURBVHgB7ZwLcFXFGcc3IYTAKIkZ8VFQQ6117CAaeakV5KEGwyMhoIJPGBylVQs+qlJfV8FU0FZw1KoooNa2RhJCIEgBCUEtYiGpUi0FhYBQcIIQXk3CI/H3hT03e0/OvTk3uZBAzn/mZPfs+Xb322/32/32272JUg3A3LlzE1q3bv1QVVVVR6fvMTEx41JTUyvNtEWLFiVWVlbeHxUV1UmFgaFDh45RHjy0IMSoMJGVlRUbHR1dfOTIkSSn7yjdf+wKmZub2xuFzCOaUF1drcLAJuXBQwtDtAoTcXFx6QRJwb6zeq4w330+XzSK+g7RBBUmUOAFyoOHFoawlRIMD/WxVatWeeZ7cnLybSqEEocCZvDflQcPLQxhKyWr15XBvrEibhwyZMhCW/K9qmEoGTx4cL7y4KGFIaw95cKFC9sfPnx4qdM3zNZtPC+YaTk5OVcTdFcNw3jlwUMLRJQ6hsjLy5vPyjpYhYc9KPfDw4YNe0N58NACccyUct68eRkE2TWVREVVomg7QtFDc4Qgj/BNjkG+Ui6BZ3cEeWapBiAtLe1U8t9O/lcMPsZSf5ZqhpCjKDzfi4leZKUx6f0Az9fQlm9C5Etir18IbaKVRp4SPOi9mfzKlLu6B1D3TeTrRTlnkdSO8BrCFNJ+a5TbbOV3oiDsIxE30Ao5C0UsJJzSpk2bTzkm2auOAagjhgF3imo4Ynn8+RlosaqZQhQI2YrjTOR6pqShBMJ7zqxZs3qOGTOmwp5HvN/gHdp1rpG87+DBgxkjRoyoVyH1RCBKdq28m0dapLdG/ieM/E4UhKWU+tJABvvKs+gQ/ypLx7SiM6TzT+d1KM85PJMYRE8qDxEFK+J/UcyxRM3joosTExNnEN5mp8f77SPobUt+GIXcoFyACe+P9O211jvxzWLVVB9FlfIQcbhWSvaHd9MJL2DynEKnBMyY8i6PgTkMniZRSPhYAI9r1EkMZJuP2f0MbTVlfCt9VITp+KKVgPLeQPCEmZc8mdC85qIaNX/+/AuYcP03qujz8enp6S+ZNKzQRQkJCX4HX1lZWYXy0Ci4UkrZk9Ah0hmuTBM68lHVRIDPfFZoV4POLcSLzJmpXJoYSPlxDGw5ShLTbw0TQB715Vq0BQUFcfv27ZsBTY1sxSuNEj1klpednd0pNjb2eTMNumrobjbTUKpTKef1KD3jUde3KMXjEid8CsXsyqd0Vdv2qfD6WUZGxkrpM5KmmuXxfWVxcfETqh6Q91La+wg8JZnpWELDUNQrrPfKysrHaEd3eBhmpaGgrxMsh7fJrLLn6+Qyjsp+pcu+nvQH4eV8LcdS4u9T1rs33nhjHb+DePwrKipugp8B0PWSPLJCE5bC3zLiryH/Eose/toRvKVq5fo2cl0kVh713gO97IvjdRlfi2nO0dvbTnLIysqKb9u27WjKuJ7XC626iX8n40z4Nuu2AxmkUP4t0PU2+N5BecuxNmdgrWx0yud2pZSOd6WQVLwGRr9VJwH0fupVoqNMy0DHZY/Wle9jUJ5VCHqkdFC/fv0qWLG68t7VKGey6VBhcAwUent9dOJMlG2pUc+VZt10aIBHmvdxBF14fqaTYuDnrwzMX1K+nPEmGeRbUOpR7DHdmJwJTvzBR19TDijkK9JO+PDTUn++DoWHvjq5RP4gl5fIf59VhiHHbvgdfk37+9D+76yykGsyg/d95HWBLY+ESdTbg+dByvWx+j+rs7Wz8V4oExT8FEgeexnIJJV6uqK4D5ptZXIbSL1vmve7jbZL3aJomQsWLPCh1JPMvHPmzPkp27zZRHsH4ftyvj9KP/mYrJ5WNrhSSpi71e2dVRo/04ozy7Wh0Z1pmGtHDJ2wbfjw4dtVMwBtySHo54K0F7TL6KBudNBumQkRvF8pmeX7EuQa5d7nJE/SZMXxKyVl9LeRzDFfGEjfMyCvI1+R0tcYyXMe9f9bBV5rrILmeuS6WTURUIzRopAhSGSwyorVX9MnEeTaHFROiIFmMor1MfJY4UTA+J1jKWQQPED+QvLX3EaTyYDgfZ72KjSiGd/PwOs+Jt1pkpCfn38eY/gj5eIWG/3kYyKqYCKaYqbXq5SyWtCgy5QLyNIMkzU3ehgsEw4dOpRJtK0KAwxgMXMaY36Ope6U+ogQyBKE8Wqw7zKIVKBC7kEO76FQRTr/JcTTjEHTmbY/RiimqsjgN0Zd1ymtlHTCL8jjV1jiC5FbqsQp72bM3/GstoflnfSehvLujouL+4edT1aITQyiu4iaxxD2e8Y+2vq1cgn6bR1m2wS9MqYbn96Cx7XWS3l5+RZWS1dlohgyEYnSrCIso21nE5cz7CSDrC8mYwfM2FLqkRXEr5DQF5Hvb8iylLLEoSiyv8rI+zueOkpJvougS9Z9t147qC4hPeC6KN9Ehnk6TzY07Y0yvuK9gHCbPlZK4/m5kXcS42W2WEMo5GNGm/ZCPwVP9wxpk/yYgxUyFfoXLRrKnEje101Lys1K2Ve5PM9EYI+ICadnxRdVw7BaNQ7dqdvNLaLvQ31EcAE3ihiol9n3ACi/ODi+ULVKcKeYqgzoT9gHiWLVyBfBDzKy3WnEN4kJRJiq3xMOHDgg3uscPRlebdCuTklJOaAcwAz/AYq5TOlVxgTlF6O4k1QY0Hu76fAQhRz8Skl8AeZWrknLJOOmSBnIy+Ez4Gd4DNJnMVv/SdT6OV8UE8/FhMtkojLM9h1FRUU9TNObvK9AuxmaDjop2alivo+VbQCT0ioz3TxHFzB2a/LTp/2h72ylU/dKFop+tl8+PUz+vxCO0u+noGz9kZf0wS1G3mm0OdN6R64HCXKpYzd1LNfJ8Tx38Ey36Nzcfb20nu9VegbsT8Pl1yAyKzbU87qVRjRWKRsNcS4oo91y3uq0KWewbxFHgpEUz8DtLMpDhxRaibKaskc5Q+LWqqjjhR07dvyccKdRV40SUM7lKnAyzFFBgNks1kV/p2+ySjAIxqqmRXusiOn2RFF+2hug1bxH618WTUYGE+Qh+QH7Xpi85QTmJZMzUNRW9jpo/wa7Qgrou7kqcGJup+m7mXTwPdX+U0QB/IlS/mA98N2ecd/FKkeX1RPl/ZP9UbXKbJV1lvle70rJyucj8CmXYLboZs404QDmlqpGgjI+IfjGBeknwT7gCUxkMPjfiZeq4Ag4gIdWPI7F4hmElwFWOrPtFSjmeqIXGuTLunfvfoiO+kwdNeWkI4fob8m2cpcrB8jei4HznANPfhOWMv+A86EgmLfvOMHxogLtqmOxaAWcznFLHOevPZHjBcgoU/bLtOVsMX0JO/EE+Co6dOgQtX///oCyoHX8TS7p1ZRZbk+n3840+z4Y3yi1nBOfbqbp22Vm0kCnvHZ/Au+tzfeI3+hhtrjXrVPIhmoaNEU1ErJ3YLVt1JEICnSIzjGT4tzmRUGsTpzPY3kExYElRwCnGaQ7qWeejstexrojnKDPB3sYtOswG9fZ62JF74BZXaAMhwR1bICHnvJDdFW7t4ln77eUo5g+OHu2qhMA4hElmM2T7ODBVGHgSDjEyG2f+c54jneik2MjaP0WCP0lprB9RZV98U5VPz43XyKqlNpjNlI1DJOdBl5TAD62MSjEA3y2TrpK9nhO90TF2WO+s7cQz6ecI66lDP+KBV0XmYGtAUUnfmhdPST+gT56sfag4m4/zRiEhU58ouhiCiUZSdtQyOuETxQ7Xf/gvL0uozO8yRmif38rbSKYYON/U7Bzu+MFOWuEd5mwknSSrGgig7XaSbSZdm5FYcTjWd/2KlwEOMSoT1a7eXYi+ktuT/l/lggvy+XSim2l3MkC8bI9L+OiD3T+oxBkLhOBXzEjqpQwNlEO11V42E8HTGtuV/JkxUVw1qG/nFcuQphTWZn+RTurZO9IulzENgfFkkGDBu0wysiljNESJ0zk/SfWN8rwd7S+0yrnezUKjjzkWlwXo9y5dv4YuE9BZ//B+ZPWYTYTyxco3Xj4nGXwI2dykxgoTxjtesosgPbJ4G9SpdTe6STjfS6T3C0mDe0Qz3ikFVK2LotxPpnm/zj25HHI5U342E4/noESDSEeMJnhYS1me1AC7Uq+1VywgPYBtiyLMzIy1lt01kQonm1V274ZZlkRU0oGyXgGyV1UUMKAe5VZQ/6Pzy7icaTFVh+9GxtgrMO0bJA3uf2lwvEEpmUmvN0A3+fppF482XRIsCx76bhxtjRZqUbruLmi/o89SbZJSD0vI480HRdvnDXlliPDj01aBuQgOeOy5X+egTvTTEOus9nnyI2be4zkxxkoqxkodWb/5gLastt8l705g9lHKJOh3LO+ingfwj/z+VYVQeBA2oN8fUSnGfyMZjyMNt6Vjd/Z1n6dfnkS3pbo9M70ndxV3kpaud47yj7U3AuXcLS0zCzPlVKKOcFglNkimgJq8sBkFRXGoHhdCUfCzB1U+hx7l98fq1+EHE/IJQCEKccTphkVDHt4brc7UpBRLvKZaSemgxbb01i9PmKWtWZovw2ETD9m1fu/9a63CC/bytvIYPUpBzCDj+foQI6Jellp9Nfb9OnlmL/N8p6qXLpHFl9W157nnmmt6Ib5/wxBK5u5GKn6pzOZiUPpERfkS+DpfutFbmTRR0/bLJBOQfbBO6hjsP16YcgjEQRzH89GBHCAZV1WtVKW9u3y0LHiNdtG+KE6es7yBgxNPBkU0gKd86V4TRHoRBn49u+kyXlTJhNWF+s2iAlRbL6vtKc7neGKNxC8a08XxbbiclQj18WUMUmQrwzFH2Aqrgk6nM9HRspZn5Ecr6/hhf3PzI4X4FkuB2Q7fBJH1V1y91cdQ1C+3N+Wa3xyEaTO1UR4+5RgFBZPit3SkxML+kkmQdGNgw7F70T+orgXO/12OOg0IxcAzP1IKMg5G0LsEepy7skAZs9zxCWPQA8jm10yOTmdYXmIHDiDPY2xdT6rupiuu5pijMkPA7ASz2WcnyqOJibh3XLF0U1esTJZ0CSvXIg/QN69+B1CXneMCsGIeEIvVO7wBkzerTx48NBoOJqvmKxy19WtQoqJ9Z7y4MFDROColJgLfZR7lLAcr1AePHiICByVEts3TbkEChzWZWcPHjyERh2llF/OE/RwkXe/eB4575qpPHjwEDHUOacsLS2twqt4s9x6l4Na/W8tav4xlhzeEspPksSlu6I5Hvp78ODBgwcPEcWPOm/FtS3jnywAAAAASUVORK5CYII=",
  Sp = "/assets/partner2-DDbnLKnO.png",
  Ep = "/assets/partner3-If0MEIwX.png",
  Tp = "/assets/partner4-CCzG5H6U.png",
  wp = "/assets/partner5-ZMXRDsvs.png",
  _p = "/assets/partner6-DZfJ8dcf.png",
  xp = "/assets/partner9-CeM9xFW3.png",
  Op = "/assets/partner10-Vz7bSw4n.png",
  Mp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAABsCAYAAAA8J+q7AAAACXBIWXMAAAsSAAALEgHS3X78AAAPIUlEQVR4nO2d3XHbOhOG33h8b3dgdWB/FVip4CgzuJdSQZQKQldwnAoiX5+dOXIFYSo4VgWRO7Aq8HeBpSNLAEXwB/x7nxldmCIBiJZeLha7iw+vr68QkQmAewBTABfoN88AUgArY0waq1MRSQDMAFzX3PQOwBpAYozZ1tx2LiJyCfu9mKH+78Uz7P8oqbldQqLx4Z9//pkAeEL/hdPFXYwfqIjcA/jScDc7ABNjzEvD/QB4E88U9T8QDnkwxiwa7oOQRjgDkGCY4gkA30Rk1WQHar03LZ6A/R8lEfrJWKB58QSAuYjcROiHkNo5AzBpexANM29YRCcNtn1ITKGZRexrGrEvQmrjrO0BRKJpESXVuGx7AISUYSwCClBECSE1MyYBBSiihJAaGZuAAhRRQkhNjFFAAYooIaQGxiqgAEWUEFKRMQsoQBElhFRg7AIKUEQJISWhgFooooSQYCigf6CIEkKCoIC+hyJKCCnMedsD6CBzEQErBI0TEVmgXH2DF9iqZtvYZQfrRESmqKc2QYqS98LzP9gaY1aB1+yzNsY8hY5F257CfU9WFFA3FNHxsgBwW6UBEXmGreG6KvujbZEpgG81tPMNAETkF2wt2zTg2gWO/we/AKwCr9lnhvLFeKZw35OUU3g/nM6TslzBljj8T0RStWDGyi2AnyKy1hqzbXGtVmqtUEDzoYiSqmQCct+ygLTNXwDSlu9BUneDFNDTUERJHXxB+wLSNtewvtG2uKrbCqWAFoMiOm52sD64vFcRrtFfET31+fdfu5x2rnX/sLaotW8uIhWHC0vj5ckYMz11km7vMgOwhPWDushEdBprf6s6KPL591FL7x7u7YKWInLf0ue/EpFF3op+CLRAw6AlSrwYY7bGmHtjzATAV/gtsWtYcRksKlBTz9sXsKvmbZHUNQuggIZDESUnMcbcw4bNbDynzIe+Oq8hXJ89b8fYc+sZwIPj+BXsLKEyZ7ABwCSMtkR020KfpCQaRD6FX0RXscbSFmqJuj5/pVjbgmzV5fbseG9ZhxV6DjuV+KtqQyNkLiJA3B/BoKd9Q8QY86L+wBTH/sArEZkZY9YhbeoPfwYrzjd4v/30M2xGVAqbfbMtM+6aWcOxRbaITCKNLwHw4+DYBawVmlRp+EwzBD4hf+WMuJkjjqg9A/jUw6wWgreprO97sghpS1ewt7CCMMexMF3BGkR/A/gtIqsOrPr7vreTGJ3nWMGVrdBz7WAN4FJEbtDvLWYnsE8U3wpoE2Rf4F+wP5K6XSIvFM5BcA9r8RxaoX+JyOWpFWn9ba7gsOROMAcw05XnIEt3YCwB/Dw4VtkKfRfGNIQfqoisYZ94MUX00RgTwylOeopO5VewAfWHTGGnuU5UPFO4Q4KKcAHgXxH5XFf4TiC+HPRtrAEYY1LNyz/0vS5FZFXWlTC4VXh9kieRu61lRY8MnpXnuLfIRQHxzIL87wA8wr1gkvGjpZV/p3HRgn82cRy78BwvxOAEVNnG7KwjjnrScXJmeNOcy1Zwi2fmF780xkyNMYkxZqYxqB/hz46KWtRDF9Bcboei2Vu1oes9rn7nmgQRzFAFlJCuUlg4RGQJt/g8ALjx+TSNMalmDrliIDO/X+Oo9exbPGvLH5sEHs+FAkpId0kcxzbGmEWRNEiNgXx0vFVLDGQe6ipI4Xc9rJrs30fdVihz4QnpIDr1dYnPIrCpJY7jvC9g/ZKrgPGkAX3eIH/B667lOgALAL8dxxME3l9aoIR0k6nj2GNopIz6511TeVf7edwGvPLEc4OWE0Jy7slc3Q6FoYASEpeiU2fXD7ms39AlupOSbVVhA6ArVagSz/EgcecUnpC4uBaFXILiOm9ZsiCwS7Rj5KLv8wvArCPiCWPMVkQeYBMN9rnVUoNpkXYooIREIicGs+i0PDQLqQtsANy3FMB/igTHApodnxZpgAJKSDwWnuNpxDGU5S7w/C2AtMsx0mqFfsdxdlhhK5QCSkgE9iooHRG45W9d+ErsOTHGJA2No20S2Afb4cJXggJWKAWUkDgkcK9Ou1aDfTygviy7utrpNVqj4B7H+77fFik1SAElpGHU9+kqIgL4YzE3OPZ5ph31JfYdX6Wse5yIfGAYEyENonGFvh/hr5zpu+v4ooYhkQM0MsAVvnRyG2RaoIQ0hFqea/gDy/Ny0lNUWNzYG8Ml3DGlT10JKeoIPis0QY67gxYoITUjIpfqV/sJv3je5WUVqe/NVZoutML8Ssex/xpzYWUneVYocmJmKaCE1ICITERkpkWTt/D7PAE7dU8KNOs65wp2X/lJgTGt4N7vbEXr8xj9n+TVUz2CU3hCTnMrIq81tbVBwS19jTEr9cEdWkDXAJ7Uyj2qpq7X+Erh7RC/4HifSHC8AZ0XCigh8XgEUKgU3R4zuLeouYANvfkmIjs95xKns5VC+x8V+tBKUHBLIE7hCWmeHYCvWjE+SLz0/Bnyp5YXsFbqKfH8PPKN5YqSFD2RAkpIs2TV40uXcNPFphuU3wZjB7v9x6rsGMaE3qdCvlBO4Qmpn0fYMKTaFmu0namIzGAtpCKFRXawq/AJp+3BLAH8e+okCigh71mieM3OQ7ZNF8/QKfhaA/RnsJbp4Xif9LUuIZwrtF/cxPU/OPU5ylzjxRizFpGPJ057+vD6WtfiYnfQAOafsfozxnyI1VcsdAuHWDUj7wZcrIIMmDcLNCdjoSovodsQEEJIHzgH3uLG7pG/l0lpRKRT1agJIaQOztUpXThwtCS3sOlj04b7IYRUQN1f08PjdLG4OUe8Ci+3InLD6TzpKjm+8491FD32ZDN1zf87xXFtTIDZS07OUH7FsQwx+yKEkEZhID0hhJSEAkoIISVhID0hZJ8tyqeMjg4KKCHkDc0DX7U8jN7AKTwhhJSEAkoIISWhgBJCSEnoAyWkx2hVpilsjPUEtgLRC+xiUJlqTLXiy2yCHV/aVPUqre0xg70n2b15gr03aV0JPRRQQjqKoyLWszFmou9NYbOD8ipm/RCRB9h6oNuCfU5xnI31yxgzLXK9tjHRsc1wor6G1slYhRR71i03DrOl/meMedrre+649G2DPRHZwN6XShX6OYUnpD9c6e6fK1iRK1JucA7gtxYMahwVt9/ab5HiRLewQl9op9EcbvQzPsEtnodcA/hXREK3iX4HBZSQfpGimEAc8qNJERWRS7WYXXn0RbiF3Wm0bEnNJWxRpNCKcnNUKCBNASWkXxTaLdLDD52iN0GK6gW4L2D3vC8jokW2OPFeq1tEB0MBJaTfbADcAfgE4CuA77B7IflY1T0AFR+fgO1gN9b7DOCjvu7g37QtE9GqhYd2sPfiK+y9uYO9Vz6+lHm4cBGJkH6yg93j/WgRRP2QKdyidiUii7p26FTR+eJ5+xHufehTAElOIfcLPb4oOaw7APcH/a61zyWAvz3XLRA4nacFSkj/2AGY+laQsx084be4ZjWOJfEcfzDG5O5CoSI+hdtinpdcVPpsjPHuQqrbS3/3XBvsW6aAEtI/FqfiGPdE1DVVntYxCPVVuvyev4wxiyJt6OfwnbsMHNJDEcvaGLOEdSscETqNp4AS0i82RWMXVURdiyMXNfgYAb8luwhpRD+PqwJUqKWc1HBu0AIWBZSQfhEa+O2zVOvYgXfqOLYpmV3kEvqrgGn8c0i/eq7LOg96sFBACRkwdezllINLhEtl9uRY1ZOCTWxLdFvmmndQQAkhZXEFracV2mvMX9sUZ/Cb+E2wiNTPNFI/AMIdz11H/WN1TPGGAu9FHLZtDyCUM1hnal7gbZ3Mm87JVTErm05WllXFPN7OoOK5QnhK3BDwhdxUXnAZ2kOWWM6NMS97FUyaeNIehjlkOblpA31NUC5PuCpXsHm8a/TwKXrAAtXSBcvQasm1DK3m43prhur7ovt+WzFngDGYVLjWFRK1rdBe45wDb+EOoTFXhXGUn7pF9bzZrnGBdsS77zxocHNX2OA4g+daRCYVa1cuPMf7LKCuezVFiXTRnBncNrStmERZRDLGJLDpVUMjy0N+QDw3yJB4KBpwHZHUczwp26CIzOBOqwwKvekgLvEvm+W0cB1sOIqgMjFX4btkZVRlB5sydqNpYwvYqYszu4E46aJ4An7raa5CGMSeT9lFpWK+HSB1HLvQfPPC6D1yXdP57ZWjCWjbWwvUSJaHvNo/aIx5UUGgiJ6mq+KZpRb6frirkFJrKgwp/AtyfTcq1nDPvJLARVVXQRGgB9srMw40jEw8vX4riuhJOiueeySe4xcA/lOffi666v4Ef5m37z2fvuemigJYF3nYaHV919rBc10Vo5qE5eyKc1I8M4wxC13N5aLSe/ognjDGpCLyHf4ybd80kmStr60xZquieQPrB8xbJH1G9VX9rnAPO/0+tCCvYet63uO4tFyRPZ0aW9SuEwpoMQqLZwZF9IheiOceCeyKss+CvIIV2C8A4Al/crEDkFvmrU9oGOQMxxvRAVZUv8E+cDb4E652g/w444eqm73FglP40wSLZwan82/0TTyL1NQsQ+nvUpfRlfLPJ067xp/wxTzx3KAn1idAAT1F5S88RbR/4pmxJ6J1/P82GKB4Zqi/8jOqhfM9wN6j3ljnFFA/tVkLIxbR3opnxl50xUeUC6vZAbjTkLdBimeGiugN7FYeITwD+GSMcW3/0WnoA3VT+1RrhD7R3ovnPjpNnerK8gL5/tFn2PCltOJKsuv7ty3Rjkv4fUL14jg/xPe/BTDTMKYl/PdpB3uP1iXu0bbKGE9csw1p4MPr62uJfsshIvE6K0+jfqqcsI0hMSjxzEOFYqJ/vgzdyiyLPniyoixPfbM0fVBA3xPFyT9wER2NeBJCH+gfoq2QDtgnSvEko4ICaokeXjJAEaV4ktFBAW0xNm9AIkrxJKNk7ALaemDzAESU4klGy5gFtHXxzOixiFI8yagZq4B2RjwzeiiiFE8yesYooJ0Tz4weiSjFkxCMT0A7K54ZPRBRiichypgEtPPimdFhEaV4ErLHWAS0N+KZ0UERpXgScsAYBLR34pnRIRGleBLiILaAxhaD3opnRgdElOJJiIfYArqELfUVg2f0XDwzVMC+t9D1d4onIX6iVmMC3rZ6XcDWCbzMPbkcT/paD6VkVoaWTlvAFq1t4t4Bth5kdv96//AhpEn+D+zmxkUwoSdgAAAAAElFTkSuQmCC",
  Cp = "/assets/partner12-DNsgbte6.png",
  Dp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAA9CAYAAAAuyyfhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGNGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDIgNzkuYTZhNjM5NiwgMjAyNC8wMy8xMi0wNzo0ODoyMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjExIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDktMDNUMTY6MDI6NDErMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTAzVDE2OjA2OjEyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI1LTA5LTAzVDE2OjA2OjEyKzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMGVlNjAyYS1jNDI5LTAwNDQtOWE0Zi02OTQwMGQwNTIwNzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyYWQ2NzNlMy00ZmIyLThlNDMtYjc2Ni1jYTg5ZjZhYWNiYzQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YmRjYzBjNy04NDE3LTViNDQtODYxYy0zNWMwYjMxMWVlNDEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhiZGNjMGM3LTg0MTctNWI0NC04NjFjLTM1YzBiMzExZWU0MSIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0wM1QxNjowMjo0MSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjExIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMGVlNjAyYS1jNDI5LTAwNDQtOWE0Zi02OTQwMGQwNTIwNzUiIHN0RXZ0OndoZW49IjIwMjUtMDktMDNUMTY6MDY6MTIrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4xMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7NZdQAAABz1JREFUeJzt3dGR2zYQgGHoJu9JB/Z1cKkg5w7sGbzbHUSpxEoH9vvO2B3kroKkA186yFWgPFh3lmWJXBALYAH+30we4qOIJQgsSIgCN/v9PlgSEe0O38QYP5sWPuFSXDHGTa0YUiTUY5ZSx9+yvlufaxG5CSH8rdm2ZEy12lCKlONtEX/L9nlG1Rz5ZCq+lvlyrt5OY9tYDW5LG2LpytLE5WmAa5mQrOpBcQzXMcYHi7IWlO1yQLGMyeOgdmrqeFvHX/uCb46zATeEUDdnLo3tqkXhVp8dTeu6EJF9bgzKz3/JKSOz7GLoB/k81EOJGDy3jSX7t8gV2nKWfsZkcMvVukG3Lt8b6iMddYaS1ti+ci8Isge3NVb6GnBe66POx+T5vFaaqVmy39e5+3Bx5wafPHdKjEdEtq1jgBufcnfgZnAjkfrEeZlHHaEGr+3Ma1xZg5vXgwJ6RZ8aC+ezHTd3bvCLDtoXTz9tOYf4MMUq3/xksRMrIrKnYc3LrSMGKzte63JpG0k5npZ9da15wmuOFJGHGOPL1nEcW3zn5rVTY16MceOxg+Ar+tYYVnYeX7QO4BTTkgAAFw5L15moMrh5X09urbh7y9PLFB78I0c+U63JqrFocKNTA+lIYOuxxhzprc0yLQkAGE61wY2rVoxkjVfmKGvtOdL6mJIHNzo1sNzaE9garDlHemqzTEsCAIZTdXDjqhUjWPOVOcoiR9pJGtzo1EA+Eti4Rs2RpWPV1ltKHExLAgBmaQcWLxdk1Qe3xKvW/wqGAiQTkTvttj1dmcMPcuRF9ykbqwe3RrfbPxvtBx0Skf3Tf61jOfKbxU6YmqyjZhsiRy6TMCV5m7JfV28FAEI439iP/407IsyhDZURY9xoBiMPby9o8p1b4lXrrmAocEREdtqOUyOeM+XutNu27thrJSIvPbchLXJkPtXg1vgJoN+N9we/1Oe6UYc2bYtMTRbxRbuhZZ2SI8taUmc8LQkXFiSa4Ts00nABUM21ZiMR+aDYptg5aza4JV61vi4YymqRDPRS2iBTkrDgNUfGGB+Um74tGcec2cHNyY8SPxXaL6BVpA0yNdmWRZ2SI8taWmc8LblCJEkArZXOQ60Ht+ug/AJYRG5ijP+UDadPDFZliciNdlumJPvSwflymSN7+EnA5LRk6dvthLnbEAxfP440HSSA0oq2PaYm+0WOLCsn9/C0ZOdGSXYMoMhFG8IxD4Pbm9YB4DKvCcNpXK9aBwA9p23oHJc5Mmch5RoX5RcHt1pPAMUYP2u3HeUupRe1O7+2vJpxJfaDu6XlMDVpo2YbIkf65uHODQ61uqqNMW4myn7s6Gobjcy0oZ7u2FYt9zwVeVpSRLYhhPcX/nx95kvSj6HxD/56pX1qKXWflvvrNYZEH0//Yeq8dHh83fFcx6PkyCX5R0RuC4XznbN3bjm324fPXjppIYTw5XT/McZ32vK47S5n7op3bRL7wbuUzx5ew7I92UfK1OSddlvYI0emOYnprxplmt65ichLy/1BZ+ndGwNZGQnn4n0IYbewGJP3yqEucqSORW6ynpZMWpH75AAewwAv3muFgapPHt57haqGy5Elvhqx8MO0ZMp0h2WnjDH+ot3WY0ViLK3WC0ycmtxalQs9cuQytd6I/uTcd25MdwALVU4qU9/boBxyZEFWFwT8FAAAkOuP1gGc+m5wS3y78a+2ofBDVviQMyVpdNWpehlkCPUeq8ZX5MjzYoy7WmVpnd65qd9uzAr9QBmJi+VWeawaz8iRnTCdlky5quAJMYB+sDbkyGmWx/w8uCW+pvxPqwBOeb3txjpYPCVptL6hy8Vy14wcOc3bYHx856Z+TXmMcTvxt9l13bxVAmBtro0r/v5ZWxYXedWQIztS7E3cnBysHX0AU2gf37Ouj6sQvr6ePOEzj5YBnOP1thtja/XD7Qk/LMaMNsiROp4G7KdpSfXryVN+JQ9gud4Xyx0MObIz/IgbANBUiTu+Yt+55UpZjNNi8dlaV76ebtvxjcMpyScuF8ttrUJ/vY8x3hYuI0vtHKnlZSHlK8edekgeTjr60ftiuR17Xj+SHNknpiUBAMNxPbhxFYQaROSDdlvaZFF3rQPojeP2+Eq7YaljUA9ujisxhJD8qC5w7G3rAKZ473tWel+L0ft5qpkjY4x3tcq6xPWdW6Lb1gEAA+C3deO6bR1ATe4Ht4R1+nYX/lRsjTf4svTK2WgtyNLuaxSi/W2d97uUNcnJkSXPo2bfC8tXTXleFQygmpl12rYVQ5k1U5ezJ63nc5GyTUH/Xvh39TvUWtA8lu69bWh4PIYO2vSszPhK3c0vWhxcM+UZY9xs9vtvT7mee+TVy0k7fOl/+t1I8m9RDit7b02CSpAS56VHj72cC62W7Wlp2SJyF44eAz949LLqRM06vdAO36Qs6mwQwy6EcFOrvLl+OnKOLHlsIvIQQnhx+N+PKavvzOz3Ysz/A5c3K7UDV0sEAAAAAElFTkSuQmCC",
  Np = "/assets/partner14-WhYx_zFq.png";
function rp(r) {
  return (
    r !== null &&
    typeof r == "object" &&
    "constructor" in r &&
    r.constructor === Object
  );
}
function jf(r, s) {
  r === void 0 && (r = {}), s === void 0 && (s = {});
  const c = ["__proto__", "constructor", "prototype"];
  Object.keys(s)
    .filter((o) => c.indexOf(o) < 0)
    .forEach((o) => {
      typeof r[o] > "u"
        ? (r[o] = s[o])
        : rp(s[o]) &&
          rp(r[o]) &&
          Object.keys(s[o]).length > 0 &&
          jf(r[o], s[o]);
    });
}
const zp = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function gi() {
  const r = typeof document < "u" ? document : {};
  return jf(r, zp), r;
}
const mg = {
  document: zp,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  },
};
function en() {
  const r = typeof window < "u" ? window : {};
  return jf(r, mg), r;
}
function gg(r) {
  return (
    r === void 0 && (r = ""),
    r
      .trim()
      .split(" ")
      .filter((s) => !!s.trim())
  );
}
function vg(r) {
  const s = r;
  Object.keys(s).forEach((c) => {
    try {
      s[c] = null;
    } catch {}
    try {
      delete s[c];
    } catch {}
  });
}
function Rp(r, s) {
  return s === void 0 && (s = 0), setTimeout(r, s);
}
function Bu() {
  return Date.now();
}
function yg(r) {
  const s = en();
  let c;
  return (
    s.getComputedStyle && (c = s.getComputedStyle(r, null)),
    !c && r.currentStyle && (c = r.currentStyle),
    c || (c = r.style),
    c
  );
}
function bg(r, s) {
  s === void 0 && (s = "x");
  const c = en();
  let o, d, h;
  const S = yg(r);
  return (
    c.WebKitCSSMatrix
      ? ((d = S.transform || S.webkitTransform),
        d.split(",").length > 6 &&
          (d = d
            .split(", ")
            .map((E) => E.replace(",", "."))
            .join(", ")),
        (h = new c.WebKitCSSMatrix(d === "none" ? "" : d)))
      : ((h =
          S.MozTransform ||
          S.OTransform ||
          S.MsTransform ||
          S.msTransform ||
          S.transform ||
          S.getPropertyValue("transform").replace(
            "translate(",
            "matrix(1, 0, 0, 1,"
          )),
        (o = h.toString().split(","))),
    s === "x" &&
      (c.WebKitCSSMatrix
        ? (d = h.m41)
        : o.length === 16
        ? (d = parseFloat(o[12]))
        : (d = parseFloat(o[4]))),
    s === "y" &&
      (c.WebKitCSSMatrix
        ? (d = h.m42)
        : o.length === 16
        ? (d = parseFloat(o[13]))
        : (d = parseFloat(o[5]))),
    d || 0
  );
}
function Nu(r) {
  return (
    typeof r == "object" &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === "Object"
  );
}
function Ag(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? r instanceof HTMLElement
    : r && (r.nodeType === 1 || r.nodeType === 11);
}
function En() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    s = ["__proto__", "constructor", "prototype"];
  for (let c = 1; c < arguments.length; c += 1) {
    const o = c < 0 || arguments.length <= c ? void 0 : arguments[c];
    if (o != null && !Ag(o)) {
      const d = Object.keys(Object(o)).filter((h) => s.indexOf(h) < 0);
      for (let h = 0, S = d.length; h < S; h += 1) {
        const E = d[h],
          A = Object.getOwnPropertyDescriptor(o, E);
        A !== void 0 &&
          A.enumerable &&
          (Nu(r[E]) && Nu(o[E])
            ? o[E].__swiper__
              ? (r[E] = o[E])
              : En(r[E], o[E])
            : !Nu(r[E]) && Nu(o[E])
            ? ((r[E] = {}), o[E].__swiper__ ? (r[E] = o[E]) : En(r[E], o[E]))
            : (r[E] = o[E]));
      }
    }
  }
  return r;
}
function zu(r, s, c) {
  r.style.setProperty(s, c);
}
function jp(r) {
  let { swiper: s, targetPosition: c, side: o } = r;
  const d = en(),
    h = -s.translate;
  let S = null,
    E;
  const A = s.params.speed;
  (s.wrapperEl.style.scrollSnapType = "none"),
    d.cancelAnimationFrame(s.cssModeFrameID);
  const y = c > h ? "next" : "prev",
    T = (j, G) => (y === "next" && j >= G) || (y === "prev" && j <= G),
    O = () => {
      (E = new Date().getTime()), S === null && (S = E);
      const j = Math.max(Math.min((E - S) / A, 1), 0),
        G = 0.5 - Math.cos(j * Math.PI) / 2;
      let H = h + G * (c - h);
      if ((T(H, c) && (H = c), s.wrapperEl.scrollTo({ [o]: H }), T(H, c))) {
        (s.wrapperEl.style.overflow = "hidden"),
          (s.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (s.wrapperEl.style.overflow = ""), s.wrapperEl.scrollTo({ [o]: H });
          }),
          d.cancelAnimationFrame(s.cssModeFrameID);
        return;
      }
      s.cssModeFrameID = d.requestAnimationFrame(O);
    };
  O();
}
function $i(r, s) {
  s === void 0 && (s = "");
  const c = en(),
    o = [...r.children];
  return (
    c.HTMLSlotElement &&
      r instanceof HTMLSlotElement &&
      o.push(...r.assignedElements()),
    s ? o.filter((d) => d.matches(s)) : o
  );
}
function Sg(r, s) {
  const c = [s];
  for (; c.length > 0; ) {
    const o = c.shift();
    if (r === o) return !0;
    c.push(
      ...o.children,
      ...(o.shadowRoot ? o.shadowRoot.children : []),
      ...(o.assignedElements ? o.assignedElements() : [])
    );
  }
}
function Eg(r, s) {
  const c = en();
  let o = s.contains(r);
  return (
    !o &&
      c.HTMLSlotElement &&
      s instanceof HTMLSlotElement &&
      ((o = [...s.assignedElements()].includes(r)), o || (o = Sg(r, s))),
    o
  );
}
function Uu(r) {
  try {
    console.warn(r);
    return;
  } catch {}
}
function Df(r, s) {
  s === void 0 && (s = []);
  const c = document.createElement(r);
  return c.classList.add(...(Array.isArray(s) ? s : gg(s))), c;
}
function Tg(r, s) {
  const c = [];
  for (; r.previousElementSibling; ) {
    const o = r.previousElementSibling;
    s ? o.matches(s) && c.push(o) : c.push(o), (r = o);
  }
  return c;
}
function wg(r, s) {
  const c = [];
  for (; r.nextElementSibling; ) {
    const o = r.nextElementSibling;
    s ? o.matches(s) && c.push(o) : c.push(o), (r = o);
  }
  return c;
}
function ql(r, s) {
  return en().getComputedStyle(r, null).getPropertyValue(s);
}
function op(r) {
  let s = r,
    c;
  if (s) {
    for (c = 0; (s = s.previousSibling) !== null; )
      s.nodeType === 1 && (c += 1);
    return c;
  }
}
function _g(r, s) {
  const c = [];
  let o = r.parentElement;
  for (; o; ) c.push(o), (o = o.parentElement);
  return c;
}
function up(r, s, c) {
  const o = en();
  return (
    r[s === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      o
        .getComputedStyle(r, null)
        .getPropertyValue(s === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      o
        .getComputedStyle(r, null)
        .getPropertyValue(s === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function cp(r, s) {
  s === void 0 && (s = ""),
    typeof trustedTypes < "u"
      ? (r.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (c) => c })
          .createHTML(s))
      : (r.innerHTML = s);
}
let bf;
function xg() {
  const r = en(),
    s = gi();
  return {
    smoothScroll:
      s.documentElement &&
      s.documentElement.style &&
      "scrollBehavior" in s.documentElement.style,
    touch: !!(
      "ontouchstart" in r ||
      (r.DocumentTouch && s instanceof r.DocumentTouch)
    ),
  };
}
function Lp() {
  return bf || (bf = xg()), bf;
}
let Af;
function Og(r) {
  let { userAgent: s } = r === void 0 ? {} : r;
  const c = Lp(),
    o = en(),
    d = o.navigator.platform,
    h = s || o.navigator.userAgent,
    S = { ios: !1, android: !1 },
    E = o.screen.width,
    A = o.screen.height,
    y = h.match(/(Android);?[\s\/]+([\d.]+)?/);
  let T = h.match(/(iPad).*OS\s([\d_]+)/);
  const O = h.match(/(iPod)(.*OS\s([\d_]+))?/),
    j = !T && h.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    G = d === "Win32";
  let H = d === "MacIntel";
  const F = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !T &&
      H &&
      c.touch &&
      F.indexOf(`${E}x${A}`) >= 0 &&
      ((T = h.match(/(Version)\/([\d.]+)/)),
      T || (T = [0, 1, "13_0_0"]),
      (H = !1)),
    y && !G && ((S.os = "android"), (S.android = !0)),
    (T || j || O) && ((S.os = "ios"), (S.ios = !0)),
    S
  );
}
function Bp(r) {
  return r === void 0 && (r = {}), Af || (Af = Og(r)), Af;
}
let Sf;
function Mg() {
  const r = en(),
    s = Bp();
  let c = !1;
  function o() {
    const E = r.navigator.userAgent.toLowerCase();
    return (
      E.indexOf("safari") >= 0 &&
      E.indexOf("chrome") < 0 &&
      E.indexOf("android") < 0
    );
  }
  if (o()) {
    const E = String(r.navigator.userAgent);
    if (E.includes("Version/")) {
      const [A, y] = E.split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((T) => Number(T));
      c = A < 16 || (A === 16 && y < 2);
    }
  }
  const d = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      r.navigator.userAgent
    ),
    h = o(),
    S = h || (d && s.ios);
  return {
    isSafari: c || h,
    needPerspectiveFix: c,
    need3dFix: S,
    isWebView: d,
  };
}
function Up() {
  return Sf || (Sf = Mg()), Sf;
}
function Cg(r) {
  let { swiper: s, on: c, emit: o } = r;
  const d = en();
  let h = null,
    S = null;
  const E = () => {
      !s || s.destroyed || !s.initialized || (o("beforeResize"), o("resize"));
    },
    A = () => {
      !s ||
        s.destroyed ||
        !s.initialized ||
        ((h = new ResizeObserver((O) => {
          S = d.requestAnimationFrame(() => {
            const { width: j, height: G } = s;
            let H = j,
              F = G;
            O.forEach(($) => {
              let { contentBoxSize: Y, contentRect: W, target: P } = $;
              (P && P !== s.el) ||
                ((H = W ? W.width : (Y[0] || Y).inlineSize),
                (F = W ? W.height : (Y[0] || Y).blockSize));
            }),
              (H !== j || F !== G) && E();
          });
        })),
        h.observe(s.el));
    },
    y = () => {
      S && d.cancelAnimationFrame(S),
        h && h.unobserve && s.el && (h.unobserve(s.el), (h = null));
    },
    T = () => {
      !s || s.destroyed || !s.initialized || o("orientationchange");
    };
  c("init", () => {
    if (s.params.resizeObserver && typeof d.ResizeObserver < "u") {
      A();
      return;
    }
    d.addEventListener("resize", E), d.addEventListener("orientationchange", T);
  }),
    c("destroy", () => {
      y(),
        d.removeEventListener("resize", E),
        d.removeEventListener("orientationchange", T);
    });
}
function Dg(r) {
  let { swiper: s, extendParams: c, on: o, emit: d } = r;
  const h = [],
    S = en(),
    E = function (T, O) {
      O === void 0 && (O = {});
      const j = S.MutationObserver || S.WebkitMutationObserver,
        G = new j((H) => {
          if (s.__preventObserver__) return;
          if (H.length === 1) {
            d("observerUpdate", H[0]);
            return;
          }
          const F = function () {
            d("observerUpdate", H[0]);
          };
          S.requestAnimationFrame
            ? S.requestAnimationFrame(F)
            : S.setTimeout(F, 0);
        });
      G.observe(T, {
        attributes: typeof O.attributes > "u" ? !0 : O.attributes,
        childList: s.isElement || (typeof O.childList > "u" ? !0 : O).childList,
        characterData: typeof O.characterData > "u" ? !0 : O.characterData,
      }),
        h.push(G);
    },
    A = () => {
      if (s.params.observer) {
        if (s.params.observeParents) {
          const T = _g(s.hostEl);
          for (let O = 0; O < T.length; O += 1) E(T[O]);
        }
        E(s.hostEl, { childList: s.params.observeSlideChildren }),
          E(s.wrapperEl, { attributes: !1 });
      }
    },
    y = () => {
      h.forEach((T) => {
        T.disconnect();
      }),
        h.splice(0, h.length);
    };
  c({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    o("init", A),
    o("destroy", y);
}
var Ng = {
  on(r, s, c) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof s != "function") return o;
    const d = c ? "unshift" : "push";
    return (
      r.split(" ").forEach((h) => {
        o.eventsListeners[h] || (o.eventsListeners[h] = []),
          o.eventsListeners[h][d](s);
      }),
      o
    );
  },
  once(r, s, c) {
    const o = this;
    if (!o.eventsListeners || o.destroyed || typeof s != "function") return o;
    function d() {
      o.off(r, d), d.__emitterProxy && delete d.__emitterProxy;
      for (var h = arguments.length, S = new Array(h), E = 0; E < h; E++)
        S[E] = arguments[E];
      s.apply(o, S);
    }
    return (d.__emitterProxy = s), o.on(r, d, c);
  },
  onAny(r, s) {
    const c = this;
    if (!c.eventsListeners || c.destroyed || typeof r != "function") return c;
    const o = s ? "unshift" : "push";
    return c.eventsAnyListeners.indexOf(r) < 0 && c.eventsAnyListeners[o](r), c;
  },
  offAny(r) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsAnyListeners) return s;
    const c = s.eventsAnyListeners.indexOf(r);
    return c >= 0 && s.eventsAnyListeners.splice(c, 1), s;
  },
  off(r, s) {
    const c = this;
    return (
      !c.eventsListeners ||
        c.destroyed ||
        !c.eventsListeners ||
        r.split(" ").forEach((o) => {
          typeof s > "u"
            ? (c.eventsListeners[o] = [])
            : c.eventsListeners[o] &&
              c.eventsListeners[o].forEach((d, h) => {
                (d === s || (d.__emitterProxy && d.__emitterProxy === s)) &&
                  c.eventsListeners[o].splice(h, 1);
              });
        }),
      c
    );
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let s, c, o;
    for (var d = arguments.length, h = new Array(d), S = 0; S < d; S++)
      h[S] = arguments[S];
    return (
      typeof h[0] == "string" || Array.isArray(h[0])
        ? ((s = h[0]), (c = h.slice(1, h.length)), (o = r))
        : ((s = h[0].events), (c = h[0].data), (o = h[0].context || r)),
      c.unshift(o),
      (Array.isArray(s) ? s : s.split(" ")).forEach((A) => {
        r.eventsAnyListeners &&
          r.eventsAnyListeners.length &&
          r.eventsAnyListeners.forEach((y) => {
            y.apply(o, [A, ...c]);
          }),
          r.eventsListeners &&
            r.eventsListeners[A] &&
            r.eventsListeners[A].forEach((y) => {
              y.apply(o, c);
            });
      }),
      r
    );
  },
};
function zg() {
  const r = this;
  let s, c;
  const o = r.el;
  typeof r.params.width < "u" && r.params.width !== null
    ? (s = r.params.width)
    : (s = o.clientWidth),
    typeof r.params.height < "u" && r.params.height !== null
      ? (c = r.params.height)
      : (c = o.clientHeight),
    !((s === 0 && r.isHorizontal()) || (c === 0 && r.isVertical())) &&
      ((s =
        s -
        parseInt(ql(o, "padding-left") || 0, 10) -
        parseInt(ql(o, "padding-right") || 0, 10)),
      (c =
        c -
        parseInt(ql(o, "padding-top") || 0, 10) -
        parseInt(ql(o, "padding-bottom") || 0, 10)),
      Number.isNaN(s) && (s = 0),
      Number.isNaN(c) && (c = 0),
      Object.assign(r, {
        width: s,
        height: c,
        size: r.isHorizontal() ? s : c,
      }));
}
function Rg() {
  const r = this;
  function s(ee, fe) {
    return parseFloat(ee.getPropertyValue(r.getDirectionLabel(fe)) || 0);
  }
  const c = r.params,
    { wrapperEl: o, slidesEl: d, size: h, rtlTranslate: S, wrongRTL: E } = r,
    A = r.virtual && c.virtual.enabled,
    y = A ? r.virtual.slides.length : r.slides.length,
    T = $i(d, `.${r.params.slideClass}, swiper-slide`),
    O = A ? r.virtual.slides.length : T.length;
  let j = [];
  const G = [],
    H = [];
  let F = c.slidesOffsetBefore;
  typeof F == "function" && (F = c.slidesOffsetBefore.call(r));
  let $ = c.slidesOffsetAfter;
  typeof $ == "function" && ($ = c.slidesOffsetAfter.call(r));
  const Y = r.snapGrid.length,
    W = r.slidesGrid.length;
  let P = c.spaceBetween,
    ue = -F,
    I = 0,
    ve = 0;
  if (typeof h > "u") return;
  typeof P == "string" && P.indexOf("%") >= 0
    ? (P = (parseFloat(P.replace("%", "")) / 100) * h)
    : typeof P == "string" && (P = parseFloat(P)),
    (r.virtualSize = -P),
    T.forEach((ee) => {
      S ? (ee.style.marginLeft = "") : (ee.style.marginRight = ""),
        (ee.style.marginBottom = ""),
        (ee.style.marginTop = "");
    }),
    c.centeredSlides &&
      c.cssMode &&
      (zu(o, "--swiper-centered-offset-before", ""),
      zu(o, "--swiper-centered-offset-after", ""));
  const ge = c.grid && c.grid.rows > 1 && r.grid;
  ge ? r.grid.initSlides(T) : r.grid && r.grid.unsetSlides();
  let re;
  const le =
    c.slidesPerView === "auto" &&
    c.breakpoints &&
    Object.keys(c.breakpoints).filter(
      (ee) => typeof c.breakpoints[ee].slidesPerView < "u"
    ).length > 0;
  for (let ee = 0; ee < O; ee += 1) {
    re = 0;
    let fe;
    if (
      (T[ee] && (fe = T[ee]),
      ge && r.grid.updateSlide(ee, fe, T),
      !(T[ee] && ql(fe, "display") === "none"))
    ) {
      if (c.slidesPerView === "auto") {
        le && (T[ee].style[r.getDirectionLabel("width")] = "");
        const he = getComputedStyle(fe),
          Ge = fe.style.transform,
          lt = fe.style.webkitTransform;
        if (
          (Ge && (fe.style.transform = "none"),
          lt && (fe.style.webkitTransform = "none"),
          c.roundLengths)
        )
          re = r.isHorizontal() ? up(fe, "width") : up(fe, "height");
        else {
          const Qe = s(he, "width"),
            z = s(he, "padding-left"),
            K = s(he, "padding-right"),
            Z = s(he, "margin-left"),
            de = s(he, "margin-right"),
            v = he.getPropertyValue("box-sizing");
          if (v && v === "border-box") re = Qe + Z + de;
          else {
            const { clientWidth: Q, offsetWidth: ae } = fe;
            re = Qe + z + K + Z + de + (ae - Q);
          }
        }
        Ge && (fe.style.transform = Ge),
          lt && (fe.style.webkitTransform = lt),
          c.roundLengths && (re = Math.floor(re));
      } else
        (re = (h - (c.slidesPerView - 1) * P) / c.slidesPerView),
          c.roundLengths && (re = Math.floor(re)),
          T[ee] && (T[ee].style[r.getDirectionLabel("width")] = `${re}px`);
      T[ee] && (T[ee].swiperSlideSize = re),
        H.push(re),
        c.centeredSlides
          ? ((ue = ue + re / 2 + I / 2 + P),
            I === 0 && ee !== 0 && (ue = ue - h / 2 - P),
            ee === 0 && (ue = ue - h / 2 - P),
            Math.abs(ue) < 1 / 1e3 && (ue = 0),
            c.roundLengths && (ue = Math.floor(ue)),
            ve % c.slidesPerGroup === 0 && j.push(ue),
            G.push(ue))
          : (c.roundLengths && (ue = Math.floor(ue)),
            (ve - Math.min(r.params.slidesPerGroupSkip, ve)) %
              r.params.slidesPerGroup ===
              0 && j.push(ue),
            G.push(ue),
            (ue = ue + re + P)),
        (r.virtualSize += re + P),
        (I = re),
        (ve += 1);
    }
  }
  if (
    ((r.virtualSize = Math.max(r.virtualSize, h) + $),
    S &&
      E &&
      (c.effect === "slide" || c.effect === "coverflow") &&
      (o.style.width = `${r.virtualSize + P}px`),
    c.setWrapperSize &&
      (o.style[r.getDirectionLabel("width")] = `${r.virtualSize + P}px`),
    ge && r.grid.updateWrapperSize(re, j),
    !c.centeredSlides)
  ) {
    const ee = [];
    for (let fe = 0; fe < j.length; fe += 1) {
      let he = j[fe];
      c.roundLengths && (he = Math.floor(he)),
        j[fe] <= r.virtualSize - h && ee.push(he);
    }
    (j = ee),
      Math.floor(r.virtualSize - h) - Math.floor(j[j.length - 1]) > 1 &&
        j.push(r.virtualSize - h);
  }
  if (A && c.loop) {
    const ee = H[0] + P;
    if (c.slidesPerGroup > 1) {
      const fe = Math.ceil(
          (r.virtual.slidesBefore + r.virtual.slidesAfter) / c.slidesPerGroup
        ),
        he = ee * c.slidesPerGroup;
      for (let Ge = 0; Ge < fe; Ge += 1) j.push(j[j.length - 1] + he);
    }
    for (
      let fe = 0;
      fe < r.virtual.slidesBefore + r.virtual.slidesAfter;
      fe += 1
    )
      c.slidesPerGroup === 1 && j.push(j[j.length - 1] + ee),
        G.push(G[G.length - 1] + ee),
        (r.virtualSize += ee);
  }
  if ((j.length === 0 && (j = [0]), P !== 0)) {
    const ee =
      r.isHorizontal() && S ? "marginLeft" : r.getDirectionLabel("marginRight");
    T.filter((fe, he) =>
      !c.cssMode || c.loop ? !0 : he !== T.length - 1
    ).forEach((fe) => {
      fe.style[ee] = `${P}px`;
    });
  }
  if (c.centeredSlides && c.centeredSlidesBounds) {
    let ee = 0;
    H.forEach((he) => {
      ee += he + (P || 0);
    }),
      (ee -= P);
    const fe = ee > h ? ee - h : 0;
    j = j.map((he) => (he <= 0 ? -F : he > fe ? fe + $ : he));
  }
  if (c.centerInsufficientSlides) {
    let ee = 0;
    H.forEach((he) => {
      ee += he + (P || 0);
    }),
      (ee -= P);
    const fe = (c.slidesOffsetBefore || 0) + (c.slidesOffsetAfter || 0);
    if (ee + fe < h) {
      const he = (h - ee - fe) / 2;
      j.forEach((Ge, lt) => {
        j[lt] = Ge - he;
      }),
        G.forEach((Ge, lt) => {
          G[lt] = Ge + he;
        });
    }
  }
  if (
    (Object.assign(r, {
      slides: T,
      snapGrid: j,
      slidesGrid: G,
      slidesSizesGrid: H,
    }),
    c.centeredSlides && c.cssMode && !c.centeredSlidesBounds)
  ) {
    zu(o, "--swiper-centered-offset-before", `${-j[0]}px`),
      zu(
        o,
        "--swiper-centered-offset-after",
        `${r.size / 2 - H[H.length - 1] / 2}px`
      );
    const ee = -r.snapGrid[0],
      fe = -r.slidesGrid[0];
    (r.snapGrid = r.snapGrid.map((he) => he + ee)),
      (r.slidesGrid = r.slidesGrid.map((he) => he + fe));
  }
  if (
    (O !== y && r.emit("slidesLengthChange"),
    j.length !== Y &&
      (r.params.watchOverflow && r.checkOverflow(),
      r.emit("snapGridLengthChange")),
    G.length !== W && r.emit("slidesGridLengthChange"),
    c.watchSlidesProgress && r.updateSlidesOffset(),
    r.emit("slidesUpdated"),
    !A && !c.cssMode && (c.effect === "slide" || c.effect === "fade"))
  ) {
    const ee = `${c.containerModifierClass}backface-hidden`,
      fe = r.el.classList.contains(ee);
    O <= c.maxBackfaceHiddenSlides
      ? fe || r.el.classList.add(ee)
      : fe && r.el.classList.remove(ee);
  }
}
function jg(r) {
  const s = this,
    c = [],
    o = s.virtual && s.params.virtual.enabled;
  let d = 0,
    h;
  typeof r == "number"
    ? s.setTransition(r)
    : r === !0 && s.setTransition(s.params.speed);
  const S = (E) => (o ? s.slides[s.getSlideIndexByData(E)] : s.slides[E]);
  if (s.params.slidesPerView !== "auto" && s.params.slidesPerView > 1)
    if (s.params.centeredSlides)
      (s.visibleSlides || []).forEach((E) => {
        c.push(E);
      });
    else
      for (h = 0; h < Math.ceil(s.params.slidesPerView); h += 1) {
        const E = s.activeIndex + h;
        if (E > s.slides.length && !o) break;
        c.push(S(E));
      }
  else c.push(S(s.activeIndex));
  for (h = 0; h < c.length; h += 1)
    if (typeof c[h] < "u") {
      const E = c[h].offsetHeight;
      d = E > d ? E : d;
    }
  (d || d === 0) && (s.wrapperEl.style.height = `${d}px`);
}
function Lg() {
  const r = this,
    s = r.slides,
    c = r.isElement
      ? r.isHorizontal()
        ? r.wrapperEl.offsetLeft
        : r.wrapperEl.offsetTop
      : 0;
  for (let o = 0; o < s.length; o += 1)
    s[o].swiperSlideOffset =
      (r.isHorizontal() ? s[o].offsetLeft : s[o].offsetTop) -
      c -
      r.cssOverflowAdjustment();
}
const fp = (r, s, c) => {
  s && !r.classList.contains(c)
    ? r.classList.add(c)
    : !s && r.classList.contains(c) && r.classList.remove(c);
};
function Bg(r) {
  r === void 0 && (r = (this && this.translate) || 0);
  const s = this,
    c = s.params,
    { slides: o, rtlTranslate: d, snapGrid: h } = s;
  if (o.length === 0) return;
  typeof o[0].swiperSlideOffset > "u" && s.updateSlidesOffset();
  let S = -r;
  d && (S = r), (s.visibleSlidesIndexes = []), (s.visibleSlides = []);
  let E = c.spaceBetween;
  typeof E == "string" && E.indexOf("%") >= 0
    ? (E = (parseFloat(E.replace("%", "")) / 100) * s.size)
    : typeof E == "string" && (E = parseFloat(E));
  for (let A = 0; A < o.length; A += 1) {
    const y = o[A];
    let T = y.swiperSlideOffset;
    c.cssMode && c.centeredSlides && (T -= o[0].swiperSlideOffset);
    const O =
        (S + (c.centeredSlides ? s.minTranslate() : 0) - T) /
        (y.swiperSlideSize + E),
      j =
        (S - h[0] + (c.centeredSlides ? s.minTranslate() : 0) - T) /
        (y.swiperSlideSize + E),
      G = -(S - T),
      H = G + s.slidesSizesGrid[A],
      F = G >= 0 && G <= s.size - s.slidesSizesGrid[A],
      $ =
        (G >= 0 && G < s.size - 1) ||
        (H > 1 && H <= s.size) ||
        (G <= 0 && H >= s.size);
    $ && (s.visibleSlides.push(y), s.visibleSlidesIndexes.push(A)),
      fp(y, $, c.slideVisibleClass),
      fp(y, F, c.slideFullyVisibleClass),
      (y.progress = d ? -O : O),
      (y.originalProgress = d ? -j : j);
  }
}
function Ug(r) {
  const s = this;
  if (typeof r > "u") {
    const T = s.rtlTranslate ? -1 : 1;
    r = (s && s.translate && s.translate * T) || 0;
  }
  const c = s.params,
    o = s.maxTranslate() - s.minTranslate();
  let { progress: d, isBeginning: h, isEnd: S, progressLoop: E } = s;
  const A = h,
    y = S;
  if (o === 0) (d = 0), (h = !0), (S = !0);
  else {
    d = (r - s.minTranslate()) / o;
    const T = Math.abs(r - s.minTranslate()) < 1,
      O = Math.abs(r - s.maxTranslate()) < 1;
    (h = T || d <= 0), (S = O || d >= 1), T && (d = 0), O && (d = 1);
  }
  if (c.loop) {
    const T = s.getSlideIndexByData(0),
      O = s.getSlideIndexByData(s.slides.length - 1),
      j = s.slidesGrid[T],
      G = s.slidesGrid[O],
      H = s.slidesGrid[s.slidesGrid.length - 1],
      F = Math.abs(r);
    F >= j ? (E = (F - j) / H) : (E = (F + H - G) / H), E > 1 && (E -= 1);
  }
  Object.assign(s, { progress: d, progressLoop: E, isBeginning: h, isEnd: S }),
    (c.watchSlidesProgress || (c.centeredSlides && c.autoHeight)) &&
      s.updateSlidesProgress(r),
    h && !A && s.emit("reachBeginning toEdge"),
    S && !y && s.emit("reachEnd toEdge"),
    ((A && !h) || (y && !S)) && s.emit("fromEdge"),
    s.emit("progress", d);
}
const Ef = (r, s, c) => {
  s && !r.classList.contains(c)
    ? r.classList.add(c)
    : !s && r.classList.contains(c) && r.classList.remove(c);
};
function Gg() {
  const r = this,
    { slides: s, params: c, slidesEl: o, activeIndex: d } = r,
    h = r.virtual && c.virtual.enabled,
    S = r.grid && c.grid && c.grid.rows > 1,
    E = (O) => $i(o, `.${c.slideClass}${O}, swiper-slide${O}`)[0];
  let A, y, T;
  if (h)
    if (c.loop) {
      let O = d - r.virtual.slidesBefore;
      O < 0 && (O = r.virtual.slides.length + O),
        O >= r.virtual.slides.length && (O -= r.virtual.slides.length),
        (A = E(`[data-swiper-slide-index="${O}"]`));
    } else A = E(`[data-swiper-slide-index="${d}"]`);
  else
    S
      ? ((A = s.find((O) => O.column === d)),
        (T = s.find((O) => O.column === d + 1)),
        (y = s.find((O) => O.column === d - 1)))
      : (A = s[d]);
  A &&
    (S ||
      ((T = wg(A, `.${c.slideClass}, swiper-slide`)[0]),
      c.loop && !T && (T = s[0]),
      (y = Tg(A, `.${c.slideClass}, swiper-slide`)[0]),
      c.loop && !y === 0 && (y = s[s.length - 1]))),
    s.forEach((O) => {
      Ef(O, O === A, c.slideActiveClass),
        Ef(O, O === T, c.slideNextClass),
        Ef(O, O === y, c.slidePrevClass);
    }),
    r.emitSlidesClasses();
}
const Lu = (r, s) => {
    if (!r || r.destroyed || !r.params) return;
    const c = () => (r.isElement ? "swiper-slide" : `.${r.params.slideClass}`),
      o = s.closest(c());
    if (o) {
      let d = o.querySelector(`.${r.params.lazyPreloaderClass}`);
      !d &&
        r.isElement &&
        (o.shadowRoot
          ? (d = o.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              o.shadowRoot &&
                ((d = o.shadowRoot.querySelector(
                  `.${r.params.lazyPreloaderClass}`
                )),
                d && d.remove());
            })),
        d && d.remove();
    }
  },
  Tf = (r, s) => {
    if (!r.slides[s]) return;
    const c = r.slides[s].querySelector('[loading="lazy"]');
    c && c.removeAttribute("loading");
  },
  Nf = (r) => {
    if (!r || r.destroyed || !r.params) return;
    let s = r.params.lazyPreloadPrevNext;
    const c = r.slides.length;
    if (!c || !s || s < 0) return;
    s = Math.min(s, c);
    const o =
        r.params.slidesPerView === "auto"
          ? r.slidesPerViewDynamic()
          : Math.ceil(r.params.slidesPerView),
      d = r.activeIndex;
    if (r.params.grid && r.params.grid.rows > 1) {
      const S = d,
        E = [S - s];
      E.push(...Array.from({ length: s }).map((A, y) => S + o + y)),
        r.slides.forEach((A, y) => {
          E.includes(A.column) && Tf(r, y);
        });
      return;
    }
    const h = d + o - 1;
    if (r.params.rewind || r.params.loop)
      for (let S = d - s; S <= h + s; S += 1) {
        const E = ((S % c) + c) % c;
        (E < d || E > h) && Tf(r, E);
      }
    else
      for (let S = Math.max(d - s, 0); S <= Math.min(h + s, c - 1); S += 1)
        S !== d && (S > h || S < d) && Tf(r, S);
  };
function Hg(r) {
  const { slidesGrid: s, params: c } = r,
    o = r.rtlTranslate ? r.translate : -r.translate;
  let d;
  for (let h = 0; h < s.length; h += 1)
    typeof s[h + 1] < "u"
      ? o >= s[h] && o < s[h + 1] - (s[h + 1] - s[h]) / 2
        ? (d = h)
        : o >= s[h] && o < s[h + 1] && (d = h + 1)
      : o >= s[h] && (d = h);
  return c.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0), d;
}
function Yg(r) {
  const s = this,
    c = s.rtlTranslate ? s.translate : -s.translate,
    { snapGrid: o, params: d, activeIndex: h, realIndex: S, snapIndex: E } = s;
  let A = r,
    y;
  const T = (G) => {
    let H = G - s.virtual.slidesBefore;
    return (
      H < 0 && (H = s.virtual.slides.length + H),
      H >= s.virtual.slides.length && (H -= s.virtual.slides.length),
      H
    );
  };
  if ((typeof A > "u" && (A = Hg(s)), o.indexOf(c) >= 0)) y = o.indexOf(c);
  else {
    const G = Math.min(d.slidesPerGroupSkip, A);
    y = G + Math.floor((A - G) / d.slidesPerGroup);
  }
  if ((y >= o.length && (y = o.length - 1), A === h && !s.params.loop)) {
    y !== E && ((s.snapIndex = y), s.emit("snapIndexChange"));
    return;
  }
  if (A === h && s.params.loop && s.virtual && s.params.virtual.enabled) {
    s.realIndex = T(A);
    return;
  }
  const O = s.grid && d.grid && d.grid.rows > 1;
  let j;
  if (s.virtual && d.virtual.enabled && d.loop) j = T(A);
  else if (O) {
    const G = s.slides.find((F) => F.column === A);
    let H = parseInt(G.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(H) && (H = Math.max(s.slides.indexOf(G), 0)),
      (j = Math.floor(H / d.grid.rows));
  } else if (s.slides[A]) {
    const G = s.slides[A].getAttribute("data-swiper-slide-index");
    G ? (j = parseInt(G, 10)) : (j = A);
  } else j = A;
  Object.assign(s, {
    previousSnapIndex: E,
    snapIndex: y,
    previousRealIndex: S,
    realIndex: j,
    previousIndex: h,
    activeIndex: A,
  }),
    s.initialized && Nf(s),
    s.emit("activeIndexChange"),
    s.emit("snapIndexChange"),
    (s.initialized || s.params.runCallbacksOnInit) &&
      (S !== j && s.emit("realIndexChange"), s.emit("slideChange"));
}
function Vg(r, s) {
  const c = this,
    o = c.params;
  let d = r.closest(`.${o.slideClass}, swiper-slide`);
  !d &&
    c.isElement &&
    s &&
    s.length > 1 &&
    s.includes(r) &&
    [...s.slice(s.indexOf(r) + 1, s.length)].forEach((E) => {
      !d && E.matches && E.matches(`.${o.slideClass}, swiper-slide`) && (d = E);
    });
  let h = !1,
    S;
  if (d) {
    for (let E = 0; E < c.slides.length; E += 1)
      if (c.slides[E] === d) {
        (h = !0), (S = E);
        break;
      }
  }
  if (d && h)
    (c.clickedSlide = d),
      c.virtual && c.params.virtual.enabled
        ? (c.clickedIndex = parseInt(
            d.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (c.clickedIndex = S);
  else {
    (c.clickedSlide = void 0), (c.clickedIndex = void 0);
    return;
  }
  o.slideToClickedSlide &&
    c.clickedIndex !== void 0 &&
    c.clickedIndex !== c.activeIndex &&
    c.slideToClickedSlide();
}
var Xg = {
  updateSize: zg,
  updateSlides: Rg,
  updateAutoHeight: jg,
  updateSlidesOffset: Lg,
  updateSlidesProgress: Bg,
  updateProgress: Ug,
  updateSlidesClasses: Gg,
  updateActiveIndex: Yg,
  updateClickedSlide: Vg,
};
function qg(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const s = this,
    { params: c, rtlTranslate: o, translate: d, wrapperEl: h } = s;
  if (c.virtualTranslate) return o ? -d : d;
  if (c.cssMode) return d;
  let S = bg(h, r);
  return (S += s.cssOverflowAdjustment()), o && (S = -S), S || 0;
}
function Qg(r, s) {
  const c = this,
    { rtlTranslate: o, params: d, wrapperEl: h, progress: S } = c;
  let E = 0,
    A = 0;
  const y = 0;
  c.isHorizontal() ? (E = o ? -r : r) : (A = r),
    d.roundLengths && ((E = Math.floor(E)), (A = Math.floor(A))),
    (c.previousTranslate = c.translate),
    (c.translate = c.isHorizontal() ? E : A),
    d.cssMode
      ? (h[c.isHorizontal() ? "scrollLeft" : "scrollTop"] = c.isHorizontal()
          ? -E
          : -A)
      : d.virtualTranslate ||
        (c.isHorizontal()
          ? (E -= c.cssOverflowAdjustment())
          : (A -= c.cssOverflowAdjustment()),
        (h.style.transform = `translate3d(${E}px, ${A}px, ${y}px)`));
  let T;
  const O = c.maxTranslate() - c.minTranslate();
  O === 0 ? (T = 0) : (T = (r - c.minTranslate()) / O),
    T !== S && c.updateProgress(r),
    c.emit("setTranslate", c.translate, s);
}
function kg() {
  return -this.snapGrid[0];
}
function Zg() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Kg(r, s, c, o, d) {
  r === void 0 && (r = 0),
    s === void 0 && (s = this.params.speed),
    c === void 0 && (c = !0),
    o === void 0 && (o = !0);
  const h = this,
    { params: S, wrapperEl: E } = h;
  if (h.animating && S.preventInteractionOnTransition) return !1;
  const A = h.minTranslate(),
    y = h.maxTranslate();
  let T;
  if (
    (o && r > A ? (T = A) : o && r < y ? (T = y) : (T = r),
    h.updateProgress(T),
    S.cssMode)
  ) {
    const O = h.isHorizontal();
    if (s === 0) E[O ? "scrollLeft" : "scrollTop"] = -T;
    else {
      if (!h.support.smoothScroll)
        return (
          jp({ swiper: h, targetPosition: -T, side: O ? "left" : "top" }), !0
        );
      E.scrollTo({ [O ? "left" : "top"]: -T, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s === 0
      ? (h.setTransition(0),
        h.setTranslate(T),
        c && (h.emit("beforeTransitionStart", s, d), h.emit("transitionEnd")))
      : (h.setTransition(s),
        h.setTranslate(T),
        c && (h.emit("beforeTransitionStart", s, d), h.emit("transitionStart")),
        h.animating ||
          ((h.animating = !0),
          h.onTranslateToWrapperTransitionEnd ||
            (h.onTranslateToWrapperTransitionEnd = function (j) {
              !h ||
                h.destroyed ||
                (j.target === this &&
                  (h.wrapperEl.removeEventListener(
                    "transitionend",
                    h.onTranslateToWrapperTransitionEnd
                  ),
                  (h.onTranslateToWrapperTransitionEnd = null),
                  delete h.onTranslateToWrapperTransitionEnd,
                  (h.animating = !1),
                  c && h.emit("transitionEnd")));
            }),
          h.wrapperEl.addEventListener(
            "transitionend",
            h.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Ig = {
  getTranslate: qg,
  setTranslate: Qg,
  minTranslate: kg,
  maxTranslate: Zg,
  translateTo: Kg,
};
function Pg(r, s) {
  const c = this;
  c.params.cssMode ||
    ((c.wrapperEl.style.transitionDuration = `${r}ms`),
    (c.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : "")),
    c.emit("setTransition", r, s);
}
function Gp(r) {
  let { swiper: s, runCallbacks: c, direction: o, step: d } = r;
  const { activeIndex: h, previousIndex: S } = s;
  let E = o;
  E || (h > S ? (E = "next") : h < S ? (E = "prev") : (E = "reset")),
    s.emit(`transition${d}`),
    c && E === "reset"
      ? s.emit(`slideResetTransition${d}`)
      : c &&
        h !== S &&
        (s.emit(`slideChangeTransition${d}`),
        E === "next"
          ? s.emit(`slideNextTransition${d}`)
          : s.emit(`slidePrevTransition${d}`));
}
function Jg(r, s) {
  r === void 0 && (r = !0);
  const c = this,
    { params: o } = c;
  o.cssMode ||
    (o.autoHeight && c.updateAutoHeight(),
    Gp({ swiper: c, runCallbacks: r, direction: s, step: "Start" }));
}
function Wg(r, s) {
  r === void 0 && (r = !0);
  const c = this,
    { params: o } = c;
  (c.animating = !1),
    !o.cssMode &&
      (c.setTransition(0),
      Gp({ swiper: c, runCallbacks: r, direction: s, step: "End" }));
}
var Fg = { setTransition: Pg, transitionStart: Jg, transitionEnd: Wg };
function $g(r, s, c, o, d) {
  r === void 0 && (r = 0),
    c === void 0 && (c = !0),
    typeof r == "string" && (r = parseInt(r, 10));
  const h = this;
  let S = r;
  S < 0 && (S = 0);
  const {
    params: E,
    snapGrid: A,
    slidesGrid: y,
    previousIndex: T,
    activeIndex: O,
    rtlTranslate: j,
    wrapperEl: G,
    enabled: H,
  } = h;
  if (
    (!H && !o && !d) ||
    h.destroyed ||
    (h.animating && E.preventInteractionOnTransition)
  )
    return !1;
  typeof s > "u" && (s = h.params.speed);
  const F = Math.min(h.params.slidesPerGroupSkip, S);
  let $ = F + Math.floor((S - F) / h.params.slidesPerGroup);
  $ >= A.length && ($ = A.length - 1);
  const Y = -A[$];
  if (E.normalizeSlideIndex)
    for (let ge = 0; ge < y.length; ge += 1) {
      const re = -Math.floor(Y * 100),
        le = Math.floor(y[ge] * 100),
        ee = Math.floor(y[ge + 1] * 100);
      typeof y[ge + 1] < "u"
        ? re >= le && re < ee - (ee - le) / 2
          ? (S = ge)
          : re >= le && re < ee && (S = ge + 1)
        : re >= le && (S = ge);
    }
  if (
    h.initialized &&
    S !== O &&
    ((!h.allowSlideNext &&
      (j
        ? Y > h.translate && Y > h.minTranslate()
        : Y < h.translate && Y < h.minTranslate())) ||
      (!h.allowSlidePrev &&
        Y > h.translate &&
        Y > h.maxTranslate() &&
        (O || 0) !== S))
  )
    return !1;
  S !== (T || 0) && c && h.emit("beforeSlideChangeStart"), h.updateProgress(Y);
  let W;
  S > O ? (W = "next") : S < O ? (W = "prev") : (W = "reset");
  const P = h.virtual && h.params.virtual.enabled;
  if (!(P && d) && ((j && -Y === h.translate) || (!j && Y === h.translate)))
    return (
      h.updateActiveIndex(S),
      E.autoHeight && h.updateAutoHeight(),
      h.updateSlidesClasses(),
      E.effect !== "slide" && h.setTranslate(Y),
      W !== "reset" && (h.transitionStart(c, W), h.transitionEnd(c, W)),
      !1
    );
  if (E.cssMode) {
    const ge = h.isHorizontal(),
      re = j ? Y : -Y;
    if (s === 0)
      P &&
        ((h.wrapperEl.style.scrollSnapType = "none"),
        (h._immediateVirtual = !0)),
        P && !h._cssModeVirtualInitialSet && h.params.initialSlide > 0
          ? ((h._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              G[ge ? "scrollLeft" : "scrollTop"] = re;
            }))
          : (G[ge ? "scrollLeft" : "scrollTop"] = re),
        P &&
          requestAnimationFrame(() => {
            (h.wrapperEl.style.scrollSnapType = ""), (h._immediateVirtual = !1);
          });
    else {
      if (!h.support.smoothScroll)
        return (
          jp({ swiper: h, targetPosition: re, side: ge ? "left" : "top" }), !0
        );
      G.scrollTo({ [ge ? "left" : "top"]: re, behavior: "smooth" });
    }
    return !0;
  }
  const ve = Up().isSafari;
  return (
    P && !d && ve && h.isElement && h.virtual.update(!1, !1, S),
    h.setTransition(s),
    h.setTranslate(Y),
    h.updateActiveIndex(S),
    h.updateSlidesClasses(),
    h.emit("beforeTransitionStart", s, o),
    h.transitionStart(c, W),
    s === 0
      ? h.transitionEnd(c, W)
      : h.animating ||
        ((h.animating = !0),
        h.onSlideToWrapperTransitionEnd ||
          (h.onSlideToWrapperTransitionEnd = function (re) {
            !h ||
              h.destroyed ||
              (re.target === this &&
                (h.wrapperEl.removeEventListener(
                  "transitionend",
                  h.onSlideToWrapperTransitionEnd
                ),
                (h.onSlideToWrapperTransitionEnd = null),
                delete h.onSlideToWrapperTransitionEnd,
                h.transitionEnd(c, W)));
          }),
        h.wrapperEl.addEventListener(
          "transitionend",
          h.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ev(r, s, c, o) {
  r === void 0 && (r = 0),
    c === void 0 && (c = !0),
    typeof r == "string" && (r = parseInt(r, 10));
  const d = this;
  if (d.destroyed) return;
  typeof s > "u" && (s = d.params.speed);
  const h = d.grid && d.params.grid && d.params.grid.rows > 1;
  let S = r;
  if (d.params.loop)
    if (d.virtual && d.params.virtual.enabled) S = S + d.virtual.slidesBefore;
    else {
      let E;
      if (h) {
        const j = S * d.params.grid.rows;
        E = d.slides.find(
          (G) => G.getAttribute("data-swiper-slide-index") * 1 === j
        ).column;
      } else E = d.getSlideIndexByData(S);
      const A = h
          ? Math.ceil(d.slides.length / d.params.grid.rows)
          : d.slides.length,
        { centeredSlides: y } = d.params;
      let T = d.params.slidesPerView;
      T === "auto"
        ? (T = d.slidesPerViewDynamic())
        : ((T = Math.ceil(parseFloat(d.params.slidesPerView, 10))),
          y && T % 2 === 0 && (T = T + 1));
      let O = A - E < T;
      if (
        (y && (O = O || E < Math.ceil(T / 2)),
        o && y && d.params.slidesPerView !== "auto" && !h && (O = !1),
        O)
      ) {
        const j = y
          ? E < d.activeIndex
            ? "prev"
            : "next"
          : E - d.activeIndex - 1 < d.params.slidesPerView
          ? "next"
          : "prev";
        d.loopFix({
          direction: j,
          slideTo: !0,
          activeSlideIndex: j === "next" ? E + 1 : E - A + 1,
          slideRealIndex: j === "next" ? d.realIndex : void 0,
        });
      }
      if (h) {
        const j = S * d.params.grid.rows;
        S = d.slides.find(
          (G) => G.getAttribute("data-swiper-slide-index") * 1 === j
        ).column;
      } else S = d.getSlideIndexByData(S);
    }
  return (
    requestAnimationFrame(() => {
      d.slideTo(S, s, c, o);
    }),
    d
  );
}
function tv(r, s, c) {
  s === void 0 && (s = !0);
  const o = this,
    { enabled: d, params: h, animating: S } = o;
  if (!d || o.destroyed) return o;
  typeof r > "u" && (r = o.params.speed);
  let E = h.slidesPerGroup;
  h.slidesPerView === "auto" &&
    h.slidesPerGroup === 1 &&
    h.slidesPerGroupAuto &&
    (E = Math.max(o.slidesPerViewDynamic("current", !0), 1));
  const A = o.activeIndex < h.slidesPerGroupSkip ? 1 : E,
    y = o.virtual && h.virtual.enabled;
  if (h.loop) {
    if (S && !y && h.loopPreventsSliding) return !1;
    if (
      (o.loopFix({ direction: "next" }),
      (o._clientLeft = o.wrapperEl.clientLeft),
      o.activeIndex === o.slides.length - 1 && h.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          o.slideTo(o.activeIndex + A, r, s, c);
        }),
        !0
      );
  }
  return h.rewind && o.isEnd
    ? o.slideTo(0, r, s, c)
    : o.slideTo(o.activeIndex + A, r, s, c);
}
function nv(r, s, c) {
  s === void 0 && (s = !0);
  const o = this,
    {
      params: d,
      snapGrid: h,
      slidesGrid: S,
      rtlTranslate: E,
      enabled: A,
      animating: y,
    } = o;
  if (!A || o.destroyed) return o;
  typeof r > "u" && (r = o.params.speed);
  const T = o.virtual && d.virtual.enabled;
  if (d.loop) {
    if (y && !T && d.loopPreventsSliding) return !1;
    o.loopFix({ direction: "prev" }), (o._clientLeft = o.wrapperEl.clientLeft);
  }
  const O = E ? o.translate : -o.translate;
  function j(W) {
    return W < 0 ? -Math.floor(Math.abs(W)) : Math.floor(W);
  }
  const G = j(O),
    H = h.map((W) => j(W)),
    F = d.freeMode && d.freeMode.enabled;
  let $ = h[H.indexOf(G) - 1];
  if (typeof $ > "u" && (d.cssMode || F)) {
    let W;
    h.forEach((P, ue) => {
      G >= P && (W = ue);
    }),
      typeof W < "u" && ($ = F ? h[W] : h[W > 0 ? W - 1 : W]);
  }
  let Y = 0;
  if (
    (typeof $ < "u" &&
      ((Y = S.indexOf($)),
      Y < 0 && (Y = o.activeIndex - 1),
      d.slidesPerView === "auto" &&
        d.slidesPerGroup === 1 &&
        d.slidesPerGroupAuto &&
        ((Y = Y - o.slidesPerViewDynamic("previous", !0) + 1),
        (Y = Math.max(Y, 0)))),
    d.rewind && o.isBeginning)
  ) {
    const W =
      o.params.virtual && o.params.virtual.enabled && o.virtual
        ? o.virtual.slides.length - 1
        : o.slides.length - 1;
    return o.slideTo(W, r, s, c);
  } else if (d.loop && o.activeIndex === 0 && d.cssMode)
    return (
      requestAnimationFrame(() => {
        o.slideTo(Y, r, s, c);
      }),
      !0
    );
  return o.slideTo(Y, r, s, c);
}
function iv(r, s, c) {
  s === void 0 && (s = !0);
  const o = this;
  if (!o.destroyed)
    return (
      typeof r > "u" && (r = o.params.speed), o.slideTo(o.activeIndex, r, s, c)
    );
}
function lv(r, s, c, o) {
  s === void 0 && (s = !0), o === void 0 && (o = 0.5);
  const d = this;
  if (d.destroyed) return;
  typeof r > "u" && (r = d.params.speed);
  let h = d.activeIndex;
  const S = Math.min(d.params.slidesPerGroupSkip, h),
    E = S + Math.floor((h - S) / d.params.slidesPerGroup),
    A = d.rtlTranslate ? d.translate : -d.translate;
  if (A >= d.snapGrid[E]) {
    const y = d.snapGrid[E],
      T = d.snapGrid[E + 1];
    A - y > (T - y) * o && (h += d.params.slidesPerGroup);
  } else {
    const y = d.snapGrid[E - 1],
      T = d.snapGrid[E];
    A - y <= (T - y) * o && (h -= d.params.slidesPerGroup);
  }
  return (
    (h = Math.max(h, 0)),
    (h = Math.min(h, d.slidesGrid.length - 1)),
    d.slideTo(h, r, s, c)
  );
}
function av() {
  const r = this;
  if (r.destroyed) return;
  const { params: s, slidesEl: c } = r,
    o = s.slidesPerView === "auto" ? r.slidesPerViewDynamic() : s.slidesPerView;
  let d = r.getSlideIndexWhenGrid(r.clickedIndex),
    h;
  const S = r.isElement ? "swiper-slide" : `.${s.slideClass}`,
    E = r.grid && r.params.grid && r.params.grid.rows > 1;
  if (s.loop) {
    if (r.animating) return;
    (h = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      s.centeredSlides
        ? r.slideToLoop(h)
        : d >
          (E
            ? (r.slides.length - o) / 2 - (r.params.grid.rows - 1)
            : r.slides.length - o)
        ? (r.loopFix(),
          (d = r.getSlideIndex(
            $i(c, `${S}[data-swiper-slide-index="${h}"]`)[0]
          )),
          Rp(() => {
            r.slideTo(d);
          }))
        : r.slideTo(d);
  } else r.slideTo(d);
}
var sv = {
  slideTo: $g,
  slideToLoop: ev,
  slideNext: tv,
  slidePrev: nv,
  slideReset: iv,
  slideToClosest: lv,
  slideToClickedSlide: av,
};
function rv(r, s) {
  const c = this,
    { params: o, slidesEl: d } = c;
  if (!o.loop || (c.virtual && c.params.virtual.enabled)) return;
  const h = () => {
      $i(d, `.${o.slideClass}, swiper-slide`).forEach((G, H) => {
        G.setAttribute("data-swiper-slide-index", H);
      });
    },
    S = () => {
      const j = $i(d, `.${o.slideBlankClass}`);
      j.forEach((G) => {
        G.remove();
      }),
        j.length > 0 && (c.recalcSlides(), c.updateSlides());
    },
    E = c.grid && o.grid && o.grid.rows > 1;
  o.loopAddBlankSlides && (o.slidesPerGroup > 1 || E) && S();
  const A = o.slidesPerGroup * (E ? o.grid.rows : 1),
    y = c.slides.length % A !== 0,
    T = E && c.slides.length % o.grid.rows !== 0,
    O = (j) => {
      for (let G = 0; G < j; G += 1) {
        const H = c.isElement
          ? Df("swiper-slide", [o.slideBlankClass])
          : Df("div", [o.slideClass, o.slideBlankClass]);
        c.slidesEl.append(H);
      }
    };
  if (y) {
    if (o.loopAddBlankSlides) {
      const j = A - (c.slides.length % A);
      O(j), c.recalcSlides(), c.updateSlides();
    } else
      Uu(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    h();
  } else if (T) {
    if (o.loopAddBlankSlides) {
      const j = o.grid.rows - (c.slides.length % o.grid.rows);
      O(j), c.recalcSlides(), c.updateSlides();
    } else
      Uu(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    h();
  } else h();
  c.loopFix({
    slideRealIndex: r,
    direction: o.centeredSlides ? void 0 : "next",
    initial: s,
  });
}
function ov(r) {
  let {
    slideRealIndex: s,
    slideTo: c = !0,
    direction: o,
    setTranslate: d,
    activeSlideIndex: h,
    initial: S,
    byController: E,
    byMousewheel: A,
  } = r === void 0 ? {} : r;
  const y = this;
  if (!y.params.loop) return;
  y.emit("beforeLoopFix");
  const {
      slides: T,
      allowSlidePrev: O,
      allowSlideNext: j,
      slidesEl: G,
      params: H,
    } = y,
    { centeredSlides: F, initialSlide: $ } = H;
  if (
    ((y.allowSlidePrev = !0),
    (y.allowSlideNext = !0),
    y.virtual && H.virtual.enabled)
  ) {
    c &&
      (!H.centeredSlides && y.snapIndex === 0
        ? y.slideTo(y.virtual.slides.length, 0, !1, !0)
        : H.centeredSlides && y.snapIndex < H.slidesPerView
        ? y.slideTo(y.virtual.slides.length + y.snapIndex, 0, !1, !0)
        : y.snapIndex === y.snapGrid.length - 1 &&
          y.slideTo(y.virtual.slidesBefore, 0, !1, !0)),
      (y.allowSlidePrev = O),
      (y.allowSlideNext = j),
      y.emit("loopFix");
    return;
  }
  let Y = H.slidesPerView;
  Y === "auto"
    ? (Y = y.slidesPerViewDynamic())
    : ((Y = Math.ceil(parseFloat(H.slidesPerView, 10))),
      F && Y % 2 === 0 && (Y = Y + 1));
  const W = H.slidesPerGroupAuto ? Y : H.slidesPerGroup;
  let P = F ? Math.max(W, Math.ceil(Y / 2)) : W;
  P % W !== 0 && (P += W - (P % W)),
    (P += H.loopAdditionalSlides),
    (y.loopedSlides = P);
  const ue = y.grid && H.grid && H.grid.rows > 1;
  T.length < Y + P || (y.params.effect === "cards" && T.length < Y + P * 2)
    ? Uu(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : ue &&
      H.grid.fill === "row" &&
      Uu(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const I = [],
    ve = [],
    ge = ue ? Math.ceil(T.length / H.grid.rows) : T.length,
    re = S && ge - $ < Y && !F;
  let le = re ? $ : y.activeIndex;
  typeof h > "u"
    ? (h = y.getSlideIndex(
        T.find((z) => z.classList.contains(H.slideActiveClass))
      ))
    : (le = h);
  const ee = o === "next" || !o,
    fe = o === "prev" || !o;
  let he = 0,
    Ge = 0;
  const Qe = (ue ? T[h].column : h) + (F && typeof d > "u" ? -Y / 2 + 0.5 : 0);
  if (Qe < P) {
    he = Math.max(P - Qe, W);
    for (let z = 0; z < P - Qe; z += 1) {
      const K = z - Math.floor(z / ge) * ge;
      if (ue) {
        const Z = ge - K - 1;
        for (let de = T.length - 1; de >= 0; de -= 1)
          T[de].column === Z && I.push(de);
      } else I.push(ge - K - 1);
    }
  } else if (Qe + Y > ge - P) {
    (Ge = Math.max(Qe - (ge - P * 2), W)),
      re && (Ge = Math.max(Ge, Y - ge + $ + 1));
    for (let z = 0; z < Ge; z += 1) {
      const K = z - Math.floor(z / ge) * ge;
      ue
        ? T.forEach((Z, de) => {
            Z.column === K && ve.push(de);
          })
        : ve.push(K);
    }
  }
  if (
    ((y.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      y.__preventObserver__ = !1;
    }),
    y.params.effect === "cards" &&
      T.length < Y + P * 2 &&
      (ve.includes(h) && ve.splice(ve.indexOf(h), 1),
      I.includes(h) && I.splice(I.indexOf(h), 1)),
    fe &&
      I.forEach((z) => {
        (T[z].swiperLoopMoveDOM = !0),
          G.prepend(T[z]),
          (T[z].swiperLoopMoveDOM = !1);
      }),
    ee &&
      ve.forEach((z) => {
        (T[z].swiperLoopMoveDOM = !0),
          G.append(T[z]),
          (T[z].swiperLoopMoveDOM = !1);
      }),
    y.recalcSlides(),
    H.slidesPerView === "auto"
      ? y.updateSlides()
      : ue &&
        ((I.length > 0 && fe) || (ve.length > 0 && ee)) &&
        y.slides.forEach((z, K) => {
          y.grid.updateSlide(K, z, y.slides);
        }),
    H.watchSlidesProgress && y.updateSlidesOffset(),
    c)
  ) {
    if (I.length > 0 && fe) {
      if (typeof s > "u") {
        const z = y.slidesGrid[le],
          Z = y.slidesGrid[le + he] - z;
        A
          ? y.setTranslate(y.translate - Z)
          : (y.slideTo(le + Math.ceil(he), 0, !1, !0),
            d &&
              ((y.touchEventsData.startTranslate =
                y.touchEventsData.startTranslate - Z),
              (y.touchEventsData.currentTranslate =
                y.touchEventsData.currentTranslate - Z)));
      } else if (d) {
        const z = ue ? I.length / H.grid.rows : I.length;
        y.slideTo(y.activeIndex + z, 0, !1, !0),
          (y.touchEventsData.currentTranslate = y.translate);
      }
    } else if (ve.length > 0 && ee)
      if (typeof s > "u") {
        const z = y.slidesGrid[le],
          Z = y.slidesGrid[le - Ge] - z;
        A
          ? y.setTranslate(y.translate - Z)
          : (y.slideTo(le - Ge, 0, !1, !0),
            d &&
              ((y.touchEventsData.startTranslate =
                y.touchEventsData.startTranslate - Z),
              (y.touchEventsData.currentTranslate =
                y.touchEventsData.currentTranslate - Z)));
      } else {
        const z = ue ? ve.length / H.grid.rows : ve.length;
        y.slideTo(y.activeIndex - z, 0, !1, !0);
      }
  }
  if (
    ((y.allowSlidePrev = O),
    (y.allowSlideNext = j),
    y.controller && y.controller.control && !E)
  ) {
    const z = {
      slideRealIndex: s,
      direction: o,
      setTranslate: d,
      activeSlideIndex: h,
      byController: !0,
    };
    Array.isArray(y.controller.control)
      ? y.controller.control.forEach((K) => {
          !K.destroyed &&
            K.params.loop &&
            K.loopFix({
              ...z,
              slideTo: K.params.slidesPerView === H.slidesPerView ? c : !1,
            });
        })
      : y.controller.control instanceof y.constructor &&
        y.controller.control.params.loop &&
        y.controller.control.loopFix({
          ...z,
          slideTo:
            y.controller.control.params.slidesPerView === H.slidesPerView
              ? c
              : !1,
        });
  }
  y.emit("loopFix");
}
function uv() {
  const r = this,
    { params: s, slidesEl: c } = r;
  if (!s.loop || !c || (r.virtual && r.params.virtual.enabled)) return;
  r.recalcSlides();
  const o = [];
  r.slides.forEach((d) => {
    const h =
      typeof d.swiperSlideIndex > "u"
        ? d.getAttribute("data-swiper-slide-index") * 1
        : d.swiperSlideIndex;
    o[h] = d;
  }),
    r.slides.forEach((d) => {
      d.removeAttribute("data-swiper-slide-index");
    }),
    o.forEach((d) => {
      c.append(d);
    }),
    r.recalcSlides(),
    r.slideTo(r.realIndex, 0);
}
var cv = { loopCreate: rv, loopFix: ov, loopDestroy: uv };
function fv(r) {
  const s = this;
  if (
    !s.params.simulateTouch ||
    (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode
  )
    return;
  const c = s.params.touchEventsTarget === "container" ? s.el : s.wrapperEl;
  s.isElement && (s.__preventObserver__ = !0),
    (c.style.cursor = "move"),
    (c.style.cursor = r ? "grabbing" : "grab"),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      });
}
function dv() {
  const r = this;
  (r.params.watchOverflow && r.isLocked) ||
    r.params.cssMode ||
    (r.isElement && (r.__preventObserver__ = !0),
    (r[
      r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    r.isElement &&
      requestAnimationFrame(() => {
        r.__preventObserver__ = !1;
      }));
}
var hv = { setGrabCursor: fv, unsetGrabCursor: dv };
function pv(r, s) {
  s === void 0 && (s = this);
  function c(o) {
    if (!o || o === gi() || o === en()) return null;
    o.assignedSlot && (o = o.assignedSlot);
    const d = o.closest(r);
    return !d && !o.getRootNode ? null : d || c(o.getRootNode().host);
  }
  return c(s);
}
function dp(r, s, c) {
  const o = en(),
    { params: d } = r,
    h = d.edgeSwipeDetection,
    S = d.edgeSwipeThreshold;
  return h && (c <= S || c >= o.innerWidth - S)
    ? h === "prevent"
      ? (s.preventDefault(), !0)
      : !1
    : !0;
}
function mv(r) {
  const s = this,
    c = gi();
  let o = r;
  o.originalEvent && (o = o.originalEvent);
  const d = s.touchEventsData;
  if (o.type === "pointerdown") {
    if (d.pointerId !== null && d.pointerId !== o.pointerId) return;
    d.pointerId = o.pointerId;
  } else
    o.type === "touchstart" &&
      o.targetTouches.length === 1 &&
      (d.touchId = o.targetTouches[0].identifier);
  if (o.type === "touchstart") {
    dp(s, o, o.targetTouches[0].pageX);
    return;
  }
  const { params: h, touches: S, enabled: E } = s;
  if (
    !E ||
    (!h.simulateTouch && o.pointerType === "mouse") ||
    (s.animating && h.preventInteractionOnTransition)
  )
    return;
  !s.animating && h.cssMode && h.loop && s.loopFix();
  let A = o.target;
  if (
    (h.touchEventsTarget === "wrapper" && !Eg(A, s.wrapperEl)) ||
    ("which" in o && o.which === 3) ||
    ("button" in o && o.button > 0) ||
    (d.isTouched && d.isMoved)
  )
    return;
  const y = !!h.noSwipingClass && h.noSwipingClass !== "",
    T = o.composedPath ? o.composedPath() : o.path;
  y && o.target && o.target.shadowRoot && T && (A = T[0]);
  const O = h.noSwipingSelector ? h.noSwipingSelector : `.${h.noSwipingClass}`,
    j = !!(o.target && o.target.shadowRoot);
  if (h.noSwiping && (j ? pv(O, A) : A.closest(O))) {
    s.allowClick = !0;
    return;
  }
  if (h.swipeHandler && !A.closest(h.swipeHandler)) return;
  (S.currentX = o.pageX), (S.currentY = o.pageY);
  const G = S.currentX,
    H = S.currentY;
  if (!dp(s, o, G)) return;
  Object.assign(d, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (S.startX = G),
    (S.startY = H),
    (d.touchStartTime = Bu()),
    (s.allowClick = !0),
    s.updateSize(),
    (s.swipeDirection = void 0),
    h.threshold > 0 && (d.allowThresholdMove = !1);
  let F = !0;
  A.matches(d.focusableElements) &&
    ((F = !1), A.nodeName === "SELECT" && (d.isTouched = !1)),
    c.activeElement &&
      c.activeElement.matches(d.focusableElements) &&
      c.activeElement !== A &&
      (o.pointerType === "mouse" ||
        (o.pointerType !== "mouse" && !A.matches(d.focusableElements))) &&
      c.activeElement.blur();
  const $ = F && s.allowTouchMove && h.touchStartPreventDefault;
  (h.touchStartForcePreventDefault || $) &&
    !A.isContentEditable &&
    o.preventDefault(),
    h.freeMode &&
      h.freeMode.enabled &&
      s.freeMode &&
      s.animating &&
      !h.cssMode &&
      s.freeMode.onTouchStart(),
    s.emit("touchStart", o);
}
function gv(r) {
  const s = gi(),
    c = this,
    o = c.touchEventsData,
    { params: d, touches: h, rtlTranslate: S, enabled: E } = c;
  if (!E || (!d.simulateTouch && r.pointerType === "mouse")) return;
  let A = r;
  if (
    (A.originalEvent && (A = A.originalEvent),
    A.type === "pointermove" &&
      (o.touchId !== null || A.pointerId !== o.pointerId))
  )
    return;
  let y;
  if (A.type === "touchmove") {
    if (
      ((y = [...A.changedTouches].find((I) => I.identifier === o.touchId)),
      !y || y.identifier !== o.touchId)
    )
      return;
  } else y = A;
  if (!o.isTouched) {
    o.startMoving && o.isScrolling && c.emit("touchMoveOpposite", A);
    return;
  }
  const T = y.pageX,
    O = y.pageY;
  if (A.preventedByNestedSwiper) {
    (h.startX = T), (h.startY = O);
    return;
  }
  if (!c.allowTouchMove) {
    A.target.matches(o.focusableElements) || (c.allowClick = !1),
      o.isTouched &&
        (Object.assign(h, { startX: T, startY: O, currentX: T, currentY: O }),
        (o.touchStartTime = Bu()));
    return;
  }
  if (d.touchReleaseOnEdges && !d.loop)
    if (c.isVertical()) {
      if (
        (O < h.startY && c.translate <= c.maxTranslate()) ||
        (O > h.startY && c.translate >= c.minTranslate())
      ) {
        (o.isTouched = !1), (o.isMoved = !1);
        return;
      }
    } else {
      if (
        S &&
        ((T > h.startX && -c.translate <= c.maxTranslate()) ||
          (T < h.startX && -c.translate >= c.minTranslate()))
      )
        return;
      if (
        !S &&
        ((T < h.startX && c.translate <= c.maxTranslate()) ||
          (T > h.startX && c.translate >= c.minTranslate()))
      )
        return;
    }
  if (
    (s.activeElement &&
      s.activeElement.matches(o.focusableElements) &&
      s.activeElement !== A.target &&
      A.pointerType !== "mouse" &&
      s.activeElement.blur(),
    s.activeElement &&
      A.target === s.activeElement &&
      A.target.matches(o.focusableElements))
  ) {
    (o.isMoved = !0), (c.allowClick = !1);
    return;
  }
  o.allowTouchCallbacks && c.emit("touchMove", A),
    (h.previousX = h.currentX),
    (h.previousY = h.currentY),
    (h.currentX = T),
    (h.currentY = O);
  const j = h.currentX - h.startX,
    G = h.currentY - h.startY;
  if (c.params.threshold && Math.sqrt(j ** 2 + G ** 2) < c.params.threshold)
    return;
  if (typeof o.isScrolling > "u") {
    let I;
    (c.isHorizontal() && h.currentY === h.startY) ||
    (c.isVertical() && h.currentX === h.startX)
      ? (o.isScrolling = !1)
      : j * j + G * G >= 25 &&
        ((I = (Math.atan2(Math.abs(G), Math.abs(j)) * 180) / Math.PI),
        (o.isScrolling = c.isHorizontal()
          ? I > d.touchAngle
          : 90 - I > d.touchAngle));
  }
  if (
    (o.isScrolling && c.emit("touchMoveOpposite", A),
    typeof o.startMoving > "u" &&
      (h.currentX !== h.startX || h.currentY !== h.startY) &&
      (o.startMoving = !0),
    o.isScrolling ||
      (A.type === "touchmove" && o.preventTouchMoveFromPointerMove))
  ) {
    o.isTouched = !1;
    return;
  }
  if (!o.startMoving) return;
  (c.allowClick = !1),
    !d.cssMode && A.cancelable && A.preventDefault(),
    d.touchMoveStopPropagation && !d.nested && A.stopPropagation();
  let H = c.isHorizontal() ? j : G,
    F = c.isHorizontal() ? h.currentX - h.previousX : h.currentY - h.previousY;
  d.oneWayMovement &&
    ((H = Math.abs(H) * (S ? 1 : -1)), (F = Math.abs(F) * (S ? 1 : -1))),
    (h.diff = H),
    (H *= d.touchRatio),
    S && ((H = -H), (F = -F));
  const $ = c.touchesDirection;
  (c.swipeDirection = H > 0 ? "prev" : "next"),
    (c.touchesDirection = F > 0 ? "prev" : "next");
  const Y = c.params.loop && !d.cssMode,
    W =
      (c.touchesDirection === "next" && c.allowSlideNext) ||
      (c.touchesDirection === "prev" && c.allowSlidePrev);
  if (!o.isMoved) {
    if (
      (Y && W && c.loopFix({ direction: c.swipeDirection }),
      (o.startTranslate = c.getTranslate()),
      c.setTransition(0),
      c.animating)
    ) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      c.wrapperEl.dispatchEvent(I);
    }
    (o.allowMomentumBounce = !1),
      d.grabCursor &&
        (c.allowSlideNext === !0 || c.allowSlidePrev === !0) &&
        c.setGrabCursor(!0),
      c.emit("sliderFirstMove", A);
  }
  if (
    (new Date().getTime(),
    d._loopSwapReset !== !1 &&
      o.isMoved &&
      o.allowThresholdMove &&
      $ !== c.touchesDirection &&
      Y &&
      W &&
      Math.abs(H) >= 1)
  ) {
    Object.assign(h, {
      startX: T,
      startY: O,
      currentX: T,
      currentY: O,
      startTranslate: o.currentTranslate,
    }),
      (o.loopSwapReset = !0),
      (o.startTranslate = o.currentTranslate);
    return;
  }
  c.emit("sliderMove", A),
    (o.isMoved = !0),
    (o.currentTranslate = H + o.startTranslate);
  let P = !0,
    ue = d.resistanceRatio;
  if (
    (d.touchReleaseOnEdges && (ue = 0),
    H > 0
      ? (Y &&
          W &&
          o.allowThresholdMove &&
          o.currentTranslate >
            (d.centeredSlides
              ? c.minTranslate() -
                c.slidesSizesGrid[c.activeIndex + 1] -
                (d.slidesPerView !== "auto" &&
                c.slides.length - d.slidesPerView >= 2
                  ? c.slidesSizesGrid[c.activeIndex + 1] + c.params.spaceBetween
                  : 0) -
                c.params.spaceBetween
              : c.minTranslate()) &&
          c.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        o.currentTranslate > c.minTranslate() &&
          ((P = !1),
          d.resistance &&
            (o.currentTranslate =
              c.minTranslate() -
              1 +
              (-c.minTranslate() + o.startTranslate + H) ** ue)))
      : H < 0 &&
        (Y &&
          W &&
          o.allowThresholdMove &&
          o.currentTranslate <
            (d.centeredSlides
              ? c.maxTranslate() +
                c.slidesSizesGrid[c.slidesSizesGrid.length - 1] +
                c.params.spaceBetween +
                (d.slidesPerView !== "auto" &&
                c.slides.length - d.slidesPerView >= 2
                  ? c.slidesSizesGrid[c.slidesSizesGrid.length - 1] +
                    c.params.spaceBetween
                  : 0)
              : c.maxTranslate()) &&
          c.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              c.slides.length -
              (d.slidesPerView === "auto"
                ? c.slidesPerViewDynamic()
                : Math.ceil(parseFloat(d.slidesPerView, 10))),
          }),
        o.currentTranslate < c.maxTranslate() &&
          ((P = !1),
          d.resistance &&
            (o.currentTranslate =
              c.maxTranslate() +
              1 -
              (c.maxTranslate() - o.startTranslate - H) ** ue))),
    P && (A.preventedByNestedSwiper = !0),
    !c.allowSlideNext &&
      c.swipeDirection === "next" &&
      o.currentTranslate < o.startTranslate &&
      (o.currentTranslate = o.startTranslate),
    !c.allowSlidePrev &&
      c.swipeDirection === "prev" &&
      o.currentTranslate > o.startTranslate &&
      (o.currentTranslate = o.startTranslate),
    !c.allowSlidePrev &&
      !c.allowSlideNext &&
      (o.currentTranslate = o.startTranslate),
    d.threshold > 0)
  )
    if (Math.abs(H) > d.threshold || o.allowThresholdMove) {
      if (!o.allowThresholdMove) {
        (o.allowThresholdMove = !0),
          (h.startX = h.currentX),
          (h.startY = h.currentY),
          (o.currentTranslate = o.startTranslate),
          (h.diff = c.isHorizontal()
            ? h.currentX - h.startX
            : h.currentY - h.startY);
        return;
      }
    } else {
      o.currentTranslate = o.startTranslate;
      return;
    }
  !d.followFinger ||
    d.cssMode ||
    (((d.freeMode && d.freeMode.enabled && c.freeMode) ||
      d.watchSlidesProgress) &&
      (c.updateActiveIndex(), c.updateSlidesClasses()),
    d.freeMode && d.freeMode.enabled && c.freeMode && c.freeMode.onTouchMove(),
    c.updateProgress(o.currentTranslate),
    c.setTranslate(o.currentTranslate));
}
function vv(r) {
  const s = this,
    c = s.touchEventsData;
  let o = r;
  o.originalEvent && (o = o.originalEvent);
  let d;
  if (o.type === "touchend" || o.type === "touchcancel") {
    if (
      ((d = [...o.changedTouches].find((I) => I.identifier === c.touchId)),
      !d || d.identifier !== c.touchId)
    )
      return;
  } else {
    if (c.touchId !== null || o.pointerId !== c.pointerId) return;
    d = o;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      o.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(o.type) &&
      (s.browser.isSafari || s.browser.isWebView)
    )
  )
    return;
  (c.pointerId = null), (c.touchId = null);
  const {
    params: S,
    touches: E,
    rtlTranslate: A,
    slidesGrid: y,
    enabled: T,
  } = s;
  if (!T || (!S.simulateTouch && o.pointerType === "mouse")) return;
  if (
    (c.allowTouchCallbacks && s.emit("touchEnd", o),
    (c.allowTouchCallbacks = !1),
    !c.isTouched)
  ) {
    c.isMoved && S.grabCursor && s.setGrabCursor(!1),
      (c.isMoved = !1),
      (c.startMoving = !1);
    return;
  }
  S.grabCursor &&
    c.isMoved &&
    c.isTouched &&
    (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
    s.setGrabCursor(!1);
  const O = Bu(),
    j = O - c.touchStartTime;
  if (s.allowClick) {
    const I = o.path || (o.composedPath && o.composedPath());
    s.updateClickedSlide((I && I[0]) || o.target, I),
      s.emit("tap click", o),
      j < 300 &&
        O - c.lastClickTime < 300 &&
        s.emit("doubleTap doubleClick", o);
  }
  if (
    ((c.lastClickTime = Bu()),
    Rp(() => {
      s.destroyed || (s.allowClick = !0);
    }),
    !c.isTouched ||
      !c.isMoved ||
      !s.swipeDirection ||
      (E.diff === 0 && !c.loopSwapReset) ||
      (c.currentTranslate === c.startTranslate && !c.loopSwapReset))
  ) {
    (c.isTouched = !1), (c.isMoved = !1), (c.startMoving = !1);
    return;
  }
  (c.isTouched = !1), (c.isMoved = !1), (c.startMoving = !1);
  let G;
  if (
    (S.followFinger
      ? (G = A ? s.translate : -s.translate)
      : (G = -c.currentTranslate),
    S.cssMode)
  )
    return;
  if (S.freeMode && S.freeMode.enabled) {
    s.freeMode.onTouchEnd({ currentPos: G });
    return;
  }
  const H = G >= -s.maxTranslate() && !s.params.loop;
  let F = 0,
    $ = s.slidesSizesGrid[0];
  for (
    let I = 0;
    I < y.length;
    I += I < S.slidesPerGroupSkip ? 1 : S.slidesPerGroup
  ) {
    const ve = I < S.slidesPerGroupSkip - 1 ? 1 : S.slidesPerGroup;
    typeof y[I + ve] < "u"
      ? (H || (G >= y[I] && G < y[I + ve])) && ((F = I), ($ = y[I + ve] - y[I]))
      : (H || G >= y[I]) && ((F = I), ($ = y[y.length - 1] - y[y.length - 2]));
  }
  let Y = null,
    W = null;
  S.rewind &&
    (s.isBeginning
      ? (W =
          S.virtual && S.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1)
      : s.isEnd && (Y = 0));
  const P = (G - y[F]) / $,
    ue = F < S.slidesPerGroupSkip - 1 ? 1 : S.slidesPerGroup;
  if (j > S.longSwipesMs) {
    if (!S.longSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    s.swipeDirection === "next" &&
      (P >= S.longSwipesRatio
        ? s.slideTo(S.rewind && s.isEnd ? Y : F + ue)
        : s.slideTo(F)),
      s.swipeDirection === "prev" &&
        (P > 1 - S.longSwipesRatio
          ? s.slideTo(F + ue)
          : W !== null && P < 0 && Math.abs(P) > S.longSwipesRatio
          ? s.slideTo(W)
          : s.slideTo(F));
  } else {
    if (!S.shortSwipes) {
      s.slideTo(s.activeIndex);
      return;
    }
    s.navigation &&
    (o.target === s.navigation.nextEl || o.target === s.navigation.prevEl)
      ? o.target === s.navigation.nextEl
        ? s.slideTo(F + ue)
        : s.slideTo(F)
      : (s.swipeDirection === "next" && s.slideTo(Y !== null ? Y : F + ue),
        s.swipeDirection === "prev" && s.slideTo(W !== null ? W : F));
  }
}
function hp() {
  const r = this,
    { params: s, el: c } = r;
  if (c && c.offsetWidth === 0) return;
  s.breakpoints && r.setBreakpoint();
  const { allowSlideNext: o, allowSlidePrev: d, snapGrid: h } = r,
    S = r.virtual && r.params.virtual.enabled;
  (r.allowSlideNext = !0),
    (r.allowSlidePrev = !0),
    r.updateSize(),
    r.updateSlides(),
    r.updateSlidesClasses();
  const E = S && s.loop;
  (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
  r.isEnd &&
  !r.isBeginning &&
  !r.params.centeredSlides &&
  !E
    ? r.slideTo(r.slides.length - 1, 0, !1, !0)
    : r.params.loop && !S
    ? r.slideToLoop(r.realIndex, 0, !1, !0)
    : r.slideTo(r.activeIndex, 0, !1, !0),
    r.autoplay &&
      r.autoplay.running &&
      r.autoplay.paused &&
      (clearTimeout(r.autoplay.resizeTimeout),
      (r.autoplay.resizeTimeout = setTimeout(() => {
        r.autoplay &&
          r.autoplay.running &&
          r.autoplay.paused &&
          r.autoplay.resume();
      }, 500))),
    (r.allowSlidePrev = d),
    (r.allowSlideNext = o),
    r.params.watchOverflow && h !== r.snapGrid && r.checkOverflow();
}
function yv(r) {
  const s = this;
  s.enabled &&
    (s.allowClick ||
      (s.params.preventClicks && r.preventDefault(),
      s.params.preventClicksPropagation &&
        s.animating &&
        (r.stopPropagation(), r.stopImmediatePropagation())));
}
function bv() {
  const r = this,
    { wrapperEl: s, rtlTranslate: c, enabled: o } = r;
  if (!o) return;
  (r.previousTranslate = r.translate),
    r.isHorizontal()
      ? (r.translate = -s.scrollLeft)
      : (r.translate = -s.scrollTop),
    r.translate === 0 && (r.translate = 0),
    r.updateActiveIndex(),
    r.updateSlidesClasses();
  let d;
  const h = r.maxTranslate() - r.minTranslate();
  h === 0 ? (d = 0) : (d = (r.translate - r.minTranslate()) / h),
    d !== r.progress && r.updateProgress(c ? -r.translate : r.translate),
    r.emit("setTranslate", r.translate, !1);
}
function Av(r) {
  const s = this;
  Lu(s, r.target),
    !(
      s.params.cssMode ||
      (s.params.slidesPerView !== "auto" && !s.params.autoHeight)
    ) && s.update();
}
function Sv() {
  const r = this;
  r.documentTouchHandlerProceeded ||
    ((r.documentTouchHandlerProceeded = !0),
    r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const Hp = (r, s) => {
  const c = gi(),
    { params: o, el: d, wrapperEl: h, device: S } = r,
    E = !!o.nested,
    A = s === "on" ? "addEventListener" : "removeEventListener",
    y = s;
  !d ||
    typeof d == "string" ||
    (c[A]("touchstart", r.onDocumentTouchStart, { passive: !1, capture: E }),
    d[A]("touchstart", r.onTouchStart, { passive: !1 }),
    d[A]("pointerdown", r.onTouchStart, { passive: !1 }),
    c[A]("touchmove", r.onTouchMove, { passive: !1, capture: E }),
    c[A]("pointermove", r.onTouchMove, { passive: !1, capture: E }),
    c[A]("touchend", r.onTouchEnd, { passive: !0 }),
    c[A]("pointerup", r.onTouchEnd, { passive: !0 }),
    c[A]("pointercancel", r.onTouchEnd, { passive: !0 }),
    c[A]("touchcancel", r.onTouchEnd, { passive: !0 }),
    c[A]("pointerout", r.onTouchEnd, { passive: !0 }),
    c[A]("pointerleave", r.onTouchEnd, { passive: !0 }),
    c[A]("contextmenu", r.onTouchEnd, { passive: !0 }),
    (o.preventClicks || o.preventClicksPropagation) &&
      d[A]("click", r.onClick, !0),
    o.cssMode && h[A]("scroll", r.onScroll),
    o.updateOnWindowResize
      ? r[y](
          S.ios || S.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          hp,
          !0
        )
      : r[y]("observerUpdate", hp, !0),
    d[A]("load", r.onLoad, { capture: !0 }));
};
function Ev() {
  const r = this,
    { params: s } = r;
  (r.onTouchStart = mv.bind(r)),
    (r.onTouchMove = gv.bind(r)),
    (r.onTouchEnd = vv.bind(r)),
    (r.onDocumentTouchStart = Sv.bind(r)),
    s.cssMode && (r.onScroll = bv.bind(r)),
    (r.onClick = yv.bind(r)),
    (r.onLoad = Av.bind(r)),
    Hp(r, "on");
}
function Tv() {
  Hp(this, "off");
}
var wv = { attachEvents: Ev, detachEvents: Tv };
const pp = (r, s) => r.grid && s.grid && s.grid.rows > 1;
function _v() {
  const r = this,
    { realIndex: s, initialized: c, params: o, el: d } = r,
    h = o.breakpoints;
  if (!h || (h && Object.keys(h).length === 0)) return;
  const S = gi(),
    E =
      o.breakpointsBase === "window" || !o.breakpointsBase
        ? o.breakpointsBase
        : "container",
    A =
      ["window", "container"].includes(o.breakpointsBase) || !o.breakpointsBase
        ? r.el
        : S.querySelector(o.breakpointsBase),
    y = r.getBreakpoint(h, E, A);
  if (!y || r.currentBreakpoint === y) return;
  const O = (y in h ? h[y] : void 0) || r.originalParams,
    j = pp(r, o),
    G = pp(r, O),
    H = r.params.grabCursor,
    F = O.grabCursor,
    $ = o.enabled;
  j && !G
    ? (d.classList.remove(
        `${o.containerModifierClass}grid`,
        `${o.containerModifierClass}grid-column`
      ),
      r.emitContainerClasses())
    : !j &&
      G &&
      (d.classList.add(`${o.containerModifierClass}grid`),
      ((O.grid.fill && O.grid.fill === "column") ||
        (!O.grid.fill && o.grid.fill === "column")) &&
        d.classList.add(`${o.containerModifierClass}grid-column`),
      r.emitContainerClasses()),
    H && !F ? r.unsetGrabCursor() : !H && F && r.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((ve) => {
      if (typeof O[ve] > "u") return;
      const ge = o[ve] && o[ve].enabled,
        re = O[ve] && O[ve].enabled;
      ge && !re && r[ve].disable(), !ge && re && r[ve].enable();
    });
  const Y = O.direction && O.direction !== o.direction,
    W = o.loop && (O.slidesPerView !== o.slidesPerView || Y),
    P = o.loop;
  Y && c && r.changeDirection(), En(r.params, O);
  const ue = r.params.enabled,
    I = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev,
  }),
    $ && !ue ? r.disable() : !$ && ue && r.enable(),
    (r.currentBreakpoint = y),
    r.emit("_beforeBreakpoint", O),
    c &&
      (W
        ? (r.loopDestroy(), r.loopCreate(s), r.updateSlides())
        : !P && I
        ? (r.loopCreate(s), r.updateSlides())
        : P && !I && r.loopDestroy()),
    r.emit("breakpoint", O);
}
function xv(r, s, c) {
  if ((s === void 0 && (s = "window"), !r || (s === "container" && !c))) return;
  let o = !1;
  const d = en(),
    h = s === "window" ? d.innerHeight : c.clientHeight,
    S = Object.keys(r).map((E) => {
      if (typeof E == "string" && E.indexOf("@") === 0) {
        const A = parseFloat(E.substr(1));
        return { value: h * A, point: E };
      }
      return { value: E, point: E };
    });
  S.sort((E, A) => parseInt(E.value, 10) - parseInt(A.value, 10));
  for (let E = 0; E < S.length; E += 1) {
    const { point: A, value: y } = S[E];
    s === "window"
      ? d.matchMedia(`(min-width: ${y}px)`).matches && (o = A)
      : y <= c.clientWidth && (o = A);
  }
  return o || "max";
}
var Ov = { setBreakpoint: _v, getBreakpoint: xv };
function Mv(r, s) {
  const c = [];
  return (
    r.forEach((o) => {
      typeof o == "object"
        ? Object.keys(o).forEach((d) => {
            o[d] && c.push(s + d);
          })
        : typeof o == "string" && c.push(s + o);
    }),
    c
  );
}
function Cv() {
  const r = this,
    { classNames: s, params: c, rtl: o, el: d, device: h } = r,
    S = Mv(
      [
        "initialized",
        c.direction,
        { "free-mode": r.params.freeMode && c.freeMode.enabled },
        { autoheight: c.autoHeight },
        { rtl: o },
        { grid: c.grid && c.grid.rows > 1 },
        {
          "grid-column": c.grid && c.grid.rows > 1 && c.grid.fill === "column",
        },
        { android: h.android },
        { ios: h.ios },
        { "css-mode": c.cssMode },
        { centered: c.cssMode && c.centeredSlides },
        { "watch-progress": c.watchSlidesProgress },
      ],
      c.containerModifierClass
    );
  s.push(...S), d.classList.add(...s), r.emitContainerClasses();
}
function Dv() {
  const r = this,
    { el: s, classNames: c } = r;
  !s ||
    typeof s == "string" ||
    (s.classList.remove(...c), r.emitContainerClasses());
}
var Nv = { addClasses: Cv, removeClasses: Dv };
function zv() {
  const r = this,
    { isLocked: s, params: c } = r,
    { slidesOffsetBefore: o } = c;
  if (o) {
    const d = r.slides.length - 1,
      h = r.slidesGrid[d] + r.slidesSizesGrid[d] + o * 2;
    r.isLocked = r.size > h;
  } else r.isLocked = r.snapGrid.length === 1;
  c.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked),
    c.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked),
    s && s !== r.isLocked && (r.isEnd = !1),
    s !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
var Rv = { checkOverflow: zv },
  zf = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function jv(r, s) {
  return function (o) {
    o === void 0 && (o = {});
    const d = Object.keys(o)[0],
      h = o[d];
    if (typeof h != "object" || h === null) {
      En(s, o);
      return;
    }
    if (
      (r[d] === !0 && (r[d] = { enabled: !0 }),
      d === "navigation" &&
        r[d] &&
        r[d].enabled &&
        !r[d].prevEl &&
        !r[d].nextEl &&
        (r[d].auto = !0),
      ["pagination", "scrollbar"].indexOf(d) >= 0 &&
        r[d] &&
        r[d].enabled &&
        !r[d].el &&
        (r[d].auto = !0),
      !(d in r && "enabled" in h))
    ) {
      En(s, o);
      return;
    }
    typeof r[d] == "object" && !("enabled" in r[d]) && (r[d].enabled = !0),
      r[d] || (r[d] = { enabled: !1 }),
      En(s, o);
  };
}
const wf = {
    eventsEmitter: Ng,
    update: Xg,
    translate: Ig,
    transition: Fg,
    slide: sv,
    loop: cv,
    grabCursor: hv,
    events: wv,
    breakpoints: Ov,
    checkOverflow: Rv,
    classes: Nv,
  },
  _f = {};
let Lf = class Fi {
  constructor() {
    let s, c;
    for (var o = arguments.length, d = new Array(o), h = 0; h < o; h++)
      d[h] = arguments[h];
    d.length === 1 &&
    d[0].constructor &&
    Object.prototype.toString.call(d[0]).slice(8, -1) === "Object"
      ? (c = d[0])
      : ([s, c] = d),
      c || (c = {}),
      (c = En({}, c)),
      s && !c.el && (c.el = s);
    const S = gi();
    if (
      c.el &&
      typeof c.el == "string" &&
      S.querySelectorAll(c.el).length > 1
    ) {
      const T = [];
      return (
        S.querySelectorAll(c.el).forEach((O) => {
          const j = En({}, c, { el: O });
          T.push(new Fi(j));
        }),
        T
      );
    }
    const E = this;
    (E.__swiper__ = !0),
      (E.support = Lp()),
      (E.device = Bp({ userAgent: c.userAgent })),
      (E.browser = Up()),
      (E.eventsListeners = {}),
      (E.eventsAnyListeners = []),
      (E.modules = [...E.__modules__]),
      c.modules && Array.isArray(c.modules) && E.modules.push(...c.modules);
    const A = {};
    E.modules.forEach((T) => {
      T({
        params: c,
        swiper: E,
        extendParams: jv(c, A),
        on: E.on.bind(E),
        once: E.once.bind(E),
        off: E.off.bind(E),
        emit: E.emit.bind(E),
      });
    });
    const y = En({}, zf, A);
    return (
      (E.params = En({}, y, _f, c)),
      (E.originalParams = En({}, E.params)),
      (E.passedParams = En({}, c)),
      E.params &&
        E.params.on &&
        Object.keys(E.params.on).forEach((T) => {
          E.on(T, E.params.on[T]);
        }),
      E.params && E.params.onAny && E.onAny(E.params.onAny),
      Object.assign(E, {
        enabled: E.params.enabled,
        el: s,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return E.params.direction === "horizontal";
        },
        isVertical() {
          return E.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: E.params.allowSlideNext,
        allowSlidePrev: E.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: E.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: E.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      E.emit("_swiper"),
      E.params.init && E.init(),
      E
    );
  }
  getDirectionLabel(s) {
    return this.isHorizontal()
      ? s
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[s];
  }
  getSlideIndex(s) {
    const { slidesEl: c, params: o } = this,
      d = $i(c, `.${o.slideClass}, swiper-slide`),
      h = op(d[0]);
    return op(s) - h;
  }
  getSlideIndexByData(s) {
    return this.getSlideIndex(
      this.slides.find(
        (c) => c.getAttribute("data-swiper-slide-index") * 1 === s
      )
    );
  }
  getSlideIndexWhenGrid(s) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === "column"
          ? (s = Math.floor(s / this.params.grid.rows))
          : this.params.grid.fill === "row" &&
            (s = s % Math.ceil(this.slides.length / this.params.grid.rows))),
      s
    );
  }
  recalcSlides() {
    const s = this,
      { slidesEl: c, params: o } = s;
    s.slides = $i(c, `.${o.slideClass}, swiper-slide`);
  }
  enable() {
    const s = this;
    s.enabled ||
      ((s.enabled = !0),
      s.params.grabCursor && s.setGrabCursor(),
      s.emit("enable"));
  }
  disable() {
    const s = this;
    s.enabled &&
      ((s.enabled = !1),
      s.params.grabCursor && s.unsetGrabCursor(),
      s.emit("disable"));
  }
  setProgress(s, c) {
    const o = this;
    s = Math.min(Math.max(s, 0), 1);
    const d = o.minTranslate(),
      S = (o.maxTranslate() - d) * s + d;
    o.translateTo(S, typeof c > "u" ? 0 : c),
      o.updateActiveIndex(),
      o.updateSlidesClasses();
  }
  emitContainerClasses() {
    const s = this;
    if (!s.params._emitClasses || !s.el) return;
    const c = s.el.className
      .split(" ")
      .filter(
        (o) =>
          o.indexOf("swiper") === 0 ||
          o.indexOf(s.params.containerModifierClass) === 0
      );
    s.emit("_containerClasses", c.join(" "));
  }
  getSlideClasses(s) {
    const c = this;
    return c.destroyed
      ? ""
      : s.className
          .split(" ")
          .filter(
            (o) =>
              o.indexOf("swiper-slide") === 0 ||
              o.indexOf(c.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const s = this;
    if (!s.params._emitClasses || !s.el) return;
    const c = [];
    s.slides.forEach((o) => {
      const d = s.getSlideClasses(o);
      c.push({ slideEl: o, classNames: d }), s.emit("_slideClass", o, d);
    }),
      s.emit("_slideClasses", c);
  }
  slidesPerViewDynamic(s, c) {
    s === void 0 && (s = "current"), c === void 0 && (c = !1);
    const o = this,
      {
        params: d,
        slides: h,
        slidesGrid: S,
        slidesSizesGrid: E,
        size: A,
        activeIndex: y,
      } = o;
    let T = 1;
    if (typeof d.slidesPerView == "number") return d.slidesPerView;
    if (d.centeredSlides) {
      let O = h[y] ? Math.ceil(h[y].swiperSlideSize) : 0,
        j;
      for (let G = y + 1; G < h.length; G += 1)
        h[G] &&
          !j &&
          ((O += Math.ceil(h[G].swiperSlideSize)), (T += 1), O > A && (j = !0));
      for (let G = y - 1; G >= 0; G -= 1)
        h[G] &&
          !j &&
          ((O += h[G].swiperSlideSize), (T += 1), O > A && (j = !0));
    } else if (s === "current")
      for (let O = y + 1; O < h.length; O += 1)
        (c ? S[O] + E[O] - S[y] < A : S[O] - S[y] < A) && (T += 1);
    else for (let O = y - 1; O >= 0; O -= 1) S[y] - S[O] < A && (T += 1);
    return T;
  }
  update() {
    const s = this;
    if (!s || s.destroyed) return;
    const { snapGrid: c, params: o } = s;
    o.breakpoints && s.setBreakpoint(),
      [...s.el.querySelectorAll('[loading="lazy"]')].forEach((S) => {
        S.complete && Lu(s, S);
      }),
      s.updateSize(),
      s.updateSlides(),
      s.updateProgress(),
      s.updateSlidesClasses();
    function d() {
      const S = s.rtlTranslate ? s.translate * -1 : s.translate,
        E = Math.min(Math.max(S, s.maxTranslate()), s.minTranslate());
      s.setTranslate(E), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    let h;
    if (o.freeMode && o.freeMode.enabled && !o.cssMode)
      d(), o.autoHeight && s.updateAutoHeight();
    else {
      if (
        (o.slidesPerView === "auto" || o.slidesPerView > 1) &&
        s.isEnd &&
        !o.centeredSlides
      ) {
        const S = s.virtual && o.virtual.enabled ? s.virtual.slides : s.slides;
        h = s.slideTo(S.length - 1, 0, !1, !0);
      } else h = s.slideTo(s.activeIndex, 0, !1, !0);
      h || d();
    }
    o.watchOverflow && c !== s.snapGrid && s.checkOverflow(), s.emit("update");
  }
  changeDirection(s, c) {
    c === void 0 && (c = !0);
    const o = this,
      d = o.params.direction;
    return (
      s || (s = d === "horizontal" ? "vertical" : "horizontal"),
      s === d ||
        (s !== "horizontal" && s !== "vertical") ||
        (o.el.classList.remove(`${o.params.containerModifierClass}${d}`),
        o.el.classList.add(`${o.params.containerModifierClass}${s}`),
        o.emitContainerClasses(),
        (o.params.direction = s),
        o.slides.forEach((h) => {
          s === "vertical" ? (h.style.width = "") : (h.style.height = "");
        }),
        o.emit("changeDirection"),
        c && o.update()),
      o
    );
  }
  changeLanguageDirection(s) {
    const c = this;
    (c.rtl && s === "rtl") ||
      (!c.rtl && s === "ltr") ||
      ((c.rtl = s === "rtl"),
      (c.rtlTranslate = c.params.direction === "horizontal" && c.rtl),
      c.rtl
        ? (c.el.classList.add(`${c.params.containerModifierClass}rtl`),
          (c.el.dir = "rtl"))
        : (c.el.classList.remove(`${c.params.containerModifierClass}rtl`),
          (c.el.dir = "ltr")),
      c.update());
  }
  mount(s) {
    const c = this;
    if (c.mounted) return !0;
    let o = s || c.params.el;
    if ((typeof o == "string" && (o = document.querySelector(o)), !o))
      return !1;
    (o.swiper = c),
      o.parentNode &&
        o.parentNode.host &&
        o.parentNode.host.nodeName ===
          c.params.swiperElementNodeName.toUpperCase() &&
        (c.isElement = !0);
    const d = () =>
      `.${(c.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let S =
      o && o.shadowRoot && o.shadowRoot.querySelector
        ? o.shadowRoot.querySelector(d())
        : $i(o, d())[0];
    return (
      !S &&
        c.params.createElements &&
        ((S = Df("div", c.params.wrapperClass)),
        o.append(S),
        $i(o, `.${c.params.slideClass}`).forEach((E) => {
          S.append(E);
        })),
      Object.assign(c, {
        el: o,
        wrapperEl: S,
        slidesEl:
          c.isElement && !o.parentNode.host.slideSlots ? o.parentNode.host : S,
        hostEl: c.isElement ? o.parentNode.host : o,
        mounted: !0,
        rtl: o.dir.toLowerCase() === "rtl" || ql(o, "direction") === "rtl",
        rtlTranslate:
          c.params.direction === "horizontal" &&
          (o.dir.toLowerCase() === "rtl" || ql(o, "direction") === "rtl"),
        wrongRTL: ql(S, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(s) {
    const c = this;
    if (c.initialized || c.mount(s) === !1) return c;
    c.emit("beforeInit"),
      c.params.breakpoints && c.setBreakpoint(),
      c.addClasses(),
      c.updateSize(),
      c.updateSlides(),
      c.params.watchOverflow && c.checkOverflow(),
      c.params.grabCursor && c.enabled && c.setGrabCursor(),
      c.params.loop && c.virtual && c.params.virtual.enabled
        ? c.slideTo(
            c.params.initialSlide + c.virtual.slidesBefore,
            0,
            c.params.runCallbacksOnInit,
            !1,
            !0
          )
        : c.slideTo(
            c.params.initialSlide,
            0,
            c.params.runCallbacksOnInit,
            !1,
            !0
          ),
      c.params.loop && c.loopCreate(void 0, !0),
      c.attachEvents();
    const d = [...c.el.querySelectorAll('[loading="lazy"]')];
    return (
      c.isElement && d.push(...c.hostEl.querySelectorAll('[loading="lazy"]')),
      d.forEach((h) => {
        h.complete
          ? Lu(c, h)
          : h.addEventListener("load", (S) => {
              Lu(c, S.target);
            });
      }),
      Nf(c),
      (c.initialized = !0),
      Nf(c),
      c.emit("init"),
      c.emit("afterInit"),
      c
    );
  }
  destroy(s, c) {
    s === void 0 && (s = !0), c === void 0 && (c = !0);
    const o = this,
      { params: d, el: h, wrapperEl: S, slides: E } = o;
    return (
      typeof o.params > "u" ||
        o.destroyed ||
        (o.emit("beforeDestroy"),
        (o.initialized = !1),
        o.detachEvents(),
        d.loop && o.loopDestroy(),
        c &&
          (o.removeClasses(),
          h && typeof h != "string" && h.removeAttribute("style"),
          S && S.removeAttribute("style"),
          E &&
            E.length &&
            E.forEach((A) => {
              A.classList.remove(
                d.slideVisibleClass,
                d.slideFullyVisibleClass,
                d.slideActiveClass,
                d.slideNextClass,
                d.slidePrevClass
              ),
                A.removeAttribute("style"),
                A.removeAttribute("data-swiper-slide-index");
            })),
        o.emit("destroy"),
        Object.keys(o.eventsListeners).forEach((A) => {
          o.off(A);
        }),
        s !== !1 &&
          (o.el && typeof o.el != "string" && (o.el.swiper = null), vg(o)),
        (o.destroyed = !0)),
      null
    );
  }
  static extendDefaults(s) {
    En(_f, s);
  }
  static get extendedDefaults() {
    return _f;
  }
  static get defaults() {
    return zf;
  }
  static installModule(s) {
    Fi.prototype.__modules__ || (Fi.prototype.__modules__ = []);
    const c = Fi.prototype.__modules__;
    typeof s == "function" && c.indexOf(s) < 0 && c.push(s);
  }
  static use(s) {
    return Array.isArray(s)
      ? (s.forEach((c) => Fi.installModule(c)), Fi)
      : (Fi.installModule(s), Fi);
  }
};
Object.keys(wf).forEach((r) => {
  Object.keys(wf[r]).forEach((s) => {
    Lf.prototype[s] = wf[r][s];
  });
});
Lf.use([Cg, Dg]);
const Yp = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function ga(r) {
  return (
    typeof r == "object" &&
    r !== null &&
    r.constructor &&
    Object.prototype.toString.call(r).slice(8, -1) === "Object" &&
    !r.__swiper__
  );
}
function hs(r, s) {
  const c = ["__proto__", "constructor", "prototype"];
  Object.keys(s)
    .filter((o) => c.indexOf(o) < 0)
    .forEach((o) => {
      typeof r[o] > "u"
        ? (r[o] = s[o])
        : ga(s[o]) && ga(r[o]) && Object.keys(s[o]).length > 0
        ? s[o].__swiper__
          ? (r[o] = s[o])
          : hs(r[o], s[o])
        : (r[o] = s[o]);
    });
}
function Vp(r) {
  return (
    r === void 0 && (r = {}),
    r.navigation &&
      typeof r.navigation.nextEl > "u" &&
      typeof r.navigation.prevEl > "u"
  );
}
function Xp(r) {
  return r === void 0 && (r = {}), r.pagination && typeof r.pagination.el > "u";
}
function qp(r) {
  return r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > "u";
}
function Qp(r) {
  r === void 0 && (r = "");
  const s = r
      .split(" ")
      .map((o) => o.trim())
      .filter((o) => !!o),
    c = [];
  return (
    s.forEach((o) => {
      c.indexOf(o) < 0 && c.push(o);
    }),
    c.join(" ")
  );
}
function Lv(r) {
  return (
    r === void 0 && (r = ""),
    r
      ? r.includes("swiper-wrapper")
        ? r
        : `swiper-wrapper ${r}`
      : "swiper-wrapper"
  );
}
function Bv(r) {
  let {
    swiper: s,
    slides: c,
    passedParams: o,
    changedParams: d,
    nextEl: h,
    prevEl: S,
    scrollbarEl: E,
    paginationEl: A,
  } = r;
  const y = d.filter(
      (le) => le !== "children" && le !== "direction" && le !== "wrapperClass"
    ),
    {
      params: T,
      pagination: O,
      navigation: j,
      scrollbar: G,
      virtual: H,
      thumbs: F,
    } = s;
  let $, Y, W, P, ue, I, ve, ge;
  d.includes("thumbs") &&
    o.thumbs &&
    o.thumbs.swiper &&
    !o.thumbs.swiper.destroyed &&
    T.thumbs &&
    (!T.thumbs.swiper || T.thumbs.swiper.destroyed) &&
    ($ = !0),
    d.includes("controller") &&
      o.controller &&
      o.controller.control &&
      T.controller &&
      !T.controller.control &&
      (Y = !0),
    d.includes("pagination") &&
      o.pagination &&
      (o.pagination.el || A) &&
      (T.pagination || T.pagination === !1) &&
      O &&
      !O.el &&
      (W = !0),
    d.includes("scrollbar") &&
      o.scrollbar &&
      (o.scrollbar.el || E) &&
      (T.scrollbar || T.scrollbar === !1) &&
      G &&
      !G.el &&
      (P = !0),
    d.includes("navigation") &&
      o.navigation &&
      (o.navigation.prevEl || S) &&
      (o.navigation.nextEl || h) &&
      (T.navigation || T.navigation === !1) &&
      j &&
      !j.prevEl &&
      !j.nextEl &&
      (ue = !0);
  const re = (le) => {
    s[le] &&
      (s[le].destroy(),
      le === "navigation"
        ? (s.isElement && (s[le].prevEl.remove(), s[le].nextEl.remove()),
          (T[le].prevEl = void 0),
          (T[le].nextEl = void 0),
          (s[le].prevEl = void 0),
          (s[le].nextEl = void 0))
        : (s.isElement && s[le].el.remove(),
          (T[le].el = void 0),
          (s[le].el = void 0)));
  };
  d.includes("loop") &&
    s.isElement &&
    (T.loop && !o.loop ? (I = !0) : !T.loop && o.loop ? (ve = !0) : (ge = !0)),
    y.forEach((le) => {
      if (ga(T[le]) && ga(o[le]))
        Object.assign(T[le], o[le]),
          (le === "navigation" || le === "pagination" || le === "scrollbar") &&
            "enabled" in o[le] &&
            !o[le].enabled &&
            re(le);
      else {
        const ee = o[le];
        (ee === !0 || ee === !1) &&
        (le === "navigation" || le === "pagination" || le === "scrollbar")
          ? ee === !1 && re(le)
          : (T[le] = o[le]);
      }
    }),
    y.includes("controller") &&
      !Y &&
      s.controller &&
      s.controller.control &&
      T.controller &&
      T.controller.control &&
      (s.controller.control = T.controller.control),
    d.includes("children") && c && H && T.virtual.enabled
      ? ((H.slides = c), H.update(!0))
      : d.includes("virtual") &&
        H &&
        T.virtual.enabled &&
        (c && (H.slides = c), H.update(!0)),
    d.includes("children") && c && T.loop && (ge = !0),
    $ && F.init() && F.update(!0),
    Y && (s.controller.control = T.controller.control),
    W &&
      (s.isElement &&
        (!A || typeof A == "string") &&
        ((A = document.createElement("div")),
        A.classList.add("swiper-pagination"),
        A.part.add("pagination"),
        s.el.appendChild(A)),
      A && (T.pagination.el = A),
      O.init(),
      O.render(),
      O.update()),
    P &&
      (s.isElement &&
        (!E || typeof E == "string") &&
        ((E = document.createElement("div")),
        E.classList.add("swiper-scrollbar"),
        E.part.add("scrollbar"),
        s.el.appendChild(E)),
      E && (T.scrollbar.el = E),
      G.init(),
      G.updateSize(),
      G.setTranslate()),
    ue &&
      (s.isElement &&
        ((!h || typeof h == "string") &&
          ((h = document.createElement("div")),
          h.classList.add("swiper-button-next"),
          cp(h, s.hostEl.constructor.nextButtonSvg),
          h.part.add("button-next"),
          s.el.appendChild(h)),
        (!S || typeof S == "string") &&
          ((S = document.createElement("div")),
          S.classList.add("swiper-button-prev"),
          cp(S, s.hostEl.constructor.prevButtonSvg),
          S.part.add("button-prev"),
          s.el.appendChild(S))),
      h && (T.navigation.nextEl = h),
      S && (T.navigation.prevEl = S),
      j.init(),
      j.update()),
    d.includes("allowSlideNext") && (s.allowSlideNext = o.allowSlideNext),
    d.includes("allowSlidePrev") && (s.allowSlidePrev = o.allowSlidePrev),
    d.includes("direction") && s.changeDirection(o.direction, !1),
    (I || ge) && s.loopDestroy(),
    (ve || ge) && s.loopCreate(),
    s.update();
}
function Uv(r, s) {
  r === void 0 && (r = {}), s === void 0 && (s = !0);
  const c = { on: {} },
    o = {},
    d = {};
  hs(c, zf), (c._emitClasses = !0), (c.init = !1);
  const h = {},
    S = Yp.map((A) => A.replace(/_/, "")),
    E = Object.assign({}, r);
  return (
    Object.keys(E).forEach((A) => {
      typeof r[A] > "u" ||
        (S.indexOf(A) >= 0
          ? ga(r[A])
            ? ((c[A] = {}), (d[A] = {}), hs(c[A], r[A]), hs(d[A], r[A]))
            : ((c[A] = r[A]), (d[A] = r[A]))
          : A.search(/on[A-Z]/) === 0 && typeof r[A] == "function"
          ? s
            ? (o[`${A[2].toLowerCase()}${A.substr(3)}`] = r[A])
            : (c.on[`${A[2].toLowerCase()}${A.substr(3)}`] = r[A])
          : (h[A] = r[A]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((A) => {
      c[A] === !0 && (c[A] = {}), c[A] === !1 && delete c[A];
    }),
    { params: c, passedParams: d, rest: h, events: o }
  );
}
function Gv(r, s) {
  let {
    el: c,
    nextEl: o,
    prevEl: d,
    paginationEl: h,
    scrollbarEl: S,
    swiper: E,
  } = r;
  Vp(s) &&
    o &&
    d &&
    ((E.params.navigation.nextEl = o),
    (E.originalParams.navigation.nextEl = o),
    (E.params.navigation.prevEl = d),
    (E.originalParams.navigation.prevEl = d)),
    Xp(s) &&
      h &&
      ((E.params.pagination.el = h), (E.originalParams.pagination.el = h)),
    qp(s) &&
      S &&
      ((E.params.scrollbar.el = S), (E.originalParams.scrollbar.el = S)),
    E.init(c);
}
function Hv(r, s, c, o, d) {
  const h = [];
  if (!s) return h;
  const S = (A) => {
    h.indexOf(A) < 0 && h.push(A);
  };
  if (c && o) {
    const A = o.map(d),
      y = c.map(d);
    A.join("") !== y.join("") && S("children"),
      o.length !== c.length && S("children");
  }
  return (
    Yp.filter((A) => A[0] === "_")
      .map((A) => A.replace(/_/, ""))
      .forEach((A) => {
        if (A in r && A in s)
          if (ga(r[A]) && ga(s[A])) {
            const y = Object.keys(r[A]),
              T = Object.keys(s[A]);
            y.length !== T.length
              ? S(A)
              : (y.forEach((O) => {
                  r[A][O] !== s[A][O] && S(A);
                }),
                T.forEach((O) => {
                  r[A][O] !== s[A][O] && S(A);
                }));
          } else r[A] !== s[A] && S(A);
      }),
    h
  );
}
const Yv = (r) => {
  !r ||
    r.destroyed ||
    !r.params.virtual ||
    (r.params.virtual && !r.params.virtual.enabled) ||
    (r.updateSlides(),
    r.updateProgress(),
    r.updateSlidesClasses(),
    r.emit("_virtualUpdated"),
    r.parallax &&
      r.params.parallax &&
      r.params.parallax.enabled &&
      r.parallax.setTranslate());
};
function Gu() {
  return (
    (Gu = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var s = 1; s < arguments.length; s++) {
            var c = arguments[s];
            for (var o in c)
              Object.prototype.hasOwnProperty.call(c, o) && (r[o] = c[o]);
          }
          return r;
        }),
    Gu.apply(this, arguments)
  );
}
function kp(r) {
  return (
    r.type && r.type.displayName && r.type.displayName.includes("SwiperSlide")
  );
}
function Zp(r) {
  const s = [];
  return (
    Tt.Children.toArray(r).forEach((c) => {
      kp(c)
        ? s.push(c)
        : c.props &&
          c.props.children &&
          Zp(c.props.children).forEach((o) => s.push(o));
    }),
    s
  );
}
function Vv(r) {
  const s = [],
    c = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Tt.Children.toArray(r).forEach((o) => {
      if (kp(o)) s.push(o);
      else if (o.props && o.props.slot && c[o.props.slot])
        c[o.props.slot].push(o);
      else if (o.props && o.props.children) {
        const d = Zp(o.props.children);
        d.length > 0 ? d.forEach((h) => s.push(h)) : c["container-end"].push(o);
      } else c["container-end"].push(o);
    }),
    { slides: s, slots: c }
  );
}
function Xv(r, s, c) {
  if (!c) return null;
  const o = (T) => {
      let O = T;
      return (
        T < 0 ? (O = s.length + T) : O >= s.length && (O = O - s.length), O
      );
    },
    d = r.isHorizontal()
      ? { [r.rtlTranslate ? "right" : "left"]: `${c.offset}px` }
      : { top: `${c.offset}px` },
    { from: h, to: S } = c,
    E = r.params.loop ? -s.length : 0,
    A = r.params.loop ? s.length * 2 : s.length,
    y = [];
  for (let T = E; T < A; T += 1) T >= h && T <= S && y.push(s[o(T)]);
  return y.map((T, O) =>
    Tt.cloneElement(T, {
      swiper: r,
      style: d,
      key: T.props.virtualIndex || T.key || `slide-${O}`,
    })
  );
}
function Yr(r, s) {
  return typeof window > "u" ? qe.useEffect(r, s) : qe.useLayoutEffect(r, s);
}
const mp = qe.createContext(null),
  qv = qe.createContext(null),
  Vr = qe.forwardRef(function (r, s) {
    let {
        className: c,
        tag: o = "div",
        wrapperTag: d = "div",
        children: h,
        onSwiper: S,
        ...E
      } = r === void 0 ? {} : r,
      A = !1;
    const [y, T] = qe.useState("swiper"),
      [O, j] = qe.useState(null),
      [G, H] = qe.useState(!1),
      F = qe.useRef(!1),
      $ = qe.useRef(null),
      Y = qe.useRef(null),
      W = qe.useRef(null),
      P = qe.useRef(null),
      ue = qe.useRef(null),
      I = qe.useRef(null),
      ve = qe.useRef(null),
      ge = qe.useRef(null),
      { params: re, passedParams: le, rest: ee, events: fe } = Uv(E),
      { slides: he, slots: Ge } = Vv(h),
      lt = () => {
        H(!G);
      };
    Object.assign(re.on, {
      _containerClasses(de, v) {
        T(v);
      },
    });
    const Qe = () => {
      Object.assign(re.on, fe), (A = !0);
      const de = { ...re };
      if (
        (delete de.wrapperClass,
        (Y.current = new Lf(de)),
        Y.current.virtual && Y.current.params.virtual.enabled)
      ) {
        Y.current.virtual.slides = he;
        const v = {
          cache: !1,
          slides: he,
          renderExternal: j,
          renderExternalUpdate: !1,
        };
        hs(Y.current.params.virtual, v),
          hs(Y.current.originalParams.virtual, v);
      }
    };
    $.current || Qe(), Y.current && Y.current.on("_beforeBreakpoint", lt);
    const z = () => {
        A ||
          !fe ||
          !Y.current ||
          Object.keys(fe).forEach((de) => {
            Y.current.on(de, fe[de]);
          });
      },
      K = () => {
        !fe ||
          !Y.current ||
          Object.keys(fe).forEach((de) => {
            Y.current.off(de, fe[de]);
          });
      };
    qe.useEffect(() => () => {
      Y.current && Y.current.off("_beforeBreakpoint", lt);
    }),
      qe.useEffect(() => {
        !F.current &&
          Y.current &&
          (Y.current.emitSlidesClasses(), (F.current = !0));
      }),
      Yr(() => {
        if ((s && (s.current = $.current), !!$.current))
          return (
            Y.current.destroyed && Qe(),
            Gv(
              {
                el: $.current,
                nextEl: ue.current,
                prevEl: I.current,
                paginationEl: ve.current,
                scrollbarEl: ge.current,
                swiper: Y.current,
              },
              re
            ),
            S && !Y.current.destroyed && S(Y.current),
            () => {
              Y.current && !Y.current.destroyed && Y.current.destroy(!0, !1);
            }
          );
      }, []),
      Yr(() => {
        z();
        const de = Hv(le, W.current, he, P.current, (v) => v.key);
        return (
          (W.current = le),
          (P.current = he),
          de.length &&
            Y.current &&
            !Y.current.destroyed &&
            Bv({
              swiper: Y.current,
              slides: he,
              passedParams: le,
              changedParams: de,
              nextEl: ue.current,
              prevEl: I.current,
              scrollbarEl: ge.current,
              paginationEl: ve.current,
            }),
          () => {
            K();
          }
        );
      }),
      Yr(() => {
        Yv(Y.current);
      }, [O]);
    function Z() {
      return re.virtual
        ? Xv(Y.current, he, O)
        : he.map((de, v) =>
            Tt.cloneElement(de, { swiper: Y.current, swiperSlideIndex: v })
          );
    }
    return Tt.createElement(
      o,
      Gu({ ref: $, className: Qp(`${y}${c ? ` ${c}` : ""}`) }, ee),
      Tt.createElement(
        qv.Provider,
        { value: Y.current },
        Ge["container-start"],
        Tt.createElement(
          d,
          { className: Lv(re.wrapperClass) },
          Ge["wrapper-start"],
          Z(),
          Ge["wrapper-end"]
        ),
        Vp(re) &&
          Tt.createElement(
            Tt.Fragment,
            null,
            Tt.createElement("div", {
              ref: I,
              className: "swiper-button-prev",
            }),
            Tt.createElement("div", {
              ref: ue,
              className: "swiper-button-next",
            })
          ),
        qp(re) &&
          Tt.createElement("div", { ref: ge, className: "swiper-scrollbar" }),
        Xp(re) &&
          Tt.createElement("div", { ref: ve, className: "swiper-pagination" }),
        Ge["container-end"]
      )
    );
  });
Vr.displayName = "Swiper";
const Xr = qe.forwardRef(function (r, s) {
  let {
    tag: c = "div",
    children: o,
    className: d = "",
    swiper: h,
    zoom: S,
    lazy: E,
    virtualIndex: A,
    swiperSlideIndex: y,
    ...T
  } = r === void 0 ? {} : r;
  const O = qe.useRef(null),
    [j, G] = qe.useState("swiper-slide"),
    [H, F] = qe.useState(!1);
  function $(ue, I, ve) {
    I === O.current && G(ve);
  }
  Yr(() => {
    if (
      (typeof y < "u" && (O.current.swiperSlideIndex = y),
      s && (s.current = O.current),
      !(!O.current || !h))
    ) {
      if (h.destroyed) {
        j !== "swiper-slide" && G("swiper-slide");
        return;
      }
      return (
        h.on("_slideClass", $),
        () => {
          h && h.off("_slideClass", $);
        }
      );
    }
  }),
    Yr(() => {
      h && O.current && !h.destroyed && G(h.getSlideClasses(O.current));
    }, [h]);
  const Y = {
      isActive: j.indexOf("swiper-slide-active") >= 0,
      isVisible: j.indexOf("swiper-slide-visible") >= 0,
      isPrev: j.indexOf("swiper-slide-prev") >= 0,
      isNext: j.indexOf("swiper-slide-next") >= 0,
    },
    W = () => (typeof o == "function" ? o(Y) : o),
    P = () => {
      F(!0);
    };
  return Tt.createElement(
    c,
    Gu(
      {
        ref: O,
        className: Qp(`${j}${d ? ` ${d}` : ""}`),
        "data-swiper-slide-index": A,
        onLoad: P,
      },
      T
    ),
    S &&
      Tt.createElement(
        mp.Provider,
        { value: Y },
        Tt.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof S == "number" ? S : void 0,
          },
          W(),
          E &&
            !H &&
            Tt.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !S &&
      Tt.createElement(
        mp.Provider,
        { value: Y },
        W(),
        E &&
          !H &&
          Tt.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Xr.displayName = "SwiperSlide";
function Hu(r) {
  let { swiper: s, extendParams: c, on: o, emit: d, params: h } = r;
  (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    c({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let S,
    E,
    A = h && h.autoplay ? h.autoplay.delay : 3e3,
    y = h && h.autoplay ? h.autoplay.delay : 3e3,
    T,
    O = new Date().getTime(),
    j,
    G,
    H,
    F,
    $,
    Y,
    W;
  function P(Z) {
    !s ||
      s.destroyed ||
      !s.wrapperEl ||
      (Z.target === s.wrapperEl &&
        (s.wrapperEl.removeEventListener("transitionend", P),
        !(W || (Z.detail && Z.detail.bySwiperTouchMove)) && ee()));
  }
  const ue = () => {
      if (s.destroyed || !s.autoplay.running) return;
      s.autoplay.paused ? (j = !0) : j && ((y = T), (j = !1));
      const Z = s.autoplay.paused ? T : O + y - new Date().getTime();
      (s.autoplay.timeLeft = Z),
        d("autoplayTimeLeft", Z, Z / A),
        (E = requestAnimationFrame(() => {
          ue();
        }));
    },
    I = () => {
      let Z;
      return (
        s.virtual && s.params.virtual.enabled
          ? (Z = s.slides.find((v) =>
              v.classList.contains("swiper-slide-active")
            ))
          : (Z = s.slides[s.activeIndex]),
        Z ? parseInt(Z.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    ve = (Z) => {
      if (s.destroyed || !s.autoplay.running) return;
      cancelAnimationFrame(E), ue();
      let de = typeof Z > "u" ? s.params.autoplay.delay : Z;
      (A = s.params.autoplay.delay), (y = s.params.autoplay.delay);
      const v = I();
      !Number.isNaN(v) &&
        v > 0 &&
        typeof Z > "u" &&
        ((de = v), (A = v), (y = v)),
        (T = de);
      const Q = s.params.speed,
        ae = () => {
          !s ||
            s.destroyed ||
            (s.params.autoplay.reverseDirection
              ? !s.isBeginning || s.params.loop || s.params.rewind
                ? (s.slidePrev(Q, !0, !0), d("autoplay"))
                : s.params.autoplay.stopOnLastSlide ||
                  (s.slideTo(s.slides.length - 1, Q, !0, !0), d("autoplay"))
              : !s.isEnd || s.params.loop || s.params.rewind
              ? (s.slideNext(Q, !0, !0), d("autoplay"))
              : s.params.autoplay.stopOnLastSlide ||
                (s.slideTo(0, Q, !0, !0), d("autoplay")),
            s.params.cssMode &&
              ((O = new Date().getTime()),
              requestAnimationFrame(() => {
                ve();
              })));
        };
      return (
        de > 0
          ? (clearTimeout(S),
            (S = setTimeout(() => {
              ae();
            }, de)))
          : requestAnimationFrame(() => {
              ae();
            }),
        de
      );
    },
    ge = () => {
      (O = new Date().getTime()),
        (s.autoplay.running = !0),
        ve(),
        d("autoplayStart");
    },
    re = () => {
      (s.autoplay.running = !1),
        clearTimeout(S),
        cancelAnimationFrame(E),
        d("autoplayStop");
    },
    le = (Z, de) => {
      if (s.destroyed || !s.autoplay.running) return;
      clearTimeout(S), Z || (Y = !0);
      const v = () => {
        d("autoplayPause"),
          s.params.autoplay.waitForTransition
            ? s.wrapperEl.addEventListener("transitionend", P)
            : ee();
      };
      if (((s.autoplay.paused = !0), de)) {
        $ && (T = s.params.autoplay.delay), ($ = !1), v();
        return;
      }
      (T = (T || s.params.autoplay.delay) - (new Date().getTime() - O)),
        !(s.isEnd && T < 0 && !s.params.loop) && (T < 0 && (T = 0), v());
    },
    ee = () => {
      (s.isEnd && T < 0 && !s.params.loop) ||
        s.destroyed ||
        !s.autoplay.running ||
        ((O = new Date().getTime()),
        Y ? ((Y = !1), ve(T)) : ve(),
        (s.autoplay.paused = !1),
        d("autoplayResume"));
    },
    fe = () => {
      if (s.destroyed || !s.autoplay.running) return;
      const Z = gi();
      Z.visibilityState === "hidden" && ((Y = !0), le(!0)),
        Z.visibilityState === "visible" && ee();
    },
    he = (Z) => {
      Z.pointerType === "mouse" &&
        ((Y = !0), (W = !0), !(s.animating || s.autoplay.paused) && le(!0));
    },
    Ge = (Z) => {
      Z.pointerType === "mouse" && ((W = !1), s.autoplay.paused && ee());
    },
    lt = () => {
      s.params.autoplay.pauseOnMouseEnter &&
        (s.el.addEventListener("pointerenter", he),
        s.el.addEventListener("pointerleave", Ge));
    },
    Qe = () => {
      s.el &&
        typeof s.el != "string" &&
        (s.el.removeEventListener("pointerenter", he),
        s.el.removeEventListener("pointerleave", Ge));
    },
    z = () => {
      gi().addEventListener("visibilitychange", fe);
    },
    K = () => {
      gi().removeEventListener("visibilitychange", fe);
    };
  o("init", () => {
    s.params.autoplay.enabled && (lt(), z(), ge());
  }),
    o("destroy", () => {
      Qe(), K(), s.autoplay.running && re();
    }),
    o("_freeModeStaticRelease", () => {
      (H || Y) && ee();
    }),
    o("_freeModeNoMomentumRelease", () => {
      s.params.autoplay.disableOnInteraction ? re() : le(!0, !0);
    }),
    o("beforeTransitionStart", (Z, de, v) => {
      s.destroyed ||
        !s.autoplay.running ||
        (v || !s.params.autoplay.disableOnInteraction ? le(!0, !0) : re());
    }),
    o("sliderFirstMove", () => {
      if (!(s.destroyed || !s.autoplay.running)) {
        if (s.params.autoplay.disableOnInteraction) {
          re();
          return;
        }
        (G = !0),
          (H = !1),
          (Y = !1),
          (F = setTimeout(() => {
            (Y = !0), (H = !0), le(!0);
          }, 200));
      }
    }),
    o("touchEnd", () => {
      if (!(s.destroyed || !s.autoplay.running || !G)) {
        if (
          (clearTimeout(F),
          clearTimeout(S),
          s.params.autoplay.disableOnInteraction)
        ) {
          (H = !1), (G = !1);
          return;
        }
        H && s.params.cssMode && ee(), (H = !1), (G = !1);
      }
    }),
    o("slideChange", () => {
      s.destroyed || !s.autoplay.running || ($ = !0);
    }),
    Object.assign(s.autoplay, { start: ge, stop: re, pause: le, resume: ee });
}
const Qv = [Ap, Sp, Ep, Tp, wp, _p],
  Ru = [xp, Op, Mp, Cp, Dp, Np],
  kv = [...Ru, ...Ru, ...Ru, ...Ru],
  Zv = () =>
    _.jsxs("div", {
      className: "partners",
      style: { padding: "2rem 0 4rem 0" },
      children: [
        _.jsx("div", {
          className: "section-2-title",
          style: { textAlign: "center", marginBottom: "2rem" },
          children: _.jsx("h2", {
            className: "title-md",
            style: { color: "#fff", fontSize: "3rem", fontWeight: 500 },
            children: "Our Partners",
          }),
        }),
        _.jsx(Vr, {
          modules: [Hu],
          slidesPerView: 5,
          spaceBetween: 30,
          autoplay: { delay: 0, disableOnInteraction: !1 },
          loop: !0,
          direction: "horizontal",
          speed: 1e4,
          style: {
            maxWidth: "1200px",
            margin: "0 auto 2rem auto",
            paddingBottom: "3rem",
          },
          breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          },
          children: Qv.map((r, s) =>
            _.jsx(
              Xr,
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: _.jsx("img", {
                  src: r,
                  alt: `Partner ${s + 1}`,
                  style: {
                    width: "134px",
                    height: "48px",
                    objectFit: "contain",
                  },
                }),
              },
              `row1-${s}`
            )
          ),
        }),
        _.jsx(Vr, {
          modules: [Hu],
          slidesPerView: 5,
          spaceBetween: 30,
          autoplay: {
            delay: 0,
            disableOnInteraction: !1,
            reverseDirection: !0,
          },
          loop: !0,
          direction: "horizontal",
          speed: 1e4,
          style: {
            maxWidth: "1200px",
            margin: "0 auto",
            paddingBottom: "3rem",
          },
          breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          },
          children: kv.map((r, s) =>
            _.jsx(
              Xr,
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: _.jsx("img", {
                  src: r,
                  alt: `Partner ${s + 1}`,
                  style: {
                    width: "134px",
                    height: "48px",
                    objectFit: "contain",
                  },
                }),
              },
              `row2-${s}`
            )
          ),
        }),
      ],
    }),
  Kv = [Ap, Sp, Ep, Tp, wp, _p],
  Iv = [xp, Op, Mp, Cp, Dp, Np],
  Pv = () =>
    _.jsxs("div", {
      className: "partners-mobile",
      style: { padding: "1rem" },
      children: [
        _.jsx("div", {
          className: "section-2-title",
          style: { textAlign: "center", marginBottom: "2rem" },
          children: _.jsx("h2", {
            className: "title-md",
            style: { color: "#fff", fontSize: "3rem", fontWeight: 500 },
            children: "Our Partners",
          }),
        }),
        _.jsx(Vr, {
          modules: [Hu],
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay: { delay: 4e3, disableOnInteraction: !1 },
          loop: !0,
          direction: "horizontal",
          speed: 800,
          style: { margin: "0 auto 2rem auto", paddingBottom: "1rem" },
          allowTouchMove: !0,
          grabCursor: !0,
          children: Kv.map((r, s) =>
            _.jsx(
              Xr,
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: _.jsx("img", {
                  src: r,
                  alt: `Partner ${s + 1}`,
                  className: "partner-image-mobile",
                }),
              },
              `mobile-row1-${s}`
            )
          ),
        }),
        _.jsx(Vr, {
          modules: [Hu],
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay: {
            delay: 4e3,
            disableOnInteraction: !1,
            reverseDirection: !0,
          },
          loop: !0,
          direction: "horizontal",
          speed: 800,
          style: { margin: "0 auto", paddingBottom: "1rem" },
          allowTouchMove: !0,
          grabCursor: !0,
          children: Iv.map((r, s) =>
            _.jsx(
              Xr,
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: _.jsx("img", {
                  src: r,
                  alt: `Partner ${s + 1}`,
                  className: "partner-image-mobile",
                }),
              },
              `mobile-row2-${s}`
            )
          ),
        }),
      ],
    }),
  Bf =
    "/assets/lumora_txt.png",
  xf =
    "data:image/svg+xml,%3csvg%20width='6'%20height='4'%20viewBox='0%200%206%204'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.10742%201.0918L2.96582%203.2334L0.824219%201.0918'%20stroke='%23ADADAD'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Jv = () => {
    const [r, s] = qe.useState(null),
      c = qe.useRef(null),
      o = (S) => {
        c.current && clearTimeout(c.current), s(S);
      },
      d = () => {
        c.current = setTimeout(() => {
          s(null);
        }, 150);
      },
      h = (S) => {
        s(r === S ? null : S);
      };
    return _.jsx("header", {
      className: "header",
      children: _.jsxs("div", {
        className: "header-content",
        children: [
          _.jsx("div", {
            className: "logo",
            children: _.jsx("img", {
              src: Bf,
              alt: "Lumora Logo",
              className: "logo-icon",
            }),
          }),
          _.jsxs("nav", {
            className: "nav-links",
            children: [
              _.jsxs("div", {
                className: `nav-dropdown ${r === "resources" ? "active" : ""}`,
                onMouseEnter: () => o("resources"),
                onMouseLeave: d,
                children: [
                  _.jsxs("button", {
                    className: "nav-link dropdown-toggle",
                    onClick: () => h("resources"),
                    children: [
                      "Dex Zone",
                      _.jsx("img", {
                        src: xf,
                        alt: "Expand",
                        className: "expand-icon",
                      }),
                    ],
                  }),
                  r === "resources" &&
                    _.jsxs("div", {
                      className: "dropdown-menu",
                      children: [
                        _.jsx("a", {
                          href: "https://dexscreener.com/ethereum/0xcomingsoon",
                          target: "_blank",
                          rel: "noopener",
                          className: "dropdown-item",
                          children: "DexScreener",
                        }),
                        _.jsx("a", {
                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                          target: "_blank",
                          rel: "noopener",
                          className: "dropdown-item",
                          children: "Dextools",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Wv =
    "data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2021.9805H23.75M6.25%2015.7305H23.75M6.25%209.48047H23.75'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Fv = () => {
    const [r, s] = qe.useState(!1),
      c = () => {
        s(!r);
      },
      o = () => {
        s(!1);
      };
    return _.jsx("header", {
      className: "header-mobile",
      children: _.jsxs("div", {
        className: "header-mobile-content",
        children: [
          _.jsx("div", {
            className: "logo",
            children: _.jsx("img", {
              src: Bf,
              alt: "Lumora Logo",
              className: "logo-icon",
            }),
          }),
          _.jsx("button", {
            className: `mobile-menu-btn ${r ? "active" : ""}`,
            onClick: c,
            "aria-label": "Toggle mobile menu",
            children: _.jsx("img", {
              src: Wv,
              alt: "Menu",
              className: "menu-icon",
            }),
          }),
          _.jsx("nav", {
            className: `mobile-nav ${r ? "active" : ""}`,
            children: _.jsxs("div", {
              className: "mobile-nav-content",
              children: [
                _.jsxs("div", {
                  className: "mobile-nav-section",
                  children: [
                    _.jsx("h3", { children: "Solutions" }),
                    _.jsx("a", {
                      href: "https://docs.pictor.network/docs/products/3d-rendering",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "3D Rendering",
                    }),
                    _.jsx("a", {
                      href: "https://docs.pictor.network/docs/products/ai-training",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "AI Training",
                    }),
                    _.jsx("a", {
                      href: "https://docs.pictor.network/docs/products/ai-inference",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "AI Inference",
                    }),
                    _.jsx("a", {
                      href: "https://docs.pictor.network/docs/products/ai-model-hosting",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "AI Model Hosting",
                    }),
                  ],
                }),
                _.jsxs("div", {
                  className: "mobile-nav-section",
                  children: [
                    _.jsx("h3", { children: "Services" }),
                    _.jsx("a", {
                      href: "https://app.pictor.network/checker-node",
                      onClick: o,
                      children: "Checker Node",
                    }),
                  ],
                }),
                _.jsxs("div", {
                  className: "mobile-nav-section",
                  children: [
                    _.jsx("h3", { children: "Resources" }),
                    _.jsx("a", {
                      href: "https://stats.pictor.network/",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "Dashboard",
                    }),
                    _.jsx("a", {
                      href: "https://docs.pictor.network/",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "Docs",
                    }),
                    _.jsx("a", {
                      href: "https://blog.pictor.network/",
                      target: "_blank",
                      rel: "noopener",
                      onClick: o,
                      children: "Blog",
                    }),
                  ],
                }),
              ],
            }),
          }),
          r && _.jsx("div", { className: "mobile-menu-overlay", onClick: o }),
        ],
      }),
    });
  },
  $v = "/assets/hero_vid-Dtk2rjZs.mp4",
  ey =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgBlZIBEcIwDEVTDgHDwRxQCXPAJMwBOAAJOJiESWhRAA42FDAHIR0plytt6d7d3y655S9JCxCAiA1pIBlSB2txRfhLz8ajiKucyYhx9kFsZN0m8KkT/jvSLGKdM7GQRo4wJ7+iNnVkpAvpGuRaWaciRjW9Gv7zQyllOd/BZ1zrc1ET3ro38G07owlKIIMj6YVxeh514HENhneIEmf8z92NGuRO3x1gOS134XGdV+6INZRzID1FvOxwS48J8vdDcgM+IY6Xxb8Bs3JPtqoLgb0AAAAASUVORK5CYII=",
  ty =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgB3ZNbDYAwDEVbggCcgITiAAdIAaTgAAlDAUjAybgl/djnHoQPTtLXkt1sa8cEvPeCoJbKxswnQ6BDcVA+fQU3UBlS0Qv8TKS26GA7pdOq0xY3iNpmoXQ22PXpnFywxWKYK1JTHCvGe8apnyLIJ3WxIqNtGtWFOdmC+DI6NiF93Jw/5HA1dwMtenBcrVlPmgAAAABJRU5ErkJggg==",
  ny =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBnVOLEYIwDE2ZADeoGzgCI7mBI6ATeEygm+gGYQPcICbXhAtcKZ93l0speS80jwIsgIguHE/JsAdMiBwDJUiOa4RWiz+OSE4Add0aJzjywKmGdfxCCCdZVH4TtqG3RaVdY6FYRM8cnT7HsV6nOj+jx1UHiLMZNEJ+ZYpN8K4NMCP6ts7+JWon2a85bhli6mxnpumni0BTIE5nRMnfLUDjHPEZ2OcwWqXo1JYenJfOrq/mB5RAe//tjIBMW2xcvFV/7K18srCcAuEAAAAASUVORK5CYII=",
  Of = "https://apiv2.pictor.network",
  Mf = {
    TESTNET_TRACTION: `${Of}/api/dashboard/testnet-traction`,
    STATS: `${Of}/api/dashboard/stats`,
    RENDERING_WORKLOADS: `${Of}/api/dashboard/rendering-workloads`,
  },
  Cf = {
    TOTAL_WORKERS: 6899,
    TOTAL_GPUS: 6523,
    TOTAL_CPUS: 6899,
    TOTAL_COMPUTE: 112797054e-1,
    TOTAL_JOB: 19838,
    TOTAL_FRAMES: 69084,
    TOTAL_PARTICIPANTS: 13558,
  },
  iy = () => {
    const [r, s] = qe.useState([
        {
          label: "Liqudity Pool",
          value: "0",
          icon: ey,
          alt: "LP",
          loading: !0,
        },
        {
          label: "Ownership",
          value: "0",
          icon: ty,
          alt: "Ownership",
          loading: !0,
        },
        {
          label: "Tax",
          value: "0",
          icon: ny,
          alt: "Renounced",
          loading: !0,
        },
      ]),
      [c, o] = qe.useState(!0),
      d = (S) =>
        S >= 1e6
          ? (S / 1e6).toFixed(2) + "M"
          : S >= 1e3
          ? (S / 1e3).toFixed(2) + "K"
          : S.toString(),
      h = async () => {
        try {
          const [S, E, A] = await Promise.all([
            fetch(Mf.TESTNET_TRACTION),
            fetch(Mf.STATS),
            fetch(Mf.RENDERING_WORKLOADS),
          ]);
          if (!S.ok || !E.ok || !A.ok)
            throw new Error("One or more API responses failed");
          const y = await S.json(),
            T = await E.json(),
            O = await A.json();
          if (
            !(
              y?.data?.totalParticipants &&
              T?.data?.totalWorkers &&
              O?.data?.totalJobs
            )
          )
            throw new Error("Missing or invalid data from APIs");
          const G = (y.data.totalParticipants || 0) + Cf.TOTAL_PARTICIPANTS,
            H = (T.data.totalWorkers || 0) + Cf.TOTAL_WORKERS,
            F = (O.data.totalJobs || 0) + Cf.TOTAL_JOB;
          s(($) => [
            { ...$[0], value: "Locked", loading: !1 },
            { ...$[1], value: "Renounced", loading: !1 },
            { ...$[2], value: "0/0", loading: !1 },
          ]),
            o(!0);
        } catch (S) {
          console.error("Error fetching stats:", S), o(!1);
        }
      };
    return (
      qe.useEffect(() => {
        h();
      }, []),
      _.jsx(_.Fragment, {
        children:
          c &&
          _.jsx("div", {
            className: "stats-grid",
            children: r.map((S) =>
              _.jsxs(
                "div",
                {
                  className: "stat-card",
                  children: [
                    _.jsxs("div", {
                      className: "stat-label-row",
                      children: [
                        _.jsx("span", {
                          className: "stat-label",
                          children: S.label,
                        }),
                        _.jsx("span", {
                          className: "stat-icon-wrap",
                          children: _.jsx("img", {
                            src: S.icon,
                            alt: S.alt,
                            className: "hero-stat-icon",
                          }),
                        }),
                      ],
                    }),
                    _.jsx("div", {
                      className: "stat-value",
                      children: S.loading
                        ? _.jsx("div", {
                            className: "loading-spinner",
                            children: "...",
                          })
                        : S.value,
                    }),
                  ],
                },
                S.label
              )
            ),
          }),
      })
    );
  },
  ly = () =>
    _.jsxs("div", {
      className: "hero-content",
      children: [
        _.jsxs("div", {
          className: "hero-text-container",
          children: [
            _.jsxs("h1", {
              className: "hero-title",
              children: [
                _.jsx("span", {
                  className: "title-gradient-1",
                  children: "Decentralized GPU Aggregator Network",
                }),
                _.jsx("span", {
                  className: "title-gradient-2",
                  children: "for 3D Rendering and AI Workloads",
                }),
              ],
            }),
            _.jsx("p", {
              className: "hero-subtitle",
              children:
                "Unlimited GPU compute for unstoppable 3D and AI innovation",
            }),
            _.jsx("p", {
              className: "hero-subtitle",
              children:
                "CA: 0xcomingsoon",
            }),
            _.jsxs("div", {
              className: "hero-buttons",
              children: [
                _.jsx("button", {
                  className: "btn btn-primary",
                  onClick: () =>
                    window.open("https://app.pictor.network", "_blank"),
                  children: "Launch App",
                }),
                _.jsx("button", {
                  className: "btn btn-secondary btn-secondary-hero",
                  onClick: () =>
                    window.open(
                      "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                      "_blank"
                    ),
                  children: "Buy Now",
                }),
              ],
            }),
          ],
        }),
        _.jsx("div", {
          className: "hero-video-background",
          children: _.jsx("video", {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            },
            children: _.jsx("source", { src: $v, type: "video/mp4" }),
          }),
        }),
        _.jsx("div", {
          className: "hero-stats-container",
          children: _.jsx(iy, {}),
        }),
      ],
    }),
  ay =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAYAAACJISRoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgB7VVRdcMwDHSGYBACYRACIRA8BO0QOAwyBhuDQiiEQUgZbAxu0iq/qbbS2m7713tPL4kt3+XJJ9u5SgDo3b1A5CPFgiP46d2tQGQDxR7/0O8sNrhWcFkM8kHNfaq5j6oyUvIzxWyRG7m6hJfFhDxQfNfWnfMSsZCJ0cBGkfNzYlFXCVqzNc0h9Y34aiFPhHrhiXiJ7tFY0OgY5E7EH5cSYbfsULqJ+d9r8r3iOhGZZEGxY3DGiTjuqy2iCLRj2AwBsl8ocGKRSJK8KLIZBU6sElE11x1+0eZa5MkVoOu6A4Wn11cZeqPvieKnZH2RyLV4iFSLxM0LqL0XDMQeoteNDB3ihE96IawQeMnxa+RJD23TpF55e62LTRHkp8P5q8JoPF48WiLIT9131FwVhthOysGYkZ+6vWuF/O0CG0w+uFsBuTlGdy+0lOUX2e9x0/jHuRoAAAAASUVORK5CYII=",
  sy =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGfSURBVHgB7VYLcYQwEF06FYCDIgEJSMBBcVAcFAelCsDB1UHq4M4BEsDBNpl7TJc05SB8rjPlzWSyWZLsy35CiA4c+CNg5kY3NWfNI22HiGZiVTLaE6HuYkuXQLwEQdDRXtCGS/4d+a313p7Rm0e6S3Xr9IlrqEszhvwK+R3jD9oKSNAemeO7QUNbw+QBjF3QK3KTPVu61MxFbq1GpgKJfnO2DZixQ1djbkJrAaduIOcwUIzMj7GmxdzW9prBA80nktH1DvmEqkb/fGNpZ8nLy1yTOeF0sdCpKe5fLUzIgdxVJSKh1ZghhKuiBSQSGOnj/aOUQbQR3xsQj2gpzCa6vVkEjFyMGUB1nXgIxY57aA6ZRhAo58YYh8lMxQhSKflAeKTydTVClwhCBfmAvxN14OopxEDADvGZl+SPcLWyiFWujbXuxQqLV4inEitFLinHd+lFk8jr/X9GiLVoodD175iM9gRfy9sgF7reYxHtCREShXF/+/rfrAsJKRB4YvGcoHuAxbMB+bP9i26ETMjDe+Q+IRKEClHKER048N/xBfYv2muqvonLAAAAAElFTkSuQmCC",
  ry =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAYAAABVX2cEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEtSURBVHgBpZWBccIwDEWVTpARPEJGYIR0gmYENmg2aDcIG6QbcJ2AEcwGYQMhw/chTAyW+XfCwbIeiqQzRAYxcyvmxfZr/g8qVADJEiAud6YYJprEOjz/U60kq4mvWrD2VCMJ/AbgIDbj2ZFVCajFupBVCuRDJoBxrpPFIOxtsDdaQF8pCPtbU/HVr/u0yPJ9p3wTP2uCODu0Pli34ncAer5pLzbcgXEwHtrQ6zfo1ZhE/aSggQxCbIR6UqCZjcP40Cz5+E3SnUs6hhozauzSdEMhDwrqc1171awUrLs2rfijr3jmegRsM6CBSiWHR1ajkoBGsoivAxnUvgUCbOH7q6ca5BD8pzIcqUaq+PGa3lGtVPGDbJfhCiy+2qVmpXG5v7qT2FHss2maExXqDI/DX6ByFXkoAAAAAElFTkSuQmCC",
  oy =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFwSURBVHgBtVWLUYNAEF0yKSBWIHYQO6AD7UDswFSAVhCtQDpwrIB0YAmkA+gA95m3DIPcBhJ4M8t92Nvd29+JTEDTNBuQLAUV/gOacmYt0zDZ+pUsjMUVtC5S36Y6PIjvhlipVt7C4amVvqMoyqUjPGvmR2bCY26UmMuVoLySMm+x8cjFi8wEuJsyUwTZfF7LAlg5ViQMvAvcHF4I/V8HDuFWhc01I94DfKkOe85vlO+fF7w6OPZGl2dIODB4AzLf0fpgbPTfAZaLg7O9aETq1p4RXgy+lBIZAeXPddgNKQrdYE/hBzmlL7LkyLVwDSNypa1Syv3nIe1tUXT2KlQj51bpn53/BTY6a7wT1ZBML4tGvV7kCfKFXPShhGaF18v8isKzLrq1m3C+4ZlxCjRYr7TsSU4tWjjGPdaEBrzhzDkFcU8Jmt+lDbDtbxEtLbmxE79yxwAuyzi///t2oj4XKsvKyNSyYi2/rwFiklvR/QLLJZSFJ2isUwAAAABJRU5ErkJggg==",
  uy = "/assets/3d_render-DalKgwFJ.mp4",
  cy = "/assets/AI_training-BF-n-GEj.mp4",
  fy = "/assets/AI_inference-DBbs1pjQ.mp4",
  dy = "/assets/AI_model_hosting-GNTqFpr0.mp4",
  hy = () => (
    qe.useEffect(() => {
      const r = new IntersectionObserver(
          (c) => {
            c.forEach((o) => {
              const d = o.target.querySelector("video");
              d &&
                (o.isIntersecting
                  ? d.play()
                  : (d.pause(), (d.currentTime = 0)));
            });
          },
          { threshold: 0.3 }
        ),
        s = document.querySelectorAll(".service-card");
      return (
        s.forEach((c) => {
          r.observe(c);
        }),
        () => {
          s.forEach((c) => {
            r.unobserve(c);
          });
        }
      );
    }, []),
    _.jsx("section", {
      className: "key-services",
      children: _.jsxs("div", {
        className: "container",
        children: [
          _.jsx("h2", {
            className: "services-title",
            children: "Key Services",
          }),
          _.jsxs("div", {
            className: "services-grid",
            children: [
              _.jsxs("div", {
                className: "service-card",
                children: [
                  _.jsx("video", {
                    autoPlay: !1,
                    muted: !0,
                    loop: !0,
                    children: _.jsx("source", { src: uy, type: "video/mp4" }),
                  }),
                  _.jsx("div", {
                    className: "service-icon",
                    children: _.jsx("img", {
                      src: ay,
                      alt: "3D Rendering Icon",
                    }),
                  }),
                  _.jsxs("div", {
                    className: "service-content bg-5",
                    children: [
                      _.jsxs("div", {
                        className: "content-text",
                        children: [
                          _.jsx("h3", {
                            className: "service-title",
                            children: "3D Rendering",
                          }),
                          _.jsx("p", {
                            className: "service-description",
                            children:
                              "Render 3D faster and cheaper on a high-performance decentralized GPU network.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "service-card",
                children: [
                  _.jsx("video", {
                    autoPlay: !1,
                    muted: !0,
                    loop: !0,
                    children: _.jsx("source", { src: cy, type: "video/mp4" }),
                  }),
                  _.jsx("div", {
                    className: "service-icon",
                    children: _.jsx("img", {
                      src: sy,
                      alt: "AI Training Icon",
                    }),
                  }),
                  _.jsxs("div", {
                    className: "service-content bg-5",
                    children: [
                      _.jsxs("div", {
                        className: "content-text",
                        children: [
                          _.jsx("h3", {
                            className: "service-title",
                            children: "AI Training",
                          }),
                          _.jsx("p", {
                            className: "service-description",
                            children:
                              "Accelerate AI models training and fine-tuning securely at scale.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "service-card",
                children: [
                  _.jsx("video", {
                    autoPlay: !1,
                    muted: !0,
                    loop: !0,
                    children: _.jsx("source", { src: fy, type: "video/mp4" }),
                  }),
                  _.jsx("div", {
                    className: "service-icon",
                    children: _.jsx("img", {
                      src: ry,
                      alt: "AI Inference Icon",
                    }),
                  }),
                  _.jsxs("div", {
                    className: "service-content bg-5",
                    children: [
                      _.jsxs("div", {
                        className: "content-text",
                        children: [
                          _.jsx("h3", {
                            className: "service-title",
                            children: "AI Inference",
                          }),
                          _.jsx("p", {
                            className: "service-description",
                            children:
                              "Run reliable, low-latency inference workloads that scale on demand.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "service-card",
                children: [
                  _.jsx("video", {
                    autoPlay: !1,
                    muted: !0,
                    loop: !0,
                    children: _.jsx("source", { src: dy, type: "video/mp4" }),
                  }),
                  _.jsx("div", {
                    className: "service-icon",
                    children: _.jsx("img", {
                      src: oy,
                      alt: "AI Model Hosting Icon",
                    }),
                  }),
                  _.jsxs("div", {
                    className: "service-content bg-5",
                    children: [
                      _.jsxs("div", {
                        className: "content-text",
                        children: [
                          _.jsx("h3", {
                            className: "service-title",
                            children: "AI Model Hosting",
                          }),
                          _.jsx("p", {
                            className: "service-description",
                            children:
                              "Deploy and serve your AI models globally with resilient, decentralized GPUs.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  ),
  py = "/assets/How_it_works-BoaVu_cn.mp4",
  my = () =>
    _.jsx("section", {
      className: "how-it-works",
      children: _.jsxs("div", {
        className: "container",
        children: [
          _.jsx("h2", {
            className: "services-title",
            children: "How it Works",
          }),
          _.jsx("div", {
            className: "how-it-works-content",
            children: _.jsx("video", {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              controls: !1,
              style: {
                maxWidth: "100%",
                height: "auto",
                border: "8px solid #282630",
                borderRadius: "20px",
              },
              children: _.jsx("source", { src: py, type: "video/mp4" }),
            }),
          }),
        ],
      }),
    }),
  gp = "/assets/Card1Disable-Cb4I8BCs.png",
  vp = "/assets/Card2Disable-DKd23_Gg.png",
  yp = "/assets/Card3Disable-BQitPKUI.png",
  bp = "/assets/Card4Disable-DMBYvlBu.png",
  gy = "/assets/Card1-C8zAzirz.png",
  vy = "/assets/Card2-CvaSkKit.png",
  yy = "/assets/Card3-D7YuL7N2.png",
  by = "/assets/Card4-BrT6RAeS.png",
  Ay = () =>
    _.jsx("section", {
      className: "why-pictor",
      children: _.jsxs("div", {
        className: "container",
        children: [
          _.jsx("h2", { className: "services-title", children: "Why Lumora?" }),
          _.jsxs("div", {
            className: "why-pictor-grid",
            children: [
              _.jsx("div", {
                className: "why-pictor-card",
                children: _.jsx("img", {
                  src: gp,
                  alt: "Lower Cost",
                  onMouseEnter: (r) => (r.target.src = gy),
                  onMouseLeave: (r) => (r.target.src = gp),
                }),
              }),
              _.jsx("div", {
                className: "why-pictor-card",
                children: _.jsx("img", {
                  src: vp,
                  alt: "Faster Processing",
                  onMouseEnter: (r) => (r.target.src = vy),
                  onMouseLeave: (r) => (r.target.src = vp),
                }),
              }),
              _.jsx("div", {
                className: "why-pictor-card",
                children: _.jsx("img", {
                  src: yp,
                  alt: "On-demand access",
                  onMouseEnter: (r) => (r.target.src = yy),
                  onMouseLeave: (r) => (r.target.src = yp),
                }),
              }),
              _.jsx("div", {
                className: "why-pictor-card",
                children: _.jsx("img", {
                  src: bp,
                  alt: "Permissionless participation",
                  onMouseEnter: (r) => (r.target.src = by),
                  onMouseLeave: (r) => (r.target.src = bp),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Sy = "/assets/Backers-dTd_YpJ-.mp4",
  Ey = () =>
    _.jsx("section", {
      className: "backed-aptos",
      children: _.jsx("div", {
        className: "backed-aptos-content bg-backed-aptos",
        children: _.jsx("video", {
          src: Sy,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          playsInline: !0,
        }),
      }),
    }),
  Ty =
    "/assets/logo_txt1.png",
  Kp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgBjZKxDcIwEEV/yAKMcGxASZkNyAZZIRuQjhKoKBETMAI1VbIBocsW8A0XxbFs4y+96GL7n+5bzgGsyZ6UipAH/FqSM3mRYcFPp4uGqzaoA+aLGju3Y6tTjLV4jE2g6df4VHNh1UY7nzG36oFkpCInrbdkQ1aRKDPdrIN3jZAsO7/Anz8qk9HO32LKH9V4cUf8btioIYd/RsF8TDd/lWoEEvOLdchVgUh+0c0SYdVqMqO/ofkzTO+6R1zi/Pcf9P0uLW2e8x0AAAAASUVORK5CYII=",
  Ip =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgBlZAPDYUgEMa/vQRGIAIRiPAaaAQbvNdAI9hAGxhBG2gDbaB3g9vYDf/wbb/BgB/cAeTFEQ0xhflraSSOiOpOKIgfsSlJcLgpLZb41V7JxVNpTE1Yddkm0veitCVIZWJ/FNkQnTrQhrJKpPsdkIiNenEXIvPnAx8lz8Qe5jyuSGfGixj4lvTLFhmp4D9Q5OwY+I+sZeEE7h9I8i+3iTIAAAAASUVORK5CYII=",
  Pp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgBpZGxEYJAEEV3MDGkBEqgBEIzS/A6EDvA0EhDM0tAK6AEx0wjtALpAD/D11mPRR3ZmRfcv9vdv3sidiTAGbrj3deYgzuoSQ4Kkiu9ebPuKxKph7+SWoWKPwo1zsKhbkxXG6OT5fAISk8rPo0VUU+VtqMWyvuH1KLG02KpGsRKd0rPvZw4EG9ZdPOce6r0Gd9GbODnDFr0y20g3biSvqiM+2rEixvthmQPFuAELuAMDmDJ8wSMmbsCW7+bk3bZmfRHIu2vZdLd7/B4AOFie/x/2HDBAAAAAElFTkSuQmCC",
  wy = () =>
    _.jsx("footer", {
      className: "footer",
      children: _.jsxs("div", {
        className: "footer-content",
        children: [
          _.jsxs("div", {
            className: "footer-left",
            children: [
              _.jsx("div", {
                className: "footer-logo",
                children: _.jsx("img", { src: Ty, alt: "Lumora Logo" }),
              }),
              _.jsxs("div", {
                className: "social-icons",
                children: [
                  _.jsx("a", {
                    href: "https://x.com/pictor_network",
                    target: "_blank",
                    rel: "noopener",
                    className: "social-icon",
                    children: _.jsx("img", { src: Kp, alt: "X (Twitter)" }),
                  }),
                  _.jsx("a", {
                    href: "https://t.me/pictor_community",
                    target: "_blank",
                    rel: "noopener",
                    className: "social-icon",
                    children: _.jsx("img", { src: Ip, alt: "Telegram" }),
                  }),
                ],
              }),
            ],
          }),
          _.jsx("div", {
            className: "copyright",
            children: "© 2025 Lumora AI. All rights reserved.",
          }),
          _.jsx("div", {
            className: "footer-right",
            children: _.jsxs("div", {
              className: "footer-links",
              children: [
                _.jsx("a", {
                  href: "https://docs.pictor.network/",
                  target: "_blank",
                  rel: "noopener",
                  className: "footer-link",
                  children: "Docs",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  _y = () =>
    _.jsx("footer", {
      className: "footer-mobile",
      children: _.jsxs("div", {
        className: "footer-mobile-content",
        children: [
          _.jsxs("div", {
            className: "footer-mobile-logo",
            children: [
              _.jsx("div", {
                className: "footer-mobile-logo-img",
                children: _.jsx("img", {
                  src: Bf,
                  alt: "Lumora Logo",
                  className: "footer-mobile-logo-img",
                }),
              }),
              _.jsxs("div", {
                className: "footer-mobile-social",
                children: [
                  _.jsx("a", {
                    href: "https://x.com/pictor_network",
                    target: "_blank",
                    rel: "noopener",
                    className: "social-icon-mobile",
                    children: _.jsx("img", { src: Kp, alt: "X (Twitter)" }),
                  }),
                  _.jsx("a", {
                    href: "https://t.me/pictor_community",
                    target: "_blank",
                    rel: "noopener",
                    className: "social-icon-mobile",
                    children: _.jsx("img", { src: Ip, alt: "Telegram" }),
                  }),
                ],
              }),
            ],
          }),
          _.jsxs("div", {
            className: "footer-mobile-links",
            children: [
              _.jsxs("div", {
                className: "footer-mobile-links-left",
                children: [
                  _.jsx("a", {
                    href: "https://docs.pictor.network/docs/company/",
                    target: "_blank",
                    rel: "noopener",
                    className: "footer-link-mobile",
                    children: "About Us",
                  }),
                  _.jsx("a", {
                    href: "https://docs.pictor.network/",
                    target: "_blank",
                    rel: "noopener",
                    className: "footer-link-mobile",
                    children: "Docs",
                  }),
                ],
              }),
              _.jsxs("div", {
                className: "footer-mobile-links-right",
                children: [
                  _.jsx("a", {
                    href: "https://pictor.network/privacy-policy/",
                    target: "_blank",
                    rel: "noopener",
                    className: "footer-link-mobile",
                    children: "Privacy Policy",
                  }),
                  _.jsx("a", {
                    href: "https://pictor.network/terms/",
                    target: "_blank",
                    rel: "noopener",
                    className: "footer-link-mobile",
                    children: "Terms",
                  }),
                ],
              }),
            ],
          }),
          _.jsx("div", {
            className: "footer-mobile-copyright",
            children: "© 2025 Lumora AI. All rights reserved.",
          }),
        ],
      }),
    }),
  xy = () => {
    const [r, s] = qe.useState(!1);
    return (
      qe.useEffect(() => {
        const c = () => {
          s(window.innerWidth <= 768);
        };
        return (
          c(),
          window.addEventListener("resize", c),
          () => window.removeEventListener("resize", c)
        );
      }, []),
      _.jsxs(_.Fragment, {
        children: [
          _.jsx("div", { className: "container", children: _.jsx(Jv, {}) }),
          _.jsx(Fv, {}),
          _.jsx(ly, {}),
          _.jsx(hy, {}),
          _.jsx(my, {}),
          _.jsx(Ay, {}),
          _.jsx(Ey, {}),
          r ? _.jsx(Pv, {}) : _.jsx(Zv, {}),
          r ? _.jsx(_y, {}) : _.jsx(wy, {}),
        ],
      })
    );
  };
function Oy() {
  return _.jsx(xy, {});
}
dg.createRoot(document.getElementById("root")).render(
  _.jsx(qe.StrictMode, { children: _.jsx(Oy, {}) })
);
