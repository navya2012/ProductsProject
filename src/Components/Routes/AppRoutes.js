import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import CategoryProducts from '../Pages/Home/Components/CategoryProducts'
import ProductDetails from '../Pages/Home/Components/ProductDetails'
import PageNotFound from './PageNotFound'
import Cart from '../Pages/Cart/Cart'
import { useSearchData } from '../Navbar/searchData/SearchProvider'
import SearchData from '../Navbar/searchData/SearchData'
import CartPayment from '../Pages/Cart/Components/CartPayment'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import FooterData from '../Footer/FooterData'
import Contact from '../Pages/Contact/Contact'


const AppRoutes = () => {

  const { searchInput, searchResults } = useSearchData()

  return (
    <>
      <Navbar/>
      {
        searchInput ? (
          <SearchData searchInput={searchInput} searchResults={searchResults} />
        ) : (
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/:categoryName' exact element={<CategoryProducts />} />
            <Route path='/:categoryName/:categoryProductName/:productName/:productId' exact element={<ProductDetails />} />
            <Route path='/cart' exact element={<Cart />} />
            <Route path='/checkout' exact element={<CartPayment />} />
            <Route path='/contact-us' exact element={<Contact />} />
            <Route path="/footer/:section" element={<FooterData/>  } />
            <Route path='*' exact element={<PageNotFound />} />
          </Routes>
        )
      }
      <Footer/>

    </>
  )
}

export default AppRoutes