import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export default function Product(props) {
    const [user] = useAuthState(auth);
    const {product, onAdd, onRemove} = props;
  return (
    <div>
        <img className='shoeImage' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>{product.price} SEK</div>
        {user != null && <button onClick = {() => onAdd(product)}>Add to cart</button>}
    </div>
  )
}
