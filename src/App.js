import {useState} from 'react';
import { Auth } from './components/Auth';
import { auth } from './config/firebase';
import { Cart } from './components/Cart';
import {Shop} from './components/Shop';
import { useAuthState } from 'react-firebase-hooks/auth';
import data from './config/data';


function App() {
  
  const {products} = data;
  const [user] = useAuthState(auth);
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    <div className="App">
      {user ? <Shop onAdd = {onAdd} onRemove= {onRemove} products={products}/> : <Auth />}
      {user != null && <Cart onAdd = {onAdd} onRemove= {onRemove} cart = {cart}/>}
    </div>
  );
}

export default App;
