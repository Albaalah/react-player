/*
* Main Concept: Hooks
* */
import React, {useState} from "react";
import {opIcons, opText} from './../../utils';
import styled from 'styled-components';
import SoundPlayer from "../sound";

const Button = styled.button`
    width: 100px !important;
    color: white;
    margin-top: 100px;
    background: ${props => (props.primary ? 'brown' : 'chocolate')};
`;

export default function OpButton() {
    const [icon, setIcon] = useState(opIcons.PLAY);
    const [opBtnText, setText] = useState(opText.PLAY);

    function toggleClick() {
        if (icon === opIcons.PAUSE) {
            setText(opText.PLAY);
            setIcon(opIcons.PLAY);
            return
        }
        setText(opText.PAUSE);
        setIcon(opIcons.PAUSE);
        return
    }

    return <div className='mt-4'>
        <Button onClick={toggleClick} primary={icon === opIcons.PLAY}>
            <i className={`fa ${icon}`}/>
        </Button>
        {<SoundPlayer play={opBtnText === opText.PAUSE}/>}
        <div>{opBtnText}</div>
    </div>
}
