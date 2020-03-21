import React, { useEffect, useState } from 'react';
import axios from "axios";


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
    console.log('players', players)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {players.map(x=><li key={x.id}>{x.name}</li>)}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
