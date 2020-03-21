import React from 'react'

const Player = (player) => {
    function toggleClicked() {
        console.log(player.player.name, player.player.clicked);
        player.player.clicked = !player.player.clicked;
    }
    return(
        <div onClick={toggleClicked}>
            {player.player.name} is from {player.player.country}
            
        </div>
    )
}

export default Player;