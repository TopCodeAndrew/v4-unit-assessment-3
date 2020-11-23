import React from 'react';

export default function BookList(props) {
    let mappedBooks = props.books.map((el, index) => {
        return (
            <div
                key={el.id}
                className="individual-books">
                <img
                    onClick={(e) => props.addToShelf(e.target.alt)}
                    className="image"
                    src={el.img}
                    alt={el.title} />
                <h4>{el.title} by {el.author}</h4>
            </div>
        )
    });

    return (
        <div className="book-list">{mappedBooks}</div>
    )
}










// <div
//     key={index}
//     className="individual-books">


// </div>)



// return (
//     <div className="book-list" >
//         <span className="mapped-books">{mappedBooks}</span>
//     </div>
// )







