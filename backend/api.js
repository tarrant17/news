import axios from "axios";
import { bouchonData } from "../assets/data/data";

const  headers = {
  'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
  'x-rapidapi-key': '10bd87694cmshc0d81fc2c0847f3p16d282jsnf2f1a2789525'
}

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/',
  params: {
    q: 'France',
    pageNumber: '1',
    pageSize: '10',
    autoCorrect: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null',
    withThumbnails: 'true',
    location: 'us'
  },
  headers: headers
}

const optionsTrendingNewsAPI = {
  ...options,
  url: options.url + 'TrendingNewsAPI',
};

const optionsNewsSearchApi = {
  ...options,
  url: options.url + 'NewsSearchAPI',
};

export async function appelNewsSearchAPI(keyword) {
  let options = {
    ...optionsNewsSearchApi,
  }
  if (keyword) options.params.q = keyword
  //console.log("appel appelNewsSearchAPI", options, keyword)
  let response = await axios.request(options)
  return response.data
}

export async function appelTrendingNewsAPI(keyword) {
  let options = {
    ...optionsTrendingNewsAPI
  }
  if (keyword) options.params.q = keyword
 // console.log("appel appelTrendingNewsAPI")
  let response = await axios.request(options)
  return response.data
}