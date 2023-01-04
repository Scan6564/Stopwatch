const time = document.getElementById("time");
const actionBtn = document.getElementById("action-btn");
const resetBtn = document.getElementById("reset-btn");
const icon = document.getElementById("change-icon");
const textBtn = document.getElementById("start");

var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;
var control = false;

function stopwatch() {
  millisecond += 1;
  if (millisecond == 100) {
    second += 1;
    millisecond = 0;
  }
  if (second == 60) {
    minute += 1;
    second = 0;
  }
  if (minute == 60) {
    hour += 1;
    minute = 0;
  }
  realhour = hour;
  realminute = minute;
  realsecond = second;
  realmillisecond = millisecond;
  if (millisecond < 10) {
    var realmillisecond = "0" + millisecond;
  }
  if (second < 10) {
    var realsecond = "0" + second;
  }
  if (minute < 10) {
    var realminute = "0" + minute;
  }
  if (hour < 10) {
    var realhour = "0" + hour;
  }
  time.innerHTML =
    realhour + ":" + realminute + ":" + realsecond + ":" + realmillisecond;
}
function pauseBtn() {
  actionBtn.classList.add("pause-btn");
  icon.setAttribute("d", "M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z");
  textBtn.innerHTML = "Pause";
}
function startBtn() {
  actionBtn.classList.remove("pause-btn");
  icon.setAttribute(
    "d",
    "m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
  );
  textBtn.innerHTML = "Start";
}

actionBtn.addEventListener("click", () => {
  if (control == true) {
    clearInterval(func);
    control = false;
    startBtn();
  } else {
    func = setInterval(stopwatch, 10);
    control = true;
    pauseBtn();
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(func);
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  time.innerHTML =
    "0" +
    hour +
    ":" +
    "0" +
    minute +
    ":" +
    "0" +
    second +
    ":" +
    "0" +
    millisecond;
  control = false;
  startBtn();
});
