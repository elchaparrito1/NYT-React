import React from "react";
import "../index.css";

const SearchResults = props => (
  <div className="container">
  <li className="list-group-item">
    <h4>
        <span className="btn-group pull-right">
          <a href={props.url} rel="noopener noreferrer" target="_blank">{props.title}</a>
        </span>
    </h4>
        <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
      <p>Date Published: {props.date}</p>
  </li>
  </div>
);

export default SearchResults