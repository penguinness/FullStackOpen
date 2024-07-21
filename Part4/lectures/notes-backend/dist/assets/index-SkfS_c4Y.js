(function() {
  const t=document.createElement('link').relList; if (t&&t.supports&&t.supports('modulepreload')) return; for (const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l); new MutationObserver((l)=>{
    for (const o of l) if (o.type==='childList') for (const i of o.addedNodes)i.tagName==='LINK'&&i.rel==='modulepreload'&&r(i);
  }).observe(document, {childList: !0, subtree: !0}); function n(l) {
    const o={}; return l.integrity&&(o.integrity=l.integrity), l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy), l.crossOrigin==='use-credentials'?o.credentials='include':l.crossOrigin==='anonymous'?o.credentials='omit':o.credentials='same-origin', o;
  } function r(l) {
    if (l.ep) return; l.ep=!0; const o=n(l); fetch(l.href, o);
  }
})(); const Qs={exports: {}}; const Sl={}; const Ks={exports: {}}; const z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const sr=Symbol.for('react.element'); const Pf=Symbol.for('react.portal'); const Tf=Symbol.for('react.fragment'); const Of=Symbol.for('react.strict_mode'); const Lf=Symbol.for('react.profiler'); const zf=Symbol.for('react.provider'); const Ff=Symbol.for('react.context'); const Df=Symbol.for('react.forward_ref'); const Af=Symbol.for('react.suspense'); const jf=Symbol.for('react.memo'); const Mf=Symbol.for('react.lazy'); const xu=Symbol.iterator; function Uf(e) {
  return e===null||typeof e!='object'?null:(e=xu&&e[xu]||e['@@iterator'], typeof e=='function'?e:null);
} const qs={isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {}}; const Xs=Object.assign; const Js={}; function mn(e, t, n) {
  this.props=e, this.context=t, this.refs=Js, this.updater=n||qs;
}mn.prototype.isReactComponent={}; mn.prototype.setState=function(e, t) {
  if (typeof e!='object'&&typeof e!='function'&&e!=null) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'); this.updater.enqueueSetState(this, e, t, 'setState');
}; mn.prototype.forceUpdate=function(e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
}; function Ys() {}Ys.prototype=mn.prototype; function ki(e, t, n) {
  this.props=e, this.context=t, this.refs=Js, this.updater=n||qs;
} const xi=ki.prototype=new Ys; xi.constructor=ki; Xs(xi, mn.prototype); xi.isPureReactComponent=!0; const Cu=Array.isArray; const Gs=Object.prototype.hasOwnProperty; const Ci={current: null}; const Zs={key: !0, ref: !0, __self: !0, __source: !0}; function bs(e, t, n) {
  let r; const l={}; let o=null; let i=null; if (t!=null) for (r in t.ref!==void 0&&(i=t.ref), t.key!==void 0&&(o=''+t.key), t)Gs.call(t, r)&&!Zs.hasOwnProperty(r)&&(l[r]=t[r]); let u=arguments.length-2; if (u===1)l.children=n; else if (1<u) {
    for (var s=Array(u), a=0; a<u; a++)s[a]=arguments[a+2]; l.children=s;
  } if (e&&e.defaultProps) for (r in u=e.defaultProps, u)l[r]===void 0&&(l[r]=u[r]); return {$$typeof: sr, type: e, key: o, ref: i, props: l, _owner: Ci.current};
} function If(e, t) {
  return {$$typeof: sr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
} function _i(e) {
  return typeof e=='object'&&e!==null&&e.$$typeof===sr;
} function Bf(e) {
  const t={'=': '=0', ':': '=2'}; return '$'+e.replace(/[=:]/g, function(n) {
    return t[n];
  });
} const _u=/\/+/g; function Wl(e, t) {
  return typeof e=='object'&&e!==null&&e.key!=null?Bf(''+e.key):t.toString(36);
} function Dr(e, t, n, r, l) {
  let o=typeof e; (o==='undefined'||o==='boolean')&&(e=null); let i=!1; if (e===null)i=!0; else {
    switch (o) {
      case 'string': case 'number': i=!0; break; case 'object': switch (e.$$typeof) {
        case sr: case Pf: i=!0;
      }
    }
  } if (i) {
    return i=e, l=l(i), e=r===''?'.'+Wl(i, 0):r, Cu(l)?(n='', e!=null&&(n=e.replace(_u, '$&/')+'/'), Dr(l, t, n, '', function(a) {
      return a;
    })):l!=null&&(_i(l)&&(l=If(l, n+(!l.key||i&&i.key===l.key?'':(''+l.key).replace(_u, '$&/')+'/')+e)), t.push(l)), 1;
  } if (i=0, r=r===''?'.':r+':', Cu(e)) {
    for (var u=0; u<e.length; u++) {
      o=e[u]; var s=r+Wl(o, u); i+=Dr(o, t, n, s, l);
    }
  } else if (s=Uf(e), typeof s=='function') for (e=s.call(e), u=0; !(o=e.next()).done;)o=o.value, s=r+Wl(o, u++), i+=Dr(o, t, n, s, l); else if (o==='object') throw t=String(e), Error('Objects are not valid as a React child (found: '+(t==='[object Object]'?'object with keys {'+Object.keys(e).join(', ')+'}':t)+'). If you meant to render a collection of children, use an array instead.'); return i;
} function vr(e, t, n) {
  if (e==null) return e; const r=[]; let l=0; return Dr(e, r, '', '', function(o) {
    return t.call(n, o, l++);
  }), r;
} function $f(e) {
  if (e._status===-1) {
    let t=e._result; t=t(), t.then(function(n) {
      (e._status===0||e._status===-1)&&(e._status=1, e._result=n);
    }, function(n) {
      (e._status===0||e._status===-1)&&(e._status=2, e._result=n);
    }), e._status===-1&&(e._status=0, e._result=t);
  } if (e._status===1) return e._result.default; throw e._result;
} const ce={current: null}; const Ar={transition: null}; const Hf={ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Ar, ReactCurrentOwner: Ci}; function ea() {
  throw Error('act(...) is not supported in production builds of React.');
}z.Children={map: vr, forEach: function(e, t, n) {
  vr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  let t=0; return vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vr(e, function(t) {
    return t;
  })||[];
}, only: function(e) {
  if (!_i(e)) throw Error('React.Children.only expected to receive a single React element child.'); return e;
}}; z.Component=mn; z.Fragment=Tf; z.Profiler=Lf; z.PureComponent=ki; z.StrictMode=Of; z.Suspense=Af; z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf; z.act=ea; z.cloneElement=function(e, t, n) {
  if (e==null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed '+e+'.'); const r=Xs({}, e.props); let l=e.key; let o=e.ref; let i=e._owner; if (t!=null) {
    if (t.ref!==void 0&&(o=t.ref, i=Ci.current), t.key!==void 0&&(l=''+t.key), e.type&&e.type.defaultProps) var u=e.type.defaultProps; for (s in t)Gs.call(t, s)&&!Zs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s]);
  } var s=arguments.length-2; if (s===1)r.children=n; else if (1<s) {
    u=Array(s); for (let a=0; a<s; a++)u[a]=arguments[a+2]; r.children=u;
  } return {$$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i};
}; z.createContext=function(e) {
  return e={$$typeof: Ff, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null}, e.Provider={$$typeof: zf, _context: e}, e.Consumer=e;
}; z.createElement=bs; z.createFactory=function(e) {
  const t=bs.bind(null, e); return t.type=e, t;
}; z.createRef=function() {
  return {current: null};
}; z.forwardRef=function(e) {
  return {$$typeof: Df, render: e};
}; z.isValidElement=_i; z.lazy=function(e) {
  return {$$typeof: Mf, _payload: {_status: -1, _result: e}, _init: $f};
}; z.memo=function(e, t) {
  return {$$typeof: jf, type: e, compare: t===void 0?null:t};
}; z.startTransition=function(e) {
  const t=Ar.transition; Ar.transition={}; try {
    e();
  } finally {
    Ar.transition=t;
  }
}; z.unstable_act=ea; z.useCallback=function(e, t) {
  return ce.current.useCallback(e, t);
}; z.useContext=function(e) {
  return ce.current.useContext(e);
}; z.useDebugValue=function() {}; z.useDeferredValue=function(e) {
  return ce.current.useDeferredValue(e);
}; z.useEffect=function(e, t) {
  return ce.current.useEffect(e, t);
}; z.useId=function() {
  return ce.current.useId();
}; z.useImperativeHandle=function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
}; z.useInsertionEffect=function(e, t) {
  return ce.current.useInsertionEffect(e, t);
}; z.useLayoutEffect=function(e, t) {
  return ce.current.useLayoutEffect(e, t);
}; z.useMemo=function(e, t) {
  return ce.current.useMemo(e, t);
}; z.useReducer=function(e, t, n) {
  return ce.current.useReducer(e, t, n);
}; z.useRef=function(e) {
  return ce.current.useRef(e);
}; z.useState=function(e) {
  return ce.current.useState(e);
}; z.useSyncExternalStore=function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
}; z.useTransition=function() {
  return ce.current.useTransition();
}; z.version='18.3.1'; Ks.exports=z; const Rt=Ks.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Vf=Rt; const Wf=Symbol.for('react.element'); const Qf=Symbol.for('react.fragment'); const Kf=Object.prototype.hasOwnProperty; const qf=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner; const Xf={key: !0, ref: !0, __self: !0, __source: !0}; function ta(e, t, n) {
  let r; const l={}; let o=null; let i=null; n!==void 0&&(o=''+n), t.key!==void 0&&(o=''+t.key), t.ref!==void 0&&(i=t.ref); for (r in t)Kf.call(t, r)&&!Xf.hasOwnProperty(r)&&(l[r]=t[r]); if (e&&e.defaultProps) for (r in t=e.defaultProps, t)l[r]===void 0&&(l[r]=t[r]); return {$$typeof: Wf, type: e, key: o, ref: i, props: l, _owner: qf.current};
}Sl.Fragment=Qf; Sl.jsx=ta; Sl.jsxs=ta; Qs.exports=Sl; const Z=Qs.exports; const ko={}; const na={exports: {}}; const ke={}; const ra={exports: {}}; const la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e) {
  function t(N, O) {
    let L=N.length; N.push(O); e:for (;0<L;) {
      const K=L-1>>>1; const G=N[K]; if (0<l(G, O))N[K]=O, N[L]=G, L=K; else break e;
    }
  } function n(N) {
    return N.length===0?null:N[0];
  } function r(N) {
    if (N.length===0) return null; const O=N[0]; const L=N.pop(); if (L!==O) {
      N[0]=L; e:for (let K=0, G=N.length, mr=G>>>1; K<mr;) {
        const xt=2*(K+1)-1; const Vl=N[xt]; const Ct=xt+1; const yr=N[Ct]; if (0>l(Vl, L))Ct<G&&0>l(yr, Vl)?(N[K]=yr, N[Ct]=L, K=Ct):(N[K]=Vl, N[xt]=L, K=xt); else if (Ct<G&&0>l(yr, L))N[K]=yr, N[Ct]=L, K=Ct; else break e;
      }
    } return O;
  } function l(N, O) {
    const L=N.sortIndex-O.sortIndex; return L!==0?L:N.id-O.id;
  } if (typeof performance=='object'&&typeof performance.now=='function') {
    const o=performance; e.unstable_now=function() {
      return o.now();
    };
  } else {
    const i=Date; const u=i.now(); e.unstable_now=function() {
      return i.now()-u;
    };
  } const s=[]; const a=[]; let f=1; let h=null; let y=3; let w=!1; let m=!1; let g=!1; const P=typeof setTimeout=='function'?setTimeout:null; const d=typeof clearTimeout=='function'?clearTimeout:null; const c=typeof setImmediate<'u'?setImmediate:null; typeof navigator<'u'&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling); function p(N) {
    for (let O=n(a); O!==null;) {
      if (O.callback===null)r(a); else if (O.startTime<=N)r(a), O.sortIndex=O.expirationTime, t(s, O); else break; O=n(a);
    }
  } function S(N) {
    if (g=!1, p(N), !m) {
      if (n(s)!==null)m=!0, $l(k); else {
        const O=n(a); O!==null&&Hl(S, O.startTime-N);
      }
    }
  } function k(N, O) {
    m=!1, g&&(g=!1, d(R), R=-1), w=!0; const L=y; try {
      for (p(O), h=n(s); h!==null&&(!(h.expirationTime>O)||N&&!Le());) {
        const K=h.callback; if (typeof K=='function') {
          h.callback=null, y=h.priorityLevel; const G=K(h.expirationTime<=O); O=e.unstable_now(), typeof G=='function'?h.callback=G:h===n(s)&&r(s), p(O);
        } else r(s); h=n(s);
      } if (h!==null) var mr=!0; else {
        const xt=n(a); xt!==null&&Hl(S, xt.startTime-O), mr=!1;
      } return mr;
    } finally {
      h=null, y=L, w=!1;
    }
  } let x=!1; let _=null; var R=-1; let Q=5; let F=-1; function Le() {
    return !(e.unstable_now()-F<Q);
  } function Sn() {
    if (_!==null) {
      const N=e.unstable_now(); F=N; let O=!0; try {
        O=_(!0, N);
      } finally {
O?En():(x=!1, _=null);
      }
    } else x=!1;
  } let En; if (typeof c=='function') {
    En=function() {
      c(Sn);
    };
  } else if (typeof MessageChannel<'u') {
    const ku=new MessageChannel; const Rf=ku.port2; ku.port1.onmessage=Sn, En=function() {
      Rf.postMessage(null);
    };
  } else {
    En=function() {
      P(Sn, 0);
    };
  } function $l(N) {
    _=N, x||(x=!0, En());
  } function Hl(N, O) {
    R=P(function() {
      N(e.unstable_now());
    }, O);
  }e.unstable_IdlePriority=5, e.unstable_ImmediatePriority=1, e.unstable_LowPriority=4, e.unstable_NormalPriority=3, e.unstable_Profiling=null, e.unstable_UserBlockingPriority=2, e.unstable_cancelCallback=function(N) {
    N.callback=null;
  }, e.unstable_continueExecution=function() {
    m||w||(m=!0, $l(k));
  }, e.unstable_forceFrameRate=function(N) {
0>N||125<N?console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'):Q=0<N?Math.floor(1e3/N):5;
  }, e.unstable_getCurrentPriorityLevel=function() {
    return y;
  }, e.unstable_getFirstCallbackNode=function() {
    return n(s);
  }, e.unstable_next=function(N) {
    switch (y) {
      case 1: case 2: case 3: var O=3; break; default: O=y;
    } const L=y; y=O; try {
      return N();
    } finally {
      y=L;
    }
  }, e.unstable_pauseExecution=function() {}, e.unstable_requestPaint=function() {}, e.unstable_runWithPriority=function(N, O) {
    switch (N) {
      case 1: case 2: case 3: case 4: case 5: break; default: N=3;
    } const L=y; y=N; try {
      return O();
    } finally {
      y=L;
    }
  }, e.unstable_scheduleCallback=function(N, O, L) {
    const K=e.unstable_now(); switch (typeof L=='object'&&L!==null?(L=L.delay, L=typeof L=='number'&&0<L?K+L:K):L=K, N) {
      case 1: var G=-1; break; case 2: G=250; break; case 5: G=1073741823; break; case 4: G=1e4; break; default: G=5e3;
    } return G=L+G, N={id: f++, callback: O, priorityLevel: N, startTime: L, expirationTime: G, sortIndex: -1}, L>K?(N.sortIndex=L, t(a, N), n(s)===null&&N===n(a)&&(g?(d(R), R=-1):g=!0, Hl(S, L-K))):(N.sortIndex=G, t(s, N), m||w||(m=!0, $l(k))), N;
  }, e.unstable_shouldYield=Le, e.unstable_wrapCallback=function(N) {
    const O=y; return function() {
      const L=y; y=O; try {
        return N.apply(this, arguments);
      } finally {
        y=L;
      }
    };
  };
})(la); ra.exports=la; const Jf=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Yf=Rt; const Ee=Jf; function E(e) {
  for (var t='https://reactjs.org/docs/error-decoder.html?invariant='+e, n=1; n<arguments.length; n++)t+='&args[]='+encodeURIComponent(arguments[n]); return 'Minified React error #'+e+'; visit '+t+' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
} const oa=new Set; const Wn={}; function Bt(e, t) {
  sn(e, t), sn(e+'Capture', t);
} function sn(e, t) {
  for (Wn[e]=t, e=0; e<t.length; e++)oa.add(t[e]);
} const Ge=!(typeof window>'u'||typeof window.document>'u'||typeof window.document.createElement>'u'); const xo=Object.prototype.hasOwnProperty; const Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/; const Nu={}; const Ru={}; function Zf(e) {
  return xo.call(Ru, e)?!0:xo.call(Nu, e)?!1:Gf.test(e)?Ru[e]=!0:(Nu[e]=!0, !1);
} function bf(e, t, n, r) {
  if (n!==null&&n.type===0) return !1; switch (typeof t) {
    case 'function': case 'symbol': return !0; case 'boolean': return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0, 5), e!=='data-'&&e!=='aria-'); default: return !1;
  }
} function ed(e, t, n, r) {
  if (t===null||typeof t>'u'||bf(e, t, n, r)) return !0; if (r) return !1; if (n!==null) {
    switch (n.type) {
      case 3: return !t; case 4: return t===!1; case 5: return isNaN(t); case 6: return isNaN(t)||1>t;
    }
  } return !1;
} function fe(e, t, n, r, l, o, i) {
  this.acceptsBooleans=t===2||t===3||t===4, this.attributeName=r, this.attributeNamespace=l, this.mustUseProperty=n, this.propertyName=e, this.type=t, this.sanitizeURL=o, this.removeEmptyString=i;
} const re={}; 'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'.split(' ').forEach(function(e) {
  re[e]=new fe(e, 0, !1, e, null, !1, !1);
}); [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function(e) {
  const t=e[0]; re[t]=new fe(t, 1, !1, e[1], null, !1, !1);
}); ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(e) {
  re[e]=new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
}); ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function(e) {
  re[e]=new fe(e, 2, !1, e, null, !1, !1);
}); 'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'.split(' ').forEach(function(e) {
  re[e]=new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
}); ['checked', 'multiple', 'muted', 'selected'].forEach(function(e) {
  re[e]=new fe(e, 3, !0, e, null, !1, !1);
}); ['capture', 'download'].forEach(function(e) {
  re[e]=new fe(e, 4, !1, e, null, !1, !1);
}); ['cols', 'rows', 'size', 'span'].forEach(function(e) {
  re[e]=new fe(e, 6, !1, e, null, !1, !1);
}); ['rowSpan', 'start'].forEach(function(e) {
  re[e]=new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
}); const Ni=/[\-:]([a-z])/g; function Ri(e) {
  return e[1].toUpperCase();
}'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'.split(' ').forEach(function(e) {
  const t=e.replace(Ni, Ri); re[t]=new fe(t, 1, !1, e, null, !1, !1);
}); 'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function(e) {
  const t=e.replace(Ni, Ri); re[t]=new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
}); ['xml:base', 'xml:lang', 'xml:space'].forEach(function(e) {
  const t=e.replace(Ni, Ri); re[t]=new fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
}); ['tabIndex', 'crossOrigin'].forEach(function(e) {
  re[e]=new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
}); re.xlinkHref=new fe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1); ['src', 'href', 'action', 'formAction'].forEach(function(e) {
  re[e]=new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
}); function Pi(e, t, n, r) {
  let l=re.hasOwnProperty(t)?re[t]:null; (l!==null?l.type!==0:r||!(2<t.length)||t[0]!=='o'&&t[0]!=='O'||t[1]!=='n'&&t[1]!=='N')&&(ed(t, n, l, r)&&(n=null), r||l===null?Zf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t, ''+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:'':n:(t=l.attributeName, r=l.attributeNamespace, n===null?e.removeAttribute(t):(l=l.type, n=l===3||l===4&&n===!0?'':''+n, r?e.setAttributeNS(r, t, n):e.setAttribute(t, n))));
} const tt=Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; const gr=Symbol.for('react.element'); const Vt=Symbol.for('react.portal'); const Wt=Symbol.for('react.fragment'); const Ti=Symbol.for('react.strict_mode'); const Co=Symbol.for('react.profiler'); const ia=Symbol.for('react.provider'); const ua=Symbol.for('react.context'); const Oi=Symbol.for('react.forward_ref'); const _o=Symbol.for('react.suspense'); const No=Symbol.for('react.suspense_list'); const Li=Symbol.for('react.memo'); const lt=Symbol.for('react.lazy'); const sa=Symbol.for('react.offscreen'); const Pu=Symbol.iterator; function kn(e) {
  return e===null||typeof e!='object'?null:(e=Pu&&e[Pu]||e['@@iterator'], typeof e=='function'?e:null);
} const H=Object.assign; let Ql; function Ln(e) {
  if (Ql===void 0) {
    try {
      throw Error();
    } catch (n) {
      const t=n.stack.trim().match(/\n( *(at )?)/); Ql=t&&t[1]||'';
    }
  } return `
`+Ql+e;
} let Kl=!1; function ql(e, t) {
  if (!e||Kl) return ''; Kl=!0; const n=Error.prepareStackTrace; Error.prepareStackTrace=void 0; try {
    if (t) {
      if (t=function() {
        throw Error();
      }, Object.defineProperty(t.prototype, 'props', {set: function() {
        throw Error();
      }}), typeof Reflect=='object'&&Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r=a;
        }Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r=a;
        }e.call(t.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (a) {
        r=a;
      }e();
    }
  } catch (a) {
    if (a&&r&&typeof a.stack=='string') {
      for (var l=a.stack.split(`
`), o=r.stack.split(`
`), i=l.length-1, u=o.length-1; 1<=i&&0<=u&&l[i]!==o[u];)u--; for (;1<=i&&0<=u; i--, u--) {
        if (l[i]!==o[u]) {
          if (i!==1||u!==1) {
            do {
              if (i--, u--, 0>u||l[i]!==o[u]) {
                let s=`
`+l[i].replace(' at new ', ' at '); return e.displayName&&s.includes('<anonymous>')&&(s=s.replace('<anonymous>', e.displayName)), s;
              }
            } while (1<=i&&0<=u);
          } break;
        }
      }
    }
  } finally {
    Kl=!1, Error.prepareStackTrace=n;
  } return (e=e?e.displayName||e.name:'')?Ln(e):'';
} function td(e) {
  switch (e.tag) {
    case 5: return Ln(e.type); case 16: return Ln('Lazy'); case 13: return Ln('Suspense'); case 19: return Ln('SuspenseList'); case 0: case 2: case 15: return e=ql(e.type, !1), e; case 11: return e=ql(e.type.render, !1), e; case 1: return e=ql(e.type, !0), e; default: return '';
  }
} function Ro(e) {
  if (e==null) return null; if (typeof e=='function') return e.displayName||e.name||null; if (typeof e=='string') return e; switch (e) {
    case Wt: return 'Fragment'; case Vt: return 'Portal'; case Co: return 'Profiler'; case Ti: return 'StrictMode'; case _o: return 'Suspense'; case No: return 'SuspenseList';
  } if (typeof e=='object') {
    switch (e.$$typeof) {
      case ua: return (e.displayName||'Context')+'.Consumer'; case ia: return (e._context.displayName||'Context')+'.Provider'; case Oi: var t=e.render; return e=e.displayName, e||(e=t.displayName||t.name||'', e=e!==''?'ForwardRef('+e+')':'ForwardRef'), e; case Li: return t=e.displayName||null, t!==null?t:Ro(e.type)||'Memo'; case lt: t=e._payload, e=e._init; try {
        return Ro(e(t));
      } catch {}
    }
  } return null;
} function nd(e) {
  const t=e.type; switch (e.tag) {
    case 24: return 'Cache'; case 9: return (t.displayName||'Context')+'.Consumer'; case 10: return (t._context.displayName||'Context')+'.Provider'; case 18: return 'DehydratedFragment'; case 11: return e=t.render, e=e.displayName||e.name||'', t.displayName||(e!==''?'ForwardRef('+e+')':'ForwardRef'); case 7: return 'Fragment'; case 5: return t; case 4: return 'Portal'; case 3: return 'Root'; case 6: return 'Text'; case 16: return Ro(t); case 8: return t===Ti?'StrictMode':'Mode'; case 22: return 'Offscreen'; case 12: return 'Profiler'; case 21: return 'Scope'; case 13: return 'Suspense'; case 19: return 'SuspenseList'; case 25: return 'TracingMarker'; case 1: case 0: case 17: case 2: case 14: case 15: if (typeof t=='function') return t.displayName||t.name||null; if (typeof t=='string') return t;
  } return null;
} function gt(e) {
  switch (typeof e) {
    case 'boolean': case 'number': case 'string': case 'undefined': return e; case 'object': return e; default: return '';
  }
} function aa(e) {
  const t=e.type; return (e=e.nodeName)&&e.toLowerCase()==='input'&&(t==='checkbox'||t==='radio');
} function rd(e) {
  const t=aa(e)?'checked':'value'; const n=Object.getOwnPropertyDescriptor(e.constructor.prototype, t); let r=''+e[t]; if (!e.hasOwnProperty(t)&&typeof n<'u'&&typeof n.get=='function'&&typeof n.set=='function') {
    const l=n.get; const o=n.set; return Object.defineProperty(e, t, {configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r=''+i, o.call(this, i);
    }}), Object.defineProperty(e, t, {enumerable: n.enumerable}), {getValue: function() {
      return r;
    }, setValue: function(i) {
      r=''+i;
    }, stopTracking: function() {
      e._valueTracker=null, delete e[t];
    }};
  }
} function wr(e) {
  e._valueTracker||(e._valueTracker=rd(e));
} function ca(e) {
  if (!e) return !1; const t=e._valueTracker; if (!t) return !0; const n=t.getValue(); let r=''; return e&&(r=aa(e)?e.checked?'true':'false':e.value), e=r, e!==n?(t.setValue(e), !0):!1;
} function Xr(e) {
  if (e=e||(typeof document<'u'?document:void 0), typeof e>'u') return null; try {
    return e.activeElement||e.body;
  } catch {
    return e.body;
  }
} function Po(e, t) {
  const n=t.checked; return H({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n??e._wrapperState.initialChecked});
} function Tu(e, t) {
  let n=t.defaultValue==null?'':t.defaultValue; const r=t.checked!=null?t.checked:t.defaultChecked; n=gt(t.value!=null?t.value:n), e._wrapperState={initialChecked: r, initialValue: n, controlled: t.type==='checkbox'||t.type==='radio'?t.checked!=null:t.value!=null};
} function fa(e, t) {
  t=t.checked, t!=null&&Pi(e, 'checked', t, !1);
} function To(e, t) {
  fa(e, t); const n=gt(t.value); const r=t.type; if (n!=null)r==='number'?(n===0&&e.value===''||e.value!=n)&&(e.value=''+n):e.value!==''+n&&(e.value=''+n); else if (r==='submit'||r==='reset') {
    e.removeAttribute('value'); return;
  }t.hasOwnProperty('value')?Oo(e, t.type, n):t.hasOwnProperty('defaultValue')&&Oo(e, t.type, gt(t.defaultValue)), t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked);
} function Ou(e, t, n) {
  if (t.hasOwnProperty('value')||t.hasOwnProperty('defaultValue')) {
    const r=t.type; if (!(r!=='submit'&&r!=='reset'||t.value!==void 0&&t.value!==null)) return; t=''+e._wrapperState.initialValue, n||t===e.value||(e.value=t), e.defaultValue=t;
  }n=e.name, n!==''&&(e.name=''), e.defaultChecked=!!e._wrapperState.initialChecked, n!==''&&(e.name=n);
} function Oo(e, t, n) {
  (t!=='number'||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=''+e._wrapperState.initialValue:e.defaultValue!==''+n&&(e.defaultValue=''+n));
} const zn=Array.isArray; function tn(e, t, n, r) {
  if (e=e.options, t) {
    t={}; for (var l=0; l<n.length; l++)t['$'+n[l]]=!0; for (n=0; n<e.length; n++)l=t.hasOwnProperty('$'+e[n].value), e[n].selected!==l&&(e[n].selected=l), l&&r&&(e[n].defaultSelected=!0);
  } else {
    for (n=''+gt(n), t=null, l=0; l<e.length; l++) {
      if (e[l].value===n) {
        e[l].selected=!0, r&&(e[l].defaultSelected=!0); return;
      }t!==null||e[l].disabled||(t=e[l]);
    }t!==null&&(t.selected=!0);
  }
} function Lo(e, t) {
  if (t.dangerouslySetInnerHTML!=null) throw Error(E(91)); return H({}, t, {value: void 0, defaultValue: void 0, children: ''+e._wrapperState.initialValue});
} function Lu(e, t) {
  let n=t.value; if (n==null) {
    if (n=t.children, t=t.defaultValue, n!=null) {
      if (t!=null) throw Error(E(92)); if (zn(n)) {
        if (1<n.length) throw Error(E(93)); n=n[0];
      }t=n;
    }t==null&&(t=''), n=t;
  }e._wrapperState={initialValue: gt(n)};
} function da(e, t) {
  let n=gt(t.value); const r=gt(t.defaultValue); n!=null&&(n=''+n, n!==e.value&&(e.value=n), t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)), r!=null&&(e.defaultValue=''+r);
} function zu(e) {
  const t=e.textContent; t===e._wrapperState.initialValue&&t!==''&&t!==null&&(e.value=t);
} function pa(e) {
  switch (e) {
    case 'svg': return 'http://www.w3.org/2000/svg'; case 'math': return 'http://www.w3.org/1998/Math/MathML'; default: return 'http://www.w3.org/1999/xhtml';
  }
} function zo(e, t) {
  return e==null||e==='http://www.w3.org/1999/xhtml'?pa(t):e==='http://www.w3.org/2000/svg'&&t==='foreignObject'?'http://www.w3.org/1999/xhtml':e;
} let Sr; const ha=function(e) {
  return typeof MSApp<'u'&&MSApp.execUnsafeLocalFunction?function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  }:e;
}(function(e, t) {
  if (e.namespaceURI!=='http://www.w3.org/2000/svg'||'innerHTML'in e)e.innerHTML=t; else {
    for (Sr=Sr||document.createElement('div'), Sr.innerHTML='<svg>'+t.valueOf().toString()+'</svg>', t=Sr.firstChild; e.firstChild;)e.removeChild(e.firstChild); for (;t.firstChild;)e.appendChild(t.firstChild);
  }
}); function Qn(e, t) {
  if (t) {
    const n=e.firstChild; if (n&&n===e.lastChild&&n.nodeType===3) {
      n.nodeValue=t; return;
    }
  }e.textContent=t;
} const An={animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0}; const ld=['Webkit', 'ms', 'Moz', 'O']; Object.keys(An).forEach(function(e) {
  ld.forEach(function(t) {
    t=t+e.charAt(0).toUpperCase()+e.substring(1), An[t]=An[e];
  });
}); function ma(e, t, n) {
  return t==null||typeof t=='boolean'||t===''?'':n||typeof t!='number'||t===0||An.hasOwnProperty(e)&&An[e]?(''+t).trim():t+'px';
} function ya(e, t) {
  e=e.style; for (let n in t) {
    if (t.hasOwnProperty(n)) {
      const r=n.indexOf('--')===0; const l=ma(n, t[n], r); n==='float'&&(n='cssFloat'), r?e.setProperty(n, l):e[n]=l;
    }
  }
} const od=H({menuitem: !0}, {area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0}); function Fo(e, t) {
  if (t) {
    if (od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null)) throw Error(E(137, e)); if (t.dangerouslySetInnerHTML!=null) {
      if (t.children!=null) throw Error(E(60)); if (typeof t.dangerouslySetInnerHTML!='object'||!('__html'in t.dangerouslySetInnerHTML)) throw Error(E(61));
    } if (t.style!=null&&typeof t.style!='object') throw Error(E(62));
  }
} function Do(e, t) {
  if (e.indexOf('-')===-1) return typeof t.is=='string'; switch (e) {
    case 'annotation-xml': case 'color-profile': case 'font-face': case 'font-face-src': case 'font-face-uri': case 'font-face-format': case 'font-face-name': case 'missing-glyph': return !1; default: return !0;
  }
} let Ao=null; function zi(e) {
  return e=e.target||e.srcElement||window, e.correspondingUseElement&&(e=e.correspondingUseElement), e.nodeType===3?e.parentNode:e;
} let jo=null; let nn=null; let rn=null; function Fu(e) {
  if (e=fr(e)) {
    if (typeof jo!='function') throw Error(E(280)); let t=e.stateNode; t&&(t=_l(t), jo(e.stateNode, e.type, t));
  }
} function va(e) {
nn?rn?rn.push(e):rn=[e]:nn=e;
} function ga() {
  if (nn) {
    let e=nn; const t=rn; if (rn=nn=null, Fu(e), t) for (e=0; e<t.length; e++)Fu(t[e]);
  }
} function wa(e, t) {
  return e(t);
} function Sa() {} let Xl=!1; function Ea(e, t, n) {
  if (Xl) return e(t, n); Xl=!0; try {
    return wa(e, t, n);
  } finally {
    Xl=!1, (nn!==null||rn!==null)&&(Sa(), ga());
  }
} function Kn(e, t) {
  let n=e.stateNode; if (n===null) return null; let r=_l(n); if (r===null) return null; n=r[t]; e:switch (t) {
    case 'onClick': case 'onClickCapture': case 'onDoubleClick': case 'onDoubleClickCapture': case 'onMouseDown': case 'onMouseDownCapture': case 'onMouseMove': case 'onMouseMoveCapture': case 'onMouseUp': case 'onMouseUpCapture': case 'onMouseEnter': (r=!r.disabled)||(e=e.type, r=!(e==='button'||e==='input'||e==='select'||e==='textarea')), e=!r; break e; default: e=!1;
  } if (e) return null; if (n&&typeof n!='function') throw Error(E(231, t, typeof n)); return n;
} let Mo=!1; if (Ge) {
  try {
    const xn={}; Object.defineProperty(xn, 'passive', {get: function() {
      Mo=!0;
    }}), window.addEventListener('test', xn, xn), window.removeEventListener('test', xn, xn);
  } catch {
    Mo=!1;
  }
} function id(e, t, n, r, l, o, i, u, s) {
  const a=Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
} let jn=!1; let Jr=null; let Yr=!1; let Uo=null; const ud={onError: function(e) {
  jn=!0, Jr=e;
}}; function sd(e, t, n, r, l, o, i, u, s) {
  jn=!1, Jr=null, id.apply(ud, arguments);
} function ad(e, t, n, r, l, o, i, u, s) {
  if (sd.apply(this, arguments), jn) {
    if (jn) {
      var a=Jr; jn=!1, Jr=null;
    } else throw Error(E(198)); Yr||(Yr=!0, Uo=a);
  }
} function $t(e) {
  let t=e; let n=e; if (e.alternate) for (;t.return;)t=t.return; else {
    e=t; do t=e, t.flags&4098&&(n=t.return), e=t.return; while (e);
  } return t.tag===3?n:null;
} function ka(e) {
  if (e.tag===13) {
    let t=e.memoizedState; if (t===null&&(e=e.alternate, e!==null&&(t=e.memoizedState)), t!==null) return t.dehydrated;
  } return null;
} function Du(e) {
  if ($t(e)!==e) throw Error(E(188));
} function cd(e) {
  let t=e.alternate; if (!t) {
    if (t=$t(e), t===null) throw Error(E(188)); return t!==e?null:e;
  } for (var n=e, r=t; ;) {
    const l=n.return; if (l===null) break; let o=l.alternate; if (o===null) {
      if (r=l.return, r!==null) {
        n=r; continue;
      } break;
    } if (l.child===o.child) {
      for (o=l.child; o;) {
        if (o===n) return Du(l), e; if (o===r) return Du(l), t; o=o.sibling;
      } throw Error(E(188));
    } if (n.return!==r.return)n=l, r=o; else {
      for (var i=!1, u=l.child; u;) {
        if (u===n) {
          i=!0, n=l, r=o; break;
        } if (u===r) {
          i=!0, r=l, n=o; break;
        }u=u.sibling;
      } if (!i) {
        for (u=o.child; u;) {
          if (u===n) {
            i=!0, n=o, r=l; break;
          } if (u===r) {
            i=!0, r=o, n=l; break;
          }u=u.sibling;
        } if (!i) throw Error(E(189));
      }
    } if (n.alternate!==r) throw Error(E(190));
  } if (n.tag!==3) throw Error(E(188)); return n.stateNode.current===n?e:t;
} function xa(e) {
  return e=cd(e), e!==null?Ca(e):null;
} function Ca(e) {
  if (e.tag===5||e.tag===6) return e; for (e=e.child; e!==null;) {
    const t=Ca(e); if (t!==null) return t; e=e.sibling;
  } return null;
} const _a=Ee.unstable_scheduleCallback; const Au=Ee.unstable_cancelCallback; const fd=Ee.unstable_shouldYield; const dd=Ee.unstable_requestPaint; const q=Ee.unstable_now; const pd=Ee.unstable_getCurrentPriorityLevel; const Fi=Ee.unstable_ImmediatePriority; const Na=Ee.unstable_UserBlockingPriority; const Gr=Ee.unstable_NormalPriority; const hd=Ee.unstable_LowPriority; const Ra=Ee.unstable_IdlePriority; let El=null; let We=null; function md(e) {
  if (We&&typeof We.onCommitFiberRoot=='function') {
    try {
      We.onCommitFiberRoot(El, e, void 0, (e.current.flags&128)===128);
    } catch {}
  }
} const je=Math.clz32?Math.clz32:gd; const yd=Math.log; const vd=Math.LN2; function gd(e) {
  return e>>>=0, e===0?32:31-(yd(e)/vd|0)|0;
} let Er=64; let kr=4194304; function Fn(e) {
  switch (e&-e) {
    case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return e&4194240; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return e&130023424; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 1073741824; default: return e;
  }
} function Zr(e, t) {
  let n=e.pendingLanes; if (n===0) return 0; let r=0; let l=e.suspendedLanes; let o=e.pingedLanes; let i=n&268435455; if (i!==0) {
    const u=i&~l; u!==0?r=Fn(u):(o&=i, o!==0&&(r=Fn(o)));
  } else i=n&~l, i!==0?r=Fn(i):o!==0&&(r=Fn(o)); if (r===0) return 0; if (t!==0&&t!==r&&!(t&l)&&(l=r&-r, o=t&-t, l>=o||l===16&&(o&4194240)!==0)) return t; if (r&4&&(r|=n&16), t=e.entangledLanes, t!==0) for (e=e.entanglements, t&=r; 0<t;)n=31-je(t), l=1<<n, r|=e[n], t&=~l; return r;
} function wd(e, t) {
  switch (e) {
    case 1: case 2: case 4: return t+250; case 8: case 16: case 32: case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t+5e3; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return -1; case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1;
  }
} function Sd(e, t) {
  for (let n=e.suspendedLanes, r=e.pingedLanes, l=e.expirationTimes, o=e.pendingLanes; 0<o;) {
    const i=31-je(o); const u=1<<i; const s=l[i]; s===-1?(!(u&n)||u&r)&&(l[i]=wd(u, t)):s<=t&&(e.expiredLanes|=u), o&=~u;
  }
} function Io(e) {
  return e=e.pendingLanes&-1073741825, e!==0?e:e&1073741824?1073741824:0;
} function Pa() {
  const e=Er; return Er<<=1, !(Er&4194240)&&(Er=64), e;
} function Jl(e) {
  for (var t=[], n=0; 31>n; n++)t.push(e); return t;
} function ar(e, t, n) {
  e.pendingLanes|=t, t!==536870912&&(e.suspendedLanes=0, e.pingedLanes=0), e=e.eventTimes, t=31-je(t), e[t]=n;
} function Ed(e, t) {
  let n=e.pendingLanes&~t; e.pendingLanes=t, e.suspendedLanes=0, e.pingedLanes=0, e.expiredLanes&=t, e.mutableReadLanes&=t, e.entangledLanes&=t, t=e.entanglements; const r=e.eventTimes; for (e=e.expirationTimes; 0<n;) {
    const l=31-je(n); const o=1<<l; t[l]=0, r[l]=-1, e[l]=-1, n&=~o;
  }
} function Di(e, t) {
  let n=e.entangledLanes|=t; for (e=e.entanglements; n;) {
    const r=31-je(n); const l=1<<r; l&t|e[r]&t&&(e[r]|=t), n&=~l;
  }
} let A=0; function Ta(e) {
  return e&=-e, 1<e?4<e?e&268435455?16:536870912:4:1;
} let Oa; let Ai; let La; let za; let Fa; let Bo=!1; const xr=[]; let ct=null; let ft=null; let dt=null; const qn=new Map; const Xn=new Map; const it=[]; const kd='mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(' '); function ju(e, t) {
  switch (e) {
    case 'focusin': case 'focusout': ct=null; break; case 'dragenter': case 'dragleave': ft=null; break; case 'mouseover': case 'mouseout': dt=null; break; case 'pointerover': case 'pointerout': qn.delete(t.pointerId); break; case 'gotpointercapture': case 'lostpointercapture': Xn.delete(t.pointerId);
  }
} function Cn(e, t, n, r, l, o) {
  return e===null||e.nativeEvent!==o?(e={blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l]}, t!==null&&(t=fr(t), t!==null&&Ai(t)), e):(e.eventSystemFlags|=r, t=e.targetContainers, l!==null&&t.indexOf(l)===-1&&t.push(l), e);
} function xd(e, t, n, r, l) {
  switch (t) {
    case 'focusin': return ct=Cn(ct, e, t, n, r, l), !0; case 'dragenter': return ft=Cn(ft, e, t, n, r, l), !0; case 'mouseover': return dt=Cn(dt, e, t, n, r, l), !0; case 'pointerover': var o=l.pointerId; return qn.set(o, Cn(qn.get(o)||null, e, t, n, r, l)), !0; case 'gotpointercapture': return o=l.pointerId, Xn.set(o, Cn(Xn.get(o)||null, e, t, n, r, l)), !0;
  } return !1;
} function Da(e) {
  let t=Pt(e.target); if (t!==null) {
    const n=$t(t); if (n!==null) {
      if (t=n.tag, t===13) {
        if (t=ka(n), t!==null) {
          e.blockedOn=t, Fa(e.priority, function() {
            La(n);
          }); return;
        }
      } else if (t===3&&n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn=n.tag===3?n.stateNode.containerInfo:null; return;
      }
    }
  }e.blockedOn=null;
} function jr(e) {
  if (e.blockedOn!==null) return !1; for (let t=e.targetContainers; 0<t.length;) {
    let n=$o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (n===null) {
      n=e.nativeEvent; const r=new n.constructor(n.type, n); Ao=r, n.target.dispatchEvent(r), Ao=null;
    } else return t=fr(n), t!==null&&Ai(t), e.blockedOn=n, !1; t.shift();
  } return !0;
} function Mu(e, t, n) {
  jr(e)&&n.delete(t);
} function Cd() {
  Bo=!1, ct!==null&&jr(ct)&&(ct=null), ft!==null&&jr(ft)&&(ft=null), dt!==null&&jr(dt)&&(dt=null), qn.forEach(Mu), Xn.forEach(Mu);
} function _n(e, t) {
  e.blockedOn===t&&(e.blockedOn=null, Bo||(Bo=!0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Cd)));
} function Jn(e) {
  function t(l) {
    return _n(l, e);
  } if (0<xr.length) {
    _n(xr[0], e); for (var n=1; n<xr.length; n++) {
      var r=xr[n]; r.blockedOn===e&&(r.blockedOn=null);
    }
  } for (ct!==null&&_n(ct, e), ft!==null&&_n(ft, e), dt!==null&&_n(dt, e), qn.forEach(t), Xn.forEach(t), n=0; n<it.length; n++)r=it[n], r.blockedOn===e&&(r.blockedOn=null); for (;0<it.length&&(n=it[0], n.blockedOn===null);)Da(n), n.blockedOn===null&&it.shift();
} const ln=tt.ReactCurrentBatchConfig; let br=!0; function _d(e, t, n, r) {
  const l=A; const o=ln.transition; ln.transition=null; try {
    A=1, ji(e, t, n, r);
  } finally {
    A=l, ln.transition=o;
  }
} function Nd(e, t, n, r) {
  const l=A; const o=ln.transition; ln.transition=null; try {
    A=4, ji(e, t, n, r);
  } finally {
    A=l, ln.transition=o;
  }
} function ji(e, t, n, r) {
  if (br) {
    let l=$o(e, t, n, r); if (l===null)oo(e, t, r, el, n), ju(e, r); else if (xd(l, e, t, n, r))r.stopPropagation(); else if (ju(e, r), t&4&&-1<kd.indexOf(e)) {
      for (;l!==null;) {
        let o=fr(l); if (o!==null&&Oa(o), o=$o(e, t, n, r), o===null&&oo(e, t, r, el, n), o===l) break; l=o;
      }l!==null&&r.stopPropagation();
    } else oo(e, t, r, null, n);
  }
} var el=null; function $o(e, t, n, r) {
  if (el=null, e=zi(r), e=Pt(e), e!==null) {
    if (t=$t(e), t===null)e=null; else if (n=t.tag, n===13) {
      if (e=ka(t), e!==null) return e; e=null;
    } else if (n===3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag===3?t.stateNode.containerInfo:null; e=null;
    } else t!==e&&(e=null);
  } return el=e, null;
} function Aa(e) {
  switch (e) {
    case 'cancel': case 'click': case 'close': case 'contextmenu': case 'copy': case 'cut': case 'auxclick': case 'dblclick': case 'dragend': case 'dragstart': case 'drop': case 'focusin': case 'focusout': case 'input': case 'invalid': case 'keydown': case 'keypress': case 'keyup': case 'mousedown': case 'mouseup': case 'paste': case 'pause': case 'play': case 'pointercancel': case 'pointerdown': case 'pointerup': case 'ratechange': case 'reset': case 'resize': case 'seeked': case 'submit': case 'touchcancel': case 'touchend': case 'touchstart': case 'volumechange': case 'change': case 'selectionchange': case 'textInput': case 'compositionstart': case 'compositionend': case 'compositionupdate': case 'beforeblur': case 'afterblur': case 'beforeinput': case 'blur': case 'fullscreenchange': case 'focus': case 'hashchange': case 'popstate': case 'select': case 'selectstart': return 1; case 'drag': case 'dragenter': case 'dragexit': case 'dragleave': case 'dragover': case 'mousemove': case 'mouseout': case 'mouseover': case 'pointermove': case 'pointerout': case 'pointerover': case 'scroll': case 'toggle': case 'touchmove': case 'wheel': case 'mouseenter': case 'mouseleave': case 'pointerenter': case 'pointerleave': return 4; case 'message': switch (pd()) {
      case Fi: return 1; case Na: return 4; case Gr: case hd: return 16; case Ra: return 536870912; default: return 16;
    } default: return 16;
  }
} let st=null; let Mi=null; let Mr=null; function ja() {
  if (Mr) return Mr; let e; const t=Mi; const n=t.length; let r; const l='value'in st?st.value:st.textContent; const o=l.length; for (e=0; e<n&&t[e]===l[e]; e++);const i=n-e; for (r=1; r<=i&&t[n-r]===l[o-r]; r++);return Mr=l.slice(e, 1<r?1-r:void 0);
} function Ur(e) {
  const t=e.keyCode; return 'charCode'in e?(e=e.charCode, e===0&&t===13&&(e=13)):e=t, e===10&&(e=13), 32<=e||e===13?e:0;
} function Cr() {
  return !0;
} function Uu() {
  return !1;
} function xe(e) {
  function t(n, r, l, o, i) {
    this._reactName=n, this._targetInst=l, this.type=r, this.nativeEvent=o, this.target=i, this.currentTarget=null; for (const u in e)e.hasOwnProperty(u)&&(n=e[u], this[u]=n?n(o):o[u]); return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Cr:Uu, this.isPropagationStopped=Uu, this;
  } return H(t.prototype, {preventDefault: function() {
    this.defaultPrevented=!0; const n=this.nativeEvent; n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!='unknown'&&(n.returnValue=!1), this.isDefaultPrevented=Cr);
  }, stopPropagation: function() {
    const n=this.nativeEvent; n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!='unknown'&&(n.cancelBubble=!0), this.isPropagationStopped=Cr);
  }, persist: function() {}, isPersistent: Cr}), t;
} const yn={eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp||Date.now();
}, defaultPrevented: 0, isTrusted: 0}; const Ui=xe(yn); const cr=H({}, yn, {view: 0, detail: 0}); const Rd=xe(cr); let Yl; let Gl; let Nn; const kl=H({}, cr, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ii, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget;
}, movementX: function(e) {
  return 'movementX'in e?e.movementX:(e!==Nn&&(Nn&&e.type==='mousemove'?(Yl=e.screenX-Nn.screenX, Gl=e.screenY-Nn.screenY):Gl=Yl=0, Nn=e), Yl);
}, movementY: function(e) {
  return 'movementY'in e?e.movementY:Gl;
}}); const Iu=xe(kl); const Pd=H({}, kl, {dataTransfer: 0}); const Td=xe(Pd); const Od=H({}, cr, {relatedTarget: 0}); const Zl=xe(Od); const Ld=H({}, yn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}); const zd=xe(Ld); const Fd=H({}, yn, {clipboardData: function(e) {
  return 'clipboardData'in e?e.clipboardData:window.clipboardData;
}}); const Dd=xe(Fd); const Ad=H({}, yn, {data: 0}); const Bu=xe(Ad); const jd={Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified'}; const Md={8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta'}; const Ud={Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'}; function Id(e) {
  const t=this.nativeEvent; return t.getModifierState?t.getModifierState(e):(e=Ud[e])?!!t[e]:!1;
} function Ii() {
  return Id;
} const Bd=H({}, cr, {key: function(e) {
  if (e.key) {
    const t=jd[e.key]||e.key; if (t!=='Unidentified') return t;
  } return e.type==='keypress'?(e=Ur(e), e===13?'Enter':String.fromCharCode(e)):e.type==='keydown'||e.type==='keyup'?Md[e.keyCode]||'Unidentified':'';
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ii, charCode: function(e) {
  return e.type==='keypress'?Ur(e):0;
}, keyCode: function(e) {
  return e.type==='keydown'||e.type==='keyup'?e.keyCode:0;
}, which: function(e) {
  return e.type==='keypress'?Ur(e):e.type==='keydown'||e.type==='keyup'?e.keyCode:0;
}}); const $d=xe(Bd); const Hd=H({}, kl, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0}); const $u=xe(Hd); const Vd=H({}, cr, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ii}); const Wd=xe(Vd); const Qd=H({}, yn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}); const Kd=xe(Qd); const qd=H({}, kl, {deltaX: function(e) {
  return 'deltaX'in e?e.deltaX:'wheelDeltaX'in e?-e.wheelDeltaX:0;
}, deltaY: function(e) {
  return 'deltaY'in e?e.deltaY:'wheelDeltaY'in e?-e.wheelDeltaY:'wheelDelta'in e?-e.wheelDelta:0;
}, deltaZ: 0, deltaMode: 0}); const Xd=xe(qd); const Jd=[9, 13, 27, 32]; const Bi=Ge&&'CompositionEvent'in window; let Mn=null; Ge&&'documentMode'in document&&(Mn=document.documentMode); const Yd=Ge&&'TextEvent'in window&&!Mn; const Ma=Ge&&(!Bi||Mn&&8<Mn&&11>=Mn); const Hu=' '; let Vu=!1; function Ua(e, t) {
  switch (e) {
    case 'keyup': return Jd.indexOf(t.keyCode)!==-1; case 'keydown': return t.keyCode!==229; case 'keypress': case 'mousedown': case 'focusout': return !0; default: return !1;
  }
} function Ia(e) {
  return e=e.detail, typeof e=='object'&&'data'in e?e.data:null;
} let Qt=!1; function Gd(e, t) {
  switch (e) {
    case 'compositionend': return Ia(t); case 'keypress': return t.which!==32?null:(Vu=!0, Hu); case 'textInput': return e=t.data, e===Hu&&Vu?null:e; default: return null;
  }
} function Zd(e, t) {
  if (Qt) return e==='compositionend'||!Bi&&Ua(e, t)?(e=ja(), Mr=Mi=st=null, Qt=!1, e):null; switch (e) {
    case 'paste': return null; case 'keypress': if (!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey) {
      if (t.char&&1<t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which);
    } return null; case 'compositionend': return Ma&&t.locale!=='ko'?null:t.data; default: return null;
  }
} const bd={'color': !0, 'date': !0, 'datetime': !0, 'datetime-local': !0, 'email': !0, 'month': !0, 'number': !0, 'password': !0, 'range': !0, 'search': !0, 'tel': !0, 'text': !0, 'time': !0, 'url': !0, 'week': !0}; function Wu(e) {
  const t=e&&e.nodeName&&e.nodeName.toLowerCase(); return t==='input'?!!bd[e.type]:t==='textarea';
} function Ba(e, t, n, r) {
  va(r), t=tl(t, 'onChange'), 0<t.length&&(n=new Ui('onChange', 'change', null, n, r), e.push({event: n, listeners: t}));
} let Un=null; let Yn=null; function ep(e) {
  Ga(e, 0);
} function xl(e) {
  const t=Xt(e); if (ca(t)) return e;
} function tp(e, t) {
  if (e==='change') return t;
} let $a=!1; if (Ge) {
  let bl; if (Ge) {
    let eo='oninput'in document; if (!eo) {
      const Qu=document.createElement('div'); Qu.setAttribute('oninput', 'return;'), eo=typeof Qu.oninput=='function';
    }bl=eo;
  } else bl=!1; $a=bl&&(!document.documentMode||9<document.documentMode);
} function Ku() {
  Un&&(Un.detachEvent('onpropertychange', Ha), Yn=Un=null);
} function Ha(e) {
  if (e.propertyName==='value'&&xl(Yn)) {
    const t=[]; Ba(t, Yn, e, zi(e)), Ea(ep, t);
  }
} function np(e, t, n) {
e==='focusin'?(Ku(), Un=t, Yn=n, Un.attachEvent('onpropertychange', Ha)):e==='focusout'&&Ku();
} function rp(e) {
  if (e==='selectionchange'||e==='keyup'||e==='keydown') return xl(Yn);
} function lp(e, t) {
  if (e==='click') return xl(t);
} function op(e, t) {
  if (e==='input'||e==='change') return xl(t);
} function ip(e, t) {
  return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t;
} const Ie=typeof Object.is=='function'?Object.is:ip; function Gn(e, t) {
  if (Ie(e, t)) return !0; if (typeof e!='object'||e===null||typeof t!='object'||t===null) return !1; const n=Object.keys(e); let r=Object.keys(t); if (n.length!==r.length) return !1; for (r=0; r<n.length; r++) {
    const l=n[r]; if (!xo.call(t, l)||!Ie(e[l], t[l])) return !1;
  } return !0;
} function qu(e) {
  for (;e&&e.firstChild;)e=e.firstChild; return e;
} function Xu(e, t) {
  let n=qu(e); e=0; for (var r; n;) {
    if (n.nodeType===3) {
      if (r=e+n.textContent.length, e<=t&&r>=t) return {node: n, offset: t-e}; e=r;
    }e: {
      for (;n;) {
        if (n.nextSibling) {
          n=n.nextSibling; break e;
        }n=n.parentNode;
      }n=void 0;
    }n=qu(n);
  }
} function Va(e, t) {
  return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Va(e, t.parentNode):'contains'in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1;
} function Wa() {
  for (var e=window, t=Xr(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n=typeof t.contentWindow.location.href=='string';
    } catch {
      n=!1;
    } if (n)e=t.contentWindow; else break; t=Xr(e.document);
  } return t;
} function $i(e) {
  const t=e&&e.nodeName&&e.nodeName.toLowerCase(); return t&&(t==='input'&&(e.type==='text'||e.type==='search'||e.type==='tel'||e.type==='url'||e.type==='password')||t==='textarea'||e.contentEditable==='true');
} function up(e) {
  let t=Wa(); let n=e.focusedElem; let r=e.selectionRange; if (t!==n&&n&&n.ownerDocument&&Va(n.ownerDocument.documentElement, n)) {
    if (r!==null&&$i(n)) {
      if (t=r.start, e=r.end, e===void 0&&(e=t), 'selectionStart'in n)n.selectionStart=t, n.selectionEnd=Math.min(e, n.value.length); else if (e=(t=n.ownerDocument||document)&&t.defaultView||window, e.getSelection) {
        e=e.getSelection(); let l=n.textContent.length; let o=Math.min(r.start, l); r=r.end===void 0?o:Math.min(r.end, l), !e.extend&&o>r&&(l=r, r=o, o=l), l=Xu(n, o); const i=Xu(n, r); l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o>r?(e.addRange(t), e.extend(i.node, i.offset)):(t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    } for (t=[], e=n; e=e.parentNode;)e.nodeType===1&&t.push({element: e, left: e.scrollLeft, top: e.scrollTop}); for (typeof n.focus=='function'&&n.focus(), n=0; n<t.length; n++)e=t[n], e.element.scrollLeft=e.left, e.element.scrollTop=e.top;
  }
} const sp=Ge&&'documentMode'in document&&11>=document.documentMode; let Kt=null; let Ho=null; let In=null; let Vo=!1; function Ju(e, t, n) {
  let r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument; Vo||Kt==null||Kt!==Xr(r)||(r=Kt, 'selectionStart'in r&&$i(r)?r={start: r.selectionStart, end: r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(), r={anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset}), In&&Gn(In, r)||(In=r, r=tl(Ho, 'onSelect'), 0<r.length&&(t=new Ui('onSelect', 'select', null, t, n), e.push({event: t, listeners: r}), t.target=Kt)));
} function _r(e, t) {
  const n={}; return n[e.toLowerCase()]=t.toLowerCase(), n['Webkit'+e]='webkit'+t, n['Moz'+e]='moz'+t, n;
} const qt={animationend: _r('Animation', 'AnimationEnd'), animationiteration: _r('Animation', 'AnimationIteration'), animationstart: _r('Animation', 'AnimationStart'), transitionend: _r('Transition', 'TransitionEnd')}; const to={}; let Qa={}; Ge&&(Qa=document.createElement('div').style, 'AnimationEvent'in window||(delete qt.animationend.animation, delete qt.animationiteration.animation, delete qt.animationstart.animation), 'TransitionEvent'in window||delete qt.transitionend.transition); function Cl(e) {
  if (to[e]) return to[e]; if (!qt[e]) return e; const t=qt[e]; let n; for (n in t) if (t.hasOwnProperty(n)&&n in Qa) return to[e]=t[n]; return e;
} const Ka=Cl('animationend'); const qa=Cl('animationiteration'); const Xa=Cl('animationstart'); const Ja=Cl('transitionend'); const Ya=new Map; const Yu='abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(' '); function St(e, t) {
  Ya.set(e, t), Bt(t, [e]);
} for (let no=0; no<Yu.length; no++) {
  const ro=Yu[no]; const ap=ro.toLowerCase(); const cp=ro[0].toUpperCase()+ro.slice(1); St(ap, 'on'+cp);
}St(Ka, 'onAnimationEnd'); St(qa, 'onAnimationIteration'); St(Xa, 'onAnimationStart'); St('dblclick', 'onDoubleClick'); St('focusin', 'onFocus'); St('focusout', 'onBlur'); St(Ja, 'onTransitionEnd'); sn('onMouseEnter', ['mouseout', 'mouseover']); sn('onMouseLeave', ['mouseout', 'mouseover']); sn('onPointerEnter', ['pointerout', 'pointerover']); sn('onPointerLeave', ['pointerout', 'pointerover']); Bt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')); Bt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')); Bt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']); Bt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')); Bt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')); Bt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')); const Dn='abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '); const fp=new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dn)); function Gu(e, t, n) {
  const r=e.type||'unknown-event'; e.currentTarget=n, ad(r, t, void 0, e), e.currentTarget=null;
} function Ga(e, t) {
  t=(t&4)!==0; for (let n=0; n<e.length; n++) {
    let r=e[n]; const l=r.event; r=r.listeners; e: {
      let o=void 0; if (t) {
        for (var i=r.length-1; 0<=i; i--) {
          var u=r[i]; var s=u.instance; var a=u.currentTarget; if (u=u.listener, s!==o&&l.isPropagationStopped()) break e; Gu(l, u, a), o=s;
        }
      } else {
        for (i=0; i<r.length; i++) {
          if (u=r[i], s=u.instance, a=u.currentTarget, u=u.listener, s!==o&&l.isPropagationStopped()) break e; Gu(l, u, a), o=s;
        }
      }
    }
  } if (Yr) throw e=Uo, Yr=!1, Uo=null, e;
} function M(e, t) {
  let n=t[Xo]; n===void 0&&(n=t[Xo]=new Set); const r=e+'__bubble'; n.has(r)||(Za(t, e, 2, !1), n.add(r));
} function lo(e, t, n) {
  let r=0; t&&(r|=4), Za(n, e, r, t);
} const Nr='_reactListening'+Math.random().toString(36).slice(2); function Zn(e) {
  if (!e[Nr]) {
    e[Nr]=!0, oa.forEach(function(n) {
      n!=='selectionchange'&&(fp.has(n)||lo(n, !1, e), lo(n, !0, e));
    }); const t=e.nodeType===9?e:e.ownerDocument; t===null||t[Nr]||(t[Nr]=!0, lo('selectionchange', !1, t));
  }
} function Za(e, t, n, r) {
  switch (Aa(t)) {
    case 1: var l=_d; break; case 4: l=Nd; break; default: l=ji;
  }n=l.bind(null, t, n, e), l=void 0, !Mo||t!=='touchstart'&&t!=='touchmove'&&t!=='wheel'||(l=!0), r?l!==void 0?e.addEventListener(t, n, {capture: !0, passive: l}):e.addEventListener(t, n, !0):l!==void 0?e.addEventListener(t, n, {passive: l}):e.addEventListener(t, n, !1);
} function oo(e, t, n, r, l) {
  let o=r; if (!(t&1)&&!(t&2)&&r!==null) {
    e:for (;;) {
      if (r===null) return; let i=r.tag; if (i===3||i===4) {
        let u=r.stateNode.containerInfo; if (u===l||u.nodeType===8&&u.parentNode===l) break; if (i===4) {
          for (i=r.return; i!==null;) {
            var s=i.tag; if ((s===3||s===4)&&(s=i.stateNode.containerInfo, s===l||s.nodeType===8&&s.parentNode===l)) return; i=i.return;
          }
        } for (;u!==null;) {
          if (i=Pt(u), i===null) return; if (s=i.tag, s===5||s===6) {
            r=o=i; continue e;
          }u=u.parentNode;
        }
      }r=r.return;
    }
  }Ea(function() {
    let a=o; let f=zi(n); const h=[]; e: {
      var y=Ya.get(e); if (y!==void 0) {
        var w=Ui; var m=e; switch (e) {
          case 'keypress': if (Ur(n)===0) break e; case 'keydown': case 'keyup': w=$d; break; case 'focusin': m='focus', w=Zl; break; case 'focusout': m='blur', w=Zl; break; case 'beforeblur': case 'afterblur': w=Zl; break; case 'click': if (n.button===2) break e; case 'auxclick': case 'dblclick': case 'mousedown': case 'mousemove': case 'mouseup': case 'mouseout': case 'mouseover': case 'contextmenu': w=Iu; break; case 'drag': case 'dragend': case 'dragenter': case 'dragexit': case 'dragleave': case 'dragover': case 'dragstart': case 'drop': w=Td; break; case 'touchcancel': case 'touchend': case 'touchmove': case 'touchstart': w=Wd; break; case Ka: case qa: case Xa: w=zd; break; case Ja: w=Kd; break; case 'scroll': w=Rd; break; case 'wheel': w=Xd; break; case 'copy': case 'cut': case 'paste': w=Dd; break; case 'gotpointercapture': case 'lostpointercapture': case 'pointercancel': case 'pointerdown': case 'pointermove': case 'pointerout': case 'pointerover': case 'pointerup': w=$u;
        } var g=(t&4)!==0; var P=!g&&e==='scroll'; var d=g?y!==null?y+'Capture':null:y; g=[]; for (var c=a, p; c!==null;) {
          p=c; var S=p.stateNode; if (p.tag===5&&S!==null&&(p=S, d!==null&&(S=Kn(c, d), S!=null&&g.push(bn(c, S, p)))), P) break; c=c.return;
        }0<g.length&&(y=new w(y, m, null, n, f), h.push({event: y, listeners: g}));
      }
    } if (!(t&7)) {
      e: {
        if (y=e==='mouseover'||e==='pointerover', w=e==='mouseout'||e==='pointerout', y&&n!==Ao&&(m=n.relatedTarget||n.fromElement)&&(Pt(m)||m[Ze])) break e; if ((w||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window, w?(m=n.relatedTarget||n.toElement, w=a, m=m?Pt(m):null, m!==null&&(P=$t(m), m!==P||m.tag!==5&&m.tag!==6)&&(m=null)):(w=null, m=a), w!==m)) {
          if (g=Iu, S='onMouseLeave', d='onMouseEnter', c='mouse', (e==='pointerout'||e==='pointerover')&&(g=$u, S='onPointerLeave', d='onPointerEnter', c='pointer'), P=w==null?y:Xt(w), p=m==null?y:Xt(m), y=new g(S, c+'leave', w, n, f), y.target=P, y.relatedTarget=p, S=null, Pt(f)===a&&(g=new g(d, c+'enter', m, n, f), g.target=p, g.relatedTarget=P, S=g), P=S, w&&m) {
            t: {
              for (g=w, d=m, c=0, p=g; p; p=Ht(p))c++; for (p=0, S=d; S; S=Ht(S))p++; for (;0<c-p;)g=Ht(g), c--; for (;0<p-c;)d=Ht(d), p--; for (;c--;) {
                if (g===d||d!==null&&g===d.alternate) break t; g=Ht(g), d=Ht(d);
              }g=null;
            }
          } else g=null; w!==null&&Zu(h, y, w, g, !1), m!==null&&P!==null&&Zu(h, P, m, g, !0);
        }
      }e: {
        if (y=a?Xt(a):window, w=y.nodeName&&y.nodeName.toLowerCase(), w==='select'||w==='input'&&y.type==='file') var k=tp; else if (Wu(y)) {
          if ($a)k=op; else {
            k=rp; var x=np;
          }
        } else (w=y.nodeName)&&w.toLowerCase()==='input'&&(y.type==='checkbox'||y.type==='radio')&&(k=lp); if (k&&(k=k(e, a))) {
          Ba(h, k, n, f); break e;
        }x&&x(e, y, a), e==='focusout'&&(x=y._wrapperState)&&x.controlled&&y.type==='number'&&Oo(y, 'number', y.value);
      } switch (x=a?Xt(a):window, e) {
        case 'focusin': (Wu(x)||x.contentEditable==='true')&&(Kt=x, Ho=a, In=null); break; case 'focusout': In=Ho=Kt=null; break; case 'mousedown': Vo=!0; break; case 'contextmenu': case 'mouseup': case 'dragend': Vo=!1, Ju(h, n, f); break; case 'selectionchange': if (sp) break; case 'keydown': case 'keyup': Ju(h, n, f);
      } let _; if (Bi) {
        e: {
          switch (e) {
            case 'compositionstart': var R='onCompositionStart'; break e; case 'compositionend': R='onCompositionEnd'; break e; case 'compositionupdate': R='onCompositionUpdate'; break e;
          }R=void 0;
        }
      } else Qt?Ua(e, n)&&(R='onCompositionEnd'):e==='keydown'&&n.keyCode===229&&(R='onCompositionStart'); R&&(Ma&&n.locale!=='ko'&&(Qt||R!=='onCompositionStart'?R==='onCompositionEnd'&&Qt&&(_=ja()):(st=f, Mi='value'in st?st.value:st.textContent, Qt=!0)), x=tl(a, R), 0<x.length&&(R=new Bu(R, e, null, n, f), h.push({event: R, listeners: x}), _?R.data=_:(_=Ia(n), _!==null&&(R.data=_)))), (_=Yd?Gd(e, n):Zd(e, n))&&(a=tl(a, 'onBeforeInput'), 0<a.length&&(f=new Bu('onBeforeInput', 'beforeinput', null, n, f), h.push({event: f, listeners: a}), f.data=_));
    }Ga(h, t);
  });
} function bn(e, t, n) {
  return {instance: e, listener: t, currentTarget: n};
} function tl(e, t) {
  for (var n=t+'Capture', r=[]; e!==null;) {
    let l=e; let o=l.stateNode; l.tag===5&&o!==null&&(l=o, o=Kn(e, n), o!=null&&r.unshift(bn(e, o, l)), o=Kn(e, t), o!=null&&r.push(bn(e, o, l))), e=e.return;
  } return r;
} function Ht(e) {
  if (e===null) return null; do e=e.return; while (e&&e.tag!==5); return e||null;
} function Zu(e, t, n, r, l) {
  for (var o=t._reactName, i=[]; n!==null&&n!==r;) {
    let u=n; let s=u.alternate; const a=u.stateNode; if (s!==null&&s===r) break; u.tag===5&&a!==null&&(u=a, l?(s=Kn(n, o), s!=null&&i.unshift(bn(n, s, u))):l||(s=Kn(n, o), s!=null&&i.push(bn(n, s, u)))), n=n.return;
  }i.length!==0&&e.push({event: t, listeners: i});
} const dp=/\r\n?/g; const pp=/\u0000|\uFFFD/g; function bu(e) {
  return (typeof e=='string'?e:''+e).replace(dp, `
`).replace(pp, '');
} function Rr(e, t, n) {
  if (t=bu(t), bu(e)!==t&&n) throw Error(E(425));
} function nl() {} let Wo=null; let Qo=null; function Ko(e, t) {
  return e==='textarea'||e==='noscript'||typeof t.children=='string'||typeof t.children=='number'||typeof t.dangerouslySetInnerHTML=='object'&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null;
} const qo=typeof setTimeout=='function'?setTimeout:void 0; const hp=typeof clearTimeout=='function'?clearTimeout:void 0; const es=typeof Promise=='function'?Promise:void 0; const mp=typeof queueMicrotask=='function'?queueMicrotask:typeof es<'u'?function(e) {
  return es.resolve(null).then(e).catch(yp);
}:qo; function yp(e) {
  setTimeout(function() {
    throw e;
  });
} function io(e, t) {
  let n=t; let r=0; do {
    const l=n.nextSibling; if (e.removeChild(n), l&&l.nodeType===8) {
      if (n=l.data, n==='/$') {
        if (r===0) {
          e.removeChild(l), Jn(t); return;
        }r--;
      } else n!=='$'&&n!=='$?'&&n!=='$!'||r++;
    } n=l;
  } while (n); Jn(t);
} function pt(e) {
  for (;e!=null; e=e.nextSibling) {
    let t=e.nodeType; if (t===1||t===3) break; if (t===8) {
      if (t=e.data, t==='$'||t==='$!'||t==='$?') break; if (t==='/$') return null;
    }
  } return e;
} function ts(e) {
  e=e.previousSibling; for (let t=0; e;) {
    if (e.nodeType===8) {
      const n=e.data; if (n==='$'||n==='$!'||n==='$?') {
        if (t===0) return e; t--;
      } else n==='/$'&&t++;
    }e=e.previousSibling;
  } return null;
} const vn=Math.random().toString(36).slice(2); const Ve='__reactFiber$'+vn; const er='__reactProps$'+vn; var Ze='__reactContainer$'+vn; var Xo='__reactEvents$'+vn; const vp='__reactListeners$'+vn; const gp='__reactHandles$'+vn; function Pt(e) {
  let t=e[Ve]; if (t) return t; for (let n=e.parentNode; n;) {
    if (t=n[Ze]||n[Ve]) {
      if (n=t.alternate, t.child!==null||n!==null&&n.child!==null) {
        for (e=ts(e); e!==null;) {
          if (n=e[Ve]) return n; e=ts(e);
        }
      } return t;
    }e=n, n=e.parentNode;
  } return null;
} function fr(e) {
  return e=e[Ve]||e[Ze], !e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e;
} function Xt(e) {
  if (e.tag===5||e.tag===6) return e.stateNode; throw Error(E(33));
} function _l(e) {
  return e[er]||null;
} const Jo=[]; let Jt=-1; function Et(e) {
  return {current: e};
} function U(e) {
  0>Jt||(e.current=Jo[Jt], Jo[Jt]=null, Jt--);
} function j(e, t) {
  Jt++, Jo[Jt]=e.current, e.current=t;
} const wt={}; const ue=Et(wt); const he=Et(!1); let Dt=wt; function an(e, t) {
  const n=e.type.contextTypes; if (!n) return wt; const r=e.stateNode; if (r&&r.__reactInternalMemoizedUnmaskedChildContext===t) return r.__reactInternalMemoizedMaskedChildContext; const l={}; let o; for (o in n)l[o]=t[o]; return r&&(e=e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext=t, e.__reactInternalMemoizedMaskedChildContext=l), l;
} function me(e) {
  return e=e.childContextTypes, e!=null;
} function rl() {
  U(he), U(ue);
} function ns(e, t, n) {
  if (ue.current!==wt) throw Error(E(168)); j(ue, t), j(he, n);
} function ba(e, t, n) {
  let r=e.stateNode; if (t=t.childContextTypes, typeof r.getChildContext!='function') return n; r=r.getChildContext(); for (const l in r) if (!(l in t)) throw Error(E(108, nd(e)||'Unknown', l)); return H({}, n, r);
} function ll(e) {
  return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt, Dt=ue.current, j(ue, e), j(he, he.current), !0;
} function rs(e, t, n) {
  const r=e.stateNode; if (!r) throw Error(E(169)); n?(e=ba(e, t, Dt), r.__reactInternalMemoizedMergedChildContext=e, U(he), U(ue), j(ue, e)):U(he), j(he, n);
} let qe=null; let Nl=!1; let uo=!1; function ec(e) {
qe===null?qe=[e]:qe.push(e);
} function wp(e) {
  Nl=!0, ec(e);
} function kt() {
  if (!uo&&qe!==null) {
    uo=!0; let e=0; const t=A; try {
      const n=qe; for (A=1; e<n.length; e++) {
        let r=n[e]; do r=r(!0); while (r!==null);
      }qe=null, Nl=!1;
    } catch (l) {
      throw qe!==null&&(qe=qe.slice(e+1)), _a(Fi, kt), l;
    } finally {
      A=t, uo=!1;
    }
  } return null;
} const Yt=[]; let Gt=0; let ol=null; let il=0; const Ce=[]; let _e=0; let At=null; let Xe=1; let Je=''; function _t(e, t) {
  Yt[Gt++]=il, Yt[Gt++]=ol, ol=e, il=t;
} function tc(e, t, n) {
  Ce[_e++]=Xe, Ce[_e++]=Je, Ce[_e++]=At, At=e; let r=Xe; e=Je; let l=32-je(r)-1; r&=~(1<<l), n+=1; let o=32-je(t)+l; if (30<o) {
    const i=l-l%5; o=(r&(1<<i)-1).toString(32), r>>=i, l-=i, Xe=1<<32-je(t)+l|n<<l|r, Je=o+e;
  } else Xe=1<<o|n<<l|r, Je=e;
} function Hi(e) {
  e.return!==null&&(_t(e, 1), tc(e, 1, 0));
} function Vi(e) {
  for (;e===ol;)ol=Yt[--Gt], Yt[Gt]=null, il=Yt[--Gt], Yt[Gt]=null; for (;e===At;)At=Ce[--_e], Ce[_e]=null, Je=Ce[--_e], Ce[_e]=null, Xe=Ce[--_e], Ce[_e]=null;
} let Se=null; let we=null; let I=!1; let Ae=null; function nc(e, t) {
  const n=Ne(5, null, null, 0); n.elementType='DELETED', n.stateNode=t, n.return=e, t=e.deletions, t===null?(e.deletions=[n], e.flags|=16):t.push(n);
} function ls(e, t) {
  switch (e.tag) {
    case 5: var n=e.type; return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t, t!==null?(e.stateNode=t, Se=e, we=pt(t.firstChild), !0):!1; case 6: return t=e.pendingProps===''||t.nodeType!==3?null:t, t!==null?(e.stateNode=t, Se=e, we=null, !0):!1; case 13: return t=t.nodeType!==8?null:t, t!==null?(n=At!==null?{id: Xe, overflow: Je}:null, e.memoizedState={dehydrated: t, treeContext: n, retryLane: 1073741824}, n=Ne(18, null, null, 0), n.stateNode=t, n.return=e, e.child=n, Se=e, we=null, !0):!1; default: return !1;
  }
} function Yo(e) {
  return (e.mode&1)!==0&&(e.flags&128)===0;
} function Go(e) {
  if (I) {
    let t=we; if (t) {
      const n=t; if (!ls(e, t)) {
        if (Yo(e)) throw Error(E(418)); t=pt(n.nextSibling); const r=Se; t&&ls(e, t)?nc(r, n):(e.flags=e.flags&-4097|2, I=!1, Se=e);
      }
    } else {
      if (Yo(e)) throw Error(E(418)); e.flags=e.flags&-4097|2, I=!1, Se=e;
    }
  }
} function os(e) {
  for (e=e.return; e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return; Se=e;
} function Pr(e) {
  if (e!==Se) return !1; if (!I) return os(e), I=!0, !1; let t; if ((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type, t=t!=='head'&&t!=='body'&&!Ko(e.type, e.memoizedProps)), t&&(t=we)) {
    if (Yo(e)) throw rc(), Error(E(418)); for (;t;)nc(e, t), t=pt(t.nextSibling);
  } if (os(e), e.tag===13) {
    if (e=e.memoizedState, e=e!==null?e.dehydrated:null, !e) throw Error(E(317)); e: {
      for (e=e.nextSibling, t=0; e;) {
        if (e.nodeType===8) {
          const n=e.data; if (n==='/$') {
            if (t===0) {
              we=pt(e.nextSibling); break e;
            }t--;
          } else n!=='$'&&n!=='$!'&&n!=='$?'||t++;
        }e=e.nextSibling;
      }we=null;
    }
  } else we=Se?pt(e.stateNode.nextSibling):null; return !0;
} function rc() {
  for (let e=we; e;)e=pt(e.nextSibling);
} function cn() {
  we=Se=null, I=!1;
} function Wi(e) {
Ae===null?Ae=[e]:Ae.push(e);
} const Sp=tt.ReactCurrentBatchConfig; function Rn(e, t, n) {
  if (e=n.ref, e!==null&&typeof e!='function'&&typeof e!='object') {
    if (n._owner) {
      if (n=n._owner, n) {
        if (n.tag!==1) throw Error(E(309)); var r=n.stateNode;
      } if (!r) throw Error(E(147, e)); const l=r; const o=''+e; return t!==null&&t.ref!==null&&typeof t.ref=='function'&&t.ref._stringRef===o?t.ref:(t=function(i) {
        const u=l.refs; i===null?delete u[o]:u[o]=i;
      }, t._stringRef=o, t);
    } if (typeof e!='string') throw Error(E(284)); if (!n._owner) throw Error(E(290, e));
  } return e;
} function Tr(e, t) {
  throw e=Object.prototype.toString.call(t), Error(E(31, e==='[object Object]'?'object with keys {'+Object.keys(t).join(', ')+'}':e));
} function is(e) {
  const t=e._init; return t(e._payload);
} function lc(e) {
  function t(d, c) {
    if (e) {
      const p=d.deletions; p===null?(d.deletions=[c], d.flags|=16):p.push(c);
    }
  } function n(d, c) {
    if (!e) return null; for (;c!==null;)t(d, c), c=c.sibling; return null;
  } function r(d, c) {
    for (d=new Map; c!==null;)c.key!==null?d.set(c.key, c):d.set(c.index, c), c=c.sibling; return d;
  } function l(d, c) {
    return d=vt(d, c), d.index=0, d.sibling=null, d;
  } function o(d, c, p) {
    return d.index=p, e?(p=d.alternate, p!==null?(p=p.index, p<c?(d.flags|=2, c):p):(d.flags|=2, c)):(d.flags|=1048576, c);
  } function i(d) {
    return e&&d.alternate===null&&(d.flags|=2), d;
  } function u(d, c, p, S) {
    return c===null||c.tag!==6?(c=mo(p, d.mode, S), c.return=d, c):(c=l(c, p), c.return=d, c);
  } function s(d, c, p, S) {
    const k=p.type; return k===Wt?f(d, c, p.props.children, S, p.key):c!==null&&(c.elementType===k||typeof k=='object'&&k!==null&&k.$$typeof===lt&&is(k)===c.type)?(S=l(c, p.props), S.ref=Rn(d, c, p), S.return=d, S):(S=Qr(p.type, p.key, p.props, null, d.mode, S), S.ref=Rn(d, c, p), S.return=d, S);
  } function a(d, c, p, S) {
    return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=yo(p, d.mode, S), c.return=d, c):(c=l(c, p.children||[]), c.return=d, c);
  } function f(d, c, p, S, k) {
    return c===null||c.tag!==7?(c=zt(p, d.mode, S, k), c.return=d, c):(c=l(c, p), c.return=d, c);
  } function h(d, c, p) {
    if (typeof c=='string'&&c!==''||typeof c=='number') return c=mo(''+c, d.mode, p), c.return=d, c; if (typeof c=='object'&&c!==null) {
      switch (c.$$typeof) {
        case gr: return p=Qr(c.type, c.key, c.props, null, d.mode, p), p.ref=Rn(d, null, c), p.return=d, p; case Vt: return c=yo(c, d.mode, p), c.return=d, c; case lt: var S=c._init; return h(d, S(c._payload), p);
      } if (zn(c)||kn(c)) return c=zt(c, d.mode, p, null), c.return=d, c; Tr(d, c);
    } return null;
  } function y(d, c, p, S) {
    let k=c!==null?c.key:null; if (typeof p=='string'&&p!==''||typeof p=='number') return k!==null?null:u(d, c, ''+p, S); if (typeof p=='object'&&p!==null) {
      switch (p.$$typeof) {
        case gr: return p.key===k?s(d, c, p, S):null; case Vt: return p.key===k?a(d, c, p, S):null; case lt: return k=p._init, y(d, c, k(p._payload), S);
      } if (zn(p)||kn(p)) return k!==null?null:f(d, c, p, S, null); Tr(d, p);
    } return null;
  } function w(d, c, p, S, k) {
    if (typeof S=='string'&&S!==''||typeof S=='number') return d=d.get(p)||null, u(c, d, ''+S, k); if (typeof S=='object'&&S!==null) {
      switch (S.$$typeof) {
        case gr: return d=d.get(S.key===null?p:S.key)||null, s(c, d, S, k); case Vt: return d=d.get(S.key===null?p:S.key)||null, a(c, d, S, k); case lt: var x=S._init; return w(d, c, p, x(S._payload), k);
      } if (zn(S)||kn(S)) return d=d.get(p)||null, f(c, d, S, k, null); Tr(c, S);
    } return null;
  } function m(d, c, p, S) {
    for (var k=null, x=null, _=c, R=c=0, Q=null; _!==null&&R<p.length; R++) {
_.index>R?(Q=_, _=null):Q=_.sibling; const F=y(d, _, p[R], S); if (F===null) {
  _===null&&(_=Q); break;
}e&&_&&F.alternate===null&&t(d, _), c=o(F, c, R), x===null?k=F:x.sibling=F, x=F, _=Q;
    } if (R===p.length) return n(d, _), I&&_t(d, R), k; if (_===null) {
      for (;R<p.length; R++)_=h(d, p[R], S), _!==null&&(c=o(_, c, R), x===null?k=_:x.sibling=_, x=_); return I&&_t(d, R), k;
    } for (_=r(d, _); R<p.length; R++)Q=w(_, d, R, p[R], S), Q!==null&&(e&&Q.alternate!==null&&_.delete(Q.key===null?R:Q.key), c=o(Q, c, R), x===null?k=Q:x.sibling=Q, x=Q); return e&&_.forEach(function(Le) {
      return t(d, Le);
    }), I&&_t(d, R), k;
  } function g(d, c, p, S) {
    let k=kn(p); if (typeof k!='function') throw Error(E(150)); if (p=k.call(p), p==null) throw Error(E(151)); for (var x=k=null, _=c, R=c=0, Q=null, F=p.next(); _!==null&&!F.done; R++, F=p.next()) {
_.index>R?(Q=_, _=null):Q=_.sibling; const Le=y(d, _, F.value, S); if (Le===null) {
  _===null&&(_=Q); break;
}e&&_&&Le.alternate===null&&t(d, _), c=o(Le, c, R), x===null?k=Le:x.sibling=Le, x=Le, _=Q;
    } if (F.done) return n(d, _), I&&_t(d, R), k; if (_===null) {
      for (;!F.done; R++, F=p.next())F=h(d, F.value, S), F!==null&&(c=o(F, c, R), x===null?k=F:x.sibling=F, x=F); return I&&_t(d, R), k;
    } for (_=r(d, _); !F.done; R++, F=p.next())F=w(_, d, R, F.value, S), F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?R:F.key), c=o(F, c, R), x===null?k=F:x.sibling=F, x=F); return e&&_.forEach(function(Sn) {
      return t(d, Sn);
    }), I&&_t(d, R), k;
  } function P(d, c, p, S) {
    if (typeof p=='object'&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children), typeof p=='object'&&p!==null) {
      switch (p.$$typeof) {
        case gr: e: {
          for (var k=p.key, x=c; x!==null;) {
            if (x.key===k) {
              if (k=p.type, k===Wt) {
                if (x.tag===7) {
                  n(d, x.sibling), c=l(x, p.props.children), c.return=d, d=c; break e;
                }
              } else if (x.elementType===k||typeof k=='object'&&k!==null&&k.$$typeof===lt&&is(k)===x.type) {
                n(d, x.sibling), c=l(x, p.props), c.ref=Rn(d, x, p), c.return=d, d=c; break e;
              }n(d, x); break;
            } else t(d, x); x=x.sibling;
          }p.type===Wt?(c=zt(p.props.children, d.mode, S, p.key), c.return=d, d=c):(S=Qr(p.type, p.key, p.props, null, d.mode, S), S.ref=Rn(d, c, p), S.return=d, d=S);
        } return i(d); case Vt: e: {
          for (x=p.key; c!==null;) {
            if (c.key===x) {
              if (c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation) {
                n(d, c.sibling), c=l(c, p.children||[]), c.return=d, d=c; break e;
              } else {
                n(d, c); break;
              }
            } else t(d, c); c=c.sibling;
          }c=yo(p, d.mode, S), c.return=d, d=c;
        } return i(d); case lt: return x=p._init, P(d, c, x(p._payload), S);
      } if (zn(p)) return m(d, c, p, S); if (kn(p)) return g(d, c, p, S); Tr(d, p);
    } return typeof p=='string'&&p!==''||typeof p=='number'?(p=''+p, c!==null&&c.tag===6?(n(d, c.sibling), c=l(c, p), c.return=d, d=c):(n(d, c), c=mo(p, d.mode, S), c.return=d, d=c), i(d)):n(d, c);
  } return P;
} const fn=lc(!0); const oc=lc(!1); const ul=Et(null); let sl=null; let Zt=null; let Qi=null; function Ki() {
  Qi=Zt=sl=null;
} function qi(e) {
  const t=ul.current; U(ul), e._currentValue=t;
} function Zo(e, t, n) {
  for (;e!==null;) {
    const r=e.alternate; if ((e.childLanes&t)!==t?(e.childLanes|=t, r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t), e===n) break; e=e.return;
  }
} function on(e, t) {
  sl=e, Qi=Zt=null, e=e.dependencies, e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0), e.firstContext=null);
} function Te(e) {
  const t=e._currentValue; if (Qi!==e) {
    if (e={context: e, memoizedValue: t, next: null}, Zt===null) {
      if (sl===null) throw Error(E(308)); Zt=e, sl.dependencies={lanes: 0, firstContext: e};
    } else Zt=Zt.next=e;
  } return t;
} let Tt=null; function Xi(e) {
Tt===null?Tt=[e]:Tt.push(e);
} function ic(e, t, n, r) {
  const l=t.interleaved; return l===null?(n.next=n, Xi(t)):(n.next=l.next, l.next=n), t.interleaved=n, be(e, r);
} function be(e, t) {
  e.lanes|=t; let n=e.alternate; for (n!==null&&(n.lanes|=t), n=e, e=e.return; e!==null;)e.childLanes|=t, n=e.alternate, n!==null&&(n.childLanes|=t), n=e, e=e.return; return n.tag===3?n.stateNode:null;
} let ot=!1; function Ji(e) {
  e.updateQueue={baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
} function uc(e, t) {
  e=e.updateQueue, t.updateQueue===e&&(t.updateQueue={baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects});
} function Ye(e, t) {
  return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
} function ht(e, t, n) {
  let r=e.updateQueue; if (r===null) return null; if (r=r.shared, D&2) {
    var l=r.pending; return l===null?t.next=t:(t.next=l.next, l.next=t), r.pending=t, be(e, n);
  } return l=r.interleaved, l===null?(t.next=t, Xi(r)):(t.next=l.next, l.next=t), r.interleaved=t, be(e, n);
} function Ir(e, t, n) {
  if (t=t.updateQueue, t!==null&&(t=t.shared, (n&4194240)!==0)) {
    let r=t.lanes; r&=e.pendingLanes, n|=r, t.lanes=n, Di(e, n);
  }
} function us(e, t) {
  let n=e.updateQueue; let r=e.alternate; if (r!==null&&(r=r.updateQueue, n===r)) {
    let l=null; let o=null; if (n=n.firstBaseUpdate, n!==null) {
      do {
        const i={eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null}; o===null?l=o=i:o=o.next=i, n=n.next;
      } while (n!==null); o===null?l=o=t:o=o.next=t;
    } else l=o=t; n={baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects}, e.updateQueue=n; return;
  }e=n.lastBaseUpdate, e===null?n.firstBaseUpdate=t:e.next=t, n.lastBaseUpdate=t;
} function al(e, t, n, r) {
  let l=e.updateQueue; ot=!1; let o=l.firstBaseUpdate; let i=l.lastBaseUpdate; let u=l.shared.pending; if (u!==null) {
    l.shared.pending=null; var s=u; var a=s.next; s.next=null, i===null?o=a:i.next=a, i=s; var f=e.alternate; f!==null&&(f=f.updateQueue, u=f.lastBaseUpdate, u!==i&&(u===null?f.firstBaseUpdate=a:u.next=a, f.lastBaseUpdate=s));
  } if (o!==null) {
    let h=l.baseState; i=0, f=a=s=null, u=o; do {
      let y=u.lane; let w=u.eventTime; if ((r&y)===y) {
        f!==null&&(f=f.next={eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null}); e: {
          let m=e; const g=u; switch (y=t, w=n, g.tag) {
            case 1: if (m=g.payload, typeof m=='function') {
              h=m.call(w, h, y); break e;
            }h=m; break e; case 3: m.flags=m.flags&-65537|128; case 0: if (m=g.payload, y=typeof m=='function'?m.call(w, h, y):m, y==null) break e; h=H({}, h, y); break e; case 2: ot=!0;
          }
        }u.callback!==null&&u.lane!==0&&(e.flags|=64, y=l.effects, y===null?l.effects=[u]:y.push(u));
      } else w={eventTime: w, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null}, f===null?(a=f=w, s=h):f=f.next=w, i|=y; if (u=u.next, u===null) {
        if (u=l.shared.pending, u===null) break; y=u, u=y.next, y.next=null, l.lastBaseUpdate=y, l.shared.pending=null;
      }
    } while (!0); if (f===null&&(s=h), l.baseState=s, l.firstBaseUpdate=a, l.lastBaseUpdate=f, t=l.shared.interleaved, t!==null) {
      l=t; do i|=l.lane, l=l.next; while (l!==t);
    } else o===null&&(l.shared.lanes=0); Mt|=i, e.lanes=i, e.memoizedState=h;
  }
} function ss(e, t, n) {
  if (e=t.effects, t.effects=null, e!==null) {
    for (t=0; t<e.length; t++) {
      let r=e[t]; const l=r.callback; if (l!==null) {
        if (r.callback=null, r=n, typeof l!='function') throw Error(E(191, l)); l.call(r);
      }
    }
  }
} const dr={}; const Qe=Et(dr); const tr=Et(dr); const nr=Et(dr); function Ot(e) {
  if (e===dr) throw Error(E(174)); return e;
} function Yi(e, t) {
  switch (j(nr, t), j(tr, e), j(Qe, dr), e=t.nodeType, e) {
    case 9: case 11: t=(t=t.documentElement)?t.namespaceURI:zo(null, ''); break; default: e=e===8?t.parentNode:t, t=e.namespaceURI||null, e=e.tagName, t=zo(t, e);
  }U(Qe), j(Qe, t);
} function dn() {
  U(Qe), U(tr), U(nr);
} function sc(e) {
  Ot(nr.current); const t=Ot(Qe.current); const n=zo(t, e.type); t!==n&&(j(tr, e), j(Qe, n));
} function Gi(e) {
  tr.current===e&&(U(Qe), U(tr));
} const B=Et(0); function cl(e) {
  for (let t=e; t!==null;) {
    if (t.tag===13) {
      let n=t.memoizedState; if (n!==null&&(n=n.dehydrated, n===null||n.data==='$?'||n.data==='$!')) return t;
    } else if (t.tag===19&&t.memoizedProps.revealOrder!==void 0) {
      if (t.flags&128) return t;
    } else if (t.child!==null) {
      t.child.return=t, t=t.child; continue;
    } if (t===e) break; for (;t.sibling===null;) {
      if (t.return===null||t.return===e) return null; t=t.return;
    }t.sibling.return=t.return, t=t.sibling;
  } return null;
} const so=[]; function Zi() {
  for (let e=0; e<so.length; e++)so[e]._workInProgressVersionPrimary=null; so.length=0;
} const Br=tt.ReactCurrentDispatcher; const ao=tt.ReactCurrentBatchConfig; let jt=0; let $=null; let J=null; let b=null; let fl=!1; let Bn=!1; let rr=0; let Ep=0; function le() {
  throw Error(E(321));
} function bi(e, t) {
  if (t===null) return !1; for (let n=0; n<t.length&&n<e.length; n++) if (!Ie(e[n], t[n])) return !1; return !0;
} function eu(e, t, n, r, l, o) {
  if (jt=o, $=t, t.memoizedState=null, t.updateQueue=null, t.lanes=0, Br.current=e===null||e.memoizedState===null?_p:Np, e=n(r, l), Bn) {
    o=0; do {
      if (Bn=!1, rr=0, 25<=o) throw Error(E(301)); o+=1, b=J=null, t.updateQueue=null, Br.current=Rp, e=n(r, l);
    } while (Bn);
  } if (Br.current=dl, t=J!==null&&J.next!==null, jt=0, b=J=$=null, fl=!1, t) throw Error(E(300)); return e;
} function tu() {
  const e=rr!==0; return rr=0, e;
} function He() {
  const e={memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null}; return b===null?$.memoizedState=b=e:b=b.next=e, b;
} function Oe() {
  if (J===null) {
    var e=$.alternate; e=e!==null?e.memoizedState:null;
  } else e=J.next; const t=b===null?$.memoizedState:b.next; if (t!==null)b=t, J=e; else {
    if (e===null) throw Error(E(310)); J=e, e={memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null}, b===null?$.memoizedState=b=e:b=b.next=e;
  } return b;
} function lr(e, t) {
  return typeof t=='function'?t(e):t;
} function co(e) {
  const t=Oe(); const n=t.queue; if (n===null) throw Error(E(311)); n.lastRenderedReducer=e; let r=J; let l=r.baseQueue; let o=n.pending; if (o!==null) {
    if (l!==null) {
      var i=l.next; l.next=o.next, o.next=i;
    }r.baseQueue=l=o, n.pending=null;
  } if (l!==null) {
    o=l.next, r=r.baseState; let u=i=null; let s=null; let a=o; do {
      const f=a.lane; if ((jt&f)===f)s!==null&&(s=s.next={lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null}), r=a.hasEagerState?a.eagerState:e(r, a.action); else {
        const h={lane: f, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null}; s===null?(u=s=h, i=r):s=s.next=h, $.lanes|=f, Mt|=f;
      }a=a.next;
    } while (a!==null&&a!==o); s===null?i=r:s.next=u, Ie(r, t.memoizedState)||(pe=!0), t.memoizedState=r, t.baseState=i, t.baseQueue=s, n.lastRenderedState=r;
  } if (e=n.interleaved, e!==null) {
    l=e; do o=l.lane, $.lanes|=o, Mt|=o, l=l.next; while (l!==e);
  } else l===null&&(n.lanes=0); return [t.memoizedState, n.dispatch];
} function fo(e) {
  const t=Oe(); const n=t.queue; if (n===null) throw Error(E(311)); n.lastRenderedReducer=e; const r=n.dispatch; let l=n.pending; let o=t.memoizedState; if (l!==null) {
    n.pending=null; let i=l=l.next; do o=e(o, i.action), i=i.next; while (i!==l); Ie(o, t.memoizedState)||(pe=!0), t.memoizedState=o, t.baseQueue===null&&(t.baseState=o), n.lastRenderedState=o;
  } return [o, r];
} function ac() {} function cc(e, t) {
  const n=$; let r=Oe(); const l=t(); const o=!Ie(r.memoizedState, l); if (o&&(r.memoizedState=l, pe=!0), r=r.queue, nu(pc.bind(null, n, r, e), [e]), r.getSnapshot!==t||o||b!==null&&b.memoizedState.tag&1) {
    if (n.flags|=2048, or(9, dc.bind(null, n, r, l, t), void 0, null), ee===null) throw Error(E(349)); jt&30||fc(n, t, l);
  } return l;
} function fc(e, t, n) {
  e.flags|=16384, e={getSnapshot: t, value: n}, t=$.updateQueue, t===null?(t={lastEffect: null, stores: null}, $.updateQueue=t, t.stores=[e]):(n=t.stores, n===null?t.stores=[e]:n.push(e));
} function dc(e, t, n, r) {
  t.value=n, t.getSnapshot=r, hc(t)&&mc(e);
} function pc(e, t, n) {
  return n(function() {
    hc(t)&&mc(e);
  });
} function hc(e) {
  const t=e.getSnapshot; e=e.value; try {
    const n=t(); return !Ie(e, n);
  } catch {
    return !0;
  }
} function mc(e) {
  const t=be(e, 1); t!==null&&Me(t, e, 1, -1);
} function as(e) {
  const t=He(); return typeof e=='function'&&(e=e()), t.memoizedState=t.baseState=e, e={pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lr, lastRenderedState: e}, t.queue=e, e=e.dispatch=Cp.bind(null, $, e), [t.memoizedState, e];
} function or(e, t, n, r) {
  return e={tag: e, create: t, destroy: n, deps: r, next: null}, t=$.updateQueue, t===null?(t={lastEffect: null, stores: null}, $.updateQueue=t, t.lastEffect=e.next=e):(n=t.lastEffect, n===null?t.lastEffect=e.next=e:(r=n.next, n.next=e, e.next=r, t.lastEffect=e)), e;
} function yc() {
  return Oe().memoizedState;
} function $r(e, t, n, r) {
  const l=He(); $.flags|=e, l.memoizedState=or(1|t, n, void 0, r===void 0?null:r);
} function Rl(e, t, n, r) {
  const l=Oe(); r=r===void 0?null:r; let o=void 0; if (J!==null) {
    const i=J.memoizedState; if (o=i.destroy, r!==null&&bi(r, i.deps)) {
      l.memoizedState=or(t, n, o, r); return;
    }
  }$.flags|=e, l.memoizedState=or(1|t, n, o, r);
} function cs(e, t) {
  return $r(8390656, 8, e, t);
} function nu(e, t) {
  return Rl(2048, 8, e, t);
} function vc(e, t) {
  return Rl(4, 2, e, t);
} function gc(e, t) {
  return Rl(4, 4, e, t);
} function wc(e, t) {
  if (typeof t=='function') {
    return e=e(), t(e), function() {
      t(null);
    };
  } if (t!=null) {
    return e=e(), t.current=e, function() {
      t.current=null;
    };
  }
} function Sc(e, t, n) {
  return n=n!=null?n.concat([e]):null, Rl(4, 4, wc.bind(null, t, e), n);
} function ru() {} function Ec(e, t) {
  const n=Oe(); t=t===void 0?null:t; const r=n.memoizedState; return r!==null&&t!==null&&bi(t, r[1])?r[0]:(n.memoizedState=[e, t], e);
} function kc(e, t) {
  const n=Oe(); t=t===void 0?null:t; const r=n.memoizedState; return r!==null&&t!==null&&bi(t, r[1])?r[0]:(e=e(), n.memoizedState=[e, t], e);
} function xc(e, t, n) {
  return jt&21?(Ie(n, t)||(n=Pa(), $.lanes|=n, Mt|=n, e.baseState=!0), t):(e.baseState&&(e.baseState=!1, pe=!0), e.memoizedState=n);
} function kp(e, t) {
  const n=A; A=n!==0&&4>n?n:4, e(!0); const r=ao.transition; ao.transition={}; try {
    e(!1), t();
  } finally {
    A=n, ao.transition=r;
  }
} function Cc() {
  return Oe().memoizedState;
} function xp(e, t, n) {
  const r=yt(e); if (n={lane: r, action: n, hasEagerState: !1, eagerState: null, next: null}, _c(e))Nc(t, n); else if (n=ic(e, t, n, r), n!==null) {
    const l=ae(); Me(n, e, r, l), Rc(n, t, r);
  }
} function Cp(e, t, n) {
  const r=yt(e); let l={lane: r, action: n, hasEagerState: !1, eagerState: null, next: null}; if (_c(e))Nc(t, l); else {
    let o=e.alternate; if (e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer, o!==null)) {
      try {
        const i=t.lastRenderedState; const u=o(i, n); if (l.hasEagerState=!0, l.eagerState=u, Ie(u, i)) {
          const s=t.interleaved; s===null?(l.next=l, Xi(t)):(l.next=s.next, s.next=l), t.interleaved=l; return;
        }
      } catch {} finally {}
    }n=ic(e, t, l, r), n!==null&&(l=ae(), Me(n, e, r, l), Rc(n, t, r));
  }
} function _c(e) {
  const t=e.alternate; return e===$||t!==null&&t===$;
} function Nc(e, t) {
  Bn=fl=!0; const n=e.pending; n===null?t.next=t:(t.next=n.next, n.next=t), e.pending=t;
} function Rc(e, t, n) {
  if (n&4194240) {
    let r=t.lanes; r&=e.pendingLanes, n|=r, t.lanes=n, Di(e, n);
  }
} var dl={readContext: Te, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1}; var _p={readContext: Te, useCallback: function(e, t) {
  return He().memoizedState=[e, t===void 0?null:t], e;
}, useContext: Te, useEffect: cs, useImperativeHandle: function(e, t, n) {
  return n=n!=null?n.concat([e]):null, $r(4194308, 4, wc.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return $r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $r(4, 2, e, t);
}, useMemo: function(e, t) {
  const n=He(); return t=t===void 0?null:t, e=e(), n.memoizedState=[e, t], e;
}, useReducer: function(e, t, n) {
  const r=He(); return t=n!==void 0?n(t):t, r.memoizedState=r.baseState=t, e={pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t}, r.queue=e, e=e.dispatch=xp.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  const t=He(); return e={current: e}, t.memoizedState=e;
}, useState: as, useDebugValue: ru, useDeferredValue: function(e) {
  return He().memoizedState=e;
}, useTransition: function() {
  let e=as(!1); const t=e[0]; return e=kp.bind(null, e[1]), He().memoizedState=e, [t, e];
}, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) {
  const r=$; const l=He(); if (I) {
    if (n===void 0) throw Error(E(407)); n=n();
  } else {
    if (n=t(), ee===null) throw Error(E(349)); jt&30||fc(r, t, n);
  }l.memoizedState=n; const o={value: n, getSnapshot: t}; return l.queue=o, cs(pc.bind(null, r, o, e), [e]), r.flags|=2048, or(9, dc.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  const e=He(); let t=ee.identifierPrefix; if (I) {
    var n=Je; const r=Xe; n=(r&~(1<<32-je(r)-1)).toString(32)+n, t=':'+t+'R'+n, n=rr++, 0<n&&(t+='H'+n.toString(32)), t+=':';
  } else n=Ep++, t=':'+t+'r'+n.toString(32)+':'; return e.memoizedState=t;
}, unstable_isNewReconciler: !1}; var Np={readContext: Te, useCallback: Ec, useContext: Te, useEffect: nu, useImperativeHandle: Sc, useInsertionEffect: vc, useLayoutEffect: gc, useMemo: kc, useReducer: co, useRef: yc, useState: function() {
  return co(lr);
}, useDebugValue: ru, useDeferredValue: function(e) {
  const t=Oe(); return xc(t, J.memoizedState, e);
}, useTransition: function() {
  const e=co(lr)[0]; const t=Oe().memoizedState; return [e, t];
}, useMutableSource: ac, useSyncExternalStore: cc, useId: Cc, unstable_isNewReconciler: !1}; var Rp={readContext: Te, useCallback: Ec, useContext: Te, useEffect: nu, useImperativeHandle: Sc, useInsertionEffect: vc, useLayoutEffect: gc, useMemo: kc, useReducer: fo, useRef: yc, useState: function() {
  return fo(lr);
}, useDebugValue: ru, useDeferredValue: function(e) {
  const t=Oe(); return J===null?t.memoizedState=e:xc(t, J.memoizedState, e);
}, useTransition: function() {
  const e=fo(lr)[0]; const t=Oe().memoizedState; return [e, t];
}, useMutableSource: ac, useSyncExternalStore: cc, useId: Cc, unstable_isNewReconciler: !1}; function Fe(e, t) {
  if (e&&e.defaultProps) {
    t=H({}, t), e=e.defaultProps; for (const n in e)t[n]===void 0&&(t[n]=e[n]); return t;
  } return t;
} function bo(e, t, n, r) {
  t=e.memoizedState, n=n(r, t), n=n==null?t:H({}, t, n), e.memoizedState=n, e.lanes===0&&(e.updateQueue.baseState=n);
} const Pl={isMounted: function(e) {
  return (e=e._reactInternals)?$t(e)===e:!1;
}, enqueueSetState: function(e, t, n) {
  e=e._reactInternals; const r=ae(); const l=yt(e); const o=Ye(r, l); o.payload=t, n!=null&&(o.callback=n), t=ht(e, o, l), t!==null&&(Me(t, e, l, r), Ir(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e=e._reactInternals; const r=ae(); const l=yt(e); const o=Ye(r, l); o.tag=1, o.payload=t, n!=null&&(o.callback=n), t=ht(e, o, l), t!==null&&(Me(t, e, l, r), Ir(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e=e._reactInternals; const n=ae(); const r=yt(e); const l=Ye(n, r); l.tag=2, t!=null&&(l.callback=t), t=ht(e, l, r), t!==null&&(Me(t, e, r, n), Ir(t, e, r));
}}; function fs(e, t, n, r, l, o, i) {
  return e=e.stateNode, typeof e.shouldComponentUpdate=='function'?e.shouldComponentUpdate(r, o, i):t.prototype&&t.prototype.isPureReactComponent?!Gn(n, r)||!Gn(l, o):!0;
} function Pc(e, t, n) {
  let r=!1; let l=wt; let o=t.contextType; return typeof o=='object'&&o!==null?o=Te(o):(l=me(t)?Dt:ue.current, r=t.contextTypes, o=(r=r!=null)?an(e, l):wt), t=new t(n, o), e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null, t.updater=Pl, e.stateNode=t, t._reactInternals=e, r&&(e=e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext=l, e.__reactInternalMemoizedMaskedChildContext=o), t;
} function ds(e, t, n, r) {
  e=t.state, typeof t.componentWillReceiveProps=='function'&&t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps=='function'&&t.UNSAFE_componentWillReceiveProps(n, r), t.state!==e&&Pl.enqueueReplaceState(t, t.state, null);
} function ei(e, t, n, r) {
  const l=e.stateNode; l.props=n, l.state=e.memoizedState, l.refs={}, Ji(e); let o=t.contextType; typeof o=='object'&&o!==null?l.context=Te(o):(o=me(t)?Dt:ue.current, l.context=an(e, o)), l.state=e.memoizedState, o=t.getDerivedStateFromProps, typeof o=='function'&&(bo(e, t, o, n), l.state=e.memoizedState), typeof t.getDerivedStateFromProps=='function'||typeof l.getSnapshotBeforeUpdate=='function'||typeof l.UNSAFE_componentWillMount!='function'&&typeof l.componentWillMount!='function'||(t=l.state, typeof l.componentWillMount=='function'&&l.componentWillMount(), typeof l.UNSAFE_componentWillMount=='function'&&l.UNSAFE_componentWillMount(), t!==l.state&&Pl.enqueueReplaceState(l, l.state, null), al(e, n, l, r), l.state=e.memoizedState), typeof l.componentDidMount=='function'&&(e.flags|=4194308);
} function pn(e, t) {
  try {
    let n=''; let r=t; do n+=td(r), r=r.return; while (r); var l=n;
  } catch (o) {
    l=`
Error generating stack: `+o.message+`
`+o.stack;
  } return {value: e, source: t, stack: l, digest: null};
} function po(e, t, n) {
  return {value: e, source: null, stack: n??null, digest: t??null};
} function ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
} const Pp=typeof WeakMap=='function'?WeakMap:Map; function Tc(e, t, n) {
  n=Ye(-1, n), n.tag=3, n.payload={element: null}; const r=t.value; return n.callback=function() {
    hl||(hl=!0, fi=r), ti(e, t);
  }, n;
} function Oc(e, t, n) {
  n=Ye(-1, n), n.tag=3; const r=e.type.getDerivedStateFromError; if (typeof r=='function') {
    const l=t.value; n.payload=function() {
      return r(l);
    }, n.callback=function() {
      ti(e, t);
    };
  } const o=e.stateNode; return o!==null&&typeof o.componentDidCatch=='function'&&(n.callback=function() {
    ti(e, t), typeof r!='function'&&(mt===null?mt=new Set([this]):mt.add(this)); const i=t.stack; this.componentDidCatch(t.value, {componentStack: i!==null?i:''});
  }), n;
} function ps(e, t, n) {
  let r=e.pingCache; if (r===null) {
    r=e.pingCache=new Pp; var l=new Set; r.set(t, l);
  } else l=r.get(t), l===void 0&&(l=new Set, r.set(t, l)); l.has(n)||(l.add(n), e=Hp.bind(null, e, t, n), t.then(e, e));
} function hs(e) {
  do {
    var t; if ((t=e.tag===13)&&(t=e.memoizedState, t=t!==null?t.dehydrated!==null:!0), t) return e; e=e.return;
  } while (e!==null); return null;
} function ms(e, t, n, r, l) {
  return e.mode&1?(e.flags|=65536, e.lanes=l, e):(e===t?e.flags|=65536:(e.flags|=128, n.flags|=131072, n.flags&=-52805, n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1, 1), t.tag=2, ht(n, t, 1))), n.lanes|=1), e);
} const Tp=tt.ReactCurrentOwner; var pe=!1; function se(e, t, n, r) {
  t.child=e===null?oc(t, null, n, r):fn(t, e.child, n, r);
} function ys(e, t, n, r, l) {
  n=n.render; const o=t.ref; return on(t, l), r=eu(e, t, n, r, o, l), n=tu(), e!==null&&!pe?(t.updateQueue=e.updateQueue, t.flags&=-2053, e.lanes&=~l, et(e, t, l)):(I&&n&&Hi(t), t.flags|=1, se(e, t, r, l), t.child);
} function vs(e, t, n, r, l) {
  if (e===null) {
    var o=n.type; return typeof o=='function'&&!fu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15, t.type=o, Lc(e, t, o, r, l)):(e=Qr(n.type, null, r, t, t.mode, l), e.ref=t.ref, e.return=t, t.child=e);
  } if (o=e.child, !(e.lanes&l)) {
    const i=o.memoizedProps; if (n=n.compare, n=n!==null?n:Gn, n(i, r)&&e.ref===t.ref) return et(e, t, l);
  } return t.flags|=1, e=vt(o, r), e.ref=t.ref, e.return=t, t.child=e;
} function Lc(e, t, n, r, l) {
  if (e!==null) {
    const o=e.memoizedProps; if (Gn(o, r)&&e.ref===t.ref) if (pe=!1, t.pendingProps=r=o, (e.lanes&l)!==0)e.flags&131072&&(pe=!0); else return t.lanes=e.lanes, et(e, t, l);
  } return ni(e, t, n, r, l);
} function zc(e, t, n) {
  let r=t.pendingProps; const l=r.children; const o=e!==null?e.memoizedState:null; if (r.mode==='hidden') {
    if (!(t.mode&1))t.memoizedState={baseLanes: 0, cachePool: null, transitions: null}, j(en, ge), ge|=n; else {
      if (!(n&1073741824)) return e=o!==null?o.baseLanes|n:n, t.lanes=t.childLanes=1073741824, t.memoizedState={baseLanes: e, cachePool: null, transitions: null}, t.updateQueue=null, j(en, ge), ge|=e, null; t.memoizedState={baseLanes: 0, cachePool: null, transitions: null}, r=o!==null?o.baseLanes:n, j(en, ge), ge|=r;
    }
  } else o!==null?(r=o.baseLanes|n, t.memoizedState=null):r=n, j(en, ge), ge|=r; return se(e, t, l, n), t.child;
} function Fc(e, t) {
  const n=t.ref; (e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512, t.flags|=2097152);
} function ni(e, t, n, r, l) {
  let o=me(n)?Dt:ue.current; return o=an(t, o), on(t, l), n=eu(e, t, n, r, o, l), r=tu(), e!==null&&!pe?(t.updateQueue=e.updateQueue, t.flags&=-2053, e.lanes&=~l, et(e, t, l)):(I&&r&&Hi(t), t.flags|=1, se(e, t, n, l), t.child);
} function gs(e, t, n, r, l) {
  if (me(n)) {
    var o=!0; ll(t);
  } else o=!1; if (on(t, l), t.stateNode===null)Hr(e, t), Pc(t, n, r), ei(t, n, r, l), r=!0; else if (e===null) {
    var i=t.stateNode; var u=t.memoizedProps; i.props=u; var s=i.context; var a=n.contextType; typeof a=='object'&&a!==null?a=Te(a):(a=me(n)?Dt:ue.current, a=an(t, a)); var f=n.getDerivedStateFromProps; var h=typeof f=='function'||typeof i.getSnapshotBeforeUpdate=='function'; h||typeof i.UNSAFE_componentWillReceiveProps!='function'&&typeof i.componentWillReceiveProps!='function'||(u!==r||s!==a)&&ds(t, i, r, a), ot=!1; var y=t.memoizedState; i.state=y, al(t, r, i, l), s=t.memoizedState, u!==r||y!==s||he.current||ot?(typeof f=='function'&&(bo(t, n, f, r), s=t.memoizedState), (u=ot||fs(t, n, u, r, y, s, a))?(h||typeof i.UNSAFE_componentWillMount!='function'&&typeof i.componentWillMount!='function'||(typeof i.componentWillMount=='function'&&i.componentWillMount(), typeof i.UNSAFE_componentWillMount=='function'&&i.UNSAFE_componentWillMount()), typeof i.componentDidMount=='function'&&(t.flags|=4194308)):(typeof i.componentDidMount=='function'&&(t.flags|=4194308), t.memoizedProps=r, t.memoizedState=s), i.props=r, i.state=s, i.context=a, r=u):(typeof i.componentDidMount=='function'&&(t.flags|=4194308), r=!1);
  } else {
    i=t.stateNode, uc(e, t), u=t.memoizedProps, a=t.type===t.elementType?u:Fe(t.type, u), i.props=a, h=t.pendingProps, y=i.context, s=n.contextType, typeof s=='object'&&s!==null?s=Te(s):(s=me(n)?Dt:ue.current, s=an(t, s)); const w=n.getDerivedStateFromProps; (f=typeof w=='function'||typeof i.getSnapshotBeforeUpdate=='function')||typeof i.UNSAFE_componentWillReceiveProps!='function'&&typeof i.componentWillReceiveProps!='function'||(u!==h||y!==s)&&ds(t, i, r, s), ot=!1, y=t.memoizedState, i.state=y, al(t, r, i, l); let m=t.memoizedState; u!==h||y!==m||he.current||ot?(typeof w=='function'&&(bo(t, n, w, r), m=t.memoizedState), (a=ot||fs(t, n, a, r, y, m, s)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!='function'&&typeof i.componentWillUpdate!='function'||(typeof i.componentWillUpdate=='function'&&i.componentWillUpdate(r, m, s), typeof i.UNSAFE_componentWillUpdate=='function'&&i.UNSAFE_componentWillUpdate(r, m, s)), typeof i.componentDidUpdate=='function'&&(t.flags|=4), typeof i.getSnapshotBeforeUpdate=='function'&&(t.flags|=1024)):(typeof i.componentDidUpdate!='function'||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4), typeof i.getSnapshotBeforeUpdate!='function'||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024), t.memoizedProps=r, t.memoizedState=m), i.props=r, i.state=m, i.context=s, r=a):(typeof i.componentDidUpdate!='function'||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4), typeof i.getSnapshotBeforeUpdate!='function'||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024), r=!1);
  } return ri(e, t, n, r, o, l);
} function ri(e, t, n, r, l, o) {
  Fc(e, t); const i=(t.flags&128)!==0; if (!r&&!i) return l&&rs(t, n, !1), et(e, t, o); r=t.stateNode, Tp.current=t; const u=i&&typeof n.getDerivedStateFromError!='function'?null:r.render(); return t.flags|=1, e!==null&&i?(t.child=fn(t, e.child, null, o), t.child=fn(t, null, u, o)):se(e, t, u, o), t.memoizedState=r.state, l&&rs(t, n, !0), t.child;
} function Dc(e) {
  const t=e.stateNode; t.pendingContext?ns(e, t.pendingContext, t.pendingContext!==t.context):t.context&&ns(e, t.context, !1), Yi(e, t.containerInfo);
} function ws(e, t, n, r, l) {
  return cn(), Wi(l), t.flags|=256, se(e, t, n, r), t.child;
} const li={dehydrated: null, treeContext: null, retryLane: 0}; function oi(e) {
  return {baseLanes: e, cachePool: null, transitions: null};
} function Ac(e, t, n) {
  let r=t.pendingProps; let l=B.current; let o=!1; let i=(t.flags&128)!==0; let u; if ((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0), u?(o=!0, t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1), j(B, l&1), e===null) return Go(t), e=t.memoizedState, e!==null&&(e=e.dehydrated, e!==null)?(t.mode&1?e.data==='$!'?t.lanes=8:t.lanes=1073741824:t.lanes=1, null):(i=r.children, e=r.fallback, o?(r=t.mode, o=t.child, i={mode: 'hidden', children: i}, !(r&1)&&o!==null?(o.childLanes=0, o.pendingProps=i):o=Ll(i, r, 0, null), e=zt(e, r, n, null), o.return=t, e.return=t, o.sibling=e, t.child=o, t.child.memoizedState=oi(n), t.memoizedState=li, e):lu(t, i)); if (l=e.memoizedState, l!==null&&(u=l.dehydrated, u!==null)) return Op(e, t, i, r, u, l, n); if (o) {
    o=r.fallback, i=t.mode, l=e.child, u=l.sibling; const s={mode: 'hidden', children: r.children}; return !(i&1)&&t.child!==l?(r=t.child, r.childLanes=0, r.pendingProps=s, t.deletions=null):(r=vt(l, s), r.subtreeFlags=l.subtreeFlags&14680064), u!==null?o=vt(u, o):(o=zt(o, i, n, null), o.flags|=2), o.return=t, r.return=t, r.sibling=o, t.child=r, r=o, o=t.child, i=e.child.memoizedState, i=i===null?oi(n):{baseLanes: i.baseLanes|n, cachePool: null, transitions: i.transitions}, o.memoizedState=i, o.childLanes=e.childLanes&~n, t.memoizedState=li, r;
  } return o=e.child, e=o.sibling, r=vt(o, {mode: 'visible', children: r.children}), !(t.mode&1)&&(r.lanes=n), r.return=t, r.sibling=null, e!==null&&(n=t.deletions, n===null?(t.deletions=[e], t.flags|=16):n.push(e)), t.child=r, t.memoizedState=null, r;
} function lu(e, t) {
  return t=Ll({mode: 'visible', children: t}, e.mode, 0, null), t.return=e, e.child=t;
} function Or(e, t, n, r) {
  return r!==null&&Wi(r), fn(t, e.child, null, n), e=lu(t, t.pendingProps.children), e.flags|=2, t.memoizedState=null, e;
} function Op(e, t, n, r, l, o, i) {
  if (n) return t.flags&256?(t.flags&=-257, r=po(Error(E(422))), Or(e, t, i, r)):t.memoizedState!==null?(t.child=e.child, t.flags|=128, null):(o=r.fallback, l=t.mode, r=Ll({mode: 'visible', children: r.children}, l, 0, null), o=zt(o, l, i, null), o.flags|=2, r.return=t, o.return=t, r.sibling=o, t.child=r, t.mode&1&&fn(t, e.child, null, i), t.child.memoizedState=oi(i), t.memoizedState=li, o); if (!(t.mode&1)) return Or(e, t, i, null); if (l.data==='$!') {
    if (r=l.nextSibling&&l.nextSibling.dataset, r) var u=r.dgst; return r=u, o=Error(E(419)), r=po(o, r, void 0), Or(e, t, i, r);
  } if (u=(i&e.childLanes)!==0, pe||u) {
    if (r=ee, r!==null) {
      switch (i&-i) {
        case 4: l=2; break; case 16: l=8; break; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: l=32; break; case 536870912: l=268435456; break; default: l=0;
      }l=l&(r.suspendedLanes|i)?0:l, l!==0&&l!==o.retryLane&&(o.retryLane=l, be(e, l), Me(r, e, l, -1));
    } return cu(), r=po(Error(E(421))), Or(e, t, i, r);
  } return l.data==='$?'?(t.flags|=128, t.child=e.child, t=Vp.bind(null, e), l._reactRetry=t, null):(e=o.treeContext, we=pt(l.nextSibling), Se=t, I=!0, Ae=null, e!==null&&(Ce[_e++]=Xe, Ce[_e++]=Je, Ce[_e++]=At, Xe=e.id, Je=e.overflow, At=t), t=lu(t, r.children), t.flags|=4096, t);
} function Ss(e, t, n) {
  e.lanes|=t; const r=e.alternate; r!==null&&(r.lanes|=t), Zo(e.return, t, n);
} function ho(e, t, n, r, l) {
  const o=e.memoizedState; o===null?e.memoizedState={isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l}:(o.isBackwards=t, o.rendering=null, o.renderingStartTime=0, o.last=r, o.tail=n, o.tailMode=l);
} function jc(e, t, n) {
  let r=t.pendingProps; let l=r.revealOrder; const o=r.tail; if (se(e, t, r.children, n), r=B.current, r&2)r=r&1|2, t.flags|=128; else {
    if (e!==null&&e.flags&128) {
      e:for (e=t.child; e!==null;) {
        if (e.tag===13)e.memoizedState!==null&&Ss(e, n, t); else if (e.tag===19)Ss(e, n, t); else if (e.child!==null) {
          e.child.return=e, e=e.child; continue;
        } if (e===t) break e; for (;e.sibling===null;) {
          if (e.return===null||e.return===t) break e; e=e.return;
        }e.sibling.return=e.return, e=e.sibling;
      }
    }r&=1;
  } if (j(B, r), !(t.mode&1))t.memoizedState=null; else {
    switch (l) {
      case 'forwards': for (n=t.child, l=null; n!==null;)e=n.alternate, e!==null&&cl(e)===null&&(l=n), n=n.sibling; n=l, n===null?(l=t.child, t.child=null):(l=n.sibling, n.sibling=null), ho(t, !1, l, n, o); break; case 'backwards': for (n=null, l=t.child, t.child=null; l!==null;) {
        if (e=l.alternate, e!==null&&cl(e)===null) {
          t.child=l; break;
        }e=l.sibling, l.sibling=n, n=l, l=e;
      }ho(t, !0, n, null, o); break; case 'together': ho(t, !1, null, null, void 0); break; default: t.memoizedState=null;
    }
  } return t.child;
} function Hr(e, t) {
  !(t.mode&1)&&e!==null&&(e.alternate=null, t.alternate=null, t.flags|=2);
} function et(e, t, n) {
  if (e!==null&&(t.dependencies=e.dependencies), Mt|=t.lanes, !(n&t.childLanes)) return null; if (e!==null&&t.child!==e.child) throw Error(E(153)); if (t.child!==null) {
    for (e=t.child, n=vt(e, e.pendingProps), t.child=n, n.return=t; e.sibling!==null;)e=e.sibling, n=n.sibling=vt(e, e.pendingProps), n.return=t; n.sibling=null;
  } return t.child;
} function Lp(e, t, n) {
  switch (t.tag) {
    case 3: Dc(t), cn(); break; case 5: sc(t); break; case 1: me(t.type)&&ll(t); break; case 4: Yi(t, t.stateNode.containerInfo); break; case 10: var r=t.type._context; var l=t.memoizedProps.value; j(ul, r._currentValue), r._currentValue=l; break; case 13: if (r=t.memoizedState, r!==null) return r.dehydrated!==null?(j(B, B.current&1), t.flags|=128, null):n&t.child.childLanes?Ac(e, t, n):(j(B, B.current&1), e=et(e, t, n), e!==null?e.sibling:null); j(B, B.current&1); break; case 19: if (r=(n&t.childLanes)!==0, e.flags&128) {
      if (r) return jc(e, t, n); t.flags|=128;
    } if (l=t.memoizedState, l!==null&&(l.rendering=null, l.tail=null, l.lastEffect=null), j(B, B.current), r) break; return null; case 22: case 23: return t.lanes=0, zc(e, t, n);
  } return et(e, t, n);
} let Mc; let ii; let Uc; let Ic; Mc=function(e, t) {
  for (let n=t.child; n!==null;) {
    if (n.tag===5||n.tag===6)e.appendChild(n.stateNode); else if (n.tag!==4&&n.child!==null) {
      n.child.return=n, n=n.child; continue;
    } if (n===t) break; for (;n.sibling===null;) {
      if (n.return===null||n.return===t) return; n=n.return;
    }n.sibling.return=n.return, n=n.sibling;
  }
}; ii=function() {}; Uc=function(e, t, n, r) {
  let l=e.memoizedProps; if (l!==r) {
    e=t.stateNode, Ot(Qe.current); let o=null; switch (n) {
      case 'input': l=Po(e, l), r=Po(e, r), o=[]; break; case 'select': l=H({}, l, {value: void 0}), r=H({}, r, {value: void 0}), o=[]; break; case 'textarea': l=Lo(e, l), r=Lo(e, r), o=[]; break; default: typeof l.onClick!='function'&&typeof r.onClick=='function'&&(e.onclick=nl);
    }Fo(n, r); let i; n=null; for (a in l) {
      if (!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null) {
        if (a==='style') {
          var u=l[a]; for (i in u)u.hasOwnProperty(i)&&(n||(n={}), n[i]='');
        } else a!=='dangerouslySetInnerHTML'&&a!=='children'&&a!=='suppressContentEditableWarning'&&a!=='suppressHydrationWarning'&&a!=='autoFocus'&&(Wn.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a, null));
      }
    } for (a in r) {
      let s=r[a]; if (u=l!=null?l[a]:void 0, r.hasOwnProperty(a)&&s!==u&&(s!=null||u!=null)) {
        if (a==='style') {
          if (u) {
            for (i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}), n[i]=''); for (i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}), n[i]=s[i]);
          } else n||(o||(o=[]), o.push(a, n)), n=s;
        } else a==='dangerouslySetInnerHTML'?(s=s?s.__html:void 0, u=u?u.__html:void 0, s!=null&&u!==s&&(o=o||[]).push(a, s)):a==='children'?typeof s!='string'&&typeof s!='number'||(o=o||[]).push(a, ''+s):a!=='suppressContentEditableWarning'&&a!=='suppressHydrationWarning'&&(Wn.hasOwnProperty(a)?(s!=null&&a==='onScroll'&&M('scroll', e), o||u===s||(o=[])):(o=o||[]).push(a, s));
      }
    }n&&(o=o||[]).push('style', n); var a=o; (t.updateQueue=a)&&(t.flags|=4);
  }
}; Ic=function(e, t, n, r) {
  n!==r&&(t.flags|=4);
}; function Pn(e, t) {
  if (!I) {
    switch (e.tailMode) {
      case 'hidden': t=e.tail; for (var n=null; t!==null;)t.alternate!==null&&(n=t), t=t.sibling; n===null?e.tail=null:n.sibling=null; break; case 'collapsed': n=e.tail; for (var r=null; n!==null;)n.alternate!==null&&(r=n), n=n.sibling; r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;
    }
  }
} function oe(e) {
  const t=e.alternate!==null&&e.alternate.child===e.child; let n=0; let r=0; if (t) for (var l=e.child; l!==null;)n|=l.lanes|l.childLanes, r|=l.subtreeFlags&14680064, r|=l.flags&14680064, l.return=e, l=l.sibling; else for (l=e.child; l!==null;)n|=l.lanes|l.childLanes, r|=l.subtreeFlags, r|=l.flags, l.return=e, l=l.sibling; return e.subtreeFlags|=r, e.childLanes=n, t;
} function zp(e, t, n) {
  let r=t.pendingProps; switch (Vi(t), t.tag) {
    case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return oe(t), null; case 1: return me(t.type)&&rl(), oe(t), null; case 3: return r=t.stateNode, dn(), U(he), U(ue), Zi(), r.pendingContext&&(r.context=r.pendingContext, r.pendingContext=null), (e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024, Ae!==null&&(hi(Ae), Ae=null))), ii(e, t), oe(t), null; case 5: Gi(t); var l=Ot(nr.current); if (n=t.type, e!==null&&t.stateNode!=null)Uc(e, t, n, r, l), e.ref!==t.ref&&(t.flags|=512, t.flags|=2097152); else {
      if (!r) {
        if (t.stateNode===null) throw Error(E(166)); return oe(t), null;
      } if (e=Ot(Qe.current), Pr(t)) {
        r=t.stateNode, n=t.type; var o=t.memoizedProps; switch (r[Ve]=t, r[er]=o, e=(t.mode&1)!==0, n) {
          case 'dialog': M('cancel', r), M('close', r); break; case 'iframe': case 'object': case 'embed': M('load', r); break; case 'video': case 'audio': for (l=0; l<Dn.length; l++)M(Dn[l], r); break; case 'source': M('error', r); break; case 'img': case 'image': case 'link': M('error', r), M('load', r); break; case 'details': M('toggle', r); break; case 'input': Tu(r, o), M('invalid', r); break; case 'select': r._wrapperState={wasMultiple: !!o.multiple}, M('invalid', r); break; case 'textarea': Lu(r, o), M('invalid', r);
        }Fo(n, o), l=null; for (var i in o) {
          if (o.hasOwnProperty(i)) {
            var u=o[i]; i==='children'?typeof u=='string'?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Rr(r.textContent, u, e), l=['children', u]):typeof u=='number'&&r.textContent!==''+u&&(o.suppressHydrationWarning!==!0&&Rr(r.textContent, u, e), l=['children', ''+u]):Wn.hasOwnProperty(i)&&u!=null&&i==='onScroll'&&M('scroll', r);
          }
        } switch (n) {
          case 'input': wr(r), Ou(r, o, !0); break; case 'textarea': wr(r), zu(r); break; case 'select': case 'option': break; default: typeof o.onClick=='function'&&(r.onclick=nl);
        }r=l, t.updateQueue=r, r!==null&&(t.flags|=4);
      } else {
        i=l.nodeType===9?l:l.ownerDocument, e==='http://www.w3.org/1999/xhtml'&&(e=pa(n)), e==='http://www.w3.org/1999/xhtml'?n==='script'?(e=i.createElement('div'), e.innerHTML='<script><\/script>', e=e.removeChild(e.firstChild)):typeof r.is=='string'?e=i.createElement(n, {is: r.is}):(e=i.createElement(n), n==='select'&&(i=e, r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e, n), e[Ve]=t, e[er]=r, Mc(e, t, !1, !1), t.stateNode=e; e: {
          switch (i=Do(n, r), n) {
            case 'dialog': M('cancel', e), M('close', e), l=r; break; case 'iframe': case 'object': case 'embed': M('load', e), l=r; break; case 'video': case 'audio': for (l=0; l<Dn.length; l++)M(Dn[l], e); l=r; break; case 'source': M('error', e), l=r; break; case 'img': case 'image': case 'link': M('error', e), M('load', e), l=r; break; case 'details': M('toggle', e), l=r; break; case 'input': Tu(e, r), l=Po(e, r), M('invalid', e); break; case 'option': l=r; break; case 'select': e._wrapperState={wasMultiple: !!r.multiple}, l=H({}, r, {value: void 0}), M('invalid', e); break; case 'textarea': Lu(e, r), l=Lo(e, r), M('invalid', e); break; default: l=r;
          }Fo(n, l), u=l; for (o in u) {
            if (u.hasOwnProperty(o)) {
              let s=u[o]; o==='style'?ya(e, s):o==='dangerouslySetInnerHTML'?(s=s?s.__html:void 0, s!=null&&ha(e, s)):o==='children'?typeof s=='string'?(n!=='textarea'||s!=='')&&Qn(e, s):typeof s=='number'&&Qn(e, ''+s):o!=='suppressContentEditableWarning'&&o!=='suppressHydrationWarning'&&o!=='autoFocus'&&(Wn.hasOwnProperty(o)?s!=null&&o==='onScroll'&&M('scroll', e):s!=null&&Pi(e, o, s, i));
            }
          } switch (n) {
            case 'input': wr(e), Ou(e, r, !1); break; case 'textarea': wr(e), zu(e); break; case 'option': r.value!=null&&e.setAttribute('value', ''+gt(r.value)); break; case 'select': e.multiple=!!r.multiple, o=r.value, o!=null?tn(e, !!r.multiple, o, !1):r.defaultValue!=null&&tn(e, !!r.multiple, r.defaultValue, !0); break; default: typeof l.onClick=='function'&&(e.onclick=nl);
          } switch (n) {
            case 'button': case 'input': case 'select': case 'textarea': r=!!r.autoFocus; break e; case 'img': r=!0; break e; default: r=!1;
          }
        }r&&(t.flags|=4);
      }t.ref!==null&&(t.flags|=512, t.flags|=2097152);
    } return oe(t), null; case 6: if (e&&t.stateNode!=null)Ic(e, t, e.memoizedProps, r); else {
      if (typeof r!='string'&&t.stateNode===null) throw Error(E(166)); if (n=Ot(nr.current), Ot(Qe.current), Pr(t)) {
        if (r=t.stateNode, n=t.memoizedProps, r[Ve]=t, (o=r.nodeValue!==n)&&(e=Se, e!==null)) {
          switch (e.tag) {
            case 3: Rr(r.nodeValue, n, (e.mode&1)!==0); break; case 5: e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue, n, (e.mode&1)!==0);
          }
        }o&&(t.flags|=4);
      } else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r), r[Ve]=t, t.stateNode=r;
    } return oe(t), null; case 13: if (U(B), r=t.memoizedState, e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null) {
      if (I&&we!==null&&t.mode&1&&!(t.flags&128))rc(), cn(), t.flags|=98560, o=!1; else if (o=Pr(t), r!==null&&r.dehydrated!==null) {
        if (e===null) {
          if (!o) throw Error(E(318)); if (o=t.memoizedState, o=o!==null?o.dehydrated:null, !o) throw Error(E(317)); o[Ve]=t;
        } else cn(), !(t.flags&128)&&(t.memoizedState=null), t.flags|=4; oe(t), o=!1;
      } else Ae!==null&&(hi(Ae), Ae=null), o=!0; if (!o) return t.flags&65536?t:null;
    } return t.flags&128?(t.lanes=n, t):(r=r!==null, r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192, t.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):cu())), t.updateQueue!==null&&(t.flags|=4), oe(t), null); case 4: return dn(), ii(e, t), e===null&&Zn(t.stateNode.containerInfo), oe(t), null; case 10: return qi(t.type._context), oe(t), null; case 17: return me(t.type)&&rl(), oe(t), null; case 19: if (U(B), o=t.memoizedState, o===null) return oe(t), null; if (r=(t.flags&128)!==0, i=o.rendering, i===null) {
      if (r)Pn(o, !1); else {
        if (Y!==0||e!==null&&e.flags&128) {
          for (e=t.child; e!==null;) {
            if (i=cl(e), i!==null) {
              for (t.flags|=128, Pn(o, !1), r=i.updateQueue, r!==null&&(t.updateQueue=r, t.flags|=4), t.subtreeFlags=0, r=n, n=t.child; n!==null;)o=n, e=r, o.flags&=14680066, i=o.alternate, i===null?(o.childLanes=0, o.lanes=e, o.child=null, o.subtreeFlags=0, o.memoizedProps=null, o.memoizedState=null, o.updateQueue=null, o.dependencies=null, o.stateNode=null):(o.childLanes=i.childLanes, o.lanes=i.lanes, o.child=i.child, o.subtreeFlags=0, o.deletions=null, o.memoizedProps=i.memoizedProps, o.memoizedState=i.memoizedState, o.updateQueue=i.updateQueue, o.type=i.type, e=i.dependencies, o.dependencies=e===null?null:{lanes: e.lanes, firstContext: e.firstContext}), n=n.sibling; return j(B, B.current&1|2), t.child;
            }e=e.sibling;
          }
        }o.tail!==null&&q()>hn&&(t.flags|=128, r=!0, Pn(o, !1), t.lanes=4194304);
      }
    } else {
      if (!r) {
        if (e=cl(i), e!==null) {
          if (t.flags|=128, r=!0, n=e.updateQueue, n!==null&&(t.updateQueue=n, t.flags|=4), Pn(o, !0), o.tail===null&&o.tailMode==='hidden'&&!i.alternate&&!I) return oe(t), null;
        } else 2*q()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128, r=!0, Pn(o, !1), t.lanes=4194304);
      } o.isBackwards?(i.sibling=t.child, t.child=i):(n=o.last, n!==null?n.sibling=i:t.child=i, o.last=i);
    } return o.tail!==null?(t=o.tail, o.rendering=t, o.tail=t.sibling, o.renderingStartTime=q(), t.sibling=null, n=B.current, j(B, r?n&1|2:n&1), t):(oe(t), null); case 22: case 23: return au(), r=t.memoizedState!==null, e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192), r&&t.mode&1?ge&1073741824&&(oe(t), t.subtreeFlags&6&&(t.flags|=8192)):oe(t), null; case 24: return null; case 25: return null;
  } throw Error(E(156, t.tag));
} function Fp(e, t) {
  switch (Vi(t), t.tag) {
    case 1: return me(t.type)&&rl(), e=t.flags, e&65536?(t.flags=e&-65537|128, t):null; case 3: return dn(), U(he), U(ue), Zi(), e=t.flags, e&65536&&!(e&128)?(t.flags=e&-65537|128, t):null; case 5: return Gi(t), null; case 13: if (U(B), e=t.memoizedState, e!==null&&e.dehydrated!==null) {
      if (t.alternate===null) throw Error(E(340)); cn();
    } return e=t.flags, e&65536?(t.flags=e&-65537|128, t):null; case 19: return U(B), null; case 4: return dn(), null; case 10: return qi(t.type._context), null; case 22: case 23: return au(), null; case 24: return null; default: return null;
  }
} let Lr=!1; let ie=!1; const Dp=typeof WeakSet=='function'?WeakSet:Set; let C=null; function bt(e, t) {
  const n=e.ref; if (n!==null) {
    if (typeof n=='function') {
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    } else n.current=null;
  }
} function ui(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
} let Es=!1; function Ap(e, t) {
  if (Wo=br, e=Wa(), $i(e)) {
    if ('selectionStart'in e) var n={start: e.selectionStart, end: e.selectionEnd}; else {
      e: {
        n=(n=e.ownerDocument)&&n.defaultView||window; let r=n.getSelection&&n.getSelection(); if (r&&r.rangeCount!==0) {
          n=r.anchorNode; const l=r.anchorOffset; const o=r.focusNode; r=r.focusOffset; try {
            n.nodeType, o.nodeType;
          } catch {
            n=null; break e;
          } let i=0; let u=-1; let s=-1; let a=0; let f=0; let h=e; let y=null; t:for (;;) {
            for (var w; h!==n||l!==0&&h.nodeType!==3||(u=i+l), h!==o||r!==0&&h.nodeType!==3||(s=i+r), h.nodeType===3&&(i+=h.nodeValue.length), (w=h.firstChild)!==null;)y=h, h=w; for (;;) {
              if (h===e) break t; if (y===n&&++a===l&&(u=i), y===o&&++f===r&&(s=i), (w=h.nextSibling)!==null) break; h=y, y=h.parentNode;
            }h=w;
          }n=u===-1||s===-1?null:{start: u, end: s};
        } else n=null;
      }
    }n=n||{start: 0, end: 0};
  } else n=null; for (Qo={focusedElem: e, selectionRange: n}, br=!1, C=t; C!==null;) {
    if (t=C, e=t.child, (t.subtreeFlags&1028)!==0&&e!==null)e.return=t, C=e; else {
      for (;C!==null;) {
        t=C; try {
          var m=t.alternate; if (t.flags&1024) {
            switch (t.tag) {
              case 0: case 11: case 15: break; case 1: if (m!==null) {
                const g=m.memoizedProps; const P=m.memoizedState; const d=t.stateNode; const c=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:Fe(t.type, g), P); d.__reactInternalSnapshotBeforeUpdate=c;
              } break; case 3: var p=t.stateNode.containerInfo; p.nodeType===1?p.textContent='':p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement); break; case 5: case 6: case 4: case 17: break; default: throw Error(E(163));
            }
          }
        } catch (S) {
          V(t, t.return, S);
        } if (e=t.sibling, e!==null) {
          e.return=t.return, C=e; break;
        }C=t.return;
      }
    }
  } return m=Es, Es=!1, m;
} function $n(e, t, n) {
  let r=t.updateQueue; if (r=r!==null?r.lastEffect:null, r!==null) {
    let l=r=r.next; do {
      if ((l.tag&e)===e) {
        const o=l.destroy; l.destroy=void 0, o!==void 0&&ui(t, n, o);
      }l=l.next;
    } while (l!==r);
  }
} function Tl(e, t) {
  if (t=t.updateQueue, t=t!==null?t.lastEffect:null, t!==null) {
    let n=t=t.next; do {
      if ((n.tag&e)===e) {
        const r=n.create; n.destroy=r();
      }n=n.next;
    } while (n!==t);
  }
} function si(e) {
  const t=e.ref; if (t!==null) {
    const n=e.stateNode; switch (e.tag) {
      case 5: e=n; break; default: e=n;
    } typeof t=='function'?t(e):t.current=e;
  }
} function Bc(e) {
  let t=e.alternate; t!==null&&(e.alternate=null, Bc(t)), e.child=null, e.deletions=null, e.sibling=null, e.tag===5&&(t=e.stateNode, t!==null&&(delete t[Ve], delete t[er], delete t[Xo], delete t[vp], delete t[gp])), e.stateNode=null, e.return=null, e.dependencies=null, e.memoizedProps=null, e.memoizedState=null, e.pendingProps=null, e.stateNode=null, e.updateQueue=null;
} function $c(e) {
  return e.tag===5||e.tag===3||e.tag===4;
} function ks(e) {
  e:for (;;) {
    for (;e.sibling===null;) {
      if (e.return===null||$c(e.return)) return null; e=e.return;
    } for (e.sibling.return=e.return, e=e.sibling; e.tag!==5&&e.tag!==6&&e.tag!==18;) {
      if (e.flags&2||e.child===null||e.tag===4) continue e; e.child.return=e, e=e.child;
    } if (!(e.flags&2)) return e.stateNode;
  }
} function ai(e, t, n) {
  const r=e.tag; if (r===5||r===6)e=e.stateNode, t?n.nodeType===8?n.parentNode.insertBefore(e, t):n.insertBefore(e, t):(n.nodeType===8?(t=n.parentNode, t.insertBefore(e, n)):(t=n, t.appendChild(e)), n=n._reactRootContainer, n!=null||t.onclick!==null||(t.onclick=nl)); else if (r!==4&&(e=e.child, e!==null)) for (ai(e, t, n), e=e.sibling; e!==null;)ai(e, t, n), e=e.sibling;
} function ci(e, t, n) {
  const r=e.tag; if (r===5||r===6)e=e.stateNode, t?n.insertBefore(e, t):n.appendChild(e); else if (r!==4&&(e=e.child, e!==null)) for (ci(e, t, n), e=e.sibling; e!==null;)ci(e, t, n), e=e.sibling;
} let te=null; let De=!1; function nt(e, t, n) {
  for (n=n.child; n!==null;)Hc(e, t, n), n=n.sibling;
} function Hc(e, t, n) {
  if (We&&typeof We.onCommitFiberUnmount=='function') {
    try {
      We.onCommitFiberUnmount(El, n);
    } catch {}
  } switch (n.tag) {
    case 5: ie||bt(n, t); case 6: var r=te; var l=De; te=null, nt(e, t, n), te=r, De=l, te!==null&&(De?(e=te, n=n.stateNode, e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode)); break; case 18: te!==null&&(De?(e=te, n=n.stateNode, e.nodeType===8?io(e.parentNode, n):e.nodeType===1&&io(e, n), Jn(e)):io(te, n.stateNode)); break; case 4: r=te, l=De, te=n.stateNode.containerInfo, De=!0, nt(e, t, n), te=r, De=l; break; case 0: case 11: case 14: case 15: if (!ie&&(r=n.updateQueue, r!==null&&(r=r.lastEffect, r!==null))) {
      l=r=r.next; do {
        let o=l; const i=o.destroy; o=o.tag, i!==void 0&&(o&2||o&4)&&ui(n, t, i), l=l.next;
      } while (l!==r);
    }nt(e, t, n); break; case 1: if (!ie&&(bt(n, t), r=n.stateNode, typeof r.componentWillUnmount=='function')) {
      try {
        r.props=n.memoizedProps, r.state=n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        V(n, t, u);
      }
    }nt(e, t, n); break; case 21: nt(e, t, n); break; case 22: n.mode&1?(ie=(r=ie)||n.memoizedState!==null, nt(e, t, n), ie=r):nt(e, t, n); break; default: nt(e, t, n);
  }
} function xs(e) {
  const t=e.updateQueue; if (t!==null) {
    e.updateQueue=null; let n=e.stateNode; n===null&&(n=e.stateNode=new Dp), t.forEach(function(r) {
      const l=Wp.bind(null, e, r); n.has(r)||(n.add(r), r.then(l, l));
    });
  }
} function ze(e, t) {
  const n=t.deletions; if (n!==null) {
    for (let r=0; r<n.length; r++) {
      const l=n[r]; try {
        const o=e; const i=t; let u=i; e:for (;u!==null;) {
          switch (u.tag) {
            case 5: te=u.stateNode, De=!1; break e; case 3: te=u.stateNode.containerInfo, De=!0; break e; case 4: te=u.stateNode.containerInfo, De=!0; break e;
          }u=u.return;
        } if (te===null) throw Error(E(160)); Hc(o, i, l), te=null, De=!1; const s=l.alternate; s!==null&&(s.return=null), l.return=null;
      } catch (a) {
        V(l, t, a);
      }
    }
  } if (t.subtreeFlags&12854) for (t=t.child; t!==null;)Vc(t, e), t=t.sibling;
} function Vc(e, t) {
  let n=e.alternate; let r=e.flags; switch (e.tag) {
    case 0: case 11: case 14: case 15: if (ze(t, e), $e(e), r&4) {
      try {
        $n(3, e, e.return), Tl(3, e);
      } catch (g) {
        V(e, e.return, g);
      } try {
        $n(5, e, e.return);
      } catch (g) {
        V(e, e.return, g);
      }
    } break; case 1: ze(t, e), $e(e), r&512&&n!==null&&bt(n, n.return); break; case 5: if (ze(t, e), $e(e), r&512&&n!==null&&bt(n, n.return), e.flags&32) {
      var l=e.stateNode; try {
        Qn(l, '');
      } catch (g) {
        V(e, e.return, g);
      }
    } if (r&4&&(l=e.stateNode, l!=null)) {
        var o=e.memoizedProps; var i=n!==null?n.memoizedProps:o; var u=e.type; var s=e.updateQueue; if (e.updateQueue=null, s!==null) {
          try {
            u==='input'&&o.type==='radio'&&o.name!=null&&fa(l, o), Do(u, i); var a=Do(u, o); for (i=0; i<s.length; i+=2) {
              var f=s[i]; var h=s[i+1]; f==='style'?ya(l, h):f==='dangerouslySetInnerHTML'?ha(l, h):f==='children'?Qn(l, h):Pi(l, f, h, a);
            } switch (u) {
              case 'input': To(l, o); break; case 'textarea': da(l, o); break; case 'select': var y=l._wrapperState.wasMultiple; l._wrapperState.wasMultiple=!!o.multiple; var w=o.value; w!=null?tn(l, !!o.multiple, w, !1):y!==!!o.multiple&&(o.defaultValue!=null?tn(l, !!o.multiple, o.defaultValue, !0):tn(l, !!o.multiple, o.multiple?[]:'', !1));
            }l[er]=o;
          } catch (g) {
            V(e, e.return, g);
          }
        }
      } break; case 6: if (ze(t, e), $e(e), r&4) {
      if (e.stateNode===null) throw Error(E(162)); l=e.stateNode, o=e.memoizedProps; try {
        l.nodeValue=o;
      } catch (g) {
        V(e, e.return, g);
      }
    } break; case 3: if (ze(t, e), $e(e), r&4&&n!==null&&n.memoizedState.isDehydrated) {
      try {
        Jn(t.containerInfo);
      } catch (g) {
        V(e, e.return, g);
      }
    } break; case 4: ze(t, e), $e(e); break; case 13: ze(t, e), $e(e), l=e.child, l.flags&8192&&(o=l.memoizedState!==null, l.stateNode.isHidden=o, !o||l.alternate!==null&&l.alternate.memoizedState!==null||(uu=q())), r&4&&xs(e); break; case 22: if (f=n!==null&&n.memoizedState!==null, e.mode&1?(ie=(a=ie)||f, ze(t, e), ie=a):ze(t, e), $e(e), r&8192) {
      if (a=e.memoizedState!==null, (e.stateNode.isHidden=a)&&!f&&e.mode&1) {
        for (C=e, f=e.child; f!==null;) {
          for (h=C=f; C!==null;) {
            switch (y=C, w=y.child, y.tag) {
              case 0: case 11: case 14: case 15: $n(4, y, y.return); break; case 1: bt(y, y.return); var m=y.stateNode; if (typeof m.componentWillUnmount=='function') {
                r=y, n=y.return; try {
                  t=r, m.props=t.memoizedProps, m.state=t.memoizedState, m.componentWillUnmount();
                } catch (g) {
                  V(r, n, g);
                }
              } break; case 5: bt(y, y.return); break; case 22: if (y.memoizedState!==null) {
                _s(h); continue;
              }
            }w!==null?(w.return=y, C=w):_s(h);
          }f=f.sibling;
        }
      }e:for (f=null, h=e; ;) {
        if (h.tag===5) {
          if (f===null) {
            f=h; try {
              l=h.stateNode, a?(o=l.style, typeof o.setProperty=='function'?o.setProperty('display', 'none', 'important'):o.display='none'):(u=h.stateNode, s=h.memoizedProps.style, i=s!=null&&s.hasOwnProperty('display')?s.display:null, u.style.display=ma('display', i));
            } catch (g) {
              V(e, e.return, g);
            }
          }
        } else if (h.tag===6) {
          if (f===null) {
            try {
              h.stateNode.nodeValue=a?'':h.memoizedProps;
            } catch (g) {
              V(e, e.return, g);
            }
          }
        } else if ((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null) {
          h.child.return=h, h=h.child; continue;
        } if (h===e) break e; for (;h.sibling===null;) {
          if (h.return===null||h.return===e) break e; f===h&&(f=null), h=h.return;
        }f===h&&(f=null), h.sibling.return=h.return, h=h.sibling;
      }
    } break; case 19: ze(t, e), $e(e), r&4&&xs(e); break; case 21: break; default: ze(t, e), $e(e);
  }
} function $e(e) {
  const t=e.flags; if (t&2) {
    try {
      e: {
        for (let n=e.return; n!==null;) {
          if ($c(n)) {
            var r=n; break e;
          }n=n.return;
        } throw Error(E(160));
      } switch (r.tag) {
        case 5: var l=r.stateNode; r.flags&32&&(Qn(l, ''), r.flags&=-33); var o=ks(e); ci(e, o, l); break; case 3: case 4: var i=r.stateNode.containerInfo; var u=ks(e); ai(e, u, i); break; default: throw Error(E(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }e.flags&=-3;
  }t&4096&&(e.flags&=-4097);
} function jp(e, t, n) {
  C=e, Wc(e);
} function Wc(e, t, n) {
  for (let r=(e.mode&1)!==0; C!==null;) {
    const l=C; let o=l.child; if (l.tag===22&&r) {
      let i=l.memoizedState!==null||Lr; if (!i) {
        let u=l.alternate; let s=u!==null&&u.memoizedState!==null||ie; u=Lr; const a=ie; if (Lr=i, (ie=s)&&!a) for (C=l; C!==null;)i=C, s=i.child, i.tag===22&&i.memoizedState!==null?Ns(l):s!==null?(s.return=i, C=s):Ns(l); for (;o!==null;)C=o, Wc(o), o=o.sibling; C=l, Lr=u, ie=a;
      }Cs(e);
    } else l.subtreeFlags&8772&&o!==null?(o.return=l, C=o):Cs(e);
  }
} function Cs(e) {
  for (;C!==null;) {
    const t=C; if (t.flags&8772) {
      var n=t.alternate; try {
        if (t.flags&8772) {
          switch (t.tag) {
            case 0: case 11: case 15: ie||Tl(5, t); break; case 1: var r=t.stateNode; if (t.flags&4&&!ie) {
              if (n===null)r.componentDidMount(); else {
                const l=t.elementType===t.type?n.memoizedProps:Fe(t.type, n.memoizedProps); r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
            } var o=t.updateQueue; o!==null&&ss(t, o, r); break; case 3: var i=t.updateQueue; if (i!==null) {
              if (n=null, t.child!==null) {
                switch (t.child.tag) {
                  case 5: n=t.child.stateNode; break; case 1: n=t.child.stateNode;
                }
              }ss(t, i, n);
            } break; case 5: var u=t.stateNode; if (n===null&&t.flags&4) {
              n=u; const s=t.memoizedProps; switch (t.type) {
                case 'button': case 'input': case 'select': case 'textarea': s.autoFocus&&n.focus(); break; case 'img': s.src&&(n.src=s.src);
              }
            } break; case 6: break; case 4: break; case 12: break; case 13: if (t.memoizedState===null) {
              const a=t.alternate; if (a!==null) {
                const f=a.memoizedState; if (f!==null) {
                  const h=f.dehydrated; h!==null&&Jn(h);
                }
              }
            } break; case 19: case 17: case 21: case 22: case 23: case 25: break; default: throw Error(E(163));
          }
        }ie||t.flags&512&&si(t);
      } catch (y) {
        V(t, t.return, y);
      }
    } if (t===e) {
      C=null; break;
    } if (n=t.sibling, n!==null) {
      n.return=t.return, C=n; break;
    }C=t.return;
  }
} function _s(e) {
  for (;C!==null;) {
    const t=C; if (t===e) {
      C=null; break;
    } const n=t.sibling; if (n!==null) {
      n.return=t.return, C=n; break;
    }C=t.return;
  }
} function Ns(e) {
  for (;C!==null;) {
    const t=C; try {
      switch (t.tag) {
        case 0: case 11: case 15: var n=t.return; try {
          Tl(4, t);
        } catch (s) {
          V(t, n, s);
        } break; case 1: var r=t.stateNode; if (typeof r.componentDidMount=='function') {
          const l=t.return; try {
            r.componentDidMount();
          } catch (s) {
            V(t, l, s);
          }
        } var o=t.return; try {
            si(t);
          } catch (s) {
            V(t, o, s);
          } break; case 5: var i=t.return; try {
          si(t);
        } catch (s) {
          V(t, i, s);
        }
      }
    } catch (s) {
      V(t, t.return, s);
    } if (t===e) {
      C=null; break;
    } const u=t.sibling; if (u!==null) {
      u.return=t.return, C=u; break;
    }C=t.return;
  }
} const Mp=Math.ceil; const pl=tt.ReactCurrentDispatcher; const ou=tt.ReactCurrentOwner; const Re=tt.ReactCurrentBatchConfig; var D=0; var ee=null; let X=null; let ne=0; var ge=0; var en=Et(0); var Y=0; let ir=null; var Mt=0; let Ol=0; let iu=0; let Hn=null; let de=null; var uu=0; var hn=1/0; let Ke=null; var hl=!1; var fi=null; var mt=null; let zr=!1; let at=null; let ml=0; let Vn=0; let di=null; let Vr=-1; let Wr=0; function ae() {
  return D&6?q():Vr!==-1?Vr:Vr=q();
} function yt(e) {
  return e.mode&1?D&2&&ne!==0?ne&-ne:Sp.transition!==null?(Wr===0&&(Wr=Pa()), Wr):(e=A, e!==0||(e=window.event, e=e===void 0?16:Aa(e.type)), e):1;
} function Me(e, t, n, r) {
  if (50<Vn) throw Vn=0, di=null, Error(E(185)); ar(e, n, r), (!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(Ol|=n), Y===4&&ut(e, ne)), ye(e, r), n===1&&D===0&&!(t.mode&1)&&(hn=q()+500, Nl&&kt()));
} function ye(e, t) {
  let n=e.callbackNode; Sd(e, t); const r=Zr(e, e===ee?ne:0); if (r===0)n!==null&&Au(n), e.callbackNode=null, e.callbackPriority=0; else if (t=r&-r, e.callbackPriority!==t) {
    if (n!=null&&Au(n), t===1) {
e.tag===0?wp(Rs.bind(null, e)):ec(Rs.bind(null, e)), mp(function() {
        !(D&6)&&kt();
      }), n=null;
    } else {
      switch (Ta(r)) {
        case 1: n=Fi; break; case 4: n=Na; break; case 16: n=Gr; break; case 536870912: n=Ra; break; default: n=Gr;
      }n=Zc(n, Qc.bind(null, e));
    }e.callbackPriority=t, e.callbackNode=n;
  }
} function Qc(e, t) {
  if (Vr=-1, Wr=0, D&6) throw Error(E(327)); let n=e.callbackNode; if (un()&&e.callbackNode!==n) return null; let r=Zr(e, e===ee?ne:0); if (r===0) return null; if (r&30||r&e.expiredLanes||t)t=yl(e, r); else {
    t=r; var l=D; D|=2; var o=qc(); (ee!==e||ne!==t)&&(Ke=null, hn=q()+500, Lt(e, t)); do {
      try {
        Bp(); break;
      } catch (u) {
        Kc(e, u);
      }
    } while (!0); Ki(), pl.current=o, D=l, X!==null?t=0:(ee=null, ne=0, t=Y);
  } if (t!==0) {
    if (t===2&&(l=Io(e), l!==0&&(r=l, t=pi(e, l))), t===1) throw n=ir, Lt(e, 0), ut(e, r), ye(e, q()), n; if (t===6)ut(e, r); else {
      if (l=e.current.alternate, !(r&30)&&!Up(l)&&(t=yl(e, r), t===2&&(o=Io(e), o!==0&&(r=o, t=pi(e, o))), t===1)) throw n=ir, Lt(e, 0), ut(e, r), ye(e, q()), n; switch (e.finishedWork=l, e.finishedLanes=r, t) {
        case 0: case 1: throw Error(E(345)); case 2: Nt(e, de, Ke); break; case 3: if (ut(e, r), (r&130023424)===r&&(t=uu+500-q(), 10<t)) {
          if (Zr(e, 0)!==0) break; if (l=e.suspendedLanes, (l&r)!==r) {
            ae(), e.pingedLanes|=e.suspendedLanes&l; break;
          }e.timeoutHandle=qo(Nt.bind(null, e, de, Ke), t); break;
        }Nt(e, de, Ke); break; case 4: if (ut(e, r), (r&4194240)===r) break; for (t=e.eventTimes, l=-1; 0<r;) {
          let i=31-je(r); o=1<<i, i=t[i], i>l&&(l=i), r&=~o;
        } if (r=l, r=q()-r, r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mp(r/1960))-r, 10<r) {
            e.timeoutHandle=qo(Nt.bind(null, e, de, Ke), r); break;
          }Nt(e, de, Ke); break; case 5: Nt(e, de, Ke); break; default: throw Error(E(329));
      }
    }
  } return ye(e, q()), e.callbackNode===n?Qc.bind(null, e):null;
} function pi(e, t) {
  const n=Hn; return e.current.memoizedState.isDehydrated&&(Lt(e, t).flags|=256), e=yl(e, t), e!==2&&(t=de, de=n, t!==null&&hi(t)), e;
} function hi(e) {
de===null?de=e:de.push.apply(de, e);
} function Up(e) {
  for (let t=e; ;) {
    if (t.flags&16384) {
      var n=t.updateQueue; if (n!==null&&(n=n.stores, n!==null)) {
        for (let r=0; r<n.length; r++) {
          let l=n[r]; const o=l.getSnapshot; l=l.value; try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
    } if (n=t.child, t.subtreeFlags&16384&&n!==null)n.return=t, t=n; else {
      if (t===e) break; for (;t.sibling===null;) {
        if (t.return===null||t.return===e) return !0; t=t.return;
      }t.sibling.return=t.return, t=t.sibling;
    }
  } return !0;
} function ut(e, t) {
  for (t&=~iu, t&=~Ol, e.suspendedLanes|=t, e.pingedLanes&=~t, e=e.expirationTimes; 0<t;) {
    const n=31-je(t); const r=1<<n; e[n]=-1, t&=~r;
  }
} function Rs(e) {
  if (D&6) throw Error(E(327)); un(); let t=Zr(e, 0); if (!(t&1)) return ye(e, q()), null; let n=yl(e, t); if (e.tag!==0&&n===2) {
    const r=Io(e); r!==0&&(t=r, n=pi(e, r));
  } if (n===1) throw n=ir, Lt(e, 0), ut(e, t), ye(e, q()), n; if (n===6) throw Error(E(345)); return e.finishedWork=e.current.alternate, e.finishedLanes=t, Nt(e, de, Ke), ye(e, q()), null;
} function su(e, t) {
  const n=D; D|=1; try {
    return e(t);
  } finally {
    D=n, D===0&&(hn=q()+500, Nl&&kt());
  }
} function Ut(e) {
  at!==null&&at.tag===0&&!(D&6)&&un(); const t=D; D|=1; const n=Re.transition; const r=A; try {
    if (Re.transition=null, A=1, e) return e();
  } finally {
    A=r, Re.transition=n, D=t, !(D&6)&&kt();
  }
} function au() {
  ge=en.current, U(en);
} function Lt(e, t) {
  e.finishedWork=null, e.finishedLanes=0; let n=e.timeoutHandle; if (n!==-1&&(e.timeoutHandle=-1, hp(n)), X!==null) {
    for (n=X.return; n!==null;) {
      var r=n; switch (Vi(r), r.tag) {
        case 1: r=r.type.childContextTypes, r!=null&&rl(); break; case 3: dn(), U(he), U(ue), Zi(); break; case 5: Gi(r); break; case 4: dn(); break; case 13: U(B); break; case 19: U(B); break; case 10: qi(r.type._context); break; case 22: case 23: au();
      }n=n.return;
    }
  } if (ee=e, X=e=vt(e.current, null), ne=ge=t, Y=0, ir=null, iu=Ol=Mt=0, de=Hn=null, Tt!==null) {
    for (t=0; t<Tt.length; t++) {
      if (n=Tt[t], r=n.interleaved, r!==null) {
        n.interleaved=null; const l=r.next; const o=n.pending; if (o!==null) {
          const i=o.next; o.next=l, r.next=i;
        }n.pending=r;
      }
    }Tt=null;
  } return e;
} function Kc(e, t) {
  do {
    let n=X; try {
      if (Ki(), Br.current=dl, fl) {
        for (let r=$.memoizedState; r!==null;) {
          const l=r.queue; l!==null&&(l.pending=null), r=r.next;
        }fl=!1;
      } if (jt=0, b=J=$=null, Bn=!1, rr=0, ou.current=null, n===null||n.return===null) {
        Y=1, ir=t, X=null; break;
      }e: {
        let o=e; const i=n.return; let u=n; let s=t; if (t=ne, u.flags|=32768, s!==null&&typeof s=='object'&&typeof s.then=='function') {
          const a=s; const f=u; const h=f.tag; if (!(f.mode&1)&&(h===0||h===11||h===15)) {
            const y=f.alternate; y?(f.updateQueue=y.updateQueue, f.memoizedState=y.memoizedState, f.lanes=y.lanes):(f.updateQueue=null, f.memoizedState=null);
          } const w=hs(i); if (w!==null) {
            w.flags&=-257, ms(w, i, u, o, t), w.mode&1&&ps(o, a, t), t=w, s=a; const m=t.updateQueue; if (m===null) {
              const g=new Set; g.add(s), t.updateQueue=g;
            } else m.add(s); break e;
          } else {
            if (!(t&1)) {
              ps(o, a, t), cu(); break e;
            }s=Error(E(426));
          }
        } else if (I&&u.mode&1) {
          const P=hs(i); if (P!==null) {
            !(P.flags&65536)&&(P.flags|=256), ms(P, i, u, o, t), Wi(pn(s, u)); break e;
          }
        }o=s=pn(s, u), Y!==4&&(Y=2), Hn===null?Hn=[o]:Hn.push(o), o=i; do {
          switch (o.tag) {
            case 3: o.flags|=65536, t&=-t, o.lanes|=t; var d=Tc(o, s, t); us(o, d); break e; case 1: u=s; var c=o.type; var p=o.stateNode; if (!(o.flags&128)&&(typeof c.getDerivedStateFromError=='function'||p!==null&&typeof p.componentDidCatch=='function'&&(mt===null||!mt.has(p)))) {
              o.flags|=65536, t&=-t, o.lanes|=t; const S=Oc(o, u, t); us(o, S); break e;
            }
          }o=o.return;
        } while (o!==null);
      }Jc(n);
    } catch (k) {
      t=k, X===n&&n!==null&&(X=n=n.return); continue;
    } break;
  } while (!0);
} function qc() {
  const e=pl.current; return pl.current=dl, e===null?dl:e;
} function cu() {
  (Y===0||Y===3||Y===2)&&(Y=4), ee===null||!(Mt&268435455)&&!(Ol&268435455)||ut(ee, ne);
} function yl(e, t) {
  const n=D; D|=2; const r=qc(); (ee!==e||ne!==t)&&(Ke=null, Lt(e, t)); do {
    try {
      Ip(); break;
    } catch (l) {
      Kc(e, l);
    }
  } while (!0); if (Ki(), D=n, pl.current=r, X!==null) throw Error(E(261)); return ee=null, ne=0, Y;
} function Ip() {
  for (;X!==null;)Xc(X);
} function Bp() {
  for (;X!==null&&!fd();)Xc(X);
} function Xc(e) {
  const t=Gc(e.alternate, e, ge); e.memoizedProps=e.pendingProps, t===null?Jc(e):X=t, ou.current=null;
} function Jc(e) {
  let t=e; do {
    let n=t.alternate; if (e=t.return, t.flags&32768) {
      if (n=Fp(n, t), n!==null) {
        n.flags&=32767, X=n; return;
      } if (e!==null)e.flags|=32768, e.subtreeFlags=0, e.deletions=null; else {
        Y=6, X=null; return;
      }
    } else if (n=zp(n, t, ge), n!==null) {
      X=n; return;
    } if (t=t.sibling, t!==null) {
      X=t; return;
    }X=t=e;
  } while (t!==null); Y===0&&(Y=5);
} function Nt(e, t, n) {
  const r=A; const l=Re.transition; try {
    Re.transition=null, A=1, $p(e, t, n, r);
  } finally {
    Re.transition=l, A=r;
  } return null;
} function $p(e, t, n, r) {
  do un(); while (at!==null); if (D&6) throw Error(E(327)); n=e.finishedWork; let l=e.finishedLanes; if (n===null) return null; if (e.finishedWork=null, e.finishedLanes=0, n===e.current) throw Error(E(177)); e.callbackNode=null, e.callbackPriority=0; let o=n.lanes|n.childLanes; if (Ed(e, o), e===ee&&(X=ee=null, ne=0), !(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0, Zc(Gr, function() {
    return un(), null;
  })), o=(n.flags&15990)!==0, n.subtreeFlags&15990||o) {
    o=Re.transition, Re.transition=null; const i=A; A=1; const u=D; D|=4, ou.current=null, Ap(e, n), Vc(n, e), up(Qo), br=!!Wo, Qo=Wo=null, e.current=n, jp(n), dd(), D=u, A=i, Re.transition=o;
  } else e.current=n; if (zr&&(zr=!1, at=e, ml=l), o=e.pendingLanes, o===0&&(mt=null), md(n.stateNode), ye(e, q()), t!==null) for (r=e.onRecoverableError, n=0; n<t.length; n++)l=t[n], r(l.value, {componentStack: l.stack, digest: l.digest}); if (hl) throw hl=!1, e=fi, fi=null, e; return ml&1&&e.tag!==0&&un(), o=e.pendingLanes, o&1?e===di?Vn++:(Vn=0, di=e):Vn=0, kt(), null;
} function un() {
  if (at!==null) {
    let e=Ta(ml); const t=Re.transition; const n=A; try {
      if (Re.transition=null, A=16>e?16:e, at===null) var r=!1; else {
        if (e=at, at=null, ml=0, D&6) throw Error(E(331)); const l=D; for (D|=4, C=e.current; C!==null;) {
          let o=C; var i=o.child; if (C.flags&16) {
            var u=o.deletions; if (u!==null) {
              for (let s=0; s<u.length; s++) {
                const a=u[s]; for (C=a; C!==null;) {
                  let f=C; switch (f.tag) {
                    case 0: case 11: case 15: $n(8, f, o);
                  } const h=f.child; if (h!==null)h.return=f, C=h; else {
                    for (;C!==null;) {
                      f=C; const y=f.sibling; const w=f.return; if (Bc(f), f===a) {
                        C=null; break;
                      } if (y!==null) {
                        y.return=w, C=y; break;
                      }C=w;
                    }
                  }
                }
              } const m=o.alternate; if (m!==null) {
                let g=m.child; if (g!==null) {
                  m.child=null; do {
                    const P=g.sibling; g.sibling=null, g=P;
                  } while (g!==null);
                }
              }C=o;
            }
          } if (o.subtreeFlags&2064&&i!==null)i.return=o, C=i; else {
            e:for (;C!==null;) {
              if (o=C, o.flags&2048) {
                switch (o.tag) {
                  case 0: case 11: case 15: $n(9, o, o.return);
                }
              } const d=o.sibling; if (d!==null) {
                d.return=o.return, C=d; break e;
              }C=o.return;
            }
          }
        } const c=e.current; for (C=c; C!==null;) {
          i=C; const p=i.child; if (i.subtreeFlags&2064&&p!==null)p.return=i, C=p; else {
            e:for (i=c; C!==null;) {
              if (u=C, u.flags&2048) {
                try {
                  switch (u.tag) {
                    case 0: case 11: case 15: Tl(9, u);
                  }
                } catch (k) {
                  V(u, u.return, k);
                }
              } if (u===i) {
                C=null; break e;
              } const S=u.sibling; if (S!==null) {
                S.return=u.return, C=S; break e;
              }C=u.return;
            }
          }
        } if (D=l, kt(), We&&typeof We.onPostCommitFiberRoot=='function') {
          try {
            We.onPostCommitFiberRoot(El, e);
          } catch {}
        }r=!0;
      } return r;
    } finally {
      A=n, Re.transition=t;
    }
  } return !1;
} function Ps(e, t, n) {
  t=pn(n, t), t=Tc(e, t, 1), e=ht(e, t, 1), t=ae(), e!==null&&(ar(e, 1, t), ye(e, t));
} function V(e, t, n) {
  if (e.tag===3)Ps(e, e, n); else {
    for (;t!==null;) {
      if (t.tag===3) {
        Ps(t, e, n); break;
      } else if (t.tag===1) {
        const r=t.stateNode; if (typeof t.type.getDerivedStateFromError=='function'||typeof r.componentDidCatch=='function'&&(mt===null||!mt.has(r))) {
          e=pn(n, e), e=Oc(t, e, 1), t=ht(t, e, 1), e=ae(), t!==null&&(ar(t, 1, e), ye(t, e)); break;
        }
      }t=t.return;
    }
  }
} function Hp(e, t, n) {
  const r=e.pingCache; r!==null&&r.delete(t), t=ae(), e.pingedLanes|=e.suspendedLanes&n, ee===e&&(ne&n)===n&&(Y===4||Y===3&&(ne&130023424)===ne&&500>q()-uu?Lt(e, 0):iu|=n), ye(e, t);
} function Yc(e, t) {
  t===0&&(e.mode&1?(t=kr, kr<<=1, !(kr&130023424)&&(kr=4194304)):t=1); const n=ae(); e=be(e, t), e!==null&&(ar(e, t, n), ye(e, n));
} function Vp(e) {
  const t=e.memoizedState; let n=0; t!==null&&(n=t.retryLane), Yc(e, n);
} function Wp(e, t) {
  let n=0; switch (e.tag) {
    case 13: var r=e.stateNode; var l=e.memoizedState; l!==null&&(n=l.retryLane); break; case 19: r=e.stateNode; break; default: throw Error(E(314));
  }r!==null&&r.delete(t), Yc(e, n);
} let Gc; Gc=function(e, t, n) {
  if (e!==null) {
    if (e.memoizedProps!==t.pendingProps||he.current)pe=!0; else {
      if (!(e.lanes&n)&&!(t.flags&128)) return pe=!1, Lp(e, t, n); pe=!!(e.flags&131072);
    }
  } else pe=!1, I&&t.flags&1048576&&tc(t, il, t.index); switch (t.lanes=0, t.tag) {
    case 2: var r=t.type; Hr(e, t), e=t.pendingProps; var l=an(t, ue.current); on(t, n), l=eu(null, t, r, e, l, n); var o=tu(); return t.flags|=1, typeof l=='object'&&l!==null&&typeof l.render=='function'&&l.$$typeof===void 0?(t.tag=1, t.memoizedState=null, t.updateQueue=null, me(r)?(o=!0, ll(t)):o=!1, t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null, Ji(t), l.updater=Pl, t.stateNode=l, l._reactInternals=t, ei(t, r, e, n), t=ri(null, t, r, !0, o, n)):(t.tag=0, I&&o&&Hi(t), se(null, t, l, n), t=t.child), t; case 16: r=t.elementType; e: {
      switch (Hr(e, t), e=t.pendingProps, l=r._init, r=l(r._payload), t.type=r, l=t.tag=Kp(r), e=Fe(r, e), l) {
        case 0: t=ni(null, t, r, e, n); break e; case 1: t=gs(null, t, r, e, n); break e; case 11: t=ys(null, t, r, e, n); break e; case 14: t=vs(null, t, r, Fe(r.type, e), n); break e;
      } throw Error(E(306, r, ''));
    } return t; case 0: return r=t.type, l=t.pendingProps, l=t.elementType===r?l:Fe(r, l), ni(e, t, r, l, n); case 1: return r=t.type, l=t.pendingProps, l=t.elementType===r?l:Fe(r, l), gs(e, t, r, l, n); case 3: e: {
      if (Dc(t), e===null) throw Error(E(387)); r=t.pendingProps, o=t.memoizedState, l=o.element, uc(e, t), al(t, r, null, n); var i=t.memoizedState; if (r=i.element, o.isDehydrated) {
        if (o={element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions}, t.updateQueue.baseState=o, t.memoizedState=o, t.flags&256) {
          l=pn(Error(E(423)), t), t=ws(e, t, r, n, l); break e;
        } else if (r!==l) {
          l=pn(Error(E(424)), t), t=ws(e, t, r, n, l); break e;
        } else for (we=pt(t.stateNode.containerInfo.firstChild), Se=t, I=!0, Ae=null, n=oc(t, null, r, n), t.child=n; n;)n.flags=n.flags&-3|4096, n=n.sibling;
      } else {
        if (cn(), r===l) {
          t=et(e, t, n); break e;
        }se(e, t, r, n);
      }t=t.child;
    } return t; case 5: return sc(t), e===null&&Go(t), r=t.type, l=t.pendingProps, o=e!==null?e.memoizedProps:null, i=l.children, Ko(r, l)?i=null:o!==null&&Ko(r, o)&&(t.flags|=32), Fc(e, t), se(e, t, i, n), t.child; case 6: return e===null&&Go(t), null; case 13: return Ac(e, t, n); case 4: return Yi(t, t.stateNode.containerInfo), r=t.pendingProps, e===null?t.child=fn(t, null, r, n):se(e, t, r, n), t.child; case 11: return r=t.type, l=t.pendingProps, l=t.elementType===r?l:Fe(r, l), ys(e, t, r, l, n); case 7: return se(e, t, t.pendingProps, n), t.child; case 8: return se(e, t, t.pendingProps.children, n), t.child; case 12: return se(e, t, t.pendingProps.children, n), t.child; case 10: e: {
      if (r=t.type._context, l=t.pendingProps, o=t.memoizedProps, i=l.value, j(ul, r._currentValue), r._currentValue=i, o!==null) {
        if (Ie(o.value, i)) {
          if (o.children===l.children&&!he.current) {
            t=et(e, t, n); break e;
          }
        } else {
          for (o=t.child, o!==null&&(o.return=t); o!==null;) {
            let u=o.dependencies; if (u!==null) {
              i=o.child; for (let s=u.firstContext; s!==null;) {
                if (s.context===r) {
                  if (o.tag===1) {
                    s=Ye(-1, n&-n), s.tag=2; let a=o.updateQueue; if (a!==null) {
                      a=a.shared; const f=a.pending; f===null?s.next=s:(s.next=f.next, f.next=s), a.pending=s;
                    }
                  }o.lanes|=n, s=o.alternate, s!==null&&(s.lanes|=n), Zo(o.return, n, t), u.lanes|=n; break;
                }s=s.next;
              }
            } else if (o.tag===10)i=o.type===t.type?null:o.child; else if (o.tag===18) {
              if (i=o.return, i===null) throw Error(E(341)); i.lanes|=n, u=i.alternate, u!==null&&(u.lanes|=n), Zo(i, n, t), i=o.sibling;
            } else i=o.child; if (i!==null)i.return=o; else {
              for (i=o; i!==null;) {
                if (i===t) {
                  i=null; break;
                } if (o=i.sibling, o!==null) {
                  o.return=i.return, i=o; break;
                }i=i.return;
              }
            }o=i;
          }
        }
      }se(e, t, l.children, n), t=t.child;
    } return t; case 9: return l=t.type, r=t.pendingProps.children, on(t, n), l=Te(l), r=r(l), t.flags|=1, se(e, t, r, n), t.child; case 14: return r=t.type, l=Fe(r, t.pendingProps), l=Fe(r.type, l), vs(e, t, r, l, n); case 15: return Lc(e, t, t.type, t.pendingProps, n); case 17: return r=t.type, l=t.pendingProps, l=t.elementType===r?l:Fe(r, l), Hr(e, t), t.tag=1, me(r)?(e=!0, ll(t)):e=!1, on(t, n), Pc(t, r, l), ei(t, r, l, n), ri(null, t, r, !0, e, n); case 19: return jc(e, t, n); case 22: return zc(e, t, n);
  } throw Error(E(156, t.tag));
}; function Zc(e, t) {
  return _a(e, t);
} function Qp(e, t, n, r) {
  this.tag=e, this.key=n, this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null, this.index=0, this.ref=null, this.pendingProps=t, this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null, this.mode=r, this.subtreeFlags=this.flags=0, this.deletions=null, this.childLanes=this.lanes=0, this.alternate=null;
} function Ne(e, t, n, r) {
  return new Qp(e, t, n, r);
} function fu(e) {
  return e=e.prototype, !(!e||!e.isReactComponent);
} function Kp(e) {
  if (typeof e=='function') return fu(e)?1:0; if (e!=null) {
    if (e=e.$$typeof, e===Oi) return 11; if (e===Li) return 14;
  } return 2;
} function vt(e, t) {
  let n=e.alternate; return n===null?(n=Ne(e.tag, t, e.key, e.mode), n.elementType=e.elementType, n.type=e.type, n.stateNode=e.stateNode, n.alternate=e, e.alternate=n):(n.pendingProps=t, n.type=e.type, n.flags=0, n.subtreeFlags=0, n.deletions=null), n.flags=e.flags&14680064, n.childLanes=e.childLanes, n.lanes=e.lanes, n.child=e.child, n.memoizedProps=e.memoizedProps, n.memoizedState=e.memoizedState, n.updateQueue=e.updateQueue, t=e.dependencies, n.dependencies=t===null?null:{lanes: t.lanes, firstContext: t.firstContext}, n.sibling=e.sibling, n.index=e.index, n.ref=e.ref, n;
} function Qr(e, t, n, r, l, o) {
  let i=2; if (r=e, typeof e=='function')fu(e)&&(i=1); else if (typeof e=='string')i=5; else {
    e:switch (e) {
      case Wt: return zt(n.children, l, o, t); case Ti: i=8, l|=8; break; case Co: return e=Ne(12, n, t, l|2), e.elementType=Co, e.lanes=o, e; case _o: return e=Ne(13, n, t, l), e.elementType=_o, e.lanes=o, e; case No: return e=Ne(19, n, t, l), e.elementType=No, e.lanes=o, e; case sa: return Ll(n, l, o, t); default: if (typeof e=='object'&&e!==null) {
        switch (e.$$typeof) {
          case ia: i=10; break e; case ua: i=9; break e; case Oi: i=11; break e; case Li: i=14; break e; case lt: i=16, r=null; break e;
        }
      } throw Error(E(130, e==null?e:typeof e, ''));
    }
  } return t=Ne(i, n, t, l), t.elementType=e, t.type=r, t.lanes=o, t;
} function zt(e, t, n, r) {
  return e=Ne(7, e, r, t), e.lanes=n, e;
} function Ll(e, t, n, r) {
  return e=Ne(22, e, r, t), e.elementType=sa, e.lanes=n, e.stateNode={isHidden: !1}, e;
} function mo(e, t, n) {
  return e=Ne(6, e, null, t), e.lanes=n, e;
} function yo(e, t, n) {
  return t=Ne(4, e.children!==null?e.children:[], e.key, t), t.lanes=n, t.stateNode={containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}, t;
} function qp(e, t, n, r, l) {
  this.tag=t, this.containerInfo=e, this.finishedWork=this.pingCache=this.current=this.pendingChildren=null, this.timeoutHandle=-1, this.callbackNode=this.pendingContext=this.context=null, this.callbackPriority=0, this.eventTimes=Jl(0), this.expirationTimes=Jl(-1), this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0, this.entanglements=Jl(0), this.identifierPrefix=r, this.onRecoverableError=l, this.mutableSourceEagerHydrationData=null;
} function du(e, t, n, r, l, o, i, u, s) {
  return e=new qp(e, t, n, u, s), t===1?(t=1, o===!0&&(t|=8)):t=0, o=Ne(3, null, null, t), e.current=o, o.stateNode=e, o.memoizedState={element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}, Ji(o), e;
} function Xp(e, t, n) {
  const r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null; return {$$typeof: Vt, key: r==null?null:''+r, children: e, containerInfo: t, implementation: n};
} function bc(e) {
  if (!e) return wt; e=e._reactInternals; e: {
    if ($t(e)!==e||e.tag!==1) throw Error(E(170)); var t=e; do {
      switch (t.tag) {
        case 3: t=t.stateNode.context; break e; case 1: if (me(t.type)) {
          t=t.stateNode.__reactInternalMemoizedMergedChildContext; break e;
        }
      }t=t.return;
    } while (t!==null); throw Error(E(171));
  } if (e.tag===1) {
    const n=e.type; if (me(n)) return ba(e, n, t);
  } return t;
} function ef(e, t, n, r, l, o, i, u, s) {
  return e=du(n, r, !0, e, l, o, i, u, s), e.context=bc(null), n=e.current, r=ae(), l=yt(n), o=Ye(r, l), o.callback=t??null, ht(n, o, l), e.current.lanes=l, ar(e, l, r), ye(e, r), e;
} function zl(e, t, n, r) {
  const l=t.current; const o=ae(); const i=yt(l); return n=bc(n), t.context===null?t.context=n:t.pendingContext=n, t=Ye(o, i), t.payload={element: e}, r=r===void 0?null:r, r!==null&&(t.callback=r), e=ht(l, t, i), e!==null&&(Me(e, l, i, o), Ir(e, l, i)), i;
} function vl(e) {
  if (e=e.current, !e.child) return null; switch (e.child.tag) {
    case 5: return e.child.stateNode; default: return e.child.stateNode;
  }
} function Ts(e, t) {
  if (e=e.memoizedState, e!==null&&e.dehydrated!==null) {
    const n=e.retryLane; e.retryLane=n!==0&&n<t?n:t;
  }
} function pu(e, t) {
  Ts(e, t), (e=e.alternate)&&Ts(e, t);
} function Jp() {
  return null;
} const tf=typeof reportError=='function'?reportError:function(e) {
  console.error(e);
}; function hu(e) {
  this._internalRoot=e;
}Fl.prototype.render=hu.prototype.render=function(e) {
  const t=this._internalRoot; if (t===null) throw Error(E(409)); zl(e, t, null, null);
}; Fl.prototype.unmount=hu.prototype.unmount=function() {
  const e=this._internalRoot; if (e!==null) {
    this._internalRoot=null; const t=e.containerInfo; Ut(function() {
      zl(null, e, null, null);
    }), t[Ze]=null;
  }
}; function Fl(e) {
  this._internalRoot=e;
}Fl.prototype.unstable_scheduleHydration=function(e) {
  if (e) {
    const t=za(); e={blockedOn: null, target: e, priority: t}; for (var n=0; n<it.length&&t!==0&&t<it[n].priority; n++);it.splice(n, 0, e), n===0&&Da(e);
  }
}; function mu(e) {
  return !(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11);
} function Dl(e) {
  return !(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==' react-mount-point-unstable '));
} function Os() {} function Yp(e, t, n, r, l) {
  if (l) {
    if (typeof r=='function') {
      const o=r; r=function() {
        const a=vl(i); o.call(a);
      };
    } var i=ef(t, r, e, 0, null, !1, !1, '', Os); return e._reactRootContainer=i, e[Ze]=i.current, Zn(e.nodeType===8?e.parentNode:e), Ut(), i;
  } for (;l=e.lastChild;)e.removeChild(l); if (typeof r=='function') {
    const u=r; r=function() {
      const a=vl(s); u.call(a);
    };
  } var s=du(e, 0, !1, null, null, !1, !1, '', Os); return e._reactRootContainer=s, e[Ze]=s.current, Zn(e.nodeType===8?e.parentNode:e), Ut(function() {
    zl(t, s, n, r);
  }), s;
} function Al(e, t, n, r, l) {
  const o=n._reactRootContainer; if (o) {
    var i=o; if (typeof l=='function') {
      const u=l; l=function() {
        const s=vl(i); u.call(s);
      };
    }zl(t, i, e, l);
  } else i=Yp(n, t, e, l, r); return vl(i);
}Oa=function(e) {
  switch (e.tag) {
    case 3: var t=e.stateNode; if (t.current.memoizedState.isDehydrated) {
      const n=Fn(t.pendingLanes); n!==0&&(Di(t, n|1), ye(t, q()), !(D&6)&&(hn=q()+500, kt()));
    } break; case 13: Ut(function() {
      const r=be(e, 1); if (r!==null) {
        const l=ae(); Me(r, e, 1, l);
      }
    }), pu(e, 1);
  }
}; Ai=function(e) {
  if (e.tag===13) {
    const t=be(e, 134217728); if (t!==null) {
      const n=ae(); Me(t, e, 134217728, n);
    }pu(e, 134217728);
  }
}; La=function(e) {
  if (e.tag===13) {
    const t=yt(e); const n=be(e, t); if (n!==null) {
      const r=ae(); Me(n, e, t, r);
    }pu(e, t);
  }
}; za=function() {
  return A;
}; Fa=function(e, t) {
  const n=A; try {
    return A=e, t();
  } finally {
    A=n;
  }
}; jo=function(e, t, n) {
  switch (t) {
    case 'input': if (To(e, n), t=n.name, n.type==='radio'&&t!=null) {
      for (n=e; n.parentNode;)n=n.parentNode; for (n=n.querySelectorAll('input[name='+JSON.stringify(''+t)+'][type="radio"]'), t=0; t<n.length; t++) {
        const r=n[t]; if (r!==e&&r.form===e.form) {
          const l=_l(r); if (!l) throw Error(E(90)); ca(r), To(r, l);
        }
      }
    } break; case 'textarea': da(e, n); break; case 'select': t=n.value, t!=null&&tn(e, !!n.multiple, t, !1);
  }
}; wa=su; Sa=Ut; const Gp={usingClientEntryPoint: !1, Events: [fr, Xt, _l, va, ga, su]}; const Tn={findFiberByHostInstance: Pt, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom'}; const Zp={bundleType: Tn.bundleType, version: Tn.version, rendererPackageName: Tn.rendererPackageName, rendererConfig: Tn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: tt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e=xa(e), e===null?null:e.stateNode;
}, findFiberByHostInstance: Tn.findFiberByHostInstance||Jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: '18.3.1-next-f1338f8080-20240426'}; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<'u') {
  const Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Fr.isDisabled&&Fr.supportsFiber) {
    try {
      El=Fr.inject(Zp), We=Fr;
    } catch {}
  }
}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gp; ke.createPortal=function(e, t) {
  const n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null; if (!mu(t)) throw Error(E(200)); return Xp(e, t, null, n);
}; ke.createRoot=function(e, t) {
  if (!mu(e)) throw Error(E(299)); let n=!1; let r=''; let l=tf; return t!=null&&(t.unstable_strictMode===!0&&(n=!0), t.identifierPrefix!==void 0&&(r=t.identifierPrefix), t.onRecoverableError!==void 0&&(l=t.onRecoverableError)), t=du(e, 1, !1, null, null, n, !1, r, l), e[Ze]=t.current, Zn(e.nodeType===8?e.parentNode:e), new hu(t);
}; ke.findDOMNode=function(e) {
  if (e==null) return null; if (e.nodeType===1) return e; const t=e._reactInternals; if (t===void 0) throw typeof e.render=='function'?Error(E(188)):(e=Object.keys(e).join(','), Error(E(268, e))); return e=xa(t), e=e===null?null:e.stateNode, e;
}; ke.flushSync=function(e) {
  return Ut(e);
}; ke.hydrate=function(e, t, n) {
  if (!Dl(t)) throw Error(E(200)); return Al(null, e, t, !0, n);
}; ke.hydrateRoot=function(e, t, n) {
  if (!mu(e)) throw Error(E(405)); const r=n!=null&&n.hydratedSources||null; let l=!1; let o=''; let i=tf; if (n!=null&&(n.unstable_strictMode===!0&&(l=!0), n.identifierPrefix!==void 0&&(o=n.identifierPrefix), n.onRecoverableError!==void 0&&(i=n.onRecoverableError)), t=ef(t, null, e, 1, n??null, l, !1, o, i), e[Ze]=t.current, Zn(e), r) for (e=0; e<r.length; e++)n=r[e], l=n._getVersion, l=l(n._source), t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n, l]:t.mutableSourceEagerHydrationData.push(n, l); return new Fl(t);
}; ke.render=function(e, t, n) {
  if (!Dl(t)) throw Error(E(200)); return Al(null, e, t, !1, n);
}; ke.unmountComponentAtNode=function(e) {
  if (!Dl(e)) throw Error(E(40)); return e._reactRootContainer?(Ut(function() {
    Al(null, null, e, !1, function() {
      e._reactRootContainer=null, e[Ze]=null;
    });
  }), !0):!1;
}; ke.unstable_batchedUpdates=su; ke.unstable_renderSubtreeIntoContainer=function(e, t, n, r) {
  if (!Dl(n)) throw Error(E(200)); if (e==null||e._reactInternals===void 0) throw Error(E(38)); return Al(e, t, n, !1, r);
}; ke.version='18.3.1-next-f1338f8080-20240426'; function nf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>'u'||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!='function')) {
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf);
    } catch (e) {
      console.error(e);
    }
  }
}nf(), na.exports=ke; const bp=na.exports; const Ls=bp; ko.createRoot=Ls.createRoot, ko.hydrateRoot=Ls.hydrateRoot; const eh=({note: e, toggleImportance: t})=>{
  const n=e.important?'make not important':'make important'; return Z.jsxs('li', {children: [e.content, Z.jsx('button', {onClick: t, children: n})]});
}; function rf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
} const {toString: th}=Object.prototype; const {getPrototypeOf: yu}=Object; const jl=((e)=>(t)=>{
  const n=th.call(t); return e[n]||(e[n]=n.slice(8, -1).toLowerCase());
})(Object.create(null)); const Be=(e)=>(e=e.toLowerCase(), (t)=>jl(t)===e); const Ml=(e)=>(t)=>typeof t===e; const {isArray: gn}=Array; const ur=Ml('undefined'); function nh(e) {
  return e!==null&&!ur(e)&&e.constructor!==null&&!ur(e.constructor)&&Pe(e.constructor.isBuffer)&&e.constructor.isBuffer(e);
} const lf=Be('ArrayBuffer'); function rh(e) {
  let t; return typeof ArrayBuffer<'u'&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&lf(e.buffer), t;
} const lh=Ml('string'); const Pe=Ml('function'); const of=Ml('number'); const Ul=(e)=>e!==null&&typeof e=='object'; const oh=(e)=>e===!0||e===!1; const Kr=(e)=>{
  if (jl(e)!=='object') return !1; const t=yu(e); return (t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e);
}; const ih=Be('Date'); const uh=Be('File'); const sh=Be('Blob'); const ah=Be('FileList'); const ch=(e)=>Ul(e)&&Pe(e.pipe); const fh=(e)=>{
  let t; return e&&(typeof FormData=='function'&&e instanceof FormData||Pe(e.append)&&((t=jl(e))==='formdata'||t==='object'&&Pe(e.toString)&&e.toString()==='[object FormData]'));
}; const dh=Be('URLSearchParams'); const [ph, hh, mh, yh]=['ReadableStream', 'Request', 'Response', 'Headers'].map(Be); const vh=(e)=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''); function pr(e, t, {allOwnKeys: n=!1}={}) {
  if (e===null||typeof e>'u') return; let r; let l; if (typeof e!='object'&&(e=[e]), gn(e)) for (r=0, l=e.length; r<l; r++)t.call(null, e[r], r, e); else {
    const o=n?Object.getOwnPropertyNames(e):Object.keys(e); const i=o.length; let u; for (r=0; r<i; r++)u=o[r], t.call(null, e[u], u, e);
  }
} function uf(e, t) {
  t=t.toLowerCase(); const n=Object.keys(e); let r=n.length; let l; for (;r-- >0;) if (l=n[r], t===l.toLowerCase()) return l; return null;
} const sf=typeof globalThis<'u'?globalThis:typeof self<'u'?self:typeof window<'u'?window:global; const af=(e)=>!ur(e)&&e!==sf; function mi() {
  const {caseless: e}=af(this)&&this||{}; const t={}; const n=(r, l)=>{
    const o=e&&uf(t, l)||l; Kr(t[o])&&Kr(r)?t[o]=mi(t[o], r):Kr(r)?t[o]=mi({}, r):gn(r)?t[o]=r.slice():t[o]=r;
  }; for (let r=0, l=arguments.length; r<l; r++)arguments[r]&&pr(arguments[r], n); return t;
} const gh=(e, t, n, {allOwnKeys: r}={})=>(pr(t, (l, o)=>{
n&&Pe(l)?e[o]=rf(l, n):e[o]=l;
}, {allOwnKeys: r}), e); const wh=(e)=>(e.charCodeAt(0)===65279&&(e=e.slice(1)), e); const Sh=(e, t, n, r)=>{
  e.prototype=Object.create(t.prototype, r), e.prototype.constructor=e, Object.defineProperty(e, 'super', {value: t.prototype}), n&&Object.assign(e.prototype, n);
}; const Eh=(e, t, n, r)=>{
  let l; let o; let i; const u={}; if (t=t||{}, e==null) return t; do {
    for (l=Object.getOwnPropertyNames(e), o=l.length; o-- >0;)i=l[o], (!r||r(i, e, t))&&!u[i]&&(t[i]=e[i], u[i]=!0); e=n!==!1&&yu(e);
  } while (e&&(!n||n(e, t))&&e!==Object.prototype); return t;
}; const kh=(e, t, n)=>{
  e=String(e), (n===void 0||n>e.length)&&(n=e.length), n-=t.length; const r=e.indexOf(t, n); return r!==-1&&r===n;
}; const xh=(e)=>{
  if (!e) return null; if (gn(e)) return e; let t=e.length; if (!of(t)) return null; const n=new Array(t); for (;t-- >0;)n[t]=e[t]; return n;
}; const Ch=((e)=>(t)=>e&&t instanceof e)(typeof Uint8Array<'u'&&yu(Uint8Array)); const _h=(e, t)=>{
  const r=(e&&e[Symbol.iterator]).call(e); let l; for (;(l=r.next())&&!l.done;) {
    const o=l.value; t.call(e, o[0], o[1]);
  }
}; const Nh=(e, t)=>{
  let n; const r=[]; for (;(n=e.exec(t))!==null;)r.push(n); return r;
}; const Rh=Be('HTMLFormElement'); const Ph=(e)=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, l) {
  return r.toUpperCase()+l;
}); const zs=(({hasOwnProperty: e})=>(t, n)=>e.call(t, n))(Object.prototype); const Th=Be('RegExp'); const cf=(e, t)=>{
  const n=Object.getOwnPropertyDescriptors(e); const r={}; pr(n, (l, o)=>{
    let i; (i=t(l, o, e))!==!1&&(r[o]=i||l);
  }), Object.defineProperties(e, r);
}; const Oh=(e)=>{
  cf(e, (t, n)=>{
    if (Pe(e)&&['arguments', 'caller', 'callee'].indexOf(n)!==-1) return !1; const r=e[n]; if (Pe(r)) {
      if (t.enumerable=!1, 'writable'in t) {
        t.writable=!1; return;
      }t.set||(t.set=()=>{
        throw Error('Can not rewrite read-only method \''+n+'\'');
      });
    }
  });
}; const Lh=(e, t)=>{
  const n={}; const r=(l)=>{
    l.forEach((o)=>{
      n[o]=!0;
    });
  }; return gn(e)?r(e):r(String(e).split(t)), n;
}; const zh=()=>{}; const Fh=(e, t)=>e!=null&&Number.isFinite(e=+e)?e:t; const vo='abcdefghijklmnopqrstuvwxyz'; const Fs='0123456789'; const ff={DIGIT: Fs, ALPHA: vo, ALPHA_DIGIT: vo+vo.toUpperCase()+Fs}; const Dh=(e=16, t=ff.ALPHA_DIGIT)=>{
  let n=''; const {length: r}=t; for (;e--;)n+=t[Math.random()*r|0]; return n;
}; function Ah(e) {
  return !!(e&&Pe(e.append)&&e[Symbol.toStringTag]==='FormData'&&e[Symbol.iterator]);
} const jh=(e)=>{
  const t=new Array(10); const n=(r, l)=>{
    if (Ul(r)) {
      if (t.indexOf(r)>=0) return; if (!('toJSON'in r)) {
        t[l]=r; const o=gn(r)?[]:{}; return pr(r, (i, u)=>{
          const s=n(i, l+1); !ur(s)&&(o[u]=s);
        }), t[l]=void 0, o;
      }
    } return r;
  }; return n(e, 0);
}; const Mh=Be('AsyncFunction'); const Uh=(e)=>e&&(Ul(e)||Pe(e))&&Pe(e.then)&&Pe(e.catch); const v={isArray: gn, isArrayBuffer: lf, isBuffer: nh, isFormData: fh, isArrayBufferView: rh, isString: lh, isNumber: of, isBoolean: oh, isObject: Ul, isPlainObject: Kr, isReadableStream: ph, isRequest: hh, isResponse: mh, isHeaders: yh, isUndefined: ur, isDate: ih, isFile: uh, isBlob: sh, isRegExp: Th, isFunction: Pe, isStream: ch, isURLSearchParams: dh, isTypedArray: Ch, isFileList: ah, forEach: pr, merge: mi, extend: gh, trim: vh, stripBOM: wh, inherits: Sh, toFlatObject: Eh, kindOf: jl, kindOfTest: Be, endsWith: kh, toArray: xh, forEachEntry: _h, matchAll: Nh, isHTMLForm: Rh, hasOwnProperty: zs, hasOwnProp: zs, reduceDescriptors: cf, freezeMethods: Oh, toObjectSet: Lh, toCamelCase: Ph, noop: zh, toFiniteNumber: Fh, findKey: uf, global: sf, isContextDefined: af, ALPHABET: ff, generateString: Dh, isSpecCompliantForm: Ah, toJSONObject: jh, isAsyncFn: Mh, isThenable: Uh}; function T(e, t, n, r, l) {
  Error.call(this), Error.captureStackTrace?Error.captureStackTrace(this, this.constructor):this.stack=new Error().stack, this.message=e, this.name='AxiosError', t&&(this.code=t), n&&(this.config=n), r&&(this.request=r), l&&(this.response=l);
}v.inherits(T, Error, {toJSON: function() {
  return {message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: v.toJSONObject(this.config), code: this.code, status: this.response&&this.response.status?this.response.status:null};
}}); const df=T.prototype; const pf={}; ['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'].forEach((e)=>{
  pf[e]={value: e};
}); Object.defineProperties(T, pf); Object.defineProperty(df, 'isAxiosError', {value: !0}); T.from=(e, t, n, r, l, o)=>{
  const i=Object.create(df); return v.toFlatObject(e, i, function(s) {
    return s!==Error.prototype;
  }, (u)=>u!=='isAxiosError'), T.call(i, e.message, t, n, r, l), i.cause=e, i.name=e.name, o&&Object.assign(i, o), i;
}; const Ih=null; function yi(e) {
  return v.isPlainObject(e)||v.isArray(e);
} function hf(e) {
  return v.endsWith(e, '[]')?e.slice(0, -2):e;
} function Ds(e, t, n) {
  return e?e.concat(t).map(function(l, o) {
    return l=hf(l), !n&&o?'['+l+']':l;
  }).join(n?'.':''):t;
} function Bh(e) {
  return v.isArray(e)&&!e.some(yi);
} const $h=v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
}); function Il(e, t, n) {
  if (!v.isObject(e)) throw new TypeError('target must be an object'); t=t||new FormData, n=v.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function(g, P) {
    return !v.isUndefined(P[g]);
  }); const r=n.metaTokens; const l=n.visitor||f; const o=n.dots; const i=n.indexes; const s=(n.Blob||typeof Blob<'u'&&Blob)&&v.isSpecCompliantForm(t); if (!v.isFunction(l)) throw new TypeError('visitor must be a function'); function a(m) {
    if (m===null) return ''; if (v.isDate(m)) return m.toISOString(); if (!s&&v.isBlob(m)) throw new T('Blob is not supported. Use a Buffer instead.'); return v.isArrayBuffer(m)||v.isTypedArray(m)?s&&typeof Blob=='function'?new Blob([m]):Buffer.from(m):m;
  } function f(m, g, P) {
    let d=m; if (m&&!P&&typeof m=='object') {
      if (v.endsWith(g, '{}'))g=r?g:g.slice(0, -2), m=JSON.stringify(m); else if (v.isArray(m)&&Bh(m)||(v.isFileList(m)||v.endsWith(g, '[]'))&&(d=v.toArray(m))) {
        return g=hf(g), d.forEach(function(p, S) {
          !(v.isUndefined(p)||p===null)&&t.append(i===!0?Ds([g], S, o):i===null?g:g+'[]', a(p));
        }), !1;
      }
    } return yi(m)?!0:(t.append(Ds(P, g, o), a(m)), !1);
  } const h=[]; const y=Object.assign($h, {defaultVisitor: f, convertValue: a, isVisitable: yi}); function w(m, g) {
    if (!v.isUndefined(m)) {
      if (h.indexOf(m)!==-1) throw Error('Circular reference detected in '+g.join('.')); h.push(m), v.forEach(m, function(d, c) {
        (!(v.isUndefined(d)||d===null)&&l.call(t, d, v.isString(c)?c.trim():c, g, y))===!0&&w(d, g?g.concat(c):[c]);
      }), h.pop();
    }
  } if (!v.isObject(e)) throw new TypeError('data must be an object'); return w(e), t;
} function As(e) {
  const t={'!': '%21', '\'': '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0'}; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
} function vu(e, t) {
  this._pairs=[], e&&Il(e, this, t);
} const mf=vu.prototype; mf.append=function(t, n) {
  this._pairs.push([t, n]);
}; mf.toString=function(t) {
  const n=t?function(r) {
    return t.call(this, r, As);
  }:As; return this._pairs.map(function(l) {
    return n(l[0])+'='+n(l[1]);
  }, '').join('&');
}; function Hh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
} function yf(e, t, n) {
  if (!t) return e; const r=n&&n.encode||Hh; const l=n&&n.serialize; let o; if (l?o=l(t, n):o=v.isURLSearchParams(t)?t.toString():new vu(t, n).toString(r), o) {
    const i=e.indexOf('#'); i!==-1&&(e=e.slice(0, i)), e+=(e.indexOf('?')===-1?'?':'&')+o;
  } return e;
} class js {
  constructor() {
    this.handlers=[];
  }use(t, n, r) {
    return this.handlers.push({fulfilled: t, rejected: n, synchronous: r?r.synchronous:!1, runWhen: r?r.runWhen:null}), this.handlers.length-1;
  }eject(t) {
    this.handlers[t]&&(this.handlers[t]=null);
  }clear() {
    this.handlers&&(this.handlers=[]);
  }forEach(t) {
    v.forEach(this.handlers, function(r) {
      r!==null&&t(r);
    });
  }
} const vf={silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}; const Vh=typeof URLSearchParams<'u'?URLSearchParams:vu; const Wh=typeof FormData<'u'?FormData:null; const Qh=typeof Blob<'u'?Blob:null; const Kh={isBrowser: !0, classes: {URLSearchParams: Vh, FormData: Wh, Blob: Qh}, protocols: ['http', 'https', 'file', 'blob', 'url', 'data']}; const gu=typeof window<'u'&&typeof document<'u'; const qh=((e)=>gu&&['ReactNative', 'NativeScript', 'NS'].indexOf(e)<0)(typeof navigator<'u'&&navigator.product); const Xh=typeof WorkerGlobalScope<'u'&&self instanceof WorkerGlobalScope&&typeof self.importScripts=='function'; const Jh=gu&&window.location.href||'http://localhost'; const Yh=Object.freeze(Object.defineProperty({__proto__: null, hasBrowserEnv: gu, hasStandardBrowserEnv: qh, hasStandardBrowserWebWorkerEnv: Xh, origin: Jh}, Symbol.toStringTag, {value: 'Module'})); const Ue={...Yh, ...Kh}; function Gh(e, t) {
  return Il(e, new Ue.classes.URLSearchParams, Object.assign({visitor: function(n, r, l, o) {
    return Ue.isNode&&v.isBuffer(n)?(this.append(r, n.toString('base64')), !1):o.defaultVisitor.apply(this, arguments);
  }}, t));
} function Zh(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t)=>t[0]==='[]'?'':t[1]||t[0]);
} function bh(e) {
  const t={}; const n=Object.keys(e); let r; const l=n.length; let o; for (r=0; r<l; r++)o=n[r], t[o]=e[o]; return t;
} function gf(e) {
  function t(n, r, l, o) {
    let i=n[o++]; if (i==='__proto__') return !0; const u=Number.isFinite(+i); const s=o>=n.length; return i=!i&&v.isArray(l)?l.length:i, s?(v.hasOwnProp(l, i)?l[i]=[l[i], r]:l[i]=r, !u):((!l[i]||!v.isObject(l[i]))&&(l[i]=[]), t(n, r, l[i], o)&&v.isArray(l[i])&&(l[i]=bh(l[i])), !u);
  } if (v.isFormData(e)&&v.isFunction(e.entries)) {
    const n={}; return v.forEachEntry(e, (r, l)=>{
      t(Zh(r), l, n, 0);
    }), n;
  } return null;
} function em(e, t, n) {
  if (v.isString(e)) {
    try {
      return (t||JSON.parse)(e), v.trim(e);
    } catch (r) {
      if (r.name!=='SyntaxError') throw r;
    }
  } return (n||JSON.stringify)(e);
} const hr={transitional: vf, adapter: ['xhr', 'http', 'fetch'], transformRequest: [function(t, n) {
  const r=n.getContentType()||''; const l=r.indexOf('application/json')>-1; const o=v.isObject(t); if (o&&v.isHTMLForm(t)&&(t=new FormData(t)), v.isFormData(t)) return l?JSON.stringify(gf(t)):t; if (v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t)||v.isReadableStream(t)) return t; if (v.isArrayBufferView(t)) return t.buffer; if (v.isURLSearchParams(t)) return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString(); let u; if (o) {
    if (r.indexOf('application/x-www-form-urlencoded')>-1) return Gh(t, this.formSerializer).toString(); if ((u=v.isFileList(t))||r.indexOf('multipart/form-data')>-1) {
      const s=this.env&&this.env.FormData; return Il(u?{'files[]': t}:t, s&&new s, this.formSerializer);
    }
  } return o||l?(n.setContentType('application/json', !1), em(t)):t;
}], transformResponse: [function(t) {
  const n=this.transitional||hr.transitional; const r=n&&n.forcedJSONParsing; const l=this.responseType==='json'; if (v.isResponse(t)||v.isReadableStream(t)) return t; if (t&&v.isString(t)&&(r&&!this.responseType||l)) {
    const i=!(n&&n.silentJSONParsing)&&l; try {
      return JSON.parse(t);
    } catch (u) {
      if (i) throw u.name==='SyntaxError'?T.from(u, T.ERR_BAD_RESPONSE, this, null, this.response):u;
    }
  } return t;
}], timeout: 0, xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN', maxContentLength: -1, maxBodyLength: -1, env: {FormData: Ue.classes.FormData, Blob: Ue.classes.Blob}, validateStatus: function(t) {
  return t>=200&&t<300;
}, headers: {common: {'Accept': 'application/json, text/plain, */*', 'Content-Type': void 0}}}; v.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e)=>{
  hr.headers[e]={};
}); const tm=v.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']); const nm=(e)=>{
  const t={}; let n; let r; let l; return e&&e.split(`
`).forEach(function(i) {
    l=i.indexOf(':'), n=i.substring(0, l).trim().toLowerCase(), r=i.substring(l+1).trim(), !(!n||t[n]&&tm[n])&&(n==='set-cookie'?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+', '+r:r);
  }), t;
}; const Ms=Symbol('internals'); function On(e) {
  return e&&String(e).trim().toLowerCase();
} function qr(e) {
  return e===!1||e==null?e:v.isArray(e)?e.map(qr):String(e);
} function rm(e) {
  const t=Object.create(null); const n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (;r=n.exec(e);)t[r[1]]=r[2]; return t;
} const lm=(e)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()); function go(e, t, n, r, l) {
  if (v.isFunction(r)) return r.call(this, t, n); if (l&&(t=n), !!v.isString(t)) {
    if (v.isString(r)) return t.indexOf(r)!==-1; if (v.isRegExp(r)) return r.test(t);
  }
} function om(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r)=>n.toUpperCase()+r);
} function im(e, t) {
  const n=v.toCamelCase(' '+t); ['get', 'set', 'has'].forEach((r)=>{
    Object.defineProperty(e, r+n, {value: function(l, o, i) {
      return this[r].call(this, t, l, o, i);
    }, configurable: !0});
  });
} class ve {
  constructor(t) {
    t&&this.set(t);
  }set(t, n, r) {
    const l=this; function o(u, s, a) {
      const f=On(s); if (!f) throw new Error('header name must be a non-empty string'); const h=v.findKey(l, f); (!h||l[h]===void 0||a===!0||a===void 0&&l[h]!==!1)&&(l[h||s]=qr(u));
    } const i=(u, s)=>v.forEach(u, (a, f)=>o(a, f, s)); if (v.isPlainObject(t)||t instanceof this.constructor)i(t, n); else if (v.isString(t)&&(t=t.trim())&&!lm(t))i(nm(t), n); else if (v.isHeaders(t)) for (const [u, s] of t.entries())o(s, u, r); else t!=null&&o(n, t, r); return this;
  }get(t, n) {
    if (t=On(t), t) {
      const r=v.findKey(this, t); if (r) {
        const l=this[r]; if (!n) return l; if (n===!0) return rm(l); if (v.isFunction(n)) return n.call(this, l, r); if (v.isRegExp(n)) return n.exec(l); throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }has(t, n) {
    if (t=On(t), t) {
      const r=v.findKey(this, t); return !!(r&&this[r]!==void 0&&(!n||go(this, this[r], r, n)));
    } return !1;
  }delete(t, n) {
    const r=this; let l=!1; function o(i) {
      if (i=On(i), i) {
        const u=v.findKey(r, i); u&&(!n||go(r, r[u], u, n))&&(delete r[u], l=!0);
      }
    } return v.isArray(t)?t.forEach(o):o(t), l;
  }clear(t) {
    const n=Object.keys(this); let r=n.length; let l=!1; for (;r--;) {
      const o=n[r]; (!t||go(this, this[o], o, t, !0))&&(delete this[o], l=!0);
    } return l;
  }normalize(t) {
    const n=this; const r={}; return v.forEach(this, (l, o)=>{
      const i=v.findKey(r, o); if (i) {
        n[i]=qr(l), delete n[o]; return;
      } const u=t?om(o):String(o).trim(); u!==o&&delete n[o], n[u]=qr(l), r[u]=!0;
    }), this;
  }concat(...t) {
    return this.constructor.concat(this, ...t);
  }toJSON(t) {
    const n=Object.create(null); return v.forEach(this, (r, l)=>{
      r!=null&&r!==!1&&(n[l]=t&&v.isArray(r)?r.join(', '):r);
    }), n;
  }[Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }toString() {
    return Object.entries(this.toJSON()).map(([t, n])=>t+': '+n).join(`
`);
  } get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  } static from(t) {
    return t instanceof this?t:new this(t);
  } static concat(t, ...n) {
    const r=new this(t); return n.forEach((l)=>r.set(l)), r;
  } static accessor(t) {
    const r=(this[Ms]=this[Ms]={accessors: {}}).accessors; const l=this.prototype; function o(i) {
      const u=On(i); r[u]||(im(l, i), r[u]=!0);
    } return v.isArray(t)?t.forEach(o):o(t), this;
  }
}ve.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']); v.reduceDescriptors(ve.prototype, ({value: e}, t)=>{
  const n=t[0].toUpperCase()+t.slice(1); return {get: ()=>e, set(r) {
    this[n]=r;
  }};
}); v.freezeMethods(ve); function wo(e, t) {
  const n=this||hr; const r=t||n; const l=ve.from(r.headers); let o=r.data; return v.forEach(e, function(u) {
    o=u.call(n, o, l.normalize(), t?t.status:void 0);
  }), l.normalize(), o;
} function wf(e) {
  return !!(e&&e.__CANCEL__);
} function wn(e, t, n) {
  T.call(this, e??'canceled', T.ERR_CANCELED, t, n), this.name='CanceledError';
}v.inherits(wn, T, {__CANCEL__: !0}); function Sf(e, t, n) {
  const r=n.config.validateStatus; !n.status||!r||r(n.status)?e(n):t(new T('Request failed with status code '+n.status, [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4], n.config, n.request, n));
} function um(e) {
  const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t&&t[1]||'';
} function sm(e, t) {
  e=e||10; const n=new Array(e); const r=new Array(e); let l=0; let o=0; let i; return t=t!==void 0?t:1e3, function(s) {
    const a=Date.now(); const f=r[o]; i||(i=a), n[l]=s, r[l]=a; let h=o; let y=0; for (;h!==l;)y+=n[h++], h=h%e; if (l=(l+1)%e, l===o&&(o=(o+1)%e), a-i<t) return; const w=f&&a-f; return w?Math.round(y*1e3/w):void 0;
  };
} function am(e, t) {
  let n=0; const r=1e3/t; let l=null; return function() {
    const i=this===!0; const u=Date.now(); if (i||u-n>r) return l&&(clearTimeout(l), l=null), n=u, e.apply(null, arguments); l||(l=setTimeout(()=>(l=null, n=Date.now(), e.apply(null, arguments)), r-(u-n)));
  };
} const gl=(e, t, n=3)=>{
  let r=0; const l=sm(50, 250); return am((o)=>{
    const i=o.loaded; const u=o.lengthComputable?o.total:void 0; const s=i-r; const a=l(s); const f=i<=u; r=i; const h={loaded: i, total: u, progress: u?i/u:void 0, bytes: s, rate: a||void 0, estimated: a&&u&&f?(u-i)/a:void 0, event: o, lengthComputable: u!=null}; h[t?'download':'upload']=!0, e(h);
  }, n);
}; const cm=Ue.hasStandardBrowserEnv?function() {
  const t=/(msie|trident)/i.test(navigator.userAgent); const n=document.createElement('a'); let r; function l(o) {
    let i=o; return t&&(n.setAttribute('href', i), i=n.href), n.setAttribute('href', i), {href: n.href, protocol: n.protocol?n.protocol.replace(/:$/, ''):'', host: n.host, search: n.search?n.search.replace(/^\?/, ''):'', hash: n.hash?n.hash.replace(/^#/, ''):'', hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0)==='/'?n.pathname:'/'+n.pathname};
  } return r=l(window.location.href), function(i) {
    const u=v.isString(i)?l(i):i; return u.protocol===r.protocol&&u.host===r.host;
  };
}():function() {
  return function() {
    return !0;
  };
}(); const fm=Ue.hasStandardBrowserEnv?{write(e, t, n, r, l, o) {
  const i=[e+'='+encodeURIComponent(t)]; v.isNumber(n)&&i.push('expires='+new Date(n).toGMTString()), v.isString(r)&&i.push('path='+r), v.isString(l)&&i.push('domain='+l), o===!0&&i.push('secure'), document.cookie=i.join('; ');
}, read(e) {
  const t=document.cookie.match(new RegExp('(^|;\\s*)('+e+')=([^;]*)')); return t?decodeURIComponent(t[3]):null;
}, remove(e) {
  this.write(e, '', Date.now()-864e5);
}}:{write() {}, read() {
  return null;
}, remove() {}}; function dm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
} function pm(e, t) {
  return t?e.replace(/\/?\/$/, '')+'/'+t.replace(/^\/+/, ''):e;
} function Ef(e, t) {
  return e&&!dm(t)?pm(e, t):t;
} const Us=(e)=>e instanceof ve?{...e}:e; function It(e, t) {
  t=t||{}; const n={}; function r(a, f, h) {
    return v.isPlainObject(a)&&v.isPlainObject(f)?v.merge.call({caseless: h}, a, f):v.isPlainObject(f)?v.merge({}, f):v.isArray(f)?f.slice():f;
  } function l(a, f, h) {
    if (v.isUndefined(f)) {
      if (!v.isUndefined(a)) return r(void 0, a, h);
    } else return r(a, f, h);
  } function o(a, f) {
    if (!v.isUndefined(f)) return r(void 0, f);
  } function i(a, f) {
    if (v.isUndefined(f)) {
      if (!v.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  } function u(a, f, h) {
    if (h in t) return r(a, f); if (h in e) return r(void 0, a);
  } const s={url: o, method: o, data: o, baseURL: i, transformRequest: i, transformResponse: i, paramsSerializer: i, timeout: i, timeoutMessage: i, withCredentials: i, withXSRFToken: i, adapter: i, responseType: i, xsrfCookieName: i, xsrfHeaderName: i, onUploadProgress: i, onDownloadProgress: i, decompress: i, maxContentLength: i, maxBodyLength: i, beforeRedirect: i, transport: i, httpAgent: i, httpsAgent: i, cancelToken: i, socketPath: i, responseEncoding: i, validateStatus: u, headers: (a, f)=>l(Us(a), Us(f), !0)}; return v.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const h=s[f]||l; const y=h(e[f], t[f], f); v.isUndefined(y)&&h!==u||(n[f]=y);
  }), n;
} const kf=(e)=>{
  const t=It({}, e); let {data: n, withXSRFToken: r, xsrfHeaderName: l, xsrfCookieName: o, headers: i, auth: u}=t; t.headers=i=ve.from(i), t.url=yf(Ef(t.baseURL, t.url), e.params, e.paramsSerializer), u&&i.set('Authorization', 'Basic '+btoa((u.username||'')+':'+(u.password?unescape(encodeURIComponent(u.password)):''))); let s; if (v.isFormData(n)) {
    if (Ue.hasStandardBrowserEnv||Ue.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0); else if ((s=i.getContentType())!==!1) {
      const [a, ...f]=s?s.split(';').map((h)=>h.trim()).filter(Boolean):[]; i.setContentType([a||'multipart/form-data', ...f].join('; '));
    }
  } if (Ue.hasStandardBrowserEnv&&(r&&v.isFunction(r)&&(r=r(t)), r||r!==!1&&cm(t.url))) {
    const a=l&&o&&fm.read(o); a&&i.set(l, a);
  } return t;
}; const hm=typeof XMLHttpRequest<'u'; const mm=hm&&function(e) {
  return new Promise(function(n, r) {
    const l=kf(e); const o=l.data; const i=ve.from(l.headers).normalize(); const {responseType: u}=l; let s; function a() {
      l.cancelToken&&l.cancelToken.unsubscribe(s), l.signal&&l.signal.removeEventListener('abort', s);
    } let f=new XMLHttpRequest; f.open(l.method.toUpperCase(), l.url, !0), f.timeout=l.timeout; function h() {
      if (!f) return; const w=ve.from('getAllResponseHeaders'in f&&f.getAllResponseHeaders()); const g={data: !u||u==='text'||u==='json'?f.responseText:f.response, status: f.status, statusText: f.statusText, headers: w, config: e, request: f}; Sf(function(d) {
        n(d), a();
      }, function(d) {
        r(d), a();
      }, g), f=null;
    }'onloadend'in f?f.onloadend=h:f.onreadystatechange=function() {
      !f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf('file:')===0)||setTimeout(h);
    }, f.onabort=function() {
      f&&(r(new T('Request aborted', T.ECONNABORTED, l, f)), f=null);
    }, f.onerror=function() {
      r(new T('Network Error', T.ERR_NETWORK, l, f)), f=null;
    }, f.ontimeout=function() {
      let m=l.timeout?'timeout of '+l.timeout+'ms exceeded':'timeout exceeded'; const g=l.transitional||vf; l.timeoutErrorMessage&&(m=l.timeoutErrorMessage), r(new T(m, g.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED, l, f)), f=null;
    }, o===void 0&&i.setContentType(null), 'setRequestHeader'in f&&v.forEach(i.toJSON(), function(m, g) {
      f.setRequestHeader(g, m);
    }), v.isUndefined(l.withCredentials)||(f.withCredentials=!!l.withCredentials), u&&u!=='json'&&(f.responseType=l.responseType), typeof l.onDownloadProgress=='function'&&f.addEventListener('progress', gl(l.onDownloadProgress, !0)), typeof l.onUploadProgress=='function'&&f.upload&&f.upload.addEventListener('progress', gl(l.onUploadProgress)), (l.cancelToken||l.signal)&&(s=(w)=>{
      f&&(r(!w||w.type?new wn(null, e, f):w), f.abort(), f=null);
    }, l.cancelToken&&l.cancelToken.subscribe(s), l.signal&&(l.signal.aborted?s():l.signal.addEventListener('abort', s))); const y=um(l.url); if (y&&Ue.protocols.indexOf(y)===-1) {
      r(new T('Unsupported protocol '+y+':', T.ERR_BAD_REQUEST, e)); return;
    }f.send(o||null);
  });
}; const ym=(e, t)=>{
  const n=new AbortController; let r; const l=function(s) {
    if (!r) {
      r=!0, i(); const a=s instanceof Error?s:this.reason; n.abort(a instanceof T?a:new wn(a instanceof Error?a.message:a));
    }
  }; let o=t&&setTimeout(()=>{
    l(new T(`timeout ${t} of ms exceeded`, T.ETIMEDOUT));
  }, t); const i=()=>{
    e&&(o&&clearTimeout(o), o=null, e.forEach((s)=>{
      s&&(s.removeEventListener?s.removeEventListener('abort', l):s.unsubscribe(l));
    }), e=null);
  }; e.forEach((s)=>s&&s.addEventListener&&s.addEventListener('abort', l)); const {signal: u}=n; return u.unsubscribe=i, [u, ()=>{
    o&&clearTimeout(o), o=null;
  }];
}; const vm=function* (e, t) {
  const n=e.byteLength; if (!t||n<t) {
    yield e; return;
  } let r=0; let l; for (;r<n;)l=r+t, yield e.slice(r, l), r=l;
}; const gm=async function* (e, t, n) {
  for await (const r of e) yield* vm(ArrayBuffer.isView(r)?r:await n(String(r)), t);
}; const Is=(e, t, n, r, l)=>{
  const o=gm(e, t, l); let i=0; return new ReadableStream({type: 'bytes', async pull(u) {
    const {done: s, value: a}=await o.next(); if (s) {
      u.close(), r(); return;
    } const f=a.byteLength; n&&n(i+=f), u.enqueue(new Uint8Array(a));
  }, cancel(u) {
    return r(u), o.return();
  }}, {highWaterMark: 2});
}; const Bs=(e, t)=>{
  const n=e!=null; return (r)=>setTimeout(()=>t({lengthComputable: n, total: e, loaded: r}));
}; const Bl=typeof fetch=='function'&&typeof Request=='function'&&typeof Response=='function'; const xf=Bl&&typeof ReadableStream=='function'; const vi=Bl&&(typeof TextEncoder=='function'?((e)=>(t)=>e.encode(t))(new TextEncoder):async (e)=>new Uint8Array(await new Response(e).arrayBuffer())); const wm=xf&&(()=>{
  let e=!1; const t=new Request(Ue.origin, {body: new ReadableStream, method: 'POST', get duplex() {
    return e=!0, 'half';
  }}).headers.has('Content-Type'); return e&&!t;
})(); const $s=64*1024; const gi=xf&&!!(()=>{
  try {
    return v.isReadableStream(new Response('').body);
  } catch {}
})(); const wl={stream: gi&&((e)=>e.body)}; Bl&&((e)=>{
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t)=>{
    !wl[t]&&(wl[t]=v.isFunction(e[t])?(n)=>n[t]():(n, r)=>{
      throw new T(`Response type '${t}' is not supported`, T.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response); const Sm=async (e)=>{
  if (e==null) return 0; if (v.isBlob(e)) return e.size; if (v.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength; if (v.isArrayBufferView(e)) return e.byteLength; if (v.isURLSearchParams(e)&&(e=e+''), v.isString(e)) return (await vi(e)).byteLength;
}; const Em=async (e, t)=>{
  const n=v.toFiniteNumber(e.getContentLength()); return n??Sm(t);
}; const km=Bl&&(async (e)=>{
  let {url: t, method: n, data: r, signal: l, cancelToken: o, timeout: i, onDownloadProgress: u, onUploadProgress: s, responseType: a, headers: f, withCredentials: h='same-origin', fetchOptions: y}=kf(e); a=a?(a+'').toLowerCase():'text'; const [w, m]=l||o||i?ym([l, o], i):[]; let g; let P; const d=()=>{
    !g&&setTimeout(()=>{
      w&&w.unsubscribe();
    }), g=!0;
  }; let c; try {
    if (s&&wm&&n!=='get'&&n!=='head'&&(c=await Em(f, r))!==0) {
      const x=new Request(t, {method: 'POST', body: r, duplex: 'half'}); let _; v.isFormData(r)&&(_=x.headers.get('content-type'))&&f.setContentType(_), x.body&&(r=Is(x.body, $s, Bs(c, gl(s)), null, vi));
    }v.isString(h)||(h=h?'cors':'omit'), P=new Request(t, {...y, signal: w, method: n.toUpperCase(), headers: f.normalize().toJSON(), body: r, duplex: 'half', withCredentials: h}); let p=await fetch(P); const S=gi&&(a==='stream'||a==='response'); if (gi&&(u||S)) {
      const x={}; ['status', 'statusText', 'headers'].forEach((R)=>{
        x[R]=p[R];
      }); const _=v.toFiniteNumber(p.headers.get('content-length')); p=new Response(Is(p.body, $s, u&&Bs(_, gl(u, !0)), S&&d, vi), x);
    }a=a||'text'; const k=await wl[v.findKey(wl, a)||'text'](p, e); return !S&&d(), m&&m(), await new Promise((x, _)=>{
      Sf(x, _, {data: k, headers: ve.from(p.headers), status: p.status, statusText: p.statusText, config: e, request: P});
    });
  } catch (p) {
    throw d(), p&&p.name==='TypeError'&&/fetch/i.test(p.message)?Object.assign(new T('Network Error', T.ERR_NETWORK, e, P), {cause: p.cause||p}):T.from(p, p&&p.code, e, P);
  }
}); const wi={http: Ih, xhr: mm, fetch: km}; v.forEach(wi, (e, t)=>{
  if (e) {
    try {
      Object.defineProperty(e, 'name', {value: t});
    } catch {}Object.defineProperty(e, 'adapterName', {value: t});
  }
}); const Hs=(e)=>`- ${e}`; const xm=(e)=>v.isFunction(e)||e===null||e===!1; const Cf={getAdapter: (e)=>{
  e=v.isArray(e)?e:[e]; const {length: t}=e; let n; let r; const l={}; for (let o=0; o<t; o++) {
    n=e[o]; let i; if (r=n, !xm(n)&&(r=wi[(i=String(n)).toLowerCase()], r===void 0)) throw new T(`Unknown adapter '${i}'`); if (r) break; l[i||'#'+o]=r;
  } if (!r) {
    const o=Object.entries(l).map(([u, s])=>`adapter ${u} `+(s===!1?'is not supported by the environment':'is not available in the build')); const i=t?o.length>1?`since :
`+o.map(Hs).join(`
`):' '+Hs(o[0]):'as no adapter specified'; throw new T('There is no suitable adapter to dispatch the request '+i, 'ERR_NOT_SUPPORT');
  } return r;
}, adapters: wi}; function So(e) {
  if (e.cancelToken&&e.cancelToken.throwIfRequested(), e.signal&&e.signal.aborted) throw new wn(null, e);
} function Vs(e) {
  return So(e), e.headers=ve.from(e.headers), e.data=wo.call(e, e.transformRequest), ['post', 'put', 'patch'].indexOf(e.method)!==-1&&e.headers.setContentType('application/x-www-form-urlencoded', !1), Cf.getAdapter(e.adapter||hr.adapter)(e).then(function(r) {
    return So(e), r.data=wo.call(e, e.transformResponse, r), r.headers=ve.from(r.headers), r;
  }, function(r) {
    return wf(r)||(So(e), r&&r.response&&(r.response.data=wo.call(e, e.transformResponse, r.response), r.response.headers=ve.from(r.response.headers))), Promise.reject(r);
  });
} const _f='1.7.2'; const wu={}; ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t)=>{
  wu[e]=function(r) {
    return typeof r===e||'a'+(t<1?'n ':' ')+e;
  };
}); const Ws={}; wu.transitional=function(t, n, r) {
  function l(o, i) {
    return '[Axios v'+_f+'] Transitional option \''+o+'\''+i+(r?'. '+r:'');
  } return (o, i, u)=>{
    if (t===!1) throw new T(l(i, ' has been removed'+(n?' in '+n:'')), T.ERR_DEPRECATED); return n&&!Ws[i]&&(Ws[i]=!0, console.warn(l(i, ' has been deprecated since v'+n+' and will be removed in the near future'))), t?t(o, i, u):!0;
  };
}; function Cm(e, t, n) {
  if (typeof e!='object') throw new T('options must be an object', T.ERR_BAD_OPTION_VALUE); const r=Object.keys(e); let l=r.length; for (;l-- >0;) {
    const o=r[l]; const i=t[o]; if (i) {
      const u=e[o]; const s=u===void 0||i(u, o, e); if (s!==!0) throw new T('option '+o+' must be '+s, T.ERR_BAD_OPTION_VALUE); continue;
    } if (n!==!0) throw new T('Unknown option '+o, T.ERR_BAD_OPTION);
  }
} const Si={assertOptions: Cm, validators: wu}; const rt=Si.validators; class Ft {
  constructor(t) {
    this.defaults=t, this.interceptors={request: new js, response: new js};
  } async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l; Error.captureStackTrace?Error.captureStackTrace(l={}):l=new Error; const o=l.stack?l.stack.replace(/^.+\n/, ''):''; try {
r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/, ''))&&(r.stack+=`
`+o):r.stack=o;
        } catch {}
      } throw r;
    }
  }_request(t, n) {
typeof t=='string'?(n=n||{}, n.url=t):n=t||{}, n=It(this.defaults, n); const {transitional: r, paramsSerializer: l, headers: o}=n; r!==void 0&&Si.assertOptions(r, {silentJSONParsing: rt.transitional(rt.boolean), forcedJSONParsing: rt.transitional(rt.boolean), clarifyTimeoutError: rt.transitional(rt.boolean)}, !1), l!=null&&(v.isFunction(l)?n.paramsSerializer={serialize: l}:Si.assertOptions(l, {encode: rt.function, serialize: rt.function}, !0)), n.method=(n.method||this.defaults.method||'get').toLowerCase(); const i=o&&v.merge(o.common, o[n.method]); o&&v.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (m)=>{
  delete o[m];
}), n.headers=ve.concat(i, o); const u=[]; let s=!0; this.interceptors.request.forEach(function(g) {
  typeof g.runWhen=='function'&&g.runWhen(n)===!1||(s=s&&g.synchronous, u.unshift(g.fulfilled, g.rejected));
}); const a=[]; this.interceptors.response.forEach(function(g) {
  a.push(g.fulfilled, g.rejected);
}); let f; let h=0; let y; if (!s) {
  const m=[Vs.bind(this), void 0]; for (m.unshift.apply(m, u), m.push.apply(m, a), y=m.length, f=Promise.resolve(n); h<y;)f=f.then(m[h++], m[h++]); return f;
}y=u.length; let w=n; for (h=0; h<y;) {
  const m=u[h++]; const g=u[h++]; try {
    w=m(w);
  } catch (P) {
    g.call(this, P); break;
  }
} try {
  f=Vs.call(this, w);
} catch (m) {
  return Promise.reject(m);
} for (h=0, y=a.length; h<y;)f=f.then(a[h++], a[h++]); return f;
  }getUri(t) {
    t=It(this.defaults, t); const n=Ef(t.baseURL, t.url); return yf(n, t.params, t.paramsSerializer);
  }
}v.forEach(['delete', 'get', 'head', 'options'], function(t) {
  Ft.prototype[t]=function(n, r) {
    return this.request(It(r||{}, {method: t, url: n, data: (r||{}).data}));
  };
}); v.forEach(['post', 'put', 'patch'], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(It(u||{}, {method: t, headers: r?{'Content-Type': 'multipart/form-data'}:{}, url: o, data: i}));
    };
  }Ft.prototype[t]=n(), Ft.prototype[t+'Form']=n(!0);
}); class Su {
  constructor(t) {
    if (typeof t!='function') throw new TypeError('executor must be a function.'); let n; this.promise=new Promise(function(o) {
      n=o;
    }); const r=this; this.promise.then((l)=>{
      if (!r._listeners) return; let o=r._listeners.length; for (;o-- >0;)r._listeners[o](l); r._listeners=null;
    }), this.promise.then=(l)=>{
      let o; const i=new Promise((u)=>{
        r.subscribe(u), o=u;
      }).then(l); return i.cancel=function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason||(r.reason=new wn(o, i, u), n(r.reason));
    });
  }throwIfRequested() {
    if (this.reason) throw this.reason;
  }subscribe(t) {
    if (this.reason) {
      t(this.reason); return;
    } this._listeners?this._listeners.push(t):this._listeners=[t];
  }unsubscribe(t) {
    if (!this._listeners) return; const n=this._listeners.indexOf(t); n!==-1&&this._listeners.splice(n, 1);
  } static source() {
    let t; return {token: new Su(function(l) {
      t=l;
    }), cancel: t};
  }
} function _m(e) {
  return function(n) {
    return e.apply(null, n);
  };
} function Nm(e) {
  return v.isObject(e)&&e.isAxiosError===!0;
} const Ei={Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511}; Object.entries(Ei).forEach(([e, t])=>{
  Ei[t]=e;
}); function Nf(e) {
  const t=new Ft(e); const n=rf(Ft.prototype.request, t); return v.extend(n, Ft.prototype, t, {allOwnKeys: !0}), v.extend(n, t, null, {allOwnKeys: !0}), n.create=function(l) {
    return Nf(It(e, l));
  }, n;
} const W=Nf(hr); W.Axios=Ft; W.CanceledError=wn; W.CancelToken=Su; W.isCancel=wf; W.VERSION=_f; W.toFormData=Il; W.AxiosError=T; W.Cancel=W.CanceledError; W.all=function(t) {
  return Promise.all(t);
}; W.spread=_m; W.isAxiosError=Nm; W.mergeConfig=It; W.AxiosHeaders=ve; W.formToJSON=(e)=>gf(v.isHTMLForm(e)?new FormData(e):e); W.getAdapter=Cf.getAdapter; W.HttpStatusCode=Ei; W.default=W; const Eu='/api/notes'; const Rm=()=>W.get(Eu).then((t)=>t.data); const Pm=(e)=>W.post(Eu, e).then((n)=>n.data); const Tm=(e, t)=>W.put(`${Eu}/${e}`, t).then((r)=>r.data); const Eo={getAll: Rm, create: Pm, update: Tm}; const Om=()=>{
  const [e, t]=Rt.useState([]); const [n, r]=Rt.useState('a new note...'); const [l, o]=Rt.useState(!0); const [i, u]=Rt.useState('some error happened...'); Rt.useEffect(()=>{
    Eo.getAll().then((m)=>t(m));
  }, []); const s=(m)=>{
    m.preventDefault(); const g={content: n, important: Math.random()<.5}; Eo.create(g).then((P)=>{
      t(e.concat(P)), r('');
    });
  }; const a=(m)=>{
    r(m.target.value);
  }; const f=({message: m})=>m===null?null:Z.jsx('div', {className: 'error', children: m}); const h=(m)=>{
    const g=e.find((d)=>d.id===m); const P={...g, important: !g.important}; Eo.update(m, P).then((d)=>t(e.map((c)=>c.id!==m?c:d))).catch((d)=>{
      u(`Note '${g.content}' was already removed from server`), setTimeout(()=>{
        u(null);
      }, 5e3), t(e.filter((c)=>c.id!==m));
    });
  }; const y=()=>{
    const m={color: 'green', fontStyle: 'italic', fontSize: 16}; return Z.jsxs('div', {style: m, children: [Z.jsx('br', {}), Z.jsx('em', {children: 'Note app, Department of Computer Science, University of Helsinki 2024'})]});
  }; const w=l?e:e.filter((m)=>m.important); return console.log('notesToShow:', w), Z.jsxs('div', {children: [Z.jsx('h1', {children: 'Notes'}), Z.jsx(f, {message: i}), Z.jsx('div', {children: Z.jsxs('button', {onClick: ()=>o(!l), children: ['show ', l?'important':'all']})}), Z.jsx('ul', {children: w.map((m)=>Z.jsx(eh, {note: m, toggleImportance: ()=>h(m.id)}, m.id))}), Z.jsxs('form', {onSubmit: s, children: [Z.jsx('input', {value: n, onChange: a}), Z.jsx('button', {type: 'submit', children: 'save'})]}), Z.jsx(y, {})]});
}; ko.createRoot(document.getElementById('root')).render(Z.jsx(Om, {}));
