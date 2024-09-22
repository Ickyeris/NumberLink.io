import React, { FC, useState, useEffect, useRef } from 'react'

import {
    BoardOuterContainer,
    BoardInnerContainer,
    PlayerContainer,
} from "./board.styled"
import Player from '../player/player'

interface BoardProps {
    children?: React.ReactNode
}


const Board: FC<BoardProps> = () => {
    const gridOuterContainerRef = useRef<HTMLDivElement>(null)

    const [cellCount, setCellCount] = useState([5, 5]);
    const [cellSize, setCellSize] = useState({
        width: 128,
        height: 128
    });

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    const aspectRatio = cellCount[0] / cellCount[1];

    useEffect(() => {
        const onResize = () => {
            const current = gridOuterContainerRef.current;
            if (!current) return;
            const {width, height} = current.getBoundingClientRect();
            setDimensions({width, height});
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => (
            window.removeEventListener('resize', onResize)
        );
    }, []);

    return (
        <BoardOuterContainer ref={gridOuterContainerRef}>



            <BoardInnerContainer aspectratio={aspectRatio} iswider={dimensions.width >= dimensions.height}>
            </BoardInnerContainer>
        </BoardOuterContainer>
    )
}

export default Board;