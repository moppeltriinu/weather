function weatherDataFetch(city){
    var key='22a969680a0fa4fb462f6b7f03b1aea7';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp)
        {return resp.json()
    }) // Convert data to json
    .then(function(data) {
    console.log(data);
    })
    .catch(function() {
    //catch any errors
    })
}

{weatherDataFetch('Tallinn');
}