import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleClick() {
        this.props.filterBooks(this.state.userInput)

    }

    handleClear()({
        this.props.reset()
    })


render() {
    return (
        <div className="search-bar">
            <input onChange={(e) => this.handleChange(e.target.value)} />
            <button onClick={() => this.handleClick()} >search</button>
            <button onClick>clear search</button>
        </div>
    )
}
}