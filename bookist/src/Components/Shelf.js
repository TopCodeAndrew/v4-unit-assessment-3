import React from 'react';
import EachShelf from './EachShelf'

export default function Shelf(props) {

    let mappedTitles = props.shelf.map((el, index, arr) => {
        let keyName = el.index
        return (
            < EachShelf
                key={keyName}
                element={el}
                index={index} />
        )
    });

    return (
        <div className="shelf" >
            <h3>Your Shelf</h3>
            <button>clear shelf</button>
            <div>{mappedTitles}</div>
        </div>
    )

}