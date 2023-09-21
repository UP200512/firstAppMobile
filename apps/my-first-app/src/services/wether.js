import currentWether from '../api/source/data.json';
import errorWether from '../api/source/error.json';
import config from '../../config.js';

const url = config.BASE_URL;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': config.API_KEY,
        'X-RapidAPI-Host': config.API_HOST
    }
};

export async function getWether() {
    return currentWether;
}

export async function getWetherByName(cityName) {
    const BASE_URL = new URL('/current.json', url);
    BASE_URL.searchParams.append('q', cityName)
    console.log(BASE_URL.href)
    const resp = await fetch(BASE_URL.href, options);
    return resp.json();
}