import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'
import { Movie } from '../components/Movie'

import 'bulma/css/bulma.css'

const API_KEY = '4287ad07'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie })
            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }

    render() {
        const { imdbID, Title, Year, Poster, Plot } = this.state.movie

        return (
            <div className="detail">
                <div className="container">
                    <div className="columns is-mobile is-centered">
                        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                            <ButtonBackToHome />

                            <Movie
                                id={imdbID}
                                title={Title}
                                year={Year}
                                poster={Poster}
                                plot={Plot}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}