import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID y9NkwvSLy6y3r5en1da4WY2MfKGXBq6OIAiCOVTFx9Q'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;