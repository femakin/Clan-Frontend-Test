import React from 'react'

function Button({ type, className, backtext, nextstep }) {
    return (
        // <div>

        <div className={className}>
            <button type={type} className="goBack">{backtext}</button>

            <button type={type} className="nextStep">{nextstep}</button>
        </div>

        // </div>
    )
}

export default Button