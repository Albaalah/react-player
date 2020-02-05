/*
* Main Concept: Context API
* */
import React from 'react';
import 'react-input-range/lib/css/index.css';
import VolumeContext from "../utils/volumeContext";

class VolumeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 100
    };
  }

  render() {
    return <VolumeContext.Provider
      value={{
        volume: this.state.volume || 100,
        setVolume: volume => {
          this.setState({
            volume
          });
        }
      }}
    >
      {this.props.children}
    </VolumeContext.Provider>
  }
}

export default VolumeProvider;

