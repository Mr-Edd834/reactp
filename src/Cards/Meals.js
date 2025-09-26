import React from 'react';
import './Meals.css';    
import { Heart } from "lucide-react";
import { Plus, Minus } from "lucide-react";

function Card(){
    return(
        <>
        <div className="Card">
        
            <img className='card-image' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            <div className='card-content'>
               <div className='card-title'> <b>Large pizza</b></div>
            </div>
            <div className='card-description'>Get your favorite pizza big at a discount today at GoGrub.</div>
               <hr className='horizontal-line'></hr>
             <div className='card-price'> <b>Ksh 2000 </b></div>
            <div className='icons'>
            <Heart size={16} colour="dark-gray"/>
            <div className='counter'>
                <button className='counter-button'><Minus size={16}/></button>
                <span className='quantity'>1</span>
                <button className='counter-button'><Plus size={16}/></button>
                </div>
            </div>
            <hr className='horizontal-line'></hr>
            <div className='order-button'>
               <button>Grub it!</button>
            </div>
        </div>
        
</>
    )
}

export default Card;