import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../stores/cart';

function CheckoutPage() {

    const dispatch = useDispatch();
    // const carts = useSelector(store => store.cart.items);
    // console.log(carts)
    const handleClaear = ()=>{
         dispatch(clearCart());
        
    }

  return (
    <div className='detail sm:flex-col lg:flex-row bg-gray-200 p-10 flex gap-10'>
        <div className='detail sm:w-full xll:w-2/3 lg:w-2/3 flex flex-col gap-5'>
            <div className='border-2 border-gray-300 bg-white rounded-xl flex flex-col gap-5 p-5'>
                <h2 className='text-xl font-semibold'>Shipping Address</h2>
                <div>
                    <form className='flex flex-col gap-5'>
                        <label className='font-semibold'>Name</label>
                        <input className='outline-none border-2 px-5 py-3 rounded-xl' type="text" name="" id="" placeholder='First & Last Name'/>
                        <label className='font-semibold'>Address 1</label>
                        <input className='outline-none border-2 px-5 py-3 rounded-xl' type="text" name="" id="" placeholder='Hawassa, Ethiopia'/>
                        <label className='font-semibold'>Address 2</label>
                        <input className='outline-none border-2 px-5 py-3 rounded-xl' type="text" name="" id="" placeholder='04,Alamura'/>
                    </form>
                    <div className='detail flex gap-5 mt-5'>
                        <div className='flex flex-col gap-2'>
                          <label className='font-semibold'>City</label>
                        <input className='outline-none border-2 px-5 py-2 rounded-xl' type="text" name="" id="" placeholder='Enter city'/>  
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>State</label>
                          <select className='outline-none border-2 px-5 py-3 rounded-xl' name="" id="">
                            <option value="state">Select State</option>
                          </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <label className='font-semibold'>Zip</label>
                        <input className='outline-none border-2 px-5 py-2 rounded-xl' type="text" name="" id="" placeholder='Zip code'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-2 border-gray-300 bg-white rounded-xl flex flex-col gap-5 p-5 mb-10'>
                <div>
                <h2 className='text-xl font-semibold'>Payment method</h2>
                <div>
                    <div className='btns flex gap-5 mb-5'>
                        <button className='bg-amber-500 py-4 px-14 text-white rounded-xl border-2 border-gray-400 flex flex-col items-center w-1/3'><img src="/icons/card.png" alt="card" /><span className='text-sm'>Card</span></button>
                        <button className='bg-amber-500 py-4 px-14 text-white rounded-xl border-2 border-gray-400 flex flex-col items-center w-1/3'><img src="/icons/wallet.png" alt="wallet" /><span className='text-sm'>Wallet</span></button>
                        <button className='bg-amber-500 py-4 px-14 text-white rounded-xl border-2 border-gray-400 flex flex-col items-center w-1/3'><img src="/icons/bank.png" alt="bank" /><span className='text-sm'>Bank transfer</span></button>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-'>
                          <label className='font-semibold'>Name on card</label>
                        <input className='outline-none border-2 px-5 py-2 rounded-xl' type="text" name="" id="" placeholder='Enter city'/>  
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Card number</label>
                          <input className='outline-none border-2 px-5 py-2 rounded-xl' type="text" name="" id="" placeholder='0000 0000 0000 0000'/> 
                        </div>
                        <div className='detail flex items-center gap-5'>
                                <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>Expiry</label>
                                <input className='outline-none border-2 px-5 py-2 rounded-xl' type="date" name="" id="" placeholder='MM'/>
                                    </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-semibold'>Year</label>
                                <input className='outline-none border-2 px-5 py-2 rounded-xl' type="date" name="" id="" placeholder='YYY'/>
                                    </div>
                                <div className='flex flex-col gap-2'>
                                <label className='font-semibold'>CVV</label>
                                <input className='outline-none border-2 px-5 py-2 rounded-xl' type="text" name="" id="" placeholder='cvv'/>
                              </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </div>
        <div className='bg-white border-2 border-gray-300 sm:w-full max-h-screen lg:w-1/3 p-5 rounded-xl flex flex-col'>
        <div className='w-full'>
            <h2 className='font-semibold text-xl flex justify-center border-b-2 mb-5 pb-4'>Order Summery</h2>
        </div>
            <div>
                <div className='flex gap-10'>
                    <img className='w-20 bg-gray-300 p-2 rounded-xl' src="/img/Burberry_Shine.png" alt="" />
                    <div>
                        <p className='text-xl font-semibold'>Burberry Shine</p>
                        <p className='text-gray-400'>FENDI</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5 mt-5 mb-5 border-b-2' >
                    <p className='flex justify-between'><span className='text-gray-400'>Subtotal</span> <span>$150</span></p>
                    <p className='flex justify-between'><span className='text-gray-400'>Shipping</span> <span>$10</span></p>
                    <p className='flex justify-between mb-5'><span className='text-gray-400'>Tax</span> <span>$5</span></p>
                </div>
            </div>
            <div>
                <p className='flex justify-between'><span>Total</span> <span>$165</span></p>
            </div>
            <Link onClick={()=>handleClaear()} to='/purchase_success' className='bg-amber-500 text-white p-5 m-5 rounded-xl hover:bg-amber-700'>Place order</Link>
        </div>
    </div>
  )
}

export default CheckoutPage