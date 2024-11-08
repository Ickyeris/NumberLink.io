import React, { useState, useRef, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Board from '../components/board/board'
import useTimer from '../hooks/useTimer'

interface DailiesParams {
    difficulty: 'easy' | 'medium' | 'hard'
    size: '5x5' | '6x6' | '7x7'
    [key: string]: string | undefined
}

const DailiesPage = () => {
    const { difficulty, size } = useParams<DailiesParams>()
    const validDifficulties: Array<'easy' | 'medium' | 'hard'> = [
        'easy',
        'medium',
        'hard',
    ]
    const isValidDifficulty = validDifficulties.includes(
        difficulty as 'easy' | 'medium' | 'hard'
    )
    console.log(difficulty)
    // Ensures that the daily parameters are valid
    if (!isValidDifficulty) {
        return <Navigate to="/not-found" replace />
    }

    const { time, isActive, start, pause, reset } = useTimer({
        initialTime: 0,
        countDown: false,
    })

    useEffect(() => {
        start()
    }, [])

    return (
        <div className="flex flex-col w-full h-auto justify-start items-center  ">
            <div className="w-full md:w-auto flex flex-col items-center justify-center p-4 ">
                <div className="w-full md:h-600 aspect-square flex flex-col">
                    <Board />
                </div>
                <div className="w-full h-100 box-border flex flex-col justify-evenly items-center">
                    <div className="font-titleFont text-black text-5xl">
                        Time:{formatTime(time)}
                    </div>
                    <h1 className="font-titleFont text-black text-5xl">
                        Score: 0000
                    </h1>
                </div>
            </div>
            <div className="w-full h-500 "></div>
        </div>
    )
}

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    // Pad with zeroes if needed
    const minutesString = String(minutes).padStart(2, '0')
    const secondsString = String(remainingSeconds).padStart(2, '0')

    return `${minutesString}:${secondsString}`
}

export default DailiesPage
