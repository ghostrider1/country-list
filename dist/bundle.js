!(function(a) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var l = (e[i] = { i: i, l: !1, exports: {} });
    return a[i].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = a),
    (n.c = e),
    (n.d = function(a, e, i) {
      n.o(a, e) ||
        Object.defineProperty(a, e, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (n.r = function(a) {
      Object.defineProperty(a, '__esModule', { value: !0 });
    }),
    (n.n = function(a) {
      var e =
        a && a.__esModule
          ? function() {
              return a.default;
            }
          : function() {
              return a;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(a, e) {
      return Object.prototype.hasOwnProperty.call(a, e);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function(a, e, n) {
    (function(a, n) {
      var i;
      !(function() {
        var l =
            ('object' == typeof self && self.self === self && self) ||
            ('object' == typeof a && a.global === a && a) ||
            this ||
            {},
          r = l._,
          o = Array.prototype,
          s = Object.prototype,
          c = 'undefined' != typeof Symbol ? Symbol.prototype : null,
          h = o.push,
          p = o.slice,
          u = s.toString,
          t = s.hasOwnProperty,
          g = Array.isArray,
          m = Object.keys,
          b = Object.create,
          d = function() {},
          C = function(a) {
            return a instanceof C
              ? a
              : this instanceof C
                ? void (this._wrapped = a)
                : new C(a);
          };
        void 0 === e || e.nodeType
          ? (l._ = C)
          : (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = C),
            (e._ = C)),
          (C.VERSION = '1.9.0');
        var y,
          f = function(a, e, n) {
            if (void 0 === e) return a;
            switch (null == n ? 3 : n) {
              case 1:
                return function(n) {
                  return a.call(e, n);
                };
              case 3:
                return function(n, i, l) {
                  return a.call(e, n, i, l);
                };
              case 4:
                return function(n, i, l, r) {
                  return a.call(e, n, i, l, r);
                };
            }
            return function() {
              return a.apply(e, arguments);
            };
          },
          A = function(a, e, n) {
            return C.iteratee !== y
              ? C.iteratee(a, e)
              : null == a
                ? C.identity
                : C.isFunction(a)
                  ? f(a, e, n)
                  : C.isObject(a) && !C.isArray(a)
                    ? C.matcher(a)
                    : C.property(a);
          };
        C.iteratee = y = function(a, e) {
          return A(a, e, 1 / 0);
        };
        var S = function(a, e) {
            return (
              (e = null == e ? a.length - 1 : +e),
              function() {
                for (
                  var n = Math.max(arguments.length - e, 0),
                    i = Array(n),
                    l = 0;
                  l < n;
                  l++
                )
                  i[l] = arguments[l + e];
                switch (e) {
                  case 0:
                    return a.call(this, i);
                  case 1:
                    return a.call(this, arguments[0], i);
                  case 2:
                    return a.call(this, arguments[0], arguments[1], i);
                }
                var r = Array(e + 1);
                for (l = 0; l < e; l++) r[l] = arguments[l];
                return (r[e] = i), a.apply(this, r);
              }
            );
          },
          M = function(a) {
            if (!C.isObject(a)) return {};
            if (b) return b(a);
            d.prototype = a;
            var e = new d();
            return (d.prototype = null), e;
          },
          j = function(a) {
            return function(e) {
              return null == e ? void 0 : e[a];
            };
          },
          R = function(a, e) {
            for (var n = e.length, i = 0; i < n; i++) {
              if (null == a) return;
              a = a[e[i]];
            }
            return n ? a : void 0;
          },
          N = Math.pow(2, 53) - 1,
          B = j('length'),
          D = function(a) {
            var e = B(a);
            return 'number' == typeof e && e >= 0 && e <= N;
          };
        (C.each = C.forEach = function(a, e, n) {
          var i, l;
          if (((e = f(e, n)), D(a)))
            for (i = 0, l = a.length; i < l; i++) e(a[i], i, a);
          else {
            var r = C.keys(a);
            for (i = 0, l = r.length; i < l; i++) e(a[r[i]], r[i], a);
          }
          return a;
        }),
          (C.map = C.collect = function(a, e, n) {
            e = A(e, n);
            for (
              var i = !D(a) && C.keys(a),
                l = (i || a).length,
                r = Array(l),
                o = 0;
              o < l;
              o++
            ) {
              var s = i ? i[o] : o;
              r[o] = e(a[s], s, a);
            }
            return r;
          });
        var T = function(a) {
          return function(e, n, i, l) {
            var r = arguments.length >= 3;
            return (function(e, n, i, l) {
              var r = !D(e) && C.keys(e),
                o = (r || e).length,
                s = a > 0 ? 0 : o - 1;
              for (
                l || ((i = e[r ? r[s] : s]), (s += a));
                s >= 0 && s < o;
                s += a
              ) {
                var c = r ? r[s] : s;
                i = n(i, e[c], c, e);
              }
              return i;
            })(e, f(n, l, 4), i, r);
          };
        };
        (C.reduce = C.foldl = C.inject = T(1)),
          (C.reduceRight = C.foldr = T(-1)),
          (C.find = C.detect = function(a, e, n) {
            var i = (D(a) ? C.findIndex : C.findKey)(a, e, n);
            if (void 0 !== i && -1 !== i) return a[i];
          }),
          (C.filter = C.select = function(a, e, n) {
            var i = [];
            return (
              (e = A(e, n)),
              C.each(a, function(a, n, l) {
                e(a, n, l) && i.push(a);
              }),
              i
            );
          }),
          (C.reject = function(a, e, n) {
            return C.filter(a, C.negate(A(e)), n);
          }),
          (C.every = C.all = function(a, e, n) {
            e = A(e, n);
            for (
              var i = !D(a) && C.keys(a), l = (i || a).length, r = 0;
              r < l;
              r++
            ) {
              var o = i ? i[r] : r;
              if (!e(a[o], o, a)) return !1;
            }
            return !0;
          }),
          (C.some = C.any = function(a, e, n) {
            e = A(e, n);
            for (
              var i = !D(a) && C.keys(a), l = (i || a).length, r = 0;
              r < l;
              r++
            ) {
              var o = i ? i[r] : r;
              if (e(a[o], o, a)) return !0;
            }
            return !1;
          }),
          (C.contains = C.includes = C.include = function(a, e, n, i) {
            return (
              D(a) || (a = C.values(a)),
              ('number' != typeof n || i) && (n = 0),
              C.indexOf(a, e, n) >= 0
            );
          }),
          (C.invoke = S(function(a, e, n) {
            var i, l;
            return (
              C.isFunction(e)
                ? (l = e)
                : C.isArray(e) && ((i = e.slice(0, -1)), (e = e[e.length - 1])),
              C.map(a, function(a) {
                var r = l;
                if (!r) {
                  if ((i && i.length && (a = R(a, i)), null == a)) return;
                  r = a[e];
                }
                return null == r ? r : r.apply(a, n);
              })
            );
          })),
          (C.pluck = function(a, e) {
            return C.map(a, C.property(e));
          }),
          (C.where = function(a, e) {
            return C.filter(a, C.matcher(e));
          }),
          (C.findWhere = function(a, e) {
            return C.find(a, C.matcher(e));
          }),
          (C.max = function(a, e, n) {
            var i,
              l,
              r = -1 / 0,
              o = -1 / 0;
            if (
              null == e ||
              ('number' == typeof e && 'object' != typeof a[0] && null != a)
            )
              for (
                var s = 0, c = (a = D(a) ? a : C.values(a)).length;
                s < c;
                s++
              )
                null != (i = a[s]) && i > r && (r = i);
            else
              (e = A(e, n)),
                C.each(a, function(a, n, i) {
                  ((l = e(a, n, i)) > o || (l === -1 / 0 && r === -1 / 0)) &&
                    ((r = a), (o = l));
                });
            return r;
          }),
          (C.min = function(a, e, n) {
            var i,
              l,
              r = 1 / 0,
              o = 1 / 0;
            if (
              null == e ||
              ('number' == typeof e && 'object' != typeof a[0] && null != a)
            )
              for (
                var s = 0, c = (a = D(a) ? a : C.values(a)).length;
                s < c;
                s++
              )
                null != (i = a[s]) && i < r && (r = i);
            else
              (e = A(e, n)),
                C.each(a, function(a, n, i) {
                  ((l = e(a, n, i)) < o || (l === 1 / 0 && r === 1 / 0)) &&
                    ((r = a), (o = l));
                });
            return r;
          }),
          (C.shuffle = function(a) {
            return C.sample(a, 1 / 0);
          }),
          (C.sample = function(a, e, n) {
            if (null == e || n)
              return D(a) || (a = C.values(a)), a[C.random(a.length - 1)];
            var i = D(a) ? C.clone(a) : C.values(a),
              l = B(i);
            e = Math.max(Math.min(e, l), 0);
            for (var r = l - 1, o = 0; o < e; o++) {
              var s = C.random(o, r),
                c = i[o];
              (i[o] = i[s]), (i[s] = c);
            }
            return i.slice(0, e);
          }),
          (C.sortBy = function(a, e, n) {
            var i = 0;
            return (
              (e = A(e, n)),
              C.pluck(
                C.map(a, function(a, n, l) {
                  return { value: a, index: i++, criteria: e(a, n, l) };
                }).sort(function(a, e) {
                  var n = a.criteria,
                    i = e.criteria;
                  if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1;
                  }
                  return a.index - e.index;
                }),
                'value'
              )
            );
          });
        var v = function(a, e) {
          return function(n, i, l) {
            var r = e ? [[], []] : {};
            return (
              (i = A(i, l)),
              C.each(n, function(e, l) {
                var o = i(e, l, n);
                a(r, e, o);
              }),
              r
            );
          };
        };
        (C.groupBy = v(function(a, e, n) {
          C.has(a, n) ? a[n].push(e) : (a[n] = [e]);
        })),
          (C.indexBy = v(function(a, e, n) {
            a[n] = e;
          })),
          (C.countBy = v(function(a, e, n) {
            C.has(a, n) ? a[n]++ : (a[n] = 1);
          }));
        var E = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        (C.toArray = function(a) {
          return a
            ? C.isArray(a)
              ? p.call(a)
              : C.isString(a)
                ? a.match(E)
                : D(a)
                  ? C.map(a, C.identity)
                  : C.values(a)
            : [];
        }),
          (C.size = function(a) {
            return null == a ? 0 : D(a) ? a.length : C.keys(a).length;
          }),
          (C.partition = v(function(a, e, n) {
            a[n ? 0 : 1].push(e);
          }, !0)),
          (C.first = C.head = C.take = function(a, e, n) {
            if (!(null == a || a.length < 1))
              return null == e || n ? a[0] : C.initial(a, a.length - e);
          }),
          (C.initial = function(a, e, n) {
            return p.call(
              a,
              0,
              Math.max(0, a.length - (null == e || n ? 1 : e))
            );
          }),
          (C.last = function(a, e, n) {
            if (!(null == a || a.length < 1))
              return null == e || n
                ? a[a.length - 1]
                : C.rest(a, Math.max(0, a.length - e));
          }),
          (C.rest = C.tail = C.drop = function(a, e, n) {
            return p.call(a, null == e || n ? 1 : e);
          }),
          (C.compact = function(a) {
            return C.filter(a, Boolean);
          });
        var U = function(a, e, n, i) {
          for (var l = (i = i || []).length, r = 0, o = B(a); r < o; r++) {
            var s = a[r];
            if (D(s) && (C.isArray(s) || C.isArguments(s)))
              if (e) for (var c = 0, h = s.length; c < h; ) i[l++] = s[c++];
              else U(s, e, n, i), (l = i.length);
            else n || (i[l++] = s);
          }
          return i;
        };
        (C.flatten = function(a, e) {
          return U(a, e, !1);
        }),
          (C.without = S(function(a, e) {
            return C.difference(a, e);
          })),
          (C.uniq = C.unique = function(a, e, n, i) {
            C.isBoolean(e) || ((i = n), (n = e), (e = !1)),
              null != n && (n = A(n, i));
            for (var l = [], r = [], o = 0, s = B(a); o < s; o++) {
              var c = a[o],
                h = n ? n(c, o, a) : c;
              e && !n
                ? ((o && r === h) || l.push(c), (r = h))
                : n
                  ? C.contains(r, h) || (r.push(h), l.push(c))
                  : C.contains(l, c) || l.push(c);
            }
            return l;
          }),
          (C.union = S(function(a) {
            return C.uniq(U(a, !0, !0));
          })),
          (C.intersection = function(a) {
            for (
              var e = [], n = arguments.length, i = 0, l = B(a);
              i < l;
              i++
            ) {
              var r = a[i];
              if (!C.contains(e, r)) {
                var o;
                for (o = 1; o < n && C.contains(arguments[o], r); o++);
                o === n && e.push(r);
              }
            }
            return e;
          }),
          (C.difference = S(function(a, e) {
            return (
              (e = U(e, !0, !0)),
              C.filter(a, function(a) {
                return !C.contains(e, a);
              })
            );
          })),
          (C.unzip = function(a) {
            for (
              var e = (a && C.max(a, B).length) || 0, n = Array(e), i = 0;
              i < e;
              i++
            )
              n[i] = C.pluck(a, i);
            return n;
          }),
          (C.zip = S(C.unzip)),
          (C.object = function(a, e) {
            for (var n = {}, i = 0, l = B(a); i < l; i++)
              e ? (n[a[i]] = e[i]) : (n[a[i][0]] = a[i][1]);
            return n;
          });
        var G = function(a) {
          return function(e, n, i) {
            n = A(n, i);
            for (var l = B(e), r = a > 0 ? 0 : l - 1; r >= 0 && r < l; r += a)
              if (n(e[r], r, e)) return r;
            return -1;
          };
        };
        (C.findIndex = G(1)),
          (C.findLastIndex = G(-1)),
          (C.sortedIndex = function(a, e, n, i) {
            for (var l = (n = A(n, i, 1))(e), r = 0, o = B(a); r < o; ) {
              var s = Math.floor((r + o) / 2);
              n(a[s]) < l ? (r = s + 1) : (o = s);
            }
            return r;
          });
        var k = function(a, e, n) {
          return function(i, l, r) {
            var o = 0,
              s = B(i);
            if ('number' == typeof r)
              a > 0
                ? (o = r >= 0 ? r : Math.max(r + s, o))
                : (s = r >= 0 ? Math.min(r + 1, s) : r + s + 1);
            else if (n && r && s) return i[(r = n(i, l))] === l ? r : -1;
            if (l != l)
              return (r = e(p.call(i, o, s), C.isNaN)) >= 0 ? r + o : -1;
            for (r = a > 0 ? o : s - 1; r >= 0 && r < s; r += a)
              if (i[r] === l) return r;
            return -1;
          };
        };
        (C.indexOf = k(1, C.findIndex, C.sortedIndex)),
          (C.lastIndexOf = k(-1, C.findLastIndex)),
          (C.range = function(a, e, n) {
            null == e && ((e = a || 0), (a = 0)), n || (n = e < a ? -1 : 1);
            for (
              var i = Math.max(Math.ceil((e - a) / n), 0), l = Array(i), r = 0;
              r < i;
              r++, a += n
            )
              l[r] = a;
            return l;
          }),
          (C.chunk = function(a, e) {
            if (null == e || e < 1) return [];
            for (var n = [], i = 0, l = a.length; i < l; )
              n.push(p.call(a, i, (i += e)));
            return n;
          });
        var P = function(a, e, n, i, l) {
          if (!(i instanceof e)) return a.apply(n, l);
          var r = M(a.prototype),
            o = a.apply(r, l);
          return C.isObject(o) ? o : r;
        };
        (C.bind = S(function(a, e, n) {
          if (!C.isFunction(a))
            throw new TypeError('Bind must be called on a function');
          var i = S(function(l) {
            return P(a, i, e, this, n.concat(l));
          });
          return i;
        })),
          (C.partial = S(function(a, e) {
            var n = C.partial.placeholder,
              i = function() {
                for (var l = 0, r = e.length, o = Array(r), s = 0; s < r; s++)
                  o[s] = e[s] === n ? arguments[l++] : e[s];
                for (; l < arguments.length; ) o.push(arguments[l++]);
                return P(a, i, this, this, o);
              };
            return i;
          })),
          (C.partial.placeholder = C),
          (C.bindAll = S(function(a, e) {
            var n = (e = U(e, !1, !1)).length;
            if (n < 1) throw new Error('bindAll must be passed function names');
            for (; n--; ) {
              var i = e[n];
              a[i] = C.bind(a[i], a);
            }
          })),
          (C.memoize = function(a, e) {
            var n = function(i) {
              var l = n.cache,
                r = '' + (e ? e.apply(this, arguments) : i);
              return C.has(l, r) || (l[r] = a.apply(this, arguments)), l[r];
            };
            return (n.cache = {}), n;
          }),
          (C.delay = S(function(a, e, n) {
            return setTimeout(function() {
              return a.apply(null, n);
            }, e);
          })),
          (C.defer = C.partial(C.delay, C, 1)),
          (C.throttle = function(a, e, n) {
            var i,
              l,
              r,
              o,
              s = 0;
            n || (n = {});
            var c = function() {
                (s = !1 === n.leading ? 0 : C.now()),
                  (i = null),
                  (o = a.apply(l, r)),
                  i || (l = r = null);
              },
              h = function() {
                var h = C.now();
                s || !1 !== n.leading || (s = h);
                var p = e - (h - s);
                return (
                  (l = this),
                  (r = arguments),
                  p <= 0 || p > e
                    ? (i && (clearTimeout(i), (i = null)),
                      (s = h),
                      (o = a.apply(l, r)),
                      i || (l = r = null))
                    : i || !1 === n.trailing || (i = setTimeout(c, p)),
                  o
                );
              };
            return (
              (h.cancel = function() {
                clearTimeout(i), (s = 0), (i = l = r = null);
              }),
              h
            );
          }),
          (C.debounce = function(a, e, n) {
            var i,
              l,
              r = function(e, n) {
                (i = null), n && (l = a.apply(e, n));
              },
              o = S(function(o) {
                if ((i && clearTimeout(i), n)) {
                  var s = !i;
                  (i = setTimeout(r, e)), s && (l = a.apply(this, o));
                } else i = C.delay(r, e, this, o);
                return l;
              });
            return (
              (o.cancel = function() {
                clearTimeout(i), (i = null);
              }),
              o
            );
          }),
          (C.wrap = function(a, e) {
            return C.partial(e, a);
          }),
          (C.negate = function(a) {
            return function() {
              return !a.apply(this, arguments);
            };
          }),
          (C.compose = function() {
            var a = arguments,
              e = a.length - 1;
            return function() {
              for (var n = e, i = a[e].apply(this, arguments); n--; )
                i = a[n].call(this, i);
              return i;
            };
          }),
          (C.after = function(a, e) {
            return function() {
              if (--a < 1) return e.apply(this, arguments);
            };
          }),
          (C.before = function(a, e) {
            var n;
            return function() {
              return (
                --a > 0 && (n = e.apply(this, arguments)),
                a <= 1 && (e = null),
                n
              );
            };
          }),
          (C.once = C.partial(C.before, 2)),
          (C.restArguments = S);
        var K = !{ toString: null }.propertyIsEnumerable('toString'),
          L = [
            'valueOf',
            'isPrototypeOf',
            'toString',
            'propertyIsEnumerable',
            'hasOwnProperty',
            'toLocaleString',
          ],
          I = function(a, e) {
            var n = L.length,
              i = a.constructor,
              l = (C.isFunction(i) && i.prototype) || s,
              r = 'constructor';
            for (C.has(a, r) && !C.contains(e, r) && e.push(r); n--; )
              (r = L[n]) in a &&
                a[r] !== l[r] &&
                !C.contains(e, r) &&
                e.push(r);
          };
        (C.keys = function(a) {
          if (!C.isObject(a)) return [];
          if (m) return m(a);
          var e = [];
          for (var n in a) C.has(a, n) && e.push(n);
          return K && I(a, e), e;
        }),
          (C.allKeys = function(a) {
            if (!C.isObject(a)) return [];
            var e = [];
            for (var n in a) e.push(n);
            return K && I(a, e), e;
          }),
          (C.values = function(a) {
            for (
              var e = C.keys(a), n = e.length, i = Array(n), l = 0;
              l < n;
              l++
            )
              i[l] = a[e[l]];
            return i;
          }),
          (C.mapObject = function(a, e, n) {
            e = A(e, n);
            for (var i = C.keys(a), l = i.length, r = {}, o = 0; o < l; o++) {
              var s = i[o];
              r[s] = e(a[s], s, a);
            }
            return r;
          }),
          (C.pairs = function(a) {
            for (
              var e = C.keys(a), n = e.length, i = Array(n), l = 0;
              l < n;
              l++
            )
              i[l] = [e[l], a[e[l]]];
            return i;
          }),
          (C.invert = function(a) {
            for (var e = {}, n = C.keys(a), i = 0, l = n.length; i < l; i++)
              e[a[n[i]]] = n[i];
            return e;
          }),
          (C.functions = C.methods = function(a) {
            var e = [];
            for (var n in a) C.isFunction(a[n]) && e.push(n);
            return e.sort();
          });
        var O = function(a, e) {
          return function(n) {
            var i = arguments.length;
            if ((e && (n = Object(n)), i < 2 || null == n)) return n;
            for (var l = 1; l < i; l++)
              for (
                var r = arguments[l], o = a(r), s = o.length, c = 0;
                c < s;
                c++
              ) {
                var h = o[c];
                (e && void 0 !== n[h]) || (n[h] = r[h]);
              }
            return n;
          };
        };
        (C.extend = O(C.allKeys)),
          (C.extendOwn = C.assign = O(C.keys)),
          (C.findKey = function(a, e, n) {
            e = A(e, n);
            for (var i, l = C.keys(a), r = 0, o = l.length; r < o; r++)
              if (e(a[(i = l[r])], i, a)) return i;
          });
        var F,
          w,
          H = function(a, e, n) {
            return e in n;
          };
        (C.pick = S(function(a, e) {
          var n = {},
            i = e[0];
          if (null == a) return n;
          C.isFunction(i)
            ? (e.length > 1 && (i = f(i, e[1])), (e = C.allKeys(a)))
            : ((i = H), (e = U(e, !1, !1)), (a = Object(a)));
          for (var l = 0, r = e.length; l < r; l++) {
            var o = e[l],
              s = a[o];
            i(s, o, a) && (n[o] = s);
          }
          return n;
        })),
          (C.omit = S(function(a, e) {
            var n,
              i = e[0];
            return (
              C.isFunction(i)
                ? ((i = C.negate(i)), e.length > 1 && (n = e[1]))
                : ((e = C.map(U(e, !1, !1), String)),
                  (i = function(a, n) {
                    return !C.contains(e, n);
                  })),
              C.pick(a, i, n)
            );
          })),
          (C.defaults = O(C.allKeys, !0)),
          (C.create = function(a, e) {
            var n = M(a);
            return e && C.extendOwn(n, e), n;
          }),
          (C.clone = function(a) {
            return C.isObject(a)
              ? C.isArray(a)
                ? a.slice()
                : C.extend({}, a)
              : a;
          }),
          (C.tap = function(a, e) {
            return e(a), a;
          }),
          (C.isMatch = function(a, e) {
            var n = C.keys(e),
              i = n.length;
            if (null == a) return !i;
            for (var l = Object(a), r = 0; r < i; r++) {
              var o = n[r];
              if (e[o] !== l[o] || !(o in l)) return !1;
            }
            return !0;
          }),
          (F = function(a, e, n, i) {
            if (a === e) return 0 !== a || 1 / a == 1 / e;
            if (null == a || null == e) return !1;
            if (a != a) return e != e;
            var l = typeof a;
            return (
              ('function' === l || 'object' === l || 'object' == typeof e) &&
              w(a, e, n, i)
            );
          }),
          (w = function(a, e, n, i) {
            a instanceof C && (a = a._wrapped),
              e instanceof C && (e = e._wrapped);
            var l = u.call(a);
            if (l !== u.call(e)) return !1;
            switch (l) {
              case '[object RegExp]':
              case '[object String]':
                return '' + a == '' + e;
              case '[object Number]':
                return +a != +a
                  ? +e != +e
                  : 0 == +a
                    ? 1 / +a == 1 / e
                    : +a == +e;
              case '[object Date]':
              case '[object Boolean]':
                return +a == +e;
              case '[object Symbol]':
                return c.valueOf.call(a) === c.valueOf.call(e);
            }
            var r = '[object Array]' === l;
            if (!r) {
              if ('object' != typeof a || 'object' != typeof e) return !1;
              var o = a.constructor,
                s = e.constructor;
              if (
                o !== s &&
                !(
                  C.isFunction(o) &&
                  o instanceof o &&
                  C.isFunction(s) &&
                  s instanceof s
                ) &&
                'constructor' in a &&
                'constructor' in e
              )
                return !1;
            }
            (n = n || []), (i = i || []);
            for (var h = n.length; h--; ) if (n[h] === a) return i[h] === e;
            if ((n.push(a), i.push(e), r)) {
              if ((h = a.length) !== e.length) return !1;
              for (; h--; ) if (!F(a[h], e[h], n, i)) return !1;
            } else {
              var p,
                t = C.keys(a);
              if (((h = t.length), C.keys(e).length !== h)) return !1;
              for (; h--; )
                if (((p = t[h]), !C.has(e, p) || !F(a[p], e[p], n, i)))
                  return !1;
            }
            return n.pop(), i.pop(), !0;
          }),
          (C.isEqual = function(a, e) {
            return F(a, e);
          }),
          (C.isEmpty = function(a) {
            return (
              null == a ||
              (D(a) && (C.isArray(a) || C.isString(a) || C.isArguments(a))
                ? 0 === a.length
                : 0 === C.keys(a).length)
            );
          }),
          (C.isElement = function(a) {
            return !(!a || 1 !== a.nodeType);
          }),
          (C.isArray =
            g ||
            function(a) {
              return '[object Array]' === u.call(a);
            }),
          (C.isObject = function(a) {
            var e = typeof a;
            return 'function' === e || ('object' === e && !!a);
          }),
          C.each(
            [
              'Arguments',
              'Function',
              'String',
              'Number',
              'Date',
              'RegExp',
              'Error',
              'Symbol',
              'Map',
              'WeakMap',
              'Set',
              'WeakSet',
            ],
            function(a) {
              C['is' + a] = function(e) {
                return u.call(e) === '[object ' + a + ']';
              };
            }
          ),
          C.isArguments(arguments) ||
            (C.isArguments = function(a) {
              return C.has(a, 'callee');
            });
        var Z = l.document && l.document.childNodes;
        'function' != typeof /./ &&
          'object' != typeof Int8Array &&
          'function' != typeof Z &&
          (C.isFunction = function(a) {
            return 'function' == typeof a || !1;
          }),
          (C.isFinite = function(a) {
            return !C.isSymbol(a) && isFinite(a) && !isNaN(parseFloat(a));
          }),
          (C.isNaN = function(a) {
            return C.isNumber(a) && isNaN(a);
          }),
          (C.isBoolean = function(a) {
            return !0 === a || !1 === a || '[object Boolean]' === u.call(a);
          }),
          (C.isNull = function(a) {
            return null === a;
          }),
          (C.isUndefined = function(a) {
            return void 0 === a;
          }),
          (C.has = function(a, e) {
            if (!C.isArray(e)) return null != a && t.call(a, e);
            for (var n = e.length, i = 0; i < n; i++) {
              var l = e[i];
              if (null == a || !t.call(a, l)) return !1;
              a = a[l];
            }
            return !!n;
          }),
          (C.noConflict = function() {
            return (l._ = r), this;
          }),
          (C.identity = function(a) {
            return a;
          }),
          (C.constant = function(a) {
            return function() {
              return a;
            };
          }),
          (C.noop = function() {}),
          (C.property = function(a) {
            return C.isArray(a)
              ? function(e) {
                  return R(e, a);
                }
              : j(a);
          }),
          (C.propertyOf = function(a) {
            return null == a
              ? function() {}
              : function(e) {
                  return C.isArray(e) ? R(a, e) : a[e];
                };
          }),
          (C.matcher = C.matches = function(a) {
            return (
              (a = C.extendOwn({}, a)),
              function(e) {
                return C.isMatch(e, a);
              }
            );
          }),
          (C.times = function(a, e, n) {
            var i = Array(Math.max(0, a));
            e = f(e, n, 1);
            for (var l = 0; l < a; l++) i[l] = e(l);
            return i;
          }),
          (C.random = function(a, e) {
            return (
              null == e && ((e = a), (a = 0)),
              a + Math.floor(Math.random() * (e - a + 1))
            );
          }),
          (C.now =
            Date.now ||
            function() {
              return new Date().getTime();
            });
        var z = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
          },
          V = C.invert(z),
          Y = function(a) {
            var e = function(e) {
                return a[e];
              },
              n = '(?:' + C.keys(a).join('|') + ')',
              i = RegExp(n),
              l = RegExp(n, 'g');
            return function(a) {
              return (
                (a = null == a ? '' : '' + a), i.test(a) ? a.replace(l, e) : a
              );
            };
          };
        (C.escape = Y(z)),
          (C.unescape = Y(V)),
          (C.result = function(a, e, n) {
            C.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i) return C.isFunction(n) ? n.call(a) : n;
            for (var l = 0; l < i; l++) {
              var r = null == a ? void 0 : a[e[l]];
              void 0 === r && ((r = n), (l = i)),
                (a = C.isFunction(r) ? r.call(a) : r);
            }
            return a;
          });
        var W = 0;
        (C.uniqueId = function(a) {
          var e = ++W + '';
          return a ? a + e : e;
        }),
          (C.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          });
        var x = /(.)^/,
          X = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029',
          },
          J = /\\|'|\r|\n|\u2028|\u2029/g,
          _ = function(a) {
            return '\\' + X[a];
          };
        (C.template = function(a, e, n) {
          !e && n && (e = n), (e = C.defaults({}, e, C.templateSettings));
          var i,
            l = RegExp(
              [
                (e.escape || x).source,
                (e.interpolate || x).source,
                (e.evaluate || x).source,
              ].join('|') + '|$',
              'g'
            ),
            r = 0,
            o = "__p+='";
          a.replace(l, function(e, n, i, l, s) {
            return (
              (o += a.slice(r, s).replace(J, _)),
              (r = s + e.length),
              n
                ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                  ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : l && (o += "';\n" + l + "\n__p+='"),
              e
            );
          }),
            (o += "';\n"),
            e.variable || (o = 'with(obj||{}){\n' + o + '}\n'),
            (o =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              o +
              'return __p;\n');
          try {
            i = new Function(e.variable || 'obj', '_', o);
          } catch (a) {
            throw ((a.source = o), a);
          }
          var s = function(a) {
              return i.call(this, a, C);
            },
            c = e.variable || 'obj';
          return (s.source = 'function(' + c + '){\n' + o + '}'), s;
        }),
          (C.chain = function(a) {
            var e = C(a);
            return (e._chain = !0), e;
          });
        var $ = function(a, e) {
          return a._chain ? C(e).chain() : e;
        };
        (C.mixin = function(a) {
          return (
            C.each(C.functions(a), function(e) {
              var n = (C[e] = a[e]);
              C.prototype[e] = function() {
                var a = [this._wrapped];
                return h.apply(a, arguments), $(this, n.apply(C, a));
              };
            }),
            C
          );
        }),
          C.mixin(C),
          C.each(
            ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
            function(a) {
              var e = o[a];
              C.prototype[a] = function() {
                var n = this._wrapped;
                return (
                  e.apply(n, arguments),
                  ('shift' !== a && 'splice' !== a) ||
                    0 !== n.length ||
                    delete n[0],
                  $(this, n)
                );
              };
            }
          ),
          C.each(['concat', 'join', 'slice'], function(a) {
            var e = o[a];
            C.prototype[a] = function() {
              return $(this, e.apply(this._wrapped, arguments));
            };
          }),
          (C.prototype.value = function() {
            return this._wrapped;
          }),
          (C.prototype.valueOf = C.prototype.toJSON = C.prototype.value),
          (C.prototype.toString = function() {
            return String(this._wrapped);
          }),
          void 0 ===
            (i = function() {
              return C;
            }.apply(e, [])) || (n.exports = i);
      })();
    }.call(this, n(5), n(4)(a)));
  },
  function(a, e, n) {
    'use strict';
    n.r(e);
    var i = n(0);
    var l = {
      centralAsia: {
        name: 'Central Asia',
        countries: ['KZ', 'KG', 'TJ', 'TM', 'UZ'],
      },
      southernAsia: {
        name: 'Southern Asia',
        countries: ['AF', 'BD', 'BT', 'IO', 'IN', 'IR', 'MV', 'NP', 'PK', 'LK'],
      },
      southeastAsia: {
        name: 'Southeast Asia',
        countries: [
          'BN',
          'KH',
          'CX',
          'CC',
          'TL',
          'ID',
          'LA',
          'MY',
          'MM',
          'PH',
          'SG',
          'TH',
          'VN',
        ],
      },
      eastAsia: {
        name: 'East Asia',
        countries: ['CN', 'HK', 'JP', 'KP', 'KR', 'MO', 'MN', 'TW'],
      },
      westernAsia: {
        name: 'Western Asia',
        countries: [
          'AM',
          'AZ',
          'BH',
          'IQ',
          'IL',
          'JO',
          'KW',
          'LB',
          'OM',
          'PS',
          'QA',
          'SA',
          'SY',
          'TR',
          'AE',
          'YE',
        ],
      },
      centralAfrica: {
        name: 'Central Aftrica',
        countries: ['AO', 'CM', 'CF', 'TD', 'CG', 'CD', 'GQ', 'GA', 'ST'],
      },
      northAfrica: {
        name: 'North Africa',
        countries: ['DZ', 'EG', 'LY', 'MA', 'SD', 'TN', 'EH'],
      },
      southernAfrica: {
        name: 'Southern Africa',
        countries: ['BW', 'LS', 'NA', 'ZA', 'SZ'],
      },
      eastAfrica: {
        name: 'East Africa',
        countries: [
          'BI',
          'KM',
          'DJ',
          'ER',
          'ET',
          'KE',
          'MG',
          'MW',
          'MU',
          'YT',
          'MZ',
          'RE',
          'RW',
          'SC',
          'SO',
          'SS',
          'TZ',
          'UG',
          'ZM',
          'ZW',
        ],
      },
      westAfrica: {
        name: 'West Africa',
        countries: [
          'BJ',
          'BF',
          'CV',
          'CI',
          'GM',
          'GH',
          'GN',
          'GW',
          'LR',
          'ML',
          'MR',
          'NE',
          'NG',
          'SH',
          'SN',
          'SL',
          'TG',
        ],
      },
      centralAmerica: {
        name: 'Central America',
        countries: ['BZ', 'CR', 'SV', 'GT', 'HN', 'NI', 'PA'],
      },
      northernAmerica: {
        name: 'Northern America',
        countries: ['BM', 'CA', 'GL', 'MX', 'PM', 'US'],
      },
      southAmerica: {
        name: 'South America',
        countries: [
          'AR',
          'BO',
          'BR',
          'CL',
          'CO',
          'EC',
          'FK',
          'GF',
          'GY',
          'PY',
          'PE',
          'SR',
          'UY',
          'VE',
        ],
      },
      caribbean: {
        name: 'Caribbean',
        countries: [
          'AI',
          'AG',
          'AW',
          'BS',
          'BB',
          'BQ',
          'VG',
          'KY',
          'CU',
          'CW',
          'DM',
          'DO',
          'GD',
          'GP',
          'HT',
          'JM',
          'MQ',
          'MS',
          'PR',
          'BL',
          'KN',
          'LC',
          'MF',
          'VC',
          'SX',
          'TT',
          'TC',
          'VI',
        ],
      },
      antartica: {
        name: 'Antartica',
        countries: ['AQ', 'BV', 'TF', 'HM', 'GS'],
      },
      northernEurope: {
        name: 'Northern Europe',
        countries: [
          'AX',
          'DK',
          'EE',
          'FO',
          'FI',
          'GG',
          'IS',
          'IE',
          'JE',
          'IM',
          'LV',
          'LT',
          'NO',
          'SJ',
          'SE',
          'GB',
        ],
      },
      southernEurope: {
        name: 'Southern Europe',
        countries: [
          'AL',
          'AD',
          'BA',
          'HR',
          'CY',
          'GI',
          'GR',
          'IT',
          'MK',
          'VA',
          'MT',
          'ME',
          'PT',
          'SM',
          'RS',
          'SI',
          'ES',
        ],
      },
      easternEurope: {
        name: 'Eastern Europe',
        countries: [
          'BY',
          'BG',
          'CZ',
          'GE',
          'HU',
          'MD',
          'PL',
          'RO',
          'RU',
          'SK',
          'UA',
        ],
      },
      westernEurope: {
        name: 'Western Europe',
        countries: ['AT', 'BE', 'FR', 'DE', 'LI', 'LU', 'MC', 'NL', 'CH'],
      },
      australia: { name: 'Australia', countries: ['AU', 'NF', 'NZ'] },
      melanesia: {
        name: 'Melanesia',
        countries: ['FJ', 'NC', 'PG', 'SB', 'VU'],
      },
      micronesia: {
        name: 'Micronesia',
        countries: ['GU', 'KI', 'MH', 'FM', 'NR', 'MP', 'PW', 'UM'],
      },
      polynesia: {
        name: 'Polynesia',
        countries: ['AS', 'CK', 'PF', 'NU', 'PN', 'WS', 'TK', 'TO', 'TV', 'WF'],
      },
    };
    var r = {
        asia: {
          name: 'Asia',
          regions: [
            'centralAsia',
            'southernAsia',
            'southeastAsia',
            'eastAsia',
            'westernAsia',
          ],
          countries: i._.flatten([
            l.centralAsia.countries,
            l.southernAsia.countries,
            l.southeastAsia.countries,
            l.eastAsia.countries,
            l.westernAsia.countries,
          ]).sort(),
        },
        africa: {
          name: 'Africa',
          regions: [
            'centralAfrica',
            'northAfrica',
            'southernAfrica',
            'eastAfrica',
            'westAfrica',
          ],
          countries: i._.flatten([
            l.centralAfrica.countries,
            l.northAfrica.countries,
            l.southernAfrica.countries,
            l.eastAfrica.countries,
            l.westAfrica.countries,
          ]).sort(),
        },
        northAmerica: {
          name: 'North America',
          regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
          countries: i._.flatten([
            l.centralAmerica.countries,
            l.northernAmerica.countries,
            l.caribbean.countries,
          ]).sort(),
        },
        southAmerica: {
          name: 'South America',
          regions: ['southAmerica'],
          countries: i._.flatten([l.southAmerica.countries]).sort(),
        },
        antartica: {
          name: 'Antartica',
          regions: ['antartica'],
          countries: i._.flatten([l.antartica.countries]).sort(),
        },
        europe: {
          name: 'Europe',
          regions: [
            'northernEurope',
            'southernEurope',
            'easternEurope',
            'westernEurope',
          ],
          countries: i._.flatten([
            l.northernEurope.countries,
            l.southernEurope.countries,
            l.easternEurope.countries,
            l.westernEurope.countries,
          ]).sort(),
        },
        oceania: {
          name: 'Oceania',
          regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
          countries: i._.flatten([
            l.australia.countries,
            l.melanesia.countries,
            l.micronesia.countries,
            l.polynesia.countries,
          ]).sort(),
        },
      },
      o = [
        {
          alpha2: 'AC',
          alpha3: '',
          countryCallingCodes: ['+247'],
          currencies: ['USD'],
          emoji: '',
          ioc: 'SHP',
          languages: ['eng'],
          name: 'Ascension Island',
          status: 'reserved',
        },
        {
          alpha2: 'AD',
          alpha3: 'AND',
          countryCallingCodes: ['+376'],
          currencies: ['EUR'],
          emoji: '🇦🇩',
          ioc: 'AND',
          languages: ['cat'],
          name: 'Andorra',
          status: 'assigned',
        },
        {
          alpha2: 'AE',
          alpha3: 'ARE',
          countryCallingCodes: ['+971'],
          currencies: ['AED'],
          emoji: '🇦🇪',
          ioc: 'UAE',
          languages: ['ara'],
          name: 'United Arab Emirates',
          status: 'assigned',
        },
        {
          alpha2: 'AF',
          alpha3: 'AFG',
          countryCallingCodes: ['+93'],
          currencies: ['AFN'],
          emoji: '🇦🇫',
          ioc: 'AFG',
          languages: ['pus'],
          name: 'Afghanistan',
          status: 'assigned',
        },
        {
          alpha2: 'AG',
          alpha3: 'ATG',
          countryCallingCodes: ['+1 268'],
          currencies: ['XCD'],
          emoji: '🇦🇬',
          ioc: 'ANT',
          languages: ['eng'],
          name: 'Antigua And Barbuda',
          status: 'assigned',
        },
        {
          alpha2: 'AI',
          alpha3: 'AIA',
          countryCallingCodes: ['+1 264'],
          currencies: ['XCD'],
          emoji: '🇦🇮',
          ioc: '',
          languages: ['eng'],
          name: 'Anguilla',
          status: 'assigned',
        },
        {
          alpha2: 'AI',
          alpha3: 'AFI',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'French Afar and Issas',
          status: 'deleted',
        },
        {
          alpha2: 'AL',
          alpha3: 'ALB',
          countryCallingCodes: ['+355'],
          currencies: ['ALL'],
          emoji: '🇦🇱',
          ioc: 'ALB',
          languages: ['sqi'],
          name: 'Albania',
          status: 'assigned',
        },
        {
          alpha2: 'AM',
          alpha3: 'ARM',
          countryCallingCodes: ['+374'],
          currencies: ['AMD'],
          emoji: '🇦🇲',
          ioc: 'ARM',
          languages: ['hye', 'rus'],
          name: 'Armenia',
          status: 'assigned',
        },
        {
          alpha2: 'AN',
          alpha3: 'ANT',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Netherlands Antilles',
          status: 'deleted',
        },
        {
          alpha2: 'AO',
          alpha3: 'AGO',
          countryCallingCodes: ['+244'],
          currencies: ['AOA'],
          emoji: '🇦🇴',
          ioc: 'ANG',
          languages: ['por'],
          name: 'Angola',
          status: 'assigned',
        },
        {
          alpha2: 'AQ',
          alpha3: 'ATA',
          countryCallingCodes: ['+672'],
          currencies: [],
          emoji: '🇦🇶',
          ioc: '',
          languages: [],
          name: 'Antarctica',
          status: 'assigned',
        },
        {
          alpha2: 'AR',
          alpha3: 'ARG',
          countryCallingCodes: ['+54'],
          currencies: ['ARS'],
          emoji: '🇦🇷',
          ioc: 'ARG',
          languages: ['spa'],
          name: 'Argentina',
          status: 'assigned',
        },
        {
          alpha2: 'AS',
          alpha3: 'ASM',
          countryCallingCodes: ['+1 684'],
          currencies: ['USD'],
          emoji: '🇦🇸',
          ioc: 'ASA',
          languages: ['eng', 'smo'],
          name: 'American Samoa',
          status: 'assigned',
        },
        {
          alpha2: 'AT',
          alpha3: 'AUT',
          countryCallingCodes: ['+43'],
          currencies: ['EUR'],
          emoji: '🇦🇹',
          ioc: 'AUT',
          languages: ['deu'],
          name: 'Austria',
          status: 'assigned',
        },
        {
          alpha2: 'AU',
          alpha3: 'AUS',
          countryCallingCodes: ['+61'],
          currencies: ['AUD'],
          emoji: '🇦🇺',
          ioc: 'AUS',
          languages: ['eng'],
          name: 'Australia',
          status: 'assigned',
        },
        {
          alpha2: 'AW',
          alpha3: 'ABW',
          countryCallingCodes: ['+297'],
          currencies: ['AWG'],
          emoji: '🇦🇼',
          ioc: 'ARU',
          languages: ['nld'],
          name: 'Aruba',
          status: 'assigned',
        },
        {
          alpha2: 'AX',
          alpha3: 'ALA',
          countryCallingCodes: ['+358'],
          currencies: ['EUR'],
          emoji: '🇦🇽',
          ioc: '',
          languages: ['swe'],
          name: 'Åland Islands',
          status: 'assigned',
        },
        {
          alpha2: 'AZ',
          alpha3: 'AZE',
          countryCallingCodes: ['+994'],
          currencies: ['AZN'],
          emoji: '🇦🇿',
          ioc: 'AZE',
          languages: ['aze'],
          name: 'Azerbaijan',
          status: 'assigned',
        },
        {
          alpha2: 'BA',
          alpha3: 'BIH',
          countryCallingCodes: ['+387'],
          currencies: ['BAM'],
          emoji: '🇧🇦',
          ioc: 'BIH',
          languages: ['bos', 'cre', 'srp'],
          name: 'Bosnia & Herzegovina',
          status: 'assigned',
        },
        {
          alpha2: 'BB',
          alpha3: 'BRB',
          countryCallingCodes: ['+1 246'],
          currencies: ['BBD'],
          emoji: '🇧🇧',
          ioc: 'BAR',
          languages: ['eng'],
          name: 'Barbados',
          status: 'assigned',
        },
        {
          alpha2: 'BD',
          alpha3: 'BGD',
          countryCallingCodes: ['+880'],
          currencies: ['BDT'],
          emoji: '🇧🇩',
          ioc: 'BAN',
          languages: ['ben'],
          name: 'Bangladesh',
          status: 'assigned',
        },
        {
          alpha2: 'BE',
          alpha3: 'BEL',
          countryCallingCodes: ['+32'],
          currencies: ['EUR'],
          emoji: '🇧🇪',
          ioc: 'BEL',
          languages: ['nld', 'fra', 'deu'],
          name: 'Belgium',
          status: 'assigned',
        },
        {
          alpha2: 'BF',
          alpha3: 'BFA',
          countryCallingCodes: ['+226'],
          currencies: ['XOF'],
          emoji: '🇧🇫',
          ioc: 'BUR',
          languages: ['fra'],
          name: 'Burkina Faso',
          status: 'assigned',
        },
        {
          alpha2: 'BG',
          alpha3: 'BGR',
          countryCallingCodes: ['+359'],
          currencies: ['BGN'],
          emoji: '🇧🇬',
          ioc: 'BUL',
          languages: ['bul'],
          name: 'Bulgaria',
          status: 'assigned',
        },
        {
          alpha2: 'BH',
          alpha3: 'BHR',
          countryCallingCodes: ['+973'],
          currencies: ['BHD'],
          emoji: '🇧🇭',
          ioc: 'BRN',
          languages: ['ara'],
          name: 'Bahrain',
          status: 'assigned',
        },
        {
          alpha2: 'BI',
          alpha3: 'BDI',
          countryCallingCodes: ['+257'],
          currencies: ['BIF'],
          emoji: '🇧🇮',
          ioc: 'BDI',
          languages: ['fra'],
          name: 'Burundi',
          status: 'assigned',
        },
        {
          alpha2: 'BJ',
          alpha3: 'BEN',
          countryCallingCodes: ['+229'],
          currencies: ['XOF'],
          emoji: '🇧🇯',
          ioc: 'BEN',
          languages: ['fra'],
          name: 'Benin',
          status: 'assigned',
        },
        {
          alpha2: 'BL',
          alpha3: 'BLM',
          countryCallingCodes: ['+590'],
          currencies: ['EUR'],
          emoji: '🇧🇱',
          ioc: '',
          languages: ['fra'],
          name: 'Saint Barthélemy',
          status: 'assigned',
        },
        {
          alpha2: 'BM',
          alpha3: 'BMU',
          countryCallingCodes: ['+1 441'],
          currencies: ['BMD'],
          emoji: '🇧🇲',
          ioc: 'BER',
          languages: ['eng'],
          name: 'Bermuda',
          status: 'assigned',
        },
        {
          alpha2: 'BN',
          alpha3: 'BRN',
          countryCallingCodes: ['+673'],
          currencies: ['BND'],
          emoji: '🇧🇳',
          ioc: 'BRU',
          languages: ['msa', 'eng'],
          name: 'Brunei Darussalam',
          status: 'assigned',
        },
        {
          alpha2: 'BO',
          alpha3: 'BOL',
          countryCallingCodes: ['+591'],
          currencies: ['BOB', 'BOV'],
          emoji: '🇧🇴',
          ioc: 'BOL',
          languages: ['spa', 'aym', 'que'],
          name: 'Bolivia, Plurinational State Of',
          status: 'assigned',
        },
        {
          alpha2: 'BQ',
          alpha3: 'BES',
          countryCallingCodes: ['+599'],
          currencies: ['USD'],
          emoji: '🇧🇶',
          ioc: '',
          languages: ['nld'],
          name: 'Bonaire, Sint Eustatius And Saba',
          status: 'assigned',
        },
        {
          alpha2: 'BQ',
          alpha3: 'ATB',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'British Antarctic Territory',
          status: 'deleted',
        },
        {
          alpha2: 'BR',
          alpha3: 'BRA',
          countryCallingCodes: ['+55'],
          currencies: ['BRL'],
          emoji: '🇧🇷',
          ioc: 'BRA',
          languages: ['por'],
          name: 'Brazil',
          status: 'assigned',
        },
        {
          alpha2: 'BS',
          alpha3: 'BHS',
          countryCallingCodes: ['+1 242'],
          currencies: ['BSD'],
          emoji: '🇧🇸',
          ioc: 'BAH',
          languages: ['eng'],
          name: 'Bahamas',
          status: 'assigned',
        },
        {
          alpha2: 'BT',
          alpha3: 'BTN',
          countryCallingCodes: ['+975'],
          currencies: ['INR', 'BTN'],
          emoji: '🇧🇹',
          ioc: 'BHU',
          languages: ['dzo'],
          name: 'Bhutan',
          status: 'assigned',
        },
        {
          alpha2: 'BU',
          alpha3: 'BUR',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Burma',
          status: 'deleted',
        },
        {
          alpha2: 'BV',
          alpha3: 'BVT',
          countryCallingCodes: [],
          currencies: ['NOK'],
          emoji: '🇧🇻',
          ioc: '',
          languages: [],
          name: 'Bouvet Island',
          status: 'assigned',
        },
        {
          alpha2: 'BW',
          alpha3: 'BWA',
          countryCallingCodes: ['+267'],
          currencies: ['BWP'],
          emoji: '🇧🇼',
          ioc: 'BOT',
          languages: ['eng', 'tsn'],
          name: 'Botswana',
          status: 'assigned',
        },
        {
          alpha2: 'BY',
          alpha3: 'BLR',
          countryCallingCodes: ['+375'],
          currencies: ['BYN'],
          emoji: '🇧🇾',
          ioc: 'BLR',
          languages: ['bel', 'rus'],
          name: 'Belarus',
          status: 'assigned',
        },
        {
          alpha2: 'BY',
          alpha3: 'BYS',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Byelorussian SSR',
          status: 'deleted',
        },
        {
          alpha2: 'BZ',
          alpha3: 'BLZ',
          countryCallingCodes: ['+501'],
          currencies: ['BZD'],
          emoji: '🇧🇿',
          ioc: 'BIZ',
          languages: ['eng'],
          name: 'Belize',
          status: 'assigned',
        },
        {
          alpha2: 'CA',
          alpha3: 'CAN',
          countryCallingCodes: ['+1'],
          currencies: ['CAD'],
          emoji: '🇨🇦',
          ioc: 'CAN',
          languages: ['eng', 'fra'],
          name: 'Canada',
          status: 'assigned',
        },
        {
          alpha2: 'CC',
          alpha3: 'CCK',
          countryCallingCodes: ['+61'],
          currencies: ['AUD'],
          emoji: '🇨🇨',
          ioc: '',
          languages: ['eng'],
          name: 'Cocos (Keeling) Islands',
          status: 'assigned',
        },
        {
          alpha2: 'CD',
          alpha3: 'COD',
          countryCallingCodes: ['+243'],
          currencies: ['CDF'],
          emoji: '🇨🇩',
          ioc: 'COD',
          languages: ['fra', 'lin', 'kon', 'swa'],
          name: 'Democratic Republic Of Congo',
          status: 'assigned',
        },
        {
          alpha2: 'CF',
          alpha3: 'CAF',
          countryCallingCodes: ['+236'],
          currencies: ['XAF'],
          emoji: '🇨🇫',
          ioc: 'CAF',
          languages: ['fra', 'sag'],
          name: 'Central African Republic',
          status: 'assigned',
        },
        {
          alpha2: 'CG',
          alpha3: 'COG',
          countryCallingCodes: ['+242'],
          currencies: ['XAF'],
          emoji: '🇨🇬',
          ioc: 'CGO',
          languages: ['fra', 'lin'],
          name: 'Republic Of Congo',
          status: 'assigned',
        },
        {
          alpha2: 'CH',
          alpha3: 'CHE',
          countryCallingCodes: ['+41'],
          currencies: ['CHF', 'CHE', 'CHW'],
          emoji: '🇨🇭',
          ioc: 'SUI',
          languages: ['deu', 'fra', 'ita', 'roh'],
          name: 'Switzerland',
          status: 'assigned',
        },
        {
          alpha2: 'CI',
          alpha3: 'CIV',
          countryCallingCodes: ['+225'],
          currencies: ['XOF'],
          emoji: '🇨🇮',
          ioc: 'CIV',
          languages: ['fra'],
          name: "Côte d'Ivoire",
          status: 'assigned',
        },
        {
          alpha2: 'CK',
          alpha3: 'COK',
          countryCallingCodes: ['+682'],
          currencies: ['NZD'],
          emoji: '🇨🇰',
          ioc: 'COK',
          languages: ['eng', 'mri'],
          name: 'Cook Islands',
          status: 'assigned',
        },
        {
          alpha2: 'CL',
          alpha3: 'CHL',
          countryCallingCodes: ['+56'],
          currencies: ['CLP', 'CLF'],
          emoji: '🇨🇱',
          ioc: 'CHI',
          languages: ['spa'],
          name: 'Chile',
          status: 'assigned',
        },
        {
          alpha2: 'CM',
          alpha3: 'CMR',
          countryCallingCodes: ['+237'],
          currencies: ['XAF'],
          emoji: '🇨🇲',
          ioc: 'CMR',
          languages: ['eng', 'fra'],
          name: 'Cameroon',
          status: 'assigned',
        },
        {
          alpha2: 'CN',
          alpha3: 'CHN',
          countryCallingCodes: ['+86'],
          currencies: ['CNY'],
          emoji: '🇨🇳',
          ioc: 'CHN',
          languages: ['zho'],
          name: 'China',
          status: 'assigned',
        },
        {
          alpha2: 'CO',
          alpha3: 'COL',
          countryCallingCodes: ['+57'],
          currencies: ['COP', 'COU'],
          emoji: '🇨🇴',
          ioc: 'COL',
          languages: ['spa'],
          name: 'Colombia',
          status: 'assigned',
        },
        {
          alpha2: 'CP',
          alpha3: '',
          countryCallingCodes: [],
          currencies: ['EUR'],
          emoji: '',
          ioc: '',
          languages: [],
          name: 'Clipperton Island',
          status: 'reserved',
        },
        {
          alpha2: 'CR',
          alpha3: 'CRI',
          countryCallingCodes: ['+506'],
          currencies: ['CRC'],
          emoji: '🇨🇷',
          ioc: 'CRC',
          languages: ['spa'],
          name: 'Costa Rica',
          status: 'assigned',
        },
        {
          alpha2: 'CS',
          alpha3: 'CSK',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Czechoslovakia',
          status: 'deleted',
        },
        {
          alpha2: 'CS',
          alpha3: 'SCG',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Serbia and Montenegro',
          status: 'deleted',
        },
        {
          alpha2: 'CT',
          alpha3: 'CTE',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Canton and Enderbury Islands',
          status: 'deleted',
        },
        {
          alpha2: 'CU',
          alpha3: 'CUB',
          countryCallingCodes: ['+53'],
          currencies: ['CUP', 'CUC'],
          emoji: '🇨🇺',
          ioc: 'CUB',
          languages: ['spa'],
          name: 'Cuba',
          status: 'assigned',
        },
        {
          alpha2: 'CV',
          alpha3: 'CPV',
          countryCallingCodes: ['+238'],
          currencies: ['CVE'],
          emoji: '🇨🇻',
          ioc: 'CPV',
          languages: ['por'],
          name: 'Cabo Verde',
          status: 'assigned',
        },
        {
          alpha2: 'CW',
          alpha3: 'CUW',
          countryCallingCodes: ['+599'],
          currencies: ['ANG'],
          emoji: '🇨🇼',
          ioc: '',
          languages: ['nld'],
          name: 'Curacao',
          status: 'assigned',
        },
        {
          alpha2: 'CX',
          alpha3: 'CXR',
          countryCallingCodes: ['+61'],
          currencies: ['AUD'],
          emoji: '🇨🇽',
          ioc: '',
          languages: ['eng'],
          name: 'Christmas Island',
          status: 'assigned',
        },
        {
          alpha2: 'CY',
          alpha3: 'CYP',
          countryCallingCodes: ['+357'],
          currencies: ['EUR'],
          emoji: '🇨🇾',
          ioc: 'CYP',
          languages: ['ell', 'tur'],
          name: 'Cyprus',
          status: 'assigned',
        },
        {
          alpha2: 'CZ',
          alpha3: 'CZE',
          countryCallingCodes: ['+420'],
          currencies: ['CZK'],
          emoji: '🇨🇿',
          ioc: 'CZE',
          languages: ['ces'],
          name: 'Czech Republic',
          status: 'assigned',
        },
        {
          alpha2: 'DD',
          alpha3: 'DDR',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'German Democratic Republic',
          status: 'deleted',
        },
        {
          alpha2: 'DE',
          alpha3: 'DEU',
          countryCallingCodes: ['+49'],
          currencies: ['EUR'],
          emoji: '🇩🇪',
          ioc: 'GER',
          languages: ['deu'],
          name: 'Germany',
          status: 'assigned',
        },
        {
          alpha2: 'DG',
          alpha3: '',
          countryCallingCodes: [],
          currencies: ['USD'],
          emoji: '',
          ioc: '',
          languages: [],
          name: 'Diego Garcia',
          status: 'reserved',
        },
        {
          alpha2: 'DJ',
          alpha3: 'DJI',
          countryCallingCodes: ['+253'],
          currencies: ['DJF'],
          emoji: '🇩🇯',
          ioc: 'DJI',
          languages: ['ara', 'fra'],
          name: 'Djibouti',
          status: 'assigned',
        },
        {
          alpha2: 'DK',
          alpha3: 'DNK',
          countryCallingCodes: ['+45'],
          currencies: ['DKK'],
          emoji: '🇩🇰',
          ioc: 'DEN',
          languages: ['dan'],
          name: 'Denmark',
          status: 'assigned',
        },
        {
          alpha2: 'DM',
          alpha3: 'DMA',
          countryCallingCodes: ['+1 767'],
          currencies: ['XCD'],
          emoji: '🇩🇲',
          ioc: 'DMA',
          languages: ['eng'],
          name: 'Dominica',
          status: 'assigned',
        },
        {
          alpha2: 'DO',
          alpha3: 'DOM',
          countryCallingCodes: ['+1 809', '+1 829', '+1 849'],
          currencies: ['DOP'],
          emoji: '🇩🇴',
          ioc: 'DOM',
          languages: ['spa'],
          name: 'Dominican Republic',
          status: 'assigned',
        },
        {
          alpha2: 'DY',
          alpha3: 'DHY',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Dahomey',
          status: 'deleted',
        },
        {
          alpha2: 'DZ',
          alpha3: 'DZA',
          countryCallingCodes: ['+213'],
          currencies: ['DZD'],
          emoji: '🇩🇿',
          ioc: 'ALG',
          languages: ['ara'],
          name: 'Algeria',
          status: 'assigned',
        },
        {
          alpha2: 'EA',
          alpha3: '',
          countryCallingCodes: [],
          currencies: ['EUR'],
          emoji: '',
          ioc: '',
          languages: [],
          name: 'Ceuta, Mulilla',
          status: 'reserved',
        },
        {
          alpha2: 'EC',
          alpha3: 'ECU',
          countryCallingCodes: ['+593'],
          currencies: ['USD'],
          emoji: '🇪🇨',
          ioc: 'ECU',
          languages: ['spa', 'que'],
          name: 'Ecuador',
          status: 'assigned',
        },
        {
          alpha2: 'EE',
          alpha3: 'EST',
          countryCallingCodes: ['+372'],
          currencies: ['EUR'],
          emoji: '🇪🇪',
          ioc: 'EST',
          languages: ['est'],
          name: 'Estonia',
          status: 'assigned',
        },
        {
          alpha2: 'EG',
          alpha3: 'EGY',
          countryCallingCodes: ['+20'],
          currencies: ['EGP'],
          emoji: '🇪🇬',
          ioc: 'EGY',
          languages: ['ara'],
          name: 'Egypt',
          status: 'assigned',
        },
        {
          alpha2: 'EH',
          alpha3: 'ESH',
          countryCallingCodes: ['+212'],
          currencies: ['MAD'],
          emoji: '🇪🇭',
          ioc: '',
          languages: [],
          name: 'Western Sahara',
          status: 'assigned',
        },
        {
          alpha2: 'ER',
          alpha3: 'ERI',
          countryCallingCodes: ['+291'],
          currencies: ['ERN'],
          emoji: '🇪🇷',
          ioc: 'ERI',
          languages: ['eng', 'ara', 'tir'],
          name: 'Eritrea',
          status: 'assigned',
        },
        {
          alpha2: 'ES',
          alpha3: 'ESP',
          countryCallingCodes: ['+34'],
          currencies: ['EUR'],
          emoji: '🇪🇸',
          ioc: 'ESP',
          languages: ['spa', 'cat', 'glg', 'eus'],
          name: 'Spain',
          status: 'assigned',
        },
        {
          alpha2: 'ET',
          alpha3: 'ETH',
          countryCallingCodes: ['+251'],
          currencies: ['ETB'],
          emoji: '🇪🇹',
          ioc: 'ETH',
          languages: ['amh'],
          name: 'Ethiopia',
          status: 'assigned',
        },
        {
          alpha2: 'EU',
          alpha3: '',
          countryCallingCodes: ['+388'],
          currencies: ['EUR'],
          emoji: '🇪🇺',
          ioc: '',
          languages: [],
          name: 'European Union',
          status: 'reserved',
        },
        {
          alpha2: 'FI',
          alpha3: 'FIN',
          countryCallingCodes: ['+358'],
          currencies: ['EUR'],
          emoji: '🇫🇮',
          ioc: 'FIN',
          languages: ['fin', 'swe'],
          name: 'Finland',
          status: 'assigned',
        },
        {
          alpha2: 'FJ',
          alpha3: 'FJI',
          countryCallingCodes: ['+679'],
          currencies: ['FJD'],
          emoji: '🇫🇯',
          ioc: 'FIJ',
          languages: ['eng', 'fij'],
          name: 'Fiji',
          status: 'assigned',
        },
        {
          alpha2: 'FK',
          alpha3: 'FLK',
          countryCallingCodes: ['+500'],
          currencies: ['FKP'],
          emoji: '🇫🇰',
          ioc: '',
          languages: ['eng'],
          name: 'Falkland Islands',
          status: 'assigned',
        },
        {
          alpha2: 'FM',
          alpha3: 'FSM',
          countryCallingCodes: ['+691'],
          currencies: ['USD'],
          emoji: '🇫🇲',
          ioc: 'FSM',
          languages: ['eng'],
          name: 'Micronesia, Federated States Of',
          status: 'assigned',
        },
        {
          alpha2: 'FO',
          alpha3: 'FRO',
          countryCallingCodes: ['+298'],
          currencies: ['DKK'],
          emoji: '🇫🇴',
          ioc: 'FAI',
          languages: ['fao', 'dan'],
          name: 'Faroe Islands',
          status: 'assigned',
        },
        {
          alpha2: 'FQ',
          alpha3: 'ATF',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'French Southern and Antarctic Territories',
          status: 'deleted',
        },
        {
          alpha2: 'FR',
          alpha3: 'FRA',
          countryCallingCodes: ['+33'],
          currencies: ['EUR'],
          emoji: '🇫🇷',
          ioc: 'FRA',
          languages: ['fra'],
          name: 'France',
          status: 'assigned',
        },
        {
          alpha2: 'FX',
          alpha3: '',
          countryCallingCodes: ['+241'],
          currencies: ['EUR'],
          emoji: '',
          ioc: '',
          languages: ['fra'],
          name: 'France, Metropolitan',
          status: 'reserved',
        },
        {
          alpha2: 'GA',
          alpha3: 'GAB',
          countryCallingCodes: ['+241'],
          currencies: ['XAF'],
          emoji: '🇬🇦',
          ioc: 'GAB',
          languages: ['fra'],
          name: 'Gabon',
          status: 'assigned',
        },
        {
          alpha2: 'GB',
          alpha3: 'GBR',
          countryCallingCodes: ['+44'],
          currencies: ['GBP'],
          emoji: '🇬🇧',
          ioc: 'GBR',
          languages: ['eng', 'cor', 'gle', 'gla', 'cym'],
          name: 'United Kingdom',
          status: 'assigned',
        },
        {
          alpha2: 'GD',
          alpha3: 'GRD',
          countryCallingCodes: ['+473'],
          currencies: ['XCD'],
          emoji: '🇬🇩',
          ioc: 'GRN',
          languages: ['eng'],
          name: 'Grenada',
          status: 'assigned',
        },
        {
          alpha2: 'GE',
          alpha3: 'GEO',
          countryCallingCodes: ['+995'],
          currencies: ['GEL'],
          emoji: '🇬🇪',
          ioc: 'GEO',
          languages: ['kat'],
          name: 'Georgia',
          status: 'assigned',
        },
        {
          alpha2: 'GE',
          alpha3: 'GEL',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Gilbert and Ellice Islands',
          status: 'deleted',
        },
        {
          alpha2: 'GF',
          alpha3: 'GUF',
          countryCallingCodes: ['+594'],
          currencies: ['EUR'],
          emoji: '🇬🇫',
          ioc: '',
          languages: ['fra'],
          name: 'French Guiana',
          status: 'assigned',
        },
        {
          alpha2: 'GG',
          alpha3: 'GGY',
          countryCallingCodes: ['+44'],
          currencies: ['GBP'],
          emoji: '🇬🇬',
          ioc: 'GCI',
          languages: ['fra'],
          name: 'Guernsey',
          status: 'assigned',
        },
        {
          alpha2: 'GH',
          alpha3: 'GHA',
          countryCallingCodes: ['+233'],
          currencies: ['GHS'],
          emoji: '🇬🇭',
          ioc: 'GHA',
          languages: ['eng'],
          name: 'Ghana',
          status: 'assigned',
        },
        {
          alpha2: 'GI',
          alpha3: 'GIB',
          countryCallingCodes: ['+350'],
          currencies: ['GIP'],
          emoji: '🇬🇮',
          ioc: '',
          languages: ['eng'],
          name: 'Gibraltar',
          status: 'assigned',
        },
        {
          alpha2: 'GL',
          alpha3: 'GRL',
          countryCallingCodes: ['+299'],
          currencies: ['DKK'],
          emoji: '🇬🇱',
          ioc: '',
          languages: ['kal'],
          name: 'Greenland',
          status: 'assigned',
        },
        {
          alpha2: 'GM',
          alpha3: 'GMB',
          countryCallingCodes: ['+220'],
          currencies: ['GMD'],
          emoji: '🇬🇲',
          ioc: 'GAM',
          languages: ['eng'],
          name: 'Gambia',
          status: 'assigned',
        },
        {
          alpha2: 'GN',
          alpha3: 'GIN',
          countryCallingCodes: ['+224'],
          currencies: ['GNF'],
          emoji: '🇬🇳',
          ioc: 'GUI',
          languages: ['fra'],
          name: 'Guinea',
          status: 'assigned',
        },
        {
          alpha2: 'GP',
          alpha3: 'GLP',
          countryCallingCodes: ['+590'],
          currencies: ['EUR'],
          emoji: '🇬🇵',
          ioc: '',
          languages: ['fra'],
          name: 'Guadeloupe',
          status: 'assigned',
        },
        {
          alpha2: 'GQ',
          alpha3: 'GNQ',
          countryCallingCodes: ['+240'],
          currencies: ['XAF'],
          emoji: '🇬🇶',
          ioc: 'GEQ',
          languages: ['spa', 'fra', 'por'],
          name: 'Equatorial Guinea',
          status: 'assigned',
        },
        {
          alpha2: 'GR',
          alpha3: 'GRC',
          countryCallingCodes: ['+30'],
          currencies: ['EUR'],
          emoji: '🇬🇷',
          ioc: 'GRE',
          languages: ['ell'],
          name: 'Greece',
          status: 'assigned',
        },
        {
          alpha2: 'GS',
          alpha3: 'SGS',
          countryCallingCodes: ['+500'],
          currencies: ['GBP'],
          emoji: '🇬🇸',
          ioc: '',
          languages: ['eng'],
          name: 'South Georgia And The South Sandwich Islands',
          status: 'assigned',
        },
        {
          alpha2: 'GT',
          alpha3: 'GTM',
          countryCallingCodes: ['+502'],
          currencies: ['GTQ'],
          emoji: '🇬🇹',
          ioc: 'GUA',
          languages: ['spa'],
          name: 'Guatemala',
          status: 'assigned',
        },
        {
          alpha2: 'GU',
          alpha3: 'GUM',
          countryCallingCodes: ['+1 671'],
          currencies: ['USD'],
          emoji: '🇬🇺',
          ioc: 'GUM',
          languages: ['eng'],
          name: 'Guam',
          status: 'assigned',
        },
        {
          alpha2: 'GW',
          alpha3: 'GNB',
          countryCallingCodes: ['+245'],
          currencies: ['XOF'],
          emoji: '🇬🇼',
          ioc: 'GBS',
          languages: ['por'],
          name: 'Guinea-bissau',
          status: 'assigned',
        },
        {
          alpha2: 'GY',
          alpha3: 'GUY',
          countryCallingCodes: ['+592'],
          currencies: ['GYD'],
          emoji: '🇬🇾',
          ioc: 'GUY',
          languages: ['eng'],
          name: 'Guyana',
          status: 'assigned',
        },
        {
          alpha2: 'HK',
          alpha3: 'HKG',
          countryCallingCodes: ['+852'],
          currencies: ['HKD'],
          emoji: '🇭🇰',
          ioc: 'HKG',
          languages: ['zho', 'eng'],
          name: 'Hong Kong',
          status: 'assigned',
        },
        {
          alpha2: 'HM',
          alpha3: 'HMD',
          countryCallingCodes: [],
          currencies: ['AUD'],
          emoji: '🇭🇲',
          ioc: '',
          languages: [],
          name: 'Heard Island And McDonald Islands',
          status: 'assigned',
        },
        {
          alpha2: 'HN',
          alpha3: 'HND',
          countryCallingCodes: ['+504'],
          currencies: ['HNL'],
          emoji: '🇭🇳',
          ioc: 'HON',
          languages: ['spa'],
          name: 'Honduras',
          status: 'assigned',
        },
        {
          alpha2: 'HR',
          alpha3: 'HRV',
          countryCallingCodes: ['+385'],
          currencies: ['HRK'],
          emoji: '🇭🇷',
          ioc: 'CRO',
          languages: ['hrv'],
          name: 'Croatia',
          status: 'assigned',
        },
        {
          alpha2: 'HT',
          alpha3: 'HTI',
          countryCallingCodes: ['+509'],
          currencies: ['HTG', 'USD'],
          emoji: '🇭🇹',
          ioc: 'HAI',
          languages: ['fra', 'hat'],
          name: 'Haiti',
          status: 'assigned',
        },
        {
          alpha2: 'HU',
          alpha3: 'HUN',
          countryCallingCodes: ['+36'],
          currencies: ['HUF'],
          emoji: '🇭🇺',
          ioc: 'HUN',
          languages: ['hun'],
          name: 'Hungary',
          status: 'assigned',
        },
        {
          alpha2: 'HV',
          alpha3: 'HVO',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Upper Volta',
          status: 'deleted',
        },
        {
          alpha2: 'IC',
          alpha3: '',
          countryCallingCodes: [],
          currencies: ['EUR'],
          emoji: '',
          ioc: '',
          languages: [],
          name: 'Canary Islands',
          status: 'reserved',
        },
        {
          alpha2: 'ID',
          alpha3: 'IDN',
          countryCallingCodes: ['+62'],
          currencies: ['IDR'],
          emoji: '🇮🇩',
          ioc: 'INA',
          languages: ['ind'],
          name: 'Indonesia',
          status: 'assigned',
        },
        {
          alpha2: 'IE',
          alpha3: 'IRL',
          countryCallingCodes: ['+353'],
          currencies: ['EUR'],
          emoji: '🇮🇪',
          ioc: 'IRL',
          languages: ['eng', 'gle'],
          name: 'Ireland',
          status: 'assigned',
        },
        {
          alpha2: 'IL',
          alpha3: 'ISR',
          countryCallingCodes: ['+972'],
          currencies: ['ILS'],
          emoji: '🇮🇱',
          ioc: 'ISR',
          languages: ['heb', 'ara', 'eng'],
          name: 'Israel',
          status: 'assigned',
        },
        {
          alpha2: 'IM',
          alpha3: 'IMN',
          countryCallingCodes: ['+44'],
          currencies: ['GBP'],
          emoji: '🇮🇲',
          ioc: '',
          languages: ['eng', 'glv'],
          name: 'Isle Of Man',
          status: 'assigned',
        },
        {
          alpha2: 'IN',
          alpha3: 'IND',
          countryCallingCodes: ['+91'],
          currencies: ['INR'],
          emoji: '🇮🇳',
          ioc: 'IND',
          languages: ['eng', 'hin'],
          name: 'India',
          status: 'assigned',
        },
        {
          alpha2: 'IO',
          alpha3: 'IOT',
          countryCallingCodes: ['+246'],
          currencies: ['USD'],
          emoji: '🇮🇴',
          ioc: '',
          languages: ['eng'],
          name: 'British Indian Ocean Territory',
          status: 'assigned',
        },
        {
          alpha2: 'IQ',
          alpha3: 'IRQ',
          countryCallingCodes: ['+964'],
          currencies: ['IQD'],
          emoji: '🇮🇶',
          ioc: 'IRQ',
          languages: ['ara', 'kur'],
          name: 'Iraq',
          status: 'assigned',
        },
        {
          alpha2: 'IR',
          alpha3: 'IRN',
          countryCallingCodes: ['+98'],
          currencies: ['IRR'],
          emoji: '🇮🇷',
          ioc: 'IRI',
          languages: ['fas'],
          name: 'Iran, Islamic Republic Of',
          status: 'assigned',
        },
        {
          alpha2: 'IS',
          alpha3: 'ISL',
          countryCallingCodes: ['+354'],
          currencies: ['ISK'],
          emoji: '🇮🇸',
          ioc: 'ISL',
          languages: ['isl'],
          name: 'Iceland',
          status: 'assigned',
        },
        {
          alpha2: 'IT',
          alpha3: 'ITA',
          countryCallingCodes: ['+39'],
          currencies: ['EUR'],
          emoji: '🇮🇹',
          ioc: 'ITA',
          languages: ['ita'],
          name: 'Italy',
          status: 'assigned',
        },
        {
          alpha2: 'JE',
          alpha3: 'JEY',
          countryCallingCodes: ['+44'],
          currencies: ['GBP'],
          emoji: '🇯🇪',
          ioc: 'JCI',
          languages: ['eng', 'fra'],
          name: 'Jersey',
          status: 'assigned',
        },
        {
          alpha2: 'JM',
          alpha3: 'JAM',
          countryCallingCodes: ['+1 876'],
          currencies: ['JMD'],
          emoji: '🇯🇲',
          ioc: 'JAM',
          languages: ['eng'],
          name: 'Jamaica',
          status: 'assigned',
        },
        {
          alpha2: 'JO',
          alpha3: 'JOR',
          countryCallingCodes: ['+962'],
          currencies: ['JOD'],
          emoji: '🇯🇴',
          ioc: 'JOR',
          languages: ['ara'],
          name: 'Jordan',
          status: 'assigned',
        },
        {
          alpha2: 'JP',
          alpha3: 'JPN',
          countryCallingCodes: ['+81'],
          currencies: ['JPY'],
          emoji: '🇯🇵',
          ioc: 'JPN',
          languages: ['jpn'],
          name: 'Japan',
          status: 'assigned',
        },
        {
          alpha2: 'JT',
          alpha3: 'JTN',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Johnston Island',
          status: 'deleted',
        },
        {
          alpha2: 'KE',
          alpha3: 'KEN',
          countryCallingCodes: ['+254'],
          currencies: ['KES'],
          emoji: '🇰🇪',
          ioc: 'KEN',
          languages: ['eng', 'swa'],
          name: 'Kenya',
          status: 'assigned',
        },
        {
          alpha2: 'KG',
          alpha3: 'KGZ',
          countryCallingCodes: ['+996'],
          currencies: ['KGS'],
          emoji: '🇰🇬',
          ioc: 'KGZ',
          languages: ['rus'],
          name: 'Kyrgyzstan',
          status: 'assigned',
        },
        {
          alpha2: 'KH',
          alpha3: 'KHM',
          countryCallingCodes: ['+855'],
          currencies: ['KHR'],
          emoji: '🇰🇭',
          ioc: 'CAM',
          languages: ['khm'],
          name: 'Cambodia',
          status: 'assigned',
        },
        {
          alpha2: 'KI',
          alpha3: 'KIR',
          countryCallingCodes: ['+686'],
          currencies: ['AUD'],
          emoji: '🇰🇮',
          ioc: 'KIR',
          languages: ['eng'],
          name: 'Kiribati',
          status: 'assigned',
        },
        {
          alpha2: 'KM',
          alpha3: 'COM',
          countryCallingCodes: ['+269'],
          currencies: ['KMF'],
          emoji: '🇰🇲',
          ioc: 'COM',
          languages: ['ara', 'fra'],
          name: 'Comoros',
          status: 'assigned',
        },
        {
          alpha2: 'KN',
          alpha3: 'KNA',
          countryCallingCodes: ['+1 869'],
          currencies: ['XCD'],
          emoji: '🇰🇳',
          ioc: 'SKN',
          languages: ['eng'],
          name: 'Saint Kitts And Nevis',
          status: 'assigned',
        },
        {
          alpha2: 'KP',
          alpha3: 'PRK',
          countryCallingCodes: ['+850'],
          currencies: ['KPW'],
          emoji: '🇰🇵',
          ioc: 'PRK',
          languages: ['kor'],
          name: "Korea, Democratic People's Republic Of",
          status: 'assigned',
        },
        {
          alpha2: 'KR',
          alpha3: 'KOR',
          countryCallingCodes: ['+82'],
          currencies: ['KRW'],
          emoji: '🇰🇷',
          ioc: 'KOR',
          languages: ['kor'],
          name: 'Korea, Republic Of',
          status: 'assigned',
        },
        {
          alpha2: 'KW',
          alpha3: 'KWT',
          countryCallingCodes: ['+965'],
          currencies: ['KWD'],
          emoji: '🇰🇼',
          ioc: 'KUW',
          languages: ['ara'],
          name: 'Kuwait',
          status: 'assigned',
        },
        {
          alpha2: 'KY',
          alpha3: 'CYM',
          countryCallingCodes: ['+1 345'],
          currencies: ['KYD'],
          emoji: '🇰🇾',
          ioc: 'CAY',
          languages: ['eng'],
          name: 'Cayman Islands',
          status: 'assigned',
        },
        {
          alpha2: 'KZ',
          alpha3: 'KAZ',
          countryCallingCodes: ['+7', '+7 6', '+7 7'],
          currencies: ['KZT'],
          emoji: '🇰🇿',
          ioc: 'KAZ',
          languages: ['kaz', 'rus'],
          name: 'Kazakhstan',
          status: 'assigned',
        },
        {
          alpha2: 'LA',
          alpha3: 'LAO',
          countryCallingCodes: ['+856'],
          currencies: ['LAK'],
          emoji: '🇱🇦',
          ioc: 'LAO',
          languages: ['lao'],
          name: "Lao People's Democratic Republic",
          status: 'assigned',
        },
        {
          alpha2: 'LB',
          alpha3: 'LBN',
          countryCallingCodes: ['+961'],
          currencies: ['LBP'],
          emoji: '🇱🇧',
          ioc: 'LIB',
          languages: ['ara', 'hye'],
          name: 'Lebanon',
          status: 'assigned',
        },
        {
          alpha2: 'LC',
          alpha3: 'LCA',
          countryCallingCodes: ['+1 758'],
          currencies: ['XCD'],
          emoji: '🇱🇨',
          ioc: 'LCA',
          languages: ['eng'],
          name: 'Saint Lucia',
          status: 'assigned',
        },
        {
          alpha2: 'LI',
          alpha3: 'LIE',
          countryCallingCodes: ['+423'],
          currencies: ['CHF'],
          emoji: '🇱🇮',
          ioc: 'LIE',
          languages: ['deu'],
          name: 'Liechtenstein',
          status: 'assigned',
        },
        {
          alpha2: 'LK',
          alpha3: 'LKA',
          countryCallingCodes: ['+94'],
          currencies: ['LKR'],
          emoji: '🇱🇰',
          ioc: 'SRI',
          languages: ['sin', 'tam'],
          name: 'Sri Lanka',
          status: 'assigned',
        },
        {
          alpha2: 'LR',
          alpha3: 'LBR',
          countryCallingCodes: ['+231'],
          currencies: ['LRD'],
          emoji: '🇱🇷',
          ioc: 'LBR',
          languages: ['eng'],
          name: 'Liberia',
          status: 'assigned',
        },
        {
          alpha2: 'LS',
          alpha3: 'LSO',
          countryCallingCodes: ['+266'],
          currencies: ['LSL', 'ZAR'],
          emoji: '🇱🇸',
          ioc: 'LES',
          languages: ['eng', 'sot'],
          name: 'Lesotho',
          status: 'assigned',
        },
        {
          alpha2: 'LT',
          alpha3: 'LTU',
          countryCallingCodes: ['+370'],
          currencies: ['EUR'],
          emoji: '🇱🇹',
          ioc: 'LTU',
          languages: ['lit'],
          name: 'Lithuania',
          status: 'assigned',
        },
        {
          alpha2: 'LU',
          alpha3: 'LUX',
          countryCallingCodes: ['+352'],
          currencies: ['EUR'],
          emoji: '🇱🇺',
          ioc: 'LUX',
          languages: ['fra', 'deu', 'ltz'],
          name: 'Luxembourg',
          status: 'assigned',
        },
        {
          alpha2: 'LV',
          alpha3: 'LVA',
          countryCallingCodes: ['+371'],
          currencies: ['EUR'],
          emoji: '🇱🇻',
          ioc: 'LAT',
          languages: ['lav'],
          name: 'Latvia',
          status: 'assigned',
        },
        {
          alpha2: 'LY',
          alpha3: 'LBY',
          countryCallingCodes: ['+218'],
          currencies: ['LYD'],
          emoji: '🇱🇾',
          ioc: 'LBA',
          languages: ['ara'],
          name: 'Libya',
          status: 'assigned',
        },
        {
          alpha2: 'MA',
          alpha3: 'MAR',
          countryCallingCodes: ['+212'],
          currencies: ['MAD'],
          emoji: '🇲🇦',
          ioc: 'MAR',
          languages: ['ara'],
          name: 'Morocco',
          status: 'assigned',
        },
        {
          alpha2: 'MC',
          alpha3: 'MCO',
          countryCallingCodes: ['+377'],
          currencies: ['EUR'],
          emoji: '🇲🇨',
          ioc: 'MON',
          languages: ['fra'],
          name: 'Monaco',
          status: 'assigned',
        },
        {
          alpha2: 'MD',
          alpha3: 'MDA',
          countryCallingCodes: ['+373'],
          currencies: ['MDL'],
          emoji: '🇲🇩',
          ioc: 'MDA',
          languages: ['ron'],
          name: 'Moldova',
          status: 'assigned',
        },
        {
          alpha2: 'ME',
          alpha3: 'MNE',
          countryCallingCodes: ['+382'],
          currencies: ['EUR'],
          emoji: '🇲🇪',
          ioc: 'MNE',
          languages: ['mot'],
          name: 'Montenegro',
          status: 'assigned',
        },
        {
          alpha2: 'MF',
          alpha3: 'MAF',
          countryCallingCodes: ['+590'],
          currencies: ['EUR'],
          emoji: '🇲🇫',
          ioc: '',
          languages: ['fra'],
          name: 'Saint Martin',
          status: 'assigned',
        },
        {
          alpha2: 'MG',
          alpha3: 'MDG',
          countryCallingCodes: ['+261'],
          currencies: ['MGA'],
          emoji: '🇲🇬',
          ioc: 'MAD',
          languages: ['fra', 'mlg'],
          name: 'Madagascar',
          status: 'assigned',
        },
        {
          alpha2: 'MH',
          alpha3: 'MHL',
          countryCallingCodes: ['+692'],
          currencies: ['USD'],
          emoji: '🇲🇭',
          ioc: 'MHL',
          languages: ['eng', 'mah'],
          name: 'Marshall Islands',
          status: 'assigned',
        },
        {
          alpha2: 'MI',
          alpha3: 'MID',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Midway Islands',
          status: 'deleted',
        },
        {
          alpha2: 'MK',
          alpha3: 'MKD',
          countryCallingCodes: ['+389'],
          currencies: ['MKD'],
          emoji: '🇲🇰',
          ioc: 'MKD',
          languages: ['mkd'],
          name: 'Macedonia, The Former Yugoslav Republic Of',
          status: 'assigned',
        },
        {
          alpha2: 'ML',
          alpha3: 'MLI',
          countryCallingCodes: ['+223'],
          currencies: ['XOF'],
          emoji: '🇲🇱',
          ioc: 'MLI',
          languages: ['fra'],
          name: 'Mali',
          status: 'assigned',
        },
        {
          alpha2: 'MM',
          alpha3: 'MMR',
          countryCallingCodes: ['+95'],
          currencies: ['MMK'],
          emoji: '🇲🇲',
          ioc: 'MYA',
          languages: ['mya'],
          name: 'Myanmar',
          status: 'assigned',
        },
        {
          alpha2: 'MN',
          alpha3: 'MNG',
          countryCallingCodes: ['+976'],
          currencies: ['MNT'],
          emoji: '🇲🇳',
          ioc: 'MGL',
          languages: ['mon'],
          name: 'Mongolia',
          status: 'assigned',
        },
        {
          alpha2: 'MO',
          alpha3: 'MAC',
          countryCallingCodes: ['+853'],
          currencies: ['MOP'],
          emoji: '🇲🇴',
          ioc: 'MAC',
          languages: ['zho', 'por'],
          name: 'Macao',
          status: 'assigned',
        },
        {
          alpha2: 'MP',
          alpha3: 'MNP',
          countryCallingCodes: ['+1 670'],
          currencies: ['USD'],
          emoji: '🇲🇵',
          ioc: '',
          languages: ['eng'],
          name: 'Northern Mariana Islands',
          status: 'assigned',
        },
        {
          alpha2: 'MQ',
          alpha3: 'MTQ',
          countryCallingCodes: ['+596'],
          currencies: ['EUR'],
          emoji: '🇲🇶',
          ioc: '',
          languages: [],
          name: 'Martinique',
          status: 'assigned',
        },
        {
          alpha2: 'MR',
          alpha3: 'MRT',
          countryCallingCodes: ['+222'],
          currencies: ['MRO'],
          emoji: '🇲🇷',
          ioc: 'MTN',
          languages: ['ara', 'fra'],
          name: 'Mauritania',
          status: 'assigned',
        },
        {
          alpha2: 'MS',
          alpha3: 'MSR',
          countryCallingCodes: ['+1 664'],
          currencies: ['XCD'],
          emoji: '🇲🇸',
          ioc: '',
          languages: [],
          name: 'Montserrat',
          status: 'assigned',
        },
        {
          alpha2: 'MT',
          alpha3: 'MLT',
          countryCallingCodes: ['+356'],
          currencies: ['EUR'],
          emoji: '🇲🇹',
          ioc: 'MLT',
          languages: ['mlt', 'eng'],
          name: 'Malta',
          status: 'assigned',
        },
        {
          alpha2: 'MU',
          alpha3: 'MUS',
          countryCallingCodes: ['+230'],
          currencies: ['MUR'],
          emoji: '🇲🇺',
          ioc: 'MRI',
          languages: ['eng', 'fra'],
          name: 'Mauritius',
          status: 'assigned',
        },
        {
          alpha2: 'MV',
          alpha3: 'MDV',
          countryCallingCodes: ['+960'],
          currencies: ['MVR'],
          emoji: '🇲🇻',
          ioc: 'MDV',
          languages: ['div'],
          name: 'Maldives',
          status: 'assigned',
        },
        {
          alpha2: 'MW',
          alpha3: 'MWI',
          countryCallingCodes: ['+265'],
          currencies: ['MWK'],
          emoji: '🇲🇼',
          ioc: 'MAW',
          languages: ['eng', 'nya'],
          name: 'Malawi',
          status: 'assigned',
        },
        {
          alpha2: 'MX',
          alpha3: 'MEX',
          countryCallingCodes: ['+52'],
          currencies: ['MXN', 'MXV'],
          emoji: '🇲🇽',
          ioc: 'MEX',
          languages: ['spa'],
          name: 'Mexico',
          status: 'assigned',
        },
        {
          alpha2: 'MY',
          alpha3: 'MYS',
          countryCallingCodes: ['+60'],
          currencies: ['MYR'],
          emoji: '🇲🇾',
          ioc: 'MAS',
          languages: ['msa', 'eng'],
          name: 'Malaysia',
          status: 'assigned',
        },
        {
          alpha2: 'MZ',
          alpha3: 'MOZ',
          countryCallingCodes: ['+258'],
          currencies: ['MZN'],
          emoji: '🇲🇿',
          ioc: 'MOZ',
          languages: ['por'],
          name: 'Mozambique',
          status: 'assigned',
        },
        {
          alpha2: 'NA',
          alpha3: 'NAM',
          countryCallingCodes: ['+264'],
          currencies: ['NAD', 'ZAR'],
          emoji: '🇳🇦',
          ioc: 'NAM',
          languages: ['eng'],
          name: 'Namibia',
          status: 'assigned',
        },
        {
          alpha2: 'NC',
          alpha3: 'NCL',
          countryCallingCodes: ['+687'],
          currencies: ['XPF'],
          emoji: '🇳🇨',
          ioc: '',
          languages: ['fra'],
          name: 'New Caledonia',
          status: 'assigned',
        },
        {
          alpha2: 'NE',
          alpha3: 'NER',
          countryCallingCodes: ['+227'],
          currencies: ['XOF'],
          emoji: '🇳🇪',
          ioc: 'NIG',
          languages: ['fra'],
          name: 'Niger',
          status: 'assigned',
        },
        {
          alpha2: 'NF',
          alpha3: 'NFK',
          countryCallingCodes: ['+672'],
          currencies: ['AUD'],
          emoji: '🇳🇫',
          ioc: '',
          languages: ['eng'],
          name: 'Norfolk Island',
          status: 'assigned',
        },
        {
          alpha2: 'NG',
          alpha3: 'NGA',
          countryCallingCodes: ['+234'],
          currencies: ['NGN'],
          emoji: '🇳🇬',
          ioc: 'NGR',
          languages: ['eng'],
          name: 'Nigeria',
          status: 'assigned',
        },
        {
          alpha2: 'NH',
          alpha3: 'NHB',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'New Hebrides',
          status: 'deleted',
        },
        {
          alpha2: 'NI',
          alpha3: 'NIC',
          countryCallingCodes: ['+505'],
          currencies: ['NIO'],
          emoji: '🇳🇮',
          ioc: 'NCA',
          languages: ['spa'],
          name: 'Nicaragua',
          status: 'assigned',
        },
        {
          alpha2: 'NL',
          alpha3: 'NLD',
          countryCallingCodes: ['+31'],
          currencies: ['EUR'],
          emoji: '🇳🇱',
          ioc: 'NED',
          languages: ['nld'],
          name: 'Netherlands',
          status: 'assigned',
        },
        {
          alpha2: 'NO',
          alpha3: 'NOR',
          countryCallingCodes: ['+47'],
          currencies: ['NOK'],
          emoji: '🇳🇴',
          ioc: 'NOR',
          languages: ['nor'],
          name: 'Norway',
          status: 'assigned',
        },
        {
          alpha2: 'NP',
          alpha3: 'NPL',
          countryCallingCodes: ['+977'],
          currencies: ['NPR'],
          emoji: '🇳🇵',
          ioc: 'NEP',
          languages: ['nep'],
          name: 'Nepal',
          status: 'assigned',
        },
        {
          alpha2: 'NQ',
          alpha3: 'ATN',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Dronning Maud Land',
          status: 'deleted',
        },
        {
          alpha2: 'NR',
          alpha3: 'NRU',
          countryCallingCodes: ['+674'],
          currencies: ['AUD'],
          emoji: '🇳🇷',
          ioc: 'NRU',
          languages: ['eng', 'nau'],
          name: 'Nauru',
          status: 'assigned',
        },
        {
          alpha2: 'NT',
          alpha3: 'NTZ',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Neutral Zone',
          status: 'deleted',
        },
        {
          alpha2: 'NU',
          alpha3: 'NIU',
          countryCallingCodes: ['+683'],
          currencies: ['NZD'],
          emoji: '🇳🇺',
          ioc: '',
          languages: ['eng'],
          name: 'Niue',
          status: 'assigned',
        },
        {
          alpha2: 'NZ',
          alpha3: 'NZL',
          countryCallingCodes: ['+64'],
          currencies: ['NZD'],
          emoji: '🇳🇿',
          ioc: 'NZL',
          languages: ['eng'],
          name: 'New Zealand',
          status: 'assigned',
        },
        {
          alpha2: 'OM',
          alpha3: 'OMN',
          countryCallingCodes: ['+968'],
          currencies: ['OMR'],
          emoji: '🇴🇲',
          ioc: 'OMA',
          languages: ['ara'],
          name: 'Oman',
          status: 'assigned',
        },
        {
          alpha2: 'PA',
          alpha3: 'PAN',
          countryCallingCodes: ['+507'],
          currencies: ['PAB', 'USD'],
          emoji: '🇵🇦',
          ioc: 'PAN',
          languages: ['spa'],
          name: 'Panama',
          status: 'assigned',
        },
        {
          alpha2: 'PC',
          alpha3: 'PCI',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Pacific Islands, Trust Territory of the',
          status: 'deleted',
        },
        {
          alpha2: 'PE',
          alpha3: 'PER',
          countryCallingCodes: ['+51'],
          currencies: ['PEN'],
          emoji: '🇵🇪',
          ioc: 'PER',
          languages: ['spa', 'aym', 'que'],
          name: 'Peru',
          status: 'assigned',
        },
        {
          alpha2: 'PF',
          alpha3: 'PYF',
          countryCallingCodes: ['+689'],
          currencies: ['XPF'],
          emoji: '🇵🇫',
          ioc: '',
          languages: ['fra'],
          name: 'French Polynesia',
          status: 'assigned',
        },
        {
          alpha2: 'PG',
          alpha3: 'PNG',
          countryCallingCodes: ['+675'],
          currencies: ['PGK'],
          emoji: '🇵🇬',
          ioc: 'PNG',
          languages: ['eng'],
          name: 'Papua New Guinea',
          status: 'assigned',
        },
        {
          alpha2: 'PH',
          alpha3: 'PHL',
          countryCallingCodes: ['+63'],
          currencies: ['PHP'],
          emoji: '🇵🇭',
          ioc: 'PHI',
          languages: ['eng'],
          name: 'Philippines',
          status: 'assigned',
        },
        {
          alpha2: 'PK',
          alpha3: 'PAK',
          countryCallingCodes: ['+92'],
          currencies: ['PKR'],
          emoji: '🇵🇰',
          ioc: 'PAK',
          languages: ['urd', 'eng'],
          name: 'Pakistan',
          status: 'assigned',
        },
        {
          alpha2: 'PL',
          alpha3: 'POL',
          countryCallingCodes: ['+48'],
          currencies: ['PLN'],
          emoji: '🇵🇱',
          ioc: 'POL',
          languages: ['pol'],
          name: 'Poland',
          status: 'assigned',
        },
        {
          alpha2: 'PM',
          alpha3: 'SPM',
          countryCallingCodes: ['+508'],
          currencies: ['EUR'],
          emoji: '🇵🇲',
          ioc: '',
          languages: ['eng'],
          name: 'Saint Pierre And Miquelon',
          status: 'assigned',
        },
        {
          alpha2: 'PN',
          alpha3: 'PCN',
          countryCallingCodes: ['+872'],
          currencies: ['NZD'],
          emoji: '🇵🇳',
          ioc: '',
          languages: ['eng'],
          name: 'Pitcairn',
          status: 'assigned',
        },
        {
          alpha2: 'PR',
          alpha3: 'PRI',
          countryCallingCodes: ['+1 787', '+1 939'],
          currencies: ['USD'],
          emoji: '🇵🇷',
          ioc: 'PUR',
          languages: ['spa', 'eng'],
          name: 'Puerto Rico',
          status: 'assigned',
        },
        {
          alpha2: 'PS',
          alpha3: 'PSE',
          countryCallingCodes: ['+970'],
          currencies: ['JOD', 'EGP', 'ILS'],
          emoji: '🇵🇸',
          ioc: 'PLE',
          languages: ['ara'],
          name: 'Palestinian Territory, Occupied',
          status: 'assigned',
        },
        {
          alpha2: 'PT',
          alpha3: 'PRT',
          countryCallingCodes: ['+351'],
          currencies: ['EUR'],
          emoji: '🇵🇹',
          ioc: 'POR',
          languages: ['por'],
          name: 'Portugal',
          status: 'assigned',
        },
        {
          alpha2: 'PU',
          alpha3: 'PUS',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'U.S. Miscellaneous Pacific Islands',
          status: 'deleted',
        },
        {
          alpha2: 'PW',
          alpha3: 'PLW',
          countryCallingCodes: ['+680'],
          currencies: ['USD'],
          emoji: '🇵🇼',
          ioc: 'PLW',
          languages: ['eng'],
          name: 'Palau',
          status: 'assigned',
        },
        {
          alpha2: 'PY',
          alpha3: 'PRY',
          countryCallingCodes: ['+595'],
          currencies: ['PYG'],
          emoji: '🇵🇾',
          ioc: 'PAR',
          languages: ['spa'],
          name: 'Paraguay',
          status: 'assigned',
        },
        {
          alpha2: 'PZ',
          alpha3: 'PCZ',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Panama Canal Zone',
          status: 'deleted',
        },
        {
          alpha2: 'QA',
          alpha3: 'QAT',
          countryCallingCodes: ['+974'],
          currencies: ['QAR'],
          emoji: '🇶🇦',
          ioc: 'QAT',
          languages: ['ara'],
          name: 'Qatar',
          status: 'assigned',
        },
        {
          alpha2: 'RE',
          alpha3: 'REU',
          countryCallingCodes: ['+262'],
          currencies: ['EUR'],
          emoji: '🇷🇪',
          ioc: '',
          languages: ['fra'],
          name: 'Reunion',
          status: 'assigned',
        },
        {
          alpha2: 'RH',
          alpha3: 'RHO',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Southern Rhodesia',
          status: 'deleted',
        },
        {
          alpha2: 'RO',
          alpha3: 'ROU',
          countryCallingCodes: ['+40'],
          currencies: ['RON'],
          emoji: '🇷🇴',
          ioc: 'ROU',
          languages: ['ron'],
          name: 'Romania',
          status: 'assigned',
        },
        {
          alpha2: 'RS',
          alpha3: 'SRB',
          countryCallingCodes: ['+381'],
          currencies: ['RSD'],
          emoji: '🇷🇸',
          ioc: 'SRB',
          languages: ['srp'],
          name: 'Serbia',
          status: 'assigned',
        },
        {
          alpha2: 'RU',
          alpha3: 'RUS',
          countryCallingCodes: ['+7', '+7 3', '+7 4', '+7 8'],
          currencies: ['RUB'],
          emoji: '🇷🇺',
          ioc: 'RUS',
          languages: ['rus'],
          name: 'Russia',
          status: 'assigned',
        },
        {
          alpha2: 'RW',
          alpha3: 'RWA',
          countryCallingCodes: ['+250'],
          currencies: ['RWF'],
          emoji: '🇷🇼',
          ioc: 'RWA',
          languages: ['eng', 'fra', 'kin'],
          name: 'Rwanda',
          status: 'assigned',
        },
        {
          alpha2: 'SA',
          alpha3: 'SAU',
          countryCallingCodes: ['+966'],
          currencies: ['SAR'],
          emoji: '🇸🇦',
          ioc: 'KSA',
          languages: ['ara'],
          name: 'Saudi Arabia',
          status: 'assigned',
        },
        {
          alpha2: 'SB',
          alpha3: 'SLB',
          countryCallingCodes: ['+677'],
          currencies: ['SBD'],
          emoji: '🇸🇧',
          ioc: 'SOL',
          languages: ['eng'],
          name: 'Solomon Islands',
          status: 'assigned',
        },
        {
          alpha2: 'SC',
          alpha3: 'SYC',
          countryCallingCodes: ['+248'],
          currencies: ['SCR'],
          emoji: '🇸🇨',
          ioc: 'SEY',
          languages: ['eng', 'fra'],
          name: 'Seychelles',
          status: 'assigned',
        },
        {
          alpha2: 'SD',
          alpha3: 'SDN',
          countryCallingCodes: ['+249'],
          currencies: ['SDG'],
          emoji: '🇸🇩',
          ioc: 'SUD',
          languages: ['ara', 'eng'],
          name: 'Sudan',
          status: 'assigned',
        },
        {
          alpha2: 'SE',
          alpha3: 'SWE',
          countryCallingCodes: ['+46'],
          currencies: ['SEK'],
          emoji: '🇸🇪',
          ioc: 'SWE',
          languages: ['swe'],
          name: 'Sweden',
          status: 'assigned',
        },
        {
          alpha2: 'SG',
          alpha3: 'SGP',
          countryCallingCodes: ['+65'],
          currencies: ['SGD'],
          emoji: '🇸🇬',
          ioc: 'SIN',
          languages: ['eng', 'zho', 'msa', 'tam'],
          name: 'Singapore',
          status: 'assigned',
        },
        {
          alpha2: 'SH',
          alpha3: 'SHN',
          countryCallingCodes: ['+290'],
          currencies: ['SHP'],
          emoji: '🇸🇭',
          ioc: '',
          languages: ['eng'],
          name: 'Saint Helena, Ascension And Tristan Da Cunha',
          status: 'assigned',
        },
        {
          alpha2: 'SI',
          alpha3: 'SVN',
          countryCallingCodes: ['+386'],
          currencies: ['EUR'],
          emoji: '🇸🇮',
          ioc: 'SLO',
          languages: ['slv'],
          name: 'Slovenia',
          status: 'assigned',
        },
        {
          alpha2: 'SJ',
          alpha3: 'SJM',
          countryCallingCodes: ['+47'],
          currencies: ['NOK'],
          emoji: '🇸🇯',
          ioc: '',
          languages: [],
          name: 'Svalbard And Jan Mayen',
          status: 'assigned',
        },
        {
          alpha2: 'SK',
          alpha3: 'SVK',
          countryCallingCodes: ['+421'],
          currencies: ['EUR'],
          emoji: '🇸🇰',
          ioc: 'SVK',
          languages: ['slk'],
          name: 'Slovakia',
          status: 'assigned',
        },
        {
          alpha2: 'SK',
          alpha3: 'SKM',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Sikkim',
          status: 'deleted',
        },
        {
          alpha2: 'SL',
          alpha3: 'SLE',
          countryCallingCodes: ['+232'],
          currencies: ['SLL'],
          emoji: '🇸🇱',
          ioc: 'SLE',
          languages: ['eng'],
          name: 'Sierra Leone',
          status: 'assigned',
        },
        {
          alpha2: 'SM',
          alpha3: 'SMR',
          countryCallingCodes: ['+378'],
          currencies: ['EUR'],
          emoji: '🇸🇲',
          ioc: 'SMR',
          languages: ['ita'],
          name: 'San Marino',
          status: 'assigned',
        },
        {
          alpha2: 'SN',
          alpha3: 'SEN',
          countryCallingCodes: ['+221'],
          currencies: ['XOF'],
          emoji: '🇸🇳',
          ioc: 'SEN',
          languages: ['fra'],
          name: 'Senegal',
          status: 'assigned',
        },
        {
          alpha2: 'SO',
          alpha3: 'SOM',
          countryCallingCodes: ['+252'],
          currencies: ['SOS'],
          emoji: '🇸🇴',
          ioc: 'SOM',
          languages: ['som'],
          name: 'Somalia',
          status: 'assigned',
        },
        {
          alpha2: 'SR',
          alpha3: 'SUR',
          countryCallingCodes: ['+597'],
          currencies: ['SRD'],
          emoji: '🇸🇷',
          ioc: 'SUR',
          languages: ['nld'],
          name: 'Suriname',
          status: 'assigned',
        },
        {
          alpha2: 'SS',
          alpha3: 'SSD',
          countryCallingCodes: ['+211'],
          currencies: ['SSP'],
          emoji: '🇸🇸',
          ioc: 'SSD',
          languages: ['eng'],
          name: 'South Sudan',
          status: 'assigned',
        },
        {
          alpha2: 'ST',
          alpha3: 'STP',
          countryCallingCodes: ['+239'],
          currencies: ['STD'],
          emoji: '🇸🇹',
          ioc: 'STP',
          languages: ['por'],
          name: 'Sao Tome and Principe',
          status: 'assigned',
        },
        {
          alpha2: 'SU',
          alpha3: '',
          countryCallingCodes: [],
          currencies: ['RUB'],
          emoji: '',
          ioc: '',
          languages: ['rus'],
          name: 'USSR',
          status: 'reserved',
        },
        {
          alpha2: 'SV',
          alpha3: 'SLV',
          countryCallingCodes: ['+503'],
          currencies: ['USD'],
          emoji: '🇸🇻',
          ioc: 'ESA',
          languages: ['spa'],
          name: 'El Salvador',
          status: 'assigned',
        },
        {
          alpha2: 'SX',
          alpha3: 'SXM',
          countryCallingCodes: ['+1 721'],
          currencies: ['ANG'],
          emoji: '🇸🇽',
          ioc: '',
          languages: ['nld'],
          name: 'Sint Maarten',
          status: 'assigned',
        },
        {
          alpha2: 'SY',
          alpha3: 'SYR',
          countryCallingCodes: ['+963'],
          currencies: ['SYP'],
          emoji: '🇸🇾',
          ioc: 'SYR',
          languages: ['ara'],
          name: 'Syrian Arab Republic',
          status: 'assigned',
        },
        {
          alpha2: 'SZ',
          alpha3: 'SWZ',
          countryCallingCodes: ['+268'],
          currencies: ['SZL'],
          emoji: '🇸🇿',
          ioc: 'SWZ',
          languages: ['eng', 'ssw'],
          name: 'Swaziland',
          status: 'assigned',
        },
        {
          alpha2: 'TA',
          alpha3: '',
          countryCallingCodes: ['+290'],
          currencies: ['GBP'],
          emoji: '',
          ioc: '',
          languages: [],
          name: 'Tristan de Cunha',
          status: 'reserved',
        },
        {
          alpha2: 'TC',
          alpha3: 'TCA',
          countryCallingCodes: ['+1 649'],
          currencies: ['USD'],
          emoji: '🇹🇨',
          ioc: '',
          languages: ['eng'],
          name: 'Turks And Caicos Islands',
          status: 'assigned',
        },
        {
          alpha2: 'TD',
          alpha3: 'TCD',
          countryCallingCodes: ['+235'],
          currencies: ['XAF'],
          emoji: '🇹🇩',
          ioc: 'CHA',
          languages: ['ara', 'fra'],
          name: 'Chad',
          status: 'assigned',
        },
        {
          alpha2: 'TF',
          alpha3: 'ATF',
          countryCallingCodes: [],
          currencies: ['EUR'],
          emoji: '🇹🇫',
          ioc: '',
          languages: ['fra'],
          name: 'French Southern Territories',
          status: 'assigned',
        },
        {
          alpha2: 'TG',
          alpha3: 'TGO',
          countryCallingCodes: ['+228'],
          currencies: ['XOF'],
          emoji: '🇹🇬',
          ioc: 'TOG',
          languages: ['fra'],
          name: 'Togo',
          status: 'assigned',
        },
        {
          alpha2: 'TH',
          alpha3: 'THA',
          countryCallingCodes: ['+66'],
          currencies: ['THB'],
          emoji: '🇹🇭',
          ioc: 'THA',
          languages: ['tha'],
          name: 'Thailand',
          status: 'assigned',
        },
        {
          alpha2: 'TJ',
          alpha3: 'TJK',
          countryCallingCodes: ['+992'],
          currencies: ['TJS'],
          emoji: '🇹🇯',
          ioc: 'TJK',
          languages: ['tgk', 'rus'],
          name: 'Tajikistan',
          status: 'assigned',
        },
        {
          alpha2: 'TK',
          alpha3: 'TKL',
          countryCallingCodes: ['+690'],
          currencies: ['NZD'],
          emoji: '🇹🇰',
          ioc: '',
          languages: ['eng'],
          name: 'Tokelau',
          status: 'assigned',
        },
        {
          alpha2: 'TL',
          alpha3: 'TLS',
          countryCallingCodes: ['+670'],
          currencies: ['USD'],
          emoji: '🇹🇱',
          ioc: 'TLS',
          languages: ['por'],
          name: 'Timor-Leste, Democratic Republic of',
          status: 'assigned',
        },
        {
          alpha2: 'TM',
          alpha3: 'TKM',
          countryCallingCodes: ['+993'],
          currencies: ['TMT'],
          emoji: '🇹🇲',
          ioc: 'TKM',
          languages: ['tuk', 'rus'],
          name: 'Turkmenistan',
          status: 'assigned',
        },
        {
          alpha2: 'TN',
          alpha3: 'TUN',
          countryCallingCodes: ['+216'],
          currencies: ['TND'],
          emoji: '🇹🇳',
          ioc: 'TUN',
          languages: ['ara'],
          name: 'Tunisia',
          status: 'assigned',
        },
        {
          alpha2: 'TO',
          alpha3: 'TON',
          countryCallingCodes: ['+676'],
          currencies: ['TOP'],
          emoji: '🇹🇴',
          ioc: 'TGA',
          languages: ['eng'],
          name: 'Tonga',
          status: 'assigned',
        },
        {
          alpha2: 'TP',
          alpha3: 'TMP',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'East Timor',
          status: 'deleted',
        },
        {
          alpha2: 'TR',
          alpha3: 'TUR',
          countryCallingCodes: ['+90'],
          currencies: ['TRY'],
          emoji: '🇹🇷',
          ioc: 'TUR',
          languages: ['tur'],
          name: 'Turkey',
          status: 'assigned',
        },
        {
          alpha2: 'TT',
          alpha3: 'TTO',
          countryCallingCodes: ['+1 868'],
          currencies: ['TTD'],
          emoji: '🇹🇹',
          ioc: 'TTO',
          languages: ['eng'],
          name: 'Trinidad And Tobago',
          status: 'assigned',
        },
        {
          alpha2: 'TV',
          alpha3: 'TUV',
          countryCallingCodes: ['+688'],
          currencies: ['AUD'],
          emoji: '🇹🇻',
          ioc: 'TUV',
          languages: ['eng'],
          name: 'Tuvalu',
          status: 'assigned',
        },
        {
          alpha2: 'TW',
          alpha3: 'TWN',
          countryCallingCodes: ['+886'],
          currencies: ['TWD'],
          emoji: '🇹🇼',
          ioc: 'TPE',
          languages: ['zho'],
          name: 'Taiwan',
          status: 'assigned',
        },
        {
          alpha2: 'TZ',
          alpha3: 'TZA',
          countryCallingCodes: ['+255'],
          currencies: ['TZS'],
          emoji: '🇹🇿',
          ioc: 'TAN',
          languages: ['swa', 'eng'],
          name: 'Tanzania, United Republic Of',
          status: 'assigned',
        },
        {
          alpha2: 'UA',
          alpha3: 'UKR',
          countryCallingCodes: ['+380'],
          currencies: ['UAH'],
          emoji: '🇺🇦',
          ioc: 'UKR',
          languages: ['ukr', 'rus'],
          name: 'Ukraine',
          status: 'assigned',
        },
        {
          alpha2: 'UG',
          alpha3: 'UGA',
          countryCallingCodes: ['+256'],
          currencies: ['UGX'],
          emoji: '🇺🇬',
          ioc: 'UGA',
          languages: ['eng', 'swa'],
          name: 'Uganda',
          status: 'assigned',
        },
        {
          alpha2: 'UM',
          alpha3: 'UMI',
          countryCallingCodes: ['+1'],
          currencies: ['USD'],
          emoji: '🇺🇲',
          ioc: '',
          languages: ['eng'],
          name: 'United States Minor Outlying Islands',
          status: 'assigned',
        },
        {
          alpha2: 'US',
          alpha3: 'USA',
          countryCallingCodes: ['+1'],
          currencies: ['USD'],
          emoji: '🇺🇸',
          ioc: 'USA',
          languages: ['eng'],
          name: 'United States',
          status: 'assigned',
        },
        {
          alpha2: 'UY',
          alpha3: 'URY',
          countryCallingCodes: ['+598'],
          currencies: ['UYU', 'UYI'],
          emoji: '🇺🇾',
          ioc: 'URU',
          languages: ['spa'],
          name: 'Uruguay',
          status: 'assigned',
        },
        {
          alpha2: 'UZ',
          alpha3: 'UZB',
          countryCallingCodes: ['+998'],
          currencies: ['UZS'],
          emoji: '🇺🇿',
          ioc: 'UZB',
          languages: ['uzb', 'rus'],
          name: 'Uzbekistan',
          status: 'assigned',
        },
        {
          alpha2: 'VA',
          alpha3: 'VAT',
          countryCallingCodes: ['+379', '+39'],
          currencies: ['EUR'],
          emoji: '🇻🇦',
          ioc: '',
          languages: ['ita'],
          name: 'Vatican City State',
          status: 'assigned',
        },
        {
          alpha2: 'VC',
          alpha3: 'VCT',
          countryCallingCodes: ['+1 784'],
          currencies: ['XCD'],
          emoji: '🇻🇨',
          ioc: 'VIN',
          languages: ['eng'],
          name: 'Saint Vincent And The Grenadines',
          status: 'assigned',
        },
        {
          alpha2: 'VD',
          alpha3: 'VDR',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Viet-Nam, Democratic Republic of',
          status: 'deleted',
        },
        {
          alpha2: 'VE',
          alpha3: 'VEN',
          countryCallingCodes: ['+58'],
          currencies: ['VEF'],
          emoji: '🇻🇪',
          ioc: 'VEN',
          languages: ['spa'],
          name: 'Venezuela, Bolivarian Republic Of',
          status: 'assigned',
        },
        {
          alpha2: 'VG',
          alpha3: 'VGB',
          countryCallingCodes: ['+1 284'],
          currencies: ['USD'],
          emoji: '🇻🇬',
          ioc: 'IVB',
          languages: ['eng'],
          name: 'Virgin Islands (British)',
          status: 'assigned',
        },
        {
          alpha2: 'VI',
          alpha3: 'VIR',
          countryCallingCodes: ['+1 340'],
          currencies: ['USD'],
          emoji: '🇻🇮',
          ioc: 'ISV',
          languages: ['eng'],
          name: 'Virgin Islands (US)',
          status: 'assigned',
        },
        {
          alpha2: 'VN',
          alpha3: 'VNM',
          countryCallingCodes: ['+84'],
          currencies: ['VND'],
          emoji: '🇻🇳',
          ioc: 'VIE',
          languages: ['vie'],
          name: 'Viet Nam',
          status: 'assigned',
        },
        {
          alpha2: 'VU',
          alpha3: 'VUT',
          countryCallingCodes: ['+678'],
          currencies: ['VUV'],
          emoji: '🇻🇺',
          ioc: 'VAN',
          languages: ['bis', 'eng', 'fra'],
          name: 'Vanuatu',
          status: 'assigned',
        },
        {
          alpha2: 'WF',
          alpha3: 'WLF',
          countryCallingCodes: ['+681'],
          currencies: ['XPF'],
          emoji: '🇼🇫',
          ioc: '',
          languages: ['fra'],
          name: 'Wallis And Futuna',
          status: 'assigned',
        },
        {
          alpha2: 'WK',
          alpha3: 'WAK',
          countryCallingCodes: [],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Wake Island',
          status: 'deleted',
        },
        {
          alpha2: 'WS',
          alpha3: 'WSM',
          countryCallingCodes: ['+685'],
          currencies: ['WST'],
          emoji: '🇼🇸',
          ioc: 'SAM',
          languages: ['eng', 'smo'],
          name: 'Samoa',
          status: 'assigned',
        },
        {
          alpha2: 'XK',
          alpha3: '',
          countryCallingCodes: ['+383'],
          currencies: ['EUR'],
          emoji: '',
          ioc: 'KOS',
          languages: ['sqi', 'srp', 'bos', 'tur', 'rom'],
          name: 'Kosovo',
          status: 'user assigned',
        },
        {
          alpha2: 'YD',
          alpha3: 'YMD',
          countryCallingCodes: ['+967'],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Yemen, Democratic',
          status: 'deleted',
        },
        {
          alpha2: 'YE',
          alpha3: 'YEM',
          countryCallingCodes: ['+967'],
          currencies: ['YER'],
          emoji: '🇾🇪',
          ioc: 'YEM',
          languages: ['ara'],
          name: 'Yemen',
          status: 'assigned',
        },
        {
          alpha2: 'YT',
          alpha3: 'MYT',
          countryCallingCodes: ['+262'],
          currencies: ['EUR'],
          emoji: '🇾🇹',
          ioc: '',
          languages: ['fra'],
          name: 'Mayotte',
          status: 'assigned',
        },
        {
          alpha2: 'YU',
          alpha3: 'YUG',
          countryCallingCodes: ['+38'],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Yugoslavia',
          status: 'deleted',
        },
        {
          alpha2: 'ZA',
          alpha3: 'ZAF',
          countryCallingCodes: ['+27'],
          currencies: ['ZAR'],
          emoji: '🇿🇦',
          ioc: 'RSA',
          languages: ['afr', 'eng', 'nbl', 'som', 'tso', 'ven', 'xho', 'zul'],
          name: 'South Africa',
          status: 'assigned',
        },
        {
          alpha2: 'ZM',
          alpha3: 'ZMB',
          countryCallingCodes: ['+260'],
          currencies: ['ZMW'],
          emoji: '🇿🇲',
          ioc: 'ZAM',
          languages: ['eng'],
          name: 'Zambia',
          status: 'assigned',
        },
        {
          alpha2: 'ZR',
          alpha3: 'ZAR',
          countryCallingCodes: ['+243'],
          currencies: [],
          ioc: '',
          languages: [],
          name: 'Zaire',
          status: 'deleted',
        },
        {
          alpha2: 'ZW',
          alpha3: 'ZWE',
          countryCallingCodes: ['+263'],
          currencies: ['USD', 'ZAR', 'BWP', 'GBP', 'EUR'],
          emoji: '🇿🇼',
          ioc: 'ZIM',
          languages: ['eng', 'sna', 'nde'],
          name: 'Zimbabwe',
          status: 'assigned',
        },
      ],
      s = [
        {
          code: 'AED',
          decimals: 2,
          name: 'United Arab Emirates dirham',
          number: '784',
        },
        { code: 'AFN', decimals: 2, name: 'Afghan afghani', number: '971' },
        { code: 'ALL', decimals: 2, name: 'Albanian lek', number: '8' },
        { code: 'AMD', decimals: 2, name: 'Armenian dram', number: '51' },
        {
          code: 'ANG',
          decimals: 2,
          name: 'Netherlands Antillean guilder',
          number: '532',
        },
        { code: 'AOA', decimals: 2, name: 'Angolan kwanza', number: '973' },
        { code: 'ARS', decimals: 2, name: 'Argentine peso', number: '32' },
        { code: 'AUD', decimals: 2, name: 'Australian dollar', number: '36' },
        { code: 'AWG', decimals: 2, name: 'Aruban florin', number: '533' },
        { code: 'AZN', decimals: 2, name: 'Azerbaijani manat', number: '944' },
        {
          code: 'BAM',
          decimals: 2,
          name: 'Bosnia and Herzegovina convertible mark',
          number: '977',
        },
        { code: 'BBD', decimals: 2, name: 'Barbados dollar', number: '52' },
        { code: 'BDT', decimals: 2, name: 'Bangladeshi taka', number: '50' },
        { code: 'BGN', decimals: 2, name: 'Bulgarian lev', number: '975' },
        { code: 'BHD', decimals: 3, name: 'Bahraini dinar', number: '48' },
        { code: 'BIF', decimals: 0, name: 'Burundian franc', number: '108' },
        {
          code: 'BMD',
          decimals: 2,
          name: 'Bermudian dollar (customarily known as Bermuda dollar)',
          number: '60',
        },
        { code: 'BND', decimals: 2, name: 'Brunei dollar', number: '96' },
        { code: 'BOB', decimals: 2, name: 'Boliviano', number: '68' },
        {
          code: 'BOV',
          decimals: 2,
          name: 'Bolivian Mvdol (funds code)',
          number: '984',
        },
        { code: 'BRL', decimals: 2, name: 'Brazilian real', number: '986' },
        { code: 'BSD', decimals: 2, name: 'Bahamian dollar', number: '44' },
        { code: 'BTN', decimals: 2, name: 'Bhutanese ngultrum', number: '64' },
        { code: 'BWP', decimals: 2, name: 'Botswana pula', number: '72' },
        { code: 'BYN', decimals: 0, name: 'Belarusian ruble', number: '974' },
        { code: 'BZD', decimals: 2, name: 'Belize dollar', number: '84' },
        { code: 'CAD', decimals: 2, name: 'Canadian dollar', number: '124' },
        { code: 'CDF', decimals: 2, name: 'Congolese franc', number: '976' },
        {
          code: 'CHE',
          decimals: 2,
          name: 'WIR Euro (complementary currency)',
          number: '947',
        },
        { code: 'CHF', decimals: 2, name: 'Swiss franc', number: '756' },
        {
          code: 'CHW',
          decimals: 2,
          name: 'WIR Franc (complementary currency)',
          number: '948',
        },
        {
          code: 'CLF',
          decimals: 0,
          name: 'Unidad de Fomento (funds code)',
          number: '990',
        },
        { code: 'CLP', decimals: 0, name: 'Chilean peso', number: '152' },
        { code: 'CNY', decimals: 2, name: 'Chinese yuan', number: '156' },
        { code: 'COP', decimals: 2, name: 'Colombian peso', number: '170' },
        {
          code: 'COU',
          decimals: 2,
          name: 'Unidad de Valor Real',
          number: '970',
        },
        { code: 'CRC', decimals: 2, name: 'Costa Rican colon', number: '188' },
        {
          code: 'CUC',
          decimals: 2,
          name: 'Cuban convertible peso',
          number: '931',
        },
        { code: 'CUP', decimals: 2, name: 'Cuban peso', number: '192' },
        { code: 'CVE', decimals: 0, name: 'Cape Verde escudo', number: '132' },
        { code: 'CZK', decimals: 2, name: 'Czech koruna', number: '203' },
        { code: 'DJF', decimals: 0, name: 'Djiboutian franc', number: '262' },
        { code: 'DKK', decimals: 2, name: 'Danish krone', number: '208' },
        { code: 'DOP', decimals: 2, name: 'Dominican peso', number: '214' },
        { code: 'DZD', decimals: 2, name: 'Algerian dinar', number: '12' },
        { code: 'EGP', decimals: 2, name: 'Egyptian pound', number: '818' },
        { code: 'ERN', decimals: 2, name: 'Eritrean nakfa', number: '232' },
        { code: 'ETB', decimals: 2, name: 'Ethiopian birr', number: '230' },
        { code: 'EUR', decimals: 2, name: 'Euro', number: '978' },
        { code: 'FJD', decimals: 2, name: 'Fiji dollar', number: '242' },
        {
          code: 'FKP',
          decimals: 2,
          name: 'Falkland Islands pound',
          number: '238',
        },
        { code: 'GBP', decimals: 2, name: 'Pound sterling', number: '826' },
        { code: 'GEL', decimals: 2, name: 'Georgian lari', number: '981' },
        { code: 'GHS', decimals: 2, name: 'Ghanaian cedi', number: '936' },
        { code: 'GIP', decimals: 2, name: 'Gibraltar pound', number: '292' },
        { code: 'GMD', decimals: 2, name: 'Gambian dalasi', number: '270' },
        { code: 'GNF', decimals: 0, name: 'Guinean franc', number: '324' },
        { code: 'GTQ', decimals: 2, name: 'Guatemalan quetzal', number: '320' },
        { code: 'GYD', decimals: 2, name: 'Guyanese dollar', number: '328' },
        { code: 'HKD', decimals: 2, name: 'Hong Kong dollar', number: '344' },
        { code: 'HNL', decimals: 2, name: 'Honduran lempira', number: '340' },
        { code: 'HRK', decimals: 2, name: 'Croatian kuna', number: '191' },
        { code: 'HTG', decimals: 2, name: 'Haitian gourde', number: '332' },
        { code: 'HUF', decimals: 2, name: 'Hungarian forint', number: '348' },
        { code: 'IDR', decimals: 2, name: 'Indonesian rupiah', number: '360' },
        { code: 'ILS', decimals: 2, name: 'Israeli new shekel', number: '376' },
        { code: 'INR', decimals: 2, name: 'Indian rupee', number: '356' },
        { code: 'IQD', decimals: 3, name: 'Iraqi dinar', number: '368' },
        { code: 'IRR', decimals: 0, name: 'Iranian rial', number: '364' },
        { code: 'ISK', decimals: 0, name: 'Icelandic króna', number: '352' },
        { code: 'JMD', decimals: 2, name: 'Jamaican dollar', number: '388' },
        { code: 'JOD', decimals: 3, name: 'Jordanian dinar', number: '400' },
        { code: 'JPY', decimals: 0, name: 'Japanese yen', number: '392' },
        { code: 'KES', decimals: 2, name: 'Kenyan shilling', number: '404' },
        { code: 'KGS', decimals: 2, name: 'Kyrgyzstani som', number: '417' },
        { code: 'KHR', decimals: 2, name: 'Cambodian riel', number: '116' },
        { code: 'KMF', decimals: 0, name: 'Comoro franc', number: '174' },
        { code: 'KPW', decimals: 0, name: 'North Korean won', number: '408' },
        { code: 'KRW', decimals: 0, name: 'South Korean won', number: '410' },
        { code: 'KWD', decimals: 3, name: 'Kuwaiti dinar', number: '414' },
        {
          code: 'KYD',
          decimals: 2,
          name: 'Cayman Islands dollar',
          number: '136',
        },
        { code: 'KZT', decimals: 2, name: 'Kazakhstani tenge', number: '398' },
        { code: 'LAK', decimals: 0, name: 'Lao kip', number: '418' },
        { code: 'LBP', decimals: 0, name: 'Lebanese pound', number: '422' },
        { code: 'LKR', decimals: 2, name: 'Sri Lankan rupee', number: '144' },
        { code: 'LRD', decimals: 2, name: 'Liberian dollar', number: '430' },
        { code: 'LSL', decimals: 2, name: 'Lesotho loti', number: '426' },
        { code: 'EUR', decimals: 2, name: 'Lithuanian litas', number: '440' },
        { code: 'LVL', decimals: 2, name: 'Latvian lats', number: '428' },
        { code: 'LYD', decimals: 3, name: 'Libyan dinar', number: '434' },
        { code: 'MAD', decimals: 2, name: 'Moroccan dirham', number: '504' },
        { code: 'MDL', decimals: 2, name: 'Moldovan leu', number: '498' },
        { code: 'MGA', decimals: 0, name: 'Malagasy ariary', number: '969' },
        { code: 'MKD', decimals: 0, name: 'Macedonian denar', number: '807' },
        { code: 'MMK', decimals: 0, name: 'Myanma kyat', number: '104' },
        { code: 'MNT', decimals: 2, name: 'Mongolian tugrik', number: '496' },
        { code: 'MOP', decimals: 2, name: 'Macanese pataca', number: '446' },
        {
          code: 'MRO',
          decimals: 0,
          name: 'Mauritanian ouguiya',
          number: '478',
        },
        { code: 'MUR', decimals: 2, name: 'Mauritian rupee', number: '480' },
        { code: 'MVR', decimals: 2, name: 'Maldivian rufiyaa', number: '462' },
        { code: 'MWK', decimals: 2, name: 'Malawian kwacha', number: '454' },
        { code: 'MXN', decimals: 2, name: 'Mexican peso', number: '484' },
        {
          code: 'MXV',
          decimals: 2,
          name: 'Mexican Unidad de Inversion (UDI) (funds code)',
          number: '979',
        },
        { code: 'MYR', decimals: 2, name: 'Malaysian ringgit', number: '458' },
        { code: 'MZN', decimals: 2, name: 'Mozambican metical', number: '943' },
        { code: 'NAD', decimals: 2, name: 'Namibian dollar', number: '516' },
        { code: 'NGN', decimals: 2, name: 'Nigerian naira', number: '566' },
        { code: 'NIO', decimals: 2, name: 'Nicaraguan córdoba', number: '558' },
        { code: 'NOK', decimals: 2, name: 'Norwegian krone', number: '578' },
        { code: 'NPR', decimals: 2, name: 'Nepalese rupee', number: '524' },
        { code: 'NZD', decimals: 2, name: 'New Zealand dollar', number: '554' },
        { code: 'OMR', decimals: 3, name: 'Omani rial', number: '512' },
        { code: 'PAB', decimals: 2, name: 'Panamanian balboa', number: '590' },
        { code: 'PEN', decimals: 2, name: 'Peruvian nuevo sol', number: '604' },
        {
          code: 'PGK',
          decimals: 2,
          name: 'Papua New Guinean kina',
          number: '598',
        },
        { code: 'PHP', decimals: 2, name: 'Philippine peso', number: '608' },
        { code: 'PKR', decimals: 2, name: 'Pakistani rupee', number: '586' },
        { code: 'PLN', decimals: 2, name: 'Polish złoty', number: '985' },
        { code: 'PYG', decimals: 0, name: 'Paraguayan guaraní', number: '600' },
        { code: 'QAR', decimals: 2, name: 'Qatari riyal', number: '634' },
        { code: 'RON', decimals: 2, name: 'Romanian new leu', number: '946' },
        { code: 'RSD', decimals: 2, name: 'Serbian dinar', number: '941' },
        { code: 'RUB', decimals: 2, name: 'Russian rouble', number: '643' },
        { code: 'RWF', decimals: 0, name: 'Rwandan franc', number: '646' },
        { code: 'SAR', decimals: 2, name: 'Saudi riyal', number: '682' },
        {
          code: 'SBD',
          decimals: 2,
          name: 'Solomon Islands dollar',
          number: '90',
        },
        { code: 'SCR', decimals: 2, name: 'Seychelles rupee', number: '690' },
        { code: 'SDG', decimals: 2, name: 'Sudanese pound', number: '938' },
        {
          code: 'SEK',
          decimals: 2,
          name: 'Swedish krona/kronor',
          number: '752',
        },
        { code: 'SGD', decimals: 2, name: 'Singapore dollar', number: '702' },
        { code: 'SHP', decimals: 2, name: 'Saint Helena pound', number: '654' },
        {
          code: 'SLL',
          decimals: 0,
          name: 'Sierra Leonean leone',
          number: '694',
        },
        { code: 'SOS', decimals: 2, name: 'Somali shilling', number: '706' },
        { code: 'SRD', decimals: 2, name: 'Surinamese dollar', number: '968' },
        {
          code: 'SSP',
          decimals: 2,
          name: 'South Sudanese pound',
          number: '728',
        },
        {
          code: 'STD',
          decimals: 0,
          name: 'São Tomé and Príncipe dobra',
          number: '678',
        },
        { code: 'SYP', decimals: 2, name: 'Syrian pound', number: '760' },
        { code: 'SZL', decimals: 2, name: 'Swazi lilangeni', number: '748' },
        { code: 'THB', decimals: 2, name: 'Thai baht', number: '764' },
        { code: 'TJS', decimals: 2, name: 'Tajikistani somoni', number: '972' },
        {
          code: 'TMT',
          decimals: 2,
          name: 'Turkmenistani manat',
          number: '934',
        },
        { code: 'TND', decimals: 3, name: 'Tunisian dinar', number: '788' },
        { code: 'TOP', decimals: 2, name: 'Tongan paʻanga', number: '776' },
        { code: 'TRY', decimals: 2, name: 'Turkish lira', number: '949' },
        {
          code: 'TTD',
          decimals: 2,
          name: 'Trinidad and Tobago dollar',
          number: '780',
        },
        { code: 'TWD', decimals: 2, name: 'New Taiwan dollar', number: '901' },
        { code: 'TZS', decimals: 2, name: 'Tanzanian shilling', number: '834' },
        { code: 'UAH', decimals: 2, name: 'Ukrainian hryvnia', number: '980' },
        { code: 'UGX', decimals: 2, name: 'Ugandan shilling', number: '800' },
        {
          code: 'USD',
          decimals: 2,
          name: 'United States dollar',
          number: '840',
        },
        {
          code: 'USN',
          decimals: 2,
          name: 'United States dollar (next day) (funds code)',
          number: '997',
        },
        {
          code: 'USS',
          decimals: 2,
          name:
            'United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)',
          number: '998',
        },
        {
          code: 'UYI',
          decimals: 0,
          name: 'Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)',
          number: '940',
        },
        { code: 'UYU', decimals: 2, name: 'Uruguayan peso', number: '858' },
        { code: 'UZS', decimals: 2, name: 'Uzbekistan som', number: '860' },
        {
          code: 'VEF',
          decimals: 2,
          name: 'Venezuelan bolívar fuerte',
          number: '937',
        },
        { code: 'VND', decimals: 0, name: 'Vietnamese dong', number: '704' },
        { code: 'VUV', decimals: 0, name: 'Vanuatu vatu', number: '548' },
        { code: 'WST', decimals: 2, name: 'Samoan tala', number: '882' },
        { code: 'XAF', decimals: 0, name: 'CFA franc BEAC', number: '950' },
        {
          code: 'XAG',
          decimals: null,
          name: 'Silver (one troy ounce)',
          number: '961',
        },
        {
          code: 'XAU',
          decimals: null,
          name: 'Gold (one troy ounce)',
          number: '959',
        },
        {
          code: 'XBA',
          decimals: null,
          name: 'European Composite Unit (EURCO) (bond market unit)',
          number: '955',
        },
        {
          code: 'XBB',
          decimals: null,
          name: 'European Monetary Unit (E.M.U.-6) (bond market unit)',
          number: '956',
        },
        {
          code: 'XBC',
          decimals: null,
          name: 'European Unit of Account 9 (E.U.A.-9) (bond market unit)',
          number: '957',
        },
        {
          code: 'XBD',
          decimals: null,
          name: 'European Unit of Account 17 (E.U.A.-17) (bond market unit)',
          number: '958',
        },
        {
          code: 'XCD',
          decimals: 2,
          name: 'East Caribbean dollar',
          number: '951',
        },
        {
          code: 'XDR',
          decimals: null,
          name: 'Special drawing rights',
          number: '960',
        },
        {
          code: 'XFU',
          decimals: null,
          name: 'UIC franc (special settlement currency)',
          number: 'Nil',
        },
        { code: 'XOF', decimals: 0, name: 'CFA franc BCEAO', number: '952' },
        {
          code: 'XPD',
          decimals: null,
          name: 'Palladium (one troy ounce)',
          number: '964',
        },
        { code: 'XPF', decimals: 0, name: 'CFP franc', number: '953' },
        {
          code: 'XPT',
          decimals: null,
          name: 'Platinum (one troy ounce)',
          number: '962',
        },
        {
          code: 'XTS',
          decimals: null,
          name: 'Code reserved for testing purposes',
          number: '963',
        },
        { code: 'XXX', decimals: null, name: 'No currency', number: '999' },
        { code: 'YER', decimals: 2, name: 'Yemeni rial', number: '886' },
        { code: 'ZAR', decimals: 2, name: 'South African rand', number: '710' },
        { code: 'ZMW', decimals: 2, name: 'Zambian kwacha', number: '967' },
        { code: 'EEK', decimals: 2, name: 'Estonian kroon', number: '233' },
      ],
      c = [
        { alpha2: 'aa', alpha3: 'aar', bibliographic: '', name: 'Afar' },
        { alpha2: 'ab', alpha3: 'abk', bibliographic: '', name: 'Abkhazian' },
        { alpha2: '', alpha3: 'ace', bibliographic: '', name: 'Achinese' },
        { alpha2: '', alpha3: 'ach', bibliographic: '', name: 'Acoli' },
        { alpha2: '', alpha3: 'ada', bibliographic: '', name: 'Adangme' },
        { alpha2: '', alpha3: 'ady', bibliographic: '', name: 'Adygei' },
        { alpha2: '', alpha3: 'ady', bibliographic: '', name: 'Adyghe' },
        {
          alpha2: '',
          alpha3: 'afa',
          bibliographic: '',
          name: 'Afro-Asiatic languages',
        },
        { alpha2: '', alpha3: 'afh', bibliographic: '', name: 'Afrihili' },
        { alpha2: 'af', alpha3: 'afr', bibliographic: '', name: 'Afrikaans' },
        { alpha2: '', alpha3: 'ain', bibliographic: '', name: 'Ainu' },
        { alpha2: 'ak', alpha3: 'aka', bibliographic: '', name: 'Akan' },
        { alpha2: '', alpha3: 'akk', bibliographic: '', name: 'Akkadian' },
        { alpha2: '', alpha3: 'ale', bibliographic: '', name: 'Aleut' },
        {
          alpha2: '',
          alpha3: 'alg',
          bibliographic: '',
          name: 'Algonquian languages',
        },
        {
          alpha2: '',
          alpha3: 'alt',
          bibliographic: '',
          name: 'Southern Altai',
        },
        { alpha2: 'am', alpha3: 'amh', bibliographic: '', name: 'Amharic' },
        {
          alpha2: '',
          alpha3: 'ang',
          bibliographic: '',
          name: 'English, Old (ca.450-1100)',
        },
        { alpha2: '', alpha3: 'anp', bibliographic: '', name: 'Angika' },
        {
          alpha2: '',
          alpha3: 'apa',
          bibliographic: '',
          name: 'Apache languages',
        },
        { alpha2: 'ar', alpha3: 'ara', bibliographic: '', name: 'Arabic' },
        {
          alpha2: '',
          alpha3: 'arc',
          bibliographic: '',
          name: 'Imperial Aramaic (700-300 BCE)',
        },
        {
          alpha2: '',
          alpha3: 'arc',
          bibliographic: '',
          name: 'Official Aramaic (700-300 BCE)',
        },
        { alpha2: 'an', alpha3: 'arg', bibliographic: '', name: 'Aragonese' },
        { alpha2: '', alpha3: 'arn', bibliographic: '', name: 'Mapuche' },
        { alpha2: '', alpha3: 'arn', bibliographic: '', name: 'Mapudungun' },
        { alpha2: '', alpha3: 'arp', bibliographic: '', name: 'Arapaho' },
        {
          alpha2: '',
          alpha3: 'art',
          bibliographic: '',
          name: 'Artificial languages',
        },
        { alpha2: '', alpha3: 'arw', bibliographic: '', name: 'Arawak' },
        { alpha2: 'as', alpha3: 'asm', bibliographic: '', name: 'Assamese' },
        { alpha2: '', alpha3: 'ast', bibliographic: '', name: 'Asturian' },
        { alpha2: '', alpha3: 'ast', bibliographic: '', name: 'Asturleonese' },
        { alpha2: '', alpha3: 'ast', bibliographic: '', name: 'Bable' },
        { alpha2: '', alpha3: 'ast', bibliographic: '', name: 'Leonese' },
        {
          alpha2: '',
          alpha3: 'ath',
          bibliographic: '',
          name: 'Athapascan languages',
        },
        {
          alpha2: '',
          alpha3: 'aus',
          bibliographic: '',
          name: 'Australian languages',
        },
        { alpha2: 'av', alpha3: 'ava', bibliographic: '', name: 'Avaric' },
        { alpha2: 'ae', alpha3: 'ave', bibliographic: '', name: 'Avestan' },
        { alpha2: '', alpha3: 'awa', bibliographic: '', name: 'Awadhi' },
        { alpha2: 'ay', alpha3: 'aym', bibliographic: '', name: 'Aymara' },
        { alpha2: 'az', alpha3: 'aze', bibliographic: '', name: 'Azerbaijani' },
        {
          alpha2: '',
          alpha3: 'bad',
          bibliographic: '',
          name: 'Banda languages',
        },
        {
          alpha2: '',
          alpha3: 'bai',
          bibliographic: '',
          name: 'Bamileke languages',
        },
        { alpha2: 'ba', alpha3: 'bak', bibliographic: '', name: 'Bashkir' },
        { alpha2: '', alpha3: 'bal', bibliographic: '', name: 'Baluchi' },
        { alpha2: 'bm', alpha3: 'bam', bibliographic: '', name: 'Bambara' },
        { alpha2: '', alpha3: 'ban', bibliographic: '', name: 'Balinese' },
        { alpha2: '', alpha3: 'bas', bibliographic: '', name: 'Basa' },
        {
          alpha2: '',
          alpha3: 'bat',
          bibliographic: '',
          name: 'Baltic languages',
        },
        { alpha2: '', alpha3: 'bej', bibliographic: '', name: 'Bedawiyet' },
        { alpha2: '', alpha3: 'bej', bibliographic: '', name: 'Beja' },
        { alpha2: 'be', alpha3: 'bel', bibliographic: '', name: 'Belarusian' },
        { alpha2: '', alpha3: 'bem', bibliographic: '', name: 'Bemba' },
        { alpha2: 'bn', alpha3: 'ben', bibliographic: '', name: 'Bengali' },
        {
          alpha2: '',
          alpha3: 'ber',
          bibliographic: '',
          name: 'Berber languages',
        },
        { alpha2: '', alpha3: 'bho', bibliographic: '', name: 'Bhojpuri' },
        {
          alpha2: 'bh',
          alpha3: 'bih',
          bibliographic: '',
          name: 'Bihari languages',
        },
        { alpha2: '', alpha3: 'bik', bibliographic: '', name: 'Bikol' },
        { alpha2: '', alpha3: 'bin', bibliographic: '', name: 'Bini' },
        { alpha2: '', alpha3: 'bin', bibliographic: '', name: 'Edo' },
        { alpha2: 'bi', alpha3: 'bis', bibliographic: '', name: 'Bislama' },
        { alpha2: '', alpha3: 'bla', bibliographic: '', name: 'Siksika' },
        {
          alpha2: '',
          alpha3: 'bnt',
          bibliographic: '',
          name: 'Bantu languages',
        },
        { alpha2: 'bo', alpha3: 'bod', bibliographic: 'tib', name: 'Tibetan' },
        { alpha2: 'bs', alpha3: 'bos', bibliographic: '', name: 'Bosnian' },
        { alpha2: '', alpha3: 'bra', bibliographic: '', name: 'Braj' },
        { alpha2: 'br', alpha3: 'bre', bibliographic: '', name: 'Breton' },
        {
          alpha2: '',
          alpha3: 'btk',
          bibliographic: '',
          name: 'Batak languages',
        },
        { alpha2: '', alpha3: 'bua', bibliographic: '', name: 'Buriat' },
        { alpha2: '', alpha3: 'bug', bibliographic: '', name: 'Buginese' },
        { alpha2: 'bg', alpha3: 'bul', bibliographic: '', name: 'Bulgarian' },
        { alpha2: '', alpha3: 'byn', bibliographic: '', name: 'Bilin' },
        { alpha2: '', alpha3: 'byn', bibliographic: '', name: 'Blin' },
        { alpha2: '', alpha3: 'cad', bibliographic: '', name: 'Caddo' },
        {
          alpha2: '',
          alpha3: 'cai',
          bibliographic: '',
          name: 'Central American Indian languages',
        },
        { alpha2: '', alpha3: 'car', bibliographic: '', name: 'Galibi Carib' },
        { alpha2: 'ca', alpha3: 'cat', bibliographic: '', name: 'Catalan' },
        { alpha2: 'ca', alpha3: 'cat', bibliographic: '', name: 'Valencian' },
        {
          alpha2: '',
          alpha3: 'cau',
          bibliographic: '',
          name: 'Caucasian languages',
        },
        { alpha2: '', alpha3: 'ceb', bibliographic: '', name: 'Cebuano' },
        {
          alpha2: '',
          alpha3: 'cel',
          bibliographic: '',
          name: 'Celtic languages',
        },
        { alpha2: 'cs', alpha3: 'ces', bibliographic: 'cze', name: 'Czech' },
        { alpha2: 'ch', alpha3: 'cha', bibliographic: '', name: 'Chamorro' },
        { alpha2: '', alpha3: 'chb', bibliographic: '', name: 'Chibcha' },
        { alpha2: 'ce', alpha3: 'che', bibliographic: '', name: 'Chechen' },
        { alpha2: '', alpha3: 'chg', bibliographic: '', name: 'Chagatai' },
        { alpha2: '', alpha3: 'chk', bibliographic: '', name: 'Chuukese' },
        { alpha2: '', alpha3: 'chm', bibliographic: '', name: 'Mari' },
        {
          alpha2: '',
          alpha3: 'chn',
          bibliographic: '',
          name: 'Chinook jargon',
        },
        { alpha2: '', alpha3: 'cho', bibliographic: '', name: 'Choctaw' },
        { alpha2: '', alpha3: 'chp', bibliographic: '', name: 'Chipewyan' },
        { alpha2: '', alpha3: 'chp', bibliographic: '', name: 'Dene Suline' },
        { alpha2: '', alpha3: 'chr', bibliographic: '', name: 'Cherokee' },
        {
          alpha2: 'cu',
          alpha3: 'chu',
          bibliographic: '',
          name: 'Church Slavic',
        },
        {
          alpha2: 'cu',
          alpha3: 'chu',
          bibliographic: '',
          name: 'Church Slavonic',
        },
        {
          alpha2: 'cu',
          alpha3: 'chu',
          bibliographic: '',
          name: 'Old Bulgarian',
        },
        {
          alpha2: 'cu',
          alpha3: 'chu',
          bibliographic: '',
          name: 'Old Church Slavonic',
        },
        {
          alpha2: 'cu',
          alpha3: 'chu',
          bibliographic: '',
          name: 'Old Slavonic',
        },
        { alpha2: 'cv', alpha3: 'chv', bibliographic: '', name: 'Chuvash' },
        { alpha2: '', alpha3: 'chy', bibliographic: '', name: 'Cheyenne' },
        {
          alpha2: '',
          alpha3: 'cmc',
          bibliographic: '',
          name: 'Chamic languages',
        },
        { alpha2: '', alpha3: 'cop', bibliographic: '', name: 'Coptic' },
        { alpha2: 'kw', alpha3: 'cor', bibliographic: '', name: 'Cornish' },
        { alpha2: 'co', alpha3: 'cos', bibliographic: '', name: 'Corsican' },
        {
          alpha2: '',
          alpha3: 'cpe',
          bibliographic: '',
          name: 'Creoles and pidgins, English based',
        },
        {
          alpha2: '',
          alpha3: 'cpf',
          bibliographic: '',
          name: 'Creoles and pidgins, French-based',
        },
        {
          alpha2: '',
          alpha3: 'cpp',
          bibliographic: '',
          name: 'Creoles and pidgins, Portuguese-based',
        },
        { alpha2: 'cr', alpha3: 'cre', bibliographic: '', name: 'Cree' },
        { alpha2: '', alpha3: 'crh', bibliographic: '', name: 'Crimean Tatar' },
        {
          alpha2: '',
          alpha3: 'crh',
          bibliographic: '',
          name: 'Crimean Turkish',
        },
        {
          alpha2: '',
          alpha3: 'crp',
          bibliographic: '',
          name: 'Creoles and pidgins',
        },
        { alpha2: '', alpha3: 'csb', bibliographic: '', name: 'Kashubian' },
        {
          alpha2: '',
          alpha3: 'cus',
          bibliographic: '',
          name: 'Cushitic languages',
        },
        { alpha2: 'cy', alpha3: 'cym', bibliographic: 'wel', name: 'Welsh' },
        { alpha2: '', alpha3: 'dak', bibliographic: '', name: 'Dakota' },
        { alpha2: 'da', alpha3: 'dan', bibliographic: '', name: 'Danish' },
        { alpha2: '', alpha3: 'dar', bibliographic: '', name: 'Dargwa' },
        {
          alpha2: '',
          alpha3: 'day',
          bibliographic: '',
          name: 'Land Dayak languages',
        },
        { alpha2: '', alpha3: 'del', bibliographic: '', name: 'Delaware' },
        {
          alpha2: '',
          alpha3: 'den',
          bibliographic: '',
          name: 'Slave (Athapascan)',
        },
        { alpha2: 'de', alpha3: 'deu', bibliographic: 'ger', name: 'German' },
        { alpha2: '', alpha3: 'dgr', bibliographic: '', name: 'Dogrib' },
        { alpha2: '', alpha3: 'din', bibliographic: '', name: 'Dinka' },
        { alpha2: 'dv', alpha3: 'div', bibliographic: '', name: 'Dhivehi' },
        { alpha2: 'dv', alpha3: 'div', bibliographic: '', name: 'Divehi' },
        { alpha2: 'dv', alpha3: 'div', bibliographic: '', name: 'Maldivian' },
        { alpha2: '', alpha3: 'doi', bibliographic: '', name: 'Dogri' },
        {
          alpha2: '',
          alpha3: 'dra',
          bibliographic: '',
          name: 'Dravidian languages',
        },
        { alpha2: '', alpha3: 'dsb', bibliographic: '', name: 'Lower Sorbian' },
        { alpha2: '', alpha3: 'dua', bibliographic: '', name: 'Duala' },
        {
          alpha2: '',
          alpha3: 'dum',
          bibliographic: '',
          name: 'Dutch, Middle (ca.1050-1350)',
        },
        { alpha2: '', alpha3: 'dyu', bibliographic: '', name: 'Dyula' },
        { alpha2: 'dz', alpha3: 'dzo', bibliographic: '', name: 'Dzongkha' },
        { alpha2: '', alpha3: 'efi', bibliographic: '', name: 'Efik' },
        {
          alpha2: '',
          alpha3: 'egy',
          bibliographic: '',
          name: 'Egyptian (Ancient)',
        },
        { alpha2: '', alpha3: 'eka', bibliographic: '', name: 'Ekajuk' },
        { alpha2: 'el', alpha3: 'ell', bibliographic: 'gre', name: 'Greek' },
        { alpha2: '', alpha3: 'elx', bibliographic: '', name: 'Elamite' },
        { alpha2: 'en', alpha3: 'eng', bibliographic: '', name: 'English' },
        {
          alpha2: '',
          alpha3: 'enm',
          bibliographic: '',
          name: 'English, Middle (1100-1500)',
        },
        { alpha2: 'eo', alpha3: 'epo', bibliographic: '', name: 'Esperanto' },
        { alpha2: 'et', alpha3: 'est', bibliographic: '', name: 'Estonian' },
        { alpha2: 'eu', alpha3: 'eus', bibliographic: 'baq', name: 'Basque' },
        { alpha2: 'ee', alpha3: 'ewe', bibliographic: '', name: 'Ewe' },
        { alpha2: '', alpha3: 'ewo', bibliographic: '', name: 'Ewondo' },
        { alpha2: '', alpha3: 'fan', bibliographic: '', name: 'Fang' },
        { alpha2: 'fo', alpha3: 'fao', bibliographic: '', name: 'Faroese' },
        { alpha2: 'fa', alpha3: 'fas', bibliographic: 'per', name: 'Persian' },
        { alpha2: '', alpha3: 'fat', bibliographic: '', name: 'Fanti' },
        { alpha2: 'fj', alpha3: 'fij', bibliographic: '', name: 'Fijian' },
        { alpha2: '', alpha3: 'fil', bibliographic: '', name: 'Filipino' },
        { alpha2: '', alpha3: 'fil', bibliographic: '', name: 'Pilipino' },
        { alpha2: 'fi', alpha3: 'fin', bibliographic: '', name: 'Finnish' },
        {
          alpha2: '',
          alpha3: 'fiu',
          bibliographic: '',
          name: 'Finno-Ugrian languages',
        },
        { alpha2: '', alpha3: 'fon', bibliographic: '', name: 'Fon' },
        { alpha2: 'fr', alpha3: 'fra', bibliographic: 'fre', name: 'French' },
        {
          alpha2: '',
          alpha3: 'frm',
          bibliographic: '',
          name: 'French, Middle (ca.1400-1600)',
        },
        {
          alpha2: '',
          alpha3: 'fro',
          bibliographic: '',
          name: 'French, Old (842-ca.1400)',
        },
        {
          alpha2: '',
          alpha3: 'frr',
          bibliographic: '',
          name: 'Northern Frisian',
        },
        {
          alpha2: '',
          alpha3: 'frs',
          bibliographic: '',
          name: 'Eastern Frisian',
        },
        {
          alpha2: 'fy',
          alpha3: 'fry',
          bibliographic: '',
          name: 'Western Frisian',
        },
        { alpha2: 'ff', alpha3: 'ful', bibliographic: '', name: 'Fulah' },
        { alpha2: '', alpha3: 'fur', bibliographic: '', name: 'Friulian' },
        { alpha2: '', alpha3: 'gaa', bibliographic: '', name: 'Ga' },
        { alpha2: '', alpha3: 'gay', bibliographic: '', name: 'Gayo' },
        { alpha2: '', alpha3: 'gba', bibliographic: '', name: 'Gbaya' },
        {
          alpha2: '',
          alpha3: 'gem',
          bibliographic: '',
          name: 'Germanic languages',
        },
        { alpha2: '', alpha3: 'gez', bibliographic: '', name: 'Geez' },
        { alpha2: '', alpha3: 'gil', bibliographic: '', name: 'Gilbertese' },
        { alpha2: 'gd', alpha3: 'gla', bibliographic: '', name: 'Gaelic' },
        {
          alpha2: 'gd',
          alpha3: 'gla',
          bibliographic: '',
          name: 'Scottish Gaelic',
        },
        { alpha2: 'ga', alpha3: 'gle', bibliographic: '', name: 'Irish' },
        { alpha2: 'gl', alpha3: 'glg', bibliographic: '', name: 'Galician' },
        { alpha2: 'gv', alpha3: 'glv', bibliographic: '', name: 'Manx' },
        {
          alpha2: '',
          alpha3: 'gmh',
          bibliographic: '',
          name: 'German, Middle High (ca.1050-1500)',
        },
        {
          alpha2: '',
          alpha3: 'goh',
          bibliographic: '',
          name: 'German, Old High (ca.750-1050)',
        },
        { alpha2: '', alpha3: 'gon', bibliographic: '', name: 'Gondi' },
        { alpha2: '', alpha3: 'gor', bibliographic: '', name: 'Gorontalo' },
        { alpha2: '', alpha3: 'got', bibliographic: '', name: 'Gothic' },
        { alpha2: '', alpha3: 'grb', bibliographic: '', name: 'Grebo' },
        {
          alpha2: '',
          alpha3: 'grc',
          bibliographic: '',
          name: 'Greek, Ancient (to 1453)',
        },
        { alpha2: 'gn', alpha3: 'grn', bibliographic: '', name: 'Guarani' },
        { alpha2: '', alpha3: 'gsw', bibliographic: '', name: 'Alemannic' },
        { alpha2: '', alpha3: 'gsw', bibliographic: '', name: 'Alsatian' },
        { alpha2: '', alpha3: 'gsw', bibliographic: '', name: 'Swiss German' },
        { alpha2: 'gu', alpha3: 'guj', bibliographic: '', name: 'Gujarati' },
        { alpha2: '', alpha3: 'gwi', bibliographic: '', name: "Gwich'in" },
        { alpha2: '', alpha3: 'hai', bibliographic: '', name: 'Haida' },
        { alpha2: 'ht', alpha3: 'hat', bibliographic: '', name: 'Haitian' },
        {
          alpha2: 'ht',
          alpha3: 'hat',
          bibliographic: '',
          name: 'Haitian Creole',
        },
        { alpha2: 'ha', alpha3: 'hau', bibliographic: '', name: 'Hausa' },
        { alpha2: '', alpha3: 'haw', bibliographic: '', name: 'Hawaiian' },
        { alpha2: 'he', alpha3: 'heb', bibliographic: '', name: 'Hebrew' },
        { alpha2: 'hz', alpha3: 'her', bibliographic: '', name: 'Herero' },
        { alpha2: '', alpha3: 'hil', bibliographic: '', name: 'Hiligaynon' },
        {
          alpha2: '',
          alpha3: 'him',
          bibliographic: '',
          name: 'Himachali languages',
        },
        {
          alpha2: '',
          alpha3: 'him',
          bibliographic: '',
          name: 'Western Pahari languages',
        },
        { alpha2: 'hi', alpha3: 'hin', bibliographic: '', name: 'Hindi' },
        { alpha2: '', alpha3: 'hit', bibliographic: '', name: 'Hittite' },
        { alpha2: '', alpha3: 'hmn', bibliographic: '', name: 'Hmong' },
        { alpha2: '', alpha3: 'hmn', bibliographic: '', name: 'Mong' },
        { alpha2: 'ho', alpha3: 'hmo', bibliographic: '', name: 'Hiri Motu' },
        { alpha2: 'hr', alpha3: 'hrv', bibliographic: '', name: 'Croatian' },
        { alpha2: '', alpha3: 'hsb', bibliographic: '', name: 'Upper Sorbian' },
        { alpha2: 'hu', alpha3: 'hun', bibliographic: '', name: 'Hungarian' },
        { alpha2: '', alpha3: 'hup', bibliographic: '', name: 'Hupa' },
        { alpha2: 'hy', alpha3: 'hye', bibliographic: 'arm', name: 'Armenian' },
        { alpha2: '', alpha3: 'iba', bibliographic: '', name: 'Iban' },
        { alpha2: 'ig', alpha3: 'ibo', bibliographic: '', name: 'Igbo' },
        { alpha2: 'io', alpha3: 'ido', bibliographic: '', name: 'Ido' },
        { alpha2: 'ii', alpha3: 'iii', bibliographic: '', name: 'Nuosu' },
        { alpha2: 'ii', alpha3: 'iii', bibliographic: '', name: 'Sichuan Yi' },
        { alpha2: '', alpha3: 'ijo', bibliographic: '', name: 'Ijo languages' },
        { alpha2: 'iu', alpha3: 'iku', bibliographic: '', name: 'Inuktitut' },
        { alpha2: 'ie', alpha3: 'ile', bibliographic: '', name: 'Interlingue' },
        { alpha2: 'ie', alpha3: 'ile', bibliographic: '', name: 'Occidental' },
        { alpha2: '', alpha3: 'ilo', bibliographic: '', name: 'Iloko' },
        {
          alpha2: 'ia',
          alpha3: 'ina',
          bibliographic: '',
          name: 'Interlingua (International Auxiliary Language Association)',
        },
        {
          alpha2: '',
          alpha3: 'inc',
          bibliographic: '',
          name: 'Indic languages',
        },
        { alpha2: 'id', alpha3: 'ind', bibliographic: '', name: 'Indonesian' },
        {
          alpha2: '',
          alpha3: 'ine',
          bibliographic: '',
          name: 'Indo-European languages',
        },
        { alpha2: '', alpha3: 'inh', bibliographic: '', name: 'Ingush' },
        { alpha2: 'ik', alpha3: 'ipk', bibliographic: '', name: 'Inupiaq' },
        {
          alpha2: '',
          alpha3: 'ira',
          bibliographic: '',
          name: 'Iranian languages',
        },
        {
          alpha2: '',
          alpha3: 'iro',
          bibliographic: '',
          name: 'Iroquoian languages',
        },
        {
          alpha2: 'is',
          alpha3: 'isl',
          bibliographic: 'ice',
          name: 'Icelandic',
        },
        { alpha2: 'it', alpha3: 'ita', bibliographic: '', name: 'Italian' },
        { alpha2: 'jv', alpha3: 'jav', bibliographic: '', name: 'Javanese' },
        { alpha2: '', alpha3: 'jbo', bibliographic: '', name: 'Lojban' },
        { alpha2: 'ja', alpha3: 'jpn', bibliographic: '', name: 'Japanese' },
        { alpha2: '', alpha3: 'jpr', bibliographic: '', name: 'Judeo-Persian' },
        { alpha2: '', alpha3: 'jrb', bibliographic: '', name: 'Judeo-Arabic' },
        { alpha2: '', alpha3: 'kaa', bibliographic: '', name: 'Kara-Kalpak' },
        { alpha2: '', alpha3: 'kab', bibliographic: '', name: 'Kabyle' },
        { alpha2: '', alpha3: 'kac', bibliographic: '', name: 'Jingpho' },
        { alpha2: '', alpha3: 'kac', bibliographic: '', name: 'Kachin' },
        { alpha2: 'kl', alpha3: 'kal', bibliographic: '', name: 'Greenlandic' },
        { alpha2: 'kl', alpha3: 'kal', bibliographic: '', name: 'Kalaallisut' },
        { alpha2: '', alpha3: 'kam', bibliographic: '', name: 'Kamba' },
        { alpha2: 'kn', alpha3: 'kan', bibliographic: '', name: 'Kannada' },
        {
          alpha2: '',
          alpha3: 'kar',
          bibliographic: '',
          name: 'Karen languages',
        },
        { alpha2: 'ks', alpha3: 'kas', bibliographic: '', name: 'Kashmiri' },
        { alpha2: 'ka', alpha3: 'kat', bibliographic: 'geo', name: 'Georgian' },
        { alpha2: 'kr', alpha3: 'kau', bibliographic: '', name: 'Kanuri' },
        { alpha2: '', alpha3: 'kaw', bibliographic: '', name: 'Kawi' },
        { alpha2: 'kk', alpha3: 'kaz', bibliographic: '', name: 'Kazakh' },
        { alpha2: '', alpha3: 'kbd', bibliographic: '', name: 'Kabardian' },
        { alpha2: '', alpha3: 'kha', bibliographic: '', name: 'Khasi' },
        {
          alpha2: '',
          alpha3: 'khi',
          bibliographic: '',
          name: 'Khoisan languages',
        },
        {
          alpha2: 'km',
          alpha3: 'khm',
          bibliographic: '',
          name: 'Central Khmer',
        },
        { alpha2: '', alpha3: 'kho', bibliographic: '', name: 'Khotanese' },
        { alpha2: '', alpha3: 'kho', bibliographic: '', name: 'Sakan' },
        { alpha2: 'ki', alpha3: 'kik', bibliographic: '', name: 'Gikuyu' },
        { alpha2: 'ki', alpha3: 'kik', bibliographic: '', name: 'Kikuyu' },
        { alpha2: 'rw', alpha3: 'kin', bibliographic: '', name: 'Kinyarwanda' },
        { alpha2: 'ky', alpha3: 'kir', bibliographic: '', name: 'Kirghiz' },
        { alpha2: 'ky', alpha3: 'kir', bibliographic: '', name: 'Kyrgyz' },
        { alpha2: '', alpha3: 'kmb', bibliographic: '', name: 'Kimbundu' },
        { alpha2: '', alpha3: 'kok', bibliographic: '', name: 'Konkani' },
        { alpha2: 'kv', alpha3: 'kom', bibliographic: '', name: 'Komi' },
        { alpha2: 'kg', alpha3: 'kon', bibliographic: '', name: 'Kongo' },
        { alpha2: 'ko', alpha3: 'kor', bibliographic: '', name: 'Korean' },
        { alpha2: '', alpha3: 'kos', bibliographic: '', name: 'Kosraean' },
        { alpha2: '', alpha3: 'kpe', bibliographic: '', name: 'Kpelle' },
        {
          alpha2: '',
          alpha3: 'krc',
          bibliographic: '',
          name: 'Karachay-Balkar',
        },
        { alpha2: '', alpha3: 'krl', bibliographic: '', name: 'Karelian' },
        { alpha2: '', alpha3: 'kro', bibliographic: '', name: 'Kru languages' },
        { alpha2: '', alpha3: 'kru', bibliographic: '', name: 'Kurukh' },
        { alpha2: 'kj', alpha3: 'kua', bibliographic: '', name: 'Kuanyama' },
        { alpha2: 'kj', alpha3: 'kua', bibliographic: '', name: 'Kwanyama' },
        { alpha2: '', alpha3: 'kum', bibliographic: '', name: 'Kumyk' },
        { alpha2: 'ku', alpha3: 'kur', bibliographic: '', name: 'Kurdish' },
        { alpha2: '', alpha3: 'kut', bibliographic: '', name: 'Kutenai' },
        { alpha2: '', alpha3: 'lad', bibliographic: '', name: 'Ladino' },
        { alpha2: '', alpha3: 'lah', bibliographic: '', name: 'Lahnda' },
        { alpha2: '', alpha3: 'lam', bibliographic: '', name: 'Lamba' },
        { alpha2: 'lo', alpha3: 'lao', bibliographic: '', name: 'Lao' },
        { alpha2: 'la', alpha3: 'lat', bibliographic: '', name: 'Latin' },
        { alpha2: 'lv', alpha3: 'lav', bibliographic: '', name: 'Latvian' },
        { alpha2: '', alpha3: 'lez', bibliographic: '', name: 'Lezghian' },
        { alpha2: 'li', alpha3: 'lim', bibliographic: '', name: 'Limburgan' },
        { alpha2: 'li', alpha3: 'lim', bibliographic: '', name: 'Limburger' },
        { alpha2: 'li', alpha3: 'lim', bibliographic: '', name: 'Limburgish' },
        { alpha2: 'ln', alpha3: 'lin', bibliographic: '', name: 'Lingala' },
        { alpha2: 'lt', alpha3: 'lit', bibliographic: '', name: 'Lithuanian' },
        { alpha2: '', alpha3: 'lol', bibliographic: '', name: 'Mongo' },
        { alpha2: '', alpha3: 'loz', bibliographic: '', name: 'Lozi' },
        {
          alpha2: 'lb',
          alpha3: 'ltz',
          bibliographic: '',
          name: 'Letzeburgesch',
        },
        {
          alpha2: 'lb',
          alpha3: 'ltz',
          bibliographic: '',
          name: 'Luxembourgish',
        },
        { alpha2: '', alpha3: 'lua', bibliographic: '', name: 'Luba-Lulua' },
        {
          alpha2: 'lu',
          alpha3: 'lub',
          bibliographic: '',
          name: 'Luba-Katanga',
        },
        { alpha2: 'lg', alpha3: 'lug', bibliographic: '', name: 'Ganda' },
        { alpha2: '', alpha3: 'lui', bibliographic: '', name: 'Luiseno' },
        { alpha2: '', alpha3: 'lun', bibliographic: '', name: 'Lunda' },
        {
          alpha2: '',
          alpha3: 'luo',
          bibliographic: '',
          name: 'Luo (Kenya and Tanzania)',
        },
        { alpha2: '', alpha3: 'lus', bibliographic: '', name: 'Lushai' },
        { alpha2: '', alpha3: 'mad', bibliographic: '', name: 'Madurese' },
        { alpha2: '', alpha3: 'mag', bibliographic: '', name: 'Magahi' },
        { alpha2: 'mh', alpha3: 'mah', bibliographic: '', name: 'Marshallese' },
        { alpha2: '', alpha3: 'mai', bibliographic: '', name: 'Maithili' },
        { alpha2: '', alpha3: 'mak', bibliographic: '', name: 'Makasar' },
        { alpha2: 'ml', alpha3: 'mal', bibliographic: '', name: 'Malayalam' },
        { alpha2: '', alpha3: 'man', bibliographic: '', name: 'Mandingo' },
        {
          alpha2: '',
          alpha3: 'map',
          bibliographic: '',
          name: 'Austronesian languages',
        },
        { alpha2: 'mr', alpha3: 'mar', bibliographic: '', name: 'Marathi' },
        { alpha2: '', alpha3: 'mas', bibliographic: '', name: 'Masai' },
        { alpha2: '', alpha3: 'mdf', bibliographic: '', name: 'Moksha' },
        { alpha2: '', alpha3: 'mdr', bibliographic: '', name: 'Mandar' },
        { alpha2: '', alpha3: 'men', bibliographic: '', name: 'Mende' },
        {
          alpha2: '',
          alpha3: 'mga',
          bibliographic: '',
          name: 'Irish, Middle (900-1200)',
        },
        { alpha2: '', alpha3: 'mic', bibliographic: '', name: "Mi'kmaq" },
        { alpha2: '', alpha3: 'mic', bibliographic: '', name: 'Micmac' },
        { alpha2: '', alpha3: 'min', bibliographic: '', name: 'Minangkabau' },
        {
          alpha2: '',
          alpha3: 'mis',
          bibliographic: '',
          name: 'Uncoded languages',
        },
        {
          alpha2: 'mk',
          alpha3: 'mkd',
          bibliographic: 'mac',
          name: 'Macedonian',
        },
        {
          alpha2: '',
          alpha3: 'mkh',
          bibliographic: '',
          name: 'Mon-Khmer languages',
        },
        { alpha2: 'mg', alpha3: 'mlg', bibliographic: '', name: 'Malagasy' },
        { alpha2: 'mt', alpha3: 'mlt', bibliographic: '', name: 'Maltese' },
        { alpha2: '', alpha3: 'mnc', bibliographic: '', name: 'Manchu' },
        { alpha2: '', alpha3: 'mni', bibliographic: '', name: 'Manipuri' },
        {
          alpha2: '',
          alpha3: 'mno',
          bibliographic: '',
          name: 'Manobo languages',
        },
        { alpha2: '', alpha3: 'moh', bibliographic: '', name: 'Mohawk' },
        { alpha2: 'mn', alpha3: 'mon', bibliographic: '', name: 'Mongolian' },
        { alpha2: '', alpha3: 'mos', bibliographic: '', name: 'Mossi' },
        { alpha2: '', alpha3: 'mot', bibliographic: '', name: 'Montenegrin' },
        { alpha2: 'mi', alpha3: 'mri', bibliographic: 'mao', name: 'Maori' },
        { alpha2: 'ms', alpha3: 'msa', bibliographic: 'may', name: 'Malay' },
        {
          alpha2: '',
          alpha3: 'mul',
          bibliographic: '',
          name: 'Multiple languages',
        },
        {
          alpha2: '',
          alpha3: 'mun',
          bibliographic: '',
          name: 'Munda languages',
        },
        { alpha2: '', alpha3: 'mus', bibliographic: '', name: 'Creek' },
        { alpha2: '', alpha3: 'mwl', bibliographic: '', name: 'Mirandese' },
        { alpha2: '', alpha3: 'mwr', bibliographic: '', name: 'Marwari' },
        { alpha2: 'my', alpha3: 'mya', bibliographic: 'bur', name: 'Burmese' },
        {
          alpha2: '',
          alpha3: 'myn',
          bibliographic: '',
          name: 'Mayan languages',
        },
        { alpha2: '', alpha3: 'myv', bibliographic: '', name: 'Erzya' },
        {
          alpha2: '',
          alpha3: 'nah',
          bibliographic: '',
          name: 'Nahuatl languages',
        },
        {
          alpha2: '',
          alpha3: 'nai',
          bibliographic: '',
          name: 'North American Indian languages',
        },
        { alpha2: '', alpha3: 'nap', bibliographic: '', name: 'Neapolitan' },
        { alpha2: 'na', alpha3: 'nau', bibliographic: '', name: 'Nauru' },
        { alpha2: 'nv', alpha3: 'nav', bibliographic: '', name: 'Navaho' },
        { alpha2: 'nv', alpha3: 'nav', bibliographic: '', name: 'Navajo' },
        {
          alpha2: 'nr',
          alpha3: 'nbl',
          bibliographic: '',
          name: 'Ndebele, South',
        },
        {
          alpha2: 'nr',
          alpha3: 'nbl',
          bibliographic: '',
          name: 'South Ndebele',
        },
        {
          alpha2: 'nd',
          alpha3: 'nde',
          bibliographic: '',
          name: 'Ndebele, North',
        },
        {
          alpha2: 'nd',
          alpha3: 'nde',
          bibliographic: '',
          name: 'North Ndebele',
        },
        { alpha2: 'ng', alpha3: 'ndo', bibliographic: '', name: 'Ndonga' },
        { alpha2: '', alpha3: 'nds', bibliographic: '', name: 'German, Low' },
        { alpha2: '', alpha3: 'nds', bibliographic: '', name: 'Low German' },
        { alpha2: '', alpha3: 'nds', bibliographic: '', name: 'Low Saxon' },
        { alpha2: '', alpha3: 'nds', bibliographic: '', name: 'Saxon, Low' },
        { alpha2: 'ne', alpha3: 'nep', bibliographic: '', name: 'Nepali' },
        { alpha2: '', alpha3: 'new', bibliographic: '', name: 'Nepal Bhasa' },
        { alpha2: '', alpha3: 'new', bibliographic: '', name: 'Newari' },
        { alpha2: '', alpha3: 'nia', bibliographic: '', name: 'Nias' },
        {
          alpha2: '',
          alpha3: 'nic',
          bibliographic: '',
          name: 'Niger-Kordofanian languages',
        },
        { alpha2: '', alpha3: 'niu', bibliographic: '', name: 'Niuean' },
        { alpha2: '', alpha3: '', bibliographic: 'dut', name: 'Flemish' },
        { alpha2: 'nl', alpha3: 'nld', bibliographic: 'dut', name: 'Dutch' },
        {
          alpha2: 'nn',
          alpha3: 'nno',
          bibliographic: '',
          name: 'Norwegian Nynorsk',
        },
        {
          alpha2: 'nn',
          alpha3: 'nno',
          bibliographic: '',
          name: 'Nynorsk, Norwegian',
        },
        {
          alpha2: 'nb',
          alpha3: 'nob',
          bibliographic: '',
          name: 'Bokmål, Norwegian',
        },
        {
          alpha2: 'nb',
          alpha3: 'nob',
          bibliographic: '',
          name: 'Norwegian Bokmål',
        },
        { alpha2: '', alpha3: 'nog', bibliographic: '', name: 'Nogai' },
        { alpha2: '', alpha3: 'non', bibliographic: '', name: 'Norse, Old' },
        { alpha2: 'no', alpha3: 'nor', bibliographic: '', name: 'Norwegian' },
        { alpha2: '', alpha3: 'nqo', bibliographic: '', name: "N'Ko" },
        {
          alpha2: '',
          alpha3: 'nso',
          bibliographic: '',
          name: 'Northern Sotho',
        },
        { alpha2: '', alpha3: 'nso', bibliographic: '', name: 'Pedi' },
        { alpha2: '', alpha3: 'nso', bibliographic: '', name: 'Sepedi' },
        {
          alpha2: '',
          alpha3: 'nso',
          bibliographic: '',
          name: 'Sotho, Northern',
        },
        {
          alpha2: '',
          alpha3: 'nub',
          bibliographic: '',
          name: 'Nubian languages',
        },
        {
          alpha2: '',
          alpha3: 'nwc',
          bibliographic: '',
          name: 'Classical Nepal Bhasa',
        },
        {
          alpha2: '',
          alpha3: 'nwc',
          bibliographic: '',
          name: 'Classical Newari',
        },
        { alpha2: '', alpha3: 'nwc', bibliographic: '', name: 'Old Newari' },
        { alpha2: 'ny', alpha3: 'nya', bibliographic: '', name: 'Chewa' },
        { alpha2: 'ny', alpha3: 'nya', bibliographic: '', name: 'Chichewa' },
        { alpha2: 'ny', alpha3: 'nya', bibliographic: '', name: 'Nyanja' },
        { alpha2: '', alpha3: 'nym', bibliographic: '', name: 'Nyamwezi' },
        { alpha2: '', alpha3: 'nyn', bibliographic: '', name: 'Nyankole' },
        { alpha2: '', alpha3: 'nyo', bibliographic: '', name: 'Nyoro' },
        { alpha2: '', alpha3: 'nzi', bibliographic: '', name: 'Nzima' },
        {
          alpha2: 'oc',
          alpha3: 'oci',
          bibliographic: '',
          name: 'Occitan (post 1500)',
        },
        { alpha2: 'oj', alpha3: 'oji', bibliographic: '', name: 'Ojibwa' },
        { alpha2: 'or', alpha3: 'ori', bibliographic: '', name: 'Oriya' },
        { alpha2: 'om', alpha3: 'orm', bibliographic: '', name: 'Oromo' },
        { alpha2: '', alpha3: 'osa', bibliographic: '', name: 'Osage' },
        { alpha2: 'os', alpha3: 'oss', bibliographic: '', name: 'Ossetian' },
        { alpha2: 'os', alpha3: 'oss', bibliographic: '', name: 'Ossetic' },
        {
          alpha2: '',
          alpha3: 'ota',
          bibliographic: '',
          name: 'Turkish, Ottoman (1500-1928)',
        },
        {
          alpha2: '',
          alpha3: 'oto',
          bibliographic: '',
          name: 'Otomian languages',
        },
        {
          alpha2: '',
          alpha3: 'paa',
          bibliographic: '',
          name: 'Papuan languages',
        },
        { alpha2: '', alpha3: 'pag', bibliographic: '', name: 'Pangasinan' },
        { alpha2: '', alpha3: 'pal', bibliographic: '', name: 'Pahlavi' },
        { alpha2: '', alpha3: 'pam', bibliographic: '', name: 'Kapampangan' },
        { alpha2: '', alpha3: 'pam', bibliographic: '', name: 'Pampanga' },
        { alpha2: 'pa', alpha3: 'pan', bibliographic: '', name: 'Panjabi' },
        { alpha2: 'pa', alpha3: 'pan', bibliographic: '', name: 'Punjabi' },
        { alpha2: '', alpha3: 'pap', bibliographic: '', name: 'Papiamento' },
        { alpha2: '', alpha3: 'pau', bibliographic: '', name: 'Palauan' },
        {
          alpha2: '',
          alpha3: 'peo',
          bibliographic: '',
          name: 'Persian, Old (ca.600-400 B.C.)',
        },
        {
          alpha2: '',
          alpha3: 'phi',
          bibliographic: '',
          name: 'Philippine languages',
        },
        { alpha2: '', alpha3: 'phn', bibliographic: '', name: 'Phoenician' },
        { alpha2: 'pi', alpha3: 'pli', bibliographic: '', name: 'Pali' },
        { alpha2: 'pl', alpha3: 'pol', bibliographic: '', name: 'Polish' },
        { alpha2: '', alpha3: 'pon', bibliographic: '', name: 'Pohnpeian' },
        { alpha2: 'pt', alpha3: 'por', bibliographic: '', name: 'Portuguese' },
        {
          alpha2: '',
          alpha3: 'pra',
          bibliographic: '',
          name: 'Prakrit languages',
        },
        {
          alpha2: '',
          alpha3: 'pro',
          bibliographic: '',
          name: 'Occitan, Old (to 1500)',
        },
        {
          alpha2: '',
          alpha3: 'pro',
          bibliographic: '',
          name: 'Provençal, Old (to 1500)',
        },
        { alpha2: 'ps', alpha3: 'pus', bibliographic: '', name: 'Pashto' },
        { alpha2: 'ps', alpha3: 'pus', bibliographic: '', name: 'Pushto' },
        { alpha2: 'qu', alpha3: 'que', bibliographic: '', name: 'Quechua' },
        { alpha2: '', alpha3: 'raj', bibliographic: '', name: 'Rajasthani' },
        { alpha2: '', alpha3: 'rap', bibliographic: '', name: 'Rapanui' },
        {
          alpha2: '',
          alpha3: 'rar',
          bibliographic: '',
          name: 'Cook Islands Maori',
        },
        { alpha2: '', alpha3: 'rar', bibliographic: '', name: 'Rarotongan' },
        {
          alpha2: '',
          alpha3: 'roa',
          bibliographic: '',
          name: 'Romance languages',
        },
        { alpha2: 'rm', alpha3: 'roh', bibliographic: '', name: 'Romansh' },
        { alpha2: '', alpha3: 'rom', bibliographic: '', name: 'Romany' },
        {
          alpha2: 'ro',
          alpha3: 'ron',
          bibliographic: 'rum',
          name: 'Moldavian',
        },
        { alpha2: 'ro', alpha3: 'ron', bibliographic: 'rum', name: 'Romanian' },
        { alpha2: 'rn', alpha3: 'run', bibliographic: '', name: 'Rundi' },
        { alpha2: '', alpha3: 'rup', bibliographic: '', name: 'Aromanian' },
        { alpha2: '', alpha3: 'rup', bibliographic: '', name: 'Arumanian' },
        {
          alpha2: '',
          alpha3: 'rup',
          bibliographic: '',
          name: 'Macedo-Romanian',
        },
        { alpha2: 'ru', alpha3: 'rus', bibliographic: '', name: 'Russian' },
        { alpha2: '', alpha3: 'sad', bibliographic: '', name: 'Sandawe' },
        { alpha2: 'sg', alpha3: 'sag', bibliographic: '', name: 'Sango' },
        { alpha2: '', alpha3: 'sah', bibliographic: '', name: 'Yakut' },
        {
          alpha2: '',
          alpha3: 'sai',
          bibliographic: '',
          name: 'South American Indian languages',
        },
        {
          alpha2: '',
          alpha3: 'sal',
          bibliographic: '',
          name: 'Salishan languages',
        },
        {
          alpha2: '',
          alpha3: 'sam',
          bibliographic: '',
          name: 'Samaritan Aramaic',
        },
        { alpha2: 'sa', alpha3: 'san', bibliographic: '', name: 'Sanskrit' },
        { alpha2: '', alpha3: 'sas', bibliographic: '', name: 'Sasak' },
        { alpha2: '', alpha3: 'sat', bibliographic: '', name: 'Santali' },
        { alpha2: '', alpha3: 'scn', bibliographic: '', name: 'Sicilian' },
        { alpha2: '', alpha3: 'sco', bibliographic: '', name: 'Scots' },
        { alpha2: '', alpha3: 'sel', bibliographic: '', name: 'Selkup' },
        {
          alpha2: '',
          alpha3: 'sem',
          bibliographic: '',
          name: 'Semitic languages',
        },
        {
          alpha2: '',
          alpha3: 'sga',
          bibliographic: '',
          name: 'Irish, Old (to 900)',
        },
        {
          alpha2: '',
          alpha3: 'sgn',
          bibliographic: '',
          name: 'Sign Languages',
        },
        { alpha2: '', alpha3: 'shn', bibliographic: '', name: 'Shan' },
        { alpha2: '', alpha3: 'sid', bibliographic: '', name: 'Sidamo' },
        { alpha2: 'si', alpha3: 'sin', bibliographic: '', name: 'Sinhala' },
        { alpha2: 'si', alpha3: 'sin', bibliographic: '', name: 'Sinhalese' },
        {
          alpha2: '',
          alpha3: 'sio',
          bibliographic: '',
          name: 'Siouan languages',
        },
        {
          alpha2: '',
          alpha3: 'sit',
          bibliographic: '',
          name: 'Sino-Tibetan languages',
        },
        {
          alpha2: '',
          alpha3: 'sla',
          bibliographic: '',
          name: 'Slavic languages',
        },
        { alpha2: 'sk', alpha3: 'slk', bibliographic: 'slo', name: 'Slovak' },
        { alpha2: 'sl', alpha3: 'slv', bibliographic: '', name: 'Slovenian' },
        { alpha2: '', alpha3: 'sma', bibliographic: '', name: 'Southern Sami' },
        {
          alpha2: 'se',
          alpha3: 'sme',
          bibliographic: '',
          name: 'Northern Sami',
        },
        {
          alpha2: '',
          alpha3: 'smi',
          bibliographic: '',
          name: 'Sami languages',
        },
        { alpha2: '', alpha3: 'smj', bibliographic: '', name: 'Lule Sami' },
        { alpha2: '', alpha3: 'smn', bibliographic: '', name: 'Inari Sami' },
        { alpha2: 'sm', alpha3: 'smo', bibliographic: '', name: 'Samoan' },
        { alpha2: '', alpha3: 'sms', bibliographic: '', name: 'Skolt Sami' },
        { alpha2: 'sn', alpha3: 'sna', bibliographic: '', name: 'Shona' },
        { alpha2: 'sd', alpha3: 'snd', bibliographic: '', name: 'Sindhi' },
        { alpha2: '', alpha3: 'snk', bibliographic: '', name: 'Soninke' },
        { alpha2: '', alpha3: 'sog', bibliographic: '', name: 'Sogdian' },
        { alpha2: 'so', alpha3: 'som', bibliographic: '', name: 'Somali' },
        {
          alpha2: '',
          alpha3: 'son',
          bibliographic: '',
          name: 'Songhai languages',
        },
        {
          alpha2: 'st',
          alpha3: 'sot',
          bibliographic: '',
          name: 'Sotho, Southern',
        },
        { alpha2: 'es', alpha3: 'spa', bibliographic: '', name: 'Castilian' },
        { alpha2: 'es', alpha3: 'spa', bibliographic: '', name: 'Spanish' },
        { alpha2: 'sq', alpha3: 'sqi', bibliographic: 'alb', name: 'Albanian' },
        { alpha2: 'sc', alpha3: 'srd', bibliographic: '', name: 'Sardinian' },
        { alpha2: '', alpha3: 'srn', bibliographic: '', name: 'Sranan Tongo' },
        { alpha2: 'sr', alpha3: 'srp', bibliographic: '', name: 'Serbian' },
        { alpha2: '', alpha3: 'srr', bibliographic: '', name: 'Serer' },
        {
          alpha2: '',
          alpha3: 'ssa',
          bibliographic: '',
          name: 'Nilo-Saharan languages',
        },
        { alpha2: 'ss', alpha3: 'ssw', bibliographic: '', name: 'Swati' },
        { alpha2: '', alpha3: 'suk', bibliographic: '', name: 'Sukuma' },
        { alpha2: 'su', alpha3: 'sun', bibliographic: '', name: 'Sundanese' },
        { alpha2: '', alpha3: 'sus', bibliographic: '', name: 'Susu' },
        { alpha2: '', alpha3: 'sux', bibliographic: '', name: 'Sumerian' },
        { alpha2: 'sw', alpha3: 'swa', bibliographic: '', name: 'Swahili' },
        { alpha2: 'sv', alpha3: 'swe', bibliographic: '', name: 'Swedish' },
        {
          alpha2: '',
          alpha3: 'syc',
          bibliographic: '',
          name: 'Classical Syriac',
        },
        { alpha2: '', alpha3: 'syr', bibliographic: '', name: 'Syriac' },
        { alpha2: 'ty', alpha3: 'tah', bibliographic: '', name: 'Tahitian' },
        { alpha2: '', alpha3: 'tai', bibliographic: '', name: 'Tai languages' },
        { alpha2: 'ta', alpha3: 'tam', bibliographic: '', name: 'Tamil' },
        { alpha2: 'tt', alpha3: 'tat', bibliographic: '', name: 'Tatar' },
        { alpha2: 'te', alpha3: 'tel', bibliographic: '', name: 'Telugu' },
        { alpha2: '', alpha3: 'tem', bibliographic: '', name: 'Timne' },
        { alpha2: '', alpha3: 'ter', bibliographic: '', name: 'Tereno' },
        { alpha2: '', alpha3: 'tet', bibliographic: '', name: 'Tetum' },
        { alpha2: 'tg', alpha3: 'tgk', bibliographic: '', name: 'Tajik' },
        { alpha2: 'tl', alpha3: 'tgl', bibliographic: '', name: 'Tagalog' },
        { alpha2: 'th', alpha3: 'tha', bibliographic: '', name: 'Thai' },
        { alpha2: '', alpha3: 'tig', bibliographic: '', name: 'Tigre' },
        { alpha2: 'ti', alpha3: 'tir', bibliographic: '', name: 'Tigrinya' },
        { alpha2: '', alpha3: 'tiv', bibliographic: '', name: 'Tiv' },
        { alpha2: '', alpha3: 'tkl', bibliographic: '', name: 'Tokelau' },
        { alpha2: '', alpha3: 'tlh', bibliographic: '', name: 'Klingon' },
        { alpha2: '', alpha3: 'tlh', bibliographic: '', name: 'tlhIngan-Hol' },
        { alpha2: '', alpha3: 'tli', bibliographic: '', name: 'Tlingit' },
        { alpha2: '', alpha3: 'tmh', bibliographic: '', name: 'Tamashek' },
        { alpha2: '', alpha3: 'tog', bibliographic: '', name: 'Tonga (Nyasa)' },
        {
          alpha2: 'to',
          alpha3: 'ton',
          bibliographic: '',
          name: 'Tonga (Tonga Islands)',
        },
        { alpha2: '', alpha3: 'tpi', bibliographic: '', name: 'Tok Pisin' },
        { alpha2: '', alpha3: 'tsi', bibliographic: '', name: 'Tsimshian' },
        { alpha2: 'tn', alpha3: 'tsn', bibliographic: '', name: 'Tswana' },
        { alpha2: 'ts', alpha3: 'tso', bibliographic: '', name: 'Tsonga' },
        { alpha2: 'tk', alpha3: 'tuk', bibliographic: '', name: 'Turkmen' },
        { alpha2: '', alpha3: 'tum', bibliographic: '', name: 'Tumbuka' },
        {
          alpha2: '',
          alpha3: 'tup',
          bibliographic: '',
          name: 'Tupi languages',
        },
        { alpha2: 'tr', alpha3: 'tur', bibliographic: '', name: 'Turkish' },
        {
          alpha2: '',
          alpha3: 'tut',
          bibliographic: '',
          name: 'Altaic languages',
        },
        { alpha2: '', alpha3: 'tvl', bibliographic: '', name: 'Tuvalu' },
        { alpha2: 'tw', alpha3: 'twi', bibliographic: '', name: 'Twi' },
        { alpha2: '', alpha3: 'tyv', bibliographic: '', name: 'Tuvinian' },
        { alpha2: '', alpha3: 'udm', bibliographic: '', name: 'Udmurt' },
        { alpha2: '', alpha3: 'uga', bibliographic: '', name: 'Ugaritic' },
        { alpha2: 'ug', alpha3: 'uig', bibliographic: '', name: 'Uighur' },
        { alpha2: 'ug', alpha3: 'uig', bibliographic: '', name: 'Uyghur' },
        { alpha2: 'uk', alpha3: 'ukr', bibliographic: '', name: 'Ukrainian' },
        { alpha2: '', alpha3: 'umb', bibliographic: '', name: 'Umbundu' },
        { alpha2: '', alpha3: 'und', bibliographic: '', name: 'Undetermined' },
        { alpha2: 'ur', alpha3: 'urd', bibliographic: '', name: 'Urdu' },
        { alpha2: 'uz', alpha3: 'uzb', bibliographic: '', name: 'Uzbek' },
        { alpha2: '', alpha3: 'vai', bibliographic: '', name: 'Vai' },
        { alpha2: 've', alpha3: 'ven', bibliographic: '', name: 'Venda' },
        { alpha2: 'vi', alpha3: 'vie', bibliographic: '', name: 'Vietnamese' },
        { alpha2: 'vo', alpha3: 'vol', bibliographic: '', name: 'Volapük' },
        { alpha2: '', alpha3: 'vot', bibliographic: '', name: 'Votic' },
        {
          alpha2: '',
          alpha3: 'wak',
          bibliographic: '',
          name: 'Wakashan languages',
        },
        { alpha2: '', alpha3: 'wal', bibliographic: '', name: 'Wolaitta' },
        { alpha2: '', alpha3: 'wal', bibliographic: '', name: 'Wolaytta' },
        { alpha2: '', alpha3: 'war', bibliographic: '', name: 'Waray' },
        { alpha2: '', alpha3: 'was', bibliographic: '', name: 'Washo' },
        {
          alpha2: '',
          alpha3: 'wen',
          bibliographic: '',
          name: 'Sorbian languages',
        },
        { alpha2: 'wa', alpha3: 'wln', bibliographic: '', name: 'Walloon' },
        { alpha2: 'wo', alpha3: 'wol', bibliographic: '', name: 'Wolof' },
        { alpha2: '', alpha3: 'xal', bibliographic: '', name: 'Kalmyk' },
        { alpha2: '', alpha3: 'xal', bibliographic: '', name: 'Oirat' },
        { alpha2: 'xh', alpha3: 'xho', bibliographic: '', name: 'Xhosa' },
        { alpha2: '', alpha3: 'yao', bibliographic: '', name: 'Yao' },
        { alpha2: '', alpha3: 'yap', bibliographic: '', name: 'Yapese' },
        { alpha2: 'yi', alpha3: 'yid', bibliographic: '', name: 'Yiddish' },
        { alpha2: 'yo', alpha3: 'yor', bibliographic: '', name: 'Yoruba' },
        {
          alpha2: '',
          alpha3: 'ypk',
          bibliographic: '',
          name: 'Yupik languages',
        },
        { alpha2: '', alpha3: 'zap', bibliographic: '', name: 'Zapotec' },
        { alpha2: '', alpha3: 'zbl', bibliographic: '', name: 'Bliss' },
        { alpha2: '', alpha3: 'zbl', bibliographic: '', name: 'Blissymbolics' },
        { alpha2: '', alpha3: 'zbl', bibliographic: '', name: 'Blissymbols' },
        { alpha2: '', alpha3: 'zen', bibliographic: '', name: 'Zenaga' },
        {
          alpha2: '',
          alpha3: 'zgh',
          bibliographic: '',
          name: 'Standard Moroccan Tamazight',
        },
        { alpha2: 'za', alpha3: 'zha', bibliographic: '', name: 'Chuang' },
        { alpha2: 'za', alpha3: 'zha', bibliographic: '', name: 'Zhuang' },
        { alpha2: 'zh', alpha3: 'zho', bibliographic: 'chi', name: 'Chinese' },
        {
          alpha2: '',
          alpha3: 'znd',
          bibliographic: '',
          name: 'Zande languages',
        },
        { alpha2: 'zu', alpha3: 'zul', bibliographic: '', name: 'Zulu' },
        { alpha2: '', alpha3: 'zun', bibliographic: '', name: 'Zuni' },
        {
          alpha2: '',
          alpha3: 'zxx',
          bibliographic: '',
          name: 'No linguistic content',
        },
        {
          alpha2: '',
          alpha3: 'zxx',
          bibliographic: '',
          name: 'Not applicable',
        },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Dimili' },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Dimli' },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Kirdki' },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Kirmanjki' },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Zaza' },
        { alpha2: '', alpha3: 'zza', bibliographic: '', name: 'Zazaki' },
      ];
    const h = n(0),
      p = (a, e) => {
        const n = h.pairs(e);
        return a.filter(
          a =>
            n.filter(e => {
              const n = a[e[0]];
              return h.isArray(n)
                ? n.indexOf(e[1]) >= 0
                : n.toLowerCase() === e[1].toLowerCase();
            }).length === n.length
        );
      };
    var u = a => ({
      countries: p.bind(null, a.countries),
      currencies: p.bind(null, a.currencies),
      languages: p.bind(null, a.languages),
    });
    const t = n(3);
    (exports.continents = r),
      (exports.regions = l),
      (exports.countries = { all: o }),
      i._.each(o, a => {
        const e = exports.countries[a.alpha2];
        (e && 'deleted' !== e.status) || (exports.countries[a.alpha2] = a);
        const n = exports.countries[a.alpha3];
        (n && 'deleted' !== n.status) || (exports.countries[a.alpha3] = a);
      }),
      (exports.currencies = { all: s }),
      i._.each(s, a => {
        let e = t(a.code);
        '?' === e && (e = a.code);
        const n = Object.assign(a, { symbol: e });
        exports.currencies[a.code] = n;
      }),
      (exports.languages = { all: c }),
      i._.each(c, a => {
        (exports.languages[a.alpha2] = a),
          (exports.languages[a.bibliographic] = a),
          (exports.languages[a.alpha3] = a);
      }),
      (exports.lookup = u({ countries: o, currencies: s, languages: c }));
    const g = { all: [] },
      m = i._.reduce(
        o,
        (a, e) => (
          e.countryCallingCodes &&
            e.countryCallingCodes.length &&
            (g.all.push(e),
            (g[e.alpha2] = e),
            (g[e.alpha3] = e),
            i._.each(e.countryCallingCodes, e => {
              -1 === a.indexOf(e) && a.push(e);
            })),
          a
        ),
        []
      );
    delete g[''],
      (exports.callingCountries = g),
      m.sort((a, e) => {
        const n = a => +a,
          l = i._.map(a.split(' '), n),
          r = i._.map(e.split(' '), n);
        return l[0] < r[0]
          ? -1
          : l[0] > r[0]
            ? 1
            : void 0 === l[1] && void 0 !== r[1]
              ? -1
              : void 0 !== l[1] && void 0 === r[1]
                ? 1
                : l[1] < r[1]
                  ? -1
                  : l[1] > r[1]
                    ? 1
                    : 0;
      }),
      (exports.callingCodes = { all: m });
  },
  function(a, e) {
    a.exports = {
      AED: 'د.إ',
      AFN: '؋',
      ALL: 'L',
      AMD: '֏',
      ANG: 'ƒ',
      AOA: 'Kz',
      ARS: '$',
      AUD: '$',
      AWG: 'ƒ',
      AZN: '₼',
      BAM: 'KM',
      BBD: '$',
      BDT: '৳',
      BGN: 'лв',
      BHD: '.د.ب',
      BIF: 'FBu',
      BMD: '$',
      BND: '$',
      BOB: '$b',
      BRL: 'R$',
      BSD: '$',
      BTC: '฿',
      BTN: 'Nu.',
      BWP: 'P',
      BYR: 'Br',
      BYN: 'Br',
      BZD: 'BZ$',
      CAD: '$',
      CDF: 'FC',
      CHF: 'CHF',
      CLP: '$',
      CNY: '¥',
      COP: '$',
      CRC: '₡',
      CUC: '$',
      CUP: '₱',
      CVE: '$',
      CZK: 'Kč',
      DJF: 'Fdj',
      DKK: 'kr',
      DOP: 'RD$',
      DZD: 'دج',
      EEK: 'kr',
      EGP: '£',
      ERN: 'Nfk',
      ETB: 'Br',
      ETH: 'Ξ',
      EUR: '€',
      FJD: '$',
      FKP: '£',
      GBP: '£',
      GEL: '₾',
      GGP: '£',
      GHC: '₵',
      GHS: 'GH₵',
      GIP: '£',
      GMD: 'D',
      GNF: 'FG',
      GTQ: 'Q',
      GYD: '$',
      HKD: '$',
      HNL: 'L',
      HRK: 'kn',
      HTG: 'G',
      HUF: 'Ft',
      IDR: 'Rp',
      ILS: '₪',
      IMP: '£',
      INR: '₹',
      IQD: 'ع.د',
      IRR: '﷼',
      ISK: 'kr',
      JEP: '£',
      JMD: 'J$',
      JOD: 'JD',
      JPY: '¥',
      KES: 'KSh',
      KGS: 'лв',
      KHR: '៛',
      KMF: 'CF',
      KPW: '₩',
      KRW: '₩',
      KWD: 'KD',
      KYD: '$',
      KZT: 'лв',
      LAK: '₭',
      LBP: '£',
      LKR: '₨',
      LRD: '$',
      LSL: 'M',
      LTC: 'Ł',
      LTL: 'Lt',
      LVL: 'Ls',
      LYD: 'LD',
      MAD: 'MAD',
      MDL: 'lei',
      MGA: 'Ar',
      MKD: 'ден',
      MMK: 'K',
      MNT: '₮',
      MOP: 'MOP$',
      MRO: 'UM',
      MRU: 'UM',
      MUR: '₨',
      MVR: 'Rf',
      MWK: 'MK',
      MXN: '$',
      MYR: 'RM',
      MZN: 'MT',
      NAD: '$',
      NGN: '₦',
      NIO: 'C$',
      NOK: 'kr',
      NPR: '₨',
      NZD: '$',
      OMR: '﷼',
      PAB: 'B/.',
      PEN: 'S/.',
      PGK: 'K',
      PHP: '₱',
      PKR: '₨',
      PLN: 'zł',
      PYG: 'Gs',
      QAR: '﷼',
      RMB: '￥',
      RON: 'lei',
      RSD: 'Дин.',
      RUB: '₽',
      RWF: 'R₣',
      SAR: '﷼',
      SBD: '$',
      SCR: '₨',
      SDG: 'ج.س.',
      SEK: 'kr',
      SGD: '$',
      SHP: '£',
      SLL: 'Le',
      SOS: 'S',
      SRD: '$',
      SSP: '£',
      STD: 'Db',
      STN: 'Db',
      SVC: '$',
      SYP: '£',
      SZL: 'E',
      THB: '฿',
      TJS: 'SM',
      TMT: 'T',
      TND: 'د.ت',
      TOP: 'T$',
      TRL: '₤',
      TRY: '₺',
      TTD: 'TT$',
      TVD: '$',
      TWD: 'NT$',
      TZS: 'TSh',
      UAH: '₴',
      UGX: 'USh',
      USD: '$',
      UYU: '$U',
      UZS: 'лв',
      VEF: 'Bs',
      VND: '₫',
      VUV: 'VT',
      WST: 'WS$',
      XAF: 'FCFA',
      XBT: 'Ƀ',
      XCD: '$',
      XOF: 'CFA',
      XPF: '₣',
      YER: '﷼',
      ZAR: 'R',
      ZWD: 'Z$',
    };
  },
  function(a, e, n) {
    var i = n(2);
    (a.exports = function(a) {
      if ('string' == typeof a) {
        var e = a.toUpperCase();
        if (i.hasOwnProperty(e)) return i[e];
      }
    }),
      (a.exports.currencySymbolMap = i);
  },
  function(a, e) {
    a.exports = function(a) {
      return (
        a.webpackPolyfill ||
          ((a.deprecate = function() {}),
          (a.paths = []),
          a.children || (a.children = []),
          Object.defineProperty(a, 'loaded', {
            enumerable: !0,
            get: function() {
              return a.l;
            },
          }),
          Object.defineProperty(a, 'id', {
            enumerable: !0,
            get: function() {
              return a.i;
            },
          }),
          (a.webpackPolyfill = 1)),
        a
      );
    };
  },
  function(a, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (a) {
      'object' == typeof window && (n = window);
    }
    a.exports = n;
  },
]);
