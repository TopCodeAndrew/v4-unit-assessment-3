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
    this.reset = this.reset.bind(this)
  }



  filterBooks(filterInput) {
    let filteredBooks = [];
    for (let i = 0; i < this.state.books.length; i++) {
      if (this.state.books[i].title.toLowerCase().includes(filterInput.toLowerCase()) || this.state.books[i].author.includes(filterInput)) {
        filteredBooks.push(this.state.books[i])
      }
    };
    this.setState({
      books: [filteredBooks]
    });
  }


  reset() {
    this.setState({
      books: books
    })
  }


  render() {
    return (
      <div className="App">
        <Header className="header" />
        <SearchBar
          filterBooks={this.filterBooks}
          reset={this.reset} />
        <div className="body">
          <BookList addToShelf={this.addToShelf} books={this.state.books} />
          <Shelf />
        </div>
      </div>
    );
  }
}

export default App;
