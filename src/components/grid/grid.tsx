import React, { FC } from 'react'

import {
    Square,
    GridContainer
} from "./grid.styled"

interface GridProps {
    children?: React.ReactNode
}


const Grid: FC<GridProps> = () => {

    const squares = Array.from({length:25})

    return (
        <GridContainer>
            {
                squares.map((_, index) => (
                    <Square key={index} isEven={index % 2 == 0}>

                    </Square>
                ))
            }
        </GridContainer>
    )
}

export default Grid;