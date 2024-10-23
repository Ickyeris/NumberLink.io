import { BoardData } from "../../types/boardData";


// Define test board data
export const testBoardData: BoardData[] = [
    {
        rows: 4,
        columns: 4,
        colors: {
            "red": [8, 12],
            "blue": [1, 2],
        }
    },
    {
        rows: 3,
        columns: 3,
        colors: {
            "green": [0, 5],
            "yellow": [2, 1],
        }
    },
    {
        rows: 5,
        columns: 5,
        colors: {
            "purple": [3, 4],
            "orange": [2, 6],
            "black": [0, 1],
        }
    },
    // Add more test cases as needed
];