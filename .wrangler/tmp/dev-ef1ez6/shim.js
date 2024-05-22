// .wrangler/tmp/bundle-uJMV5S/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import B from "./de12f1d4aac9bbae4bc40955fc08ab77a6d9f7bd-index.wasm";
import Qe from "./de12f1d4aac9bbae4bc40955fc08ab77a6d9f7bd-index.wasm";
import { WorkerEntrypoint as Be } from "cloudflare:workers";
var P = Object.defineProperty;
var N = (e, t) => {
  for (var n in t)
    P(e, n, { get: t[n], enumerable: true });
};
var l = {};
N(l, { IntoUnderlyingByteSource: () => q, IntoUnderlyingSink: () => L, IntoUnderlyingSource: () => A, MinifyConfig: () => C, PolishConfig: () => et, R2Range: () => $, RequestRedirect: () => tt, __wbg_String_b9412f8799faab3e: () => bt, __wbg_abort_2aa7521d5690750e: () => Ct, __wbg_append_7bfcb4937d1d5e29: () => St, __wbg_arrayBuffer_29931d52c7206b02: () => ee, __wbg_body_17b435cb52dcf45f: () => Ht, __wbg_buffer_12d079cc21e14bdb: () => Ue, __wbg_buffer_dd7f74bc60f1faab: () => je, __wbg_byobRequest_72fca99f9c32c193: () => jt, __wbg_byteLength_58f7b4fab1919d44: () => Oe, __wbg_byteOffset_81d60f7392524f62: () => ze, __wbg_call_27c0f87801dedf93: () => se, __wbg_call_b3ca7c6051f9bec1: () => fe, __wbg_cancel_6ee33d4006737aef: () => Tt, __wbg_catch_0260e338d10f79ae: () => me, __wbg_cause_3d9c85ebaf6b1155: () => ie, __wbg_cf_ab668814697435ac: () => mt, __wbg_close_184931724d961ccc: () => Mt, __wbg_close_a994f9425dab445c: () => It, __wbg_done_298b57d23c0fc80c: () => be, __wbg_done_2ffa852272310e47: () => lt, __wbg_enqueue_ea194723156c0cc2: () => Wt, __wbg_entries_2f5d638b6f300812: () => yt, __wbg_error_8e3928cfb8a43e2b: () => Rt, __wbg_fetch_921fad6ef9e883dd: () => ne, __wbg_fetch_eadcbc7351113537: () => vt, __wbg_getReader_ab94afcb5cb7689a: () => pt, __wbg_get_bd8e338fbd5f5cc8: () => re, __wbg_get_e3c254076557e348: () => Le, __wbg_globalThis_d1e6af4856ba331b: () => ve, __wbg_global_207b558942527489: () => Ae, __wbg_has_0af94d20077affa2: () => Ce, __wbg_headers_9620bfada380764a: () => Qt, __wbg_headers_abb199c3be8d817c: () => Nt, __wbg_httpProtocol_791d2bb087dc5b51: () => xt, __wbg_instanceof_Error_e20bb56fd5591a93: () => oe, __wbg_instanceof_Response_849eb93e75734b6e: () => Vt, __wbg_iterator_2cee6dadfd956dfa: () => pe, __wbg_length_c20a40f15020d68a: () => Me, __wbg_method_83327ed2e3f3229c: () => Dt, __wbg_new_0d76b0581eca6298: () => Lt, __wbg_new_28c511d9baebfa89: () => _e, __wbg_new_63b92bc8671ed464: () => Re, __wbg_new_72fb9a18b5ae2624: () => de, __wbg_new_81740750da40724f: () => le, __wbg_new_ab6fd82b10560829: () => Ft, __wbg_newnoargs_e258087cd0daa0ea: () => ce, __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: () => Se, __wbg_newwithintounderlyingsource_a03a82aa1bbbb292: () => dt, __wbg_newwithlength_e9b4878cebadb3d3: () => Fe, __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96: () => Yt, __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6: () => te, __wbg_newwithoptstrandinit_219732174c595a25: () => Zt, __wbg_newwithstrandinit_3fd6fba4083ff2d0: () => Xt, __wbg_next_196c84450b364254: () => ae, __wbg_next_40fc327bfc8770e6: () => ge, __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => At, __wbg_queueMicrotask_481971b0d87f3dd4: () => kt, __wbg_read_e7d0f8a49be01d86: () => Ot, __wbg_redirect_53aa50ab48e7a227: () => Bt, __wbg_releaseLock_5c49db976c08b864: () => zt, __wbg_resolve_b0083a7967828ec8: () => he, __wbg_respond_b1a43b2e3a06d525: () => Ut, __wbg_self_ce0dbfc45cf2f5be: () => Ee, __wbg_set_1f9b04f170055d33: () => $e, __wbg_set_a47bac70306a19a7: () => Te, __wbg_sethighWaterMark_ea50ed3ec2143088: () => wt, __wbg_signal_a61f78a3478fd9bc: () => qt, __wbg_signal_e0b0ea9dce5137b3: () => Jt, __wbg_status_61a01141acd3cf74: () => Kt, __wbg_stringify_8887fe74e1c50d81: () => qe, __wbg_then_0c86a60e8fcfe9f6: () => ye, __wbg_then_a73caa9a87991566: () => xe, __wbg_toString_ffe4c9ea3b3532e9: () => ue, __wbg_url_5f6dc4009ac5f99d: () => Gt, __wbg_url_7807f6a1fddc3e23: () => Pt, __wbg_value_9f6eeb1e2aab8d96: () => ht, __wbg_value_d93c65011f51a456: () => we, __wbg_view_7f0ce470793a340f: () => $t, __wbg_window_c6fb939a7f436783: () => ke, __wbindgen_cb_drop: () => gt, __wbindgen_closure_wrapper13524: () => Ne, __wbindgen_debug_string: () => Ie, __wbindgen_is_function: () => Et, __wbindgen_is_object: () => ft, __wbindgen_is_undefined: () => ut, __wbindgen_memory: () => Pe, __wbindgen_number_new: () => ct, __wbindgen_object_clone_ref: () => at, __wbindgen_object_drop_ref: () => We, __wbindgen_string_get: () => st, __wbindgen_string_new: () => it, __wbindgen_throw: () => De, fetch: () => U, getMemory: () => H });
var J = new WebAssembly.Instance(B, { "./index_bg.js": l });
var i = J.exports;
function H() {
  return i.memory;
}
var X = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new X("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
var R = null;
function j() {
  return (R === null || R.byteLength === 0) && (R = new Uint8Array(i.memory.buffer)), R;
}
function y(e, t) {
  return e = e >>> 0, D.decode(j().subarray(e, e + t));
}
var h = new Array(128).fill(void 0);
h.push(void 0, null, true, false);
var k = h.length;
function _(e) {
  k === h.length && h.push(h.length + 1);
  let t = k;
  if (k = h[t], typeof k != "number")
    throw new Error("corrupt heap");
  return h[t] = e, t;
}
function r(e) {
  return h[e];
}
function p(e) {
  if (typeof e != "boolean")
    throw new Error(`expected a boolean argument, found ${typeof e}`);
}
var x = 0;
var V = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var M = new V("utf-8");
var G = typeof M.encodeInto == "function" ? function(e, t) {
  return M.encodeInto(e, t);
} : function(e, t) {
  let n = M.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function v(e, t, n) {
  if (typeof e != "string")
    throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    let w = M.encode(e), E = t(w.length, 1) >>> 0;
    return j().subarray(E, E + w.length).set(w), x = w.length, E;
  }
  let o = e.length, u = t(o, 1) >>> 0, b = j(), a = 0;
  for (; a < o; a++) {
    let w = e.charCodeAt(a);
    if (w > 127)
      break;
    b[u + a] = w;
  }
  if (a !== o) {
    a !== 0 && (e = e.slice(a)), u = n(u, o, o = a + e.length * 3, 1) >>> 0;
    let w = j().subarray(u + a, u + o), E = G(e, w);
    if (E.read !== e.length)
      throw new Error("failed to pass whole string");
    a += E.written, u = n(u, o, a, 1) >>> 0;
  }
  return x = a, u;
}
function d(e) {
  return e == null;
}
var F = null;
function g() {
  return (F === null || F.byteLength === 0) && (F = new Int32Array(i.memory.buffer)), F;
}
function K(e) {
  e < 132 || (h[e] = k, k = e);
}
function m(e) {
  let t = r(e);
  return K(e), t;
}
function T(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let u = e.description;
    return u == null ? "Symbol" : `Symbol(${u})`;
  }
  if (t == "function") {
    let u = e.name;
    return typeof u == "string" && u.length > 0 ? `Function(${u})` : "Function";
  }
  if (Array.isArray(e)) {
    let u = e.length, b = "[";
    u > 0 && (b += T(e[0]));
    for (let a = 1; a < u; a++)
      b += ", " + T(e[a]);
    return b += "]", b;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), o;
  if (n.length > 1)
    o = n[1];
  else
    return toString.call(e);
  if (o == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
}
var I = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => {
  i.__wbindgen_export_2.get(e.dtor)(e.a, e.b);
});
function Q(e, t, n, o) {
  let u = { a: e, b: t, cnt: 1, dtor: n }, b = (...a) => {
    u.cnt++;
    let w = u.a;
    u.a = 0;
    try {
      return o(w, u.b, ...a);
    } finally {
      --u.cnt === 0 ? (i.__wbindgen_export_2.get(u.dtor)(w, u.b), I.unregister(u)) : u.a = w;
    }
  };
  return b.original = u, I.register(b, u, u), b;
}
function c(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let o = function() {
      try {
        return n instanceof Error ? `${n.message}

Stack:
${n.stack}` : n.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", o), n;
  }
}
function s(e) {
  if (typeof e != "number")
    throw new Error(`expected a number argument, found ${typeof e}`);
}
function Y(e, t, n) {
  s(e), s(t), i._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6c7990603bd2b0b5(e, t, _(n));
}
function U(e, t, n) {
  let o = i.fetch(_(e), _(t), _(n));
  return m(o);
}
function f(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    i.__wbindgen_exn_store(_(n));
  }
}
var S = null;
function z() {
  return (S === null || S.byteLength === 0) && (S = new Float64Array(i.memory.buffer)), S;
}
function Z(e, t, n, o) {
  s(e), s(t), i.wasm_bindgen__convert__closures__invoke2_mut__hf9d8cce94bb12f5b(e, t, _(n), _(o));
}
var tt = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var et = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var nt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_intounderlyingbytesource_free(e >>> 0));
var q = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, nt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t, n;
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let b = i.__wbindgen_add_to_stack_pointer(-16);
      s(this.__wbg_ptr), i.intounderlyingbytesource_type(b, this.__wbg_ptr);
      var o = g()[b / 4 + 0], u = g()[b / 4 + 1];
      return t = o, n = u, y(o, u);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(t, n, 1);
    }
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return s(this.__wbg_ptr), i.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), i.intounderlyingbytesource_start(this.__wbg_ptr, _(t));
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr);
    let n = i.intounderlyingbytesource_pull(this.__wbg_ptr, _(t));
    return m(n);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    s(t), i.intounderlyingbytesource_cancel(t);
  }
};
var rt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_intounderlyingsink_free(e >>> 0));
var L = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, rt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr);
    let n = i.intounderlyingsink_write(this.__wbg_ptr, _(t));
    return m(n);
  }
  close() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    s(t);
    let n = i.intounderlyingsink_close(t);
    return m(n);
  }
  abort(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let n = this.__destroy_into_raw();
    s(n);
    let o = i.intounderlyingsink_abort(n, _(t));
    return m(o);
  }
};
var W = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_intounderlyingsource_free(e >>> 0));
var A = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  static __wrap(t) {
    t = t >>> 0;
    let n = Object.create(A.prototype);
    return n.__wbg_ptr = t, W.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, W.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr);
    let n = i.intounderlyingsource_pull(this.__wbg_ptr, _(t));
    return m(n);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    s(t), i.intounderlyingsource_cancel(t);
  }
};
var ot = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_minifyconfig_free(e >>> 0));
var C = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ot.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_minifyconfig_free(t);
  }
  get js() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return s(this.__wbg_ptr), i.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), p(t), i.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return s(this.__wbg_ptr), i.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), p(t), i.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return s(this.__wbg_ptr), i.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), p(t), i.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var _t = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => i.__wbg_r2range_free(e >>> 0));
var $ = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _t.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = i.__wbindgen_add_to_stack_pointer(-16);
      s(this.__wbg_ptr), i.__wbg_get_r2range_offset(o, this.__wbg_ptr);
      var t = g()[o / 4 + 0], n = z()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), d(t) || s(t), i.__wbg_set_r2range_offset(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
  get length() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = i.__wbindgen_add_to_stack_pointer(-16);
      s(this.__wbg_ptr), i.__wbg_get_r2range_length(o, this.__wbg_ptr);
      var t = g()[o / 4 + 0], n = z()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), d(t) || s(t), i.__wbg_set_r2range_length(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
  get suffix() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = i.__wbindgen_add_to_stack_pointer(-16);
      s(this.__wbg_ptr), i.__wbg_get_r2range_suffix(o, this.__wbg_ptr);
      var t = g()[o / 4 + 0], n = z()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    s(this.__wbg_ptr), d(t) || s(t), i.__wbg_set_r2range_suffix(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
};
function it(e, t) {
  let n = y(e, t);
  return _(n);
}
function ut(e) {
  let t = r(e) === void 0;
  return p(t), t;
}
function ct(e) {
  return _(e);
}
function st(e, t) {
  let n = r(t), o = typeof n == "string" ? n : void 0;
  var u = d(o) ? 0 : v(o, i.__wbindgen_malloc, i.__wbindgen_realloc), b = x;
  g()[e / 4 + 1] = b, g()[e / 4 + 0] = u;
}
function ft(e) {
  let t = r(e), n = typeof t == "object" && t !== null;
  return p(n), n;
}
function at(e) {
  let t = r(e);
  return _(t);
}
function gt(e) {
  let t = m(e).original;
  if (t.cnt-- == 1)
    return t.a = 0, true;
  let n = false;
  return p(n), n;
}
function bt() {
  return c(function(e, t) {
    let n = String(r(t)), o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
    g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
  }, arguments);
}
function wt() {
  return c(function(e, t) {
    r(e).highWaterMark = t;
  }, arguments);
}
function dt() {
  return c(function(e, t) {
    let n = new ReadableStream(A.__wrap(e), m(t));
    return _(n);
  }, arguments);
}
function pt() {
  return f(function(e) {
    let t = r(e).getReader();
    return _(t);
  }, arguments);
}
function lt() {
  return c(function(e) {
    let t = r(e).done;
    return p(t), t;
  }, arguments);
}
function ht() {
  return c(function(e) {
    let t = r(e).value;
    return _(t);
  }, arguments);
}
function mt() {
  return f(function(e) {
    let t = r(e).cf;
    return d(t) ? 0 : _(t);
  }, arguments);
}
function yt() {
  return f(function(e) {
    let t = r(e).entries();
    return _(t);
  }, arguments);
}
function xt() {
  return f(function(e, t) {
    let n = r(t).httpProtocol, o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
    g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
  }, arguments);
}
function vt() {
  return c(function(e) {
    let t = fetch(r(e));
    return _(t);
  }, arguments);
}
function Et(e) {
  let t = typeof r(e) == "function";
  return p(t), t;
}
function kt() {
  return c(function(e) {
    queueMicrotask(r(e));
  }, arguments);
}
function At() {
  return c(function(e) {
    let t = r(e).queueMicrotask;
    return _(t);
  }, arguments);
}
function Rt() {
  return c(function(e) {
    console.error(r(e));
  }, arguments);
}
function Ft() {
  return f(function() {
    let e = new Headers();
    return _(e);
  }, arguments);
}
function St() {
  return f(function(e, t, n, o, u) {
    r(e).append(y(t, n), y(o, u));
  }, arguments);
}
function jt() {
  return c(function(e) {
    let t = r(e).byobRequest;
    return d(t) ? 0 : _(t);
  }, arguments);
}
function Mt() {
  return f(function(e) {
    r(e).close();
  }, arguments);
}
function Ot() {
  return c(function(e) {
    let t = r(e).read();
    return _(t);
  }, arguments);
}
function zt() {
  return c(function(e) {
    r(e).releaseLock();
  }, arguments);
}
function Tt() {
  return c(function(e) {
    let t = r(e).cancel();
    return _(t);
  }, arguments);
}
function qt() {
  return c(function(e) {
    let t = r(e).signal;
    return _(t);
  }, arguments);
}
function Lt() {
  return f(function() {
    let e = new AbortController();
    return _(e);
  }, arguments);
}
function Ct() {
  return c(function(e) {
    r(e).abort();
  }, arguments);
}
function $t() {
  return c(function(e) {
    let t = r(e).view;
    return d(t) ? 0 : _(t);
  }, arguments);
}
function Ut() {
  return f(function(e, t) {
    r(e).respond(t >>> 0);
  }, arguments);
}
function It() {
  return f(function(e) {
    r(e).close();
  }, arguments);
}
function Wt() {
  return f(function(e, t) {
    r(e).enqueue(r(t));
  }, arguments);
}
function Dt() {
  return c(function(e, t) {
    let n = r(t).method, o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
    g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
  }, arguments);
}
function Pt() {
  return c(function(e, t) {
    let n = r(t).url, o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
    g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
  }, arguments);
}
function Nt() {
  return c(function(e) {
    let t = r(e).headers;
    return _(t);
  }, arguments);
}
function Bt() {
  return c(function(e) {
    let t = r(e).redirect;
    return _(t);
  }, arguments);
}
function Jt() {
  return c(function(e) {
    let t = r(e).signal;
    return _(t);
  }, arguments);
}
function Ht() {
  return c(function(e) {
    let t = r(e).body;
    return d(t) ? 0 : _(t);
  }, arguments);
}
function Xt() {
  return f(function(e, t, n) {
    let o = new Request(y(e, t), r(n));
    return _(o);
  }, arguments);
}
function Vt() {
  return c(function(e) {
    let t;
    try {
      t = r(e) instanceof Response;
    } catch {
      t = false;
    }
    let n = t;
    return p(n), n;
  }, arguments);
}
function Gt() {
  return c(function(e, t) {
    let n = r(t).url, o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
    g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
  }, arguments);
}
function Kt() {
  return c(function(e) {
    let t = r(e).status;
    return s(t), t;
  }, arguments);
}
function Qt() {
  return c(function(e) {
    let t = r(e).headers;
    return _(t);
  }, arguments);
}
function Yt() {
  return f(function(e, t) {
    let n = new Response(r(e), r(t));
    return _(n);
  }, arguments);
}
function Zt() {
  return f(function(e, t, n) {
    let o = new Response(e === 0 ? void 0 : y(e, t), r(n));
    return _(o);
  }, arguments);
}
function te() {
  return f(function(e, t) {
    let n = new Response(r(e), r(t));
    return _(n);
  }, arguments);
}
function ee() {
  return f(function(e) {
    let t = r(e).arrayBuffer();
    return _(t);
  }, arguments);
}
function ne() {
  return c(function(e, t) {
    let n = r(e).fetch(r(t));
    return _(n);
  }, arguments);
}
function re() {
  return c(function(e, t) {
    let n = r(e)[t >>> 0];
    return _(n);
  }, arguments);
}
function oe() {
  return c(function(e) {
    let t;
    try {
      t = r(e) instanceof Error;
    } catch {
      t = false;
    }
    let n = t;
    return p(n), n;
  }, arguments);
}
function _e() {
  return c(function(e, t) {
    let n = new Error(y(e, t));
    return _(n);
  }, arguments);
}
function ie() {
  return c(function(e) {
    let t = r(e).cause;
    return _(t);
  }, arguments);
}
function ue() {
  return c(function(e) {
    let t = r(e).toString();
    return _(t);
  }, arguments);
}
function ce() {
  return c(function(e, t) {
    let n = new Function(y(e, t));
    return _(n);
  }, arguments);
}
function se() {
  return f(function(e, t) {
    let n = r(e).call(r(t));
    return _(n);
  }, arguments);
}
function fe() {
  return f(function(e, t, n) {
    let o = r(e).call(r(t), r(n));
    return _(o);
  }, arguments);
}
function ae() {
  return f(function(e) {
    let t = r(e).next();
    return _(t);
  }, arguments);
}
function ge() {
  return c(function(e) {
    let t = r(e).next;
    return _(t);
  }, arguments);
}
function be() {
  return c(function(e) {
    let t = r(e).done;
    return p(t), t;
  }, arguments);
}
function we() {
  return c(function(e) {
    let t = r(e).value;
    return _(t);
  }, arguments);
}
function de() {
  return c(function() {
    let e = new Object();
    return _(e);
  }, arguments);
}
function pe() {
  return c(function() {
    return _(Symbol.iterator);
  }, arguments);
}
function le() {
  return c(function(e, t) {
    try {
      var n = { a: e, b: t }, o = (b, a) => {
        let w = n.a;
        n.a = 0;
        try {
          return Z(w, n.b, b, a);
        } finally {
          n.a = w;
        }
      };
      let u = new Promise(o);
      return _(u);
    } finally {
      n.a = n.b = 0;
    }
  }, arguments);
}
function he() {
  return c(function(e) {
    let t = Promise.resolve(r(e));
    return _(t);
  }, arguments);
}
function me() {
  return c(function(e, t) {
    let n = r(e).catch(r(t));
    return _(n);
  }, arguments);
}
function ye() {
  return c(function(e, t) {
    let n = r(e).then(r(t));
    return _(n);
  }, arguments);
}
function xe() {
  return c(function(e, t, n) {
    let o = r(e).then(r(t), r(n));
    return _(o);
  }, arguments);
}
function ve() {
  return f(function() {
    let e = globalThis.globalThis;
    return _(e);
  }, arguments);
}
function Ee() {
  return f(function() {
    let e = self.self;
    return _(e);
  }, arguments);
}
function ke() {
  return f(function() {
    let e = window.window;
    return _(e);
  }, arguments);
}
function Ae() {
  return f(function() {
    let e = global.global;
    return _(e);
  }, arguments);
}
function Re() {
  return c(function(e) {
    let t = new Uint8Array(r(e));
    return _(t);
  }, arguments);
}
function Fe() {
  return c(function(e) {
    let t = new Uint8Array(e >>> 0);
    return _(t);
  }, arguments);
}
function Se() {
  return c(function(e, t, n) {
    let o = new Uint8Array(r(e), t >>> 0, n >>> 0);
    return _(o);
  }, arguments);
}
function je() {
  return c(function(e) {
    let t = r(e).buffer;
    return _(t);
  }, arguments);
}
function Me() {
  return c(function(e) {
    let t = r(e).length;
    return s(t), t;
  }, arguments);
}
function Oe() {
  return c(function(e) {
    let t = r(e).byteLength;
    return s(t), t;
  }, arguments);
}
function ze() {
  return c(function(e) {
    let t = r(e).byteOffset;
    return s(t), t;
  }, arguments);
}
function Te() {
  return c(function(e, t, n) {
    r(e).set(r(t), n >>> 0);
  }, arguments);
}
function qe() {
  return f(function(e) {
    let t = JSON.stringify(r(e));
    return _(t);
  }, arguments);
}
function Le() {
  return f(function(e, t) {
    let n = Reflect.get(r(e), r(t));
    return _(n);
  }, arguments);
}
function Ce() {
  return f(function(e, t) {
    let n = Reflect.has(r(e), r(t));
    return p(n), n;
  }, arguments);
}
function $e() {
  return f(function(e, t, n) {
    let o = Reflect.set(r(e), r(t), r(n));
    return p(o), o;
  }, arguments);
}
function Ue() {
  return c(function(e) {
    let t = r(e).buffer;
    return _(t);
  }, arguments);
}
function Ie(e, t) {
  let n = T(r(t)), o = v(n, i.__wbindgen_malloc, i.__wbindgen_realloc), u = x;
  g()[e / 4 + 1] = u, g()[e / 4 + 0] = o;
}
function We(e) {
  m(e);
}
function De(e, t) {
  throw new Error(y(e, t));
}
function Pe() {
  let e = i.memory;
  return _(e);
}
function Ne() {
  return c(function(e, t, n) {
    let o = Q(e, t, 797, Y);
    return _(o);
  }, arguments);
}
var O = class extends Be {
  async fetch(t) {
    return await U(t, this.env, this.ctx);
  }
  async queue(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
  async scheduled(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
};
var Je = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(l).map((e) => {
  Je.includes(e) | e.startsWith("__") || (O.prototype[e] = l[e]);
});
var Ze = O;

// node_modules/.pnpm/wrangler@3.57.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@3.57.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-uJMV5S/middleware-insertion-facade.js
Ze.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...Ze.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = Ze;

// node_modules/.pnpm/wrangler@3.57.1/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-uJMV5S/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  q as IntoUnderlyingByteSource,
  L as IntoUnderlyingSink,
  A as IntoUnderlyingSource,
  C as MinifyConfig,
  et as PolishConfig,
  $ as R2Range,
  tt as RequestRedirect,
  bt as __wbg_String_b9412f8799faab3e,
  Ct as __wbg_abort_2aa7521d5690750e,
  St as __wbg_append_7bfcb4937d1d5e29,
  ee as __wbg_arrayBuffer_29931d52c7206b02,
  Ht as __wbg_body_17b435cb52dcf45f,
  Ue as __wbg_buffer_12d079cc21e14bdb,
  je as __wbg_buffer_dd7f74bc60f1faab,
  jt as __wbg_byobRequest_72fca99f9c32c193,
  Oe as __wbg_byteLength_58f7b4fab1919d44,
  ze as __wbg_byteOffset_81d60f7392524f62,
  se as __wbg_call_27c0f87801dedf93,
  fe as __wbg_call_b3ca7c6051f9bec1,
  Tt as __wbg_cancel_6ee33d4006737aef,
  me as __wbg_catch_0260e338d10f79ae,
  ie as __wbg_cause_3d9c85ebaf6b1155,
  mt as __wbg_cf_ab668814697435ac,
  Mt as __wbg_close_184931724d961ccc,
  It as __wbg_close_a994f9425dab445c,
  be as __wbg_done_298b57d23c0fc80c,
  lt as __wbg_done_2ffa852272310e47,
  Wt as __wbg_enqueue_ea194723156c0cc2,
  yt as __wbg_entries_2f5d638b6f300812,
  Rt as __wbg_error_8e3928cfb8a43e2b,
  ne as __wbg_fetch_921fad6ef9e883dd,
  vt as __wbg_fetch_eadcbc7351113537,
  pt as __wbg_getReader_ab94afcb5cb7689a,
  re as __wbg_get_bd8e338fbd5f5cc8,
  Le as __wbg_get_e3c254076557e348,
  ve as __wbg_globalThis_d1e6af4856ba331b,
  Ae as __wbg_global_207b558942527489,
  Ce as __wbg_has_0af94d20077affa2,
  Qt as __wbg_headers_9620bfada380764a,
  Nt as __wbg_headers_abb199c3be8d817c,
  xt as __wbg_httpProtocol_791d2bb087dc5b51,
  oe as __wbg_instanceof_Error_e20bb56fd5591a93,
  Vt as __wbg_instanceof_Response_849eb93e75734b6e,
  pe as __wbg_iterator_2cee6dadfd956dfa,
  Me as __wbg_length_c20a40f15020d68a,
  Dt as __wbg_method_83327ed2e3f3229c,
  Lt as __wbg_new_0d76b0581eca6298,
  _e as __wbg_new_28c511d9baebfa89,
  Re as __wbg_new_63b92bc8671ed464,
  de as __wbg_new_72fb9a18b5ae2624,
  le as __wbg_new_81740750da40724f,
  Ft as __wbg_new_ab6fd82b10560829,
  ce as __wbg_newnoargs_e258087cd0daa0ea,
  Se as __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb,
  dt as __wbg_newwithintounderlyingsource_a03a82aa1bbbb292,
  Fe as __wbg_newwithlength_e9b4878cebadb3d3,
  Yt as __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96,
  te as __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6,
  Zt as __wbg_newwithoptstrandinit_219732174c595a25,
  Xt as __wbg_newwithstrandinit_3fd6fba4083ff2d0,
  ae as __wbg_next_196c84450b364254,
  ge as __wbg_next_40fc327bfc8770e6,
  At as __wbg_queueMicrotask_3cbae2ec6b6cd3d6,
  kt as __wbg_queueMicrotask_481971b0d87f3dd4,
  Ot as __wbg_read_e7d0f8a49be01d86,
  Bt as __wbg_redirect_53aa50ab48e7a227,
  zt as __wbg_releaseLock_5c49db976c08b864,
  he as __wbg_resolve_b0083a7967828ec8,
  Ut as __wbg_respond_b1a43b2e3a06d525,
  Ee as __wbg_self_ce0dbfc45cf2f5be,
  $e as __wbg_set_1f9b04f170055d33,
  Te as __wbg_set_a47bac70306a19a7,
  wt as __wbg_sethighWaterMark_ea50ed3ec2143088,
  qt as __wbg_signal_a61f78a3478fd9bc,
  Jt as __wbg_signal_e0b0ea9dce5137b3,
  Kt as __wbg_status_61a01141acd3cf74,
  qe as __wbg_stringify_8887fe74e1c50d81,
  ye as __wbg_then_0c86a60e8fcfe9f6,
  xe as __wbg_then_a73caa9a87991566,
  ue as __wbg_toString_ffe4c9ea3b3532e9,
  Gt as __wbg_url_5f6dc4009ac5f99d,
  Pt as __wbg_url_7807f6a1fddc3e23,
  ht as __wbg_value_9f6eeb1e2aab8d96,
  we as __wbg_value_d93c65011f51a456,
  $t as __wbg_view_7f0ce470793a340f,
  ke as __wbg_window_c6fb939a7f436783,
  gt as __wbindgen_cb_drop,
  Ne as __wbindgen_closure_wrapper13524,
  Ie as __wbindgen_debug_string,
  Et as __wbindgen_is_function,
  ft as __wbindgen_is_object,
  ut as __wbindgen_is_undefined,
  Pe as __wbindgen_memory,
  ct as __wbindgen_number_new,
  at as __wbindgen_object_clone_ref,
  We as __wbindgen_object_drop_ref,
  st as __wbindgen_string_get,
  it as __wbindgen_string_new,
  De as __wbindgen_throw,
  middleware_loader_entry_default as default,
  U as fetch,
  H as getMemory,
  Qe as wasmModule
};
//# sourceMappingURL=shim.js.map
