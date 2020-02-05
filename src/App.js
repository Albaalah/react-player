import React from 'react';
import OpButton from "./components/button";
import Music from "./components/notes/index.tsx";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 100
        };
    }

    render() {
        const {volume= 100} = this.state;
        return <div className="App">
            <header className="App-header d-flex justify-content-start">
                <OpButton volume={volume}/>
                <div className='w-50'>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        value={volume}
                        onChange={volume => this.setState({volume})}/>
                    <p className='f-12'>Volume</p>
                    <br/>
                </div>
                <Music/>
            </header>
        </div>
    }
}

export default App;
