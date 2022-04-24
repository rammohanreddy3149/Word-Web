import React from 'react'
import "./Header.css"
import { createTheme, TextField, ThemeProvider, MenuItem } from "@material-ui/core";
import categories from './data/category.js';

const Header = ({ LightTheme }) => {

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
            <span className='title'>Word Web</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        id="filled-basic"
                        label="Search a Word"
                    />
                    <TextField
                        select
                        label="Language"
                        className="select"
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