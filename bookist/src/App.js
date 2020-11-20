import React, { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar'
import Shelf from './Components/Shelf';
import books from './data'

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: books,
      shelf: []
    }

    // this.addToShelf = this.addToShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }



  filterBooks(input) {
    filteredBooks = [];
    for (i = 0, i < this.state.books.length; i++) {
      if (this.state.books[i].title === input || this.state.books[i].author ==)
    }
    this.setState({
      shelf: [...this.state.shelf, input]
    })
  }


  reset() {
    this.setState({
      books: books
    })
  }



  // addToShelf(e, index) {
  //   let newShelfItem = this.state.books[index];

  // }



  render() {
    return (
      <div className="App">
        <Header className="header" />
        <SearchBar filterBooks={this.filterBooks} />
        <div className="body">
          <BookList addToShelf={this.addToShelf} books={this.state.books} />
          <Shelf />
        </div>
      </div>
    );
  }
}

export default App;
