const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "7a684159d96364c0de3e568961577e78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
















































// const form = document.getElementById('myform');

// const loadData = async (e) => {

//     e.preventDefault();

//     const weather = document.forms['myform']['weather'].value;
//     console.log(weather);


//     const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${weather}`;
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3c7aac83acmsh6e7adeddc314fb5p19abf4jsn9ccd74dbb1c1',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();

// 	console.log(result);

//     result.map((cval) => {
//                             document.getElementById('wdata').innerHTML+=`
                            
//                             <div class="card" style="width: 18rem;">
//                             <img src="..." class="card-img-top" alt="...">
//                             <div class="card-body">
//                             <h5 class="card-title">${cval.name}</h5>
//                             <p><b>Date time:</b>${cval.date}</p>
//                             <p><b>Resolved Address:</b>${cval.address}</p>
//                             <p class="card-text"></p>
                            
//                   </div>
//                  </div>
//                        `
//                 // console.log(cval)
//                         });


// } catch (error) {
// 	console.error(error);
// }




// }

// form.addEventListener('submit', loadData)








    // -----------------------------------------------------------------------------------

//     const url = `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Mussoorie%2CDC%2CIND&contentType=csv&unitGroup=us&shortColumnNames=${weather}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3c7aac83acmsh6e7adeddc314fb5p19abf4jsn9ccd74dbb1c1',
// 		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);

//     // output.map((cval) => {
//     //                 document.getElementById('wData').innerHTML += `
                    
//     //                 <div class="card" style="width: 18rem;">
//     //                 <img src="..." class="card-img-top" alt="...">
//     //                 <div class="card-body">
//     //                 <h5 class="card-title">${cval.identifier}</h5>
//     //                 <p class="card-text"></p>
                    
//     //       </div>
//     //      </div>
//     //              `
//     //             });


// } catch (error) {
// 	console.error(error);
// }


// }

// form.addEventListener('submit', loadData)




//     const url = `https://open-weather13.p.rapidapi.com/city/${weather}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3c7aac83acmsh6e7adeddc314fb5p19abf4jsn9ccd74dbb1c1',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         // const output = Object.values(result);

//         output.map((cval) => {
//             document.getElementById('wData').innerHTML += `
            
//             <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${cval.identifier}</h5>
//             <p class="card-text"></p>
            
//   </div>
// </div>

//             `
//         });

//     } catch (error) {
//         console.error(error);
//     }