import React from 'react'
import styled from 'styled-components';




function NodeItem({ cordXY }) {
    const Node = styled.div`
    position: absolute;
    // top: 262px;
    top: ${cordXY.x}px;
    left: 71px;
    width: 129px;
    height: 125px;
    border-radius: 50%;
    color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: azure;
    &:hover {
        cursor: pointer

      }
`

    console.log('Node', Node);
    console.log('cordXY', cordXY);
    console.log('cordX', cordXY.x);
    console.log('cordY', cordXY.y);
    const handlePositionNode = () => {
        cordXY.x = 458
        console.log('setPositionNode');
        
    }
    return (
        <Node 
            // draggable={true} 
            className="node"
            // onMouseDown={() => console.log('mousedown Кнопка мыши нажата')}
            // onMouseUp={() => console.log('mouseup /отпущена над элементом')}
            // onMouseMove={() => console.log('mousemove 777')}
            onClick={() => handlePositionNode()}
            >Node 1</Node>
    )
}

export default NodeItem

