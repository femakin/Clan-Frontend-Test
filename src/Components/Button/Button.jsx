import React from 'react'

function Button({ text, style, className, className2, onclick, backtext, nextstep }) {
    return (
        <div>

            <div className={className}>
                <button className="goBack">{backtext}</button>

                <button className="nextStep">{nextstep}</button>
            </div>

        </div>
    )
}

export default Button