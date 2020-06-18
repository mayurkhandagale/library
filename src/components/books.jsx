import React, { Component } from 'react';
import { getBooks } from '../services/fakeBooks';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Books extends Component {
  state = {
    books: getBooks(),
    pageSize: 4,
    currentPage: 1,
  };

  handelPagechange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.books;
    const { pageSize, currentPage, books: allBooks } = this.state;
    if (count === 0) return <p>There are no books in the Library.</p>;
    const books = paginate(allBooks, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>There are {count} books in the Library.</p>

        <table className="table ">
          <thead>
            <tr className="bg-light">
              <th>Title</th>
              <th>Authors</th>
              <th>Published Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.volumeInfo.title}</td>
                <td>{book.volumeInfo.authors}</td>
                <td>{book.volumeInfo.publishedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handelPagechange}
        />
      </React.Fragment>
    );
  }
}

export default Books;
