import React, { Component } from 'react';

export default class NoMatch extends Component {
    render() {
        return(
            <div className="pageNotFound">
                <div>
                    <h1>Error 404</h1>
                    <p>Page not found</p>
                </div>
            </div>
        )
    }
}