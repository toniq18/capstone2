// const require = require("express/lib/request");

/* Global Variables */
const username = '&maxRows=10&username=toniq';
let baseURL = `http://api.geonames.org/search?q=`



function execute (e){
    const city = document.getElementById('city').value;

    getInfo(baseURL, city, username)
    .then(function(data)  {
        console.log("data ", data);
        ClientSidePost('/add',{latitude: data.lat, longitude: data.lng, country: data.countryName})
        updateUI()
        
    })

};




// post client side
const ClientSidePost = async (url = '/add', data = {})=>{
    console.log(data)
    const request = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    console.log(url)

    try{
        const newData = await response.json();
        console.log(newData);
        return(newData);
    } catch (error){
        console.log("Error", error)
    }
};


// get client side
const getInfo = async (baseURL, city, username) =>{
    const response = await fetch (baseURL + city + username)
    try{
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log("Error", error)
    }
};




const updateUI = async () => {
    const request = await fetch ('/wthr');
    try{
        const updateAll = await request.json();
        document.getElementById('latitude').innerHTML= updateAll.latitude;
        document.getElementById('longitude').innerHTML= updateAll.longitude;
        document.getElementById('country').innerHTML= updateAll.country;
    } catch (error){
        console.log("ayo bruh there be an error", error);
    }

}

export{execute}
