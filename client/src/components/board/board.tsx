import React, { useState, useEffect } from 'react'

const Board = () => {
    const [gridBoardData, setBoardData] = useState([])

    const [size, setSize] = useState({
        width: 8,
        height: 8,
    })

    const getCoordinate = (x: number, y: number) => {
        return gridBoardData[x * size.width + y]
    }

    return (
        <div className="w-full h-full bg-red-200 flex-col">
            {
                // Create rows
                Array.from({ length: size.height }).map((_, y) => (
                    <div
                        key={y}
                        className="w-full bg-blue-400 flex flex-row"
                        style={{ height: `${100 / size.height}%` }}
                    >
                        {Array.from({ length: size.width }).map((_, x) => (
                            <div
                                key={x * size.width + y}
                                className="h-full border-2 border-white box-border bg-black"
                                style={{
                                    width: `${100 / size.width}%`,
                                }}
                            ></div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Board
