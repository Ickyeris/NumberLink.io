import React, { useState, useEffect, useRef } from 'react'

const Board = () => {
    const boardRef = useRef<HTMLDivElement>(null)
    const [gridBoardData, setBoardData] = useState<number[]>([])

    const [hovering, setHovering] = useState({
        x: -1,
        y: -1,
    })

    const [size, setSize] = useState({
        width: 8,
        height: 8,
    })

    const getCellData = (x: number, y: number) => {
        return gridBoardData[x * size.width + y]
    }

    const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const bounds = boardRef.current?.getBoundingClientRect()
        if (bounds) {
            const x = event.clientX - bounds.left
            const y = event.clientY - bounds.top
            setHovering({
                x,
                y,
            })
        }
    }

    return (
        <div
            ref={boardRef}
            className="w-full h-full bg-red-200 flex-col border-white border-2 box-border"
            onPointerMove={onPointerMove}
        >
            {
                // Grid
                Array.from({ length: size.height }).map((_, y) => (
                    <div
                        key={y}
                        className="w-full flex flex-row pointer-events-none"
                        style={{ height: `${100 / size.height}%` }}
                    >
                        {Array.from({ length: size.width }).map((_, x) => (
                            // Grid Cells
                            <div
                                key={x * size.width + y}
                                className="h-full border-white box-border border-2 bg-black pointer-events-none"
                                style={{
                                    width: `${100 / size.width}%`,
                                }}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default Board
