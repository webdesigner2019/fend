
//Personal API Key for OpenWeatherMap API
const appID = "3215329b63b0aa5f27b2de454549157c";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="

//Create a new date instance dynamically with JS
let d = new Date();
// const currMonth = d.getMonth()+1;
// const currDate = d.getDate();
// const currYear = d.getFullYear();
// let newDate = currMonth + "/" + currDate + "/" + currYear
const newDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();

// Event listener for when the Generate Entry button is clicked
document.getElementById("generate").addEventListener("click", generateEntry);

/* Function called by onclick event listener */
async function generateEntry(event) {
    const zipCode = document.getElementById("zip").value;
    const userResponse = document.getElementById("feelings").value;

    const weatherData = await getWeatherData(baseURL, zipCode, appID);
    const postResponse = await postData("/add", {
        temperature: weatherData.main.temp,
        date: newDate,
        userResponse: userResponse,
    });

    if (postResponse.status === 200) {
        updateUI("/all");
    }
};

/*Function to GET Web API Data */
const getWeatherData = async (baseURL, zipCode, appID) => {
    const openWeatherApiUrl = baseURL + zipCode + "&appid=" + appID + "&units=imperial";
    const response = await fetch(openWeatherApiUrl);
    return await response.json();
}

/* Function to POST data */
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

/* Function to GET Project Data */
const updateUI = async (url = "") => {
    const response = await fetch(url);
    const allData = await response.json();
    
    document.getElementById("date").innerHTML = "Date: " + newDate;
    document.getElementById("temp").innerHTML = "Temp: " + allData.temperature + "&deg;F";
    document.getElementById("content").innerHTML = "Feelings: " + allData.userResponse;
};




