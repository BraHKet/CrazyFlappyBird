import './App.css';
import Bg from './bg';
import { useState } from 'react';


function App() {

  const [gameover, setGameover] = useState(false);

  const Gameover = () => {
    setGameover(true);
  }

  return (
    <div>
      {gameover===false && <Bg Gameover={Gameover}/>}
      {gameover===true && <h1>GAME OVER!</h1>}
    </div>
  );
}

export default App;
