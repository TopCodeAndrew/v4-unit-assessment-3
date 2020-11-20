import React from 'react'

export default function EachShelf(props) {
    let keyName = props.element.id
    return (
        <div
            key={keyName}
            className="individual-titles"> {props.element.title}
        </div>
    )

}