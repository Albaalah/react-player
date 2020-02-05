// Context API: Consumer 2

import React, {Fragment} from 'react';
import Sound from 'react-sound';
import mp3File from '../../assets/audio/Amelie.mp3';
import VolumeContext from "../../utils/volumeContext";

class SoundPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 300
        };
    }

    render() {
        const {position = 300} = this.state;
        const {play = false} = this.props;
        return (<VolumeContext.Consumer>
                {context => (
                    <Fragment>
                        <Sound
                            url={mp3File}
                            playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSE}
                            playFromPosition={position}
                            loop={true}
                            volume={context.volume}
                            onPause={({position}) => this.setState({position})}
                        />
                    </Fragment>
                )}
            </VolumeContext.Consumer>
        );
    }
}

export default SoundPlayer;
