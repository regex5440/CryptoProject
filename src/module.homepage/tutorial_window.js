import './module.style/tutorial_window.sass';
import React from 'react';

function VPlayer(address){
    const style = {
        height: '400px',
        width: '600px',
        border: '1px solid black'
    };
    return <div className="player" style={style}>Video Player for {address.name}</div>;
}
function Topics(){
    const style = {
        height: '500px',
        width: '380px',
        border: '1px solid black'
    }
    return <div style={style}>TOPICS Will Align here</div>
}

function TutorialWindow(props){

    const old =<div className="tutorial_window">
        <VPlayer address={props.name}/>
        <div id="vr"></div>
        <Topics/>
         </div>
    return old
}


export default TutorialWindow;