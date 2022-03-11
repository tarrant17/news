import axios from "axios";
import { getNewsBouchons } from "../assets/data/newsBouchons";

export const BOUCHONNER_APPEL_API = true

const  headers = {
  'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
  'x-rapidapi-key': '***REMOVED***'
}

const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/',
  params: {
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

  if (__DEV__) console.log("appel appelNewsSearchAPI", keyword)

  let response
  if (!BOUCHONNER_APPEL_API) {
    response = await axios.request(options)
  } else {
    response = getNewsBouchons()
  }
  return response.data
}

export async function appelTrendingNewsAPI() {
  
  let options = {
    ...optionsTrendingNewsAPI
  }
 
  if (__DEV__) console.log("appel appelTrendingNewsAPI")

  let response
  if (!BOUCHONNER_APPEL_API) {
    await axios.request(options)
  } else {
    response = getNewsBouchons()
  }
  return response.data
}