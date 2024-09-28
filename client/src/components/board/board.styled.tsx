import styled from "styled-components";

const COLORS = {
    square1: '#e6e6e6',
    square2: '#ffffff',
    // Add more colors as needed
  };


interface BoardContainerProps {
    aspectratio: number
    iswider: boolean
}

interface SquareProps {
    iseven: Boolean
}


export const BoardOuterContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BoardInnerContainer = styled.div<BoardContainerProps>`
    position: relative;
    display: flex;
    height: ${({iswider}) => iswider ? '100%' : 'auto'};
    width: ${({iswider}) => iswider ? 'auto' : '100%'};
    aspect-ratio:  ${(props) => props.aspectratio};
    background-color: red;
`


export const PlayerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

