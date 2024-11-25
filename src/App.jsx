import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './page/HomePage.jsx'
import Footer from './components/Footer.jsx'
import ProductDetail from './page/ProductDetail.jsx'
import CartTab from './components/CartTab.jsx'
import CheckoutPage from './page/CheckoutPage.jsx'
import PurchaseSuccessPage from './page/PurchaseSuccess.jsx'

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
