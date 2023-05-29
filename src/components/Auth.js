import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import React from "react";
import Product from './Product';


export const Auth = (props) => {

    const {products, onAdd} = props;

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch (e){
            console.error(e);
        }
    };

    return(
        <div>
            <header>
                <h1>Welcome to Viktor's shoe shop!</h1>
                <button className="log-in" onClick={signInWithGoogle}> Sign in with Google</button>
            </header>

            <section className='product-list'>
                <label for="merrell">Gray shoe from Merrell</label>
                <img name="merrell" src='https://image-resizing.booztcdn.com/merrell/merm48831_cblack.jpg?has_grey=1&has_webp=0&size=w400'/>

                <label for="reebok">Black shoe from Reebok</label>
                <img name="reebok" src='https://image-resizing.booztcdn.com/reebok/rcseh0863_cblackcdgry5croyal.jpg?has_grey=1&has_webp=0&size=w400'/>

                <label for="fila">White shoe from Fila</label>
                <img name="fila" src='https://image-resizing.booztcdn.com/fila-footwear/ffrffm0003_cwhite_v10004.jpg?has_grey=1&has_webp=0&size=w400'/>

                <label for="adidas">Crazy shoe from Adidas</label>
                <img name="adidas" src='https://image-resizing.booztcdn.com/adidas/adigy9205_cpulolilingrncblack.jpg?has_grey=1&has_webp=0&size=w400'/>

                <label for="tretorn">Black boots from Tretorn</label>
                <img name="tretorn" src='https://image-resizing.booztcdn.com/tretorn/tre473130_c010black_v10.jpg?has_grey=1&has_webp=0&size=w400'/>
            </section>
            
        </div>
    );

};