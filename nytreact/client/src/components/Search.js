import React from "react";
import "../index.css";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";

const Search = props => {
  return (
      <div className="container">
        <Form onKeyPress={props.handleKeyPress}>
         <h3>Search</h3>
        <FormGroup>
          <Label for="topic">Topic</Label>
            <Input
             type="text"
             placeholder="Search News"
             name="topic"
             value={props.topic}
             onChange={props.handleInputChange}/>
         </FormGroup>
        <FormGroup>
          <Label for="start">Start Year</Label>
            <Input
             type="number"
             placeholder="Start Year"
             name="start"
             value={props.start}
             onChange={props.handleInputChange}/>
         </FormGroup>
        <FormGroup>
          <Label for="end">End Year</Label>
            <Input
             type="number"
             placeholder="End Year"
             name="end"
             value={props.end}
             onChange={props.handleInputChange}/>
          </FormGroup>
         <Button onClick={props.onFormSubmit}>Search</Button>
        </Form>

        <br/>
      <div className="panel-body">
        {props.renderArticles()}
      </div>
        <br/><br/>
  </div>

  )
};

export default Search;