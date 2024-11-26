import React, { useEffect } from 'react' 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart.js';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart);
    console.log(carts)
    const {id, name,rating, price, image, slug,type,category} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    return (
    <div className='product-cart w-1/3 border-2 rounded-xl product-cart'>
                    <div className='flex flex-col m-4 bg-gray-100 rounded-xl hover:scale-x-90'>
                        <div className='flex justify-between m-4'>
                            <img className='w-9 h-9 bg-white p-2 rounded-full cursor-pointer' src="/icons/gridicons_heart-outline.png" alt="heart" />
                            <button className='bg-white px-2 py-2.5 rounded-full hover:bg-white'>In Stock</button>
                        </div>
                         <Link to={slug} className='flex items-center justify-center -mt-16'>
                        <img className='w-56 h-60' src={image} alt={slug} />
                        </Link>
                    </div>
                    <div className='flex justify-between m-4'>
                        <button className='text-gray-500 border-2 py-1 px-2.5 rounded-full'>{category}</button>
                        <p className='flex gap-1'><img className='w-5 h-5' src="/icons/star1.png" alt="start"/>{rating}+ rating</p>
                    </div>
                    <h3 className='mx-4 text-xl font-bold'>{name}</h3>
                    <p className='mx-4 text-gray-500 text-sm'>{type}</p>
                    <div className='flex items-center justify-between m-4'>
                        <p className='font-bold text-xl'>{price}</p>
                        <button onClick={handleAddToCart} className='hover:bg-amber-600 bg-amber-500 p-4 text-white font-semibold rounded-2xl'>Add to cart</button>
                    </div>
                </div>
  )
}

export default ProductCart