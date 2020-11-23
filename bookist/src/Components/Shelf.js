import React from 'react';
import EachShelf from './EachShelf'

export default function Shelf(props) {

    let mappedTitles = props.shelf.map((el, index, arr) => {
        return (
            <div
                key={`${el} title`}
                className="individual-titles"> {el}
            </div>
        )
    });

    return (
        <div className="shelf" >
            <h3>Your Shelf</h3>
            <button onClick={props.clearShelf}>clear shelf</button>
            <div>{mappedTitles}</div>
        </div>
    )

}