import React,{Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./BestBooks.css";

export class BestBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    };
  }
componentDidMount = () => {
    await axios.get(`Url_of_books`).then((bookResponse) => {
        this.setState({Books: bookResponse.data,});
    }).catch(error => alert('the book collection is empty.'));

        }

render() {
  return(
    <div>
    {
      this.state.Books.length > 0 &&
      <>
        {
          this.state.Books.map(element => {
            return (
                <>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>
                          {element.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                )
              })
            }
          </>
        }

    </div>
            )
}
}
export default  BestBooks;
