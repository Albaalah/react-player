import React from 'react';
import OpButton from "./components/button";
import SingleBar from "./components/notes/singleBar";
import Clef from "./components/notes/clef";
import './App.css';
import WithDrag from "./components/hoc/withDrag";
import Music from "./components/notes/music/index.tsx";

//Disabling HOC temporarily to focus on TypeScript
const DraggableBar = WithDrag(SingleBar);
const DraggableClef = WithDrag(Clef);

function App() {
    return <div className="App">
        <header className="App-header d-flex justify-content-start">
            <div className='d-flex row m-4'>
                <div style={{'margin-right': '500px', 'margin-left': '500px', 'margin-bottom': '200px'}}/>
            </div>
            <OpButton/>
            <br/>
            <Music/>
        </header>
    </div>
}

export default App;
