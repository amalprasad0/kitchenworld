
import './RowSec.css'
import React from "react";
import {sleek,mmt,asian,ebco,denwud,oxywud} from './UrlId'
function RowSec() {
 
    
  return (
    <>
    <div className='row'>
        <h2>Our Partners</h2>
        <div className='posters'>
        <img   className="mediumPoster" src={ebco} alt="Poster not found" />

        <img   className="mediumPoster" src={sleek} alt="Poster not found" />
        <img   className="mediumPoster" src={asian} alt="Poster not found" />
        <img   className="mediumPoster" src={mmt} alt="Poster not found" />
        <img  className='mediumPoster' src={oxywud} alt='not found' />
        <img  className='mediumPoster' src={denwud} alt='not found' />
       
        </div>
    </div>
    
</>

  )
}

export default RowSec
