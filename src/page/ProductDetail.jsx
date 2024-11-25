
import React, { useEffect, useState} from 'react' 
import { Link, useParams } from 'react-router-dom' 
import { products } from '../products.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart.js';

const ProductDetail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }));
    }
detail?.overview?.map((text)=>{
    console.log(text)
})
  return (
    <div className='bg-gray-100 pt-5 pb-5'>
        <div className='hidden lg:flex items-center text-gray-600 m-10'>
            <p>Home</p>
             <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3' width={10}   viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            <p>Kids</p>
             <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3' width={10}   viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            <p>Shoes</p>
             <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3' width={10}   viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            <p>Sneakers</p>
        </div>
        <div className='detail lg:flex-row sm:flex-col flex gap-10 m-10 '>
            <div className='flex border-2 justify-evenly lg:w-2/3 detail sm:w-full  border-gray-300 p-5 gap-5 rounded-xl bg-white'>
              <div className=''>
                <img src={detail.image} alt="" className='w-52 bg-gray-100 p-2'/>
                <div className='flex flex-col ml-1'>
                    <p className='text-sm text-gray-500'>share this product</p>
                 <div className="flex gap-2 pb-10 transition-all duration-300 mt-2">
                   <img className="hover:scale-125 bg-black size-4" src="/icons/insta.png" alt="instagram"/>
                   <img className="hover:scale-125 bg-black size-4"  src="/icons/whatsapp.png" alt="whatsapp"/>
                    <img className="hover:scale-125 bg-black size-4"  src="/icons/x.png" alt="x" />
                 </div>
                </div>
              </div>
              <div className='flex flex-col gap-5 max-w-md'>
                <div className='flex justify-between' >
                    <div className='border-b-2'>
                   <h1 className='text-2xl  font-light font-poppins'>{detail.name}</ h1>
                   <p className='text-sm mb-5'>Brand: <span className='font-bold'>{detail.type}</span></p>
                    </div>
                 <img src="/icons/gridicons_heart-outline.png" className='p-1 size-6 bg-amber-500 rounded-full' alt="heart" />
                </div>
                <div className='p-2'>
                 <p className='flex gap-2 items-center p-1'>
                    <span className='text-xl font-semibold'>${detail.price}</span> <span className='text-gray-400 line-through'>$300</span> <span className='bg-green-100 px-5 py-1 rounded-md text-green-900'>-50%</span>
                 </p>
                 <p className='text-sm text-green-900 p-1'>50 units left</p>
                 <p className='text-sm text-gray-500 p-1'>+ shipping fee may vary on location</p>
                 <p className='text-sm text-gray-500 flex p-1 border-b-2'><img src="/icons/star1.png" alt="" />{detail.rating}+rating</p>
                   </div>

                 <div className='flex gap-5'>
                    <p>Quantity:</p>
                    <div className='flex border-l-black'>
                        <button className='bg-amber-500 h-full w-10 font-bold text-xl  flex justify-center items-center border-y-black' onClick={handleMinusQuantity}>-</button>
                        <span className='bg-gray-200 h-full w-10 font-bold text-xl  flex justify-center items-center'>{quantity}</span>
                        <button className='bg-amber-500 h-full w-10 font-bold text-xl  flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                    </div>
                   </div>
                   <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <p>Size:</p>
                        <div className='flex gap-2'>
                            <button className='border-2 px-3 py-1 rounded-md'>20</button>
                            <button className='border-2 px-3 py-1 rounded-md'>25</button>
                            <button className='border-2 px-3 py-1 rounded-md'>32</button>
                            <button className='border-2 px-3 py-1 rounded-md'>37</button>
                        </div>
                       </div>
                       <p className='hidden lg:block'>see all size guides</p>
                    </div>
                    <div className='flex gap-2'>
                         <button className='border-2 text-black px-5 py-2 rounded-md hover:bg-gray-200' onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                    <Link to='/checkout' className='bg-amber-500 hover:bg-amber-700 text-white px-5 py-2 rounded-md '>Buy now</Link>
                    </div>
                    <p className='text-green-800 text-sm'>Pickup & Pay on collection available</p>
               </div>
            </div>
           <div className='detail p-5 border-2 border-gray-300 rounded-xl bg-white flex flex-col gap-5 sm:w-full lg:w-1/3'>
            <h2 className='flex justify-center text-2xl font-semibold border-b-2  '>Delivery & Returns</h2>
            <div className='m-5 flex flex-col'>
                <p className='text-2xl font-normal'>Loaction</p>
                <select className='border-2 border-gray-500 p-3 rounded-xl mb-5' name="location" id="location">
                    <option value="loaction">location</option>
                    <option value="Addis ababa">Addis ababa</option>
                    <option value="Hawassa">Hawassa</option>
                    <option value="Adama">Adama</option>
                </select>
                 <select className='border-2 border-gray-500 p-3 rounded-xl'  name="location" id="location">
                    <option value="sub-location">sub-location</option>
                    <option value="Addis ababa">Addis ababa</option>
                    <option value="Hawassa">Hawassa</option>
                    <option value="Adama">Adama</option>
                </select>
                <div>
                    <p className='flex gap-5'><img src="/icons/iconoir_delivery-truck.png" alt="delivery" className='w-5' /><span className='font-semibold text-xl'>Delivery</span></p>

                    <p className='flex flex-col gap-2 m-2 text-sm'>
                        <span>
                            Estimated delivery time is 1-12 business days
                        </span>
                        <span>
                            For Same-Day-Delivery: Please place your order before 12pm
                        </span>
                        <span>
                            Next-Day-Delivery: Orders placed after 12pm will be delivered the next day.
                        </span>
                        <span>
                        Note: Availability may vary by location
                        </span>
                    </p>
                </div>
                <div>
                    <p className='flex gap-5'><img src="/icons/hugeicons_delivery-return-01.png" alt="delivery" className='w-5' /> <span className='font-semibold text-xl'>Return policy</span></p>
                    <p className='flex flex-col gap-2 m-2 text-sm'>
                    <span>Guaranteed 7-day return policy</span>
                    <span>For details about return shipping options, </span>
                    <span>please visit our Contact page</span>
                    </p>
                </div>
            </div>
          
        </div>
        </div>


       <div className='bg-white m-10 border-2 border-gray-30 rounded-xl pb-10'>
        <div className='p-5 border-b-2'>
            <div>
                <button className='border-2 px-7 py-1 rounded-full hover:bg-amber-500 hover:text-white'>Overview</button>
                <button className='border-2 px-7 py-1 rounded-full hover:bg-amber-500 hover:text-white'>Description</button>
                <button className='border-2 px-7 py-1 rounded-full hover:bg-amber-500 hover:text-white'>Warranty</button>
                <button className='border-2 px-7 py-1 rounded-full hover:bg-amber-500 hover:text-white'>Reviews</button>
            </div>
            <ul className='list-disc m-5 text-gray-500'>
               {detail?.overview?.map((text,i)=> <li key={i}>{text}</li>
               )} 
            </ul>
        </div>
        <div className='m-10'>
            <h3 className=' pb-5 text-xl font-semibold'>Similar items you may like</h3>
            <div className='detail flex gap-5'>
                <div className='full w-1/3 border-2 rounded-xl'>
                    <div className='flex flex-col m-4 bg-gray-100 rounded-xl'>
                        <div className='flex justify-between m-4'>
                            <img className='w-9 h-9 bg-white p-2 rounded-full cursor-pointer' src="/icons/gridicons_heart-outline.png" alt="heart" />
                            <button className='bg-white px-2 py-2.5 rounded-full hover:bg-white'>In Stock</button>
                        </div>
                         <Link to='/' className='flex items-center justify-center -mt-16'>
                        <img className='w-56 h-60' src='/img/blue-shoe.png' alt='shoe' />
                        </Link>
                    </div>
                    <div className='flex justify-between m-4'>
                        <button className='text-gray-500 border-2 py-1 px-2.5 rounded-full'>Kids</button>
                        <p className='flex gap-1'><img className='w-5 h-5' src="/icons/star1.png" alt="start"/>2k+ rating</p>
                    </div>
                    <h3 className='mx-4 text-xl font-bold'>Bultin Blue</h3>
                    <p className='mx-4 text-gray-500 text-sm'>FENDI</p>
                    <div className='flex items-center justify-between m-4'>
                        <p className='font-bold text-xl'>$120</p>
                        <button onClick={handleAddToCart} className='hover:bg-amber-600 bg-amber-500 p-4 text-white font-semibold rounded-2xl'>Add to cart</button>
                    </div>
                </div>
                <div className='full w-1/3 border-2 rounded-xl'>
                    <div className='flex flex-col m-4 bg-gray-100 rounded-xl'>
                        <div className='flex justify-between m-4'>
                            <img className='w-9 h-9 bg-white p-2 rounded-full cursor-pointer' src="/icons/gridicons_heart-outline.png" alt="heart" />
                            <button className='bg-white px-2 py-2.5 rounded-full hover:bg-white'>In Stock</button>
                        </div>
                         <Link to={slug} className='flex items-center justify-center -mt-16'>
                        <img className='w-56 h-60' src='/img/pink-shoes.png' alt={slug} />
                        </Link>
                    </div>
                    <div className='flex justify-between m-4'>
                        <button className='text-gray-500 border-2 py-1 px-2.5 rounded-full'>Kids</button>
                        <p className='flex gap-1'><img className='w-5 h-5' src="/icons/star1.png" alt="start"/>2k+ rating</p>
                    </div>
                    <h3 className='mx-4 text-xl font-bold'>Pink cherry</h3>
                    <p className='mx-4 text-gray-500 text-sm'>FENDI</p>
                    <div className='flex items-center justify-between m-4'>
                        <p className='font-bold text-xl'>$180</p>
                        <button onClick={handleAddToCart} className='hover:bg-amber-600 bg-amber-500 p-4 text-white font-semibold rounded-2xl'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProductDetail