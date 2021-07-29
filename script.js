fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Cherkasy,ua&appid=6ac217a57d03a4cbfffefd9449accb53"
)
  .then(function (resp) {
    return resp.json();
  }) //data->json
  .then(function (data) {
    console.log(data);
    document.querySelector(".package-name").innerHTML = data.name;
    if (data.sys.country == "UA") {
      data.sys.country = "Ukraine";
    }
    document.querySelector(".country").textContent = data.sys.country;
    console.log(data.sys.country);
    let deg = Math.round(data.main.temp - 273);

    document.querySelector(".price").textContent = deg + "°C";
    document.querySelector(".disclaimer").textContent =
      data.weather[0]["description"];
    document.querySelector(
      ".features li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    document.querySelector(
      ".featuresWind"
    ).textContent = `wind: ${data.wind.speed} km / h`;
    document.querySelector(
      ".featuresHumidity"
    ).textContent = `humidity: ${data.main.humidity} g / m³`;
    document.querySelector(
      ".featuresPressure"
    ).textContent = `pressure: ${data.main.pressure} mb`;
    setInterval(() => {
      document.querySelector(".time").innerHTML = new Date();
    }, 1000);
  })

  .catch(function () {
    //catch errors
  });

fetch(
  "http://api.openweathermap.org/data/2.5/forecast?q=Cherkasy,ua&appid=6ac217a57d03a4cbfffefd9449accb53"
)
  .then(function (resp) {
    return resp.json();
  }) //data->json
  .then(function (data) {
    console.log(data);
    document.querySelector(".package-name1").innerHTML = data.list[3]["dt_txt"];
    document.querySelector(".package-name2").innerHTML =
      data.list[11]["dt_txt"];
    document.querySelector(".package-name3").innerHTML =
      data.list[19]["dt_txt"];
    document.querySelector(".package-name4").innerHTML =
      data.list[27]["dt_txt"];
    document.querySelector(".package-name5").innerHTML =
      data.list[35]["dt_txt"];

    // if (data.sys.country == "UA") {
    //   data.sys.country = "Ukraine";
    // }
    // document.querySelector(".country1").textContent = data.sys.country;
    // console.log(data.sys.country);

    //temp
    let deg = Math.round(data.list[3].main.temp - 273);
    document.querySelector(".price1").textContent = deg + "°C";

    let deg1 = Math.round(data.list[11].main.temp - 273);
    document.querySelector(".price2").textContent = deg1 + "°C";

    let deg2 = Math.round(data.list[19].main.temp - 273);
    document.querySelector(".price3").textContent = deg2 + "°C";

    let deg3 = Math.round(data.list[27].main.temp - 273);
    document.querySelector(".price4").textContent = deg3 + "°C";

    let deg4 = Math.round(data.list[35].main.temp - 273);
    document.querySelector(".price5").textContent = deg4 + "°C";

    //icons!
    document.querySelector(
      ".features1 li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[3].weather[0]["icon"]}@2x.png">`;
    document.querySelector(
      ".features2 li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[12].weather[0]["icon"]}@2x.png">`;
    document.querySelector(
      ".features3 li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[23].weather[0]["icon"]}@2x.png">`;

    document.querySelector(
      ".features4 li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[27].weather[0]["icon"]}@2x.png">`;
    document.querySelector(
      ".features5 li"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[35].weather[0]["icon"]}@2x.png">`;
  })

  .catch(function () {
    //catch errors
  });
