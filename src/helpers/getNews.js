import axios from "axios";

const src = "https://hacker-news.firebaseio.com/v0";

export const getNewsItems = () => {
  return axios.get(`${src}/topstories.json`);
};

export const getNewsDetails = (itemId) => {
  return axios.get(`${src}/item/${itemId}.json`);
};

export const getNewsComments = (itemId) => {
  return axios.get(`${src}/item/${itemId}.json`);
};
