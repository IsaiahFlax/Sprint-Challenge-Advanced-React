import React, { useEffect, useState } from 'react';
import axios from "axios";
import Players from './Players'
import Navbar from './Navbar'


function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/players"
      )
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
  }, []);
    
  const newPlayersArray = players.map(x=>x = {...x, ...{clicked: false}})

  console.log('players', newPlayersArray)

  return (
    <div className="App">
      <header >
        <Navbar />
        <Players players={newPlayersArray}/>
      </header>
    </div>
  );
}

export default App;
