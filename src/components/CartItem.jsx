import React, {useState, useEffect} from 'react' 
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity,removeItem } from '../stores/cart';
// import { getTotals } from '../stores/cart';
const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }


const handleRemovale = (quantity)=>{
    console.log(quantity)
    dispatch(removeItem(quantity))
}


  

  return (
    <div className='cart-item flex justify-between items-center bg-white  p-2 border-b-2 border-slate-700 gap-5 rounded-md w-full'>
        <img src={detail.image} alt="" className='w-12'/>
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className='flex gap-2 items-center'>
            <button className='border-2 bg-amber-500 hover:bg-amber-700 text-white px-5 py-2 rounded-md 'onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='border-2 bg-amber-500 hover:bg-amber-700 text-white px-5 py-2 rounded-md ' onClick={handlePlusQuantity}>+</button>
             <button className='border-2 bg-red-500 hover:bg-red-700 text-white px-5 py-2 rounded-md' onClick={()=>handleRemovale(props.data)}>Remove</button>
        </div>
        
    </div>
  )
}

export default CartItem