
import axios from "axios";

const serverApi = axios.create({
    baseURL: 'https://pixabay.com/api/',
      params: {
        key: '55176910-b129664d9c533e9cf4d6ff537',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    }
});

export const getImagesByQuery = async (query) => {
    return serverApi.get('', { params: { q: query }}).then(res => res.data)
};

// cath додати ?



