setInterval(() => {
  // Get references to the elements
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  // Get the current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // Convert hour to 12-hour format
  if (h > 12) {
    h = h - 12;
  } else if (h === 0) {
    h = 12; // Midnight case
  }

  // Format hour, minute, and second to always have two digits
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  // Update the digital clock
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;

  // Update the SVG circular clock animations (strokeDashoffset calculations)
  // Assuming the circumference of the paths is 440, update accordingly
  hh.style.strokeDashoffset = 440 - (440 * (h % 12)) / 12;  // For hour hand (12-hour scale)
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;        // For minute hand (60-minute scale)
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;        // For second hand (60-second scale)
}, 1000); // Update every 1 second
