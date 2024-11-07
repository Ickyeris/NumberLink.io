import React, { useState, useEffect, useRef } from 'react'

const Board = () => {
    const boardRef = useRef<HTMLDivElement>(null)

    const [pointerPosition, setPointerPosition] = useState({
        x: -1,
        y: -1,
    })

    // The size of the entire board
    const [boardSize, setBoardSize] = useState({
        width: 100,
        height: 100,
    })

    // The amount of columns and rowos of this board
    const [rows, setRows] = useState(6)
    const [columns, setColumns] = useState(6)
    const [data, setData] = useState<number[]>(new Array(rows * columns).fill(0))




    // The size of an individual cell.
    const cellSize = {
        width: boardSize.width / columns,
        height: boardSize.height / rows,
    }

    // Handle resize logic
    useEffect(() => {
        const onBoardResize = () => {
            const bounds = boardRef.current?.getBoundingClientRect()
            if (bounds) {
                setBoardSize({
                    width: bounds.width,
                    height: bounds.height,
                })
            }
        }
        
        // Initial setup of board size
        onBoardResize();

        window.addEventListener('resize', onBoardResize)
        return () => {
            window.removeEventListener('resize', onBoardResize)
        }
    }, [boardRef])

    // Handle pointer
    useEffect(() => {
        // Record the current cell coordinate the pointer is over.
        const onPointerMove = (event: PointerEvent) => {
            const bounds = boardRef.current?.getBoundingClientRect()
            if (bounds) {
                const x = Math.floor((event.clientX - bounds.left) / boardSize.width * columns)
                const y = Math.floor((event.clientY - bounds.top) / boardSize.height * rows)
                setPointerPosition({ x, y })
            }
        }

        window.addEventListener('pointermove', onPointerMove)
        return () => {
            window.removeEventListener('pointermove', onPointerMove)
        }
    }, [boardSize])

    // Adjust data size depending on columns and rows
    useEffect(() => {
        const newData = new Array(rows * columns).fill(0)
        setData(newData)
    }, [rows, columns])


    return (
        <div
            ref={boardRef}
            className="w-full h-full  flex-col border-black border-2 box-border"
        >
            {
                // Grid
                Array.from({ length: rows }).map((_, y) => (
                    <div
                        key={y}
                        className="w-full flex flex-row pointer-events-none"
                        style={{ height: `${100 / rows}%` }}
                    >
                        {Array.from({ length: columns }).map((_, x) => (
                            // Grid Cells
                            <div
                                key={x * columns + y}
                                className="h-full border-black box-border border-2 bg-white pointer-events-none"
                                style={{
                                    width: `${100 / columns}%`,
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
