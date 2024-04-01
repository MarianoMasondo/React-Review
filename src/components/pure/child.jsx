import React from 'react';

const Child = ({name}) => {

    function pressButton(){
        alert(`Default Text`);        
    }

    function pressButtonParams(text){
        alert(`TEXT: ${text}`);
    }

    return (
        <div>
            <p onMouseOver={() => console.log("OnMouse Over")}>Child Component</p>
            <button onClick={() => console.log("Pressed Button 1")}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams("Hello!")}>Button 3</button>
            <input placeholder='Insert a text' onFocus={() => console.log("Input Fucused")} onChange={(e) => console.log("Input changed", e.target.value)} onCopy={() => console.log("Copied text from Input")} />
        </div>
    );
}

export default Child;
