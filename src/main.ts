import "./styles.css";

const hoursElement = document.getElementById("hours")!;
const minutesElement = document.getElementById("minutes")!;
const secondsElement = document.getElementById("seconds")!;

function updateClock(): void {
  const now = new Date();

  hoursElement.textContent = String(now.getHours()).padStart(2, "0");
  minutesElement.textContent = String(now.getMinutes()).padStart(2, "0");
  secondsElement.textContent = String(now.getSeconds()).padStart(2, "0");
}

updateClock();

setInterval(updateClock, 1000);