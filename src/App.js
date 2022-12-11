import React, {Fragment , useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown , setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartIsShown = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartIsShown}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;


//ab aisi function hum 'cart' hi use karengy q ka cart bidefault screen par aaya hai
//Agar hum cartIsShown ko remove krdain to card dobara screen par aayega  
//hum ny header par is liye function ko lagaya ka jab user header par click karain to card show hoga 
//cart par hum ny go hidecartIsShown function leya hai wo apply karengy
//is ka bad hum agar chahain ka backdrop ho, agar hum screen par click karain to b cart khatam hojaye to hum Modal.js mai ja kr props.onClose ko use karengy