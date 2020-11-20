import React from 'react'

export default function EachBook(props) {
    return (
        <div
            key={props.element.index}
            className="individual-books">
            <img
                className="image"
                src={props.element.img}
                alt="cover" />
            <h4>{props.element.title} by {props.element.author}</h4>
        </div>
    )

}