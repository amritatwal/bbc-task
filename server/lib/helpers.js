export function getCurrentTime() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

// Test the functionality below using unit tests and more importantly scheduled automated tests.
// Would scheduled testing work? Setting up automated tests to run at specific times to ensure that the graphic overlay is being updated correctly (i.e. the correct time is being reflected on the minute)
// Would automated tests integrate with alarms? To maintain quality assurance 24/7. I assume we don't things to fail silently.

export class Scheduler {
  constructor(callback, timeout) {
    this.callback = callback
    // Is there a need for a default timeout? Or does the INVOKE command need to be run indefinitely?
    this.timeout = timeout
  }

  start() {
    this.callback()
    this.intervalId = setInterval(this.callback, 60000)
    return
  }

  stop() {
    setTimeout(() => {
      clearInterval(this.intervalId)
      console.info('Scheduler stopped.')
    }, this.timeout)
  }
}
