import React, { useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';


const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
console.log(carts)

  return (
    <div className='bg-gray-200 shadow-2xl h-screen p-10'>
        {/* <h2 className='p-5  text-2xl'>Shopping Cart</h2> */}
        <div className='flex items-center justify-center gap-10'>
            <div className='p-5 flex flex-col gap-5'>
                {carts.map((item, key) =>  
                   <CartItem key={key} data={item}/>)}
                { carts.length > 0 ? 
                 <div className='flex gap-5'>
                <Link to='/' className='bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-700'>CLOSE</Link>
                <Link to='/checkout' className='bg-amber-600 text-white px-5 py-2 rounded-xl hover:bg-amber-800'>CHECKOUT</Link>
                 </div>:
                 <div className='w-52 bg-white p-10'>
                    <h2 className='text-2xl font-semibold'>Your cart is Empty </h2>
                    <Link className='text-green-600 outline-none' to='/'>Go to shopping page</Link>
                 </div>
                }
            </div>
           
        </div>
    </div>
  )
}

export default CartTab