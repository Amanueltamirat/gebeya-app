import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './page/HomePage'
import Footer from './components/Footer'
import ProductDetail from './page/ProductDetail'
import CartTab from './components/CartTab'
import CheckoutPage from './page/CheckoutPage'
import PurchaseSuccessPage from './page/PurchaseSuccess'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:slug' element={<ProductDetail/>}/>
         <Route path='/cart' element={<CartTab/>}/>
         <Route path='/checkout' element={<CheckoutPage/>}/>
         <Route path='/purchase_success' element={<PurchaseSuccessPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App