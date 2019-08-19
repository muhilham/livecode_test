function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function dobCount(dateInput) {
  const split = dateInput.split('-')
  const dobYear = parseInt(split[0])
  const dobMonth = parseInt(split[1])
  const dobDate = parseInt(split[2])
  const dateNow = new Date()
  const currentYear = dateNow.getFullYear()
  const currentMonth = dateNow.getMonth() + 1
  const currentDate = dateNow.getDate()

  let age = currentYear - dobYear
  let months = currentMonth - dobMonth
  let days = currentDate - dobDate

  if(currentMonth < dobMonth) {
    age = age - 1
    months = currentMonth + (12 - dobMonth)
  }

  if(currentDate < dobDate) {
    months = months - 1
    const temp = daysInMonth( currentMonth - 1 , currentYear) - dobDate
    days = currentDate + temp
  }

  return `${days} days ${months} months ${age} years`
}

const dob = "1987-09-26"
const dob2 = "2019-07-26"
const dob3 = "2018-09-26"
const dob4 = "2019-08-20"

console.log(dobCount(dob3))
