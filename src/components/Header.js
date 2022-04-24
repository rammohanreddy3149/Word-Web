import React from 'react'
import "./Header.css"
import { createTheme, TextField, ThemeProvider, MenuItem } from "@material-ui/core";
import categories from './data/category.js';

const Header = ({ category, setCategory, word, setWord, meanings, setMeanings, LightTheme }) => {

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    };

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
            },
            type: LightTheme ? "light" : "dark",
        },
    });

    return (
        <div className='header'>
            <span className='title'>{word ? word: "Word Web"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        id="filled-basic"
                        value={word}
                        label="Search a Word"
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        className="select"
                        value={category}
                        onChange={(e) => handleChange(e)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;