function weatherDataFetch(city){
    var key='22a969680a0fa4fb462f6b7f03b1aea7';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp)
        {return resp.json()
    }) // Convert data to json
    .then(function(data) {
    console.log(data);
    drawWeather(data);
    })
    .catch(function(error) {
    //catch any errors
        console.log(error)
    })
}

{weatherDataFetch('Tallinn');
}

function drawWeather(data) {
    var celcius=Math.round(parseFloat(data.main.temp)-273.15);
    var description=data.weather[0].description;
    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML=celcius+'&deg;';
    document.querySelector('#location').innerHTML=data.name;
}