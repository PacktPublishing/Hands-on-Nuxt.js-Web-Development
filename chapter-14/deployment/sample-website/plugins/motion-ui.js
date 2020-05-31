// if (!process.server) {
//   require("motion-ui")
// }

// export default function () {
//   if (process.client) {
//     var MotionUI = require("motion-ui")
//     console.log(MotionUI)
//     return MotionUI
//   }
// }

// Another option: export it as a standalone function.
// export default function ($elem, $animation) {
//   if (!process.server) {
//     const MotionUI = require("motion-ui")
//     MotionUI.animateIn($elem, $animation)

//     // const MotionUI = require("motion-ui")
//     // const $ = require("jquery")
//     // $("h2").click(function() {
//     //   var $animation = $("h2").data("animation")
//     //   MotionUI.animateIn($("h2"), $animation)
//     // })
//   }
// }

// function animateIn ($elem, $animation, $cb) {
//   if (!process.server) {
//     const MotionUI = require("motion-ui")
//     MotionUI.animateIn($elem, $animation, $cb)
//   }
// }

// function animateOut ($elem, $animation, $cb) {
//   if (!process.server) {
//     const MotionUI = require("motion-ui")
//     MotionUI.animateOut($elem, $animation, $cb)
//   }
// }

// function motionUI ($elem, $animation, $cb) {
//   if (!process.server) {
//     const MotionUI = require("motion-ui")
//     return MotionUI
//   }
// }

// export { animateIn, animateOut, motionUI }
