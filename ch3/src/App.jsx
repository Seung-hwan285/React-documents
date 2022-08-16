
import './App.css';

import React from 'react';
import { Toolbar } from './ch3-1/context-api/useContext';
import { ThemeContext } from './ch3-1/context-api/useContext';

const theme={
  light: {
      foreground: "#000000",
      background: "white"
    },
    blue: {
      foreground: "#ffffff",
      background: "blue"
    }
    ,
    red:{

      foreground :"#ffffff",
      background : "red",
    }
}

function App() {
  return (
    <ThemeContext.Provider value={theme.red}>
        <Toolbar/>
    </ThemeContext.Provider>
  );
}



export default App;
