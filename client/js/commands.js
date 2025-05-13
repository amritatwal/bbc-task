'use strict'(
  /**
   * Commands.js currently only houses updateTime(). Over time, this will expand to house other functionality e.g. updating the tagline.
   */


  // Clarifying questions:
  // Why is 'BBC NEWS' passed in the payload as well as the time? Can BBC NEWS be persisted in the template? 

  function run() {
    ;(function () {
      window['leftTab'] = () => leftTab(toggle, data)
    })()

    function leftTab(toggle, data) {
      try {
        if (toggle === 'on') {
          // If not visible, animate into viewport
          // Then, update the strapline with the title and time 

          const parsedData = parseData(data)
          const time = document.querySelector('.bbc-news__date-time-time')
          time.innerHTML = data
        }

        if (toggle == 'off') {
          // Animate out of viewport
        }
      } catch (error) {
        // Handle error below appropriately
        // How can we verify if the graphic failed to update? What do we do in the event of a failure?
        // Could CasparCG ever fail to send the payload? 

        // How do errors get handled?
        console.error(error)
        return
      }
    }

    function parseData(data) {

    }

    function updateStrapline() {

    }

    return {}
  },
)()
