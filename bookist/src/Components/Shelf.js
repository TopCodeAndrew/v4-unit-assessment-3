import React, { Component } from 'react'

export default class Shelf extends Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="shelf" >
                <h3>Your Shelf</h3>
                <button>clear shelf</button>
                <p>BOOK TITLES HERE</p>
            </div>
        )
    }
}