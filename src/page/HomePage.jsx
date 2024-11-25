import ProductCart from "../components/ProductCart.jsx"
import { products } from "../products.js"
function HomePage() {
  return (
    <div className="mb-20 home">
    <div className='upper flex flex-col bg-purple-700 text-white items-center justify-center pb-10 gap-10 '>
        <div className='div lg:flex  lg:items-center justify-center gap-10 mt-20 mx-10'>
            <h1 className='sm:text-5xl lg:text-9xl font-bold'>Gebeya</h1>
            <img className='w-64 h-64 rounded-full grid' src="/img/person.jpg" alt="person" />
           <p className='max-w-md font-poppins text-xl'> Discover a world of convenience with our user-friendly platform,
             curaated collections, and exceptional customer service
            </p>
        </div>
        <div className='flex gap-20 items-center justify-center ml-20'>
            <img className='hidden lg:block rounded-full w-52 h-52' src="/img/shoee.jpeg" alt="shoee" />
            <button className='bg-amber-500 p-1 w-80 h-16 rounded-lg hover:bg-amber-600'>Explore Now</button>
            <div className='flex flex-col items-center'>
                <h1 className='shop sm:text-5xl lg:text-9xl font-bold'>SHOP</h1>
                <img className='hidden lg:block rounded-full w-48 h-48' src="/img/shirt.jpeg" alt="shirt" />
            </div>
        </div>
    </div>
    <div className='m-10'>
        <div>
            <div className='flex justify-between mb-10' >
                <h1 className='font-sans font-bold text-3xl'>Latest Collections</h1>
                <div className='flex gap-2'>  
                    <div className='bg-amber-500 rounded-l-2xl hover:bg-slate-200 cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3 ' width={10} viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </div> 
                    <div className='bg-amber-500 rounded-r-2xl hover:bg-slate-200 cursor-pointer' >
                     <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3' width={10}   viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </div>
                </div>
            </div>

            <div className='flex gap-5 font-poppins product'>
                 {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
            </div>
        </div>
        <div>

        </div>
    </div>
    <div className='mt-20 m-10 flex flex-col'>
        <div className='flex gap-10 my-10 category'>
            <button className='border-2 rounded-full text-black h-16 w-1/6 text-xl hover:bg-amber-500'>Men</button>
            <button className='border-2 rounded-full text-xl text-black h-16 w-1/6 hover:bg-amber-500'>Women</button>
            <button className='border-2 rounded-full text-xl text-black h-16 w-1/6 hover:bg-amber-500'>Kids</button>
            <button className='border-2 rounded-full text-xl text-black h-16 w-1/6 hover:bg-amber-500'>Perfumes</button>
            <button className='border-2 rounded-full text-xl text-black h-16 w-1/6 hover:bg-amber-500'>Sport</button>
            <button className='border-2 rounded-full text-xl text-black h-16 w-1/6 hover:bg-amber-500'>Jewelry</button>
        </div>
        <div className='flex flex-col gap-10 '>
            <div className='flex gap-5 item'>
                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 py-1 px-2 w-20 h-20 rounded-xl'  src="img/shoe.png" alt="shoe" />
                    <h3 className='text-xl font-semibold mb-2'>Shoes</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>
                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 py-0.2 px-0.4 w-20 h-20 rounded-xl'  src="img/Bag.png" alt="bags" />
                    <h3 className='text-xl font-semibold mb-2'>Bags</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/Jacket.webp" alt="jackets" />
                    <h3 className='text-xl font-semibold mb-2'>Jackets</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/lingrae.png" alt="Lingerie" />
                    <h3 className='text-xl font-semibold mb-2'>Lingerie</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/Belts.png" alt="Belts" />
                    <h3 className='text-xl font-semibold mb-2'>Belts</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/street_wear.png" alt="Street wear" />
                    <h3 className='text-xl font-semibold mb-2'>Street wear</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

            </div>
            <div className='flex gap-5 item'>
                <div className='flex flex-col items-center lg:w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/sunglasses.webp" alt="Sunglasses" />
                    <h3 className='text-xl font-semibold mb-2'>Sunglasses</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center lg:w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/sun_wear.webp" alt="Sun wear" />
                    <h3 className='text-xl font-semibold mb-2'>Sun wear</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center lg:w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/hat.png" alt="Hats" />
                    <h3 className='text-xl font-semibold mb-2'>Hats</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center lg:w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/slippers.png" alt="Slippers" />
                    <h3 className='text-xl font-semibold mb-2'>Slippers</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/wigs.webp" alt="Wigs" />
                    <h3 className='text-xl font-semibold mb-2'>Wigs</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>

                <div className='flex flex-col items-center w-48 h-52 border-2 rounded-xl '>
                    <img className='bg-gray-200 m-4 p-1 w-20 h-20 rounded-xl'  src="img/costmetics.png" alt="Cosmetics" />
                    <h3 className='text-xl font-semibold mb-2'>Cosmetics</h3>
                    <p className='text-sm text-gray-500'>See all collections</p>
                </div>
            </div>
        </div>
         <button className='bg-purple-700 w-28 flex justify-center items-center self-center mt-5 py-1 px-2 rounded-md text-gray-200 text-sm font-semibold hover:bg-purple-500'> <span >See More</span > <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
    </div>
    <div className='m-10 flex bg-gray-300 rounded-2xl relative' >
        <div className='flex flex-col gap-10 text-purple-700 m-10'>
            <h2 className='font-semibold tracking-wider text-3xl' >Our Curated Summer <br /> Collection</h2>
            <p className='tracking-wider text-lg'>Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.</p>
             <button className='bg-amber-500 p-1 w-52 h-10 rounded-lg text-white hover:bg-amber-600'>Explore Now</button>
        </div>
       <img className='hidden lg:block rounded-2xl'  src="/img/summer_advert.png" alt="summer" />
       <div>
        <div className='w-4 h-4 bg-amber-500 rounded-full absolute top-2 left-3/4 '></div>
        <div className='w-3 h-3 bg-amber-500 rounded-full absolute top-10 left-1/2'></div>
         <div className='w-3 h-3 bg-purple-700 rounded-full absolute top-1/3 left-2/3'></div>
          <div className='w-4 h-4 bg-purple-700 rounded-full absolute top-2/3 left-1/2'></div>
        <div className='w-2 h-2 bg-amber-500 rounded-full absolute top-1/2 left-3/4'></div>
        <div className='w-4 h-4 bg-purple-700 rounded-full absolute top-1/4 left-2/3'></div>
        <div className='w-2 h-2 bg-purple-700 rounded-full absolute top-1/4 left-1/2'></div>
        <div></div>
       </div>
    </div>
    <div className='m-10'>
        <div className='flex justify-between mb-10' >
                <h1 className='font-sans font-bold text-3xl'>Browse by category</h1>
                <div className='hidden lg:flex gap-4'>  
                    <div className='bg-amber-500 rounded-l-2xl hover:bg-slate-200 cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3 ' width={10} viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </div> 
                    <div className='bg-amber-500 rounded-r-2xl hover:bg-slate-200 cursor-pointer' >
                     <svg xmlns="http://www.w3.org/2000/svg" className='my-2 mx-3' width={10}   viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </div>
                </div>
            </div>
        <div className='item flex gap-5 mb-20'>
             <div className='flex flex-col items-center w-1/4 h-52 rounded-xl mb-28'>
                    <img className='bg-gray-200 m-4 rounded-xl p-2 hover:translate-y-1'  src="img/casual_shirt.png" alt="casual-wear" />
                    <h3 className='text-xl font-semibold mb-2'>Casual wear</h3>
                    <p className='text-sm text-gray-500'>Over 20 categories in stock</p>
                </div> 

                <div className='flex flex-col items-center w-1/4 h-52 rounded-xl '>
                    <img className='bg-gray-200 m-4 rounded-xl p-2'  src="img/vintage_dress.png" alt="vintage" />
                    <h3 className='text-xl font-semibold mb-2'>Vintage</h3>
                    <p className='text-sm text-gray-500'>Over 31 categories in stock</p>
                </div> 

                <div className='flex flex-col items-center w-1/4 h-52  rounded-xl '>
                    <img className='bg-gray-200 m-4 p-2 rounded-xl h-50'  src="img/beauty_products-removebg.png" alt="Beauty products" />
                    <h3 className='text-xl font-semibold mb-2'>Beauty products</h3>
                    <p className='text-sm text-gray-500'>Over 24 categories in stock</p>
                </div> 

                <div className='flex flex-col items-center w-1/4 h-52  rounded-xl '>
                    <img className='bg-gray-200 m-4 p-2  rounded-xl'  src="img/gym_wears.webp" alt="Gym wears" />
                    <h3 className='text-xl font-semibold mb-2'>Gym wears</h3>
                    <p className='text-sm text-gray-500'>Over 24 categories in stock</p>
                </div> 
        </div> 
    </div>
    </div>
  )
}

export default HomePage