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
//month buttons
nextmonth.addEventListener("click", () => {
  current_month = current_month + 1;
  month.innerText = month_name[current_month].toUpperCase();
});
prevmonth.addEventListener("click", () => {
  current_month = current_month - 1;
  month.innerText = month_name[current_month].toUpperCase();
});

//YEAR SECTION
Year.innerText = current_year;
//year buttons
nextyear.addEventListener("click", () => {
  current_year = current_year + 1;
  Year.innerText = current_year;
});
prevyear.addEventListener("click", () => {
  current_year = current_year - 1;
  Year.innerText = current_year;
});

//calender days
