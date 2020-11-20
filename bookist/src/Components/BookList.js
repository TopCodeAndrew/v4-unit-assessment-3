import React, { Component } from 'react';

export default class BookList extends Component {
    constructor() {
        super();

        this.state = {}
    }

    handleClick() {

    }





    render() {
        let mappedBooks = this.props.books.map((el, index) =>
            <div
                onClick={i => this.props.addToShelf}
                key={index}
                className="individual-books">

                <img
                    className="image"
                    src={this.props.books[index].img}
                    alt="cover" />

                <h4>{el.title} by {el.author}</h4>

            </div>)



        return (
            <div className="book-list" >
                <span className="mapped-books">{mappedBooks}</span>
            </div>
        )
    }
}