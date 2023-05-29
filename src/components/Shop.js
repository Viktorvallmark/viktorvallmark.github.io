import React, {useState} from 'react';
import {auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Product from './Product';



export const Shop = (props) => {

    const [user] = useAuthState(auth);
    const {products, onAdd, onRemove} = props;


    const logOut = async () => {
        try {
            await signOut(auth);
            alert("You are now logged out!");
        }
        catch (error) {
            console.error(error)
        }
    }


    return (
        
        <main>
            <button className='sign-out' onClick={() => logOut()}>Sign out</button>
            <h1>Welcome {user.displayName}!</h1>

            <div className='product-list'>
                {products.map((product) => (
                    <Product key={product.id} onAdd = {onAdd} onRemove= {onRemove} product = {product} />
                )
                )}
            </div>
            
        </main>
        

    );
};