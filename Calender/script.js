"use strict";
//variable declaration
let month = document.getElementById("month");
let Year = document.getElementById("year");
let nextmonth = document.getElementById("next-month");
let prevmonth = document.getElementById("prev-month");
let nextyear = document.getElementById("next-year");
let prevyear = document.getElementById("prev-year");
let date = new Date();
let current_month = date.getMonth();
let current_year = date.getFullYear();
let first_day = new Date(Year, month, 1);
let calenderdays = document.getElementById("calendar-days");
let currentWeekday, firstDayOfMonth;

//leap year
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
//Feb days
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
// Days of Months
let days_of_month = [
  31,
  getFebDays(Year),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

//Month Name
const month_name = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//MONTH SECTION
month.innerText = month_name[current_month].toUpperCase();
nextmonth.addEventListener("click", () => {
  current_month = (current_month + 1) % 12;
  if (current_month === 0) {
    current_year++;
    Year.innerText = current_year;
  }
  month.innerText = month_name[current_month].toUpperCase();
  generatecalender(current_month, current_year);
});

prevmonth.addEventListener("click", () => {
  current_month = (current_month - 1 + 12) % 12;
  if (current_month === 11) {
    current_year--;
    Year.innerText = current_year;
  }
  month.innerText = month_name[current_month].toUpperCase();
  generatecalender(current_month, current_year);
});

//YEAR SECTION
Year.innerText = current_year;
//year buttons
nextyear.addEventListener("click", () => {
  current_year = current_year + 1;
  Year.innerText = current_year;
  generatecalender(current_month, current_year);
});
prevyear.addEventListener("click", () => {
  current_year = current_year - 1;
  Year.innerText = current_year;
  generatecalender(current_month, current_year);
});

//calender days

function generatecalender(current_month, current_year) {
  calenderdays.innerHTML = "";
  firstDayOfMonth = new Date(current_year, current_month, 1);
  currentWeekday = firstDayOfMonth.getDay();
  for (let i = 0; i < currentWeekday; i++) {
    // calenderdays.appendChild(document.createElement("li"));
    calenderdays.insertAdjacentHTML("beforeend", `<li></li>`);
  }
  for (let i = 1; i <= days_of_month[current_month]; i++) {
    calenderdays.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
  }
}

generatecalender(current_month, current_year);
