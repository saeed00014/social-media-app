

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCards } from '../../store/dataSlice'
import { cardLoading } from '../../store/loadingSlice'

import HomePage from "./pages/home/home"
import CardPage from "./pages/card/card"
import Header from "./components/header"
import Footer from "./components/footer"
import Product from "./pages/product/product"

import axios from 'axios'

function AppS() {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleGetAllCard = async () => {
      await axios.get('http://127.0.0.1:8000/products', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      }).then((res) => dispatch(getAllCards(res.data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(cardLoading(false)))
    }
    handleGetAllCard()
  }, [])

  return (
    <BrowserRouter>
    <div style={{direction: 'rtl'}} className="[&>*]:bg-g_Background_White_Shop [&>*]:text-black [&>*]:font-sans [&>*]:font-[500]">
      <Header />
      <Routes>
        <Route path="/shop" element={<HomePage />} />
        <Route path="/shop/card" element={<CardPage />} />
        <Route path="/shop/product/*" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default AppS
