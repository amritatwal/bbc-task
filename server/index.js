import { CasparCG } from 'casparcg-connection'
import { Scheduler, getCurrentTime } from './lib/helpers.js'

// The INVOKE command can call (I assume based on what I've read) any custom function
// For maintainability, custom functions passed into invoke() could be compiled in a package / module.
// These would be imported below for use in this API.

class CasparCGAPI {
  constructor() {
    this.connection = new CasparCG({
      host: '127.0.0.1',
      port: 5250,
    })
  }

  async connect() {
    try {
      console.info('🏁 Connecting to the CasparCG server on port 5250...')

      const time = getCurrentTime()
      const scheduler = new Scheduler(() => {
        this.invokeMethod('on', time)
      })

      await this.connection.cgAdd({
        channel: 1,
        layer: 1,
        template: 'http://127.0.0.1:8080/client/html/main.html',
        playOnLoad: 1,
      })

      console.info('Connection established.')
      scheduler.start()
    } catch (error) {
      // How are errors handled when communicating with CasparCG? In the event that something goes wrong whilst trying to communicate with the CasparCG server.
      // Where are errors logged out to?
      console.error(error)
      // scheduler.stop()?
    }
  }

  async invokeMethod(toggle, time) {
    const method =
      toggle === 'on'
        ? `leftTab('on', 'BBC NEWS ${time}') \r\n`
        : `leftTab('off') \r\n`

    return this.connection.cgInvoke({
      channel: 1,
      layer: 1,
      cgLayer: 0,
      method: method,
    })
  }

  disconnect() {
    this.connection.disconnect()
    console.info('🏳️ Disconnected.')
    return
  }
}

const casparCG = new CasparCGAPI()

await casparCG.connect()
