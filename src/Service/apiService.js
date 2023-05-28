import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "7796301b86mshffe95252d016e6ap152317jsnedff417173e4",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(
      `${"https://youtube-v31.p.rapidapi.com"}/${url}`,
      options
    );
    return response.data;
  },
};
