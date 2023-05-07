import React from "react";

import '../styles/Chessboard.css';

let verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
let horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default function Chessboard() {   
    function renderTiles() {
        let tiles = [];

        for (let i = verticalAxis.length - 1; i >= 0; i--) {
            for (let j = 0; j < horizontalAxis.length; j++) {
                let number = i + j;
                let color = number % 2 !== 0 ? 'white-tile' : 'black-tile';
                let tileClass = 'tile ' + color;

                tiles.push(
                    <div className={tileClass}>                    
                </div>
                )
            }
        }    

        return tiles;
    }

    function getCoordinates(axis) {
        let axisCoordinates = [];

        for (let i = 0; i < axis.length; i++) {
            axisCoordinates.push(
                <div className="coordinate">
                    {axis[i]}
                </div>
            );
        }

        return axisCoordinates;
    }
    

    return (
        <>
            <div>
                <h1>Fibonacci Chess</h1>
            </div>    
            <div id='chessboard'>            
                <div>                            
                    <div className="board">
                        {renderTiles()}
                    </div>                
                    <div className="horizontal-axis-coordinates">
                        {getCoordinates(horizontalAxis)}
                    </div>
                </div>
                
                <div className="vertical-axis-coordinates">
                    {getCoordinates(verticalAxis)}
                </div>
            </div>
        </>
    );
}