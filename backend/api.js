import axios from "axios";
import { getNewsBouchons } from "../assets/data/newsBouchons";
import { API_KEY, MODE_REAL_DATA_FROM_API } from "@env"

const headers = {
  'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
  'x-rapidapi-key': API_KEY
}

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/',
  params: {
    pageSize: '10',
    autoCorrect: 'false',
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

export async function appelNewsSearchAPI(keyword, pageNumber) {

  let options = {
    ...optionsNewsSearchApi
  }

  options.params.pageNumber = pageNumber.toString()
  if (keyword) options.params.q = keyword
  options.params.pageNumber = pageNumber

  if (__DEV__) console.log("api.js appelNewsSearchAPI", keyword, pageNumber, MODE_REAL_DATA_FROM_API)

  let response
  if (MODE_REAL_DATA_FROM_API === 'true') {
    response = await axios.request(options)
  } else {
    response = getNewsBouchons(pageNumber)
  }
  
  return response.data
}

export async function appelTrendingNewsAPI(pageNumber) {

  let options = {
    ...optionsTrendingNewsAPI
  }

  options.params.pageNumber = pageNumber.toString()

  if (__DEV__) console.log("api.js appelTrendingNewsAPI", pageNumber, MODE_REAL_DATA_FROM_API)

  let response
  if (MODE_REAL_DATA_FROM_API === 'true') {
    response = await axios.request(options)
  } else {
    response = getNewsBouchons(pageNumber)
  }
  
  return response.data
}