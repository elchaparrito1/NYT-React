import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "../index.css";

const Header = () => {
    return (
        <div className="header">
          <Jumbotron className="jumbo" fluid>
            <Container fluid>
              <h1 className="display-3">New York Times Article Scrubber</h1>
              <h4 className="lead">Search and annotate articles of interest to you!</h4>
            </Container>
          </Jumbotron>
        </div>
      );
};

export default Header;