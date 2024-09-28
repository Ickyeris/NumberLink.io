
import React, { useState } from "react";
import { PlayerType } from "../../types/playerType";
import { PlayerContainer } from "./player.styled";



const Player = (props: PlayerType) => {
    const [x, setX] = useState(props.startingX);
    const [y, setY] = useState(props.startingY);
    


    return (
        <PlayerContainer x={x} y={y} cellSize={props.cellSize}>
            TEST
        </PlayerContainer>
    )
}

export default Player;