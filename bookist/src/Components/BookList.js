import React from 'react';
import EachBook from './EachBook'

export default function BookList(props) {
    let mappedBooks = props.books.map((el, index) => {
        return (
            <EachBook
                key={el.id}
                element={el}
                index={index}
            // I will probably need to add shelf props here later
            />
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







