package webrtc.spike

import com.tropo.grails.TropoBuilder


class StartController {

    static allowedMethods = [
            index:'POST'
    ]

    def index() {
        def tropoBuilder = new TropoBuilder()
        tropoBuilder.tropo {
            say('Hello there!')
            transfer([to:'sip:97b7502d-7f76-4abd-8544-6ec3c832f906@pgw-v11f.phono.com']){
                headers(['x-foobar': 12345, 'x-barfoo': 'Hellion'])
            }
        }
        tropoBuilder.render(response)
    }
}
