import Config from 'react-native-config';
import currentWether from '../api/source/data.json';
import errorWether from '../api/source/error.json';

// const url = 'https://weatherapi-com.p.rapidapi.com';
const url=Config.API_URL
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bf9f57d213msh779f78b866de13bp1e864djsn642281fee0a3',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function getWether() {
    return currentWether;
}

export async function getWetherByName(cityName) {
    console.log("url: ",url)
    const BASE_URL = new URL('/current.json', url);
    BASE_URL.searchParams.append('q', cityName)
    console.log(BASE_URL.href)
    const resp = await fetch(BASE_URL.href, options);
    return resp.json();
}