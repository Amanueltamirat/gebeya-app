import  { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'

import { useSelector } from 'react-redux';
import  { Link }  from 'react-router-dom'
import { SidebarData } from './SidebarData.jsx';

function Navbar() {

 const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);




const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
  



  return (
     <div className='flex justify-between items-center gap-5 px-14 py-5'>
        <IconContext.Provider value={{ color: '#fff' }} className=''>
        <div className='navbar xl:hidden lg:hidden'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} className='text-black' />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span className='text-black'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
            <Link to='/' className="text-5xl">
            <img className='w-16 h-8' src="/img/logo.png" alt="logo" />
            </Link>
        <div className='hidden xl:flex lg:flex items-center mx-2 gap-1' >
            <img className='' src="/icons/Vector.png" alt="vector" />
            <p className=' text-xl flex' ><span>Register/Sign-</span> <span>in</span></p>
            <div className=" dropdown cursor-pointer">
                <div className='dropbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
                <div className="dropdown-content">
                    <a href="#">Register</a>
                    <a href="#">Sign in</a>
                </div>
                </div>
        </div>
        <nav className='hidden lg:flex gap-2'>
            <Link className='text-xl hover:text-gray-300' to='/'>Home</Link>
            <Link className='text-xl hover:text-gray-300' to='/man'>Man</Link>
            <Link className='text-xl hover:text-gray-300' to='/women'>Women</Link>
            <Link className='text-xl hover:text-gray-300' to='/kids'>Kids</Link>
            <Link className='text-xl hover:text-gray-300' to='/accessories'>Accessories</Link>
            <Link className='text-xl hover:text-gray-300' to='/more'>More</Link>
        </nav>
        <div className='flex relative sm:w-1/2'>
            <img className='absolute left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3' src="/icons/search.png" alt="search-icon" />
            <input type="text" placeholder='Search' className='pl-5 pr-2 py-1 input border  xl:rounded-l-full lg:rounded-l-full border-gray-300 focus:outline-none focus:border-blue-500  w-44' />
            {/* <img className='bg-purple-700' src="/icons/search.png" alt="search" /> */}
            <div className='hidden lg:block bg-purple-700 w-10 rounded-r-full'>
               <svg className='text-white py-2 px-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>
            </div>

        </div>

        <div className='hidden xl:flex lg:flex items-center gap-1 mx-5'>
            <img src="/icons/uk.png" alt="uk"  />
            <p className='text-xl hover:text-gray-300' >EN/Currency</p>
              <div className="dropdown cursor-pointer">
                 <div className='dropbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
                <div className="dropdown-content">
                    <a href="#">USD</a>
                    <a href="#">Birr</a>
                </div>
                </div>

        </div>
        <div className='flex'>

<Link to='/cart'
    className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out bg-purple-700 rounded-full '
>
    {/* <img className='inline-block mr-1 group-hover:text-emerald-400 fill-red-700 ' src='/icons/cart.png' /> */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 p-2 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

    <span
        className='absolute -top-1 left-4 bg-red-500  text-white rounded-full px-1 py-0.3 text-xs bg-red'
    >
        {totalQuantity}
    </span>

</Link>

        </div>
    </div>
    )
}

export default Navbar