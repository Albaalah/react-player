import React from 'react';
import Draggable from "react-draggable";
import styled from "styled-components";

const Div = styled.div`
    color: darksalmon;
`;

const higherOrderComponent = (WrappedComponent) => {
  class withDrag extends React.Component {
    render() {
      return <Draggable><Div><WrappedComponent {...this.props}/></Div></Draggable>;
    }
  }

  return withDrag;
};

  export default higherOrderComponent
