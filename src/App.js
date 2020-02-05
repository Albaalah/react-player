// Context API: Consumer 1

import React, {Fragment} from 'react';
import OpButton from "./components/button";
import Music from "./components/notes/index.tsx";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './App.css';
import VolumeContext from "./utils/volumeContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <VolumeContext.Consumer>
            {context => (
                <Fragment>
                    <div className="App">
                        <header className="App-header d-flex justify-content-start">
                            <OpButton volume={context.volume}/>
                            <div className='w-50'>
                                <InputRange
                                    maxValue={100}
                                    minValue={0}
                                    value={context.volume}
                                    onChange={volume => context.setVolume(volume)}/>
                                <p className='f-12'>Volume</p>
                                <br/>
                            </div>
                            <Music/>
                        </header>
                    </div>
                </Fragment>
            )}
        </VolumeContext.Consumer>
    }
}

export default App;
