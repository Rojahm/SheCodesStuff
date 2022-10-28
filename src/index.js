let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
let city = prompt("Enter a city")
  .trim()
  .toLocaleLowerCase()
  .replace("sanfrancisco", "san francisco");
if (city === "paris") {
  alert(Math.round(weather["paris"].temp));
} else {
  if (city === "tokyo") {
    alert(Math.round(weather["tokyo"].temp));
  } else {
    if (city === "lisbon") {
      alert(Math.round(weather["lisbon"].temp));
    } else {
      if (city === "san francisco") {
        alert(Math.round(weather["san francisco"].temp));
      } else {
        if (city === "oslo") {
          alert(Math.round(weather["oslo"].temp));
        } else {
          alert(
            `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
          );
        }
      }
    }
  }
}
