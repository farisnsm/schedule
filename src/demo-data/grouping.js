const fetch = require("node-fetch");
const moment = require('moment')
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// export const data = fetch("http://localhost:3000/api")
//     .then(function(response){
//       return response.text()
//     })
//     .then(function(xdata) {
//       let result = JSON.parse(xdata).map(function(R,I){
//         return({
//           title: R.slots +" slots left @ " + R.gym,
//           priorityId: getRandomInt(2) + 1,
//           startDate: moment(R.ts,"YYYYMMDDHHmm").format(),
//           endDate: moment(R.ts,"YYYYMMDDHHmm").add(2,"hours").format(),
//           id: I,
//         })
//       })
//       //console.log(result)
//       return(result)
//     })
export var data = [
  {
    title: '0 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-08T19:15:00+08:00',
    endDate: '2021-03-08T21:15:00+08:00',
    id: 0
  },
  {
    title: '19 slots left @ FB',
    priorityId: 2,
    startDate: '2021-03-09T09:15:00+08:00',
    endDate: '2021-03-09T11:15:00+08:00',
    id: 1
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-09T09:30:00+08:00',
    endDate: '2021-03-09T11:30:00+08:00',
    id: 2
  },
  {
    title: '31 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-09T09:30:00+08:00',
    endDate: '2021-03-09T11:30:00+08:00',
    id: 3
  },
  {
    title: '10 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-09T10:00:00+08:00',
    endDate: '2021-03-09T12:00:00+08:00',
    id: 4
  },
  {
    title: '8 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-09T12:00:00+08:00',
    endDate: '2021-03-09T14:00:00+08:00',
    id: 5
  },
  {
    title: '31 slots left @ FB',
    priorityId: 2,
    startDate: '2021-03-09T12:45:00+08:00',
    endDate: '2021-03-09T14:45:00+08:00',
    id: 6
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-09T12:45:00+08:00',
    endDate: '2021-03-09T14:45:00+08:00',
    id: 7
  },
  {
    title: '36 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-09T12:45:00+08:00',
    endDate: '2021-03-09T14:45:00+08:00',
    id: 8
  },
  {
    title: '12 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-09T14:00:00+08:00',
    endDate: '2021-03-09T16:00:00+08:00',
    id: 9
  },
  {
    title: '8 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-09T16:00:00+08:00',
    endDate: '2021-03-09T18:00:00+08:00',
    id: 10
  },
  {
    title: '16 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-09T16:00:00+08:00',
    endDate: '2021-03-09T18:00:00+08:00',
    id: 11
  },
  {
    title: '2 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-09T16:00:00+08:00',
    endDate: '2021-03-09T18:00:00+08:00',
    id: 12
  },
  {
    title: '4 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-09T18:00:00+08:00',
    endDate: '2021-03-09T20:00:00+08:00',
    id: 13
  },
  {
    title: '0 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-09T19:15:00+08:00',
    endDate: '2021-03-09T21:15:00+08:00',
    id: 14
  },
  {
    title: '36 slots left @ FB',
    priorityId: 1,
    startDate: '2021-03-10T09:15:00+08:00',
    endDate: '2021-03-10T11:15:00+08:00',
    id: 15
  },
  {
    title: '23 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-10T09:15:00+08:00',
    endDate: '2021-03-10T11:15:00+08:00',
    id: 16
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-10T09:30:00+08:00',
    endDate: '2021-03-10T11:30:00+08:00',
    id: 17
  },
  {
    title: '30 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-10T09:30:00+08:00',
    endDate: '2021-03-10T11:30:00+08:00',
    id: 18
  },
  {
    title: '12 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-10T10:00:00+08:00',
    endDate: '2021-03-10T12:00:00+08:00',
    id: 19
  },
  {
    title: '12 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-10T12:00:00+08:00',
    endDate: '2021-03-10T14:00:00+08:00',
    id: 20
  },
  {
    title: '19 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-10T12:30:00+08:00',
    endDate: '2021-03-10T14:30:00+08:00',
    id: 21
  },
  {
    title: '41 slots left @ FB',
    priorityId: 1,
    startDate: '2021-03-10T12:45:00+08:00',
    endDate: '2021-03-10T14:45:00+08:00',
    id: 22
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-10T12:45:00+08:00',
    endDate: '2021-03-10T14:45:00+08:00',
    id: 23
  },
  {
    title: '18 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-10T12:45:00+08:00',
    endDate: '2021-03-10T14:45:00+08:00',
    id: 24
  },
  {
    title: '9 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-10T14:00:00+08:00',
    endDate: '2021-03-10T16:00:00+08:00',
    id: 25
  },
  {
    title: '10 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-10T16:00:00+08:00',
    endDate: '2021-03-10T18:00:00+08:00',
    id: 26
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-10T16:00:00+08:00',
    endDate: '2021-03-10T18:00:00+08:00',
    id: 27
  },
  {
    title: '21 slots left @ FB',
    priorityId: 2,
    startDate: '2021-03-10T16:15:00+08:00',
    endDate: '2021-03-10T18:15:00+08:00',
    id: 28
  },
  {
    title: '2 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-10T18:00:00+08:00',
    endDate: '2021-03-10T20:00:00+08:00',
    id: 29
  },
  {
    title: '2 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-10T19:00:00+08:00',
    endDate: '2021-03-10T21:00:00+08:00',
    id: 30
  },
  {
    title: '0 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-10T19:15:00+08:00',
    endDate: '2021-03-10T21:15:00+08:00',
    id: 31
  },
  {
    title: '33 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-11T06:00:00+08:00',
    endDate: '2021-03-11T08:00:00+08:00',
    id: 32
  },
  {
    title: '32 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-11T09:15:00+08:00',
    endDate: '2021-03-11T11:15:00+08:00',
    id: 33
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-11T09:30:00+08:00',
    endDate: '2021-03-11T11:30:00+08:00',
    id: 34
  },
  {
    title: '35 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-11T09:30:00+08:00',
    endDate: '2021-03-11T11:30:00+08:00',
    id: 35
  },
  {
    title: '32 slots left @ FB',
    priorityId: 1,
    startDate: '2021-03-11T09:45:00+08:00',
    endDate: '2021-03-11T11:45:00+08:00',
    id: 36
  },
  {
    title: '12 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-11T10:00:00+08:00',
    endDate: '2021-03-11T12:00:00+08:00',
    id: 37
  },
  {
    title: '9 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-11T12:00:00+08:00',
    endDate: '2021-03-11T14:00:00+08:00',
    id: 38
  },
  {
    title: '22 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-11T12:30:00+08:00',
    endDate: '2021-03-11T14:30:00+08:00',
    id: 39
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-11T12:45:00+08:00',
    endDate: '2021-03-11T14:45:00+08:00',
    id: 40
  },
  {
    title: '37 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-11T12:45:00+08:00',
    endDate: '2021-03-11T14:45:00+08:00',
    id: 41
  },
  {
    title: '30 slots left @ FB',
    priorityId: 1,
    startDate: '2021-03-11T13:30:00+08:00',
    endDate: '2021-03-11T15:30:00+08:00',
    id: 42
  },
  {
    title: '10 slots left @ OYY',
    priorityId: 2,
    startDate: '2021-03-11T14:00:00+08:00',
    endDate: '2021-03-11T16:00:00+08:00',
    id: 43
  },
  {
    title: '11 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-11T15:45:00+08:00',
    endDate: '2021-03-11T17:45:00+08:00',
    id: 44
  },
  {
    title: '12 slots left @ OYY',
    priorityId: 1,
    startDate: '2021-03-11T16:00:00+08:00',
    endDate: '2021-03-11T18:00:00+08:00',
    id: 45
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-11T16:00:00+08:00',
    endDate: '2021-03-11T18:00:00+08:00',
    id: 46
  },
  {
    title: '18 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-11T16:00:00+08:00',
    endDate: '2021-03-11T18:00:00+08:00',
    id: 47
  },
  {
    title: '0 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-11T19:15:00+08:00',
    endDate: '2021-03-11T21:15:00+08:00',
    id: 48
  },
  {
    title: '30 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-12T09:15:00+08:00',
    endDate: '2021-03-12T11:15:00+08:00',
    id: 49
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-12T09:30:00+08:00',
    endDate: '2021-03-12T11:30:00+08:00',
    id: 50
  },
  {
    title: '37 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-12T09:30:00+08:00',
    endDate: '2021-03-12T11:30:00+08:00',
    id: 51
  },
  {
    title: '39 slots left @ FB',
    priorityId: 2,
    startDate: '2021-03-12T09:45:00+08:00',
    endDate: '2021-03-12T11:45:00+08:00',
    id: 52
  },
  {
    title: '18 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-12T12:30:00+08:00',
    endDate: '2021-03-12T14:30:00+08:00',
    id: 53
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-12T12:45:00+08:00',
    endDate: '2021-03-12T14:45:00+08:00',
    id: 54
  },
  {
    title: '30 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-12T12:45:00+08:00',
    endDate: '2021-03-12T14:45:00+08:00',
    id: 55
  },
  {
    title: '32 slots left @ FB',
    priorityId: 2,
    startDate: '2021-03-12T13:30:00+08:00',
    endDate: '2021-03-12T15:30:00+08:00',
    id: 56
  },
  {
    title: '21 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-12T15:45:00+08:00',
    endDate: '2021-03-12T17:45:00+08:00',
    id: 57
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-12T16:00:00+08:00',
    endDate: '2021-03-12T18:00:00+08:00',
    id: 58
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-12T19:15:00+08:00',
    endDate: '2021-03-12T21:15:00+08:00',
    id: 59
  },
  {
    title: '26 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-12T22:15:00+08:00',
    endDate: '2021-03-13T00:15:00+08:00',
    id: 60
  },
  {
    title: '28 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-13T09:15:00+08:00',
    endDate: '2021-03-13T11:15:00+08:00',
    id: 61
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-13T09:30:00+08:00',
    endDate: '2021-03-13T11:30:00+08:00',
    id: 62
  },
  {
    title: '20 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-13T12:30:00+08:00',
    endDate: '2021-03-13T14:30:00+08:00',
    id: 63
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-13T12:30:00+08:00',
    endDate: '2021-03-13T14:30:00+08:00',
    id: 64
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-13T15:30:00+08:00',
    endDate: '2021-03-13T17:30:00+08:00',
    id: 65
  },
  {
    title: '16 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-13T15:45:00+08:00',
    endDate: '2021-03-13T17:45:00+08:00',
    id: 66
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-13T18:30:00+08:00',
    endDate: '2021-03-13T20:30:00+08:00',
    id: 67
  },
  {
    title: '17 slots left @ FB',
    priorityId: 1,
    startDate: '2021-03-13T19:45:00+08:00',
    endDate: '2021-03-13T21:45:00+08:00',
    id: 68
  },
  {
    title: '33 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-14T00:00:00+08:00',
    endDate: '2021-03-14T02:00:00+08:00',
    id: 69
  },
  {
    title: '33 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-14T06:00:00+08:00',
    endDate: '2021-03-14T08:00:00+08:00',
    id: 70
  },
  {
    title: '1 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-14T09:15:00+08:00',
    endDate: '2021-03-14T11:15:00+08:00',
    id: 71
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-14T09:30:00+08:00',
    endDate: '2021-03-14T11:30:00+08:00',
    id: 72
  },
  {
    title: '2 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-14T12:30:00+08:00',
    endDate: '2021-03-14T14:30:00+08:00',
    id: 73
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-14T12:30:00+08:00',
    endDate: '2021-03-14T14:30:00+08:00',
    id: 74
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 1,
    startDate: '2021-03-14T15:30:00+08:00',
    endDate: '2021-03-14T17:30:00+08:00',
    id: 75
  },
  {
    title: '3 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-14T15:45:00+08:00',
    endDate: '2021-03-14T17:45:00+08:00',
    id: 76
  },
  {
    title: '30 slots left @ LHC',
    priorityId: 2,
    startDate: '2021-03-14T18:30:00+08:00',
    endDate: '2021-03-14T20:30:00+08:00',
    id: 77
  },
  {
    title: '14 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-14T19:00:00+08:00',
    endDate: '2021-03-14T21:00:00+08:00',
    id: 78
  },
  {
    title: '33 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-15T00:00:00+08:00',
    endDate: '2021-03-15T02:00:00+08:00',
    id: 79
  },
  {
    title: '30 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-15T06:00:00+08:00',
    endDate: '2021-03-15T08:00:00+08:00',
    id: 80
  },
  {
    title: '1 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-15T12:30:00+08:00',
    endDate: '2021-03-15T14:30:00+08:00',
    id: 81
  },
  {
    title: '48 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-15T12:45:00+08:00',
    endDate: '2021-03-15T14:45:00+08:00',
    id: 82
  },
  {
    title: '1 slots left @ BFF',
    priorityId: 1,
    startDate: '2021-03-15T15:45:00+08:00',
    endDate: '2021-03-15T17:45:00+08:00',
    id: 83
  },
  {
    title: '43 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-15T16:00:00+08:00',
    endDate: '2021-03-15T18:00:00+08:00',
    id: 84
  },
  {
    title: '25 slots left @ BFF',
    priorityId: 2,
    startDate: '2021-03-15T19:00:00+08:00',
    endDate: '2021-03-15T21:00:00+08:00',
    id: 85
  },
  {
    title: '43 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-16T09:30:00+08:00',
    endDate: '2021-03-16T11:30:00+08:00',
    id: 86
  },
  {
    title: '35 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-16T12:45:00+08:00',
    endDate: '2021-03-16T14:45:00+08:00',
    id: 87
  },
  {
    title: '36 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-16T16:00:00+08:00',
    endDate: '2021-03-16T18:00:00+08:00',
    id: 88
  },
  {
    title: '50 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-17T09:30:00+08:00',
    endDate: '2021-03-17T11:30:00+08:00',
    id: 89
  },
  {
    title: '46 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-17T12:45:00+08:00',
    endDate: '2021-03-17T14:45:00+08:00',
    id: 90
  },
  {
    title: '18 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-17T16:00:00+08:00',
    endDate: '2021-03-17T18:00:00+08:00',
    id: 91
  },
  {
    title: '48 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-18T09:30:00+08:00',
    endDate: '2021-03-18T11:30:00+08:00',
    id: 92
  },
  {
    title: '50 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-18T12:45:00+08:00',
    endDate: '2021-03-18T14:45:00+08:00',
    id: 93
  },
  {
    title: '42 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-18T16:00:00+08:00',
    endDate: '2021-03-18T18:00:00+08:00',
    id: 94
  },
  {
    title: '50 slots left @ BW',
    priorityId: 2,
    startDate: '2021-03-19T09:30:00+08:00',
    endDate: '2021-03-19T11:30:00+08:00',
    id: 95
  },
  {
    title: '44 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-19T12:45:00+08:00',
    endDate: '2021-03-19T14:45:00+08:00',
    id: 96
  },
  {
    title: '39 slots left @ BW',
    priorityId: 1,
    startDate: '2021-03-19T16:00:00+08:00',
    endDate: '2021-03-19T18:00:00+08:00',
    id: 97
  }
];
export const priorityData = [
  {
    text: 'Low Priority',
    id: 1,
  }, {
    text: 'High Priority',
    id: 2,
  },
];
