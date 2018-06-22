import React, { Component } from 'react'

import { MoviesList } from '../components/MoviesList'
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm'

export class Home extends Component {
    state = {
        results: [],
        usedSearch: false
    }

    _handleResults = (results) => {
        this.setState({
            results,
            usedSearch: true
        })
    }

    _renderResults() {
        return (
            this.state.results.length === 0
                ? <p>No results were found</p>
                : <MoviesList movies={this.state.results} />
        )
    }

    render() {
        return (
            <div>
                <Title>MOVIER</Title>
                <SearchForm onResults={this._handleResults} />

                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : ''
                }
            </div>
        )
    }
}