import React from 'react'

export default function EachBook(props) {
    return (
        <div
            key={props.element.index}
            className="individual-books">
            <img
                onClick={() => props.addToShelf(props.element.title)}
                className="image"
                src={props.element.img}
                alt="cover" />
            <h4>{props.element.title} by {props.element.author}</h4>
        </div>
    )

}