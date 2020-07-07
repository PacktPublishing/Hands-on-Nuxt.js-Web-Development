import _ from 'lodash'
import greeting from './greeting.js'

function component() {
  let element = document.createElement('div')
  var btn = document.createElement('button')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = greeting;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());
