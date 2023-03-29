import React from 'react'

function Button({ text, style, className, className2, onclick }) {
    return (
        <div>

            <div className={className}>
                <button onclick={onclick} className={className2}>{text}</button>
            </div>

        </div>
    )
}

export default Button