/**
 * config-engine v1.0.0
 * (c) 2018-2020 yemiancheng <ymc.github@gmail.com>
 * @license MIT
 */
'use strict';

var Feat = function Feat(opts) {
  this.options = opts || {};
};

var mixins = {
  set: function(key, val) {
    var hasVal;
    var ref = this;
    var options = ref.options;
    if (val || val === '' || val === 0 || val === false) {
      hasVal = true;
    } else {
      hasVal = false;
    }
    // set when (key,val)
    if (key && hasVal) {
      // console.log(`add key=${key} val=${val}`);
      options[key] = val;
    }
    return this;
  },
  get: function(key) {
    var ref = this;
    var options = ref.options;
    return key in options ? options[key] : null;
  },
  delete: function(key) {
    var ref = this;
    var options = ref.options;
    if (key in options) {
      delete options[key];
    }
    return this;
  },
  merge: function(args) {
    if ( args === void 0 ) args = {};

    var options = Object.assign({}, this.options, args);
    this.options = options;
    return this;
  }
};

var makeClassSugar = function(Feat) {
  // create an instance
  var feat = new Feat();
  // create an instance without new keyword
  feat.config = function(opts) {
    return new Feat(opts);
  };
  // bind Class to property
  feat.Config = Feat;
  return feat;
};

/* eslint-disable prettier/prettier */
// console.log(mixin);
Object.keys(mixins)
  .sort()
  .forEach(function (element) {
    Feat.prototype[element] = mixins[element];
  });

var api = {
  'create': mixins.set,
  'update': mixins.set,
  'read': mixins.get,
  'delete': mixins.delete,
  'merge': mixins.merge
};
Object.keys(api)
  .sort()
  .forEach(function (element) {
    if (!Feat.prototype[element]) {
      Feat.prototype[element] = api[element];
    }
  });
// make api alias
var apiAliasMap = {
  'create': ['add'],
  'update': ['put'],
  'read': ['get'],
  'delete': ['del']
};
Object.keys(apiAliasMap)
  .sort()
  .forEach(function (element) {
    if (apiAliasMap[element]) {
      // utils.makeApiAlias(apiAliasMap, element, Feat);
      apiAliasMap[element].forEach(function (alias) { return Feat.prototype[alias] = api[element]; });
    }
    // console.log(element, api[element]);
  });
// console.log(pro);
var pro = makeClassSugar(Feat);

/* eslint-env node */

module.exports = pro;
