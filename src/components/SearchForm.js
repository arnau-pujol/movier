import React, { Component } from 'react'

const API_KEY = '25a11235'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
            this.setState({
                inputMovie: e.target.value
            })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        
        const { inputMovie } = this.state 
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(
                (response) => response.json()
            )
            .then(
                (results) => {
                    const { 
                        Search = []
                    } = results

                    this.props.onResults(Search)
                }
            )
    }

    render() {
        return (
            <form 
                className="search-form"
                onSubmit={this._handleSubmit}
            >
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Type a movie name..." 
                            onChange={this._handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    } 
}