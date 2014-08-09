// jQuery.semanticScrollTo

(function ($) {
  'use strict';

  $.fn.semanticScrollTo = function (options) {
    if ($(this).length > 0) {
      $.extend(this, this.semanticScrollTo.methods);
      this.__init(options);
    } else {
      $.error('Selector not found on jQuery.semanticScrollTo');
    }
  };

  $.fn.semanticScrollTo.defaults = {
    animationSpeed: 500
  };

  $.fn.semanticScrollTo.methods = {
    __init: function (preferences) {
      this.options = $.extend({}, this.semanticScrollTo.defaults, preferences);
      this.__addEventListener();
    },

    __addEventListener: function () {
      this.__move = this.__bind(this.__move, this);
      $(this).on('click', 'a[href^="#"]', this.__move);
    },

    __move: function (event) {
      event.preventDefault();
      var dispatcher             = $(event.target),
          anchorTarget           = this.__dispatcherOrBody(dispatcher),
          previousAnchorTargetId = anchorTarget.attr('id');
      anchorTarget.attr('id', '');
      this.__scroll(anchorTarget.offset().top);
      this.__setHash(dispatcher.attr('href'));
      anchorTarget.attr('id', previousAnchorTargetId);
    },

    __dispatcherOrBody: function (dispatcher) {
      return (dispatcher.attr('href') !== '#') ? $(dispatcher.attr('href')) : $('body');
    },

    __scroll: function (offsetHeight) {
      $('html, body').animate({
        scrollTop: offsetHeight
      }, this.options.animationSpeed);
    },

    __setHash: function (hrefAttr) {
      if (hrefAttr !== '#') window.location.hash = hrefAttr
      else history.pushState('', document.title, window.location.pathname);
    },

    __bind: function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }
  };
}(jQuery));
