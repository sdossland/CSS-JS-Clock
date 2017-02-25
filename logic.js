/**
 * Created by sophia on 2/23/17.
 */
document.addEventListener("DOMContentLoaded", function() {

  const secondHand = document.querySelector('#secondsHand'),
        minuteHand = document.querySelector('#minutesHand'),
        hourHand = document.querySelector('#hoursHand');

  function setDate() {
    const currentTime = new Date();

    //moves the seconds
    const seconds = currentTime.getSeconds(),
      secondsInDegrees = ((seconds / 60) * 360) + 90; //add 90 to compensate for 90 def rotation of clock hand
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

    //moves the minutes
    const minutes = currentTime.getMinutes(),
          minutesInDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;

    //moves the hours
    const hours = currentTime.getHours(),
          hoursInDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
  }

  setInterval(setDate, 1000);
});