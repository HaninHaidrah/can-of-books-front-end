import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

 const REACT_APP_SERVER_URL= process.env.REACT_APP_SERVER_URL

export class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    };
  }
  componentDidMount = () => {
    axios
      .get(`${REACT_APP_SERVER_URL}/books`)
      .then((bookResponse) => {
        this.setState({ Books: bookResponse.data });
      })
      .catch((error) => alert("the book collection is empty."));
  };

  render() {
    return (
      <div>
        {this.state.Books.length > 0 && (
          <>
            {this.state.Books.map((element) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <Card.Text> {element.description}</Card.Text>
                      <Card.Text> {element.status}</Card.Text>
                      <Card.Text> {element.email}</Card.Text>

                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </>
        )}
        ​
      </div>
    );
  }
}
export default BestBooks;
