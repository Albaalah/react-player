import React, {Fragment, useState} from "react";
import {opIcons, opText} from './../../utils';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px !important;
    color: white;
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

  return <Fragment>
    <Button onClick={toggleClick} primary={icon === opIcons.PLAY}>
      <i className={`fa ${icon}`}/>
    </Button>
    <div>{opBtnText}</div>
  </Fragment>
}
