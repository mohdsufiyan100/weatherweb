
const maintmp = document.getElementById('tmp');
const tmpmin = document.getElementById('tmpmin');
const tmpmax = document.getElementById('tmpmax');
const city = document.getElementById('location');
const sky = document.getElementById('sky');
const country = document.getElementById('country');
const searchbtn = document.getElementById('btn');



const dateandtime = document.getElementById('maindate');

function datetimedis() {
    const date = new Date();
    const gethour = date.getHours();
    const getmin = date.getMinutes();
    const getsec = date.getSeconds();
    const getmonth = date.getMonth();
    const getdate = date.getDate();
    const getyear = date.getFullYear();
    const datetime = (`${gethour}:${getmin}:${getsec} | ${getdate}/${getmonth}/${getyear}`);
    dateandtime.innerHTML = datetime;
}


function myapp(jagah) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${jagah}&units=metric&appid=a5e7454f20500560b701230cc7caecec`;
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        const objdata = (JSON.parse(data));
        const arrobj = [objdata];
        const cloud_sky = document.getElementById('cloud_sky');
        const smoke_sky = document.getElementById('smoke');
        const rain = document.getElementById('rain');
        const mostly_cloudy = document.getElementById('mostly_cloudy');
        const clearsky = document.getElementById('clearsky');
        const fewclouds = document.getElementById('fewclouds');
        const tempA = arrobj[0].main.temp;
        const tempB = arrobj[0].main.temp_min;
        const tempC = arrobj[0].main.temp_max;
        const tempD = arrobj[0].name;
        const tempE = arrobj[0].sys.country;
        const tempF = arrobj[0].weather[0].description;
        maintmp.innerHTML = (`${tempA}&deg; C`);
        tmpmin.innerHTML = (`Min ${tempB} &deg; C`);
        tmpmax.innerHTML = (`Max ${tempC} &deg; C`);
        city.innerHTML = (` <i class="fas fa-map-marker-alt"></i> ${tempD} | ${tempE}`);
        sky.innerHTML = tempF;
        if (tempF == "overcast clouds") {
            cloud_sky.style.display = 'block';
            smoke_sky.style.display = 'none';
            smoke_sky.style.display = 'none';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "smoke" || tempF == "haze"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'block';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "broken clouds"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'block';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "rain"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'none';
            rain.style.display = 'block';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "mostly cloudy"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'none';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'block';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "clear sky"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'none';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'block';
            fewclouds.style.display = 'none';
        }
        else if (tempF == "few clouds"){
            cloud_sky.style.display = 'none';
            smoke_sky.style.display = 'none';
            rain.style.display = 'none';
            mostly_cloudy.style.display = 'none';
            clearsky.style.display = 'none';
            fewclouds.style.display = 'block';
        }

    })
    setInterval(datetimedis, 1000);
}

searchbtn.addEventListener('click', () => {
    const search_jagah = document.querySelector('#srchinput').value;
    myapp(search_jagah);
})



