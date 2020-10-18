import React, { Component } from 'react'
import { Navbar } from './Components/navbar/Navbar'

export class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div style={{background: '#f00'}}>
                    <p style={{color: '#fff'}}>Error 404. Page not found</p>
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound
