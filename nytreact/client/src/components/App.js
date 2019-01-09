import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import nyt from "../api/nyt";
import moment from "moment";


class App extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    articles: []
};

renderArticles = () => {
  return this.state.articles.map(article => (
    <SearchResults
      _id={article._id}
      key={article._id}
      title={article.headline.main}
      date={moment(article.pub_date).format("MMMM DD, YYYY")}
      url={article.web_url}
      handleSaveButton={this.handleSaveButton}
      getSavedArticles={this.getSavedArticles}
    />
  ));
}

handleKeyPress = (e) => {
  if (e.key === "Enter") {
    this.onFormSubmit(e);
  }
};

handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
      [name]: value
  });
  console.log(event.target.value);
  };
  
onFormSubmit = (event) => {
  let topicInput = this.state.topic.trim();
  let startInput = this.state.start + "0101";
  let endInput = this.state.end + "1231";
  event.preventDefault();
  
  if (topicInput === "" || startInput === "0101" || endInput === "1231") {
    alert("Please fill in all fields on form")
  } else {
  nyt.searchNYT(topicInput, startInput, endInput)
  .then((result) => {
    this.setState({ articles: result.data.response.docs });
    console.log("this.state.articles: ", this.state.articles);
  });

  this.setState({
    topic: "",
    start: "",
    end: ""
  });
  }
}


  render() {
    return (
      <div className="App">
        <Header />
        <Search
        topic={this.state.topic}
        start={this.state.start}
        end={this.state.end}
        handleInputChange={this.handleInputChange}
        onFormSubmit={this.onFormSubmit}
        renderArticles={this.renderArticles}
        handleKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default App;
