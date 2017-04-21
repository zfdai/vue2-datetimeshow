;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="iconfont-icon-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.989 577.855l-131.706-131.705h263.414l-131.706 131.705z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="iconfont-jintian-zititubiao-01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M876.544 186.368h-151.552v-4.096c0-34.816-26.624-63.488-61.44-63.488s-61.44 28.672-61.44 63.488v4.096h-163.84v-4.096c0-36.864-36.864-63.488-71.68-63.488s-71.68 26.624-71.68 63.488v4.096H176.128c-59.392 0-129.024 55.296-129.024 110.592v507.904c0 61.44 71.68 98.304 129.024 98.304h698.368c59.392 0 94.208-40.96 94.208-98.304V296.96c2.048-57.344-34.816-110.592-92.16-110.592z m-233.472-4.096c0-10.24 6.144-22.528 20.48-22.528s20.48 12.288 20.48 22.528v67.584c0 10.24-6.144 22.528-20.48 22.528s-20.48-12.288-20.48-22.528V182.272z m-307.2 0c0-10.24 16.384-22.528 30.72-22.528s30.72 12.288 30.72 22.528v67.584c0 10.24-16.384 22.528-30.72 22.528s-30.72-12.288-30.72-22.528V182.272z m593.92 622.592c0 32.768-16.384 57.344-53.248 57.344H176.128c-34.816 0-88.064-22.528-88.064-57.344V296.96c0-32.768 51.2-69.632 88.064-69.632h116.736v24.576c0 36.864 36.864 63.488 71.68 63.488s71.68-26.624 71.68-63.488v-24.576h163.84v24.576c0 34.816 26.624 63.488 61.44 63.488s61.44-28.672 61.44-63.488v-24.576h151.552c34.816 0 53.248 34.816 53.248 69.632v507.904z" fill="" ></path>' +
    '' +
    '<path d="M270.336 600.064h174.08c-16.384 20.48-38.912 49.152-67.584 83.968l20.48 16.384c12.288-16.384 28.672-34.816 49.152-61.44 12.288-16.384 22.528-30.72 30.72-38.912v-22.528h-202.752v22.528zM393.216 434.176c2.048-4.096 4.096-6.144 6.144-10.24l-28.672-4.096c-30.72 47.104-75.776 86.016-137.216 116.736 6.144 8.192 10.24 14.336 14.336 20.48 55.296-30.72 98.304-67.584 131.072-108.544 30.72 43.008 71.68 77.824 122.88 104.448 0 0 2.048-2.048 2.048-4.096 6.144-12.288 10.24-18.432 12.288-20.48-49.152-16.384-92.16-49.152-122.88-94.208z" fill="" ></path>' +
    '' +
    '<path d="M368.64 505.856l-18.432 12.288c12.288 16.384 22.528 30.72 30.72 45.056l20.48-12.288c-8.192-14.336-20.48-30.72-32.768-45.056zM688.128 552.96h122.88v-20.48h-124.928v-32.768c0-16.384 2.048-28.672 2.048-34.816H798.72v-20.48H552.96v20.48h106.496V532.48h-122.88v20.48H655.36c-10.24 51.2-51.2 92.16-122.88 122.88 6.144 8.192 12.288 14.336 16.384 22.528 67.584-30.72 108.544-71.68 122.88-122.88 16.384 55.296 57.344 94.208 122.88 118.784 6.144-8.192 10.24-16.384 14.336-24.576-61.44-16.384-102.4-55.296-120.832-116.736z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="iconfont-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="iconfont-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="iconfont-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="iconfont-jintian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M443.3 892.1c-56.1 0-101.6-8.7-138-26.2-28.6-13.9-52.3-33.5-70.3-58.5-18.4-25.5-31.6-57.5-39.3-95.1-22.1-109.3 27.5-253.4 108.5-314.8 6.6-5 16-3.7 21 2.9s3.7 16-2.9 21c-71.5 54.2-116.9 187.4-97.2 284.9 13.2 65.3 43.7 108.6 93.2 132.4 46.2 22.3 110.5 28.5 196.5 19 154.9-17 342-92.9 402.5-254.7 37.6-100.6 22.5-208-41.5-294.7-68.2-92.3-181.6-143.1-303.4-136-152.1 8.9-277 87.1-354.9 151.1-85.1 69.9-134.5 138.7-135 139.4-4.8 6.7-14.2 8.3-20.9 3.5-6.7-4.8-8.3-14.2-3.5-20.9 2.1-2.9 51.7-72.2 139.7-144.6 51.7-42.6 106-77.3 161.3-103.2 69.4-32.5 140.6-51.1 211.6-55.3 68.2-4 132.6 8 191.4 35.6 54.8 25.7 102.5 64.7 137.9 112.7 33.3 45.1 55.3 97.7 63.6 152 8.9 57.6 2.7 115.2-18.1 171-15.3 40.8-38.8 78.6-70 112.3-28.6 30.8-63.6 58.3-104.1 81.7-72 41.6-161.9 70-253.2 80-26.9 3-51.8 4.5-74.9 4.5z" fill="#939393" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)