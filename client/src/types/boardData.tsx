
const COLORS = {
    RED: 'rgb(202, 13, 13)',
    BLUE: 'blue',
    GREEN: 'green',
    // Add more colors as needed
};

export interface BoardData {
    rows: number,
    columns: number,
    colors: { // The starting positions of each color
        [color: string] : [number, number] 
    }
}