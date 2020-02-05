import React, {Fragment, useState} from "react";
import {opIcons, opText} from './../../utils';

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
    <button onClick={toggleClick}>
      <i className={`fa ${icon}`}/>
    </button>
    <div>{opBtnText}</div>
  </Fragment>
}
