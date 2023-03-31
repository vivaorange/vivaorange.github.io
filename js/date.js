const calendar = document.querySelector("h2#calendar");

function getCalendar() {
  const allDate = new Date();
  const year = allDate.getFullYear();
  const month = allDate.getMonth() + 1;
  const date = allDate.getDate();

  // 요일구하기
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[allDate.getDay()];

  calendar.innerText = `${year}. ${month}. ${date}. ${day}`;
}
getCalendar();
