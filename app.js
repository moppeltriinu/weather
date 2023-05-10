document.addEventListener('DOMContentLoaded', cityWeather)

const form=document.querySelector('#weather-form')
form.addEventListener('submit', cityWeather)

function weatherDataFetch(city){
    let key='d784b433766fbfdf49ed5317fa4981e9'
    let req=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    fetch(req)
        .then(function(resp)
        {return resp.json()
    }) // Convert data to json
    .then(function(data){
    console.log(data)
    drawWeather(data)
    })
    .catch(function(error) {
        console.log(error)
    })
}

function drawWeather(data){
    let temp= Math.round(data.main.temp - 273.15)
    document.querySelector('#location').innerHTML=data.name
    document.querySelector('#description').innerHTML=data.weather[0].description
    document.querySelector('#temp').innerHTML= `${temp}&deg;`
}

function cityWeather(event){
    if(document.querySelector('#city').value  !== ''){
        city=document.querySelector('#city').value
        document.querySelector('#city').value=''
    } else {
    city='Tallinn'
}
    weatherDataFetch(city)
    event.preventDefault()
}