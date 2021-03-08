const fetch = require("node-fetch");
const moment = require('moment')
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// fetch("http://localhost:3000/api")
//     .then(function(response){
//         return response.text()
//     })
//     .then(function(xdata) {
//         let result = JSON.parse(xdata).map(function(R,I){
//             return({
//                 title: R.slots +" slots left @ " + R.gym,
//                 priorityId: getRandomInt(2)+1,
//                 startDate: moment(R.ts,"YYYYMMDDHHmm").format(),
//                 endDate: moment(R.ts,"YYYYMMDDHHmm").add(2,"hours").format(),
//                 id: I,
//             })
//         })
//         console.log(result)
//     })
console.log(moment().weekday()-1)
//export default f