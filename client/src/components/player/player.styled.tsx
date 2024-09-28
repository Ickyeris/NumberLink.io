import styled from "styled-components";

import { PlayerType } from "../../types/playerType";



export const PlayerContainer = styled.div<{x:number, y:number, cellSize:{width:number, height:number}}>`
    position: absolute;
    width:  ${({cellSize}) => cellSize.width}px;
    height:  ${({cellSize}) => cellSize.height}px;
    background-color: blue;
    left: ${({x, cellSize}) => x * cellSize.width}px;
    top: ${({y, cellSize}) => y * cellSize.height}px;
    box-sizing: border-box;
    margin: 0 0;
`