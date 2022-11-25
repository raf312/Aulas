function myAge(year_birthday, month_birthday, day_birthday) {
  var d = new Date(),
    year = d.getFullYear(),
    month = d.getMonth() + 1,
    day = d.getDate(),
    year_birthday = +year_birthday,
    month_birthday = +month_birthday,
    day_birthday = +day_birthday,
    age = year - year_birthday;

  if (
    month < month_birthday ||
    (month == month_birthday && day < day_birthday)
  ) {
    age--;
  }

  return age < 0 ? 0 : age;
}

let age = myAge(1983, 12, 03);
document.getElementById('age').innerHTML = age + ' years old';
