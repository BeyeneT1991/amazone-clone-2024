// import React, { useState, createContext, useContext } from "react";

// const colorContext = createContext()

// export const useColor = () => {
//     return useContext(colorContext)
// }


// export const ThemProvider = ({ children }) => {
//     const [color, setColor] = useState('light')

//     const colorToggle = () => {
//         setColor((pre)=>pre==='light'?"dark":'light')
//     }

//     return (
//         <colorContext.Provider value={{ color, colorToggler }}>
//             {children}
//         </colorContext.Provider>
// )
// }

import React, { useState, createContext, useContext } from "react";

// Create the context
const ColorContext = createContext();

// Custom hook to use the context
export const useColor = () => {
    return useContext(ColorContext);
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState("light");

    // Toggle function
    const colorToggle = () => {
        setColor((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ColorContext.Provider value={{ color, colorToggle }}>
            {children}
        </ColorContext.Provider>
    );
};