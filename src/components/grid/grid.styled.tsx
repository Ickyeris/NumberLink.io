import styled from "styled-components";

const COLORS = {
    square1: '#e6e6e6',
    square2: '#ffffff',
    // Add more colors as needed
  };

interface SquareProps {
    isEven: boolean;
}

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 columns of equal width */
    grid-gap: 0px; /* Space between squares */
    width: 100%; /* Adjust as needed */
    height: auto;
    margin: 0 0;
    box-sizing: border-box;
`


export const Square = styled.div<SquareProps>`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: solid;
    border-color: black;
    border-width: 1px;
    box-sizing: border-box;
    background-color: ${(props) => (props.isEven ? COLORS.square1 : COLORS.square2)};
`