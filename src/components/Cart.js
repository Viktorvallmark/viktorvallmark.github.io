import React from "react";
import {auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

export const Cart = (props) => {

    const {cart, onAdd, onRemove} = props;

    const itemCost = cart.reduce(
        (a, c) => a + c.qty * c.price, 0
        );

    const shippingCost = itemCost > 1000 ? 0 : 50;
    const totalCost = shippingCost + itemCost;

    const logOut = async () => {
        try {
            await signOut(auth);
            alert("You are now logged out!");
        }
        catch (error) {
            console.error(error)
        }
    }

    const pay = (cost) =>{
        
        
        
        alert("You made a purchase, totalling "+ {cost} +"! You will now be logged out from your account.");
        logOut();

    }


    return (
        
        <aside>
            <h2>Items you've put in the cart so far</h2>
            <section> {cart.length === 0 && <div>Your cart is empty</div>} </section>
            <div>
                {cart.length === 0 && <div></div>}
                {cart.map((item) => (
                    <div key={item.id} className="row">
                        <div className="column2">{item.name}</div>
                        <div className="column2">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="column2 text-right">
                            {item.qty} * {item.price.toFixed(2)} SEK
                        </div>
                    </div>
                ))}
                {cart.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="column2"></div>
                            <div className="column1 text-right">{itemCost}SEK</div>
                        </div>
                        <div className="row">
                            <div className="column2">Cost of shipping</div>
                            <div className="column1 text-right">
                                {shippingCost.toFixed(2)}SEK
                            </div>
                        </div>

                        <div className="row">
                            <div className="column2">
                                <strong>Total Cost</strong>
                            </div>
                            <div className="column1 text-right">
                                <strong>{totalCost.toFixed(2)}SEK</strong>
                            </div>
                        </div>
                        <hr />
                    </>
                )}
                {cart.length > 0 && <button className='pay' onClick={() => pay(totalCost.toFixed(2))}>Pay</button>}
            </div>
        </aside>

    );

};