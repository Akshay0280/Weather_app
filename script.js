const apiKey = '6bc223560874f42abfc333bdb91e3048'; // Your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// Mock weather data for demo purposes
const mockWeatherData = {
    'london': {
        main: { temp: 15, humidity: 72 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 3.5 },
        name: 'London'
    },
    'new york': {
        main: { temp: 22, humidity: 65 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.1 },
        name: 'New York'
    },
    'tokyo': {
        main: { temp: 18, humidity: 78 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 4.2 },
        name: 'Tokyo'
    },
    'paris': {
        main: { temp: 12, humidity: 80 },
        weather: [{ main: 'Mist', description: 'mist' }],
        wind: { speed: 1.8 },
        name: 'Paris'
    },
    'sydney': {
        main: { temp: 25, humidity: 60 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 5.7 },
        name: 'Sydney'
    },
    'mumbai': {
        main: { temp: 32, humidity: 85 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 3.2 },
        name: 'Mumbai'
    },
    'cairo': {
        main: { temp: 28, humidity: 45 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.8 },
        name: 'Cairo'
    },
    'rio de janeiro': {
        main: { temp: 26, humidity: 70 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 4.1 },
        name: 'Rio de Janeiro'
    },
    // Indian Cities and States
    'delhi': {
        main: { temp: 35, humidity: 40 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.5 },
        name: 'Delhi'
    },
    'mumbai': {
        main: { temp: 32, humidity: 85 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 3.2 },
        name: 'Mumbai'
    },
    'kolkata': {
        main: { temp: 34, humidity: 75 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 2.8 },
        name: 'Kolkata'
    },
    'chennai': {
        main: { temp: 36, humidity: 70 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 4.5 },
        name: 'Chennai'
    },
    'bangalore': {
        main: { temp: 28, humidity: 65 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 3.1 },
        name: 'Bangalore'
    },
    'hyderabad': {
        main: { temp: 33, humidity: 55 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.9 },
        name: 'Hyderabad'
    },
    'pune': {
        main: { temp: 30, humidity: 60 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 3.5 },
        name: 'Pune'
    },
    'ahmedabad': {
        main: { temp: 38, humidity: 35 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.2 },
        name: 'Ahmedabad'
    },
    'jaipur': {
        main: { temp: 37, humidity: 30 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.8 },
        name: 'Jaipur'
    },
    'lucknow': {
        main: { temp: 35, humidity: 45 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.1 },
        name: 'Lucknow'
    },
    'kanpur': {
        main: { temp: 34, humidity: 50 },
        weather: [{ main: 'Clouds', description: 'broken clouds' }],
        wind: { speed: 2.5 },
        name: 'Kanpur'
    },
    'nagpur': {
        main: { temp: 32, humidity: 55 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 3.2 },
        name: 'Nagpur'
    },
    'indore': {
        main: { temp: 31, humidity: 50 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 2.8 },
        name: 'Indore'
    },
    'thane': {
        main: { temp: 31, humidity: 80 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 3.8 },
        name: 'Thane'
    },
    'bhopal': {
        main: { temp: 32, humidity: 45 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.5 },
        name: 'Bhopal'
    },
    'visakhapatnam': {
        main: { temp: 33, humidity: 75 },
        weather: [{ main: 'Clouds', description: 'overcast clouds' }],
        wind: { speed: 4.2 },
        name: 'Visakhapatnam'
    },
    'pimpri chinchwad': {
        main: { temp: 29, humidity: 65 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 3.5 },
        name: 'Pimpri Chinchwad'
    },
    'patna': {
        main: { temp: 35, humidity: 60 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.3 },
        name: 'Patna'
    },
    'vadodara': {
        main: { temp: 36, humidity: 40 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.7 },
        name: 'Vadodara'
    },
    'ghaziabad': {
        main: { temp: 34, humidity: 45 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 2.4 },
        name: 'Ghaziabad'
    },
    'ludhiana': {
        main: { temp: 33, humidity: 35 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.1 },
        name: 'Ludhiana'
    },
    'agra': {
        main: { temp: 36, humidity: 35 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.6 },
        name: 'Agra'
    },
    'nashik': {
        main: { temp: 31, humidity: 55 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 3.2 },
        name: 'Nashik'
    },
    'faridabad': {
        main: { temp: 35, humidity: 40 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.3 },
        name: 'Faridabad'
    },
    'meerut': {
        main: { temp: 34, humidity: 45 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 2.5 },
        name: 'Meerut'
    },
    'rajkot': {
        main: { temp: 35, humidity: 50 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.1 },
        name: 'Rajkot'
    },
    'kalyan dombivali': {
        main: { temp: 30, humidity: 78 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 3.9 },
        name: 'Kalyan Dombivali'
    },
    'vasai virar': {
        main: { temp: 31, humidity: 82 },
        weather: [{ main: 'Clouds', description: 'overcast clouds' }],
        wind: { speed: 4.1 },
        name: 'Vasai Virar'
    },
    'varanasi': {
        main: { temp: 36, humidity: 50 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.4 },
        name: 'Varanasi'
    },
    'srinagar': {
        main: { temp: 22, humidity: 55 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 2.8 },
        name: 'Srinagar'
    },
    'aurangabad': {
        main: { temp: 32, humidity: 45 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.9 },
        name: 'Aurangabad'
    },
    'dhanbad': {
        main: { temp: 33, humidity: 65 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 3.2 },
        name: 'Dhanbad'
    },
    'amritsar': {
        main: { temp: 32, humidity: 40 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.2 },
        name: 'Amritsar'
    },
    'navi mumbai': {
        main: { temp: 31, humidity: 80 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 4.2 },
        name: 'Navi Mumbai'
    },
    'allahabad': {
        main: { temp: 35, humidity: 55 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 2.6 },
        name: 'Allahabad'
    },
    'ranchi': {
        main: { temp: 29, humidity: 70 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 3.5 },
        name: 'Ranchi'
    },
    'howrah': {
        main: { temp: 33, humidity: 78 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 3.1 },
        name: 'Howrah'
    },
    'jabalpur': {
        main: { temp: 31, humidity: 50 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 2.7 },
        name: 'Jabalpur'
    },
    'gwalior': {
        main: { temp: 33, humidity: 40 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.4 },
        name: 'Gwalior'
    },
    'vijayawada': {
        main: { temp: 35, humidity: 65 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.8 },
        name: 'Vijayawada'
    },
    'jodhpur': {
        main: { temp: 38, humidity: 25 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.2 },
        name: 'Jodhpur'
    },
    'raipur': {
        main: { temp: 32, humidity: 60 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 2.9 },
        name: 'Raipur'
    },
    'kota': {
        main: { temp: 36, humidity: 30 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.5 },
        name: 'Kota'
    },
    'guwahati': {
        main: { temp: 30, humidity: 80 },
        weather: [{ main: 'Rain', description: 'heavy rain' }],
        wind: { speed: 2.1 },
        name: 'Guwahati'
    },
    'chandigarh': {
        main: { temp: 31, humidity: 45 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 2.3 },
        name: 'Chandigarh'
    },
    'solapur': {
        main: { temp: 33, humidity: 50 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.1 },
        name: 'Solapur'
    },
    'hubballi dharwad': {
        main: { temp: 29, humidity: 65 },
        weather: [{ main: 'Clouds', description: 'scattered clouds' }],
        wind: { speed: 3.4 },
        name: 'Hubballi Dharwad'
    },
    'tiruchirappalli': {
        main: { temp: 35, humidity: 60 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 4.1 },
        name: 'Tiruchirappalli'
    },
    'bareilly': {
        main: { temp: 34, humidity: 50 },
        weather: [{ main: 'Clouds', description: 'few clouds' }],
        wind: { speed: 2.4 },
        name: 'Bareilly'
    },
    'moradabad': {
        main: { temp: 33, humidity: 55 },
        weather: [{ main: 'Rain', description: 'light rain' }],
        wind: { speed: 2.8 },
        name: 'Moradabad'
    },
    'mysore': {
        main: { temp: 27, humidity: 70 },
        weather: [{ main: 'Rain', description: 'moderate rain' }],
        wind: { speed: 2.9 },
        name: 'Mysore'
    },
    'guntur': {
        main: { temp: 34, humidity: 65 },
        weather: [{ main: 'Clear', description: 'clear sky' }],
        wind: { speed: 3.7 },
        name: 'Guntur'
    }
};

const searchBox = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search-btn');
const weatherIcon = document.querySelector('#weather-icon');

async function checkWeather(city) {
    const cityLower = city.toLowerCase();

    // Check if we have mock data for this city
    if (mockWeatherData[cityLower]) {
        const data = mockWeatherData[cityLower];
        displayWeather(data);
        return;
    }

    // If not in mock data, try to fetch from API (if API key is set)
    if (apiKey !== 'DEMO_MODE') {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (response.status === 404) {
                document.querySelector('#description').innerHTML = 'City not found';
                document.querySelector('#temperature').innerHTML = '--°C';
                document.querySelector('#humidity').innerHTML = '--%';
                document.querySelector('#wind-speed').innerHTML = '-- m/s';
                weatherIcon.src = '';
                return;
            }

            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            displayWeather(data);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.querySelector('#description').innerHTML = 'Error fetching weather data. Please try again.';
        }
    } else {
        // Demo mode - generate random weather for unknown cities
        const randomTemp = Math.floor(Math.random() * 35) + 5; // 5-40°C
        const randomHumidity = Math.floor(Math.random() * 60) + 30; // 30-90%
        const randomWind = (Math.random() * 8 + 1).toFixed(1); // 1-9 m/s
        const weatherTypes = ['Clear', 'Clouds', 'Rain', 'Drizzle', 'Mist', 'Snow'];
        const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        const descriptions = {
            'Clear': 'clear sky',
            'Clouds': 'scattered clouds',
            'Rain': 'light rain',
            'Drizzle': 'drizzle',
            'Mist': 'mist',
            'Snow': 'light snow'
        };

        const data = {
            main: { temp: randomTemp, humidity: randomHumidity },
            weather: [{ main: randomWeather, description: descriptions[randomWeather] }],
            wind: { speed: randomWind },
            name: city.charAt(0).toUpperCase() + city.slice(1)
        };

        displayWeather(data);
    }
}

function displayWeather(data) {
    document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('#description').innerHTML = data.weather[0].description;
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('#wind-speed').innerHTML = data.wind.speed + ' m/s';

    // Set weather icon based on weather condition
    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'https://openweathermap.org/img/wn/02d@2x.png';
            break;
        case 'Clear':
            weatherIcon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
            break;
        case 'Rain':
            weatherIcon.src = 'https://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'https://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 'Mist':
            weatherIcon.src = 'https://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 'Snow':
            weatherIcon.src = 'https://openweathermap.org/img/wn/13d@2x.png';
            break;
        default:
            weatherIcon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
    }
}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = searchBox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            alert('Please enter a city name');
        }
    }
});

// Optional: Get weather for user's location on load
// Uncomment the code below if you want to get weather for user's current location

/*
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    searchBox.value = data.name;
                    checkWeather(data.name);
                })
                .catch(error => console.error('Error getting location weather:', error));
        },
        (error) => {
            console.log('Geolocation denied or unavailable');
        }
    );
}
*/