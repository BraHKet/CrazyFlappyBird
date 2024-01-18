import { useEffect, useState, useRef } from 'react';
import Pipe from './Pipe';






const Bg = ({Gameover}) => {
  
  //Timer + scorrimento bg tramite x
  const [c1, setC1] = useState(1);
  const [c2, setC2] = useState(1);
  const [c3, setC3] = useState(1);
  const [c4, setC4] = useState(1);

  const [seconds, setSeconds] = useState(1);
  const [x, setX] = useState(0);


  useEffect(() => {

    const intervalId = setInterval(() => {                //setInterval(callback, delay)
      // Aggiorna lo stato per incrementare i secondi
      setSeconds(seconds + 1);
    }, 20);



    setX(x => x-(4+(seconds/1000)));   //avanza la posizione x


    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDim(rect.width);
      setAltbg(rect.height);
    }


    if(x+((dim*c1)+(dim/100*variabile1))<(-larPipe)) {
      setC1(c1+2);
      setVariabile1(Math.floor(Math.random() * 40) + 5); // Genera un numero casuale tra 5 e 45
      setAltezza1(Math.floor(Math.random() * 60) + 20);
    }
    if(x+((dim*c2)+(dim/100*variabile2))<(-larPipe)) {
      setC2(c2+2);
      setVariabile2(Math.floor(Math.random() * 40) + 55); // Genera un numero casuale tra 55 e 95
      setAltezza2(Math.floor(Math.random() * 40) + 20);
    }
    if(x+((dim*c3)+(dim/100*variabile3))<(-larPipe)) {
      setC3(c3+2);
      setVariabile3(Math.floor(Math.random() * 40) + 105); // Genera un numero casuale tra 105 e 145
      setAltezza3(Math.floor(Math.random() * 40) + 20);
    }
    if(x+((dim*c4)+(dim/100*variabile4))<(-larPipe)) {
      setC4(c4+2);
      setVariabile4(Math.floor(Math.random() * 40) + 155); // Genera un numero casuale tra 155 e 195
      setAltezza4(Math.floor(Math.random() * 40) + 20);
    }

    setFallRatio(fallRatio+0.5)
    setFall(fall+fallRatio);

  
    if (birdRef.current) {
      const bird = birdRef.current.getBoundingClientRect();
      //console.log(bird.y);
      //console.log(((x+((dim*c1)+(dim/100*variabile1)))-(larPipe/2)) + "---" +  bird.x + "---" + ((x+((dim*c1)+(dim/100*variabile1)))+(larPipe/2)) );
      if(bird.x > ((x+((dim*c1)+(dim/100*variabile1)))-(larPipe/2))  && bird.x < ((x+((dim*c1)+(dim/100*variabile1)))+(larPipe/2)) && (bird.y < altbg/100*altezza1 || bird.y > altbg/100*(altezza1+30)) ) {
        console.log("ok ci sono");
        setGameover(true);
        Gameover();
      }

      if(bird.x > ((x+((dim*c2)+(dim/100*variabile2)))-(larPipe/2))  && bird.x < ((x+((dim*c2)+(dim/100*variabile2)))+(larPipe/2)) && (bird.y < altbg/100*altezza2 || bird.y > altbg/100*(altezza2+30)) ) {
        console.log("ok ci sono");
        setGameover(true);
      }

      if(bird.x > ((x+((dim*c3)+(dim/100*variabile3)))-(larPipe/2))  && bird.x < ((x+((dim*c3)+(dim/100*variabile3)))+(larPipe/2)) && (bird.y < altbg/100*altezza3 || bird.y > altbg/100*(altezza3+30)) ) {
        console.log("ok ci sono");
        setGameover(true);
      }

      if(bird.x > ((x+((dim*c4)+(dim/100*variabile4)))-(larPipe/2))  && bird.x < ((x+((dim*c4)+(dim/100*variabile4)))+(larPipe/2)) && (bird.y < altbg/100*altezza4 || bird.y > altbg/100*(altezza4+30)) ) {
        console.log("ok ci sono");
        setGameover(true);
      }
    }
    
    


    // Pulisce l'intervallo quando il componente viene smontato
    return () => clearInterval(intervalId);

    
  }, [seconds]); // La dipendenza vuota assicura che l'effetto venga eseguito solo una volta all'avvio del componente






const birdRef = useRef(null);

  

const divRef = useRef(null);
const [dim, setDim] =useState(0);
const [altbg, setAltbg] = useState(0);
  


const [larPipe, setLarPipe] = useState(0);




const funzioneLarPipe = (lr) => {
  setLarPipe(lr);
}


const [variabile1, setVariabile1] = useState(0);
const [variabile2, setVariabile2] = useState(0);
const [variabile3, setVariabile3] = useState(0);
const [variabile4, setVariabile4] = useState(0);


const [altezza1, setAltezza1] = useState(60);
const [altezza2, setAltezza2] = useState(20);
const [altezza3, setAltezza3] = useState(50);
const [altezza4, setAltezza4] = useState(20);




useEffect(() => {
  setVariabile1(Math.floor(Math.random() * 40) + 5); // Genera un numero casuale tra 1 e 100
}, []);
useEffect(() => {
  setVariabile2(Math.floor(Math.random() * 40) + 55); // Genera un numero casuale tra 1 e 100
}, []);
useEffect(() => {
  setVariabile3(Math.floor(Math.random() * 40) + 105); // Genera un numero casuale tra 1 e 100 
}, []);
useEffect(() => {
  setVariabile4(Math.floor(Math.random() * 40) + 145); // Genera un numero casuale tra 1 e 100 
}, []);

/*
    {<Pipe Dim={dim} X={x+(dim+(dim/100*variabile1))} funzioneLarPipe={funzioneLarPipe}/>}
    {(variabile2-variabile1) < Math.floor(y) && <Pipe Dim={dim} X={x+((c1*dim)+(dim/100*(variabile2+Math.floor(y))))} funzioneLarPipe={funzioneLarPipe}/>}
    {(variabile2-variabile1) >= Math.floor(y) && <Pipe Dim={dim} X={x+(dim+(dim/100*variabile2))} funzioneLarPipe={funzioneLarPipe}/>}
    {(variabile3-variabile2) < Math.floor(y) && <Pipe Dim={dim} X={x+(dim+(dim/100*(variabile3+Math.floor(y))))} funzioneLarPipe={funzioneLarPipe}/>}
    {(variabile3-variabile2) >= Math.floor(y) && <Pipe Dim={dim} X={x+(dim+(dim/100*variabile3))} funzioneLarPipe={funzioneLarPipe}/>}

*/

const [fall, setFall] = useState(30);
const [fallRatio, setFallRatio] = useState(0);


const [gameover, setGameover] = useState(false);

const fallRatioFunc = () => {
  setFallRatio(-9);
}




  return ( 
    <div className="pagina" ref= {divRef} style={{backgroundPositionX: x+"px" }}>
      <button className="jump" onClick={() => {fallRatioFunc()}}></button>

    <div ref={birdRef} className="bird" style={{marginTop: fall}}>

    </div>

    {gameover===true && <h1>GAME OVER!</h1>}
    {gameover===false && <Pipe X={x+((dim*c1)+(dim/100*variabile1))} funzioneLarPipe={funzioneLarPipe} altezza={altezza1}/>}
    {gameover===false && <Pipe X={x+((dim*c2)+(dim/100*variabile2))} funzioneLarPipe={funzioneLarPipe} altezza={altezza2}/>}
    {gameover===false && <Pipe X={x+((dim*c3)+(dim/100*variabile3))} funzioneLarPipe={funzioneLarPipe} altezza={altezza3}/>}
    {gameover===false && <Pipe X={x+((dim*c4)+(dim/100*variabile4))} funzioneLarPipe={funzioneLarPipe} altezza={altezza4}/>}

  </div>
     );
}
 
export default Bg;