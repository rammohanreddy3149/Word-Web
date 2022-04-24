import React from 'react'
import './Definition.css'

const Definition = ({ meanings, word, LightTheme, category }) => {
    return (
        <div className='meanings'>
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ 
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        width: "auto",
                        minHeight: "40px" 
                    }}
                    src={
                        meanings[0].phonetics[0] && meanings[0].phonetics[0].audio
                    }
                    controls preload="auto"
                >
                    Your browser does not support the audio element.
                </audio>
            )}

            {word === "" ? (
                <span className='subTitle'>Give a search....!!!</span>
            ) : (
                meanings.map((meaning) =>
                    meaning.meanings.map((item) =>
                        item.definitions.map((definition) => (
                            <div
                                className='singleMean'
                                style={{
                                    backgroundColor: LightTheme ? "#3b5360" : "white",
                                    color: LightTheme ? "white" : "black",
                                }}>
                                <b>{definition.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                {definition.example && (
                                    <span>
                                        <b>Example :</b> {definition.example}
                                    </span>
                                )}
                                {definition.synonyms && (
                                    <span>
                                        <b>Synonyms :</b> {definition.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definition;