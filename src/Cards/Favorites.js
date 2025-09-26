import { Heart } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { MoreVertical } from "lucide-react";
import React from 'react';
import './Favorites.css';

function FavoritesCard(){
    return(
        <>
        <div className="favorites-card">
       
            <img className='favorites-card-image' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
            <div className='favorites-card-content'>
               <div className='favorites-card-title'> <b>Large pizza</b></div>
                <MoreVertical size={24}color="black" className="drop-icon"/>
            </div>
            <div className='favorites-card-description'>Get your favorite pizza big at a discount today at GoGrub.</div>
               <hr className='favorites-horizontal-line'></hr>
             <div className='favorites-card-price'> <b>Ksh 2000 </b></div>
            <div className='favorites-icons'>
            <Heart size={16} colour="dark-gray"/>
            <div className='favorites-counter'>
                <button className='favorites-counter-button'><Minus size={16}/></button>
                <span className='favorites-quantity'>1</span>
                <button className='favorites-counter-button'><Plus size={16}/></button>
                </div>
            </div>
            <hr className='favorites-horizontal-line'></hr>
            <div className='favorites-order-button'>
               <button>Grub it!</button>
            </div>
        </div>
        
</>
    )
}

export default FavoritesCard;
