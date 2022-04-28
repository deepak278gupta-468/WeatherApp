const inputText = document.querySelector("#search");
const celsius = document.querySelector("#celsius");
const climate = document.querySelector("#climate");
const section = document.querySelector(".section");
const API_KEY = 'bb32135fcedc29ed338851853affceed';

const getWeather = async (city) => {
    section.innerHTML = `<h2>Loading</h2>`;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404")
    {
        section.innerHTML = `<h2>City not found</h2>`;
        return;
    }
  section.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" width="120" height="120">
  <div class="text">
      <h1 id="celsius">${data.main.temp}<sup>o</sup>C</h1>
      <h2 id="climate">${data.weather[0].main}</h2>
  </div>`
}

inputText.addEventListener("keyup", function(event)
{
    if(event.key === "Enter")
    {
        if(this.value!= "")
        {
        getWeather(this.value);
        inputText.value = "";
        }
    }
});

