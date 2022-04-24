import React from 'react'
import './Definition.css'

const Definition = ({ meanings, word, LightTheme, category }) => {
    return (
        <div className='meanings'>
            {word === "" ? (
                <span className='subTitle'>Give a search....!!!</span>
            ) : (
                "Wow, You've typed", word
            )}
        </div>
    )
}

export default Definition