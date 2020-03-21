import React from 'react'
import Player from './Player'
const Players = (players) => {
    return(
        <div>
             {players.players.map(x=><Player key={x.id} player={x} />)}
        </div>
    )
}

export default Players;