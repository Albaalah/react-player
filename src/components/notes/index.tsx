/*
* Main Concept: TypeScript
* */
import * as React from "react"
import styled from "styled-components";
import WithDrag from "../hoc/withDrag/index";
import SingleBar from "./singleBar/index";
import Clef from "./clef/index";

const DraggableBar = WithDrag(SingleBar) as any;
const DraggableClef = WithDrag(Clef) as any;

const Button = styled.button`
    width: 200px;
    margin-top: 20px;
    font-size: 16px;
    color: black;
    outline-color: black !important;
    background: ${(props: { showNotes: boolean; }) => (props.showNotes ? 'dimgrey' : 'grey')
};
`;

const spacing = {
    marginRight: '500px',
    marginLeft: '500px',
    marginBottom: '200px'
} as React.CSSProperties;

type Props = {};

type State = {
    showNotes: boolean,
    btnText: string
};

class Music extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            showNotes: false,
            btnText: 'Display Notes'
        };
    }

    toggleNotes = () => {
        this.setState({
            showNotes: !this.state.showNotes,
            btnText: this.state.showNotes ? 'Display Notes' : 'Hide Notes'
        })
    };

    render() {
        const {btnText = '', showNotes = false} = this.state;
        return (
            <div className="app-wrapper">
                <Button onClick={this.toggleNotes} showNotes={showNotes}>
                    {btnText}
                </Button>
                {showNotes && <p className='font-italic' style={{fontSize: '14px'}}>Notes are draggable</p>}
                <div className='d-flex row m-4'>
                    {showNotes && <DraggableBar/>}
                    <div style={spacing}/>
                    {showNotes && <DraggableClef/>}
                </div>
            </div>
        );
    }
}

export default Music;
