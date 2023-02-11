var cityip= document.getElementById('city');
var cityop= document.getElementById('cityop');
var temp= document.getElementById('temp');
var apikey= "641d8a6132c2f05d70e36e04bdf9f063";
var btn= document.getElementById('btn');

btn.addEventListener('click',() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityip.value+'&appid='+ apikey)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var temperature = data.main.temp;
        console.log(temperature);

        temp.innerHTML= "Temperature: "+temperature;
    })
} )
