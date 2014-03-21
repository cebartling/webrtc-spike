(function() {
  window.javascriptClient = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      'use strict';
      return $.phono({
        apiKey: 'bbd8b811336386776eeba091b89088ea',
        onReady: function(event) {
          return $('span#sipAddress').html("sip:" + this.sessionId);
        },
        phone: {
          onIncomingCall: function(event) {
            var call;
            call = event.call;
            _.each(call.headers, function(header) {
              return console.log("Customer header: [" + header.name + ": " + header.value + "]");
            });
            alert("Incoming call...");
            return call.bind({
              onHangup: function(event) {
                return console.log('Call hung up');
              }
            });
          }
        }
      });
    }
  };

  $(function() {
    'use strict';
    return javascriptClient.init();
  });

}).call(this);

this.JST = this.JST || {};