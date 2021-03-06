// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Bold.woff2":[["IBMPlexSans-Bold.c2d900e7.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Bold.woff":[["IBMPlexSans-Bold.a4e35656.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Cyrillic.woff2":[["IBMPlexSans-Bold-Cyrillic.2d06a53d.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Pi.woff2":[["IBMPlexSans-Bold-Pi.6a6477eb.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Latin3.woff2":[["IBMPlexSans-Bold-Latin3.8f23f636.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Latin2.woff2":[["IBMPlexSans-Bold-Latin2.72663fe2.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Latin1.woff2":[["IBMPlexSans-Bold-Latin1.cffc54b9.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Bold-Greek.woff2":[["IBMPlexSans-Bold-Greek.74f733b6.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Bold-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-BoldItalic.woff2":[["IBMPlexSans-BoldItalic.f9dae381.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-BoldItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-BoldItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-BoldItalic.woff":[["IBMPlexSans-BoldItalic.e36a1c4b.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-BoldItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-BoldItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Cyrillic.woff2":[["IBMPlexSans-BoldItalic-Cyrillic.598e9db7.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Pi.woff2":[["IBMPlexSans-BoldItalic-Pi.1de0163c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Latin3.woff2":[["IBMPlexSans-BoldItalic-Latin3.7eb4765f.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Latin2.woff2":[["IBMPlexSans-BoldItalic-Latin2.ef4ff430.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Latin1.woff2":[["IBMPlexSans-BoldItalic-Latin1.4fbe91b7.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-BoldItalic-Greek.woff2":[["IBMPlexSans-BoldItalic-Greek.4da877e6.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-BoldItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-ExtraLight.woff2":[["IBMPlexSans-ExtraLight.38fddaf2.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ExtraLight.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ExtraLight.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-ExtraLight.woff":[["IBMPlexSans-ExtraLight.50f2256a.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ExtraLight.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ExtraLight.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Cyrillic.woff2":[["IBMPlexSans-ExtraLight-Cyrillic.147bbf3b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Pi.woff2":[["IBMPlexSans-ExtraLight-Pi.a10658f2.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Latin3.woff2":[["IBMPlexSans-ExtraLight-Latin3.07b51998.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Latin2.woff2":[["IBMPlexSans-ExtraLight-Latin2.68f86a19.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Latin1.woff2":[["IBMPlexSans-ExtraLight-Latin1.3b10928a.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLight-Greek.woff2":[["IBMPlexSans-ExtraLight-Greek.3bcbf49b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLight-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-ExtraLightItalic.woff2":[["IBMPlexSans-ExtraLightItalic.45c27419.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ExtraLightItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ExtraLightItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-ExtraLightItalic.woff":[["IBMPlexSans-ExtraLightItalic.f288e756.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ExtraLightItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ExtraLightItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Cyrillic.woff2":[["IBMPlexSans-ExtraLightItalic-Cyrillic.4195490c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Pi.woff2":[["IBMPlexSans-ExtraLightItalic-Pi.e2964ed9.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Latin3.woff2":[["IBMPlexSans-ExtraLightItalic-Latin3.cc2c776b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Latin2.woff2":[["IBMPlexSans-ExtraLightItalic-Latin2.f7bc85b9.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Latin1.woff2":[["IBMPlexSans-ExtraLightItalic-Latin1.694adee8.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ExtraLightItalic-Greek.woff2":[["IBMPlexSans-ExtraLightItalic-Greek.90def44f.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ExtraLightItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Italic.woff2":[["IBMPlexSans-Italic.7a9ab916.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Italic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Italic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Italic.woff":[["IBMPlexSans-Italic.68f4377f.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Italic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Italic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Cyrillic.woff2":[["IBMPlexSans-Italic-Cyrillic.e1d67bef.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Pi.woff2":[["IBMPlexSans-Italic-Pi.c5e3c5af.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Latin3.woff2":[["IBMPlexSans-Italic-Latin3.27c90b54.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Latin2.woff2":[["IBMPlexSans-Italic-Latin2.66714306.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Latin1.woff2":[["IBMPlexSans-Italic-Latin1.90813db2.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Italic-Greek.woff2":[["IBMPlexSans-Italic-Greek.35f04b42.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Light.woff2":[["IBMPlexSans-Light.c8e2cd07.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Light.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Light.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Light.woff":[["IBMPlexSans-Light.a8959f30.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Light.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Light.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Cyrillic.woff2":[["IBMPlexSans-Light-Cyrillic.60ff1226.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Pi.woff2":[["IBMPlexSans-Light-Pi.eb23eb9c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Latin3.woff2":[["IBMPlexSans-Light-Latin3.01f75aa3.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Latin2.woff2":[["IBMPlexSans-Light-Latin2.8682ca2e.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Latin1.woff2":[["IBMPlexSans-Light-Latin1.2c547f0d.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Light-Greek.woff2":[["IBMPlexSans-Light-Greek.5a17088a.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-LightItalic.woff2":[["IBMPlexSans-LightItalic.004b87d0.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-LightItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-LightItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-LightItalic.woff":[["IBMPlexSans-LightItalic.ade876e9.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-LightItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-LightItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Cyrillic.woff2":[["IBMPlexSans-LightItalic-Cyrillic.e3b9eda3.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Pi.woff2":[["IBMPlexSans-LightItalic-Pi.92310709.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Latin3.woff2":[["IBMPlexSans-LightItalic-Latin3.717ffd40.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Latin2.woff2":[["IBMPlexSans-LightItalic-Latin2.e2251219.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Latin1.woff2":[["IBMPlexSans-LightItalic-Latin1.5862efcc.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-LightItalic-Greek.woff2":[["IBMPlexSans-LightItalic-Greek.627724e9.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Medium.woff2":[["IBMPlexSans-Medium.cd012f48.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Medium.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Medium.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Medium.woff":[["IBMPlexSans-Medium.6f3301e6.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Medium.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Medium.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Cyrillic.woff2":[["IBMPlexSans-Medium-Cyrillic.19bcd196.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Pi.woff2":[["IBMPlexSans-Medium-Pi.10def546.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Latin3.woff2":[["IBMPlexSans-Medium-Latin3.ef3fcdf4.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Latin2.woff2":[["IBMPlexSans-Medium-Latin2.47bea902.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Latin1.woff2":[["IBMPlexSans-Medium-Latin1.8dece3fe.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Medium-Greek.woff2":[["IBMPlexSans-Medium-Greek.23efa1cc.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Medium-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-MediumItalic.woff2":[["IBMPlexSans-MediumItalic.fd0c7cba.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-MediumItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-MediumItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-MediumItalic.woff":[["IBMPlexSans-MediumItalic.17fd9754.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-MediumItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-MediumItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Cyrillic.woff2":[["IBMPlexSans-MediumItalic-Cyrillic.a5b93bf2.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Pi.woff2":[["IBMPlexSans-MediumItalic-Pi.e59ca8ca.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Latin3.woff2":[["IBMPlexSans-MediumItalic-Latin3.35dabfae.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Latin2.woff2":[["IBMPlexSans-MediumItalic-Latin2.6282d5e6.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Latin1.woff2":[["IBMPlexSans-MediumItalic-Latin1.58625423.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-MediumItalic-Greek.woff2":[["IBMPlexSans-MediumItalic-Greek.f0c62366.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-MediumItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Regular.woff2":[["IBMPlexSans-Regular.39b8ec9f.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Regular.woff":[["IBMPlexSans-Regular.21bd146b.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Cyrillic.woff2":[["IBMPlexSans-Regular-Cyrillic.1452fc14.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Pi.woff2":[["IBMPlexSans-Regular-Pi.0ab3c229.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Latin3.woff2":[["IBMPlexSans-Regular-Latin3.9d7f1116.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Latin2.woff2":[["IBMPlexSans-Regular-Latin2.02097a47.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Latin1.woff2":[["IBMPlexSans-Regular-Latin1.cea0fe9b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Regular-Greek.woff2":[["IBMPlexSans-Regular-Greek.7da77123.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-SemiBold.woff2":[["IBMPlexSans-SemiBold.32da7a5b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-SemiBold.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-SemiBold.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-SemiBold.woff":[["IBMPlexSans-SemiBold.bd72610e.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-SemiBold.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-SemiBold.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Cyrillic.woff2":[["IBMPlexSans-SemiBold-Cyrillic.509cc2b1.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Pi.woff2":[["IBMPlexSans-SemiBold-Pi.45eacf06.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Latin3.woff2":[["IBMPlexSans-SemiBold-Latin3.05a8e2dc.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Latin2.woff2":[["IBMPlexSans-SemiBold-Latin2.d7aa3e12.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Latin1.woff2":[["IBMPlexSans-SemiBold-Latin1.745225ee.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBold-Greek.woff2":[["IBMPlexSans-SemiBold-Greek.4aa9c177.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-SemiBoldItalic.woff2":[["IBMPlexSans-SemiBoldItalic.896da341.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-SemiBoldItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-SemiBoldItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-SemiBoldItalic.woff":[["IBMPlexSans-SemiBoldItalic.8a8053ec.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-SemiBoldItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-SemiBoldItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Cyrillic.woff2":[["IBMPlexSans-SemiBoldItalic-Cyrillic.93dea9f1.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Pi.woff2":[["IBMPlexSans-SemiBoldItalic-Pi.c5b26fa4.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Latin3.woff2":[["IBMPlexSans-SemiBoldItalic-Latin3.15682dcf.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Latin2.woff2":[["IBMPlexSans-SemiBoldItalic-Latin2.614805e9.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Latin1.woff2":[["IBMPlexSans-SemiBoldItalic-Latin1.7e01f3e6.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-SemiBoldItalic-Greek.woff2":[["IBMPlexSans-SemiBoldItalic-Greek.d2b6cda5.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Text.woff2":[["IBMPlexSans-Text.5673f01f.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Text.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Text.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Text.woff":[["IBMPlexSans-Text.47d4c10e.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Text.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Text.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Cyrillic.woff2":[["IBMPlexSans-Text-Cyrillic.f1ab252c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Pi.woff2":[["IBMPlexSans-Text-Pi.c6538f21.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Latin3.woff2":[["IBMPlexSans-Text-Latin3.0f5b801c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Latin2.woff2":[["IBMPlexSans-Text-Latin2.1ef3b87b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Latin1.woff2":[["IBMPlexSans-Text-Latin1.30fd8f17.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Text-Greek.woff2":[["IBMPlexSans-Text-Greek.1d57ef49.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Text-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-TextItalic.woff2":[["IBMPlexSans-TextItalic.c39f81f1.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-TextItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-TextItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-TextItalic.woff":[["IBMPlexSans-TextItalic.0c4852bc.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-TextItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-TextItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Cyrillic.woff2":[["IBMPlexSans-TextItalic-Cyrillic.b30d0121.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Pi.woff2":[["IBMPlexSans-TextItalic-Pi.8ee19fbf.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Latin3.woff2":[["IBMPlexSans-TextItalic-Latin3.67659a8d.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Latin2.woff2":[["IBMPlexSans-TextItalic-Latin2.10520f5a.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Latin1.woff2":[["IBMPlexSans-TextItalic-Latin1.45e00204.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-TextItalic-Greek.woff2":[["IBMPlexSans-TextItalic-Greek.b39bff6d.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-TextItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-Thin.woff2":[["IBMPlexSans-Thin.e02a0d6e.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Thin.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Thin.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-Thin.woff":[["IBMPlexSans-Thin.33d8e059.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Thin.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Thin.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Cyrillic.woff2":[["IBMPlexSans-Thin-Cyrillic.23773b4f.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Pi.woff2":[["IBMPlexSans-Thin-Pi.c3a8e29e.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Latin3.woff2":[["IBMPlexSans-Thin-Latin3.8268566c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Latin2.woff2":[["IBMPlexSans-Thin-Latin2.2609cf3c.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Latin1.woff2":[["IBMPlexSans-Thin-Latin1.8af64ff4.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-Thin-Greek.woff2":[["IBMPlexSans-Thin-Greek.ef3087a4.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Thin-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff2\\IBMPlexSans-ThinItalic.woff2":[["IBMPlexSans-ThinItalic.c8f1661b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ThinItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ThinItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\complete\\woff\\IBMPlexSans-ThinItalic.woff":[["IBMPlexSans-ThinItalic.330ec617.woff","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ThinItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-ThinItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Cyrillic.woff2":[["IBMPlexSans-ThinItalic-Cyrillic.2b5b7159.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Pi.woff2":[["IBMPlexSans-ThinItalic-Pi.04afbf7d.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Latin3.woff2":[["IBMPlexSans-ThinItalic-Latin3.db8be46a.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Latin2.woff2":[["IBMPlexSans-ThinItalic-Latin2.f55dc09b.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Latin1.woff2":[["IBMPlexSans-ThinItalic-Latin1.5db532b6.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Sans\\fonts\\split\\woff2\\IBMPlexSans-ThinItalic-Greek.woff2":[["IBMPlexSans-ThinItalic-Greek.665e1caf.woff2","node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Greek.woff2"],"node_modules/@ibm/plex/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-ThinItalic-Greek.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Bold.woff2":[["IBMPlexMono-Bold.52c35afa.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Bold.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Bold.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Bold.woff":[["IBMPlexMono-Bold.bb770c9e.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Bold.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Bold.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Bold-Cyrillic.woff2":[["IBMPlexMono-Bold-Cyrillic.af203285.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Bold-Pi.woff2":[["IBMPlexMono-Bold-Pi.a71af7be.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Bold-Latin3.woff2":[["IBMPlexMono-Bold-Latin3.a13f0e6d.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Bold-Latin2.woff2":[["IBMPlexMono-Bold-Latin2.22e22e29.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Bold-Latin1.woff2":[["IBMPlexMono-Bold-Latin1.0d204769.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-BoldItalic.woff2":[["IBMPlexMono-BoldItalic.0e81396d.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-BoldItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-BoldItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-BoldItalic.woff":[["IBMPlexMono-BoldItalic.48590ff1.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-BoldItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-BoldItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-BoldItalic-Cyrillic.woff2":[["IBMPlexMono-BoldItalic-Cyrillic.a57f4323.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-BoldItalic-Pi.woff2":[["IBMPlexMono-BoldItalic-Pi.25deae9f.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-BoldItalic-Latin3.woff2":[["IBMPlexMono-BoldItalic-Latin3.3acb2e3f.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-BoldItalic-Latin2.woff2":[["IBMPlexMono-BoldItalic-Latin2.7deead65.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-BoldItalic-Latin1.woff2":[["IBMPlexMono-BoldItalic-Latin1.827e9797.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-ExtraLight.woff2":[["IBMPlexMono-ExtraLight.506a4605.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLight.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLight.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-ExtraLight.woff":[["IBMPlexMono-ExtraLight.1307c95d.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLight.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLight.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLight-Cyrillic.woff2":[["IBMPlexMono-ExtraLight-Cyrillic.f6e2fa2d.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLight-Pi.woff2":[["IBMPlexMono-ExtraLight-Pi.833bc20b.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLight-Latin3.woff2":[["IBMPlexMono-ExtraLight-Latin3.eb12cc8d.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLight-Latin2.woff2":[["IBMPlexMono-ExtraLight-Latin2.e6aea901.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLight-Latin1.woff2":[["IBMPlexMono-ExtraLight-Latin1.f4cce197.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-ExtraLightItalic.woff2":[["IBMPlexMono-ExtraLightItalic.bba63188.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLightItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLightItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-ExtraLightItalic.woff":[["IBMPlexMono-ExtraLightItalic.c1ab6c8f.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLightItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLightItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLightItalic-Cyrillic.woff2":[["IBMPlexMono-ExtraLightItalic-Cyrillic.382d78fa.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLightItalic-Pi.woff2":[["IBMPlexMono-ExtraLightItalic-Pi.33354bed.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLightItalic-Latin3.woff2":[["IBMPlexMono-ExtraLightItalic-Latin3.fa9bff94.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLightItalic-Latin2.woff2":[["IBMPlexMono-ExtraLightItalic-Latin2.ef7e74d1.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ExtraLightItalic-Latin1.woff2":[["IBMPlexMono-ExtraLightItalic-Latin1.af697fc2.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Italic.woff2":[["IBMPlexMono-Italic.805b753a.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Italic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Italic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Italic.woff":[["IBMPlexMono-Italic.b3328849.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Italic-Cyrillic.woff2":[["IBMPlexMono-Italic-Cyrillic.e50c4c30.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Italic-Pi.woff2":[["IBMPlexMono-Italic-Pi.3fed4914.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Italic-Latin3.woff2":[["IBMPlexMono-Italic-Latin3.b78215ba.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Italic-Latin2.woff2":[["IBMPlexMono-Italic-Latin2.c433e6e2.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Italic-Latin1.woff2":[["IBMPlexMono-Italic-Latin1.f8db7c23.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Light.woff2":[["IBMPlexMono-Light.11331672.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Light.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Light.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Light.woff":[["IBMPlexMono-Light.060b1455.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Light.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Light.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Light-Cyrillic.woff2":[["IBMPlexMono-Light-Cyrillic.eddcd0cc.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Light-Pi.woff2":[["IBMPlexMono-Light-Pi.6802fd83.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Light-Latin3.woff2":[["IBMPlexMono-Light-Latin3.7649175c.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Light-Latin2.woff2":[["IBMPlexMono-Light-Latin2.ddfa2a32.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Light-Latin1.woff2":[["IBMPlexMono-Light-Latin1.9829ada4.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-LightItalic.woff2":[["IBMPlexMono-LightItalic.27c93375.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-LightItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-LightItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-LightItalic.woff":[["IBMPlexMono-LightItalic.5b339ba7.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-LightItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-LightItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-LightItalic-Cyrillic.woff2":[["IBMPlexMono-LightItalic-Cyrillic.25d2d9c2.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-LightItalic-Pi.woff2":[["IBMPlexMono-LightItalic-Pi.1d60a514.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-LightItalic-Latin3.woff2":[["IBMPlexMono-LightItalic-Latin3.1520f79f.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-LightItalic-Latin2.woff2":[["IBMPlexMono-LightItalic-Latin2.ab045171.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-LightItalic-Latin1.woff2":[["IBMPlexMono-LightItalic-Latin1.88c19a33.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Medium.woff2":[["IBMPlexMono-Medium.b5078e8a.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Medium.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Medium.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Medium.woff":[["IBMPlexMono-Medium.23f491bf.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Medium.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Medium.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Medium-Cyrillic.woff2":[["IBMPlexMono-Medium-Cyrillic.d19ecdb1.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Medium-Pi.woff2":[["IBMPlexMono-Medium-Pi.b0762626.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Medium-Latin3.woff2":[["IBMPlexMono-Medium-Latin3.f123a899.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Medium-Latin2.woff2":[["IBMPlexMono-Medium-Latin2.5a806261.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Medium-Latin1.woff2":[["IBMPlexMono-Medium-Latin1.611b47fa.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-MediumItalic.woff2":[["IBMPlexMono-MediumItalic.fd18403c.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-MediumItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-MediumItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-MediumItalic.woff":[["IBMPlexMono-MediumItalic.4958f751.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-MediumItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-MediumItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-MediumItalic-Cyrillic.woff2":[["IBMPlexMono-MediumItalic-Cyrillic.653dc507.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-MediumItalic-Pi.woff2":[["IBMPlexMono-MediumItalic-Pi.aefeb576.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-MediumItalic-Latin3.woff2":[["IBMPlexMono-MediumItalic-Latin3.aaf38200.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-MediumItalic-Latin2.woff2":[["IBMPlexMono-MediumItalic-Latin2.2e8312bb.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-MediumItalic-Latin1.woff2":[["IBMPlexMono-MediumItalic-Latin1.996054f9.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Regular.woff2":[["IBMPlexMono-Regular.5b9063e9.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Regular.woff":[["IBMPlexMono-Regular.824de0bf.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Regular-Cyrillic.woff2":[["IBMPlexMono-Regular-Cyrillic.2adf9a0b.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Regular-Pi.woff2":[["IBMPlexMono-Regular-Pi.abe187e6.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Regular-Latin3.woff2":[["IBMPlexMono-Regular-Latin3.27f053a9.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Regular-Latin2.woff2":[["IBMPlexMono-Regular-Latin2.f8f28970.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Regular-Latin1.woff2":[["IBMPlexMono-Regular-Latin1.775dd774.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-SemiBold.woff2":[["IBMPlexMono-SemiBold.f14022d8.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBold.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBold.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-SemiBold.woff":[["IBMPlexMono-SemiBold.de08c28a.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBold.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBold.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBold-Cyrillic.woff2":[["IBMPlexMono-SemiBold-Cyrillic.26dbebaa.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBold-Pi.woff2":[["IBMPlexMono-SemiBold-Pi.6691161c.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBold-Latin3.woff2":[["IBMPlexMono-SemiBold-Latin3.004bd7f2.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBold-Latin2.woff2":[["IBMPlexMono-SemiBold-Latin2.43a86a70.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBold-Latin1.woff2":[["IBMPlexMono-SemiBold-Latin1.60055b3d.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-SemiBoldItalic.woff2":[["IBMPlexMono-SemiBoldItalic.a9f05434.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBoldItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBoldItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-SemiBoldItalic.woff":[["IBMPlexMono-SemiBoldItalic.cdae2f43.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBoldItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBoldItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBoldItalic-Cyrillic.woff2":[["IBMPlexMono-SemiBoldItalic-Cyrillic.70e77c95.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBoldItalic-Pi.woff2":[["IBMPlexMono-SemiBoldItalic-Pi.220c54db.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBoldItalic-Latin3.woff2":[["IBMPlexMono-SemiBoldItalic-Latin3.9ef77f58.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBoldItalic-Latin2.woff2":[["IBMPlexMono-SemiBoldItalic-Latin2.56375bea.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-SemiBoldItalic-Latin1.woff2":[["IBMPlexMono-SemiBoldItalic-Latin1.71ba22d9.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Text.woff2":[["IBMPlexMono-Text.7aaf3faf.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Text.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Text.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Text.woff":[["IBMPlexMono-Text.26200065.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Text.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Text.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Text-Cyrillic.woff2":[["IBMPlexMono-Text-Cyrillic.a1293188.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Text-Pi.woff2":[["IBMPlexMono-Text-Pi.961890e8.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Text-Latin3.woff2":[["IBMPlexMono-Text-Latin3.587e1ad4.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Text-Latin2.woff2":[["IBMPlexMono-Text-Latin2.8ee7451c.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Text-Latin1.woff2":[["IBMPlexMono-Text-Latin1.876d827e.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-TextItalic.woff2":[["IBMPlexMono-TextItalic.813fb9a7.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-TextItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-TextItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-TextItalic.woff":[["IBMPlexMono-TextItalic.04dd279a.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-TextItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-TextItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-TextItalic-Cyrillic.woff2":[["IBMPlexMono-TextItalic-Cyrillic.fe8945d0.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-TextItalic-Pi.woff2":[["IBMPlexMono-TextItalic-Pi.b97baf65.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-TextItalic-Latin3.woff2":[["IBMPlexMono-TextItalic-Latin3.cf45942e.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-TextItalic-Latin2.woff2":[["IBMPlexMono-TextItalic-Latin2.401f9007.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-TextItalic-Latin1.woff2":[["IBMPlexMono-TextItalic-Latin1.cfd00156.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-Thin.woff2":[["IBMPlexMono-Thin.36cdcef5.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Thin.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Thin.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-Thin.woff":[["IBMPlexMono-Thin.f2f08ecb.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Thin.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Thin.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Thin-Cyrillic.woff2":[["IBMPlexMono-Thin-Cyrillic.c9aff287.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Thin-Pi.woff2":[["IBMPlexMono-Thin-Pi.ec3738e4.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Thin-Latin3.woff2":[["IBMPlexMono-Thin-Latin3.d1036afa.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Thin-Latin2.woff2":[["IBMPlexMono-Thin-Latin2.3a6cdc4a.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-Thin-Latin1.woff2":[["IBMPlexMono-Thin-Latin1.b06084d4.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin1.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff2\\IBMPlexMono-ThinItalic.woff2":[["IBMPlexMono-ThinItalic.7cf4382a.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ThinItalic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ThinItalic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\complete\\woff\\IBMPlexMono-ThinItalic.woff":[["IBMPlexMono-ThinItalic.702d5ce8.woff","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ThinItalic.woff"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ThinItalic.woff"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ThinItalic-Cyrillic.woff2":[["IBMPlexMono-ThinItalic-Cyrillic.2e7eaa13.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Cyrillic.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Cyrillic.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ThinItalic-Pi.woff2":[["IBMPlexMono-ThinItalic-Pi.ef2eca65.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Pi.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Pi.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ThinItalic-Latin3.woff2":[["IBMPlexMono-ThinItalic-Latin3.07b15632.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin3.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin3.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ThinItalic-Latin2.woff2":[["IBMPlexMono-ThinItalic-Latin2.281beb68.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin2.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin2.woff2"],"./..\\node_modules\\@ibm\\plex\\IBM-Plex-Mono\\fonts\\split\\woff2\\IBMPlexMono-ThinItalic-Latin1.woff2":[["IBMPlexMono-ThinItalic-Latin1.5c4b3b98.woff2","node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin1.woff2"],"node_modules/@ibm/plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin1.woff2"],"_css_loader":"C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/carbon-components/es/globals/js/settings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Settings.
 * @exports CarbonComponents.settings
 * @type Object
 * @property {boolean} [disableAutoInit]
 *   Disables automatic instantiation of components.
 *   By default (`CarbonComponents.disableAutoInit` is `false`),
 *   carbon-components attempts to instantiate components automatically
 *   by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
 *   or upon DOM events (e.g. clicking) on such elements.
 *   See each components' static `.init()` methods for details.
 * @property {string} [prefix=bx]
 *   Brand prefix. Should be in sync with `$prefix` Sass variable in carbon-components/src/globals/scss/_vars.scss.
 */
var settings = {
  prefix: 'bx'
};
var settings_1 = settings;
var _default = settings_1;
exports.default = _default;
},{}],"node_modules/carbon-components/es/globals/js/misc/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixin;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param {Array} a An array.
 * @returns {Array} The flattened version of the given array.
 */


function flatten(a) {
  return a.reduce(function (result, item) {
    if (Array.isArray(item)) {
      result.push.apply(result, _toConsumableArray(flatten(item)));
    } else {
      result.push(item);
    }

    return result;
  }, []);
}
/**
 * An interface for defining mix-in classes. Used with {@link mixin}.
 * @function mixinfn
 * @param {Class} ToMix The class to mix.
 * @returns {Class} The class mixed-in with the given ToMix class.
 */

/**
 * @function mixin
 * @param {...mixinfn} mixinfns The functions generating mix-ins.
 * @returns {Class} The class generated with the given mix-ins.
 */


function mixin() {
  for (var _len = arguments.length, mixinfns = new Array(_len), _key = 0; _key < _len; _key++) {
    mixinfns[_key] = arguments[_key];
  }

  return flatten(mixinfns).reduce(function (Class, mixinfn) {
    return mixinfn(Class);
  },
  /*#__PURE__*/
  function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }());
}
},{}],"node_modules/carbon-components/es/globals/js/mixins/create-component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  var CreateComponent =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(CreateComponent, _ToMix);
    /**
     * The component instances managed by this component.
     * Releasing this component also releases the components in `this.children`.
     * @type {Component[]}
     */

    /**
     * Mix-in class to manage lifecycle of component.
     * The constructor sets up this component's effective options,
     * and registers this component't instance associated to an element.
     * @implements Handle
     * @param {HTMLElement} element The element working as this component.
     * @param {Object} [options] The component options.
     */


    function CreateComponent(element) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CreateComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateComponent).call(this, element, options));
      _this.children = [];

      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        throw new TypeError('DOM element should be given to initialize this widget.');
      }
      /**
       * The element the component is of.
       * @type {Element}
       */


      _this.element = element;
      /**
       * The component options.
       * @type {Object}
       */

      _this.options = Object.assign(Object.create(_this.constructor.options), options);

      _this.constructor.components.set(_this.element, _assertThisInitialized(_assertThisInitialized(_this)));

      return _this;
    }
    /**
     * Instantiates this component of the given element.
     * @param {HTMLElement} element The element.
     */


    _createClass(CreateComponent, [{
      key: "release",

      /**
       * Releases this component's instance from the associated element.
       */
      value: function release() {
        for (var child = this.children.pop(); child; child = this.children.pop()) {
          child.release();
        }

        this.constructor.components.delete(this.element);
        return null;
      }
    }], [{
      key: "create",
      value: function create(element, options) {
        return this.components.get(element) || new this(element, options);
      }
    }]);

    return CreateComponent;
  }(ToMix);

  return CreateComponent;
}
},{}],"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  /**
   * Mix-in class to instantiate components by searching for their root elements.
   * @class InitComponentBySearch
   */
  var InitComponentBySearch =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(InitComponentBySearch, _ToMix);

    function InitComponentBySearch() {
      _classCallCheck(this, InitComponentBySearch);

      return _possibleConstructorReturn(this, _getPrototypeOf(InitComponentBySearch).apply(this, arguments));
    }

    _createClass(InitComponentBySearch, null, [{
      key: "init",

      /**
       * Instantiates component in the given node.
       * If the given element indicates that it's an component of this class, instantiates it.
       * Otherwise, instantiates components by searching for components in the given node.
       * @param {Node} target The DOM node to instantiate components in. Should be a document or an element.
       * @param {Object} [options] The component options.
       * @param {boolean} [options.selectorInit] The CSS selector to find components.
       */
      value: function init() {
        var _this = this;

        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var effectiveOptions = Object.assign(Object.create(this.options), options);

        if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
          throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
        }

        if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
          this.create(target, options);
        } else {
          Array.prototype.forEach.call(target.querySelectorAll(effectiveOptions.selectorInit), function (element) {
            return _this.create(element, options);
          });
        }
      }
    }]);

    return InitComponentBySearch;
  }(ToMix);

  return InitComponentBySearch;
}
},{}],"node_modules/carbon-components/es/globals/js/mixins/handles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  /**
   * Mix-in class to manage handles in component.
   * Managed handles are automatically released when the component with this class mixed in is released.
   * @class Handles
   * @implements Handle
   */
  var Handles =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(Handles, _ToMix);

    function Handles() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Handles);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Handles)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.handles = new Set();
      return _this;
    }

    _createClass(Handles, [{
      key: "manage",

      /**
       * Manages the given handle.
       * @param {Handle} handle The handle to manage.
       * @returns {Handle} The given handle.
       */
      value: function manage(handle) {
        this.handles.add(handle);
        return handle;
      }
      /**
       * Stop managing the given handle.
       * @param {Handle} handle The handle to stop managing.
       * @returns {Handle} The given handle.
       */

    }, {
      key: "unmanage",
      value: function unmanage(handle) {
        this.handles.delete(handle);
        return handle;
      }
    }, {
      key: "release",
      value: function release() {
        var _this2 = this;

        this.handles.forEach(function (handle) {
          handle.release();

          _this2.handles.delete(handle);
        });
        return _get(_getPrototypeOf(Handles.prototype), "release", this).call(this);
      }
    }]);

    return Handles;
  }(ToMix);

  return Handles;
}
},{}],"node_modules/carbon-components/es/globals/js/misc/on.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = on;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
}
},{}],"node_modules/carbon-components/es/components/checkbox/checkbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var stateChangeTypes = {
  true: 'true',
  false: 'false',
  mixed: 'mixed'
};

var Checkbox =
/*#__PURE__*/
function (_mixin) {
  _inherits(Checkbox, _mixin);
  /**
   * Checkbox UI.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a checkbox UI.
   */


  function Checkbox(element, options) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'click', function (event) {
      _this._handleClick(event);
    }));

    _this.manage((0, _on.default)(_this.element, 'focus', function (event) {
      _this._handleFocus(event);
    }));

    _this.manage((0, _on.default)(_this.element, 'blur', function (event) {
      _this._handleBlur(event);
    }));

    _this._indeterminateCheckbox();

    _this._initCheckbox();

    return _this;
  }

  _createClass(Checkbox, [{
    key: "_handleClick",
    value: function _handleClick() {
      if (this.element.checked === true) {
        this.element.setAttribute('checked', '');
        this.element.setAttribute('aria-checked', 'true');
        this.element.checked = true; // nested checkboxes inside labels

        if (this.element.parentElement.classList.contains(this.options.classLabel)) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'true');
        }
      } else if (this.element.checked === false) {
        this.element.removeAttribute('checked');
        this.element.setAttribute('aria-checked', 'false');
        this.element.checked = false; // nested checkboxes inside labels

        if (this.element.parentElement.classList.contains(this.options.classLabel)) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'false');
        }
      }
    }
  }, {
    key: "_handleFocus",
    value: function _handleFocus() {
      if (this.element.parentElement.classList.contains(this.options.classLabel)) {
        this.element.parentElement.classList.add(this.options.classLabelFocused);
      }
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      if (this.element.parentElement.classList.contains(this.options.classLabel)) {
        this.element.parentElement.classList.remove(this.options.classLabelFocused);
      }
    }
    /**
     * Sets the new checkbox state.
     * @param {boolean|string} [state]
     *   The new checkbox state to set. `mixed` to put checkbox in indeterminate state.
     *   If omitted, this method simply makes the style reflect `aria-checked` attribute.
     */

  }, {
    key: "setState",
    value: function setState(state) {
      if (state === undefined || stateChangeTypes[state] === undefined) {
        throw new TypeError('setState expects a value of true, false or mixed.');
      }

      this.element.setAttribute('aria-checked', state);
      this.element.indeterminate = state === stateChangeTypes.mixed;
      this.element.checked = state === stateChangeTypes.true;
      var container = this.element.closest(this.options.selectorContainedCheckboxState);

      if (container) {
        container.setAttribute(this.options.attribContainedCheckboxState, state);
      }
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(value) {
      if (value === undefined) {
        throw new TypeError('setDisabled expects a boolean value of true or false');
      }

      if (value === true) {
        this.element.setAttribute('disabled', true);
      } else if (value === false) {
        this.element.removeAttribute('disabled');
      }

      var container = this.element.closest(this.options.selectorContainedCheckboxDisabled);

      if (container) {
        container.setAttribute(this.options.attribContainedCheckboxDisabled, value);
      }
    }
  }, {
    key: "_indeterminateCheckbox",
    value: function _indeterminateCheckbox() {
      if (this.element.getAttribute('aria-checked') === 'mixed') {
        this.element.indeterminate = true;
      }

      if (this.element.indeterminate === true) {
        this.element.setAttribute('aria-checked', 'mixed');
      }

      if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.indeterminate === true) {
        this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'mixed');
      }
    }
  }, {
    key: "_initCheckbox",
    value: function _initCheckbox() {
      if (this.element.checked === true) {
        this.element.setAttribute('aria-checked', 'true');
      }

      if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.checked) {
        this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'true');
      }

      if (this.element.parentElement.classList.contains(this.options.classLabel)) {
        this.element.parentElement.setAttribute(this.options.attribContainedCheckboxDisabled, 'false');
      }

      if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.disabled) {
        this.element.parentElement.setAttribute(this.options.attribContainedCheckboxDisabled, 'true');
      }
    }
    /**
     * The map associating DOM element and copy button UI instance.
     * @member Checkbox.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode Checkbox.create .create()}, or {@linkcode Checkbox.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode Checkbox.init .init()} works.
     * @member Checkbox.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find copy button UIs.
     * @property {string} selectorContainedCheckboxState The CSS selector to find a container of checkbox preserving checked state.
     * @property {string} selectorContainedCheckboxDisabled
     *   The CSS selector to find a container of checkbox preserving disabled state.
     * @property {string} classLabel The CSS class for the label.
     * @property {string} classLabelFocused The CSS class for the focused label.
     * @property {string} attribContainedCheckboxState The attribute name for the checked state of contained checkbox.
     * @property {string} attribContainedCheckboxDisabled The attribute name for the disabled state of contained checkbox.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: ".".concat(prefix, "--checkbox"),
        selectorContainedCheckboxState: '[data-contained-checkbox-state]',
        selectorContainedCheckboxDisabled: '[data-contained-checkbox-disabled]',
        classLabel: "".concat(prefix, "--checkbox-label"),
        classLabelFocused: "".concat(prefix, "--checkbox-label__focus"),
        attribContainedCheckboxState: 'data-contained-checkbox-state',
        attribContainedCheckboxDisabled: 'data-contained-checkbox-disabled'
      };
    }
  }]);

  Checkbox.components = new WeakMap();
  Checkbox.stateChangeTypes = stateChangeTypes;
  return Checkbox;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Checkbox;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/globals/js/feature-flags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridColumns16 = exports.grid = exports.componentsX = exports.breakingChangesX = exports.default = void 0;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This file contains the list of the default values of compile-time feature flags.
 *
 * Build toolchain can replace variable here and/or the references
 * in order to apply non-default values to those feature flags.
 *
 * @example Render `foo` if `aFeatureFlag` is `true`, render `bar` otherwise.
 * // `my-component.config.js`
 * const { aFeatureFlag } = require('/path/to/feature-flags');
 * ...
 * module.exports = {
 *   variants: [
 *     {
 *       name: 'default',
 *       label: 'My component',
 *       context: {
 *         aFeatureFlag,
 *         ...
 *       },
 *     },
 *     ...
 *   ],
 * };
 *
 * // `my-component.hbs`
 * <div>
 *   {{#if aFeatureFlag}}
 *     foo
 *   {{else}}
 *     bar
 *   {{/if}}
 * </div>
 *
 * @example Emit `foo` upon clicking on component's element if `aFeatureFlag` is `true`, emit `bar` otherwise.
 * import mixin from '/path/to/globals/js/misc/mixin';
 * import createComponent from '/path/to/globals/js/mixins/create-component';
 * import initComponentBySearch from '/path/to/globals/js/mixins/init-component-by-search';
 * import handles from '/path/to/globals/js/mixins/handles';
 * import on from '/path/to/globals/js/misc/on';
 *
 * import { aFeatureFlag } from '/path/to/globals/js/feature-flags';
 *
 * class MyClass extends mixin(createComponent, initComponentBySearch, handles) {
 *   constructor(element, options) {
 *     super(element, options);
 *     this.manage(
 *       on(this.element, 'click', () => {
 *         console.log(aFeatureFlag ? 'foo' : 'bar');
 *       })
 *     );
 *   }
 * }
 */
var breakingChangesX = true;
exports.breakingChangesX = breakingChangesX;
var componentsX = true;
exports.componentsX = componentsX;
var grid = true;
exports.grid = grid;
var gridColumns16 = false;
exports.gridColumns16 = gridColumns16;
var featureFlags = {
  breakingChangesX: breakingChangesX,
  componentsX: componentsX,
  grid: grid,
  gridColumns16: gridColumns16
};
var _default = featureFlags;
exports.default = _default;
},{}],"node_modules/carbon-components/es/globals/js/mixins/evented-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  /**
   * Mix-in class to manage events associated with states.
   * @class EventedState
   */
  var EventedState =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(EventedState, _ToMix);

    function EventedState() {
      _classCallCheck(this, EventedState);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventedState).apply(this, arguments));
    }

    _createClass(EventedState, [{
      key: "_changeState",
      // eslint-disable-next-line jsdoc/check-param-names

      /**
       * The internal implementation for {@link EventedState#changeState `.changeState()`}, performing actual change in state.
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {Object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @param {EventedState~changeStateCallback} callback The callback called once changing state is finished or is canceled.
       * @private
       */
      value: function _changeState() {
        throw new Error('_changeState() should be overriden to perform actual change in state.');
      } // eslint-disable-next-line jsdoc/check-param-names

      /**
       * Changes the state of this component.
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {Object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @param {EventedState~changeStateCallback} [callback] The callback called once changing state is finished or is canceled.
       */

    }, {
      key: "changeState",
      value: function changeState() {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var state = typeof args[0] === 'string' ? args.shift() : undefined;
        var detail = Object(args[0]) === args[0] && typeof args[0] !== 'function' ? args.shift() : undefined;
        var callback = typeof args[0] === 'function' ? args.shift() : undefined;

        if (typeof this.shouldStateBeChanged === 'function' && !this.shouldStateBeChanged(state, detail)) {
          if (callback) {
            callback(null, true);
          }

          return;
        }

        var data = {
          group: detail && detail.group,
          state: state
        };
        var eventNameSuffix = [data.group, state].filter(Boolean).join('-').split('-') // Group or state may contain hyphen
        .map(function (item) {
          return item[0].toUpperCase() + item.substr(1);
        }).join('');
        var eventStart = new CustomEvent(this.options["eventBefore".concat(eventNameSuffix)], {
          bubbles: true,
          cancelable: true,
          detail: detail
        });
        var fireOnNode = detail && detail.delegatorNode || this.element;
        var canceled = !fireOnNode.dispatchEvent(eventStart);

        if (canceled) {
          if (callback) {
            var error = new Error("Changing state (".concat(JSON.stringify(data), ") has been canceled."));
            error.canceled = true;
            callback(error);
          }
        } else {
          var changeStateArgs = [state, detail].filter(Boolean);

          this._changeState.apply(this, _toConsumableArray(changeStateArgs).concat([function () {
            fireOnNode.dispatchEvent(new CustomEvent(_this.options["eventAfter".concat(eventNameSuffix)], {
              bubbles: true,
              cancelable: true,
              detail: detail
            }));

            if (callback) {
              callback();
            }
          }]));
        }
      }
      /**
       * Tests if change in state should happen or not.
       * Classes inheriting {@link EventedState `EventedState`} should override this function.
       * @function EventedState#shouldStateBeChanged
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {Object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @returns {boolean}
       *   `false` if change in state shouldn't happen, e.g. when the given new state is the same as the current one.
       */

    }]);

    return EventedState;
  }(ToMix);
  /**
   * The callback called once changing state is finished or is canceled.
   * @callback EventedState~changeStateCallback
   * @param {Error} error
   *   An error object with `true` in its `canceled` property if changing state is canceled.
   *   Cancellation happens if the handler of a custom event, that is fired before changing state happens,
   *   calls `.preventDefault()` against the event.
   * @param {boolean} keptState
   *   `true` if the call to {@link EventedState#changeState `.changeState()`} didn't cause actual change in state.
   */


  return EventedState;
}
},{}],"node_modules/carbon-components/es/globals/js/misc/event-matches.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eventMatches;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param {Event} event The event.
 * @param {string} selector The selector.
 * @returns {Element}
 *   The closest ancestor of the event target (or the event target itself) which matches the selectors given in parameter.
 */
function eventMatches(event, selector) {
  // <svg> in IE does not have `Element#msMatchesSelector()` (that should be copied to `Element#matches()` by a polyfill).
  // Also a weird behavior is seen in IE where DOM tree seems broken when `event.target` is on <svg>.
  // Therefore this function simply returns `undefined` when `event.target` is on <svg>.
  var target = event.target,
      currentTarget = event.currentTarget;

  if (typeof target.matches === 'function') {
    if (target.matches(selector)) {
      // If event target itself matches the given selector, return it
      return target;
    }

    if (target.matches("".concat(selector, " *"))) {
      var closest = target.closest(selector);

      if ((currentTarget.nodeType === Node.DOCUMENT_NODE ? currentTarget.documentElement : currentTarget).contains(closest)) {
        return closest;
      }
    }
  }

  return undefined;
}
},{}],"node_modules/carbon-components/es/components/file-uploader/file-uploader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _featureFlags = require("../../globals/js/feature-flags");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var FileUploader =
/*#__PURE__*/
function (_mixin) {
  _inherits(FileUploader, _mixin);
  /**
   * File uploader.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends eventedState
   * @extends Handles
   * @param {HTMLElement} element The element working as a file uploader.
   * @param {Object} [options] The component options. See static options.
   */


  function FileUploader(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FileUploader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileUploader).call(this, element, options));

    _this._changeState = function (state, detail, callback) {
      if (state === 'delete-filename-fileuploader') {
        _this.container.removeChild(detail.filenameElement);
      }

      if (typeof callback === 'function') {
        callback();
      }
    };

    _this._handleDeleteButton = function (evt) {
      var target = (0, _eventMatches.default)(evt, "[data-for=".concat(_this.inputId, "]"));

      if (target) {
        _this._changeState('delete-filename-fileuploader', {
          initialEvt: evt,
          filenameElement: target.parentNode
        });
      }
    };

    _this.input = _this.element.querySelector(_this.options.selectorInput);
    _this.container = _this.element.querySelector(_this.options.selectorContainer);

    if (!_this.input) {
      throw new TypeError('Cannot find the file input box.');
    }

    if (!_this.container) {
      throw new TypeError('Cannot find the file names container.');
    }

    _this.inputId = _this.input.getAttribute('id');

    _this.manage((0, _on.default)(_this.input, 'change', function () {
      return _this._displayFilenames();
    }));

    _this.manage((0, _on.default)(_this.container, 'click', _this._handleDeleteButton));

    return _this;
  }

  _createClass(FileUploader, [{
    key: "_filenamesHTML",
    value: function _filenamesHTML(name, id) {
      return "<span class=\"".concat(this.options.classSelectedFile, "\">\n      <p class=\"").concat(this.options.classFileName, "\">").concat(name, "</p>\n      <span data-for=\"").concat(id, "\" class=\"").concat(this.options.classStateContainer, "\"></span>\n    </span>");
    }
  }, {
    key: "_uploadHTML",
    value: function _uploadHTML() {
      return "\n      <div data-loading class=\"".concat(this.options.classLoading, "\">\n        <svg class=\"").concat(this.options.classLoadingSvg, "\" viewBox=\"-42 -42 84 84\">\n          <circle cx=\"0\" cy=\"0\" r=\"37.5\" />\n        </svg>\n      </div>");
    }
  }, {
    key: "_closeButtonHTML",
    value: function _closeButtonHTML() {
      if (_featureFlags.componentsX) {
        return "\n      <button class=\"".concat(this.options.classFileClose, "\" type=\"button\" aria-label=\"close\">\n      <svg aria-hidden=\"true\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n      <path fill=\"#231F20\" d=\"M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z\"/>\n      </svg>\n      </button>");
      }

      return "\n    <svg class=\"".concat(this.options.classFileClose, "\" tabindex=\"0\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" width=\"16\" height=\"16\">\n      <path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8\n        9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z\" />\n    </svg>");
    }
  }, {
    key: "_checkmarkHTML",
    value: function _checkmarkHTML() {
      return "\n      <svg class=\"".concat(this.options.classFileComplete, "\" viewBox=\"0 0 16 16\" fill-rule=\"evenodd\" width=\"16\" height=\"16\">\n       <path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.7 11.5L3.4 8.1l1.4-1.4 1.9 1.9 4.1-4.1 1.4 1.4-5.5 5.6z\"/>\n      </svg>");
    }
  }, {
    key: "_getStateContainers",
    value: function _getStateContainers() {
      var stateContainers = toArray(this.element.querySelectorAll("[data-for=".concat(this.inputId, "]")));

      if (stateContainers.length === 0) {
        throw new TypeError('State container elements not found; invoke _displayFilenames() first');
      }

      if (stateContainers[0].dataset.for !== this.inputId) {
        throw new TypeError('File input id must equal [data-for] attribute');
      }

      return stateContainers;
    }
    /**
     * Inject selected files into DOM. Invoked on change event.
     */

  }, {
    key: "_displayFilenames",
    value: function _displayFilenames() {
      var _this2 = this;

      var container = this.element.querySelector(this.options.selectorContainer);
      var HTMLString = toArray(this.input.files).map(function (file) {
        return _this2._filenamesHTML(file.name, _this2.inputId);
      }).join('');
      container.insertAdjacentHTML('afterbegin', HTMLString);
    }
  }, {
    key: "_removeState",
    value: function _removeState(element) {
      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        throw new TypeError('DOM element should be given to initialize this widget.');
      }

      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  }, {
    key: "_handleStateChange",
    value: function _handleStateChange(elements, selectIndex, html) {
      var _this3 = this;

      if (selectIndex === undefined) {
        elements.forEach(function (el) {
          _this3._removeState(el);

          el.insertAdjacentHTML('beforeend', html);
        });
      } else {
        elements.forEach(function (el, index) {
          if (index === selectIndex) {
            _this3._removeState(el);

            el.insertAdjacentHTML('beforeend', html);
          }
        });
      }
    }
    /**
     * Handles delete button.
     * @param {Event} evt The event triggering this action.
     * @private
     */

  }, {
    key: "setState",
    value: function setState(state, selectIndex) {
      var stateContainers = this._getStateContainers();

      if (state === 'edit') {
        this._handleStateChange(stateContainers, selectIndex, this._closeButtonHTML());
      }

      if (state === 'upload') {
        this._handleStateChange(stateContainers, selectIndex, this._uploadHTML());
      }

      if (state === 'complete') {
        this._handleStateChange(stateContainers, selectIndex, this._checkmarkHTML());
      }
    }
    /**
     * The map associating DOM element and file uploader instance.
     * @member FileUploader.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-file]',
        selectorInput: "input[type=\"file\"].".concat(prefix, "--file-input"),
        selectorContainer: '[data-file-container]',
        selectorCloseButton: ".".concat(prefix, "--file-close"),
        classLoading: "".concat(prefix, "--loading"),
        classLoadingSvg: "".concat(prefix, "--loading__svg"),
        classFileName: "".concat(prefix, "--file-filename"),
        classFileClose: "".concat(prefix, "--file-close"),
        classFileComplete: "".concat(prefix, "--file-complete"),
        classSelectedFile: "".concat(prefix, "--file__selected-file"),
        classStateContainer: "".concat(prefix, "--file__state-container"),
        eventBeforeDeleteFilenameFileuploader: 'fileuploader-before-delete-filename',
        eventAfterDeleteFilenameFileuploader: 'fileuploader-after-delete-filename'
      };
    }
  }]);

  FileUploader.components = new WeakMap();
  return FileUploader;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default, _handles.default));

var _default = FileUploader;
exports.default = _default;
},{"../../globals/js/feature-flags":"node_modules/carbon-components/es/globals/js/feature-flags.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/content-switcher/content-switcher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var ContentSwitcher =
/*#__PURE__*/
function (_mixin) {
  _inherits(ContentSwitcher, _mixin);
  /**
   * Set of content switcher buttons.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends EventedState
   * @extends Handles
   * @param {HTMLElement} element The element working as a set of content switcher buttons.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorButton] The CSS selector to find switcher buttons.
   * @param {string} [options.selectorButtonSelected] The CSS selector to find the selected switcher button.
   * @param {string} [options.classActive] The CSS class for switcher button's selected state.
   * @param {string} [options.eventBeforeSelected]
   *   The name of the custom event fired before a switcher button is selected.
   *   Cancellation of this event stops selection of content switcher button.
   * @param {string} [options.eventAfterSelected] The name of the custom event fired after a switcher button is selected.
   */


  function ContentSwitcher(element, options) {
    var _this;

    _classCallCheck(this, ContentSwitcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentSwitcher).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'click', function (event) {
      _this._handleClick(event);
    }));

    return _this;
  }
  /**
   * Handles click on content switcher button set.
   * If the click is on a content switcher button, activates it.
   * @param {Event} event The event triggering this method.
   */


  _createClass(ContentSwitcher, [{
    key: "_handleClick",
    value: function _handleClick(event) {
      var button = (0, _eventMatches.default)(event, this.options.selectorButton);

      if (button) {
        this.changeState({
          group: 'selected',
          item: button,
          launchingEvent: event
        });
      }
    }
    /**
     * Internal method of {@linkcode ContentSwitcher#setActive .setActive()}, to select a content switcher button.
     * @private
     * @param {Object} detail The detail of the event trigging this action.
     * @param {HTMLElement} detail.item The button to be selected.
     * @param {Function} callback Callback called when change in state completes.
     */

  }, {
    key: "_changeState",
    value: function _changeState(_ref, callback) {
      var _this2 = this;

      var item = _ref.item; // `options.selectorLink` is not defined in this class itself, code here primary is for inherited classes

      var itemLink = item.querySelector(this.options.selectorLink);

      if (itemLink) {
        toArray(this.element.querySelectorAll(this.options.selectorLink)).forEach(function (link) {
          if (link !== itemLink) {
            link.setAttribute('aria-selected', 'false');
          }
        });
        itemLink.setAttribute('aria-selected', 'true');
      }

      var selectorButtons = toArray(this.element.querySelectorAll(this.options.selectorButton));
      selectorButtons.forEach(function (button) {
        if (button !== item) {
          button.setAttribute('aria-selected', false);
          button.classList.toggle(_this2.options.classActive, false);
          toArray(button.ownerDocument.querySelectorAll(button.dataset.target)).forEach(function (element) {
            element.setAttribute('hidden', '');
            element.setAttribute('aria-hidden', 'true');
          });
        }
      });
      item.classList.toggle(this.options.classActive, true);
      item.setAttribute('aria-selected', true);
      toArray(item.ownerDocument.querySelectorAll(item.dataset.target)).forEach(function (element) {
        element.removeAttribute('hidden');
        element.setAttribute('aria-hidden', 'false');
      });

      if (callback) {
        callback();
      }
    }
    /**
     * Selects a content switcher button.
     * If the selected button has `data-target` attribute, DOM elements it points to as a CSS selector will be shown.
     * DOM elements associated with unselected buttons in the same way will be hidden.
     * @param {HTMLElement} item The button to be selected.
     * @param {ChangeState~callback} callback The callback is called once selection is finished
     * or is canceled. Will only invoke callback if it's passed in.
     */

  }, {
    key: "setActive",
    value: function setActive(item, callback) {
      this.changeState({
        group: 'selected',
        item: item
      }, function (error) {
        if (error) {
          if (callback) {
            callback(Object.assign(error, {
              item: item
            }));
          }
        } else if (callback) {
          callback(null, item);
        }
      });
    }
    /**
     * The map associating DOM element and content switcher set instance.
     * @member ContentSwitcher.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode ContentSwitcher.create .create()}, or {@linkcode ContentSwitcher.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode ContentSwitcher.init .init()} works.
     * @member ContentSwitcher.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find content switcher button set.
     * @property {string} [selectorButton] The CSS selector to find switcher buttons.
     * @property {string} [selectorButtonSelected] The CSS selector to find the selected switcher button.
     * @property {string} [classActive] The CSS class for switcher button's selected state.
     * @property {string} [eventBeforeSelected]
     *   The name of the custom event fired before a switcher button is selected.
     *   Cancellation of this event stops selection of content switcher button.
     * @property {string} [eventAfterSelected] The name of the custom event fired after a switcher button is selected.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-content-switcher]',
        selectorButton: "input[type=\"radio\"], .".concat(prefix, "--content-switcher-btn"),
        classActive: "".concat(prefix, "--content-switcher--selected"),
        eventBeforeSelected: 'content-switcher-beingselected',
        eventAfterSelected: 'content-switcher-selected'
      };
    }
  }]);

  ContentSwitcher.components = new WeakMap();
  return ContentSwitcher;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default, _handles.default));

var _default = ContentSwitcher;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/tabs/tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _contentSwitcher = _interopRequireDefault(require("../content-switcher/content-switcher"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var Tab =
/*#__PURE__*/
function (_ContentSwitcher) {
  _inherits(Tab, _ContentSwitcher);
  /**
   * Container of tabs.
   * @extends ContentSwitcher
   * @param {HTMLElement} element The element working as a container of tabs.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorMenu] The CSS selector to find the drop down menu used in narrow mode.
   * @param {string} [options.selectorTrigger] The CSS selector to find the button to open the drop down menu used in narrow mode.
   * @param {string} [options.selectorTriggerText]
   *   The CSS selector to find the element used in narrow mode showing the selected tab item.
   * @param {string} [options.selectorButton] The CSS selector to find tab containers.
   * @param {string} [options.selectorButtonSelected] The CSS selector to find the selected tab.
   * @param {string} [options.selectorLink] The CSS selector to find the links in tabs.
   * @param {string} [options.classActive] The CSS class for tab's selected state.
   * @param {string} [options.classHidden] The CSS class for the drop down menu's hidden state used in narrow mode.
   * @param {string} [options.eventBeforeSelected]
   *   The name of the custom event fired before a tab is selected.
   *   Cancellation of this event stops selection of tab.
   * @param {string} [options.eventAfterSelected] The name of the custom event fired after a tab is selected.
   */


  function Tab(element, options) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'keydown', function (event) {
      _this._handleKeyDown(event);
    }));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'click', function (event) {
      _this._handleDocumentClick(event);
    }));

    var selected = _this.element.querySelector(_this.options.selectorButtonSelected);

    if (selected) {
      _this._updateTriggerText(selected);
    }

    return _this;
  }
  /**
   * Internal method of {@linkcode Tab#setActive .setActive()}, to select a tab item.
   * @private
   * @param {Object} detail The detail of the event trigging this action.
   * @param {HTMLElement} detail.item The tab item to be selected.
   * @param {Function} callback Callback called when change in state completes.
   */


  _createClass(Tab, [{
    key: "_changeState",
    value: function _changeState(detail, callback) {
      var _this2 = this;

      _get(_getPrototypeOf(Tab.prototype), "_changeState", this).call(this, detail, function (error) {
        if (!error) {
          _this2._updateTriggerText(detail.item);
        }

        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }

        callback.apply(void 0, [error].concat(data));
      });
    }
    /**
     * Handles click on tab container.
     * * If the click is on a tab, activates it.
     * * If the click is on the button to open the drop down menu, does so.
     * @param {Event} event The event triggering this method.
     */

  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      var button = (0, _eventMatches.default)(event, this.options.selectorButton);
      var trigger = (0, _eventMatches.default)(event, this.options.selectorTrigger);

      if (button && !button.classList.contains(this.options.classButtonDisabled)) {
        _get(_getPrototypeOf(Tab.prototype), "_handleClick", this).call(this, event);

        this._updateMenuState(false);
      }

      if (trigger) {
        this._updateMenuState();
      }
    }
    /**
     * Handles click on document.
     * @param {Event} event The triggering event.
     * @private
     */

  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(event) {
      var element = this.element;
      var isOfSelf = element.contains(event.target);

      if (isOfSelf) {
        return;
      }

      this._updateMenuState(false);
    }
    /**
     * Handles arrow keys on tab container.
     * * Left keys are used to go to previous tab.
     * * Right keys are used to go to next tab.
     * @param {Event} event The event triggering this method.
     */

  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(event) {
      var _this3 = this;

      var triggerNode = (0, _eventMatches.default)(event, this.options.selectorTrigger);

      if (triggerNode) {
        if (event.which === 13) {
          this._updateMenuState();
        }

        return;
      }

      var direction = {
        37: this.constructor.NAVIGATE.BACKWARD,
        39: this.constructor.NAVIGATE.FORWARD
      }[event.which];

      if (direction) {
        var buttons = toArray(this.element.querySelectorAll(this.options.selectorButtonEnabled));
        var button = this.element.querySelector(this.options.selectorButtonSelected);
        var nextIndex = Math.max(buttons.indexOf(button) + direction, -1
        /* For `button` not found in `buttons` */
        );
        var nextIndexLooped = nextIndex >= 0 && nextIndex < buttons.length ? nextIndex : nextIndex - Math.sign(nextIndex) * buttons.length;
        this.setActive(buttons[nextIndexLooped], function (error, item) {
          if (item) {
            var link = item.querySelector(_this3.options.selectorLink);

            if (link) {
              link.focus();
            }
          }
        });
        event.preventDefault();
      }
    }
    /**
     * Shows/hides the drop down menu used in narrow mode.
     * @param {boolean} [force] `true` to show the menu, `false` to hide the menu, otherwise toggles the menu.
     */

  }, {
    key: "_updateMenuState",
    value: function _updateMenuState(force) {
      var menu = this.element.querySelector(this.options.selectorMenu);
      var trigger = this.element.querySelector(this.options.selectorTrigger);

      if (menu) {
        menu.classList.toggle(this.options.classHidden, typeof force === 'undefined' ? force : !force);

        if (menu.classList.contains(this.options.classHidden)) {
          trigger.classList.remove(this.options.classOpen);
        } else {
          trigger.classList.add(this.options.classOpen);
        }
      }
    }
    /**
     * Updates the text indicating the currently selected tab item.
     * @param {HTMLElement} target The newly selected tab item.
     */

  }, {
    key: "_updateTriggerText",
    value: function _updateTriggerText(target) {
      var triggerText = this.element.querySelector(this.options.selectorTriggerText);

      if (triggerText) {
        triggerText.textContent = target.textContent;
      }
    }
    /**
     * The map associating DOM element and tab container instance.
     * @member Tab.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode ContentSwitcher.create .create()}, or {@linkcode Tab.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode Tab.init .init()} works.
     * @member Tab.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find tab containers.
     * @property {string} [selectorMenu] The CSS selector to find the drop down menu used in narrow mode.
     * @property {string} [selectorTrigger] The CSS selector to find the button to open the drop down menu used in narrow mode.
     * @property {string} [selectorTriggerText]
     *   The CSS selector to find the element used in narrow mode showing the selected tab item.
     * @property {string} [selectorButton] The CSS selector to find tab containers.
     * @property {string} [selectorButtonSelected] The CSS selector to find the selected tab.
     * @property {string} [selectorLink] The CSS selector to find the links in tabs.
     * @property {string} [classActive] The CSS class for tab's selected state.
     * @property {string} [classHidden] The CSS class for the drop down menu's hidden state used in narrow mode.
     * @property {string} [eventBeforeSelected]
     *   The name of the custom event fired before a tab is selected.
     *   Cancellation of this event stops selection of tab.
     * @property {string} [eventAfterSelected] The name of the custom event fired after a tab is selected.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return Object.assign(Object.create(_contentSwitcher.default.options), {
        selectorInit: '[data-tabs]',
        selectorMenu: ".".concat(prefix, "--tabs__nav"),
        selectorTrigger: ".".concat(prefix, "--tabs-trigger"),
        selectorTriggerText: ".".concat(prefix, "--tabs-trigger-text"),
        selectorButton: ".".concat(prefix, "--tabs__nav-item"),
        selectorButtonEnabled: ".".concat(prefix, "--tabs__nav-item:not(.").concat(prefix, "--tabs__nav-item--disabled)"),
        selectorButtonSelected: ".".concat(prefix, "--tabs__nav-item--selected"),
        selectorLink: ".".concat(prefix, "--tabs__nav-link"),
        classActive: "".concat(prefix, "--tabs__nav-item--selected"),
        classHidden: "".concat(prefix, "--tabs__nav--hidden"),
        classOpen: "".concat(prefix, "--tabs-trigger--open"),
        classButtonDisabled: "".concat(prefix, "--tabs__nav-item--disabled"),
        eventBeforeSelected: 'tab-beingselected',
        eventAfterSelected: 'tab-selected'
      });
    }
    /**
     * Enum for navigating backward/forward.
     * @readonly
     * @member Tab.NAVIGATE
     * @type {Object}
     * @property {number} BACKWARD Navigating backward.
     * @property {number} FORWARD Navigating forward.
     */

  }]);

  Tab.components = new WeakMap();
  Tab.NAVIGATE = {
    BACKWARD: -1,
    FORWARD: 1
  };
  return Tab;
}(_contentSwitcher.default);

var _default = Tab;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../content-switcher/content-switcher":"node_modules/carbon-components/es/components/content-switcher/content-switcher.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/globals/js/misc/get-launching-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLaunchingDetails;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getLaunchingDetails(evt) {
  if (!evt || typeof evt === 'function') {
    return {
      launchingElement: null,
      launchingEvent: null
    };
  }

  var launchingElement = evt.delegateTarget || evt.currentTarget || evt;
  var launchingEvent = evt.currentTarget && evt;

  if (launchingElement && !launchingElement.nodeType) {
    throw new TypeError('DOM Node should be given for launching element.');
  }

  if (launchingEvent && !launchingEvent.type) {
    throw new TypeError('DOM event should be given for launching event.');
  }

  return {
    launchingElement: launchingElement,
    launchingEvent: launchingEvent
  };
}
},{}],"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventedState = _interopRequireDefault(require("./evented-state"));

var _getLaunchingDetails = _interopRequireDefault(require("../misc/get-launching-details"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function eventedShowHideState(ToMix) {
  /**
   * Mix-in class to launch a floating menu.
   * @class EventedShowHideState
   */
  var EventedShowHideState =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(EventedShowHideState, _ToMix);

    function EventedShowHideState() {
      _classCallCheck(this, EventedShowHideState);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventedShowHideState).apply(this, arguments));
    }

    _createClass(EventedShowHideState, [{
      key: "show",

      /**
       */

      /**
       * Switch to 'shown' state.
       * @param [evtOrElem] The launching event or element.
       * @param {EventedState~changeStateCallback} [callback] The callback.
       */
      value: function show(evtOrElem, callback) {
        if (!evtOrElem || typeof evtOrElem === 'function') {
          callback = evtOrElem; // eslint-disable-line no-param-reassign
        }

        this.changeState('shown', (0, _getLaunchingDetails.default)(evtOrElem), callback);
      }
      /**
       * Switch to 'hidden' state.
       * @param [evtOrElem] The launching event or element.
       * @param {EventedState~changeStateCallback} [callback] The callback.
       */

    }, {
      key: "hide",
      value: function hide(evtOrElem, callback) {
        if (!evtOrElem || typeof evtOrElem === 'function') {
          callback = evtOrElem; // eslint-disable-line no-param-reassign
        }

        this.changeState('hidden', (0, _getLaunchingDetails.default)(evtOrElem), callback);
      }
    }]);

    return EventedShowHideState;
  }(ToMix);

  return EventedShowHideState;
}

var _exports = [_eventedState.default, eventedShowHideState];
var _default = _exports;
exports.default = _default;
},{"./evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../misc/get-launching-details":"node_modules/carbon-components/es/globals/js/misc/get-launching-details.js"}],"node_modules/carbon-components/es/globals/js/mixins/track-blur.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _on = _interopRequireDefault(require("../misc/on"));

var _handles = _interopRequireDefault(require("./handles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function trackBlur(ToMix) {
  var TrackBlur =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(TrackBlur, _ToMix);
    /**
     * Mix-in class to add an handler for losing focus.
     * @extends Handles
     * @param {HTMLElement} element The element working as this component.
     * @param {Object} [options] The component options.
     */


    function TrackBlur(element, options) {
      var _this;

      _classCallCheck(this, TrackBlur);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackBlur).call(this, element, options));
      var hasFocusin = 'onfocusin' in window;
      var focusinEventName = hasFocusin ? 'focusin' : 'focus';

      _this.manage((0, _on.default)(_this.element.ownerDocument, focusinEventName, function (event) {
        if (!_this.element.contains(event.target)) {
          _this.handleBlur(event);
        }
      }, !hasFocusin));

      return _this;
    }
    /**
     * The method called when this component loses focus.
     * @abstract
     */


    _createClass(TrackBlur, [{
      key: "handleBlur",
      value: function handleBlur() {
        throw new Error('Components inheriting TrackBlur mix-in must implement handleBlur() method.');
      }
    }]);

    return TrackBlur;
  }(ToMix);

  return TrackBlur;
}

var _exports = [_handles.default, trackBlur];
var _default = _exports;
exports.default = _default;
},{"../misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","./handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js"}],"node_modules/carbon-components/es/globals/js/misc/resize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// mdn resize function
var optimizedResize =
/* #__PURE__ */
function optimizedResize() {
  var callbacks = [];
  var running = false; // run the actual callbacks

  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });
    running = false;
  } // fired on resize event


  function resize() {
    if (!running) {
      running = true;
      window.requestAnimationFrame(runCallbacks);
    }
  } // adds callback to loop


  function addCallback(callback) {
    if (callback) {
      var index = callbacks.indexOf(callback);

      if (index < 0) {
        callbacks.push(callback);
      }
    }
  }

  return {
    // public method to add additional callback
    add: function add(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }

      addCallback(callback);
      return {
        release: function release() {
          var index = callbacks.indexOf(callback);

          if (index >= 0) {
            callbacks.splice(index, 1);
          }
        }
      };
    }
  };
}();

var _default = optimizedResize;
exports.default = _default;
},{}],"node_modules/carbon-components/es/components/floating-menu/floating-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFloatingPosition = exports.DIRECTION_BOTTOM = exports.DIRECTION_RIGHT = exports.DIRECTION_TOP = exports.DIRECTION_LEFT = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _eventedShowHideState = _interopRequireDefault(require("../../globals/js/mixins/evented-show-hide-state"));

var _trackBlur = _interopRequireDefault(require("../../globals/js/mixins/track-blur"));

var _getLaunchingDetails = _interopRequireDefault(require("../../globals/js/misc/get-launching-details"));

var _resize = _interopRequireDefault(require("../../globals/js/misc/resize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * The structure for the position of floating menu.
 * @typedef {Object} FloatingMenu~position
 * @property {number} left The left position.
 * @property {number} top The top position.
 * @property {number} right The right position.
 * @property {number} bottom The bottom position.
 */

/**
 * The structure for the size of floating menu.
 * @typedef {Object} FloatingMenu~size
 * @property {number} width The width.
 * @property {number} height The height.
 */

/**
 * The structure for the position offset of floating menu.
 * @typedef {Object} FloatingMenu~offset
 * @property {number} top The top position.
 * @property {number} left The left position.
 */
var DIRECTION_LEFT = 'left';
exports.DIRECTION_LEFT = DIRECTION_LEFT;
var DIRECTION_TOP = 'top';
exports.DIRECTION_TOP = DIRECTION_TOP;
var DIRECTION_RIGHT = 'right';
exports.DIRECTION_RIGHT = DIRECTION_RIGHT;
var DIRECTION_BOTTOM = 'bottom';
/**
 * @param {Object} params The parameters.
 * @param {FloatingMenu~size} params.menuSize The size of the menu.
 * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
 * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
 * @param {string} [params.direction=bottom] The menu direction.
 * @param {number} [params.scrollX=0] The scroll position of the viewport.
 * @param {number} [params.scrollY=0] The scroll position of the viewport.
 * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
 * @private
 */

exports.DIRECTION_BOTTOM = DIRECTION_BOTTOM;

var getFloatingPosition = function getFloatingPosition(_ref) {
  var _DIRECTION_LEFT$DIREC;

  var menuSize = _ref.menuSize,
      refPosition = _ref.refPosition,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {} : _ref$offset,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
      _ref$scrollX = _ref.scrollX,
      scrollX = _ref$scrollX === void 0 ? 0 : _ref$scrollX,
      _ref$scrollY = _ref.scrollY,
      scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
  var _refPosition$left = refPosition.left,
      refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
      _refPosition$top = refPosition.top,
      refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
      _refPosition$right = refPosition.right,
      refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
      _refPosition$bottom = refPosition.bottom,
      refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
  var width = menuSize.width,
      height = menuSize.height;
  var _offset$top = offset.top,
      top = _offset$top === void 0 ? 0 : _offset$top,
      _offset$left = offset.left,
      left = _offset$left === void 0 ? 0 : _offset$left;
  var refCenterHorizontal = (refLeft + refRight) / 2;
  var refCenterVertical = (refTop + refBottom) / 2;
  return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, {
    left: refLeft - width + scrollX - left,
    top: refCenterVertical - height / 2 + scrollY + top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, {
    left: refCenterHorizontal - width / 2 + scrollX + left,
    top: refTop - height + scrollY - top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, {
    left: refRight + scrollX + left,
    top: refCenterVertical - height / 2 + scrollY + top
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, {
    left: refCenterHorizontal - width / 2 + scrollX + left,
    top: refBottom + scrollY + top
  }), _DIRECTION_LEFT$DIREC)[direction];
};

exports.getFloatingPosition = getFloatingPosition;

var FloatingMenu =
/*#__PURE__*/
function (_mixin) {
  _inherits(FloatingMenu, _mixin);
  /**
   * Floating menu.
   * @extends CreateComponent
   * @extends EventedShowHideState
   * @param {HTMLElement} element The element working as a modal dialog.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorContainer] The CSS selector to find the container to put this menu in.
   * @param {string} [options.attribDirection] The attribute name to specify menu placement direction (top/right/bottom/left).
   * @param {string} [options.classShown] The CSS class for shown state, for the menu.
   * @param {string} [options.classRefShown] The CSS class for shown state, for the trigger button.
   * @param {string} [options.eventBeforeShown]
   *   The name of the custom event fired before this menu is shown.
   *   Cancellation of this event stops hiding the menu.
   * @param {string} [options.eventAfterShown]
   *   The name of the custom event telling that menu is sure shown
   *   without being canceled by the event handler named by `eventBeforeShown` option (`floating-menu-beingshown`).
   * @param {string} [options.eventBeforeHidden]
   *   The name of the custom event fired before this menu is hidden.
   *   Cancellation of this event stops hiding the menu.
   * @param {string} [options.eventAfterHidden]
   *   The name of the custom event telling that menu is sure hidden
   *   without being canceled by the event handler named by `eventBeforeHidden` option (`floating-menu-beinghidden`).
   * @param {Element} [options.refNode] The launching element of the menu. Used for calculating the geometry of the menu.
   * @param {Object} [options.offset] The offset to adjust the geometry of the menu. Should have `top`/`left` properties.
   */


  function FloatingMenu(element, options) {
    var _this;

    _classCallCheck(this, FloatingMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FloatingMenu).call(this, element, options));

    var attribDirectionValue = _this.element.getAttribute(_this.options.attribDirection);

    if (!_this.options.direction) {
      _this.options.direction = attribDirectionValue || 'bottom';
    }

    if (!attribDirectionValue) {
      // Update attribute for styling
      _this.element.setAttribute(_this.options.attribDirection, _this.options.direction);
    }

    return _this;
  }
  /**
   * Focuses back on the trigger button if this component loses focus.
   */


  _createClass(FloatingMenu, [{
    key: "handleBlur",
    value: function handleBlur(event) {
      if (this.element.classList.contains(this.options.classShown)) {
        this.changeState('hidden', (0, _getLaunchingDetails.default)(event));
        var refNode = this.options.refNode;

        if (this.element.contains(event.relatedTarget) && refNode && event.target !== refNode) {
          HTMLElement.prototype.focus.call(refNode); // SVGElement in IE11 does not have `.focus()` method
        }
      }
    }
    /**
     * @private
     * @returns {Element} The element that this menu should be placed to.
     */

  }, {
    key: "_getContainer",
    value: function _getContainer() {
      return this.element.closest(this.options.selectorContainer) || this.element.ownerDocument.body;
    }
    /**
     * @private
     * @returns {Object} The menu position, with `top` and `left` properties.
     */

  }, {
    key: "_getPos",
    value: function _getPos() {
      var element = this.element;
      var _this$options = this.options,
          refNode = _this$options.refNode,
          offset = _this$options.offset,
          direction = _this$options.direction;

      if (!refNode) {
        throw new Error('Cannot find the refernce node for positioning floating menu.');
      }

      return getFloatingPosition({
        menuSize: element.getBoundingClientRect(),
        refPosition: refNode.getBoundingClientRect(),
        offset: typeof offset !== 'function' ? offset : offset(element, direction, refNode),
        direction: direction,
        scrollX: refNode.ownerDocument.defaultView.pageXOffset,
        scrollY: refNode.ownerDocument.defaultView.pageYOffset
      });
    }
    /**
     * Sees if the computed style is what this floating menu expects.
     * @private
     */

  }, {
    key: "_testStyles",
    value: function _testStyles() {
      if (!this.options.debugStyle) {
        return;
      }

      var element = this.element;
      var computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
      var styles = {
        position: 'absolute',
        right: 'auto',
        margin: 0
      };
      Object.keys(styles).forEach(function (key) {
        var expected = typeof styles[key] === 'number' ? parseFloat(styles[key]) : styles[key];
        var actual = computedStyle.getPropertyValue(key);

        if (expected !== actual) {
          // eslint-disable-next-line no-console
          console.warn("Floating menu component expects ".concat(key, ": ").concat(styles[key], " style."));
        }
      });
    }
    /**
     * Places the menu.
     * @private
     */

  }, {
    key: "_place",
    value: function _place() {
      var element = this.element;

      var _this$_getPos = this._getPos(),
          left = _this$_getPos.left,
          top = _this$_getPos.top;

      element.style.left = "".concat(left, "px");
      element.style.top = "".concat(top, "px");

      this._testStyles();
    }
    /**
     * @param {string} state The new state.
     * @returns {boolean} `true` of the current state is different from the given new state.
     */

  }, {
    key: "shouldStateBeChanged",
    value: function shouldStateBeChanged(state) {
      return (state === 'shown' || state === 'hidden') && state !== (this.element.classList.contains(this.options.classShown) ? 'shown' : 'hidden');
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {Object} detail The detail of the event trigging this action.
     * @param {Function} callback Callback called when change in state completes.
     */

  }, {
    key: "_changeState",
    value: function _changeState(state, detail, callback) {
      var _this2 = this;

      var shown = state === 'shown';
      var _this$options2 = this.options,
          refNode = _this$options2.refNode,
          classShown = _this$options2.classShown,
          classRefShown = _this$options2.classRefShown;

      if (!refNode) {
        throw new TypeError('Cannot find the refernce node for changing the style.');
      }

      this.element.classList.toggle(classShown, shown);

      if (classRefShown) {
        refNode.classList.toggle(classRefShown, shown);
      }

      if (state === 'shown') {
        if (!this.hResize) {
          this.hResize = _resize.default.add(function () {
            _this2._place();
          });
        }

        this._getContainer().appendChild(this.element);

        this._place(); // IE11 puts focus on elements with `.focus()`, even ones without `tabindex` attribute


        if (!this.element.hasAttribute(this.options.attribAvoidFocusOnOpen)) {
          (this.element.querySelector(this.options.selectorPrimaryFocus) || this.element).focus();
        }
      }

      if (state === 'hidden' && this.hResize) {
        this.hResize.release();
        this.hResize = null;
      }

      callback();
    }
  }, {
    key: "release",
    value: function release() {
      if (this.hResize) {
        this.hResize.release();
        this.hResize = null;
      }

      _get(_getPrototypeOf(FloatingMenu.prototype), "release", this).call(this);
    }
  }]);

  FloatingMenu.options = {
    selectorContainer: '[data-floating-menu-container]',
    selectorPrimaryFocus: '[data-floating-menu-primary-focus]',
    attribDirection: 'data-floating-menu-direction',
    attribAvoidFocusOnOpen: 'data-avoid-focus-on-open',
    classShown: '',
    // Should be provided from options arg in constructor
    classRefShown: '',
    // Should be provided from options arg in constructor
    eventBeforeShown: 'floating-menu-beingshown',
    eventAfterShown: 'floating-menu-shown',
    eventBeforeHidden: 'floating-menu-beinghidden',
    eventAfterHidden: 'floating-menu-hidden',
    refNode: null,
    // Should be provided from options arg in constructor
    offset: {
      left: 0,
      top: 0
    }
  };
  FloatingMenu.components = new WeakMap();
  return FloatingMenu;
}((0, _mixin2.default)(_createComponent.default, _eventedShowHideState.default, _trackBlur.default));

var _default = FloatingMenu;
exports.default = _default;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/evented-show-hide-state":"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js","../../globals/js/mixins/track-blur":"node_modules/carbon-components/es/globals/js/mixins/track-blur.js","../../globals/js/misc/get-launching-details":"node_modules/carbon-components/es/globals/js/misc/get-launching-details.js","../../globals/js/misc/resize":"node_modules/carbon-components/es/globals/js/misc/resize.js"}],"node_modules/carbon-components/es/components/overflow-menu/overflow-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMenuOffset = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedShowHideState = _interopRequireDefault(require("../../globals/js/mixins/evented-show-hide-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _floatingMenu = _interopRequireWildcard(require("../floating-menu/floating-menu"));

var _getLaunchingDetails = _interopRequireDefault(require("../../globals/js/misc/get-launching-details"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _featureFlags = require("../../globals/js/feature-flags");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * The CSS property names of the arrow keyed by the floating menu direction.
 * @type {Object<string, string>}
 */
var triggerButtonPositionProps =
/* #__PURE__ */
function () {
  var _ref;

  return _ref = {}, _defineProperty(_ref, _floatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_ref, _floatingMenu.DIRECTION_BOTTOM, 'top'), _defineProperty(_ref, _floatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_ref, _floatingMenu.DIRECTION_RIGHT, 'right'), _ref;
}();
/**
 * Determines how the position of arrow should affect the floating menu position.
 * @type {Object<string, number>}
 */


var triggerButtonPositionFactors =
/* #__PURE__ */
function () {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, _floatingMenu.DIRECTION_TOP, -2), _defineProperty(_ref2, _floatingMenu.DIRECTION_BOTTOM, -1), _defineProperty(_ref2, _floatingMenu.DIRECTION_LEFT, -2), _defineProperty(_ref2, _floatingMenu.DIRECTION_RIGHT, -1), _ref2;
}();
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} direction The floating menu direction.
 * @param {Element} trigger The trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */


var getMenuOffset = function getMenuOffset(menuBody, direction, trigger) {
  var triggerButtonPositionProp = triggerButtonPositionProps[direction];
  var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

  if (!triggerButtonPositionProp || !triggerButtonPositionFactor) {
    console.warn('Wrong floating menu direction:', direction); // eslint-disable-line no-console
  }

  var menuWidth = menuBody.offsetWidth;
  var menuHeight = menuBody.offsetHeight;
  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var values = [triggerButtonPositionProp, 'left', 'width', 'height', 'border-top-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-.]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var left = values.left,
        width = values.width,
        height = values.height,
        borderTopWidth = values['border-top-width'];
    return {
      left: menuWidth / 2 - (left + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2),
      top: Math.sqrt(Math.pow(borderTopWidth, 2) * 2) + triggerButtonPositionFactor * values[triggerButtonPositionProp]
    };
  }

  if (_featureFlags.componentsX) {
    // eslint-disable-next-line no-use-before-define
    var menu = OverflowMenu.components.get(trigger);

    if (!menu) {
      throw new TypeError('Overflow menu instance cannot be found.');
    }

    var flip = menuBody.classList.contains(menu.options.classMenuFlip);

    if (triggerButtonPositionProp === 'top' || triggerButtonPositionProp === 'bottom') {
      var triggerWidth = trigger.offsetWidth;
      return {
        left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
        top: 0
      };
    }

    if (triggerButtonPositionProp === 'left' || triggerButtonPositionProp === 'right') {
      var triggerHeight = trigger.offsetHeight;
      return {
        left: 0,
        top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
      };
    }
  }

  return undefined;
};

exports.getMenuOffset = getMenuOffset;

var OverflowMenu =
/*#__PURE__*/
function (_mixin) {
  _inherits(OverflowMenu, _mixin);
  /**
   * Overflow menu.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a modal dialog.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorOptionMenu] The CSS selector to find the menu.
   * @param {string} [options.classShown] The CSS class for the shown state, for the trigger UI.
   * @param {string} [options.classMenuShown] The CSS class for the shown state, for the menu.
   * @param {string} [options.classMenuFlip] The CSS class for the flipped state of the menu.
   * @param {Object} [options.objMenuOffset] The offset locating the menu for the non-flipped state.
   * @param {Object} [options.objMenuOffsetFlip] The offset locating the menu for the flipped state.
   */


  function OverflowMenu(element, options) {
    var _this;

    _classCallCheck(this, OverflowMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverflowMenu).call(this, element, options));

    _this.getCurrentNavigation = function () {
      var focused = _this.element.ownerDocument.activeElement;
      return focused.nodeType === Node.ELEMENT_NODE && focused.matches(_this.options.selectorItem) ? focused : null;
    };

    _this.navigate = function (direction) {
      var items = _toConsumableArray(_this.element.ownerDocument.querySelectorAll(_this.options.selectorItem));

      var start = _this.getCurrentNavigation() || _this.element.querySelector(_this.options.selectorItemSelected);

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(index, length) {
          return index + (index >= 0 ? 0 : length);
        };

        var handleOverflow = function handleOverflow(index, length) {
          return index - (index < length ? 0 : length);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
        if (!current.matches(_this.options.selectorItemHidden) && !current.parentNode.matches(_this.options.selectorItemHidden) && !current.matches(_this.options.selectorItemSelected)) {
          current.focus();
          break;
        }
      }
    };

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'click', function (event) {
      _this._handleDocumentClick(event);

      _this.wasOpenBeforeClick = undefined;
    }));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'keydown', function (event) {
      _this._handleKeyPress(event);
    }));

    _this.manage((0, _on.default)(_this.element, 'mousedown', function () {
      _this.wasOpenBeforeClick = element.classList.contains(_this.options.classShown);
    }));

    return _this;
  }
  /**
   * Changes the shown/hidden state.
   * @param {string} state The new state.
   * @param {Object} detail The detail of the event trigging this action.
   * @param {Function} callback Callback called when change in state completes.
   */


  _createClass(OverflowMenu, [{
    key: "changeState",
    value: function changeState(state, detail, callback) {
      if (state === 'hidden') {
        this.element.setAttribute('aria-expanded', 'false');
      } else {
        this.element.setAttribute('aria-expanded', 'true');
      }

      if (!this.optionMenu) {
        var optionMenu = this.element.querySelector(this.options.selectorOptionMenu);

        if (!optionMenu) {
          throw new Error('Cannot find the target menu.');
        } // Lazily create a component instance for menu


        this.optionMenu = _floatingMenu.default.create(optionMenu, {
          refNode: this.element,
          classShown: this.options.classMenuShown,
          classRefShown: this.options.classShown,
          offset: this.options.objMenuOffset
        });
        this.children.push(this.optionMenu);
      }

      if (this.optionMenu.element.classList.contains(this.options.classMenuFlip)) {
        this.optionMenu.options.offset = this.options.objMenuOffsetFlip;
      } // Delegates the action of changing state to the menu.
      // (And thus the before/after shown/hidden events are fired from the menu)


      this.optionMenu.changeState(state, Object.assign(detail, {
        delegatorNode: this.element
      }), callback);
    }
    /**
     * Handles click on document.
     * @param {Event} event The triggering event.
     * @private
     */

  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(event) {
      var element = this.element,
          optionMenu = this.optionMenu,
          wasOpenBeforeClick = this.wasOpenBeforeClick;
      var isOfSelf = element.contains(event.target);
      var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
      var shouldBeOpen = isOfSelf && !wasOpenBeforeClick;
      var state = shouldBeOpen ? 'shown' : 'hidden';

      if (isOfSelf) {
        if (element.tagName === 'A') {
          event.preventDefault();
        }

        event.delegateTarget = element; // eslint-disable-line no-param-reassign
      }

      if (!isOfMenu || (0, _eventMatches.default)(event, this.options.selectorItem)) {
        this.changeState(state, (0, _getLaunchingDetails.default)(event), function () {
          if (state === 'hidden' && isOfMenu) {
            element.focus();
          }
        });
      }
    }
    /**
     * Provides the element to move focus from
     * @returns {Element} Currently highlighted element.
     */

  }, {
    key: "_handleKeyPress",

    /**
     * Handles key press on document.
     * @param {Event} event The triggering event.
     * @private
     */
    value: function _handleKeyPress(event) {
      var key = event.which;
      var element = this.element,
          optionMenu = this.optionMenu,
          options = this.options;
      var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
      var isExpanded = this.element.classList.contains(this.options.classShown);

      switch (key) {
        // Esc
        case 27:
          this.changeState('hidden', (0, _getLaunchingDetails.default)(event), function () {
            if (isOfMenu) {
              element.focus();
            }
          });
          break;
        // Enter || Space bar

        case 13:
        case 32:
          {
            if (!isExpanded && this.element.ownerDocument.activeElement !== this.element) {
              return;
            }

            var isOfSelf = element.contains(event.target);
            var shouldBeOpen = isOfSelf && !element.classList.contains(options.classShown);
            var state = shouldBeOpen ? 'shown' : 'hidden';

            if (isOfSelf) {
              event.delegateTarget = element; // eslint-disable-line no-param-reassign

              event.preventDefault(); // prevent scrolling

              this.changeState(state, (0, _getLaunchingDetails.default)(event), function () {
                if (state === 'hidden' && isOfMenu) {
                  element.focus();
                }
              });
            }

            break;
          }

        case 38: // up arrow

        case 40:
          // down arrow
          {
            if (!isExpanded) {
              return;
            }

            event.preventDefault(); // prevent scrolling

            var direction = {
              38: -1,
              40: 1
            }[event.which];
            this.navigate(direction);
          }
          break;

        default:
          break;
      }
    }
  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-overflow-menu]',
        selectorOptionMenu: ".".concat(prefix, "--overflow-menu-options"),
        selectorItem: "\n        .".concat(prefix, "--overflow-menu-options--open >\n        .").concat(prefix, "--overflow-menu-options__option:not(.").concat(prefix, "--overflow-menu-options__option--disabled) >\n        .").concat(prefix, "--overflow-menu-options__btn\n      "),
        classShown: "".concat(prefix, "--overflow-menu--open"),
        classMenuShown: "".concat(prefix, "--overflow-menu-options--open"),
        classMenuFlip: "".concat(prefix, "--overflow-menu--flip"),
        objMenuOffset: getMenuOffset,
        objMenuOffsetFlip: getMenuOffset
      };
    }
  }]);

  OverflowMenu.components = new WeakMap();
  return OverflowMenu;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedShowHideState.default, _handles.default));

var _default = OverflowMenu;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-show-hide-state":"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../floating-menu/floating-menu":"node_modules/carbon-components/es/components/floating-menu/floating-menu.js","../../globals/js/misc/get-launching-details":"node_modules/carbon-components/es/globals/js/misc/get-launching-details.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/feature-flags":"node_modules/carbon-components/es/globals/js/feature-flags.js"}],"node_modules/carbon-components/es/globals/js/mixins/init-component-by-launcher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _eventMatches = _interopRequireDefault(require("../misc/event-matches"));

var _on = _interopRequireDefault(require("../misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  /**
   * Mix-in class to instantiate components events on launcher button.
   * @class InitComponentByLauncher
   */
  var InitComponentByLauncher =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(InitComponentByLauncher, _ToMix);

    function InitComponentByLauncher() {
      _classCallCheck(this, InitComponentByLauncher);

      return _possibleConstructorReturn(this, _getPrototypeOf(InitComponentByLauncher).apply(this, arguments));
    }

    _createClass(InitComponentByLauncher, null, [{
      key: "init",

      /**
       * `true` suggests that this component is lazily initialized upon an action/event, etc.
       * @type {boolean}
       */

      /**
       * Instantiates this component in the given element.
       * If the given element indicates that it's an component of this class, instantiates it.
       * Otherwise, instantiates this component by clicking on launcher buttons
       * (buttons with attribute that `options.attribInitTarget` points to) of this component in the given node.
       * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
       * @param {Object} [options] The component options.
       * @param {string} [options.selectorInit] The CSS selector to find this component.
       * @param {string} [options.attribInitTarget] The attribute name in the launcher buttons to find target component.
       * @returns {Handle} The handle to remove the event listener to handle clicking.
       */
      value: function init() {
        var _this = this;

        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var effectiveOptions = Object.assign(Object.create(this.options), options);

        if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
          throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
        }

        if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
          this.create(target, options);
        } else {
          var handles = effectiveOptions.initEventNames.map(function (name) {
            return (0, _on.default)(target, name, function (event) {
              var launcher = (0, _eventMatches.default)(event, "[".concat(effectiveOptions.attribInitTarget, "]"));

              if (launcher) {
                event.delegateTarget = launcher; // eslint-disable-line no-param-reassign

                var elements = launcher.ownerDocument.querySelectorAll(launcher.getAttribute(effectiveOptions.attribInitTarget));

                if (elements.length > 1) {
                  throw new Error('Target widget must be unique.');
                }

                if (elements.length === 1) {
                  if (launcher.tagName === 'A') {
                    event.preventDefault();
                  }

                  var component = _this.create(elements[0], options);

                  if (typeof component.createdByLauncher === 'function') {
                    component.createdByLauncher(event);
                  }
                }
              }
            });
          });
          return {
            release: function release() {
              for (var handle = handles.pop(); handle; handle = handles.pop()) {
                handle.release();
              }
            }
          };
        }

        return '';
      }
    }]);

    InitComponentByLauncher.forLazyInit = true;
    return InitComponentByLauncher;
  }(ToMix);

  return InitComponentByLauncher;
}
},{"../misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/modal/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentByLauncher = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-launcher"));

var _eventedShowHideState = _interopRequireDefault(require("../../globals/js/mixins/evented-show-hide-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Modal =
/*#__PURE__*/
function (_mixin) {
  _inherits(Modal, _mixin);
  /**
   * Modal dialog.
   * @extends CreateComponent
   * @extends InitComponentByLauncher
   * @extends EventedShowHideState
   * @extends Handles
   * @param {HTMLElement} element The element working as a modal dialog.
   * @param {Object} [options] The component options.
   * @param {string} [options.classVisible] The CSS class for the visible state.
   * @param {string} [options.eventBeforeShown]
   *   The name of the custom event fired before this modal is shown.
   *   Cancellation of this event stops showing the modal.
   * @param {string} [options.eventAfterShown]
   *   The name of the custom event telling that modal is sure shown
   *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
   * @param {string} [options.eventBeforeHidden]
   *   The name of the custom event fired before this modal is hidden.
   *   Cancellation of this event stops hiding the modal.
   * @param {string} [options.eventAfterHidden]
   *   The name of the custom event telling that modal is sure hidden
   *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
   */


  function Modal(element, options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, element, options));
    _this._handleFocusinListener = void 0;
    _this._handleKeydownListener = void 0;

    _this._handleFocusin = function (evt) {
      if (_this.element.classList.contains(_this.options.classVisible) && !_this.element.contains(evt.target) && _this.options.selectorsFloatingMenus.every(function (selector) {
        return !(0, _eventMatches.default)(evt, selector);
      })) {
        _this.element.focus();
      }
    };

    _this._hookCloseActions();

    return _this;
  }
  /**
   * The handle for `focusin` event listener.
   * Used for "focus-wrap" feature.
   * @type {Handle}
   * @private
   */


  _createClass(Modal, [{
    key: "createdByLauncher",

    /**
     * A method that runs when `.init()` is called from `initComponentByLauncher`.
     * @param {Event} evt The event fired on the launcher button.
     */
    value: function createdByLauncher(evt) {
      this.show(evt);
    }
    /**
     * Determines whether or not to emit events and callback function when `.changeState()` is called from `eventedState`.
     * @param {string} state The new state.
     * @returns {boolean} `true` if the given `state` is different from current state.
     */

  }, {
    key: "shouldStateBeChanged",
    value: function shouldStateBeChanged(state) {
      if (state === 'shown') {
        return !this.element.classList.contains(this.options.classVisible);
      }

      return this.element.classList.contains(this.options.classVisible);
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {Object} detail The detail data to be included in the event that will be fired.
     * @param {Function} callback Callback called when change in state completes.
     */

  }, {
    key: "_changeState",
    value: function _changeState(state, detail, callback) {
      var _this2 = this;

      var handleTransitionEnd;

      var transitionEnd = function transitionEnd() {
        if (handleTransitionEnd) {
          handleTransitionEnd = _this2.unmanage(handleTransitionEnd).release();
        }

        if (state === 'shown' && _this2.element.offsetWidth > 0 && _this2.element.offsetHeight > 0) {
          (_this2.element.querySelector(_this2.options.selectorPrimaryFocus) || _this2.element).focus();
        }

        callback();
      };

      if (this._handleFocusinListener) {
        this._handleFocusinListener = this.unmanage(this._handleFocusinListener).release();
      }

      if (state === 'shown') {
        var hasFocusin = 'onfocusin' in this.element.ownerDocument.defaultView;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        this._handleFocusinListener = this.manage((0, _on.default)(this.element.ownerDocument, focusinEventName, this._handleFocusin, !hasFocusin));
      }

      if (state === 'hidden') {
        this.element.classList.toggle(this.options.classVisible, false);
      } else if (state === 'shown') {
        this.element.classList.toggle(this.options.classVisible, true);
      }

      handleTransitionEnd = this.manage((0, _on.default)(this.element, 'transitionend', transitionEnd));
    }
  }, {
    key: "_hookCloseActions",
    value: function _hookCloseActions() {
      var _this3 = this;

      this.manage((0, _on.default)(this.element, 'click', function (evt) {
        var closeButton = (0, _eventMatches.default)(evt, _this3.options.selectorModalClose);

        if (closeButton) {
          evt.delegateTarget = closeButton; // eslint-disable-line no-param-reassign
        }

        if (closeButton || evt.target === _this3.element) {
          _this3.hide(evt);
        }
      }));

      if (this._handleKeydownListener) {
        this._handleKeydownListener = this.unmanage(this._handleKeydownListener).release();
      }

      this._handleKeydownListener = this.manage((0, _on.default)(this.element.ownerDocument.body, 'keydown', function (evt) {
        if (evt.which === 27) {
          evt.stopPropagation();

          _this3.hide(evt);
        }
      }));
    }
    /**
     * Handles `focusin` (or `focus` depending on browser support of `focusin`) event to do wrap-focus behavior.
     * @param {Event} evt The event.
     * @private
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode Modal.create .create()}, or {@linkcode Modal.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode Modal.init .init()} works.
     * @member Modal.options
     * @type {Object}
     * @property {string} selectorInit The CSS class to find modal dialogs.
     * @property {string} [selectorModalClose] The selector to find elements that close the modal.
     * @property {string} [selectorPrimaryFocus] The CSS selector to determine the element to put focus when modal gets open.
     * @property {string} attribInitTarget The attribute name in the launcher buttons to find target modal dialogs.
     * @property {string[]} [selectorsFloatingMenu]
     *   The CSS selectors of floating menus.
     *   Used for detecting if focus-wrap behavior should be disabled temporarily.
     * @property {string} [classVisible] The CSS class for the visible state.
     * @property {string} [classNoScroll] The CSS class for hiding scroll bar in body element while modal is shown.
     * @property {string} [eventBeforeShown]
     *   The name of the custom event fired before this modal is shown.
     *   Cancellation of this event stops showing the modal.
     * @property {string} [eventAfterShown]
     *   The name of the custom event telling that modal is sure shown
     *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
     * @property {string} [eventBeforeHidden]
     *   The name of the custom event fired before this modal is hidden.
     *   Cancellation of this event stops hiding the modal.
     * @property {string} [eventAfterHidden]
     *   The name of the custom event telling that modal is sure hidden
     *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-modal]',
        selectorModalClose: '[data-modal-close]',
        selectorPrimaryFocus: '[data-modal-primary-focus]',
        selectorsFloatingMenus: [".".concat(prefix, "--overflow-menu-options"), ".".concat(prefix, "--tooltip"), '.flatpickr-calendar'],
        classVisible: 'is-visible',
        attribInitTarget: 'data-modal-target',
        initEventNames: ['click'],
        eventBeforeShown: 'modal-beingshown',
        eventAfterShown: 'modal-shown',
        eventBeforeHidden: 'modal-beinghidden',
        eventAfterHidden: 'modal-hidden'
      };
    }
  }]);

  Modal.components = new WeakMap();
  return Modal;
}((0, _mixin2.default)(_createComponent.default, _initComponentByLauncher.default, _eventedShowHideState.default, _handles.default));

var _default = Modal;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-launcher":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-launcher.js","../../globals/js/mixins/evented-show-hide-state":"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/loading/loading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Loading =
/*#__PURE__*/
function (_mixin) {
  _inherits(Loading, _mixin);
  /**
   * Spinner indicating loading state.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a spinner.
   * @param {Object} [options] The component options.
   * @param {boolean} [options.active] `true` if this spinner should roll.
   */


  function Loading(element, options) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, element, options));
    _this.active = _this.options.active; // Initialize spinner

    _this.set(_this.active);

    return _this;
  }
  /**
   * Sets active/inactive state.
   * @param {boolean} active `true` if this spinner should roll.
   */


  _createClass(Loading, [{
    key: "set",
    value: function set(active) {
      if (typeof active !== 'boolean') {
        throw new TypeError('set expects a boolean.');
      }

      this.active = active;
      this.element.classList.toggle(this.options.classLoadingStop, !this.active);
      /**
       * If overlay is the parentNode then toggle it too.
       */

      var parentNode = this.element.parentNode;

      if (parentNode && parentNode.classList.contains(this.options.classLoadingOverlay)) {
        parentNode.classList.toggle(this.options.classLoadingOverlayStop, !this.active);
      }

      return this;
    }
    /**
     * Toggles active/inactive state.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      return this.set(!this.active);
    }
    /**
     * @returns {boolean} `true` if this spinner is rolling.
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
    /**
     * Sets state to inactive and deletes the loading element.
     */

  }, {
    key: "end",
    value: function end() {
      var _this2 = this;

      this.set(false);
      var handleAnimationEnd = this.manage((0, _on.default)(this.element, 'animationend', function (evt) {
        if (handleAnimationEnd) {
          handleAnimationEnd = _this2.unmanage(handleAnimationEnd).release();
        }

        if (evt.animationName === 'rotate-end-p2') {
          _this2._deleteElement();
        }
      }));
    }
    /**
     * Delete component from the DOM.
     */

  }, {
    key: "_deleteElement",
    value: function _deleteElement() {
      var parentNode = this.element.parentNode;
      parentNode.removeChild(this.element);

      if (parentNode.classList.contains(this.options.selectorLoadingOverlay)) {
        parentNode.remove();
      }
    }
    /**
     * The map associating DOM element and spinner instance.
     * @member Loading.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode Loading.create .create()}, or {@linkcode Loading.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode Loading.init .init()} works.
     * @member Loading.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find spinners.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-loading]',
        selectorLoadingOverlay: ".".concat(prefix, "--loading-overlay"),
        classLoadingOverlay: "".concat(prefix, "--loading-overlay"),
        classLoadingStop: "".concat(prefix, "--loading--stop"),
        classLoadingOverlayStop: "".concat(prefix, "--loading-overlay--stop"),
        active: true
      };
    }
  }]);

  Loading.components = new WeakMap();
  return Loading;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Loading;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/globals/js/misc/toggle-attribute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleAttribute;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Toggles the given attribute of the given element.
 * @param {Element} elem The element.
 * @param {string} name The attribute name.
 * @param {boolean} add `true` to set the attribute.
 */
function toggleAttribute(elem, name, add) {
  if (add) {
    elem.setAttribute(name, '');
  } else {
    elem.removeAttribute(name);
  }
}
},{}],"node_modules/carbon-components/es/components/inline-loading/inline-loading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _toggleAttribute = _interopRequireDefault(require("../../globals/js/misc/toggle-attribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var InlineLoading =
/*#__PURE__*/
function (_mixin) {
  _inherits(InlineLoading, _mixin);
  /**
   * Spinner indicating loading state.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a spinner.
   * @param {Object} [options] The component options.
   * @param {string} [options.initialState] The initial state, should be `inactive`, `active` or `finished`.
   */


  function InlineLoading(element, options) {
    var _this;

    _classCallCheck(this, InlineLoading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InlineLoading).call(this, element, options)); // Sets the initial state

    var initialState = _this.options.initialState;

    if (initialState) {
      _this.setState(initialState);
    }

    return _this;
  }
  /**
   * Sets active/inactive state.
   * @param {string} state The new state, should be `inactive`, `active` or `finished`.
   */


  _createClass(InlineLoading, [{
    key: "setState",
    value: function setState(state) {
      var states = this.constructor.states;
      var values = Object.keys(states).map(function (key) {
        return states[key];
      });

      if (values.indexOf(state) < 0) {
        throw new Error("One of the following value should be given as the state: ".concat(values.join(', ')));
      }

      var elem = this.element;
      var _this$options = this.options,
          selectorSpinner = _this$options.selectorSpinner,
          selectorFinished = _this$options.selectorFinished,
          selectorTextActive = _this$options.selectorTextActive,
          selectorTextFinished = _this$options.selectorTextFinished;
      var spinner = elem.querySelector(selectorSpinner);
      var finished = elem.querySelector(selectorFinished);
      var textActive = elem.querySelector(selectorTextActive);
      var textFinished = elem.querySelector(selectorTextFinished);

      if (spinner) {
        spinner.classList.toggle(this.options.classLoadingStop, state !== states.ACTIVE);
        (0, _toggleAttribute.default)(spinner, 'hidden', state === states.FINISHED);
      }

      if (finished) {
        (0, _toggleAttribute.default)(finished, 'hidden', state !== states.FINISHED);
      }

      if (textActive) {
        (0, _toggleAttribute.default)(textActive, 'hidden', state !== states.ACTIVE);
      }

      if (textFinished) {
        (0, _toggleAttribute.default)(textFinished, 'hidden', state !== states.FINISHED);
      }

      return this;
    }
    /**
     * The list of states.
     * @type {Object<string, string>}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode InlineLoading.create .create()},
     * or {@linkcode InlineLoading.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode InlineLoading.init .init()} works.
     * @member InlineLoading.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find inline loading components.
     * @property {string} selectorSpinner The CSS selector to find the spinner.
     * @property {string} selectorFinished The CSS selector to find the "finished" icon.
     * @property {string} selectorTextActive The CSS selector to find the text describing the active state.
     * @property {string} selectorTextFinished The CSS selector to find the text describing the finished state.
     * @property {string} classLoadingStop The CSS class for spinner's stopped state.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-inline-loading]',
        selectorSpinner: '[data-inline-loading-spinner]',
        selectorFinished: '[data-inline-loading-finished]',
        selectorTextActive: '[data-inline-loading-text-active]',
        selectorTextFinished: '[data-inline-loading-text-finished]',
        classLoadingStop: "".concat(prefix, "--loading--stop")
      };
    }
  }]);

  InlineLoading.states = {
    INACTIVE: 'inactive',
    ACTIVE: 'active',
    FINISHED: 'finished'
  };
  InlineLoading.components = new WeakMap();
  return InlineLoading;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = InlineLoading;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/toggle-attribute":"node_modules/carbon-components/es/globals/js/misc/toggle-attribute.js"}],"node_modules/carbon-components/es/components/dropdown/dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _trackBlur = _interopRequireDefault(require("../../globals/js/mixins/track-blur"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var Dropdown =
/*#__PURE__*/
function (_mixin) {
  _inherits(Dropdown, _mixin);
  /**
   * A selector with drop downs.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends TrackBlur
   * @param {HTMLElement} element The element working as a selector.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorItem] The CSS selector to find clickable areas in dropdown items.
   * @param {string} [options.selectorItemSelected] The CSS selector to find the clickable area in the selected dropdown item.
   * @param {string} [options.classSelected] The CSS class for the selected dropdown item.
   * @param {string} [options.classOpen] The CSS class for the open state.
   * @param {string} [options.classDisabled] The CSS class for the disabled state.
   * @param {string} [options.eventBeforeSelected]
   *   The name of the custom event fired before a drop down item is selected.
   *   Cancellation of this event stops selection of drop down item.
   * @param {string} [options.eventAfterSelected] The name of the custom event fired after a drop down item is selected.
   */


  function Dropdown(element, options) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, element, options));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'click', function (event) {
      _this._toggle(event);
    }));

    _this.manage((0, _on.default)(_this.element, 'keydown', function (event) {
      _this._handleKeyDown(event);
    }));

    _this.manage((0, _on.default)(_this.element, 'click', function (event) {
      var item = (0, _eventMatches.default)(event, _this.options.selectorItem);

      if (item) {
        _this.select(item);
      }
    }));

    return _this;
  }
  /**
   * Handles keydown event.
   * @param {Event} event The event triggering this method.
   */


  _createClass(Dropdown, [{
    key: "_handleKeyDown",
    value: function _handleKeyDown(event) {
      var isOpen = this.element.classList.contains(this.options.classOpen);
      var direction = {
        38: this.constructor.NAVIGATE.BACKWARD,
        40: this.constructor.NAVIGATE.FORWARD
      }[event.which];

      if (isOpen && direction !== undefined) {
        this.navigate(direction);
        event.preventDefault(); // Prevents up/down keys from scrolling container
      } else {
        this._toggle(event);
      }
    }
    /**
     * Opens and closes the dropdown menu.
     * @param {Event} [event] The event triggering this method.
     */

  }, {
    key: "_toggle",
    value: function _toggle(event) {
      var _this2 = this;

      var isDisabled = this.element.classList.contains(this.options.classDisabled);

      if (isDisabled) {
        return;
      }

      if ([13, 32, 40].indexOf(event.which) >= 0 && !event.target.matches(this.options.selectorItem) || event.which === 27 || event.type === 'click') {
        var isOpen = this.element.classList.contains(this.options.classOpen);
        var isOfSelf = this.element.contains(event.target);
        var actions = {
          add: isOfSelf && event.which === 40 && !isOpen,
          remove: (!isOfSelf || event.which === 27) && isOpen,
          toggle: isOfSelf && event.which !== 27 && event.which !== 40
        };
        Object.keys(actions).forEach(function (action) {
          if (actions[action]) {
            _this2.element.classList[action](_this2.options.classOpen);

            _this2.element.focus();
          }
        });
        var listItems = toArray(this.element.querySelectorAll(this.options.selectorItem));
        listItems.forEach(function (item) {
          if (_this2.element.classList.contains(_this2.options.classOpen)) {
            item.tabIndex = 0;
          } else {
            item.tabIndex = -1;
          }
        });
      }
    }
    /**
     * @returns {Element} Currently highlighted element.
     */

  }, {
    key: "getCurrentNavigation",
    value: function getCurrentNavigation() {
      var focused = this.element.ownerDocument.activeElement;
      return focused.nodeType === Node.ELEMENT_NODE && focused.matches(this.options.selectorItem) ? focused : null;
    }
    /**
     * Moves up/down the focus.
     * @param {number} direction The direction of navigating.
     */

  }, {
    key: "navigate",
    value: function navigate(direction) {
      var items = toArray(this.element.querySelectorAll(this.options.selectorItem));
      var start = this.getCurrentNavigation() || this.element.querySelector(this.options.selectorItemSelected);

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(i, l) {
          return i + (i >= 0 ? 0 : l);
        };

        var handleOverflow = function handleOverflow(i, l) {
          return i - (i < l ? 0 : l);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
        if (!current.matches(this.options.selectorItemHidden) && !current.parentNode.matches(this.options.selectorItemHidden) && !current.matches(this.options.selectorItemSelected)) {
          current.focus();
          break;
        }
      }
    }
    /**
     * Handles clicking on the dropdown options, doing the following:
     * * Change Dropdown text to selected option.
     * * Remove selected option from options when selected.
     * * Emit custom events.
     * @param {HTMLElement} itemToSelect The element to be activated.
     */

  }, {
    key: "select",
    value: function select(itemToSelect) {
      var _this3 = this;

      var eventStart = new CustomEvent(this.options.eventBeforeSelected, {
        bubbles: true,
        cancelable: true,
        detail: {
          item: itemToSelect
        }
      });

      if (this.element.dispatchEvent(eventStart)) {
        if (this.element.dataset.dropdownType !== 'navigation') {
          var selectorText = this.element.dataset.dropdownType !== 'inline' ? this.options.selectorText : this.options.selectorTextInner;
          var text = this.element.querySelector(selectorText);

          if (text) {
            text.innerHTML = itemToSelect.innerHTML;
          }

          itemToSelect.classList.add(this.options.classSelected);
        }

        this.element.dataset.value = itemToSelect.parentElement.dataset.value;
        toArray(this.element.querySelectorAll(this.options.selectorItemSelected)).forEach(function (item) {
          if (itemToSelect !== item) {
            item.classList.remove(_this3.options.classSelected);
          }
        });
        this.element.dispatchEvent(new CustomEvent(this.options.eventAfterSelected, {
          bubbles: true,
          cancelable: true,
          detail: {
            item: itemToSelect
          }
        }));
      }
    }
    /**
     * Closes the dropdown menu if this component loses focus.
     */

  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.element.classList.remove(this.options.classOpen);
    }
    /**
     * The map associating DOM element and selector instance.
     * @member Dropdown.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode Dropdown.create .create()}, or {@linkcode Dropdown.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode Dropdown.init .init()} works.
     * @member Dropdown.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find selectors.
     * @property {string} [selectorText] The CSS selector to find the element showing the selected item.
     * @property {string} [selectorTextInner] The CSS selector to find the element showing the selected item, used for inline mode.
     * @property {string} [selectorItem] The CSS selector to find clickable areas in dropdown items.
     * @property {string} [selectorItemHidden]
     *   The CSS selector to find hidden dropdown items.
     *   Used to skip dropdown items for keyboard navigation.
     * @property {string} [selectorItemSelected] The CSS selector to find the clickable area in the selected dropdown item.
     * @property {string} [classSelected] The CSS class for the selected dropdown item.
     * @property {string} [classOpen] The CSS class for the open state.
     * @property {string} [classDisabled] The CSS class for the disabled state.
     * @property {string} [eventBeforeSelected]
     *   The name of the custom event fired before a drop down item is selected.
     *   Cancellation of this event stops selection of drop down item.
     * @property {string} [eventAfterSelected] The name of the custom event fired after a drop down item is selected.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-dropdown]',
        selectorText: ".".concat(prefix, "--dropdown-text"),
        selectorTextInner: ".".concat(prefix, "--dropdown-text__inner"),
        selectorItem: ".".concat(prefix, "--dropdown-link"),
        selectorItemSelected: ".".concat(prefix, "--dropdown--selected"),
        selectorItemHidden: "[hidden],[aria-hidden=\"true\"]",
        classSelected: "".concat(prefix, "--dropdown--selected"),
        classOpen: "".concat(prefix, "--dropdown--open"),
        classDisabled: "".concat(prefix, "--dropdown--disabled"),
        eventBeforeSelected: 'dropdown-beingselected',
        eventAfterSelected: 'dropdown-selected'
      };
    }
    /**
     * Enum for navigating backward/forward.
     * @readonly
     * @member Dropdown.NAVIGATE
     * @type {Object}
     * @property {number} BACKWARD Navigating backward.
     * @property {number} FORWARD Navigating forward.
     */

  }]);

  Dropdown.components = new WeakMap();
  Dropdown.NAVIGATE = {
    BACKWARD: -1,
    FORWARD: 1
  };
  return Dropdown;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _trackBlur.default));

var _default = Dropdown;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/track-blur":"node_modules/carbon-components/es/globals/js/mixins/track-blur.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/number-input/number-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var NumberInput =
/*#__PURE__*/
function (_mixin) {
  _inherits(NumberInput, _mixin);
  /**
   * Number input UI.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a number input UI.
   */


  function NumberInput(element, options) {
    var _this;

    _classCallCheck(this, NumberInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, element, options)); // Broken DOM tree is seen with up/down arrows <svg> in IE, which breaks event delegation.
    // <svg> does not have `Element.classList` in IE11

    _this.manage((0, _on.default)(_this.element.querySelector('.up-icon'), 'click', function (event) {
      _this._handleClick(event);
    }));

    _this.manage((0, _on.default)(_this.element.querySelector('.down-icon'), 'click', function (event) {
      _this._handleClick(event);
    }));

    return _this;
  }
  /**
   * Increase/decrease number by clicking on up/down icons.
   * @param {Event} event The event triggering this method.
   */


  _createClass(NumberInput, [{
    key: "_handleClick",
    value: function _handleClick(event) {
      var numberInput = this.element.querySelector(this.options.selectorInput);
      var target = event.currentTarget.getAttribute('class').split(' ');

      if (target.indexOf('up-icon') >= 0) {
        ++numberInput.value;
      } else if (target.indexOf('down-icon') >= 0) {
        --numberInput.value;
      } // Programmatic change in value (including `stepUp()`/`stepDown()`) won't fire change event


      numberInput.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        cancelable: false
      }));
    }
    /**
     * The map associating DOM element and number input UI instance.
     * @member NumberInput.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode NumberInput.create .create()}, or {@linkcode NumberInput.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode NumberInput.init .init()} works.
     * @member NumberInput.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find number input UIs.
     * @property {string} [selectorInput] The CSS selector to find the `<input>` element.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-numberinput]',
        selectorInput: ".".concat(prefix, "--number input")
      };
    }
  }]);

  NumberInput.components = new WeakMap();
  return NumberInput;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = NumberInput;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/data-table-v2/data-table-v2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _featureFlags = require("../../globals/js/feature-flags");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var suffix = _featureFlags.componentsX ? '' : '-v2';

var DataTableV2 =
/*#__PURE__*/
function (_mixin) {
  _inherits(DataTableV2, _mixin);
  /**
   * Data Table
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends   EventedState
   * @param {HTMLElement} element The root element of tables
   * @param {Object} [options] the... options
   * @param {string} [options.selectorInit] selector initialization
   * @param {string} [options.selectorExpandCells] css selector for expand
   * @param {string} [options.expandableRow] css selector for expand
   * @param {string} [options.selectorParentRows] css selector for rows housing expansion
   * @param {string} [options.selectorTableBody] root css for table body
   * @param {string} [options.eventTrigger] selector for event bubble capture points
   * @param {string} [options.eventParentContainer] used find the bubble container
   */


  function DataTableV2(_element, options) {
    var _this;

    _classCallCheck(this, DataTableV2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTableV2).call(this, _element, options));

    _this._sortToggle = function (detail) {
      var element = detail.element,
          previousValue = detail.previousValue;
      toArray(_this.tableHeaders).forEach(function (header) {
        var sortEl = header.querySelector(_this.options.selectorTableSort);

        if (sortEl !== null && sortEl !== element) {
          sortEl.classList.remove(_this.options.classTableSortActive);
          sortEl.classList.remove(_this.options.classTableSortAscending);
        }
      });

      if (!previousValue) {
        element.dataset.previousValue = 'ascending';
        element.classList.add(_this.options.classTableSortActive);
        element.classList.add(_this.options.classTableSortAscending);
      } else if (previousValue === 'ascending') {
        element.dataset.previousValue = 'descending';
        element.classList.add(_this.options.classTableSortActive);
        element.classList.remove(_this.options.classTableSortAscending);
      } else if (previousValue === 'descending') {
        element.removeAttribute('data-previous-value');
        element.classList.remove(_this.options.classTableSortActive);
        element.classList.remove(_this.options.classTableSortAscending);
      }
    };

    _this._selectToggle = function (detail) {
      var element = detail.element;
      var checked = element.checked; // increment the  count

      _this.state.checkboxCount += checked ? 1 : -1;
      _this.countEl.textContent = _this.state.checkboxCount;
      var row = element.parentNode.parentNode;
      row.classList.toggle(_this.options.classTableSelected); // toggle on/off batch action bar

      _this._actionBarToggle(_this.state.checkboxCount > 0);
    };

    _this._selectAllToggle = function (_ref) {
      var element = _ref.element;
      var checked = element.checked;
      var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
      _this.state.checkboxCount = checked ? inputs.length - 1 : 0;
      inputs.forEach(function (item) {
        item.checked = checked;
        var row = item.parentNode.parentNode;

        if (checked && row) {
          row.classList.add(_this.options.classTableSelected);
        } else {
          row.classList.remove(_this.options.classTableSelected);
        }
      });

      _this._actionBarToggle(_this.state.checkboxCount > 0);

      if (_this.batchActionEl) {
        _this.countEl.textContent = _this.state.checkboxCount;
      }
    };

    _this._actionBarCancel = function () {
      var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
      var row = toArray(_this.element.querySelectorAll(_this.options.selectorTableSelected));
      row.forEach(function (item) {
        item.classList.remove(_this.options.classTableSelected);
      });
      inputs.forEach(function (item) {
        item.checked = false;
      });
      _this.state.checkboxCount = 0;

      _this._actionBarToggle(false);

      if (_this.batchActionEl) {
        _this.countEl.textContent = _this.state.checkboxCount;
      }
    };

    _this._actionBarToggle = function (toggleOn) {
      var transition = function transition(evt) {
        _this.batchActionEl.removeEventListener('transitionend', transition);

        if (evt.target.matches(_this.options.selectorActions)) {
          if (_this.batchActionEl.dataset.active === 'false') {
            _this.batchActionEl.setAttribute('tabIndex', -1);
          } else {
            _this.batchActionEl.setAttribute('tabIndex', 0);
          }
        }
      };

      if (toggleOn) {
        _this.batchActionEl.dataset.active = true;

        _this.batchActionEl.classList.add(_this.options.classActionBarActive);
      } else if (_this.batchActionEl) {
        _this.batchActionEl.dataset.active = false;

        _this.batchActionEl.classList.remove(_this.options.classActionBarActive);
      }

      if (_this.batchActionEl) {
        _this.batchActionEl.addEventListener('transitionend', transition);
      }
    };

    _this._expandableRowsInit = function (expandableRows) {
      expandableRows.forEach(function (item) {
        if (!_featureFlags.componentsX) {
          item.classList.remove(_this.options.classExpandableRowHidden);

          _this.tableBody.removeChild(item);
        }
      });
    };

    _this._rowExpandToggle = function (_ref2) {
      var element = _ref2.element,
          initialEvt = _ref2.initialEvt;
      var parent = (0, _eventMatches.default)(initialEvt, _this.options.eventParentContainer);

      var index = _this.expandCells.indexOf(element);

      if (element.dataset.previousValue === undefined || element.dataset.previousValue === 'expanded') {
        element.dataset.previousValue = 'collapsed';
        parent.classList.add(_this.options.classExpandableRow);

        if (!_featureFlags.componentsX) {
          _this.tableBody.insertBefore(_this.expandableRows[index], _this.parentRows[index + 1]);
        }
      } else {
        parent.classList.remove(_this.options.classExpandableRow);

        if (!_featureFlags.componentsX) {
          _this.tableBody.removeChild(parent.nextElementSibling);
        }

        element.dataset.previousValue = 'expanded';
      }
    };

    _this._expandableHoverToggle = function (element) {
      element.previousElementSibling.classList.add(_this.options.classExpandableRowHover);

      var mouseout = function mouseout() {
        element.previousElementSibling.classList.remove(_this.options.classExpandableRowHover);
        element.removeEventListener('mouseout', mouseout);
      };

      element.addEventListener('mouseout', mouseout);
    };

    _this._toggleState = function (element, evt) {
      var data = element.dataset;
      var label = data.label ? data.label : '';
      var previousValue = data.previousValue ? data.previousValue : '';
      var initialEvt = evt;

      _this.changeState({
        group: data.event,
        element: element,
        label: label,
        previousValue: previousValue,
        initialEvt: initialEvt
      });
    };

    _this._keydownHandler = function (evt) {
      var searchContainer = _this.element.querySelector(_this.options.selectorToolbarSearchContainer);

      var searchEvent = (0, _eventMatches.default)(evt, _this.options.selectorSearchMagnifier);
      var activeSearch = searchContainer.classList.contains(_this.options.classToolbarSearchActive);

      if (evt.which === 27) {
        _this._actionBarCancel();
      }

      if (searchContainer && searchEvent && evt.which === 13) {
        _this.activateSearch(searchContainer);
      }

      if (activeSearch && evt.which === 27) {
        _this.deactivateSearch(searchContainer, evt);
      }
    };

    _this.refreshRows = function () {
      var newExpandCells = toArray(_this.element.querySelectorAll(_this.options.selectorExpandCells));
      var newExpandableRows = toArray(_this.element.querySelectorAll(_this.options.selectorExpandableRows));
      var newParentRows = toArray(_this.element.querySelectorAll(_this.options.selectorParentRows)); // check if this is a refresh or the first time

      if (_this.parentRows.length > 0) {
        var diffParentRows = newParentRows.filter(function (newRow) {
          return !_this.parentRows.some(function (oldRow) {
            return oldRow === newRow;
          });
        }); // check if there are expandable rows

        if (newExpandableRows.length > 0) {
          var diffExpandableRows = diffParentRows.map(function (newRow) {
            return newRow.nextElementSibling;
          });
          var mergedExpandableRows = [].concat(_toConsumableArray(toArray(_this.expandableRows)), _toConsumableArray(toArray(diffExpandableRows)));

          _this._expandableRowsInit(diffExpandableRows);

          _this.expandableRows = mergedExpandableRows;
        }
      } else if (newExpandableRows.length > 0) {
        _this._expandableRowsInit(newExpandableRows);

        _this.expandableRows = newExpandableRows;
      }

      _this.expandCells = newExpandCells;
      _this.parentRows = newParentRows;
    };

    _this.container = _element.parentNode;
    _this.toolbarEl = _this.element.querySelector(_this.options.selectorToolbar);
    _this.batchActionEl = _this.element.querySelector(_this.options.selectorActions);
    _this.countEl = _this.element.querySelector(_this.options.selectorCount);
    _this.cancelEl = _this.element.querySelector(_this.options.selectorActionCancel);
    _this.tableHeaders = _this.element.querySelectorAll('th');
    _this.tableBody = _this.element.querySelector(_this.options.selectorTableBody);
    _this.expandCells = [];
    _this.expandableRows = [];
    _this.parentRows = [];

    _this.refreshRows();

    _this.element.addEventListener('mouseover', function (evt) {
      var eventElement = (0, _eventMatches.default)(evt, _this.options.selectorChildRow);

      if (eventElement) {
        _this._expandableHoverToggle(eventElement, true);
      }
    });

    _this.element.addEventListener('click', function (evt) {
      var eventElement = (0, _eventMatches.default)(evt, _this.options.eventTrigger);

      var searchContainer = _this.element.querySelector(_this.options.selectorToolbarSearchContainer);

      if (eventElement) {
        _this._toggleState(eventElement, evt);
      }

      if (_featureFlags.componentsX && searchContainer) {
        _this._handleDocumentClick(evt);
      }
    });

    _this.element.addEventListener('keydown', _this._keydownHandler);

    _this.state = {
      checkboxCount: 0
    };
    return _this;
  }

  _createClass(DataTableV2, [{
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(evt) {
      var searchContainer = this.element.querySelector(this.options.selectorToolbarSearchContainer);
      var searchEvent = (0, _eventMatches.default)(evt, this.options.selectorSearchMagnifier);
      var activeSearch = searchContainer.classList.contains(this.options.classToolbarSearchActive);

      if (searchContainer && searchEvent) {
        this.activateSearch(searchContainer);
      }

      if (activeSearch) {
        this.deactivateSearch(searchContainer, evt);
      }
    }
  }, {
    key: "activateSearch",
    value: function activateSearch(container) {
      var input = container.querySelector(this.options.selectorSearchInput);
      container.classList.add(this.options.classToolbarSearchActive);
      input.focus();
    }
  }, {
    key: "deactivateSearch",
    value: function deactivateSearch(container, evt) {
      var trigger = container.querySelector(this.options.selectorSearchMagnifier);
      var input = container.querySelector(this.options.selectorSearchInput);
      var svg = trigger.querySelector('svg');

      if (input.value.length === 0 && evt.target !== input && evt.target !== trigger && evt.target !== svg) {
        container.classList.remove(this.options.classToolbarSearchActive);
        trigger.focus();
      }

      if (evt.which === 27 && evt.target === input) {
        container.classList.remove(this.options.classToolbarSearchActive);
        trigger.focus();
      }
    }
  }, {
    key: "_changeState",
    value: function _changeState(detail, callback) {
      this[this.constructor.eventHandlers[detail.group]](detail);
      callback();
    }
  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: "[data-table".concat(suffix, "]"),
        selectorToolbar: ".".concat(prefix, "--table--toolbar"),
        selectorActions: ".".concat(prefix, "--batch-actions"),
        selectorCount: '[data-items-selected]',
        selectorActionCancel: ".".concat(prefix, "--batch-summary__cancel"),
        selectorCheckbox: ".".concat(prefix, "--checkbox"),
        selectorExpandCells: "td.".concat(prefix, "--table-expand").concat(suffix),
        selectorExpandableRows: ".".concat(prefix, "--expandable-row").concat(suffix),
        selectorParentRows: ".".concat(prefix, "--parent-row").concat(suffix),
        selectorChildRow: '[data-child-row]',
        selectorTableBody: 'tbody',
        selectorTableSort: ".".concat(prefix, "--table-sort").concat(suffix),
        selectorTableSelected: ".".concat(prefix, "--data-table").concat(suffix, "--selected"),
        selectorToolbarSearchContainer: ".".concat(prefix, "--toolbar-search-container-expandable"),
        selectorSearchMagnifier: ".".concat(prefix, "--search-magnifier"),
        selectorSearchInput: ".".concat(prefix, "--search-input"),
        classExpandableRow: "".concat(prefix, "--expandable-row").concat(suffix),
        classExpandableRowHidden: "".concat(prefix, "--expandable-row--hidden").concat(suffix),
        classExpandableRowHover: "".concat(prefix, "--expandable-row--hover").concat(suffix),
        classTableSortAscending: "".concat(prefix, "--table-sort").concat(suffix, "--ascending"),
        classTableSortActive: "".concat(prefix, "--table-sort").concat(suffix, "--active"),
        classToolbarSearchActive: "".concat(prefix, "--toolbar-search-container-active"),
        classActionBarActive: "".concat(prefix, "--batch-actions--active"),
        classTableSelected: "".concat(prefix, "--data-table").concat(suffix, "--selected"),
        eventBeforeExpand: "data-table".concat(suffix, "-beforetoggleexpand"),
        eventAfterExpand: "data-table".concat(suffix, "-aftertoggleexpand"),
        eventBeforeSort: "data-table".concat(suffix, "-beforetogglesort"),
        eventAfterSort: "data-table".concat(suffix, "-aftertogglesort"),
        eventTrigger: '[data-event]',
        eventParentContainer: '[data-parent-row]'
      };
    }
  }]);

  DataTableV2.components = new WeakMap();
  DataTableV2.eventHandlers = {
    expand: '_rowExpandToggle',
    sort: '_sortToggle',
    select: '_selectToggle',
    'select-all': '_selectAllToggle',
    'action-bar-cancel': '_actionBarCancel'
  };
  return DataTableV2;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default));

var _default = DataTableV2;
exports.default = _default;
},{"../../globals/js/feature-flags":"node_modules/carbon-components/es/globals/js/feature-flags.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js"}],"node_modules/flatpickr/dist/flatpickr.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/* flatpickr v4.5.7, @license MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.flatpickr = factory());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
  var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // January 4 is always in week 1.

      var week1 = new Date(date.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
      var s = nth % 100;
      if (s > 3 && s < 21) return "th";

      switch (s % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year"
  };

  var pad = function (number) {
    return ("0" + number).slice(-2);
  };

  var int = function (bool) {
    return bool === true ? 1 : 0;
  };
  /* istanbul ignore next */


  function debounce(func, wait, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var timeout;
    return function () {
      var context = this,
          args = arguments;
      timeout !== null && clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
  };

  function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
  }

  function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
  }

  function clearNode(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined; // nothing found
  }

  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }

    if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }

  function getEventTarget(event) {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  }

  var do_nothing = function () {
    return undefined;
  };

  var monthToStr = function (monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };

  var revFormat = {
    D: do_nothing,
    F: function (dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function (dateObj, weekNum) {
      var weekNumber = parseInt(weekNum);
      return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (dateObj, year) {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) {
      return new Date(ISODate);
    },
    d: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function (dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
      return new Date(parseFloat(unixMillSeconds));
    },
    w: do_nothing,
    y: function (dateObj, year) {
      dateObj.setFullYear(2000 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    // get the date in UTC
    Z: function (date) {
      return date.toISOString();
    },
    // weekday name, short, e.g. Thu
    D: function (date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    // full month name e.g. January
    F: function (date, locale, options) {
      return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    // padded hour 1-12
    G: function (date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    // hours with leading zero e.g. 03
    H: function (date) {
      return pad(date.getHours());
    },
    // day (1-30) with ordinal suffix e.g. 1st, 2nd
    J: function (date, locale) {
      return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    // AM/PM
    K: function (date, locale) {
      return locale.amPM[int(date.getHours() > 11)];
    },
    // shorthand month e.g. Jan, Sep, Oct, etc
    M: function (date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    // seconds 00-59
    S: function (date) {
      return pad(date.getSeconds());
    },
    // unix timestamp
    U: function (date) {
      return date.getTime() / 1000;
    },
    W: function (date, _, options) {
      return options.getWeek(date);
    },
    // full year e.g. 2016
    Y: function (date) {
      return date.getFullYear();
    },
    // day in month, padded (01-30)
    d: function (date) {
      return pad(date.getDate());
    },
    // hour from 1-12 (am/pm)
    h: function (date) {
      return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    // minutes, padded with leading zero e.g. 09
    i: function (date) {
      return pad(date.getMinutes());
    },
    // day in month (1-30)
    j: function (date) {
      return date.getDate();
    },
    // weekday name, full, e.g. Thursday
    l: function (date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    // padded month number (01-12)
    m: function (date) {
      return pad(date.getMonth() + 1);
    },
    // the month number (1-12)
    n: function (date) {
      return date.getMonth() + 1;
    },
    // seconds 0-59
    s: function (date) {
      return date.getSeconds();
    },
    // Unix Milliseconds
    u: function (date) {
      return date.getTime();
    },
    // number of the day of the week
    w: function (date) {
      return date.getDay();
    },
    // last two digits of year e.g. 16 for 2016
    y: function (date) {
      return String(date.getFullYear()).substring(2);
    }
  };

  var createDateFormatter = function (_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (dateObj, frmt, overrideLocale) {
      var locale = overrideLocale || l10n;

      if (config.formatDate !== undefined) {
        return config.formatDate(dateObj, frmt, locale);
      }

      return frmt.split("").map(function (c, i, arr) {
        return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
      }).join("");
    };
  };

  var createDateParser = function (_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
      if (date !== 0 && !date) return undefined;
      var locale = customLocale || l10n;
      var parsedDate;
      var date_orig = date;
      if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined // timestamp
      ) // create a copy
        parsedDate = new Date(date);else if (typeof date === "string") {
        // date string
        var format = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date).trim();

        if (datestr === "today") {
          parsedDate = new Date();
          timeless = true;
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr) // datestrings w/ timezone
        ) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
          parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
          var matched = void 0,
              ops = [];

          for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
            var token_1 = format[i];
            var isBackSlash = token_1 === "\\";
            var escaped = format[i - 1] === "\\" || isBackSlash;

            if (tokenRegex[token_1] && !escaped) {
              regexStr += tokenRegex[token_1];
              var match = new RegExp(regexStr).exec(date);

              if (match && (matched = true)) {
                ops[token_1 !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token_1],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash) regexStr += "."; // don't really care


            ops.forEach(function (_a) {
              var fn = _a.fn,
                  val = _a.val;
              return parsedDate = fn(parsedDate, val, locale) || parsedDate;
            });
          }

          parsedDate = matched ? parsedDate : undefined;
        }
      }
      /* istanbul ignore next */

      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + date_orig));
        return undefined;
      }

      if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  /**
   * Compute the difference in dates, measured in ms
   */


  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }

    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }

    return date1.getTime() - date2.getTime();
  }

  var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };

  var duration = {
    DAY: 86400000
  };

  if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }

      var _loop_1 = function (source) {
        if (source) {
          Object.keys(source).forEach(function (key) {
            return target[key] = source[key];
          });
        }
      };

      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var source = args_1[_a];

        _loop_1(source);
      }

      return target;
    };
  }

  var DEBOUNCED_CHANGE_MS = 300;

  function FlatpickrInstance(element, instanceConfig) {
    var self = {
      config: __assign({}, flatpickr.defaultConfig),
      l10n: english
    };
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;

    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth: function (month, yr) {
          if (month === void 0) {
            month = self.currentMonth;
          }

          if (yr === void 0) {
            yr = self.currentYear;
          }

          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }

    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile) build();
      bindEvents();

      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
        }

        updateValue(false);
      }

      setCalendarWidth();
      self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      /* TODO: investigate this further
                 Currently, there is weird positioning behavior in safari causing pages
        to scroll up. https://github.com/chmln/flatpickr/issues/563
                 However, most browsers are not Safari and positioning is expensive when used
        in scale. https://github.com/chmln/flatpickr/issues/1096
      */

      if (!self.isMobile && isSafari) {
        positionCalendar();
      }

      triggerEvent("onReady");
    }

    function bindToInstance(fn) {
      return fn.bind(self);
    }

    function setCalendarWidth() {
      var config = self.config;
      if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function () {
          if (self.calendarContainer !== undefined) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
          }

          if (self.daysContainer !== undefined) {
            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    /**
     * The handler for all events targeting the time inputs
     */


    function updateTime(e) {
      if (self.selectedDates.length === 0) {
        setDefaultTime();
      }

      if (e !== undefined && e.type !== "blur") {
        timeWrapper(e);
      }

      var prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();

      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }

    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
    }

    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;

        default:
          return hour % 12;
      }
    }
    /**
     * Syncs the selected date object time with user's time input
     */


    function setHoursFromInputs() {
      if (self.hourElement === undefined || self.minuteElement === undefined) return;
      var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
          minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
          seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

      if (self.amPM !== undefined) {
        hours = ampm2military(hours, self.amPM.textContent);
      }

      var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Syncs time input values with a date
     */


    function setHoursFromDate(dateObj) {
      var date = dateObj || self.latestSelectedDateObj;
      if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    function setDefaultHours() {
      var hours = self.config.defaultHour;
      var minutes = self.config.defaultMinute;
      var seconds = self.config.defaultSeconds;

      if (self.config.minDate !== undefined) {
        var min_hr = self.config.minDate.getHours();
        var min_minutes = self.config.minDate.getMinutes();
        hours = Math.max(hours, min_hr);
        if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
        if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
      }

      if (self.config.maxDate !== undefined) {
        var max_hr = self.config.maxDate.getHours();
        var max_minutes = self.config.maxDate.getMinutes();
        hours = Math.min(hours, max_hr);
        if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
        if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Sets the hours, minutes, and optionally seconds
     * of the latest selected date object and the
     * corresponding time inputs
     * @param {Number} hours the hour. whether its military
     *                 or am-pm gets inferred from config
     * @param {Number} minutes the minutes
     * @param {Number} seconds the seconds (optional)
     */


    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== undefined) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }

      if (!self.hourElement || !self.minuteElement || self.isMobile) return;
      self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
      if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
    }
    /**
     * Handles the year input and incrementing events
     * @param {Event} event the keyup or increment event
     */


    function onYearInput(event) {
      var year = parseInt(event.target.value) + (event.delta || 0);

      if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }
    /**
     * Essentially addEventListener + tracking
     * @param {Element} element the element to addEventListener to
     * @param {String} event the event name
     * @param {Function} handler the event handler
     */


    function bind(element, event, handler, options) {
      if (event instanceof Array) return event.forEach(function (ev) {
        return bind(element, ev, handler, options);
      });
      if (element instanceof Array) return element.forEach(function (el) {
        return bind(el, event, handler, options);
      });
      element.addEventListener(event, handler, options);

      self._handlers.push({
        element: element,
        event: event,
        handler: handler,
        options: options
      });
    }
    /**
     * A mousedown handler which mimics click.
     * Minimizes latency, since we don't need to wait for mouseup in most cases.
     * Also, avoids handling right clicks.
     *
     * @param {Function} handler the event handler
     */


    function onClick(handler) {
      return function (evt) {
        evt.which === 1 && handler(evt);
      };
    }

    function triggerChange() {
      triggerEvent("onChange");
    }
    /**
     * Adds all the necessary event listeners
     */


    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function (evt) {
          Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
            return bind(el, "click", self[evt]);
          });
        });
      }

      if (self.isMobile) {
        setupMobile();
        return;
      }

      var debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
        if (self.config.mode === "range") onMouseOver(e.target);
      });
      bind(window.document.body, "keydown", onKeyDown);
      if (!self.config.static) bind(self._input, "keydown", onKeyDown);
      if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
      bind(window.document, "focus", documentClick, {
        capture: true
      });

      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "mousedown", onClick(self.open));
      }

      if (self.daysContainer !== undefined) {
        bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "mousedown", onClick(selectDate));
      }

      if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
        var selText = function (e) {
          return e.target.select();
        };

        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, {
          capture: true
        });
        bind(self.timeContainer, "mousedown", onClick(timeIncrement));
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
          return self.secondElement && self.secondElement.select();
        });

        if (self.amPM !== undefined) {
          bind(self.amPM, "mousedown", onClick(function (e) {
            updateTime(e);
            triggerChange();
          }));
        }
      }
    }
    /**
     * Set the calendar view to a particular date.
     * @param {Date} jumpDate the date to set the view to
     */


    function jumpToDate(jumpDate) {
      var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

      try {
        if (jumpTo !== undefined) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        /* istanbul ignore next */
        e.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(e);
      }

      self.redraw();
    }
    /**
     * The up/down arrow handler for time inputs
     * @param {Event} e the click event
     */


    function timeIncrement(e) {
      if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    /**
     * Increments/decrements the value of input associ-
     * ated with the up/down arrow by dispatching an
     * "increment" event on the input.
     *
     * @param {Event} e the click event
     * @param {Number} delta the diff (usually 1 or -1)
     * @param {Element} inputElem the input element
     */


    function incrementNumInput(e, delta, inputElem) {
      var target = e && e.target;
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }

    function build() {
      var fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement("div", "flatpickr-calendar");
      self.calendarContainer.tabIndex = -1;

      if (!self.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement("div", "flatpickr-innerContainer");

        if (self.config.weekNumbers) {
          var _a = buildWeeks(),
              weekWrapper = _a.weekWrapper,
              weekNumbers = _a.weekNumbers;

          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }

        self.rContainer = createElement("div", "flatpickr-rContainer");
        self.rContainer.appendChild(buildWeekdays());

        if (!self.daysContainer) {
          self.daysContainer = createElement("div", "flatpickr-days");
          self.daysContainer.tabIndex = -1;
        }

        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }

      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }

      toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
      toggleClass(self.calendarContainer, "animate", self.config.animate === true);
      toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
      self.calendarContainer.appendChild(fragment);
      var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

      if (self.config.inline || self.config.static) {
        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

        if (self.config.inline) {
          if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
        }

        if (self.config.static) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput) wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }

      if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber, i) {
      var dateIsEnabled = isEnabled(date, true),
          dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }

      if (dateIsEnabled) {
        dayElement.tabIndex = -1;

        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          self.selectedDateElem = dayElement;

          if (self.config.mode === "range") {
            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
            if (className === "nextMonthDay") dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("disabled");
      }

      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
      }

      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
      }

      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }

    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self.config.mode === "range") onMouseOver(targetNode);
    }

    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      var endMonth = delta > 0 ? self.config.showMonths : -1;

      for (var m = startMonth; m != endMonth; m += delta) {
        var month = self.daysContainer.children[m];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;

        for (var i = startIndex; i != endIndex; i += delta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
        }
      }

      return undefined;
    }

    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      var endMonth = delta > 0 ? self.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;

      for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        var month = self.daysContainer.children[m];
        var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;

        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
        }
      }

      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return undefined;
    }

    function focusOnDay(current, offset) {
      var dayFocused = isInView(document.activeElement || document.body);
      var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === undefined) return self._input.focus();
      if (!dayFocused) return focusOnDayElem(startElem);
      getNextAvailableDay(startElem, offset);
    }

    function buildMonthDays(year, month) {
      var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
      var daysInMonth = self.utils.getDaysInMonth(month),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth,
          dayIndex = 0; // prepend days from the ending of previous month

      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
      } // Start at 1 since there is no 0th day


      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
      } // append days from the next month


      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      } //updateNavigationCurrentMonth();


      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }

    function buildDays() {
      if (self.daysContainer === undefined) {
        return;
      }

      clearNode(self.daysContainer); // TODO: week numbers for each month

      if (self.weekNumbers) clearNode(self.weekNumbers);
      var frag = document.createDocumentFragment();

      for (var i = 0; i < self.config.showMonths; i++) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }

      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;

      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }

    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement = createElement("span", "cur-month");
      var yearInput = createNumberInput("cur-year", {
        tabindex: "-1"
      });
      var yearElement = yearInput.getElementsByTagName("input")[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

      if (self.config.minDate) {
        yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
      }

      if (self.config.maxDate) {
        yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }

      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container: container,
        yearElement: yearElement,
        monthElement: monthElement
      };
    }

    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);

      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }

      for (var m = self.config.showMonths; m--;) {
        var month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }

      self.monthNav.appendChild(self.nextMonthNav);
    }

    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("span", "flatpickr-next-month");
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: function () {
          return self.__hidePrevMonthArrow;
        },
        set: function (bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: function () {
          return self.__hideNextMonthArrow;
        },
        set: function (bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }

    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour");
      self.hourElement = hourInput.getElementsByTagName("input")[0];
      var minuteInput = createNumberInput("flatpickr-minute");
      self.minuteElement = minuteInput.getElementsByTagName("input")[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
      self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
      self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
      self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
      self.minuteElement.setAttribute("min", "0");
      self.minuteElement.setAttribute("max", "59");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.getElementsByTagName("input")[0];
        self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
        self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
        self.secondElement.setAttribute("min", "0");
        self.secondElement.setAttribute("max", "59");
        self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self.timeContainer.appendChild(secondInput);
      }

      if (!self.config.time_24hr) {
        // add self.amPM if appropriate
        self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }

      return self.timeContainer;
    }

    function buildWeekdays() {
      if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

      for (var i = self.config.showMonths; i--;) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self.weekdayContainer.appendChild(container);
      }

      updateWeekdays();
      return self.weekdayContainer;
    }

    function updateWeekdays() {
      var firstDayOfWeek = self.l10n.firstDayOfWeek;
      var weekdays = self.l10n.weekdays.shorthand.slice();

      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
      }

      for (var i = self.config.showMonths; i--;) {
        self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
      }
    }
    /* istanbul ignore next */


    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper: weekWrapper,
        weekNumbers: weekNumbers
      };
    }

    function changeMonth(value, is_offset) {
      if (is_offset === void 0) {
        is_offset = true;
      }

      var delta = is_offset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
      self.currentMonth += delta;

      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
      }

      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }

    function clear(triggerChangeEvent, toInitial) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }

      if (toInitial === void 0) {
        toInitial = true;
      }

      self.input.value = "";
      if (self.altInput !== undefined) self.altInput.value = "";
      if (self.mobileInput !== undefined) self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = undefined;

      if (toInitial === true) {
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
      }

      self.showTimeInput = false;

      if (self.config.enableTime === true) {
        setDefaultHours();
      }

      self.redraw();
      if (triggerChangeEvent) // triggerChangeEvent is true (default) or an Event
        triggerEvent("onChange");
    }

    function close() {
      self.isOpen = false;

      if (!self.isMobile) {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.classList.remove("open");
        }

        if (self._input !== undefined) {
          self._input.classList.remove("active");
        }
      }

      triggerEvent("onClose");
    }

    function destroy() {
      if (self.config !== undefined) triggerEvent("onDestroy");

      for (var i = self._handlers.length; i--;) {
        var h = self._handlers[i];
        h.element.removeEventListener(h.event, h.handler, h.options);
      }

      self._handlers = [];

      if (self.mobileInput) {
        if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = undefined;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config.static && self.calendarContainer.parentNode) {
          var wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

          if (wrapper.parentNode) {
            while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

            wrapper.parentNode.removeChild(wrapper);
          }
        } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }

      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }

      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
        self.input.value = "";
      }

      ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
        try {
          delete self[k];
        } catch (_) {}
      });
    }

    function isCalendarElem(elem) {
      if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
      return self.calendarContainer.contains(elem);
    }

    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        var eventTarget_1 = getEventTarget(e);
        var isCalendarElement = isCalendarElem(eventTarget_1);
        var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || // web components
        // e.path is not present in all browsers. circumventing typechecks
        e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
          return elem.contains(eventTarget_1);
        });

        if (lostFocus && isIgnored) {
          self.close();

          if (self.config.mode === "range" && self.selectedDates.length === 1) {
            self.clear(false);
            self.redraw();
          }
        }
      }
    }

    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
      var newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;

      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
      }

      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
      }
    }

    function isEnabled(date, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      var dateToCheck = self.parseDate(date, undefined, timeless); // timeless

      if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
      if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
      if (dateToCheck === undefined) return false;
      var bool = self.config.enable.length > 0,
          array = bool ? self.config.enable : self.config.disable;

      for (var i = 0, d = void 0; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck) // disabled by function
        ) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) // disabled by date
          return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
          // disabled by date string
          var parsed = self.parseDate(d, undefined, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if ( // disabled by range
        typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
      }

      return !bool;
    }

    function isInView(elem) {
      if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
      return false;
    }

    function onKeyDown(e) {
      // e.key                      e.keyCode
      // "Backspace"                        8
      // "Tab"                              9
      // "Enter"                           13
      // "Escape"     (IE "Esc")           27
      // "ArrowLeft"  (IE "Left")          37
      // "ArrowUp"    (IE "Up")            38
      // "ArrowRight" (IE "Right")         39
      // "ArrowDown"  (IE "Down")          40
      // "Delete"     (IE "Del")           46
      var isInput = e.target === self._input;
      var allowInput = self.config.allowInput;
      var allowKeydown = self.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self.config.inline && isInput && !allowInput;

      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
          return e.target.blur();
        } else self.open();
      } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

        switch (e.keyCode) {
          case 13:
            if (isTimeObj) {
              updateTime();
              focusAndClose();
            } else selectDate(e);

            break;

          case 27:
            // escape
            e.preventDefault();
            focusAndClose();
            break;

          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }

            break;

          case 37:
          case 39:
            if (!isTimeObj) {
              e.preventDefault();

              if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                var delta_1 = e.keyCode === 39 ? 1 : -1;
                if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                  e.stopPropagation();
                  changeMonth(delta_1);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement) self.hourElement.focus();

            break;

          case 38:
          case 40:
            e.preventDefault();
            var delta = e.keyCode === 40 ? 1 : -1;

            if (self.daysContainer && e.target.$i !== undefined || e.target === self.input) {
              if (e.ctrlKey) {
                e.stopPropagation();
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement) self.hourElement.focus();
              updateTime(e);

              self._debouncedChange();
            }

            break;

          case 9:
            if (isTimeObj) {
              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];

                if (target !== undefined) {
                  e.preventDefault();
                  target.focus();
                } else if (e.shiftKey) {
                  e.preventDefault();

                  self._input.focus();
                }
              }
            }

            break;

          default:
            break;
        }
      }

      if (self.amPM !== undefined && e.target === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;

          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }

      triggerEvent("onKeyDown", e);
    }

    function onMouseOver(elem) {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
      var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
          lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
      var containsDisabled = false;
      var minRange = 0,
          maxRange = 0;

      for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
      }

      for (var m = 0; m < self.config.showMonths; m++) {
        var month = self.daysContainer.children[m];
        var prevMonth = self.daysContainer.children[m - 1];

        var _loop_1 = function (i, l) {
          var dayElem = month.children[i],
              date = dayElem.dateObj;
          var timestamp = date.getTime();
          var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

          if (outOfRange) {
            dayElem.classList.add("notAllowed");
            ["inRange", "startRange", "endRange"].forEach(function (c) {
              dayElem.classList.remove(c);
            });
            return "continue";
          } else if (containsDisabled && !outOfRange) return "continue";

          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
            dayElem.classList.remove(c);
          });

          if (elem !== undefined) {
            elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

            if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
              if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
              if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
            }
          }
        };

        for (var i = 0, l = month.children.length; i < l; i++) {
          _loop_1(i, l);
        }
      }
    }

    function onResize() {
      if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }

    function setDefaultTime() {
      self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
      setDefaultHours();
      updateValue();
    }

    function open(e, positionElement) {
      if (positionElement === void 0) {
        positionElement = self._positionElement;
      }

      if (self.isMobile === true) {
        if (e) {
          e.preventDefault();
          e.target && e.target.blur();
        }

        if (self.mobileInput !== undefined) {
          self.mobileInput.focus();
          self.mobileInput.click();
        }

        triggerEvent("onOpen");
        return;
      }

      if (self._input.disabled || self.config.inline) return;
      var wasOpen = self.isOpen;
      self.isOpen = true;

      if (!wasOpen) {
        self.calendarContainer.classList.add("open");

        self._input.classList.add("active");

        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }

      if (self.config.enableTime === true && self.config.noCalendar === true) {
        if (self.selectedDates.length === 0) {
          setDefaultTime();
        }

        if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
          setTimeout(function () {
            return self.hourElement.select();
          }, 50);
        }
      }
    }

    function minMaxDateSetter(type) {
      return function (date) {
        var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

        if (dateObj !== undefined) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }

        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter(function (d) {
            return isEnabled(d);
          });
          if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
          updateValue();
        }

        if (self.daysContainer) {
          redraw();
          if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }

    function parseConfig() {
      var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

      var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

      var formats = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: function () {
          return self.config._enable;
        },
        set: function (dates) {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: function () {
          return self.config._disable;
        },
        set: function (dates) {
          self.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";

      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }

      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }

      Object.defineProperty(self.config, "minDate", {
        get: function () {
          return self.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: function () {
          return self.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });

      var minMaxTimeSetter = function (type) {
        return function (val) {
          self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
        };
      };

      Object.defineProperty(self.config, "minTime", {
        get: function () {
          return self.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: function () {
          return self.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });

      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }

      Object.assign(self.config, formats, userConfig);

      for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

      HOOKS.filter(function (hook) {
        return self.config[hook] !== undefined;
      }).forEach(function (hook) {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      for (var i = 0; i < self.config.plugins.length; i++) {
        var pluginConf = self.config.plugins[i](self) || {};

        for (var key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
        }
      }

      triggerEvent("onParseConfig");
    }

    function setupLocale() {
      if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
      self.l10n = __assign({}, flatpickr.l10ns["default"], typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
      tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
    }

    function positionCalendar(customPositionElement) {
      if (self.calendarContainer === undefined) return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline) return;
      var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
      var right = window.document.body.offsetWidth - inputBounds.right;
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      var centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config.static) return;
      self.calendarContainer.style.top = top + "px";

      if (!rightMost) {
        self.calendarContainer.style.left = left + "px";
        self.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = right + "px";
      } else {
        var doc = document.styleSheets[0]; // some testing environments don't have css support

        if (doc === undefined) return;
        var bodyWidth = window.document.body.offsetWidth;
        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        var centerBefore = ".flatpickr-calendar.centerMost:before";
        var centerAfter = ".flatpickr-calendar.centerMost:after";
        var centerIndex = doc.cssRules.length;
        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
        toggleClass(self.calendarContainer, "rightMost", false);
        toggleClass(self.calendarContainer, "centerMost", true);
        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
        self.calendarContainer.style.left = centerLeft + "px";
        self.calendarContainer.style.right = "auto";
      }
    }

    function redraw() {
      if (self.config.noCalendar || self.isMobile) return;
      updateNavigationCurrentMonth();
      buildDays();
    }

    function focusAndClose() {
      self._input.focus();

      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
        // hack - bugs in the way IE handles focus keeps the calendar open
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }

    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();

      var isSelectable = function (day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
      };

      var t = findParent(e.target, isSelectable);
      if (t === undefined) return;
      var target = t;
      var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) {
          self.clear(false, false);
        }

        self.latestSelectedDateObj = selectedDate;
        self.selectedDates.push(selectedDate); // unless selecting same date twice, sort ascendingly

        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }
      setHoursFromInputs();

      if (shouldChangeMonth) {
        var isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();
        if (isNewYear) triggerEvent("onYearChange");
        triggerEvent("onMonthChange");
      }

      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      if (self.config.enableTime) setTimeout(function () {
        return self.showTimeInput = true;
      }, 50); // maintain focus

      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
        self.selectedDateElem && self.selectedDateElem.focus();
      }
      if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

      if (self.config.closeOnSelect) {
        var single = self.config.mode === "single" && !self.config.enableTime;
        var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

        if (single || range) {
          focusAndClose();
        }
      }

      triggerChange();
    }

    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
    };

    function set(option, value) {
      if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
        self.config[option] = value;
        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
          return x();
        });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
      }
      self.redraw();
      updateValue(false);
    }

    function setSelectedDate(inputDate, format) {
      var dates = [];
      if (inputDate instanceof Array) dates = inputDate.map(function (d) {
        return self.parseDate(d, format);
      });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;

          case "multiple":
            dates = inputDate.split(self.config.conjunction).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          default:
            break;
        }
      } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self.selectedDates = dates.filter(function (d) {
        return d instanceof Date && isEnabled(d, false);
      });
      if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }

    function setDate(date, triggerChange, format) {
      if (triggerChange === void 0) {
        triggerChange = false;
      }

      if (format === void 0) {
        format = self.config.dateFormat;
      }

      if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
      setSelectedDate(date, format);
      self.showTimeInput = self.selectedDates.length > 0;
      self.latestSelectedDateObj = self.selectedDates[0];
      self.redraw();
      jumpToDate();
      setHoursFromDate();
      updateValue(triggerChange);
      if (triggerChange) triggerEvent("onChange");
    }

    function parseDateRules(arr) {
      return arr.slice().map(function (rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(rule, undefined, true);
        } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };

        return rule;
      }).filter(function (x) {
        return x;
      }); // remove falsy values
    }

    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date(); // Workaround IE11 setting placeholder as the input's value

      var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
      self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
      if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
      Object.defineProperty(self, "showTimeInput", {
        get: function () {
          return self._showTimeInput;
        },
        set: function (bool) {
          self._showTimeInput = bool;
          if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
          self.isOpen && positionCalendar();
        }
      });
    }

    function setupInputs() {
      self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
      /* istanbul ignore next */

      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      } // hack: store previous type to restore it after destroy()


      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;

      if (self.config.altInput) {
        // replicate self.element
        self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
      }

      if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
      self._positionElement = self.config.positionElement || self._input;
    }

    function setupMobile() {
      var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
      self.mobileInput.step = self.input.getAttribute("step") || "any";
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
      }

      if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      self.input.type = "hidden";
      if (self.altInput !== undefined) self.altInput.type = "hidden";

      try {
        if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
      } catch (_a) {}

      bind(self.mobileInput, "change", function (e) {
        self.setDate(e.target.value, false, self.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }

    function toggle(e) {
      if (self.isOpen === true) return self.close();
      self.open(e);
    }

    function triggerEvent(event, data) {
      // If the instance has been destroyed already, all hooks have been removed
      if (self.config === undefined) return;
      var hooks = self.config[event];

      if (hooks !== undefined && hooks.length > 0) {
        for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
      }

      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change")); // many front-end frameworks bind to the input event

        self.input.dispatchEvent(createEvent("input"));
      }
    }

    function createEvent(name) {
      var e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }

    function isDateSelected(date) {
      for (var i = 0; i < self.selectedDates.length; i++) {
        if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
      }

      return false;
    }

    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
      self.yearElements.forEach(function (yearElement, i) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }

    function getDateStr(format) {
      return self.selectedDates.map(function (dObj) {
        return self.formatDate(dObj, format);
      }).filter(function (d, i, arr) {
        return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
      }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    /**
     * Updates the values of inputs associated with the calendar
     */


    function updateValue(triggerChange) {
      if (triggerChange === void 0) {
        triggerChange = true;
      }

      if (self.selectedDates.length === 0) return self.clear(triggerChange);

      if (self.mobileInput !== undefined && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }

      self.input.value = getDateStr(self.config.dateFormat);

      if (self.altInput !== undefined) {
        self.altInput.value = getDateStr(self.config.altFormat);
      }

      if (triggerChange !== false) triggerEvent("onValueUpdate");
    }

    function onMonthNavClick(e) {
      e.preventDefault();
      var isPrevMonth = self.prevMonthNav.contains(e.target);
      var isNextMonth = self.nextMonthNav.contains(e.target);

      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(e.target) >= 0) {
        e.target.select();
      } else if (e.target.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (e.target.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }

    function timeWrapper(e) {
      e.preventDefault();
      var isKeyDown = e.type === "keydown",
          input = e.target;

      if (self.amPM !== undefined && e.target === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      var min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;

      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

        if (newValue < min) {
          newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
          if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
          if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
        }

        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        input.value = pad(newValue);
      }
    }

    init();
    return self;
  }
  /* istanbul ignore next */


  function _flatpickr(nodeList, config) {
    // static list
    var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
      return x instanceof HTMLElement;
    });
    var instances = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      try {
        if (node.getAttribute("data-fp-omit") !== null) continue;

        if (node._flatpickr !== undefined) {
          node._flatpickr.destroy();

          node._flatpickr = undefined;
        }

        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }

    return instances.length === 1 ? instances[0] : instances;
  }
  /* istanbul ignore next */


  if (typeof HTMLElement !== "undefined") {
    // browser env
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
      return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
      return _flatpickr([this], config);
    };
  }
  /* istanbul ignore next */


  var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  /* istanbul ignore next */


  flatpickr.defaultConfig = defaults;
  flatpickr.l10ns = {
    en: __assign({}, english),
    "default": __assign({}, english)
  };

  flatpickr.localize = function (l10n) {
    flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
  };

  flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
  };

  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  /* istanbul ignore next */

  if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
      return _flatpickr(this, config);
    };
  }

  Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };

  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }

  return flatpickr;
});
},{}],"node_modules/carbon-components/es/components/date-picker/date-picker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flatpickr = _interopRequireDefault(require("flatpickr"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _featureFlags = require("../../globals/js/feature-flags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


/* eslint no-underscore-dangle: [2, { "allow": ["_input", "_updateClassNames", "_updateInputFields"], "allowAfterThis": true }] */
// `this.options` create-component mix-in creates prototype chain
// so that `options` given in constructor argument wins over the one defined in static `options` property
// 'Flatpickr' wants flat structure of object instead
function flattenOptions(options) {
  var o = {}; // eslint-disable-next-line guard-for-in, no-restricted-syntax

  for (var key in options) {
    o[key] = options[key];
  }

  return o;
} // Weekdays shorthand for english locale


_flatpickr.default.l10ns.en.weekdays.shorthand.forEach(function (day, index) {
  var currentDay = _flatpickr.default.l10ns.en.weekdays.shorthand;

  if (currentDay[index] === 'Thu' || currentDay[index] === 'Th') {
    currentDay[index] = 'Th';
  } else {
    currentDay[index] = currentDay[index].charAt(0);
  }
});

var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var DatePicker =
/*#__PURE__*/
function (_mixin) {
  _inherits(DatePicker, _mixin);
  /**
   * DatePicker.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as an date picker.
   */


  function DatePicker(element, options) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, element, options));

    _this._handleFocus = function () {
      if (_this.calendar) {
        _this.calendar.open();
      }
    };

    _this._handleBlur = function (event) {
      if (_this.calendar) {
        var focusTo = event.relatedTarget;

        if (!focusTo || !_this.element.contains(focusTo) && (!_this.calendar.calendarContainer || !_this.calendar.calendarContainer.contains(focusTo))) {
          _this.calendar.close();
        }
      }
    };

    _this._initDatePicker = function (type) {
      if (type === 'range') {
        // Given FlatPickr assumes one `<input>` even in range mode,
        // use a hidden `<input>` for such purpose, separate from our from/to `<input>`s
        var doc = _this.element.ownerDocument;
        var rangeInput = doc.createElement('input');
        rangeInput.className = _this.options.classVisuallyHidden;
        rangeInput.setAttribute('aria-hidden', 'true');

        _this.element.appendChild(rangeInput);

        _this._rangeInput = rangeInput; // An attempt to open the date picker dropdown when this component gets focus,
        // and close the date picker dropdown when this component loses focus

        var w = doc.defaultView;
        var hasFocusin = 'onfocusin' in w;
        var hasFocusout = 'onfocusout' in w;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        var focusoutEventName = hasFocusout ? 'focusout' : 'blur';

        _this.manage((0, _on.default)(_this.element, focusinEventName, _this._handleFocus, !hasFocusin));

        _this.manage((0, _on.default)(_this.element, focusoutEventName, _this._handleBlur, !hasFocusout));

        _this.manage((0, _on.default)(_this.element.querySelector(_this.options.selectorDatePickerIcon), focusoutEventName, _this._handleBlur, !hasFocusout));
      }

      var self = _assertThisInitialized(_assertThisInitialized(_this));

      var date = type === 'range' ? _this._rangeInput : _this.element.querySelector(_this.options.selectorDatePickerInput);
      var _this$options = _this.options,
          _onClose = _this$options.onClose,
          _onChange = _this$options.onChange,
          _onMonthChange = _this$options.onMonthChange,
          _onYearChange = _this$options.onYearChange,
          _onOpen = _this$options.onOpen,
          _onValueUpdate = _this$options.onValueUpdate;
      var calendar = new _flatpickr.default(date, Object.assign(flattenOptions(_this.options), {
        allowInput: true,
        mode: type,
        positionElement: type === 'range' && _this.element.querySelector(_this.options.selectorDatePickerInputFrom),
        onClose: function onClose(selectedDates) {
          // An attempt to disable Flatpickr's focus tracking system,
          // which has adverse effect with our old set up with two `<input>`s or our latest setup with a hidden `<input>`
          if (self.shouldForceOpen) {
            if (self.calendar.calendarContainer) {
              self.calendar.calendarContainer.classList.add('open');
            }

            self.calendar.isOpen = true;
          }

          for (var _len = arguments.length, remainder = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            remainder[_key - 1] = arguments[_key];
          }

          if (!_onClose || _onClose.call.apply(_onClose, [this, selectedDates].concat(remainder)) !== false) {
            self._updateClassNames(calendar);

            self._updateInputFields(selectedDates, type);
          }
        },
        onChange: function onChange() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (!_onChange || _onChange.call.apply(_onChange, [this].concat(args)) !== false) {
            self._updateClassNames(calendar);

            if (type === 'range') {
              if (calendar.selectedDates.length === 1 && calendar.isOpen) {
                self.element.querySelector(self.options.selectorDatePickerInputTo).classList.add(self.options.classFocused);
              } else {
                self.element.querySelector(self.options.selectorDatePickerInputTo).classList.remove(self.options.classFocused);
              }
            }
          }
        },
        onMonthChange: function onMonthChange() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (!_onMonthChange || _onMonthChange.call.apply(_onMonthChange, [this].concat(args)) !== false) {
            self._updateClassNames(calendar);
          }
        },
        onYearChange: function onYearChange() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          if (!_onYearChange || _onYearChange.call.apply(_onYearChange, [this].concat(args)) !== false) {
            self._updateClassNames(calendar);
          }
        },
        onOpen: function onOpen() {
          // An attempt to disable Flatpickr's focus tracking system,
          // which has adverse effect with our old set up with two `<input>`s or our latest setup with a hidden `<input>`
          self.shouldForceOpen = true;
          setTimeout(function () {
            self.shouldForceOpen = false;
          }, 0);

          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          if (!_onOpen || _onOpen.call.apply(_onOpen, [this].concat(args)) !== false) {
            self._updateClassNames(calendar);
          }
        },
        onValueUpdate: function onValueUpdate() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          if ((!_onValueUpdate || _onValueUpdate.call.apply(_onValueUpdate, [this].concat(args)) !== false) && type === 'range') {
            self._updateInputFields(self.calendar.selectedDates, type);
          }
        },
        nextArrow: _this._rightArrowHTML(),
        prevArrow: _this._leftArrowHTML()
      }));

      if (type === 'range') {
        _this._addInputLogic(_this.element.querySelector(_this.options.selectorDatePickerInputFrom), 0);

        _this._addInputLogic(_this.element.querySelector(_this.options.selectorDatePickerInputTo), 1);
      }

      _this.manage((0, _on.default)(_this.element.querySelector(_this.options.selectorDatePickerIcon), 'click', function () {
        calendar.open();
      }));

      _this._updateClassNames(calendar);

      if (type !== 'range') {
        _this._addInputLogic(date);
      }

      return calendar;
    };

    _this._addInputLogic = function (input, index) {
      if (!isNaN(index) && (index < 0 || index > 1)) {
        throw new RangeError("The index of <input> (".concat(index, ") is out of range."));
      }

      var inputField = input;

      _this.manage((0, _on.default)(inputField, 'change', function (evt) {
        if (evt.isTrusted || evt.detail && evt.detail.isNotFromFlatpickr) {
          var inputDate = _this.calendar.parseDate(inputField.value);

          if (inputDate && !isNaN(inputDate.valueOf())) {
            if (isNaN(index)) {
              _this.calendar.setDate(inputDate);
            } else {
              var selectedDates = _this.calendar.selectedDates;
              selectedDates[index] = inputDate;

              _this.calendar.setDate(selectedDates);
            }
          }
        }

        _this._updateClassNames(_this.calendar);
      })); // An attempt to temporarily set the `<input>` being edited as the one FlatPicker manages,
      // as FlatPicker attempts to take over `keydown` event handler on `document` to run on the date picker dropdown.


      _this.manage((0, _on.default)(inputField, 'keydown', function (evt) {
        var origInput = _this.calendar._input;
        _this.calendar._input = evt.target;
        setTimeout(function () {
          _this.calendar._input = origInput;
        });
      }));
    };

    _this._updateClassNames = function (_ref) {
      var calendarContainer = _ref.calendarContainer,
          selectedDates = _ref.selectedDates;

      if (calendarContainer) {
        calendarContainer.classList.add(_this.options.classCalendarContainer);
        calendarContainer.querySelector('.flatpickr-month').classList.add(_this.options.classMonth);
        calendarContainer.querySelector('.flatpickr-weekdays').classList.add(_this.options.classWeekdays);
        calendarContainer.querySelector('.flatpickr-days').classList.add(_this.options.classDays);
        toArray(calendarContainer.querySelectorAll('.flatpickr-weekday')).forEach(function (item) {
          var currentItem = item;
          currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, '');
          currentItem.classList.add(_this.options.classWeekday);
        });
        toArray(calendarContainer.querySelectorAll('.flatpickr-day')).forEach(function (item) {
          item.classList.add(_this.options.classDay);

          if (item.classList.contains('today') && selectedDates.length > 0) {
            item.classList.add('no-border');
          } else if (item.classList.contains('today') && selectedDates.length === 0) {
            item.classList.remove('no-border');
          }
        });
      }
    };

    _this._updateInputFields = function (selectedDates, type) {
      if (type === 'range') {
        if (selectedDates.length === 2) {
          _this.element.querySelector(_this.options.selectorDatePickerInputFrom).value = _this._formatDate(selectedDates[0]);
          _this.element.querySelector(_this.options.selectorDatePickerInputTo).value = _this._formatDate(selectedDates[1]);
        } else if (selectedDates.length === 1) {
          _this.element.querySelector(_this.options.selectorDatePickerInputFrom).value = _this._formatDate(selectedDates[0]);
        }
      } else if (selectedDates.length === 1) {
        _this.element.querySelector(_this.options.selectorDatePickerInput).value = _this._formatDate(selectedDates[0]);
      }

      _this._updateClassNames(_this.calendar);
    };

    _this._formatDate = function (date) {
      return _this.calendar.formatDate(date, _this.calendar.config.dateFormat);
    };

    var _type = _this.element.getAttribute(_this.options.attribType);

    _this.calendar = _this._initDatePicker(_type);

    if (_this.calendar.calendarContainer) {
      _this.manage((0, _on.default)(_this.element, 'keydown', function (e) {
        if (e.which === 40) {
          _this.calendar.calendarContainer.focus();
        }
      }));

      _this.manage((0, _on.default)(_this.calendar.calendarContainer, 'keydown', function (e) {
        if (e.which === 9 && _type === 'range') {
          _this._updateClassNames(_this.calendar);

          _this.element.querySelector(_this.options.selectorDatePickerInputFrom).focus();
        }
      }));
    }

    return _this;
  }
  /**
   * Opens the date picker dropdown when this component gets focus.
   * Used only for range mode for now.
   * @private
   */


  _createClass(DatePicker, [{
    key: "_rightArrowHTML",
    value: function _rightArrowHTML() {
      return _featureFlags.componentsX ? "\n      <svg\n        focusable=\"false\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        style=\"will-change: transform;\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        aria-hidden=\"true\">\n          <path d=\"M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z\"></path>\n      </svg>" : "\n      <svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill-rule=\"evenodd\">\n        <path d=\"M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z\"></path>\n      </svg>";
    }
  }, {
    key: "_leftArrowHTML",
    value: function _leftArrowHTML() {
      return _featureFlags.componentsX ? "\n      <svg\n        focusable=\"false\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        style=\"will-change: transform;\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        aria-hidden=\"true\"\n      >\n        <path d=\"M5 8l5-5 .7.7L6.4 8l4.3 4.3-.7.7z\"></path>\n      </svg>" : "\n      <svg width=\"8\" height=\"12\" viewBox=\"0 0 8 12\" fill-rule=\"evenodd\">\n        <path d=\"M7.5 10.6L2.8 6l4.7-4.6L6.1 0 0 6l6.1 6z\"></path>\n      </svg>";
    }
  }, {
    key: "release",
    value: function release() {
      if (this._rangeInput && this._rangeInput.parentNode) {
        this._rangeInput.parentNode.removeChild(this._rangeInput);
      }

      if (this.calendar) {
        try {
          this.calendar.destroy();
        } catch (err) {} // eslint-disable-line no-empty


        this.calendar = null;
      }

      return _get(_getPrototypeOf(DatePicker.prototype), "release", this).call(this);
    }
    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode DatePicker.create .create()}, or {@linkcode DatePicker.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode DatePicker.init .init()} works.
     * @property {string} selectorInit The CSS selector to find date picker UIs.
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-date-picker]',
        selectorDatePickerInput: '[data-date-picker-input]',
        selectorDatePickerInputFrom: '[data-date-picker-input-from]',
        selectorDatePickerInputTo: '[data-date-picker-input-to]',
        selectorDatePickerIcon: '[data-date-picker-icon]',
        classCalendarContainer: "".concat(prefix, "--date-picker__calendar"),
        classMonth: "".concat(prefix, "--date-picker__month"),
        classWeekdays: "".concat(prefix, "--date-picker__weekdays"),
        classDays: "".concat(prefix, "--date-picker__days"),
        classWeekday: "".concat(prefix, "--date-picker__weekday"),
        classDay: "".concat(prefix, "--date-picker__day"),
        classFocused: "".concat(prefix, "--focused"),
        classVisuallyHidden: "".concat(prefix, "--visually-hidden"),
        attribType: 'data-date-picker-type',
        dateFormat: 'm/d/Y'
      };
    }
    /**
     * The map associating DOM element and date picker UI instance.
     * @type {WeakMap}
     */

  }]);

  DatePicker.components = new WeakMap();
  return DatePicker;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = DatePicker;
exports.default = _default;
},{"flatpickr":"node_modules/flatpickr/dist/flatpickr.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/feature-flags":"node_modules/carbon-components/es/globals/js/feature-flags.js"}],"node_modules/carbon-components/es/components/pagination/pagination.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Pagination =
/*#__PURE__*/
function (_mixin) {
  _inherits(Pagination, _mixin);
  /**
   * Pagination component.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @param {HTMLElement} element The element working as a pagination component.
   * @param {Object} [options] The component options.
   * @property {string} [selectorInit] The CSS selector to find pagination components.
   * @property {string} [selectorItemsPerPageInput]
   *   The CSS selector to find the input that determines the number of items per page.
   * @property {string} [selectorPageNumberInput] The CSS selector to find the input that changes the page displayed.
   * @property {string} [selectorPageBackward] The CSS selector to find the button that goes back a page.
   * @property {string} [selectorPageForward] The CSS selector to find the button that goes forward a page.
   * @property {string} [eventItemsPerPage]
   *   The name of the custom event fired when a user changes the number of items per page.
   *   event.detail.value contains the number of items a user wishes to see.
   * @property {string} [eventPageNumber]
   *   The name of the custom event fired when a user inputs a specific page number.
   *   event.detail.value contains the value that the user input.
   * @property {string} [eventPageChange]
   *   The name of the custom event fired when a user goes forward or backward a page.
   *   event.detail.direction contains the direction a user wishes to go.
   */


  function Pagination(element, options) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, element, options));

    _this._emitEvent = function (evtName, detail) {
      var event = new CustomEvent("".concat(evtName), {
        bubbles: true,
        cancelable: true,
        detail: detail
      });

      _this.element.dispatchEvent(event);
    };

    _this.manage((0, _on.default)(_this.element, 'click', function (evt) {
      if (evt.target.matches(_this.options.selectorPageBackward)) {
        var detail = {
          initialEvt: evt,
          element: evt.target,
          direction: 'backward'
        };

        _this._emitEvent(_this.options.eventPageChange, detail);
      } else if (evt.target.matches(_this.options.selectorPageForward)) {
        var _detail = {
          initialEvt: evt,
          element: evt.target,
          direction: 'forward'
        };

        _this._emitEvent(_this.options.eventPageChange, _detail);
      }
    }));

    _this.manage((0, _on.default)(_this.element, 'input', function (evt) {
      if (evt.target.matches(_this.options.selectorItemsPerPageInput)) {
        var detail = {
          initialEvt: evt,
          element: evt.target,
          value: evt.target.value
        };

        _this._emitEvent(_this.options.eventItemsPerPage, detail);
      } else if (evt.target.matches(_this.options.selectorPageNumberInput)) {
        var _detail2 = {
          initialEvt: evt,
          element: evt.target,
          value: evt.target.value
        };

        _this._emitEvent(_this.options.eventPageNumber, _detail2);
      }
    }));

    return _this;
  }
  /**
   * Dispatches a custom event
   * @param {string} evtName name of the event to be dispatched.
   * @param {Object} detail contains the original event and any other necessary details.
   */


  Pagination.components = new WeakMap();
  Pagination.options = {
    selectorInit: '[data-pagination]',
    selectorItemsPerPageInput: '[data-items-per-page]',
    selectorPageNumberInput: '[data-page-number-input]',
    selectorPageBackward: '[data-page-backward]',
    selectorPageForward: '[data-page-forward]',
    eventItemsPerPage: 'itemsPerPage',
    eventPageNumber: 'pageNumber',
    eventPageChange: 'pageChange'
  };
  return Pagination;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Pagination;
exports.default = _default;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/globals/js/misc/svg-toggle-class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function svgToggleClass(svg, name, forceAdd) {
  var list = svg.getAttribute('class').trim().split(/\s+/);
  var uniqueList = Object.keys(list.reduce(function (o, item) {
    return Object.assign(o, _defineProperty({}, item, 1));
  }, {}));
  var index = uniqueList.indexOf(name);
  var found = index >= 0;
  var add = forceAdd === undefined ? !found : forceAdd;

  if (found === !add) {
    if (add) {
      uniqueList.push(name);
    } else {
      uniqueList.splice(index, 1);
    }

    svg.setAttribute('class', uniqueList.join(' '));
  }
}

var _default = svgToggleClass;
exports.default = _default;
},{}],"node_modules/carbon-components/es/components/search/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _svgToggleClass = _interopRequireDefault(require("../../globals/js/misc/svg-toggle-class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var Search =
/*#__PURE__*/
function (_mixin) {
  _inherits(Search, _mixin);
  /**
   * Search with Options.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as the search component.
   * @param {Object} [options] The component options
   * @property {string} [options.selectorInit]
   *   The selector to find search UIs with options.
   * @property {string} [options.selectorSearchView]
   *   The selector to find the search view icon containers.
   * @property {string} [options.selectorSearchInput]
   *   The selector to find the search input.
   * @property {string} [options.selectorClearIcon]
   *   The selector for the clear icon that clears the search box.
   * @property {string} [options.selectorIconContainer] The data attribute selector for the icon layout container.
   * @property {string} [options.classClearHidden] The class used to hide the clear icon.
   * @property {string} [options.classLayoutHidden] The class used to hide nonselected layout view.
   */


  function Search(element, options) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, element, options));

    var closeIcon = _this.element.querySelector(_this.options.selectorClearIcon);

    var input = _this.element.querySelector(_this.options.selectorSearchInput);

    if (!input) {
      throw new Error('Cannot find the search input.');
    }

    if (closeIcon) {
      _this.manage((0, _on.default)(closeIcon, 'click', function () {
        (0, _svgToggleClass.default)(closeIcon, _this.options.classClearHidden, true);
        input.value = '';
        input.focus();
      }));
    }

    _this.manage((0, _on.default)(_this.element, 'click', function (evt) {
      var toggleItem = (0, _eventMatches.default)(evt, _this.options.selectorIconContainer);
      if (toggleItem) _this.toggleLayout(toggleItem);
    }));

    _this.manage((0, _on.default)(input, 'input', function (evt) {
      if (closeIcon) _this.showClear(evt.target.value, closeIcon);
    }));

    return _this;
  }
  /**
   * Toggles between the grid and list layout.
   * @param {HTMLElement} element The element contining the layout toggle.
   */


  _createClass(Search, [{
    key: "toggleLayout",
    value: function toggleLayout(element) {
      var _this2 = this;

      toArray(element.querySelectorAll(this.options.selectorSearchView)).forEach(function (item) {
        item.classList.toggle(_this2.options.classLayoutHidden);
      });
    }
    /**
     * Toggles the clear icon visibility
     * @param {HTMLElement} value The element serving as the search input.
     * @param {HTMLElement} icon The element serving as close icon.
     */

  }, {
    key: "showClear",
    value: function showClear(value, icon) {
      (0, _svgToggleClass.default)(icon, this.options.classClearHidden, value.length === 0);
    }
    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode Search.create .create()}, or {@linkcode Search.init .init()},
     * properties in this object are overriden for the instance being created
     * and how {@linkcode Search.init .init()} works.
     * @member Search.options
     * @type {Object}
     * @property {string} [options.selectorInit]
     *   The selector to find search UIs with options.
     * @property {string} [options.selectorSearchView]
     *   The selector to find the search view icon containers.
     * @property {string} [options.selectorSearchInput]
     *   The selector to find the search input.
     * @property {string} [options.selectorClearIcon]
     *   The selector for the clear icon that clears the search box.
     * @property {string} [options.selectorIconContainer] The data attribute selector for the icon layout container.
     * @property {string} [options.classClearHidden] The class used to hide the clear icon.
     * @property {string} [options.classLayoutHidden] The class used to hide nonselected layout view.
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-search]',
        selectorSearchView: '[data-search-view]',
        selectorSearchInput: ".".concat(prefix, "--search-input"),
        selectorClearIcon: ".".concat(prefix, "--search-close"),
        selectorIconContainer: ".".concat(prefix, "--search-button[data-search-toggle]"),
        classClearHidden: "".concat(prefix, "--search-close--hidden"),
        classLayoutHidden: "".concat(prefix, "--search-view--hidden")
      };
    }
    /**
     * The map associating DOM element and search instance.
     * @member Search.components
     * @type {WeakMap}
     */

  }]);

  Search.components = new WeakMap();
  return Search;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Search;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/misc/svg-toggle-class":"node_modules/carbon-components/es/globals/js/misc/svg-toggle-class.js"}],"node_modules/carbon-components/es/components/accordion/accordion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Accordion =
/*#__PURE__*/
function (_mixin) {
  _inherits(Accordion, _mixin);
  /**
   * Accordion.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as an accordion.
   */


  function Accordion(element, options) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'click', function (event) {
      var item = (0, _eventMatches.default)(event, _this.options.selectorAccordionItem);

      if (item && !(0, _eventMatches.default)(event, _this.options.selectorAccordionContent)) {
        _this._toggle(item);
      }
    }));
    /**
     *
     *  DEPRECATE in v8
     *
     *  Swapping to a button elemenet instead of a div
     *  automatically maps click events to keypress as well
     *  This event listener now is only added if user is using
     *  the older markup
     */


    if (!_this._checkIfButton()) {
      _this.manage((0, _on.default)(_this.element, 'keypress', function (event) {
        var item = (0, _eventMatches.default)(event, _this.options.selectorAccordionItem);

        if (item && !(0, _eventMatches.default)(event, _this.options.selectorAccordionContent)) {
          _this._handleKeypress(event);
        }
      }));
    }

    return _this;
  }

  _createClass(Accordion, [{
    key: "_checkIfButton",
    value: function _checkIfButton() {
      return this.element.firstElementChild.firstElementChild.nodeName === 'BUTTON';
    }
    /**
     * Handles toggling of active state of accordion via keyboard
     * @param {Event} event The event triggering this method.
     */

  }, {
    key: "_handleKeypress",
    value: function _handleKeypress(event) {
      if (event.which === 13 || event.which === 32) {
        this._toggle(event.target);
      }
    }
  }, {
    key: "_toggle",
    value: function _toggle(element) {
      var heading = element.querySelector(this.options.selectorAccordionItemHeading);
      var expanded = heading.getAttribute('aria-expanded');

      if (expanded !== null) {
        heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
      }

      element.classList.toggle(this.options.classActive);
    }
    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode NumberInput.create .create()}, or {@linkcode NumberInput.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode NumberInput.init .init()} works.
     * @property {string} selectorInit The CSS selector to find accordion UIs.
     */

  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-accordion]',
        selectorAccordionItem: ".".concat(prefix, "--accordion__item"),
        selectorAccordionItemHeading: ".".concat(prefix, "--accordion__heading"),
        selectorAccordionContent: ".".concat(prefix, "--accordion__content"),
        classActive: "".concat(prefix, "--accordion__item--active")
      };
    }
    /**
     * The map associating DOM element and accordion UI instance.
     * @type {WeakMap}
     */

  }]);

  Accordion.components = new WeakMap();
  return Accordion;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Accordion;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/copy-button/copy-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var CopyButton =
/*#__PURE__*/
function (_mixin) {
  _inherits(CopyButton, _mixin);
  /**
   * CopyBtn UI.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a copy button UI.
   */


  function CopyButton(element, options) {
    var _this;

    _classCallCheck(this, CopyButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CopyButton).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'click', function () {
      return _this.handleClick();
    }));

    return _this;
  }
  /**
   * Show the feedback tooltip on click. Hide the feedback tooltip after specified timeout value.
   */


  _createClass(CopyButton, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      var feedback = this.element.querySelector(this.options.feedbackTooltip);

      if (feedback) {
        feedback.classList.add(this.options.classShowFeedback);
        setTimeout(function () {
          feedback.classList.remove(_this2.options.classShowFeedback);
        }, this.options.timeoutValue);
      }
    }
    /**
     * The map associating DOM element and copy button UI instance.
     * @member CopyBtn.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode CopyBtn.create .create()}, or {@linkcode CopyBtn.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode CopyBtn.init .init()} works.
     * @member CopyBtn.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find copy button UIs.
     * @property {string} feedbackTooltip The data attribute to find feedback tooltip.
     * @property {string} classShowFeedback The CSS selector for showing the feedback tooltip.
     * @property {number} timeoutValue The specified timeout value before the feedback tooltip is hidden.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-copy-btn]',
        feedbackTooltip: '[data-feedback]',
        classShowFeedback: "".concat(prefix, "--btn--copy__feedback--displayed"),
        timeoutValue: 2000
      };
    }
  }]);

  CopyButton.components = new WeakMap();
  return CopyButton;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = CopyButton;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/notification/notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Notification =
/*#__PURE__*/
function (_mixin) {
  _inherits(Notification, _mixin);
  /**
   * InlineNotification.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a InlineNotification.
   */


  function Notification(element, options) {
    var _this;

    _classCallCheck(this, Notification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notification).call(this, element, options));

    _this._changeState = function (state, callback) {
      if (state === 'delete-notification') {
        _this.element.parentNode.removeChild(_this.element);

        _this.release();
      }

      callback();
    };

    _this.button = element.querySelector(_this.options.selectorButton);

    if (_this.button) {
      _this.manage((0, _on.default)(_this.button, 'click', function (evt) {
        if (evt.currentTarget === _this.button) {
          _this.remove();
        }
      }));
    }

    return _this;
  }

  _createClass(Notification, [{
    key: "remove",
    value: function remove() {
      this.changeState('delete-notification');
    }
    /**
     * The map associating DOM element and accordion UI instance.
     * @type {WeakMap}
     */

  }]);

  Notification.components = new WeakMap();
  Notification.options = {
    selectorInit: '[data-notification]',
    selectorButton: '[data-notification-btn]',
    eventBeforeDeleteNotification: 'notification-before-delete',
    eventAfterDeleteNotification: 'notification-after-delete'
  };
  return Notification;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default, _handles.default));

var _default = Notification;
exports.default = _default;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/toolbar/toolbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var Toolbar =
/*#__PURE__*/
function (_mixin) {
  _inherits(Toolbar, _mixin);
  /**
   * Toolbar.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as an toolbar.
   */


  function Toolbar(element, options) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, element, options));

    if (!_this.element.dataset.tableTarget) {
      console.warn('There is no table bound to this toolbar!'); // eslint-disable-line no-console
    } else {
      var boundTable = _this.element.ownerDocument.querySelector(_this.element.dataset.tableTarget);

      var rowHeightBtns = _this.element.querySelector(_this.options.selectorRowHeight);

      if (rowHeightBtns) {
        _this.manage((0, _on.default)(rowHeightBtns, 'click', function (event) {
          _this._handleRowHeightChange(event, boundTable);
        })); // toArray(this.element.querySelectorAll(this.options.selectorRowHeight)).forEach((item) => {
        //   item.addEventListener('click', (event) => { this._handleRowHeightChange(event, boundTable); });
        // });

      }
    }

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'keydown', function (evt) {
      _this._handleKeyDown(evt);
    }));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'click', function (evt) {
      _this._handleDocumentClick(evt);
    }));

    return _this;
  }
  /**
   * Handles toggling of active state of the toolbar search input
   * @param {Event} event The event triggering this method.
   */


  _createClass(Toolbar, [{
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(event) {
      var _this2 = this;

      var searchInput = (0, _eventMatches.default)(event, this.options.selectorSearch);
      var isOfSelfSearchInput = searchInput && this.element.contains(searchInput);

      if (isOfSelfSearchInput) {
        var shouldBeOpen = isOfSelfSearchInput && !this.element.classList.contains(this.options.classSearchActive);
        searchInput.classList.toggle(this.options.classSearchActive, shouldBeOpen);

        if (shouldBeOpen) {
          searchInput.querySelector('input').focus();
        }
      }

      var targetComponentElement = (0, _eventMatches.default)(event, this.options.selectorInit);
      toArray(this.element.ownerDocument.querySelectorAll(this.options.selectorSearch)).forEach(function (item) {
        if (!targetComponentElement || !targetComponentElement.contains(item)) {
          item.classList.remove(_this2.options.classSearchActive);
        }
      });
    }
    /**
     * Handles toggling of active state of the toolbar search input via the keyboard
     * @param {Event} event The event triggering this method.
     */

  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(event) {
      var searchInput = (0, _eventMatches.default)(event, this.options.selectorSearch);

      if (searchInput && event.which === 27) {
        searchInput.classList.remove(this.options.classSearchActive);
      }
    }
    /**
     * Handles toggling of the row height of the associated table
     * @param {Event} event The event triggering this method.
     * @param {HTMLElement} boundTable The table associated with the toolbar.
     */

  }, {
    key: "_handleRowHeightChange",
    value: function _handleRowHeightChange(event, boundTable) {
      var _event$currentTarget$ = event.currentTarget.querySelector('input:checked'),
          value = _event$currentTarget$.value;

      if (value === 'tall') {
        boundTable.classList.add(this.options.classTallRows);
      } else {
        boundTable.classList.remove(this.options.classTallRows);
      }
    }
    /**
     * The map associating DOM element and Toolbar UI instance.
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * properties in this object are overriden for the instance being created.
     * @property {string} selectorInit The CSS selector to find toolbar instances.
     * @property {string} selectorSearch The CSS selector to find search inputs in a toolbar.
     * @property {string} selectorRowHeight The CSS selector to find the row height inputs in a toolbar.
     * @property {string} classTallRows The CSS class for making table rows into tall rows.
     * @property {string} classSearchActive The CSS class the active state of the search input.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-toolbar]',
        selectorSearch: '[data-toolbar-search]',
        selectorRowHeight: '[data-row-height]',
        classTallRows: "".concat(prefix, "--responsive-table--tall"),
        classSearchActive: "".concat(prefix, "--toolbar-search--active")
      };
    }
  }]);

  Toolbar.components = new WeakMap();
  return Toolbar;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = Toolbar;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/lodash.debounce/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

},{}],"node_modules/carbon-components/es/globals/js/mixins/init-component-by-event.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _eventMatches = _interopRequireDefault(require("../misc/event-matches"));

var _on = _interopRequireDefault(require("../misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _default(ToMix) {
  /**
   * Mix-in class to instantiate components upon events.
   * @class InitComponentByEvent
   */
  var InitComponentByEvent =
  /*#__PURE__*/
  function (_ToMix) {
    _inherits(InitComponentByEvent, _ToMix);

    function InitComponentByEvent() {
      _classCallCheck(this, InitComponentByEvent);

      return _possibleConstructorReturn(this, _getPrototypeOf(InitComponentByEvent).apply(this, arguments));
    }

    _createClass(InitComponentByEvent, null, [{
      key: "init",

      /**
       * `true` suggests that this component is lazily initialized upon an action/event, etc.
       * @type {boolean}
       */

      /**
       * Instantiates this component in the given element.
       * If the given element indicates that it's an component of this class, instantiates it.
       * Otherwise, instantiates this component by clicking on this component in the given node.
       * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
       * @param {Object} [options] The component options.
       * @param {string} [options.selectorInit] The CSS selector to find this component.
       * @returns {Handle} The handle to remove the event listener to handle clicking.
       */
      value: function init() {
        var _this = this;

        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var effectiveOptions = Object.assign(Object.create(this.options), options);

        if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
          throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
        }

        if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
          this.create(target, options);
        } else {
          // To work around non-bubbling `focus` event, use `focusin` event instead of it's available, and "capture mode" otherwise
          var hasFocusin = 'onfocusin' in (target.nodeType === Node.ELEMENT_NODE ? target.ownerDocument : target).defaultView;
          var handles = effectiveOptions.initEventNames.map(function (name) {
            var eventName = name === 'focus' && hasFocusin ? 'focusin' : name;
            return (0, _on.default)(target, eventName, function (event) {
              var element = (0, _eventMatches.default)(event, effectiveOptions.selectorInit); // Instantiated components handles events by themselves

              if (element && !_this.components.has(element)) {
                var component = _this.create(element, options);

                if (typeof component.createdByEvent === 'function') {
                  component.createdByEvent(event);
                }
              }
            }, name === 'focus' && !hasFocusin);
          });
          return {
            release: function release() {
              for (var handle = handles.pop(); handle; handle = handles.pop()) {
                handle.release();
              }
            }
          };
        }

        return '';
      }
    }]);

    InitComponentByEvent.forLazyInit = true;
    return InitComponentByEvent;
  }(ToMix);

  return InitComponentByEvent;
}
},{"../misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/tooltip/tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentByEvent = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-event"));

var _eventedShowHideState = _interopRequireDefault(require("../../globals/js/mixins/evented-show-hide-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _floatingMenu = _interopRequireWildcard(require("../floating-menu/floating-menu"));

var _getLaunchingDetails = _interopRequireDefault(require("../../globals/js/misc/get-launching-details"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */
var getMenuOffset = function getMenuOffset(menuBody, menuDirection) {
  var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
  var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
  var values = [arrowPositionProp, 'border-bottom-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-.]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});
  var margin = 0;

  if (menuDirection !== _floatingMenu.DIRECTION_BOTTOM) {
    var style = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody);
    margin = Number((/^([\d-.]+)px$/.exec(style.getPropertyValue('margin-top')) || [])[1]);
  }

  values[arrowPositionProp] = values[arrowPositionProp] || -6; // IE, etc.

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var arrowPosition = values[arrowPositionProp],
        borderBottomWidth = values['border-bottom-width'];
    return _defineProperty({
      left: 0,
      top: 0
    }, menuPositionAdjustmentProp, Math.sqrt(Math.pow(borderBottomWidth, 2) * 2) - arrowPosition + margin * (menuDirection === _floatingMenu.DIRECTION_TOP ? 2 : 1));
  }

  return undefined;
};

var Tooltip =
/*#__PURE__*/
function (_mixin) {
  _inherits(Tooltip, _mixin);
  /**
   * Tooltip.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   */


  function Tooltip(element, options) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, element, options));
    _this._hasContextMenu = false;
    _this._debouncedHandleClick = (0, _lodash.default)(_this._handleClick, 200);

    _this._hookOn(element);

    return _this;
  }
  /**
   * A flag to detect if `oncontextmenu` event is fired right before `focus`/`blur` events.
   * @type {boolean}
   */


  _createClass(Tooltip, [{
    key: "createdByEvent",

    /**
     * A method called when this widget is created upon events.
     * @param {Event} event The event triggering the creation.
     */
    value: function createdByEvent(event) {
      var relatedTarget = event.relatedTarget,
          type = event.type;

      this._debouncedHandleClick({
        relatedTarget: relatedTarget,
        type: type === 'focusin' ? 'focus' : type,
        details: (0, _getLaunchingDetails.default)(event)
      });
    }
    /**
     * Changes the shown/hidden state.
     * @param {string} state The new state.
     * @param {Object} detail The detail of the event trigging this action.
     * @param {Function} callback Callback called when change in state completes.
     // */

  }, {
    key: "changeState",
    value: function changeState(state, detail, callback) {
      if (!this.tooltip) {
        var tooltip = this.element.ownerDocument.querySelector(this.element.getAttribute(this.options.attribTooltipTarget));

        if (!tooltip) {
          throw new Error('Cannot find the target tooltip.');
        } // Lazily create a component instance for tooltip


        this.tooltip = _floatingMenu.default.create(tooltip, {
          refNode: this.element,
          classShown: this.options.classShown,
          offset: this.options.objMenuOffset
        });

        this._hookOn(tooltip);

        this.children.push(this.tooltip);
      } // Delegates the action of changing state to the tooltip.
      // (And thus the before/after shown/hidden events are fired from the tooltip)


      this.tooltip.changeState(state, Object.assign(detail, {
        delegatorNode: this.element
      }), callback);
    }
    /**
     * Attaches event handlers to show/hide the tooltip.
     * @param {Element} element The element to attach the events to.
     * @private
     */

  }, {
    key: "_hookOn",
    value: function _hookOn(element) {
      var _this2 = this;

      var hasFocusin = 'onfocusin' in window;
      var focusinEventName = hasFocusin ? 'focusin' : 'focus';
      [focusinEventName, 'blur', 'touchleave', 'touchcancel'].forEach(function (name) {
        _this2.manage((0, _on.default)(element, name, function (event) {
          var relatedTarget = event.relatedTarget,
              type = event.type;
          var hadContextMenu = _this2._hasContextMenu;
          _this2._hasContextMenu = type === 'contextmenu';

          _this2._debouncedHandleClick({
            relatedTarget: relatedTarget,
            type: type === 'focusin' ? 'focus' : type,
            hadContextMenu: hadContextMenu,
            details: (0, _getLaunchingDetails.default)(event)
          });
        }, name === focusinEventName && !hasFocusin));
      });
    }
    /**
     * Handles click/focus events.
     * @param {Object} params The parameters.
     * @param {Element} params.relatedTarget The element that focus went to. (For `blur` event)
     * @param {string} params.type The event type triggering this method.
     * @param {boolean} params.hadContextMenu
     * @param {Object} params.details The event details.
     * @private
     */

  }, {
    key: "_handleClick",
    value: function _handleClick(_ref2) {
      var relatedTarget = _ref2.relatedTarget,
          type = _ref2.type,
          hadContextMenu = _ref2.hadContextMenu,
          details = _ref2.details;
      var state = {
        focus: 'shown',
        blur: 'hidden',
        touchleave: 'hidden',
        touchcancel: 'hidden'
      }[type];
      var shouldPreventClose;

      if (type === 'blur') {
        // Note: SVGElement in IE11 does not have `.contains()`
        var wentToSelf = relatedTarget && this.element.contains && this.element.contains(relatedTarget) || this.tooltip && this.tooltip.element.contains(relatedTarget);
        shouldPreventClose = hadContextMenu || wentToSelf;
      }

      if (!shouldPreventClose) {
        this.changeState(state, details);
      }
    }
  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-tooltip-trigger]',
        classShown: "".concat(prefix, "--tooltip--shown"),
        attribTooltipTarget: 'data-tooltip-target',
        objMenuOffset: getMenuOffset,
        initEventNames: ['focus']
      };
    }
  }]);

  Tooltip.components = new WeakMap();
  return Tooltip;
}((0, _mixin2.default)(_createComponent.default, _initComponentByEvent.default, _eventedShowHideState.default, _handles.default));

var _default = Tooltip;
exports.default = _default;
},{"lodash.debounce":"node_modules/lodash.debounce/index.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-event":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-event.js","../../globals/js/mixins/evented-show-hide-state":"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../floating-menu/floating-menu":"node_modules/carbon-components/es/components/floating-menu/floating-menu.js","../../globals/js/misc/get-launching-details":"node_modules/carbon-components/es/globals/js/misc/get-launching-details.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/progress-indicator/progress-indicator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var ProgressIndicator =
/*#__PURE__*/
function (_mixin) {
  _inherits(ProgressIndicator, _mixin);
  /**
   * ProgressIndicator.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @param {HTMLElement} element The element representing the ProgressIndicator.
   * @param {Object} [options] The component options.
   * @property {string} [options.selectorStepElement] The CSS selector to find step elements.
   * @property {string} [options.selectorCurrent] The CSS selector to find the current step element.
   * @property {string} [options.selectorIncomplete] The CSS class to find incomplete step elements.
   * @property {string} [options.selectorComplete] The CSS selector to find completed step elements.
   * @property {string} [options.classStep] The className for a step element.
   * @property {string} [options.classComplete] The className for a completed step element.
   * @property {string} [options.classCurrent] The className for the current step element.
   * @property {string} [options.classIncomplete] The className for a incomplete step element.
   */


  function ProgressIndicator(element, options) {
    var _this;

    _classCallCheck(this, ProgressIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressIndicator).call(this, element, options));
    /**
     * The component state.
     * @type {Object}
     */

    _this.state = {
      /**
       * The current step index.
       * @type {number}
       */
      currentIndex: _this.getCurrent().index,

      /**
       * Total number of steps.
       * @type {number}
       */
      totalSteps: _this.getSteps().length
    };

    _this.addOverflowTooltip();

    return _this;
  }
  /**
   * Returns all steps with details about element and index.
   */


  _createClass(ProgressIndicator, [{
    key: "getSteps",
    value: function getSteps() {
      return toArray(this.element.querySelectorAll(this.options.selectorStepElement)).map(function (element, index) {
        return {
          element: element,
          index: index
        };
      });
    }
    /**
     * Returns current step; gives detail about element and index.
     */

  }, {
    key: "getCurrent",
    value: function getCurrent() {
      var currentEl = this.element.querySelector(this.options.selectorCurrent);
      return this.getSteps().filter(function (step) {
        return step.element === currentEl;
      })[0];
    }
    /**
     * Sets the current step.
     * * @param {Number} new step index or use default in `this.state.currentIndex`.
     */

  }, {
    key: "setCurrent",
    value: function setCurrent() {
      var _this2 = this;

      var newCurrentStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentIndex;
      var changed = false;

      if (newCurrentStep !== this.state.currentIndex) {
        this.state.currentIndex = newCurrentStep;
        changed = true;
      }

      if (changed) {
        this.getSteps().forEach(function (step) {
          if (step.index < newCurrentStep) {
            _this2._updateStep({
              element: step.element,
              className: _this2.options.classComplete,
              html: _this2._getSVGComplete()
            });
          }

          if (step.index === newCurrentStep) {
            _this2._updateStep({
              element: step.element,
              className: _this2.options.classCurrent,
              html: _this2._getCurrentSVG()
            });
          }

          if (step.index > newCurrentStep) {
            _this2._updateStep({
              element: step.element,
              className: _this2.options.classIncomplete,
              html: _this2._getIncompleteSVG()
            });
          }
        });
      }
    }
    /**
     * Update step with correct inline SVG and className
     * @param {Object} args
     * @param {Object} [args.element] target element
     * @param {Object} [args.className] new className
     * @param {Object} [args.html] new inline SVG to insert
     */

  }, {
    key: "_updateStep",
    value: function _updateStep(args) {
      var element = args.element,
          className = args.className,
          html = args.html;

      if (element.firstElementChild) {
        element.removeChild(element.firstElementChild);
      }

      if (!element.classList.contains(className)) {
        element.setAttribute('class', this.options.classStep);
        element.classList.add(className);
      }

      element.insertAdjacentHTML('afterbegin', html);
    }
    /**
     * Returns HTML string for an SVG used to represent a compelted step (checkmark)
     */

  }, {
    key: "_getSVGComplete",
    value: function _getSVGComplete() {
      return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n        <polygon points=\"10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6\"></polygon>\n      </svg>";
    }
    /**
     * Returns HTML string for an SVG used to represent current step (circles, like a radio button, but not.)
     */

  }, {
    key: "_getCurrentSVG",
    value: function _getCurrentSVG() {
      return "<svg>\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n        <circle cx=\"12\" cy=\"12\" r=\"6\"></circle>\n      </svg>";
    }
    /**
     * Returns HTML string for an SVG used to represent incomple step (grey empty circle)
     */

  }, {
    key: "_getIncompleteSVG",
    value: function _getIncompleteSVG() {
      return "<svg>\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n      </svg>";
    }
  }, {
    key: "addOverflowTooltip",
    value: function addOverflowTooltip() {
      var _this3 = this;

      var stepLabels = toArray(this.element.querySelectorAll(this.options.selectorLabel));
      var tooltips = toArray(this.element.querySelectorAll(this.options.selectorTooltip));
      stepLabels.forEach(function (step) {
        if (step.scrollWidth > _this3.options.maxWidth) {
          step.classList.add(_this3.options.classOverflowLabel);
        }
      });
      tooltips.forEach(function (tooltip) {
        var childText = tooltip.querySelector(_this3.options.selectorTooltipText);

        if (childText.scrollHeight > _this3.options.tooltipMaxHeight) {
          tooltip.classList.add(_this3.options.classTooltipMulti);
        }
      });
    }
  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode ProgressIndicator.create .create()}, or {@linkcode ProgressIndicator.init .init()},
     * properties in this object are overriden for the instance being created.
     * @member ProgressIndicator.options
     * @type {Object}
     * @property {string} selectorInit The CSS selector to find content switcher button set.
     * @property {string} [selectorStepElement] The CSS selector to find step elements.
     * @property {string} [selectorCurrent] The CSS selector to find the current step element.
     * @property {string} [selectorIncomplete] The CSS class to find incomplete step elements.
     * @property {string} [selectorComplete] The CSS selector to find completed step elements.
     * @property {string} [classStep] The className for a step element.
     * @property {string} [classComplete] The className for a completed step element.
     * @property {string} [classCurrent] The className for the current step element.
     * @property {string} [classIncomplete] The className for a incomplete step element.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-progress]',
        selectorStepElement: ".".concat(prefix, "--progress-step"),
        selectorCurrent: ".".concat(prefix, "--progress-step--current"),
        selectorIncomplete: ".".concat(prefix, "--progress-step--incomplete"),
        selectorComplete: ".".concat(prefix, "--progress-step--complete"),
        selectorLabel: ".".concat(prefix, "--progress-label"),
        selectorTooltip: ".".concat(prefix, "--tooltip"),
        selectorTooltipText: ".".concat(prefix, "--tooltip__text"),
        classStep: "".concat(prefix, "--progress-step"),
        classComplete: "".concat(prefix, "--progress-step--complete"),
        classCurrent: "".concat(prefix, "--progress-step--current"),
        classIncomplete: "".concat(prefix, "--progress-step--incomplete"),
        classOverflowLabel: "".concat(prefix, "--progress-label-overflow"),
        classTooltipMulti: "".concat(prefix, "--tooltip_multi"),
        maxWidth: 87,
        tooltipMaxHeight: 21
      };
    }
  }]);

  ProgressIndicator.components = new WeakMap();
  return ProgressIndicator;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default));

var _default = ProgressIndicator;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js"}],"node_modules/carbon-components/es/components/structured-list/structured-list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var StructuredList =
/*#__PURE__*/
function (_mixin) {
  _inherits(StructuredList, _mixin);
  /**
   * StructuredList
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The root element of tables
   * @param {Object} [options] the... options
   * @param {string} [options.selectorInit] selector initialization
   * @param {string} [options.selectorRow] css selector for selected row
   */


  function StructuredList(element, options) {
    var _this;

    _classCallCheck(this, StructuredList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StructuredList).call(this, element, options));

    _this.manage((0, _on.default)(_this.element, 'keydown', function (evt) {
      if (evt.which === 37 || evt.which === 38 || evt.which === 39 || evt.which === 40) {
        _this._handleKeydownArrow(evt);
      }

      if (evt.which === 13 || evt.which === 32) {
        _this._handleKeydownChecked(evt);
      }
    }));

    _this.manage((0, _on.default)(_this.element, 'click', function (evt) {
      _this._handleClick(evt);
    }));

    return _this;
  }

  _createClass(StructuredList, [{
    key: "_direction",
    value: function _direction(evt) {
      return {
        37: -1,
        // backward
        38: -1,
        // backward
        39: 1,
        // forward
        40: 1 // forward

      }[evt.which];
    }
  }, {
    key: "_nextIndex",
    value: function _nextIndex(array, arrayItem, direction) {
      return array.indexOf(arrayItem) + direction; // returns -1, 0, 1, 2, 3, 4...
    }
  }, {
    key: "_getInput",
    value: function _getInput(index) {
      var rows = toArray(this.element.querySelectorAll(this.options.selectorRow));
      return this.element.ownerDocument.querySelector(this.options.selectorListInput(rows[index].getAttribute('for')));
    }
  }, {
    key: "_handleInputChecked",
    value: function _handleInputChecked(index) {
      var rows = this.element.querySelectorAll(this.options.selectorRow);
      var input = this.getInput(index) || rows[index].querySelector('input');
      input.checked = true;
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(evt) {
      var _this2 = this;

      var selectedRow = (0, _eventMatches.default)(evt, this.options.selectorRow);
      toArray(this.element.querySelectorAll(this.options.selectorRow)).forEach(function (row) {
        return row.classList.remove(_this2.options.classActive);
      });

      if (selectedRow) {
        selectedRow.classList.add(this.options.classActive);
      }
    } // Handle Enter or Space keydown events for selecting <label> rows

  }, {
    key: "_handleKeydownChecked",
    value: function _handleKeydownChecked(evt) {
      var _this3 = this;

      evt.preventDefault(); // prevent spacebar from scrolling page

      var selectedRow = (0, _eventMatches.default)(evt, this.options.selectorRow);
      toArray(this.element.querySelectorAll(this.options.selectorRow)).forEach(function (row) {
        return row.classList.remove(_this3.options.classActive);
      });

      if (selectedRow) {
        selectedRow.classList.add(this.options.classActive);
        var input = selectedRow.querySelector(this.options.selectorListInput(selectedRow.getAttribute('for'))) || selectedRow.querySelector('input');
        input.checked = true;
      }
    } // Handle up and down keydown events for selecting <label> rows

  }, {
    key: "_handleKeydownArrow",
    value: function _handleKeydownArrow(evt) {
      var _this4 = this;

      evt.preventDefault(); // prevent arrow keys from scrolling

      var selectedRow = (0, _eventMatches.default)(evt, this.options.selectorRow);

      var direction = this._direction(evt);

      if (direction && selectedRow !== undefined) {
        var rows = toArray(this.element.querySelectorAll(this.options.selectorRow));
        rows.forEach(function (row) {
          return row.classList.remove(_this4.options.classActive);
        });
        var firstIndex = 0;

        var nextIndex = this._nextIndex(rows, selectedRow, direction);

        var lastIndex = rows.length - 1;

        var getSelectedIndex = function getSelectedIndex() {
          switch (nextIndex) {
            case -1:
              return lastIndex;

            case rows.length:
              return firstIndex;

            default:
              return nextIndex;
          }
        };

        var selectedIndex = getSelectedIndex();
        rows[selectedIndex].classList.add(this.options.classActive);
        rows[selectedIndex].focus();

        this._handleInputChecked(selectedIndex);
      }
    }
  }], [{
    key: "options",
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-structured-list]',
        selectorRow: "[data-structured-list] .".concat(prefix, "--structured-list-tbody > label.").concat(prefix, "--structured-list-row"),
        selectorListInput: function selectorListInput(id) {
          return "#".concat(id, ".").concat(prefix, "--structured-list-input");
        },
        classActive: "".concat(prefix, "--structured-list-row--selected")
      };
    }
  }]);

  StructuredList.components = new WeakMap();
  return StructuredList;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = StructuredList;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/slider/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Slider =
/*#__PURE__*/
function (_mixin) {
  _inherits(Slider, _mixin);
  /**
   * Slider.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as an slider.
   */


  function Slider(element, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, element, options));

    _this._changeState = function (state, detail, callback) {
      callback();
    };

    _this.sliderActive = false;
    _this.dragging = false;
    _this.track = _this.element.querySelector(_this.options.selectorTrack);
    _this.filledTrack = _this.element.querySelector(_this.options.selectorFilledTrack);
    _this.thumb = _this.element.querySelector(_this.options.selectorThumb);
    _this.input = _this.element.querySelector(_this.options.selectorInput);

    if (_this.element.dataset.sliderInputBox) {
      _this.boundInput = _this.element.ownerDocument.querySelector(_this.element.dataset.sliderInputBox);

      _this._updateInput();

      _this.manage((0, _on.default)(_this.boundInput, 'change', function (evt) {
        _this.setValue(evt.target.value);
      }));

      _this.manage((0, _on.default)(_this.boundInput, 'focus', function (evt) {
        evt.target.select();
      })); // workaround for safari


      _this.manage((0, _on.default)(_this.boundInput, 'mouseup', function (evt) {
        evt.preventDefault();
      }));
    }

    _this._updatePosition();

    _this.manage((0, _on.default)(_this.thumb, 'mousedown', function () {
      _this.sliderActive = true;
    }));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'mouseup', function () {
      _this.sliderActive = false;
    }));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'mousemove', function (evt) {
      var disabled = _this.element.classList.contains(_this.options.classDisabled);

      if (_this.sliderActive === true && !disabled) {
        _this._updatePosition(evt);
      }
    }));

    _this.manage((0, _on.default)(_this.thumb, 'keydown', function (evt) {
      var disabled = _this.element.classList.contains(_this.options.classDisabled);

      if (!disabled) {
        _this._updatePosition(evt);
      }
    }));

    _this.manage((0, _on.default)(_this.track, 'click', function (evt) {
      var disabled = _this.element.classList.contains(_this.options.classDisabled);

      if (!disabled) {
        _this._updatePosition(evt);
      }
    }));

    return _this;
  }

  _createClass(Slider, [{
    key: "_updatePosition",
    value: function _updatePosition(evt) {
      var _this2 = this;

      var _this$_calcValue = this._calcValue(evt),
          left = _this$_calcValue.left,
          newValue = _this$_calcValue.newValue;

      if (this.dragging) {
        return;
      }

      this.dragging = true;
      requestAnimationFrame(function () {
        _this2.dragging = false;
        _this2.thumb.style.left = "".concat(left, "%");
        _this2.filledTrack.style.transform = "translate(0%, -50%) scaleX(".concat(left / 100, ")");
        _this2.input.value = newValue;

        _this2._updateInput();

        _this2.changeState('slider-value-change', {
          value: newValue
        });
      });
    }
  }, {
    key: "_calcValue",
    value: function _calcValue(evt) {
      var _this$getInputProps = this.getInputProps(),
          value = _this$getInputProps.value,
          min = _this$getInputProps.min,
          max = _this$getInputProps.max,
          step = _this$getInputProps.step;

      var range = max - min;
      var valuePercentage = (value - min) / range * 100;
      var left;
      var newValue;
      left = valuePercentage;
      newValue = value;

      if (evt) {
        var type = evt.type;

        if (type === 'keydown') {
          var direction = {
            40: -1,
            // decreasing
            37: -1,
            // decreasing
            38: 1,
            // increasing
            39: 1 // increasing

          }[evt.which];

          if (direction !== undefined) {
            var multiplier = evt.shiftKey === true ? range / step / this.options.stepMultiplier : 1;
            var stepMultiplied = step * multiplier;
            var stepSize = stepMultiplied / range * 100;
            left = valuePercentage + stepSize * direction;
            newValue = Number(value) + stepMultiplied * direction;
          }
        }

        if (type === 'mousemove' || type === 'click') {
          if (type === 'click') {
            this.element.querySelector(this.options.selectorThumb).classList.add(this.options.classThumbClicked);
          } else {
            this.element.querySelector(this.options.selectorThumb).classList.remove(this.options.classThumbClicked);
          }

          var track = this.track.getBoundingClientRect();
          var unrounded = (evt.clientX - track.left) / track.width;
          var rounded = Math.round(range * unrounded / step) * step;
          left = rounded / range * 100;
          newValue = rounded + min;
        }
      }

      if (newValue <= Number(min)) {
        left = 0;
        newValue = min;
      }

      if (newValue >= Number(max)) {
        left = 100;
        newValue = max;
      }

      return {
        left: left,
        newValue: newValue
      };
    }
  }, {
    key: "_updateInput",
    value: function _updateInput() {
      if (this.boundInput) {
        this.boundInput.value = this.input.value;
      }
    }
  }, {
    key: "getInputProps",
    value: function getInputProps() {
      var values = {
        value: Number(this.input.value),
        min: Number(this.input.min),
        max: Number(this.input.max),
        step: this.input.step ? Number(this.input.step) : 1
      };
      return values;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.input.value = value;

      this._updatePosition();
    }
  }, {
    key: "stepUp",
    value: function stepUp() {
      this.input.stepUp();

      this._updatePosition();
    }
  }, {
    key: "stepDown",
    value: function stepDown() {
      this.input.stepDown();

      this._updatePosition();
    }
    /**
     * The map associating DOM element and Slider UI instance.
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * properties in this object are overriden for the instance being created.
     * @property {string} selectorInit The CSS selector to find slider instances.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-slider]',
        selectorTrack: ".".concat(prefix, "--slider__track"),
        selectorFilledTrack: ".".concat(prefix, "--slider__filled-track"),
        selectorThumb: ".".concat(prefix, "--slider__thumb"),
        selectorInput: ".".concat(prefix, "--slider__input"),
        classDisabled: "".concat(prefix, "--slider--disabled"),
        classThumbClicked: "".concat(prefix, "--slider__thumb--clicked"),
        eventBeforeSliderValueChange: 'slider-before-value-change',
        eventAfterSliderValueChange: 'slider-after-value-change',
        stepMultiplier: 4
      };
    }
  }]);

  Slider.components = new WeakMap();
  return Slider;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _eventedState.default, _handles.default));

var _default = Slider;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/tile/tile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var Tile =
/*#__PURE__*/
function (_mixin) {
  _inherits(Tile, _mixin);
  /**
   * Tile.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @param {HTMLElement} element The element working as an Tile.
   */


  function Tile(element, options) {
    var _this;

    _classCallCheck(this, Tile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tile).call(this, element, options));

    _this._getClass = function (type) {
      var typeObj = {
        expandable: _this.options.classExpandedTile,
        clickable: _this.options.classClickableTile,
        selectable: _this.options.classSelectableTile
      };
      return typeObj[type];
    };

    _this._hookActions = function (tileClass) {
      var isExpandable = _this.tileType === 'expandable';

      if (isExpandable) {
        var aboveTheFold = _this.element.querySelector(_this.options.selectorAboveTheFold);

        var getStyle = _this.element.ownerDocument.defaultView.getComputedStyle(_this.element, null);

        var tilePaddingTop = parseInt(getStyle.getPropertyValue('padding-top'), 10);
        var tilePaddingBottom = parseInt(getStyle.getPropertyValue('padding-bottom'), 10);
        var tilePadding = tilePaddingTop + tilePaddingBottom;

        if (aboveTheFold) {
          _this.tileHeight = _this.element.getBoundingClientRect().height;
          _this.atfHeight = aboveTheFold.getBoundingClientRect().height + tilePadding;
          _this.element.style.maxHeight = "".concat(_this.atfHeight, "px");
        }

        if (_this.element.classList.contains(_this.options.classExpandedTile)) {
          _this._setTileHeight();
        }
      }

      _this.element.addEventListener('click', function (evt) {
        var input = (0, _eventMatches.default)(evt, _this.options.selectorTileInput);

        if (!input) {
          _this.element.classList.toggle(tileClass);
        }

        if (isExpandable) {
          _this._setTileHeight();
        }
      });

      _this.element.addEventListener('keydown', function (evt) {
        var input = _this.element.querySelector(_this.options.selectorTileInput);

        if (input) {
          if (evt.which === 13 || evt.which === 32) {
            if (!isExpandable) {
              _this.element.classList.toggle(tileClass);

              input.checked = !input.checked;
            }
          }
        }
      });
    };

    _this._setTileHeight = function () {
      var isExpanded = _this.element.classList.contains(_this.options.classExpandedTile);

      _this.element.style.maxHeight = isExpanded ? "".concat(_this.tileHeight, "px") : "".concat(_this.atfHeight, "px");
    };

    _this.tileType = _this.element.dataset.tile;
    _this.tileHeight = 0; // Tracks expandable tile height

    _this.atfHeight = 0; // Tracks above the fold height

    _this._hookActions(_this._getClass(_this.tileType));

    return _this;
  }

  _createClass(Tile, [{
    key: "release",
    value: function release() {
      _get(_getPrototypeOf(Tile.prototype), "release", this).call(this);
    }
    /**
     * The map associating DOM element and Tile UI instance.
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * properties in this object are overriden for the instance being created.
     * @property {string} selectorInit The CSS selector to find Tile instances.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-tile]',
        selectorAboveTheFold: '[data-tile-atf]',
        selectorTileInput: '[data-tile-input]',
        classExpandedTile: "".concat(prefix, "--tile--is-expanded"),
        classClickableTile: "".concat(prefix, "--tile--is-clicked"),
        classSelectableTile: "".concat(prefix, "--tile--is-selected")
      };
    }
  }]);

  Tile.components = new WeakMap();
  return Tile;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default));

var _default = Tile;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js"}],"node_modules/carbon-components/es/components/code-snippet/code-snippet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var CodeSnippet =
/*#__PURE__*/
function (_mixin) {
  _inherits(CodeSnippet, _mixin);
  /**
   * CodeSnippet UI.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a CodeSnippet UI.
   */


  function CodeSnippet(element, options) {
    var _this;

    _classCallCheck(this, CodeSnippet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CodeSnippet).call(this, element, options));

    _this._initCodeSnippet();

    _this.element.querySelector(_this.options.classExpandBtn).addEventListener('click', function (evt) {
      return _this._handleClick(evt);
    });

    return _this;
  }

  _createClass(CodeSnippet, [{
    key: "_handleClick",
    value: function _handleClick() {
      var expandBtn = this.element.querySelector(this.options.classExpandText);
      this.element.classList.toggle(this.options.classExpanded);

      if (this.element.classList.contains(this.options.classExpanded)) {
        expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowLessText);
      } else {
        expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowMoreText);
      }
    }
  }, {
    key: "_initCodeSnippet",
    value: function _initCodeSnippet() {
      var expandBtn = this.element.querySelector(this.options.classExpandText);

      if (!expandBtn) {
        throw new TypeError('Cannot find the expand button.');
      }

      expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowMoreText);

      if (this.element.offsetHeight < this.options.minHeight) {
        this.element.classList.add(this.options.classHideExpand);
      }
    }
    /**
     * The map associating DOM element and code snippet UI instance.
     * @member CodeSnippet.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode CodeSnippet.create .create()},
     * or {@linkcode CodeSnippet.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode CodeSnippet.init .init()} works.
     * @member CodeSnippet.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find code snippet UIs.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-code-snippet]',
        attribShowMoreText: 'data-show-more-text',
        attribShowLessText: 'data-show-less-text',
        minHeight: 288,
        classExpanded: "".concat(prefix, "--snippet--expand"),
        classExpandBtn: ".".concat(prefix, "--snippet-btn--expand"),
        classExpandText: ".".concat(prefix, "--snippet-btn--text"),
        classHideExpand: "".concat(prefix, "--snippet-btn--expand--hide")
      };
    }
  }]);

  CodeSnippet.components = new WeakMap();
  return CodeSnippet;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = CodeSnippet;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js"}],"node_modules/carbon-components/es/components/text-input/text-input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var TextInput =
/*#__PURE__*/
function (_mixin) {
  _inherits(TextInput, _mixin);
  /**
   * Text Input.
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element - The element functioning as a text field.
   */


  function TextInput(_element, options) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, _element, options));

    _this._setIconVisibility = function (_ref) {
      var iconVisibilityOn = _ref.iconVisibilityOn,
          iconVisibilityOff = _ref.iconVisibilityOff,
          passwordIsVisible = _ref.passwordIsVisible,
          selectorPasswordVisibilityButton = _ref.selectorPasswordVisibilityButton;

      if (passwordIsVisible) {
        iconVisibilityOn.setAttribute('hidden', true);
        iconVisibilityOff.removeAttribute('hidden');
        selectorPasswordVisibilityButton.setAttribute('aria-label', 'Hide password');
        return;
      }

      iconVisibilityOn.removeAttribute('hidden');
      iconVisibilityOff.setAttribute('hidden', true);
      selectorPasswordVisibilityButton.setAttribute('aria-label', 'Show password');
    };

    _this._toggle = function (_ref2) {
      var element = _ref2.element,
          button = _ref2.button; // toggle action must come before querying the classList

      element.classList.toggle(_this.options.passwordIsVisible);
      var passwordIsVisible = element.classList.contains(_this.options.passwordIsVisible);
      var iconVisibilityOn = button.querySelector(_this.options.svgIconVisibilityOn);
      var iconVisibilityOff = button.querySelector(_this.options.svgIconVisibilityOff);
      var input = element.querySelector(_this.options.selectorPasswordField);
      var selectorPasswordVisibilityButton = element.querySelector(_this.options.selectorPasswordVisibilityButton);

      _this._setIconVisibility({
        iconVisibilityOn: iconVisibilityOn,
        iconVisibilityOff: iconVisibilityOff,
        passwordIsVisible: passwordIsVisible,
        selectorPasswordVisibilityButton: selectorPasswordVisibilityButton
      });

      input.type = passwordIsVisible ? 'text' : 'password';
    };

    _this.manage((0, _on.default)(_this.element, 'click', function (event) {
      var toggleVisibilityButton = (0, _eventMatches.default)(event, _this.options.selectorPasswordVisibilityButton);

      if (toggleVisibilityButton) {
        _this._toggle({
          element: _element,
          button: toggleVisibilityButton
        });
      }
    }));

    return _this;
  }
  /**
   *
   * @param {Object} obj - Object containing selectors and visibility status
   * @param {HTMLElement} obj.iconVisibilityOn - The element functioning as
   * the SVG icon for visibility on
   * @param {HTMLElement} obj.iconVisibilityOff - The element functioning as
   * the SVG icon for visibility off
   * @param {boolean} obj.passwordIsVisible - The visibility of the password in the
   * input field
   */


  _createClass(TextInput, null, [{
    key: "options",

    /**
     * The component options.
     *
     * If `options` is specified in the constructor,
     * {@linkcode TextInput.create .create()},
     * or {@linkcode TextInput.init .init()},
     * properties in this object are overriden for the instance being
     * created and how {@linkcode TextInput.init .init()} works.
     * @property {string} selectorInit The CSS selector to find text input UIs.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-text-input]',
        selectorPasswordField: ".".concat(prefix, "--text-input[data-toggle-password-visibility]"),
        selectorPasswordVisibilityButton: ".".concat(prefix, "--text-input--password__visibility"),
        passwordIsVisible: "".concat(prefix, "--text-input--password-visible"),
        svgIconVisibilityOn: "svg.".concat(prefix, "--icon--visibility-on"),
        svgIconVisibilityOff: "svg.".concat(prefix, "--icon--visibility-off")
      };
    }
    /**
     * The map associating DOM element and text input UI instance.
     * @type {WeakMap}
     */

  }]);

  TextInput.components = new WeakMap();
  return TextInput;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

exports.default = TextInput;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/components/ui-shell/side-nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var prefix = _settings.default.prefix;

var SideNav =
/*#__PURE__*/
function (_mixin) {
  _inherits(SideNav, _mixin);
  /**
   * The map associating DOM element and copy button UI instance.
   * @member SideNav.components
   * @type {WeakMap}
   */


  function SideNav(element, options) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, element, options));

    _this._handleClick = function (evt) {
      var matchesToggle = (0, _eventMatches.default)(evt, _this.options.selectorSideNavToggle);
      var matchesNavSubmenu = (0, _eventMatches.default)(evt, _this.options.selectorSideNavSubmenu);
      var matchesSideNavLink = (0, _eventMatches.default)(evt, _this.options.selectorSideNavLink);

      if (!matchesToggle && !matchesNavSubmenu && !matchesSideNavLink) {
        return;
      }

      if (matchesToggle) {
        _this.changeState(!_this.isNavExpanded() ? _this.constructor.state.EXPANDED : _this.constructor.state.COLLAPSED);

        return;
      }

      if (matchesNavSubmenu) {
        var isSubmenuExpanded = matchesNavSubmenu.getAttribute('aria-expanded') === 'true';
        matchesNavSubmenu.setAttribute('aria-expanded', "".concat(!isSubmenuExpanded));
        return;
      }

      if (matchesSideNavLink) {
        _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorSideNavLinkCurrent)).forEach(function (el) {
          el.classList.remove(_this.options.classSideNavItemActive, _this.options.classSideNavLinkCurrent);
          el.removeAttribute('aria-current');
        });

        matchesSideNavLink.classList.add(_this.options.classSideNavLinkCurrent);
        var closestSideNavItem = matchesSideNavLink.closest(_this.options.selectorSideNavItem);

        if (closestSideNavItem) {
          closestSideNavItem.classList.add(_this.options.classSideNavItemActive);
        }
      }
    };

    _this.manage((0, _on.default)(element, 'click', _this._handleClick));

    return _this;
  }
  /**
   * Enum for toggling side nav visibility
   * @readonly
   * @member SideNav.state
   * @type {Object}
   * @property {string} EXPANDED Opening/visible
   * @property {string} COLLAPSED Closing/hidden
   */


  _createClass(SideNav, [{
    key: "isNavExpanded",

    /**
     * @returns {boolean} `true` if the nav is expanded.
     */
    value: function isNavExpanded() {
      return this.element.classList.contains(this.options.classSideNavExpanded);
    }
    /**
     * Changes the expanded/collapsed state.
     */

  }, {
    key: "changeState",
    value: function changeState(state) {
      this.element.classList.toggle(this.options.classSideNavExpanded, state === this.constructor.state.EXPANDED);
    }
  }]);

  SideNav.components = new WeakMap();
  SideNav.state = {
    EXPANDED: 'expanded',
    COLLAPSED: 'collapsed'
  };
  SideNav.options = {
    selectorInit: '[data-side-nav]',
    selectorSideNavToggle: ".".concat(prefix, "--side-nav__toggle"),
    selectorSideNavSubmenu: ".".concat(prefix, "--side-nav__submenu"),
    selectorSideNavItem: ".".concat(prefix, "--side-nav__item"),
    selectorSideNavLink: ".".concat(prefix, "--side-nav__link"),
    selectorSideNavLinkCurrent: "[aria-current=\"page\"],.".concat(prefix, "--side-nav__link--current,.").concat(prefix, "--side-nav__item--active"),
    classSideNavExpanded: "".concat(prefix, "--side-nav--expanded"),
    classSideNavItemActive: "".concat(prefix, "--side-nav__item--active"),
    classSideNavLinkCurrent: "".concat(prefix, "--side-nav__link--current")
  };
  return SideNav;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

exports.default = SideNav;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js"}],"node_modules/carbon-components/es/components/ui-shell/header-submenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var forEach =
/* #__PURE__ */
function () {
  return Array.prototype.forEach;
}();

var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var HeaderSubmenu =
/*#__PURE__*/
function (_mixin) {
  _inherits(HeaderSubmenu, _mixin);

  function HeaderSubmenu(element, options) {
    var _this;

    _classCallCheck(this, HeaderSubmenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderSubmenu).call(this, element, options));

    _this._getAction = function (event) {
      var isFlyoutMenu = (0, _eventMatches.default)(event, _this.options.selectorFlyoutMenu);

      if (isFlyoutMenu) {
        return _this.constructor.actions.DELEGATE_TO_FLYOUT_MENU;
      }

      switch (event.type) {
        case 'keydown':
          return {
            32: _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS,
            // space bar
            13: _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS,
            // enter
            27: _this.constructor.actions.CLOSE_SUBMENU // esc
            // possible arrow keys

          }[event.which];

        case 'click':
          return (0, _eventMatches.default)(event, _this.options.selectorItem) ? _this.constructor.actions.CLOSE_SUBMENU : null;

        case 'blur':
        case 'focusout':
          {
            var isOfSelf = _this.element.contains(event.relatedTarget);

            return isOfSelf ? null : _this.constructor.actions.CLOSE_SUBMENU;
          }

        case 'mouseenter':
          return _this.constructor.actions.OPEN_SUBMENU;

        case 'mouseleave':
          return _this.constructor.actions.CLOSE_SUBMENU;

        default:
          return null;
      }
    };

    _this._getNewState = function (action) {
      var trigger = _this.element.querySelector(_this.options.selectorTrigger);

      var isExpanded = trigger.getAttribute(_this.options.attribExpanded) === 'true';

      switch (action) {
        case _this.constructor.actions.CLOSE_SUBMENU:
          return false;

        case _this.constructor.actions.OPEN_SUBMENU:
          return true;

        case _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS:
          return !isExpanded;

        default:
          return isExpanded;
      }
    };

    _this._setState = function (_ref) {
      var shouldBeExpanded = _ref.shouldBeExpanded,
          shouldFocusOnOpen = _ref.shouldFocusOnOpen;

      var trigger = _this.element.querySelector(_this.options.selectorTrigger);

      trigger.setAttribute(_this.options.attribExpanded, shouldBeExpanded);
      forEach.call(_this.element.querySelectorAll(_this.options.selectorItem), function (item) {
        item.tabIndex = shouldBeExpanded ? 0 : -1;
      }); // focus first submenu item

      if (shouldBeExpanded && shouldFocusOnOpen) {
        _this.element.querySelector(_this.options.selectorItem).focus();
      }
    };

    _this.getCurrentNavigation = function () {
      var focused = _this.element.ownerDocument.activeElement;
      return focused.nodeType === Node.ELEMENT_NODE && focused.matches(_this.options.selectorItem) ? focused : null;
    };

    _this.navigate = function (direction) {
      var items = toArray(_this.element.querySelectorAll(_this.options.selectorItem));

      var start = _this.getCurrentNavigation() || _this.element.querySelector(_this.options.selectorItemSelected);

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(index, length) {
          return index + (index >= 0 ? 0 : length);
        };

        var handleOverflow = function handleOverflow(index, length) {
          return index - (index < length ? 0 : length);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
        if (!current.matches(_this.options.selectorItemHidden) && !current.parentNode.matches(_this.options.selectorItemHidden) && !current.matches(_this.options.selectorItemSelected)) {
          current.focus();
          break;
        }
      }
    };

    _this._handleEvent = function (event) {
      var trigger = _this.element.querySelector(_this.options.selectorTrigger);

      if (!trigger) {
        return;
      }

      var action = _this._getAction(event);

      if (action) {
        var shouldBeExpanded = _this._getNewState(action);

        _this._setState({
          shouldBeExpanded: shouldBeExpanded
        });
      }
    };

    _this._handleKeyDown = function (event) {
      var trigger = _this.element.querySelector(_this.options.selectorTrigger);

      if (!trigger) {
        return;
      }

      var action = _this._getAction(event);

      if (event.which === 32) {
        event.preventDefault();
      }

      switch (action) {
        case _this.constructor.actions.DELEGATE_TO_FLYOUT_MENU:
          // currently we do not have a scenario that handles flyout menu
          // handleFlyoutMenu
          break;
        // currently we do not have a scenario that opens a submenu on keydown
        // case this.constructor.actions.OPEN_SUBMENU:

        case _this.constructor.actions.CLOSE_SUBMENU:
          {
            var shouldBeExpanded = _this._getNewState(action);

            _this._setState({
              shouldBeExpanded: shouldBeExpanded
            });

            break;
          }

        case _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS:
          {
            var _shouldBeExpanded = _this._getNewState(action);

            _this._setState({
              shouldBeExpanded: _shouldBeExpanded,
              shouldFocusOnOpen: true
            });

            break;
          }

        default:
          {
            var expanded = trigger.getAttribute(_this.options.attribExpanded) === 'true';

            if (expanded) {
              var direction = {
                38: _this.constructor.NAVIGATE.BACKWARD,
                40: _this.constructor.NAVIGATE.FORWARD
              }[event.which];

              switch (event.which) {
                case 35:
                  {
                    // end key
                    event.preventDefault(); // prevents key from scrolling page

                    var menuItems = _this.element.querySelectorAll(_this.options.selectorItem);

                    var lastMenuItem = menuItems[menuItems.length - 1];

                    if (lastMenuItem) {
                      lastMenuItem.focus();
                    }

                    break;
                  }

                case 36:
                  {
                    // home key
                    event.preventDefault(); // prevents key from scrolling page

                    var _this$element$querySe = _this.element.querySelectorAll(_this.options.selectorItem),
                        _this$element$querySe2 = _slicedToArray(_this$element$querySe, 1),
                        firstMenuItem = _this$element$querySe2[0];

                    if (firstMenuItem) {
                      firstMenuItem.focus();
                    }

                    break;
                  }

                case 38: // up arrow

                case 40:
                  // down arrow
                  _this.navigate(direction);

                  event.preventDefault(); // prevents keys from scrolling page

                  break;

                default:
                  break;
              }
            }

            break;
          }
      }
    };

    var hasFocusOut = 'onfocusout' in window;

    _this.manage((0, _on.default)(_this.element, hasFocusOut ? 'focusout' : 'blur', _this._handleEvent, !hasFocusOut));

    _this.manage((0, _on.default)(_this.element, 'mouseenter', _this._handleEvent));

    _this.manage((0, _on.default)(_this.element, 'mouseleave', _this._handleEvent));

    _this.manage((0, _on.default)(_this.element, 'click', _this._handleEvent));

    _this.manage((0, _on.default)(_this.element, 'keydown', _this._handleKeyDown));

    return _this;
  }
  /**
   * The map associating DOM element and HeaderSubmenu instance.
   * @member HeaderSubmenu.components
   * @type {WeakMap}
   */


  _createClass(HeaderSubmenu, null, [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode HeaderSubmenu.create .create()}, or
     * {@linkcode HeaderSubmenu.init .init()},
     * properties in this object are overriden for the instance being create and
     * how {@linkcode HeaderSubmenu.init .init()} works.
     * @member HeaderSubmenu.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find side navs.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-header-submenu]',
        selectorTrigger: ".".concat(prefix, "--header__menu-title"),
        selectorItem: ".".concat(prefix, "--header__menu .").concat(prefix, "--header__menu-item"),
        attribExpanded: 'aria-expanded'
      };
    }
    /**
     * Enum for navigating backward/forward.
     * @readonly
     * @member HeaderSubmenu.NAVIGATE
     * @type {Object}
     * @property {number} BACKWARD Navigating backward.
     * @property {number} FORWARD Navigating forward.
     */

  }]);

  HeaderSubmenu.components = new WeakMap();
  HeaderSubmenu.actions = {
    CLOSE_SUBMENU: 'CLOSE_SUBMENU',
    OPEN_SUBMENU: 'OPEN_SUBMENU',
    TOGGLE_SUBMENU_WITH_FOCUS: 'TOGGLE_SUBMENU_WITH_FOCUS',
    DELEGATE_TO_FLYOUT_MENU: 'DELEGATE_TO_FLYOUT_MENU'
  };
  HeaderSubmenu.NAVIGATE = {
    BACKWARD: -1,
    FORWARD: 1
  };
  return HeaderSubmenu;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

exports.default = HeaderSubmenu;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js"}],"node_modules/carbon-components/es/components/ui-shell/header-nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var toArray = function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};

var HeaderNav =
/*#__PURE__*/
function (_mixin) {
  _inherits(HeaderNav, _mixin);

  function HeaderNav(element, options) {
    var _this;

    _classCallCheck(this, HeaderNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderNav).call(this, element, options));

    _this.getCurrentNavigation = function () {
      var focused = _this.element.ownerDocument.activeElement.closest(_this.options.selectorSubmenu);

      return focused && focused.nodeType === Node.ELEMENT_NODE ? focused.querySelector(_this.options.selectorSubmenuLink) : null;
    };

    _this.navigate = function (direction) {
      var items = toArray(_this.element.querySelectorAll(_this.options.selectorSubmenuLink));

      var start = _this.getCurrentNavigation();

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(index, length) {
          return index + (index >= 0 ? 0 : length);
        };

        var handleOverflow = function handleOverflow(index, length) {
          return index - (index < length ? 0 : length);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      getNextItem(start).focus();
    };

    _this._handleKeyDown = function (event) {
      var keyCodes = {
        37: _this.constructor.NAVIGATE.BACKWARD,
        // left arrow
        39: _this.constructor.NAVIGATE.FORWARD // right arrow

      };
      var keyCodeMatches = keyCodes[event.which];

      if (keyCodeMatches) {
        _this.navigate(keyCodeMatches);
      }
    };

    _this.manage((0, _on.default)(_this.element, 'keydown', _this._handleKeyDown));

    return _this;
  }
  /**
   * The map associating DOM element and Header instance.
   * @member HeaderNav.components
   * @type {WeakMap}
   */


  _createClass(HeaderNav, null, [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode HeaderNav.create .create()}, or
     * {@linkcode HeaderNav.init .init()},
     * properties in this object are overriden for the instance being create and
     * how {@linkcode HeaderNav.init .init()} works.
     * @member HeaderNav.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find side navs.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-header-nav]',
        selectorNavKind: '[data-header-nav-kind]',
        selectorSubmenu: ".".concat(prefix, "--header__submenu"),
        selectorSubmenuLink: ".".concat(prefix, "--header__menu-title"),
        selectorSubmenuItem: ".".concat(prefix, "--header__menu-title > .").concat(prefix, "--header__menu-item")
      };
    }
    /**
     * Enum for navigating backward/forward.
     * @readonly
     * @member Header.NAVIGATE
     * @type {Object}
     * @property {number} BACKWARD Navigating backward.
     * @property {number} FORWARD Navigating forward.
     */

  }]);

  HeaderNav.components = new WeakMap();
  HeaderNav.NAVIGATE = {
    BACKWARD: -1,
    FORWARD: 1
  };
  return HeaderNav;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

exports.default = HeaderNav;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js"}],"node_modules/carbon-components/es/components/ui-shell/navigation-menu-panel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentByLauncher = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-launcher"));

var _eventedShowHideState = _interopRequireDefault(require("../../globals/js/mixins/evented-show-hide-state"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _eventedState = _interopRequireDefault(require("../../globals/js/mixins/evented-state"));

var _toggleAttribute = _interopRequireDefault(require("../../globals/js/misc/toggle-attribute"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var NavigationMenuPanel =
/*#__PURE__*/
function (_mixin) {
  _inherits(NavigationMenuPanel, _mixin);

  function NavigationMenuPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationMenuPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationMenuPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.createdByLauncher = function (event) {
      var isExpanded = !_this.element.hasAttribute('hidden');
      var newState = isExpanded ? 'collapsed' : 'expanded';
      _this.triggerButton = event.delegateTarget;

      _this.changeState(newState);
    };

    _this.shouldStateBeChanged = function (state) {
      return state === 'expanded' === _this.element.hasAttribute('hidden');
    };

    _this._changeState = function (state, callback) {
      (0, _toggleAttribute.default)(_this.element, 'hidden', state !== 'expanded');

      if (_this.triggerButton) {
        if (state === 'expanded') {
          var focusableMenuItems = _this.element.querySelector(_this.options.selectorFocusableMenuItem);

          if (focusableMenuItems) {
            focusableMenuItems.focus();
          }
        }

        var label = state === 'expanded' ? _this.triggerButton.getAttribute(_this.options.attribLabelCollapse) : _this.triggerButton.getAttribute(_this.options.attribLabelExpand);

        _this.triggerButton.classList.toggle(_this.options.classNavigationMenuPanelHeaderActionActive, state === 'expanded');

        _this.triggerButton.setAttribute('aria-label', label);

        _this.triggerButton.setAttribute('title', label);
      }

      callback();
    };

    return _this;
  }

  _createClass(NavigationMenuPanel, null, [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode NavigationMenuPanel.create .create()}, or
     * {@linkcode NavigationMenuPanel.init .init()},
     * properties in this object are overriden for the instance being create and
     * how {@linkcode NavigationMenuPanel.init .init()} works.
     * @member NavigationMenuPanel.options
     * @type {Object}
     * @property {string} selectorInit The CSS class to find popup navs.
     * @property {string} attribInitTarget The attribute name in the launcher buttons to find target popup nav.
     * @property {string[]} initEventNames The events that the component will handles
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        initEventNames: ['click'],
        eventBeforeExpanded: 'navigation-menu-being-expanded',
        eventAfterExpanded: 'navigation-menu-expanded',
        eventBeforeCollapsed: 'navigation-menu-being-collapsed',
        eventAfterCollapsed: 'navigation-menu-collapsed',
        selectorFocusableMenuItem: ".".concat(prefix, "--navigation__category-toggle, .").concat(prefix, "--navigation-link"),
        classNavigationMenuPanelHeaderActionActive: "".concat(prefix, "--header__action--active"),
        attribLabelExpand: 'data-navigation-menu-panel-label-expand',
        attribLabelCollapse: 'data-navigation-menu-panel-label-collapse'
      };
    }
  }]);

  NavigationMenuPanel.components = new WeakMap();
  return NavigationMenuPanel;
}((0, _mixin2.default)(_createComponent.default, _initComponentByLauncher.default, _eventedShowHideState.default, _handles.default, _eventedState.default));

exports.default = NavigationMenuPanel;
},{"../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-launcher":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-launcher.js","../../globals/js/mixins/evented-show-hide-state":"node_modules/carbon-components/es/globals/js/mixins/evented-show-hide-state.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/mixins/evented-state":"node_modules/carbon-components/es/globals/js/mixins/evented-state.js","../../globals/js/misc/toggle-attribute":"node_modules/carbon-components/es/globals/js/misc/toggle-attribute.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js"}],"node_modules/carbon-components/es/components/ui-shell/navigation-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _navigationMenuPanel = _interopRequireDefault(require("./navigation-menu-panel"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _eventMatches = _interopRequireDefault(require("../../globals/js/misc/event-matches"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var NavigationMenu =
/*#__PURE__*/
function (_NavigationMenuPanel) {
  _inherits(NavigationMenu, _NavigationMenuPanel);
  /**
   * A navigation menu
   * @extends NavigationMenuPanel
   * @param {HTMLElement} element The element working as a selector.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorInit] The CSS class to find navigation
   * menus.
   * @param {string} [options.attribInitTarget] The attribute name in the
   * launcher buttons to find target navigation menu.
   * @param {string} [options.selectorShellNavSubmenu] The CSS selector for a
   * nav submenu
   * @param {string} [options.selectorShellNavLink] The CSS selector for a nav
   * link
   * @param {string} [options.selectorShellNavLinkCurrent] The CSS selector for
   * the current nav link
   * @param {string} [options.selectorShellNavItem] The CSS selector for a nav
   * item
   * @param {string} [options.selectorShellNavCategory] The CSS selector for a
   * nav category
   * @param {string} [options.classShellNavItemActive] The CSS class for the
   * active nav item
   * @param {string} [options.classShellNavLinkCurrent] The CSS class for the
   * current lav link
   * @param {string} [options.classShellNavCategoryExpanded] The CSS class
   * for an expanded nav category
   */


  function NavigationMenu(element, options) {
    var _this;

    _classCallCheck(this, NavigationMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationMenu).call(this, element, options));

    _this.getCurrentNavigation = function () {
      return _this.element.ownerDocument.activeElement;
    };

    _this.navigate = function (direction) {
      var items = _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorFocusableNavItems));

      var start = _this.getCurrentNavigation();

      var getNextItem = function getNextItem(old) {
        var handleUnderflow = function handleUnderflow(index, length) {
          return index + (index >= 0 ? 0 : length);
        };

        var handleOverflow = function handleOverflow(index, length) {
          return index - (index < length ? 0 : length);
        }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


        var index = Math.max(items.indexOf(old) + direction, -1);
        return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
      };

      getNextItem(start).focus();
    };

    _this._handleKeyDown = function (event) {
      // handle Esc
      var isExpanded = !_this.element.hasAttribute('hidden');

      if (event.which === 27 && isExpanded) {
        _this.changeState('collapsed');

        if (_this.triggerButton) {
          _this.triggerButton.focus();
        }

        return;
      } // handle up/down arrow keys


      var matchesNavSubmenu = (0, _eventMatches.default)(event, _this.options.selectorShellNavSubmenu);
      var matchesShellNavLink = (0, _eventMatches.default)(event, _this.options.selectorShellNavLink);

      if (!matchesNavSubmenu && !matchesShellNavLink) {
        return;
      }

      var navigationKeyCodes = {
        38: _this.constructor.NAVIGATE.BACKWARD,
        // up arrow
        40: _this.constructor.NAVIGATE.FORWARD // down arrow

      };
      var navigationKeyCodeMatches = navigationKeyCodes[event.which];

      if (navigationKeyCodeMatches) {
        event.preventDefault(); // prevent arrow keys from scrolling

        _this.navigate(navigationKeyCodeMatches);
      }
    };

    _this._handleFocusOut = function (event) {
      var nextTargetIsOfSelf = _this.element.contains(event.relatedTarget) || event.relatedTarget === _this.triggerButton || !event.relatedTarget;

      var oldTargetIsOfSelf = _this.element.contains(event.target);

      if (oldTargetIsOfSelf && !nextTargetIsOfSelf) {
        _this.changeState('collapsed');

        _this.triggerButton.focus();
      }
    };

    _this.changeNavSubmenuState = function (_ref) {
      var matchesNavSubmenu = _ref.matchesNavSubmenu,
          shouldBeCollapsed = _ref.shouldBeCollapsed;
      var shellNavCategory = matchesNavSubmenu.closest(_this.options.selectorShellNavCategory);

      if (!shellNavCategory) {
        return;
      }

      matchesNavSubmenu.setAttribute('aria-expanded', !shouldBeCollapsed);
      shellNavCategory.classList.toggle(_this.options.classShellNavCategoryExpanded);
      Array.prototype.forEach.call(shellNavCategory.querySelectorAll(_this.options.selectorShellNavLink), function (item) {
        item.tabIndex = !shouldBeCollapsed ? 0 : -1;
      });
    };

    _this._handleClick = function (event) {
      var matchesNavSubmenu = (0, _eventMatches.default)(event, _this.options.selectorShellNavSubmenu);
      var matchesShellNavLink = (0, _eventMatches.default)(event, _this.options.selectorShellNavLink);
      var matchesNestedShellNavLink = (0, _eventMatches.default)(event, _this.options.selectorShellNestedNavLink);

      if (!matchesNavSubmenu && !matchesShellNavLink) {
        return;
      }

      if (matchesNestedShellNavLink) {
        _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorShellNavLinkCurrent)).forEach(function (el) {
          el.classList.remove(_this.options.classShellNavItemActive, _this.options.classShellNavLinkCurrent);
        });

        matchesNestedShellNavLink.closest(_this.options.selectorShellNavNestedCategory).classList.add(_this.options.classShellNavItemActive);
        return;
      }

      if (matchesNavSubmenu) {
        var isExpanded = matchesNavSubmenu.getAttribute('aria-expanded') === 'true';

        _this.changeNavSubmenuState({
          matchesNavSubmenu: matchesNavSubmenu,
          isExpanded: isExpanded
        });

        return;
      }

      if (matchesShellNavLink) {
        _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorShellNavLinkCurrent)).forEach(function (el) {
          el.classList.remove(_this.options.classShellNavItemActive, _this.options.classShellNavLinkCurrent);
        });

        matchesShellNavLink.closest(_this.options.selectorShellNavItem).classList.add(_this.options.classShellNavItemActive);
      }
    };

    _this.manage((0, _on.default)(element, 'click', _this._handleClick));

    _this.manage((0, _on.default)(element, 'keydown', _this._handleKeyDown));

    _this.manage((0, _on.default)(_this.element.ownerDocument, 'click', function (event) {
      if (!_this.element.hasAttribute('hidden') && !_this.triggerButton.contains(event.target) && !_this.element.contains(event.target)) {
        _this.changeState('collapsed');
      }
    }));

    var hasFocusOut = 'onfocusout' in window;

    _this.manage((0, _on.default)(_this.element, hasFocusOut ? 'focusout' : 'blur', _this._handleFocusOut, !hasFocusOut));

    return _this;
  }
  /**
   * @returns {Element} Currently highlighted element.
   */


  _createClass(NavigationMenu, null, [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode NavigationMenu.create .create()}, or
     * {@linkcode NavigationMenu.init .init()},
     * properties in this object are overriden for the instance being create and
     * how {@linkcode NavigationMenu.init .init()} works.
     * @member NavigationMenu.options
     * @type {Object}
     * @property {string} selectorInit The CSS class to find navigation menus.
     * @property {string} attribInitTarget The attribute name in the
     * launcher buttons to find target navigation menu.
     * @property {string[]} initEventNames The events that the component
     * will handles
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return Object.assign(Object.create(_navigationMenuPanel.default.options), {
        selectorInit: '[data-navigation-menu]',
        attribInitTarget: 'data-navigation-menu-target',
        selectorShellNavSubmenu: ".".concat(prefix, "--navigation__category-toggle"),
        selectorShellNavLink: ".".concat(prefix, "--navigation-link"),
        selectorShellNestedNavLink: ".".concat(prefix, "--navigation__category-item > a.").concat(prefix, "--navigation-link"),
        selectorShellNavLinkCurrent: ".".concat(prefix, "--navigation-item--active,.").concat(prefix, "--navigation__category-item--active"),
        selectorFocusableNavItems: "\n        .".concat(prefix, "--navigation__category-toggle,\n        .").concat(prefix, "--navigation-item > .").concat(prefix, "--navigation-link,\n        .").concat(prefix, "--navigation-link[tabindex=\"0\"]\n      "),
        selectorShellNavItem: ".".concat(prefix, "--navigation-item"),
        selectorShellNavCategory: ".".concat(prefix, "--navigation__category"),
        selectorShellNavNestedCategory: ".".concat(prefix, "--navigation__category-item"),
        classShellNavItemActive: "".concat(prefix, "--navigation-item--active"),
        classShellNavLinkCurrent: "".concat(prefix, "--navigation__category-item--active"),
        classShellNavCategoryExpanded: "".concat(prefix, "--navigation__category--expanded")
      });
    }
    /**
     * Enum for navigating backward/forward.
     * @readonly
     * @member NavigationMenuPanel.NAVIGATE
     * @type {Object}
     * @property {number} BACKWARD Navigating backward.
     * @property {number} FORWARD Navigating forward.
     */

  }]);

  NavigationMenu.components = new WeakMap();
  NavigationMenu.NAVIGATE = {
    BACKWARD: -1,
    FORWARD: 1
  };
  return NavigationMenu;
}(_navigationMenuPanel.default);

exports.default = NavigationMenu;
},{"./navigation-menu-panel":"node_modules/carbon-components/es/components/ui-shell/navigation-menu-panel.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/misc/event-matches":"node_modules/carbon-components/es/globals/js/misc/event-matches.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js"}],"node_modules/carbon-components/es/globals/js/misc/on-focus-by-keyboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onFocusByKeyboard;

/**
 * Differentiate between keyboard and mouse-triggered focusout/blur events
 * @param {Element} node  The element to attach event listeners to
 * @param {string} name The event name to listen to
 * @param {Function} callback The callback function to invoke
 * @returns {Handle} The handle to release the attached event handler
 */
function onFocusByKeyboard(node, name, callback) {
  var hasFocusout = 'onfocusout' in window;
  var focusinEventName = hasFocusout ? 'focusin' : 'focus';
  var focusoutEventName = hasFocusout ? 'focusout' : 'blur';
  /**
   * Event types supported by this function
   * @type {Object<string, string>}
   */

  var supportedEvents = {
    focus: focusinEventName,
    blur: focusoutEventName
  };
  var eventName = supportedEvents[name];

  if (!eventName) {
    throw new Error('Unsupported event!');
  }

  var clicked;

  var handleMousedown = function handleMousedown() {
    clicked = true;
    requestAnimationFrame(function () {
      clicked = false;
    });
  };

  var handleFocusin = function handleFocusin(evt) {
    if (!clicked) {
      callback(evt);
    }
  };

  node.ownerDocument.addEventListener('mousedown', handleMousedown);
  node.addEventListener(eventName, handleFocusin, !hasFocusout);
  return {
    release: function release() {
      if (handleFocusin) {
        node.removeEventListener(eventName, handleFocusin, !hasFocusout);
        handleFocusin = null;
      }

      if (handleMousedown) {
        node.ownerDocument.removeEventListener('mousedown', handleMousedown);
        handleMousedown = null;
      }

      return null;
    }
  };
}
},{}],"node_modules/carbon-components/es/components/ui-shell/product-switcher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _navigationMenuPanel = _interopRequireDefault(require("./navigation-menu-panel"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _onFocusByKeyboard = _interopRequireDefault(require("../../globals/js/misc/on-focus-by-keyboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var ProductSwitcher =
/*#__PURE__*/
function (_NavigationMenuPanel) {
  _inherits(ProductSwitcher, _NavigationMenuPanel);
  /**
   * A navigation menu
   * @extends NavigationMenuPanel
   * @param {HTMLElement} element The element working as a selector.
   * @param {Object} [options] The component options.
   * @param {string} [options.selectorInit] The CSS class to find product
   * switchers
   * @param {string} [options.attribInitTarget] The attribute name in the
   * launcher buttons to find target product switcher
   * @param {string} [options.classProductSwitcherExpanded] The CSS class
   * for an expanded product switcher
   */


  function ProductSwitcher(element, options) {
    var _this;

    _classCallCheck(this, ProductSwitcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductSwitcher).call(this, element, options));
    _this.current = '';
    _this.triggerButtonIds = new Set();

    _this._handleFocusOut = function (event) {
      if (_this.element.contains(event.relatedTarget)) {
        return;
      }

      var currentTriggerButton = _this.element.ownerDocument.getElementById(_this.current);

      if (currentTriggerButton && event.relatedTarget && !event.relatedTarget.matches(_this.options.selectorFloatingMenus)) {
        currentTriggerButton.focus();
      }
    };

    _this._handleKeyDown = function (event) {
      var isExpanded = !_this.element.hasAttribute('hidden');

      if (event.which === 27 && isExpanded) {
        var triggerButton = _this.current;

        _this.changeState(_this.constructor.SELECT_NONE);

        _this.element.ownerDocument.getElementById(triggerButton).focus();
      }
    };

    _this.createdByLauncher = function (event) {
      var isExpanded = _this.element.classList.contains(_this.options.classProductSwitcherExpanded);

      var launcher = event.delegateTarget;

      if (!launcher.id) {
        launcher.id = "__carbon-product-switcher-launcher-".concat(Math.random().toString(36).substr(2));
      }

      var current = launcher.id;

      _this.changeState(isExpanded && _this.current === current ? _this.constructor.SELECT_NONE : current);
    };

    _this.shouldStateBeChanged = function (current) {
      return _this.current !== current;
    };

    _this._changeState = function (state, callback) {
      _this.element.classList.toggle(_this.options.classProductSwitcherExpanded, state !== _this.constructor.SELECT_NONE);

      _this.current = state;

      if (_this.current !== _this.constructor.SELECT_NONE) {
        _this.triggerButtonIds.add(_this.current);
      } // deactivate all other trigger buttons


      _this.triggerButtonIds.forEach(function (id) {
        var button = _this.element.ownerDocument.getElementById(id);

        var label = button.getAttribute(_this.options.attribLabelExpand);
        button.classList.remove(_this.options.classNavigationMenuPanelHeaderActionActive);
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
      }); // set active trigger button attributes


      var currentTriggerButton = _this.element.ownerDocument.getElementById(_this.current);

      if (currentTriggerButton) {
        var label = currentTriggerButton.getAttribute(_this.options.attribLabelCollapse);
        currentTriggerButton.classList.toggle(_this.options.classNavigationMenuPanelHeaderActionActive);
        currentTriggerButton.setAttribute('aria-label', label);
        currentTriggerButton.setAttribute('title', label);
      }

      if (state !== _this.constructor.SELECT_NONE) {
        _this.element.setAttribute('tabindex', '0');

        _this.element.focus();
      } else {
        _this.element.setAttribute('tabindex', '-1');
      }

      callback();
    };

    _this.manage((0, _on.default)(element, 'keydown', _this._handleKeyDown));

    _this.manage((0, _onFocusByKeyboard.default)(element, 'blur', _this._handleFocusOut));

    return _this;
  }
  /**
   * id of currently active trigger button
   * @type {string}
   */


  _createClass(ProductSwitcher, [{
    key: "release",
    value: function release() {
      this.triggerButtonIds.clear();
      return _get(_getPrototypeOf(ProductSwitcher.prototype), "release", this).call(this);
    }
    /**
     * The map associating DOM element and ProductSwitcher instance.
     * @member ProductSwitcher.components
     * @type {WeakMap}
     */

  }], [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor,
     * {@linkcode ProductSwitcher.create .create()}, or
     * {@linkcode ProductSwitcher.init .init()},
     * properties in this object are overriden for the instance being create and
     * how {@linkcode ProductSwitcher.init .init()} works.
     * @member ProductSwitcher.options
     * @type {Object}
     * @property {string} selectorInit The CSS class to find popup navs.
     * @property {string} attribInitTarget The attribute name in the
     * launcher buttons to find target popup nav.
     * @property {string[]} initEventNames The events that the component
     * will handles
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return Object.assign(Object.create(_navigationMenuPanel.default.options), {
        selectorInit: '[data-product-switcher]',
        selectorFloatingMenus: "\n        .".concat(prefix, "--overflow-menu-options,\n        .").concat(prefix, "--overflow-menu-options *,\n        .").concat(prefix, "--tooltip,\n        .").concat(prefix, "--tooltip *,\n        .flatpicker-calendar,\n        .flatpicker-calendar *\n        "),
        attribInitTarget: 'data-product-switcher-target',
        classProductSwitcherExpanded: "".concat(prefix, "--panel--expanded")
      });
    }
  }]);

  ProductSwitcher.SELECT_NONE = '__carbon-product-switcher-launcher-NONE';
  ProductSwitcher.components = new WeakMap();
  return ProductSwitcher;
}(_navigationMenuPanel.default);

exports.default = ProductSwitcher;
},{"./navigation-menu-panel":"node_modules/carbon-components/es/components/ui-shell/navigation-menu-panel.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js","../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/on-focus-by-keyboard":"node_modules/carbon-components/es/globals/js/misc/on-focus-by-keyboard.js"}],"node_modules/carbon-components/es/components/pagination-nav/pagination-nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _mixin2 = _interopRequireDefault(require("../../globals/js/misc/mixin"));

var _createComponent = _interopRequireDefault(require("../../globals/js/mixins/create-component"));

var _initComponentBySearch = _interopRequireDefault(require("../../globals/js/mixins/init-component-by-search"));

var _handles = _interopRequireDefault(require("../../globals/js/mixins/handles"));

var _on = _interopRequireDefault(require("../../globals/js/misc/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function (obj) { return typeof obj; }; } else { _typeof2 = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */


var PaginationNav =
/*#__PURE__*/
function (_mixin) {
  _inherits(PaginationNav, _mixin);
  /**
   * Pagination Nav component
   * @extends CreateComponent
   * @extends InitComponentBySearch
   * @extends Handles
   * @param {HTMLElement} element The element working as a pagination nav.
   */


  function PaginationNav(element, options) {
    var _this;

    _classCallCheck(this, PaginationNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaginationNav).call(this, element, options));

    _this.getActivePageNumber = function () {
      var pageNum;

      var activePageElement = _this.element.querySelector(_this.options.selectorPageActive);

      if (activePageElement) {
        pageNum = Number(activePageElement.getAttribute(_this.options.attribPage));
      }

      return pageNum;
    };

    _this.clearActivePage = function (evt) {
      var pageButtonNodeList = _this.element.querySelectorAll(_this.options.selectorPageButton);

      var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

      Array.prototype.forEach.call(pageButtonNodeList, function (el) {
        el.classList.remove(_this.options.classActive, _this.options.classDisabled);
        el.removeAttribute(_this.options.attribActive);
        el.removeAttribute('aria-disabled');
        el.removeAttribute('aria-current');
      });

      if (pageSelectElement) {
        pageSelectElement.removeAttribute('aria-current');
        var pageSelectElementOptions = pageSelectElement.options;
        Array.prototype.forEach.call(pageSelectElementOptions, function (el) {
          el.removeAttribute(_this.options.attribActive);
        });

        if (!evt.target.matches(_this.options.selectorPageSelect)) {
          pageSelectElement.classList.remove(_this.options.classActive);
          pageSelectElement.value = '';
        }
      }
    };

    _this.handleClick = function (evt) {
      if (!evt.target.getAttribute('aria-disabled') === true) {
        var nextActivePageNumber = _this.getActivePageNumber();

        var pageElementNodeList = _this.element.querySelectorAll(_this.options.selectorPageElement);

        var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

        _this.clearActivePage(evt);

        if (evt.target.matches(_this.options.selectorPageButton)) {
          nextActivePageNumber = Number(evt.target.getAttribute(_this.options.attribPage));
        }

        if (evt.target.matches(_this.options.selectorPagePrevious)) {
          nextActivePageNumber -= 1;
        }

        if (evt.target.matches(_this.options.selectorPageNext)) {
          nextActivePageNumber += 1;
        }

        var pageTargetElement = pageElementNodeList[nextActivePageNumber - 1];
        pageTargetElement.setAttribute(_this.options.attribActive, true);

        if (pageTargetElement.tagName === 'OPTION') {
          pageSelectElement.value = _this.getActivePageNumber();
          pageSelectElement.classList.add(_this.options.classActive);
          pageSelectElement.setAttribute('aria-current', 'page');
        } else {
          pageTargetElement.classList.add(_this.options.classActive, _this.options.classDisabled);
          pageTargetElement.setAttribute('aria-disabled', true);
          pageTargetElement.setAttribute('aria-current', 'page');
        }

        _this.setPrevNextStates();
      }
    };

    _this.handleSelectChange = function (evt) {
      _this.clearActivePage(evt);

      var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

      var pageSelectElementOptions = pageSelectElement.options;
      pageSelectElementOptions[pageSelectElementOptions.selectedIndex].setAttribute(_this.options.attribActive, true);
      evt.target.setAttribute('aria-current', 'page');
      evt.target.classList.add(_this.options.classActive);

      _this.setPrevNextStates();
    };

    _this.setPrevNextStates = function () {
      var pageElementNodeList = _this.element.querySelectorAll(_this.options.selectorPageElement);

      var totalPages = pageElementNodeList.length;

      var pageDirectionElementPrevious = _this.element.querySelector(_this.options.selectorPagePrevious);

      var pageDirectionElementNext = _this.element.querySelector(_this.options.selectorPageNext);

      if (pageDirectionElementPrevious) {
        if (_this.getActivePageNumber() <= 1) {
          pageDirectionElementPrevious.setAttribute('aria-disabled', true);
          pageDirectionElementPrevious.classList.add(_this.options.classDisabled);
        } else {
          pageDirectionElementPrevious.removeAttribute('aria-disabled');
          pageDirectionElementPrevious.classList.remove(_this.options.classDisabled);
        }
      }

      if (pageDirectionElementNext) {
        if (_this.getActivePageNumber() >= totalPages) {
          pageDirectionElementNext.setAttribute('aria-disabled', true);
          pageDirectionElementNext.classList.add(_this.options.classDisabled);
        } else {
          pageDirectionElementNext.removeAttribute('aria-disabled');
          pageDirectionElementNext.classList.remove(_this.options.classDisabled);
        }
      }
    };

    _this.manage((0, _on.default)(_this.element, 'click', function (evt) {
      return _this.handleClick(evt);
    }));

    _this.manage((0, _on.default)(_this.element, 'change', function (evt) {
      if (evt.target.matches(_this.options.selectorPageSelect)) {
        _this.handleSelectChange(evt);
      }
    }));

    return _this;
  }
  /**
   * Get active page number
   */


  _createClass(PaginationNav, null, [{
    key: "options",

    /**
     * The component options.
     * If `options` is specified in the constructor, {@linkcode PaginationNav.create .create()},
     * or {@linkcode PaginationNav.init .init()},
     * properties in this object are overriden for the instance being create and how {@linkcode PaginationNav.init .init()} works.
     * @member PaginationNav.options
     * @type {Object}
     * @property {string} selectorInit The data attribute to find pagination nav.
     * @property {string} selectorPageElement The data attribute to find page element.
     * @property {string} selectorPageButton The data attribute to find page interactive element.
     * @property {string} selectorPageDirection The data attribute to find page change element.
     * @property {string} selectorPageSelect The data attribute to find page select element.
     * @property {string} selectorPageActive The data attribute to find active page element.
     * @property {string} [classActive] The CSS class for page's selected state.
     * @property {string} [classDisabled] The CSS class for page's disabled state.
     */
    get: function get() {
      var prefix = _settings.default.prefix;
      return {
        selectorInit: '[data-pagination-nav]',
        selectorPageElement: '[data-page]',
        selectorPageButton: '[data-page-button]',
        selectorPagePrevious: '[data-page-previous]',
        selectorPageNext: '[data-page-next]',
        selectorPageSelect: '[data-page-select]',
        selectorPageActive: '[data-page-active="true"]',
        attribPage: 'data-page',
        attribActive: 'data-page-active',
        classActive: "".concat(prefix, "--pagination-nav__page--active"),
        classDisabled: "".concat(prefix, "--pagination-nav__page--disabled")
      };
    }
  }]);

  PaginationNav.components = new WeakMap();
  return PaginationNav;
}((0, _mixin2.default)(_createComponent.default, _initComponentBySearch.default, _handles.default));

var _default = PaginationNav;
exports.default = _default;
},{"../../globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js","../../globals/js/misc/mixin":"node_modules/carbon-components/es/globals/js/misc/mixin.js","../../globals/js/mixins/create-component":"node_modules/carbon-components/es/globals/js/mixins/create-component.js","../../globals/js/mixins/init-component-by-search":"node_modules/carbon-components/es/globals/js/mixins/init-component-by-search.js","../../globals/js/mixins/handles":"node_modules/carbon-components/es/globals/js/mixins/handles.js","../../globals/js/misc/on":"node_modules/carbon-components/es/globals/js/misc/on.js"}],"node_modules/carbon-components/es/globals/js/components.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function () {
    return _checkbox.default;
  }
});
Object.defineProperty(exports, "FileUploader", {
  enumerable: true,
  get: function () {
    return _fileUploader.default;
  }
});
Object.defineProperty(exports, "ContentSwitcher", {
  enumerable: true,
  get: function () {
    return _contentSwitcher.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function () {
    return _tabs.default;
  }
});
Object.defineProperty(exports, "OverflowMenu", {
  enumerable: true,
  get: function () {
    return _overflowMenu.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _modal.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function () {
    return _loading.default;
  }
});
Object.defineProperty(exports, "InlineLoading", {
  enumerable: true,
  get: function () {
    return _inlineLoading.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function () {
    return _dropdown.default;
  }
});
Object.defineProperty(exports, "NumberInput", {
  enumerable: true,
  get: function () {
    return _numberInput.default;
  }
});
Object.defineProperty(exports, "DataTableV2", {
  enumerable: true,
  get: function () {
    return _dataTableV.default;
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function () {
    return _datePicker.default;
  }
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function () {
    return _pagination.default;
  }
});
Object.defineProperty(exports, "Search", {
  enumerable: true,
  get: function () {
    return _search.default;
  }
});
Object.defineProperty(exports, "Accordion", {
  enumerable: true,
  get: function () {
    return _accordion.default;
  }
});
Object.defineProperty(exports, "CopyButton", {
  enumerable: true,
  get: function () {
    return _copyButton.default;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _notification.default;
  }
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function () {
    return _toolbar.default;
  }
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function () {
    return _tooltip.default;
  }
});
Object.defineProperty(exports, "ProgressIndicator", {
  enumerable: true,
  get: function () {
    return _progressIndicator.default;
  }
});
Object.defineProperty(exports, "FloatingMenu", {
  enumerable: true,
  get: function () {
    return _floatingMenu.default;
  }
});
Object.defineProperty(exports, "StructuredList", {
  enumerable: true,
  get: function () {
    return _structuredList.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function () {
    return _slider.default;
  }
});
Object.defineProperty(exports, "Tile", {
  enumerable: true,
  get: function () {
    return _tile.default;
  }
});
Object.defineProperty(exports, "CodeSnippet", {
  enumerable: true,
  get: function () {
    return _codeSnippet.default;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function () {
    return _textInput.default;
  }
});
Object.defineProperty(exports, "SideNav", {
  enumerable: true,
  get: function () {
    return _sideNav.default;
  }
});
Object.defineProperty(exports, "HeaderSubmenu", {
  enumerable: true,
  get: function () {
    return _headerSubmenu.default;
  }
});
Object.defineProperty(exports, "HeaderNav", {
  enumerable: true,
  get: function () {
    return _headerNav.default;
  }
});
Object.defineProperty(exports, "NavigationMenu", {
  enumerable: true,
  get: function () {
    return _navigationMenu.default;
  }
});
Object.defineProperty(exports, "ProductSwitcher", {
  enumerable: true,
  get: function () {
    return _productSwitcher.default;
  }
});
Object.defineProperty(exports, "PaginationNav", {
  enumerable: true,
  get: function () {
    return _paginationNav.default;
  }
});

var _checkbox = _interopRequireDefault(require("../../components/checkbox/checkbox"));

var _fileUploader = _interopRequireDefault(require("../../components/file-uploader/file-uploader"));

var _contentSwitcher = _interopRequireDefault(require("../../components/content-switcher/content-switcher"));

var _tabs = _interopRequireDefault(require("../../components/tabs/tabs"));

var _overflowMenu = _interopRequireDefault(require("../../components/overflow-menu/overflow-menu"));

var _modal = _interopRequireDefault(require("../../components/modal/modal"));

var _loading = _interopRequireDefault(require("../../components/loading/loading"));

var _inlineLoading = _interopRequireDefault(require("../../components/inline-loading/inline-loading"));

var _dropdown = _interopRequireDefault(require("../../components/dropdown/dropdown"));

var _numberInput = _interopRequireDefault(require("../../components/number-input/number-input"));

var _dataTableV = _interopRequireDefault(require("../../components/data-table-v2/data-table-v2"));

var _datePicker = _interopRequireDefault(require("../../components/date-picker/date-picker"));

var _pagination = _interopRequireDefault(require("../../components/pagination/pagination"));

var _search = _interopRequireDefault(require("../../components/search/search"));

var _accordion = _interopRequireDefault(require("../../components/accordion/accordion"));

var _copyButton = _interopRequireDefault(require("../../components/copy-button/copy-button"));

var _notification = _interopRequireDefault(require("../../components/notification/notification"));

var _toolbar = _interopRequireDefault(require("../../components/toolbar/toolbar"));

var _tooltip = _interopRequireDefault(require("../../components/tooltip/tooltip"));

var _progressIndicator = _interopRequireDefault(require("../../components/progress-indicator/progress-indicator"));

var _floatingMenu = _interopRequireDefault(require("../../components/floating-menu/floating-menu"));

var _structuredList = _interopRequireDefault(require("../../components/structured-list/structured-list"));

var _slider = _interopRequireDefault(require("../../components/slider/slider"));

var _tile = _interopRequireDefault(require("../../components/tile/tile"));

var _codeSnippet = _interopRequireDefault(require("../../components/code-snippet/code-snippet"));

var _textInput = _interopRequireDefault(require("../../components/text-input/text-input"));

var _sideNav = _interopRequireDefault(require("../../components/ui-shell/side-nav"));

var _headerSubmenu = _interopRequireDefault(require("../../components/ui-shell/header-submenu"));

var _headerNav = _interopRequireDefault(require("../../components/ui-shell/header-nav"));

var _navigationMenu = _interopRequireDefault(require("../../components/ui-shell/navigation-menu"));

var _productSwitcher = _interopRequireDefault(require("../../components/ui-shell/product-switcher"));

var _paginationNav = _interopRequireDefault(require("../../components/pagination-nav/pagination-nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../../components/checkbox/checkbox":"node_modules/carbon-components/es/components/checkbox/checkbox.js","../../components/file-uploader/file-uploader":"node_modules/carbon-components/es/components/file-uploader/file-uploader.js","../../components/content-switcher/content-switcher":"node_modules/carbon-components/es/components/content-switcher/content-switcher.js","../../components/tabs/tabs":"node_modules/carbon-components/es/components/tabs/tabs.js","../../components/overflow-menu/overflow-menu":"node_modules/carbon-components/es/components/overflow-menu/overflow-menu.js","../../components/modal/modal":"node_modules/carbon-components/es/components/modal/modal.js","../../components/loading/loading":"node_modules/carbon-components/es/components/loading/loading.js","../../components/inline-loading/inline-loading":"node_modules/carbon-components/es/components/inline-loading/inline-loading.js","../../components/dropdown/dropdown":"node_modules/carbon-components/es/components/dropdown/dropdown.js","../../components/number-input/number-input":"node_modules/carbon-components/es/components/number-input/number-input.js","../../components/data-table-v2/data-table-v2":"node_modules/carbon-components/es/components/data-table-v2/data-table-v2.js","../../components/date-picker/date-picker":"node_modules/carbon-components/es/components/date-picker/date-picker.js","../../components/pagination/pagination":"node_modules/carbon-components/es/components/pagination/pagination.js","../../components/search/search":"node_modules/carbon-components/es/components/search/search.js","../../components/accordion/accordion":"node_modules/carbon-components/es/components/accordion/accordion.js","../../components/copy-button/copy-button":"node_modules/carbon-components/es/components/copy-button/copy-button.js","../../components/notification/notification":"node_modules/carbon-components/es/components/notification/notification.js","../../components/toolbar/toolbar":"node_modules/carbon-components/es/components/toolbar/toolbar.js","../../components/tooltip/tooltip":"node_modules/carbon-components/es/components/tooltip/tooltip.js","../../components/progress-indicator/progress-indicator":"node_modules/carbon-components/es/components/progress-indicator/progress-indicator.js","../../components/floating-menu/floating-menu":"node_modules/carbon-components/es/components/floating-menu/floating-menu.js","../../components/structured-list/structured-list":"node_modules/carbon-components/es/components/structured-list/structured-list.js","../../components/slider/slider":"node_modules/carbon-components/es/components/slider/slider.js","../../components/tile/tile":"node_modules/carbon-components/es/components/tile/tile.js","../../components/code-snippet/code-snippet":"node_modules/carbon-components/es/components/code-snippet/code-snippet.js","../../components/text-input/text-input":"node_modules/carbon-components/es/components/text-input/text-input.js","../../components/ui-shell/side-nav":"node_modules/carbon-components/es/components/ui-shell/side-nav.js","../../components/ui-shell/header-submenu":"node_modules/carbon-components/es/components/ui-shell/header-submenu.js","../../components/ui-shell/header-nav":"node_modules/carbon-components/es/components/ui-shell/header-nav.js","../../components/ui-shell/navigation-menu":"node_modules/carbon-components/es/components/ui-shell/navigation-menu.js","../../components/ui-shell/product-switcher":"node_modules/carbon-components/es/components/ui-shell/product-switcher.js","../../components/pagination-nav/pagination-nav":"node_modules/carbon-components/es/components/pagination-nav/pagination-nav.js"}],"node_modules/carbon-components/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  settings: true
};
Object.defineProperty(exports, "settings", {
  enumerable: true,
  get: function () {
    return _settings.default;
  }
});

var _components = require("./globals/js/components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _components[key];
    }
  });
});

var _settings = _interopRequireDefault(require("./globals/js/settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./globals/js/components":"node_modules/carbon-components/es/globals/js/components.js","./globals/js/settings":"node_modules/carbon-components/es/globals/js/settings.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./index.scss");

var _carbonComponents = require("carbon-components");

_carbonComponents.Dropdown.create(document.getElementById("my-dropdown"));
},{"./index.scss":"src/index.scss","carbon-components":"node_modules/carbon-components/es/index.js"}],"C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3443" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/en27553/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map