document.getElementById("display").hidden = true;
var Submit = document.querySelector('.Submit');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp_min = document.querySelector('.temp_min');
var temp = document.querySelector('.temp');
var temp_max = document.querySelector('.temp_max');
var tempRessent = document.querySelector('.tempRessent');
var humi = document.querySelector('.humi');
var ventVitesse = document.querySelector(".ventVitesse")
var suns = document.querySelector('.suns');
var sunr = document.querySelector('.sunr');

Submit.addEventListener('click', function () {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=88f862ff9ae977f6c10cc9db2c2d64b3&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            var nameValue = data['name'];
            var IconValue = 'https://openweathermap.org/img/wn/'+ data ['weather'][0]['icon'] + '@2x.png';
            var temp_minValue = data['main']['temp_min'];
            var tempValue = data['main']['temp'];
            var temp_maxValue = data['main']['temp_max'];
            var tempRessentValue = data['main']['feels_like']
            var descValue = data['weather'][0]['description'];
            var humiValue = data['main']['humidity'];
            var ventVitesseValue = data ['wind']['speed'];
            var sunrValue = new Date(data['sys']['sunrise'] * 1000);
            var sunsValue = new Date(data['sys']['sunset'] * 1000);
            document.getElementById("display").hidden = false;
            document.querySelector('.name').innerHTML = `<span>${nameValue}</span> <img src="${IconValue}" alt="">`;
            temp_min.innerHTML =`Température: Min: ${temp_minValue}°c. Actuelle: ${tempValue}°c. Max: ${temp_maxValue}°c`;
            tempRessent.innerHTML = `Ressentie :${tempRessentValue}°c`;
            desc.innerHTML = descValue;
            humi.innerHTML = `Humidité : ${humiValue} %`;
            ventVitesse.innerHTML = `Vitesse du vent: ${ventVitesseValue} km/H`
            sunr.innerHTML = `Lever du soleil : ${getTime(sunrValue)} &#9788`;
            suns.innerHTML = `Coucher du soleil : ${getTime(sunsValue)} &#9790`;

        })
        
        .catch(err => alert("le nom de la ville n'est pas correct"))

})

function getTime(time) {
    
    const hour =("0" + time.getHours()).slice(-2);
    const min = ("0" + time.getMinutes()).slice(-2);
    const sec = ("0"+ time.getSeconds()).slice(-2);
   
     return `${hour}`+`${':'}`+`${min}`+`${':'}`+`${sec}`
}





