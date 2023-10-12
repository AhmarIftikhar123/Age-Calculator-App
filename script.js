let date_input = document.getElementById("date_input");

date_input.max = new Date().toISOString().split("T")[0];

const calculate_btn = document.getElementById("calculate_btn");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

function CalculateAgeInDays(year, month) {
  return new Date(year, month, 0).getDate();
}

function Calculate_Age() {
  if (date_input.value === "") return;
  let birth_date = new Date(date_input.value);

  let birth_day = birth_date.getDate();
  let birth_month = birth_date.getMonth() + 1;
  let birth_year = birth_date.getFullYear();

  let present_date = new Date();

  let present_day = present_date.getDate();
  let present_month = present_date.getMonth() + 1;
  let present_year = present_date.getFullYear();

  let final_day, final_month, final_year;

  final_year = present_year - birth_year;

  if (present_month >= birth_month) {
    final_month = present_month - birth_month;
  } else {
    final_year--;
    final_month = 12 + present_month - birth_month;
  }

  if (present_day >= birth_day) {
    final_day = present_day - birth_day;
  } else {
    final_month--;
    let day_index = CalculateAgeInDays(birth_year, birth_month);
    final_day = day_index + present_day - birth_day;
  }
  if (final_month < 0) {
    final_month = 11;
    final_year--;
  }

  let day = final_day === 1 ? "day" : "days";
  let month = final_month === 1 ? "month" : "months";
  let year = final_year === 1 ? "year" : "years";

  days.textContent = `${final_day} ${day}`;
  months.textContent = `${final_month} ${month}`;
  years.textContent = `${final_year} ${year}`;
}

calculate_btn.addEventListener("click", Calculate_Age);
