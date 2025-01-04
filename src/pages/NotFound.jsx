

import React from 'react'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <div className="not-found-divider"></div>
                <h2 className="not-found-subtitle">Page Not Found</h2>
                <p className="not-found-text">The page you are looking for does not exist.</p>
                <button className="not-found-button" onClick={() => window.history.back()}>
                    Go Back
                </button>
            </div>
        </div>
    )
}


export default NotFound

