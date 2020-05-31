'use strict'

import 'foundation-sites'

// Get Z Foundation media query screen size.
// http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
function getZFcurrentMediaQuery () {
  return Foundation.MediaQuery.current
}

export { getZFcurrentMediaQuery }
