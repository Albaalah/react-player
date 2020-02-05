import React from 'react';
import Sound from 'react-sound';
import mp3File from '../../assets/audio/Amelie.mp3';

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
        return (
            <Sound
                url={mp3File}
                playStatus={play ? Sound.status.PLAYING : Sound.status.PAUSE}
                playFromPosition={position}
                loop={true}
                onPause={({position}) => this.setState({position})}
            />
        );
    }
}

export default SoundPlayer;
