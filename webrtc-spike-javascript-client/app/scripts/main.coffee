window.javascriptClient =
    Models: {}
    Collections: {}
    Views: {}
    Routers: {}

    init: ->
        'use strict'
        $.phono({
            apiKey: 'bbd8b811336386776eeba091b89088ea'

            onReady: (event) ->
                $('span#sipAddress').html "sip:#{this.sessionId}"

            phone: {
                onIncomingCall: (event) ->
                    call = event.call
                    _.each call.headers, (header) ->
                        console.log "Customer header: [#{header.name}: #{header.value}]"
                    alert "Incoming call..."
                    call.bind {
                        onHangup: (event) ->
                            console.log 'Call hung up'
                    }
            }
        })

$ ->
    'use strict'
    javascriptClient.init();
