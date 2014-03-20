(function() {
  window.javascriptClient = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      'use strict';
      return console.log('Hello from Backbone!');
    }
  };

  $(function() {
    'use strict';
    return javascriptClient.init();
  });

}).call(this);

this.JST = this.JST || {};