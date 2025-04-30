import React from 'react'
import Table from '../Components/Table'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {

    const [products, setProducts] = useState([])
    const apiData = () => {
        axios.get('https://dummyjson.com/products').then((response) => {
            setProducts(response.data.products)
        })
    }

    useEffect(() => {
      apiData();
    }, []);
    

  return (
    <>
        <Table productData={products}/>
    </>
  )
}

export default Home
