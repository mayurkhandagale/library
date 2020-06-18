import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Spinner from './common/Spinner';

class Purchase extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=all')
      .then((res) => this.setState({ books: res.data.items }))
      .catch((error) => console.log(error));
  }

  render() {
    const { books } = this.state;
    if (books) {
      return (
        <div className="row">
          {books.map((item) => (
            <div key={item.id}>
              <Card style={{ width: '20rem', height: '20rem' }}>
                <Card.Img
                  style={{ width: 100, height: 100 }}
                  variant="top"
                  src={`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                />
                <Card.Body>
                  <Card.Title>Title:{item.volumeInfo.title}</Card.Title>
                  <Card.Text>Authors:{item.volumeInfo.authors}</Card.Text>
                  <Card.Link href={item.volumeInfo.infoLink}>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
export default Purchase;
