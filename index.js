const moment = require('moment');


function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function daysOfYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function dobCount(dateInput) {

  const split = dateInput.split('-')
  const dateNow = new Date()
  const currentYear = dateNow.getFullYear()
  const currentMonth = dateNow.getMonth() + 1
  const currentDate = dateNow.getDate()

  const temp = (12 - split[1]) + currentMonth
  const yearSum = currentYear - split[0] - 1
  const temp2 = (12*yearSum) + temp

  const age = Math.floor(temp2/12)

  const c = parseInt(split[0]) + 1
  let totalDaysInYear = 0
  for (let i = c; i < currentYear; i++) {
    totalDaysInYear = totalDaysInYear + daysOfYear(i)
  }

  let totalDaysInMonth = 0
  const d = parseInt(split[1])+1
  for (let i = d; i <= 12; i++) {
    totalDaysInMonth = totalDaysInMonth + daysInMonth(i, split[0])
  }

  let totalDaysInCurrentYear = 0
  for (let i = 1; i < parseInt(currentMonth); i++) {
    totalDaysInCurrentYear = totalDaysInCurrentYear + daysInMonth(i, currentYear)
  }

  totalDaysInCurrentYear = totalDaysInCurrentYear - ( daysInMonth( (parseInt(currentMonth) - 1) ,currentYear) - parseInt(split[2]) )

  const daysInDob = daysInMonth(split[1], split[0]) - parseInt(split[2])

  const allDays = totalDaysInMonth + totalDaysInYear + daysInDob + totalDaysInCurrentYear

  console.log('allDays',allDays);

  const now = new Date();
  const start = new Date(split[0], split[1], split[2]);

  const diff = (now - start) + (60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  const foo = (daysInMonth(parseInt(currentMonth) - 1 ,currentYear))

  // console.log('foo',foo);
  // const dayDob = day - allDays


  const dateInMoment = moment([currentYear, currentMonth, currentDate])
  const dobMoment = moment([split[0], split[1], split[2]])

  const diffMonths = dateInMoment.diff(dobMoment, 'months')
  const diffDays = dateInMoment.diff(dobMoment, 'days')

  const m = parseInt(diffMonths) % 12
  console.log('diffMonths', m)

  const dayDob = diffDays - allDays

  // return dateInMoment.diff(dobMoment, 'years')


  return `${dayDob} days ${temp} months ${age} years`
}

const dob = "1987-07-26"

console.log(dobCount(dob));
// console.log(calcDate(dob));
