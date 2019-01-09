import axios from "axios";

const nyt = {
    searchNYT: function(topic, startYear, endYear) {
      const apiKey = "d8fa6745e8a645958ac6b24539fa497f";
      const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      apiKey + "&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear;
      return axios.get(queryURL);
    }
}
export default nyt;

