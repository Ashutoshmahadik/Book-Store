import axios from "axios";

const API_URL = "https://d1krvzwx5oquy1.cloudfront.net/books.json";

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default fetchData;
