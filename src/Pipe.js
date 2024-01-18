import { useEffect, useRef } from "react";

const Pipe = ({X, funzioneLarPipe, altezza}) => {



    const x = X;
    const divRefPipe = useRef(null);

    useEffect(() => {
        if (divRefPipe.current) {
          const rect = divRefPipe.current.getBoundingClientRect();
          funzioneLarPipe(rect.width);
        }

        
      },[]);            //troppe volte


    return ( 
        <div>
        <div className="ostacoloSopra" ref={divRefPipe} style={{left: (x)+"px", height: altezza+"%"}} />
        <div className="ostacoloSotto" style={{left: (x)+"px", height: (100-altezza-30)+"%"}} />
        </div>
     );
}
 
export default Pipe;