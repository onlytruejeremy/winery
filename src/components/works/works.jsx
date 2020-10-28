import React from 'react'
import "./works.css"

function Works() {
    return (
        
        <div className="works">
            <h3 className="title">
                The Journey Begins
            </h3>
            <div className="container">
                <div className="card">
                    <i class="fas fa-clipboard fa-3x"></i>
                    <h3 className="card-title">
                        Take Our Quiz
                    </h3>
                    
                    <div className="card-text">
                        Learn Your Wine Profile
                    </div>
                </div>
                <div className="card">
                    <i class="fas fa-search fa-3x"></i>
                    <h3 className="card-title">
                        Explore Your Matches
                    </h3>
                    
                    <div className="card-text">
                        See the wines that match you.
                    </div>
                </div>
                <div className="card">
                    <i class="fas fa-mountain fa-3x"></i>
                    <h3 className="card-title">
                        Begin Your Journey
                    </h3>
                    
                    <div className="card-text">
                        Receive your curated wine and embark on your journey.
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Works
