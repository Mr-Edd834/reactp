import React from 'react';
import './Card.css';    

function Card(){
    return(
        <div className="Card">
        
            <img className='card-image' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            <div className='card-content'>
            <p>This is a card component.</p>
            </div>
        </div>

    )
}

export default Card;