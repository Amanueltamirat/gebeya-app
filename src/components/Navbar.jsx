import  { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'

import { useSelector } from 'react-redux';
import  { Link }  from 'react-router-dom'
import { SidebarData } from './SidebarData.jsx';

function Navbar() {

 const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {setSidebar(!sidebar)
  console.log('clicked')
  };




const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
  



  return (
     <div className='nav-container flex justify-center items-center gap-5 py-4'>
          <IconContext.Provider value={{ color: '#000000' }} className=''>
          <div className='hidden menu-var'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars color='black' onClick={showSidebar} className='text-black' />
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
        <div>
              <Link to='/' className="text-5xl logo">
              <img className='w-10 h-8' src="/img/logo.png" alt="logo" />
              </Link>
        </div>
          <div className='register flex items-center mx-2 gap-1' >
              <img className='' src="/icons/Vector.png" alt="vector" />
              <p className=' text-xl flex' ><span>Register/Sign-</span> <span>in</span></p>
              <div className=" dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <a href="#">Register</a>
                      <a href="#">Sign in</a>
                  </div>
                  </div>
          </div>
          <nav className='flex gap-2'>
              <Link className='text-xl hover:text-gray-300' to='/'>Home</Link>
              <Link className='text-xl hover:text-gray-300' to='/man'>Man</Link>
              <Link className='text-xl hover:text-gray-300' to='/women'>Women</Link>
              <Link className='text-xl hover:text-gray-300' to='/kids'>Kids</Link>
              <Link className='text-xl hover:text-gray-300' to='/accessories'>Accessories</Link>
              <Link className='flex gap-1 items-center text-xl hover:text-gray-300' to='/more'><span>More</span>
                  <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                  <div className="dropdown-content">
                      <a href="#">Perfumes</a>
                      <a href="#">Jewelries</a>
                      <a href="#">GYM wears</a>
                      <a href="#">Vintage wears</a>
                      <a href="#">Sport wears</a>
                      <a href="#">Pyjamas</a>
                      <a href="#">Slippers</a>
                  </div>
                  </div>
                  </Link>
          </nav>
          <div className='flex relative'>
              <img className='absolute left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3' src="/icons/search.png" alt="search-icon" />
              <input type="text" placeholder='Search' className='pl-5 pr-2 py-1 input border  rounded-l-full border-gray-300 focus:outline-none focus:border-blue-500  w-44' />
              <div className='hidden lg:block bg-purple-700 w-10 rounded-r-full'>
                <svg className='text-white py-2 px-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>

          </div>

          <div className='currency flex items-center gap-1'>
              <img src="/icons/uk.png" alt="uk"  />
              <p className='text-xl hover:text-gray-300' >EN/Currency</p>
                <div className="dropdown cursor-pointer">
                  <div className='dropbtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
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