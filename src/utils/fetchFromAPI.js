import axios from "axios";

const BASE_URL = 'https://gogoanime2.p.rapidapi.com'

const options = {
  url: BASE_URL,
  // params: {page: '1'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data
}

