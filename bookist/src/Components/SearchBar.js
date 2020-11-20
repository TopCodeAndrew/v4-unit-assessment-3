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




    render() {
        return (
            <div className="search-bar">
                <input onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.handleClick()} >search</button>
                <button onClick={this.props.reset}>clear search</button>
            </div>
        )
    }
}