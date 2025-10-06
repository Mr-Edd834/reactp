import react from "react";  
import './CheckoutCard.css'
import { Plus, Minus } from "lucide-react";
import { useState } from "react";   

function CheckoutCard(){
      const [quantity, setQuantity] = useState(0);
    
          const increase = () => {
        setQuantity((prev) => prev + 1);
      };
    
      const decrease = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
      };

return(
    <>
<div className="checkout-card">
<img className="checkout-card-image" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

<div className="checkout-card-title">
<b>Large Pizza</b>
</div>
<div className="checkout-card-price">
<h3>Ksh 2000</h3>
</div>
 <div className='checkout-counter'>
                <button className='checkout-counter-button' onClick={decrease}><Minus size={16}/></button>
                 <span className="checkout-quantity">{quantity}</span>
                <button className='checkout-counter-button' onClick={increase}><Plus size={16}/></button>
                </div>
<div className="checkout-total">
    <h3>Total: Ksh 2000</h3>
</div>
</div>
</>
)

}

export default CheckoutCard;