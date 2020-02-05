import React from 'react';
import OpButton from "./components/button";
import './App.css';
import Music from "./components/notes/music/index.tsx";

//HOC moved within TypeScript file

function App() {
    return <div className="App">
        <header className="App-header d-flex justify-content-start">
            <OpButton/>
            <br/>
            <Music/>
        </header>
    </div>
}

export default App;
