const robot = require('robotjs')
let k = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] , l = k.length
setInterval(_=>{
  robot.keyTap( k[ Math.round( Math.random() * l )  ] || 'M'  )
}, 1500 )

setTimeout(_=>{
  robot.keyTap('down')
},1000 * 3)